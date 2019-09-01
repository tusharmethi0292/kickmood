"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const passport = require("passport");
const router = express.Router();
const validateProfileInput = require('../../validation/profile');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
router.get('/test', (req, res) => res.json({ msg: 'Profile Works' }));
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    let errors;
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
});
router.get('/all', (req, res) => {
    let errors;
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
router.get('/handle/:handle', (req, res) => {
    let errors;
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
router.get('/user/:user_id', (req, res) => {
    let errors;
    Profile.findOne({ user: req.params.user_id })
        .populate('user', ['name',])
        .then(profile => {
        if (!profile) {
            errors.noprofile = 'There is no profile for this user';
            res.status(404).json(errors);
        }
        res.json(profile);
    })
        .catch(err => res.status(404).json({ profile: 'There is no profile for this user' }));
});
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    let profileFields;
    profileFields.user = req.user.id;
    if (req.body.handle)
        profileFields.handle = req.body.handle;
    if (req.body.company)
        profileFields.company = req.body.company;
    if (req.body.website)
        profileFields.website = req.body.website;
    if (req.body.location)
        profileFields.location = req.body.location;
    Profile
        .findOne({ user: req.user.id })
        .then(profile => {
        if (!profile) {
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
        else {
            Profile
                .findOne({ handle: profileFields.handle })
                .then(p => {
                if (profile.handle !== p.handle) {
                    errors.handle = 'handle already exists';
                    res.status(400).json(errors);
                }
            });
            Profile
                .findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true })
                .then(profile => res.json(profile));
        }
    });
});
router.delete('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
        User.findOneAndRemove({ _id: req.user.id }).then(() => res.json({ success: true }));
    });
});
module.exports = router;
//# sourceMappingURL=profile.js.map