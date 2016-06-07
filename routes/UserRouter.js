var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var User = mongoose.model('User');
// var Blog = mongoose.model('Blog');
// var Profile = mongoose.model('Profile');
var jwt = require('express-jwt');
var passport = require('passport');

// this how server knows if user is legit or not
var auth = jwt({
  secret: 'RvAmErIcA',
  userProperty: 'payload'
});

console.log('user router');

router.param('id', function(req,res,next,id){
  console.log(id);
User.findOne({_id:id}, function(err,result){
  if(err) return next(err);
  if(!result) return next({err: "Couldnt find a user with that id"});
  // console.log(result);
  req.user = result;
  next();
  });
});

router.post('/register', function(req, res, next) {
  console.log('hi there');
  var user = new User(req.body);
  user.setPassword(req.body.password);
  user.save(function(err, result) {
    if(err) return next(err);
    if(!result) return next("There was an issue registering that user.");
    res.send(result.createToken());
  });
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user){
    if(err)return next(err);
    res.send(user.createToken());
  })(req, res, next);
});


    // GET SINGLE BLOG
console.log('here on router');
router.get('/:id', function(req,res,next){
  console.log("made it to route file");
  User
  .findOne({_id: req.params.id},
    function(err,result){
      if(err) return next(err);
      console.log(result);
      res.send(result);
    });
});

    // ADDING BLOG BY USER
// router.post('/:id/add_blog', function(req,res,next){
//   console.log("HELLO!");
// // console.log(req.payload._id);
// User
//   .findOne({_id: req.params.id})
//     .populate('blog','title')
//     .exec(function(err,result){
//       if(err) return next(err);
//       if(!result) return next("There was an issue posting the blog");
//       // console.log(req.payload.username);
// console.log(result);
//       res.send(result);
//     });
// });





module.exports = router;
