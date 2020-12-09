//init
const router = require("express").Router();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
require("./controllers/passport")(passport);

//Routes
const blog = require("./controllers/blog");
const contacts = require("./controllers/contacts");
const portfolio = require("./controllers/portfolio");
const quotes = require("./controllers/quotes");

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

// Check Auth
const checkAuth = (req, res, next) => {
	if (req.isAuthenticated()) {
		res.set(
			"cache-control",
			"no-cache, no-store, private, must-revalidate, post-check=0, pre-check=0"
		);
		next();
	} else {
		res.json({ success: false, message: "User not logged in" });
	}
};

//Routes
router.get("/checkAuth", checkAuth, (req, res) => {
	res.status(200).json({ success: true, data: req.user.email });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
	let userInfo = {
		email: req.user.email,
	};
	if (req.user) {
		res.json({ success: true, data: userInfo });
	} else {
		res.json({ success: false, message: "Email or Password is incorrect" });
	}
});

router.get("/logout", (req, res) => {
	req.logout();
	res.json({ success: false, message: "You logged out successfully" });
});

/*
================
All Routes
================
*/

// router.use("/contact", checkAuth, contacts);
// router.use("/blog", checkAuth, blog);
// router.use("/portfolio", checkAuth, portfolio);
// router.use("/quotes", checkAuth, quotes);

//Export
module.exports = router;
