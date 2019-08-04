$(function () {
    //预加载
	var loading = function () {
		    //等待动画
        var loadingDiv=document.getElementById('loading');
        var linkImgs=[
            'http://mat1.gtimg.com/autoguangzhou/2018web/jiyou/PC/1.jpg',
            'http://mat1.gtimg.com/autoguangzhou/2018web/jiyou/PC/2.jpg',
            'http://mat1.gtimg.com/autoguangzhou/2018web/jiyou/PC/3-1.jpg',
            'http://mat1.gtimg.com/autoguangzhou/2018web/jiyou/PC/3-2.jpg',
            'http://mat1.gtimg.com/autoguangzhou/2018web/jiyou/PC/3-4-1.jpg',
        ];
        function preloadImges(arrImg) {
            var newImges=[],loadedImges=0;
            function imgloadpost() {
                loadedImges++;
                if (loadedImges == arrImg.length) {
                    loadingDiv.style.display = 'none';
                }
            }
            for (var i=0;i<arrImg.length;i++){
                newImges[i]=new Image();
                newImges[i].src=arrImg[i];
                newImges[i].onload=function () {
                    imgloadpost()
                };
                newImges[i].onerror=function () {
                    imgloadpost()
                };
            }
        }
        preloadImges(linkImgs);
    };
    loading();
    //获取url值的方法
    function GetRequest() {
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }
    var Request = new Object();
    Request = GetRequest();
    /////////////////
    function GetQueryString() {
        var url = location.search; //获取url中"?"符后的字串
        var str = url.match(/link_openid\/(\S*)&openid/);
        if (str !== null) {
            str = url.match(/link_openid\/(\S*)&openid/)[1]
        } else {
            str = void 0;
        }
        return str;
    }
    //点击领取机油方法
    $('.tzEngine').click(function () {
        if (localStorage.yx == 'null' || localStorage.yx == '') {
            $.ajax({
                type: "GET",
                url: 'http://www.yetcar.com/index.php?s=/Home/LightTank/get_light_code',
                data: {},
                async: true,
                dataType: "jsonp",
                success: function (data) {
                    $('.slider2 .code').text(data.data);
                }
            });
        } else {
            $('.slider2 .code').text(localStorage.yx);
        }
    });
    $('.slider1 .b').click(function () {
        $('.slider1 .activity').fadeIn(300);
    });
    $('.close').click(function () {
        $('.slider1 .bmk').fadeOut(300);
        $('.slider1 .activity').fadeOut(300);
        $('.slider2 .getEngine').fadeOut(300);
        $('.slider4').fadeOut(300);
        $('.slider3 .jpBlock').fadeOut(300);
        $('.slider2 .Success2').fadeOut(300);
    });
    $('.slider2 .tzEngine').click(function () {
        $('.slider2 .Success2').fadeOut(300);
        $('.slider2 .getEngine').fadeIn(300);
    });
    $('.slider2 .surprised').click(function () {
        $('.slider2').fadeOut(300).nextAll('.slider3').fadeIn(300)
    });
    //获取车型
    $.ajax({
        type: "get",
        url: 'http://www.yetcar.com/index.php?s=/Home/Data/getModels',
        data: {
            series_id: 8
        },
        async: true,
        dataType: "jsonp",
        success: function (data) {
            for (var i = 0; i < data.data.length; i++) {
                var series = $('<option value="' + data.data[i].id + '">' + data.data[i].name + '</option>');
                $('#series').append(series)
            }
        }
    });

    //点灯接口
    function linkOpenid(DD) {
        $.ajax({
            type: 'get',
            url: 'http://www.yetcar.com/index.php?s=/Home/LightTank/light',
            data: DD,
            async: false,
            dataType: "jsonp",
            success: function (data) {
                if (data.data.link_name){
                    alert('恭喜您，报名成功！我已为'+data.data.link_name+'点亮油桶');
                    $('.slider1').fadeOut(300).nextAll('.slider2').fadeIn(300);
                }else {
                    alert('恭喜您，报名成功！');
                    $('.slider1').fadeOut(300).nextAll('.slider2').fadeIn(300);
                }
            }
        });
    }

    //报名
    var DD = {}, openid, openid1;
    $("#submit").click(function () {
        var name = $("#name").val(),  //姓名
            tel = $("#tel").val(), //电话
            series_id = $('#series').val(),    //车型id
            brand_id = 8, //品牌
            act_id = 2700,  //活动id
            Url = "http://www.yetcar.com/index.php?s=/Home/GeneralActivity/baoming",
            Data = {
                name: name,
                phone: tel,
                brand_id: brand_id,
                series_id: series_id,
                act_id: act_id,
                dealers: '广州通立德美奥迪4s店'
            };
        //判断填写是否正确
        if (!name.match(/^[\u4e00-\u9fa5]{1,4}$/i)) {
            alert('请输入正确的中文名');
            return false;
        }
        if (!RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/).test(tel)) {
            alert('手机格式不正确');
            return false;
        }
        if (series_id == '0') {
            alert('请选择车型');
            return false;
        }
        //发送请求
        $.ajax({
            type: "get",
            url: Url,
            data: Data,
            async: true,
            dataType: "jsonp",
            success: function (data) {
                if (data.status == 1) {
                    openid = Request['link_openid'];
                    openid1 = GetQueryString();
                    if (openid === void 0 && openid1 === void 0) {
                        DD = {
                            type: 1,
                            link_openid: ''
                        };
                        linkOpenid(DD)
                    } else {
                        if (openid1 !== void 0) {
                            openid = openid1;
                        }
                        DD = {
                            type: 2,
                            link_openid: openid
                        };
                        linkOpenid(DD)
                    }
                } else {
                    alert("很抱歉，您报名失败。");
                }
            }
        });
    });
    //地图模块
    $('.mapS').click(function () {
        wx.openLocation({
            latitude: 23.179120, // 纬度，浮点数，范围为90 ~ -90
            longitude: 113.333420, // 经度，浮点数，范围为180 ~ -180。
            name: '广州通立德美汽车贸易有限公司', // 位置名
            address: '广州市白云区沙太路668号', // 地址详情说明
            scale: 22, // 地图缩放级别,整形值,范围从1~28。默认为最大
        })
    });
});