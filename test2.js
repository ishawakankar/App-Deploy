const chai = require('chai');
// const fetch = require('node-fetch');
chai.should();
// var sinon = require('sinon');
// var express = require('express');
// const supertest = require('supertest');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
const server = require('./server');

// describe('Route', function()
// {
//     var app, getUserStub, request, route;

//     beforeEach(function () {
//         // getUserStub = sinon.stub();
//         // app = express();
    
//         request = chai.request(server);
//         // request = supertest(server)
//       });

//       it('should respond with a 404 and a null', function (done) {
//         //getUserStub.returns(null);
    
//         request
//           .get('http://localhost:5000/auth').then((res,err) => {
//               if(res)
//               {
//                   console.log(res)
//               }
//               else
//               {
//                   console.log(err)
//               }
//           })
//           done();
//       });
    
//       it('should respond with 200 and a user object', function (done) {
//         // var userData = {
//         //   username: 'nodejs'
//         // };
    
//         // getUserStub.returns(userData);
    
//         request
//           .get('http://localhost:5000/auth').then((res,err) => {
//               if(res)
//               {
//                   console.log(res)
//               }
//               else
//               {
//                   console.log(err)
//               }
//           })
//           done();
//       });
    
    
//       // it('/auth', function()
//     // {
//     //     fetch('http://localhost:5000/auth').then(res => console.log('/auth--Response url: '+res.url+'\n'))
//     // }),

//     // it('/deploy', function()
//     // {
//     //     fetch('http://localhost:5000/deploy').then(res => console.log(res))
//     // })
// })

var request = require('supertest');
var express = require('express');
var app = express();

describe('test cases', function()
{
    it('home page test', function()
    {
        request(app).get('/')
        .expec
    })
})