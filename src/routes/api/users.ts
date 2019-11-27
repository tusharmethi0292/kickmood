import * as express from "express";
const router = express.Router();

import * as  bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { keys } from "../../config/keys";


// Load input validation
import { validateRegisterInput } from "../../validation/register";
import { validateLoginInput } from "../../validation/login";
// Load User model

import { User } from '../../models/User';
import { onRegister } from '../../controller';
// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", async (req, res) => {
  try {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      // Hash password before saving in database
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(newUser.password, salt)
      newUser.password = hash;
      return res.status(200).json(newUser);

    }

  } catch (error) {
    return Promise.reject(error);
  }
});


// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

export let UserRouter = router;