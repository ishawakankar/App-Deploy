const chai = require('chai');
const fetch = require('node-fetch');
chai.should();
var sinon = require('sinon');
var express = require('express');
const supertest = require('supertest');

describe('Route', function()
{
    var app, getUserStub, request, route;

    beforeEach(function () {
        getUserStub = sinon.stub();
        app = express();
    

        request = supertest(app);
      });

      it('should respond with a 404 and a null', function (done) {
        getUserStub.returns(null);
    
        request
          .get('/auth/gitlab').then(res => console.log(res))
          done();
      });
    
      it('should respond with 200 and a user object', function (done) {
        var userData = {
          username: 'nodejs'
        };
    
        getUserStub.returns(userData);
    
        request
          .get('/auth/gitlab')
          done();
      });
    
    
      // it('/auth', function()
    // {
    //     fetch('http://localhost:5000/auth').then(res => console.log('/auth--Response url: '+res.url+'\n'))
    // }),

    // it('/deploy', function()
    // {
    //     fetch('http://localhost:5000/deploy').then(res => console.log(res))
    // })
})