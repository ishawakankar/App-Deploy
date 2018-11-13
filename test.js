const chai = require('chai');
// const fetch = require('node-fetch');
chai.should();
const expect = require('chai').expect;
// var sinon = require('sinon');
var express = require('express');
const supertest = require('supertest');
const serverObject = require('./server');
const app = serverObject.app;
// const server = serverObject.server;
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;

describe('Testing Express Routes:', function () {
  var getUserStub, request, route, serverRequest;

  beforeEach(function () {
    // getUserStub = sinon.stub();
    // app = express();

    request = supertest(app);
    console.log('\n')
    // request = chai.request(app);
  });

  it('ExpressRoute:  /auth', function (done) {
    // getUserStub.returns(null);

    request.get('/auth')
    //   .expect(302)
      .end(function (err, res) {
        if (err) throw err;
        // console.log(res)
        // res.should.not.console.error();
        
        res.should.status(302)
        // expect(2).to.equal(3)
        
        // console.log('ExpressRoute:  /auth')
        // console.log('Status: ' + res.status + ', ' + res.res.statusMessage)
        // console.log('Url: ' + res.headers.location)
        // console.log('ClientError: ' + res.clientError)
        // console.log('ServerError: ' + res.serverError)
      });

    done();
  }),

    it('ExpressRoute:  /auth/gitlab', function (done) {
      // getUserStub.returns(null);

      request.get('/auth/gitlab')
        .end(function (err, res) {
          if (err) throw err;
          // console.log(res)

          res.should.status(302)

          
        //   console.log('ExpressRoute:  /auth/gitlab')
        //   console.log('Status: ' + res.status + ', ' + res.res.statusMessage)
        //   console.log('Url: ' + res.headers.location)
        //   console.log('ClientError: ' + res.clientError)
        //   console.log('ServerError: ' + res.serverError)
        });

      done();
    }),

    it('ExpressRoute:  /apps', function (done) {
      // getUserStub.returns(null);

      request.get('/apps')
        .end(function (err, res) {
          if (err) throw err;
          // console.log(res)
          
          res.should.status(200)

          
        //   console.log('ExpressRoute:  /apps')
        //   console.log('Status: ' + res.status + ', ' + res.res.statusMessage)
        //   console.log('Url: ' + res.headers.location)
        //   console.log('ClientError: ' + res.clientError)
        //   console.log('ServerError: ' + res.serverError)
        });

      done();
    })

})

