$(function(){

  if(getie() == 'ie'){
    var w = $(window).width()
    if(w <= 1300){
      $("head").append('<style>.con dl{height:25px;margin-bottom:3px;margin-top:0;float:left;}  #txtUserName, #txtMobile,.con dl dt{font-size:14px;height:22px;line-height:22px;}  .hRadio{font-size:12px;}  .con dl.city{margin-left:88px;margin-top:0px;}  .con dl dd select{padding:0;height:22px;line-height:22px;}  #city{margin-left:1px;}  .con dl dd select {width:105px;}  .dealers{margin-left:114px;}  .con dl dd select#dealer{width:234px;}  .models{margin-left:145px;}  .con dl dd select#models{width:217px;}  .con .accept{top:170px;left:147px;}  .shijia_title {font-size:20px;}</style>')
    }else if (w <= 1368){
      $("head").append('<style>  .con dl{height:25px;margin-top:5px;float:left;}  #txtUserName, #txtMobile,.con dl dt{font-size:14px;height:25px;line-height:25px;}  .hRadio{font-size:14px;}  .con dl.city{margin-left:88px;margin-top:5px;}  .con dl dd select{padding:0;height:25px;line-height:25px;}  #city{margin-left:1px;}  .con dl dd select {width:105px;}  .dealers{margin-left:114px;}  .con dl dd select#dealer{width:234px;}  .models{margin-left:145px;}  .con .accept{top:183px;left:162px;}  .shijia_title {font-size:22px;top:1.5%}  .order{top:19%;}</style>')
    }else if(w<1530){
      $("head").append('<style>  .con dl{height:25px;margin-top:7px;float:left;}  #txtUserName, #txtMobile,.con dl dt{font-size:14px;height:25px;line-height:25px;}  .hRadio{font-size:14px;}  .con dl.city{margin-left:88px;margin-top:5px;}  .con dl dd select{padding:0;height:25px;line-height:25px;}  #city{margin-left:1px;}  .con dl dd select {width:105px;}  .dealers{margin-left:114px;}  .con dl dd select#dealer{width:234px;}  .models{margin-left:186px;}  .con .accept{top:200px;left:186px;}  .shijia_title {font-size:22px;top:2%}  .order{top:19%;}</style>')
    }else if (w < 1700){
      $("head").append('<style>.con dl{height:30px;margin-top:7px;float:left;}  #txtUserName, #txtMobile,.con dl dt{font-size:14px;height:30px;line-height:30px;}  .hRadio{font-size:14px;}  .con dl.city{margin-left:110px;margin-top:5px;}  .con dl dd select{padding:0;height:30px;line-height:30px;}  #city{margin-left:1px;}  .con dl dd select {width:105px;}  .dealers{margin-left:145px;}  .con dl dd select#dealer{width:234px;}  .models{margin-left:187px;}  .con .accept{top:230px;left:187px;}  .shijia_title {font-size:22px;top:1.5%}  .order{top:19%;}</style>')
    }else if (w < 1800){
      $("head").append('<style>.hd_1_content{font-size:18px;}  .hd{top:14%;}  .con dl{height:30px;margin-top:7px;float:left;}  #txtUserName, #txtMobile,.con dl dt{font-size:14px;height:30px;line-height:30px;}  .hRadio{font-size:14px;}  .con dl.city{margin-left:110px;margin-top:5px;}  .con dl dd select{padding:0;height:30px;line-height:30px;}  #city{margin-left:1px;}  .con dl dd select {width:105px;}  .dealers{margin-left:145px;}  .con dl dd select#dealer{width:234px;}  .models{margin-left:187px;}  .con .accept{top:230px;left:187px;}  .shijia_title {font-size:22px;top:1.5%}  .order{top:19%;}</style>')
    }
  }
  ld_liwidth = $(".ld_down ul li").length * $(window).width() * 0.1 / 15
  $(".ld_down ul").css({"width": $(".ld_down ul li").length * $(window).width() * 0.1, "margin-left": (ld_liwidth - ld_liwidth * -0.068) * -2})
  ld_limove = ld_liwidth - ld_liwidth * 0.2
  $(".ld_down ul li").css({"width": ld_liwidth, "margin-left":ld_liwidth * -0.2})

  //返回顶部
  $("#totop").click(function(){
    var oTop = document.body.scrollTop || document.documentElement.scrollTop;
    $("html,body").animate({scrollTop:0},700);
  });

  $("#toshijia").click(function(){
    var oTop = document.body.scrollTop || document.documentElement.scrollTop;
    $("html,body").animate({scrollTop:oTop + ($("#shijia").offset().top-oTop-100)},700);
  })
  //返回顶部
})

