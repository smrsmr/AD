const fs = require('fs');
module.exports=function () {
    let BuffImg = fs.readFileSync('./images/code.jpg');
    return 'data:image/png;base64,'+BuffImg.toString("base64");
}