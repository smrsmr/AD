/**
 * Created by Administrator on 2018/1/20 020.
 */
$(function () {
    var name_one,phone_one,num = 1,name_two,phone_two,html,route,routeVal,name_three,phone_three;

    //点击城市站
    $('.pq').click(function () {
        var dataId= $(this).attr('data-id');
        route = $(this).attr('data-route');
        $('.bm'+dataId).fadeIn(300).siblings().fadeOut(100);
        $('#route').val(dataId);
        // $('html,body').animate({scrollTop: 3400 },300)
    });
    $('.sub').click(function () {
        var name = $(this).parent().find('#name').val();
        var tel = $(this).parent().find('#tel').val();
        if(!name.match(/^[\u4e00-\u9fa5]{1,4}$/i)){
            alert('请输入正确的中文名');
            return false;
        };
        if(!RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/).test(tel)) {
            alert('手机格式不正确');
            return false;
        }
        console.log(name,tel,route)
    });



    //默认开始渲染一个报名框
    html = '';
    html += '<div class="lx"><p>姓名</p><p><input type="text" placeholder="请输入您的姓名" id="name_one"></p></div>' +
        '<div class="lx" style="margin-right: 0"><p>联系方式</p><p><input type="tel" placeholder="请输入您的电话" id="phone_one" maxlength="11"></p></div>'
    $('.mm').append(html);
    $('#num').change(function () {
        num = $(this).val();
        $('.mm').empty();
        if ( num == 1 ) {
            html = '';
            html += '<div class="lx"><p>姓名</p><p><input type="text" placeholder="请输入您的姓名" id="name_one"></p></div>' +
                '<div class="lx" style="margin-right: 0"><p>联系方式</p><p><input type="tel" placeholder="请输入您的电话" id="phone_one" maxlength="11"></p></div>'
            $('.mm').append(html)
        }
        if ( num == 2 ) {
            html = '';
            html += '<div class="lx"><p>姓名</p><p><input type="text" placeholder="请输入您的姓名" id="name_one"></p></div>'+
                '<div class="lx" style="margin-right: 0"><p>联系方式</p><p><input type="tel" placeholder="请输入您的电话" id="phone_one" maxlength="11"></p></div>'+
                '<div class="lx"><p>姓名</p><p><input type="text" placeholder="请输入您的姓名" id="name_two"></p></div>'+
                '<div class="lx" style="margin-right: 0"><p>联系方式</p><p><input type="tel" placeholder="请输入您的电话" id="phone_two" maxlength="11"></p></div>'
            $('.mm').append(html)
        }
        if ( num == 3) {
            html = '';
            html += '<div class="lx"><p>姓名</p><p><input type="text" placeholder="请输入您的姓名" id="name_one"></p></div>'+
                '<div class="lx" style="margin-right: 0"><p>联系方式</p><p><input type="tel" placeholder="请输入您的电话" id="phone_one" maxlength="11"></p></div>'+
                '<div class="lx"><p>姓名</p><p><input type="text" placeholder="请输入您的姓名" id="name_two"></p></div>'+
                '<div class="lx" style="margin-right: 0"><p>联系方式</p><p><input type="tel" placeholder="请输入您的电话" id="phone_two" maxlength="11"></p></div>'+
                '<div class="lx"><p>姓名</p><p><input type="text" placeholder="请输入您的姓名" id="name_three"></p></div>'+
                '<div class="lx" style="margin-right: 0"><p>联系方式</p><p><input type="tel" placeholder="请输入您的电话" id="phone_three" maxlength="11"></p></div>'
            $('.mm').append(html)
        }
    });
    $('#submit').click(function () {
        name_one = $("#name_one").val();
        phone_one = $("#phone_one").val();
        name_two = $("#name_two").val();
        phone_two = $("#phone_two").val();
        name_three = $("#name_three").val();
        phone_three = $("#phone_three").val();
        route = $('#route option:checked').text();
        routeVal = $('#route').val();
        if ( num == 1 ) {
            if ( routeVal == 0 ) {
                alert('请选择路线');
                return false;
            }
            if(!name_one.match(/^[\u4e00-\u9fa5]{1,4}$/i)){
                alert('请输入正确的中文名');
                return false;
            };
            if(!RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/).test(phone_one)) {
                alert('手机格式不正确');
                return false;
            }
            var Data = {
                route: route,
                num: num,
                name_one: name_one,
                phone_one: phone_one
            };
            $.ajax({
                type:"get",
                url: "http://www.yetcar.com/index.php?s=/Home/Bus/bus_baoming",
                data:Data,
                async:true,
                dataType:"jsonp",
                success:function(data){
                    if(data.status==1){
                        alert('恭喜你，报名成功！');
                        window.location.href = location.href+'?time='+((new Date()).getTime());
                    }else{
                        alert("很抱歉，你报名失败。");
                    }
                }
            });
        }
        if ( num == 2 ) {
            if ( routeVal == 0 ) {
                alert('请选择路线');
                return false;
            }
            if(!name_one.match(/^[\u4e00-\u9fa5]{1,4}$/i) || !name_two.match(/^[\u4e00-\u9fa5]{1,4}$/i)){
                alert('请输入正确的中文名');
                return false;
            };
            if(!RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/).test(phone_one) || !RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/).test(phone_two)) {
                alert('手机格式不正确');
                return false;
            }
            var Data = {
                route: route,
                num: num,
                name_one: name_one,
                phone_one: phone_one,
                name_two: name_two,
                phone_two: phone_two
            };
            $.ajax({
                type:"get",
                url: "http://www.yetcar.com/index.php?s=/Home/Bus/bus_baoming",
                data:Data,
                async:true,
                dataType:"jsonp",
                success:function(data){
                    if(data.status==1){
                        alert('恭喜你，报名成功！');
                        window.location.href = location.href+'?time='+((new Date()).getTime());
                    }else{
                        alert("很抱歉，你报名失败。");
                    }
                }
            });
        }
        if ( num == 3 ) {
            if ( routeVal == 0 ) {
                alert('请选择路线');
                return false;
            }
            if(!name_one.match(/^[\u4e00-\u9fa5]{1,4}$/i) || !name_two.match(/^[\u4e00-\u9fa5]{1,4}$/i) || !name_three.match(/^[\u4e00-\u9fa5]{1,4}$/i)){
                alert('请输入正确的中文名');
                return false;
            };
            if(!RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/).test(phone_one) || !RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/).test(phone_two) || !RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/).test(phone_three)) {
                alert('手机格式不正确');
                return false;
            }
            var Data = {
                route: route,
                num: num,
                name_one: name_one,
                phone_one: phone_one,
                name_two: name_two,
                phone_two: phone_two,
                name_three: name_three,
                phone_three: phone_three
            };
            $.ajax({
                type:"get",
                url: "http://www.yetcar.com/index.php?s=/Home/Bus/bus_baoming",
                data:Data,
                async:true,
                dataType:"jsonp",
                success:function(data){
                    if(data.status==1){
                        alert('恭喜你，报名成功！');
                        window.location.href = location.href+'?time='+((new Date()).getTime());
                    }else{
                        alert("很抱歉，你报名失败。");
                    }
                }
            });
        }

        console.log(name_one,phone_one,route,num);

        console.log(name_two,phone_two,route,num);

        console.log(name_three,phone_three,route,num);


    });

});