//产品亮点
$(function(){
  inertval = setInterval(function(){right_donghua()}, 2000);
  ldclick = 1
  rightidx = '9999'
  $(".ld_down li").click(function(){
    if(ldclick != 1){return false}
    clearInterval(inertval)
    var idx = $(this).index()
    if(2<idx && idx<12){
      idx = idx - 3
      move_donghua(idx, '9999', 'right', 'click')
    }else if(idx<=2){
      move_donghua(idx + 6, idx, 'right', 'click')
    }else if(idx >= 12){
      move_donghua(idx - 12, idx, 'right', 'click')
    }
    inertval = setInterval(function(){right_donghua()}, 2000);
  })

  $(".ld_right").click(function(){
    clearInterval(inertval)
    right_donghua();
    inertval = setInterval(function(){right_donghua()}, 2000);
  })

  $(".ld_left").click(function(){
    if(ldclick != 1){return false}
    clearInterval(inertval)
    var rightidx = $(".ld_down li.selected").index();
    if(rightidx == 3){
      idx = 0
      $(".ld_down ul").animate({"left":-ld_limove * -1}, 200)
      move_donghua(idx - 1, 2)
    }else if(rightidx == 2){
      idx = -1
      $(".ld_down ul").animate({"left":-ld_limove * -2}, 200)
      move_donghua(idx - 1, 1)
    }else if(rightidx == 1){
      idx = -2
      $(".ld_down ul").animate({"left":-ld_limove * -3}, 200)
      move_donghua(idx - 1, 0)
    }else{
      $(".ld_down ul").animate({"left":-ld_limove * (rightidx-4)}, 200)
      move_donghua(rightidx - 4, rightidx-1)
    }
    inertval = setInterval(function(){right_donghua()}, 2000);
  })
})


function right_donghua(){
  if(ldclick != 1){return false}
  var idx = $(".ld_down li.selected").index() - 3;
  if(idx + 1 == $(".ld_move li").length){
    move_donghua(0, idx + 4)
  }else if(idx + 1 > $(".ld_move li").length){
    move_donghua((idx+1) - $(".ld_move li").length, idx + 4)
  }else{
    $(".ld_down ul").animate({"left":"-" + ld_limove * idx}, 200)
    move_donghua(idx + 1, rightidx, 'right')
  }
  if(idx > 0){
    $(".ld_down ul").animate({"left":"-" + ld_limove * idx}, 200)
  }
}

function move_donghua(idx, rightidx, direction, act){
  if($(".ld_move li").eq(idx).hasClass("selected") || $(".ld_down li").eq(rightidx).hasClass("selected")){
    return false;
  }
  ldclick = 0
  $(".ld_move li.selected").css("z-index", "1")
  $(".ld_down li").removeClass("selected");
  $(".ld_move li").eq(idx).css("z-index", 2)
  $(".ld_move li").eq(idx).fadeIn()
  setTimeout(function(){
    $(".ld_move li.selected").fadeOut();
    $(".ld_move li").removeClass("selected")
    $(".ld_move li").eq(idx).addClass("selected");

    if(rightidx != '9999'){
      if ($(".ld_down li").length - rightidx == 2){
        $(".ld_down ul").css("left", 0)
        $(".ld_down li").eq(4).addClass("selected")
        $(".ld_down li").eq(rightidx).removeClass("selected")
        rightidx = '9999'
      }else if(idx == -3){
        $(".ld_down ul").css("left",  -4*ld_limove)
        $(".ld_down li").eq($(".ld_down li").length -6).addClass("selected")
        $(".ld_down li").eq(rightidx).removeClass("selected")
        rightidx = '9999'
      }else{
        $(".ld_down li").eq(rightidx).addClass("selected");
        rightidx = '9999'
      }
    }else{
      if(direction == 'right'){
        $(".ld_down li").eq(idx + 3).addClass("selected");
        rightidx = '9999'
      }else{
        $(".ld_down li").eq(idx).addClass("selected");
        rightidx = '9999'
      }
    }
    
  }, 300)
  setTimeout(function(){
    ldclick = 1
  }, 600)
}
//产品亮点

