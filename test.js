const chai = require('chai');
const fetch = require('node-fetch');
chai.should();
// var sinon = require('sinon');
var express = require('express');
const supertest = require('supertest');
const serverObject = require('./server');
const app = serverObject.app;
// const server = serverObject.server;
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Route', function()
{
    var  getUserStub, request, route, serverRequest;

    beforeEach(function () {
        // getUserStub = sinon.stub();
        // app = express();
    
        request = supertest(app);
        // request = chai.request(app);
      });

      it('should respond with res object', function (done) {
        // getUserStub.returns(null);
    
        request.get('/auth')
        .end(function(err, res) {
          if (err) throw err;
          console.log(res)
        });
          //  .expect('Content-Type', "application/json")
          // .then(res => {
                
          //     //   console.log('ExpressRoute: /auth')
          //     console.log('Status: '+res.status+', '+res.res.statusMessage)
          //     // console.log('ClientError: '+res.clientError)
          //     // console.log('ServerError: '+res.serverError)
          //     // console.log(res.error.Error)
          // }).catch((err)=>console.log(err))

      })
    
      // it('/auth', function()
    // {
    //     fetch('http://localhost:5000/auth').then(res => console.log('/auth--Response url: '+res.url+'\n'))
    // }),

    // it('/deploy', function()
    // {
    //     fetch('http://localhost:5000/deploy').then(res => console.log(res))
    // })
})

