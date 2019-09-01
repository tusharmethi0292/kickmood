import * as Jwt from "passport-jwt"
const JwtStrategy = Jwt.Strategy
const ExtractJwt = Jwt.ExtractJwt
import * as mongoose from "mongoose"
import * as keys from "../../config/keys";
const User = mongoose.model("users");

const opts = { jwtFromRequest: "", secretOrKey: "" };
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

let passport = function () {
  Jwt.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};