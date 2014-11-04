var assert = require('chai').assert;
var expect = require('chai').expect;
require('chai').should();
var User = require('../db/user_model');
// mongoose config
var mongoose = require('mongoose')  
  , connectionString = 'mongodb://localhost:27017/exam_weixin_teset'
  , options = {};

options = {  
  server: {
    auto_reconnect: true,
    poolSize: 10
  }
};

mongoose.connect(connectionString, options, function(err, res) {  
  if(err) {
    console.log('[mongoose log] Error connecting to: ' + connectionString + '. ' + err);
  } else {
    console.log('[mongoose log] Successfully connected to: ' + connectionString);
  }
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose connection error:'));
db.once('open', function callback () {
  // yay!
	console.log('mongoose open success');
});

describe('UserModel', function(){
	before(function() {
    // runs before all tests in this block
		// create a user a new user
		var testUser = new User({
		    username: 'sang_test1',
		    password: 'Password123'
		});
		
		testUser.save(function(err,user) {
		    if (err) throw err;
				console.log('add mock data ok');
		});
		
  })
  after(function(){
    // runs after all tests in this block
		User.remove({}, function (err) {
		  if (err) return handleError(err);
		  // removed!
			console.log('remove all data');
		});
		
  })
  beforeEach(function(){
    // runs before each test in this block
  })
  afterEach(function(){
    // runs after each test in this block
  })
	
  describe('#save()', function(){
    it('should return sang_test2 when user save', function(done){

  			// create a user a new user
  			var testUser = new User({
  			    username: 'sang_test2',
  			    password: 'Password123'
  			});

  			// // save user to database
  			testUser.save(function(err,user) {
  			    if (err) throw err;
						
  					assert.equal(user.username, 'sang_test2');
						done()
  			});
    })
  })


  describe('#getAuthenticated()', function(){
    it('should return 60 when auto save Password123 encrypted string length', function(done){
	    // attempt to authenticate user
	    User.getAuthenticated('sang_test1', 'Password123', function(err, user, reason) {
        if (err) throw err;

        // login was successful if we have a user
        if (user) {
            // handle login success
            console.log('login success ' + user.password);
						assert.lengthOf(user.password,60)
						done();//success
            return;
        }

        // otherwise we can determine why we failed
        var reasons = User.failedLogin;
        switch (reason) {
            case reasons.NOT_FOUND:
            case reasons.PASSWORD_INCORRECT:
                // note: these cases are usually treated the same - don't tell
                // the user *why* the login failed, only that it did
                break;
            case reasons.MAX_ATTEMPTS:
                // send email or otherwise notify user that account is
                // temporarily locked
                break;
        }
				
				done();
	    });	
			 
    })
  })
})