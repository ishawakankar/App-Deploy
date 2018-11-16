const env = require('./env_config');
const passport = require('passport');
var userprofile = [];
var GitlabStrategy = require('passport-gitlab2').Strategy;
const keys = require('./config/keys');
const db = require('./db/db');
const { addUser } = require("./db/db.users");
const config = require('config');
db();
console.log("auth",env.HPORT);
passport.serializeUser((profile, done) => {
    done(null, profile);
})

passport.deserializeUser((profile, done) => {
    done(null, profile);
})

passport.use(new GitlabStrategy({
    clientID: "67b69135517ceafbf994278feb4705eaf9ba385b41e07901d8cb4bf3678340f7",
    clientSecret: "b919cedd1e8bb45d1666180658070de60f6086ba8d0d871d18329a29caa6a063",
    callbackURL: `http://localhost:5000/auth/gitlab`
},

    function (token, tokenSecret, profile, done) {
        const req_obj = { //it is user data to be saved in users table
            userId: profile.id,
            userName: profile.username,
            displayName: profile.displayName,
            email: profile._json.email,
            profileUrl: profile.profileUrl
        }
        const obs = addUser(req_obj);
        userprofile = profile;
        obs.subscribe(doc => console.log("subscribe ", doc));
        done(null, profile);
    }
));

module.exports = function display()
{   
    return userprofile;
}




