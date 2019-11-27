"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const Profile_1 = require("../../models/Profile");
const User_1 = require("../../models/User");
const routes_1 = require("./routes");
class ProfileRoute extends routes_1.BaseRoute {
    constructor() {
        super();
        this.init();
    }
    static get router() {
        if (!ProfileRoute.instance) {
            ProfileRoute.instance = new ProfileRoute();
        }
        return ProfileRoute.instance.router;
    }
    init() {
        this.router.get('/test', (req, res) => res.json({ msg: 'Profile Works' }));
        this.router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
            let errors;
            Profile_1.Profile.findOne({ user: req.user['id'] })
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
        this.router.get('/all', (req, res) => {
            let errors;
            Profile_1.Profile.find()
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
        this.router.get('/handle/:handle', (req, res) => {
            let errors;
            Profile_1.Profile.findOne({ handle: req.params.handle })
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
        this.router.get('/user/:user_id', (req, res) => {
            let errors;
            Profile_1.Profile.findOne({ user: req.params.user_id })
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
        this.router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
            let errors = { handle: "", };
            let profileFields;
            profileFields.user = req.user['id'];
            if (req.body.handle)
                profileFields.handle = req.body.handle;
            if (req.body.company)
                profileFields.company = req.body.company;
            if (req.body.website)
                profileFields.website = req.body.website;
            if (req.body.location)
                profileFields.location = req.body.location;
            Profile_1.Profile
                .findOne({ user: req.user['id'] })
                .then(profile => {
                if (!profile) {
                    Profile_1.Profile
                        .findOne({ handle: profileFields.handle })
                        .then(profile => {
                        if (profile) {
                            errors.handle = 'handle already exists';
                            res.status(400).json(errors);
                        }
                    });
                    new Profile_1.Profile(profileFields).save().then(profile => res.json(profile));
                }
                else {
                    Profile_1.Profile
                        .findOne({ handle: profileFields.handle })
                        .then(p => {
                    });
                    Profile_1.Profile
                        .findOneAndUpdate({ user: req.user['id'] }, { $set: profileFields }, { new: true })
                        .then(profile => res.json(profile));
                }
            });
        });
        this.router.delete('/', passport.authenticate('jwt', { session: false }), (req, res) => {
            Profile_1.Profile.findOneAndRemove({ user: req.user['id'] }).then(() => {
                User_1.User.findOneAndRemove({ _id: req.user['id'] }).then(() => res.json({ success: true }));
            });
        });
    }
}
exports.ProfileRoute = ProfileRoute;
ProfileRoute.path = '/';
//# sourceMappingURL=profile.js.map