import * as passport from "passport";
// const this.router = express.Router();
// Load Validation
// import * as validateProfileInput from './../validation/profile'
// Load Profile Model
import { Profile } from '../../models/Profile';
// Load User Model
import { User } from '../../models/User';


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



// export const ProfileRoute = this.router;

import { BaseRoute } from './routes';

export class ProfileRoute extends BaseRoute {

  public static path = '/';
  private static instance: ProfileRoute;

  private constructor() {
    super();
    this.init();
  }

  static get router() {
    //applying singleton method to create only one instance of the this.router class
    if (!ProfileRoute.instance) {
      ProfileRoute.instance = new ProfileRoute();
    }
    return ProfileRoute.instance.router;
  }

  private init() {

    // @route   GET api/profile/test
    // @desc    Tests profile route
    // @access  Public
    this.router.get('/test', (req, res) => res.json({ msg: 'Profile Works' }));

    // @route   GET api/profile
    // @desc    Get current users profile
    // @access  Private
    this.router.get(
      '/',
      passport.authenticate('jwt', { session: false }),
      (req, res) => {
        let errors: errors;

        Profile.findOne({ user: req.user['id'] })
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
    this.router.get('/all', (req, res) => {
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

    this.router.get('/handle/:handle', (req, res) => {
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

    this.router.get('/user/:user_id', (req, res) => {
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
    this.router.post(
      '/',
      passport.authenticate('jwt', { session: false }),
      (req, res) => {
        // const { errors, isValid } = validateProfileInput(req.body);
        // if (!isValid) {
        //   return res.status(400).json(errors);
        // }
        let errors = { handle: "", };
        // Get fields
        let profileFields: profile;
        profileFields.user = req.user['id'];
        if (req.body.handle) profileFields.handle = req.body.handle;
        if (req.body.company) profileFields.company = req.body.company;
        if (req.body.website) profileFields.website = req.body.website;
        if (req.body.location) profileFields.location = req.body.location;





        // Create or Edit current user profile with unique handle
        Profile
          .findOne({ user: req.user['id'] })
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
                  // if (profile.handle !== p.handle) {
                  //   errors.handle = 'handle already exists';
                  //   res.status(400).json(errors);
                  // }
                });
              Profile
                .findOneAndUpdate(
                  { user: req.user['id'] },
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
    this.router.delete(
      '/',
      passport.authenticate('jwt', { session: false }),
      (req, res) => {
        Profile.findOneAndRemove({ user: req.user['id'] }).then(() => {
          User.findOneAndRemove({ _id: req.user['id'] }).then(() =>
            res.json({ success: true })
          );
        });
      }
    );
  }
}