//左右翻页
$(function(){
  click = 1
  $(".hd_left").click(function(){
    var idx = $(".hd .selected").index();
    move_left(idx)
  })
  $(".hd_right").click(function(){
    var idx = $(".hd .selected").index();
    move_right(idx)
  })
})
function move_left(idx){
  if (click == 1){
    click = 0
    if(getie() == 'ie'){
      $(".hd ul li").eq(idx).hide()
      $(".hd ul li").eq(idx-1).show()
      $(".hd ul li").eq(idx).removeClass('selected');
      $(".hd ul li").eq(idx-1).addClass("selected");
      click=1
    }else{
      $(".hd ul li").eq(idx-1).css("z-index", 2)
      $(".hd ul li").eq(idx-1).addClass("selected");
      $(".hd ul li").eq(idx).find(".hd_1_title").addClass("out")
      $(".hd ul li").eq(idx-1).find(".hd_1_title").removeClass("out")
      $(".hd ul li").eq(idx).find(".hd_1_content,.hd_1_name,.hd_1_er").animate({"opacity":'0'}, 100)
      $(".hd ul li").eq(idx-1).find(".hd_1_title").addClass("in")
      $(".hd ul li").eq(idx-1).find(".hd_1_img,.hd_1_content,.hd_1_name,.hd_1_er").animate({"opacity":'1'}, 500, function(){
        $(".hd ul li").eq(idx-1).css("z-index", 1)
        $(".hd ul li").eq(idx).removeClass('selected');
        $(".hd ul li").eq(idx).find('.hd_1_img').css("opacity" ,0)
        $(".hd ul li").eq(idx-1).find(".hd_1_title").removeClass("in");
        click=1
      })
    }
  }
}
function move_right(idx){
  if (click == 1){
    click = 0
    var len = $(".hd ul li").length
    if (idx + 1 == len){
      idx = -1
      $(".hd ul li").eq(idx+1).css("z-index", 2)
    }
    if(getie() == 'ie'){
      $(".hd ul li").eq(idx).hide()
      $(".hd ul li").eq(idx+1).show()
      $(".hd ul li").eq(idx).removeClass('selected');
      $(".hd ul li").eq(idx+1).addClass("selected");
      click=1
    }else{
      $(".hd ul li").eq(idx+1).addClass("selected");
      $(".hd ul li").eq(idx).find(".hd_1_title").addClass("out")
      $(".hd ul li").eq(idx+1).find(".hd_1_title").removeClass("out")
      $(".hd ul li").eq(idx).find(".hd_1_content,.hd_1_name,.hd_1_er").animate({"opacity":'0'}, 100)
      $(".hd ul li").eq(idx+1).find(".hd_1_title").addClass("in")
      $(".hd ul li").eq(idx+1).find(".hd_1_img,.hd_1_content,.hd_1_name,.hd_1_er").animate({"opacity":'1'}, 500, function(){
        $(".hd ul li").eq(idx+1).css("z-index", 1)
        $(".hd ul li").eq(idx).removeClass('selected');
        $(".hd ul li").eq(idx).find('.hd_1_img').css("opacity" ,0)
        $(".hd ul li").eq(idx+1).find(".hd_1_title").removeClass("in");
        click=1
      })
    }
  }
}
//左右翻页

//翻牌
$(function () {
  pageclick = 1
  $(".pageright").click(function(){
    if (pageclick == 1){
      pageclick = 0
      var idx = $(".option .selected").index();
      flip_right(idx, 'bd_img_1')
      flip_right(idx, 'bd_img_2')
      flip_right(idx, 'bd_img_3')
    }
  })

  $(".pageleft").click(function(){
    if (pageclick == 1){
      pageclick = 0
      var idx = $(".option .selected").index();
      flip_left(idx, 'bd_img_1')
      flip_left(idx, 'bd_img_2')
      flip_left(idx, 'bd_img_3')
    }
  })
});

