//init
const router = require("express").Router();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
require("./passport")(passport);

//Middleware
router.use(cookieParser("dA47Xd^l%Ar5"));
router.use(
	session({
		secret: "dA47Xd^l%Ar5",
		saveUninitialized: true,
		maxAge: 3600000,
		resave: true,
	})
);

router.use(passport.initialize());
router.use(passport.session());

//Routes
router.post("/", (req, res) => {
	passport.authenticate("local", {
		successRedirect: "/portal",
		failureRedirect: "/login",
	})(req, res, next);
});

//Export
module.exports = router;
