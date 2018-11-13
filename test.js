const chai = require('chai');
// const fetch = require('node-fetch');
chai.should();
// var sinon = require('sinon');
var express = require('express');
const supertest = require('supertest');
const serverObject = require('./server');
const app = serverObject.app;
// const server = serverObject.server;
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Route', function () {
  var getUserStub, request, route, serverRequest;

  beforeEach(function () {
    // getUserStub = sinon.stub();
    // app = express();

    request = supertest(app);
    // request = chai.request(app);
  });

  it('should respond with res object', function (done) {
    // getUserStub.returns(null);

    request.get('/auth')
      .end(function (err, res) {
        if (err) throw err;
        // console.log(res)
        res.should.not.console.error();
        
        console.log('\n')
        console.log('ExpressRoute:  /auth')
        console.log('Status: ' + res.status + ', ' + res.res.statusMessage)
        console.log('Url: ' + res.headers.location)
        console.log('ClientError: ' + res.clientError)
        console.log('ServerError: ' + res.serverError)
      });

    done();
  }),

    it('should respond with res object', function (done) {
      // getUserStub.returns(null);

      request.get('/auth/gitlab')
        .end(function (err, res) {
          if (err) throw err;
          // console.log(res)
          console.log('\n')
          console.log('ExpressRoute:  /auth/gitlab')
          console.log('Status: ' + res.status + ', ' + res.res.statusMessage)
          console.log('Url: ' + res.headers.location)
          console.log('ClientError: ' + res.clientError)
          console.log('ServerError: ' + res.serverError)
        });

      done();
    }),

    it('should respond with res object', function (done) {
      // getUserStub.returns(null);

      request.get('/apps')
        .end(function (err, res) {
          if (err) throw err;
          // console.log(res)
          console.log('\n')
          console.log('ExpressRoute:  /apps')
          console.log('Status: ' + res.status + ', ' + res.res.statusMessage)
          console.log('Url: ' + res.headers.location)
          console.log('ClientError: ' + res.clientError)
          console.log('ServerError: ' + res.serverError)
        });

      done();
    })

})

