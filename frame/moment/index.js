var moment = require('./moment.min.js');


var expire = 20;

//是否闰年
var r = moment([2020]).isLeapYear();
console.log(r);
var d = moment().add(expire, 'days');
var t = moment(d._d).format('YYYY-MM-DD');
console.log(t);


var start_time = new Date().getTime();	
var end_time = start_time + expire * 24 * 3600 * 1000;
var end_day = new Date(end_time);
console.log(moment(end_day).format('YYYY-MM-DD'));


