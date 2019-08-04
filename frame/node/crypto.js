const crypto = require('crypto');

/*
const secret = '123123';
const hash = crypto.createHmac('sha256', secret)
    .update('I love cupcakes')
    .digest('hex');
console.log(hash);*/
//加密
const cipher = crypto.createCipher('aes192', '@#$%^&');
let encrypted = cipher.update('15918446062', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);
//解密
const decipher = crypto.createDecipher('aes192', '@#$%^&');
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);
