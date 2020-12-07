const users = require("../model/users");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;

module.exports = (passport) => {
	passport.use(
		new LocalStrategy(
			{ usernameField: "email" },
			(email, password, done) => {
				users.findOne({ email: email }, (err, user) => {
					if (err) throw err;
					const compare = bcrypt.compareSync("password", password);
					if (!compare) {
						return done(null, false);
					} else if (compare) {
						return done(null, user);
					}
				});
			}
		)
	);

	passport.serializeUser((user, done) => {
		done(null, user.id);
	});

	passport.deserializeUser((id, done) => {
		users.findById(id, (err, data) => {
			done(err, data);
		});
	});
};
