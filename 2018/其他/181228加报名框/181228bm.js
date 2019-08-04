var series = [
	{ id: 44, name: '卡罗拉' },
	{ id: 42, name: ' 威驰' },
	{ id: 45, name: 'RAV4荣放' },
	{ id: 48, name: '皇冠' },
	{ id: 49, name: '普拉多' },
	{ id: 50, name: '兰德酷路泽' },
	{ id: 465, name: '威驰FS ' },
	{ id: 479, name: '卡罗拉双擎' },
	{ id: 1203, name: '奕泽IZOA' }
];
for (var i = 0; i < series.length; i++) {
	var seriesDOM = $('<option value="' + series[i].id + '">' + series[i].name + '</option>');
	// $('#series').append(seriesDOM)
}
var flag = true;
$("#submit").click(function () {
	if (flag) {
		var name = $("#name").val(),  //姓名
			tel = $("#tel").val(), //电话
			brand_id = 10, //品牌id
			series_id = $('#series').val(),    //车型id
			series = $('#series').text(),    //车型
			Url = "https://auto.gdtengnan.com/yetcar/baomingGeneral.php",
			Data = {
				name: name,
				phone: tel,
				brand_id: brand_id,
				series_id: series_id,
				dealers: series,
				act_id: 3416,
			};
		//判断填写是否正确
		if (!name.match(/^[\u4e00-\u9fa5]{1,4}$/i)) {
			alert('\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u4e2d\u6587\u540d');
			return false;
		}
		if (!RegExp(/^(0|86|17951)?(13[0-9]|14[0145689]|15[0-9]|16[2567]|17[0-8]|18[0-9]|19[189])[0-9]{8}$/).test(tel)) {
			alert('\u624b\u673a\u683c\u5f0f\u4e0d\u6b63\u786e');
			return false;
		}
		if (series_id == 0) {
			alert('\u8bf7\u9009\u62e9\u8f66\u578b');
			return false;
		}
		//发送请求
		flag = false;
		$.ajax({
			type: "get",
			url: Url,
			data: Data,
			async: true,
			dataType: "jsonp",
			complete: function () {
				setTimeout(function () {
					alert('\u606d\u559c\u4f60\uff0c\u62a5\u540d\u6210\u529f');
					window.location.href = location.href;
				}, 1000)
			}
		});
	} else {
		alert("\u8bf7\u52ff\u91cd\u590d\u63d0\u4ea4")
	}
});
//分享
var appId = "";       //公众号的唯一标识
var timestamp = "";   //生成签名的时间戳
var nonceStr = "";    //生成签名的随机串
var signature = "";   //签名
wx.config({
	debug: false,
	appId: appId,
	timestamp: timestamp,
	nonceStr: nonceStr,
	signature: signature,
	jsApiList: [
		// 所有要调用的 API 都要加到这个列表中
		'onMenuShareAppMessage',
		'onMenuShareTimeline'
	]
});
var share_title = '\u4e00\u6c7d\u4e30\u7530\u9080\u60a8\u5171\u4eab\u5c81\u672b\u97f3\u4e50\u4f1a_\u6c7d\u8f66_\u817e\u8baf\u7f51';
var share_desc = '\u4e00\u6c7d\u4e30\u7530\u9080\u60a8\u5171\u4eab\u5c81\u672b\u97f3\u4e50\u4f1a_\u6c7d\u8f66_\u817e\u8baf\u7f51';
var share_image = 'http://img1.gtimg.com/autoguangzhou/pics/hv1/142/148/211/13758157.jpg';
var share_link = window.location.href;
/* var share_link = "http://www.yetcar.com/index.php?s=/Home/Luckbus/busindex";*/
wx.ready(function () {
	// 在这里调用 API
	wx.onMenuShareAppMessage({
		title: share_title, // 分享标题
		desc: share_desc, // 分享描述
		link: share_link, // 分享链接
		imgUrl: share_image, // 分享图标
		type: '', // 分享类型,music、video或link，不填默认为link
		dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		success: function () {
			// 用户成功分享后执行的回调函数
			setword.getShareLog()
		},
		cancel: function () {
			// 用户取消分享后执行的回调函数
			//alert("分享取消");
		}
	});
	wx.onMenuShareTimeline({
		title: share_title, // 分享标题
		link: share_link, // 分享链接
		imgUrl: share_image, // 分享图标
		success: function () {
			// 用户成功分享后执行的回调函数
			setword.getShareLog()
		},
		cancel: function () {
			// 用户取消分享后执行的回调函数
			//alert("分享取消");
		}
	});
});