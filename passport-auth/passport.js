
var userController = "../controllers/userController.js"
var LocalStrategy = require("passport-local").Strategy;
module.exports = function(passport) {
    
        // =========================================================================
        // passport session setup ==================================================
        // =========================================================================
        // required for persistent login sessions
        // passport needs ability to serialize and unserialize users out of session
    
        // used to serialize the user for the session
    
        passport.serializeUser(function(user, done) {
            done(null, user);
        });
    
        // used to deserialize the user
        passport.deserializeUser(function(obj, done) {
            done(null, obj);
        });
        
        // =========================================================================
        // LOCAL LOGIN =============================================================
        // =========================================================================
        // we are using named strategies since we have one for login and one for signup
        // by default, if there was no name, it would just be called 'local'
    
        passport.use(
            'local-login',
            new LocalStrategy({
                // by default, local strategy uses username and password, we will override with email
                usernameField : 'username',
                passwordField : 'password',
                passReqToCallback : true // allows us to pass back the entire request to the callback
            },
            function(req, username, userPassword, done) { // callback with email and password from our form
                userController.findUser(username,function (err,data) {
                    if (err) {console.log(err)}
                    console.log(data);
                });
        //             if (!err) {
        //                 if (rows.length==0) {
        //                     return done({ "statusCode":404, "status": "failure", "message": "Sorry. No user with given credentials exist" });
        //                 }
        //                 else if (rows[0].is_default_password==1) {
        //                     encryptionAndDecryptionService.decrypt(userPassword, rows[0].user_password, rows[0].salt, function (result) {
        //                         if (result == "success") {
        //                             return done({ "statusCode":200, "status": "changePassword", "data": rows[0] });
        //                         }
        //                         else {
        //                             return done({ "statusCode":404, "status": "failure", "message": "Error! Please check credentials" });
        //                         }
        //                     });
        //                 }
        //                 else {
        //                     encryptionAndDecryptionService.decrypt(userPassword, rows[0].user_password, rows[0].salt, function (result) {
        //                         if (result == "success") {
        //                             return done({"statusCode":200, "status": "success", "data": rows[0] });
        //                         }
        //                         else {
        //                             return done({"statusCode":404, "status": "failure", "message": "Error! Please check credentials" });
        //                         }
        //                     });
        //                 }
        //             }
        //             else {
        //                 return done({"statusCode":404, "status": "failure", "message": "Unexpected Error. Please try again later" });
        //             }
        //         });
        //     })
        // );
            })
        )
            }
        