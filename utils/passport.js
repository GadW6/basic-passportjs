const Strategy = require('passport-local').Strategy
const Users = require('../db/users');

module.exports = (passport, app) => {
  // Configure the local strategy for use by Passport.
  //
  // The local strategy require a `verify` function which receives the credentials
  // (`username` and `password`) submitted by the user.  The function must verify
  // that the password is correct and then invoke the callback function 'done()' with a user object, which
  // will be set at `req.user` in route handlers after authentication.

  passport.use(new Strategy(
    async (uname, upass, done) => {
      try {
        const output = await Users.findByUsername(uname)
        if (!output) done(null, false)
        if (output.password === upass) done(null, output)
      } catch (error) {throw error}
    }))


  // Configure Passport authenticated session persistence.
  //
  // In order to restore authentication state across HTTP requests, Passport needs
  // to serialize users into and deserialize users out of the session.  The
  // typical implementation of this is as simple as supplying the user ID when
  // serializing, and querying the user record by ID from the database when
  // deserializing.
  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await Users.findById(id)
      return done(null, user)
    } catch (error) {throw err}
  })

  app.use(passport.initialize());
  app.use(passport.session());
}