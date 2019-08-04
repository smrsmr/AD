$(function () {
    //获取集字 输出

    var setword = {
        hadWrod:[                                   //初始文字图片
            'http://img1.gtimg.com/autoguangzhou/pics/hv1/4/78/208/13545094.png',
            'http://img1.gtimg.com/autoguangzhou/pics/hv1/8/78/208/13545098.png',
            'http://img1.gtimg.com/autoguangzhou/pics/hv1/7/78/208/13545097.png',
            'http://img1.gtimg.com/autoguangzhou/pics/hv1/6/78/208/13545096.png',
        ],
        //页面开始加载时获取
        getDataHadWrod:function(){
            $('.jzL ul').html('');
            var b=[1,2];
            var c=[1,3];
            var d=[1,2,3];
            var e=[1,2,3,4];
            var res=[];
            //获取该用户已经有的字
            $.ajax({
                type:"GET",
                url:getUserStatus_url,
                data:{},
                async:true,
                dataType:'json',
                success:function(data){
                    console.log(data);
                    //判断状态码
                    if (data.status == 0) {
                        //存储领取红包的判断
                        localStorage.is_draw=data.data.is_draw;
                        //判断活动是否结束
                        if (data.data.is_over==1){
                            $('#page1Bmk').click(function () {
                                $('.page6').show();
                            });
                            return;
                        }
                        //判断是否报名
                        if (data.data.is_sign==0) {
                            $('#page1Bmk').click(function () {
                                $(this).parent('.pg').fadeOut(300);
                                $('.page2').fadeIn(300);
                            });
                        } else if (data.data.is_sign==1){
                            $('#page1Bmk').click(function () {
                                $(this).parent('.pg').fadeOut(300);
                                $('.page3').fadeIn(300);
                            });
                        }
                        //是否集完字
                        res = data.myword;
                        if (data.data.is_finish==0) {
                            //未集完字
                            if (res.sort().toString() == b.sort().toString()) {
                                setword.hadWrod.splice(1,1,'http://img1.gtimg.com/autoguangzhou/pics/hv1/243/79/208/13545588.png');
                            }
                            if (res.sort().toString() == c.sort().toString()) {
                                setword.hadWrod.splice(2,1,'http://img1.gtimg.com/autoguangzhou/pics/hv1/252/79/208/13545597.png');
                            }
                            if (res.sort().toString() == d.sort().toString()) {
                                setword.hadWrod.splice(1,2,'http://img1.gtimg.com/autoguangzhou/pics/hv1/243/79/208/13545588.png','http://img1.gtimg.com/autoguangzhou/pics/hv1/252/79/208/13545597.png');
                            }
                            if (res.sort().toString() == e.sort().toString()) {
                                setword.hadWrod.splice(1,3,'http://img1.gtimg.com/autoguangzhou/pics/hv1/243/79/208/13545588.png','http://img1.gtimg.com/autoguangzhou/pics/hv1/252/79/208/13545597.png','http://img1.gtimg.com/autoguangzhou/pics/hv1/0/80/208/13545600.png');
                            }
                        } else if (data.data.is_finish==1) {
                            //已集完字
                            setword.hadWrod.splice(1,3,'http://img1.gtimg.com/autoguangzhou/pics/hv1/243/79/208/13545588.png','http://img1.gtimg.com/autoguangzhou/pics/hv1/252/79/208/13545597.png','http://img1.gtimg.com/autoguangzhou/pics/hv1/0/80/208/13545600.png');
                            $('.page3 h1').text('已收集');
                            $('.page3 #share').hide();
                            $('.page3 #prize').show();
                            // $('.page3 .ts').show();
                        }
                        //修改图片数组 输出到页面
                        for (var i=0;i<setword.hadWrod.length;i++){
                            var li = '<li>'+
                                '<PC src="'+setword.hadWrod[i]+'"/>'+
                                '</li>';
                            $('.jzL ul').append(li);
                        }
                    } else {
                        alert(data.msg)
                    }
                }
            });
        },
        //微信转发调用
        getShareLog:function () {
            var res=0;
            //
            $.ajax({
                type:"GET",
                url:getShareLog_url,
                data:{},
                async:true,
                dataType:'json',
                success:function(data){
                    if (data.status==0){
                        console.log(data);
                        res = data.word;
                        if (res==2) {
                            $('.jzL ul li').eq(1).find('PC').attr('src','http://img1.gtimg.com/autoguangzhou/pics/hv1/243/79/208/13545588.png')
                        }
                        if (res==3) {
                            $('.jzL ul li').eq(2).find('PC').attr('src','http://img1.gtimg.com/autoguangzhou/pics/hv1/252/79/208/13545597.png')
                        }
                    }else {

                    }
                }
            });
        }
    };
    //页面开始时自动调用
    setword.getDataHadWrod();
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
    var share_title = '一起玩集字游戏，抢好礼';
    var share_desc = '只需集齐“腾讯汽车”四个字，即可领取好礼，先到先得';
    var share_image = 'http://img1.gtimg.com/autoguangzhou/pics/hv1/145/99/208/13550590.jpg';
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
    /*发送手机验证码*/
    $('#getCode').click(function () {
        var mobile = $('#tel').val();
        $('#getCode').attr('disabled', 'disabled');
        var c=10;
        //在此调用获取短信验证码接口
        $.ajax({
            type:"POST",
            url:getMsgCode_url,
            data:{
                mobile:mobile
            },
            async:true,
            dataType:'json',
            success:function(data){
                console.log(data);
                if (data.status==0){
                    alert('短信发送成功,请注意查收');
                    var jump = setInterval(function(){
                        c--;
                        $('#getCode').val(c+'s');
                        if(c<=0){
                            clearInterval(jump);
                            $('#getCode').val('获取');
                            $('#getCode').removeAttr('disabled', 'disabled');
                        }
                    },1000);
                } else {
                    alert('发送异常,请重试')
                }
            }
        });
    });
    //报名
    $('#submit').click(function () {
        var name = $('#name').val(),
            mobile = $('#tel').val(),
            models_id = $('#brand').val(),
            models = $('#brand option:checked').text(),
            series = $('#series option:checked').text(),
            series_id = $('#series').val(),
            sms = $('#code').val(),
            Data = {
                name: name,
                mobile: mobile,
                series: series,
                models: models,
            };
        if(!name.match(/^[\u4e00-\u9fa5]{1,4}$/i)){
            alert('请输入正确的中文名');
            return false;
        }
        if(!RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/).test(mobile)) {
            alert('手机格式不正确');
            return false;
        }
        if (models_id == '0') {
            alert('请选择意向品牌');
            return false;
        }
        if (series_id == '0') {
            alert('请选择意向车型');
            return false;
        }
        if (sms == '') {
            alert('请输入短信验证码');
            return false;
        }
        //发送请求
        $.ajax({
            type: "POST",
            url: postUserInfo_url,
            data: Data,
            async: true,
            dataType: "json",
            success: function (data) {
                if (data.status == 0) {
                    alert("恭喜你，报名成功了");
                    $(this).parent('.pg').fadeOut(300);
                    $('.page3').fadeIn(300);
                } else {
                    alert("很抱歉，你报名失败。");
                }
            }
        });
    });
    //请求红包
    $('.page4 #getMoy').click(function () {
        $(this).parent().fadeOut(300);
        $('.page5').fadeIn(300);
        if (localStorage.is_draw==0) {
            $.ajax({
                type: "get",
                url: getPrize_url,
                data: {},
                async: true,
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                    if (data.status == 0) {
                        //存储红包金额
                        localStorage.m=data.money;
                        $('.page5 #setNum').text(data.money);
                    }
                }
            });
            alert('恭喜您领到红包！');
        }
        if (localStorage.is_draw==1) {
            $('.page5 #setNum').text(localStorage.m);
            alert('您已领过红包！');
        }
    });
    //弹出活动规则框
    $('.page1 #tk').click(function () {
        $('.page1 .popup').fadeIn(200);
    });
    $('.page1 .popup').click(function () {
        $(this).fadeOut(200);
    });
    //获取车型品牌函数
    var getBrand = (function () {
        /*获取所有品牌*/
        $.ajax({
            type:"get",
            url:"http://www.yetcar.com/index.php?s=/Home/Data/GetSeries",
            data:{},
            async:true,
            dataType:'jsonp',
            success:function(data){
                if(data.status==1){
                    for(var i=0;i<data.data.length;i++){
                        var brand=$('<option value="'+data.data[i].id+'">'+data.data[i].name+'</option>');
                        $('#brand').append(brand);
                    }
                }
            }
        });
        $('#brand').change(function(){
            $('#series').find("option:not(:first)").remove();
            var brand_id=$("#brand option:checked").val();
            $.ajax({
                type: "get",
                url: 'http://www.yetcar.com/index.php?s=/Home/Data/getModels',
                data: {
                    series_id:brand_id
                },
                async: true,
                dataType: "jsonp",
                success: function(data) {
                    for(var i=0;i<data.data.length;i++){
                        var series=$('<option value="'+data.data[i].id+'">'+data.data[i].name+'</option>');
                        $('#series').append(series)
                    }
                }
            });
        });
    })();
    $('#share').click(function () {
        $('.page3 .shareImg').show();
    });
    //领取红包按钮
    $('#prize').click(function () {
        $('#prize').parent().fadeOut(300);
        $('.page4').fadeIn(300);
    });
    $('.page3 .shareImg').click(function () {
        $(this).hide();
    });
    //关闭 活动提示界面
    $('.page6').click(function () {
        $(this).hide();
    });
    $(window).load(function() {
        $(".page3 .textList").mCustomScrollbar({
            scrollInertia: 550,
            autoHideScrollbar: false
        });
    });
});