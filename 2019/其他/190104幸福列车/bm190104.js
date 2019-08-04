	//人数满员
$(document).on('click', 'input,select', function () {
		alert('\u62b1\u6b49 \u6b64\u5217\u8f66\u5df2\u6ee1\u5458');
		$('input').val('');
		$('select').find("option:not(:first)").remove();
		return false;
})
// $('input,select').css('cursor','not-allowed');
$('.add').attr('disabled', 'disabled').css('cursor', 'not-allowed');
$('#submit').attr('disabled', 'disabled').css('cursor', 'not-allowed');
  var name, name1, card, card1, tel, tel1, bourn, bourn1, person, person1;
	//增加报名框
	$('.add').click(function () {
		var len = $('.main .bmk').length;
		if (len > 1) {
			alert('\u4f60\u597d \u6700\u591a\u53ea\u80fd\u6dfb\u52a0\u4e00\u4e2a\u4e58\u8f66\u4eba');
			return false;
		}
		$('#submit').css('top', '451px');
		$('.main .con .bmk').eq(0).append('<i class="close"></i>');
		$('.main .con .bmk').eq(1).append('<i class="close"></i>');
		var text = "";
		text += "<div class=\"bmk\">";
		text += "					<p class=\"name\">";
		text += "						<input type=\"text\" id=\"name1\" name=\"name\" placeholder=\"\u8bf7\u8f93\u5165\u59d3\u540d\">";
		text += "					</p>";
		text += "					<p class=\"tel\">";
		text += "						<input type=\"tel\" id=\"tel1\" name=\"tel\" placeholder=\"\u8bf7\u8f93\u5165\u7535\u8bdd\u53f7\u7801\" maxlength=\"11\">";
		text += "					</p>";
		text += "					<p class=\"card\">";
		text += "						<input type=\"tel\" id=\"card1\" name=\"card\" placeholder=\"\u8f93\u5165\u8eab\u4efd\u8bc1\u53f7\u7801\">";
		text += "					</p>";
		text += "					<p class=\"bourn\">";
		text += "						<select id=\"bourn1\" name=\"bourn\">";
		text += "							<option value=\"0\">\u8bf7\u9009\u62e9\u76ee\u7684\u5730</option>";
		text += "							<option value=\"\u97f6\u5173\">\u97f6\u5173</option>";
		text += "							<option value=\"\u90f4\u5dde\u897f\">\u90f4\u5dde\u897f</option>";
		text += "							<option value=\"\u8861\u9633\u4e1c\">\u8861\u9633\u4e1c</option>";
		text += "							<option value=\"\u682a\u6d32\u897f\">\u682a\u6d32\u897f</option>";
		text += "							<option value=\"\u957f\u6c99\u5357\">\u957f\u6c99\u5357</option>";
		text += "							<option value=\"\u6b66\u6c49\">\u6b66\u6c49</option>";
		text += "						</select>";
		text += "					</p>";
		text += "					<p class=\"person\">";
		text += "						<select id=\"person1\" name=\"person\">";
		text += "							<option value=\"\u666e\u901a\u7fa4\u4f17\">\u666e\u901a\u7fa4\u4f17</option>";
		text += "							<option value=\"\u519b\u4eba\">\u519b\u4eba</option>";
		text += "							<option value=\"\u5b66\u751f\">\u5b66\u751f</option>";
		text += "							<option value=\"\u8363\u8a89\u79f0\u53f7\u8005\">\u8363\u8a89\u79f0\u53f7\u8005</option>";
		text += "							<option value=\"\u65e0\u507f\u732e\u8840\u8005\">\u65e0\u507f\u732e\u8840\u8005</option>";
		text += "							<option value=\"\u9752\u5e74\u5fd7\u613f\u8005\">\u9752\u5e74\u5fd7\u613f\u8005</option>";
		text += "							<option value=\"\u8d2b\u56f0\u8bc1\u660e\u8005\">\u8d2b\u56f0\u8bc1\u660e\u8005</option>";
		text += "						</select>";
		text += "					</p>";
		text += "					<i class=\"close\"></i>";
		text += "				</div>";
		$('.main .con').append(text);
	});
	//删除报名框
	$(document).on('click', '.close', function () {
		var len = $('.main .con .bmk').length;
		if (len <= 2) {
			$('input[name="name"]').attr('id', 'name');
			$('input[name="card"]').attr('id', 'card');
			$('input[name="tel"]').attr('id', 'tel');
			$('select[name="bourn"]').attr('id', 'bourn');
			$('select[name="person"]').attr('id', 'person');
		}
		$('#submit').css('top', '344px');
		$(this).parents('.bmk').remove();
		$('.main .con .bmk').eq(0).find('i').remove();
		$('.tkMain').html('');
	});
	//提交报名
	$('#submit').click(function () {
		var len = $('.main .con .bmk').length;
		var html = "";
		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		name = $('input[name="name"]').val(); //姓名
		card = $('input[name="card"]').val(); //身份证
		tel = $('input[name="tel"]').val(); //手机号
		bourn = $('select[name="bourn"]').val(); //目的地
		person = $('select[name="person"]').val(); //人群分类
		if (!name.match(/^[\u4e00-\u9fa5]{1,5}$/i)) {
			alert('\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u4e2d\u6587\u540d');
			return false;
		}
		if (!RegExp(/^(0|86|17951)?(13[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/).test(tel)) {
			alert('\u624b\u673a\u683c\u5f0f\u4e0d\u6b63\u786e');
			return false;
		}
		if (reg.test(card) === false) {
			alert('\u8eab\u4efd\u8bc1\u53f7\u7801\u586b\u5199\u9519\u8bef');
			return false;
		}
		if (bourn === '0') {
			alert('\u8bf7\u9009\u62e9\u76ee\u7684\u5730');
			return false;
		}
		if (person === '0') {
			alert('\u8bf7\u9009\u62e9\u4eba\u7fa4\u5206\u7c7b');
			return false;
		}
		html = '<ul>' +
			'<li><span>\u59d3\u540d :</span><span>' + name + '</span></li>' +
			'<li><span>\u8eab\u4efd\u8bc1\u53f7\u7801 :</span><span>' + card + '</span></li>' +
			'<li><span>\u7535\u8bdd :</span><span>' + tel + '</span></li>' +
			'<li><span>\u76ee\u7684\u5730 :</span><span>' + bourn + '</span></li>' +
			'<li><span>\u4eba\u7fa4\u5206\u7c7b :</span><span>' + person + '</span></li>' +
			'</ul>';
		if (len === 2) {
			//出现同行乘车人时 进入判断
			name1 = $('#name1').val();
			card1 = $('#card1').val();
			tel1 = $('#tel1').val();
			bourn1 = $('#bourn1').val();
			person1 = $('#person1').val();
			if (!name1.match(/^[\u4e00-\u9fa5]{1,5}$/i)) {
				alert('\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u4e2d\u6587\u540d');
				return false;
			}
			if (!RegExp(/^(0|86|17951)?(13[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/).test(tel1)) {
				alert('\u624b\u673a\u683c\u5f0f\u4e0d\u6b63\u786e');
				return false;
			}
			if (reg.test(card1) === false) {
				alert('\u8eab\u4efd\u8bc1\u53f7\u7801\u586b\u5199\u9519\u8bef');
				return false;
			}
			if (bourn1 === '0') {
				alert('\u8bf7\u9009\u62e9\u76ee\u7684\u5730');
				return false;
			}
			if (person1 === '0') {
				alert('\u8bf7\u9009\u62e9\u4eba\u7fa4\u5206\u7c7b');
				return false;
			}
			html = '<ul>' +
				'<li><span>\u59d3\u540d :</span><span>' + name + '</span></li>' +
				'<li><span>\u8eab\u4efd\u8bc1\u53f7\u7801 :</span><span>' + card + '</span></li>' +
				'<li><span>\u7535\u8bdd :</span><span>' + tel + '</span></li>' +
				'<li><span>\u76ee\u7684\u5730 :</span><span>' + bourn + '</span></li>' +
				'<li><span>\u4eba\u7fa4\u5206\u7c7b :</span><span>' + person + '</span></li>' +
				'</ul>' + '<ul>' +
				'<li><span>\u59d3\u540d :</span><span>' + name1 + '</span></li>' +
				'<li><span>\u8eab\u4efd\u8bc1\u53f7\u7801 :</span><span>' + card1 + '</span></li>' +
				'<li><span>\u7535\u8bdd :</span><span>' + tel1 + '</span></li>' +
				'<li><span>\u76ee\u7684\u5730 :</span><span>' + bourn1 + '</span></li>' +
				'<li><span>\u4eba\u7fa4\u5206\u7c7b :</span><span>' + person1 + '</span></li>' +
				'</ul>';
		}
		$('.tkMain').append(html);
		$('.shade').fadeIn(300);
		$('.tk').fadeIn(300);
	});
	//关闭弹出显示框
	$('.tkColse').click(function () {
		$('.tkMain').html('');
		$('.shade').fadeOut(300);
		$('.tk').fadeOut(300);
	});
	//提交报名
	$('.tkBtn').click(function () {
		var Data = {};
		var len = $('.main .con .bmk').length;
		Data = {
			name: name,
			phone: tel,
			act_id: 3430,
			series_id: "",
			brand_id: "",
			chexing: "",
			dealers: card + '\u662f' + bourn + '\u662f' + person
		}
		if (len === 2) {
			Data = {
				name: name + '\u548c' + name1,
				phone: tel,
				act_id: 3430,
				series_id: "",
				brand_id: "",
				chexing: "",
				dealers: card + '\u662f' + bourn + '\u662f' + person
			}
		}
		var url = "";
		$.ajax({
			type: "get",
			url: url,
			data: Data,
			async: true,
			dataType: "jsonp",
			jsonpCallback: "jsonpReturn",
			success: function (data) {
				if (data.status == 1) {
					if (len === 2) {
						Data = {
							name: name1 + '\u548c' + name,
							phone: tel1,
							act_id: 3430,
							series_id: "",
							brand_id: "",
							chexing: "",
							dealers: card1 + '\u662f' + bourn1 + '\u662f' + person1
						};
						$.ajax({
							type: "get",
							url: url,
							data: Data,
							async: true,
							dataType: "jsonp",
							jsonpCallback: "jsonpReturn",
							success: function (data) {
								if (data.status == 1) {
									alert('\u606d\u559c\u4f60\uff0c\u62a5\u540d\u6210\u529f');
									window.location.href = location.href;
								} else {
									alert("\u5f88\u62b1\u6b49\uff0c\u4f60\u62a5\u540d\u5931\u8d25");
								}
							}
						});
					} else {
						alert('\u606d\u559c\u4f60\uff0c\u62a5\u540d\u6210\u529f');
						window.location.href = location.href;
					}
				} else {
					alert("\u5f88\u62b1\u6b49\uff0c\u4f60\u62a5\u540d\u5931\u8d25");
				}
			}
		});
	})