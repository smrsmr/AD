﻿// JavaScript Document
// var loadingHost = '';
var loadingHost = 'http://mat1.gtimg.com/autoguangzhou/2018web/cs/';
var imgArray = [
	// "images/DIN-BlackItalic.otf",
	loadingHost+"images/icon.png",
	loadingHost+"images/loading.gif",
	loadingHost+"images/loading-bg.png",
	loadingHost+"images/loading-icon.png",
	loadingHost+"images/loading-title.png",
	loadingHost+"images/page-bg.png",
	loadingHost+"images/page0-box.png",
	loadingHost+"images/page2-icon.png",
	loadingHost+"images/page4-icon.png",
	loadingHost+"images/page5-bg.png",
	loadingHost+"images/result-add.png",
	loadingHost+"images/result-ercode.png",
	loadingHost+"images/result-lagou.png",
	loadingHost+"images/result-person-01.png",
	loadingHost+"images/result-person-02.png",
	loadingHost+"images/result-person-03.png",
	loadingHost+"images/result-person-04.png",
	loadingHost+"images/result-text-a-01.png",
	loadingHost+"images/result-text-a-02.png",
	loadingHost+"images/result-text-a-03.png",
	loadingHost+"images/result-text-a-04.png",
	loadingHost+"images/result-text-b-01.png",
	loadingHost+"images/result-text-b-02.png",
	loadingHost+"images/result-text-b-03.png",
	loadingHost+"images/result-text-c-01.png",
	loadingHost+"images/result-text-c-02.png",
	loadingHost+"images/result-text-c-03.png",
	loadingHost+"images/result-text-d-01.png",
	loadingHost+"images/result-text-d-02.png",
	loadingHost+"images/result-tips.png",
	loadingHost+"images/result-title.png"
];
var now = 0;
// jQuery.ajax({
//     type:'get',
//     url:'https://activity.lagou.com/activityapi/common/getNow',
//     success:function(data){
//         now = data.content;
//     }
// });
// 资源加载
var Loader = function(){
	this.currProgress = 0;  // 当前加载进度
	this.isCompleted = false; // 判断是否加载完毕
	this.total = 100;  // 最大值100

	var loaded = 0;

	var loading = document.getElementById('loading'),
		number = document.getElementById('loading__num')//,
		// progress_bg = document.getElementById('loading__progress'),
		// progress = document.getElementById('progress'),
		// w = progress_bg.offsetWidth;// / imgArray.length;//20;
	// alert(w)
	this.Loading = function(imgArray,success){
		var self = this;
		for( var i = 0 ; i < imgArray.length; i++ ){
			var ext = imgArray[i].substring(imgArray[i].lastIndexOf('.')).toLowerCase();
			if( /((.png)|(.jpg)|(.jpeg)|(.gif))/g.test(ext)){
				var img = new Image();
				img.onload = function(){
					loaded ++;
					self.currProgress = Math.floor(loaded / imgArray.length * 100)
					// progress.style.width = self.currProgress / 100 * w+"px";  // self.currProgress / 100 * w+"px"
					number.innerHTML = (self.currProgress).toFixed(0)+"%";
					// var o = Math.floor(self.currProgress / 100),
					// 	s = Math.floor(self.currProgress % 100 / 10),
					// 	t = self.currProgress % 100 % 10
					// number.innerHTML = '<div class="num'+(o > 0 ? '' : ' hide')+' num'+o+'"></div>'+
					// 	'<div class="num'+(o || s > 0 ? '' : ' hide')+' num'+s+'"></div>'+
					// 	'<div class="num num'+t+'"></div><div class="unit"></div>'
					if( loaded == imgArray.length ){
						success();  // 回调函数
					}
				};
				img.onerror = function(){
					loaded ++;
					if( loaded == imgArray.length ){
						success();  // 回调函数
					}
				};
				// PC.src = ctx + "/template/1024/" + imgArray[i];
                img.src = imgArray[i]; // loadingHost + imgArray[i];
			}else{
				this.loadMusic(imgArray[i]);  // loadingHost + imgArray[i]
			}
		}
	};
	this.loadMusic = function(path){
		jQuery.ajax({
			type: 'get',
			url: path,
			data: {},
			async:false,   // false 同步  true  异步
			success: function (data) {
				loaded++;
				if( loaded == imgArray.length ){
					success();  // 回调函数
				}
				//console.log("success");
			},
			error: function (xhr, type)  {
				loaded++;
				if( loaded == imgArray.length ){
					success();  // 回调函数
				}
				//console.log('error');
			}
		})
	};
	this.success = function(){
		// progress.style.width = w+"px";
		// number.innerHTML = "100%";
		var last = new Date().getTime(),
			middle = last - startTime;
		if(middle >= 2000){
			middle = 50;
		}
		setTimeout(function(){
			console.log("加载完毕");
			loadingStatus = true;
			if(pageStatus){
				pageStatus = false;
				loadingStatus = false;
				loadingSuccess();
			}
		},middle);
		//init.initDate();  // 设置时间
		// init.page1Play();  // 播放音乐
		// init(now);

		//jQuery('.page5').removeClass('hidden');
		//jQuery('.page5 .message').removeClass('hidden');
		//jQuery('.page5 .messBG').addClass('person').removeClass('hidden');
		//init.nextAnimate();
	};
	this.loadLoading = function(imgArray,obj){
		// var PC = new Image();
		// PC.onload = function(){
			obj.Loading(imgArray,obj.success);
		// };
		// PC.onerror = function(){
			// obj.Loading(imgArray,obj.success);
		// };
		// PC.src = ctx + "/template/1024/" + imgArray[0];
        // PC.src = imgArray[0];
	};
};
//window.onload = function(){
var loader = new Loader();
loader.loadLoading(imgArray,loader);
//};