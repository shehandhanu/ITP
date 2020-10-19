const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

const Employee = mongoose.model('Employee');

passport.use(
    new localStrategy({ usernameField: 'empEmail' },
    (username, password, done) => {
        Employee.findOne({empEmail : username}, 
            (err, user) => {
                // if(Employee == null){
                //     console.log('emplty')
                // }else{
                //     console.log('not emplty' + Employee)
                // }
                console.log(username +" "+ password);
                if(err)
                    return done(err);
                else if(!user)
                    return done(null, false, {message : 'Email Is Not Found, Pleace Check The Email Or Contact The Admin'});
                else{
                    console.log('this Much');
                } if(!user.verifyPassword(password)){
                    console.log('not this much');
                    return done(null, false, {message : 'The Password Is Worng'});
                }
                else
                    return done(null,user)    
            }); 
    })
)