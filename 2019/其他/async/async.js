/**
 * node 使用jquery
 */
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
const window = document.defaultView;
const $ = require('jquery')(window);
const AsyncAjax = () => {
	return new Promise((resolve, reject) => {
		$.ajax({
			type: "get",
			url: 'https://auto.gdtengnan.com/yetcar/getModelsTrans.php',
			// url: 'http://www.yetcar.com/index.php?s=/Home/Data/getModels',
			data: { series_id: 11 },
			async: true,
			dataType: "jsonp",
			jsonpCallback: "jsonpReturn",
			success: function (data) {
				resolve(data)
			},
			error: function (err) {
				reject(JSON.stringify(err))
			}
		})
	})
}
AsyncAjax().then((result) => {
	console.log(result);
}).catch((err) => {
	console.log(err);
});
