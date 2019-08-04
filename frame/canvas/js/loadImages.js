function scriptPath() {
    var scripts = document.scripts;
    var script = scripts[scripts.length - 1];
    return script.hasAttribute ? script.src : script.getAttribute("src", 4);
}
var jsSrc = scriptPath();
function loadImages(options) {
    var options = $.extend({
            isShowLoading: true,
            isShwoProgress: true,
            progress: function (per) { loader.find('#schedule').html(per + '%'); },
            finish: function () { $('#container').show(); },
            complete: function () { }
        }, options),
        imgs = options.images, loader = $('#loader'), c = imgs.length, i = c, cc = 0, imgObjs = [], img = {}, cdn = '', res = {};
    if (jsSrc.indexOf('http://') === 0 && jsSrc.indexOf('') > 0) {
        cdn = jsSrc.substring(0, jsSrc.indexOf('js/'));
    }
    if ($('#container').find('input,select,textarea').length > 0) {
        $('body').removeClass('rotatetips');
    }
    if (c < 1) {
        loader.removeClass('loading');
        options.finish.call(imgObjs);
        options.complete.call(null, res);
        return;
    }
    if (options.isShowLoading) {
        loader.addClass('loading');
        options.isShwoProgress && loader.find('#schedule').html('0%');
    }
    var loaded = function () {
        cc++;
        options.isShowLoading && options.isShwoProgress && options.progress.call(imgObjs[cc], Math.floor(cc / c * 100));
        if (cc >= c) {
            setTimeout(function () {
                loader.removeClass('loading');
                options.finish.call(imgObjs);
                options.complete.call(null, res);
            }, 50);
        }
    };
    while (i--) {
        img = new Image();
        img.src = cdn + imgs[i];
        if (img.complete) {
            loaded();
        }
        else {
            img.onload = img.onerror = function () {
                loaded();
            };
        }
        imgObjs[i] = img;
        res[imgs[i]] = img;
    }
}