function flip_right(idx, cla) {
  $(".bd_3_little_down,.bd_2_little_down").hide();

  $("."+cla).eq(idx).removeClass(cla + "_" + idx);
  $(".bdpage .option span").removeClass("selected")
  setTimeout(function(){
    $("."+cla).eq(idx).removeClass("selected")
    if (idx + 1 == $(".option span").length){
      $("."+cla).eq(0).addClass("selected")
      $(".bdpage .option span").eq(0).addClass("selected");
      i = 0
      $("."+cla).each(function(){
        $(this).addClass(cla + "_"+i)
        i++
      })
    }
    $("."+cla).eq(idx+1).addClass("selected")
    $(".bdpage .option span").eq(idx+1).addClass("selected")
    pageclick = 1
  }, 600)
  setTimeout(function(){
    $(".bd_3_little_down,.bd_2_little_down").fadeIn();
  }, 450)
}

function flip_left(idx, cla) {
  $("."+cla).eq(idx).removeClass("selected")
  if (idx == 0){
    idx = $(".option span").length
  }
  $("."+cla).eq(idx-1).addClass("selected")
  $("."+cla).eq(idx-1).removeClass(cla + "_" + (idx - 1))
  $(".bdpage .option span").removeClass("selected")
  setTimeout(function(){$("."+cla).eq(idx-1).addClass(cla + "_" + (idx - 1));}, 100)
  setTimeout(function(){$(".bdpage .option span").eq(idx-1).addClass("selected");pageclick=1}, 600)
}
//翻牌

function getie(){
  if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE6.0") {
    return 'ie'
  }
  else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0") {
    return 'ie'
  }
  else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0") {
    return 'ie'
  }
  else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE9.0") {
    return 'ie9'
  }
  return '';
}

//预约试驾

$(function(){
  s_city = remote_ip_info.city.replace('市', '')
  s_province = remote_ip_info.province.replace('省', '').replace("市", '')
  if (s_province == '' || s_province == undefined){s_province = '北京'}
  bindProvince(s_province, s_city);
  $("#province").change(function(){
    var id =$("#province").val();
    bindCity(id, '');
  });
  $("#city").change(function(){
    var id =$("#city").val();
    bindDealer(id);
  });
});
  
//绑定省份  
function bindProvince(s_province, s_city)
{
  $("#province").empty();
  $("#city").empty();
  $("#dealer").empty();
  $("#province").append("<option value='0'>请选择</option>");
  $.each(global_dykprovinces, function(kp,vp){
    $("#province").append("<option value='"+vp.provincecode+"'>"+vp.province+"</option>");  
  });
  $("#province").find("option:contains('"+s_province+"')").attr("selected",true);
  bindCity($("#province").val(), s_city);
}
//绑定城市
function bindCity(id, s_city)
{
  $("#city").empty();
  $("#dealer").empty();
  $("#city").append("<option value='0'>请选择</option>");
  $.each(global_dykcitys, function(kc,vc){
    if(vc.provincecode == id){
      $("#city").append("<option value='"+vc.citycode+"' >"+vc.city+"</option>");
    }
  });
  if (s_city == ''){
    s_city = $("#city option").eq(1).attr("selected",true);
  }
  if(s_city){
    $("#city").find("option:contains('"+s_city+"')").attr("selected",true);
    bindDealer($("#city").val())
    //$("#dealer option").eq(1).attr("selected",true);
    if($("#dealer option").length == 1){
      s_city = $("#city option").eq(1).html();
      bindCity(id, s_city)
    }
  }
}
//绑定经销商
function bindDealer(id)
{
 $("#dealer").empty();
 $("#dealer").append("<option value='0'>请选择</option>");
 var arr = new Array()
 $.each(global_dykdealers, function(kd,vd){
    if(vd.citycode == id){
      $("#dealer").append("<option value='"+vd.code+"' >"+vd.name+"</option>");
      arr.push('<tr><td>' + vd.name + '</td><td>'+ vd.tel +'</td><td style="padding-right:20px;">'+ vd.addr +'</td></tr>')
    }
  });
 str = '<tr><th width="35%">经销商</th><th width="20%">联系方式</th><th width="45%">地址</th></tr>'
 newarr = []
 randomSort(arr, newarr)
 $.each(newarr, function(key, val){
  str += val
 })
 $("#dealerTable table").html(str)
}

