import dotenv from "dotenv";
dotenv.config();

import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/user.model.js'; // Asegúrate de que la ruta sea correcta

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'https://tpo-da1-grupo11.onrender.com/auth/google/callback'
},
async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ googleId: profile.id });

    if (!user) {
      user = new User({
        googleId: profile.id,
        email: profile.emails[0].value,
        fullName: profile.displayName,
        profileImage: profile.photos[0].value
      });
      await user.save();
    }

    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, false);
  }
});

export default passport;