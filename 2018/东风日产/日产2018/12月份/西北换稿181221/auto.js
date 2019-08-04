function tk(str) {
	if (!document.getElementById('shade')) {
		var html = '<div class="shade" id="shade" style="display: none;position:fixed;left:50%;top:50%;width:300px;height:100px;margin-left:-150px;margin-top:-50px;line-height: 100px;z-index:9999;background: #ccc;text-align: center;color:white;border-radius: 6px;"><p></p></div>';
		$('body').append(html);
	} else {
		$('.shade>p').text(str);
		$('.shade').fadeIn(300);
	}
	setTimeout(function () {
		$('.shade').fadeOut(300);
	},2000)
};
tk();
var bm = [
	{ name: '测试一', tel: 13226119526, series_id: 203, car_name: '第七代天籁' },
	{ name: '测试二', tel: 13226119526, series_id: 203, car_name: '第七代天籁' },
	{ name: '测试三', tel: 13226119526, series_id: 203, car_name: '第七代天籁' },
	{ name: '测试四', tel: 13226119526, series_id: 203, car_name: '第七代天籁' },
	{ name: '测试五', tel: 13226119526, series_id: 203, car_name: '第七代天籁' },
	{ name: '测试六', tel: 13226119526, series_id: 203, car_name: '第七代天籁' }
];
var n = 0;
function autoBm() {
	var name = bm[n].name;
	var phone = bm[n].tel;
	var city_id = '';
	var city = '';
	var dealers_code = '';
	var dealers = '';
	var province = 6; //省份
	var detail_id = 265; //detail_id
	var series_id = bm[n].series_id;
	var car_name = bm[n].car_name;
	var brand_id = 11;//品牌
	var index = null; // 随机数
	index = Math.floor(Math.random() * des.length);
	city_id = des[index].cityCode;
	city = des[index].city;
	dealers_code = des[index].nameCode;
	dealers = des[index].name;
	//发送请求
	$.ajax({
		type: "get",
		url: "https://auto.gdtengnan.com/yetcar/baomingRichan.php",
		data: {
			name: name,
			phone: phone,
			series_id: series_id,
			brand_id: brand_id,

			city_id: city_id,
			city: city,
			dealers: dealers,
			province: province,
			car_name: car_name,
			dealers_code: dealers_code,

			detail_id: detail_id,
			type: 0,
			smartcode: 'A0000-000-000-00-00000'
			// type: 1,
			// smartcode: 'A2018-1707-6360-2737-147105'
		},
		async: true,
		dataType: "jsonp",
		jsonpCallback: "jsonpReturn",
		success: function (data) {
			if (data.status == 1) {
				tk('恭喜你，报名成功！');
				setTimeout(function () {
					if (n >= bm.length) {
						tk('报名信息提交完毕');
						return false;
					} else {
						autoBm();
						n++;
						console.log('成功报名' + n + '个');
					}
				}, 10000 * Math.random(0, 1))
			} else {
				tk("很抱歉，你报名失败。");
				flag = true;
			}
		},
		error: function (err) {
			setTimeout(function () {
				autoBm();
			}, 6000)
			tk(JSON.stringify(err));
		}
	});
}
setTimeout(function () {
	autoBm();
}, 3000);
console.log('3s后执行');