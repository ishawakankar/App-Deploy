const express = require('express');
const app = express();
const passportSetup = require('./passport');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const passport = require('passport');
//const morgan = require('morgan');
const port = process.env.PORT || 5000;
const { spawn, exec, execFile } = require('child_process');
const fs = require('fs');
var expressWinston = require('express-winston');
var winston = require('winston');
app.use(passport.initialize());
app.use(passport.session());
const apps = require('./db/db.apps');
const users = require('./db/db.users')
let user_id;
const path = require('path');

const server = app.listen(port, () => {
   // console.log(`listening on port ${port}`);
});

//var accessLogStream = fs.createWriteStream(path.join(__dirname, '/logs/access.log'), { flags: 'a' })

// app.use(morgan('combined', { stream: accessLogStream }))

app.use(expressWinston.logger({
    transports: [
      new winston.transports.Console({
        json: true,
        colorize: true
      }),
      new winston.transports.File({
        filename: 'access.log',
        level: 'info'
    })
    ]
  }));

app.get("/auth", passport.authenticate('gitlab'));

app.get("/auth/gitlab", passport.authenticate('gitlab'), (req, res) => {
   // console.log("now reached here", req)
    const authCode = req.query.code;
    user_id = res.req.user.id;
   const req_obj = { //it is user data to be inserted in user table
       userId: res.req.user.id,
       userName: res.req.user.username,
       displayName: res.req.user.displayName,
       email: res.req.user._json.email,
       profileUrl: res.req.user.profileUrl
   }

   users.addUser(req_obj).subscribe(doc => {
       console.log("subscribe ", doc)
   });
    res.redirect("http://localhost:3000/newApp?token=" + authCode);
})


app.post("/deploy", (req, res) => {
    const body = req.body;
    const url = Object.keys(body)[0];
    const folder = "gitDirectories";
    fs.stat(folder, (err, stats) => {

        if (err) {
            fs.mkdirSync(`./${folder}`);
        }

        const repo = url.split("/").pop().toLowerCase();
        const command = spawn(`./script.sh`, [url, repo]);
         apps.findAndUpdateApp({
           appId: Math.random(),
           userId: user_id,
           app_name: repo,
           timestamp: Date.now(),
           status: "required: true",
           app_URL: url
       }).subscribe(console.log);


        command.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        command.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        });

        command.on('close', (code) => {
            //console.log(`child process exited with code ${code}`);
        });
    });

    res.json(url);
})

app.get("/apps", (req, res) => {
    console.log("inside /listUrl route calling /apps route in express");
    apps.getUserApps(user_id).subscribe(doc => {
        
        res.status(201).json(doc)
    });
    // res.send("done")
})

app.use(expressWinston.errorLogger({
    transports: [
      new winston.transports.Console({
        json: true,
        colorize: true
      }),
      new winston.transports.File({
        filename: 'access.log',
        level: 'error'
    })
    ]
  }));


  module.exports = server;
// log.error('test'); // writes to log and console out
// log.info('testing info'); // writes just in console
