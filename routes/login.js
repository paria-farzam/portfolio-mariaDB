const express = require("express");
const router = express.Router();
const path = require("path");
const passport = require("passport");
const methodOverride = require("method-override");
const { getAdmins } = require("../queries/queries");

//middlewares
router.use(methodOverride("_method"));

//passport
const initializePassport = require("../passport-config");
initializePassport(
  passport,
  async (name) => {
    let users = await getAdmins();
    return users.find((user) => user.name == name);
  },
  async (id) => {
    let users = await getAdmins();
    return users.find((user) => user.id == id);
  }
);

//get metod
router.get("/", checkAuthentication, (req, res) => {
  res.render(path.join(__dirname, "../public/login.ejs"), {isLogin: req.isAuthenticated()});
});

//post method
router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/messages",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

router.delete("/logout", (req, res) => {
  req.logOut();
  res.redirect("/");
});

//check req authenticated
function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    console.log("login:yes");
    return next();
  }
  console.log("login:no");
  return next();
}

module.exports = router;
