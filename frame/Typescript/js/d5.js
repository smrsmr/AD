"use strict";
function ajax(config) {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log('success');
            if (config.dataType == 'json') {
                console.log(JSON.parse(xhr.responseText));
            }
            else {
                console.log(xhr.responseText);
            }
        }
        else if (xhr.status == 404) {
            console.error("error:" + xhr.responseText);
        }
    };
}
ajax({
    type: 'get',
    data: 'name=zhangsan',
    url: 'http://a.itying.com/api/productlist',
    dataType: 'json'
});
//约束接口
/* interface encryption {
    (key: string, value: string): string;
}

let md5:encryption = function(key: string, value: string) {
    return key + value;
}

console.log(md5('ssss', 'lll')); */
