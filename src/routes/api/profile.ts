import * as express from "express";
import * as mongoose from "mongoose";
import * as passport from "passport";
const router = express.Router();
// Load Validation
const validateProfileInput = require('../../validation/profile');
// Load Profile Model
const Profile = require('../../models/Profile');
// Load User Model
const User = require('../../models/User');


/**
 * Interfaces 
 */
interface errors {
  noprofile: string,
}

interface profile {
  user: string,
  username: string,
  website: string,
  location: string,
  company: string,
  date: string,
  handle: string
}

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Profile Works' }));

// @route   GET api/profile
// @desc    Get current users profile
// @access  Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    let errors: errors;

    Profile.findOne({ user: req.user.id })
      .populate('user', ['name', 'avatar'])
      .then(profile => {
        if (!profile) {
          errors.noprofile = 'There is no profile for this user';
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route   GET api/profile/all
// @desc    Get all profiles
// @access  Public
router.get('/all', (req, res) => {
  let errors: errors;

  Profile.find()
    .populate('user', ['name',])
    .then(profiles => {
      if (!profiles) {
        errors.noprofile = 'There are no profiles';
        return res.status(404).json(errors);
      }

      res.json(profiles);
    })
    .catch(err => res.status(404).json({ profile: 'There are no profiles' }));
});

// @route   GET api/profile/handle/:handle
// @desc    Get profile by handle
// @access  Public

router.get('/handle/:handle', (req, res) => {
  let errors: errors;

  Profile.findOne({ handle: req.params.handle })
    .populate('user', ['name',])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Public

router.get('/user/:user_id', (req, res) => {
  let errors: errors;

  Profile.findOne({ user: req.params.user_id })
    .populate('user', ['name',])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err =>
      res.status(404).json({ profile: 'There is no profile for this user' })
    );
});

// @route   POST api/profile
// @desc    Create or Edit user profile
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);
    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    let profileFields: profile;
    profileFields.user = req.user.id;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.company) profileFields.company = req.body.company;
    if (req.body.website) profileFields.website = req.body.website;
    if (req.body.location) profileFields.location = req.body.location;





    // Create or Edit current user profile with unique handle
    Profile
      .findOne({ user: req.user.id })
      .then(profile => {
        // If profile not exist, then create a new one, Otherwise just update 

        // Create new profile
        if (!profile) {
          // Check if handle exists (handle should be unique for all profile)
          Profile
            .findOne({ handle: profileFields.handle })
            .then(profile => {
              if (profile) {
                errors.handle = 'handle already exists';
                res.status(400).json(errors);
              }
            });
          new Profile(profileFields).save().then(profile => res.json(profile));
        }
        // Update the profile
        else {
          // Check if handle exists for other user
          Profile
            .findOne({ handle: profileFields.handle })
            .then(p => {
              if (profile.handle !== p.handle) {
                errors.handle = 'handle already exists';
                res.status(400).json(errors);
              }
            });
          Profile
            .findOneAndUpdate(
              { user: req.user.id },
              { $set: profileFields },
              { new: true }
            )
            .then(profile => res.json(profile));
        }
      });
  }
);


// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true })
      );
    });
  }
);

module.exports = router;