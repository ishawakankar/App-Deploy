const appsModel = require('../db/models/apps');
const { Subject } = require('rxjs');
let s = new Subject();

function addApp(req){ //to add app (req is the object to add in table user_apps) 
 const app = new appsModel(req);
//  const observable = Observable.create((observer) => {
   app.save((error, doc) => {
     try{
       s.next(doc)
     }catch(error) {
       s.error(error)
     }
   })
//  })
 return s;  
}

//to find and update app if it is not present it will be inserted (req is the object to find in table user_apps)
function findAndUpdateApp(req){ 
  // const observable = Observable.create((observer) => {
    appsModel.findOneAndUpdate(req,{
      timestamp:Date.now()
      },{
      upsert: true,
      new: true
    },(error, doc) => {
        try{
          s.next(doc)
        }catch(error) {
          s.error(error)
      }
    })
  // })
  return s;
}

function getUserApps(userid){ // to get users app from user_apps table by user id
  // const observable = Observable.create((observer) => {
    appsModel.find({ userId: userid }, 'app_name app_URL status' , function (err, doc) {
      try{
        s.next(doc)
      }catch(error) {
        s.error(error)
      }
    })
  // })
  return s;
}

function getAppByAppURL(req){ //to get apps by app_URL and user id from user_apps table
  // const observable = Observable.create((observer) => {
    appsModel.find(req, function (err, doc) {
      try{
        s.next(doc)
      }catch(error) {
        s.error(error)
      }
    })
  // })
  return s;
}

function deleteApp(req){ // to delete app for a particular user by app_URL and userid
  // const observable = Observable.create((observer) => {
    appsModel.findOneAndDelete({ app_URL: req.app_URL, userId : req.userId , appId: req.appId }, function (err, doc) {
      try{
        s.next(doc)
      }catch(error) {
        s.error(error)
      }
    })
  // })
  return s;
}


module.exports = {
  addApp : addApp,
  findAndUpdateApp :findAndUpdateApp,
  getUserApps : getUserApps,
  getAppByAppURL : getAppByAppURL,
  deleteApp: deleteApp
}