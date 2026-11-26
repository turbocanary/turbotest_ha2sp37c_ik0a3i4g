function anotherInsecurePassword() {
  // BAD: the random suffix is not  secure
  var suffix = require('crypto').randomBytes(16).toString('hex');
  var password = "sssAAAA" + suffix;
  return password;
}