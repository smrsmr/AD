$(document).ready(function() {
    //打开修改数据框
    $(document).on('click','li .openEdit', function() {
        $('.bac').fadeIn(200);
        $('.editBox').fadeIn(200);
        let id = $(this).parent('li').attr('data-id');
        let val = $(this).parent('li').attr('data-value');
        $('.editBox #name').val(val).attr('data-id',id);
    });
    $('.bac').click(function () {
        $('.bac').fadeOut(200);
        $('.editBox').fadeOut(200);
    });
    //添加数据
    $(document).on('click','#addItem', function(event) {
        event.preventDefault();
        var item = $('form #item');
        if (item.val()==''){
            item.focus();
            return false;
        }
        var todo = { name: item.val().trim()};
        $.ajax({
            type: 'POST',
            url: '/add',
            data: todo,
            success: function(data) {
                $('ul').html('');
                data.forEach(function (todo) {
                    $('ul').append('<li data-value="'+todo.name+'" data-id="'+todo._id+'">'+todo.name+'<i class="delete"></i><i class="openEdit"></i></li>')
                });
                item.val('').focus();
            }
        });

        return false;

    });
    //搜索数据
    $(document).on('click','#searchItem', function(event) {
        event.preventDefault();
        var item = $('form #item');
        if (item.val()==''){
            item.focus();
        }
        var todo = { name: item.val().trim()};
        $.ajax({
            type: 'POST',
            url: '/search',
            data: todo,
            success: function(data) {
                $('ul').html('');
                data.forEach(function (todo) {
                    $('ul').append('<li data-value="'+todo.name+'" data-id="'+todo._id+'">'+todo.name+'<i class="delete"></i><i class="openEdit"></i></li>')
                });
                item.val('').focus();
            }
        });

        return false;

    });
    //修改数据
    $(document).on('click','#saveEdit', function() {
        $('.bac').fadeOut(200);
        $('.editBox').fadeOut(200);
        let editID = {id:$('.editBox #name').attr('data-id'),editName:$('.editBox #name').val()};
        $.ajax({
            type: 'POST',
            data: editID,
            url: '/edit',
            success: function(data) {
                $('ul').html('');
                data.forEach(function (todo) {
                    $('ul').append('<li data-value="'+todo.name+'" data-id="'+todo._id+'">'+todo.name+'<i class="delete"></i><i class="openEdit"></i></li>')
                })
            }
        });
    });
    //删除数据
    $(document).on('click','li .delete', function() {
        let item = $(this).parent('li').attr('data-id');
        $.ajax({
            type: 'DELETE',
            url: '/delete/' + item,
            success: function(data) {
                $('ul').html('');
                data.forEach(function (todo) {
                    $('ul').append('<li data-value="'+todo.name+'" data-id="'+todo._id+'">'+todo.name+'<i class="delete"></i><i class="openEdit"></i></li>')
                })
            }
        });
    });

});