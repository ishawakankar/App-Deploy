const chai = require('chai');
chai.should();
var express = require('express');
const supertest = require('supertest');
const serverObject = require('./server');
const app = serverObject.app;
// const server = serverObject.server;
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;

describe('Testing Express Routes:', function () {
  var request;

  beforeEach(function () {

    request = supertest(app);
    console.log('\n');
    // request = chai.request(app);
  });

  it('ExpressRoute:  /auth', function (done) {

    request.get('/auth')
    //   .expect(302)
      .end(function (err, res) {
        if (err) throw err;
        // console.log(res.body)
        res.should.status(302)
        // expect(2).to.equal(3)
        // chai.assert('')
      });

    done();
  }),

    it('ExpressRoute:  /auth/gitlab', function (done) {

      request.get('/auth/gitlab')
        .end(function (err, res) {
          if (err) throw err;

          res.should.status(302)
        });

      done();
    }),

    it('ExpressRoute:  /deploy', function (done) {

        request.post('/deploy').send({
          url: 'https://github.com/ishawakankar/test2'
        })
          .end(function (err, res) {
            if (err) throw err;
  
            res.should.status(302)
          });
  
        done();
      }),

    it('ExpressRoute:  /apps', function (done) {

      request.get('/apps')
        .end(function (err, res) {
          if (err) throw err;
          
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