function randomSort(arr, newArr) {
  if(arr.length == 1) {
    newArr.push(arr[0]);
    return newArr; // 相当于递归退出
  }
  var random = Math.ceil(Math.random() * arr.length) - 1;
  newArr.push(arr[random]);
  arr.splice(random,1);
  return randomSort(arr, newArr);
}

function dclpv0() {
  var axel = Math.random() + "";
  var a = axel * 10000000000000;
  turl = 'https://3195624.fls.doubleclick.net/activityi;src=3195624;type=dykm00;cat=2018300a;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + '?';
  window.frames["doubleclickPV0"].location.href = turl;
}
function dclpv1(car, name, gender, phone, province, city, dealer) {
  var axel = Math.random() + "";
  var a = axel * 10000000000000;
  turl = 'https://3195624.fls.doubleclick.net/activityi;src=3195624;type=dykm00;cat=2018300b;u1=[' + car + '];u3=[' + name + '];u4=[' + gender + '];u5=[' + phone + '];u6=[' + province + '];u7=[' + city + '];u8=[' + dealer + '];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + '?';
  window.frames["doubleclickPV1"].location.href = turl;
}
function dclpv2() {
  var axel = Math.random() + "";
  var a = axel * 10000000000000;
  turl = 'https://3195624.fls.doubleclick.net/activityi;src=3195624;type=dykm00;cat=2018300-;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + '?';
  window.frames["doubleclickPV2"].location.href = turl;
}

