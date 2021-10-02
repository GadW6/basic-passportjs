module.exports.isAuth = (req, res, next) => {
  if(req.isAuthenticated()) return next()
  else res.redirect("/login")
}

module.exports.notAuth = (req, res, next) => {
  if(req.isAuthenticated()) res.redirect("/profile")
  else next()
}