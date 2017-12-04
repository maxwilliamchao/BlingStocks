var crypto = require('crypto');
var genRandomString = function (length) {
    return crypto.randomBytes(Math.ceil(length / 2))
            .toString('hex')/** convert to hexadecimal format */
            .slice(0, length);   /** return required number of characters */
};

var sha512 = function (password, salt) {
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt: salt,
        passwordHash: value
    };
};

function saltHashPassword(userpassword) {
    var salt = genRandomString(16); /** Gives us salt of length 16 */
    var passwordData = sha512(userpassword, salt);
    console.log('UserPassword = ' + userpassword);
    console.log('Passwordhash = ' + passwordData.passwordHash);
    console.log('\nSalt = ' + passwordData.salt);
}

exports.encrypt = function (password, callback) {
    var salt = genRandomString(16);
    var hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    var value = hash.digest('hex');
    callback(value,salt);
};

exports.decrypt = function (inputPassword, dbPassword, dbSalt, callback) {
    var hash = crypto.createHmac('sha512', dbSalt);
    hash.update(inputPassword);
    var hashedPassword = hash.digest('hex');
    if (hashedPassword == dbPassword) {
        callback("success");
    }
    else {
        callback("failure");
    }
};