//预约试驾
$(function(){

  $.ajax({
    url:"http://www.dyk.com.cn/api/get_car_types",
    type:"get",
    dataType:"jsonp",
    jsonpCallback:"jp",
    success:function(data){
      var length = data.data.car_types.length;
      for(var i = 0; i < length; i++){
        $("#models").append("<option value='"+data.data.car_types[i].id+"'>"+ data.data.car_types[i].name+"</option>")
      }
    }
  })

  $('#radiolist').hradio();
  if (navigator.userAgent.indexOf("MSIE")>0) {
    $("input[placeholder]").each(function(){
    $(this).val((($(this).val()=="")?$(this).attr("placeholder"):"")).blur(function(){
      if ($(this).val()=="") $(this).val($(this).attr("placeholder"));
    }).focus(function(){
        if ($(this).val()==$(this).attr("placeholder")) $(this).val("");
    });
    });
  }




var send_testdrive_flag = false;
$('#btnsbt').click(function(){
  if (send_testdrive_flag) {
    return;
  }
  send_testdrive_flag = true;

  dclpv0();
  ga('send', 'event', 'C13_Conversion', 'C13A15_2018年新一代智跑活动聚合页预约试驾提交', 'C13A15L01_点击预约试驾提交PC端按钮');
  var uname1 = $('#txtUserName').val();
  var mobile = $('#txtMobile').val();
  var proid = $('#province').val();
  var cityid = $('#city').val();
  var dealerid = $('#dealer').val();
  var dealername = $("select[name=dealer] option:selected").text();
  var sex = $('#radiolist :checked').val();
  var accept = $('#accept').is(':checked') ? '1' : '0';
  var models = $('#models').val();
  if(!$('#agreement').prop('checked')){
    dclpv2();
    ga('send', 'pageview', '/vp/201803sportage_r/testdrive-failed', {'dimension6': '请同意'});
    alert('您需要同意东风悦达起亚及其合作商有关购买新车事宜与您联系，并提供姓名和电话号码');
    send_testdrive_flag = false;
    return false;
  }
  if( uname1 == ''){
    dclpv2();
    ga('send', 'pageview', '/vp/201803sportage_r/testdrive-failed', {'dimension6': '姓名未填写'});
    alert('姓名必填');
    send_testdrive_flag = false;
    return false;
  }
  var _chked=false;
  $.each( $('input[name="sex"]') ,function(k,v){
    if($(v).attr('checked')){
      _chked = true;
    }
  });
  if(!_chked){
    dclpv2();
    ga('send', 'pageview', '/vp/201803sportage_r/testdrive-failed', {'dimension6': '性别未填写'});
    alert('请选择性别');
    send_testdrive_flag = false;
    return false;
  }
  if( mobile == ''){
    dclpv2();
    ga('send', 'pageview', '/vp/201803sportage_r/testdrive-failed', {'dimension6': '手机号未填写'});
    alert('手机号码必填');
    send_testdrive_flag = false;
    return false;
  }
 var reg = /^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/;
  if (reg.test(mobile)) {
  }else{
    dclpv2();
    ga('send', 'pageview', '/vp/201803sportage_r/testdrive-failed', {'dimension6': '手机号未填写'});
    alert('请填入正确的手机号码');
    $("#txtMobile").focus();
    send_testdrive_flag = false;
    return false;
  };

  if( $('#city').val() == '请选择'){
    dclpv2();
    ga('send', 'pageview', '/vp/201803sportage_r/testdrive-failed', {'dimension6': '城市未填写'});
    alert('请选择城市');
    send_testdrive_flag = false;
    return false;
  }
  if( !cityid ){
    dclpv2();
    ga('send', 'pageview', '/vp/201803sportage_r/testdrive-failed', {'dimension6': '城市未填写'});
    alert('请选择城市');
    send_testdrive_flag = false;
    return false;
  }
  if( !dealerid || dealerid=='请选择经销商' ){
    dclpv2();
    ga('send', 'pageview', '/vp/201803sportage_r/testdrive-failed', {'dimension6': '经销商未填写'});
    alert('请选择经销商');
    send_testdrive_flag = false;
    return false;
  }
  if($('#dealer').val() == '' || $('#dealer').val() == '请选择经销商' || $('#dealer').val() == '请从列表中选择经销商'){
    dclpv2();
    ga('send', 'pageview', '/vp/201803sportage_r/testdrive-failed', {'dimension6': '经销商未填写'});
    alert('请从列表中选择经销商');
    send_testdrive_flag = false;
    return false;
  }
  if( $('#email').val() == ''){
    dclpv2();
    alert('email必填');
    send_testdrive_flag = false;
    return false;
  }
  if( models == '' || models=='请选择'){
    dclpv2();
    ga('send', 'pageview', '/vp/201803sportage_r/testdrive-failed', {'dimension6': '车型未填写'});
    alert('请选择车型');
    send_testdrive_flag = false;
    return false;
  }
  $.ajax({
    type: "get",
    url: "http://www.dyk.com.cn/index/clue_add_jp",
    async: true,
    dataType: "jsonp",
    jsonp: "jp",
    data: {
      "clue_type": "1",
      "car_model_id": models,
      "province_id": proid,
      "city_id": cityid,
      "dealer_name": dealername,
      "clue_fullname": uname1,
      "clue_gender": sex,
      "clue_tel": mobile,
      "utm_source":Request('utm_source',''),
      "utm_content":Request('utm_content',''),
      "utm_campaig":Request('utm_campaign',''),
      "utm_medium":Request('utm_medium',''),
      "utm_term":Request('utm_term',''),
      "activity": "区域新一代智跑 震撼来袭",
      "remark": "区域新一代智跑 震撼来袭-线索"
    },
    success: function(data) {
      
    },
  });
  $("#txtUserName").val('')
  $("#txtMobile").val('')
  ga('send', 'pageview', '/vp/201803sportage_r/testdrive-finished', {'dimension1': uname1 + '_' + sex + '_' + mobile.substr(3,8) + '_' + '/' + '_'  + $("select[name=province] option:selected").text() + '_' + $("select[name=city] option:selected").text() + '_' + dealername + '_' + '/' + '_' + models + '_' + '/' });
  dclpv1(models, uname1, sex, mobile, $("select[name=province] option:selected").text(), $("select[name=city] option:selected").text(), dealername);
  alert('提交成功');
  send_testdrive_flag = false;
    })
})

function Request(strName, defaultValue) {
  var strHref = location.href;
  var intPos = strHref.indexOf("?");
  var strRight = strHref.substr(intPos + 1);
  var arrTmp = strRight.split("&");
  for (var i = 0; i < arrTmp.length; i++) {
    var arrTemp = arrTmp[i].split("=");
    if (arrTemp[0].toUpperCase() == strName.toUpperCase()) return arrTemp[1];
  }
  return defaultValue;
}

