const users = require("../model/users");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;

module.exports = (passport) => {
	passport.use(
		new LocalStrategy(
			{ usernameField: "email" },
			(email, password, done) => {
				users.findOne({ email: email }, (err, data) => {
					if (err) throw err;
					if (!data) {
						return done(null, false);
					}
					bcrypt.compare(password, data.password, (err, match) => {
						if (err) {
							return done(null, false);
						} else if (!match) {
							return done(null, false);
						} else if (match) {
							return done(null, data);
						}
					});
				});
			}
		)
	);

	//Serialize Users
	passport.serializeUser((user, done) => {
		done(null, user.id);
	});
	passport.deserializeUser((id, done) => {
		users.findById(id, (err, user) => {
			done(err, user);
		});
	});
};
