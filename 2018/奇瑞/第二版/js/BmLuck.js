	var pop = new Popup('red','1','腾讯汽车提示');
    var ckName,ckType,ckPhone,ckModel;
    $('.x').click(function () {
        $('.zz').fadeOut(300).removeClass('active');
        $('.bm').fadeOut(300).removeClass('active');
        $('.ml-main').fadeOut(300).removeClass('active');
    });
    $('.ck').click(function () {
        $('.zz').fadeIn(300).addClass('active');
        $('.bm').fadeIn(300).addClass('active');
        $('.ml-main').fadeIn(300).addClass('active');
    });
    //抽奖报名
    $('.qd').click(function () {
		ckName = $('#ckName').val();
		ckPhone = $('#ckPhone').val();
		ckModel = $('#ckModel').val();
		ckType = $('#ckType').val();
		var Data = {
			name: ckName,
			phone: ckPhone,
			identity: ckType,
			model: ckModel
		};
		if(!ckName.match(/^[\u4e00-\u9fa5]{1,4}$/i)){
			pop.showNotice('请输入正确的中文名');
			return false;
		};
		if(!RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/).test(ckPhone)) {
			pop.showNotice('手机格式不正确');
			return false;
		};
		if (ckModel==0) {
			pop.showNotice("请选择车型");
			return false;
		};
		if(ckType == 0) {
			pop.showNotice("请输入身份信息");
			return false;
		};

		$.ajax({
		    type:"get",
		    url: "http://i99sa2.natappfree.cc/txqc/index.php?s=/Home/SpringTravel/springTravel_baoming",
		    data:Data,
		    async:true,
		    dataType:"jsonp",
		    success:function(data){
		        if(data.status==1){
		            pop.showNotice('恭喜你，报名成功!',function () {
                        $('.bm').fadeOut(300).removeClass('active');
                        $('.ml-main').css({zIndex:'997'});
                    });

		        } else if(data.status==3){
                    pop.showNotice("<p>您的手机号<span style='color: red;'>"+ckPhone+"</span>已经参与过抽奖了</p>");
                }
		        else{
		            pop.showNotice("很抱歉，你报名失败。");
		        }
		    }
		});
		// $('.bm').fadeOut(300).removeClass('active');
		// $('.ml-main').css({zIndex:'997'});
		console.log(ckName,ckPhone,ckModel,ckType)
    });
    //抽奖初始化
	var turnplate={
			restaraunts:[],				//大转盘奖品名称
			colors:[],	                //大转盘奖品区块对应背景颜色
			outsideRadius:210,			//大转盘外圆的半径
			textRadius:165,				//大转盘奖品位置距离圆心的距离
			insideRadius:50,			//大转盘内圆的半径
			startAngle:0,				//开始角度
			bRotate:false				//false:停止;ture:旋转
	};
	$(document).ready(function(){
		//动态添加大转盘的奖品与奖品区域背景颜色
		turnplate.restaraunts = [ "谢谢参与", "幸福春节红包1个", "谢谢参与", "1000元购车抵用券1张", "幸福春节红包1个", "1000元购车抵用券1张"];
		turnplate.colors = ["transparent"];
		//旋转转盘 item:奖品位置; txt：提示语;
		var rotateFn = function (item, txt){
			var angles = item * (360 / turnplate.restaraunts.length) - (360 / (turnplate.restaraunts.length*2));
			if(angles<270){
				angles = 270 - angles;
			}else{
				angles = 360 - angles + 270;
			}
			$('#wheelcanvas').stopRotate();
			$('#wheelcanvas').rotate({
				angle:0,
				animateTo:angles+1800,
				duration:6000,
				callback:function (){
					//中奖页面弹窗
					if(txt.indexOf("谢谢参与")>=0){
						pop.showNotice('谢谢参与！',function () {
							$('.zz').fadeOut(300).removeClass('active');
							$('.ml-main').fadeOut(300).removeClass('active');
						});
					}
					if (txt.indexOf("幸福春节红包1个")>=0) {
						pop.showNotice('恭喜你获得幸福春节红包1个！',function () {
							$('.zz').fadeOut(300).removeClass('active');
							$('.ml-main').fadeOut(300).removeClass('active');
						});
					}
					if (txt.indexOf("1000元购车抵用券1张")>=0) {
						pop.showNotice('恭喜你获得购车抵用券1000元1张！',function () {
							$('.zz').fadeOut(300).removeClass('active');
							$('.ml-main').fadeOut(300).removeClass('active');
						});
					}
					turnplate.bRotate = !turnplate.bRotate;
				}
			});
		};

		/********抽奖开始**********/
		$('#tupBtn').click(function (){
			if(turnplate.bRotate)return;
			turnplate.bRotate = !turnplate.bRotate;
			//抽奖判断
			var Data = {
				phone: ckPhone,
				pid: 4
			};
            $.ajax({
                type:"get",
                url: "http://i99sa2.natappfree.cc/txqc/index.php?s=/Home/SpringTravel/springTravel_luck",
                data:Data,
                async:true,
                dataType:"jsonp",
                success:function(data){
                    if(data.status==1){
						var luckID = data.data.gift_id;

                       //幸福红包    购物卷    谢谢参与
						var arrx = [2,5],arrg = [4,6],arrs = [1,3],item;
						if (luckID == 16) {
							item = arrx[Math.floor((Math.random()*arrx.length))]
						} else if (luckID == 17) {
                            item = arrg[Math.floor((Math.random()*arrg.length))]
                        } else {
                            item = arrs[Math.floor((Math.random()*arrs.length))]
                        }
                        console.log(item);
                        console.log(data);
                        rotateFn(item, turnplate.restaraunts[item-1]);
                    }
                    else{
                        pop.showNotice("您的手机号已经参与过活动了",function () {
                            window.location.href = location.href+'?time='+((new Date()).getTime())
                        });
                    }
                }
            });

		})

	});

	// function rnd(n, m){
	// 	var random = Math.floor(Math.random()*(m-n+1)+n);
	// 	return random;
	// }

	//页面所有元素加载完毕后执行drawRouletteWheel()方法对转盘进行渲染
	window.onload=function(){
		drawRouletteWheel();
	};
	//绘制 canvas抽奖画布
	function drawRouletteWheel() {
	  var canvas = document.getElementById("wheelcanvas");
	  if (canvas.getContext) {
		  //根据奖品个数计算圆周角度
		  var arc = Math.PI / (turnplate.restaraunts.length/2);
		  var ctx = canvas.getContext("2d");
		  //在给定矩形内清空一个矩形
		  ctx.clearRect(0,0,500,500);
		  //strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式
		  ctx.strokeStyle = "transparent";
		  //font 属性设置或返回画布上文本内容的当前字体属性
		  ctx.font = 'bold 22px Microsoft YaHei';
		  for(var i = 0; i < turnplate.restaraunts.length; i++) {
			  var angle = turnplate.startAngle + i * arc;
			  ctx.fillStyle = turnplate.colors[i];
			  ctx.beginPath();
			  //arc(x,y,r,起始角,结束角,绘制方向) 方法创建弧/曲线（用于创建圆或部分圆）
			  ctx.arc(250, 250, turnplate.outsideRadius, angle, angle + arc, false);
			  ctx.arc(250, 250, turnplate.insideRadius, angle + arc, angle, true);
			  ctx.stroke();
			  ctx.fill();
			  //锁画布(为了保存之前的画布状态)
			  ctx.save();

			  //----绘制奖品文字颜色----
			  ctx.fillStyle = "#fff";
			  var text = turnplate.restaraunts[i];
			  var line_height = 30;
			  //translate方法重新映射画布上的 (0,0) 位置
			  ctx.translate(250 + Math.cos(angle + arc / 2) * turnplate.textRadius, 250 + Math.sin(angle + arc / 2) * turnplate.textRadius);

			  //rotate方法旋转当前的绘图
			  ctx.rotate(angle + arc / 2 + Math.PI / 2);

			  /** 下面代码根据奖品类型、奖品名称长度渲染不同效果，如字体、颜色、图片效果。(具体根据实际情况改变) **/
			  if(text.indexOf("\n")>0){//换行
				  var texts = text.split("\n");
				  for(var j = 0; j<texts.length; j++){
					  ctx.font = j == 0?'bold 22px Microsoft YaHei':'bold 22px Microsoft YaHei';
					  //ctx.fillStyle = j == 0?'#FFFFFF':'#FFFFFF';
					  if(j == 0){
						  //ctx.fillText(texts[j]+"M", -ctx.measureText(texts[j]+"M").width / 2, j * line_height);
						  ctx.fillText(texts[j], -ctx.measureText(texts[j]).width / 2, j * line_height);
					  }else{
						  ctx.fillText(texts[j], -ctx.measureText(texts[j]).width / 2, j * line_height);
					  }
				  }
			  }else if(text.indexOf("\n") == -1 && text.length>6){//奖品名称长度超过一定范围
				  text = text.substring(0,6)+"||"+text.substring(6);
				  var texts = text.split("||");
				  for(var j = 0; j<texts.length; j++){
					  ctx.fillText(texts[j], -ctx.measureText(texts[j]).width / 2, j * line_height);
				  }
			  }else{
				  //在画布上绘制填色的文本。文本的默认颜色是黑色
				  //measureText()方法返回包含一个对象，该对象包含以像素计的指定字体宽度
				  ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
			  }

			  //把当前画布返回（调整）到上一个save()状态之前
			  ctx.restore();
			  //----绘制奖品结束----
		  }
	  }


}