//机器人
$(function(){
  scale = $(window).width() * 0.31/598
  $(".jqr_more").eq(0).attr("coords", "0,0, " + 172*scale+ ",0, "+232*scale+","+68*scale+","+ 60*scale+","+68*scale);
  $(".jqr_more").eq(1).attr("coords", 182*scale + ",0, " + 356*scale +",0, "+416*scale +"," +68*scale+", "+244*scale+","+68*scale);
  $(".jqr_more").eq(2).attr("coords", 366*scale+ ",0, "+536*scale+ ",0, "+598*scale+ ","+68*scale+ ", "+426*scale+ ","+68*scale)
  $(window).resize(function(){
    scale = $(window).width() * 0.31/598
    $(".jqr_more").eq(0).attr("coords", "0,0, " + 172*scale+ ",0, "+232*scale+","+68*scale+","+ 60*scale+","+68*scale);
    $(".jqr_more").eq(1).attr("coords", 182*scale + ",0, " + 356*scale +",0, "+416*scale +"," +68*scale+", "+244*scale+","+68*scale);
    $(".jqr_more").eq(2).attr("coords", 366*scale+ ",0, "+536*scale+ ",0, "+598*scale+ ","+68*scale+ ", "+426*scale+ ","+68*scale)
  })
  var jqr_idx = 0;
  var jqr_imgs = [
    'http://market.dyk.com.cn/dealers-ad/201804dealers-ad/PC/jqr/jqr0.png',
    'http://market.dyk.com.cn/dealers-ad/201804dealers-ad/PC/jqr/jqr1.png',
    'http://market.dyk.com.cn/dealers-ad/201804dealers-ad/PC/jqr/jqr2.png',
    'http://market.dyk.com.cn/dealers-ad/201804dealers-ad/PC/jqr/jqr3.png',
    'http://market.dyk.com.cn/dealers-ad/201804dealers-ad/PC/jqr/jqr4.png',
    'http://market.dyk.com.cn/dealers-ad/201804dealers-ad/PC/jqr/jqr5.png',
    'http://market.dyk.com.cn/dealers-ad/201804dealers-ad/PC/jqr/jqr6.png',
    'http://market.dyk.com.cn/dealers-ad/201804dealers-ad/PC/jqr/jqr9.png',
    'http://market.dyk.com.cn/dealers-ad/201804dealers-ad/PC/jqr/jqr10.png',
    'http://market.dyk.com.cn/dealers-ad/201804dealers-ad/PC/jqr/jqr11.png',
    'http://market.dyk.com.cn/dealers-ad/201804dealers-ad/PC/jqr/jqr12.png',
    'http://market.dyk.com.cn/dealers-ad/201804dealers-ad/PC/jqr/jqr13.png',
  ];
  $('.dialog_wrap').css('margin-top', ($(window).height() - 482) / 2 - 80);
  var jqr_cnt = jqr_imgs.length;

  $('.jqr_more').on('click', function() {
    $('#dialog').fadeIn();
    jqr_idx = parseInt($(this).attr('data-idx'));
    jqr_show();
  });

  $('.dialog_close').on('click', function() {
    $('#dialog').fadeOut();
  });
  
  $('#jqr_dialog_nav_l').on('click', function() {
    jqr_idx--;
    jqr_show();
  });
  $('#jqr_dialog_nav_r').on('click', function() {
    jqr_idx++;
    jqr_show();
  });
  
  function jqr_show() {
    if (jqr_idx < 0) {
      jqr_idx = jqr_cnt - 1;
    } else if (jqr_idx >= jqr_cnt) {
      jqr_idx = 0;
    }
    var second = $('#jqr_dialog_content PC[data-value=0]');
    second.attr('src', jqr_imgs[jqr_idx]);
    second.css('z-index', 0);
    second.show();
    var primary = $('#jqr_dialog_content PC[data-value=1]');
    primary.fadeOut(function() {
      second.attr('data-value', 1);
      second.css('z-index', 1);
      primary.attr('data-value', 0);
      primary.css('z-index', 0);
    });
    //$('#jqr_dialog_content PC').attr('src', jqr_imgs[jqr_idx]);
  }
  
});
