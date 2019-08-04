!function (c, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = c.document ? b(c, !0) : function (a) {
        if (!a.document) throw Error("jQuery requires a window with a document");
        return b(a)
    } : b(c)
}("undefined" != typeof window ? window : this, function (c, b) {
    function a(a) {
        var d = a.length, e = n.type(a);
        return "function" === e || n.isWindow(a) ? !1 : 1 === a.nodeType && d ? !0 : "array" === e || 0 === d || "number" == typeof d && 0 < d && d - 1 in a
    }

    function d(a, d, e) {
        if (n.isFunction(d)) return n.grep(a, function (a, b) {
            return !!d.call(a, b,
                a) !== e
        });
        if (d.nodeType) return n.grep(a, function (a) {
            return a === d !== e
        });
        if ("string" == typeof d) {
            if (Da.test(d)) return n.filter(d, a, e);
            d = n.filter(d, a)
        }
        return n.grep(a, function (a) {
            return 0 <= n.inArray(a, d) !== e
        })
    }

    function e(a, d) {
        do a = a[d]; while (a && 1 !== a.nodeType);
        return a
    }

    function f(a) {
        var d = ab[a] = {};
        return n.each(a.match(na) || [], function (a, e) {
            d[e] = !0
        }), d
    }

    function h() {
        S.addEventListener ? (S.removeEventListener("DOMContentLoaded", k, !1), c.removeEventListener("load", k, !1)) : (S.detachEvent("onreadystatechange",
            k), c.detachEvent("onload", k))
    }

    function k() {
        (S.addEventListener || "load" === event.type || "complete" === S.readyState) && (h(), n.ready())
    }

    function m(a, d, e) {
        if (void 0 === e && 1 === a.nodeType) {
            var b = "data-" + d.replace(sb, "-$1").toLowerCase();
            if (e = a.getAttribute(b), "string" == typeof e) {
                try {
                    e = "true" === e ? !0 : "false" === e ? !1 : "null" === e ? null : +e + "" === e ? +e : va.test(e) ? n.parseJSON(e) : e
                } catch (c) {
                }
                n.data(a, d, e)
            } else e = void 0
        }
        return e
    }

    function p(a) {
        for (var d in a) if (("data" !== d || !n.isEmptyObject(a[d])) && "toJSON" !== d) return !1;
        return !0
    }

    function q(a, d, e, b) {
        if (n.acceptData(a)) {
            var c, f, h = n.expando, g = a.nodeType, k = g ? n.cache : a, m = g ? a[h] : a[h] && h;
            if (m && k[m] && (b || k[m].data) || void 0 !== e || "string" != typeof d) return m || (m = g ? a[h] = ba.pop() || n.guid++ : h), k[m] || (k[m] = g ? {} : {toJSON: n.noop}), ("object" == typeof d || "function" == typeof d) && (b ? k[m] = n.extend(k[m], d) : k[m].data = n.extend(k[m].data, d)), f = k[m], b || (f.data || (f.data = {}), f = f.data), void 0 !== e && (f[n.camelCase(d)] = e), "string" == typeof d ? (c = f[d], null == c && (c = f[n.camelCase(d)])) : c = f, c
        }
    }

    function u(a, d, e) {
        if (n.acceptData(a)) {
            var b,
                c, f = a.nodeType, h = f ? n.cache : a, g = f ? a[n.expando] : n.expando;
            if (h[g]) {
                if (d && (b = e ? h[g] : h[g].data)) {
                    n.isArray(d) ? d = d.concat(n.map(d, n.camelCase)) : d in b ? d = [d] : (d = n.camelCase(d), d = d in b ? [d] : d.split(" "));
                    for (c = d.length; c--;) delete b[d[c]];
                    if (e ? !p(b) : !n.isEmptyObject(b)) return
                }
                (e || (delete h[g].data, p(h[g]))) && (f ? n.cleanData([a], !0) : F.deleteExpando || h != h.window ? delete h[g] : h[g] = null)
            }
        }
    }

    function v() {
        return !0
    }

    function z() {
        return !1
    }

    function y() {
        try {
            return S.activeElement
        } catch (a) {
        }
    }

    function t(a) {
        var d = Ka.split("|");
        a = a.createDocumentFragment();
        if (a.createElement) for (; d.length;) a.createElement(d.pop());
        return a
    }

    function B(a, d) {
        var e, b, c = 0,
            f = "undefined" !== typeof a.getElementsByTagName ? a.getElementsByTagName(d || "*") : "undefined" !== typeof a.querySelectorAll ? a.querySelectorAll(d || "*") : void 0;
        if (!f) for (f = [], e = a.childNodes || a; null != (b = e[c]); c++) !d || n.nodeName(b, d) ? f.push(b) : n.merge(f, B(b, d));
        return void 0 === d || d && n.nodeName(a, d) ? n.merge([a], f) : f
    }

    function C(a) {
        bb.test(a.type) && (a.defaultChecked = a.checked)
    }

    function I(a,
               d) {
        return n.nodeName(a, "table") && n.nodeName(11 !== d.nodeType ? d : d.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function T(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function O(a) {
        var d = tb.exec(a.type);
        return d ? a.type = d[1] : a.removeAttribute("type"), a
    }

    function G(a, d) {
        for (var e, b = 0; null != (e = a[b]); b++) n._data(e, "globalEval", !d || n._data(d[b], "globalEval"))
    }

    function g(a, d) {
        if (1 === d.nodeType && n.hasData(a)) {
            var e, b, c;
            b = n._data(a);
            var f = n._data(d, b), h = b.events;
            if (h) for (e in delete f.handle, f.events = {}, h) for (b = 0, c = h[e].length; c > b; b++) n.event.add(d, e, h[e][b]);
            f.data && (f.data = n.extend({}, f.data))
        }
    }

    function M(a, d) {
        var e, b = n(d.createElement(a)).appendTo(d.body),
            f = c.getDefaultComputedStyle && (e = c.getDefaultComputedStyle(b[0])) ? e.display : n.css(b[0], "display");
        return b.detach(), f
    }

    function H(a) {
        var d = S, e = za[a];
        return e || (e = M(a, d), "none" !== e && e || (La = (La || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(d.documentElement),
            d = (La[0].contentWindow || La[0].contentDocument).document, d.write(), d.close(), e = M(a, d), La.detach()), za[a] = e), e
    }

    function K(a, d) {
        return {
            get: function () {
                var e = a();
                if (null != e) return e ? void delete this.get : (this.get = d).apply(this, arguments)
            }
        }
    }

    function Q(a, d) {
        if (d in a) return d;
        for (var e = d.charAt(0).toUpperCase() + d.slice(1), b = d, c = ib.length; c--;) if (d = ib[c] + e, d in a) return d;
        return b
    }

    function L(a, d) {
        for (var e, b, c, f = [], h = 0, g = a.length; g > h; h++) b = a[h], b.style && (f[h] = n._data(b, "olddisplay"), e = b.style.display, d ? (f[h] ||
        "none" !== e || (b.style.display = ""), "" === b.style.display && Aa(b) && (f[h] = n._data(b, "olddisplay", H(b.nodeName)))) : (c = Aa(b), (e && "none" !== e || !c) && n._data(b, "olddisplay", c ? e : n.css(b, "display"))));
        for (h = 0; g > h; h++) b = a[h], b.style && (d && "none" !== b.style.display && "" !== b.style.display || (b.style.display = d ? f[h] || "" : "none"));
        return a
    }

    function D(a, d, e) {
        return (a = Ob.exec(d)) ? Math.max(0, a[1] - (e || 0)) + (a[2] || "px") : d
    }

    function U(a, d, e, b, c) {
        d = e === (b ? "border" : "content") ? 4 : "width" === d ? 1 : 0;
        for (var f = 0; 4 > d; d += 2) "margin" === e && (f +=
            n.css(a, e + ra[d], !0, c)), b ? ("content" === e && (f -= n.css(a, "padding" + ra[d], !0, c)), "margin" !== e && (f -= n.css(a, "border" + ra[d] + "Width", !0, c))) : (f += n.css(a, "padding" + ra[d], !0, c), "padding" !== e && (f += n.css(a, "border" + ra[d] + "Width", !0, c)));
        return f
    }

    function W(a, d, e) {
        var b = !0, c = "width" === d ? a.offsetWidth : a.offsetHeight, f = Ma(a),
            h = F.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= c || null == c) {
            if (c = Na(a, d, f), (0 > c || null == c) && (c = a.style[d]), wa.test(c)) return c;
            b = h && (F.boxSizingReliable() || c === a.style[d]);
            c = parseFloat(c) ||
                0
        }
        return c + U(a, d, e || (h ? "border" : "content"), b, f) + "px"
    }

    function E(a, d, e, b, c) {
        return new E.prototype.init(a, d, e, b, c)
    }

    function V() {
        return setTimeout(function () {
            Sa = void 0
        }), Sa = n.now()
    }

    function Z(a, d) {
        var e, b = {height: a}, c = 0;
        for (d = d ? 1 : 0; 4 > c; c += 2 - d) e = ra[c], b["margin" + e] = b["padding" + e] = a;
        return d && (b.opacity = b.width = a), b
    }

    function fa(a, d, e) {
        for (var b, c = (cb[d] || []).concat(cb["*"]), f = 0, h = c.length; h > f; f++) if (b = c[f].call(e, d, a)) return b
    }

    function N(a, d) {
        var e, b, c, f, h;
        for (e in a) if (b = n.camelCase(e), c = d[b], f = a[e],
        n.isArray(f) && (c = f[1], f = a[e] = f[0]), e !== b && (a[b] = f, delete a[e]), h = n.cssHooks[b], h && "expand" in h) for (e in f = h.expand(f), delete a[b], f) e in a || (a[e] = f[e], d[e] = c); else d[b] = c
    }

    function ha(a, d, e) {
        var b, c = 0, f = jb.length, h = n.Deferred().always(function () {
            delete g.elem
        }), g = function () {
            if (b) return !1;
            for (var d = Sa || V(), d = Math.max(0, k.startTime + k.duration - d), e = 1 - (d / k.duration || 0), c = 0, f = k.tweens.length; f > c; c++) k.tweens[c].run(e);
            return h.notifyWith(a, [k, e, d]), 1 > e && f ? d : (h.resolveWith(a, [k]), !1)
        }, k = h.promise({
            elem: a,
            props: n.extend({}, d),
            opts: n.extend(!0, {specialEasing: {}}, e),
            originalProperties: d,
            originalOptions: e,
            startTime: Sa || V(),
            duration: e.duration,
            tweens: [],
            createTween: function (d, e) {
                var b = n.Tween(a, k.opts, d, e, k.opts.specialEasing[d] || k.opts.easing);
                return k.tweens.push(b), b
            },
            stop: function (d) {
                var e = 0, c = d ? k.tweens.length : 0;
                if (b) return this;
                for (b = !0; c > e; e++) k.tweens[e].run(1);
                return d ? h.resolveWith(a, [k, d]) : h.rejectWith(a, [k, d]), this
            }
        });
        e = k.props;
        for (N(e, k.opts.specialEasing); f > c; c++) if (d = jb[c].call(k, a, e, k.opts)) return d;
        return n.map(e, fa, k), n.isFunction(k.opts.start) && k.opts.start.call(a, k), n.fx.timer(n.extend(g, {
            elem: a,
            anim: k,
            queue: k.opts.queue
        })), k.progress(k.opts.progress).done(k.opts.done, k.opts.complete).fail(k.opts.fail).always(k.opts.always)
    }

    function ia(a) {
        return function (d, e) {
            "string" != typeof d && (e = d, d = "*");
            var b, c = 0, f = d.toLowerCase().match(na) || [];
            if (n.isFunction(e)) for (; b = f[c++];) "+" === b.charAt(0) ? (b = b.slice(1) || "*", (a[b] = a[b] || []).unshift(e)) : (a[b] = a[b] || []).push(e)
        }
    }

    function ca(a, d, e, b) {
        function c(g) {
            var k;
            return f[g] = !0, n.each(a[g] || [], function (a, J) {
                var g = J(d, e, b);
                return "string" != typeof g || h || f[g] ? h ? !(k = g) : void 0 : (d.dataTypes.unshift(g), c(g), !1)
            }), k
        }

        var f = {}, h = a === ub;
        return c(d.dataTypes[0]) || !f["*"] && c("*")
    }

    function x(a, d) {
        var e, b, c = n.ajaxSettings.flatOptions || {};
        for (b in d) void 0 !== d[b] && ((c[b] ? a : e || (e = {}))[b] = d[b]);
        return e && n.extend(!0, a, e), a
    }

    function A(a, d, e, b) {
        var c;
        if (n.isArray(d)) n.each(d, function (d, c) {
            e || Pb.test(a) ? b(a, c) : A(a + "[" + ("object" == typeof c ? d : "") + "]", c, e, b)
        }); else if (e || "object" !==
            n.type(d)) b(a, d); else for (c in d) A(a + "[" + c + "]", d[c], e, b)
    }

    function w() {
        try {
            return new c.XMLHttpRequest
        } catch (a) {
        }
    }

    function X(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }

    var ba = [], R = ba.slice, ga = ba.concat, P = ba.push, ja = ba.indexOf, ma = {}, Ba = ma.toString,
        xa = ma.hasOwnProperty, F = {}, n = function (a, d) {
            return new n.fn.init(a, d)
        }, Ca = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, kb = /^-ms-/, Ea = /-([\da-z])/gi, Oa = function (a, d) {
            return d.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: "1.11.1", constructor: n,
        selector: "", length: 0, toArray: function () {
            return R.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
        }, pushStack: function (a) {
            a = n.merge(this.constructor(), a);
            return a.prevObject = this, a.context = this.context, a
        }, each: function (a, d) {
            return n.each(this, a, d)
        }, map: function (a) {
            return this.pushStack(n.map(this, function (d, e) {
                return a.call(d, e, d)
            }))
        }, slice: function () {
            return this.pushStack(R.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var d = this.length;
            a = +a + (0 > a ? d : 0);
            return this.pushStack(0 <= a && d > a ? [this[a]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: P, sort: ba.sort, splice: ba.splice
    };
    n.extend = n.fn.extend = function () {
        var a, d, e, b, c, f, h = arguments[0] || {}, g = 1, k = arguments.length, m = !1;
        "boolean" == typeof h && (m = h, h = arguments[g] || {}, g++);
        "object" == typeof h || n.isFunction(h) || (h = {});
        for (g === k && (h = this, g--); k > g; g++) if (null != (c = arguments[g])) for (b in c) a = h[b], e = c[b], h !== e && (m && e && (n.isPlainObject(e) ||
            (d = n.isArray(e))) ? (d ? (d = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, h[b] = n.extend(m, f, e)) : void 0 !== e && (h[b] = e));
        return h
    };
    n.extend({
        expando: "jQuery" + ("1.11.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw Error(a);
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === n.type(a)
        }, isArray: Array.isArray || function (a) {
            return "array" === n.type(a)
        }, isWindow: function (a) {
            return null != a && a == a.window
        }, isNumeric: function (a) {
            return !n.isArray(a) && 0 <= a - parseFloat(a)
        }, isEmptyObject: function (a) {
            for (var d in a) return !1;
            return !0
        }, isPlainObject: function (a) {
            var d;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            try {
                if (a.constructor && !xa.call(a, "constructor") && !xa.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            if (F.ownLast) for (d in a) return xa.call(a, d);
            for (d in a) ;
            return void 0 === d || xa.call(a, d)
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? ma[Ba.call(a)] || "object" : typeof a
        }, globalEval: function (a) {
            a && n.trim(a) && (c.execScript || function (a) {
                c.eval.call(c,
                    a)
            })(a)
        }, camelCase: function (a) {
            return a.replace(kb, "ms-").replace(Ea, Oa)
        }, nodeName: function (a, d) {
            return a.nodeName && a.nodeName.toLowerCase() === d.toLowerCase()
        }, each: function (d, e, b) {
            var c, f = 0, h = d.length, g = a(d);
            if (b) if (g) for (; h > f && (c = e.apply(d[f], b), !1 !== c); f++) ; else for (f in d) {
                if (c = e.apply(d[f], b), !1 === c) break
            } else if (g) for (; h > f && (c = e.call(d[f], f, d[f]), !1 !== c); f++) ; else for (f in d) if (c = e.call(d[f], f, d[f]), !1 === c) break;
            return d
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(Ca, "")
        }, makeArray: function (d,
                                e) {
            var b = e || [];
            return null != d && (a(Object(d)) ? n.merge(b, "string" == typeof d ? [d] : d) : P.call(b, d)), b
        }, inArray: function (a, d, e) {
            var b;
            if (d) {
                if (ja) return ja.call(d, a, e);
                b = d.length;
                for (e = e ? 0 > e ? Math.max(0, b + e) : e : 0; b > e; e++) if (e in d && d[e] === a) return e
            }
            return -1
        }, merge: function (a, d) {
            for (var e = +d.length, b = 0, c = a.length; e > b;) a[c++] = d[b++];
            if (e !== e) for (; void 0 !== d[b];) a[c++] = d[b++];
            return a.length = c, a
        }, grep: function (a, d, e) {
            for (var b = [], c = 0, f = a.length, h = !e; f > c; c++) e = !d(a[c], c), e !== h && b.push(a[c]);
            return b
        }, map: function (d,
                          e, b) {
            var c, f = 0, h = d.length, g = [];
            if (a(d)) for (; h > f; f++) c = e(d[f], f, b), null != c && g.push(c); else for (f in d) c = e(d[f], f, b), null != c && g.push(c);
            return ga.apply([], g)
        }, guid: 1, proxy: function (a, d) {
            var e, b, c;
            return "string" == typeof d && (c = a[d], d = a, a = c), n.isFunction(a) ? (e = R.call(arguments, 2), b = function () {
                return a.apply(d || this, e.concat(R.call(arguments)))
            }, b.guid = a.guid = a.guid || n.guid++, b) : void 0
        }, now: function () {
            return +new Date
        }, support: F
    });
    n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
        function (a, d) {
            ma["[object " + d + "]"] = d.toLowerCase()
        });
    var ya = function (a) {
        function d(a, e, b, c) {
            var f, J, h, g, n;
            if ((e ? e.ownerDocument || e : F) !== la && oa(e), e = e || la, b = b || [], !a || "string" != typeof a) return b;
            if (1 !== (g = e.nodeType) && 9 !== g) return [];
            if (sa && !c) {
                if (f = Z.exec(a)) if (h = f[1]) if (9 === g) {
                    if (J = e.getElementById(h), !J || !J.parentNode) return b;
                    if (J.id === h) return b.push(J), b
                } else {
                    if (e.ownerDocument && (J = e.ownerDocument.getElementById(h)) && Pa(e, J) && J.id === h) return b.push(J), b
                } else {
                    if (f[2]) return za.apply(b, e.getElementsByTagName(a)),
                        b;
                    if ((h = f[3]) && x.getElementsByClassName && e.getElementsByClassName) return za.apply(b, e.getElementsByClassName(h)), b
                }
                if (x.qsa && (!C || !C.test(a))) {
                    if (J = f = I, h = e, n = 9 === g && a, 1 === g && "object" !== e.nodeName.toLowerCase()) {
                        g = A(a);
                        (f = e.getAttribute("id")) ? J = f.replace(ib, "\\$&") : e.setAttribute("id", J);
                        J = "[id='" + J + "'] ";
                        for (h = g.length; h--;) g[h] = J + t(g[h]);
                        h = Ya.test(a) && m(e.parentNode) || e;
                        n = g.join(",")
                    }
                    if (n) try {
                        return za.apply(b, h.querySelectorAll(n)), b
                    } catch (k) {
                    } finally {
                        f || e.removeAttribute("id")
                    }
                }
            }
            return X(a.replace(Xa,
                "$1"), e, b, c)
        }

        function e() {
            function a(e, b) {
                return d.push(e + " ") > Y.cacheLength && delete a[d.shift()], a[e + " "] = b
            }

            var d = [];
            return a
        }

        function b(a) {
            return a[I] = !0, a
        }

        function c(a) {
            var d = la.createElement("div");
            try {
                return !!a(d)
            } catch (e) {
                return !1
            } finally {
                d.parentNode && d.parentNode.removeChild(d)
            }
        }

        function f(a, d) {
            for (var e = a.split("|"), b = a.length; b--;) Y.attrHandle[e[b]] = d
        }

        function h(a, d) {
            var e = d && a,
                b = e && 1 === a.nodeType && 1 === d.nodeType && (~d.sourceIndex || -2147483648) - (~a.sourceIndex || -2147483648);
            if (b) return b;
            if (e) for (; e = e.nextSibling;) if (e === d) return -1;
            return a ? 1 : -1
        }

        function g(a) {
            return function (d) {
                return "input" === d.nodeName.toLowerCase() && d.type === a
            }
        }

        function n(a) {
            return function (d) {
                var e = d.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && d.type === a
            }
        }

        function k(a) {
            return b(function (d) {
                return d = +d, b(function (e, b) {
                    for (var c, f = a([], e.length, d), J = f.length; J--;) e[c = f[J]] && (e[c] = !(b[c] = e[c]))
                })
            })
        }

        function m(a) {
            return a && "undefined" !== typeof a.getElementsByTagName && a
        }

        function w() {
        }

        function t(a) {
            for (var d =
                0, e = a.length, b = ""; e > d; d++) b += a[d].value;
            return b
        }

        function u(a, d, e) {
            var b = d.dir, c = e && "parentNode" === b, f = tb++;
            return d.first ? function (d, e, f) {
                for (; d = d[b];) if (1 === d.nodeType || c) return a(d, e, f)
            } : function (d, e, J) {
                var h, g, n = [ja, f];
                if (J) for (; d = d[b];) {
                    if ((1 === d.nodeType || c) && a(d, e, J)) return !0
                } else for (; d = d[b];) if (1 === d.nodeType || c) {
                    if (g = d[I] || (d[I] = {}), (h = g[b]) && h[0] === ja && h[1] === f) return n[2] = h[2];
                    if (g[b] = n, n[2] = a(d, e, J)) return !0
                }
            }
        }

        function v(a) {
            return 1 < a.length ? function (d, e, b) {
                for (var c = a.length; c--;) if (!a[c](d,
                    e, b)) return !1;
                return !0
            } : a[0]
        }

        function z(a, d, e, b, c) {
            for (var f, J = [], h = 0, g = a.length, n = null != d; g > h; h++) (f = a[h]) && (!e || e(f, b, c)) && (J.push(f), n && d.push(h));
            return J
        }

        function y(a, e, c, f, J, h) {
            return f && !f[I] && (f = y(f)), J && !J[I] && (J = y(J, h)), b(function (b, h, g, n) {
                var k, m, w = [], qa = [], t = h.length, u;
                if (!(u = b)) {
                    u = e || "*";
                    for (var v = g.nodeType ? [g] : g, $a = [], y = 0, q = v.length; q > y; y++) d(u, v[y], $a);
                    u = $a
                }
                u = !a || !b && e ? u : z(u, w, a, g, n);
                v = c ? J || (b ? a : t || f) ? [] : h : u;
                if (c && c(u, v, g, n), f) for (k = z(v, qa), f(k, [], g, n), g = k.length; g--;) (m = k[g]) && (v[qa[g]] =
                    !(u[qa[g]] = m));
                if (b) {
                    if (J || a) {
                        if (J) {
                            k = [];
                            for (g = v.length; g--;) (m = v[g]) && k.push(u[g] = m);
                            J(null, v = [], k, n)
                        }
                        for (g = v.length; g--;) (m = v[g]) && -1 < (k = J ? H.call(b, m) : w[g]) && (b[k] = !(h[k] = m))
                    }
                } else v = z(v === h ? v.splice(t, v.length) : v), J ? J(null, h, v, n) : za.apply(h, v)
            })
        }

        function q(a) {
            var d, e, b, c = a.length, f = Y.relative[a[0].type];
            e = f || Y.relative[" "];
            for (var J = f ? 1 : 0, h = u(function (a) {
                return a === d
            }, e, !0), g = u(function (a) {
                return -1 < H.call(d, a)
            }, e, !0), n = [function (a, e, b) {
                return !f && (b || e !== ba) || ((d = e).nodeType ? h(a, e, b) : g(a, e, b))
            }]; c >
                 J; J++) if (e = Y.relative[a[J].type]) n = [u(v(n), e)]; else {
                if (e = Y.filter[a[J].type].apply(null, a[J].matches), e[I]) {
                    for (b = ++J; c > b && !Y.relative[a[b].type]; b++) ;
                    return y(1 < J && v(n), 1 < J && t(a.slice(0, J - 1).concat({value: " " === a[J - 2].type ? "*" : ""})).replace(Xa, "$1"), e, b > J && q(a.slice(J, b)), c > b && q(a = a.slice(b)), c > b && t(a))
                }
                n.push(e)
            }
            return v(n)
        }

        function p(a, e) {
            var c = 0 < e.length, f = 0 < a.length, J = function (b, J, h, g, n) {
                var k, m, w, qa = 0, t = "0", u = b && [], v = [], $a = ba, y = b || f && Y.find.TAG("*", n),
                    q = ja += null == $a ? 1 : Math.random() || .1, p = y.length;
                for (n && (ba = J !== la && J); t !== p && null != (k = y[t]); t++) {
                    if (f && k) {
                        for (m = 0; w = a[m++];) if (w(k, J, h)) {
                            g.push(k);
                            break
                        }
                        n && (ja = q)
                    }
                    c && ((k = !w && k) && qa--, b && u.push(k))
                }
                if (qa += t, c && t !== qa) {
                    for (m = 0; w = e[m++];) w(u, v, J, h);
                    if (b) {
                        if (0 < qa) for (; t--;) u[t] || v[t] || (v[t] = T.call(g));
                        v = z(v)
                    }
                    za.apply(g, v);
                    n && !b && 0 < v.length && 1 < qa + e.length && d.uniqueSort(g)
                }
                return n && (ja = q, ba = $a), u
            };
            return c ? b(J) : J
        }

        var ea, x, Y, aa, R, A, B, X, ba, da, ga, oa, la, P, sa, C, ma, Wa, Pa, I = "sizzle" + -new Date,
            F = a.document, ja = 0, tb = 0, D = e(), gb = e(), ta = e(), Ba = function (a, d) {
                return a ===
                d && (ga = !0), 0
            }, E = {}.hasOwnProperty, G = [], T = G.pop, O = G.push, za = G.push, xa = G.slice,
            H = G.indexOf || function (a) {
                for (var d = 0, e = this.length; e > d; d++) if (this[d] === a) return d;
                return -1
            }, L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"),
            M = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)[\\x20\\t\\r\\n\\f]*\\]",
            K = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                M + ")*)|.*)\\)|)", Xa = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
            N = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, hb = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            Q = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g, La = new RegExp(K), S = new RegExp("^" + L + "$"),
            U = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: new RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + K),
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            }, V = /^(?:input|select|textarea|button)$/i, W = /^h\d$/i, Ca = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Ya = /[+~]/, ib = /'|\\/g,
            ca = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig, wa = function (a, d, e) {
                a = "0x" + d - 65536;
                return a !== a || e ? d : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
            };
        try {
            za.apply(G = xa.call(F.childNodes), F.childNodes), G[F.childNodes.length].nodeType
        } catch (fa) {
            za = {
                apply: G.length ? function (a, d) {
                    O.apply(a, xa.call(d))
                } : function (a, d) {
                    for (var e = a.length, b = 0; a[e++] = d[b++];) ;
                    a.length = e - 1
                }
            }
        }
        x = d.support = {};
        R = d.isXML = function (a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
        };
        oa = d.setDocument = function (a) {
            var d, e = a ? a.ownerDocument || a : F;
            a = e.defaultView;
            return e !== la && 9 === e.nodeType && e.documentElement ? (la = e, P = e.documentElement, sa = !R(e), a && a !== a.top && (a.addEventListener ? a.addEventListener("unload", function () {
                oa()
            }, !1) : a.attachEvent && a.attachEvent("onunload", function () {
                oa()
            })), x.attributes = c(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), x.getElementsByTagName = c(function (a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), x.getElementsByClassName = Ca.test(e.getElementsByClassName) && c(function (a) {
                return a.innerHTML =
                    "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), x.getById = c(function (a) {
                return P.appendChild(a).id = I, !e.getElementsByName || !e.getElementsByName(I).length
            }), x.getById ? (Y.find.ID = function (a, d) {
                if ("undefined" !== typeof d.getElementById && sa) {
                    var e = d.getElementById(a);
                    return e && e.parentNode ? [e] : []
                }
            }, Y.filter.ID = function (a) {
                var d = a.replace(ca, wa);
                return function (a) {
                    return a.getAttribute("id") === d
                }
            }) : (delete Y.find.ID, Y.filter.ID = function (a) {
                var d =
                    a.replace(ca, wa);
                return function (a) {
                    return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === d
                }
            }), Y.find.TAG = x.getElementsByTagName ? function (a, d) {
                return "undefined" !== typeof d.getElementsByTagName ? d.getElementsByTagName(a) : void 0
            } : function (a, d) {
                var e, b = [], c = 0, f = d.getElementsByTagName(a);
                if ("*" === a) {
                    for (; e = f[c++];) 1 === e.nodeType && b.push(e);
                    return b
                }
                return f
            }, Y.find.CLASS = x.getElementsByClassName && function (a, d) {
                return "undefined" !== typeof d.getElementsByClassName && sa ? d.getElementsByClassName(a) :
                    void 0
            }, ma = [], C = [], (x.qsa = Ca.test(e.querySelectorAll)) && (c(function (a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>";
                a.querySelectorAll("[msallowclip^='']").length && C.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                a.querySelectorAll("[selected]").length || C.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                a.querySelectorAll(":checked").length || C.push(":checked")
            }),
                c(function (a) {
                    var d = e.createElement("input");
                    d.setAttribute("type", "hidden");
                    a.appendChild(d).setAttribute("name", "D");
                    a.querySelectorAll("[name=d]").length && C.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                    a.querySelectorAll(":enabled").length || C.push(":enabled", ":disabled");
                    a.querySelectorAll("*,:x");
                    C.push(",.*:")
                })), (x.matchesSelector = Ca.test(Wa = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && c(function (a) {
                x.disconnectedMatch = Wa.call(a, "div");
                Wa.call(a,
                    "[s!='']:x");
                ma.push("!=", K)
            }), C = C.length && new RegExp(C.join("|")), ma = ma.length && new RegExp(ma.join("|")), d = Ca.test(P.compareDocumentPosition), Pa = d || Ca.test(P.contains) ? function (a, d) {
                var e = 9 === a.nodeType ? a.documentElement : a, b = d && d.parentNode;
                return a === b || !(!b || 1 !== b.nodeType || !(e.contains ? e.contains(b) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(b)))
            } : function (a, d) {
                if (d) for (; d = d.parentNode;) if (d === a) return !0;
                return !1
            }, Ba = d ? function (a, d) {
                if (a === d) return ga = !0, 0;
                var b = !a.compareDocumentPosition -
                    !d.compareDocumentPosition;
                return b ? b : (b = (a.ownerDocument || a) === (d.ownerDocument || d) ? a.compareDocumentPosition(d) : 1, 1 & b || !x.sortDetached && d.compareDocumentPosition(a) === b ? a === e || a.ownerDocument === F && Pa(F, a) ? -1 : d === e || d.ownerDocument === F && Pa(F, d) ? 1 : da ? H.call(da, a) - H.call(da, d) : 0 : 4 & b ? -1 : 1)
            } : function (a, d) {
                if (a === d) return ga = !0, 0;
                var b, c = 0;
                b = a.parentNode;
                var f = d.parentNode, J = [a], g = [d];
                if (!b || !f) return a === e ? -1 : d === e ? 1 : b ? -1 : f ? 1 : da ? H.call(da, a) - H.call(da, d) : 0;
                if (b === f) return h(a, d);
                for (b = a; b = b.parentNode;) J.unshift(b);
                for (b = d; b = b.parentNode;) g.unshift(b);
                for (; J[c] === g[c];) c++;
                return c ? h(J[c], g[c]) : J[c] === F ? -1 : g[c] === F ? 1 : 0
            }, e) : la
        };
        d.matches = function (a, e) {
            return d(a, null, null, e)
        };
        d.matchesSelector = function (a, e) {
            if ((a.ownerDocument || a) !== la && oa(a), e = e.replace(Q, "='$1']"), !(!x.matchesSelector || !sa || ma && ma.test(e) || C && C.test(e))) try {
                var b = Wa.call(a, e);
                if (b || x.disconnectedMatch || a.document && 11 !== a.document.nodeType) return b
            } catch (c) {
            }
            return 0 < d(e, la, null, [a]).length
        };
        d.contains = function (a, d) {
            return (a.ownerDocument ||
                a) !== la && oa(a), Pa(a, d)
        };
        d.attr = function (a, d) {
            (a.ownerDocument || a) !== la && oa(a);
            var e = Y.attrHandle[d.toLowerCase()],
                e = e && E.call(Y.attrHandle, d.toLowerCase()) ? e(a, d, !sa) : void 0;
            return void 0 !== e ? e : x.attributes || !sa ? a.getAttribute(d) : (e = a.getAttributeNode(d)) && e.specified ? e.value : null
        };
        d.error = function (a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        };
        d.uniqueSort = function (a) {
            var d, e = [], b = 0, c = 0;
            if (ga = !x.detectDuplicates, da = !x.sortStable && a.slice(0), a.sort(Ba), ga) {
                for (; d = a[c++];) d === a[c] &&
                (b = e.push(c));
                for (; b--;) a.splice(e[b], 1)
            }
            return da = null, a
        };
        aa = d.getText = function (a) {
            var d, e = "", b = 0;
            if (d = a.nodeType) if (1 === d || 9 === d || 11 === d) {
                if ("string" == typeof a.textContent) return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) e += aa(a)
            } else {
                if (3 === d || 4 === d) return a.nodeValue
            } else for (; d = a[b++];) e += aa(d);
            return e
        };
        Y = d.selectors = {
            cacheLength: 50,
            createPseudo: b,
            match: U,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ca, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || d.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && d.error(a[0]), a
                }, PSEUDO: function (a) {
                    var d, e = !a[6] && a[2];
                    return U.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : e && La.test(e) && (d = A(e, !0)) && (d = e.indexOf(")",
                        e.length - d) - e.length) && (a[0] = a[0].slice(0, d), a[2] = e.slice(0, d)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var d = a.replace(ca, wa).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === d
                    }
                }, CLASS: function (a) {
                    var d = D[a + " "];
                    return d || (d = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && D(a, function (a) {
                        return d.test("string" == typeof a.className && a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                }, ATTR: function (a,
                                   e, b) {
                    return function (c) {
                        c = d.attr(c, a);
                        return null == c ? "!=" === e : e ? (c += "", "=" === e ? c === b : "!=" === e ? c !== b : "^=" === e ? b && 0 === c.indexOf(b) : "*=" === e ? b && -1 < c.indexOf(b) : "$=" === e ? b && c.slice(-b.length) === b : "~=" === e ? -1 < (" " + c + " ").indexOf(b) : "|=" === e ? c === b || c.slice(0, b.length + 1) === b + "-" : !1) : !0
                    }
                }, CHILD: function (a, d, e, b, c) {
                    var f = "nth" !== a.slice(0, 3), J = "last" !== a.slice(-4), h = "of-type" === d;
                    return 1 === b && 0 === c ? function (a) {
                        return !!a.parentNode
                    } : function (d, e, g) {
                        var n, k, ua, m, w;
                        e = f !== J ? "nextSibling" : "previousSibling";
                        var qa =
                            d.parentNode, t = h && d.nodeName.toLowerCase();
                        g = !g && !h;
                        if (qa) {
                            if (f) {
                                for (; e;) {
                                    for (k = d; k = k[e];) if (h ? k.nodeName.toLowerCase() === t : 1 === k.nodeType) return !1;
                                    w = e = "only" === a && !w && "nextSibling"
                                }
                                return !0
                            }
                            if (w = [J ? qa.firstChild : qa.lastChild], J && g) for (g = qa[I] || (qa[I] = {}), n = g[a] || [], m = n[0] === ja && n[1], ua = n[0] === ja && n[2], k = m && qa.childNodes[m]; k = ++m && k && k[e] || (ua = m = 0) || w.pop();) {
                                if (1 === k.nodeType && ++ua && k === d) {
                                    g[a] = [ja, m, ua];
                                    break
                                }
                            } else if (g && (n = (d[I] || (d[I] = {}))[a]) && n[0] === ja) ua = n[1]; else for (; (k = ++m && k && k[e] || (ua =
                                m = 0) || w.pop()) && ((h ? k.nodeName.toLowerCase() !== t : 1 !== k.nodeType) || !++ua || (g && ((k[I] || (k[I] = {}))[a] = [ja, ua]), k !== d));) ;
                            return ua -= c, ua === b || 0 === ua % b && 0 <= ua / b
                        }
                    }
                }, PSEUDO: function (a, e) {
                    var c, f = Y.pseudos[a] || Y.setFilters[a.toLowerCase()] || d.error("unsupported pseudo: " + a);
                    return f[I] ? f(e) : 1 < f.length ? (c = [a, a, "", e], Y.setFilters.hasOwnProperty(a.toLowerCase()) ? b(function (a, d) {
                        for (var b, c = f(a, e), J = c.length; J--;) b = H.call(a, c[J]), a[b] = !(d[b] = c[J])
                    }) : function (a) {
                        return f(a, 0, c)
                    }) : f
                }
            },
            pseudos: {
                not: b(function (a) {
                    var d =
                        [], e = [], c = B(a.replace(Xa, "$1"));
                    return c[I] ? b(function (a, d, e, b) {
                        var f;
                        e = c(a, null, b, []);
                        for (b = a.length; b--;) (f = e[b]) && (a[b] = !(d[b] = f))
                    }) : function (a, b, f) {
                        return d[0] = a, c(d, null, f, e), !e.pop()
                    }
                }), has: b(function (a) {
                    return function (e) {
                        return 0 < d(a, e).length
                    }
                }), contains: b(function (a) {
                    return function (d) {
                        return -1 < (d.textContent || d.innerText || aa(d)).indexOf(a)
                    }
                }), lang: b(function (a) {
                    return S.test(a || "") || d.error("unsupported lang: " + a), a = a.replace(ca, wa).toLowerCase(), function (d) {
                        var e;
                        do if (e = sa ? d.lang : d.getAttribute("xml:lang") ||
                            d.getAttribute("lang")) return e = e.toLowerCase(), e === a || 0 === e.indexOf(a + "-"); while ((d = d.parentNode) && 1 === d.nodeType);
                        return !1
                    }
                }), target: function (d) {
                    var e = a.location && a.location.hash;
                    return e && e.slice(1) === d.id
                }, root: function (a) {
                    return a === P
                }, focus: function (a) {
                    return a === la.activeElement && (!la.hasFocus || la.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return !1 === a.disabled
                }, disabled: function (a) {
                    return !0 === a.disabled
                }, checked: function (a) {
                    var d = a.nodeName.toLowerCase();
                    return "input" ===
                        d && !!a.checked || "option" === d && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (6 > a.nodeType) return !1;
                    return !0
                }, parent: function (a) {
                    return !Y.pseudos.empty(a)
                }, header: function (a) {
                    return W.test(a.nodeName)
                }, input: function (a) {
                    return V.test(a.nodeName)
                }, button: function (a) {
                    var d = a.nodeName.toLowerCase();
                    return "input" === d && "button" === a.type || "button" === d
                }, text: function (a) {
                    var d;
                    return "input" === a.nodeName.toLowerCase() &&
                        "text" === a.type && (null == (d = a.getAttribute("type")) || "text" === d.toLowerCase())
                }, first: k(function () {
                    return [0]
                }), last: k(function (a, d) {
                    return [d - 1]
                }), eq: k(function (a, d, e) {
                    return [0 > e ? e + d : e]
                }), even: k(function (a, d) {
                    for (var e = 0; d > e; e += 2) a.push(e);
                    return a
                }), odd: k(function (a, d) {
                    for (var e = 1; d > e; e += 2) a.push(e);
                    return a
                }), lt: k(function (a, d, e) {
                    for (d = 0 > e ? e + d : e; 0 <= --d;) a.push(d);
                    return a
                }), gt: k(function (a, d, e) {
                    for (e = 0 > e ? e + d : e; ++e < d;) a.push(e);
                    return a
                })
            }
        };
        Y.pseudos.nth = Y.pseudos.eq;
        for (ea in{
            radio: !0, checkbox: !0,
            file: !0, password: !0, image: !0
        }) Y.pseudos[ea] = g(ea);
        for (ea in{submit: !0, reset: !0}) Y.pseudos[ea] = n(ea);
        w.prototype = Y.filters = Y.pseudos;
        Y.setFilters = new w;
        A = d.tokenize = function (a, e) {
            var b, c, f, J, h, g, n;
            if (h = gb[a + " "]) return e ? 0 : h.slice(0);
            h = a;
            g = [];
            for (n = Y.preFilter; h;) {
                b && !(c = N.exec(h)) || (c && (h = h.slice(c[0].length) || h), g.push(f = []));
                b = !1;
                (c = hb.exec(h)) && (b = c.shift(), f.push({
                    value: b,
                    type: c[0].replace(Xa, " ")
                }), h = h.slice(b.length));
                for (J in Y.filter) !(c = U[J].exec(h)) || n[J] && !(c = n[J](c)) || (b = c.shift(), f.push({
                    value: b,
                    type: J, matches: c
                }), h = h.slice(b.length));
                if (!b) break
            }
            return e ? h.length : h ? d.error(a) : gb(a, g).slice(0)
        };
        return B = d.compile = function (a, d) {
            var e, b = [], c = [], f = ta[a + " "];
            if (!f) {
                d || (d = A(a));
                for (e = d.length; e--;) f = q(d[e]), f[I] ? b.push(f) : c.push(f);
                f = ta(a, p(c, b));
                f.selector = a
            }
            return f
        }, X = d.select = function (a, d, e, b) {
            var c, f, J, h, g, n = "function" == typeof a && a, k = !b && A(a = n.selector || a);
            if (e = e || [], 1 === k.length) {
                if (f = k[0] = k[0].slice(0), 2 < f.length && "ID" === (J = f[0]).type && x.getById && 9 === d.nodeType && sa && Y.relative[f[1].type]) {
                    if (d =
                        (Y.find.ID(J.matches[0].replace(ca, wa), d) || [])[0], !d) return e;
                    n && (d = d.parentNode);
                    a = a.slice(f.shift().value.length)
                }
                for (c = U.needsContext.test(a) ? 0 : f.length; c-- && (J = f[c], !Y.relative[h = J.type]);) if ((g = Y.find[h]) && (b = g(J.matches[0].replace(ca, wa), Ya.test(f[0].type) && m(d.parentNode) || d))) {
                    if (f.splice(c, 1), a = b.length && t(f), !a) return za.apply(e, b), e;
                    break
                }
            }
            return (n || B(a, k))(b, d, !sa, e, Ya.test(a) && m(d.parentNode) || d), e
        }, x.sortStable = I.split("").sort(Ba).join("") === I, x.detectDuplicates = !!ga, oa(), x.sortDetached =
            c(function (a) {
                return 1 & a.compareDocumentPosition(la.createElement("div"))
            }), c(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function (a, d, e) {
            return e ? void 0 : a.getAttribute(d, "type" === d.toLowerCase() ? 1 : 2)
        }), x.attributes && c(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function (a, d, e) {
            return e || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        c(function (a) {
            return null == a.getAttribute("disabled")
        }) || f("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (a, d, e) {
            var b;
            return e ? void 0 : !0 === a[d] ? d.toLowerCase() : (b = a.getAttributeNode(d)) && b.specified ? b.value : null
        }), d
    }(c);
    n.find = ya;
    n.expr = ya.selectors;
    n.expr[":"] = n.expr.pseudos;
    n.unique = ya.uniqueSort;
    n.text = ya.getText;
    n.isXMLDoc = ya.isXML;
    n.contains = ya.contains;
    var Ta = n.expr.match.needsContext, Ua = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Da = /^.[^:#\[\.,]*$/;
    n.filter = function (a, d, e) {
        var b = d[0];
        return e && (a = ":not(" + a + ")"), 1 === d.length && 1 === b.nodeType ? n.find.matchesSelector(b, a) ? [b] : [] : n.find.matches(a, n.grep(d, function (a) {
            return 1 === a.nodeType
        }))
    };
    n.fn.extend({
        find: function (a) {
            var d, e = [], b = this, c = b.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
                for (d = 0; c > d; d++) if (n.contains(b[d], this)) return !0
            }));
            for (d = 0; c > d; d++) n.find(a, b[d], e);
            return e = this.pushStack(1 < c ? n.unique(e) : e), e.selector = this.selector ? this.selector +
                " " + a : a, e
        }, filter: function (a) {
            return this.pushStack(d(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(d(this, a || [], !0))
        }, is: function (a) {
            return !!d(this, "string" == typeof a && Ta.test(a) ? n(a) : a || [], !1).length
        }
    });
    var Ga, S = c.document, db = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (n.fn.init = function (a, d) {
        var e, b;
        if (!a) return this;
        if ("string" == typeof a) {
            if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : db.exec(a), !e || !e[1] && d) return !d || d.jquery ? (d || Ga).find(a) : this.constructor(d).find(a);
            if (e[1]) {
                if (d = d instanceof n ? d[0] : d, n.merge(this, n.parseHTML(e[1], d && d.nodeType ? d.ownerDocument || d : S, !0)), Ua.test(e[1]) && n.isPlainObject(d)) for (e in d) n.isFunction(this[e]) ? this[e](d[e]) : this.attr(e, d[e]);
                return this
            }
            if (b = S.getElementById(e[2]), b && b.parentNode) {
                if (b.id !== e[2]) return Ga.find(a);
                this.length = 1;
                this[0] = b
            }
            return this.context = S, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof Ga.ready ? Ga.ready(a) : a(n) : (void 0 !== a.selector &&
        (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    }).prototype = n.fn;
    Ga = n(S);
    var pa = /^(?:parents|prev(?:Until|All))/, Va = {children: !0, contents: !0, next: !0, prev: !0};
    n.extend({
        dir: function (a, d, e) {
            var b = [];
            for (a = a[d]; a && 9 !== a.nodeType && (void 0 === e || 1 !== a.nodeType || !n(a).is(e));) 1 === a.nodeType && b.push(a), a = a[d];
            return b
        }, sibling: function (a, d) {
            for (var e = []; a; a = a.nextSibling) 1 === a.nodeType && a !== d && e.push(a);
            return e
        }
    });
    n.fn.extend({
        has: function (a) {
            var d, e = n(a, this), b = e.length;
            return this.filter(function () {
                for (d =
                         0; b > d; d++) if (n.contains(this, e[d])) return !0
            })
        }, closest: function (a, d) {
            for (var e, b = 0, c = this.length, f = [], h = Ta.test(a) || "string" != typeof a ? n(a, d || this.context) : 0; c > b; b++) for (e = this[b]; e && e !== d; e = e.parentNode) if (11 > e.nodeType && (h ? -1 < h.index(e) : 1 === e.nodeType && n.find.matchesSelector(e, a))) {
                f.push(e);
                break
            }
            return this.pushStack(1 < f.length ? n.unique(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length :
                -1
        }, add: function (a, d) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, d))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    n.each({
        parent: function (a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        }, parents: function (a) {
            return n.dir(a, "parentNode")
        }, parentsUntil: function (a, d, e) {
            return n.dir(a, "parentNode", e)
        }, next: function (a) {
            return e(a, "nextSibling")
        }, prev: function (a) {
            return e(a, "previousSibling")
        }, nextAll: function (a) {
            return n.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return n.dir(a, "previousSibling")
        }, nextUntil: function (a, d, e) {
            return n.dir(a, "nextSibling", e)
        }, prevUntil: function (a, d, e) {
            return n.dir(a, "previousSibling", e)
        }, siblings: function (a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return n.sibling(a.firstChild)
        }, contents: function (a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function (a, d) {
        n.fn[a] = function (e, b) {
            var c = n.map(this, d, e);
            return "Until" !== a.slice(-5) &&
            (b = e), b && "string" == typeof b && (c = n.filter(b, c)), 1 < this.length && (Va[a] || (c = n.unique(c)), pa.test(a) && (c = c.reverse())), this.pushStack(c)
        }
    });
    var na = /\S+/g, ab = {};
    n.Callbacks = function (a) {
        a = "string" == typeof a ? ab[a] || f(a) : n.extend({}, a);
        var d, e, b, c, h, g, k = [], m = !a.once && [], w = function (f) {
            e = a.memory && f;
            b = !0;
            h = g || 0;
            g = 0;
            c = k.length;
            for (d = !0; k && c > h; h++) if (!1 === k[h].apply(f[0], f[1]) && a.stopOnFalse) {
                e = !1;
                break
            }
            d = !1;
            k && (m ? m.length && w(m.shift()) : e ? k = [] : t.disable())
        }, t = {
            add: function () {
                if (k) {
                    var b = k.length;
                    !function Qb(d) {
                        n.each(d,
                            function (d, e) {
                                var b = n.type(e);
                                "function" === b ? a.unique && t.has(e) || k.push(e) : e && e.length && "string" !== b && Qb(e)
                            })
                    }(arguments);
                    d ? c = k.length : e && (g = b, w(e))
                }
                return this
            }, remove: function () {
                return k && n.each(arguments, function (a, e) {
                    for (var b; -1 < (b = n.inArray(e, k, b));) k.splice(b, 1), d && (c >= b && c--, h >= b && h--)
                }), this
            }, has: function (a) {
                return a ? -1 < n.inArray(a, k) : !(!k || !k.length)
            }, empty: function () {
                return k = [], c = 0, this
            }, disable: function () {
                return k = m = e = void 0, this
            }, disabled: function () {
                return !k
            }, lock: function () {
                return m =
                    void 0, e || t.disable(), this
            }, locked: function () {
                return !m
            }, fireWith: function (a, e) {
                return !k || b && !m || (e = e || [], e = [a, e.slice ? e.slice() : e], d ? m.push(e) : w(e)), this
            }, fire: function () {
                return t.fireWith(this, arguments), this
            }, fired: function () {
                return !!b
            }
        };
        return t
    };
    n.extend({
        Deferred: function (a) {
            var d = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
                e = "pending", b = {
                    state: function () {
                        return e
                    }, always: function () {
                        return c.done(arguments).fail(arguments),
                            this
                    }, then: function () {
                        var a = arguments;
                        return n.Deferred(function (e) {
                            n.each(d, function (d, f) {
                                var h = n.isFunction(a[d]) && a[d];
                                c[f[1]](function () {
                                    var a = h && h.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(e.resolve).fail(e.reject).progress(e.notify) : e[f[0] + "With"](this === b ? e.promise() : this, h ? [a] : arguments)
                                })
                            });
                            a = null
                        }).promise()
                    }, promise: function (a) {
                        return null != a ? n.extend(a, b) : b
                    }
                }, c = {};
            return b.pipe = b.then, n.each(d, function (a, f) {
                var h = f[2], g = f[3];
                b[f[1]] = h.add;
                g && h.add(function () {
                    e =
                        g
                }, d[1 ^ a][2].disable, d[2][2].lock);
                c[f[0]] = function () {
                    return c[f[0] + "With"](this === c ? b : this, arguments), this
                };
                c[f[0] + "With"] = h.fireWith
            }), b.promise(c), a && a.call(c, c), c
        }, when: function (a) {
            var d = 0, e = R.call(arguments), b = e.length, c = 1 !== b || a && n.isFunction(a.promise) ? b : 0,
                f = 1 === c ? a : n.Deferred(), h = function (a, d, e) {
                    return function (b) {
                        d[a] = this;
                        e[a] = 1 < arguments.length ? R.call(arguments) : b;
                        e === g ? f.notifyWith(d, e) : --c || f.resolveWith(d, e)
                    }
                }, g, k, m;
            if (1 < b) for (g = Array(b), k = Array(b), m = Array(b); b > d; d++) e[d] && n.isFunction(e[d].promise) ?
                e[d].promise().done(h(d, m, e)).fail(f.reject).progress(h(d, k, g)) : --c;
            return c || f.resolveWith(m, e), f.promise()
        }
    });
    var ka;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this
    };
    n.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0)
        }, ready: function (a) {
            if (!0 === a ? !--n.readyWait : !n.isReady) {
                if (!S.body) return setTimeout(n.ready);
                n.isReady = !0;
                !0 !== a && 0 < --n.readyWait || (ka.resolveWith(S, [n]), n.fn.triggerHandler && (n(S).triggerHandler("ready"), n(S).off("ready")))
            }
        }
    });
    n.ready.promise =
        function (a) {
            if (!ka) if (ka = n.Deferred(), "complete" === S.readyState) setTimeout(n.ready); else if (S.addEventListener) S.addEventListener("DOMContentLoaded", k, !1), c.addEventListener("load", k, !1); else {
                S.attachEvent("onreadystatechange", k);
                c.attachEvent("onload", k);
                var d = !1;
                try {
                    d = null == c.frameElement && S.documentElement
                } catch (e) {
                }
                d && d.doScroll && !function Nb() {
                    if (!n.isReady) {
                        try {
                            d.doScroll("left")
                        } catch (a) {
                            return setTimeout(Nb, 50)
                        }
                        h();
                        n.ready()
                    }
                }()
            }
            return ka.promise(a)
        };
    for (var lb in n(F)) break;
    F.ownLast = "0" !==
        lb;
    F.inlineBlockNeedsLayout = !1;
    n(function () {
        var a, d, e, b;
        (e = S.getElementsByTagName("body")[0]) && e.style && (d = S.createElement("div"), b = S.createElement("div"), b.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", e.appendChild(b).appendChild(d), "undefined" !== typeof d.style.zoom && (d.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", F.inlineBlockNeedsLayout = a = 3 === d.offsetWidth, a && (e.style.zoom = 1)), e.removeChild(b))
    });
    (function () {
        var a = S.createElement("div");
        if (null == F.deleteExpando) {
            F.deleteExpando = !0;
            try {
                delete a.test
            } catch (d) {
                F.deleteExpando = !1
            }
        }
    })();
    n.acceptData = function (a) {
        var d = n.noData[(a.nodeName + " ").toLowerCase()], e = +a.nodeType || 1;
        return 1 !== e && 9 !== e ? !1 : !d || !0 !== d && a.getAttribute("classid") === d
    };
    var va = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, sb = /([A-Z])/g;
    n.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (a) {
            return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !p(a)
        },
        data: function (a,
                        d, e) {
            return q(a, d, e)
        },
        removeData: function (a, d) {
            return u(a, d)
        },
        _data: function (a, d, e) {
            return q(a, d, e, !0)
        },
        _removeData: function (a, d) {
            return u(a, d, !0)
        }
    });
    n.fn.extend({
        data: function (a, d) {
            var e, b, c, f = this[0], h = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (c = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                    for (e = h.length; e--;) h[e] && (b = h[e].name, 0 === b.indexOf("data-") && (b = n.camelCase(b.slice(5)), m(f, b, c[b])));
                    n._data(f, "parsedAttrs", !0)
                }
                return c
            }
            return "object" == typeof a ? this.each(function () {
                n.data(this,
                    a)
            }) : 1 < arguments.length ? this.each(function () {
                n.data(this, a, d)
            }) : f ? m(f, a, n.data(f, a)) : void 0
        }, removeData: function (a) {
            return this.each(function () {
                n.removeData(this, a)
            })
        }
    });
    n.extend({
        queue: function (a, d, e) {
            var b;
            return a ? (d = (d || "fx") + "queue", b = n._data(a, d), e && (!b || n.isArray(e) ? b = n._data(a, d, n.makeArray(e)) : b.push(e)), b || []) : void 0
        }, dequeue: function (a, d) {
            d = d || "fx";
            var e = n.queue(a, d), b = e.length, c = e.shift(), f = n._queueHooks(a, d), h = function () {
                n.dequeue(a, d)
            };
            "inprogress" === c && (c = e.shift(), b--);
            c && ("fx" ===
            d && e.unshift("inprogress"), delete f.stop, c.call(a, h, f));
            !b && f && f.empty.fire()
        }, _queueHooks: function (a, d) {
            var e = d + "queueHooks";
            return n._data(a, e) || n._data(a, e, {
                empty: n.Callbacks("once memory").add(function () {
                    n._removeData(a, d + "queue");
                    n._removeData(a, e)
                })
            })
        }
    });
    n.fn.extend({
        queue: function (a, d) {
            var e = 2;
            return "string" != typeof a && (d = a, a = "fx", e--), arguments.length < e ? n.queue(this[0], a) : void 0 === d ? this : this.each(function () {
                var e = n.queue(this, a, d);
                n._queueHooks(this, a);
                "fx" === a && "inprogress" !== e[0] && n.dequeue(this,
                    a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                n.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, d) {
            var e, b = 1, c = n.Deferred(), f = this, h = this.length, g = function () {
                --b || c.resolveWith(f, [f])
            };
            "string" != typeof a && (d = a, a = void 0);
            for (a = a || "fx"; h--;) (e = n._data(f[h], a + "queueHooks")) && e.empty && (b++, e.empty.add(g));
            return g(), c.promise(d)
        }
    });
    var Ha = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ra = ["Top", "Right", "Bottom", "Left"],
        Aa = function (a, d) {
            return a = d || a, "none" ===
            n.css(a, "display") || !n.contains(a.ownerDocument, a)
        }, Fa = n.access = function (a, d, e, b, c, f, h) {
            var g = 0, k = a.length, m = null == e;
            if ("object" === n.type(e)) for (g in c = !0, e) n.access(a, d, g, e[g], !0, f, h); else if (void 0 !== b && (c = !0, n.isFunction(b) || (h = !0), m && (h ? (d.call(a, b), d = null) : (m = d, d = function (a, d, e) {
                return m.call(n(a), e)
            })), d)) for (; k > g; g++) d(a[g], e, h ? b : b.call(a[g], g, d(a[g], e)));
            return c ? a : m ? d.call(a) : k ? d(a[0], e) : f
        }, bb = /^(?:checkbox|radio)$/i;
    !function () {
        var a = S.createElement("input"), d = S.createElement("div"), e = S.createDocumentFragment();
        if (d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", F.leadingWhitespace = 3 === d.firstChild.nodeType, F.tbody = !d.getElementsByTagName("tbody").length, F.htmlSerialize = !!d.getElementsByTagName("link").length, F.html5Clone = "<:nav></:nav>" !== S.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, e.appendChild(a), F.appendChecked = a.checked, d.innerHTML = "<textarea>x</textarea>", F.noCloneChecked = !!d.cloneNode(!0).lastChild.defaultValue, e.appendChild(d), d.innerHTML =
            "<input type='radio' checked='checked' name='t'/>", F.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked, F.noCloneEvent = !0, d.attachEvent && (d.attachEvent("onclick", function () {
            F.noCloneEvent = !1
        }), d.cloneNode(!0).click()), null == F.deleteExpando) {
            F.deleteExpando = !0;
            try {
                delete d.test
            } catch (b) {
                F.deleteExpando = !1
            }
        }
    }();
    (function () {
        var a, d, e = S.createElement("div");
        for (a in{
            submit: !0,
            change: !0,
            focusin: !0
        }) d = "on" + a, (F[a + "Bubbles"] = d in c) || (e.setAttribute(d, "t"), F[a + "Bubbles"] = !1 === e.attributes[d].expando)
    })();
    var eb = /^(?:input|select|textarea)$/i, vb = /^key/, fb = /^(?:mouse|pointer|contextmenu)|click/,
        mb = /^(?:focusinfocus|focusoutblur)$/, nb = /^([^.]*)(?:\.(.+)|)$/;
    n.event = {
        global: {},
        add: function (a, d, e, b, c) {
            var f, h, g, k, m, w, t, u, v, z;
            if (g = n._data(a)) {
                e.handler && (k = e, e = k.handler, c = k.selector);
                e.guid || (e.guid = n.guid++);
                (h = g.events) || (h = g.events = {});
                (w = g.handle) || (w = g.handle = function (a) {
                    return "undefined" === typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(w.elem, arguments)
                }, w.elem = a);
                d = (d || "").match(na) ||
                    [""];
                for (g = d.length; g--;) f = nb.exec(d[g]) || [], v = z = f[1], f = (f[2] || "").split(".").sort(), v && (m = n.event.special[v] || {}, v = (c ? m.delegateType : m.bindType) || v, m = n.event.special[v] || {}, t = n.extend({
                    type: v,
                    origType: z,
                    data: b,
                    handler: e,
                    guid: e.guid,
                    selector: c,
                    needsContext: c && n.expr.match.needsContext.test(c),
                    namespace: f.join(".")
                }, k), (u = h[v]) || (u = h[v] = [], u.delegateCount = 0, m.setup && !1 !== m.setup.call(a, b, f, w) || (a.addEventListener ? a.addEventListener(v, w, !1) : a.attachEvent && a.attachEvent("on" + v, w))), m.add && (m.add.call(a,
                    t), t.handler.guid || (t.handler.guid = e.guid)), c ? u.splice(u.delegateCount++, 0, t) : u.push(t), n.event.global[v] = !0);
                a = null
            }
        },
        remove: function (a, d, e, b, c) {
            var f, h, g, k, m, w, t, u, v, z, y, q = n.hasData(a) && n._data(a);
            if (q && (w = q.events)) {
                d = (d || "").match(na) || [""];
                for (m = d.length; m--;) if (g = nb.exec(d[m]) || [], v = y = g[1], z = (g[2] || "").split(".").sort(), v) {
                    t = n.event.special[v] || {};
                    v = (b ? t.delegateType : t.bindType) || v;
                    u = w[v] || [];
                    g = g[2] && new RegExp("(^|\\.)" + z.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    for (k = f = u.length; f--;) h = u[f], !c && y !==
                    h.origType || e && e.guid !== h.guid || g && !g.test(h.namespace) || b && b !== h.selector && ("**" !== b || !h.selector) || (u.splice(f, 1), h.selector && u.delegateCount--, t.remove && t.remove.call(a, h));
                    k && !u.length && (t.teardown && !1 !== t.teardown.call(a, z, q.handle) || n.removeEvent(a, v, q.handle), delete w[v])
                } else for (v in w) n.event.remove(a, v + d[m], e, b, !0);
                n.isEmptyObject(w) && (delete q.handle, n._removeData(a, "events"))
            }
        },
        trigger: function (a, d, e, b) {
            var f, h, g, k, m, w, t = [e || S], v = xa.call(a, "type") ? a.type : a;
            w = xa.call(a, "namespace") ? a.namespace.split(".") :
                [];
            if (g = f = e = e || S, 3 !== e.nodeType && 8 !== e.nodeType && !mb.test(v + n.event.triggered) && (0 <= v.indexOf(".") && (w = v.split("."), v = w.shift(), w.sort()), h = 0 > v.indexOf(":") && "on" + v, a = a[n.expando] ? a : new n.Event(v, "object" == typeof a && a), a.isTrigger = b ? 2 : 3, a.namespace = w.join("."), a.namespace_re = a.namespace ? new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = e), d = null == d ? [a] : n.makeArray(d, [a]), m = n.event.special[v] || {}, b || !m.trigger || !1 !== m.trigger.apply(e, d))) {
                if (!b && !m.noBubble &&
                    !n.isWindow(e)) {
                    k = m.delegateType || v;
                    for (mb.test(k + v) || (g = g.parentNode); g; g = g.parentNode) t.push(g), f = g;
                    f === (e.ownerDocument || S) && t.push(f.defaultView || f.parentWindow || c)
                }
                for (w = 0; (g = t[w++]) && !a.isPropagationStopped();) a.type = 1 < w ? k : m.bindType || v, (f = (n._data(g, "events") || {})[a.type] && n._data(g, "handle")) && f.apply(g, d), (f = h && g[h]) && f.apply && n.acceptData(g) && (a.result = f.apply(g, d), !1 === a.result && a.preventDefault());
                if (a.type = v, !(b || a.isDefaultPrevented() || m._default && !1 !== m._default.apply(t.pop(), d)) &&
                n.acceptData(e) && h && e[v] && !n.isWindow(e)) {
                    (f = e[h]) && (e[h] = null);
                    n.event.triggered = v;
                    try {
                        e[v]()
                    } catch (u) {
                    }
                    n.event.triggered = void 0;
                    f && (e[h] = f)
                }
                return a.result
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var d, e, b, c, f, h = [], g = R.call(arguments);
            d = (n._data(this, "events") || {})[a.type] || [];
            var k = n.event.special[a.type] || {};
            if (g[0] = a, a.delegateTarget = this, !k.preDispatch || !1 !== k.preDispatch.call(this, a)) {
                h = n.event.handlers.call(this, a, d);
                for (d = 0; (c = h[d++]) && !a.isPropagationStopped();) for (a.currentTarget = c.elem,
                                                                                 f = 0; (b = c.handlers[f++]) && !a.isImmediatePropagationStopped();) a.namespace_re && !a.namespace_re.test(b.namespace) || (a.handleObj = b, a.data = b.data, e = ((n.event.special[b.origType] || {}).handle || b.handler).apply(c.elem, g), void 0 === e || !1 !== (a.result = e) || (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, d) {
            var e, b, c, f, h = [], g = d.delegateCount, k = a.target;
            if (g && k.nodeType && (!a.button || "click" !== a.type)) for (; k != this; k = k.parentNode || this) if (1 ===
                k.nodeType && (!0 !== k.disabled || "click" !== a.type)) {
                c = [];
                for (f = 0; g > f; f++) b = d[f], e = b.selector + " ", void 0 === c[e] && (c[e] = b.needsContext ? 0 <= n(e, this).index(k) : n.find(e, this, null, [k]).length), c[e] && c.push(b);
                c.length && h.push({elem: k, handlers: c})
            }
            return g < d.length && h.push({elem: this, handlers: d.slice(g)}), h
        },
        fix: function (a) {
            if (a[n.expando]) return a;
            var d, e, b;
            d = a.type;
            var c = a, f = this.fixHooks[d];
            f || (this.fixHooks[d] = f = fb.test(d) ? this.mouseHooks : vb.test(d) ? this.keyHooks : {});
            b = f.props ? this.props.concat(f.props) :
                this.props;
            a = new n.Event(c);
            for (d = b.length; d--;) e = b[d], a[e] = c[e];
            return a.target || (a.target = c.srcElement || S), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, f.filter ? f.filter(a, c) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"], filter: function (a, d) {
                return null == a.which && (a.which = null != d.charCode ? d.charCode : d.keyCode),
                    a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, d) {
                var e, b, c, f = d.button, h = d.fromElement;
                return null == a.pageX && null != d.clientX && (b = a.target.ownerDocument || S, c = b.documentElement, e = b.body, a.pageX = d.clientX + (c && c.scrollLeft || e && e.scrollLeft || 0) - (c && c.clientLeft || e && e.clientLeft || 0), a.pageY = d.clientY + (c && c.scrollTop || e && e.scrollTop || 0) - (c && c.clientTop || e && e.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget =
                    h === a.target ? d.toElement : h), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== y() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === y() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, d, e, b) {
            a = n.extend(new n.Event, e, {type: a, isSimulated: !0, originalEvent: {}});
            b ? n.event.trigger(a, null, d) : n.event.dispatch.call(d, a);
            a.isDefaultPrevented() && e.preventDefault()
        }
    };
    n.removeEvent = S.removeEventListener ? function (a, d, e) {
        a.removeEventListener && a.removeEventListener(d, e, !1)
    } : function (a, d, e) {
        d = "on" + d;
        a.detachEvent && ("undefined" === typeof a[d] && (a[d] = null), a.detachEvent(d,
            e))
    };
    n.Event = function (a, d) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? v : z) : this.type = a, d && n.extend(this, d), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, d)
    };
    n.Event.prototype = {
        isDefaultPrevented: z, isPropagationStopped: z, isImmediatePropagationStopped: z, preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = v;
            a && (a.preventDefault ?
                a.preventDefault() : a.returnValue = !1)
        }, stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = v;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = v;
            a && a.stopImmediatePropagation && a.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, d) {
        n.event.special[a] =
            {
                delegateType: d, bindType: d, handle: function (a) {
                    var e, b = a.relatedTarget, c = a.handleObj;
                    return (!b || b !== this && !n.contains(this, b)) && (a.type = c.origType, e = c.handler.apply(this, arguments), a.type = d), e
                }
            }
    });
    F.submitBubbles || (n.event.special.submit = {
        setup: function () {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function (a) {
                a = a.target;
                (a = n.nodeName(a, "input") || n.nodeName(a, "button") ? a.form : void 0) && !n._data(a, "submitBubbles") && (n.event.add(a, "submit._submit", function (a) {
                    a._submit_bubble =
                        !0
                }), n._data(a, "submitBubbles", !0))
            })
        }, postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a, !0))
        }, teardown: function () {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    });
    F.changeBubbles || (n.event.special.change = {
        setup: function () {
            return eb.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (n.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName &&
                (this._just_changed = !0)
            }), n.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1);
                n.event.simulate("change", this, a, !0)
            })), !1) : void n.event.add(this, "beforeactivate._change", function (a) {
                a = a.target;
                eb.test(a.nodeName) && !n._data(a, "changeBubbles") && (n.event.add(a, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a, !0)
                }), n._data(a, "changeBubbles", !0))
            })
        }, handle: function (a) {
            var d = a.target;
            return this !== d || a.isSimulated || a.isTrigger || "radio" !== d.type && "checkbox" !== d.type ? a.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return n.event.remove(this, "._change"), !eb.test(this.nodeName)
        }
    });
    F.focusinBubbles || n.each({focus: "focusin", blur: "focusout"}, function (a, d) {
        var e = function (a) {
            n.event.simulate(d, a.target, n.event.fix(a), !0)
        };
        n.event.special[d] = {
            setup: function () {
                var b = this.ownerDocument || this, c = n._data(b, d);
                c || b.addEventListener(a, e, !0);
                n._data(b, d, (c || 0) + 1)
            }, teardown: function () {
                var b =
                    this.ownerDocument || this, c = n._data(b, d) - 1;
                c ? n._data(b, d, c) : (b.removeEventListener(a, e, !0), n._removeData(b, d))
            }
        }
    });
    n.fn.extend({
        on: function (a, d, e, b, c) {
            var f, h;
            if ("object" == typeof a) {
                "string" != typeof d && (e = e || d, d = void 0);
                for (f in a) this.on(f, d, e, a[f], c);
                return this
            }
            if (null == e && null == b ? (b = d, e = d = void 0) : null == b && ("string" == typeof d ? (b = e, e = void 0) : (b = e, e = d, d = void 0)), !1 === b) b = z; else if (!b) return this;
            return 1 === c && (h = b, b = function (a) {
                return n().off(a), h.apply(this, arguments)
            }, b.guid = h.guid || (h.guid = n.guid++)),
                this.each(function () {
                    n.event.add(this, a, b, e, d)
                })
        }, one: function (a, d, e, b) {
            return this.on(a, d, e, b, 1)
        }, off: function (a, d, e) {
            var b, c;
            if (a && a.preventDefault && a.handleObj) return b = a.handleObj, n(a.delegateTarget).off(b.namespace ? b.origType + "." + b.namespace : b.origType, b.selector, b.handler), this;
            if ("object" == typeof a) {
                for (c in a) this.off(c, d, a[c]);
                return this
            }
            return (!1 === d || "function" == typeof d) && (e = d, d = void 0), !1 === e && (e = z), this.each(function () {
                n.event.remove(this, a, e, d)
            })
        }, trigger: function (a, d) {
            return this.each(function () {
                n.event.trigger(a,
                    d, this)
            })
        }, triggerHandler: function (a, d) {
            var e = this[0];
            return e ? n.event.trigger(a, d, e, !0) : void 0
        }
    });
    var Ka = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ea = / jQuery\d+="(?:null|\d+)"/g, aa = new RegExp("<(?:" + Ka + ")[\\s/>]", "i"), da = /^\s+/,
        la = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Y = /<([\w:]+)/, sa = /<tbody/i,
        oa = /<|&#?\w+;/, Wa = /<(?:script|style|link)/i, Pa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        gb = /^$|\/(?:java|ecma)script/i, tb = /^true\/(.*)/, Xa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ta = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: F.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, hb =
            t(S).appendChild(S.createElement("div"));
    ta.optgroup = ta.option;
    ta.tbody = ta.tfoot = ta.colgroup = ta.caption = ta.thead;
    ta.th = ta.td;
    n.extend({
        clone: function (a, d, e) {
            var b, c, f, h, k, m = n.contains(a.ownerDocument, a);
            if (F.html5Clone || n.isXMLDoc(a) || !aa.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (hb.innerHTML = a.outerHTML, hb.removeChild(f = hb.firstChild)), !(F.noCloneEvent && F.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (b = B(f), k = B(a), h = 0; null != (c = k[h]); ++h) if (b[h]) {
                var w = b[h], t = void 0, v = void 0,
                    u = void 0;
                if (1 === w.nodeType) {
                    if (t = w.nodeName.toLowerCase(), !F.noCloneEvent && w[n.expando]) {
                        u = n._data(w);
                        for (v in u.events) n.removeEvent(w, v, u.handle);
                        w.removeAttribute(n.expando)
                    }
                    "script" === t && w.text !== c.text ? (T(w).text = c.text, O(w)) : "object" === t ? (w.parentNode && (w.outerHTML = c.outerHTML), F.html5Clone && c.innerHTML && !n.trim(w.innerHTML) && (w.innerHTML = c.innerHTML)) : "input" === t && bb.test(c.type) ? (w.defaultChecked = w.checked = c.checked, w.value !== c.value && (w.value = c.value)) : "option" === t ? w.defaultSelected = w.selected =
                        c.defaultSelected : ("input" === t || "textarea" === t) && (w.defaultValue = c.defaultValue)
                }
            }
            if (d) if (e) for (k = k || B(a), b = b || B(f), h = 0; null != (c = k[h]); h++) g(c, b[h]); else g(a, f);
            return b = B(f, "script"), 0 < b.length && G(b, !m && B(a, "script")), f
        }, buildFragment: function (a, d, e, b) {
            for (var c, f, h, g, k, m, w, v = a.length, u = t(d), z = [], y = 0; v > y; y++) if (f = a[y], f || 0 === f) if ("object" === n.type(f)) n.merge(z, f.nodeType ? [f] : f); else if (oa.test(f)) {
                g = g || u.appendChild(d.createElement("div"));
                k = (Y.exec(f) || ["", ""])[1].toLowerCase();
                w = ta[k] || ta._default;
                g.innerHTML = w[1] + f.replace(la, "<$1></$2>") + w[2];
                for (c = w[0]; c--;) g = g.lastChild;
                if (!F.leadingWhitespace && da.test(f) && z.push(d.createTextNode(da.exec(f)[0])), !F.tbody) for (c = (f = "table" !== k || sa.test(f) ? "<table>" !== w[1] || sa.test(f) ? 0 : g : g.firstChild) && f.childNodes.length; c--;) n.nodeName(m = f.childNodes[c], "tbody") && !m.childNodes.length && f.removeChild(m);
                n.merge(z, g.childNodes);
                for (g.textContent = ""; g.firstChild;) g.removeChild(g.firstChild);
                g = u.lastChild
            } else z.push(d.createTextNode(f));
            g && u.removeChild(g);
            F.appendChecked || n.grep(B(z, "input"), C);
            for (y = 0; f = z[y++];) if ((!b || -1 === n.inArray(f, b)) && (h = n.contains(f.ownerDocument, f), g = B(u.appendChild(f), "script"), h && G(g), e)) for (c = 0; f = g[c++];) gb.test(f.type || "") && e.push(f);
            return u
        }, cleanData: function (a, d) {
            for (var e, b, c, f, h = 0, g = n.expando, k = n.cache, m = F.deleteExpando, w = n.event.special; null != (e = a[h]); h++) if ((d || n.acceptData(e)) && (c = e[g], f = c && k[c])) {
                if (f.events) for (b in f.events) w[b] ? n.event.remove(e, b) : n.removeEvent(e, b, f.handle);
                k[c] && (delete k[c], m ? delete e[g] :
                    "undefined" !== typeof e.removeAttribute ? e.removeAttribute(g) : e[g] = null, ba.push(c))
            }
        }
    });
    n.fn.extend({
        text: function (a) {
            return Fa(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || S).createTextNode(a))
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || I(this, a).appendChild(a)
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType ||
                    11 === this.nodeType || 9 === this.nodeType) {
                    var d = I(this, a);
                    d.insertBefore(a, d.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function (a, d) {
            for (var e, b = a ? n.filter(a, this) : this, c = 0; null != (e = b[c]); c++) d || 1 !== e.nodeType || n.cleanData(B(e)), e.parentNode && (d && n.contains(e.ownerDocument, e) &&
            G(B(e, "script")), e.parentNode.removeChild(e));
            return this
        }, empty: function () {
            for (var a, d = 0; null != (a = this[d]); d++) {
                for (1 === a.nodeType && n.cleanData(B(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        }, clone: function (a, d) {
            return a = null == a ? !1 : a, d = null == d ? a : d, this.map(function () {
                return n.clone(this, a, d)
            })
        }, html: function (a) {
            return Fa(this, function (a) {
                var d = this[0] || {}, e = 0, b = this.length;
                if (void 0 === a) return 1 === d.nodeType ? d.innerHTML.replace(ea,
                    "") : void 0;
                if (!("string" != typeof a || Wa.test(a) || !F.htmlSerialize && aa.test(a) || !F.leadingWhitespace && da.test(a) || ta[(Y.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(la, "<$1></$2>");
                    try {
                        for (; b > e; e++) d = this[e] || {}, 1 === d.nodeType && (n.cleanData(B(d, !1)), d.innerHTML = a);
                        d = 0
                    } catch (c) {
                    }
                }
                d && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (d) {
                a = this.parentNode;
                n.cleanData(B(this));
                a && a.replaceChild(d, this)
            }), a && (a.length ||
                a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, d) {
            a = ga.apply([], a);
            var e, b, c, f, h = 0, g = this.length, k = this, m = g - 1, w = a[0], t = n.isFunction(w);
            if (t || 1 < g && "string" == typeof w && !F.checkClone && Pa.test(w)) return this.each(function (e) {
                var b = k.eq(e);
                t && (a[0] = w.call(this, e, b.html()));
                b.domManip(a, d)
            });
            if (g && (f = n.buildFragment(a, this[0].ownerDocument, !1, this), e = f.firstChild, 1 === f.childNodes.length && (f = e), e)) {
                c = n.map(B(f, "script"), T);
                for (b = c.length; g > h; h++) e = f, h !==
                m && (e = n.clone(e, !0, !0), b && n.merge(c, B(e, "script"))), d.call(this[h], e, h);
                if (b) for (f = c[c.length - 1].ownerDocument, n.map(c, O), h = 0; b > h; h++) e = c[h], gb.test(e.type || "") && !n._data(e, "globalEval") && n.contains(f, e) && (e.src ? n._evalUrl && n._evalUrl(e.src) : n.globalEval((e.text || e.textContent || e.innerHTML || "").replace(Xa, "")));
                f = e = null
            }
            return this
        }
    });
    n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, d) {
        n.fn[a] = function (a) {
            for (var e = 0, b = [],
                     c = n(a), f = c.length - 1; f >= e; e++) a = e === f ? this : this.clone(!0), n(c[e])[d](a), P.apply(b, a.get());
            return this.pushStack(b)
        }
    });
    var La, za = {};
    !function () {
        var a;
        F.shrinkWrapBlocks = function () {
            if (null != a) return a;
            a = !1;
            var d, e, b;
            return e = S.getElementsByTagName("body")[0], e && e.style ? (d = S.createElement("div"), b = S.createElement("div"), b.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", e.appendChild(b).appendChild(d), "undefined" !== typeof d.style.zoom && (d.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                d.appendChild(S.createElement("div")).style.width = "5px", a = 3 !== d.offsetWidth), e.removeChild(b), a) : void 0
        }
    }();
    var Ya = /^margin/, wa = new RegExp("^(" + Ha + ")(?!px)[a-z%]+$", "i"), Ma, Na, Rb = /^(top|right|bottom|left)$/;
    c.getComputedStyle ? (Ma = function (a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, Na = function (a, d, e) {
        var b, c, f, h, g = a.style;
        return e = e || Ma(a), h = e ? e.getPropertyValue(d) || e[d] : void 0, e && ("" !== h || n.contains(a.ownerDocument, a) || (h = n.style(a, d)), wa.test(h) && Ya.test(d) && (b = g.width, c = g.minWidth,
            f = g.maxWidth, g.minWidth = g.maxWidth = g.width = h, h = e.width, g.width = b, g.minWidth = c, g.maxWidth = f)), void 0 === h ? h : h + ""
    }) : S.documentElement.currentStyle && (Ma = function (a) {
        return a.currentStyle
    }, Na = function (a, d, e) {
        var b, c, f, h, g = a.style;
        return e = e || Ma(a), h = e ? e[d] : void 0, null == h && g && g[d] && (h = g[d]), wa.test(h) && !Rb.test(d) && (b = g.left, c = a.runtimeStyle, f = c && c.left, f && (c.left = a.currentStyle.left), g.left = "fontSize" === d ? "1em" : h, h = g.pixelLeft + "px", g.left = b, f && (c.left = f)), void 0 === h ? h : h + "" || "auto"
    });
    !function () {
        var a,
            d, e, b, f, h, g;
        if (a = S.createElement("div"), a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = a.getElementsByTagName("a")[0], d = e && e.style) {
            var k = function () {
                var a, d, e, k;
                (d = S.getElementsByTagName("body")[0]) && d.style && (a = S.createElement("div"), e = S.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", d.appendChild(e).appendChild(a), a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                    b = f = !1, g = !0, c.getComputedStyle && (b = "1%" !== (c.getComputedStyle(a, null) || {}).top, f = "4px" === (c.getComputedStyle(a, null) || {width: "4px"}).width, k = a.appendChild(S.createElement("div")), k.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", a.style.width = "1px", g = !parseFloat((c.getComputedStyle(k, null) || {}).marginRight)), a.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                    k = a.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", h = 0 === k[0].offsetHeight, h && (k[0].style.display = "", k[1].style.display = "none", h = 0 === k[0].offsetHeight), d.removeChild(e))
            };
            d.cssText = "float:left;opacity:.5";
            F.opacity = "0.5" === d.opacity;
            F.cssFloat = !!d.cssFloat;
            a.style.backgroundClip = "content-box";
            a.cloneNode(!0).style.backgroundClip = "";
            F.clearCloneStyle = "content-box" === a.style.backgroundClip;
            F.boxSizing = "" === d.boxSizing || "" === d.MozBoxSizing || "" === d.WebkitBoxSizing;
            n.extend(F, {
                reliableHiddenOffsets: function () {
                    return null == h && k(), h
                }, boxSizingReliable: function () {
                    return null == f && k(), f
                }, pixelPosition: function () {
                    return null == b && k(), b
                }, reliableMarginRight: function () {
                    return null == g && k(), g
                }
            })
        }
    }();
    n.swap = function (a, d, e, b) {
        var c, f = {};
        for (c in d) f[c] = a.style[c], a.style[c] = d[c];
        e = e.apply(a, b || []);
        for (c in d) a.style[c] = f[c];
        return e
    };
    var wb = /alpha\([^)]*\)/i, Sb = /opacity\s*=\s*([^)]*)/, Tb = /^(none|table(?!-c[ea]).+)/,
        Ob = new RegExp("^(" + Ha + ")(.*)$", "i"), Ub = new RegExp("^([+-])=(" +
        Ha + ")", "i"), Vb = {position: "absolute", visibility: "hidden", display: "block"},
        Cb = {letterSpacing: "0", fontWeight: "400"}, ib = ["Webkit", "O", "Moz", "ms"];
    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, d) {
                    if (d) {
                        var e = Na(a, "opacity");
                        return "" === e ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": F.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (a, d, e, b) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType &&
                a.style) {
                var c, f, h, g = n.camelCase(d), k = a.style;
                if (d = n.cssProps[g] || (n.cssProps[g] = Q(k, g)), h = n.cssHooks[d] || n.cssHooks[g], void 0 === e) return h && "get" in h && void 0 !== (c = h.get(a, !1, b)) ? c : k[d];
                if (f = typeof e, "string" === f && (c = Ub.exec(e)) && (e = (c[1] + 1) * c[2] + parseFloat(n.css(a, d)), f = "number"), null != e && e === e && ("number" !== f || n.cssNumber[g] || (e += "px"), F.clearCloneStyle || "" !== e || 0 !== d.indexOf("background") || (k[d] = "inherit"), !(h && "set" in h && void 0 === (e = h.set(a, e, b))))) try {
                    k[d] = e
                } catch (m) {
                }
            }
        },
        css: function (a, d, e, b) {
            var c,
                f, h, g = n.camelCase(d);
            return d = n.cssProps[g] || (n.cssProps[g] = Q(a.style, g)), h = n.cssHooks[d] || n.cssHooks[g], h && "get" in h && (f = h.get(a, !0, e)), void 0 === f && (f = Na(a, d, b)), "normal" === f && d in Cb && (f = Cb[d]), "" === e || e ? (c = parseFloat(f), !0 === e || n.isNumeric(c) ? c || 0 : f) : f
        }
    });
    n.each(["height", "width"], function (a, d) {
        n.cssHooks[d] = {
            get: function (a, e, b) {
                return e ? Tb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Vb, function () {
                    return W(a, d, b)
                }) : W(a, d, b) : void 0
            }, set: function (a, e, b) {
                var c = b && Ma(a);
                return D(a, e, b ? U(a,
                    d, b, F.boxSizing && "border-box" === n.css(a, "boxSizing", !1, c), c) : 0)
            }
        }
    });
    F.opacity || (n.cssHooks.opacity = {
        get: function (a, d) {
            return Sb.test((d && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : d ? "1" : ""
        }, set: function (a, d) {
            var e = a.style, b = a.currentStyle, c = n.isNumeric(d) ? "alpha(opacity=" + 100 * d + ")" : "",
                f = b && b.filter || e.filter || "";
            e.zoom = 1;
            (1 <= d || "" === d) && "" === n.trim(f.replace(wb, "")) && e.removeAttribute && (e.removeAttribute("filter"), "" === d || b && !b.filter) || (e.filter = wb.test(f) ?
                f.replace(wb, c) : f + " " + c)
        }
    });
    n.cssHooks.marginRight = K(F.reliableMarginRight, function (a, d) {
        return d ? n.swap(a, {display: "inline-block"}, Na, [a, "marginRight"]) : void 0
    });
    n.each({margin: "", padding: "", border: "Width"}, function (a, d) {
        n.cssHooks[a + d] = {
            expand: function (e) {
                var b = 0, c = {};
                for (e = "string" == typeof e ? e.split(" ") : [e]; 4 > b; b++) c[a + ra[b] + d] = e[b] || e[b - 2] || e[0];
                return c
            }
        };
        Ya.test(a) || (n.cssHooks[a + d].set = D)
    });
    n.fn.extend({
        css: function (a, d) {
            return Fa(this, function (a, d, e) {
                var b, c = {}, f = 0;
                if (n.isArray(d)) {
                    e = Ma(a);
                    for (b = d.length; b > f; f++) c[d[f]] = n.css(a, d[f], !1, e);
                    return c
                }
                return void 0 !== e ? n.style(a, d, e) : n.css(a, d)
            }, a, d, 1 < arguments.length)
        }, show: function () {
            return L(this, !0)
        }, hide: function () {
            return L(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                Aa(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    n.Tween = E;
    E.prototype = {
        constructor: E, init: function (a, d, e, b, c, f) {
            this.elem = a;
            this.prop = e;
            this.easing = c || "swing";
            this.options = d;
            this.start = this.now = this.cur();
            this.end = b;
            this.unit =
                f || (n.cssNumber[e] ? "" : "px")
        }, cur: function () {
            var a = E.propHooks[this.prop];
            return a && a.get ? a.get(this) : E.propHooks._default.get(this)
        }, run: function (a) {
            var d, e = E.propHooks[this.prop];
            return this.pos = d = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * d + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), e && e.set ? e.set(this) : E.propHooks._default.set(this), this
        }
    };
    E.prototype.init.prototype = E.prototype;
    E.propHooks = {
        _default: {
            get: function (a) {
                var d;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (d = n.css(a.elem, a.prop, ""), d && "auto" !== d ? d : 0) : a.elem[a.prop]
            }, set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    };
    E.propHooks.scrollTop = E.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    n.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    };
    n.fx = E.prototype.init;
    n.fx.step = {};
    var Sa, ob, Wb = /^(?:toggle|show|hide)$/, Db = new RegExp("^(?:([+-])=|)(" + Ha + ")([a-z%]*)$", "i"),
        Xb = /queueHooks$/, jb = [function (a, d, e) {
            var b, c, f, h, g, k, m, w = this, t = {}, v = a.style, u = a.nodeType && Aa(a), z = n._data(a, "fxshow");
            e.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, g = h.empty.fire, h.empty.fire = function () {
                h.unqueued || g()
            }), h.unqueued++, w.always(function () {
                w.always(function () {
                    h.unqueued--;
                    n.queue(a, "fx").length ||
                    h.empty.fire()
                })
            }));
            1 === a.nodeType && ("height" in d || "width" in d) && (e.overflow = [v.overflow, v.overflowX, v.overflowY], k = n.css(a, "display"), m = "none" === k ? n._data(a, "olddisplay") || H(a.nodeName) : k, "inline" === m && "none" === n.css(a, "float") && (F.inlineBlockNeedsLayout && "inline" !== H(a.nodeName) ? v.zoom = 1 : v.display = "inline-block"));
            e.overflow && (v.overflow = "hidden", F.shrinkWrapBlocks() || w.always(function () {
                v.overflow = e.overflow[0];
                v.overflowX = e.overflow[1];
                v.overflowY = e.overflow[2]
            }));
            for (b in d) if (c = d[b], Wb.exec(c)) {
                if (delete d[b],
                    f = f || "toggle" === c, c === (u ? "hide" : "show")) {
                    if ("show" !== c || !z || void 0 === z[b]) continue;
                    u = !0
                }
                t[b] = z && z[b] || n.style(a, b)
            } else k = void 0;
            if (n.isEmptyObject(t)) "inline" === ("none" === k ? H(a.nodeName) : k) && (v.display = k); else for (b in z ? "hidden" in z && (u = z.hidden) : z = n._data(a, "fxshow", {}), f && (z.hidden = !u), u ? n(a).show() : w.done(function () {
                n(a).hide()
            }), w.done(function () {
                var d;
                n._removeData(a, "fxshow");
                for (d in t) n.style(a, d, t[d])
            }), t) d = fa(u ? z[b] : 0, b, w), b in z || (z[b] = d.start, u && (d.end = d.start, d.start = "width" === b || "height" ===
            b ? 1 : 0))
        }], cb = {
            "*": [function (a, d) {
                var e = this.createTween(a, d), b = e.cur(), c = Db.exec(d), f = c && c[3] || (n.cssNumber[a] ? "" : "px"),
                    h = (n.cssNumber[a] || "px" !== f && +b) && Db.exec(n.css(e.elem, a)), g = 1, k = 20;
                if (h && h[3] !== f) {
                    f = f || h[3];
                    c = c || [];
                    h = +b || 1;
                    do g = g || ".5", h /= g, n.style(e.elem, a, h + f); while (g !== (g = e.cur() / b) && 1 !== g && --k)
                }
                return c && (h = e.start = +h || +b || 0, e.unit = f, e.end = c[1] ? h + (c[1] + 1) * c[2] : +c[2]), e
            }]
        };
    n.Animation = n.extend(ha, {
        tweener: function (a, d) {
            n.isFunction(a) ? (d = a, a = ["*"]) : a = a.split(" ");
            for (var e, b = 0, c = a.length; c >
            b; b++) e = a[b], cb[e] = cb[e] || [], cb[e].unshift(d)
        }, prefilter: function (a, d) {
            d ? jb.unshift(a) : jb.push(a)
        }
    });
    n.speed = function (a, d, e) {
        var b = a && "object" == typeof a ? n.extend({}, a) : {
            complete: e || !e && d || n.isFunction(a) && a,
            duration: a,
            easing: e && d || d && !n.isFunction(d) && d
        };
        return b.duration = n.fx.off ? 0 : "number" == typeof b.duration ? b.duration : b.duration in n.fx.speeds ? n.fx.speeds[b.duration] : n.fx.speeds._default, (null == b.queue || !0 === b.queue) && (b.queue = "fx"), b.old = b.complete, b.complete = function () {
            n.isFunction(b.old) && b.old.call(this);
            b.queue && n.dequeue(this, b.queue)
        }, b
    };
    n.fn.extend({
        fadeTo: function (a, d, e, b) {
            return this.filter(Aa).css("opacity", 0).show().end().animate({opacity: d}, a, e, b)
        }, animate: function (a, d, e, b) {
            var c = n.isEmptyObject(a), f = n.speed(d, e, b);
            d = function () {
                var d = ha(this, n.extend({}, a), f);
                (c || n._data(this, "finish")) && d.stop(!0)
            };
            return d.finish = d, c || !1 === f.queue ? this.each(d) : this.queue(f.queue, d)
        }, stop: function (a, d, e) {
            var b = function (a) {
                var d = a.stop;
                delete a.stop;
                d(e)
            };
            return "string" != typeof a && (e = d, d = a, a = void 0), d && !1 !==
            a && this.queue(a || "fx", []), this.each(function () {
                var d = !0, c = null != a && a + "queueHooks", f = n.timers, h = n._data(this);
                if (c) h[c] && h[c].stop && b(h[c]); else for (c in h) h[c] && h[c].stop && Xb.test(c) && b(h[c]);
                for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(e), d = !1, f.splice(c, 1));
                !d && e || n.dequeue(this, a)
            })
        }, finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var d, e = n._data(this), b = e[a + "queue"];
                d = e[a + "queueHooks"];
                var c = n.timers, f = b ? b.length : 0;
                e.finish = !0;
                n.queue(this, a,
                    []);
                d && d.stop && d.stop.call(this, !0);
                for (d = c.length; d--;) c[d].elem === this && c[d].queue === a && (c[d].anim.stop(!0), c.splice(d, 1));
                for (d = 0; f > d; d++) b[d] && b[d].finish && b[d].finish.call(this);
                delete e.finish
            })
        }
    });
    n.each(["toggle", "show", "hide"], function (a, d) {
        var e = n.fn[d];
        n.fn[d] = function (a, b, c) {
            return null == a || "boolean" == typeof a ? e.apply(this, arguments) : this.animate(Z(d, !0), a, b, c)
        }
    });
    n.each({
            slideDown: Z("show"),
            slideUp: Z("hide"),
            slideToggle: Z("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        },
        function (a, d) {
            n.fn[a] = function (a, e, b) {
                return this.animate(d, a, e, b)
            }
        });
    n.timers = [];
    n.fx.tick = function () {
        var a, d = n.timers, e = 0;
        for (Sa = n.now(); e < d.length; e++) a = d[e], a() || d[e] !== a || d.splice(e--, 1);
        d.length || n.fx.stop();
        Sa = void 0
    };
    n.fx.timer = function (a) {
        n.timers.push(a);
        a() ? n.fx.start() : n.timers.pop()
    };
    n.fx.interval = 13;
    n.fx.start = function () {
        ob || (ob = setInterval(n.fx.tick, n.fx.interval))
    };
    n.fx.stop = function () {
        clearInterval(ob);
        ob = null
    };
    n.fx.speeds = {slow: 600, fast: 200, _default: 400};
    n.fn.delay = function (a, d) {
        return a =
            n.fx ? n.fx.speeds[a] || a : a, d = d || "fx", this.queue(d, function (d, e) {
            var b = setTimeout(d, a);
            e.stop = function () {
                clearTimeout(b)
            }
        })
    };
    (function () {
        var a, d, e, b, c;
        d = S.createElement("div");
        d.setAttribute("className", "t");
        d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        b = d.getElementsByTagName("a")[0];
        e = S.createElement("select");
        c = e.appendChild(S.createElement("option"));
        a = d.getElementsByTagName("input")[0];
        b.style.cssText = "top:1px";
        F.getSetAttribute = "t" !== d.className;
        F.style = /top/.test(b.getAttribute("style"));
        F.hrefNormalized = "/a" === b.getAttribute("href");
        F.checkOn = !!a.value;
        F.optSelected = c.selected;
        F.enctype = !!S.createElement("form").enctype;
        e.disabled = !0;
        F.optDisabled = !c.disabled;
        a = S.createElement("input");
        a.setAttribute("value", "");
        F.input = "" === a.getAttribute("value");
        a.value = "t";
        a.setAttribute("type", "radio");
        F.radioValue = "t" === a.value
    })();
    var Yb = /\r/g;
    n.fn.extend({
        val: function (a) {
            var d, e, b, c = this[0];
            if (arguments.length) return b = n.isFunction(a), this.each(function (e) {
                var c;
                1 === this.nodeType && (c = b ? a.call(this,
                    e, n(this).val()) : a, null == c ? c = "" : "number" == typeof c ? c += "" : n.isArray(c) && (c = n.map(c, function (a) {
                    return null == a ? "" : a + ""
                })), d = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], d && "set" in d && void 0 !== d.set(this, c, "value") || (this.value = c))
            });
            if (c) return d = n.valHooks[c.type] || n.valHooks[c.nodeName.toLowerCase()], d && "get" in d && void 0 !== (e = d.get(c, "value")) ? e : (e = c.value, "string" == typeof e ? e.replace(Yb, "") : null == e ? "" : e)
        }
    });
    n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var d = n.find.attr(a, "value");
                    return null != d ? d : n.trim(n.text(a))
                }
            }, select: {
                get: function (a) {
                    for (var d, e = a.options, b = a.selectedIndex, c = "select-one" === a.type || 0 > b, f = c ? null : [], h = c ? b + 1 : e.length, g = 0 > b ? h : c ? b : 0; h > g; g++) if (d = e[g], !(!d.selected && g !== b || (F.optDisabled ? d.disabled : null !== d.getAttribute("disabled")) || d.parentNode.disabled && n.nodeName(d.parentNode, "optgroup"))) {
                        if (a = n(d).val(), c) return a;
                        f.push(a)
                    }
                    return f
                }, set: function (a, d) {
                    for (var e, b, c = a.options, f = n.makeArray(d), h = c.length; h--;) if (b = c[h], 0 <= n.inArray(n.valHooks.option.get(b),
                        f)) try {
                        b.selected = e = !0
                    } catch (g) {
                        b.scrollHeight
                    } else b.selected = !1;
                    return e || (a.selectedIndex = -1), c
                }
            }
        }
    });
    n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = {
            set: function (a, d) {
                return n.isArray(d) ? a.checked = 0 <= n.inArray(n(a).val(), d) : void 0
            }
        };
        F.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var Za, Eb, Ia = n.expr.attrHandle, xb = /^(?:checked|selected)$/i, Qa = F.getSetAttribute, pb = F.input;
    n.fn.extend({
        attr: function (a, d) {
            return Fa(this, n.attr, a, d, 1 < arguments.length)
        },
        removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a)
            })
        }
    });
    n.extend({
        attr: function (a, d, e) {
            var b, c, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return "undefined" === typeof a.getAttribute ? n.prop(a, d, e) : (1 === f && n.isXMLDoc(a) || (d = d.toLowerCase(), b = n.attrHooks[d] || (n.expr.match.bool.test(d) ? Eb : Za)), void 0 === e ? b && "get" in b && null !== (c = b.get(a, d)) ? c : (c = n.find.attr(a, d), null == c ? void 0 : c) : null !== e ? b && "set" in b && void 0 !== (c = b.set(a, e, d)) ? c : (a.setAttribute(d, e + ""), e) : void n.removeAttr(a, d))
        }, removeAttr: function (a,
                                 d) {
            var e, b, c = 0, f = d && d.match(na);
            if (f && 1 === a.nodeType) for (; e = f[c++];) b = n.propFix[e] || e, n.expr.match.bool.test(e) ? pb && Qa || !xb.test(e) ? a[b] = !1 : a[n.camelCase("default-" + e)] = a[b] = !1 : n.attr(a, e, ""), a.removeAttribute(Qa ? e : b)
        }, attrHooks: {
            type: {
                set: function (a, d) {
                    if (!F.radioValue && "radio" === d && n.nodeName(a, "input")) {
                        var e = a.value;
                        return a.setAttribute("type", d), e && (a.value = e), d
                    }
                }
            }
        }
    });
    Eb = {
        set: function (a, d, e) {
            return !1 === d ? n.removeAttr(a, e) : pb && Qa || !xb.test(e) ? a.setAttribute(!Qa && n.propFix[e] || e, e) : a[n.camelCase("default-" +
                e)] = a[e] = !0, e
        }
    };
    n.each(n.expr.match.bool.source.match(/\w+/g), function (a, d) {
        var e = Ia[d] || n.find.attr;
        Ia[d] = pb && Qa || !xb.test(d) ? function (a, d, b) {
            var c, f;
            return b || (f = Ia[d], Ia[d] = c, c = null != e(a, d, b) ? d.toLowerCase() : null, Ia[d] = f), c
        } : function (a, d, e) {
            return e ? void 0 : a[n.camelCase("default-" + d)] ? d.toLowerCase() : null
        }
    });
    pb && Qa || (n.attrHooks.value = {
        set: function (a, d, e) {
            return n.nodeName(a, "input") ? void(a.defaultValue = d) : Za && Za.set(a, d, e)
        }
    });
    Qa || (Za = {
        set: function (a, d, e) {
            var b = a.getAttributeNode(e);
            return b ||
            a.setAttributeNode(b = a.ownerDocument.createAttribute(e)), b.value = d += "", "value" === e || d === a.getAttribute(e) ? d : void 0
        }
    }, Ia.id = Ia.name = Ia.coords = function (a, d, e) {
        var b;
        return e ? void 0 : (b = a.getAttributeNode(d)) && "" !== b.value ? b.value : null
    }, n.valHooks.button = {
        get: function (a, d) {
            var e = a.getAttributeNode(d);
            return e && e.specified ? e.value : void 0
        }, set: Za.set
    }, n.attrHooks.contenteditable = {
        set: function (a, d, e) {
            Za.set(a, "" === d ? !1 : d, e)
        }
    }, n.each(["width", "height"], function (a, d) {
        n.attrHooks[d] = {
            set: function (a, e) {
                return "" ===
                e ? (a.setAttribute(d, "auto"), e) : void 0
            }
        }
    }));
    F.style || (n.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0
        }, set: function (a, d) {
            return a.style.cssText = d + ""
        }
    });
    var Zb = /^(?:input|select|textarea|button|object)$/i, $b = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function (a, d) {
            return Fa(this, n.prop, a, d, 1 < arguments.length)
        }, removeProp: function (a) {
            return a = n.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a]
                } catch (d) {
                }
            })
        }
    });
    n.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (a,
                                                                           d, e) {
            var b, c, f, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h) return f = 1 !== h || !n.isXMLDoc(a), f && (d = n.propFix[d] || d, c = n.propHooks[d]), void 0 !== e ? c && "set" in c && void 0 !== (b = c.set(a, e, d)) ? b : a[d] = e : c && "get" in c && null !== (b = c.get(a, d)) ? b : a[d]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    var d = n.find.attr(a, "tabindex");
                    return d ? parseInt(d, 10) : Zb.test(a.nodeName) || $b.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    });
    F.hrefNormalized || n.each(["href", "src"], function (a, d) {
        n.propHooks[d] = {
            get: function (a) {
                return a.getAttribute(d, 4)
            }
        }
    });
    F.optSelected ||
    (n.propHooks.selected = {
        get: function (a) {
            a = a.parentNode;
            return a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex), null
        }
    });
    n.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () {
        n.propFix[this.toLowerCase()] = this
    });
    F.enctype || (n.propFix.enctype = "encoding");
    var yb = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function (a) {
            var d, e, b, c, f, h = 0, g = this.length;
            d = "string" == typeof a && a;
            if (n.isFunction(a)) return this.each(function (d) {
                n(this).addClass(a.call(this,
                    d, this.className))
            });
            if (d) for (d = (a || "").match(na) || []; g > h; h++) if (e = this[h], b = 1 === e.nodeType && (e.className ? (" " + e.className + " ").replace(yb, " ") : " ")) {
                for (f = 0; c = d[f++];) 0 > b.indexOf(" " + c + " ") && (b += c + " ");
                b = n.trim(b);
                e.className !== b && (e.className = b)
            }
            return this
        }, removeClass: function (a) {
            var d, e, b, c, f, h = 0, g = this.length;
            d = 0 === arguments.length || "string" == typeof a && a;
            if (n.isFunction(a)) return this.each(function (d) {
                n(this).removeClass(a.call(this, d, this.className))
            });
            if (d) for (d = (a || "").match(na) || []; g > h; h++) if (e =
                this[h], b = 1 === e.nodeType && (e.className ? (" " + e.className + " ").replace(yb, " ") : "")) {
                for (f = 0; c = d[f++];) for (; 0 <= b.indexOf(" " + c + " ");) b = b.replace(" " + c + " ", " ");
                b = a ? n.trim(b) : "";
                e.className !== b && (e.className = b)
            }
            return this
        }, toggleClass: function (a, d) {
            var e = typeof a;
            return "boolean" == typeof d && "string" === e ? d ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (e) {
                n(this).toggleClass(a.call(this, e, this.className, d), d)
            } : function () {
                if ("string" === e) for (var d, b = 0, c = n(this), f = a.match(na) || []; d =
                    f[b++];) c.hasClass(d) ? c.removeClass(d) : c.addClass(d); else ("undefined" === e || "boolean" === e) && (this.className && n._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : n._data(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            a = " " + a + " ";
            for (var d = 0, e = this.length; e > d; d++) if (1 === this[d].nodeType && 0 <= (" " + this[d].className + " ").replace(yb, " ").indexOf(a)) return !0;
            return !1
        }
    });
    n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function (a, d) {
            n.fn[d] = function (a, e) {
                return 0 < arguments.length ? this.on(d, null, a, e) : this.trigger(d)
            }
        });
    n.fn.extend({
        hover: function (a, d) {
            return this.mouseenter(a).mouseleave(d || a)
        }, bind: function (a, d, e) {
            return this.on(a, null, d, e)
        }, unbind: function (a, d) {
            return this.off(a, null, d)
        }, delegate: function (a, d, e, b) {
            return this.on(d, a, e, b)
        }, undelegate: function (a, d, e) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(d, a || "**", e)
        }
    });
    var zb = n.now(), Ab = /\?/,
        ac = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function (a) {
        if (c.JSON && c.JSON.parse) return c.JSON.parse(a + "");
        var d, e = null, b = n.trim(a + "");
        return b && !n.trim(b.replace(ac, function (a, b, c, f) {
            return d && b && (e = 0), 0 === e ? a : (d = c || b, e += !f - !c, "")
        })) ? Function("return " + b)() : n.error("Invalid JSON: " + a)
    };
    n.parseXML = function (a) {
        var d, e;
        if (!a || "string" != typeof a) return null;
        try {
            c.DOMParser ? (e = new DOMParser, d = e.parseFromString(a, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(a))
        } catch (b) {
            d = void 0
        }
        return d && d.documentElement &&
        !d.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + a), d
    };
    var Ra, Ja, bc = /#.*$/, Fb = /([?&])_=[^&]*/, cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, dc = /^(?:GET|HEAD)$/,
        ec = /^\/\//, Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hb = {}, ub = {},
        Ib = "*/".concat("*");
    try {
        Ja = location.href
    } catch (lc) {
        Ja = S.createElement("a"), Ja.href = "", Ja = Ja.href
    }
    Ra = Gb.exec(Ja.toLowerCase()) || [];
    n.extend({
        active: 0, lastModified: {}, etag: {}, ajaxSettings: {
            url: Ja,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ra[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ib,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML},
            flatOptions: {url: !0, context: !0}
        }, ajaxSetup: function (a, d) {
            return d ? x(x(a,
                n.ajaxSettings), d) : x(n.ajaxSettings, a)
        }, ajaxPrefilter: ia(Hb), ajaxTransport: ia(ub), ajax: function (a, d) {
            function e(a, d, b, c) {
                var w, p, ea, Y, A = d;
                if (2 !== x) {
                    x = 2;
                    g && clearTimeout(g);
                    m = void 0;
                    h = c || "";
                    aa.readyState = 0 < a ? 4 : 0;
                    c = 200 <= a && 300 > a || 304 === a;
                    if (b) {
                        ea = t;
                        for (var R = aa, B, ba, X, da, ga = ea.contents, oa = ea.dataTypes; "*" === oa[0];) oa.shift(), void 0 === ba && (ba = ea.mimeType || R.getResponseHeader("Content-Type"));
                        if (ba) for (da in ga) if (ga[da] && ga[da].test(ba)) {
                            oa.unshift(da);
                            break
                        }
                        if (oa[0] in b) X = oa[0]; else {
                            for (da in b) {
                                if (!oa[0] ||
                                    ea.converters[da + " " + oa[0]]) {
                                    X = da;
                                    break
                                }
                                B || (B = da)
                            }
                            X = X || B
                        }
                        ea = X ? (X !== oa[0] && oa.unshift(X), b[X]) : void 0
                    }
                    var la;
                    a:{
                        b = t;
                        B = ea;
                        ba = aa;
                        X = c;
                        var P, J, C;
                        ea = {};
                        R = b.dataTypes.slice();
                        if (R[1]) for (P in b.converters) ea[P.toLowerCase()] = b.converters[P];
                        for (da = R.shift(); da;) if (b.responseFields[da] && (ba[b.responseFields[da]] = B), !C && X && b.dataFilter && (B = b.dataFilter(B, b.dataType)), C = da, da = R.shift()) if ("*" === da) da = C; else if ("*" !== C && C !== da) {
                            if (P = ea[C + " " + da] || ea["* " + da], !P) for (la in ea) if (J = la.split(" "), J[1] === da && (P =
                                ea[C + " " + J[0]] || ea["* " + J[0]])) {
                                !0 === P ? P = ea[la] : !0 !== ea[la] && (da = J[0], R.unshift(J[1]));
                                break
                            }
                            if (!0 !== P) if (P && b["throws"]) B = P(B); else try {
                                B = P(B)
                            } catch (sa) {
                                la = {state: "parsererror", error: P ? sa : "No conversion from " + C + " to " + da};
                                break a
                            }
                        }
                        la = {state: "success", data: B}
                    }
                    ea = la;
                    c ? (t.ifModified && (Y = aa.getResponseHeader("Last-Modified"), Y && (n.lastModified[f] = Y), Y = aa.getResponseHeader("etag"), Y && (n.etag[f] = Y)), 204 === a || "HEAD" === t.type ? A = "nocontent" : 304 === a ? A = "notmodified" : (A = ea.state, w = ea.data, p = ea.error, c = !p)) :
                        (p = A, (a || !A) && (A = "error", 0 > a && (a = 0)));
                    aa.status = a;
                    aa.statusText = (d || A) + "";
                    c ? z.resolveWith(v, [w, A, aa]) : z.rejectWith(v, [aa, A, p]);
                    aa.statusCode(q);
                    q = void 0;
                    k && u.trigger(c ? "ajaxSuccess" : "ajaxError", [aa, t, c ? w : p]);
                    y.fireWith(v, [aa, A]);
                    k && (u.trigger("ajaxComplete", [aa, t]), --n.active || n.event.trigger("ajaxStop"))
                }
            }

            "object" == typeof a && (d = a, a = void 0);
            d = d || {};
            var b, c, f, h, g, k, m, w, t = n.ajaxSetup({}, d), v = t.context || t,
                u = t.context && (v.nodeType || v.jquery) ? n(v) : n.event, z = n.Deferred(),
                y = n.Callbacks("once memory"), q =
                t.statusCode || {}, p = {}, ea = {}, x = 0, Y = "canceled", aa = {
                    readyState: 0, getResponseHeader: function (a) {
                        var d;
                        if (2 === x) {
                            if (!w) for (w = {}; d = cc.exec(h);) w[d[1].toLowerCase()] = d[2];
                            d = w[a.toLowerCase()]
                        }
                        return null == d ? null : d
                    }, getAllResponseHeaders: function () {
                        return 2 === x ? h : null
                    }, setRequestHeader: function (a, d) {
                        var e = a.toLowerCase();
                        return x || (a = ea[e] = ea[e] || a, p[a] = d), this
                    }, overrideMimeType: function (a) {
                        return x || (t.mimeType = a), this
                    }, statusCode: function (a) {
                        var d;
                        if (a) if (2 > x) for (d in a) q[d] = [q[d], a[d]]; else aa.always(a[aa.status]);
                        return this
                    }, abort: function (a) {
                        a = a || Y;
                        return m && m.abort(a), e(0, a), this
                    }
                };
            if (z.promise(aa).complete = y.add, aa.success = aa.done, aa.error = aa.fail, t.url = ((a || t.url || Ja) + "").replace(bc, "").replace(ec, Ra[1] + "//"), t.type = d.method || d.type || t.method || t.type, t.dataTypes = n.trim(t.dataType || "*").toLowerCase().match(na) || [""], null == t.crossDomain && (b = Gb.exec(t.url.toLowerCase()), t.crossDomain = !(!b || b[1] === Ra[1] && b[2] === Ra[2] && (b[3] || ("http:" === b[1] ? "80" : "443")) === (Ra[3] || ("http:" === Ra[1] ? "80" : "443")))), t.data && t.processData &&
            "string" != typeof t.data && (t.data = n.param(t.data, t.traditional)), ca(Hb, t, d, aa), 2 === x) return aa;
            (k = t.global) && 0 === n.active++ && n.event.trigger("ajaxStart");
            t.type = t.type.toUpperCase();
            t.hasContent = !dc.test(t.type);
            f = t.url;
            t.hasContent || (t.data && (f = t.url += (Ab.test(f) ? "&" : "?") + t.data, delete t.data), !1 === t.cache && (t.url = Fb.test(f) ? f.replace(Fb, "$1_=" + zb++) : f + (Ab.test(f) ? "&" : "?") + "_=" + zb++));
            t.ifModified && (n.lastModified[f] && aa.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && aa.setRequestHeader("If-None-Match",
                n.etag[f]));
            (t.data && t.hasContent && !1 !== t.contentType || d.contentType) && aa.setRequestHeader("Content-Type", t.contentType);
            aa.setRequestHeader("Accept", t.dataTypes[0] && t.accepts[t.dataTypes[0]] ? t.accepts[t.dataTypes[0]] + ("*" !== t.dataTypes[0] ? ", " + Ib + "; q=0.01" : "") : t.accepts["*"]);
            for (c in t.headers) aa.setRequestHeader(c, t.headers[c]);
            if (t.beforeSend && (!1 === t.beforeSend.call(v, aa, t) || 2 === x)) return aa.abort();
            Y = "abort";
            for (c in{success: 1, error: 1, complete: 1}) aa[c](t[c]);
            if (m = ca(ub, t, d, aa)) {
                aa.readyState =
                    1;
                k && u.trigger("ajaxSend", [aa, t]);
                t.async && 0 < t.timeout && (g = setTimeout(function () {
                    aa.abort("timeout")
                }, t.timeout));
                try {
                    x = 1, m.send(p, e)
                } catch (A) {
                    if (!(2 > x)) throw A;
                    e(-1, A)
                }
            } else e(-1, "No Transport");
            return aa
        }, getJSON: function (a, d, e) {
            return n.get(a, d, e, "json")
        }, getScript: function (a, d) {
            return n.get(a, void 0, d, "script")
        }
    });
    n.each(["get", "post"], function (a, d) {
        n[d] = function (a, e, b, c) {
            return n.isFunction(e) && (c = c || b, b = e, e = void 0), n.ajax({
                url: a,
                type: d,
                dataType: c,
                data: e,
                success: b
            })
        }
    });
    n.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
        function (a, d) {
            n.fn[d] = function (a) {
                return this.on(d, a)
            }
        });
    n._evalUrl = function (a) {
        return n.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    };
    n.fn.extend({
        wrapAll: function (a) {
            if (n.isFunction(a)) return this.each(function (d) {
                n(this).wrapAll(a.call(this, d))
            });
            if (this[0]) {
                var d = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && d.insertBefore(this[0]);
                d.map(function () {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            return this.each(n.isFunction(a) ? function (d) {
                n(this).wrapInner(a.call(this, d))
            } : function () {
                var d = n(this), e = d.contents();
                e.length ? e.wrapAll(a) : d.append(a)
            })
        }, wrap: function (a) {
            var d = n.isFunction(a);
            return this.each(function (e) {
                n(this).wrapAll(d ? a.call(this, e) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    n.expr.filters.hidden = function (a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !F.reliableHiddenOffsets() &&
            "none" === (a.style && a.style.display || n.css(a, "display"))
    };
    n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a)
    };
    var fc = /%20/g, Pb = /\[\]$/, Jb = /\r?\n/g, gc = /^(?:submit|button|image|reset|file)$/i,
        hc = /^(?:input|select|textarea|keygen)/i;
    n.param = function (a, d) {
        var e, b = [], c = function (a, d) {
            d = n.isFunction(d) ? d() : null == d ? "" : d;
            b[b.length] = encodeURIComponent(a) + "=" + encodeURIComponent(d)
        };
        if (void 0 === d && (d = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a,
            function () {
                c(this.name, this.value)
            }); else for (e in a) A(e, a[e], d, c);
        return b.join("&").replace(fc, "+")
    };
    n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && hc.test(this.nodeName) && !gc.test(a) && (this.checked || !bb.test(a))
            }).map(function (a, d) {
                var e = n(this).val();
                return null == e ? null : n.isArray(e) ?
                    n.map(e, function (a) {
                        return {name: d.name, value: a.replace(Jb, "\r\n")}
                    }) : {name: d.name, value: e.replace(Jb, "\r\n")}
            }).get()
        }
    });
    n.ajaxSettings.xhr = void 0 !== c.ActiveXObject ? function () {
        var a;
        if (!(a = !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && w())) a:{
            try {
                a = new c.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (d) {
            }
            a = void 0
        }
        return a
    } : w;
    var ic = 0, qb = {}, rb = n.ajaxSettings.xhr();
    c.ActiveXObject && n(c).on("unload", function () {
        for (var a in qb) qb[a](void 0, !0)
    });
    F.cors = !!rb && "withCredentials" in
        rb;
    (rb = F.ajax = !!rb) && n.ajaxTransport(function (a) {
        if (!a.crossDomain || F.cors) {
            var d;
            return {
                send: function (e, b) {
                    var c, f = a.xhr(), h = ++ic;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (c in a.xhrFields) f[c] = a.xhrFields[c];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType);
                    a.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    for (c in e) void 0 !== e[c] && f.setRequestHeader(c, e[c] + "");
                    f.send(a.hasContent && a.data || null);
                    d = function (e, c) {
                        var g, k, m;
                        if (d &&
                            (c || 4 === f.readyState)) if (delete qb[h], d = void 0, f.onreadystatechange = n.noop, c) 4 !== f.readyState && f.abort(); else {
                            m = {};
                            g = f.status;
                            "string" == typeof f.responseText && (m.text = f.responseText);
                            try {
                                k = f.statusText
                            } catch (w) {
                                k = ""
                            }
                            g || !a.isLocal || a.crossDomain ? 1223 === g && (g = 204) : g = m.text ? 200 : 404
                        }
                        m && b(g, k, m, f.getAllResponseHeaders())
                    };
                    a.async ? 4 === f.readyState ? setTimeout(d) : f.onreadystatechange = qb[h] = d : d()
                }, abort: function () {
                    d && d(void 0, !0)
                }
            }
        }
    });
    n.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/}, converters: {
            "text script": function (a) {
                return n.globalEval(a), a
            }
        }
    });
    n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET", a.global = !1)
    });
    n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var d, e = S.head || n("head")[0] || S.documentElement;
            return {
                send: function (b, c) {
                    d = S.createElement("script");
                    d.async = !0;
                    a.scriptCharset && (d.charset = a.scriptCharset);
                    d.src = a.url;
                    d.onload = d.onreadystatechange = function (a, e) {
                        (e || !d.readyState ||
                            /loaded|complete/.test(d.readyState)) && (d.onload = d.onreadystatechange = null, d.parentNode && d.parentNode.removeChild(d), d = null, e || c(200, "success"))
                    };
                    e.insertBefore(d, e.firstChild)
                }, abort: function () {
                    d && d.onload(void 0, !0)
                }
            }
        }
    });
    var Kb = [], Bb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = Kb.pop() || n.expando + "_" + zb++;
            return this[a] = !0, a
        }
    });
    n.ajaxPrefilter("json jsonp", function (a, d, e) {
        var b, f, h, g = !1 !== a.jsonp && (Bb.test(a.url) ? "url" : "string" == typeof a.data && !(a.contentType ||
            "").indexOf("application/x-www-form-urlencoded") && Bb.test(a.data) && "data");
        return g || "jsonp" === a.dataTypes[0] ? (b = a.jsonpCallback = n.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, g ? a[g] = a[g].replace(Bb, "$1" + b) : !1 !== a.jsonp && (a.url += (Ab.test(a.url) ? "&" : "?") + a.jsonp + "=" + b), a.converters["script json"] = function () {
            return h || n.error(b + " was not called"), h[0]
        }, a.dataTypes[0] = "json", f = c[b], c[b] = function () {
            h = arguments
        }, e.always(function () {
            c[b] = f;
            a[b] && (a.jsonpCallback = d.jsonpCallback, Kb.push(b));
            h && n.isFunction(f) && f(h[0]);
            h = f = void 0
        }), "script") : void 0
    });
    n.parseHTML = function (a, d, e) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof d && (e = d, d = !1);
        d = d || S;
        var b = Ua.exec(a);
        e = !e && [];
        return b ? [d.createElement(b[1])] : (b = n.buildFragment([a], d, e), e && e.length && n(e).remove(), n.merge([], b.childNodes))
    };
    var Lb = n.fn.load;
    n.fn.load = function (a, d, e) {
        if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
        var b, c, f, h = this, g = a.indexOf(" ");
        return 0 <= g && (b = n.trim(a.slice(g, a.length)), a = a.slice(0, g)),
            n.isFunction(d) ? (e = d, d = void 0) : d && "object" == typeof d && (f = "POST"), 0 < h.length && n.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: d
        }).done(function (a) {
            c = arguments;
            h.html(b ? n("<div>").append(n.parseHTML(a)).find(b) : a)
        }).complete(e && function (a, d) {
            h.each(e, c || [a.responseText, d, a])
        }), this
    };
    n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (d) {
            return a === d.elem
        }).length
    };
    var Mb = c.document.documentElement;
    n.offset = {
        setOffset: function (a, d, e) {
            var b, c, f, h, g, k, m = n.css(a, "position"), w = n(a), t = {};
            "static" ===
            m && (a.style.position = "relative");
            g = w.offset();
            f = n.css(a, "top");
            k = n.css(a, "left");
            ("absolute" === m || "fixed" === m) && -1 < n.inArray("auto", [f, k]) ? (b = w.position(), h = b.top, c = b.left) : (h = parseFloat(f) || 0, c = parseFloat(k) || 0);
            n.isFunction(d) && (d = d.call(a, e, g));
            null != d.top && (t.top = d.top - g.top + h);
            null != d.left && (t.left = d.left - g.left + c);
            "using" in d ? d.using.call(a, t) : w.css(t)
        }
    };
    n.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (d) {
                n.offset.setOffset(this, a, d)
            });
            var d, e, b =
                {top: 0, left: 0}, c = this[0], f = c && c.ownerDocument;
            if (f) return d = f.documentElement, n.contains(d, c) ? ("undefined" !== typeof c.getBoundingClientRect && (b = c.getBoundingClientRect()), e = X(f), {
                top: b.top + (e.pageYOffset || d.scrollTop) - (d.clientTop || 0),
                left: b.left + (e.pageXOffset || d.scrollLeft) - (d.clientLeft || 0)
            }) : b
        }, position: function () {
            if (this[0]) {
                var a, d, e = {top: 0, left: 0}, b = this[0];
                return "fixed" === n.css(b, "position") ? d = b.getBoundingClientRect() : (a = this.offsetParent(), d = this.offset(), n.nodeName(a[0], "html") || (e = a.offset()),
                    e.top += n.css(a[0], "borderTopWidth", !0), e.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: d.top - e.top - n.css(b, "marginTop", !0),
                    left: d.left - e.left - n.css(b, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || Mb; a && !n.nodeName(a, "html") && "static" === n.css(a, "position");) a = a.offsetParent;
                return a || Mb
            })
        }
    });
    n.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, d) {
        var e = /Y/.test(d);
        n.fn[a] = function (b) {
            return Fa(this, function (a, b, c) {
                var f = X(a);
                return void 0 ===
                c ? f ? d in f ? f[d] : f.document.documentElement[b] : a[b] : void(f ? f.scrollTo(e ? n(f).scrollLeft() : c, e ? c : n(f).scrollTop()) : a[b] = c)
            }, a, b, arguments.length, null)
        }
    });
    n.each(["top", "left"], function (a, d) {
        n.cssHooks[d] = K(F.pixelPosition, function (a, e) {
            return e ? (e = Na(a, d), wa.test(e) ? n(a).position()[d] + "px" : e) : void 0
        })
    });
    n.each({Height: "height", Width: "width"}, function (a, d) {
        n.each({padding: "inner" + a, content: d, "": "outer" + a}, function (e, b) {
            n.fn[b] = function (b, c) {
                var f = arguments.length && (e || "boolean" != typeof b), h = e || (!0 ===
                b || !0 === c ? "margin" : "border");
                return Fa(this, function (d, e, b) {
                    var c;
                    return n.isWindow(d) ? d.document.documentElement["client" + a] : 9 === d.nodeType ? (c = d.documentElement, Math.max(d.body["scroll" + a], c["scroll" + a], d.body["offset" + a], c["offset" + a], c["client" + a])) : void 0 === b ? n.css(d, e, h) : n.style(d, e, b, h)
                }, d, f ? b : void 0, f, null)
            }
        })
    });
    n.fn.size = function () {
        return this.length
    };
    n.fn.andSelf = n.fn.addBack;
    "function" == typeof define && define.amd && define("jquery", [], function () {
        return n
    });
    var jc = c.jQuery, kc = c.$;
    return n.noConflict =
        function (a) {
            return c.$ === n && (c.$ = kc), a && c.jQuery === n && (c.jQuery = jc), n
        }, "undefined" === typeof b && (c.jQuery = c.$ = n), n
});
"function" !== typeof Object.create && (ScratchCard.create = function (c) {
    function b() {
    }

    b.prototype = c;
    return new b
});
var scratchCardId = 0;
(function (c, b, a, d) {
    var e = c("<Canvas class='scratchCanvas' style='display:none'></Canvas>"), f = {
        init: function (a, d) {
            var b = this;
            b.elem = d;
            b.$elem = c(d);
            b.options = c.extend({}, c.fn.rabidScratchCard.options, a);
            b.options.backgGroundImage = b.$elem.data("backgroundimage");
            b.options.foreGroundImage = b.$elem.data("foregroundimage");
            b.loadedImages = 0;
            b.percentScratched = 0;
            var f = new Image;
            f.onload = function () {
                b.newScratchCanvas = e.clone();
                b.dummyCanvas = e.clone();
                b.$elem.html(b.newScratchCanvas);
                b.theCanvas = b.newScratchCanvas;
                b.ctx = b.theCanvas[0].getContext("2d");
                b.dummyctx = b.dummyCanvas[0].getContext("2d");
                b.theCanvas.bind("mousedown", c.proxy(b.addDownHandler, b));
                b.theCanvas.bind("mouseup", c.proxy(b.addUpHandler, b));
                b.theCanvas.bind("touchstart", c.proxy(b.touchstartHandler, b));
                b.theCanvas.bind("touchend", c.proxy(b.touchendHandler, b));
                c(b.theCanvas).css({
                    backgroundImage: "url(" + f.src + ")",
                    "max-width": "100%",
                    "background-size": "contain"
                });
                b.theCanvas[0].width = b.dummyCanvas[0].width = b.canvasWidth = f.width;
                b.theCanvas[0].height =
                    b.dummyCanvas[0].height = b.canvasHeight = f.height;
                b.totalPixels = f.width * f.height;
                b.loadedImages++;
                b.theCanvas.css("display", "inline");
                b.initX = b.theCanvas.offset().left;
                b.initY = b.theCanvas.offset().top
            };
            var q = new Image;
            q.onload = function () {
                b.srcImg = q;
                f.src = b.options.foreGroundImage
            };
            q.src = b.options.backgGroundImage
        }, addDownHandler: function (a) {
            this.origW = this.theCanvas.width();
            this.origH = this.theCanvas.height();
            var d;
            a || (a = b.event);
            a.target ? d = a.target : a.srcElement && (d = a.srcElement);
            3 == d.nodeType && (d = d.parentNode);
            var e = Math.round(a.pageX - c(d).offset().left);
            a = Math.round(a.pageY - c(d).offset().top);
            Math.round(this.canvasWidth / this.origW * e);
            Math.round(this.canvasHeight / this.origH * a);
            this.theCanvas.bind("mousemove", c.proxy(this.mouseMoveHandler, this));
            c(b).bind("mouseup", c.proxy(this.addUpHandler, this))
        }, addUpHandler: function (a) {
            this.scratchPercentage(this);
            this.theCanvas.unbind("mousemove");
            c(b).unbind("mouseup", c.proxy(this.addUpHandler, this, !0))
        }, mouseMoveHandler: function (a) {
            var d;
            a || (a = b.event);
            a.target ? d =
                a.target : a.srcElement && (d = a.srcElement);
            3 == d.nodeType && (d = d.parentNode);
            var e = Math.round(a.pageX - c(d).offset().left);
            a = Math.round(a.pageY - c(d).offset().top);
            e = Math.round(this.canvasWidth / this.origW * e);
            a = Math.round(this.canvasHeight / this.origH * a);
            this.reveal(e, a, this, this.options.updateOnMouseMove)
        }, touchstartHandler: function (a) {
            this.theCanvas.bind("touchmove", c.proxy(this.touchmoveHandler, this))
        }, touchendHandler: function (a) {
            this.scratchPercentage(this);
            this.theCanvas.unbind("touchmove")
        }, touchmoveHandler: function (a) {
            a.preventDefault();
            a = b.event;
            mouseX = a.touches[0].pageX - this.initX;
            mouseY = a.touches[0].pageY - this.initY;
            this.reveal(mouseX, mouseY, this, this.options.updateOnFingerMove)
        }, reveal: function (a, d, e, b) {
            e.ctx.save();
            e.dummyctx.fillStyle = "#FF0000";
            e.dummyctx.beginPath();
            e.ctx.beginPath();
            e.dummyctx.arc(a, d, e.options.revealRadius, 0, 2 * Math.PI, !1);
            e.ctx.arc(a, d, e.options.revealRadius, 0, 2 * Math.PI, !1);
            e.ctx.clip();
            e.ctx.drawImage(e.srcImg, 0, 0);
            e.dummyctx.closePath();
            e.ctx.closePath();
            e.dummyctx.fill();
            e.ctx.restore();
            b && e.scratchPercentage(e)
        },
        scratchPercentage: function (a) {
            for (var d = 0, e = a.dummyctx.getImageData(0, 0, a.dummyctx.canvas.width, a.dummyctx.canvas.height), b = 0; b < e.data.length; b += 4) 255 == e.data[b] && d++;
            a.percentScratched = Math.ceil(d / e.data.length * 400);
            "function" === typeof a.options.onUpdate && a.options.onUpdate.call(a, a.percentScratched);
            a.options.percentComplete <= a.percentScratched && (a.options.revealOnComplete && (a.ctx.rect(0, 0, a.dummyctx.canvas.width, a.dummyctx.canvas.height), a.ctx.clip(), a.ctx.drawImage(a.srcImg, 0, 0)), "function" ===
            typeof a.options.onScratchComplete && a.options.onScratchComplete.call(a, a.percentScratched), a.percentScratched = 100, a.theCanvas.unbind("mousedown", c.proxy(a.addDownHandler, a)), a.theCanvas.unbind("mouseup", c.proxy(a.addUpHandler, a)), a.theCanvas.unbind("mousemove"), a.theCanvas.unbind("touchmove", c.proxy(a.touchmoveHandler, a)))
        }
    };
    c.fn.rabidScratchCard = function (a) {
        return this.each(function () {
            Object.create(f).init(a, this)
        })
    };
    c.fn.rabidScratchCard.options = {
        foreGroundImage: null,
        backgGroundImage: null,
        revealRadius: 30,
        percentComplete: 100,
        revealOnComplete: !0,
        updateOnMouseMove: !0,
        updateOnFingerMove: !1,
        onUpdate: null,
        onScratchComplete: null
    }
})(jQuery, window, document);
(window._gsQueue || (window._gsQueue = [])).push(function () {
    window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (c, b, a) {
        var d = [].slice, e = function (d, b, c) {
            a.call(this, d, b, c);
            this._cycle = 0;
            this._yoyo = !0 === this.vars.yoyo;
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._dirty = !0;
            this.render = e.prototype.render
        }, f = a._internals.isSelector, h = a._internals.isArray, k = e.prototype = a.to({}, .1, {}), m = [];
        e.version = "1.11.2";
        k.constructor = e;
        k.kill()._gc =
            !1;
        e.killTweensOf = e.killDelayedCallsTo = a.killTweensOf;
        e.getTweensOf = a.getTweensOf;
        e.ticker = a.ticker;
        k.invalidate = function () {
            return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this)
        };
        k.updateTo = function (d, e) {
            var b, c = this.ratio;
            e && this.timeline && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this,
                this._startTime - this._delay));
            for (b in d) this.vars[b] = d[b];
            if (this._initted) if (e) this._initted = !1; else if (this._notifyPluginsOfEnabled && this._firstPT && a._onPluginEvent("_onDisable", this), .998 < this._time / this._duration) b = this._time, this.render(0, !0, !1), this._initted = !1, this.render(b, !0, !1); else if (0 < this._time) {
                this._initted = !1;
                this._init();
                for (var c = 1 / (1 - c), f = this._firstPT; f;) b = f.s + f.c, f.c *= c, f.s = b - f.c, f = f._next
            }
            return this
        };
        k.render = function (a, d, e) {
            this._initted || 0 === this._duration && this.vars.repeat &&
            this.invalidate();
            var b, c, f, h, k, u, q, g = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time,
                H = this._totalTime, K = this._cycle, Q = this._duration;
            if (a >= g ? (this._totalTime = g, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = Q, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (b = !0, c = "onComplete"), 0 === Q && (q = this._rawPrevTime, (0 === a || 0 > q || 1E-10 === q) && q !== a && (e = !0, 1E-10 < q && (c = "onReverseComplete")),
                this._rawPrevTime = q = !d || a ? a : 1E-10)) : 1E-7 > a ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== H || 0 === Q && 1E-10 < this._rawPrevTime) && (c = "onReverseComplete", b = this._reversed), 0 > a ? (this._active = !1, 0 === Q && (0 <= this._rawPrevTime && (e = !0), this._rawPrevTime = q = !d || a ? a : 1E-10)) : this._initted || (e = !0)) : (this._totalTime = this._time = a, 0 !== this._repeat && (f = Q + this._repeatDelay, this._cycle = this._totalTime / f >> 0, 0 !== this._cycle && this._cycle === this._totalTime / f && this._cycle--,
                this._time = this._totalTime - this._cycle * f, this._yoyo && 0 !== (1 & this._cycle) && (this._time = Q - this._time), this._time > Q ? this._time = Q : 0 > this._time && (this._time = 0)), this._easeType ? (h = this._time / Q, k = this._easeType, u = this._easePower, (1 === k || 3 === k && .5 <= h) && (h = 1 - h), 3 === k && (h *= 2), 1 === u ? h *= h : 2 === u ? h *= h * h : 3 === u ? h *= h * h * h : 4 === u && (h *= h * h * h * h), this.ratio = 1 === k ? 1 - h : 2 === k ? h : .5 > this._time / Q ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / Q)), p === this._time && !e && K === this._cycle) return H !== this._totalTime && this._onUpdate &&
            (d || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || m)), void 0;
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;
                this._time && !b ? this.ratio = this._ease.getRatio(this._time / Q) : b && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            this._active || !this._paused && this._time !== p && 0 <= a && (this._active = !0);
            0 !== H || (this._startAt && (0 <= a ? this._startAt.render(a, d, e) : c || (c = "_dummyGS")), !this.vars.onStart || 0 === this._totalTime && 0 !== Q || !d && this.vars.onStart.apply(this.vars.onStartScope ||
                this, this.vars.onStartParams || m));
            for (f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
            this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, d, e), d || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || m));
            this._cycle !== K && (d || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || m));
            c && (this._gc || (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a,
                d, e), b && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !d && this.vars[c] && this.vars[c].apply(this.vars[c + "Scope"] || this, this.vars[c + "Params"] || m), 0 === Q && 1E-10 === this._rawPrevTime && 1E-10 !== q && (this._rawPrevTime = 0)))
        };
        e.to = function (a, d, b) {
            return new e(a, d, b)
        };
        e.from = function (a, d, b) {
            return b.runBackwards = !0, b.immediateRender = 0 != b.immediateRender, new e(a, d, b)
        };
        e.fromTo = function (a, d, b, c) {
            return c.startAt = b, c.immediateRender = 0 != c.immediateRender && 0 != b.immediateRender, new e(a, d,
                c)
        };
        e.staggerTo = e.allTo = function (b, c, k, t, u, q, p) {
            t = t || 0;
            var T, O, G, g, M = k.delay || 0, H = [], K = function () {
                k.onComplete && k.onComplete.apply(k.onCompleteScope || this, arguments);
                u.apply(p || this, q || m)
            };
            h(b) || ("string" == typeof b && (b = a.selector(b) || b), f(b) && (b = d.call(b, 0)));
            T = b.length;
            for (G = 0; T > G; G++) {
                O = {};
                for (g in k) O[g] = k[g];
                O.delay = M;
                G === T - 1 && u && (O.onComplete = K);
                H[G] = new e(b[G], c, O);
                M += t
            }
            return H
        };
        e.staggerFrom = e.allFrom = function (a, d, b, c, f, h, k) {
            return b.runBackwards = !0, b.immediateRender = 0 != b.immediateRender,
                e.staggerTo(a, d, b, c, f, h, k)
        };
        e.staggerFromTo = e.allFromTo = function (a, d, b, c, f, h, k, m) {
            return c.startAt = b, c.immediateRender = 0 != c.immediateRender && 0 != b.immediateRender, e.staggerTo(a, d, c, f, h, k, m)
        };
        e.delayedCall = function (a, d, b, c, f) {
            return new e(d, 0, {
                delay: a,
                onComplete: d,
                onCompleteParams: b,
                onCompleteScope: c,
                onReverseComplete: d,
                onReverseCompleteParams: b,
                onReverseCompleteScope: c,
                immediateRender: !1,
                useFrames: f,
                overwrite: 0
            })
        };
        e.set = function (a, d) {
            return new e(a, 0, d)
        };
        e.isTweening = function (d) {
            return 0 < a.getTweensOf(d,
                !0).length
        };
        var p = function (d, e) {
            for (var b = [], c = 0, f = d._first; f;) f instanceof a ? b[c++] = f : (e && (b[c++] = f), b = b.concat(p(f, e)), c = b.length), f = f._next;
            return b
        }, q = e.getAllTweens = function (a) {
            return p(c._rootTimeline, a).concat(p(c._rootFramesTimeline, a))
        };
        e.killAll = function (a, d, e, c) {
            null == d && (d = !0);
            null == e && (e = !0);
            var f, h, k = q(0 != c), m = k.length, u = d && e && c;
            for (h = 0; m > h; h++) c = k[h], (u || c instanceof b || (f = c.target === c.vars.onComplete) && e || d && !f) && (a ? c.totalTime(c.totalDuration()) : c._enabled(!1, !1))
        };
        e.killChildTweensOf =
            function (b, c) {
                if (null != b) {
                    var k, m, u, q = a._tweenLookup;
                    if ("string" == typeof b && (b = a.selector(b) || b), f(b) && (b = d(b, 0)), h(b)) for (m = b.length; -1 < --m;) e.killChildTweensOf(b[m], c); else {
                        k = [];
                        for (u in q) for (m = q[u].target.parentNode; m;) m === b && (k = k.concat(q[u].tweens)), m = m.parentNode;
                        u = k.length;
                        for (m = 0; u > m; m++) c && k[m].totalTime(k[m].totalDuration()), k[m]._enabled(!1, !1)
                    }
                }
            };
        var u = function (a, d, e, c) {
            d = !1 !== d;
            e = !1 !== e;
            c = !1 !== c;
            for (var f, h = q(c), k = d && e && c, m = h.length; -1 < --m;) c = h[m], (k || c instanceof b || (f = c.target === c.vars.onComplete) &&
                e || d && !f) && c.paused(a)
        };
        return e.pauseAll = function (a, d, e) {
            u(!0, a, d, e)
        }, e.resumeAll = function (a, d, e) {
            u(!1, a, d, e)
        }, e.globalTimeScale = function (d) {
            var e = c._rootTimeline, b = a.ticker.time;
            return arguments.length ? (d = d || 1E-10, e._startTime = b - (b - e._startTime) * e._timeScale / d, e = c._rootFramesTimeline, b = a.ticker.frame, e._startTime = b - (b - e._startTime) * e._timeScale / d, e._timeScale = c._rootTimeline._timeScale = d, d) : e._timeScale
        }, k.progress = function (a) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo &&
            0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, k.totalProgress = function (a) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration()
        }, k.time = function (a, d) {
            return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration +
                this._repeatDelay)), this.totalTime(a, d)) : this._time
        }, k.duration = function (a) {
            return arguments.length ? c.prototype.duration.call(this, a) : this._duration
        }, k.totalDuration = function (a) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, k.repeat = function (a) {
            return arguments.length ?
                (this._repeat = a, this._uncache(!0)) : this._repeat
        }, k.repeatDelay = function (a) {
            return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
        }, k.yoyo = function (a) {
            return arguments.length ? (this._yoyo = a, this) : this._yoyo
        }, e
    }, !0);
    window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (c, b, a) {
        var d = function (a) {
            b.call(this, a);
            this._labels = {};
            this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren;
            this.smoothChildTiming = !0 === this.vars.smoothChildTiming;
            this._sortChildren = !0;
            this._onUpdate = this.vars.onUpdate;
            var d, e = this.vars;
            for (d in e) a = e[d], f(a) && -1 !== a.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(a));
            f(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger)
        }, e = a._internals.isSelector, f = a._internals.isArray, h = [], k = function (a) {
            var d, e = {};
            for (d in a) e[d] = a[d];
            return e
        }, m = function (a, d, e, b) {
            a._timeline.pause(a._startTime);
            d && d.apply(b || a._timeline, e || h)
        }, p = h.slice, q = d.prototype = new b;
        return d.version = "1.11.0", q.constructor = d, q.kill()._gc = !1,
            q.to = function (d, e, b, c) {
                return e ? this.add(new a(d, e, b), c) : this.set(d, b, c)
            }, q.from = function (d, e, b, c) {
            return this.add(a.from(d, e, b), c)
        }, q.fromTo = function (d, e, b, c, f) {
            return e ? this.add(a.fromTo(d, e, b, c), f) : this.set(d, c, f)
        }, q.staggerTo = function (b, c, f, h, m, q, C, I) {
            C = new d({onComplete: q, onCompleteParams: C, onCompleteScope: I});
            "string" == typeof b && (b = a.selector(b) || b);
            e(b) && (b = p.call(b, 0));
            h = h || 0;
            for (q = 0; b.length > q; q++) f.startAt && (f.startAt = k(f.startAt)), C.to(b[q], c, k(f), q * h);
            return this.add(C, m)
        }, q.staggerFrom =
            function (a, d, e, b, c, f, h, k) {
                return e.immediateRender = 0 != e.immediateRender, e.runBackwards = !0, this.staggerTo(a, d, e, b, c, f, h, k)
            }, q.staggerFromTo = function (a, d, e, b, c, f, h, k, m) {
            return b.startAt = e, b.immediateRender = 0 != b.immediateRender && 0 != e.immediateRender, this.staggerTo(a, d, b, c, f, h, k, m)
        }, q.call = function (d, e, b, c) {
            return this.add(a.delayedCall(0, d, e, b), c)
        }, q.set = function (d, e, b) {
            return b = this._parseTimeOrLabel(b, 0, !0), null == e.immediateRender && (e.immediateRender = b === this._time && !this._paused), this.add(new a(d,
                0, e), b)
        }, d.exportRoot = function (e, b) {
            e = e || {};
            null == e.smoothChildTiming && (e.smoothChildTiming = !0);
            var c, f, h = new d(e), k = h._timeline;
            null == b && (b = !0);
            k._remove(h, !0);
            h._startTime = 0;
            h._rawPrevTime = h._time = h._totalTime = k._time;
            for (c = k._first; c;) f = c._next, b && c instanceof a && c.target === c.vars.onComplete || h.add(c, c._startTime - c._delay), c = f;
            return k.add(h, 0), h
        }, q.add = function (e, h, k, m) {
            var t, q, p;
            if ("number" != typeof h && (h = this._parseTimeOrLabel(h, 0, !0, e)), !(e instanceof c)) {
                if (e instanceof Array || e && e.push && f(e)) {
                    k =
                        k || "normal";
                    m = m || 0;
                    t = e.length;
                    for (q = 0; t > q; q++) f(p = e[q]) && (p = new d({tweens: p})), this.add(p, h), "string" != typeof p && "function" != typeof p && ("sequence" === k ? h = p._startTime + p.totalDuration() / p._timeScale : "start" === k && (p._startTime -= p.delay())), h += m;
                    return this._uncache(!0)
                }
                if ("string" == typeof e) return this.addLabel(e, h);
                if ("function" != typeof e) throw"Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                e = a.delayedCall(0, e)
            }
            if (b.prototype.add.call(this, e, h), this._gc && !this._paused &&
            this._duration < this.duration()) for (k = this, e = k.rawTime() > e._startTime; k._gc && k._timeline;) k._timeline.smoothChildTiming && e ? k.totalTime(k._totalTime, !0) : k._enabled(!0, !1), k = k._timeline;
            return this
        }, q.remove = function (a) {
            if (a instanceof c) return this._remove(a, !1);
            if (a instanceof Array || a && a.push && f(a)) {
                for (var d = a.length; -1 < --d;) this.remove(a[d]);
                return this
            }
            return "string" == typeof a ? this.removeLabel(a) : this.kill(null, a)
        }, q._remove = function (a, d) {
            b.prototype._remove.call(this, a, d);
            var e = this._last;
            return e ?
                this._time > e._startTime + e._totalDuration / e._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = 0, this
        }, q.append = function (a, d) {
            return this.add(a, this._parseTimeOrLabel(null, d, !0, a))
        }, q.insert = q.insertMultiple = function (a, d, e, b) {
            return this.add(a, d || 0, e, b)
        }, q.appendMultiple = function (a, d, e, b) {
            return this.add(a, this._parseTimeOrLabel(null, d, !0, a), e, b)
        }, q.addLabel = function (a, d) {
            return this._labels[a] = this._parseTimeOrLabel(d), this
        }, q.addPause = function (a,
                                  d, e, b) {
            return this.call(m, ["{self}", d, e, b], this, a)
        }, q.removeLabel = function (a) {
            return delete this._labels[a], this
        }, q.getLabelTime = function (a) {
            return null != this._labels[a] ? this._labels[a] : -1
        }, q._parseTimeOrLabel = function (a, d, e, b) {
            var h;
            if (b instanceof c && b.timeline === this) this.remove(b); else if (b && (b instanceof Array || b.push && f(b))) for (h = b.length; -1 < --h;) b[h] instanceof c && b[h].timeline === this && this.remove(b[h]);
            if ("string" == typeof d) return this._parseTimeOrLabel(d, e && "number" == typeof a && null == this._labels[d] ?
                a - this.duration() : 0, e);
            if (d = d || 0, "string" != typeof a || !isNaN(a) && null == this._labels[a]) null == a && (a = this.duration()); else {
                if (h = a.indexOf("="), -1 === h) return null == this._labels[a] ? e ? this._labels[a] = this.duration() + d : d : this._labels[a] + d;
                d = parseInt(a.charAt(h - 1) + "1", 10) * Number(a.substr(h + 1));
                a = 1 < h ? this._parseTimeOrLabel(a.substr(0, h - 1), 0, e) : this.duration()
            }
            return Number(a) + d
        }, q.seek = function (a, d) {
            return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), !1 !== d)
        }, q.stop = function () {
            return this.paused(!0)
        },
            q.gotoAndPlay = function (a, d) {
                return this.play(a, d)
            }, q.gotoAndStop = function (a, d) {
            return this.pause(a, d)
        }, q.render = function (a, d, e) {
            this._gc && this._enabled(!0, !1);
            var b, c, f, k, m = this._dirty ? this.totalDuration() : this._totalDuration, q = this._time,
                p = this._startTime, G = this._timeScale, g = this._paused;
            if (a >= m ? (this._totalTime = this._time = m, this._reversed || this._hasPausedChild() || (c = !0, k = "onComplete", 0 === this._duration && (0 === a || 0 > this._rawPrevTime || 1E-10 === this._rawPrevTime) && this._rawPrevTime !== a && this._first &&
            (b = !0, 1E-10 < this._rawPrevTime && (k = "onReverseComplete"))), this._rawPrevTime = this._duration || !d || a ? a : 1E-10, a = m + 1E-6) : 1E-7 > a ? (this._totalTime = this._time = 0, (0 !== q || 0 === this._duration && (1E-10 < this._rawPrevTime || 0 > a && 0 <= this._rawPrevTime)) && (k = "onReverseComplete", c = this._reversed), 0 > a ? (this._active = !1, 0 === this._duration && 0 <= this._rawPrevTime && this._first && (b = !0), this._rawPrevTime = a) : (this._rawPrevTime = this._duration || !d || a ? a : 1E-10, a = 0, this._initted || (b = !0))) : this._totalTime = this._time = this._rawPrevTime =
                a, this._time !== q && this._first || e || b) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== q && 0 < a && (this._active = !0), 0 === q && this.vars.onStart && 0 !== this._time && (d || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || h)), this._time >= q) for (b = this._first; b && (f = b._next, !this._paused || g);) (b._active || b._startTime <= this._time && !b._paused && !b._gc) && (b._reversed ? b.render((b._dirty ? b.totalDuration() : b._totalDuration) - (a - b._startTime) * b._timeScale, d, e) : b.render((a -
                    b._startTime) * b._timeScale, d, e)), b = f; else for (b = this._last; b && (f = b._prev, !this._paused || g);) (b._active || q >= b._startTime && !b._paused && !b._gc) && (b._reversed ? b.render((b._dirty ? b.totalDuration() : b._totalDuration) - (a - b._startTime) * b._timeScale, d, e) : b.render((a - b._startTime) * b._timeScale, d, e)), b = f;
                this._onUpdate && (d || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h));
                k && (this._gc || (p === this._startTime || G !== this._timeScale) && (0 === this._time || m >= this.totalDuration()) && (c && (this._timeline.autoRemoveChildren &&
                this._enabled(!1, !1), this._active = !1), !d && this.vars[k] && this.vars[k].apply(this.vars[k + "Scope"] || this, this.vars[k + "Params"] || h)))
            }
        }, q._hasPausedChild = function () {
            for (var a = this._first; a;) {
                if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
                a = a._next
            }
            return !1
        }, q.getChildren = function (d, e, b, c) {
            c = c || -9999999999;
            for (var f = [], h = this._first, k = 0; h;) c > h._startTime || (h instanceof a ? !1 !== e && (f[k++] = h) : (!1 !== b && (f[k++] = h), !1 !== d && (f = f.concat(h.getChildren(!0, e, b)), k = f.length))), h = h._next;
            return f
        }, q.getTweensOf =
            function (d, e) {
                for (var b = a.getTweensOf(d), c = b.length, f = [], h = 0; -1 < --c;) (b[c].timeline === this || e && this._contains(b[c])) && (f[h++] = b[c]);
                return f
            }, q._contains = function (a) {
            for (a = a.timeline; a;) {
                if (a === this) return !0;
                a = a.timeline
            }
            return !1
        }, q.shiftChildren = function (a, d, e) {
            e = e || 0;
            for (var b, c = this._first, f = this._labels; c;) c._startTime >= e && (c._startTime += a), c = c._next;
            if (d) for (b in f) f[b] >= e && (f[b] += a);
            return this._uncache(!0)
        }, q._kill = function (a, d) {
            if (!a && !d) return this._enabled(!1, !1);
            for (var e = d ? this.getTweensOf(d) :
                this.getChildren(!0, !0, !1), b = e.length, c = !1; -1 < --b;) e[b]._kill(a, d) && (c = !0);
            return c
        }, q.clear = function (a) {
            var d = this.getChildren(!1, !0, !0), e = d.length;
            for (this._time = this._totalTime = 0; -1 < --e;) d[e]._enabled(!1, !1);
            return !1 !== a && (this._labels = {}), this._uncache(!0)
        }, q.invalidate = function () {
            for (var a = this._first; a;) a.invalidate(), a = a._next;
            return this
        }, q._enabled = function (a, d) {
            if (a === this._gc) for (var e = this._first; e;) e._enabled(a, !0), e = e._next;
            return b.prototype._enabled.call(this, a, d)
        }, q.duration = function (a) {
            return arguments.length ?
                (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration)
        }, q.totalDuration = function (a) {
            if (!arguments.length) {
                if (this._dirty) {
                    var d, e, b = 0;
                    e = this._last;
                    for (var c = 999999999999; e;) d = e._prev, e._dirty && e.totalDuration(), e._startTime > c && this._sortChildren && !e._paused ? this.add(e, e._startTime - e._delay) : c = e._startTime, 0 > e._startTime && !e._paused && (b -= e._startTime, this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale), this.shiftChildren(-e._startTime,
                        !1, -9999999999), c = 0), e = e._startTime + e._totalDuration / e._timeScale, e > b && (b = e), e = d;
                    this._duration = this._totalDuration = b;
                    this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== a && this.timeScale(this._totalDuration / a), this
        }, q.usesFrames = function () {
            for (var a = this._timeline; a._timeline;) a = a._timeline;
            return a === c._rootFramesTimeline
        }, q.rawTime = function () {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, d
    }, !0);
    window._gsDefine("TimelineMax",
        ["TimelineLite", "TweenLite", "easing.Ease"], function (c, b, a) {
            var d = function (a) {
                c.call(this, a);
                this._repeat = this.vars.repeat || 0;
                this._repeatDelay = this.vars.repeatDelay || 0;
                this._cycle = 0;
                this._yoyo = !0 === this.vars.yoyo;
                this._dirty = !0
            }, e = [], f = new a(null, null, 1, 0);
            a = d.prototype = new c;
            return a.constructor = d, a.kill()._gc = !1, d.version = "1.11.0", a.invalidate = function () {
                return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), c.prototype.invalidate.call(this)
            },
                a.addCallback = function (a, d, e, c) {
                    return this.add(b.delayedCall(0, a, e, c), d)
                }, a.removeCallback = function (a, d) {
                if (a) if (null == d) this._kill(null, a); else for (var e = this.getTweensOf(a, !1), b = e.length, c = this._parseTimeOrLabel(d); -1 < --b;) e[b]._startTime === c && e[b]._enabled(!1, !1);
                return this
            }, a.tweenTo = function (a, d) {
                d = d || {};
                var c, p, q = {ease: f, overwrite: 2, useFrames: this.usesFrames(), immediateRender: !1};
                for (c in d) q[c] = d[c];
                return q.time = this._parseTimeOrLabel(a), p = new b(this, Math.abs(Number(q.time) - this._time) /
                    this._timeScale || .001, q), q.onStart = function () {
                    p.target.paused(!0);
                    p.vars.time !== p.target.time() && p.duration(Math.abs(p.vars.time - p.target.time()) / p.target._timeScale);
                    d.onStart && d.onStart.apply(d.onStartScope || p, d.onStartParams || e)
                }, p
            }, a.tweenFromTo = function (a, d, e) {
                e = e || {};
                a = this._parseTimeOrLabel(a);
                e.startAt = {onComplete: this.seek, onCompleteParams: [a], onCompleteScope: this};
                e.immediateRender = !1 !== e.immediateRender;
                d = this.tweenTo(d, e);
                return d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001)
            },
                a.render = function (a, d, b) {
                    this._gc && this._enabled(!0, !1);
                    var c, f, u, v, z, y = this._dirty ? this.totalDuration() : this._totalDuration, t = this._duration,
                        B = this._time, C = this._totalTime, I = this._startTime, T = this._timeScale,
                        O = this._rawPrevTime, G = this._paused, g = this._cycle;
                    if (a >= y ? (this._locked || (this._totalTime = y, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (f = !0, v = "onComplete", 0 === this._duration && (0 === a || 0 > O || 1E-10 === O) && O !== a && this._first && (c = !0, 1E-10 < O && (v = "onReverseComplete"))), this._rawPrevTime =
                        this._duration || !d || a ? a : 1E-10, this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = t, a = t + 1E-6)) : 1E-7 > a ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== B || 0 === t && (1E-10 < O || 0 > a && 0 <= O) && !this._locked) && (v = "onReverseComplete", f = this._reversed), 0 > a ? (this._active = !1, 0 === t && 0 <= O && this._first && (c = !0), this._rawPrevTime = a) : (this._rawPrevTime = t || !d || a ? a : 1E-10, a = 0, this._initted || (c = !0))) : (0 === t && 0 > O && (c = !0), this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat &&
                    (z = t + this._repeatDelay, this._cycle = this._totalTime / z >> 0, 0 !== this._cycle && this._cycle === this._totalTime / z && this._cycle--, this._time = this._totalTime - this._cycle * z, this._yoyo && 0 !== (1 & this._cycle) && (this._time = t - this._time), this._time > t ? (this._time = t, a = t + 1E-6) : 0 > this._time ? this._time = a = 0 : a = this._time))), this._cycle !== g && !this._locked) {
                        z = this._yoyo && 0 !== (1 & g);
                        var M = z === (this._yoyo && 0 !== (1 & this._cycle)), H = this._totalTime, K = this._cycle,
                            Q = this._rawPrevTime, L = this._time;
                        if (this._totalTime = g * t, g > this._cycle ?
                            z = !z : this._totalTime += t, this._time = B, this._rawPrevTime = 0 === t ? O - 1E-5 : O, this._cycle = g, this._locked = !0, B = z ? 0 : t, this.render(B, d, 0 === t), d || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || e), M && (B = z ? t + 1E-6 : -1E-6, this.render(B, !0, !1)), this._locked = !1, this._paused && !G) return;
                        this._time = L;
                        this._totalTime = H;
                        this._cycle = K;
                        this._rawPrevTime = Q
                    }
                    if (!(this._time !== B && this._first || b || c)) return C !== this._totalTime && this._onUpdate && (d || this._onUpdate.apply(this.vars.onUpdateScope ||
                        this, this.vars.onUpdateParams || e)), void 0;
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== C && 0 < a && (this._active = !0), 0 === C && this.vars.onStart && 0 !== this._totalTime && (d || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || e)), this._time >= B) for (c = this._first; c && (u = c._next, !this._paused || G);) (c._active || c._startTime <= this._time && !c._paused && !c._gc) && (c._reversed ? c.render((c._dirty ? c.totalDuration() : c._totalDuration) - (a - c._startTime) * c._timeScale,
                        d, b) : c.render((a - c._startTime) * c._timeScale, d, b)), c = u; else for (c = this._last; c && (u = c._prev, !this._paused || G);) (c._active || B >= c._startTime && !c._paused && !c._gc) && (c._reversed ? c.render((c._dirty ? c.totalDuration() : c._totalDuration) - (a - c._startTime) * c._timeScale, d, b) : c.render((a - c._startTime) * c._timeScale, d, b)), c = u;
                    this._onUpdate && (d || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || e));
                    v && (this._locked || this._gc || (I === this._startTime || T !== this._timeScale) && (0 === this._time ||
                        y >= this.totalDuration()) && (f && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !d && this.vars[v] && this.vars[v].apply(this.vars[v + "Scope"] || this, this.vars[v + "Params"] || e)))
                }, a.getActive = function (a, d, e) {
                null == a && (a = !0);
                null == d && (d = !0);
                null == e && (e = !1);
                var b = [];
                e = this.getChildren(a, d, e);
                var c = 0, f = e.length;
                for (a = 0; f > a; a++) d = e[a], d.isActive() && (b[c++] = d);
                return b
            }, a.getLabelAfter = function (a) {
                a || 0 !== a && (a = this._time);
                var d, e = this.getLabelsArray(), b = e.length;
                for (d = 0; b > d; d++) if (e[d].time >
                    a) return e[d].name;
                return null
            }, a.getLabelBefore = function (a) {
                null == a && (a = this._time);
                for (var d = this.getLabelsArray(), e = d.length; -1 < --e;) if (a > d[e].time) return d[e].name;
                return null
            }, a.getLabelsArray = function () {
                var a, d = [], e = 0;
                for (a in this._labels) d[e++] = {time: this._labels[a], name: a};
                return d.sort(function (a, d) {
                    return a.time - d.time
                }), d
            }, a.progress = function (a) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay),
                    !1) : this._time / this.duration()
            }, a.totalProgress = function (a) {
                return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration()
            }, a.totalDuration = function (a) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (c.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, a.time =
                function (a, d) {
                    return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, d)) : this._time
                }, a.repeat = function (a) {
                return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
            }, a.repeatDelay = function (a) {
                return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
            },
                a.yoyo = function (a) {
                    return arguments.length ? (this._yoyo = a, this) : this._yoyo
                }, a.currentLabel = function (a) {
                return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1E-8)
            }, d
        }, !0);
    (function () {
        var c = 180 / Math.PI, b = [], a = [], d = [], e = {}, f = function (a, d, e, b) {
            this.a = a;
            this.b = d;
            this.c = e;
            this.d = b;
            this.da = b - a;
            this.ca = e - a;
            this.ba = d - a
        }, h = function (a, d, e, b) {
            var c = {a: a}, f = {}, h = {}, k = {c: b}, m = (a + d) / 2, p = (d + e) / 2;
            e = (e + b) / 2;
            d = (m + p) / 2;
            var p = (p + e) / 2, O = (p - d) / 8;
            return c.b = m + (a - m) / 4, f.b = d + O, c.c = f.a = (c.b + f.b) / 2, f.c = h.a =
                (d + p) / 2, h.b = p - O, k.b = e + (b - e) / 4, h.c = k.a = (h.b + k.b) / 2, [c, f, h, k]
        }, k = function (c, k, m, p, y, t) {
            var B, C, I, T, O = {}, G = [], g = t || c[0];
            y = "string" == typeof y ? "," + y + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,";
            null == k && (k = 1);
            for (C in c[0]) G.push(C);
            if (1 < c.length) {
                I = c[c.length - 1];
                T = !0;
                for (B = G.length; -1 < --B;) if (C = G[B], .05 < Math.abs(g[C] - I[C])) {
                    T = !1;
                    break
                }
                T && (c = c.concat(), t && c.unshift(t), c.push(c[1]),
                    t = c[c.length - 3])
            }
            b.length = a.length = d.length = 0;
            for (B = G.length; -1 < --B;) {
                C = G[B];
                e[C] = -1 !== y.indexOf("," + C + ",");
                I = C;
                var g = c, M = C, H = e[C], K = t, Q = void 0, L = void 0, D = void 0, U = void 0, W = void 0,
                    D = void 0, E = [];
                if (K) for (g = [K].concat(g), L = g.length; -1 < --L;) "string" == typeof(D = g[L][M]) && "=" === D.charAt(1) && (g[L][M] = K[M] + Number(D.charAt(0) + D.substr(2)));
                if (Q = g.length - 2, 0 > Q) g = (E[0] = new f(g[0][M], 0, 0, g[-1 > Q ? 0 : 1][M]), E); else {
                    for (L = 0; Q > L; L++) D = g[L][M], U = g[L + 1][M], E[L] = new f(D, 0, 0, U), H && (W = g[L + 2][M], b[L] = (b[L] || 0) + (U - D) * (U -
                        D), a[L] = (a[L] || 0) + (W - U) * (W - U));
                    g = (E[L] = new f(g[L][M], 0, 0, g[L + 1][M]), E)
                }
                O[I] = g
            }
            for (B = b.length; -1 < --B;) b[B] = Math.sqrt(b[B]), a[B] = Math.sqrt(a[B]);
            if (!p) {
                for (B = G.length; -1 < --B;) if (e[C]) for (c = O[G[B]], I = c.length - 1, y = 0; I > y; y++) t = c[y + 1].da / a[y] + c[y].da / b[y], d[y] = (d[y] || 0) + t * t;
                for (B = d.length; -1 < --B;) d[B] = Math.sqrt(d[B])
            }
            B = G.length;
            for (y = m ? 4 : 1; -1 < --B;) {
                C = G[B];
                t = c = O[C];
                I = k;
                g = m;
                M = p;
                C = e[C];
                for (var V = Q = K = H = void 0, Z = U = V = D = E = W = L = void 0, fa = void 0, N = void 0, ha = t.length - 1, ia = 0, ca = t[0].a, H = 0; ha > H; H++) L = t[ia], K = L.a, Q =
                    L.d, V = t[ia + 1].d, C ? (Z = b[H], fa = a[H], N = .25 * (fa + Z) * I / (M ? .5 : d[H] || .5), W = Q - (Q - K) * (M ? .5 * I : 0 !== Z ? N / Z : 0), E = Q + (V - Q) * (M ? .5 * I : 0 !== fa ? N / fa : 0), D = Q - (W + ((E - W) * (3 * Z / (Z + fa) + .5) / 4 || 0))) : (W = Q - .5 * (Q - K) * I, E = Q + .5 * (V - Q) * I, D = Q - (W + E) / 2), W += D, E += D, L.c = V = W, L.b = 0 !== H ? ca : ca = L.a + .6 * (L.c - L.a), L.da = Q - K, L.ca = V - K, L.ba = ca - K, g ? (U = h(K, ca, V, Q), t.splice(ia, 1, U[0], U[1], U[2], U[3]), ia += 4) : ia++, ca = E;
                L = t[ia];
                L.b = ca;
                L.c = ca + .4 * (L.d - ca);
                L.da = L.d - L.a;
                L.ca = L.c - L.a;
                L.ba = ca - L.a;
                g && (U = h(L.a, ca, L.c, L.d), t.splice(ia, 1, U[0], U[1], U[2], U[3]));
                T && (c.splice(0,
                    y), c.splice(c.length - y, y))
            }
            return O
        }, m = window._gsDefine.plugin({
            propName: "bezier", priority: -1, API: 2, global: !0, init: function (a, d, e) {
                this._target = a;
                d instanceof Array && (d = {values: d});
                this._func = {};
                this._round = {};
                this._props = [];
                this._timeRes = null == d.timeResolution ? 6 : parseInt(d.timeResolution, 10);
                var b, c, h, m, p = d.values || [], I = {};
                c = p[0];
                this._autoRotate = (e = d.autoRotate || e.vars.orientToBezier) ? e instanceof Array ? e : [["x", "y", "rotation", !0 === e ? 0 : Number(e) || 0]] : null;
                for (b in c) this._props.push(b);
                for (c = this._props.length; -1 <
                --c;) b = this._props[c], this._overwriteProps.push(b), e = this._func[b] = "function" == typeof a[b], I[b] = e ? a[b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3)]() : parseFloat(a[b]), m || I[b] !== p[0][b] && (m = I);
                if ("cubic" !== d.type && "quadratic" !== d.type && "soft" !== d.type) I = k(p, isNaN(d.curviness) ? 1 : d.curviness, !1, "thruBasic" === d.type, d.correlate, m); else {
                    m = p;
                    c = (c = d.type) || "soft";
                    var T, O, G, g, M, H, K;
                    d = {};
                    var p = "cubic" === c ? 3 : 2, Q = "soft" === c, L = [];
                    if (Q && I && (m = [I].concat(m)), null == m || p + 1 > m.length) throw"invalid Bezier data";
                    for (T in m[0]) L.push(T);
                    for (g = L.length; -1 < --g;) {
                        T = L[g];
                        d[T] = e = [];
                        K = 0;
                        H = m.length;
                        for (M = 0; H > M; M++) c = null == I ? m[M][T] : "string" == typeof(O = m[M][T]) && "=" === O.charAt(1) ? I[T] + Number(O.charAt(0) + O.substr(2)) : Number(O), Q && 1 < M && H - 1 > M && (e[K++] = (c + e[K - 2]) / 2), e[K++] = c;
                        H = K - p + 1;
                        for (M = K = 0; H > M; M += p) c = e[M], T = e[M + 1], O = e[M + 2], G = 2 === p ? 0 : e[M + 3], e[K++] = O = 3 === p ? new f(c, T, O, G) : new f(c, (2 * T + c) / 3, (2 * T + O) / 3, O);
                        e.length = K
                    }
                    I = d
                }
                if (this._beziers = I, this._segCount = this._beziers[b].length, this._timeRes) {
                    e = this._beziers;
                    b = this._timeRes;
                    b = b >> 0 || 6;
                    I = [];
                    T = [];
                    m = O = 0;
                    d = b - 1;
                    p = [];
                    c = [];
                    for (h in e) {
                        g = e[h];
                        M = I;
                        H = b;
                        var D = void 0, U = void 0, W = Q = K = U = void 0, E = D = void 0, V = void 0, V = W = void 0,
                            L = 1 / H;
                        for (G = g.length; -1 < --G;) for (W = g[G], U = W.a, K = W.d - U, Q = W.c - U, W = W.b - U, U = 0, E = 1; H >= E; E++) D = L * E, V = 1 - D, D = U - (U = (D * D * K + 3 * V * (D * Q + V * W)) * D), V = G * H + E - 1, M[V] = (M[V] || 0) + D * D
                    }
                    e = I.length;
                    for (h = 0; e > h; h++) O += Math.sqrt(I[h]), g = h % b, c[g] = O, g === d && (m += O, g = h / b >> 0, p[g] = c, T[g] = m, O = 0, c = []);
                    this._length = m;
                    this._lengths = T;
                    this._segments = p;
                    this._l1 = this._li = this._s1 = this._si = 0;
                    this._l2 = this._lengths[0];
                    this._curSeg = this._segments[0];
                    this._s2 = this._curSeg[0];
                    this._prec = 1 / this._curSeg.length
                }
                if (e = this._autoRotate) for (e[0] instanceof Array || (this._autoRotate = e = [e]), c = e.length; -1 < --c;) for (h = 0; 3 > h; h++) b = e[c][h], this._func[b] = "function" == typeof a[b] ? a[b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3)] : !1;
                return !0
            }, set: function (a) {
                var d, e, b, f, h, k;
                h = this._segCount;
                var m = this._func, p = this._target;
                if (this._timeRes) {
                    if (d = this._lengths, f = this._curSeg, a *= this._length, b = this._li, a >
                    this._l2 && h - 1 > b) {
                        for (--h; h > b && a >= (this._l2 = d[++b]);) ;
                        this._l1 = d[b - 1];
                        this._li = b;
                        this._curSeg = f = this._segments[b];
                        this._s2 = f[this._s1 = this._si = 0]
                    } else if (this._l1 > a && 0 < b) {
                        for (; 0 < b && (this._l1 = d[--b]) >= a;) ;
                        0 === b && this._l1 > a ? this._l1 = 0 : b++;
                        this._l2 = d[b];
                        this._li = b;
                        this._curSeg = f = this._segments[b];
                        this._s1 = f[(this._si = f.length - 1) - 1] || 0;
                        this._s2 = f[this._si]
                    }
                    if (d = b, a -= this._l1, b = this._si, a > this._s2 && f.length - 1 > b) {
                        for (h = f.length - 1; h > b && a >= (this._s2 = f[++b]);) ;
                        this._s1 = f[b - 1];
                        this._si = b
                    } else if (this._s1 > a &&
                        0 < b) {
                        for (; 0 < b && (this._s1 = f[--b]) >= a;) ;
                        0 === b && this._s1 > a ? this._s1 = 0 : b++;
                        this._s2 = f[b];
                        this._si = b
                    }
                    h = (b + (a - this._s1) / (this._s2 - this._s1)) * this._prec
                } else d = 0 > a ? 0 : 1 <= a ? h - 1 : h * a >> 0, h *= a - 1 / h * d;
                e = 1 - h;
                for (b = this._props.length; -1 < --b;) a = this._props[b], f = this._beziers[a][d], k = (h * h * f.da + 3 * e * (h * f.ca + e * f.ba)) * h + f.a, this._round[a] && (k = k + (0 < k ? .5 : -.5) >> 0), m[a] ? p[a](k) : p[a] = k;
                if (this._autoRotate) {
                    var T, O, G, g, M, H, K = this._autoRotate;
                    for (b = K.length; -1 < --b;) a = K[b][2], M = K[b][3] || 0, H = !0 === K[b][4] ? 1 : c, f = this._beziers[K[b][0]],
                        e = this._beziers[K[b][1]], f && e && (f = f[d], e = e[d], T = f.a + (f.b - f.a) * h, G = f.b + (f.c - f.b) * h, T += (G - T) * h, G += (f.c + (f.d - f.c) * h - G) * h, O = e.a + (e.b - e.a) * h, g = e.b + (e.c - e.b) * h, O += (g - O) * h, g += (e.c + (e.d - e.c) * h - g) * h, k = Math.atan2(g - O, G - T) * H + M, m[a] ? p[a](k) : p[a] = k)
                }
            }
        }), p = m.prototype;
        m.bezierThrough = k;
        m.cubicToQuadratic = h;
        m._autoCSS = !0;
        m.quadraticToCubic = function (a, d, e) {
            return new f(a, (2 * d + a) / 3, (2 * d + e) / 3, e)
        };
        m._cssRegister = function () {
            var a = window._gsDefine.globals.CSSPlugin;
            if (a) {
                var a = a._internals, d = a._parseToProxy, e = a._setPluginRatio,
                    b = a.CSSPropTween;
                a._registerComplexSpecialProp("bezier", {
                    parser: function (a, c, f, h, k, p) {
                        c instanceof Array && (c = {values: c});
                        p = new m;
                        var q, G, g = c.values, M = g.length - 1, H = [], K = {};
                        if (0 > M) return k;
                        for (f = 0; M >= f; f++) G = d(a, g[f], h, k, p, M !== f), H[f] = G.end;
                        for (q in c) K[q] = c[q];
                        return K.values = H, k = new b(a, "bezier", 0, 0, G.pt, 2), k.data = G, k.plugin = p, k.setRatio = e, 0 === K.autoRotate && (K.autoRotate = !0), !K.autoRotate || K.autoRotate instanceof Array || (f = !0 === K.autoRotate ? 0 : Number(K.autoRotate), K.autoRotate = null != G.end.left ? [["left",
                            "top", "rotation", f, !1]] : null != G.end.x ? [["x", "y", "rotation", f, !1]] : !1), K.autoRotate && (h._transform || h._enableTransforms(!1), G.autoRotate = h._target._gsTransform), p._onInitTween(G.proxy, K, h._tween), k
                    }
                })
            }
        };
        p._roundProps = function (a, d) {
            for (var e = this._overwriteProps, b = e.length; -1 < --b;) (a[e[b]] || a.bezier || a.bezierThrough) && (this._round[e[b]] = d)
        };
        p._kill = function (a) {
            var d, e, b = this._props;
            for (d in this._beziers) if (d in a) for (delete this._beziers[d], delete this._func[d], e = b.length; -1 < --e;) b[e] === d && b.splice(e,
                1);
            return this._super._kill.call(this, a)
        }
    })();
    window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (c, b) {
        var a, d, e, f, h = function () {
            c.call(this, "css");
            this._overwriteProps.length = 0;
            this.setRatio = h.prototype.setRatio
        }, k = {}, m = h.prototype = new c("css");
        m.constructor = h;
        h.version = "1.11.2";
        h.API = 2;
        h.defaultTransformPerspective = 0;
        m = "px";
        h.suffixMap = {
            top: m,
            right: m,
            bottom: m,
            left: m,
            width: m,
            height: m,
            fontSize: m,
            padding: m,
            margin: m,
            perspective: m
        };
        var p, q, u, v, z, y, t = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            B = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            C = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, I = /[^\d\-\.]/g, T = /(?:\d|\-|\+|=|#|\.)*/g,
            O = /opacity *= *([^)]*)/, G = /opacity:([^;]*)/, g = /alpha\(opacity *=.+?\)/i, M = /^(rgb|hsl)/,
            H = /([A-Z])/g, K = /-([a-z])/gi, Q = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, L = function (a, d) {
                return d.toUpperCase()
            }, D = /(?:Left|Right|Width)/i, U = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            W = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, E = /,(?=[^\)]*(?:\(|$))/gi, V = Math.PI /
            180, Z = 180 / Math.PI, fa = {}, N = document, ha = N.createElement("div"), ia = N.createElement("img"),
            ca = h._internals = {_specialProps: k}, x = navigator.userAgent, A = function () {
                var a, d = x.indexOf("Android"), e = N.createElement("div");
                return u = -1 !== x.indexOf("Safari") && -1 === x.indexOf("Chrome") && (-1 === d || 3 < Number(x.substr(d + 8, 1))), z = u && 6 > Number(x.substr(x.indexOf("Version/") + 8, 1)), v = -1 !== x.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(x) && (y = parseFloat(RegExp.$1)), e.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>",
                    a = e.getElementsByTagName("a")[0], a ? /^0.55/.test(a.style.opacity) : !1
            }(), w = function (a) {
                return O.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }, X = "", ba = "", R = function (a, d) {
                d = d || ha;
                var e, b, c = d.style;
                if (void 0 !== c[a]) return a;
                a = a.charAt(0).toUpperCase() + a.substr(1);
                e = ["O", "Moz", "ms", "Ms", "Webkit"];
                for (b = 5; -1 < --b && void 0 === c[e[b] + a];) ;
                return 0 <= b ? (ba = 3 === b ? "ms" : e[b], X = "-" + ba.toLowerCase() + "-", ba + a) : null
            }, ga = N.defaultView ? N.defaultView.getComputedStyle :
            function () {
            }, P = h.getStyle = function (a, d, e, b, c) {
                var f;
                return A || "opacity" !== d ? (!b && a.style[d] ? f = a.style[d] : (e = e || ga(a, null)) ? (a = e.getPropertyValue(d.replace(H, "-$1").toLowerCase()), f = a || e.length ? a : e[d]) : a.currentStyle && (f = a.currentStyle[d]), null == c || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : c) : w(a)
            }, ja = function (a, d, e, b, c) {
                if ("px" === b || !b) return e;
                if ("auto" === b || !e) return 0;
                var f, h = D.test(d), g = a, k = ha.style, n = 0 > e;
                return n && (e = -e), "%" === b && -1 !== d.indexOf("border") ? f = e / 100 * (h ? a.clientWidth : a.clientHeight) :
                    (k.cssText = "border:0 solid red;position:" + P(a, "position") + ";line-height:0;", "%" !== b && g.appendChild ? k[h ? "borderLeftWidth" : "borderTopWidth"] = e + b : (g = a.parentNode || N.body, k[h ? "width" : "height"] = e + b), g.appendChild(ha), f = parseFloat(ha[h ? "offsetWidth" : "offsetHeight"]), g.removeChild(ha), 0 !== f || c || (f = ja(a, d, e, b, !0))), n ? -f : f
            }, ma = function (a, d, e) {
                if ("absolute" !== P(a, "position", e)) return 0;
                var b = "left" === d ? "Left" : "Top";
                e = P(a, "margin" + b, e);
                return a["offset" + b] - (ja(a, d, parseFloat(e), e.replace(T, "")) || 0)
            }, Ba = function (a,
                              d) {
                var e, b, c = {};
                if (d = d || ga(a, null)) if (e = d.length) for (; -1 < --e;) c[d[e].replace(K, L)] = d.getPropertyValue(d[e]); else for (e in d) c[e] = d[e]; else if (d = a.currentStyle || a.style) for (e in d) "string" == typeof e && void 0 !== c[e] && (c[e.replace(K, L)] = d[e]);
                return A || (c.opacity = w(a)), b = Aa(a, d, !1), c.rotation = b.rotation, c.skewX = b.skewX, c.scaleX = b.scaleX, c.scaleY = b.scaleY, c.x = b.x, c.y = b.y, ra && (c.z = b.z, c.rotationX = b.rotationX, c.rotationY = b.rotationY, c.scaleZ = b.scaleZ), c.filters && delete c.filters, c
            }, xa = function (a, d, e, b, c) {
                var f,
                    h, g, k = {}, n = a.style;
                for (h in e) "cssText" !== h && "length" !== h && isNaN(h) && (d[h] !== (f = e[h]) || c && c[h]) && -1 === h.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (k[h] = "auto" !== f || "left" !== h && "top" !== h ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof d[h] || "" === d[h].replace(I, "") ? f : 0 : ma(a, h), void 0 !== n[h] && (g = new db(n, h, n[h], g)));
                if (b) for (h in b) "className" !== h && (k[h] = b[h]);
                return {difs: k, firstMPT: g}
            }, F = {width: ["Left", "Right"], height: ["Top", "Bottom"]},
            n = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            Ca = function (a, d) {
                null != a && "" !== a && "auto" !== a && "auto auto" !== a || (a = "0 0");
                var e = a.split(" "), b = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : e[0],
                    c = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : e[1];
                return null == c ? c = "0" : "center" === c && (c = "50%"), ("center" === b || isNaN(parseFloat(b)) && -1 === (b + "").indexOf("=")) && (b = "50%"), d && (d.oxp = -1 !== b.indexOf("%"), d.oyp = -1 !== c.indexOf("%"), d.oxr = "=" === b.charAt(1), d.oyr = "=" === c.charAt(1), d.ox = parseFloat(b.replace(I, "")), d.oy = parseFloat(c.replace(I,
                    ""))), b + " " + c + (2 < e.length ? " " + e[2] : "")
            }, kb = function (a, d) {
                return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(d)
            }, Ea = function (a, d) {
                return null == a ? d : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * Number(a.substr(2)) + d : parseFloat(a)
            }, Oa = function (a, d, e, b) {
                var c, f, h;
                return null == a ? h = d : "number" == typeof a ? h = a : (c = a.split("_"), f = Number(c[0].replace(I, "")) * (-1 === a.indexOf("rad") ? 1 : Z) - ("=" === a.charAt(1) ? 0 : d), c.length &&
                (b && (b[e] = d + f), -1 !== a.indexOf("short") && (f %= 360, f !== f % 180 && (f = 0 > f ? f + 360 : f - 360)), -1 !== a.indexOf("_cw") && 0 > f ? f = (f + 3599999999640) % 360 - 360 * (0 | f / 360) : -1 !== a.indexOf("ccw") && 0 < f && (f = (f - 3599999999640) % 360 - 360 * (0 | f / 360))), h = d + f), 1E-6 > h && -1E-6 < h && (h = 0), h
            }, ya = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128,
                    0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            }, Ta = function (a, d, e) {
                return a = 0 > a ? a + 1 : 1 < a ? a - 1 : a, 0 | 255 * (1 > 6 * a ? d + 6 * (e - d) * a : .5 > a ? e : 2 > 3 * a ? d + 6 * (e - d) * (2 / 3 - a) : d) + .5
            }, Ua = function (a) {
                var d, e, b, c, f, h;
                return a && "" !== a ? "number" == typeof a ? [a >> 16, 255 & a >> 8, 255 & a] : ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), ya[a] ? ya[a] : "#" === a.charAt(0) ? (4 === a.length && (d = a.charAt(1), e = a.charAt(2), b = a.charAt(3), a = "#" + d + d + e + e + b + b), a = parseInt(a.substr(1), 16), [a >> 16, 255 &
                a >> 8, 255 & a]) : "hsl" === a.substr(0, 3) ? (a = a.match(t), c = Number(a[0]) % 360 / 360, f = Number(a[1]) / 100, h = Number(a[2]) / 100, e = .5 >= h ? h * (f + 1) : h + f - h * f, d = 2 * h - e, 3 < a.length && (a[3] = Number(a[3])), a[0] = Ta(c + 1 / 3, d, e), a[1] = Ta(c, d, e), a[2] = Ta(c - 1 / 3, d, e), a) : (a = a.match(t) || ya.transparent, a[0] = Number(a[0]), a[1] = Number(a[1]), a[2] = Number(a[2]), 3 < a.length && (a[3] = Number(a[3])), a)) : ya.black
            }, Da = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (m in ya) Da += "|" + m + "\\b";
        var Da = RegExp(Da + ")", "gi"), Ga = function (a, d, e, b) {
            if (null ==
                a) return function (a) {
                return a
            };
            var c, f = d ? (a.match(Da) || [""])[0] : "", h = a.split(f).join("").match(C) || [],
                g = a.substr(0, a.indexOf(h[0])), k = ")" === a.charAt(a.length - 1) ? ")" : "",
                n = -1 !== a.indexOf(" ") ? " " : ",", m = h.length, w = 0 < m ? h[0].replace(t, "") : "";
            return m ? c = d ? function (a) {
                var d, t, x;
                if ("number" == typeof a) a += w; else if (b && E.test(a)) {
                    a = a.replace(E, "|").split("|");
                    for (x = 0; a.length > x; x++) a[x] = c(a[x]);
                    return a.join(",")
                }
                if (d = (a.match(Da) || [f])[0], t = a.split(d).join("").match(C) || [], x = t.length, m > x--) for (; m > ++x;) t[x] =
                    e ? t[0 | (x - 1) / 2] : h[x];
                return g + t.join(n) + n + d + k + (-1 !== a.indexOf("inset") ? " inset" : "")
            } : function (a) {
                var d, f;
                if ("number" == typeof a) a += w; else if (b && E.test(a)) {
                    a = a.replace(E, "|").split("|");
                    for (f = 0; a.length > f; f++) a[f] = c(a[f]);
                    return a.join(",")
                }
                if (d = a.match(C) || [], f = d.length, m > f--) for (; m > ++f;) d[f] = e ? d[0 | (f - 1) / 2] : h[f];
                return g + d.join(n) + k
            } : function (a) {
                return a
            }
        }, S = function (a) {
            return a = a.split(","), function (d, e, b, c, f, h, g) {
                b = (e + "").split(" ");
                g = {};
                for (e = 0; 4 > e; e++) g[a[e]] = b[e] = b[e] || b[(e - 1) / 2 >> 0];
                return c.parse(d,
                    g, f, h)
            }
        }, db = (ca._setPluginRatio = function (a) {
            this.plugin.setRatio(a);
            for (var d, e, b = this.data, c = b.proxy, f = b.firstMPT; f;) d = c[f.v], f.r ? d = 0 < d ? 0 | d + .5 : 0 | d - .5 : 1E-6 > d && -1E-6 < d && (d = 0), f.t[f.p] = d, f = f._next;
            if (b.autoRotate && (b.autoRotate.rotation = c.rotation), 1 === a) for (f = b.firstMPT; f;) {
                if (e = f.t, e.type) {
                    if (1 === e.type) {
                        d = e.xs0 + e.s + e.xs1;
                        for (a = 1; e.l > a; a++) d += e["xn" + a] + e["xs" + (a + 1)];
                        e.e = d
                    }
                } else e.e = e.s + e.xs0;
                f = f._next
            }
        }, function (a, d, e, b, c) {
            this.t = a;
            this.p = d;
            this.v = e;
            this.r = c;
            b && (b._prev = this, this._next = b)
        }), pa = (ca._parseToProxy =
            function (a, d, e, b, c, f) {
                var h, g, k, n = b, m = {}, w = {};
                g = e._transform;
                var t = fa;
                e._transform = null;
                fa = d;
                b = a = e.parse(a, d, b, c);
                fa = t;
                for (f && (e._transform = g, n && (n._prev = null, n._prev && (n._prev._next = null))); b && b !== n;) {
                    if (1 >= b.type && (h = b.p, w[h] = b.s + b.c, m[h] = b.s, f || (k = new db(b, "s", h, k, b.r), b.c = 0), 1 === b.type)) for (e = b.l; 0 < --e;) g = "xn" + e, h = b.p + "_" + g, w[h] = b.data[g], m[h] = b[g], f || (k = new db(b, g, h, k, b.rxp[g]));
                    b = b._next
                }
                return {proxy: m, end: w, firstMPT: k, pt: a}
            }, ca.CSSPropTween = function (d, e, b, c, h, g, k, n, m, w, t) {
            this.t = d;
            this.p = e;
            this.s = b;
            this.c = c;
            this.n = k || e;
            d instanceof pa || f.push(this.n);
            this.r = n;
            this.type = g || 0;
            m && (this.pr = m, a = !0);
            this.b = void 0 === w ? b : w;
            this.e = void 0 === t ? b + c : t;
            h && (this._next = h, h._prev = this)
        }), Va = h.parseComplex = function (a, d, e, b, c, f, h, g, k, n) {
            e = e || f || "";
            h = new pa(a, d, 0, 0, h, n ? 2 : 1, null, !1, g, e, b);
            b += "";
            var m, w, x, q, R;
            a = e.split(", ").join(",").split(" ");
            d = b.split(", ").join(",").split(" ");
            g = a.length;
            var X = !1 !== p;
            (-1 !== b.indexOf(",") || -1 !== e.indexOf(",")) && (a = a.join(" ").replace(E, ", ").split(" "), d = d.join(" ").replace(E,
                ", ").split(" "), g = a.length);
            g !== d.length && (a = (f || "").split(" "), g = a.length);
            h.plugin = k;
            h.setRatio = n;
            for (e = 0; g > e; e++) if (m = a[e], k = d[e], x = parseFloat(m), x || 0 === x) h.appendXtra("", x, kb(k, x), k.replace(B, ""), X && -1 !== k.indexOf("px"), !0); else if (c && ("#" === m.charAt(0) || ya[m] || M.test(m))) n = "," === k.charAt(k.length - 1) ? ")," : ")", m = Ua(m), k = Ua(k), (f = 6 < m.length + k.length) && !A && 0 === k[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", h.e = h.e.split(d[e]).join("transparent")) : (A || (f = !1), h.appendXtra(f ? "rgba(" : "rgb(", m[0],
                k[0] - m[0], ",", !0, !0).appendXtra("", m[1], k[1] - m[1], ",", !0).appendXtra("", m[2], k[2] - m[2], f ? "," : n, !0), f && (m = 4 > m.length ? 1 : m[3], h.appendXtra("", m, (4 > k.length ? 1 : k[3]) - m, n, !1))); else if (f = m.match(t)) {
                if (w = k.match(B), !w || w.length !== f.length) return h;
                for (k = n = 0; f.length > k; k++) R = f[k], q = m.indexOf(R, n), h.appendXtra(m.substr(n, q - n), Number(R), kb(w[k], R), "", X && "px" === m.substr(q + R.length, 2), 0 === k), n = q + R.length;
                h["xs" + h.l] += m.substr(n)
            } else h["xs" + h.l] += h.l ? " " + m : m;
            if (-1 !== b.indexOf("=") && h.data) {
                n = h.xs0 + h.data.s;
                for (e = 1; h.l > e; e++) n += h["xs" + e] + h.data["xn" + e];
                h.e = n + h["xs" + e]
            }
            return h.l || (h.type = -1, h.xs0 = h.e), h.xfirst || h
        }, na = 9, m = pa.prototype;
        for (m.l = m.pr = 0; 0 < --na;) m["xn" + na] = 0, m["xs" + na] = "";
        m.xs0 = "";
        m._next = m._prev = m.xfirst = m.data = m.plugin = m.setRatio = m.rxp = null;
        m.appendXtra = function (a, d, e, b, c, f) {
            var h = this.l;
            return this["xs" + h] += f && h ? " " + a : a || "", e || 0 === h || this.plugin ? (this.l++, this.type = this.setRatio ? 2 : 1, this["xs" + this.l] = b || "", 0 < h ? (this.data["xn" + h] = d + e, this.rxp["xn" + h] = c, this["xn" + h] = d, this.plugin || (this.xfirst =
                new pa(this, "xn" + h, d, e, this.xfirst || this, 0, this.n, c, this.pr), this.xfirst.xs0 = 0), this) : (this.data = {s: d + e}, this.rxp = {}, this.s = d, this.c = e, this.r = c, this)) : (this["xs" + h] += d + (b || ""), this)
        };
        var ab = function (a, d) {
            d = d || {};
            this.p = d.prefix ? R(a) || a : a;
            k[a] = k[this.p] = this;
            this.format = d.formatter || Ga(d.defaultValue, d.color, d.collapsible, d.multi);
            d.parser && (this.parse = d.parser);
            this.clrs = d.color;
            this.multi = d.multi;
            this.keyword = d.keyword;
            this.dflt = d.defaultValue;
            this.pr = d.priority || 0
        }, ka = ca._registerComplexSpecialProp =
            function (a, d, e) {
                "object" != typeof d && (d = {parser: e});
                var b = a.split(","), c = d.defaultValue;
                e = e || [c];
                for (a = 0; b.length > a; a++) d.prefix = 0 === a && d.prefix, d.defaultValue = e[a] || c, new ab(b[a], d)
            }, ca = function (a) {
            if (!k[a]) {
                var d = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                ka(a, {
                    parser: function (a, e, b, c, f, h, g) {
                        var n = (window.GreenSockGlobals || window).com.greensock.plugins[d];
                        n ? a = (n._cssRegister(), k[b].parse(a, e, b, c, f, h, g)) : (window.console && console.log("Error: " + d + " js file not loaded."), a = f);
                        return a
                    }
                })
            }
        }, m = ab.prototype;
        m.parseComplex = function (a, d, e, b, c, f) {
            var h, g, k, n, m, w, t = this.keyword;
            if (this.multi && (E.test(e) || E.test(d) ? (g = d.replace(E, "|").split("|"), k = e.replace(E, "|").split("|")) : t && (g = [d], k = [e])), k) {
                n = k.length > g.length ? k.length : g.length;
                for (h = 0; n > h; h++) d = g[h] = g[h] || this.dflt, e = k[h] = k[h] || this.dflt, t && (m = d.indexOf(t), w = e.indexOf(t), m !== w && (e = -1 === w ? k : g, e[h] += " " + t));
                d = g.join(", ");
                e = k.join(", ")
            }
            return Va(a, this.p, d, e, this.clrs, this.dflt, b, this.pr, c, f)
        };
        m.parse = function (a, d, b, c, f, h) {
            return this.parseComplex(a.style,
                this.format(P(a, this.p, e, !1, this.dflt)), this.format(d), f, h)
        };
        h.registerSpecialProp = function (a, d, e) {
            ka(a, {
                parser: function (a, b, c, f, h, g) {
                    h = new pa(a, c, 0, 0, h, 2, c, !1, e);
                    return h.plugin = g, h.setRatio = d(a, b, f._tween, c), h
                }, priority: e
            })
        };
        var lb = "scaleX scaleY scaleZ x y z skewX rotation rotationX rotationY perspective".split(" "),
            va = R("transform"), sb = X + "transform", Ha = R("transformOrigin"), ra = null !== R("perspective"),
            Aa = function (a, d, e, b) {
                if (a._gsTransform && e && !b) return a._gsTransform;
                var c, f, g, k, n, m, w, t, x, p, q,
                    A = e ? a._gsTransform || {skewY: 0} : {skewY: 0}, R = 0 > A.scaleX;
                n = 179.99 * V;
                var X = ra ? parseFloat(P(a, Ha, d, !1, "0 0 0").split(" ")[2]) || A.zOrigin || 0 : 0;
                va ? c = P(a, sb, d, !0) : a.currentStyle && (c = a.currentStyle.filter.match(U), c = c && 4 === c.length ? [c[0].substr(4), Number(c[2].substr(4)), Number(c[1].substr(4)), c[3].substr(4), A.x || 0, A.y || 0].join() : "");
                f = (c || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [];
                for (c = f.length; -1 < --c;) g = Number(f[c]), f[c] = (k = g - (g |= 0)) ? (0 | 1E5 * k + (0 > k ? -.5 : .5)) / 1E5 + g : g;
                if (16 === f.length) {
                    R = f[8];
                    d = f[9];
                    k = f[10];
                    g =
                        f[12];
                    var ba = f[13], u = f[14];
                    if (A.zOrigin && (u = -A.zOrigin, g = R * u - f[12], ba = d * u - f[13], u = k * u + A.zOrigin - f[14]), !e || b || null == A.rotationX) {
                        var ga;
                        b = f[0];
                        var v = f[1], ma = f[2], B = f[3], y = f[4], z = f[5], F = f[6], ja = f[7];
                        f = f[11];
                        var C = Math.atan2(F, k), D = -n > C || C > n;
                        A.rotationX = C * Z;
                        C && (x = Math.cos(-C), p = Math.sin(-C), m = y * x + R * p, w = z * x + d * p, t = F * x + k * p, R = y * -p + R * x, d = z * -p + d * x, k = F * -p + k * x, f = ja * -p + f * x, y = m, z = w, F = t);
                        C = Math.atan2(R, b);
                        A.rotationY = C * Z;
                        C && (q = -n > C || C > n, x = Math.cos(-C), p = Math.sin(-C), m = b * x - R * p, w = v * x - d * p, t = ma * x - k * p, d = v * p + d * x, k =
                            ma * p + k * x, f = B * p + f * x, b = m, v = w, ma = t);
                        C = Math.atan2(v, z);
                        A.rotation = C * Z;
                        C && (ga = -n > C || C > n, x = Math.cos(-C), p = Math.sin(-C), b = b * x + y * p, w = v * x + z * p, z = v * -p + z * x, F = ma * -p + F * x, v = w);
                        ga && D ? A.rotation = A.rotationX = 0 : ga && q ? A.rotation = A.rotationY = 0 : q && D && (A.rotationY = A.rotationX = 0);
                        A.scaleX = (0 | 1E5 * Math.sqrt(b * b + v * v) + .5) / 1E5;
                        A.scaleY = (0 | 1E5 * Math.sqrt(z * z + d * d) + .5) / 1E5;
                        A.scaleZ = (0 | 1E5 * Math.sqrt(F * F + k * k) + .5) / 1E5;
                        A.skewX = 0;
                        A.perspective = f ? 1 / (0 > f ? -f : f) : 0;
                        A.x = g;
                        A.y = ba;
                        A.z = u
                    }
                } else ra && !b && f.length && A.x === f[4] && A.y === f[5] && (A.rotationX ||
                    A.rotationY) || void 0 !== A.x && "none" === P(a, "display", d) || (m = (n = 6 <= f.length) ? f[0] : 1, t = f[1] || 0, w = f[2] || 0, x = n ? f[3] : 1, A.x = f[4] || 0, A.y = f[5] || 0, f = Math.sqrt(m * m + t * t), n = Math.sqrt(x * x + w * w), m = m || t ? Math.atan2(t, m) * Z : A.rotation || 0, w = w || x ? Math.atan2(w, x) * Z + m : A.skewX || 0, t = f - Math.abs(A.scaleX || 0), x = n - Math.abs(A.scaleY || 0), 90 < Math.abs(w) && 270 > Math.abs(w) && (R ? (f *= -1, w += 0 >= m ? 180 : -180, m += 0 >= m ? 180 : -180) : (n *= -1, w += 0 >= w ? 180 : -180)), p = (m - A.rotation) % 180, q = (w - A.skewX) % 180, (void 0 === A.skewX || 2E-5 < t || -2E-5 > t || 2E-5 < x || -2E-5 > x ||
                    -179.99 < p && 179.99 > p && 0 | 1E5 * p || -179.99 < q && 179.99 > q && 0 | 1E5 * q) && (A.scaleX = f, A.scaleY = n, A.rotation = m, A.skewX = w), ra && (A.rotationX = A.rotationY = A.z = 0, A.perspective = parseFloat(h.defaultTransformPerspective) || 0, A.scaleZ = 1));
                A.zOrigin = X;
                for (c in A) 2E-5 > A[c] && -2E-5 < A[c] && (A[c] = 0);
                return e && (a._gsTransform = A), A
            }, Fa = function (a) {
                var d, e, b = this.data, c = -b.rotation * V, f = c + b.skewX * V,
                    h = (0 | Math.cos(c) * b.scaleX * 1E5) / 1E5, g = (0 | Math.sin(c) * b.scaleX * 1E5) / 1E5,
                    k = (0 | Math.sin(f) * -b.scaleY * 1E5) / 1E5, m = (0 | Math.cos(f) * b.scaleY * 1E5) /
                    1E5, f = this.t.style;
                if (c = this.t.currentStyle) {
                    e = g;
                    g = -k;
                    k = -e;
                    d = c.filter;
                    f.filter = "";
                    var w, t;
                    e = this.t.offsetWidth;
                    var x = this.t.offsetHeight, p = "absolute" !== c.position,
                        A = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + g + ", M21=" + k + ", M22=" + m,
                        q = b.x, R = b.y;
                    if (null != b.ox && (w = (b.oxp ? .01 * e * b.ox : b.ox) - e / 2, t = (b.oyp ? .01 * x * b.oy : b.oy) - x / 2, q += w - (w * h + t * g), R += t - (w * k + t * m)), p ? (w = e / 2, t = x / 2, A += ", Dx=" + (w - (w * h + t * g) + q) + ", Dy=" + (t - (w * k + t * m) + R) + ")") : A += ", sizingMethod='auto expand')", f.filter = -1 !== d.indexOf("DXImageTransform.Microsoft.Matrix(") ?
                        d.replace(W, A) : A + " " + d, (0 === a || 1 === a) && 1 === h && 0 === g && 0 === k && 1 === m && (p && -1 === A.indexOf("Dx=0, Dy=0") || O.test(d) && 100 !== parseFloat(RegExp.$1) || -1 === d.indexOf(d.indexOf("Alpha")) && f.removeAttribute("filter")), !p) for (a = 8 > y ? 1 : -1, w = b.ieOffsetX || 0, t = b.ieOffsetY || 0, b.ieOffsetX = Math.round((e - ((0 > h ? -h : h) * e + (0 > g ? -g : g) * x)) / 2 + q), b.ieOffsetY = Math.round((x - ((0 > m ? -m : m) * x + (0 > k ? -k : k) * e)) / 2 + R), na = 0; 4 > na; na++) h = n[na], g = c[h], e = -1 !== g.indexOf("px") ? parseFloat(g) : ja(this.t, h, parseFloat(g), g.replace(T, "")) || 0, g = e !== b[h] ?
                        2 > na ? -b.ieOffsetX : -b.ieOffsetY : 2 > na ? w - b.ieOffsetX : t - b.ieOffsetY, f[h] = (b[h] = Math.round(e - g * (0 === na || 2 === na ? 1 : a))) + "px"
                }
            }, bb = function () {
                var a, d, e, b, c, f, h, g, k, n, m, w, t, x, p, A, q, R, X, ba, u, ga, P = this.data, ma = this.t.style,
                    B = P.rotation * V, y = P.scaleX, z = P.scaleY, F = P.scaleZ, C = P.perspective;
                v && (1E-4 > y && -1E-4 < y && (y = F = 2E-5), 1E-4 > z && -1E-4 < z && (z = F = 2E-5), !C || P.z || P.rotationX || P.rotationY || (C = 0));
                if (B || P.skewX) q = Math.cos(B), R = Math.sin(B), a = q, c = R, P.skewX && (B -= P.skewX * V, q = Math.cos(B), R = Math.sin(B)), d = -R, f = q; else {
                    if (!(P.rotationY ||
                        P.rotationX || 1 !== F || C)) return ma[va] = "translate3d(" + P.x + "px," + P.y + "px," + P.z + "px)" + (1 !== y || 1 !== z ? " scale(" + y + "," + z + ")" : ""), void 0;
                    a = f = 1;
                    d = c = 0
                }
                m = 1;
                e = b = h = g = k = n = w = t = x = 0;
                p = C ? -1 / C : 0;
                A = P.zOrigin;
                (B = P.rotationY * V) && (q = Math.cos(B), R = Math.sin(B), k = m * -R, t = p * -R, e = a * R, h = c * R, m *= q, p *= q, a *= q, c *= q);
                (B = P.rotationX * V) && (q = Math.cos(B), R = Math.sin(B), X = d * q + e * R, ba = f * q + h * R, u = n * q + m * R, ga = x * q + p * R, e = d * -R + e * q, h = f * -R + h * q, m = n * -R + m * q, p = x * -R + p * q, d = X, f = ba, n = u, x = ga);
                1 !== F && (e *= F, h *= F, m *= F, p *= F);
                1 !== z && (d *= z, f *= z, n *= z, x *= z);
                1 !== y &&
                (a *= y, c *= y, k *= y, t *= y);
                A && (w -= A, b = e * w, g = h * w, w = m * w + A);
                b = (X = (b += P.x) - (b |= 0)) ? (0 | 1E5 * X + (0 > X ? -.5 : .5)) / 1E5 + b : b;
                g = (X = (g += P.y) - (g |= 0)) ? (0 | 1E5 * X + (0 > X ? -.5 : .5)) / 1E5 + g : g;
                w = (X = (w += P.z) - (w |= 0)) ? (0 | 1E5 * X + (0 > X ? -.5 : .5)) / 1E5 + w : w;
                ma[va] = "matrix3d(" + [(0 | 1E5 * a) / 1E5, (0 | 1E5 * c) / 1E5, (0 | 1E5 * k) / 1E5, (0 | 1E5 * t) / 1E5, (0 | 1E5 * d) / 1E5, (0 | 1E5 * f) / 1E5, (0 | 1E5 * n) / 1E5, (0 | 1E5 * x) / 1E5, (0 | 1E5 * e) / 1E5, (0 | 1E5 * h) / 1E5, (0 | 1E5 * m) / 1E5, (0 | 1E5 * p) / 1E5, b, g, w, C ? 1 + -w / C : 1].join() + ")"
            }, eb = function () {
                var a, d, e, b, c, f, h, g, k = this.data, n = this.t, m = n.style;
                v && (a = m.top ?
                    "top" : m.bottom ? "bottom" : parseFloat(P(n, "top", null, !1)) ? "bottom" : "top", d = P(n, a, null, !1), e = parseFloat(d) || 0, b = d.substr((e + "").length) || "px", k._ffFix = !k._ffFix, m[a] = (k._ffFix ? e + .05 : e - .05) + b);
                k.rotation || k.skewX ? (c = k.rotation * V, f = c - k.skewX * V, h = 1E5 * k.scaleX, g = 1E5 * k.scaleY, m[va] = "matrix(" + (0 | Math.cos(c) * h) / 1E5 + "," + (0 | Math.sin(c) * h) / 1E5 + "," + (0 | Math.sin(f) * -g) / 1E5 + "," + (0 | Math.cos(f) * g) / 1E5 + "," + k.x + "," + k.y + ")") : m[va] = "matrix(" + k.scaleX + ",0,0," + k.scaleY + "," + k.x + "," + k.y + ")"
            };
        ka("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D",
            {
                parser: function (a, d, b, c, f, h, g) {
                    if (c._transform) return f;
                    var k, n, m, w, t, x;
                    d = c._transform = Aa(a, e, !0, g.parseTransform);
                    var p = a.style, A = lb.length, q = {};
                    if ("string" == typeof g.transform && va) m = p.cssText, p[va] = g.transform, p.display = "block", k = Aa(a, null, !1), p.cssText = m; else if ("object" == typeof g) {
                        if (k = {
                            scaleX: Ea(null != g.scaleX ? g.scaleX : g.scale, d.scaleX),
                            scaleY: Ea(null != g.scaleY ? g.scaleY : g.scale, d.scaleY),
                            scaleZ: Ea(null != g.scaleZ ? g.scaleZ : g.scale, d.scaleZ),
                            x: Ea(g.x, d.x),
                            y: Ea(g.y, d.y),
                            z: Ea(g.z, d.z),
                            perspective: Ea(g.transformPerspective,
                                d.perspective)
                        }, x = g.directionalRotation, null != x) if ("object" == typeof x) for (m in x) g[m] = x[m]; else g.rotation = x;
                        k.rotation = Oa("rotation" in g ? g.rotation : "shortRotation" in g ? g.shortRotation + "_short" : "rotationZ" in g ? g.rotationZ : d.rotation, d.rotation, "rotation", q);
                        ra && (k.rotationX = Oa("rotationX" in g ? g.rotationX : "shortRotationX" in g ? g.shortRotationX + "_short" : d.rotationX || 0, d.rotationX, "rotationX", q), k.rotationY = Oa("rotationY" in g ? g.rotationY : "shortRotationY" in g ? g.shortRotationY + "_short" : d.rotationY || 0, d.rotationY,
                            "rotationY", q));
                        k.skewX = null == g.skewX ? d.skewX : Oa(g.skewX, d.skewX);
                        k.skewY = null == g.skewY ? d.skewY : Oa(g.skewY, d.skewY);
                        (n = k.skewY - d.skewY) && (k.skewX += n, k.rotation += n)
                    }
                    null != g.force3D && (d.force3D = g.force3D, t = !0);
                    for ((n = d.force3D || d.z || d.rotationX || d.rotationY || k.z || k.rotationX || k.rotationY || k.perspective) || null == g.scale || (k.scaleZ = 1); -1 < --A;) b = lb[A], w = k[b] - d[b], (1E-6 < w || -1E-6 > w || null != fa[b]) && (t = !0, f = new pa(d, b, d[b], w, f), b in q && (f.e = q[b]), f.xs0 = 0, f.plugin = h, c._overwriteProps.push(f.n));
                    return w = g.transformOrigin,
                    (w || ra && n && d.zOrigin) && (va ? (t = !0, b = Ha, w = (w || P(a, b, e, !1, "50% 50%")) + "", f = new pa(p, b, 0, 0, f, -1, "transformOrigin"), f.b = p[b], f.plugin = h, ra ? (m = d.zOrigin, w = w.split(" "), d.zOrigin = (2 < w.length && (0 === m || "0px" !== w[2]) ? parseFloat(w[2]) : m) || 0, f.xs0 = f.e = p[b] = w[0] + " " + (w[1] || "50%") + " 0px", f = new pa(d, "zOrigin", 0, 0, f, -1, f.n), f.b = m, f.xs0 = f.e = d.zOrigin) : f.xs0 = f.e = p[b] = w) : Ca(w + "", d)), t && (c._transformType = n || 3 === this._transformType ? 3 : 2), f
                }, prefix: !0
            });
        ka("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0,
            multi: !0, keyword: "inset"
        });
        ka("borderRadius", {
            defaultValue: "0px", parser: function (a, b, c, f, h) {
                b = this.format(b);
                var g, k, n, m, w, t, x, p, A, q, X, ba, u, ga,
                    v = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    ma = a.style;
                f = parseFloat(a.offsetWidth);
                p = parseFloat(a.offsetHeight);
                b = b.split(" ");
                for (g = 0; v.length > g; g++) this.p.indexOf("border") && (v[g] = R(v[g])), m = n = P(a, v[g], e, !1, "0px"), -1 !== m.indexOf(" ") && (n = m.split(" "), m = n[0], n = n[1]), w = k = b[g], t = parseFloat(m), q = m.substr((t +
                    "").length), (X = "=" === w.charAt(1)) ? (x = parseInt(w.charAt(0) + "1", 10), w = w.substr(2), x *= parseFloat(w), A = w.substr((x + "").length - (0 > x ? 1 : 0)) || "") : (x = parseFloat(w), A = w.substr((x + "").length)), "" === A && (A = d[c] || q), A !== q && (ba = ja(a, "borderLeft", t, q), u = ja(a, "borderTop", t, q), "%" === A ? (m = ba / f * 100 + "%", n = u / p * 100 + "%") : "em" === A ? (ga = ja(a, "borderLeft", 1, "em"), m = ba / ga + "em", n = u / ga + "em") : (m = ba + "px", n = u + "px"), X && (w = parseFloat(m) + x + A, k = parseFloat(n) + x + A)), h = Va(ma, v[g], m + " " + n, w + " " + k, !1, "0px", h);
                return h
            }, prefix: !0, formatter: Ga("0px 0px 0px 0px",
                !1, !0)
        });
        ka("backgroundPosition", {
            defaultValue: "0 0", parser: function (a, d, b, c, f, h) {
                var g, k, n;
                b = e || ga(a, null);
                b = this.format((b ? y ? b.getPropertyValue("background-position-x") + " " + b.getPropertyValue("background-position-y") : b.getPropertyValue("background-position") : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0");
                var m = this.format(d);
                if (-1 !== b.indexOf("%") != (-1 !== m.indexOf("%")) && (g = P(a, "backgroundImage").replace(Q, ""), g && "none" !== g)) {
                    d = b.split(" ");
                    c = m.split(" ");
                    ia.setAttribute("src",
                        g);
                    for (g = 2; -1 < --g;) b = d[g], k = -1 !== b.indexOf("%"), k !== (-1 !== c[g].indexOf("%")) && (n = 0 === g ? a.offsetWidth - ia.width : a.offsetHeight - ia.height, d[g] = k ? parseFloat(b) / 100 * n + "px" : 100 * (parseFloat(b) / n) + "%");
                    b = d.join(" ")
                }
                return this.parseComplex(a.style, b, m, f, h)
            }, formatter: Ca
        });
        ka("backgroundSize", {defaultValue: "0 0", formatter: Ca});
        ka("perspective", {defaultValue: "0px", prefix: !0});
        ka("perspectiveOrigin", {defaultValue: "50% 50%", prefix: !0});
        ka("transformStyle", {prefix: !0});
        ka("backfaceVisibility", {prefix: !0});
        ka("userSelect",
            {prefix: !0});
        ka("margin", {parser: S("marginTop,marginRight,marginBottom,marginLeft")});
        ka("padding", {parser: S("paddingTop,paddingRight,paddingBottom,paddingLeft")});
        ka("clip", {
            defaultValue: "rect(0px,0px,0px,0px)", parser: function (a, d, b, c, f, h) {
                var g, k, n;
                return 9 > y ? (k = a.currentStyle, n = 8 > y ? " " : ",", g = "rect(" + k.clipTop + n + k.clipRight + n + k.clipBottom + n + k.clipLeft + ")", d = this.format(d).split(",").join(n)) : (g = this.format(P(a, this.p, e, !1, this.dflt)), d = this.format(d)), this.parseComplex(a.style, g, d, f, h)
            }
        });
        ka("textShadow",
            {defaultValue: "0px 0px 0px #999", color: !0, multi: !0});
        ka("autoRound,strictUnits", {
            parser: function (a, d, e, b, c) {
                return c
            }
        });
        ka("border", {
            defaultValue: "0px solid #000", parser: function (a, d, b, c, f, h) {
                return this.parseComplex(a.style, this.format(P(a, "borderTopWidth", e, !1, "0px") + " " + P(a, "borderTopStyle", e, !1, "solid") + " " + P(a, "borderTopColor", e, !1, "#000")), this.format(d), f, h)
            }, color: !0, formatter: function (a) {
                var d = a.split(" ");
                return d[0] + " " + (d[1] || "solid") + " " + (a.match(Da) || ["#000"])[0]
            }
        });
        ka("float,cssFloat,styleFloat",
            {
                parser: function (a, d, e, b, c) {
                    a = a.style;
                    b = "cssFloat" in a ? "cssFloat" : "styleFloat";
                    return new pa(a, b, 0, 0, c, -1, e, !1, 0, a[b], d)
                }
            });
        var vb = function (a) {
            var d, e = this.t, b = e.filter || P(this.data, "filter");
            a = 0 | this.s + this.c * a;
            100 === a && (-1 === b.indexOf("atrix(") && -1 === b.indexOf("radient(") && -1 === b.indexOf("oader(") ? (e.removeAttribute("filter"), d = !P(this.data, "filter")) : (e.filter = b.replace(g, ""), d = !0));
            d || (this.xn1 && (e.filter = b = b || "alpha(opacity=" + a + ")"), -1 === b.indexOf("opacity") ? 0 === a && this.xn1 || (e.filter = b + " alpha(opacity=" +
                a + ")") : e.filter = b.replace(O, "opacity=" + a))
        };
        ka("opacity,alpha,autoAlpha", {
            defaultValue: "1", parser: function (a, d, b, c, f, h) {
                var g = parseFloat(P(a, "opacity", e, !1, "1")), k = a.style, n = "autoAlpha" === b;
                return "string" == typeof d && "=" === d.charAt(1) && (d = ("-" === d.charAt(0) ? -1 : 1) * parseFloat(d.substr(2)) + g), n && 1 === g && "hidden" === P(a, "visibility", e) && 0 !== d && (g = 0), A ? f = new pa(k, "opacity", g, d - g, f) : (f = new pa(k, "opacity", 100 * g, 100 * (d - g), f), f.xn1 = n ? 1 : 0, k.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s +
                    f.c) + ")", f.data = a, f.plugin = h, f.setRatio = vb), n && (f = new pa(k, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== g ? "inherit" : "hidden", 0 === d ? "hidden" : "inherit"), f.xs0 = "inherit", c._overwriteProps.push(f.n), c._overwriteProps.push(b)), f
            }
        });
        var fb = function (a, d) {
            d && (a.removeProperty ? a.removeProperty(d.replace(H, "-$1").toLowerCase()) : a.removeAttribute(d))
        }, mb = function (a) {
            if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                this.t.className = 0 === a ? this.b : this.e;
                for (var d = this.data, e = this.t.style; d;) d.v ? e[d.p] = d.v : fb(e, d.p), d = d._next;
                1 ===
                a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.className !== this.e && (this.t.className = this.e)
        };
        ka("className", {
            parser: function (d, b, c, f, h, g, k) {
                var n, m, w, t, x = d.className, p = d.style.cssText;
                if (h = f._classNamePT = new pa(d, c, 0, 0, h, 2), h.setRatio = mb, h.pr = -11, a = !0, h.b = x, c = Ba(d, e), m = d._gsClassPT) {
                    w = {};
                    for (t = m.data; t;) w[t.p] = 1, t = t._next;
                    m.setRatio(1)
                }
                return d._gsClassPT = h, h.e = "=" !== b.charAt(1) ? b : x.replace(RegExp("\\s*\\b" + b.substr(2) + "\\b"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), f._tween._duration &&
                (d.className = h.e, n = xa(d, c, Ba(d), k, w), d.className = x, h.data = n.firstMPT, d.style.cssText = p, h = h.xfirst = f.parse(d, n.difs, h, g)), h
            }
        });
        var nb = function (a) {
            if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var d, e, b, c = this.t.style, f = k.transform.parse;
                if ("all" === this.e) c.cssText = "", b = !0; else for (a = this.e.split(","), e = a.length; -1 < --e;) d = a[e], k[d] && (k[d].parse === f ? b = !0 : d = "transformOrigin" === d ? Ha : k[d].p), fb(c, d);
                b && (fb(c, va), this.t._gsTransform && delete this.t._gsTransform)
            }
        };
        ka("clearProps", {
            parser: function (d, e, b, c, f) {
                return f = new pa(d, b, 0, 0, f, 2), f.setRatio = nb, f.e = e, f.pr = -10, f.data = c._tween, a = !0, f
            }
        });
        m = ["bezier", "throwProps", "physicsProps", "physics2D"];
        for (na = m.length; na--;) ca(m[na]);
        m = h.prototype;
        m._firstPT = null;
        m._onInitTween = function (b, c, g) {
            if (!b.nodeType) return !1;
            this._target = b;
            this._tween = g;
            this._vars = c;
            p = c.autoRound;
            a = !1;
            d = c.suffixMap || h.suffixMap;
            e = ga(b, "");
            f = this._overwriteProps;
            var k, n, m, w, t = b.style;
            if (q && "" === t.zIndex && (k = P(b, "zIndex", e), ("auto" === k || "" === k) &&
            (t.zIndex = 0)), "string" == typeof c && (m = t.cssText, k = Ba(b, e), t.cssText = m + ";" + c, k = xa(b, k, Ba(b)).difs, !A && G.test(c) && (k.opacity = parseFloat(RegExp.$1)), c = k, t.cssText = m), this._firstPT = g = this.parse(b, c, null), this._transformType) {
                c = 3 === this._transformType;
                va ? u && (q = !0, "" === t.zIndex && (n = P(b, "zIndex", e), ("auto" === n || "" === n) && (t.zIndex = 0)), z && (t.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (c ? "visible" : "hidden"))) : t.zoom = 1;
                for (n = g; n && n._next;) n = n._next;
                k = new pa(b, "transform", 0, 0, null, 2);
                this._linkCSSP(k,
                    null, n);
                k.setRatio = c && ra ? bb : va ? eb : Fa;
                k.data = this._transform || Aa(b, e, !0);
                f.pop()
            }
            if (a) {
                for (; g;) {
                    b = g._next;
                    for (n = m; n && n.pr > g.pr;) n = n._next;
                    (g._prev = n ? n._prev : w) ? g._prev._next = g : m = g;
                    (g._next = n) ? n._prev = g : w = g;
                    g = b
                }
                this._firstPT = m
            }
            return !0
        };
        m.parse = function (a, b, c, f) {
            var h, g, n, m, w, t, x, A, q, R = a.style;
            for (h in b) {
                w = b[h];
                if (g = k[h]) c = g.parse(a, w, h, this, c, f, b); else if (g = P(a, h, e) + "", A = "string" == typeof w, "color" === h || "fill" === h || "stroke" === h || -1 !== h.indexOf("Color") || A && M.test(w)) A || (w = Ua(w), w = (3 < w.length ? "rgba(" :
                    "rgb(") + w.join(",") + ")"), c = Va(R, h, g, w, !0, "transparent", c, 0, f); else if (!A || -1 === w.indexOf(" ") && -1 === w.indexOf(",")) {
                    t = (n = parseFloat(g)) || 0 === n ? g.substr((n + "").length) : "";
                    if ("" === g || "auto" === g) if ("width" === h || "height" === h) {
                        n = a;
                        var X = h;
                        t = e;
                        q = parseFloat("width" === X ? n.offsetWidth : n.offsetHeight);
                        var X = F[X], ba = X.length;
                        for (t = t || ga(n, null); -1 < --ba;) q -= parseFloat(P(n, "padding" + X[ba], t, !0)) || 0, q -= parseFloat(P(n, "border" + X[ba] + "Width", t, !0)) || 0;
                        n = q;
                        t = "px"
                    } else "left" === h || "top" === h ? (n = ma(a, h, e), t = "px") : (n =
                        "opacity" !== h ? 0 : 1, t = "");
                    (q = A && "=" === w.charAt(1)) ? (m = parseInt(w.charAt(0) + "1", 10), w = w.substr(2), m *= parseFloat(w), x = w.replace(T, "")) : (m = parseFloat(w), x = A ? w.substr((m + "").length) || "" : "");
                    "" === x && (x = d[h] || t);
                    w = m || 0 === m ? (q ? m + n : m) + x : b[h];
                    t === x || "" === x || !m && 0 !== m || !n && 0 !== n || (n = ja(a, h, n, t), "%" === x ? (n /= ja(a, h, 100, "%") / 100, 100 < n && (n = 100), !0 !== b.strictUnits && (g = n + "%")) : "em" === x ? n /= ja(a, h, 1, "em") : (m = ja(a, h, m, x), x = "px"), !q || !m && 0 !== m || (w = m + n + x));
                    q && (m += n);
                    !n && 0 !== n || !m && 0 !== m ? void 0 !== R[h] && (w || "NaN" != w + "" &&
                        null != w) ? (c = new pa(R, h, m || n || 0, 0, c, -1, h, !1, 0, g, w), c.xs0 = "none" !== w || "display" !== h && -1 === h.indexOf("Style") ? w : g) : window.console && console.log("invalid " + h + " tween value: " + b[h]) : (c = new pa(R, h, n, m - n, c, 0, h, !1 !== p && ("px" === x || "zIndex" === h), 0, g, w), c.xs0 = x)
                } else c = Va(R, h, g, w, !0, null, c, 0, f);
                f && c && !c.plugin && (c.plugin = f)
            }
            return c
        };
        m.setRatio = function (a) {
            var d, e, b, c = this._firstPT;
            if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (a || this._tween._time !== this._tween._duration && 0 !==
                this._tween._time || -1E-6 === this._tween._rawPrevTime) for (; c;) {
                if (d = c.c * a + c.s, c.r ? d = 0 < d ? 0 | d + .5 : 0 | d - .5 : 1E-6 > d && -1E-6 < d && (d = 0), c.type) if (1 === c.type) if (b = c.l, 2 === b) c.t[c.p] = c.xs0 + d + c.xs1 + c.xn1 + c.xs2; else if (3 === b) c.t[c.p] = c.xs0 + d + c.xs1 + c.xn1 + c.xs2 + c.xn2 + c.xs3; else if (4 === b) c.t[c.p] = c.xs0 + d + c.xs1 + c.xn1 + c.xs2 + c.xn2 + c.xs3 + c.xn3 + c.xs4; else if (5 === b) c.t[c.p] = c.xs0 + d + c.xs1 + c.xn1 + c.xs2 + c.xn2 + c.xs3 + c.xn3 + c.xs4 + c.xn4 + c.xs5; else {
                    e = c.xs0 + d + c.xs1;
                    for (b = 1; c.l > b; b++) e += c["xn" + b] + c["xs" + (b + 1)];
                    c.t[c.p] = e
                } else -1 === c.type ?
                    c.t[c.p] = c.xs0 : c.setRatio && c.setRatio(a); else c.t[c.p] = d + c.xs0;
                c = c._next
            } else for (; c;) 2 !== c.type ? c.t[c.p] = c.b : c.setRatio(a), c = c._next; else for (; c;) 2 !== c.type ? c.t[c.p] = c.e : c.setRatio(a), c = c._next
        };
        m._enableTransforms = function (a) {
            this._transformType = a || 3 === this._transformType ? 3 : 2;
            this._transform = this._transform || Aa(this._target, e, !0)
        };
        m._linkCSSP = function (a, d, e, b) {
            return a && (d && (d._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, b = !0),
                e ? e._next = a : b || null !== this._firstPT || (this._firstPT = a), a._next = d, a._prev = e), a
        };
        m._kill = function (a) {
            var d, e, b, f = a;
            if (a.autoAlpha || a.alpha) {
                f = {};
                for (e in a) f[e] = a[e];
                f.opacity = 1;
                f.autoAlpha && (f.visibility = 1)
            }
            return a.className && (d = this._classNamePT) && (b = d.xfirst, b && b._prev ? this._linkCSSP(b._prev, d._next, b._prev._prev) : b === this._firstPT && (this._firstPT = d._next), d._next && this._linkCSSP(d._next, d._next._next, b._prev), this._classNamePT = null), c.prototype._kill.call(this, f)
        };
        var Ka = function (a, d, e) {
            var b,
                c, f;
            if (a.slice) for (b = a.length; -1 < --b;) Ka(a[b], d, e); else for (a = a.childNodes, b = a.length; -1 < --b;) c = a[b], f = c.type, c.style && (d.push(Ba(c)), e && e.push(c)), 1 !== f && 9 !== f && 11 !== f || !c.childNodes.length || Ka(c, d, e)
        };
        return h.cascadeTo = function (a, d, e) {
            var c, f, h = b.to(a, d, e), g = [h], k = [], n = [], m = [], w = b._internals.reservedProps;
            a = h._targets || h.target;
            Ka(a, k, m);
            h.render(d, !0);
            Ka(a, n);
            h.render(0, !0);
            h._enabled(!0);
            for (a = m.length; -1 < --a;) if (c = xa(m[a], k[a], n[a]), c.firstMPT) {
                c = c.difs;
                for (f in e) w[f] && (c[f] = e[f]);
                g.push(b.to(m[a],
                    d, c))
            }
            return g
        }, c.activate([h]), h
    }, !0);
    (function () {
        var c = window._gsDefine.plugin({
            propName: "roundProps", priority: -1, API: 2, init: function (b, a, d) {
                return this._tween = d, !0
            }
        }).prototype;
        c._onInitAllProps = function () {
            for (var b, a, d, e = this._tween, c = e.vars.roundProps instanceof Array ? e.vars.roundProps : e.vars.roundProps.split(","), h = c.length, k = {}, m = e._propLookup.roundProps; -1 < --h;) k[c[h]] = 1;
            for (h = c.length; -1 < --h;) for (b = c[h], a = e._firstPT; a;) d = a._next, a.pg ? a.t._roundProps(k, !0) : a.n === b && (this._add(a.t, b, a.s, a.c),
            d && (d._prev = a._prev), a._prev ? a._prev._next = d : e._firstPT === a && (e._firstPT = d), a._next = a._prev = null, e._propLookup[b] = m), a = d;
            return !1
        };
        c._add = function (b, a, d, e) {
            this._addTween(b, a, d, d + e, a, !0);
            this._overwriteProps.push(a)
        }
    })();
    window._gsDefine.plugin({
        propName: "attr", API: 2, init: function (c, b) {
            var a;
            if ("function" != typeof c.setAttribute) return !1;
            this._target = c;
            this._proxy = {};
            for (a in b) this._addTween(this._proxy, a, parseFloat(c.getAttribute(a)), b[a], a) && this._overwriteProps.push(a);
            return !0
        }, set: function (c) {
            this._super.setRatio.call(this,
                c);
            for (var b = this._overwriteProps, a = b.length; -1 < --a;) c = b[a], this._target.setAttribute(c, this._proxy[c] + "")
        }
    });
    window._gsDefine.plugin({
        propName: "directionalRotation", API: 2, init: function (c, b) {
            "object" != typeof b && (b = {rotation: b});
            this.finals = {};
            var a, d, e, f, h, k, m = !0 === b.useRadians ? 2 * Math.PI : 360;
            for (a in b) "useRadians" !== a && (k = (b[a] + "").split("_"), d = k[0], e = parseFloat("function" != typeof c[a] ? c[a] : c[a.indexOf("set") || "function" != typeof c["get" + a.substr(3)] ? a : "get" + a.substr(3)]()), f = this.finals[a] = "string" ==
            typeof d && "=" === d.charAt(1) ? e + parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2)) : Number(d) || 0, h = f - e, k.length && (d = k.join("_"), -1 !== d.indexOf("short") && (h %= m, h !== h % (m / 2) && (h = 0 > h ? h + m : h - m)), -1 !== d.indexOf("_cw") && 0 > h ? h = (h + 9999999999 * m) % m - (0 | h / m) * m : -1 !== d.indexOf("ccw") && 0 < h && (h = (h - 9999999999 * m) % m - (0 | h / m) * m)), (1E-6 < h || -1E-6 > h) && (this._addTween(c, a, e, e + h, a), this._overwriteProps.push(a)));
            return !0
        }, set: function (c) {
            if (1 !== c) this._super.setRatio.call(this, c); else for (c = this._firstPT; c;) c.f ? c.t[c.p](this.finals[c.p]) :
                c.t[c.p] = this.finals[c.p], c = c._next
        }
    })._autoCSS = !0;
    window._gsDefine("easing.Back", ["easing.Ease"], function (c) {
        var b, a, d, e = window.GreenSockGlobals || window, f = 2 * Math.PI, h = Math.PI / 2,
            k = e.com.greensock._class, m = function (a, d) {
                var e = k("easing." + a, function () {
                }, !0), b = e.prototype = new c;
                return b.constructor = e, b.getRatio = d, e
            }, p = c.register || function () {
            }, q = function (a, d, e, b) {
                d = k("easing." + a, {easeOut: new d, easeIn: new e, easeInOut: new b}, !0);
                return p(d, a), d
            }, u = function (a, d, e) {
                this.t = a;
                this.v = d;
                e && (this.next = e, e.prev =
                    this, this.c = e.v - d, this.gap = e.t - a)
            }, v = function (a, d) {
                var e = k("easing." + a, function (a) {
                    this._p1 = a || 0 === a ? a : 1.70158;
                    this._p2 = 1.525 * this._p1
                }, !0), b = e.prototype = new c;
                return b.constructor = e, b.getRatio = d, b.config = function (a) {
                    return new e(a)
                }, e
            }, v = q("Back", v("BackOut", function (a) {
                return --a * a * ((this._p1 + 1) * a + this._p1) + 1
            }), v("BackIn", function (a) {
                return a * a * ((this._p1 + 1) * a - this._p1)
            }), v("BackInOut", function (a) {
                return 1 > (a *= 2) ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
            })), z = k("easing.SlowMo",
            function (a, d, e) {
                null == a ? a = .7 : 1 < a && (a = 1);
                this._p = 1 !== a ? d || 0 === d ? d : .7 : 0;
                this._p1 = (1 - a) / 2;
                this._p2 = a;
                this._p3 = this._p1 + this._p2;
                this._calcEnd = !0 === e
            }, !0), y = z.prototype = new c;
        return y.constructor = z, y.getRatio = function (a) {
            var d = a + (.5 - a) * this._p;
            return this._p1 > a ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : d - (a = 1 - a / this._p1) * a * a * a * d : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : d + (a - d) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : d
        }, z.ease = new z(.7, .7), y.config = z.config = function (a, d, e) {
            return new z(a,
                d, e)
        }, b = k("easing.SteppedEase", function (a) {
            a = a || 1;
            this._p1 = 1 / a;
            this._p2 = a + 1
        }, !0), y = b.prototype = new c, y.constructor = b, y.getRatio = function (a) {
            return 0 > a ? a = 0 : 1 <= a && (a = .999999999), (this._p2 * a >> 0) * this._p1
        }, y.config = b.config = function (a) {
            return new b(a)
        }, a = k("easing.RoughEase", function (a) {
            a = a || {};
            for (var d, e, b, f, h = a.taper || "none", k = [], g = 0, m = f = 0 | (a.points || 20), p = !1 !== a.randomize, q = !0 === a.clamp, v = a.template instanceof c ? a.template : null, y = "number" == typeof a.strength ? .4 * a.strength : .4; -1 < --m;) a = p ? Math.random() :
                1 / f * m, d = v ? v.getRatio(a) : a, "none" === h ? e = y : "out" === h ? (b = 1 - a, e = b * b * y) : "in" === h ? e = a * a * y : .5 > a ? (b = 2 * a, e = .5 * b * b * y) : (b = 2 * (1 - a), e = .5 * b * b * y), p ? d += Math.random() * e - .5 * e : m % 2 ? d += .5 * e : d -= .5 * e, q && (1 < d ? d = 1 : 0 > d && (d = 0)), k[g++] = {
                x: a,
                y: d
            };
            k.sort(function (a, d) {
                return a.x - d.x
            });
            e = new u(1, 1, null);
            for (m = f; -1 < --m;) f = k[m], e = new u(f.x, f.y, e);
            this._prev = new u(0, 0, 0 !== e.t ? e : e.next)
        }, !0), y = a.prototype = new c, y.constructor = a, y.getRatio = function (a) {
            var d = this._prev;
            if (a > d.t) {
                for (; d.next && a >= d.t;) d = d.next;
                d = d.prev
            } else for (; d.prev &&
                          d.t >= a;) d = d.prev;
            return this._prev = d, d.v + (a - d.t) / d.gap * d.c
        }, y.config = function (d) {
            return new a(d)
        }, a.ease = new a, q("Bounce", m("BounceOut", function (a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        }), m("BounceIn", function (a) {
            return 1 / 2.75 > (a = 1 - a) ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
        }), m("BounceInOut", function (a) {
            var d =
                .5 > a;
            return a = d ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, d ? .5 * (1 - a) : .5 * a + .5
        })), q("Circ", m("CircOut", function (a) {
            return Math.sqrt(1 - --a * a)
        }), m("CircIn", function (a) {
            return -(Math.sqrt(1 - a * a) - 1)
        }), m("CircInOut", function (a) {
            return 1 > (a *= 2) ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        })), d = function (a, d, e) {
            var b = k("easing." + a, function (a, d) {
                this._p1 = a || 1;
                this._p2 = d || e;
                this._p3 = this._p2 / f * (Math.asin(1 /
                    this._p1) || 0)
            }, !0);
            a = b.prototype = new c;
            return a.constructor = b, a.getRatio = d, a.config = function (a, d) {
                return new b(a, d)
            }, b
        }, q("Elastic", d("ElasticOut", function (a) {
            return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * f / this._p2) + 1
        }, .3), d("ElasticIn", function (a) {
            return -(this._p1 * Math.pow(2, 10 * --a) * Math.sin((a - this._p3) * f / this._p2))
        }, .3), d("ElasticInOut", function (a) {
            return 1 > (a *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * --a) * Math.sin((a - this._p3) * f / this._p2) : .5 * this._p1 * Math.pow(2, -10 * --a) * Math.sin((a - this._p3) *
                f / this._p2) + 1
        }, .45)), q("Expo", m("ExpoOut", function (a) {
            return 1 - Math.pow(2, -10 * a)
        }), m("ExpoIn", function (a) {
            return Math.pow(2, 10 * (a - 1)) - .001
        }), m("ExpoInOut", function (a) {
            return 1 > (a *= 2) ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
        })), q("Sine", m("SineOut", function (a) {
            return Math.sin(a * h)
        }), m("SineIn", function (a) {
            return -Math.cos(a * h) + 1
        }), m("SineInOut", function (a) {
            return -.5 * (Math.cos(Math.PI * a) - 1)
        })), k("easing.EaseLookup", {
            find: function (a) {
                return c.map[a]
            }
        }, !0), p(e.SlowMo, "SlowMo", "ease,"), p(a,
            "RoughEase", "ease,"), p(b, "SteppedEase", "ease,"), v
    }, !0)
});
(function (c) {
    var b = c.GreenSockGlobals || c;
    if (!b.TweenLite) {
        var a, d, e, f, h, k = function (a) {
            var d = a.split("."), e = b;
            for (a = 0; d.length > a; a++) e[d[a]] = e = e[d[a]] || {};
            return e
        }, m = k("com.greensock"), p = [].slice, q = function () {
        }, u = function () {
            var a = Object.prototype.toString, d = a.call([]);
            return function (e) {
                return e instanceof Array || "object" == typeof e && !!e.push && a.call(e) === d
            }
        }(), v = {}, z = function (a, d, e, f) {
            this.sc = v[a] ? v[a].sc : [];
            v[a] = this;
            this.gsClass = null;
            this.func = e;
            var h = [];
            this.check = function (g) {
                for (var m, x, p = d.length,
                         A = p; -1 < --p;) (m = v[d[p]] || new z(d[p], [])).gsClass ? (h[p] = m.gsClass, A--) : g && m.sc.push(this);
                if (0 === A && e) for (g = ("com.greensock." + a).split("."), m = g.pop(), x = k(g.join("."))[m] = this.gsClass = e.apply(e, h), f && (b[m] = x, "function" == typeof define && define.amd ? define((c.GreenSockAMDPath ? c.GreenSockAMDPath + "/" : "") + a.split(".").join("/"), [], function () {
                    return x
                }) : "undefined" != typeof module && module.exports && (module.exports = x)), p = 0; this.sc.length > p; p++) this.sc[p].check()
            };
            this.check(!0)
        }, y = c._gsDefine = function (a, d, e, b) {
            return new z(a,
                d, e, b)
        }, t = m._class = function (a, d, e) {
            return d = d || function () {
            }, y(a, [], function () {
                return d
            }, e), d
        };
        y.globals = b;
        var B = [0, 0, 1, 1], C = [], I = t("easing.Ease", function (a, d, e, b) {
            this._func = a;
            this._type = e || 0;
            this._power = b || 0;
            this._params = d ? B.concat(d) : B
        }, !0), T = I.map = {}, O = I.register = function (a, d, e, b) {
            var c, f, h;
            d = d.split(",");
            for (var g = d.length, k = (e || "easeIn,easeOut,easeInOut").split(","); -1 < --g;) for (c = d[g], e = b ? t("easing." + c, null, !0) : m.easing[c] || {}, f = k.length; -1 < --f;) h = k[f], T[c + "." + h] = T[h + c] = e[h] = a.getRatio ? a : a[h] ||
                new a
        };
        e = I.prototype;
        e._calcEnd = !1;
        e.getRatio = function (a) {
            if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
            var d = this._type, e = this._power, b = 1 === d ? 1 - a : 2 === d ? a : .5 > a ? 2 * a : 2 * (1 - a);
            return 1 === e ? b *= b : 2 === e ? b *= b * b : 3 === e ? b *= b * b * b : 4 === e && (b *= b * b * b * b), 1 === d ? 1 - b : 2 === d ? b : .5 > a ? b / 2 : 1 - b / 2
        };
        a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"];
        for (d = a.length; -1 < --d;) e = a[d] + ",Power" + d, O(new I(null, null, 1, d), e, "easeOut", !0), O(new I(null, null, 2, d), e, "easeIn" + (0 === d ? ",easeNone" : "")), O(new I(null,
            null, 3, d), e, "easeInOut");
        T.linear = m.easing.Linear.easeIn;
        T.swing = m.easing.Quad.easeInOut;
        var G = t("events.EventDispatcher", function (a) {
            this._listeners = {};
            this._eventTarget = a || this
        });
        e = G.prototype;
        e.addEventListener = function (a, d, e, b, c) {
            c = c || 0;
            var g, k = this._listeners[a], m = 0;
            null == k && (this._listeners[a] = k = []);
            for (g = k.length; -1 < --g;) a = k[g], a.c === d && a.s === e ? k.splice(g, 1) : 0 === m && c > a.pr && (m = g + 1);
            k.splice(m, 0, {c: d, s: e, up: b, pr: c});
            this !== f || h || f.wake()
        };
        e.removeEventListener = function (a, d) {
            var e, b = this._listeners[a];
            if (b) for (e = b.length; -1 < --e;) if (b[e].c === d) return b.splice(e, 1), void 0
        };
        e.dispatchEvent = function (a) {
            var d, e, b, c = this._listeners[a];
            if (c) for (d = c.length, e = this._eventTarget; -1 < --d;) b = c[d], b.up ? b.c.call(b.s || e, {
                type: a,
                target: e
            }) : b.c.call(b.s || e)
        };
        var g = c.requestAnimationFrame, M = c.cancelAnimationFrame, H = Date.now || function () {
            return (new Date).getTime()
        }, K = H();
        a = ["ms", "moz", "webkit", "o"];
        for (d = a.length; -1 < --d && !g;) g = c[a[d] + "RequestAnimationFrame"], M = c[a[d] + "CancelAnimationFrame"] || c[a[d] + "CancelRequestAnimationFrame"];
        t("Ticker", function (a, d) {
            var e, b, c, k, m, x = this, p = H(), A = !1 !== d && g, t = function (a) {
                K = H();
                x.time = (K - p) / 1E3;
                var d, f = x.time - m;
                (!e || 0 < f || !0 === a) && (x.frame++, m += f + (f >= k ? .004 : k - f), d = !0);
                !0 !== a && (c = b(t));
                d && x.dispatchEvent("tick")
            };
            G.call(x);
            x.time = x.frame = 0;
            x.tick = function () {
                t(!0)
            };
            x.sleep = function () {
                null != c && (A && M ? M(c) : clearTimeout(c), b = q, c = null, x === f && (h = !1))
            };
            x.wake = function () {
                null !== c && x.sleep();
                b = 0 === e ? q : A && g ? g : function (a) {
                    return setTimeout(a, 0 | 1E3 * (m - x.time) + 1)
                };
                x === f && (h = !0);
                t(2)
            };
            x.fps = function (a) {
                return arguments.length ?
                    (e = a, k = 1 / (e || 60), m = this.time + k, x.wake(), void 0) : e
            };
            x.useRAF = function (a) {
                return arguments.length ? (x.sleep(), A = a, x.fps(e), void 0) : A
            };
            x.fps(a);
            setTimeout(function () {
                A && (!c || 5 > x.frame) && x.useRAF(!1)
            }, 1500)
        });
        e = m.Ticker.prototype = new m.events.EventDispatcher;
        e.constructor = m.Ticker;
        var Q = t("core.Animation", function (a, d) {
            if (this.vars = d = d || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(d.delay) || 0, this._timeScale = 1, this._active = !0 === d.immediateRender, this.data = d.data, this._reversed = !0 === d.reversed,
                ha) {
                h || f.wake();
                var e = this.vars.useFrames ? N : ha;
                e.add(this, e._time);
                this.vars.paused && this.paused(!0)
            }
        });
        f = Q.ticker = new m.Ticker;
        e = Q.prototype;
        e._dirty = e._gc = e._initted = e._paused = !1;
        e._totalTime = e._time = 0;
        e._rawPrevTime = -1;
        e._next = e._last = e._onUpdate = e._timeline = e.timeline = null;
        e._paused = !1;
        var L = function () {
            h && 2E3 < H() - K && f.wake();
            setTimeout(L, 2E3)
        };
        L();
        e.play = function (a, d) {
            return arguments.length && this.seek(a, d), this.reversed(!1).paused(!1)
        };
        e.pause = function (a, d) {
            return arguments.length && this.seek(a,
                d), this.paused(!0)
        };
        e.resume = function (a, d) {
            return arguments.length && this.seek(a, d), this.paused(!1)
        };
        e.seek = function (a, d) {
            return this.totalTime(Number(a), !1 !== d)
        };
        e.restart = function (a, d) {
            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, !1 !== d, !0)
        };
        e.reverse = function (a, d) {
            return arguments.length && this.seek(a || this.totalDuration(), d), this.reversed(!0).paused(!1)
        };
        e.render = function () {
        };
        e.invalidate = function () {
            return this
        };
        e.isActive = function () {
            var a, d = this._timeline, e = this._startTime;
            return !d ||
                !this._gc && !this._paused && d.isActive() && (a = d.rawTime()) >= e && e + this.totalDuration() / this._timeScale > a
        };
        e._enabled = function (a, d) {
            return h || f.wake(), this._gc = !a, this._active = this.isActive(), !0 !== d && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
        };
        e._kill = function () {
            return this._enabled(!1, !1)
        };
        e.kill = function (a, d) {
            return this._kill(a, d), this
        };
        e._uncache = function (a) {
            for (a = a ? this : this.timeline; a;) a._dirty = !0, a = a.timeline;
            return this
        };
        e._swapSelfInParams = function (a) {
            for (var d = a.length, e = a.concat(); -1 < --d;) "{self}" === a[d] && (e[d] = this);
            return e
        };
        e.eventCallback = function (a, d, e, b) {
            if ("on" === (a || "").substr(0, 2)) {
                var c = this.vars;
                if (1 === arguments.length) return c[a];
                null == d ? delete c[a] : (c[a] = d, c[a + "Params"] = u(e) && -1 !== e.join("").indexOf("{self}") ? this._swapSelfInParams(e) : e, c[a + "Scope"] = b);
                "onUpdate" === a && (this._onUpdate = d)
            }
            return this
        };
        e.delay = function (a) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime +
                a - this._delay), this._delay = a, this) : this._delay
        };
        e.duration = function (a) {
            return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== a && this.totalTime(a / this._duration * this._totalTime, !0), this) : (this._dirty = !1, this._duration)
        };
        e.totalDuration = function (a) {
            return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
        };
        e.time = function (a, d) {
            return arguments.length ? (this._dirty && this.totalDuration(),
                this.totalTime(a > this._duration ? this._duration : a, d)) : this._time
        };
        e.totalTime = function (a, d, e) {
            if (h || f.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > a && !e && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var b = this._totalDuration, c = this._timeline;
                    if (a > b && !e && (a = b), this._startTime = (this._paused ? this._pauseTime : c._time) - (this._reversed ? b - a : a) / this._timeScale, c._dirty || this._uncache(!1), c._timeline) for (; c._timeline;) c._timeline._time !==
                    (c._startTime + c._totalTime) / c._timeScale && c.totalTime(c._totalTime, !0), c = c._timeline
                }
                this._gc && this._enabled(!0, !1);
                this._totalTime === a && 0 !== this._duration || this.render(a, d, !1)
            }
            return this
        };
        e.progress = e.totalProgress = function (a, d) {
            return arguments.length ? this.totalTime(this.duration() * a, d) : this._time / this.duration()
        };
        e.startTime = function (a) {
            return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
        };
        e.timeScale = function (a) {
            if (!arguments.length) return this._timeScale;
            if (a = a || 1E-10, this._timeline && this._timeline.smoothChildTiming) {
                var d = this._pauseTime, d = d || 0 === d ? d : this._timeline.totalTime();
                this._startTime = d - (d - this._startTime) * this._timeScale / a
            }
            return this._timeScale = a, this._uncache(!1)
        };
        e.reversed = function (a) {
            return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._totalTime, !0)), this) : this._reversed
        };
        e.paused = function (a) {
            if (!arguments.length) return this._paused;
            if (a !=
                this._paused && this._timeline) {
                h || a || f.wake();
                var d = this._timeline, e = d.rawTime(), b = e - this._pauseTime;
                !a && d.smoothChildTiming && (this._startTime += b, this._uncache(!1));
                this._pauseTime = a ? e : null;
                this._paused = a;
                this._active = this.isActive();
                !a && 0 !== b && this._initted && this.duration() && this.render(d.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !a && this._enabled(!0, !1), this
        };
        a = t("core.SimpleTimeline", function (a) {
            Q.call(this, 0, a);
            this.autoRemoveChildren = this.smoothChildTiming =
                !0
        });
        e = a.prototype = new Q;
        e.constructor = a;
        e.kill()._gc = !1;
        e._first = e._last = null;
        e._sortChildren = !1;
        e.add = e.insert = function (a, d) {
            var e, b;
            if (a._startTime = Number(d || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren) for (b = a._startTime; e && e._startTime > b;) e = e._prev;
            return e ? (a._next = e._next, e._next = a) : (a._next = this._first,
                this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._timeline && this._uncache(!0), this
        };
        e._remove = function (a, d) {
            return a.timeline === this && (d || a._enabled(!1, !0), a.timeline = null, a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), this._timeline && this._uncache(!0)), this
        };
        e.render = function (a, d, e) {
            var b, c = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = a; c;) b = c._next, (c._active || a >= c._startTime &&
                !c._paused) && (c._reversed ? c.render((c._dirty ? c.totalDuration() : c._totalDuration) - (a - c._startTime) * c._timeScale, d, e) : c.render((a - c._startTime) * c._timeScale, d, e)), c = b
        };
        e.rawTime = function () {
            return h || f.wake(), this._totalTime
        };
        var D = t("TweenLite", function (a, d, e) {
            if (Q.call(this, d, e), this.render = D.prototype.render, null == a) throw"Cannot tween a null target.";
            this.target = a = "string" != typeof a ? a : D.selector(a) || a;
            var b, f;
            b = a.jquery || a.length && a !== c && a[0] && (a[0] === c || a[0].nodeType && a[0].style && !a.nodeType);
            e =
                this.vars.overwrite;
            if (this._overwrite = e = null == e ? fa[D.defaultOverwrite] : "number" == typeof e ? e >> 0 : fa[e], (b || a instanceof Array || a.push && u(a)) && "number" != typeof a[0]) for (this._targets = f = p.call(a, 0), this._propLookup = [], this._siblings = [], a = 0; f.length > a; a++) (b = f[a]) ? "string" != typeof b ? b.length && b !== c && b[0] && (b[0] === c || b[0].nodeType && b[0].style && !b.nodeType) ? (f.splice(a--, 1), this._targets = f = f.concat(p.call(b, 0))) : (this._siblings[a] = ia(b, this, !1), 1 === e && 1 < this._siblings[a].length && ca(b, this, null, 1, this._siblings[a])) :
                (b = f[a--] = D.selector(b), "string" == typeof b && f.splice(a + 1, 1)) : f.splice(a--, 1); else this._propLookup = {}, this._siblings = ia(a, this, !1), 1 === e && 1 < this._siblings.length && ca(a, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === d && 0 === this._delay && !1 !== this.vars.immediateRender) && this.render(-this._delay, !1, !0)
        }, !0), U = function (a) {
            return a.length && a !== c && a[0] && (a[0] === c || a[0].nodeType && a[0].style && !a.nodeType)
        };
        e = D.prototype = new Q;
        e.constructor = D;
        e.kill()._gc = !1;
        e.ratio = 0;
        e._firstPT = e._targets = e._overwrittenProps =
            e._startAt = null;
        e._notifyPluginsOfEnabled = !1;
        D.version = "1.11.2";
        D.defaultEase = e._ease = new I(null, null, 1, 1);
        D.defaultOverwrite = "auto";
        D.ticker = f;
        D.autoSleep = !0;
        D.selector = c.$ || c.jQuery || function (a) {
            return c.$ ? (D.selector = c.$, c.$(a)) : c.document ? c.document.getElementById("#" === a.charAt(0) ? a.substr(1) : a) : a
        };
        d = D._internals = {isArray: u, isSelector: U};
        var W = D._plugins = {}, E = D._tweenLookup = {}, V = 0, Z = d.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1
            }, fa = {none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0},
            N = Q._rootFramesTimeline = new a, ha = Q._rootTimeline = new a;
        ha._startTime = f.time;
        N._startTime = f.frame;
        ha._active =
            N._active = !0;
        Q._updateRoot = function () {
            if (ha.render((f.time - ha._startTime) * ha._timeScale, !1, !1), N.render((f.frame - N._startTime) * N._timeScale, !1, !1), !(f.frame % 120)) {
                var a, d, e;
                for (e in E) {
                    d = E[e].tweens;
                    for (a = d.length; -1 < --a;) d[a]._gc && d.splice(a, 1);
                    0 === d.length && delete E[e]
                }
                if (e = ha._first, (!e || e._paused) && D.autoSleep && !N._first && 1 === f._listeners.tick.length) {
                    for (; e && e._paused;) e = e._next;
                    e || f.sleep()
                }
            }
        };
        f.addEventListener("tick", Q._updateRoot);
        var ia = function (a, d, e) {
            var b, c, f = a._gsTweenID;
            if (E[f || (a._gsTweenID =
                f = "t" + V++)] || (E[f] = {
                target: a,
                tweens: []
            }), d && (b = E[f].tweens, b[c = b.length] = d, e)) for (; -1 < --c;) b[c] === d && b.splice(c, 1);
            return E[f].tweens
        }, ca = function (a, d, e, b, c) {
            var f, h, g;
            if (1 === b || 4 <= b) {
                a = c.length;
                for (f = 0; a > f; f++) if ((g = c[f]) !== d) g._gc || g._enabled(!1, !1) && (h = !0); else if (5 === b) break;
                return h
            }
            var k, m = d._startTime + 1E-10, p = [], n = 0, A = 0 === d._duration;
            for (f = c.length; -1 < --f;) (g = c[f]) === d || g._gc || g._paused || (g._timeline !== d._timeline ? (k = k || x(d, 0, A), 0 === x(g, k, A) && (p[n++] = g)) : m >= g._startTime && g._startTime + g.totalDuration() /
                g._timeScale + 1E-10 > m && ((A || !g._initted) && 2E-10 >= m - g._startTime || (p[n++] = g)));
            for (f = n; -1 < --f;) g = p[f], 2 === b && g._kill(e, a) && (h = !0), (2 !== b || !g._firstPT && g._initted) && g._enabled(!1, !1) && (h = !0);
            return h
        }, x = function (a, d, e) {
            for (var b = a._timeline, c = b._timeScale, f = a._startTime; b._timeline;) {
                if (f += b._startTime, c *= b._timeScale, b._paused) return -100;
                b = b._timeline
            }
            return f /= c, f > d ? f - d : e && f === d || !a._initted && 2E-10 > f - d ? 1E-10 : (f += a.totalDuration() / a._timeScale / c) > d + 1E-10 ? 0 : f - d - 1E-10
        };
        e._init = function () {
            var a, d, e, b =
                this.vars, c = this._overwrittenProps;
            e = this._duration;
            var f = b.immediateRender, h = b.ease;
            if (b.startAt) {
                if (this._startAt && this._startAt.render(-1, !0), b.startAt.overwrite = 0, b.startAt.immediateRender = !0, this._startAt = D.to(this.target, 0, b.startAt), f) if (0 < this._time) this._startAt = null; else if (0 !== e) return
            } else if (b.runBackwards && 0 !== e) if (this._startAt) this._startAt.render(-1, !0), this._startAt = null; else {
                e = {};
                for (a in b) Z[a] && "autoCSS" !== a || (e[a] = b[a]);
                if (e.overwrite = 0, e.data = "isFromStart", this._startAt = D.to(this.target,
                    0, e), b.immediateRender) {
                    if (0 === this._time) return
                } else this._startAt.render(-1, !0)
            }
            if (this._ease = h ? h instanceof I ? b.easeParams instanceof Array ? h.config.apply(h, b.easeParams) : h : "function" == typeof h ? new I(h, b.easeParams) : T[h] || D.defaultEase : D.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (a = this._targets.length; -1 < --a;) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], c ? c[a] : null) && (d = !0); else d = this._initProps(this.target,
                this._propLookup, this._siblings, c);
            if (d && D._onPluginEvent("_onInitAllProps", this), c && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), b.runBackwards) for (e = this._firstPT; e;) e.s += e.c, e.c = -e.c, e = e._next;
            this._onUpdate = b.onUpdate;
            this._initted = !0
        };
        e._initProps = function (a, d, e, b) {
            var f, h, g, k, m;
            if (null == a) return !1;
            if (!this.vars.css && a.style && a !== c && a.nodeType && W.css && !1 !== this.vars.autoCSS) {
                h = this.vars;
                var x, p = {};
                for (x in h) Z[x] || x in a && "x" !== x && "y" !== x && "width" !== x && "height" !== x &&
                "className" !== x && "border" !== x || !(!W[x] || W[x] && W[x]._autoCSS) || (p[x] = h[x], delete h[x]);
                h.css = p
            }
            for (f in this.vars) {
                if (h = this.vars[f], Z[f]) h && (h instanceof Array || h.push && u(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[f] = this._swapSelfInParams(h, this)); else if (W[f] && (k = new W[f])._onInitTween(a, this.vars[f], this)) {
                    this._firstPT = m = {
                        _next: this._firstPT,
                        t: k,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: f,
                        pg: !0,
                        pr: k._priority
                    };
                    for (h = k._overwriteProps.length; -1 < --h;) d[k._overwriteProps[h]] = this._firstPT;
                    (k._priority ||
                        k._onInitAllProps) && (g = !0);
                    (k._onDisable || k._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = d[f] = m = {
                    _next: this._firstPT,
                    t: a,
                    p: f,
                    f: "function" == typeof a[f],
                    n: f,
                    pg: !1,
                    pr: 0
                }, m.s = m.f ? a[f.indexOf("set") || "function" != typeof a["get" + f.substr(3)] ? f : "get" + f.substr(3)]() : parseFloat(a[f]), m.c = "string" == typeof h && "=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * Number(h.substr(2)) : Number(h) - m.s || 0;
                m && m._next && (m._next._prev = m)
            }
            return b && this._kill(b, a) ? this._initProps(a, d, e, b) : 1 < this._overwrite &&
            this._firstPT && 1 < e.length && ca(a, this, d, this._overwrite, e) ? (this._kill(d, a), this._initProps(a, d, e, b)) : g
        };
        e.render = function (a, d, e) {
            var b, c, f, h, g = this._time, k = this._duration;
            if (a >= k) this._totalTime = this._time = k, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (b = !0, c = "onComplete"), 0 === k && (h = this._rawPrevTime, (0 === a || 0 > h || 1E-10 === h) && h !== a && (e = !0, 1E-10 < h && (c = "onReverseComplete")), this._rawPrevTime = h = !d || a ? a : 1E-10); else if (1E-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ?
                this._ease.getRatio(0) : 0, (0 !== g || 0 === k && 1E-10 < this._rawPrevTime) && (c = "onReverseComplete", b = this._reversed), 0 > a ? (this._active = !1, 0 === k && (0 <= this._rawPrevTime && (e = !0), this._rawPrevTime = h = !d || a ? a : 1E-10)) : this._initted || (e = !0); else if (this._totalTime = this._time = a, this._easeType) {
                f = a / k;
                var m = this._easeType, x = this._easePower;
                (1 === m || 3 === m && .5 <= f) && (f = 1 - f);
                3 === m && (f *= 2);
                1 === x ? f *= f : 2 === x ? f *= f * f : 3 === x ? f *= f * f * f : 4 === x && (f *= f * f * f * f);
                this.ratio = 1 === m ? 1 - f : 2 === m ? f : .5 > a / k ? f / 2 : 1 - f / 2
            } else this.ratio = this._ease.getRatio(a /
                k);
            if (this._time !== g || e) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    this._time && !b ? this.ratio = this._ease.getRatio(this._time / k) : b && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                this._active || !this._paused && this._time !== g && 0 <= a && (this._active = !0);
                0 !== g || (this._startAt && (0 <= a ? this._startAt.render(a, d, e) : c || (c = "_dummyGS")), !this.vars.onStart || 0 === this._time && 0 !== k || !d && this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || C));
                for (f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, d, e), d || e && 0 === this._time && 0 === g || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || C));
                c && (this._gc || (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, d, e), b && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !d && this.vars[c] && this.vars[c].apply(this.vars[c +
                "Scope"] || this, this.vars[c + "Params"] || C), 0 === k && 1E-10 === this._rawPrevTime && 1E-10 !== h && (this._rawPrevTime = 0)))
            }
        };
        e._kill = function (a, d) {
            if ("all" === a && (a = null), null == a && (null == d || d === this.target)) return this._enabled(!1, !1);
            d = "string" != typeof d ? d || this._targets || this.target : D.selector(d) || d;
            var e, b, c, f, h, g, k;
            if ((u(d) || U(d)) && "number" != typeof d[0]) for (e = d.length; -1 < --e;) this._kill(a, d[e]) && (g = !0); else {
                if (this._targets) for (e = this._targets.length; -1 < --e;) {
                    if (d === this._targets[e]) {
                        h = this._propLookup[e] ||
                            {};
                        this._overwrittenProps = this._overwrittenProps || [];
                        b = this._overwrittenProps[e] = a ? this._overwrittenProps[e] || {} : "all";
                        break
                    }
                } else {
                    if (d !== this.target) return !1;
                    h = this._propLookup;
                    b = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                }
                if (h) {
                    e = a || h;
                    k = a !== b && "all" !== b && a !== h && ("object" != typeof a || !a._tempKill);
                    for (c in e) (f = h[c]) && (f.pg && f.t._kill(e) && (g = !0), f.pg && 0 !== f.t._overwriteProps.length || (f._prev ? f._prev._next = f._next : f === this._firstPT && (this._firstPT = f._next), f._next && (f._next._prev = f._prev),
                        f._next = f._prev = null), delete h[c]), k && (b[c] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return g
        };
        e.invalidate = function () {
            return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
        };
        e._enabled = function (a, d) {
            if (h || f.wake(), a && this._gc) {
                var e, b = this._targets;
                if (b) for (e = b.length; -1 < --e;) this._siblings[e] =
                    ia(b[e], this, !0); else this._siblings = ia(this.target, this, !0)
            }
            return Q.prototype._enabled.call(this, a, d), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
        };
        D.to = function (a, d, e) {
            return new D(a, d, e)
        };
        D.from = function (a, d, e) {
            return e.runBackwards = !0, e.immediateRender = 0 != e.immediateRender, new D(a, d, e)
        };
        D.fromTo = function (a, d, e, b) {
            return b.startAt = e, b.immediateRender = 0 != b.immediateRender && 0 != e.immediateRender, new D(a, d, b)
        };
        D.delayedCall = function (a, d, e, b, c) {
            return new D(d,
                0, {
                    delay: a,
                    onComplete: d,
                    onCompleteParams: e,
                    onCompleteScope: b,
                    onReverseComplete: d,
                    onReverseCompleteParams: e,
                    onReverseCompleteScope: b,
                    immediateRender: !1,
                    useFrames: c,
                    overwrite: 0
                })
        };
        D.set = function (a, d) {
            return new D(a, 0, d)
        };
        D.getTweensOf = function (a, d) {
            if (null == a) return [];
            a = "string" != typeof a ? a : D.selector(a) || a;
            var e, b, c, f;
            if ((u(a) || U(a)) && "number" != typeof a[0]) {
                e = a.length;
                for (b = []; -1 < --e;) b = b.concat(D.getTweensOf(a[e], d));
                for (e = b.length; -1 < --e;) for (f = b[e], c = e; -1 < --c;) f === b[c] && b.splice(e, 1)
            } else for (b =
                            ia(a).concat(), e = b.length; -1 < --e;) (b[e]._gc || d && !b[e].isActive()) && b.splice(e, 1);
            return b
        };
        D.killTweensOf = D.killDelayedCallsTo = function (a, d, e) {
            "object" == typeof d && (e = d, d = !1);
            d = D.getTweensOf(a, d);
            for (var b = d.length; -1 < --b;) d[b]._kill(e, a)
        };
        var A = t("plugins.TweenPlugin", function (a, d) {
            this._overwriteProps = (a || "").split(",");
            this._propName = this._overwriteProps[0];
            this._priority = d || 0;
            this._super = A.prototype
        }, !0);
        if (e = A.prototype, A.version = "1.10.1", A.API = 2, e._firstPT = null, e._addTween = function (a, d, e, b, c,
                                                                                                         f) {
            var h, g;
            return null != b && (h = "number" == typeof b || "=" !== b.charAt(1) ? Number(b) - e : parseInt(b.charAt(0) + "1", 10) * Number(b.substr(2))) ? (this._firstPT = g = {
                _next: this._firstPT,
                t: a,
                p: d,
                s: e,
                c: h,
                f: "function" == typeof a[d],
                n: c || d,
                r: f
            }, g._next && (g._next._prev = g), g) : void 0
        }, e.setRatio = function (a) {
            for (var d, e = this._firstPT; e;) d = e.c * a + e.s, e.r ? d = 0 | d + (0 < d ? .5 : -.5) : 1E-6 > d && -1E-6 < d && (d = 0), e.f ? e.t[e.p](d) : e.t[e.p] = d, e = e._next
        }, e._kill = function (a) {
            var d, e = this._overwriteProps, b = this._firstPT;
            if (null != a[this._propName]) this._overwriteProps =
                []; else for (d = e.length; -1 < --d;) null != a[e[d]] && e.splice(d, 1);
            for (; b;) null != a[b.n] && (b._next && (b._next._prev = b._prev), b._prev ? (b._prev._next = b._next, b._prev = null) : this._firstPT === b && (this._firstPT = b._next)), b = b._next;
            return !1
        }, e._roundProps = function (a, d) {
            for (var e = this._firstPT; e;) (a[this._propName] || null != e.n && a[e.n.split(this._propName + "_").join("")]) && (e.r = d), e = e._next
        }, D._onPluginEvent = function (a, d) {
            var e, b, c, f, h, g = d._firstPT;
            if ("_onInitAllProps" === a) {
                for (; g;) {
                    h = g._next;
                    for (b = c; b && b.pr > g.pr;) b =
                        b._next;
                    (g._prev = b ? b._prev : f) ? g._prev._next = g : c = g;
                    (g._next = b) ? b._prev = g : f = g;
                    g = h
                }
                g = d._firstPT = c
            }
            for (; g;) g.pg && "function" == typeof g.t[a] && g.t[a]() && (e = !0), g = g._next;
            return e
        }, A.activate = function (a) {
            for (var d = a.length; -1 < --d;) a[d].API === A.API && (W[(new a[d])._propName] = a[d]);
            return !0
        }, y.plugin = function (a) {
            if (!(a && a.propName && a.init && a.API)) throw"illegal plugin definition.";
            var d, e = a.propName, b = a.priority || 0, c = a.overwriteProps, f = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_roundProps",
                    initAll: "_onInitAllProps"
                },
                h = t("plugins." + e.charAt(0).toUpperCase() + e.substr(1) + "Plugin", function () {
                    A.call(this, e, b);
                    this._overwriteProps = c || []
                }, !0 === a.global), g = h.prototype = new A(e);
            g.constructor = h;
            h.API = a.API;
            for (d in f) "function" == typeof a[d] && (g[f[d]] = a[d]);
            return h.version = a.version, A.activate([h]), h
        }, a = c._gsQueue) {
            for (d = 0; a.length > d; d++) a[d]();
            for (e in v) v[e].func || c.console.log("GSAP encountered missing dependency: com.greensock." + e)
        }
        h = !1
    }
})(window);
this.createjs = this.createjs || {};
createjs.extend = function (c, b) {
    function a() {
        this.constructor = c
    }

    return a.prototype = b.prototype, c.prototype = new a
};
this.createjs = this.createjs || {};
createjs.promote = function (c, b) {
    var a = c.prototype, d = Object.getPrototypeOf && Object.getPrototypeOf(a) || a.__proto__;
    if (d) {
        a[(b += "_") + "constructor"] = d.constructor;
        for (var e in d) a.hasOwnProperty(e) && "function" == typeof d[e] && (a[b + e] = d[e])
    }
    return c
};
this.createjs = this.createjs || {};
createjs.indexOf = function (c, b) {
    for (var a = 0, d = c.length; d > a; a++) if (b === c[a]) return a;
    return -1
};
this.createjs = this.createjs || {};
(function () {
    function c(a, d, e) {
        this.type = a;
        this.currentTarget = this.target = null;
        this.eventPhase = 0;
        this.bubbles = !!d;
        this.cancelable = !!e;
        this.timeStamp = (new Date).getTime();
        this.removed = this.immediatePropagationStopped = this.propagationStopped = this.defaultPrevented = !1
    }

    var b = c.prototype;
    b.preventDefault = function () {
        this.defaultPrevented = this.cancelable && !0
    };
    b.stopPropagation = function () {
        this.propagationStopped = !0
    };
    b.stopImmediatePropagation = function () {
        this.immediatePropagationStopped = this.propagationStopped =
            !0
    };
    b.remove = function () {
        this.removed = !0
    };
    b.clone = function () {
        return new c(this.type, this.bubbles, this.cancelable)
    };
    b.set = function (a) {
        for (var d in a) this[d] = a[d];
        return this
    };
    b.toString = function () {
        return "[Event (type=" + this.type + ")]"
    };
    createjs.Event = c
})();
this.createjs = this.createjs || {};
(function () {
    function c() {
        this._captureListeners = this._listeners = null
    }

    var b = c.prototype;
    c.initialize = function (a) {
        a.addEventListener = b.addEventListener;
        a.on = b.on;
        a.removeEventListener = a.off = b.removeEventListener;
        a.removeAllEventListeners = b.removeAllEventListeners;
        a.hasEventListener = b.hasEventListener;
        a.dispatchEvent = b.dispatchEvent;
        a._dispatchEvent = b._dispatchEvent;
        a.willTrigger = b.willTrigger
    };
    b.addEventListener = function (a, d, e) {
        var b;
        b = e ? this._captureListeners = this._captureListeners || {} : this._listeners =
            this._listeners || {};
        var c = b[a];
        return c && this.removeEventListener(a, d, e), c = b[a], c ? c.push(d) : b[a] = [d], d
    };
    b.on = function (a, d, e, b, c, k) {
        return d.handleEvent && (e = e || d, d = d.handleEvent), e = e || this, this.addEventListener(a, function (a) {
            d.call(e, a, c);
            b && a.remove()
        }, k)
    };
    b.removeEventListener = function (a, d, e) {
        if (e = e ? this._captureListeners : this._listeners) {
            var b = e[a];
            if (b) for (var c = 0, k = b.length; k > c; c++) if (b[c] == d) {
                1 == k ? delete e[a] : b.splice(c, 1);
                break
            }
        }
    };
    b.off = b.removeEventListener;
    b.removeAllEventListeners = function (a) {
        a ?
            (this._listeners && delete this._listeners[a], this._captureListeners && delete this._captureListeners[a]) : this._listeners = this._captureListeners = null
    };
    b.dispatchEvent = function (a, d, e) {
        if ("string" == typeof a) {
            var b = this._listeners;
            if (!(d || b && b[a])) return !0;
            a = new createjs.Event(a, d, e)
        } else a.target && a.clone && (a = a.clone());
        try {
            a.target = this
        } catch (c) {
        }
        if (a.bubbles && this.parent) {
            e = this;
            for (d = [e]; e.parent;) d.push(e = e.parent);
            b = d.length;
            for (e = b - 1; 0 <= e && !a.propagationStopped; e--) d[e]._dispatchEvent(a, 1 + (0 == e));
            for (e = 1; b > e && !a.propagationStopped; e++) d[e]._dispatchEvent(a, 3)
        } else this._dispatchEvent(a, 2);
        return !a.defaultPrevented
    };
    b.hasEventListener = function (a) {
        var d = this._listeners, e = this._captureListeners;
        return !!(d && d[a] || e && e[a])
    };
    b.willTrigger = function (a) {
        for (var d = this; d;) {
            if (d.hasEventListener(a)) return !0;
            d = d.parent
        }
        return !1
    };
    b.toString = function () {
        return "[EventDispatcher]"
    };
    b._dispatchEvent = function (a, d) {
        var e, b = 1 == d ? this._captureListeners : this._listeners;
        if (a && b && (b = b[a.type]) && (e = b.length)) {
            try {
                a.currentTarget =
                    this
            } catch (c) {
            }
            try {
                a.eventPhase = d
            } catch (k) {
            }
            a.removed = !1;
            for (var b = b.slice(), m = 0; e > m && !a.immediatePropagationStopped; m++) {
                var p = b[m];
                p.handleEvent ? p.handleEvent(a) : p(a);
                a.removed && (this.off(a.type, p, 1 == d), a.removed = !1)
            }
        }
    };
    createjs.EventDispatcher = c
})();
this.createjs = this.createjs || {};
(function () {
    function c() {
        throw"Ticker cannot be instantiated.";
    }

    c.RAF_SYNCHED = "synched";
    c.RAF = "raf";
    c.TIMEOUT = "timeout";
    c.useRAF = !1;
    c.timingMode = null;
    c.maxDelta = 0;
    c.paused = !1;
    c.removeEventListener = null;
    c.removeAllEventListeners = null;
    c.dispatchEvent = null;
    c.hasEventListener = null;
    c._listeners = null;
    createjs.EventDispatcher.initialize(c);
    c._addEventListener = c.addEventListener;
    c.addEventListener = function () {
        return !c._inited && c.init(), c._addEventListener.apply(c, arguments)
    };
    c._inited = !1;
    c._startTime = 0;
    c._pausedTime =
        0;
    c._ticks = 0;
    c._pausedTicks = 0;
    c._interval = 50;
    c._lastTime = 0;
    c._times = null;
    c._tickTimes = null;
    c._timerId = null;
    c._raf = !0;
    c.setInterval = function (a) {
        c._interval = a;
        c._inited && c._setupTick()
    };
    c.getInterval = function () {
        return c._interval
    };
    c.setFPS = function (a) {
        c.setInterval(1E3 / a)
    };
    c.getFPS = function () {
        return 1E3 / c._interval
    };
    try {
        Object.defineProperties(c, {
            interval: {get: c.getInterval, set: c.setInterval},
            framerate: {get: c.getFPS, set: c.setFPS}
        })
    } catch (b) {
        console.log(b)
    }
    c.init = function () {
        c._inited || (c._inited = !0,
            c._times = [], c._tickTimes = [], c._startTime = c._getTime(), c._times.push(c._lastTime = 0), c.interval = c._interval)
    };
    c.reset = function () {
        if (c._raf) {
            var a = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
            a && a(c._timerId)
        } else clearTimeout(c._timerId);
        c.removeAllEventListeners("tick");
        c._timerId = c._times = c._tickTimes = null;
        c._startTime = c._lastTime = c._ticks = 0;
        c._inited = !1
    };
    c.getMeasuredTickTime = function (a) {
        var e =
            0, b = c._tickTimes;
        if (!b || 1 > b.length) return -1;
        a = Math.min(b.length, a || 0 | c.getFPS());
        for (var h = 0; a > h; h++) e += b[h];
        return e / a
    };
    c.getMeasuredFPS = function (a) {
        var e = c._times;
        return !e || 2 > e.length ? -1 : (a = Math.min(e.length - 1, a || 0 | c.getFPS()), 1E3 / ((e[0] - e[a]) / a))
    };
    c.setPaused = function (a) {
        c.paused = a
    };
    c.getPaused = function () {
        return c.paused
    };
    c.getTime = function (a) {
        return c._startTime ? c._getTime() - (a ? c._pausedTime : 0) : -1
    };
    c.getEventTime = function (a) {
        return c._startTime ? (c._lastTime || c._startTime) - (a ? c._pausedTime : 0) :
            -1
    };
    c.getTicks = function (a) {
        return c._ticks - (a ? c._pausedTicks : 0)
    };
    c._handleSynch = function () {
        c._timerId = null;
        c._setupTick();
        c._getTime() - c._lastTime >= .97 * (c._interval - 1) && c._tick()
    };
    c._handleRAF = function () {
        c._timerId = null;
        c._setupTick();
        c._tick()
    };
    c._handleTimeout = function () {
        c._timerId = null;
        c._setupTick();
        c._tick()
    };
    c._setupTick = function () {
        if (null == c._timerId) {
            var a = c.timingMode || c.useRAF && c.RAF_SYNCHED;
            if (a == c.RAF_SYNCHED || a == c.RAF) {
                var e = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
                if (e) return c._timerId = e(a == c.RAF ? c._handleRAF : c._handleSynch), void(c._raf = !0)
            }
            c._raf = !1;
            c._timerId = setTimeout(c._handleTimeout, c._interval)
        }
    };
    c._tick = function () {
        var a = c.paused, e = c._getTime(), b = e - c._lastTime;
        if (c._lastTime = e, c._ticks++, a && (c._pausedTicks++, c._pausedTime += b), c.hasEventListener("tick")) {
            var h = new createjs.Event("tick"), k = c.maxDelta;
            h.delta = k && b > k ? k : b;
            h.paused = a;
            h.time = e;
            h.runTime = e - c._pausedTime;
            c.dispatchEvent(h)
        }
        for (c._tickTimes.unshift(c._getTime() - e); 100 < c._tickTimes.length;) c._tickTimes.pop();
        for (c._times.unshift(e); 100 < c._times.length;) c._times.pop()
    };
    var a = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
    c._getTime = function () {
        return (a && a.call(performance) || (new Date).getTime()) - c._startTime
    };
    createjs.Ticker = c
})();
this.createjs = this.createjs || {};
(function () {
    function c() {
        throw"UID cannot be instantiated";
    }

    c._nextID = 0;
    c.get = function () {
        return c._nextID++
    };
    createjs.UID = c
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, e, b, c, k, m, p, q, u, v, z) {
        this.Event_constructor(a, e, b);
        this.stageX = c;
        this.stageY = k;
        this.rawX = null == u ? c : u;
        this.rawY = null == v ? k : v;
        this.nativeEvent = m;
        this.pointerID = p;
        this.primary = !!q;
        this.relatedTarget = z
    }

    var b = createjs.extend(c, createjs.Event);
    b._get_localX = function () {
        return this.currentTarget.globalToLocal(this.rawX, this.rawY).x
    };
    b._get_localY = function () {
        return this.currentTarget.globalToLocal(this.rawX, this.rawY).y
    };
    b._get_isTouch = function () {
        return -1 !== this.pointerID
    };
    try {
        Object.defineProperties(b,
            {localX: {get: b._get_localX}, localY: {get: b._get_localY}, isTouch: {get: b._get_isTouch}})
    } catch (a) {
    }
    b.clone = function () {
        return new c(this.type, this.bubbles, this.cancelable, this.stageX, this.stageY, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY)
    };
    b.toString = function () {
        return "[MouseEvent (type=" + this.type + " stageX=" + this.stageX + " stageY=" + this.stageY + ")]"
    };
    createjs.MouseEvent = createjs.promote(c, "Event")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, d, e, b, c, k) {
        this.setValues(a, d, e, b, c, k)
    }

    var b = c.prototype;
    c.DEG_TO_RAD = Math.PI / 180;
    c.identity = null;
    b.setValues = function (a, d, e, b, c, k) {
        return this.a = null == a ? 1 : a, this.b = d || 0, this.c = e || 0, this.d = null == b ? 1 : b, this.tx = c || 0, this.ty = k || 0, this
    };
    b.append = function (a, d, e, b, c, k) {
        var m = this.a, p = this.b, q = this.c, u = this.d;
        return (1 != a || 0 != d || 0 != e || 1 != b) && (this.a = m * a + q * d, this.b = p * a + u * d, this.c = m * e + q * b, this.d = p * e + u * b), this.tx = m * c + q * k + this.tx, this.ty = p * c + u * k + this.ty, this
    };
    b.prepend = function (a, d, e,
                          b, c, k) {
        var m = this.a, p = this.c, q = this.tx;
        return this.a = a * m + e * this.b, this.b = d * m + b * this.b, this.c = a * p + e * this.d, this.d = d * p + b * this.d, this.tx = a * q + e * this.ty + c, this.ty = d * q + b * this.ty + k, this
    };
    b.appendMatrix = function (a) {
        return this.append(a.a, a.b, a.c, a.d, a.tx, a.ty)
    };
    b.prependMatrix = function (a) {
        return this.prepend(a.a, a.b, a.c, a.d, a.tx, a.ty)
    };
    b.appendTransform = function (a, d, e, b, h, k, m, p, q) {
        if (h % 360) {
            var u = h * c.DEG_TO_RAD;
            h = Math.cos(u);
            u = Math.sin(u)
        } else h = 1, u = 0;
        return k || m ? (k *= c.DEG_TO_RAD, m *= c.DEG_TO_RAD, this.append(Math.cos(m),
            Math.sin(m), -Math.sin(k), Math.cos(k), a, d), this.append(h * e, u * e, -u * b, h * b, 0, 0)) : this.append(h * e, u * e, -u * b, h * b, a, d), (p || q) && (this.tx -= p * this.a + q * this.c, this.ty -= p * this.b + q * this.d), this
    };
    b.prependTransform = function (a, d, e, b, h, k, m, p, q) {
        if (h % 360) {
            var u = h * c.DEG_TO_RAD;
            h = Math.cos(u);
            u = Math.sin(u)
        } else h = 1, u = 0;
        return (p || q) && (this.tx -= p, this.ty -= q), k || m ? (k *= c.DEG_TO_RAD, m *= c.DEG_TO_RAD, this.prepend(h * e, u * e, -u * b, h * b, 0, 0), this.prepend(Math.cos(m), Math.sin(m), -Math.sin(k), Math.cos(k), a, d)) : this.prepend(h * e, u * e, -u *
            b, h * b, a, d), this
    };
    b.rotate = function (a) {
        a *= c.DEG_TO_RAD;
        var d = Math.cos(a);
        a = Math.sin(a);
        var e = this.a, b = this.b;
        return this.a = e * d + this.c * a, this.b = b * d + this.d * a, this.c = -e * a + this.c * d, this.d = -b * a + this.d * d, this
    };
    b.skew = function (a, d) {
        return a *= c.DEG_TO_RAD, d *= c.DEG_TO_RAD, this.append(Math.cos(d), Math.sin(d), -Math.sin(a), Math.cos(a), 0, 0), this
    };
    b.scale = function (a, d) {
        return this.a *= a, this.b *= a, this.c *= d, this.d *= d, this
    };
    b.translate = function (a, d) {
        return this.tx += this.a * a + this.c * d, this.ty += this.b * a + this.d * d, this
    };
    b.identity = function () {
        return this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this
    };
    b.invert = function () {
        var a = this.a, d = this.b, e = this.c, b = this.d, c = this.tx, k = a * b - d * e;
        return this.a = b / k, this.b = -d / k, this.c = -e / k, this.d = a / k, this.tx = (e * this.ty - b * c) / k, this.ty = -(a * this.ty - d * c) / k, this
    };
    b.isIdentity = function () {
        return 0 === this.tx && 0 === this.ty && 1 === this.a && 0 === this.b && 0 === this.c && 1 === this.d
    };
    b.equals = function (a) {
        return this.tx === a.tx && this.ty === a.ty && this.a === a.a && this.b === a.b && this.c === a.c && this.d === a.d
    };
    b.transformPoint =
        function (a, d, e) {
            return e = e || {}, e.x = a * this.a + d * this.c + this.tx, e.y = a * this.b + d * this.d + this.ty, e
        };
    b.decompose = function (a) {
        null == a && (a = {});
        a.x = this.tx;
        a.y = this.ty;
        a.scaleX = Math.sqrt(this.a * this.a + this.b * this.b);
        a.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
        var d = Math.atan2(-this.c, this.d), e = Math.atan2(this.b, this.a);
        return 1E-5 > Math.abs(1 - d / e) ? (a.rotation = e / c.DEG_TO_RAD, 0 > this.a && 0 <= this.d && (a.rotation += 0 >= a.rotation ? 180 : -180), a.skewX = a.skewY = 0) : (a.skewX = d / c.DEG_TO_RAD, a.skewY = e / c.DEG_TO_RAD), a
    };
    b.copy =
        function (a) {
            return this.setValues(a.a, a.b, a.c, a.d, a.tx, a.ty)
        };
    b.clone = function () {
        return new c(this.a, this.b, this.c, this.d, this.tx, this.ty)
    };
    b.toString = function () {
        return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]"
    };
    c.identity = new c;
    createjs.Matrix2D = c
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, d, e, b, c) {
        this.setValues(a, d, e, b, c)
    }

    var b = c.prototype;
    b.setValues = function (a, d, e, b, c) {
        return this.visible = null == a ? !0 : !!a, this.alpha = null == d ? 1 : d, this.shadow = e, this.compositeOperation = e, this.matrix = c || this.matrix && this.matrix.identity() || new createjs.Matrix2D, this
    };
    b.append = function (a, d, e, b, c) {
        return this.alpha *= d, this.shadow = e || this.shadow, this.compositeOperation = b || this.compositeOperation, this.visible = this.visible && a, c && this.matrix.appendMatrix(c), this
    };
    b.prepend = function (a,
                          d, e, b, c) {
        return this.alpha *= d, this.shadow = this.shadow || e, this.compositeOperation = this.compositeOperation || b, this.visible = this.visible && a, c && this.matrix.prependMatrix(c), this
    };
    b.identity = function () {
        return this.visible = !0, this.alpha = 1, this.shadow = this.compositeOperation = null, this.matrix.identity(), this
    };
    b.clone = function () {
        return new c(this.alpha, this.shadow, this.compositeOperation, this.visible, this.matrix.clone())
    };
    createjs.DisplayProps = c
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, d) {
        this.setValues(a, d)
    }

    var b = c.prototype;
    b.setValues = function (a, d) {
        return this.x = a || 0, this.y = d || 0, this
    };
    b.copy = function (a) {
        return this.x = a.x, this.y = a.y, this
    };
    b.clone = function () {
        return new c(this.x, this.y)
    };
    b.toString = function () {
        return "[Point (x=" + this.x + " y=" + this.y + ")]"
    };
    createjs.Point = c
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, d, e, b) {
        this.setValues(a, d, e, b)
    }

    var b = c.prototype;
    b.setValues = function (a, d, e, b) {
        return this.x = a || 0, this.y = d || 0, this.width = e || 0, this.height = b || 0, this
    };
    b.extend = function (a, d, e, b) {
        return e = e || 0, b = b || 0, a + e > this.x + this.width && (this.width = a + e - this.x), d + b > this.y + this.height && (this.height = d + b - this.y), a < this.x && (this.width += this.x - a, this.x = a), d < this.y && (this.height += this.y - d, this.y = d), this
    };
    b.pad = function (a, d, e, b) {
        return this.x -= d, this.y -= a, this.width += d + b, this.height += a + e, this
    };
    b.copy =
        function (a) {
            return this.setValues(a.x, a.y, a.width, a.height)
        };
    b.contains = function (a, d, e, b) {
        return e = e || 0, b = b || 0, a >= this.x && a + e <= this.x + this.width && d >= this.y && d + b <= this.y + this.height
    };
    b.union = function (a) {
        return this.clone().extend(a.x, a.y, a.width, a.height)
    };
    b.intersection = function (a) {
        var d = a.x, e = a.y, b = d + a.width;
        a = e + a.height;
        return this.x > d && (d = this.x), this.y > e && (e = this.y), this.x + this.width < b && (b = this.x + this.width), this.y + this.height < a && (a = this.y + this.height), d >= b || e >= a ? null : new c(d, e, b - d, a - e)
    };
    b.intersects =
        function (a) {
            return a.x <= this.x + this.width && this.x <= a.x + a.width && a.y <= this.y + this.height && this.y <= a.y + a.height
        };
    b.isEmpty = function () {
        return 0 >= this.width || 0 >= this.height
    };
    b.clone = function () {
        return new c(this.x, this.y, this.width, this.height)
    };
    b.toString = function () {
        return "[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]"
    };
    createjs.Rectangle = c
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, e, b, c, k, m, p) {
        a.addEventListener && (this.target = a, this.overLabel = null == b ? "over" : b, this.outLabel = null == e ? "out" : e, this.downLabel = null == c ? "down" : c, this.play = k, this._isPressed = !1, this._isOver = !1, this._enabled = !1, a.mouseChildren = !1, this.enabled = !0, this.handleEvent({}), m && (p && (m.actionsEnabled = !1, m.gotoAndStop && m.gotoAndStop(p)), a.hitArea = m))
    }

    var b = c.prototype;
    b.setEnabled = function (a) {
        if (a != this._enabled) {
            var e = this.target;
            (this._enabled = a) ? (e.cursor = "pointer", e.addEventListener("rollover",
                this), e.addEventListener("rollout", this), e.addEventListener("mousedown", this), e.addEventListener("pressup", this), e._reset && (e.__reset = e._reset, e._reset = this._reset)) : (e.cursor = null, e.removeEventListener("rollover", this), e.removeEventListener("rollout", this), e.removeEventListener("mousedown", this), e.removeEventListener("pressup", this), e.__reset && (e._reset = e.__reset, delete e.__reset))
        }
    };
    b.getEnabled = function () {
        return this._enabled
    };
    try {
        Object.defineProperties(b, {enabled: {get: b.getEnabled, set: b.setEnabled}})
    } catch (a) {
    }
    b.toString =
        function () {
            return "[ButtonHelper]"
        };
    b.handleEvent = function (a) {
        var e, b = this.target;
        a = a.type;
        "mousedown" == a ? (this._isPressed = !0, e = this.downLabel) : "pressup" == a ? (this._isPressed = !1, e = this._isOver ? this.overLabel : this.outLabel) : "rollover" == a ? (this._isOver = !0, e = this._isPressed ? this.downLabel : this.overLabel) : (this._isOver = !1, e = this._isPressed ? this.overLabel : this.outLabel);
        this.play ? b.gotoAndPlay && b.gotoAndPlay(e) : b.gotoAndStop && b.gotoAndStop(e)
    };
    b._reset = function () {
        var a = this.paused;
        this.__reset();
        this.paused =
            a
    };
    createjs.ButtonHelper = c
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, d, e, b) {
        this.color = a || "black";
        this.offsetX = d || 0;
        this.offsetY = e || 0;
        this.blur = b || 0
    }

    var b = c.prototype;
    c.identity = new c("transparent", 0, 0, 0);
    b.toString = function () {
        return "[Shadow]"
    };
    b.clone = function () {
        return new c(this.color, this.offsetX, this.offsetY, this.blur)
    };
    createjs.Shadow = c
})();
this.createjs = this.createjs || {};
(function () {
    function c(a) {
        this.EventDispatcher_constructor();
        this.complete = !0;
        this.framerate = 0;
        this._data = this._images = this._frames = this._animations = null;
        this._margin = this._spacing = this._regY = this._regX = this._numFrames = this._frameWidth = this._frameHeight = this._loadCount = 0;
        this._parseData(a)
    }

    var b = createjs.extend(c, createjs.EventDispatcher);
    b.getAnimations = function () {
        return this._animations.slice()
    };
    try {
        Object.defineProperties(b, {animations: {get: b.getAnimations}})
    } catch (a) {
    }
    b.getNumFrames = function (a) {
        if (null ==
            a) return this._frames ? this._frames.length : this._numFrames || 0;
        a = this._data[a];
        return null == a ? 0 : a.frames.length
    };
    b.getAnimation = function (a) {
        return this._data[a]
    };
    b.getFrame = function (a) {
        var e;
        return this._frames && (e = this._frames[a]) ? e : null
    };
    b.getFrameBounds = function (a, e) {
        var b = this.getFrame(a);
        return b ? (e || new createjs.Rectangle).setValues(-b.regX, -b.regY, b.rect.width, b.rect.height) : null
    };
    b.toString = function () {
        return "[SpriteSheet]"
    };
    b.clone = function () {
        throw"SpriteSheet cannot be cloned.";
    };
    b._parseData =
        function (a) {
            var e, b, c;
            if (null != a) {
                if (this.framerate = a.framerate || 0, a.images && 0 < (b = a.images.length)) for (c = this._images = [], e = 0; b > e; e++) {
                    var k = a.images[e];
                    if ("string" == typeof k) {
                        var m = k, k = document.createElement("img");
                        k.src = m
                    }
                    c.push(k);
                    k.getContext || k.naturalWidth || (this._loadCount++, this.complete = !1, function (a) {
                        k.onload = function () {
                            a._handleImageLoad()
                        }
                    }(this))
                }
                if (null != a.frames) if (a.frames instanceof Array) for (this._frames = [], c = a.frames, e = 0, b = c.length; b > e; e++) m = c[e], this._frames.push({
                    image: this._images[m[4] ?
                        m[4] : 0],
                    rect: new createjs.Rectangle(m[0], m[1], m[2], m[3]),
                    regX: m[5] || 0,
                    regY: m[6] || 0
                }); else b = a.frames, this._frameWidth = b.width, this._frameHeight = b.height, this._regX = b.regX || 0, this._regY = b.regY || 0, this._spacing = b.spacing || 0, this._margin = b.margin || 0, this._numFrames = b.count, 0 == this._loadCount && this._calculateFrames();
                if (this._animations = [], null != (b = a.animations)) {
                    this._data = {};
                    for (var p in b) {
                        a = {name: p};
                        m = b[p];
                        if ("number" == typeof m) c = a.frames = [m]; else if (m instanceof Array) if (1 == m.length) a.frames = [m[0]];
                        else for (a.speed = m[3], a.next = m[2], c = a.frames = [], e = m[0]; e <= m[1]; e++) c.push(e); else a.speed = m.speed, a.next = m.next, e = m.frames, c = a.frames = "number" == typeof e ? [e] : e.slice(0);
                        !0 !== a.next && void 0 !== a.next || (a.next = p);
                        (!1 === a.next || 2 > c.length && a.next == p) && (a.next = null);
                        a.speed || (a.speed = 1);
                        this._animations.push(p);
                        this._data[p] = a
                    }
                }
            }
        };
    b._handleImageLoad = function () {
        0 == --this._loadCount && (this._calculateFrames(), this.complete = !0, this.dispatchEvent("complete"))
    };
    b._calculateFrames = function () {
        if (!this._frames &&
            0 != this._frameWidth) {
            this._frames = [];
            var a = this._numFrames || 1E5, e = 0, b = this._frameWidth, c = this._frameHeight, k = this._spacing,
                m = this._margin, p = 0, q = this._images;
            a:for (; p < q.length; p++) for (var u = q[p], v = u.width, z = u.height, y = m; z - m - c >= y;) {
                for (var t = m; v - m - b >= t;) {
                    if (e >= a) break a;
                    e++;
                    this._frames.push({
                        image: u,
                        rect: new createjs.Rectangle(t, y, b, c),
                        regX: this._regX,
                        regY: this._regY
                    });
                    t += b + k
                }
                y += c + k
            }
            this._numFrames = e
        }
    };
    createjs.SpriteSheet = createjs.promote(c, "EventDispatcher")
})();
this.createjs = this.createjs || {};
(function () {
    function c() {
        this._oldStrokeDash = this._strokeDash = this._oldStrokeStyle = this._strokeStyle = this._stroke = this.command = null;
        this._strokeIgnoreScale = !1;
        this._fill = null;
        this._instructions = [];
        this._commitIndex = 0;
        this._activeInstructions = [];
        this._dirty = !1;
        this._storeIndex = 0;
        this.clear()
    }

    var b = c.prototype;
    c.getRGB = function (a, d, b, c) {
        return null != a && null == b && (c = d, b = 255 & a, d = a >> 8 & 255, a = a >> 16 & 255), null == c ? "rgb(" + a + "," + d + "," + b + ")" : "rgba(" + a + "," + d + "," + b + "," + c + ")"
    };
    c.getHSL = function (a, d, b, c) {
        return null ==
        c ? "hsl(" + a % 360 + "," + d + "%," + b + "%)" : "hsla(" + a % 360 + "," + d + "%," + b + "%," + c + ")"
    };
    c.BASE_64 = {
        A: 0,
        B: 1,
        C: 2,
        D: 3,
        E: 4,
        F: 5,
        G: 6,
        H: 7,
        I: 8,
        J: 9,
        K: 10,
        L: 11,
        M: 12,
        N: 13,
        O: 14,
        P: 15,
        Q: 16,
        R: 17,
        S: 18,
        T: 19,
        U: 20,
        V: 21,
        W: 22,
        X: 23,
        Y: 24,
        Z: 25,
        a: 26,
        b: 27,
        c: 28,
        d: 29,
        e: 30,
        f: 31,
        g: 32,
        h: 33,
        i: 34,
        j: 35,
        k: 36,
        l: 37,
        m: 38,
        n: 39,
        o: 40,
        p: 41,
        q: 42,
        r: 43,
        s: 44,
        t: 45,
        u: 46,
        v: 47,
        w: 48,
        x: 49,
        y: 50,
        z: 51,
        0: 52,
        1: 53,
        2: 54,
        3: 55,
        4: 56,
        5: 57,
        6: 58,
        7: 59,
        8: 60,
        9: 61,
        "+": 62,
        "/": 63
    };
    c.STROKE_CAPS_MAP = ["butt", "round", "square"];
    c.STROKE_JOINTS_MAP = ["miter", "round", "bevel"];
    var a = createjs.createCanvas ?
        createjs.createCanvas() : document.createElement("canvas");
    a.getContext && (c._ctx = a.getContext("2d"), a.width = a.height = 1);
    b.getInstructions = function () {
        return this._updateInstructions(), this._instructions
    };
    try {
        Object.defineProperties(b, {instructions: {get: b.getInstructions}})
    } catch (d) {
    }
    b.isEmpty = function () {
        return !(this._instructions.length || this._activeInstructions.length)
    };
    b.draw = function (a, d) {
        this._updateInstructions();
        for (var b = this._instructions, c = this._storeIndex, m = b.length; m > c; c++) b[c].exec(a, d)
    };
    b.drawAsPath = function (a) {
        this._updateInstructions();
        for (var d, b = this._instructions, c = this._storeIndex, m = b.length; m > c; c++) !1 !== (d = b[c]).path && d.exec(a)
    };
    b.moveTo = function (a, d) {
        return this.append(new c.MoveTo(a, d), !0)
    };
    b.lineTo = function (a, d) {
        return this.append(new c.LineTo(a, d))
    };
    b.arcTo = function (a, d, b, k, m) {
        return this.append(new c.ArcTo(a, d, b, k, m))
    };
    b.arc = function (a, d, b, k, m, p) {
        return this.append(new c.Arc(a, d, b, k, m, p))
    };
    b.quadraticCurveTo = function (a, d, b, k) {
        return this.append(new c.QuadraticCurveTo(a,
            d, b, k))
    };
    b.bezierCurveTo = function (a, d, b, k, m, p) {
        return this.append(new c.BezierCurveTo(a, d, b, k, m, p))
    };
    b.rect = function (a, d, b, k) {
        return this.append(new c.Rect(a, d, b, k))
    };
    b.closePath = function () {
        return this._activeInstructions.length ? this.append(new c.ClosePath) : this
    };
    b.clear = function () {
        return this._instructions.length = this._activeInstructions.length = this._commitIndex = 0, this._strokeStyle = this._oldStrokeStyle = this._stroke = this._fill = this._strokeDash = this._oldStrokeDash = null, this._dirty = this._strokeIgnoreScale =
            !1, this
    };
    b.beginFill = function (a) {
        return this._setFill(a ? new c.Fill(a) : null)
    };
    b.beginLinearGradientFill = function (a, d, b, k, m, p) {
        return this._setFill((new c.Fill).linearGradient(a, d, b, k, m, p))
    };
    b.beginRadialGradientFill = function (a, d, b, k, m, p, q, u) {
        return this._setFill((new c.Fill).radialGradient(a, d, b, k, m, p, q, u))
    };
    b.beginBitmapFill = function (a, d, b) {
        return this._setFill((new c.Fill(null, b)).bitmap(a, d))
    };
    b.endFill = function () {
        return this.beginFill()
    };
    b.setStrokeStyle = function (a, d, b, k, m) {
        return this._updateInstructions(!0),
            this._strokeStyle = this.command = new c.StrokeStyle(a, d, b, k, m), this._stroke && (this._stroke.ignoreScale = m), this._strokeIgnoreScale = m, this
    };
    b.setStrokeDash = function (a, d) {
        return this._updateInstructions(!0), this._strokeDash = this.command = new c.StrokeDash(a, d), this
    };
    b.beginStroke = function (a) {
        return this._setStroke(a ? new c.Stroke(a) : null)
    };
    b.beginLinearGradientStroke = function (a, d, b, k, m, p) {
        return this._setStroke((new c.Stroke).linearGradient(a, d, b, k, m, p))
    };
    b.beginRadialGradientStroke = function (a, d, b, k, m, p, q,
                                            u) {
        return this._setStroke((new c.Stroke).radialGradient(a, d, b, k, m, p, q, u))
    };
    b.beginBitmapStroke = function (a, d) {
        return this._setStroke((new c.Stroke).bitmap(a, d))
    };
    b.endStroke = function () {
        return this.beginStroke()
    };
    b.curveTo = b.quadraticCurveTo;
    b.drawRect = b.rect;
    b.drawRoundRect = function (a, d, b, c, m) {
        return this.drawRoundRectComplex(a, d, b, c, m, m, m, m)
    };
    b.drawRoundRectComplex = function (a, d, b, k, m, p, q, u) {
        return this.append(new c.RoundRect(a, d, b, k, m, p, q, u))
    };
    b.drawCircle = function (a, d, b) {
        return this.append(new c.Circle(a,
            d, b))
    };
    b.drawEllipse = function (a, d, b, k) {
        return this.append(new c.Ellipse(a, d, b, k))
    };
    b.drawPolyStar = function (a, d, b, k, m, p) {
        return this.append(new c.PolyStar(a, d, b, k, m, p))
    };
    b.append = function (a, d) {
        return this._activeInstructions.push(a), this.command = a, d || (this._dirty = !0), this
    };
    b.decodePath = function (a) {
        for (var d = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath], b = [2, 2, 4, 6, 0], k = 0, m = a.length, p = [], q = 0, u = 0, v = c.BASE_64; m > k;) {
            var z = a.charAt(k), y = v[z], t = y >> 3, B = d[t];
            if (!B || 3 & y) throw"bad path data (@" +
            k + "): " + z;
            z = b[t];
            t || (q = u = 0);
            p.length = 0;
            k++;
            y = (y >> 2 & 1) + 2;
            for (t = 0; z > t; t++) {
                var C = v[a.charAt(k)], I = C >> 5 ? -1 : 1, C = (31 & C) << 6 | v[a.charAt(k + 1)];
                3 == y && (C = C << 6 | v[a.charAt(k + 2)]);
                C = I * C / 10;
                t % 2 ? q = C += q : u = C += u;
                p[t] = C;
                k += y
            }
            B.apply(this, p)
        }
        return this
    };
    b.store = function () {
        return this._updateInstructions(!0), this._storeIndex = this._instructions.length, this
    };
    b.unstore = function () {
        return this._storeIndex = 0, this
    };
    b.clone = function () {
        var a = new c;
        return a.command = this.command, a._stroke = this._stroke, a._strokeStyle = this._strokeStyle,
            a._strokeDash = this._strokeDash, a._strokeIgnoreScale = this._strokeIgnoreScale, a._fill = this._fill, a._instructions = this._instructions.slice(), a._commitIndex = this._commitIndex, a._activeInstructions = this._activeInstructions.slice(), a._dirty = this._dirty, a._storeIndex = this._storeIndex, a
    };
    b.toString = function () {
        return "[Graphics]"
    };
    b.mt = b.moveTo;
    b.lt = b.lineTo;
    b.at = b.arcTo;
    b.bt = b.bezierCurveTo;
    b.qt = b.quadraticCurveTo;
    b.a = b.arc;
    b.r = b.rect;
    b.cp = b.closePath;
    b.c = b.clear;
    b.f = b.beginFill;
    b.lf = b.beginLinearGradientFill;
    b.rf = b.beginRadialGradientFill;
    b.bf = b.beginBitmapFill;
    b.ef = b.endFill;
    b.ss = b.setStrokeStyle;
    b.sd = b.setStrokeDash;
    b.s = b.beginStroke;
    b.ls = b.beginLinearGradientStroke;
    b.rs = b.beginRadialGradientStroke;
    b.bs = b.beginBitmapStroke;
    b.es = b.endStroke;
    b.dr = b.drawRect;
    b.rr = b.drawRoundRect;
    b.rc = b.drawRoundRectComplex;
    b.dc = b.drawCircle;
    b.de = b.drawEllipse;
    b.dp = b.drawPolyStar;
    b.p = b.decodePath;
    b._updateInstructions = function (a) {
        var d = this._instructions, b = this._activeInstructions, k = this._commitIndex;
        if (this._dirty && b.length) {
            d.length =
                k;
            d.push(c.beginCmd);
            var k = b.length, m = d.length;
            d.length = m + k;
            for (var p = 0; k > p; p++) d[p + m] = b[p];
            this._fill && d.push(this._fill);
            this._stroke && (this._strokeDash !== this._oldStrokeDash && (this._oldStrokeDash = this._strokeDash, d.push(this._strokeDash)), this._strokeStyle !== this._oldStrokeStyle && (this._oldStrokeStyle = this._strokeStyle, d.push(this._strokeStyle)), d.push(this._stroke));
            this._dirty = !1
        }
        a && (b.length = 0, this._commitIndex = d.length)
    };
    b._setFill = function (a) {
        return this._updateInstructions(!0), this.command =
            this._fill = a, this
    };
    b._setStroke = function (a) {
        return this._updateInstructions(!0), (this.command = this._stroke = a) && (a.ignoreScale = this._strokeIgnoreScale), this
    };
    (c.LineTo = function (a, d) {
        this.x = a;
        this.y = d
    }).prototype.exec = function (a) {
        a.lineTo(this.x, this.y)
    };
    (c.MoveTo = function (a, d) {
        this.x = a;
        this.y = d
    }).prototype.exec = function (a) {
        a.moveTo(this.x, this.y)
    };
    (c.ArcTo = function (a, d, b, c, m) {
        this.x1 = a;
        this.y1 = d;
        this.x2 = b;
        this.y2 = c;
        this.radius = m
    }).prototype.exec = function (a) {
        a.arcTo(this.x1, this.y1, this.x2, this.y2,
            this.radius)
    };
    (c.Arc = function (a, d, b, c, m, p) {
        this.x = a;
        this.y = d;
        this.radius = b;
        this.startAngle = c;
        this.endAngle = m;
        this.anticlockwise = !!p
    }).prototype.exec = function (a) {
        a.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise)
    };
    (c.QuadraticCurveTo = function (a, d, b, c) {
        this.cpx = a;
        this.cpy = d;
        this.x = b;
        this.y = c
    }).prototype.exec = function (a) {
        a.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y)
    };
    (c.BezierCurveTo = function (a, d, b, c, m, p) {
        this.cp1x = a;
        this.cp1y = d;
        this.cp2x = b;
        this.cp2y = c;
        this.x = m;
        this.y =
            p
    }).prototype.exec = function (a) {
        a.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y)
    };
    (c.Rect = function (a, d, b, c) {
        this.x = a;
        this.y = d;
        this.w = b;
        this.h = c
    }).prototype.exec = function (a) {
        a.rect(this.x, this.y, this.w, this.h)
    };
    (c.ClosePath = function () {
    }).prototype.exec = function (a) {
        a.closePath()
    };
    (c.BeginPath = function () {
    }).prototype.exec = function (a) {
        a.beginPath()
    };
    b = (c.Fill = function (a, d) {
        this.style = a;
        this.matrix = d
    }).prototype;
    b.exec = function (a) {
        if (this.style) {
            a.fillStyle = this.style;
            var d = this.matrix;
            d && (a.save(), a.transform(d.a, d.b, d.c, d.d, d.tx, d.ty));
            a.fill();
            d && a.restore()
        }
    };
    b.linearGradient = function (a, d, b, k, m, p) {
        for (var q = this.style = c._ctx.createLinearGradient(b, k, m, p), u = 0, v = a.length; v > u; u++) q.addColorStop(d[u], a[u]);
        return q.props = {colors: a, ratios: d, x0: b, y0: k, x1: m, y1: p, type: "linear"}, this
    };
    b.radialGradient = function (a, d, b, k, m, p, q, u) {
        for (var v = this.style = c._ctx.createRadialGradient(b, k, m, p, q, u), z = 0, y = a.length; y > z; z++) v.addColorStop(d[z], a[z]);
        return v.props = {
            colors: a, ratios: d, x0: b, y0: k, r0: m,
            x1: p, y1: q, r1: u, type: "radial"
        }, this
    };
    b.bitmap = function (a, d) {
        if (a.naturalWidth || a.getContext || 2 <= a.readyState) (this.style = c._ctx.createPattern(a, d || "")).props = {
            image: a,
            repetition: d,
            type: "bitmap"
        };
        return this
    };
    b.path = !1;
    b = (c.Stroke = function (a, d) {
        this.style = a;
        this.ignoreScale = d
    }).prototype;
    b.exec = function (a) {
        this.style && (a.strokeStyle = this.style, this.ignoreScale && (a.save(), a.setTransform(1, 0, 0, 1, 0, 0)), a.stroke(), this.ignoreScale && a.restore())
    };
    b.linearGradient = c.Fill.prototype.linearGradient;
    b.radialGradient =
        c.Fill.prototype.radialGradient;
    b.bitmap = c.Fill.prototype.bitmap;
    b.path = !1;
    b = (c.StrokeStyle = function (a, d, b, c) {
        this.width = a;
        this.caps = d;
        this.joints = b;
        this.miterLimit = c
    }).prototype;
    b.exec = function (a) {
        a.lineWidth = null == this.width ? "1" : this.width;
        a.lineCap = null == this.caps ? "butt" : isNaN(this.caps) ? this.caps : c.STROKE_CAPS_MAP[this.caps];
        a.lineJoin = null == this.joints ? "miter" : isNaN(this.joints) ? this.joints : c.STROKE_JOINTS_MAP[this.joints];
        a.miterLimit = null == this.miterLimit ? "10" : this.miterLimit
    };
    b.path = !1;
    (c.StrokeDash =
        function (a, d) {
            this.segments = a;
            this.offset = d || 0
        }).prototype.exec = function (a) {
        a.setLineDash && (a.setLineDash(this.segments || c.StrokeDash.EMPTY_SEGMENTS), a.lineDashOffset = this.offset || 0)
    };
    c.StrokeDash.EMPTY_SEGMENTS = [];
    (c.RoundRect = function (a, d, b, c, m, p, q, u) {
        this.x = a;
        this.y = d;
        this.w = b;
        this.h = c;
        this.radiusTL = m;
        this.radiusTR = p;
        this.radiusBR = q;
        this.radiusBL = u
    }).prototype.exec = function (a) {
        var d = (z > v ? v : z) / 2, b = 0, c = 0, m = 0, p = 0, q = this.x, u = this.y, v = this.w, z = this.h,
            y = this.radiusTL, t = this.radiusTR, B = this.radiusBR,
            C = this.radiusBL;
        0 > y && (y *= b = -1);
        y > d && (y = d);
        0 > t && (t *= c = -1);
        t > d && (t = d);
        0 > B && (B *= m = -1);
        B > d && (B = d);
        0 > C && (C *= p = -1);
        C > d && (C = d);
        a.moveTo(q + v - t, u);
        a.arcTo(q + v + t * c, u - t * c, q + v, u + t, t);
        a.lineTo(q + v, u + z - B);
        a.arcTo(q + v + B * m, u + z + B * m, q + v - B, u + z, B);
        a.lineTo(q + C, u + z);
        a.arcTo(q - C * p, u + z + C * p, q, u + z - C, C);
        a.lineTo(q, u + y);
        a.arcTo(q - y * b, u - y * b, q + y, u, y);
        a.closePath()
    };
    (c.Circle = function (a, d, b) {
        this.x = a;
        this.y = d;
        this.radius = b
    }).prototype.exec = function (a) {
        a.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    };
    (c.Ellipse = function (a, d, b, c) {
        this.x =
            a;
        this.y = d;
        this.w = b;
        this.h = c
    }).prototype.exec = function (a) {
        var d = this.x, b = this.y, c = this.w, m = this.h, p = c / 2 * .5522848, q = m / 2 * .5522848, u = d + c,
            v = b + m, c = d + c / 2, m = b + m / 2;
        a.moveTo(d, m);
        a.bezierCurveTo(d, m - q, c - p, b, c, b);
        a.bezierCurveTo(c + p, b, u, m - q, u, m);
        a.bezierCurveTo(u, m + q, c + p, v, c, v);
        a.bezierCurveTo(c - p, v, d, m + q, d, m)
    };
    (c.PolyStar = function (a, d, b, c, m, p) {
        this.x = a;
        this.y = d;
        this.radius = b;
        this.sides = c;
        this.pointSize = m;
        this.angle = p
    }).prototype.exec = function (a) {
        var d = this.x, b = this.y, c = this.radius, m = (this.angle || 0) / 180 * Math.PI,
            p = this.sides, q = 1 - (this.pointSize || 0), u = Math.PI / p;
        a.moveTo(d + Math.cos(m) * c, b + Math.sin(m) * c);
        for (var v = 0; p > v; v++) m += u, 1 != q && a.lineTo(d + Math.cos(m) * c * q, b + Math.sin(m) * c * q), m += u, a.lineTo(d + Math.cos(m) * c, b + Math.sin(m) * c);
        a.closePath()
    };
    c.beginCmd = new c.BeginPath;
    createjs.Graphics = c
})();
this.createjs = this.createjs || {};
(function () {
    function c() {
        this.EventDispatcher_constructor();
        this.alpha = 1;
        this.cacheCanvas = null;
        this.cacheID = 0;
        this.id = createjs.UID.get();
        this.tickEnabled = this.mouseEnabled = !0;
        this.parent = this.name = null;
        this.rotation = this.regY = this.regX = 0;
        this.scaleY = this.scaleX = 1;
        this.skewY = this.skewX = 0;
        this.shadow = null;
        this.visible = !0;
        this.y = this.x = 0;
        this.compositeOperation = this.transformMatrix = null;
        this.snapToPixel = !0;
        this.cursor = this.hitArea = this.mask = this.filters = null;
        this._filterOffsetY = this._filterOffsetX = this._cacheOffsetY =
            this._cacheOffsetX = 0;
        this._cacheScale = 1;
        this._cacheDataURLID = 0;
        this._cacheDataURL = null;
        this._props = new createjs.DisplayProps;
        this._rectangle = new createjs.Rectangle;
        this._bounds = null
    }

    var b = createjs.extend(c, createjs.EventDispatcher);
    c._MOUSE_EVENTS = "click dblclick mousedown mouseout mouseover pressmove pressup rollout rollover".split(" ");
    c.suppressCrossDomainErrors = !1;
    c._snapToPixelEnabled = !1;
    var a = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
    a.getContext && (c._hitTestCanvas =
        a, c._hitTestContext = a.getContext("2d"), a.width = a.height = 1);
    c._nextCacheID = 1;
    b.getStage = function () {
        for (var a = this, d = createjs.Stage; a.parent;) a = a.parent;
        return a instanceof d ? a : null
    };
    try {
        Object.defineProperties(b, {stage: {get: b.getStage}})
    } catch (d) {
    }
    b.isVisible = function () {
        return !!(this.visible && 0 < this.alpha && 0 != this.scaleX && 0 != this.scaleY)
    };
    b.draw = function (a, d) {
        var b = this.cacheCanvas;
        if (d || !b) return !1;
        var c = this._cacheScale;
        return a.drawImage(b, this._cacheOffsetX + this._filterOffsetX, this._cacheOffsetY +
            this._filterOffsetY, b.width / c, b.height / c), !0
    };
    b.updateContext = function (a) {
        var d = this.mask, b = this._props.matrix;
        d && d.graphics && !d.graphics.isEmpty() && (d.getMatrix(b), a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty), d.graphics.drawAsPath(a), a.clip(), b.invert(), a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty));
        this.getMatrix(b);
        var d = b.tx, k = b.ty;
        c._snapToPixelEnabled && this.snapToPixel && (d = d + (0 > d ? -.5 : .5) | 0, k = k + (0 > k ? -.5 : .5) | 0);
        a.transform(b.a, b.b, b.c, b.d, d, k);
        a.globalAlpha *= this.alpha;
        this.compositeOperation && (a.globalCompositeOperation =
            this.compositeOperation);
        this.shadow && this._applyShadow(a, this.shadow)
    };
    b.cache = function (a, d, b, c, m) {
        m = m || 1;
        this.cacheCanvas || (this.cacheCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"));
        this._cacheWidth = b;
        this._cacheHeight = c;
        this._cacheOffsetX = a;
        this._cacheOffsetY = d;
        this._cacheScale = m;
        this.updateCache()
    };
    b.updateCache = function (a) {
        var d = this.cacheCanvas;
        if (!d) throw"cache() must be called before updateCache()";
        var b = this._cacheScale, k = this._cacheOffsetX * b, m = this._cacheOffsetY *
            b, p = this._cacheWidth, q = this._cacheHeight, u = d.getContext("2d"), v = this._getFilterBounds(),
            k = k + (this._filterOffsetX = v.x), m = m + (this._filterOffsetY = v.y), p = Math.ceil(p * b) + v.width,
            q = Math.ceil(q * b) + v.height;
        p != d.width || q != d.height ? (d.width = p, d.height = q) : a || u.clearRect(0, 0, p + 1, q + 1);
        u.save();
        u.globalCompositeOperation = a;
        u.setTransform(b, 0, 0, b, -k, -m);
        this.draw(u, !0);
        this._applyFilters();
        u.restore();
        this.cacheID = c._nextCacheID++
    };
    b.uncache = function () {
        this._cacheDataURL = this.cacheCanvas = null;
        this.cacheID = this._cacheOffsetX =
            this._cacheOffsetY = this._filterOffsetX = this._filterOffsetY = 0;
        this._cacheScale = 1
    };
    b.getCacheDataURL = function () {
        return this.cacheCanvas ? (this.cacheID != this._cacheDataURLID && (this._cacheDataURL = this.cacheCanvas.toDataURL()), this._cacheDataURL) : null
    };
    b.localToGlobal = function (a, d, b) {
        return this.getConcatenatedMatrix(this._props.matrix).transformPoint(a, d, b || new createjs.Point)
    };
    b.globalToLocal = function (a, d, b) {
        return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(a, d, b || new createjs.Point)
    };
    b.localToLocal = function (a, d, b, c) {
        return c = this.localToGlobal(a, d, c), b.globalToLocal(c.x, c.y, c)
    };
    b.setTransform = function (a, d, b, c, m, p, q, u, v) {
        return this.x = a || 0, this.y = d || 0, this.scaleX = null == b ? 1 : b, this.scaleY = null == c ? 1 : c, this.rotation = m || 0, this.skewX = p || 0, this.skewY = q || 0, this.regX = u || 0, this.regY = v || 0, this
    };
    b.getMatrix = function (a) {
        a = a && a.identity() || new createjs.Matrix2D;
        return this.transformMatrix ? a.copy(this.transformMatrix) : a.appendTransform(this.x, this.y, this.scaleX, this.scaleY, this.rotation, this.skewX,
            this.skewY, this.regX, this.regY)
    };
    b.getConcatenatedMatrix = function (a) {
        var d = this;
        for (a = this.getMatrix(a); d = d.parent;) a.prependMatrix(d.getMatrix(d._props.matrix));
        return a
    };
    b.getConcatenatedDisplayProps = function (a) {
        a = a ? a.identity() : new createjs.DisplayProps;
        var d = this, b = d.getMatrix(a.matrix);
        do a.prepend(d.visible, d.alpha, d.shadow, d.compositeOperation), d != this && b.prependMatrix(d.getMatrix(d._props.matrix)); while (d = d.parent);
        return a
    };
    b.hitTest = function (a, d) {
        var b = c._hitTestContext;
        b.setTransform(1,
            0, 0, 1, -a, -d);
        this.draw(b);
        var k = this._testHit(b);
        return b.setTransform(1, 0, 0, 1, 0, 0), b.clearRect(0, 0, 2, 2), k
    };
    b.set = function (a) {
        for (var d in a) this[d] = a[d];
        return this
    };
    b.getBounds = function () {
        if (this._bounds) return this._rectangle.copy(this._bounds);
        var a = this.cacheCanvas;
        if (a) {
            var d = this._cacheScale;
            return this._rectangle.setValues(this._cacheOffsetX, this._cacheOffsetY, a.width / d, a.height / d)
        }
        return null
    };
    b.getTransformedBounds = function () {
        return this._getBounds()
    };
    b.setBounds = function (a, d, b, c) {
        null ==
        a && (this._bounds = a);
        this._bounds = (this._bounds || new createjs.Rectangle).setValues(a, d, b, c)
    };
    b.clone = function () {
        return this._cloneProps(new c)
    };
    b.toString = function () {
        return "[DisplayObject (name=" + this.name + ")]"
    };
    b._cloneProps = function (a) {
        return a.alpha = this.alpha, a.mouseEnabled = this.mouseEnabled, a.tickEnabled = this.tickEnabled, a.name = this.name, a.regX = this.regX, a.regY = this.regY, a.rotation = this.rotation, a.scaleX = this.scaleX, a.scaleY = this.scaleY, a.shadow = this.shadow, a.skewX = this.skewX, a.skewY = this.skewY,
            a.visible = this.visible, a.x = this.x, a.y = this.y, a.compositeOperation = this.compositeOperation, a.snapToPixel = this.snapToPixel, a.filters = null == this.filters ? null : this.filters.slice(0), a.mask = this.mask, a.hitArea = this.hitArea, a.cursor = this.cursor, a._bounds = this._bounds, a
    };
    b._applyShadow = function (a, d) {
        d = d || Shadow.identity;
        a.shadowColor = d.color;
        a.shadowOffsetX = d.offsetX;
        a.shadowOffsetY = d.offsetY;
        a.shadowBlur = d.blur
    };
    b._tick = function (a) {
        var d = this._listeners;
        d && d.tick && (a.target = null, a.propagationStopped = a.immediatePropagationStopped =
            !1, this.dispatchEvent(a))
    };
    b._testHit = function (a) {
        try {
            var d = 1 < a.getImageData(0, 0, 1, 1).data[3]
        } catch (b) {
            if (!c.suppressCrossDomainErrors) throw"An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images.";
        }
        return d
    };
    b._applyFilters = function () {
        if (this.filters && 0 != this.filters.length && this.cacheCanvas) for (var a = this.filters.length, d = this.cacheCanvas.getContext("2d"), b = this.cacheCanvas.width, c = this.cacheCanvas.height, m = 0; a > m; m++) this.filters[m].applyFilter(d,
            0, 0, b, c)
    };
    b._getFilterBounds = function () {
        var a, d = this.filters, b = this._rectangle.setValues(0, 0, 0, 0);
        if (!d || !(a = d.length)) return b;
        for (d = 0; a > d; d++) {
            var c = this.filters[d];
            c.getBounds && c.getBounds(b)
        }
        return b
    };
    b._getBounds = function (a, d) {
        return this._transformBounds(this.getBounds(), a, d)
    };
    b._transformBounds = function (a, d, b) {
        if (!a) return a;
        var c = a.x, m = a.y, p = a.width, q = a.height, u = this._props.matrix,
            u = b ? u.identity() : this.getMatrix(u);
        (c || m) && u.appendTransform(0, 0, 1, 1, 0, 0, 0, -c, -m);
        d && u.prependMatrix(d);
        d = p * u.a;
        p *= u.b;
        b = q * u.c;
        var q = q * u.d, v = u.tx, u = u.ty, z = v, y = v, t = u, B = u;
        return (c = d + v) < z ? z = c : c > y && (y = c), (c = d + b + v) < z ? z = c : c > y && (y = c), (c = b + v) < z ? z = c : c > y && (y = c), (m = p + u) < t ? t = m : m > B && (B = m), (m = p + q + u) < t ? t = m : m > B && (B = m), (m = q + u) < t ? t = m : m > B && (B = m), a.setValues(z, t, y - z, B - t)
    };
    b._hasMouseEventListener = function () {
        for (var a = c._MOUSE_EVENTS, d = 0, b = a.length; b > d; d++) if (this.hasEventListener(a[d])) return !0;
        return !!this.cursor
    };
    createjs.DisplayObject = createjs.promote(c, "EventDispatcher")
})();
this.createjs = this.createjs || {};
(function () {
    function c() {
        this.DisplayObject_constructor();
        this.children = [];
        this.tickChildren = this.mouseChildren = !0
    }

    var b = createjs.extend(c, createjs.DisplayObject);
    b.getNumChildren = function () {
        return this.children.length
    };
    try {
        Object.defineProperties(b, {numChildren: {get: b.getNumChildren}})
    } catch (a) {
    }
    b.initialize = c;
    b.isVisible = function () {
        var a = this.cacheCanvas || this.children.length;
        return !!(this.visible && 0 < this.alpha && 0 != this.scaleX && 0 != this.scaleY && a)
    };
    b.draw = function (a, b) {
        if (this.DisplayObject_draw(a,
            b)) return !0;
        for (var c = this.children.slice(), h = 0, k = c.length; k > h; h++) {
            var m = c[h];
            m.isVisible() && (a.save(), m.updateContext(a), m.draw(a), a.restore())
        }
        return !0
    };
    b.addChild = function (a) {
        if (null == a) return a;
        var b = arguments.length;
        if (1 < b) {
            for (var c = 0; b > c; c++) this.addChild(arguments[c]);
            return arguments[b - 1]
        }
        return a.parent && a.parent.removeChild(a), a.parent = this, this.children.push(a), a.dispatchEvent("added"), a
    };
    b.addChildAt = function (a, b) {
        var c = arguments.length, h = arguments[c - 1];
        if (0 > h || h > this.children.length) return arguments[c -
        2];
        if (2 < c) {
            for (var k = 0; c - 1 > k; k++) this.addChildAt(arguments[k], h + k);
            return arguments[c - 2]
        }
        return a.parent && a.parent.removeChild(a), a.parent = this, this.children.splice(b, 0, a), a.dispatchEvent("added"), a
    };
    b.removeChild = function (a) {
        var b = arguments.length;
        if (1 < b) {
            for (var c = !0, h = 0; b > h; h++) c = c && this.removeChild(arguments[h]);
            return c
        }
        return this.removeChildAt(createjs.indexOf(this.children, a))
    };
    b.removeChildAt = function (a) {
        var b = arguments.length;
        if (1 < b) {
            for (var c = [], h = 0; b > h; h++) c[h] = arguments[h];
            c.sort(function (a,
                             d) {
                return d - a
            });
            for (var k = !0, h = 0; b > h; h++) k = k && this.removeChildAt(c[h]);
            return k
        }
        if (0 > a || a > this.children.length - 1) return !1;
        b = this.children[a];
        return b && (b.parent = null), this.children.splice(a, 1), b.dispatchEvent("removed"), !0
    };
    b.removeAllChildren = function () {
        for (var a = this.children; a.length;) this.removeChildAt(0)
    };
    b.getChildAt = function (a) {
        return this.children[a]
    };
    b.getChildByName = function (a) {
        for (var b = this.children, c = 0, h = b.length; h > c; c++) if (b[c].name == a) return b[c];
        return null
    };
    b.sortChildren = function (a) {
        this.children.sort(a)
    };
    b.getChildIndex = function (a) {
        return createjs.indexOf(this.children, a)
    };
    b.swapChildrenAt = function (a, b) {
        var c = this.children, h = c[a], k = c[b];
        h && k && (c[a] = k, c[b] = h)
    };
    b.swapChildren = function (a, b) {
        for (var c, h, k = this.children, m = 0, p = k.length; p > m && (k[m] == a && (c = m), k[m] == b && (h = m), null == c || null == h); m++) ;
        m != p && (k[c] = b, k[h] = a)
    };
    b.setChildIndex = function (a, b) {
        var c = this.children, h = c.length;
        if (!(a.parent != this || 0 > b || b >= h)) {
            for (var k = 0; h > k && c[k] != a; k++) ;
            k != h && k != b && (c.splice(k, 1), c.splice(b, 0, a))
        }
    };
    b.contains = function (a) {
        for (; a;) {
            if (a ==
                this) return !0;
            a = a.parent
        }
        return !1
    };
    b.hitTest = function (a, b) {
        return null != this.getObjectUnderPoint(a, b)
    };
    b.getObjectsUnderPoint = function (a, b, c) {
        var h = [];
        a = this.localToGlobal(a, b);
        return this._getObjectsUnderPoint(a.x, a.y, h, 0 < c, 1 == c), h
    };
    b.getObjectUnderPoint = function (a, b, c) {
        a = this.localToGlobal(a, b);
        return this._getObjectsUnderPoint(a.x, a.y, null, 0 < c, 1 == c)
    };
    b.getBounds = function () {
        return this._getBounds(null, !0)
    };
    b.getTransformedBounds = function () {
        return this._getBounds()
    };
    b.clone = function (a) {
        var b = this._cloneProps(new c);
        return a && this._cloneChildren(b), b
    };
    b.toString = function () {
        return "[Container (name=" + this.name + ")]"
    };
    b._tick = function (a) {
        if (this.tickChildren) for (var b = this.children.length - 1; 0 <= b; b--) {
            var c = this.children[b];
            c.tickEnabled && c._tick && c._tick(a)
        }
        this.DisplayObject__tick(a)
    };
    b._cloneChildren = function (a) {
        a.children.length && a.removeAllChildren();
        for (var b = a.children, c = 0, h = this.children.length; h > c; c++) {
            var k = this.children[c].clone(!0);
            k.parent = a;
            b.push(k)
        }
    };
    b._getObjectsUnderPoint = function (a, b, f, h, k, m) {
        if (m =
            m || 0, !m && !this._testMask(this, a, b)) return null;
        var p, q = createjs.DisplayObject._hitTestContext;
        k = k || h && this._hasMouseEventListener();
        for (var u = this.children, v = u.length - 1; 0 <= v; v--) {
            var z = u[v], y = z.hitArea;
            if (z.visible && (y || z.isVisible()) && (!h || z.mouseEnabled) && (y || this._testMask(z, a, b))) if (!y && z instanceof c) {
                if (z = z._getObjectsUnderPoint(a, b, f, h, k, m + 1), !f && z) return h && !this.mouseChildren ? this : z
            } else if (!h || k || z._hasMouseEventListener()) {
                var t = z.getConcatenatedDisplayProps(z._props);
                if (p = t.matrix, y &&
                (p.appendMatrix(y.getMatrix(y._props.matrix)), t.alpha = y.alpha), q.globalAlpha = t.alpha, q.setTransform(p.a, p.b, p.c, p.d, p.tx - a, p.ty - b), (y || z).draw(q), this._testHit(q)) {
                    if (q.setTransform(1, 0, 0, 1, 0, 0), q.clearRect(0, 0, 2, 2), !f) return h && !this.mouseChildren ? this : z;
                    f.push(z)
                }
            }
        }
        return null
    };
    b._testMask = function (a, b, c) {
        var h = a.mask;
        if (!h || !h.graphics || h.graphics.isEmpty()) return !0;
        var k = this._props.matrix, k = (a = a.parent) ? a.getConcatenatedMatrix(k) : k.identity(),
            k = h.getMatrix(h._props.matrix).prependMatrix(k);
        a =
            createjs.DisplayObject._hitTestContext;
        return a.setTransform(k.a, k.b, k.c, k.d, k.tx - b, k.ty - c), h.graphics.drawAsPath(a), a.fillStyle = "#000", a.fill(), this._testHit(a) ? (a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, 2, 2), !0) : !1
    };
    b._getBounds = function (a, b) {
        var c = this.DisplayObject_getBounds();
        if (c) return this._transformBounds(c, a, b);
        var h = this._props.matrix, h = b ? h.identity() : this.getMatrix(h);
        a && h.prependMatrix(a);
        for (var k = this.children.length, m = null, p = 0; k > p; p++) {
            var q = this.children[p];
            q.visible && (c = q._getBounds(h)) &&
            (m ? m.extend(c.x, c.y, c.width, c.height) : m = c.clone())
        }
        return m
    };
    createjs.Container = createjs.promote(c, "DisplayObject")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a) {
        this.Container_constructor();
        this.autoClear = !0;
        this.canvas = "string" == typeof a ? document.getElementById(a) : a;
        this.mouseY = this.mouseX = 0;
        this.drawRect = null;
        this.mouseInBounds = this.snapToPixelEnabled = !1;
        this.tickOnUpdate = !0;
        this.mouseMoveOutside = !1;
        this.preventSelection = !0;
        this._pointerData = {};
        this._pointerCount = 0;
        this._prevStage = this._nextStage = this._mouseOverIntervalID = this._primaryPointerID = null;
        this.enableDOMEvents(!0)
    }

    var b = createjs.extend(c, createjs.Container);
    b._get_nextStage =
        function () {
            return this._nextStage
        };
    b._set_nextStage = function (a) {
        this._nextStage && (this._nextStage._prevStage = null);
        a && (a._prevStage = this);
        this._nextStage = a
    };
    try {
        Object.defineProperties(b, {nextStage: {get: b._get_nextStage, set: b._set_nextStage}})
    } catch (a) {
    }
    b.update = function (a) {
        if (this.canvas && (this.tickOnUpdate && this.tick(a), !1 !== this.dispatchEvent("drawstart", !1, !0))) {
            createjs.DisplayObject._snapToPixelEnabled = this.snapToPixelEnabled;
            a = this.drawRect;
            var b = this.canvas.getContext("2d");
            b.setTransform(1,
                0, 0, 1, 0, 0);
            this.autoClear && (a ? b.clearRect(a.x, a.y, a.width, a.height) : b.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1));
            b.save();
            this.drawRect && (b.beginPath(), b.rect(a.x, a.y, a.width, a.height), b.clip());
            this.updateContext(b);
            this.draw(b, !1);
            b.restore();
            this.dispatchEvent("drawend")
        }
    };
    b.tick = function (a) {
        if (this.tickEnabled && !1 !== this.dispatchEvent("tickstart", !1, !0)) {
            var b = new createjs.Event("tick");
            if (a) for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
            this._tick(b);
            this.dispatchEvent("tickend")
        }
    };
    b.handleEvent = function (a) {
        "tick" == a.type && this.update(a)
    };
    b.clear = function () {
        if (this.canvas) {
            var a = this.canvas.getContext("2d");
            a.setTransform(1, 0, 0, 1, 0, 0);
            a.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)
        }
    };
    b.toDataURL = function (a, b) {
        var c, h = this.canvas.getContext("2d"), k = this.canvas.width, m = this.canvas.height;
        if (a) {
            c = h.getImageData(0, 0, k, m);
            var p = h.globalCompositeOperation;
            h.globalCompositeOperation = "destination-over";
            h.fillStyle = a;
            h.fillRect(0, 0, k, m)
        }
        k = this.canvas.toDataURL(b || "image/png");
        return a && (h.putImageData(c, 0, 0), h.globalCompositeOperation = p), k
    };
    b.enableMouseOver = function (a) {
        if (this._mouseOverIntervalID && (clearInterval(this._mouseOverIntervalID), this._mouseOverIntervalID = null, 0 == a && this._testMouseOver(!0)), null == a) a = 20; else if (0 >= a) return;
        var b = this;
        this._mouseOverIntervalID = setInterval(function () {
            b._testMouseOver()
        }, 1E3 / Math.min(50, a))
    };
    b.enableDOMEvents = function (a) {
        null == a && (a = !0);
        var b, c = this._eventListeners;
        if (!a && c) {
            for (b in c) a = c[b], a.t.removeEventListener(b, a.f, !1);
            this._eventListeners = null
        } else if (a && !c && this.canvas) {
            a = window.addEventListener ? window : document;
            var h = this, c = this._eventListeners = {};
            c.mouseup = {
                t: a, f: function (a) {
                    h._handleMouseUp(a)
                }
            };
            c.mousemove = {
                t: a, f: function (a) {
                    h._handleMouseMove(a)
                }
            };
            c.dblclick = {
                t: this.canvas, f: function (a) {
                    h._handleDoubleClick(a)
                }
            };
            c.mousedown = {
                t: this.canvas, f: function (a) {
                    h._handleMouseDown(a)
                }
            };
            for (b in c) a = c[b], a.t.addEventListener(b, a.f, !1)
        }
    };
    b.clone = function () {
        throw"Stage cannot be cloned.";
    };
    b.toString = function () {
        return "[Stage (name=" +
            this.name + ")]"
    };
    b._getElementRect = function (a) {
        var b;
        try {
            b = a.getBoundingClientRect()
        } catch (c) {
            b = {top: a.offsetTop, left: a.offsetLeft, width: a.offsetWidth, height: a.offsetHeight}
        }
        var h = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0),
            k = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || document.body.clientTop || 0),
            m = window.getComputedStyle ? getComputedStyle(a, null) : a.currentStyle;
        a = parseInt(m.paddingLeft) + parseInt(m.borderLeftWidth);
        var p = parseInt(m.paddingTop) +
            parseInt(m.borderTopWidth), q = parseInt(m.paddingRight) + parseInt(m.borderRightWidth),
            m = parseInt(m.paddingBottom) + parseInt(m.borderBottomWidth);
        return {left: b.left + h + a, right: b.right + h - q, top: b.top + k + p, bottom: b.bottom + k - m}
    };
    b._getPointerData = function (a) {
        var b = this._pointerData[a];
        return b || (b = this._pointerData[a] = {x: 0, y: 0}), b
    };
    b._handleMouseMove = function (a) {
        a || (a = window.event);
        this._handlePointerMove(-1, a, a.pageX, a.pageY)
    };
    b._handlePointerMove = function (a, b, c, h, k) {
        if ((!this._prevStage || void 0 !== k) && this.canvas) {
            k =
                this._nextStage;
            var m = this._getPointerData(a), p = m.inBounds;
            this._updatePointerPosition(a, b, c, h);
            (p || m.inBounds || this.mouseMoveOutside) && (-1 === a && m.inBounds == !p && this._dispatchMouseEvent(this, p ? "mouseleave" : "mouseenter", !1, a, m, b), this._dispatchMouseEvent(this, "stagemousemove", !1, a, m, b), this._dispatchMouseEvent(m.target, "pressmove", !0, a, m, b));
            k && k._handlePointerMove(a, b, c, h, null)
        }
    };
    b._updatePointerPosition = function (a, b, c, h) {
        var k = this._getElementRect(this.canvas);
        c -= k.left;
        h -= k.top;
        var m = this.canvas.width,
            p = this.canvas.height;
        c /= (k.right - k.left) / m;
        h /= (k.bottom - k.top) / p;
        k = this._getPointerData(a);
        (k.inBounds = 0 <= c && 0 <= h && m - 1 >= c && p - 1 >= h) ? (k.x = c, k.y = h) : this.mouseMoveOutside && (k.x = 0 > c ? 0 : c > m - 1 ? m - 1 : c, k.y = 0 > h ? 0 : h > p - 1 ? p - 1 : h);
        k.posEvtObj = b;
        k.rawX = c;
        k.rawY = h;
        (a === this._primaryPointerID || -1 === a) && (this.mouseX = k.x, this.mouseY = k.y, this.mouseInBounds = k.inBounds)
    };
    b._handleMouseUp = function (a) {
        this._handlePointerUp(-1, a, !1)
    };
    b._handlePointerUp = function (a, b, c, h) {
        var k = this._nextStage, m = this._getPointerData(a);
        if (!this._prevStage ||
            void 0 !== h) {
            var p = null, q = m.target;
            h || !q && !k || (p = this._getObjectsUnderPoint(m.x, m.y, null, !0));
            m.down && (this._dispatchMouseEvent(this, "stagemouseup", !1, a, m, b, p), m.down = !1);
            p == q && this._dispatchMouseEvent(q, "click", !0, a, m, b);
            this._dispatchMouseEvent(q, "pressup", !0, a, m, b);
            c ? (a == this._primaryPointerID && (this._primaryPointerID = null), delete this._pointerData[a]) : m.target = null;
            k && k._handlePointerUp(a, b, c, h || p && this)
        }
    };
    b._handleMouseDown = function (a) {
        this._handlePointerDown(-1, a, a.pageX, a.pageY)
    };
    b._handlePointerDown =
        function (a, b, c, h, k) {
            this.preventSelection && b.preventDefault();
            null != this._primaryPointerID && -1 !== a || (this._primaryPointerID = a);
            null != h && this._updatePointerPosition(a, b, c, h);
            var m = null, p = this._nextStage, q = this._getPointerData(a);
            k || (m = q.target = this._getObjectsUnderPoint(q.x, q.y, null, !0));
            q.inBounds && (this._dispatchMouseEvent(this, "stagemousedown", !1, a, q, b, m), q.down = !0);
            this._dispatchMouseEvent(m, "mousedown", !0, a, q, b);
            p && p._handlePointerDown(a, b, c, h, k || m && this)
        };
    b._testMouseOver = function (a, b, c) {
        if (!this._prevStage ||
            void 0 !== b) {
            var h = this._nextStage;
            if (!this._mouseOverIntervalID) return void(h && h._testMouseOver(a, b, c));
            var k = this._getPointerData(-1);
            if (k && (a || this.mouseX != this._mouseOverX || this.mouseY != this._mouseOverY || !this.mouseInBounds)) {
                var m, p, q = k.posEvtObj, u = c || q && q.target == this.canvas, v = null, z = -1;
                p = "";
                !b && (a || this.mouseInBounds && u) && (v = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, !0), this._mouseOverX = this.mouseX, this._mouseOverY = this.mouseY);
                var y = this._mouseOverTarget || [], t = y[y.length - 1], B =
                    this._mouseOverTarget = [];
                for (m = v; m;) B.unshift(m), p || (p = m.cursor), m = m.parent;
                this.canvas.style.cursor = p;
                !b && c && (c.canvas.style.cursor = p);
                m = 0;
                for (p = B.length; p > m && B[m] == y[m]; m++) z = m;
                t != v && this._dispatchMouseEvent(t, "mouseout", !0, -1, k, q, v);
                for (m = y.length - 1; m > z; m--) this._dispatchMouseEvent(y[m], "rollout", !1, -1, k, q, v);
                for (m = B.length - 1; m > z; m--) this._dispatchMouseEvent(B[m], "rollover", !1, -1, k, q, t);
                t != v && this._dispatchMouseEvent(v, "mouseover", !0, -1, k, q, t);
                h && h._testMouseOver(a, b || v && this, c || u && this)
            }
        }
    };
    b._handleDoubleClick =
        function (a, b) {
            var c = null, h = this._nextStage, k = this._getPointerData(-1);
            b || (c = this._getObjectsUnderPoint(k.x, k.y, null, !0), this._dispatchMouseEvent(c, "dblclick", !0, -1, k, a));
            h && h._handleDoubleClick(a, b || c && this)
        };
    b._dispatchMouseEvent = function (a, b, c, h, k, m, p) {
        a && (c || a.hasEventListener(b)) && (b = new createjs.MouseEvent(b, c, !1, k.x, k.y, m, h, h === this._primaryPointerID || -1 === h, k.rawX, k.rawY, p), a.dispatchEvent(b))
    };
    createjs.Stage = createjs.promote(c, "Container")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a) {
        this.DisplayObject_constructor();
        "string" == typeof a ? (this.image = document.createElement("img"), this.image.src = a) : this.image = a;
        this.sourceRect = null
    }

    var b = createjs.extend(c, createjs.DisplayObject);
    b.initialize = c;
    b.isVisible = function () {
        var a = this.image, a = this.cacheCanvas || a && (a.naturalWidth || a.getContext || 2 <= a.readyState);
        return !!(this.visible && 0 < this.alpha && 0 != this.scaleX && 0 != this.scaleY && a)
    };
    b.draw = function (a, d) {
        if (this.DisplayObject_draw(a, d) || !this.image) return !0;
        var b = this.image,
            c = this.sourceRect;
        if (c) {
            var h = c.x, k = c.y, m = h + c.width, c = k + c.height, p = 0, q = 0, u = b.width, v = b.height;
            0 > h && (p -= h, h = 0);
            m > u && (m = u);
            0 > k && (q -= k, k = 0);
            c > v && (c = v);
            a.drawImage(b, h, k, m - h, c - k, p, q, m - h, c - k)
        } else a.drawImage(b, 0, 0);
        return !0
    };
    b.getBounds = function () {
        var a = this.DisplayObject_getBounds();
        if (a) return a;
        var a = this.image, d = this.sourceRect || a;
        return a && (a.naturalWidth || a.getContext || 2 <= a.readyState) ? this._rectangle.setValues(0, 0, d.width, d.height) : null
    };
    b.clone = function () {
        var a = new c(this.image);
        return this.sourceRect &&
        (a.sourceRect = this.sourceRect.clone()), this._cloneProps(a), a
    };
    b.toString = function () {
        return "[Bitmap (name=" + this.name + ")]"
    };
    createjs.Bitmap = createjs.promote(c, "DisplayObject")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, d) {
        this.DisplayObject_constructor();
        this.currentFrame = 0;
        this.currentAnimation = null;
        this.paused = !0;
        this.spriteSheet = a;
        this.framerate = this.currentAnimationFrame = 0;
        this._currentFrame = this._animation = null;
        this._skipAdvance = !1;
        null != d && this.gotoAndPlay(d)
    }

    var b = createjs.extend(c, createjs.DisplayObject);
    b.initialize = c;
    b.isVisible = function () {
        var a = this.cacheCanvas || this.spriteSheet.complete;
        return !!(this.visible && 0 < this.alpha && 0 != this.scaleX && 0 != this.scaleY && a)
    };
    b.draw = function (a,
                       d) {
        if (this.DisplayObject_draw(a, d)) return !0;
        this._normalizeFrame();
        var b = this.spriteSheet.getFrame(0 | this._currentFrame);
        if (!b) return !1;
        var c = b.rect;
        return c.width && c.height && a.drawImage(b.image, c.x, c.y, c.width, c.height, -b.regX, -b.regY, c.width, c.height), !0
    };
    b.play = function () {
        this.paused = !1
    };
    b.stop = function () {
        this.paused = !0
    };
    b.gotoAndPlay = function (a) {
        this.paused = !1;
        this._skipAdvance = !0;
        this._goto(a)
    };
    b.gotoAndStop = function (a) {
        this.paused = !0;
        this._goto(a)
    };
    b.advance = function (a) {
        var d = this.framerate ||
            this.spriteSheet.framerate;
        this._normalizeFrame(d && null != a ? a / (1E3 / d) : 1)
    };
    b.getBounds = function () {
        return this.DisplayObject_getBounds() || this.spriteSheet.getFrameBounds(this.currentFrame, this._rectangle)
    };
    b.clone = function () {
        return this._cloneProps(new c(this.spriteSheet))
    };
    b.toString = function () {
        return "[Sprite (name=" + this.name + ")]"
    };
    b._cloneProps = function (a) {
        return this.DisplayObject__cloneProps(a), a.currentFrame = this.currentFrame, a.currentAnimation = this.currentAnimation, a.paused = this.paused, a.currentAnimationFrame =
            this.currentAnimationFrame, a.framerate = this.framerate, a._animation = this._animation, a._currentFrame = this._currentFrame, a._skipAdvance = this._skipAdvance, a
    };
    b._tick = function (a) {
        this.paused || (this._skipAdvance || this.advance(a && a.delta), this._skipAdvance = !1);
        this.DisplayObject__tick(a)
    };
    b._normalizeFrame = function (a) {
        a = a || 0;
        var d, b = this._animation, c = this.paused, h = this._currentFrame;
        if (b) {
            var k = b.speed || 1, m = this.currentAnimationFrame;
            if (d = b.frames.length, m + a * k >= d) {
                var p = b.next;
                if (this._dispatchAnimationEnd(b,
                    h, c, p, d - 1)) return;
                if (p) return this._goto(p, a - (d - m) / k);
                this.paused = !0;
                m = b.frames.length - 1
            } else m += a * k;
            this.currentAnimationFrame = m;
            this._currentFrame = b.frames[0 | m]
        } else if (h = this._currentFrame += a, d = this.spriteSheet.getNumFrames(), h >= d && 0 < d && !this._dispatchAnimationEnd(b, h, c, d - 1) && (this._currentFrame -= d) >= d) return this._normalizeFrame();
        h = 0 | this._currentFrame;
        this.currentFrame != h && (this.currentFrame = h, this.dispatchEvent("change"))
    };
    b._dispatchAnimationEnd = function (a, d, b, c, h) {
        var k = a ? a.name : null;
        if (this.hasEventListener("animationend")) {
            var m =
                new createjs.Event("animationend");
            m.name = k;
            m.next = c;
            this.dispatchEvent(m)
        }
        a = this._animation != a || this._currentFrame != d;
        return a || b || !this.paused || (this.currentAnimationFrame = h, a = !0), a
    };
    b._goto = function (a, d) {
        if (this.currentAnimationFrame = 0, isNaN(a)) {
            var b = this.spriteSheet.getAnimation(a);
            b && (this._animation = b, this.currentAnimation = a, this._normalizeFrame(d))
        } else this.currentAnimation = this._animation = null, this._currentFrame = a, this._normalizeFrame()
    };
    createjs.Sprite = createjs.promote(c, "DisplayObject")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a) {
        this.DisplayObject_constructor();
        this.graphics = a ? a : new createjs.Graphics
    }

    var b = createjs.extend(c, createjs.DisplayObject);
    b.isVisible = function () {
        var a = this.cacheCanvas || this.graphics && !this.graphics.isEmpty();
        return !!(this.visible && 0 < this.alpha && 0 != this.scaleX && 0 != this.scaleY && a)
    };
    b.draw = function (a, d) {
        return this.DisplayObject_draw(a, d) ? !0 : (this.graphics.draw(a, this), !0)
    };
    b.clone = function (a) {
        a = a && this.graphics ? this.graphics.clone() : this.graphics;
        return this._cloneProps(new c(a))
    };
    b.toString = function () {
        return "[Shape (name=" + this.name + ")]"
    };
    createjs.Shape = createjs.promote(c, "DisplayObject")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, b, c) {
        this.DisplayObject_constructor();
        this.text = a;
        this.font = b;
        this.color = c;
        this.textAlign = "left";
        this.textBaseline = "top";
        this.maxWidth = null;
        this.lineHeight = this.outline = 0;
        this.lineWidth = null
    }

    var b = createjs.extend(c, createjs.DisplayObject),
        a = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
    a.getContext && (c._workingContext = a.getContext("2d"), a.width = a.height = 1);
    c.H_OFFSETS = {start: 0, left: 0, center: -.5, end: -1, right: -1};
    c.V_OFFSETS = {
        top: 0, hanging: -.01,
        middle: -.4, alphabetic: -.8, ideographic: -.85, bottom: -1
    };
    b.isVisible = function () {
        var a = this.cacheCanvas || null != this.text && "" !== this.text;
        return !!(this.visible && 0 < this.alpha && 0 != this.scaleX && 0 != this.scaleY && a)
    };
    b.draw = function (a, b) {
        if (this.DisplayObject_draw(a, b)) return !0;
        var c = this.color || "#000";
        return this.outline ? (a.strokeStyle = c, a.lineWidth = 1 * this.outline) : a.fillStyle = c, this._drawText(this._prepContext(a)), !0
    };
    b.getMeasuredWidth = function () {
        return this._getMeasuredWidth(this.text)
    };
    b.getMeasuredLineHeight =
        function () {
            return 1.2 * this._getMeasuredWidth("M")
        };
    b.getMeasuredHeight = function () {
        return this._drawText(null, {}).height
    };
    b.getBounds = function () {
        var a = this.DisplayObject_getBounds();
        if (a) return a;
        if (null == this.text || "" === this.text) return null;
        var a = this._drawText(null, {}), b = this.maxWidth && this.maxWidth < a.width ? this.maxWidth : a.width,
            f = b * c.H_OFFSETS[this.textAlign || "left"],
            h = (this.lineHeight || this.getMeasuredLineHeight()) * c.V_OFFSETS[this.textBaseline || "top"];
        return this._rectangle.setValues(f, h, b, a.height)
    };
    b.getMetrics = function () {
        var a = {lines: []};
        return a.lineHeight = this.lineHeight || this.getMeasuredLineHeight(), a.vOffset = a.lineHeight * c.V_OFFSETS[this.textBaseline || "top"], this._drawText(null, a, a.lines)
    };
    b.clone = function () {
        return this._cloneProps(new c(this.text, this.font, this.color))
    };
    b.toString = function () {
        return "[Text (text=" + (20 < this.text.length ? this.text.substr(0, 17) + "..." : this.text) + ")]"
    };
    b._cloneProps = function (a) {
        return this.DisplayObject__cloneProps(a), a.textAlign = this.textAlign, a.textBaseline =
            this.textBaseline, a.maxWidth = this.maxWidth, a.outline = this.outline, a.lineHeight = this.lineHeight, a.lineWidth = this.lineWidth, a
    };
    b._prepContext = function (a) {
        return a.font = this.font || "10px sans-serif", a.textAlign = this.textAlign || "left", a.textBaseline = this.textBaseline || "top", a
    };
    b._drawText = function (a, b, f) {
        var h = !!a;
        h || (a = c._workingContext, a.save(), this._prepContext(a));
        for (var k = this.lineHeight || this.getMeasuredLineHeight(), m = 0, p = 0, q = String(this.text).split(/(?:\r\n|\r|\n)/), u = 0, v = q.length; v > u; u++) {
            var z =
                q[u], y = null;
            if (null != this.lineWidth && (y = a.measureText(z).width) > this.lineWidth) for (var t = z.split(/(\s)/), z = t[0], y = a.measureText(z).width, B = 1, C = t.length; C > B; B += 2) {
                var I = a.measureText(t[B] + t[B + 1]).width;
                y + I > this.lineWidth ? (h && this._drawTextLine(a, z, p * k), f && f.push(z), y > m && (m = y), z = t[B + 1], y = a.measureText(z).width, p++) : (z += t[B] + t[B + 1], y += I)
            }
            h && this._drawTextLine(a, z, p * k);
            f && f.push(z);
            b && null == y && (y = a.measureText(z).width);
            y > m && (m = y);
            p++
        }
        return b && (b.width = m, b.height = p * k), h || a.restore(), b
    };
    b._drawTextLine =
        function (a, b, c) {
            this.outline ? a.strokeText(b, 0, c, this.maxWidth || 65535) : a.fillText(b, 0, c, this.maxWidth || 65535)
        };
    b._getMeasuredWidth = function (a) {
        var b = c._workingContext;
        b.save();
        a = this._prepContext(b).measureText(a).width;
        return b.restore(), a
    };
    createjs.Text = createjs.promote(c, "DisplayObject")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, d) {
        this.Container_constructor();
        this.text = a || "";
        this.spriteSheet = d;
        this.spaceWidth = this.letterSpacing = this.lineHeight = 0;
        this._oldProps = {text: 0, spriteSheet: 0, lineHeight: 0, letterSpacing: 0, spaceWidth: 0}
    }

    var b = createjs.extend(c, createjs.Container);
    c.maxPoolSize = 100;
    c._spritePool = [];
    b.draw = function (a, d) {
        this.DisplayObject_draw(a, d) || (this._updateText(), this.Container_draw(a, d))
    };
    b.getBounds = function () {
        return this._updateText(), this.Container_getBounds()
    };
    b.isVisible = function () {
        var a =
            this.cacheCanvas || this.spriteSheet && this.spriteSheet.complete && this.text;
        return !!(this.visible && 0 < this.alpha && 0 !== this.scaleX && 0 !== this.scaleY && a)
    };
    b.clone = function () {
        return this._cloneProps(new c(this.text, this.spriteSheet))
    };
    b.addChild = b.addChildAt = b.removeChild = b.removeChildAt = b.removeAllChildren = function () {
    };
    b._cloneProps = function (a) {
        return this.Container__cloneProps(a), a.lineHeight = this.lineHeight, a.letterSpacing = this.letterSpacing, a.spaceWidth = this.spaceWidth, a
    };
    b._getFrameIndex = function (a,
                                 d) {
        var b, c = d.getAnimation(a);
        return c || (a != (b = a.toUpperCase()) || a != (b = a.toLowerCase()) || (b = null), b && (c = d.getAnimation(b))), c && c.frames[0]
    };
    b._getFrame = function (a, d) {
        var b = this._getFrameIndex(a, d);
        return null == b ? b : d.getFrame(b)
    };
    b._getLineHeight = function (a) {
        return (a = this._getFrame("1", a) || this._getFrame("T", a) || this._getFrame("L", a) || a.getFrame(0)) ? a.rect.height : 1
    };
    b._getSpaceWidth = function (a) {
        return (a = this._getFrame("1", a) || this._getFrame("l", a) || this._getFrame("e", a) || this._getFrame("a", a) || a.getFrame(0)) ?
            a.rect.width : 1
    };
    b._updateText = function () {
        var a, d = 0, b = 0, f = this._oldProps, h = !1, k = this.spaceWidth, m = this.lineHeight, p = this.spriteSheet,
            q = c._spritePool, u = this.children, v = 0, z = u.length, y;
        for (y in f) f[y] != this[y] && (f[y] = this[y], h = !0);
        if (h) {
            (f = !!this._getFrame(" ", p)) || k || (k = this._getSpaceWidth(p));
            m || (m = this._getLineHeight(p));
            h = 0;
            for (y = this.text.length; y > h; h++) {
                var t = this.text.charAt(h);
                " " != t || f ? "\n" != t && "\r" != t ? (t = this._getFrameIndex(t, p), null != t && (z > v ? a = u[v] : (u.push(a = q.length ? q.pop() : new createjs.Sprite),
                    a.parent = this, z++), a.spriteSheet = p, a.gotoAndStop(t), a.x = d, a.y = b, v++, d += a.getBounds().width + this.letterSpacing)) : ("\r" == t && "\n" == this.text.charAt(h + 1) && h++, d = 0, b += m) : d += k
            }
            for (; z > v;) q.push(a = u.pop()), a.parent = null, z--;
            q.length > c.maxPoolSize && (q.length = c.maxPoolSize)
        }
    };
    createjs.BitmapText = createjs.promote(c, "Container")
})();
this.createjs = this.createjs || {};
(function () {
    function c() {
        throw"SpriteSheetUtils cannot be instantiated";
    }

    var b = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
    b.getContext && (c._workingCanvas = b, c._workingContext = b.getContext("2d"), b.width = b.height = 1);
    c.addFlippedFrames = function (a, d, b, f) {
        if (d || b || f) {
            var h = 0;
            d && c._flip(a, ++h, !0, !1);
            b && c._flip(a, ++h, !1, !0);
            f && c._flip(a, ++h, !0, !0)
        }
    };
    c.extractFrame = function (a, d) {
        isNaN(d) && (d = a.getAnimation(d).frames[0]);
        var b = a.getFrame(d);
        if (!b) return null;
        var f = b.rect,
            h = c._workingCanvas;
        h.width = f.width;
        h.height = f.height;
        c._workingContext.drawImage(b.image, f.x, f.y, f.width, f.height, 0, 0, f.width, f.height);
        b = document.createElement("img");
        return b.src = h.toDataURL("image/png"), b
    };
    c.mergeAlpha = function (a, d, b) {
        b || (b = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"));
        b.width = Math.max(d.width, a.width);
        b.height = Math.max(d.height, a.height);
        var c = b.getContext("2d");
        return c.save(), c.drawImage(a, 0, 0), c.globalCompositeOperation = "destination-in", c.drawImage(d,
            0, 0), c.restore(), b
    };
    c._flip = function (a, d, b, f) {
        for (var h = a._images, k = c._workingCanvas, m = c._workingContext, p = h.length / d, q = 0; p > q; q++) {
            var u = h[q];
            u.__tmp = q;
            m.setTransform(1, 0, 0, 1, 0, 0);
            m.clearRect(0, 0, k.width + 1, k.height + 1);
            k.width = u.width;
            k.height = u.height;
            m.setTransform(b ? -1 : 1, 0, 0, f ? -1 : 1, b ? u.width : 0, f ? u.height : 0);
            m.drawImage(u, 0, 0);
            var v = document.createElement("img");
            v.src = k.toDataURL("image/png");
            v.width = u.width;
            v.height = u.height;
            h.push(v)
        }
        m = a._frames;
        k = m.length / d;
        for (q = 0; k > q; q++) {
            var u = m[q], z = u.rect.clone(),
                v = h[u.image.__tmp + p * d], y = {image: v, rect: z, regX: u.regX, regY: u.regY};
            b && (z.x = v.width - z.x - z.width, y.regX = z.width - u.regX);
            f && (z.y = v.height - z.y - z.height, y.regY = z.height - u.regY);
            m.push(y)
        }
        b = "_" + (b ? "h" : "") + (f ? "v" : "");
        f = a._animations;
        a = a._data;
        h = f.length / d;
        for (q = 0; h > q; q++) {
            m = f[q];
            u = a[m];
            p = {name: m + b, speed: u.speed, next: u.next, frames: []};
            u.next && (p.next += b);
            m = u.frames;
            u = 0;
            for (v = m.length; v > u; u++) p.frames.push(m[u] + k * d);
            a[p.name] = p;
            f.push(p.name)
        }
    };
    createjs.SpriteSheetUtils = c
})();
this.createjs = this.createjs || {};
(function () {
    function c() {
        this.EventDispatcher_constructor();
        this.maxHeight = this.maxWidth = 2048;
        this.spriteSheet = null;
        this.padding = this.scale = 1;
        this.timeSlice = .3;
        this.progress = -1;
        this._frames = [];
        this._animations = {};
        this._data = null;
        this._index = this._nextFrameIndex = 0;
        this._timerID = null;
        this._scale = 1
    }

    var b = createjs.extend(c, createjs.EventDispatcher);
    c.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions";
    c.ERR_RUNNING = "a build is already running";
    b.addFrame = function (a, d, b, f, h) {
        if (this._data) throw c.ERR_RUNNING;
        d = d || a.bounds || a.nominalBounds;
        return !d && a.getBounds && (d = a.getBounds()), d ? (b = b || 1, this._frames.push({
            source: a,
            sourceRect: d,
            scale: b,
            funct: f,
            data: h,
            index: this._frames.length,
            height: d.height * b
        }) - 1) : null
    };
    b.addAnimation = function (a, d, b, f) {
        if (this._data) throw c.ERR_RUNNING;
        this._animations[a] = {frames: d, next: b, frequency: f}
    };
    b.addMovieClip = function (a, d, b, f, h, k) {
        if (this._data) throw c.ERR_RUNNING;
        var m = a.frameBounds, p = d || a.bounds || a.nominalBounds;
        if (!p && a.getBounds && (p = a.getBounds()), p || m) {
            var q, u;
            d = this._frames.length;
            var v = a.timeline.duration;
            for (q = 0; v > q; q++) this.addFrame(a, m && m[q] ? m[q] : p, b, this._setupMovieClipFrame, {
                i: q,
                f: f,
                d: h
            });
            q = a.timeline._labels;
            b = [];
            for (u in q) b.push({index: q[u], label: u});
            if (b.length) for (b.sort(function (a, d) {
                return a.index - d.index
            }), q = 0, u = b.length; u > q; q++) {
                f = b[q].label;
                h = d + b[q].index;
                for (var m = d + (q == u - 1 ? v : b[q + 1].index), p = [], z = h; m > z; z++) p.push(z);
                k && !(f = k(f, a, h, m)) || this.addAnimation(f, p, !0)
            }
        }
    };
    b.build = function () {
        if (this._data) throw c.ERR_RUNNING;
        for (this._startBuild(); this._drawNext();) ;
        return this._endBuild(), this.spriteSheet
    };
    b.buildAsync = function (a) {
        if (this._data) throw c.ERR_RUNNING;
        this.timeSlice = a;
        this._startBuild();
        var d = this;
        this._timerID = setTimeout(function () {
            d._run()
        }, 50 - 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)))
    };
    b.stopAsync = function () {
        clearTimeout(this._timerID);
        this._data = null
    };
    b.clone = function () {
        throw"SpriteSheetBuilder cannot be cloned.";
    };
    b.toString = function () {
        return "[SpriteSheetBuilder]"
    };
    b._startBuild = function () {
        var a = this.padding || 0;
        this.progress = 0;
        this.spriteSheet =
            null;
        this._index = 0;
        this._scale = this.scale;
        var d = [];
        this._data = {images: [], frames: d, animations: this._animations};
        var b = this._frames.slice();
        if (b.sort(function (a, d) {
            return a.height <= d.height ? -1 : 1
        }), b[b.length - 1].height + 2 * a > this.maxHeight) throw c.ERR_DIMENSIONS;
        for (var f = 0, h = 0, k = 0; b.length;) {
            var m = this._fillRow(b, f, k, d, a);
            if (m.w > h && (h = m.w), f += m.h, !m.h || !b.length) {
                var p = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
                p.width = this._getSize(h, this.maxWidth);
                p.height = this._getSize(f,
                    this.maxHeight);
                this._data.images[k] = p;
                m.h || (h = f = 0, k++)
            }
        }
    };
    b._setupMovieClipFrame = function (a, d) {
        var b = a.actionsEnabled;
        a.actionsEnabled = !1;
        a.gotoAndStop(d.i);
        a.actionsEnabled = b;
        d.f && d.f(a, d.d, d.i)
    };
    b._getSize = function (a, d) {
        for (var b = 4; Math.pow(2, ++b) < a;) ;
        return Math.min(d, Math.pow(2, b))
    };
    b._fillRow = function (a, d, b, f, h) {
        var k = this.maxWidth, m = this.maxHeight;
        d += h;
        for (var m = m - d, p = h, q = 0, u = a.length - 1; 0 <= u; u--) {
            var v = a[u], z = this._scale * v.scale, y = v.sourceRect, t = v.source, B = Math.floor(z * y.x - h),
                C = Math.floor(z *
                    y.y - h), I = Math.ceil(z * y.height + 2 * h), y = Math.ceil(z * y.width + 2 * h);
            if (y > k) throw c.ERR_DIMENSIONS;
            I > m || p + y > k || (v.img = b, v.rect = new createjs.Rectangle(p, d, y, I), q = q || I, a.splice(u, 1), f[v.index] = [p, d, y, I, b, Math.round(-B + z * t.regX - h), Math.round(-C + z * t.regY - h)], p += y)
        }
        return {w: p, h: q}
    };
    b._endBuild = function () {
        this.spriteSheet = new createjs.SpriteSheet(this._data);
        this._data = null;
        this.progress = 1;
        this.dispatchEvent("complete")
    };
    b._run = function () {
        for (var a = 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)), d = (new Date).getTime() +
            a, b = !1; d > (new Date).getTime();) if (!this._drawNext()) {
            b = !0;
            break
        }
        if (b) this._endBuild(); else {
            var c = this;
            this._timerID = setTimeout(function () {
                c._run()
            }, 50 - a)
        }
        a = this.progress = this._index / this._frames.length;
        this.hasEventListener("progress") && (d = new createjs.Event("progress"), d.progress = a, this.dispatchEvent(d))
    };
    b._drawNext = function () {
        var a = this._frames[this._index], d = a.scale * this._scale, b = a.rect, c = a.sourceRect,
            h = this._data.images[a.img].getContext("2d");
        return a.funct && a.funct(a.source, a.data), h.save(),
            h.beginPath(), h.rect(b.x, b.y, b.width, b.height), h.clip(), h.translate(Math.ceil(b.x - c.x * d), Math.ceil(b.y - c.y * d)), h.scale(d, d), a.source.draw(h), h.restore(), ++this._index < this._frames.length
    };
    createjs.SpriteSheetBuilder = createjs.promote(c, "EventDispatcher")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a) {
        this.DisplayObject_constructor();
        "string" == typeof a && (a = document.getElementById(a));
        this.mouseEnabled = !1;
        var d = a.style;
        d.position = "absolute";
        d.transformOrigin = d.WebkitTransformOrigin = d.msTransformOrigin = d.MozTransformOrigin = d.OTransformOrigin = "0% 0%";
        this.htmlElement = a;
        this._oldProps = null
    }

    var b = createjs.extend(c, createjs.DisplayObject);
    b.isVisible = function () {
        return null != this.htmlElement
    };
    b.draw = function () {
        return !0
    };
    b.cache = function () {
    };
    b.uncache = function () {
    };
    b.updateCache =
        function () {
        };
    b.hitTest = function () {
    };
    b.localToGlobal = function () {
    };
    b.globalToLocal = function () {
    };
    b.localToLocal = function () {
    };
    b.clone = function () {
        throw"DOMElement cannot be cloned.";
    };
    b.toString = function () {
        return "[DOMElement (name=" + this.name + ")]"
    };
    b._tick = function (a) {
        var d = this.getStage();
        d && d.on("drawend", this._handleDrawEnd, this, !0);
        this.DisplayObject__tick(a)
    };
    b._handleDrawEnd = function () {
        var a = this.htmlElement;
        if (a) {
            var a = a.style, d = this.getConcatenatedDisplayProps(this._props), b = d.matrix, c = d.visible ?
                "visible" : "hidden";
            if (c != a.visibility && (a.visibility = c), d.visible) {
                var h = (c = this._oldProps) && c.matrix;
                h && h.equals(b) || (h = "matrix(" + (1E4 * b.a | 0) / 1E4 + "," + (1E4 * b.b | 0) / 1E4 + "," + (1E4 * b.c | 0) / 1E4 + "," + (1E4 * b.d | 0) / 1E4 + "," + (b.tx + .5 | 0), a.transform = a.WebkitTransform = a.OTransform = a.msTransform = h + "," + (b.ty + .5 | 0) + ")", a.MozTransform = h + "px," + (b.ty + .5 | 0) + "px)", c || (c = this._oldProps = new createjs.DisplayProps(!0, 0 / 0)), c.matrix.copy(b));
                c.alpha != d.alpha && (a.opacity = "" + (1E4 * d.alpha | 0) / 1E4, c.alpha = d.alpha)
            }
        }
    };
    createjs.DOMElement =
        createjs.promote(c, "DisplayObject")
})();
this.createjs = this.createjs || {};
(function () {
    function c() {
    }

    var b = c.prototype;
    b.getBounds = function (a) {
        return a
    };
    b.applyFilter = function (a, d, b, c, h, k, m, p) {
        k = k || a;
        null == m && (m = d);
        null == p && (p = b);
        try {
            var q = a.getImageData(d, b, c, h)
        } catch (u) {
            return !1
        }
        return this._applyFilter(q) ? (k.putImageData(q, m, p), !0) : !1
    };
    b.toString = function () {
        return "[Filter]"
    };
    b.clone = function () {
        return new c
    };
    b._applyFilter = function () {
        return !0
    };
    createjs.Filter = c
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, d, b) {
        (isNaN(a) || 0 > a) && (a = 0);
        (isNaN(d) || 0 > d) && (d = 0);
        (isNaN(b) || 1 > b) && (b = 1);
        this.blurX = 0 | a;
        this.blurY = 0 | d;
        this.quality = 0 | b
    }

    var b = createjs.extend(c, createjs.Filter);
    c.MUL_TABLE = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209,
        413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309,
        307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1];
    c.SHG_TABLE = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14,
        16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9];
    b.getBounds = function (a) {
        var d = 0 | this.blurX, b = 0 | this.blurY;
        if (0 >=
            d && 0 >= b) return a;
        var c = Math.pow(this.quality, .2);
        return (a || new createjs.Rectangle).pad(d * c + 1, b * c + 1, d * c + 1, b * c + 1)
    };
    b.clone = function () {
        return new c(this.blurX, this.blurY, this.quality)
    };
    b.toString = function () {
        return "[BlurFilter]"
    };
    b._applyFilter = function (a) {
        var d = this.blurX >> 1;
        if (isNaN(d) || 0 > d) return !1;
        var b = this.blurY >> 1;
        if (isNaN(b) || 0 > b || 0 == d && 0 == b) return !1;
        var f = this.quality;
        (isNaN(f) || 1 > f) && (f = 1);
        f |= 0;
        3 < f && (f = 3);
        1 > f && (f = 1);
        var h = a.data, k = 0, m = 0, p = 0, q = 0, u = 0, v = 0, z = 0, y = 0, t = 0, B = 0, C = 0, I = 0, T = 0,
            O = 0, u = 0, y =
            d + d + 1 | 0, v = b + b + 1 | 0, G = 0 | a.width;
        a = 0 | a.height;
        for (var g = G - 1 | 0, M = a - 1 | 0, H = d + 1 | 0, K = b + 1 | 0, Q = {
            r: 0,
            b: 0,
            g: 0,
            a: 0
        }, k = Q, p = 1; y > p; p++) k = k.n = {r: 0, b: 0, g: 0, a: 0};
        k.n = Q;
        for (var L = {r: 0, b: 0, g: 0, a: 0}, m = L, p = 1; v > p; p++) m = m.n = {r: 0, b: 0, g: 0, a: 0};
        m.n = L;
        for (var p = null, D = 0 | c.MUL_TABLE[d], U = 0 | c.SHG_TABLE[d], W = 0 | c.MUL_TABLE[b], E = 0 | c.SHG_TABLE[b]; 0 < f--;) {
            for (var z = v = 0, V = D, Z = U, m = a; -1 < --m;) {
                y = H * (I = h[0 | v]);
                t = H * (T = h[v + 1 | 0]);
                B = H * (O = h[v + 2 | 0]);
                C = H * (u = h[v + 3 | 0]);
                k = Q;
                for (p = H; -1 < --p;) k.r = I, k.g = T, k.b = O, k.a = u, k = k.n;
                for (p = 1; H > p; p++) q = v + ((p > g ? g :
                    p) << 2) | 0, y += k.r = h[q], t += k.g = h[q + 1], B += k.b = h[q + 2], C += k.a = h[q + 3], k = k.n;
                p = Q;
                for (k = 0; G > k; k++) h[v++] = y * V >>> Z, h[v++] = t * V >>> Z, h[v++] = B * V >>> Z, h[v++] = C * V >>> Z, q = z + ((q = k + d + 1) < g ? q : g) << 2, y -= p.r - (p.r = h[q]), t -= p.g - (p.g = h[q + 1]), B -= p.b - (p.b = h[q + 2]), C -= p.a - (p.a = h[q + 3]), p = p.n;
                z += G
            }
            V = W;
            Z = E;
            for (k = 0; G > k; k++) {
                v = k << 2 | 0;
                y = K * (I = h[v]) | 0;
                t = K * (T = h[v + 1 | 0]) | 0;
                B = K * (O = h[v + 2 | 0]) | 0;
                C = K * (u = h[v + 3 | 0]) | 0;
                m = L;
                for (p = 0; K > p; p++) m.r = I, m.g = T, m.b = O, m.a = u, m = m.n;
                u = G;
                for (p = 1; b >= p; p++) v = u + k << 2, y += m.r = h[v], t += m.g = h[v + 1], B += m.b = h[v + 2], C += m.a = h[v + 3],
                    m = m.n, M > p && (u += G);
                if (v = k, p = L, 0 < f) for (m = 0; a > m; m++) q = v << 2, h[q + 3] = u = C * V >>> Z, 0 < u ? (h[q] = y * V >>> Z, h[q + 1] = t * V >>> Z, h[q + 2] = B * V >>> Z) : h[q] = h[q + 1] = h[q + 2] = 0, q = k + ((q = m + K) < M ? q : M) * G << 2, y -= p.r - (p.r = h[q]), t -= p.g - (p.g = h[q + 1]), B -= p.b - (p.b = h[q + 2]), C -= p.a - (p.a = h[q + 3]), p = p.n, v += G; else for (m = 0; a > m; m++) q = v << 2, h[q + 3] = u = C * V >>> Z, 0 < u ? (u = 255 / u, h[q] = (y * V >>> Z) * u, h[q + 1] = (t * V >>> Z) * u, h[q + 2] = (B * V >>> Z) * u) : h[q] = h[q + 1] = h[q + 2] = 0, q = k + ((q = m + K) < M ? q : M) * G << 2, y -= p.r - (p.r = h[q]), t -= p.g - (p.g = h[q + 1]), B -= p.b - (p.b = h[q + 2]), C -= p.a - (p.a = h[q + 3]), p = p.n,
                    v += G
            }
        }
        return !0
    };
    createjs.BlurFilter = createjs.promote(c, "Filter")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a) {
        this.alphaMap = a;
        this._mapData = this._alphaMap = null
    }

    var b = createjs.extend(c, createjs.Filter);
    b.clone = function () {
        var a = new c(this.alphaMap);
        return a._alphaMap = this._alphaMap, a._mapData = this._mapData, a
    };
    b.toString = function () {
        return "[AlphaMapFilter]"
    };
    b._applyFilter = function (a) {
        if (!this.alphaMap) return !0;
        if (!this._prepAlphaMap()) return !1;
        a = a.data;
        for (var d = this._mapData, b = 0, c = a.length; c > b; b += 4) a[b + 3] = d[b] || 0;
        return !0
    };
    b._prepAlphaMap = function () {
        if (!this.alphaMap) return !1;
        if (this.alphaMap ==
            this._alphaMap && this._mapData) return !0;
        this._mapData = null;
        var a, d = this._alphaMap = this.alphaMap, b = d;
        d instanceof HTMLCanvasElement ? a = b.getContext("2d") : (b = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"), b.width = d.width, b.height = d.height, a = b.getContext("2d"), a.drawImage(d, 0, 0));
        try {
            var c = a.getImageData(0, 0, d.width, d.height)
        } catch (h) {
            return !1
        }
        return this._mapData = c.data, !0
    };
    createjs.AlphaMapFilter = createjs.promote(c, "Filter")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a) {
        this.mask = a
    }

    var b = createjs.extend(c, createjs.Filter);
    b.applyFilter = function (a, d, b, c, h, k, m, p) {
        return this.mask ? (k = k || a, null == m && (m = d), null == p && (p = b), k.save(), a != k ? !1 : (k.globalCompositeOperation = "destination-in", k.drawImage(this.mask, m, p), k.restore(), !0)) : !0
    };
    b.clone = function () {
        return new c(this.mask)
    };
    b.toString = function () {
        return "[AlphaMaskFilter]"
    };
    createjs.AlphaMaskFilter = createjs.promote(c, "Filter")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, d, b, c, h, k, m, p) {
        this.redMultiplier = null != a ? a : 1;
        this.greenMultiplier = null != d ? d : 1;
        this.blueMultiplier = null != b ? b : 1;
        this.alphaMultiplier = null != c ? c : 1;
        this.redOffset = h || 0;
        this.greenOffset = k || 0;
        this.blueOffset = m || 0;
        this.alphaOffset = p || 0
    }

    var b = createjs.extend(c, createjs.Filter);
    b.toString = function () {
        return "[ColorFilter]"
    };
    b.clone = function () {
        return new c(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset,
            this.alphaOffset)
    };
    b._applyFilter = function (a) {
        a = a.data;
        for (var b = a.length, e = 0; b > e; e += 4) a[e] = a[e] * this.redMultiplier + this.redOffset, a[e + 1] = a[e + 1] * this.greenMultiplier + this.greenOffset, a[e + 2] = a[e + 2] * this.blueMultiplier + this.blueOffset, a[e + 3] = a[e + 3] * this.alphaMultiplier + this.alphaOffset;
        return !0
    };
    createjs.ColorFilter = createjs.promote(c, "Filter")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, b, e, c) {
        this.setColor(a, b, e, c)
    }

    var b = c.prototype;
    c.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10];
    c.IDENTITY_MATRIX =
        [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
    c.LENGTH = c.IDENTITY_MATRIX.length;
    b.setColor = function (a, b, e, c) {
        return this.reset().adjustColor(a, b, e, c)
    };
    b.reset = function () {
        return this.copy(c.IDENTITY_MATRIX)
    };
    b.adjustColor = function (a, b, e, c) {
        return this.adjustHue(c), this.adjustContrast(b), this.adjustBrightness(a), this.adjustSaturation(e)
    };
    b.adjustBrightness = function (a) {
        return 0 == a || isNaN(a) ? this : (a = this._cleanValue(a, 255), this._multiplyMatrix([1, 0, 0, 0, a, 0, 1, 0, 0, a, 0, 0, 1, 0, a, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]),
            this)
    };
    b.adjustContrast = function (a) {
        if (0 == a || isNaN(a)) return this;
        a = this._cleanValue(a, 100);
        var b;
        return 0 > a ? b = 127 + a / 100 * 127 : (b = a % 1, b = 0 == b ? c.DELTA_INDEX[a] : c.DELTA_INDEX[a << 0] * (1 - b) + c.DELTA_INDEX[(a << 0) + 1] * b, b = 127 * b + 127), this._multiplyMatrix([b / 127, 0, 0, 0, .5 * (127 - b), 0, b / 127, 0, 0, .5 * (127 - b), 0, 0, b / 127, 0, .5 * (127 - b), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
    };
    b.adjustSaturation = function (a) {
        if (0 == a || isNaN(a)) return this;
        a = this._cleanValue(a, 100);
        a = 1 + (0 < a ? 3 * a / 100 : a / 100);
        return this._multiplyMatrix([.3086 * (1 - a) + a, .6094 * (1 -
            a), .082 * (1 - a), 0, 0, .3086 * (1 - a), .6094 * (1 - a) + a, .082 * (1 - a), 0, 0, .3086 * (1 - a), .6094 * (1 - a), .082 * (1 - a) + a, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
    };
    b.adjustHue = function (a) {
        if (0 == a || isNaN(a)) return this;
        a = this._cleanValue(a, 180) / 180 * Math.PI;
        var b = Math.cos(a);
        a = Math.sin(a);
        return this._multiplyMatrix([.213 + .787 * b + -.213 * a, .715 + -.715 * b + -.715 * a, .072 + -.072 * b + .928 * a, 0, 0, .213 + -.213 * b + .143 * a, .715 + b * (1 - .715) + .14 * a, .072 + -.072 * b + -.283 * a, 0, 0, .213 + -.213 * b + -.787 * a, .715 + -.715 * b + .715 * a, .072 + .928 * b + .072 * a, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
    };
    b.concat = function (a) {
        return a = this._fixMatrix(a), a.length != c.LENGTH ? this : (this._multiplyMatrix(a), this)
    };
    b.clone = function () {
        return (new c).copy(this)
    };
    b.toArray = function () {
        for (var a = [], b = 0, e = c.LENGTH; e > b; b++) a[b] = this[b];
        return a
    };
    b.copy = function (a) {
        for (var b = c.LENGTH, e = 0; b > e; e++) this[e] = a[e];
        return this
    };
    b.toString = function () {
        return "[ColorMatrix]"
    };
    b._multiplyMatrix = function (a) {
        var b, e, c, h = [];
        for (b = 0; 5 > b; b++) {
            for (e = 0; 5 > e; e++) h[e] = this[e + 5 * b];
            for (e = 0; 5 > e; e++) {
                var k = 0;
                for (c = 0; 5 > c; c++) k += a[e + 5 * c] * h[c];
                this[e + 5 * b] = k
            }
        }
    };
    b._cleanValue = function (a, b) {
        return Math.min(b, Math.max(-b, a))
    };
    b._fixMatrix = function (a) {
        return a instanceof c && (a = a.toArray()), a.length < c.LENGTH ? a = a.slice(0, a.length).concat(c.IDENTITY_MATRIX.slice(a.length, c.LENGTH)) : a.length > c.LENGTH && (a = a.slice(0, c.LENGTH)), a
    };
    createjs.ColorMatrix = c
})();
this.createjs = this.createjs || {};
(function () {
    function c(a) {
        this.matrix = a
    }

    var b = createjs.extend(c, createjs.Filter);
    b.toString = function () {
        return "[ColorMatrixFilter]"
    };
    b.clone = function () {
        return new c(this.matrix)
    };
    b._applyFilter = function (a) {
        var b, e, c, h;
        a = a.data;
        var k = a.length;
        b = this.matrix;
        for (var m = b[0], p = b[1], q = b[2], u = b[3], v = b[4], z = b[5], y = b[6], t = b[7], B = b[8], C = b[9], I = b[10], T = b[11], O = b[12], G = b[13], g = b[14], M = b[15], H = b[16], K = b[17], Q = b[18], L = b[19], D = 0; k > D; D += 4) b = a[D], e = a[D + 1], c = a[D + 2], h = a[D + 3], a[D] = b * m + e * p + c * q + h * u + v, a[D + 1] = b * z + e * y + c * t +
            h * B + C, a[D + 2] = b * I + e * T + c * O + h * G + g, a[D + 3] = b * M + e * H + c * K + h * Q + L;
        return !0
    };
    createjs.ColorMatrixFilter = createjs.promote(c, "Filter")
})();
this.createjs = this.createjs || {};
(function () {
    function c() {
        throw"Touch cannot be instantiated";
    }

    c.isSupported = function () {
        return !!("ontouchstart" in window || window.navigator.msPointerEnabled && 0 < window.navigator.msMaxTouchPoints || window.navigator.pointerEnabled && 0 < window.navigator.maxTouchPoints)
    };
    c.enable = function (b, a, d) {
        return b && b.canvas && c.isSupported() ? b.__touch ? !0 : (b.__touch = {
            pointers: {},
            multitouch: !a,
            preventDefault: !d,
            count: 0
        }, "ontouchstart" in window ? c._IOS_enable(b) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) &&
            c._IE_enable(b), !0) : !1
    };
    c.disable = function (b) {
        b && ("ontouchstart" in window ? c._IOS_disable(b) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && c._IE_disable(b), delete b.__touch)
    };
    c._IOS_enable = function (b) {
        var a = b.canvas, d = b.__touch.f = function (a) {
            c._IOS_handleEvent(b, a)
        };
        a.addEventListener("touchstart", d, !1);
        a.addEventListener("touchmove", d, !1);
        a.addEventListener("touchend", d, !1);
        a.addEventListener("touchcancel", d, !1)
    };
    c._IOS_disable = function (b) {
        var a = b.canvas;
        a && (b = b.__touch.f,
            a.removeEventListener("touchstart", b, !1), a.removeEventListener("touchmove", b, !1), a.removeEventListener("touchend", b, !1), a.removeEventListener("touchcancel", b, !1))
    };
    c._IOS_handleEvent = function (b, a) {
        if (b) {
            b.__touch.preventDefault && a.preventDefault && a.preventDefault();
            for (var d = a.changedTouches, c = a.type, f = 0, h = d.length; h > f; f++) {
                var k = d[f], m = k.identifier;
                k.target == b.canvas && ("touchstart" == c ? this._handleStart(b, m, a, k.pageX, k.pageY) : "touchmove" == c ? this._handleMove(b, m, a, k.pageX, k.pageY) : ("touchend" == c ||
                    "touchcancel" == c) && this._handleEnd(b, m, a))
            }
        }
    };
    c._IE_enable = function (b) {
        var a = b.canvas, d = b.__touch.f = function (a) {
            c._IE_handleEvent(b, a)
        };
        void 0 === window.navigator.pointerEnabled ? (a.addEventListener("MSPointerDown", d, !1), window.addEventListener("MSPointerMove", d, !1), window.addEventListener("MSPointerUp", d, !1), window.addEventListener("MSPointerCancel", d, !1), b.__touch.preventDefault && (a.style.msTouchAction = "none")) : (a.addEventListener("pointerdown", d, !1), window.addEventListener("pointermove", d, !1), window.addEventListener("pointerup",
            d, !1), window.addEventListener("pointercancel", d, !1), b.__touch.preventDefault && (a.style.touchAction = "none"));
        b.__touch.activeIDs = {}
    };
    c._IE_disable = function (b) {
        var a = b.__touch.f;
        void 0 === window.navigator.pointerEnabled ? (window.removeEventListener("MSPointerMove", a, !1), window.removeEventListener("MSPointerUp", a, !1), window.removeEventListener("MSPointerCancel", a, !1), b.canvas && b.canvas.removeEventListener("MSPointerDown", a, !1)) : (window.removeEventListener("pointermove", a, !1), window.removeEventListener("pointerup",
            a, !1), window.removeEventListener("pointercancel", a, !1), b.canvas && b.canvas.removeEventListener("pointerdown", a, !1))
    };
    c._IE_handleEvent = function (b, a) {
        if (b) {
            b.__touch.preventDefault && a.preventDefault && a.preventDefault();
            var d = a.type, c = a.pointerId, f = b.__touch.activeIDs;
            "MSPointerDown" == d || "pointerdown" == d ? a.srcElement == b.canvas && (f[c] = !0, this._handleStart(b, c, a, a.pageX, a.pageY)) : f[c] && ("MSPointerMove" == d || "pointermove" == d ? this._handleMove(b, c, a, a.pageX, a.pageY) : ("MSPointerUp" == d || "MSPointerCancel" == d ||
                "pointerup" == d || "pointercancel" == d) && (delete f[c], this._handleEnd(b, c, a)))
        }
    };
    c._handleStart = function (b, a, d, c, f) {
        var h = b.__touch;
        if (h.multitouch || !h.count) {
            var k = h.pointers;
            k[a] || (k[a] = !0, h.count++, b._handlePointerDown(a, d, c, f))
        }
    };
    c._handleMove = function (b, a, d, c, f) {
        b.__touch.pointers[a] && b._handlePointerMove(a, d, c, f)
    };
    c._handleEnd = function (b, a, d) {
        var c = b.__touch, f = c.pointers;
        f[a] && (c.count--, b._handlePointerUp(a, d, !0), delete f[a])
    };
    createjs.Touch = c
})();
this.createjs = this.createjs || {};
(function () {
    var c = createjs.EaselJS = createjs.EaselJS || {};
    c.version = "0.8.1";
    c.buildDate = "Thu, 21 May 2015 16:17:39 GMT"
})();
this.createjs = this.createjs || {};
(function () {
    var c = createjs.PreloadJS = createjs.PreloadJS || {};
    c.version = "0.6.1";
    c.buildDate = "Thu, 21 May 2015 16:17:37 GMT"
})();
this.createjs = this.createjs || {};
(function () {
    createjs.proxy = function (c, b) {
        var a = Array.prototype.slice.call(arguments, 2);
        return function () {
            return c.apply(b, Array.prototype.slice.call(arguments, 0).concat(a))
        }
    }
})();
this.createjs = this.createjs || {};
(function () {
    function c() {
        throw"BrowserDetect cannot be instantiated";
    }

    var b = c.agent = window.navigator.userAgent;
    c.isWindowPhone = -1 < b.indexOf("IEMobile") || -1 < b.indexOf("Windows Phone");
    c.isFirefox = -1 < b.indexOf("Firefox");
    c.isOpera = null != window.opera;
    c.isChrome = -1 < b.indexOf("Chrome");
    c.isIOS = (-1 < b.indexOf("iPod") || -1 < b.indexOf("iPhone") || -1 < b.indexOf("iPad")) && !c.isWindowPhone;
    c.isAndroid = -1 < b.indexOf("Android") && !c.isWindowPhone;
    c.isBlackberry = -1 < b.indexOf("Blackberry");
    createjs.BrowserDetect = c
})();
this.createjs = this.createjs || {};
(function () {
    function c(b, a, d) {
        this.Event_constructor("error");
        this.title = b;
        this.message = a;
        this.data = d
    }

    createjs.extend(c, createjs.Event).clone = function () {
        return new createjs.ErrorEvent(this.title, this.message, this.data)
    };
    createjs.ErrorEvent = createjs.promote(c, "Event")
})();
this.createjs = this.createjs || {};
(function () {
    function c(b, a) {
        this.Event_constructor("progress");
        this.loaded = b;
        this.total = null == a ? 1 : a;
        this.progress = 0 == a ? 0 : this.loaded / this.total
    }

    createjs.extend(c, createjs.Event).clone = function () {
        return new createjs.ProgressEvent(this.loaded, this.total)
    };
    createjs.ProgressEvent = createjs.promote(c, "Event")
})(window);
(function () {
    function c(b, d) {
        function f(a) {
            if (f[a] !== M) return f[a];
            var b;
            if ("bug-string-char-index" == a) b = "a" != "a"[0]; else if ("json" == a) b = f("json-stringify") && f("json-parse"); else {
                var c;
                if ("json-stringify" == a) {
                    b = d.stringify;
                    var e = "function" == typeof b && K;
                    if (e) {
                        (c = function () {
                            return 1
                        }).toJSON = c;
                        try {
                            e = "0" === b(0) && "0" === b(new h) && '""' == b(new k) && b(H) === M && b(M) === M && b() === M && "1" === b(c) && "[1]" == b([c]) && "[null]" == b([M]) && "null" == b(null) && "[null,null,null]" == b([M, H, null]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' ==
                                b({a: [c, !0, !1, null, "\x00\b\n\f\r\t"]}) && "1" === b(null, c) && "[\n 1,\n 2\n]" == b([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == b(new p(-864E13)) && '"+275760-09-13T00:00:00.000Z"' == b(new p(864E13)) && '"-000001-01-01T00:00:00.000Z"' == b(new p(-621987552E5)) && '"1969-12-31T23:59:59.999Z"' == b(new p(-1))
                        } catch (g) {
                            e = !1
                        }
                    }
                    b = e
                }
                if ("json-parse" == a) {
                    b = d.parse;
                    if ("function" == typeof b) try {
                        if (0 === b("0") && !b(!1)) {
                            c = b('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var m = 5 == c.a.length && 1 === c.a[0];
                            if (m) {
                                try {
                                    m = !b('"\t"')
                                } catch (x) {
                                }
                                if (m) try {
                                    m =
                                        1 !== b("01")
                                } catch (w) {
                                }
                                if (m) try {
                                    m = 1 !== b("1.")
                                } catch (n) {
                                }
                            }
                        }
                    } catch (A) {
                        m = !1
                    }
                    b = m
                }
            }
            return f[a] = !!b
        }

        b || (b = e.Object());
        d || (d = e.Object());
        var h = b.Number || e.Number, k = b.String || e.String, m = b.Object || e.Object, p = b.Date || e.Date,
            C = b.SyntaxError || e.SyntaxError, I = b.TypeError || e.TypeError, T = b.Math || e.Math,
            O = b.JSON || e.JSON;
        "object" == typeof O && O && (d.stringify = O.stringify, d.parse = O.parse);
        var G, g, M, m = m.prototype, H = m.toString, K = new p(-0xc782b5b800cec);
        try {
            K = -109252 == K.getUTCFullYear() && 0 === K.getUTCMonth() && 1 === K.getUTCDate() &&
                10 == K.getUTCHours() && 37 == K.getUTCMinutes() && 6 == K.getUTCSeconds() && 708 == K.getUTCMilliseconds()
        } catch (Q) {
        }
        if (!f("json")) {
            var L = f("bug-string-char-index");
            if (!K) var D = T.floor, U = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], W = function (a, b) {
                return U[b] + 365 * (a - 1970) + D((a - 1969 + (b = +(1 < b))) / 4) - D((a - 1901 + b) / 100) + D((a - 1601 + b) / 400)
            };
            if ((G = m.hasOwnProperty) || (G = function (a) {
                var b, d = {};
                return (d.__proto__ = null, d.__proto__ = {toString: 1}, d).toString != H ? G = function (a) {
                    var b = this.__proto__;
                    a = a in (this.__proto__ = null, this);
                    return this.__proto__ = b, a
                } : (b = d.constructor, G = function (a) {
                    var d = (this.constructor || b).prototype;
                    return a in this && !(a in d && this[a] === d[a])
                }), d = null, G.call(this, a)
            }), g = function (b, d) {
                var c, e, f, h = 0;
                (c = function () {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                e = new c;
                for (f in e) G.call(e, f) && h++;
                return c = e = null, h ? g = 2 == h ? function (a, b) {
                    var d, c = {}, e = "[object Function]" == H.call(a);
                    for (d in a) e && "prototype" == d || G.call(c, d) || !(c[d] = 1) || !G.call(a, d) || b(d)
                } : function (a, b) {
                    var d, c, e = "[object Function]" == H.call(a);
                    for (d in a) e &&
                    "prototype" == d || !G.call(a, d) || (c = "constructor" === d) || b(d);
                    (c || G.call(a, d = "constructor")) && b(d)
                } : (e = "valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "), g = function (b, d) {
                    var c, f;
                    f = "[object Function]" == H.call(b);
                    var g = !f && "function" != typeof b.constructor && a[typeof b.hasOwnProperty] && b.hasOwnProperty || G;
                    for (c in b) f && "prototype" == c || !g.call(b, c) || d(c);
                    for (f = e.length; c = e[--f]; g.call(b, c) && d(c)) ;
                }), g(b, d)
            }, !f("json-stringify")) {
                var E = {
                    92: "\\\\", 34: '\\"',
                    8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t"
                }, V = function (a, b) {
                    return ("000000" + (b || 0)).slice(-a)
                }, Z = function (a) {
                    for (var b = '"', d = 0, c = a.length, e = !L || 10 < c, f = e && (L ? a.split("") : a); c > d; d++) {
                        var g = a.charCodeAt(d);
                        switch (g) {
                            case 8:
                            case 9:
                            case 10:
                            case 12:
                            case 13:
                            case 34:
                            case 92:
                                b += E[g];
                                break;
                            default:
                                if (32 > g) {
                                    b += "\\u00" + V(2, g.toString(16));
                                    break
                                }
                                b += e ? f[d] : a.charAt(d)
                        }
                    }
                    return b + '"'
                }, fa = function (a, b, d, c, e, f, h) {
                    var k, n, m, x, p, w, A, q, t, u;
                    try {
                        k = b[a]
                    } catch (v) {
                    }
                    if ("object" == typeof k && k) if (n = H.call(k), "[object Date]" !=
                    n || G.call(k, "toJSON")) "function" == typeof k.toJSON && ("[object Number]" != n && "[object String]" != n && "[object Array]" != n || G.call(k, "toJSON")) && (k = k.toJSON(a)); else if (k > -1 / 0 && 1 / 0 > k) {
                        if (W) {
                            p = D(k / 864E5);
                            for (m = D(p / 365.2425) + 1970 - 1; W(m + 1, 0) <= p; m++) ;
                            for (x = D((p - W(m, 0)) / 30.42); W(m, x + 1) <= p; x++) ;
                            p = 1 + p - W(m, x);
                            w = (k % 864E5 + 864E5) % 864E5;
                            A = D(w / 36E5) % 24;
                            q = D(w / 6E4) % 60;
                            t = D(w / 1E3) % 60;
                            w %= 1E3
                        } else m = k.getUTCFullYear(), x = k.getUTCMonth(), p = k.getUTCDate(), A = k.getUTCHours(), q = k.getUTCMinutes(), t = k.getUTCSeconds(), w = k.getUTCMilliseconds();
                        k = (0 >= m || 1E4 <= m ? (0 > m ? "-" : "+") + V(6, 0 > m ? -m : m) : V(4, m)) + "-" + V(2, x + 1) + "-" + V(2, p) + "T" + V(2, A) + ":" + V(2, q) + ":" + V(2, t) + "." + V(3, w) + "Z"
                    } else k = null;
                    if (d && (k = d.call(b, a, k)), null === k) return "null";
                    if (n = H.call(k), "[object Boolean]" == n) return "" + k;
                    if ("[object Number]" == n) return k > -1 / 0 && 1 / 0 > k ? "" + k : "null";
                    if ("[object String]" == n) return Z("" + k);
                    if ("object" == typeof k) {
                        for (a = h.length; a--;) if (h[a] === k) throw I();
                        if (h.push(k), u = [], b = f, f += e, "[object Array]" == n) {
                            m = 0;
                            for (a = k.length; a > m; m++) n = fa(m, k, d, c, e, f, h), u.push(n === M ? "null" :
                                n);
                            n = u.length ? e ? "[\n" + f + u.join(",\n" + f) + "\n" + b + "]" : "[" + u.join(",") + "]" : "[]"
                        } else g(c || k, function (a) {
                            var b = fa(a, k, d, c, e, f, h);
                            b !== M && u.push(Z(a) + ":" + (e ? " " : "") + b)
                        }), n = u.length ? e ? "{\n" + f + u.join(",\n" + f) + "\n" + b + "}" : "{" + u.join(",") + "}" : "{}";
                        return h.pop(), n
                    }
                };
                d.stringify = function (b, d, c) {
                    var e, f, g, h;
                    if (a[typeof d] && d) if ("[object Function]" == (h = H.call(d))) f = d; else if ("[object Array]" == h) {
                        g = {};
                        for (var k, n = 0, m = d.length; m > n; k = d[n++], h = H.call(k), ("[object String]" == h || "[object Number]" == h) && (g[k] = 1)) ;
                    }
                    if (c) if ("[object Number]" ==
                        (h = H.call(c))) {
                        if (0 < (c -= c % 1)) for (e = "", 10 < c && (c = 10); e.length < c; e += " ") ;
                    } else "[object String]" == h && (e = 10 >= c.length ? c : c.slice(0, 10));
                    return fa("", (k = {}, k[""] = b, k), f, g, e, "", [])
                }
            }
            if (!f("json-parse")) {
                var N, ha, ia = k.fromCharCode,
                    ca = {92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r"},
                    x = function () {
                        throw N = ha = null, C();
                    }, A = function () {
                        for (var a, b, d, c, e, f = ha, g = f.length; g > N;) switch (e = f.charCodeAt(N)) {
                            case 9:
                            case 10:
                            case 13:
                            case 32:
                                N++;
                                break;
                            case 123:
                            case 125:
                            case 91:
                            case 93:
                            case 58:
                            case 44:
                                return a =
                                    L ? f.charAt(N) : f[N], N++, a;
                            case 34:
                                a = "@";
                                for (N++; g > N;) if (e = f.charCodeAt(N), 32 > e) x(); else if (92 == e) switch (e = f.charCodeAt(++N)) {
                                    case 92:
                                    case 34:
                                    case 47:
                                    case 98:
                                    case 116:
                                    case 110:
                                    case 102:
                                    case 114:
                                        a += ca[e];
                                        N++;
                                        break;
                                    case 117:
                                        b = ++N;
                                        for (d = N + 4; d > N; N++) e = f.charCodeAt(N), 48 <= e && 57 >= e || 97 <= e && 102 >= e || 65 <= e && 70 >= e || x();
                                        a += ia("0x" + f.slice(b, N));
                                        break;
                                    default:
                                        x()
                                } else {
                                    if (34 == e) break;
                                    e = f.charCodeAt(N);
                                    for (b = N; 32 <= e && 92 != e && 34 != e;) e = f.charCodeAt(++N);
                                    a += f.slice(b, N)
                                }
                                if (34 == f.charCodeAt(N)) return N++, a;
                                x();
                            default:
                                if (b =
                                    N, 45 == e && (c = !0, e = f.charCodeAt(++N)), 48 <= e && 57 >= e) {
                                    for (48 == e && (e = f.charCodeAt(N + 1), 48 <= e && 57 >= e) && x(); g > N && (e = f.charCodeAt(N), 48 <= e && 57 >= e); N++) ;
                                    if (46 == f.charCodeAt(N)) {
                                        for (d = ++N; g > d && (e = f.charCodeAt(d), 48 <= e && 57 >= e); d++) ;
                                        d == N && x();
                                        N = d
                                    }
                                    if (e = f.charCodeAt(N), 101 == e || 69 == e) {
                                        e = f.charCodeAt(++N);
                                        43 != e && 45 != e || N++;
                                        for (d = N; g > d && (e = f.charCodeAt(d), 48 <= e && 57 >= e); d++) ;
                                        d == N && x();
                                        N = d
                                    }
                                    return +f.slice(b, N)
                                }
                                if (c && x(), "true" == f.slice(N, N + 4)) return N += 4, !0;
                                if ("false" == f.slice(N, N + 5)) return N += 5, !1;
                                if ("null" == f.slice(N,
                                    N + 4)) return N += 4, null;
                                x()
                        }
                        return "$"
                    }, w = function (a) {
                        var b, d;
                        if ("$" == a && x(), "string" == typeof a) {
                            if ("@" == (L ? a.charAt(0) : a[0])) return a.slice(1);
                            if ("[" == a) {
                                for (b = []; a = A(), "]" != a; d || (d = !0)) d && ("," == a ? (a = A(), "]" == a && x()) : x()), "," == a && x(), b.push(w(a));
                                return b
                            }
                            if ("{" == a) {
                                for (b = {}; a = A(), "}" != a; d || (d = !0)) d && ("," == a ? (a = A(), "}" == a && x()) : x()), "," != a && "string" == typeof a && "@" == (L ? a.charAt(0) : a[0]) && ":" == A() || x(), b[a.slice(1)] = w(A());
                                return b
                            }
                            x()
                        }
                        return a
                    }, X = function (a, b, d) {
                        d = ba(a, b, d);
                        d === M ? delete a[b] : a[b] = d
                    },
                    ba = function (a, b, d) {
                        var c, e = a[b];
                        if ("object" == typeof e && e) if ("[object Array]" == H.call(e)) for (c = e.length; c--;) X(e, c, d); else g(e, function (a) {
                            X(e, a, d)
                        });
                        return d.call(a, b, e)
                    };
                d.parse = function (a, b) {
                    var d, c;
                    return N = 0, ha = "" + a, d = w(A()), "$" != A() && x(), N = ha = null, b && "[object Function]" == H.call(b) ? ba((c = {}, c[""] = d, c), "", b) : d
                }
            }
        }
        return d.runInContext = c, d
    }

    var b = "function" == typeof define && define.amd, a = {"function": !0, object: !0},
        d = a[typeof exports] && exports && !exports.nodeType && exports, e = a[typeof window] && window || this,
        f = d && a[typeof module] && module && !module.nodeType && "object" == typeof global && global;
    if (!f || f.global !== f && f.window !== f && f.self !== f || (e = f), d && !b) c(e, d); else {
        var h = e.JSON, k = e.JSON3, m = !1, p = c(e, e.JSON3 = {
            noConflict: function () {
                return m || (m = !0, e.JSON = h, e.JSON3 = k, h = k = null), p
            }
        });
        e.JSON = {parse: p.parse, stringify: p.stringify}
    }
    b && define(function () {
        return p
    })
}).call(this);
(function () {
    var c = {
        appendToHead: function (b) {
            c.getHead().appendChild(b)
        }, getHead: function () {
            return document.head || document.getElementsByTagName("head")[0]
        }, getBody: function () {
            return document.body || document.getElementsByTagName("body")[0]
        }
    };
    createjs.DomUtils = c
})();
(function () {
    createjs.DataUtils = {
        parseXML: function (c, b) {
            var a = null;
            try {
                window.DOMParser && (a = (new DOMParser).parseFromString(c, b))
            } catch (d) {
            }
            if (!a) try {
                a = new ActiveXObject("Microsoft.XMLDOM"), a.async = !1, a.loadXML(c)
            } catch (e) {
                a = null
            }
            return a
        }, parseJSON: function (c) {
            if (null == c) return null;
            try {
                return JSON.parse(c)
            } catch (b) {
                throw b;
            }
        }
    }
})();
this.createjs = this.createjs || {};
(function () {
    function c() {
        this.id = this.type = this.src = null;
        this.maintainOrder = !1;
        this.data = this.callback = null;
        this.method = createjs.LoadItem.GET;
        this.headers = this.values = null;
        this.withCredentials = !1;
        this.crossOrigin = this.mimeType = null;
        this.loadTimeout = a.LOAD_TIMEOUT_DEFAULT
    }

    var b = c.prototype = {}, a = c;
    a.LOAD_TIMEOUT_DEFAULT = 8E3;
    a.create = function (b) {
        if ("string" == typeof b) {
            var e = new c;
            return e.src = b, e
        }
        if (b instanceof a) return b;
        if (b instanceof Object && b.src) return null == b.loadTimeout && (b.loadTimeout = a.LOAD_TIMEOUT_DEFAULT),
            b;
        throw Error("Type not recognized.");
    };
    b.set = function (a) {
        for (var b in a) this[b] = a[b];
        return this
    };
    createjs.LoadItem = a
})();
(function () {
    var c = {
        ABSOLUTE_PATT: /^(?:\w+:)?\/{2}/i,
        RELATIVE_PATT: /^[./]*?\//i,
        EXTENSION_PATT: /\/?[^/]+\.(\w{1,5})$/i,
        parseURI: function (b) {
            var a = {absolute: !1, relative: !1};
            if (null == b) return a;
            var d = b.indexOf("?");
            -1 < d && (b = b.substr(0, d));
            var e;
            return c.ABSOLUTE_PATT.test(b) ? a.absolute = !0 : c.RELATIVE_PATT.test(b) && (a.relative = !0), (e = b.match(c.EXTENSION_PATT)) && (a.extension = e[1].toLowerCase()), a
        },
        formatQueryString: function (b, a) {
            if (null == b) throw Error("You must specify data.");
            var d = [], c;
            for (c in b) d.push(c +
                "=" + escape(b[c]));
            return a && (d = d.concat(a)), d.join("&")
        },
        buildPath: function (b, a) {
            if (null == a) return b;
            var d = [], c = b.indexOf("?");
            if (-1 != c) var f = b.slice(c + 1), d = d.concat(f.split("&"));
            return -1 != c ? b.slice(0, c) + "?" + this._formatQueryString(a, d) : b + "?" + this._formatQueryString(a, d)
        },
        isCrossDomain: function (b) {
            var a = document.createElement("a");
            a.href = b.src;
            b = document.createElement("a");
            b.href = location.href;
            return "" != a.hostname && (a.port != b.port || a.protocol != b.protocol || a.hostname != b.hostname)
        },
        isLocal: function (b) {
            var a =
                document.createElement("a");
            return a.href = b.src, "" == a.hostname && "file:" == a.protocol
        },
        isBinary: function (b) {
            switch (b) {
                case createjs.AbstractLoader.IMAGE:
                case createjs.AbstractLoader.BINARY:
                    return !0;
                default:
                    return !1
            }
        },
        isImageTag: function (b) {
            return b instanceof HTMLImageElement
        },
        isAudioTag: function (b) {
            return window.HTMLAudioElement ? b instanceof HTMLAudioElement : !1
        },
        isVideoTag: function (b) {
            return window.HTMLVideoElement ? b instanceof HTMLVideoElement : !1
        },
        isText: function (b) {
            switch (b) {
                case createjs.AbstractLoader.TEXT:
                case createjs.AbstractLoader.JSON:
                case createjs.AbstractLoader.MANIFEST:
                case createjs.AbstractLoader.XML:
                case createjs.AbstractLoader.CSS:
                case createjs.AbstractLoader.SVG:
                case createjs.AbstractLoader.JAVASCRIPT:
                case createjs.AbstractLoader.SPRITESHEET:
                    return !0;
                default:
                    return !1
            }
        },
        getTypeByExtension: function (b) {
            if (null == b) return createjs.AbstractLoader.TEXT;
            switch (b.toLowerCase()) {
                case "jpeg":
                case "jpg":
                case "gif":
                case "png":
                case "webp":
                case "bmp":
                    return createjs.AbstractLoader.IMAGE;
                case "ogg":
                case "mp3":
                case "webm":
                    return createjs.AbstractLoader.SOUND;
                case "mp4":
                case "webm":
                case "ts":
                    return createjs.AbstractLoader.VIDEO;
                case "json":
                    return createjs.AbstractLoader.JSON;
                case "xml":
                    return createjs.AbstractLoader.XML;
                case "css":
                    return createjs.AbstractLoader.CSS;
                case "js":
                    return createjs.AbstractLoader.JAVASCRIPT;
                case "svg":
                    return createjs.AbstractLoader.SVG;
                default:
                    return createjs.AbstractLoader.TEXT
            }
        }
    };
    createjs.RequestUtils = c
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, b, c) {
        this.EventDispatcher_constructor();
        this.canceled = this.loaded = !1;
        this.progress = 0;
        this.type = c;
        this.resultFormatter = null;
        this._item = a ? createjs.LoadItem.create(a) : null;
        this._preferXHR = b;
        this._tag = this._tagSrcAttribute = this._loadedItems = this._rawResult = this._result = null
    }

    var b = createjs.extend(c, createjs.EventDispatcher);
    c.POST = "POST";
    c.GET = "GET";
    c.BINARY = "binary";
    c.CSS = "css";
    c.IMAGE = "image";
    c.JAVASCRIPT = "javascript";
    c.JSON = "json";
    c.JSONP = "jsonp";
    c.MANIFEST = "manifest";
    c.SOUND =
        "sound";
    c.VIDEO = "video";
    c.SPRITESHEET = "spritesheet";
    c.SVG = "svg";
    c.TEXT = "text";
    c.XML = "xml";
    b.getItem = function () {
        return this._item
    };
    b.getResult = function (a) {
        return a ? this._rawResult : this._result
    };
    b.getTag = function () {
        return this._tag
    };
    b.setTag = function (a) {
        this._tag = a
    };
    b.load = function () {
        this._createRequest();
        this._request.on("complete", this, this);
        this._request.on("progress", this, this);
        this._request.on("loadStart", this, this);
        this._request.on("abort", this, this);
        this._request.on("timeout", this, this);
        this._request.on("error",
            this, this);
        var a = new createjs.Event("initialize");
        a.loader = this._request;
        this.dispatchEvent(a);
        this._request.load()
    };
    b.cancel = function () {
        this.canceled = !0;
        this.destroy()
    };
    b.destroy = function () {
        this._request && (this._request.removeAllEventListeners(), this._request.destroy());
        this._loadItems = this._result = this._rawResult = this._item = this._request = null;
        this.removeAllEventListeners()
    };
    b.getLoadedItems = function () {
        return this._loadedItems
    };
    b._createRequest = function () {
        this._request = this._preferXHR ? new createjs.XHRRequest(this._item) :
            new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
    };
    b._createTag = function () {
        return null
    };
    b._sendLoadStart = function () {
        this._isCanceled() || this.dispatchEvent("loadstart")
    };
    b._sendProgress = function (a) {
        if (!this._isCanceled()) {
            var b = null;
            "number" == typeof a ? (this.progress = a, b = new createjs.ProgressEvent(this.progress)) : (b = a, this.progress = a.loaded / a.total, b.progress = this.progress, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0));
            this.hasEventListener("progress") &&
            this.dispatchEvent(b)
        }
    };
    b._sendComplete = function () {
        if (!this._isCanceled()) {
            this.loaded = !0;
            var a = new createjs.Event("complete");
            a.rawResult = this._rawResult;
            null != this._result && (a.result = this._result);
            this.dispatchEvent(a)
        }
    };
    b._sendError = function (a) {
        !this._isCanceled() && this.hasEventListener("error") && (null == a && (a = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")), this.dispatchEvent(a))
    };
    b._isCanceled = function () {
        return null == window.createjs || this.canceled ? !0 : !1
    };
    b.resultFormatter = null;
    b.handleEvent = function (a) {
        switch (a.type) {
            case "complete":
                this._rawResult =
                    a.target._response;
                a = this.resultFormatter && this.resultFormatter(this);
                var b = this;
                a instanceof Function ? a(function (a) {
                    b._result = a;
                    b._sendComplete()
                }) : (this._result = a || this._rawResult, this._sendComplete());
                break;
            case "progress":
                this._sendProgress(a);
                break;
            case "error":
                this._sendError(a);
                break;
            case "loadstart":
                this._sendLoadStart();
                break;
            case "abort":
            case "timeout":
                this._isCanceled() || this.dispatchEvent(a.type)
        }
    };
    b.buildPath = function (a, b) {
        return createjs.RequestUtils.buildPath(a, b)
    };
    b.toString = function () {
        return "[PreloadJS AbstractLoader]"
    };
    createjs.AbstractLoader = createjs.promote(c, "EventDispatcher")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, b, c) {
        this.AbstractLoader_constructor(a, b, c);
        this.resultFormatter = this._formatResult;
        this._tagSrcAttribute = "src"
    }

    var b = createjs.extend(c, createjs.AbstractLoader);
    b.load = function () {
        this._tag || (this._tag = this._createTag(this._item.src));
        this._tag.preload = "auto";
        this._tag.load();
        this.AbstractLoader_load()
    };
    b._createTag = function () {
    };
    b._createRequest = function () {
        this._request = this._preferXHR ? new createjs.XHRRequest(this._item) : new createjs.MediaTagRequest(this._item, this._tag || this._createTag(),
            this._tagSrcAttribute)
    };
    b._formatResult = function (a) {
        return this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.onstalled = null, this._preferXHR && (a.getTag().src = a.getResult(!0)), a.getTag()
    };
    createjs.AbstractMediaLoader = createjs.promote(c, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function () {
    var c = function (a) {
        this._item = a
    }, b = createjs.extend(c, createjs.EventDispatcher);
    b.load = function () {
    };
    b.destroy = function () {
    };
    b.cancel = function () {
    };
    createjs.AbstractRequest = createjs.promote(c, "EventDispatcher")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, b, c) {
        this.AbstractRequest_constructor(a);
        this._tag = b;
        this._tagSrcAttribute = c;
        this._loadedHandler = createjs.proxy(this._handleTagComplete, this);
        this._addedToDOM = !1;
        this._startTagVisibility = null
    }

    var b = createjs.extend(c, createjs.AbstractRequest);
    b.load = function () {
        this._tag.onload = createjs.proxy(this._handleTagComplete, this);
        this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this);
        this._tag.onerror = createjs.proxy(this._handleError, this);
        var a = new createjs.Event("initialize");
        a.loader = this._tag;
        this.dispatchEvent(a);
        this._hideTag();
        this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout);
        this._tag[this._tagSrcAttribute] = this._item.src;
        null == this._tag.parentNode && (window.document.body.appendChild(this._tag), this._addedToDOM = !0)
    };
    b.destroy = function () {
        this._clean();
        this._tag = null;
        this.AbstractRequest_destroy()
    };
    b._handleReadyStateChange = function () {
        clearTimeout(this._loadTimeout);
        var a = this._tag;
        "loaded" != a.readyState && "complete" != a.readyState ||
        this._handleTagComplete()
    };
    b._handleError = function () {
        this._clean();
        this.dispatchEvent("error")
    };
    b._handleTagComplete = function () {
        this._rawResult = this._tag;
        this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult;
        this._clean();
        this._showTag();
        this.dispatchEvent("complete")
    };
    b._handleTimeout = function () {
        this._clean();
        this.dispatchEvent(new createjs.Event("timeout"))
    };
    b._clean = function () {
        this._tag.onload = null;
        this._tag.onreadystatechange = null;
        this._tag.onerror = null;
        this._addedToDOM &&
        null != this._tag.parentNode && this._tag.parentNode.removeChild(this._tag);
        clearTimeout(this._loadTimeout)
    };
    b._hideTag = function () {
        this._startTagVisibility = this._tag.style.visibility;
        this._tag.style.visibility = "hidden"
    };
    b._showTag = function () {
        this._tag.style.visibility = this._startTagVisibility
    };
    b._handleStalled = function () {
    };
    createjs.TagRequest = createjs.promote(c, "AbstractRequest")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, b, c) {
        this.AbstractRequest_constructor(a);
        this._tag = b;
        this._tagSrcAttribute = c;
        this._loadedHandler = createjs.proxy(this._handleTagComplete, this)
    }

    var b = createjs.extend(c, createjs.TagRequest);
    b.load = function () {
        var a = createjs.proxy(this._handleStalled, this);
        this._stalledCallback = a;
        var b = createjs.proxy(this._handleProgress, this);
        this._handleProgress = b;
        this._tag.addEventListener("stalled", a);
        this._tag.addEventListener("progress", b);
        this._tag.addEventListener && this._tag.addEventListener("canplaythrough",
            this._loadedHandler, !1);
        this.TagRequest_load()
    };
    b._handleReadyStateChange = function () {
        clearTimeout(this._loadTimeout);
        var a = this._tag;
        "loaded" != a.readyState && "complete" != a.readyState || this._handleTagComplete()
    };
    b._handleStalled = function () {
    };
    b._handleProgress = function (a) {
        !a || 0 < a.loaded && 0 == a.total || (a = new createjs.ProgressEvent(a.loaded, a.total), this.dispatchEvent(a))
    };
    b._clean = function () {
        this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler);
        this._tag.removeEventListener("stalled",
            this._stalledCallback);
        this._tag.removeEventListener("progress", this._progressCallback);
        this.TagRequest__clean()
    };
    createjs.MediaTagRequest = createjs.promote(c, "TagRequest")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a) {
        this.AbstractRequest_constructor(a);
        this._loadTimeout = this._request = null;
        this._xhrLevel = 1;
        this._rawResponse = this._response = null;
        this._canceled = !1;
        this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this);
        this._handleProgressProxy = createjs.proxy(this._handleProgress, this);
        this._handleAbortProxy = createjs.proxy(this._handleAbort, this);
        this._handleErrorProxy = createjs.proxy(this._handleError, this);
        this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this);
        this._handleLoadProxy =
            createjs.proxy(this._handleLoad, this);
        this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this);
        !this._createXHR(a)
    }

    var b = createjs.extend(c, createjs.AbstractRequest);
    c.ACTIVEX_VERSIONS = "Msxml2.XMLHTTP.6.0 Msxml2.XMLHTTP.5.0 Msxml2.XMLHTTP.4.0 MSXML2.XMLHTTP.3.0 MSXML2.XMLHTTP Microsoft.XMLHTTP".split(" ");
    b.getResult = function (a) {
        return a && this._rawResponse ? this._rawResponse : this._response
    };
    b.cancel = function () {
        this.canceled = !0;
        this._clean();
        this._request.abort()
    };
    b.load = function () {
        if (null ==
            this._request) return void this._handleError();
        null != this._request.addEventListener ? (this._request.addEventListener("loadstart", this._handleLoadStartProxy, !1), this._request.addEventListener("progress", this._handleProgressProxy, !1), this._request.addEventListener("abort", this._handleAbortProxy, !1), this._request.addEventListener("error", this._handleErrorProxy, !1), this._request.addEventListener("timeout", this._handleTimeoutProxy, !1), this._request.addEventListener("load", this._handleLoadProxy, !1), this._request.addEventListener("readystatechange",
            this._handleReadyStateChangeProxy, !1)) : (this._request.onloadstart = this._handleLoadStartProxy, this._request.onprogress = this._handleProgressProxy, this._request.onabort = this._handleAbortProxy, this._request.onerror = this._handleErrorProxy, this._request.ontimeout = this._handleTimeoutProxy, this._request.onload = this._handleLoadProxy, this._request.onreadystatechange = this._handleReadyStateChangeProxy);
        1 == this._xhrLevel && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout));
        try {
            this._item.values && this._item.method != createjs.AbstractLoader.GET ? this._item.method == createjs.AbstractLoader.POST && this._request.send(createjs.RequestUtils.formatQueryString(this._item.values)) : this._request.send()
        } catch (a) {
            this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, a))
        }
    };
    b.setResponseType = function (a) {
        "blob" === a && (a = window.URL ? "blob" : "arraybuffer", this._responseType = a);
        this._request.responseType = a
    };
    b.getAllResponseHeaders = function () {
        return this._request.getAllResponseHeaders instanceof
        Function ? this._request.getAllResponseHeaders() : null
    };
    b.getResponseHeader = function (a) {
        return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(a) : null
    };
    b._handleProgress = function (a) {
        !a || 0 < a.loaded && 0 == a.total || (a = new createjs.ProgressEvent(a.loaded, a.total), this.dispatchEvent(a))
    };
    b._handleLoadStart = function () {
        clearTimeout(this._loadTimeout);
        this.dispatchEvent("loadstart")
    };
    b._handleAbort = function (a) {
        this._clean();
        this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED",
            null, a))
    };
    b._handleError = function (a) {
        this._clean();
        this.dispatchEvent(new createjs.ErrorEvent(a.message))
    };
    b._handleReadyStateChange = function () {
        4 == this._request.readyState && this._handleLoad()
    };
    b._handleLoad = function () {
        if (!this.loaded) {
            this.loaded = !0;
            var a = this._checkError();
            if (a) return void this._handleError(a);
            if (this._response = this._getResponse(), "arraybuffer" === this._responseType) try {
                this._response = new Blob([this._response])
            } catch (b) {
                if (window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder ||
                    window.MozBlobBuilder || window.MSBlobBuilder, "TypeError" === b.name && window.BlobBuilder) a = new BlobBuilder, a.append(this._response), this._response = a.getBlob()
            }
            this._clean();
            this.dispatchEvent(new createjs.Event("complete"))
        }
    };
    b._handleTimeout = function (a) {
        this._clean();
        this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, a))
    };
    b._checkError = function () {
        var a = parseInt(this._request.status);
        switch (a) {
            case 404:
            case 0:
                return Error(a)
        }
        return null
    };
    b._getResponse = function () {
        if (null != this._response) return this._response;
        if (null != this._request.response) return this._request.response;
        try {
            if (null != this._request.responseText) return this._request.responseText
        } catch (a) {
        }
        try {
            if (null != this._request.responseXML) return this._request.responseXML
        } catch (b) {
        }
        return null
    };
    b._createXHR = function (a) {
        var b = createjs.RequestUtils.isCrossDomain(a), c = {}, f = null;
        if (window.XMLHttpRequest) f = new XMLHttpRequest, b && void 0 === f.withCredentials && window.XDomainRequest && (f = new XDomainRequest); else {
            for (var h = 0, k = s.ACTIVEX_VERSIONS.length; k > h; h++) {
                var m =
                    s.ACTIVEX_VERSIONS[h];
                try {
                    f = new ActiveXObject(m);
                    break
                } catch (p) {
                }
            }
            if (null == f) return !1
        }
        null == a.mimeType && createjs.RequestUtils.isText(a.type) && (a.mimeType = "text/plain; charset=utf-8");
        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType);
        this._xhrLevel = "string" == typeof f.responseType ? 2 : 1;
        h = null;
        if (h = a.method == createjs.AbstractLoader.GET ? createjs.RequestUtils.buildPath(a.src, a.values) : a.src, f.open(a.method || createjs.AbstractLoader.GET, h, !0), b && f instanceof XMLHttpRequest && 1 == this._xhrLevel &&
        (c.Origin = location.origin), a.values && a.method == createjs.AbstractLoader.POST && (c["Content-Type"] = "application/x-www-form-urlencoded"), b || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest"), a.headers) for (var q in a.headers) c[q] = a.headers[q];
        for (q in c) f.setRequestHeader(q, c[q]);
        return f instanceof XMLHttpRequest && void 0 !== a.withCredentials && (f.withCredentials = a.withCredentials), this._request = f, !0
    };
    b._clean = function () {
        clearTimeout(this._loadTimeout);
        null != this._request.removeEventListener ?
            (this._request.removeEventListener("loadstart", this._handleLoadStartProxy), this._request.removeEventListener("progress", this._handleProgressProxy), this._request.removeEventListener("abort", this._handleAbortProxy), this._request.removeEventListener("error", this._handleErrorProxy), this._request.removeEventListener("timeout", this._handleTimeoutProxy), this._request.removeEventListener("load", this._handleLoadProxy), this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)) :
            (this._request.onloadstart = null, this._request.onprogress = null, this._request.onabort = null, this._request.onerror = null, this._request.ontimeout = null, this._request.onload = null, this._request.onreadystatechange = null)
    };
    b.toString = function () {
        return "[PreloadJS XHRRequest]"
    };
    createjs.XHRRequest = createjs.promote(c, "AbstractRequest")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, b, c) {
        this.AbstractLoader_constructor();
        this._plugins = [];
        this._typeCallbacks = {};
        this._extensionCallbacks = {};
        this.next = null;
        this.maintainScriptOrder = !0;
        this.stopOnError = !1;
        this._maxConnections = 1;
        this._availableLoaders = [createjs.ImageLoader, createjs.JavaScriptLoader, createjs.CSSLoader, createjs.JSONLoader, createjs.JSONPLoader, createjs.SoundLoader, createjs.ManifestLoader, createjs.SpriteSheetLoader, createjs.XMLLoader, createjs.SVGLoader, createjs.BinaryLoader, createjs.VideoLoader,
            createjs.TextLoader];
        this._defaultLoaderLength = this._availableLoaders.length;
        this.init(a, b, c)
    }

    var b = createjs.extend(c, createjs.AbstractLoader);
    b.init = function (a, b, c) {
        this._preferXHR = this.preferXHR = this.useXHR = !0;
        this.setPreferXHR(a);
        this._paused = !1;
        this._basePath = b;
        this._crossOrigin = c;
        this._loadStartWasDispatched = !1;
        this._currentlyLoadingScript = null;
        this._currentLoads = [];
        this._loadQueue = [];
        this._loadQueueBackup = [];
        this._loadItemsById = {};
        this._loadItemsBySrc = {};
        this._loadedResults = {};
        this._loadedRawResults =
            {};
        this._numItemsLoaded = this._numItems = 0;
        this._scriptOrder = [];
        this._loadedScripts = [];
        this._lastProgress = 0 / 0
    };
    c.loadTimeout = 8E3;
    c.LOAD_TIMEOUT = 0;
    c.BINARY = createjs.AbstractLoader.BINARY;
    c.CSS = createjs.AbstractLoader.CSS;
    c.IMAGE = createjs.AbstractLoader.IMAGE;
    c.JAVASCRIPT = createjs.AbstractLoader.JAVASCRIPT;
    c.JSON = createjs.AbstractLoader.JSON;
    c.JSONP = createjs.AbstractLoader.JSONP;
    c.MANIFEST = createjs.AbstractLoader.MANIFEST;
    c.SOUND = createjs.AbstractLoader.SOUND;
    c.VIDEO = createjs.AbstractLoader.VIDEO;
    c.SVG =
        createjs.AbstractLoader.SVG;
    c.TEXT = createjs.AbstractLoader.TEXT;
    c.XML = createjs.AbstractLoader.XML;
    c.POST = createjs.AbstractLoader.POST;
    c.GET = createjs.AbstractLoader.GET;
    b.registerLoader = function (a) {
        if (!a || !a.canLoadItem) throw Error("loader is of an incorrect type.");
        if (-1 != this._availableLoaders.indexOf(a)) throw Error("loader already exists.");
        this._availableLoaders.unshift(a)
    };
    b.unregisterLoader = function (a) {
        a = this._availableLoaders.indexOf(a);
        -1 != a && a < this._defaultLoaderLength - 1 && this._availableLoaders.splice(a,
            1)
    };
    b.setUseXHR = function (a) {
        return this.setPreferXHR(a)
    };
    b.setPreferXHR = function (a) {
        return this.preferXHR = 0 != a && null != window.XMLHttpRequest, this.preferXHR
    };
    b.removeAll = function () {
        this.remove()
    };
    b.remove = function (a) {
        var b = null;
        if (!a || a instanceof Array) if (a) b = a; else {
            if (0 < arguments.length) return
        } else b = [a];
        var c = !1;
        if (b) {
            for (; b.length;) {
                for (var f = b.pop(), h = this.getResult(f), k = this._loadQueue.length - 1; 0 <= k; k--) if (m = this._loadQueue[k].getItem(), m.id == f || m.src == f) {
                    this._loadQueue.splice(k, 1)[0].cancel();
                    break
                }
                for (k = this._loadQueueBackup.length - 1; 0 <= k; k--) if (m = this._loadQueueBackup[k].getItem(), m.id == f || m.src == f) {
                    this._loadQueueBackup.splice(k, 1)[0].cancel();
                    break
                }
                if (h) this._disposeItem(this.getItem(f)); else for (var k = this._currentLoads.length - 1; 0 <= k; k--) {
                    var m = this._currentLoads[k].getItem();
                    if (m.id == f || m.src == f) {
                        this._currentLoads.splice(k, 1)[0].cancel();
                        c = !0;
                        break
                    }
                }
            }
            c && this._loadNext()
        } else {
            this.close();
            for (f in this._loadItemsById) this._disposeItem(this._loadItemsById[f]);
            this.init(this.preferXHR,
                this._basePath)
        }
    };
    b.reset = function () {
        this.close();
        for (var a in this._loadItemsById) this._disposeItem(this._loadItemsById[a]);
        a = [];
        for (var b = 0, c = this._loadQueueBackup.length; c > b; b++) a.push(this._loadQueueBackup[b].getItem());
        this.loadManifest(a, !1)
    };
    b.installPlugin = function (a) {
        if (null != a && null != a.getPreloadHandlers) {
            this._plugins.push(a);
            var b = a.getPreloadHandlers();
            if (b.scope = a, null != b.types) {
                a = 0;
                for (var c = b.types.length; c > a; a++) this._typeCallbacks[b.types[a]] = b
            }
            if (null != b.extensions) for (a = 0, c = b.extensions.length; c >
            a; a++) this._extensionCallbacks[b.extensions[a]] = b
        }
    };
    b.setMaxConnections = function (a) {
        this._maxConnections = a;
        !this._paused && 0 < this._loadQueue.length && this._loadNext()
    };
    b.loadFile = function (a, b, c) {
        if (null == a) return a = new createjs.ErrorEvent("PRELOAD_NO_FILE"), void this._sendError(a);
        this._addItem(a, null, c);
        this.setPaused(!1 !== b ? !1 : !0)
    };
    b.loadManifest = function (a, b, e) {
        var f = null, h = null;
        if (a instanceof Array) {
            if (0 == a.length) return f = new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY"), void this._sendError(f);
            f = a
        } else if ("string" == typeof a) f = [{src: a, type: c.MANIFEST}]; else {
            if ("object" != typeof a) return f = new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL"), void this._sendError(f);
            void 0 !== a.src ? (null == a.type ? a.type = c.MANIFEST : a.type != c.MANIFEST && (f = new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE"), this._sendError(f)), f = [a]) : void 0 !== a.manifest && (f = a.manifest, h = a.path)
        }
        a = 0;
        for (var k = f.length; k > a; a++) this._addItem(f[a], h, e);
        this.setPaused(!1 !== b ? !1 : !0)
    };
    b.load = function () {
        this.setPaused(!1)
    };
    b.getItem = function (a) {
        return this._loadItemsById[a] ||
            this._loadItemsBySrc[a]
    };
    b.getResult = function (a, b) {
        var c = this._loadItemsById[a] || this._loadItemsBySrc[a];
        if (null == c) return null;
        c = c.id;
        return b && this._loadedRawResults[c] ? this._loadedRawResults[c] : this._loadedResults[c]
    };
    b.getItems = function (a) {
        var b = [], c;
        for (c in this._loadItemsById) {
            var f = this._loadItemsById[c], h = this.getResult(c);
            !0 === a && null == h || b.push({item: f, result: h, rawResult: this.getResult(c, !0)})
        }
        return b
    };
    b.setPaused = function (a) {
        (this._paused = a) || this._loadNext()
    };
    b.close = function () {
        for (; this._currentLoads.length;) this._currentLoads.pop().cancel();
        this._scriptOrder.length = 0;
        this._loadedScripts.length = 0;
        this.loadStartWasDispatched = !1;
        this._itemCount = 0;
        this._lastProgress = 0 / 0
    };
    b._addItem = function (a, b, c) {
        a = this._createLoadItem(a, b, c);
        null != a && (b = this._createLoader(a), null != b && ("plugins" in b && (b.plugins = this._plugins), a._loader = b, this._loadQueue.push(b), this._loadQueueBackup.push(b), this._numItems++, this._updateProgress(), (this.maintainScriptOrder && a.type == createjs.LoadQueue.JAVASCRIPT || !0 === a.maintainOrder) && (this._scriptOrder.push(a), this._loadedScripts.push(null))))
    };
    b._createLoadItem = function (a, b, c) {
        a = createjs.LoadItem.create(a);
        if (null == a) return null;
        var f = "";
        c = c || this._basePath;
        if (a.src instanceof Object) {
            if (!a.type) return null;
            if (b) {
                var f = b, h = createjs.RequestUtils.parseURI(b);
                null == c || h.absolute || h.relative || (f = c + f)
            } else null != c && (f = c)
        } else {
            h = createjs.RequestUtils.parseURI(a.src);
            h.extension && (a.ext = h.extension);
            null == a.type && (a.type = createjs.RequestUtils.getTypeByExtension(a.ext));
            var k = a.src;
            h.absolute || h.relative || (b ? (f = b, h = createjs.RequestUtils.parseURI(b),
                k = b + k, null == c || h.absolute || h.relative || (f = c + f)) : null != c && (f = c));
            a.src = f + a.src
        }
        a.path = f;
        void 0 !== a.id && null !== a.id && "" !== a.id || (a.id = k);
        if (b = this._typeCallbacks[a.type] || this._extensionCallbacks[a.ext]) {
            b = b.callback.call(b.scope, a, this);
            if (!1 === b) return null;
            !0 === b || null != b && (a._loader = b);
            h = createjs.RequestUtils.parseURI(a.src);
            null != h.extension && (a.ext = h.extension)
        }
        return this._loadItemsById[a.id] = a, this._loadItemsBySrc[a.src] = a, null == a.crossOrigin && (a.crossOrigin = this._crossOrigin), a
    };
    b._createLoader =
        function (a) {
            if (null != a._loader) return a._loader;
            for (var b = this.preferXHR, c = 0; c < this._availableLoaders.length; c++) {
                var f = this._availableLoaders[c];
                if (f && f.canLoadItem(a)) return new f(a, b)
            }
            return null
        };
    b._loadNext = function () {
        if (!this._paused) {
            this._loadStartWasDispatched || (this._sendLoadStart(), this._loadStartWasDispatched = !0);
            this._numItems == this._numItemsLoaded ? (this.loaded = !0, this._sendComplete(), this.next && this.next.load && this.next.load()) : this.loaded = !1;
            for (var a = 0; a < this._loadQueue.length && !(this._currentLoads.length >=
                this._maxConnections); a++) {
                var b = this._loadQueue[a];
                this._canStartLoad(b) && (this._loadQueue.splice(a, 1), a--, this._loadItem(b))
            }
        }
    };
    b._loadItem = function (a) {
        a.on("fileload", this._handleFileLoad, this);
        a.on("progress", this._handleProgress, this);
        a.on("complete", this._handleFileComplete, this);
        a.on("error", this._handleError, this);
        a.on("fileerror", this._handleFileError, this);
        this._currentLoads.push(a);
        this._sendFileStart(a.getItem());
        a.load()
    };
    b._handleFileLoad = function (a) {
        a.target = null;
        this.dispatchEvent(a)
    };
    b._handleFileError = function (a) {
        a = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, a.item);
        this._sendError(a)
    };
    b._handleError = function (a) {
        a = a.target;
        this._numItemsLoaded++;
        this._finishOrderedItem(a, !0);
        this._updateProgress();
        var b = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, a.getItem());
        this._sendError(b);
        this.stopOnError ? this.setPaused(!0) : (this._removeLoadItem(a), this._cleanLoadItem(a), this._loadNext())
    };
    b._handleFileComplete = function (a) {
        a = a.target;
        var b = a.getItem(), c = a.getResult();
        this._loadedResults[b.id] =
            c;
        var f = a.getResult(!0);
        null != f && f !== c && (this._loadedRawResults[b.id] = f);
        this._saveLoadedItems(a);
        this._removeLoadItem(a);
        this._finishOrderedItem(a) || this._processFinishedLoad(b, a);
        this._cleanLoadItem(a)
    };
    b._saveLoadedItems = function (a) {
        a = a.getLoadedItems();
        if (null !== a) for (var b = 0; b < a.length; b++) {
            var c = a[b].item;
            this._loadItemsBySrc[c.src] = c;
            this._loadItemsById[c.id] = c;
            this._loadedResults[c.id] = a[b].result;
            this._loadedRawResults[c.id] = a[b].rawResult
        }
    };
    b._finishOrderedItem = function (a, b) {
        var c = a.getItem();
        if (this.maintainScriptOrder && c.type == createjs.LoadQueue.JAVASCRIPT || c.maintainOrder) {
            a instanceof createjs.JavaScriptLoader && (this._currentlyLoadingScript = !1);
            var f = createjs.indexOf(this._scriptOrder, c);
            return -1 == f ? !1 : (this._loadedScripts[f] = !0 === b ? !0 : c, this._checkScriptLoadOrder(), !0)
        }
        return !1
    };
    b._checkScriptLoadOrder = function () {
        for (var a = this._loadedScripts.length, b = 0; a > b; b++) {
            var c = this._loadedScripts[b];
            if (null === c) break;
            if (!0 !== c) {
                var f = this._loadedResults[c.id];
                c.type == createjs.LoadQueue.JAVASCRIPT &&
                createjs.DomUtils.appendToHead(f);
                this._processFinishedLoad(c, c._loader);
                this._loadedScripts[b] = !0
            }
        }
    };
    b._processFinishedLoad = function (a, b) {
        this._numItemsLoaded++;
        this.maintainScriptOrder || a.type != createjs.LoadQueue.JAVASCRIPT || createjs.DomUtils.appendToHead(a.result);
        this._updateProgress();
        this._sendFileComplete(a, b);
        this._loadNext()
    };
    b._canStartLoad = function (a) {
        if (!this.maintainScriptOrder || a.preferXHR) return !0;
        a = a.getItem();
        if (a.type != createjs.LoadQueue.JAVASCRIPT) return !0;
        if (this._currentlyLoadingScript) return !1;
        a = this._scriptOrder.indexOf(a);
        for (var b = 0; a > b;) {
            if (null == this._loadedScripts[b]) return !1;
            b++
        }
        return this._currentlyLoadingScript = !0, !0
    };
    b._removeLoadItem = function (a) {
        for (var b = this._currentLoads.length, c = 0; b > c; c++) if (this._currentLoads[c] == a) {
            this._currentLoads.splice(c, 1);
            break
        }
    };
    b._cleanLoadItem = function (a) {
        (a = a.getItem()) && delete a._loader
    };
    b._handleProgress = function (a) {
        a = a.target;
        this._sendFileProgress(a.getItem(), a.progress);
        this._updateProgress()
    };
    b._updateProgress = function () {
        var a = this._numItemsLoaded /
            this._numItems, b = this._numItems - this._numItemsLoaded;
        if (0 < b) {
            for (var c = 0, f = 0, h = this._currentLoads.length; h > f; f++) c += this._currentLoads[f].progress;
            a += c / b * (b / this._numItems)
        }
        this._lastProgress != a && (this._sendProgress(a), this._lastProgress = a)
    };
    b._disposeItem = function (a) {
        delete this._loadedResults[a.id];
        delete this._loadedRawResults[a.id];
        delete this._loadItemsById[a.id];
        delete this._loadItemsBySrc[a.src]
    };
    b._sendFileProgress = function (a, b) {
        if (!this._isCanceled() && !this._paused && this.hasEventListener("fileprogress")) {
            var c =
                new createjs.Event("fileprogress");
            c.progress = b;
            c.loaded = b;
            c.total = 1;
            c.item = a;
            this.dispatchEvent(c)
        }
    };
    b._sendFileComplete = function (a, b) {
        if (!this._isCanceled() && !this._paused) {
            var c = new createjs.Event("fileload");
            c.loader = b;
            c.item = a;
            c.result = this._loadedResults[a.id];
            c.rawResult = this._loadedRawResults[a.id];
            a.completeHandler && a.completeHandler(c);
            this.hasEventListener("fileload") && this.dispatchEvent(c)
        }
    };
    b._sendFileStart = function (a) {
        var b = new createjs.Event("filestart");
        b.item = a;
        this.hasEventListener("filestart") &&
        this.dispatchEvent(b)
    };
    b.toString = function () {
        return "[PreloadJS LoadQueue]"
    };
    createjs.LoadQueue = createjs.promote(c, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function () {
    function c(b) {
        this.AbstractLoader_constructor(b, !0, createjs.AbstractLoader.TEXT)
    }

    (createjs.extend(c, createjs.AbstractLoader), c).canLoadItem = function (b) {
        return b.type == createjs.AbstractLoader.TEXT
    };
    createjs.TextLoader = createjs.promote(c, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a) {
        this.AbstractLoader_constructor(a, !0, createjs.AbstractLoader.BINARY);
        this.on("initialize", this._updateXHR, this)
    }

    var b = createjs.extend(c, createjs.AbstractLoader);
    c.canLoadItem = function (a) {
        return a.type == createjs.AbstractLoader.BINARY
    };
    b._updateXHR = function (a) {
        a.loader.setResponseType("arraybuffer")
    };
    createjs.BinaryLoader = createjs.promote(c, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, b) {
        this.AbstractLoader_constructor(a, b, createjs.AbstractLoader.CSS);
        this.resultFormatter = this._formatResult;
        this._tagSrcAttribute = "href";
        this._tag = document.createElement(b ? "style" : "link");
        this._tag.rel = "stylesheet";
        this._tag.type = "text/css"
    }

    var b = createjs.extend(c, createjs.AbstractLoader);
    c.canLoadItem = function (a) {
        return a.type == createjs.AbstractLoader.CSS
    };
    b._formatResult = function (a) {
        if (this._preferXHR) {
            var b = a.getTag();
            b.styleSheet ? b.styleSheet.cssText = a.getResult(!0) : (a =
                document.createTextNode(a.getResult(!0)), b.appendChild(a))
        } else b = this._tag;
        return createjs.DomUtils.appendToHead(b), b
    };
    createjs.CSSLoader = createjs.promote(c, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, b) {
        this.AbstractLoader_constructor(a, b, createjs.AbstractLoader.IMAGE);
        this.resultFormatter = this._formatResult;
        this._tagSrcAttribute = "src";
        createjs.RequestUtils.isImageTag(a) ? this._tag = a : createjs.RequestUtils.isImageTag(a.src) ? this._tag = a.src : createjs.RequestUtils.isImageTag(a.tag) && (this._tag = a.tag);
        null != this._tag ? this._preferXHR = !1 : this._tag = document.createElement("img");
        this.on("initialize", this._updateXHR, this)
    }

    var b = createjs.extend(c, createjs.AbstractLoader);
    c.canLoadItem =
        function (a) {
            return a.type == createjs.AbstractLoader.IMAGE
        };
    b.load = function () {
        if ("" != this._tag.src && this._tag.complete) return void this._sendComplete();
        var a = this._item.crossOrigin;
        1 == a && (a = "Anonymous");
        null == a || createjs.RequestUtils.isLocal(this._item.src) || (this._tag.crossOrigin = a);
        this.AbstractLoader_load()
    };
    b._updateXHR = function (a) {
        a.loader.mimeType = "text/plain; charset=x-user-defined-binary";
        a.loader.setResponseType && a.loader.setResponseType("blob")
    };
    b._formatResult = function (a) {
        var b = this;
        return function (c) {
            var f =
                b._tag, h = window.URL || window.webkitURL;
            if (b._preferXHR) if (h) {
                var k = h.createObjectURL(a.getResult(!0));
                f.src = k;
                f.onload = function () {
                    h.revokeObjectURL(b.src)
                }
            } else f.src = a.getItem().src;
            f.complete ? c(f) : f.onload = function () {
                c(this)
            }
        }
    };
    createjs.ImageLoader = createjs.promote(c, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, b) {
        this.AbstractLoader_constructor(a, b, createjs.AbstractLoader.JAVASCRIPT);
        this.resultFormatter = this._formatResult;
        this._tagSrcAttribute = "src";
        this.setTag(document.createElement("script"))
    }

    var b = createjs.extend(c, createjs.AbstractLoader);
    c.canLoadItem = function (a) {
        return a.type == createjs.AbstractLoader.JAVASCRIPT
    };
    b._formatResult = function (a) {
        var b = a.getTag();
        return this._preferXHR && (b.text = a.getResult(!0)), b
    };
    createjs.JavaScriptLoader = createjs.promote(c, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a) {
        this.AbstractLoader_constructor(a, !0, createjs.AbstractLoader.JSON);
        this.resultFormatter = this._formatResult
    }

    var b = createjs.extend(c, createjs.AbstractLoader);
    c.canLoadItem = function (a) {
        return a.type == createjs.AbstractLoader.JSON && !a._loadAsJSONP
    };
    b._formatResult = function (a) {
        var b = null;
        try {
            b = createjs.DataUtils.parseJSON(a.getResult(!0))
        } catch (c) {
            return a = new createjs.ErrorEvent("JSON_FORMAT", null, c), this._sendError(a), c
        }
        return b
    };
    createjs.JSONLoader = createjs.promote(c, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a) {
        this.AbstractLoader_constructor(a, !1, createjs.AbstractLoader.JSONP);
        this.setTag(document.createElement("script"));
        this.getTag().type = "text/javascript"
    }

    var b = createjs.extend(c, createjs.AbstractLoader);
    c.canLoadItem = function (a) {
        return a.type == createjs.AbstractLoader.JSONP || a._loadAsJSONP
    };
    b.cancel = function () {
        this.AbstractLoader_cancel();
        this._dispose()
    };
    b.load = function () {
        if (null == this._item.callback) throw Error("callback is required for loading JSONP requests.");
        if (null != window[this._item.callback]) throw Error("JSONP callback '" +
            this._item.callback + "' already exists on window. You need to specify a different callback or re-name the current one.");
        window[this._item.callback] = createjs.proxy(this._handleLoad, this);
        window.document.body.appendChild(this._tag);
        this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout);
        this._tag.src = this._item.src
    };
    b._handleLoad = function (a) {
        this._result = this._rawResult = a;
        this._sendComplete();
        this._dispose()
    };
    b._handleTimeout = function () {
        this._dispose();
        this.dispatchEvent(new createjs.ErrorEvent("timeout"))
    };
    b._dispose = function () {
        window.document.body.removeChild(this._tag);
        delete window[this._item.callback];
        clearTimeout(this._loadTimeout)
    };
    createjs.JSONPLoader = createjs.promote(c, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a) {
        this.AbstractLoader_constructor(a, null, createjs.AbstractLoader.MANIFEST);
        this._manifestQueue = this.plugins = null
    }

    var b = createjs.extend(c, createjs.AbstractLoader);
    c.MANIFEST_PROGRESS = .25;
    c.canLoadItem = function (a) {
        return a.type == createjs.AbstractLoader.MANIFEST
    };
    b.load = function () {
        this.AbstractLoader_load()
    };
    b._createRequest = function () {
        this._request = null != this._item.callback ? new createjs.JSONPLoader(this._item) : new createjs.JSONLoader(this._item)
    };
    b.handleEvent = function (a) {
        switch (a.type) {
            case "complete":
                return this._rawResult =
                    a.target.getResult(!0), this._result = a.target.getResult(), this._sendProgress(c.MANIFEST_PROGRESS), void this._loadManifest(this._result);
            case "progress":
                return a.loaded *= c.MANIFEST_PROGRESS, this.progress = a.loaded / a.total, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0), void this._sendProgress(a)
        }
        this.AbstractLoader_handleEvent(a)
    };
    b.destroy = function () {
        this.AbstractLoader_destroy();
        this._manifestQueue.close()
    };
    b._loadManifest = function (a) {
        if (a && a.manifest) {
            var b = this._manifestQueue = new createjs.LoadQueue;
            b.on("fileload", this._handleManifestFileLoad, this);
            b.on("progress", this._handleManifestProgress, this);
            b.on("complete", this._handleManifestComplete, this, !0);
            b.on("error", this._handleManifestError, this, !0);
            for (var c = 0, f = this.plugins.length; f > c; c++) b.installPlugin(this.plugins[c]);
            b.loadManifest(a)
        } else this._sendComplete()
    };
    b._handleManifestFileLoad = function (a) {
        a.target = null;
        this.dispatchEvent(a)
    };
    b._handleManifestComplete = function () {
        this._loadedItems = this._manifestQueue.getItems(!0);
        this._sendComplete()
    };
    b._handleManifestProgress = function (a) {
        this.progress = a.progress * (1 - c.MANIFEST_PROGRESS) + c.MANIFEST_PROGRESS;
        this._sendProgress(this.progress)
    };
    b._handleManifestError = function (a) {
        var b = new createjs.Event("fileerror");
        b.item = a.data;
        this.dispatchEvent(b)
    };
    createjs.ManifestLoader = createjs.promote(c, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, b) {
        this.AbstractMediaLoader_constructor(a, b, createjs.AbstractLoader.SOUND);
        createjs.RequestUtils.isAudioTag(a) ? this._tag = a : createjs.RequestUtils.isAudioTag(a.src) ? this._tag = a : createjs.RequestUtils.isAudioTag(a.tag) && (this._tag = createjs.RequestUtils.isAudioTag(a) ? a : a.src);
        null != this._tag && (this._preferXHR = !1)
    }

    var b = createjs.extend(c, createjs.AbstractMediaLoader);
    c.canLoadItem = function (a) {
        return a.type == createjs.AbstractLoader.SOUND
    };
    b._createTag = function (a) {
        var b = document.createElement("audio");
        return b.autoplay = !1, b.preload = "none", b.src = a, b
    };
    createjs.SoundLoader = createjs.promote(c, "AbstractMediaLoader")
})();
this.createjs = this.createjs || {};
(function () {
    function c(b, a) {
        this.AbstractMediaLoader_constructor(b, a, createjs.AbstractLoader.VIDEO);
        createjs.RequestUtils.isVideoTag(b) || createjs.RequestUtils.isVideoTag(b.src) ? (this.setTag(createjs.RequestUtils.isVideoTag(b) ? b : b.src), this._preferXHR = !1) : this.setTag(this._createTag())
    }

    createjs.extend(c, createjs.AbstractMediaLoader)._createTag = function () {
        return document.createElement("video")
    };
    c.canLoadItem = function (b) {
        return b.type == createjs.AbstractLoader.VIDEO
    };
    createjs.VideoLoader = createjs.promote(c,
        "AbstractMediaLoader")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a) {
        this.AbstractLoader_constructor(a, null, createjs.AbstractLoader.SPRITESHEET);
        this._manifestQueue = null
    }

    var b = createjs.extend(c, createjs.AbstractLoader);
    c.SPRITESHEET_PROGRESS = .25;
    c.canLoadItem = function (a) {
        return a.type == createjs.AbstractLoader.SPRITESHEET
    };
    b.destroy = function () {
        this.AbstractLoader_destroy;
        this._manifestQueue.close()
    };
    b._createRequest = function () {
        var a = this._item.callback;
        this._request = null != a && a instanceof Function ? new createjs.JSONPLoader(this._item) : new createjs.JSONLoader(this._item)
    };
    b.handleEvent = function (a) {
        switch (a.type) {
            case "complete":
                return this._rawResult = a.target.getResult(!0), this._result = a.target.getResult(), this._sendProgress(c.SPRITESHEET_PROGRESS), void this._loadManifest(this._result);
            case "progress":
                return a.loaded *= c.SPRITESHEET_PROGRESS, this.progress = a.loaded / a.total, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0), void this._sendProgress(a)
        }
        this.AbstractLoader_handleEvent(a)
    };
    b._loadManifest = function (a) {
        if (a && a.images) {
            var b = this._manifestQueue = new createjs.LoadQueue;
            b.on("complete", this._handleManifestComplete, this, !0);
            b.on("fileload", this._handleManifestFileLoad, this);
            b.on("progress", this._handleManifestProgress, this);
            b.on("error", this._handleManifestError, this, !0);
            b.loadManifest(a.images)
        }
    };
    b._handleManifestFileLoad = function (a) {
        var b = a.result;
        if (null != b) {
            var c = this.getResult().images;
            a = c.indexOf(a.item.src);
            c[a] = b
        }
    };
    b._handleManifestComplete = function () {
        this._result = new createjs.SpriteSheet(this._result);
        this._loadedItems = this._manifestQueue.getItems(!0);
        this._sendComplete()
    };
    b._handleManifestProgress = function (a) {
        this.progress = a.progress * (1 - c.SPRITESHEET_PROGRESS) + c.SPRITESHEET_PROGRESS;
        this._sendProgress(this.progress)
    };
    b._handleManifestError = function (a) {
        var b = new createjs.Event("fileerror");
        b.item = a.data;
        this.dispatchEvent(b)
    };
    createjs.SpriteSheetLoader = createjs.promote(c, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, b) {
        this.AbstractLoader_constructor(a, b, createjs.AbstractLoader.SVG);
        this.resultFormatter = this._formatResult;
        this._tagSrcAttribute = "data";
        b ? this.setTag(document.createElement("svg")) : (this.setTag(document.createElement("object")), this.getTag().type = "image/svg+xml")
    }

    var b = createjs.extend(c, createjs.AbstractLoader);
    c.canLoadItem = function (a) {
        return a.type == createjs.AbstractLoader.SVG
    };
    b._formatResult = function (a) {
        var b = createjs.DataUtils.parseXML(a.getResult(!0), "text/xml");
        a =
            a.getTag();
        return !this._preferXHR && document.body.contains(a) && document.body.removeChild(a), null != b.documentElement ? (a.appendChild(b.documentElement), a.style.visibility = "visible", a) : b
    };
    createjs.SVGLoader = createjs.promote(c, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a) {
        this.AbstractLoader_constructor(a, !0, createjs.AbstractLoader.XML);
        this.resultFormatter = this._formatResult
    }

    var b = createjs.extend(c, createjs.AbstractLoader);
    c.canLoadItem = function (a) {
        return a.type == createjs.AbstractLoader.XML
    };
    b._formatResult = function (a) {
        return createjs.DataUtils.parseXML(a.getResult(!0), "text/xml")
    };
    createjs.XMLLoader = createjs.promote(c, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function () {
    var c = createjs.SoundJS = createjs.SoundJS || {};
    c.version = "0.6.1";
    c.buildDate = "Thu, 21 May 2015 16:17:37 GMT"
})();
this.createjs = this.createjs || {};
createjs.indexOf = function (c, b) {
    for (var a = 0, d = c.length; d > a; a++) if (b === c[a]) return a;
    return -1
};
this.createjs = this.createjs || {};
(function () {
    createjs.proxy = function (c, b) {
        var a = Array.prototype.slice.call(arguments, 2);
        return function () {
            return c.apply(b, Array.prototype.slice.call(arguments, 0).concat(a))
        }
    }
})();
this.createjs = this.createjs || {};
(function () {
    var c = function () {
        this.duration = this.startTime = this.pan = this.volume = this.loop = this.offset = this.delay = this.interrupt = null
    }, b = c.prototype = {};
    c.create = function (a) {
        if (a instanceof c || a instanceof Object) {
            var b = new createjs.PlayPropsConfig;
            return b.set(a), b
        }
        throw Error("Type not recognized.");
    };
    b.set = function (a) {
        for (var b in a) this[b] = a[b];
        return this
    };
    b.toString = function () {
        return "[PlayPropsConfig]"
    };
    createjs.PlayPropsConfig = c
})();
this.createjs = this.createjs || {};
(function () {
    function c() {
        throw"Sound cannot be instantiated";
    }

    function b(a, b) {
        this.init(a, b)
    }

    c.INTERRUPT_ANY = "any";
    c.INTERRUPT_EARLY = "early";
    c.INTERRUPT_LATE = "late";
    c.INTERRUPT_NONE = "none";
    c.PLAY_INITED = "playInited";
    c.PLAY_SUCCEEDED = "playSucceeded";
    c.PLAY_INTERRUPTED = "playInterrupted";
    c.PLAY_FINISHED = "playFinished";
    c.PLAY_FAILED = "playFailed";
    c.SUPPORTED_EXTENSIONS = "mp3 ogg opus mpeg wav m4a mp4 aiff wma mid".split(" ");
    c.EXTENSION_MAP = {m4a: "mp4"};
    c.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([/.]*?(?:[^?]+)?\/)?((?:[^/?]+)\.(\w+))(?:\?(\S+)?)?$/;
    c.defaultInterruptBehavior = c.INTERRUPT_NONE;
    c.alternateExtensions = [];
    c.activePlugin = null;
    c._masterVolume = 1;
    Object.defineProperty(c, "volume", {
        get: function () {
            return this._masterVolume
        }, set: function (a) {
            if (null == Number(a)) return !1;
            if (a = Math.max(0, Math.min(1, a)), c._masterVolume = a, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(a)) for (var b = this._instances, f = 0, h = b.length; h > f; f++) b[f].setMasterVolume(a)
        }
    });
    c._masterMute = !1;
    Object.defineProperty(c, "muted", {
        get: function () {
            return this._masterMute
        },
        set: function (a) {
            if (null == a) return !1;
            if (this._masterMute = a, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(a)) for (var b = this._instances, c = 0, h = b.length; h > c; c++) b[c].setMasterMute(a);
            return !0
        }
    });
    Object.defineProperty(c, "capabilities", {
        get: function () {
            return null == c.activePlugin ? null : c.activePlugin._capabilities
        }, set: function () {
            return !1
        }
    });
    c._pluginsRegistered = !1;
    c._lastID = 0;
    c._instances = [];
    c._idHash = {};
    c._preloadHash = {};
    c._defaultPlayPropsHash = {};
    c.addEventListener = null;
    c.removeEventListener =
        null;
    c.removeAllEventListeners = null;
    c.dispatchEvent = null;
    c.hasEventListener = null;
    c._listeners = null;
    createjs.EventDispatcher.initialize(c);
    c.getPreloadHandlers = function () {
        return {callback: createjs.proxy(c.initLoad, c), types: ["sound"], extensions: c.SUPPORTED_EXTENSIONS}
    };
    c._handleLoadComplete = function (a) {
        var b = a.target.getItem().src;
        if (c._preloadHash[b]) for (var f = 0, h = c._preloadHash[b].length; h > f; f++) {
            var k = c._preloadHash[b][f];
            if (c._preloadHash[b][f] = !0, c.hasEventListener("fileload")) a = new createjs.Event("fileload"),
                a.src = k.src, a.id = k.id, a.data = k.data, a.sprite = k.sprite, c.dispatchEvent(a)
        }
    };
    c._handleLoadError = function (a) {
        var b = a.target.getItem().src;
        if (c._preloadHash[b]) for (var f = 0, h = c._preloadHash[b].length; h > f; f++) {
            var k = c._preloadHash[b][f];
            if (c._preloadHash[b][f] = !1, c.hasEventListener("fileerror")) a = new createjs.Event("fileerror"), a.src = k.src, a.id = k.id, a.data = k.data, a.sprite = k.sprite, c.dispatchEvent(a)
        }
    };
    c._registerPlugin = function (a) {
        return a.isSupported() ? (c.activePlugin = new a, !0) : !1
    };
    c.registerPlugins = function (a) {
        c._pluginsRegistered =
            !0;
        for (var b = 0, f = a.length; f > b; b++) if (c._registerPlugin(a[b])) return !0;
        return !1
    };
    c.initializeDefaultPlugins = function () {
        return null != c.activePlugin ? !0 : c._pluginsRegistered ? !1 : c.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]) ? !0 : !1
    };
    c.isReady = function () {
        return null != c.activePlugin
    };
    c.getCapabilities = function () {
        return null == c.activePlugin ? null : c.activePlugin._capabilities
    };
    c.getCapability = function (a) {
        return null == c.activePlugin ? null : c.activePlugin._capabilities[a]
    };
    c.initLoad = function (a) {
        return c._registerSound(a)
    };
    c._registerSound = function (a) {
        if (!c.initializeDefaultPlugins()) return !1;
        var e;
        if (a.src instanceof Object ? (e = c._parseSrc(a.src), e.src = a.path + e.src) : e = c._parsePath(a.src), null == e) return !1;
        a.src = e.src;
        a.type = "sound";
        e = a.data;
        var f = null;
        if (null != e && (isNaN(e.channels) ? isNaN(e) || (f = parseInt(e)) : f = parseInt(e.channels), e.audioSprite)) for (var h, k = e.audioSprite.length; k--;) h = e.audioSprite[k], c._idHash[h.id] = {
            src: a.src,
            startTime: parseInt(h.startTime),
            duration: parseInt(h.duration)
        }, h.defaultPlayProps && (c._defaultPlayPropsHash[h.id] =
            createjs.PlayPropsConfig.create(h.defaultPlayProps));
        null != a.id && (c._idHash[a.id] = {src: a.src});
        h = c.activePlugin.register(a);
        return b.create(a.src, f), null != e && isNaN(e) ? a.data.channels = f || b.maxPerChannel() : a.data = f || b.maxPerChannel(), h.type && (a.type = h.type), a.defaultPlayProps && (c._defaultPlayPropsHash[a.src] = createjs.PlayPropsConfig.create(a.defaultPlayProps)), h
    };
    c.registerSound = function (a, b, f, h, k) {
        f = {src: a, id: b, data: f, defaultPlayProps: k};
        a instanceof Object && a.src && (h = b, f = a);
        f = createjs.LoadItem.create(f);
        f.path = h;
        null == h || f.src instanceof Object || (f.src = h + a);
        a = c._registerSound(f);
        if (!a) return !1;
        if (c._preloadHash[f.src] || (c._preloadHash[f.src] = []), c._preloadHash[f.src].push(f), 1 == c._preloadHash[f.src].length) a.on("complete", createjs.proxy(this._handleLoadComplete, this)), a.on("error", createjs.proxy(this._handleLoadError, this)), c.activePlugin.preload(a); else if (1 == c._preloadHash[f.src][0]) return !0;
        return f
    };
    c.registerSounds = function (a, b) {
        var c = [];
        a.path && (b ? b += a.path : b = a.path, a = a.manifest);
        for (var h =
            0, k = a.length; k > h; h++) c[h] = createjs.Sound.registerSound(a[h].src, a[h].id, a[h].data, b, a[h].defaultPlayProps);
        return c
    };
    c.removeSound = function (a, e) {
        if (null == c.activePlugin) return !1;
        a instanceof Object && a.src && (a = a.src);
        var f;
        if (a instanceof Object ? f = c._parseSrc(a) : (a = c._getSrcById(a).src, f = c._parsePath(a)), null == f) return !1;
        a = f.src;
        null != e && (a = e + a);
        for (var h in c._idHash) c._idHash[h].src == a && delete c._idHash[h];
        return b.removeSrc(a), delete c._preloadHash[a], c.activePlugin.removeSound(a), !0
    };
    c.removeSounds =
        function (a, b) {
            var c = [];
            a.path && (b ? b += a.path : b = a.path, a = a.manifest);
            for (var h = 0, k = a.length; k > h; h++) c[h] = createjs.Sound.removeSound(a[h].src, b);
            return c
        };
    c.removeAllSounds = function () {
        c._idHash = {};
        c._preloadHash = {};
        b.removeAll();
        c.activePlugin && c.activePlugin.removeAllSounds()
    };
    c.loadComplete = function (a) {
        if (!c.isReady()) return !1;
        var b = c._parsePath(a);
        return a = b ? c._getSrcById(b.src).src : c._getSrcById(a).src, void 0 == c._preloadHash[a] ? !1 : 1 == c._preloadHash[a][0]
    };
    c._parsePath = function (a) {
        "string" != typeof a &&
        (a = a.toString());
        var b = a.match(c.FILE_PATTERN);
        if (null == b) return !1;
        for (var f = b[4], h = b[5], k = c.capabilities, m = 0; !k[h];) if (h = c.alternateExtensions[m++], m > c.alternateExtensions.length) return null;
        a = a.replace("." + b[5], "." + h);
        return {name: f, src: a, extension: h}
    };
    c._parseSrc = function (a) {
        var b = {name: void 0, src: void 0, extension: void 0}, f = c.capabilities, h;
        for (h in a) if (a.hasOwnProperty(h) && f[h]) {
            b.src = a[h];
            b.extension = h;
            break
        }
        if (!b.src) return !1;
        a = b.src.lastIndexOf("/");
        return b.name = -1 != a ? b.src.slice(a + 1) : b.src,
            b
    };
    c.play = function (a, b, f, h, k, m, p, q, u) {
        b = createjs.PlayPropsConfig.create(b instanceof Object || b instanceof createjs.PlayPropsConfig ? b : {
            interrupt: b,
            delay: f,
            offset: h,
            loop: k,
            volume: m,
            pan: p,
            startTime: q,
            duration: u
        });
        a = c.createInstance(a, b.startTime, b.duration);
        return c._playInstance(a, b) || a._playFailed(), a
    };
    c.createInstance = function (a, e, f) {
        if (!c.initializeDefaultPlugins()) return new createjs.DefaultSoundInstance(a, e, f);
        var h = c._defaultPlayPropsHash[a];
        a = c._getSrcById(a);
        var k = c._parsePath(a.src), m = null;
        return null != k && null != k.src ? (b.create(k.src), null == e && (e = a.startTime), m = c.activePlugin.create(k.src, e, f || a.duration), h = h || c._defaultPlayPropsHash[k.src], h && m.applyPlayProps(h)) : m = new createjs.DefaultSoundInstance(a, e, f), m.uniqueId = c._lastID++, m
    };
    c.stop = function () {
        for (var a = this._instances, b = a.length; b--;) a[b].stop()
    };
    c.setVolume = function (a) {
        if (null == Number(a)) return !1;
        if (a = Math.max(0, Math.min(1, a)), c._masterVolume = a, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(a)) for (var b =
            this._instances, f = 0, h = b.length; h > f; f++) b[f].setMasterVolume(a)
    };
    c.getVolume = function () {
        return this._masterVolume
    };
    c.setMute = function (a) {
        if (null == a) return !1;
        if (this._masterMute = a, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(a)) for (var b = this._instances, c = 0, h = b.length; h > c; c++) b[c].setMasterMute(a);
        return !0
    };
    c.getMute = function () {
        return this._masterMute
    };
    c.setDefaultPlayProps = function (a, b) {
        a = c._getSrcById(a);
        c._defaultPlayPropsHash[c._parsePath(a.src).src] = createjs.PlayPropsConfig.create(b)
    };
    c.getDefaultPlayProps = function (a) {
        return a = c._getSrcById(a), c._defaultPlayPropsHash[c._parsePath(a.src).src]
    };
    c._playInstance = function (a, b) {
        var f = c._defaultPlayPropsHash[a.src] || {};
        if (null == b.interrupt && (b.interrupt = f.interrupt || c.defaultInterruptBehavior), null == b.delay && (b.delay = f.delay || 0), null == b.offset && (b.offset = a.getPosition()), null == b.loop && (b.loop = a.loop), null == b.volume && (b.volume = a.volume), null == b.pan && (b.pan = a.pan), 0 == b.delay) {
            if (!c._beginPlaying(a, b)) return !1
        } else f = setTimeout(function () {
            c._beginPlaying(a,
                b)
        }, b.delay), a.delayTimeoutId = f;
        return this._instances.push(a), !0
    };
    c._beginPlaying = function (a, c) {
        if (!b.add(a, c.interrupt)) return !1;
        if (!a._beginPlaying(c)) {
            var f = createjs.indexOf(this._instances, a);
            return -1 < f && this._instances.splice(f, 1), !1
        }
        return !0
    };
    c._getSrcById = function (a) {
        return c._idHash[a] || {src: a}
    };
    c._playFinished = function (a) {
        b.remove(a);
        a = createjs.indexOf(this._instances, a);
        -1 < a && this._instances.splice(a, 1)
    };
    createjs.Sound = c;
    b.channels = {};
    b.create = function (a, c) {
        return null == b.get(a) ? (b.channels[a] =
            new b(a, c), !0) : !1
    };
    b.removeSrc = function (a) {
        var c = b.get(a);
        return null == c ? !1 : (c._removeAll(), delete b.channels[a], !0)
    };
    b.removeAll = function () {
        for (var a in b.channels) b.channels[a]._removeAll();
        b.channels = {}
    };
    b.add = function (a, c) {
        var f = b.get(a.src);
        return null == f ? !1 : f._add(a, c)
    };
    b.remove = function (a) {
        var c = b.get(a.src);
        return null == c ? !1 : (c._remove(a), !0)
    };
    b.maxPerChannel = function () {
        return a.maxDefault
    };
    b.get = function (a) {
        return b.channels[a]
    };
    var a = b.prototype;
    a.constructor = b;
    a.src = null;
    a.max = null;
    a.maxDefault =
        100;
    a.length = 0;
    a.init = function (a, b) {
        this.src = a;
        this.max = b || this.maxDefault;
        -1 == this.max && (this.max = this.maxDefault);
        this._instances = []
    };
    a._get = function (a) {
        return this._instances[a]
    };
    a._add = function (a, b) {
        return this._getSlot(b, a) ? (this._instances.push(a), this.length++, !0) : !1
    };
    a._remove = function (a) {
        a = createjs.indexOf(this._instances, a);
        return -1 == a ? !1 : (this._instances.splice(a, 1), this.length--, !0)
    };
    a._removeAll = function () {
        for (var a = this.length - 1; 0 <= a; a--) this._instances[a].stop()
    };
    a._getSlot = function (a) {
        var b,
            f;
        if (a != c.INTERRUPT_NONE && (f = this._get(0), null == f)) return !0;
        for (var h = 0, k = this.max; k > h; h++) {
            if (b = this._get(h), null == b) return !0;
            if (b.playState == c.PLAY_FINISHED || b.playState == c.PLAY_INTERRUPTED || b.playState == c.PLAY_FAILED) {
                f = b;
                break
            }
            a != c.INTERRUPT_NONE && (a == c.INTERRUPT_EARLY && b.getPosition() < f.getPosition() || a == c.INTERRUPT_LATE && b.getPosition() > f.getPosition()) && (f = b)
        }
        return null != f ? (f._interrupt(), this._remove(f), !0) : !1
    };
    a.toString = function () {
        return "[Sound SoundChannel]"
    }
})();
this.createjs = this.createjs || {};
(function () {
    var c = function (a, b, c, f) {
        this.EventDispatcher_constructor();
        this.src = a;
        this.uniqueId = -1;
        this.delayTimeoutId = this.playState = null;
        this._volume = 1;
        Object.defineProperty(this, "volume", {get: this.getVolume, set: this.setVolume});
        this._pan = 0;
        Object.defineProperty(this, "pan", {get: this.getPan, set: this.setPan});
        this._startTime = Math.max(0, b || 0);
        Object.defineProperty(this, "startTime", {get: this.getStartTime, set: this.setStartTime});
        this._duration = Math.max(0, c || 0);
        Object.defineProperty(this, "duration", {
            get: this.getDuration,
            set: this.setDuration
        });
        this._playbackResource = null;
        Object.defineProperty(this, "playbackResource", {get: this.getPlaybackResource, set: this.setPlaybackResource});
        !1 !== f && !0 !== f && this.setPlaybackResource(f);
        this._position = 0;
        Object.defineProperty(this, "position", {get: this.getPosition, set: this.setPosition});
        this._loop = 0;
        Object.defineProperty(this, "loop", {get: this.getLoop, set: this.setLoop});
        this._muted = !1;
        Object.defineProperty(this, "muted", {get: this.getMuted, set: this.setMuted});
        this._paused = !1;
        Object.defineProperty(this,
            "paused", {get: this.getPaused, set: this.setPaused})
    }, b = createjs.extend(c, createjs.EventDispatcher);
    b.play = function (a, b, c, f, h, k) {
        var m;
        return m = createjs.PlayPropsConfig.create(a instanceof Object || a instanceof createjs.PlayPropsConfig ? a : {
            interrupt: a,
            delay: b,
            offset: c,
            loop: f,
            volume: h,
            pan: k
        }), this.playState == createjs.Sound.PLAY_SUCCEEDED ? (this.applyPlayProps(m), void(this._paused && this.setPaused(!1))) : (this._cleanUp(), createjs.Sound._playInstance(this, m), this)
    };
    b.stop = function () {
        return this._position = 0,
            this._paused = !1, this._handleStop(), this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, this
    };
    b.destroy = function () {
        this._cleanUp();
        this.playbackResource = this.src = null;
        this.removeAllEventListeners()
    };
    b.applyPlayProps = function (a) {
        return null != a.offset && this.setPosition(a.offset), null != a.loop && this.setLoop(a.loop), null != a.volume && this.setVolume(a.volume), null != a.pan && this.setPan(a.pan), null != a.startTime && (this.setStartTime(a.startTime), this.setDuration(a.duration)), this
    };
    b.toString = function () {
        return "[AbstractSoundInstance]"
    };
    b.getPaused = function () {
        return this._paused
    };
    b.setPaused = function (a) {
        return !0 !== a && !1 !== a || this._paused == a || 1 == a && this.playState != createjs.Sound.PLAY_SUCCEEDED ? void 0 : (this._paused = a, a ? this._pause() : this._resume(), clearTimeout(this.delayTimeoutId), this)
    };
    b.setVolume = function (a) {
        return a == this._volume ? this : (this._volume = Math.max(0, Math.min(1, a)), this._muted || this._updateVolume(), this)
    };
    b.getVolume = function () {
        return this._volume
    };
    b.setMuted = function (a) {
        return !0 === a || !1 === a ? (this._muted = a, this._updateVolume(),
            this) : void 0
    };
    b.getMuted = function () {
        return this._muted
    };
    b.setPan = function (a) {
        return a == this._pan ? this : (this._pan = Math.max(-1, Math.min(1, a)), this._updatePan(), this)
    };
    b.getPan = function () {
        return this._pan
    };
    b.getPosition = function () {
        return this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED || (this._position = this._calculateCurrentPosition()), this._position
    };
    b.setPosition = function (a) {
        return this._position = Math.max(0, a), this.playState == createjs.Sound.PLAY_SUCCEEDED && this._updatePosition(), this
    };
    b.getStartTime =
        function () {
            return this._startTime
        };
    b.setStartTime = function (a) {
        return a == this._startTime ? this : (this._startTime = Math.max(0, a || 0), this._updateStartTime(), this)
    };
    b.getDuration = function () {
        return this._duration
    };
    b.setDuration = function (a) {
        return a == this._duration ? this : (this._duration = Math.max(0, a || 0), this._updateDuration(), this)
    };
    b.setPlaybackResource = function (a) {
        return this._playbackResource = a, 0 == this._duration && this._setDurationFromSource(), this
    };
    b.getPlaybackResource = function () {
        return this._playbackResource
    };
    b.getLoop = function () {
        return this._loop
    };
    b.setLoop = function (a) {
        null != this._playbackResource && (0 != this._loop && 0 == a ? this._removeLooping(a) : 0 == this._loop && 0 != a && this._addLooping(a));
        this._loop = a
    };
    b._sendEvent = function (a) {
        a = new createjs.Event(a);
        this.dispatchEvent(a)
    };
    b._cleanUp = function () {
        clearTimeout(this.delayTimeoutId);
        this._handleCleanUp();
        this._paused = !1;
        createjs.Sound._playFinished(this)
    };
    b._interrupt = function () {
        this._cleanUp();
        this.playState = createjs.Sound.PLAY_INTERRUPTED;
        this._sendEvent("interrupted")
    };
    b._beginPlaying = function (a) {
        return this.setPosition(a.offset), this.setLoop(a.loop), this.setVolume(a.volume), this.setPan(a.pan), null != a.startTime && (this.setStartTime(a.startTime), this.setDuration(a.duration)), null != this._playbackResource && this._position < this._duration ? (this._paused = !1, this._handleSoundReady(), this.playState = createjs.Sound.PLAY_SUCCEEDED, this._sendEvent("succeeded"), !0) : (this._playFailed(), !1)
    };
    b._playFailed = function () {
        this._cleanUp();
        this.playState = createjs.Sound.PLAY_FAILED;
        this._sendEvent("failed")
    };
    b._handleSoundComplete = function () {
        return this._position = 0, 0 != this._loop ? (this._loop--, this._handleLoop(), void this._sendEvent("loop")) : (this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, void this._sendEvent("complete"))
    };
    b._handleSoundReady = function () {
    };
    b._updateVolume = function () {
    };
    b._updatePan = function () {
    };
    b._updateStartTime = function () {
    };
    b._updateDuration = function () {
    };
    b._setDurationFromSource = function () {
    };
    b._calculateCurrentPosition = function () {
    };
    b._updatePosition = function () {
    };
    b._removeLooping =
        function () {
        };
    b._addLooping = function () {
    };
    b._pause = function () {
    };
    b._resume = function () {
    };
    b._handleStop = function () {
    };
    b._handleCleanUp = function () {
    };
    b._handleLoop = function () {
    };
    createjs.AbstractSoundInstance = createjs.promote(c, "EventDispatcher");
    createjs.DefaultSoundInstance = createjs.AbstractSoundInstance
})();
this.createjs = this.createjs || {};
(function () {
    var c = function () {
        this._capabilities = null;
        this._loaders = {};
        this._audioSources = {};
        this._soundInstances = {};
        this._volume = 1;
        this._loaderClass;
        this._soundInstanceClass
    }, b = c.prototype;
    c._capabilities = null;
    c.isSupported = function () {
        return !0
    };
    b.register = function (a) {
        var b = this._loaders[a.src];
        return b && !b.canceled ? this._loaders[a.src] : (this._audioSources[a.src] = !0, this._soundInstances[a.src] = [], b = new this._loaderClass(a), b.on("complete", createjs.proxy(this._handlePreloadComplete, this)), this._loaders[a.src] =
            b, b)
    };
    b.preload = function (a) {
        a.on("error", createjs.proxy(this._handlePreloadError, this));
        a.load()
    };
    b.isPreloadStarted = function (a) {
        return null != this._audioSources[a]
    };
    b.isPreloadComplete = function (a) {
        return !(null == this._audioSources[a] || 1 == this._audioSources[a])
    };
    b.removeSound = function (a) {
        if (this._soundInstances[a]) {
            for (var b = this._soundInstances[a].length; b--;) this._soundInstances[a][b].destroy();
            delete this._soundInstances[a];
            delete this._audioSources[a];
            this._loaders[a] && this._loaders[a].destroy();
            delete this._loaders[a]
        }
    };
    b.removeAllSounds = function () {
        for (var a in this._audioSources) this.removeSound(a)
    };
    b.create = function (a, b, c) {
        this.isPreloadStarted(a) || this.preload(this.register(a));
        b = new this._soundInstanceClass(a, b, c, this._audioSources[a]);
        return this._soundInstances[a].push(b), b
    };
    b.setVolume = function (a) {
        return this._volume = a, this._updateVolume(), !0
    };
    b.getVolume = function () {
        return this._volume
    };
    b.setMute = function () {
        return this._updateVolume(), !0
    };
    b.toString = function () {
        return "[AbstractPlugin]"
    };
    b._handlePreloadComplete = function (a) {
        var b = a.target.getItem().src;
        this._audioSources[b] = a.result;
        a = 0;
        for (var c = this._soundInstances[b].length; c > a; a++) this._soundInstances[b][a].setPlaybackResource(this._audioSources[b])
    };
    b._handlePreloadError = function () {
    };
    b._updateVolume = function () {
    };
    createjs.AbstractPlugin = c
})();
this.createjs = this.createjs || {};
(function () {
    function c(a) {
        this.AbstractLoader_constructor(a, !0, createjs.AbstractLoader.SOUND)
    }

    var b = createjs.extend(c, createjs.AbstractLoader);
    c.context = null;
    b.toString = function () {
        return "[WebAudioLoader]"
    };
    b._createRequest = function () {
        this._request = new createjs.XHRRequest(this._item, !1);
        this._request.setResponseType("arraybuffer")
    };
    b._sendComplete = function () {
        c.context.decodeAudioData(this._rawResult, createjs.proxy(this._handleAudioDecoded, this), createjs.proxy(this._sendError, this))
    };
    b._handleAudioDecoded =
        function (a) {
            this._result = a;
            this.AbstractLoader__sendComplete()
        };
    createjs.WebAudioLoader = createjs.promote(c, "AbstractLoader")
})();
this.createjs = this.createjs || {};
(function () {
    function c(b, c, f, h) {
        this.AbstractSoundInstance_constructor(b, c, f, h);
        this.gainNode = a.context.createGain();
        this.panNode = a.context.createPanner();
        this.panNode.panningModel = a._panningModel;
        this.panNode.connect(this.gainNode);
        this._sourceNodeNext = this._soundCompleteTimeout = this.sourceNode = null;
        this._playbackStartTime = 0;
        this._endedHandler = createjs.proxy(this._handleSoundComplete, this)
    }

    var b = createjs.extend(c, createjs.AbstractSoundInstance), a = c;
    a.context = null;
    a.destinationNode = null;
    a._panningModel =
        "equalpower";
    b.destroy = function () {
        this.AbstractSoundInstance_destroy();
        this.panNode.disconnect(0);
        this.panNode = null;
        this.gainNode.disconnect(0);
        this.gainNode = null
    };
    b.toString = function () {
        return "[WebAudioSoundInstance]"
    };
    b._updatePan = function () {
        this.panNode.setPosition(this._pan, 0, -.5)
    };
    b._removeLooping = function () {
        this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)
    };
    b._addLooping = function () {
        this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime,
            0))
    };
    b._setDurationFromSource = function () {
        this._duration = 1E3 * this.playbackResource.duration
    };
    b._handleCleanUp = function () {
        this.sourceNode && this.playState == createjs.Sound.PLAY_SUCCEEDED && (this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext));
        0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0);
        clearTimeout(this._soundCompleteTimeout);
        this._playbackStartTime = 0
    };
    b._cleanUpAudioNode = function (a) {
        return a && (a.stop(0), a.disconnect(0),
            a = null), a
    };
    b._handleSoundReady = function () {
        this.gainNode.connect(a.destinationNode);
        var b = .001 * this._duration, c = .001 * this._position;
        c > b && (c = b);
        this.sourceNode = this._createAndPlayAudioNode(a.context.currentTime - b, c);
        this._playbackStartTime = this.sourceNode.startTime - c;
        this._soundCompleteTimeout = setTimeout(this._endedHandler, 1E3 * (b - c));
        0 != this._loop && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0))
    };
    b._createAndPlayAudioNode = function (b, c) {
        var f = a.context.createBufferSource();
        f.buffer = this.playbackResource;
        f.connect(this.panNode);
        var h = .001 * this._duration;
        return f.startTime = b + h, f.start(f.startTime, c + .001 * this._startTime, h - c), f
    };
    b._pause = function () {
        this._position = 1E3 * (a.context.currentTime - this._playbackStartTime);
        this.sourceNode = this._cleanUpAudioNode(this.sourceNode);
        this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext);
        0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0);
        clearTimeout(this._soundCompleteTimeout)
    };
    b._resume = function () {
        this._handleSoundReady()
    };
    b._updateVolume = function () {
        var a = this._muted ? 0 : this._volume;
        a != this.gainNode.gain.value && (this.gainNode.gain.value = a)
    };
    b._calculateCurrentPosition = function () {
        return 1E3 * (a.context.currentTime - this._playbackStartTime)
    };
    b._updatePosition = function () {
        this.sourceNode = this._cleanUpAudioNode(this.sourceNode);
        this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext);
        clearTimeout(this._soundCompleteTimeout);
        this._paused || this._handleSoundReady()
    };
    b._handleLoop = function () {
        this._cleanUpAudioNode(this.sourceNode);
        this.sourceNode = this._sourceNodeNext;
        this._playbackStartTime = this.sourceNode.startTime;
        this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0);
        this._soundCompleteTimeout = setTimeout(this._endedHandler, this._duration)
    };
    b._updateDuration = function () {
        this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._pause(), this._resume())
    };
    createjs.WebAudioSoundInstance = createjs.promote(c, "AbstractSoundInstance")
})();
this.createjs = this.createjs || {};
(function () {
    function c() {
        this.AbstractPlugin_constructor();
        this._panningModel = a._panningModel;
        this.context = a.context;
        this.dynamicsCompressorNode = this.context.createDynamicsCompressor();
        this.dynamicsCompressorNode.connect(this.context.destination);
        this.gainNode = this.context.createGain();
        this.gainNode.connect(this.dynamicsCompressorNode);
        createjs.WebAudioSoundInstance.destinationNode = this.gainNode;
        this._capabilities = a._capabilities;
        this._loaderClass = createjs.WebAudioLoader;
        this._soundInstanceClass =
            createjs.WebAudioSoundInstance;
        this._addPropsToClasses()
    }

    var b = createjs.extend(c, createjs.AbstractPlugin), a = c;
    a._capabilities = null;
    a._panningModel = "equalpower";
    a.context = null;
    a.isSupported = function () {
        var b = createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid || createjs.BrowserDetect.isBlackberry;
        return "file:" != location.protocol || b || this._isFileXHRSupported() ? (a._generateCapabilities(), null == a.context ? !1 : !0) : !1
    };
    a.playEmptySound = function () {
        if (null != a.context) {
            var b = a.context.createBufferSource();
            b.buffer = a.context.createBuffer(1, 1, 22050);
            b.connect(a.context.destination);
            b.start(0, 0, 0)
        }
    };
    a._isFileXHRSupported = function () {
        var a = !0, b = new XMLHttpRequest;
        try {
            b.open("GET", "WebAudioPluginTest.fail", !1)
        } catch (c) {
            return a = !1
        }
        b.onerror = function () {
            a = !1
        };
        b.onload = function () {
            a = 404 == this.status || 200 == this.status || 0 == this.status && "" != this.response
        };
        try {
            b.send()
        } catch (h) {
            a = !1
        }
        return a
    };
    a._generateCapabilities = function () {
        if (null == a._capabilities) {
            var b = document.createElement("audio");
            if (null == b.canPlayType) return null;
            if (null == a.context) if (window.AudioContext) a.context = new AudioContext; else {
                if (!window.webkitAudioContext) return null;
                a.context = new webkitAudioContext
            }
            a._compatibilitySetUp();
            a.playEmptySound();
            a._capabilities = {panning: !0, volume: !0, tracks: -1};
            for (var c = createjs.Sound.SUPPORTED_EXTENSIONS, f = createjs.Sound.EXTENSION_MAP, h = 0, k = c.length; k > h; h++) {
                var m = c[h], p = f[m] || m;
                a._capabilities[m] = "no" != b.canPlayType("audio/" + m) && "" != b.canPlayType("audio/" + m) || "no" != b.canPlayType("audio/" + p) && "" != b.canPlayType("audio/" +
                    p)
            }
            2 > a.context.destination.numberOfChannels && (a._capabilities.panning = !1)
        }
    };
    a._compatibilitySetUp = function () {
        if (a._panningModel = "equalpower", !a.context.createGain) {
            a.context.createGain = a.context.createGainNode;
            var b = a.context.createBufferSource();
            b.__proto__.start = b.__proto__.noteGrainOn;
            b.__proto__.stop = b.__proto__.noteOff;
            a._panningModel = 0
        }
    };
    b.toString = function () {
        return "[WebAudioPlugin]"
    };
    b._addPropsToClasses = function () {
        var a = this._soundInstanceClass;
        a.context = this.context;
        a.destinationNode = this.gainNode;
        a._panningModel = this._panningModel;
        this._loaderClass.context = this.context
    };
    b._updateVolume = function () {
        var a = createjs.Sound._masterMute ? 0 : this._volume;
        a != this.gainNode.gain.value && (this.gainNode.gain.value = a)
    };
    createjs.WebAudioPlugin = createjs.promote(c, "AbstractPlugin")
})();
this.createjs = this.createjs || {};
(function () {
    function c() {
        throw"HTMLAudioTagPool cannot be instantiated";
    }

    function b() {
        this._tags = []
    }

    c._tags = {};
    c._tagPool = new b;
    c._tagUsed = {};
    c.get = function (a) {
        var b = c._tags[a];
        return null == b ? (b = c._tags[a] = c._tagPool.get(), b.src = a) : c._tagUsed[a] ? (b = c._tagPool.get(), b.src = a) : c._tagUsed[a] = !0, b
    };
    c.set = function (a, b) {
        b == c._tags[a] ? c._tagUsed[a] = !1 : c._tagPool.set(b)
    };
    c.remove = function (a) {
        var b = c._tags[a];
        return null == b ? !1 : (c._tagPool.set(b), delete c._tags[a], delete c._tagUsed[a], !0)
    };
    c.getDuration = function (a) {
        a =
            c._tags[a];
        return null == a ? 0 : 1E3 * a.duration
    };
    createjs.HTMLAudioTagPool = c;
    var a = b.prototype;
    a.constructor = b;
    a.get = function () {
        var a;
        return a = 0 == this._tags.length ? this._createTag() : this._tags.pop(), null == a.parentNode && document.body.appendChild(a), a
    };
    a.set = function (a) {
        -1 == createjs.indexOf(this._tags, a) && (this._tags.src = null, this._tags.push(a))
    };
    a.toString = function () {
        return "[TagPool]"
    };
    a._createTag = function () {
        var a = document.createElement("audio");
        return a.autoplay = !1, a.preload = "none", a
    }
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, b, c, f) {
        this.AbstractSoundInstance_constructor(a, b, c, f);
        this._delayTimeoutId = this._audioSpriteStopTime = null;
        this._endedHandler = createjs.proxy(this._handleSoundComplete, this);
        this._readyHandler = createjs.proxy(this._handleTagReady, this);
        this._stalledHandler = createjs.proxy(this._playFailed, this);
        this._audioSpriteEndHandler = createjs.proxy(this._handleAudioSpriteLoop, this);
        this._loopHandler = createjs.proxy(this._handleSoundComplete, this);
        c ? this._audioSpriteStopTime = .001 * (b + c) : this._duration =
            createjs.HTMLAudioTagPool.getDuration(this.src)
    }

    var b = createjs.extend(c, createjs.AbstractSoundInstance);
    b.setMasterVolume = function () {
        this._updateVolume()
    };
    b.setMasterMute = function () {
        this._updateVolume()
    };
    b.toString = function () {
        return "[HTMLAudioSoundInstance]"
    };
    b._removeLooping = function () {
        null != this._playbackResource && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
    };
    b._addLooping = function () {
        null == this._playbackResource ||
        this._audioSpriteStopTime || (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0)
    };
    b._handleCleanUp = function () {
        var a = this._playbackResource;
        if (null != a) {
            a.pause();
            a.loop = !1;
            a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1);
            a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1);
            a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1);
            a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1);
            a.removeEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1);
            try {
                a.currentTime = this._startTime
            } catch (b) {
            }
            createjs.HTMLAudioTagPool.set(this.src, a);
            this._playbackResource = null
        }
    };
    b._beginPlaying = function (a) {
        return this._playbackResource = createjs.HTMLAudioTagPool.get(this.src), this.AbstractSoundInstance__beginPlaying(a)
    };
    b._handleSoundReady = function () {
        if (4 !== this._playbackResource.readyState) {
            var a =
                this._playbackResource;
            return a.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), a.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), a.preload = "auto", void a.load()
        }
        this._updateVolume();
        this._playbackResource.currentTime = .001 * (this._startTime + this._position);
        this._audioSpriteStopTime ? this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1) : (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,
            this._endedHandler, !1), 0 != this._loop && (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0));
        this._playbackResource.play()
    };
    b._handleTagReady = function () {
        this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1);
        this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1);
        this._handleSoundReady()
    };
    b._pause = function () {
        this._playbackResource.pause()
    };
    b._resume = function () {
        this._playbackResource.play()
    };
    b._updateVolume = function () {
        if (null != this._playbackResource) {
            var a = this._muted || createjs.Sound._masterMute ? 0 : this._volume * createjs.Sound._masterVolume;
            a != this._playbackResource.volume && (this._playbackResource.volume = a)
        }
    };
    b._calculateCurrentPosition = function () {
        return 1E3 * this._playbackResource.currentTime - this._startTime
    };
    b._updatePosition = function () {
        this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler,
            !1);
        this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1);
        try {
            this._playbackResource.currentTime = .001 * (this._position + this._startTime)
        } catch (a) {
            this._handleSetPositionSeek(null)
        }
    };
    b._handleSetPositionSeek = function () {
        null != this._playbackResource && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler,
            !1))
    };
    b._handleAudioSpriteLoop = function () {
        this._playbackResource.currentTime <= this._audioSpriteStopTime || (this._playbackResource.pause(), 0 == this._loop ? this._handleSoundComplete(null) : (this._position = 0, this._loop--, this._playbackResource.currentTime = .001 * this._startTime, this._paused || this._playbackResource.play(), this._sendEvent("loop")))
    };
    b._handleLoop = function () {
        0 == this._loop && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler,
            !1))
    };
    b._updateStartTime = function () {
        this._audioSpriteStopTime = .001 * (this._startTime + this._duration);
        this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1))
    };
    b._updateDuration = function () {
        this._audioSpriteStopTime = .001 * (this._startTime + this._duration);
        this.playState == createjs.Sound.PLAY_SUCCEEDED &&
        (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1))
    };
    createjs.HTMLAudioSoundInstance = createjs.promote(c, "AbstractSoundInstance")
})();
this.createjs = this.createjs || {};
(function () {
    function c() {
        this.AbstractPlugin_constructor();
        this.defaultNumChannels = 2;
        this._capabilities = a._capabilities;
        this._loaderClass = createjs.SoundLoader;
        this._soundInstanceClass = createjs.HTMLAudioSoundInstance
    }

    var b = createjs.extend(c, createjs.AbstractPlugin), a = c;
    a.MAX_INSTANCES = 30;
    a._AUDIO_READY = "canplaythrough";
    a._AUDIO_ENDED = "ended";
    a._AUDIO_SEEKED = "seeked";
    a._AUDIO_STALLED = "stalled";
    a._TIME_UPDATE = "timeupdate";
    a._capabilities = null;
    a.isSupported = function () {
        return a._generateCapabilities(),
        null != a._capabilities
    };
    a._generateCapabilities = function () {
        if (null == a._capabilities) {
            var b = document.createElement("audio");
            if (null == b.canPlayType) return null;
            a._capabilities = {panning: !1, volume: !0, tracks: -1};
            for (var c = createjs.Sound.SUPPORTED_EXTENSIONS, f = createjs.Sound.EXTENSION_MAP, h = 0, k = c.length; k > h; h++) {
                var m = c[h], p = f[m] || m;
                a._capabilities[m] = "no" != b.canPlayType("audio/" + m) && "" != b.canPlayType("audio/" + m) || "no" != b.canPlayType("audio/" + p) && "" != b.canPlayType("audio/" + p)
            }
        }
    };
    b.register = function (a) {
        var b =
            createjs.HTMLAudioTagPool.get(a.src);
        a = this.AbstractPlugin_register(a);
        return a.setTag(b), a
    };
    b.removeSound = function (a) {
        this.AbstractPlugin_removeSound(a);
        createjs.HTMLAudioTagPool.remove(a)
    };
    b.create = function (a, b, c) {
        a = this.AbstractPlugin_create(a, b, c);
        return a.setPlaybackResource(null), a
    };
    b.toString = function () {
        return "[HTMLAudioPlugin]"
    };
    b.setVolume = b.getVolume = b.setMute = null;
    createjs.HTMLAudioPlugin = createjs.promote(c, "AbstractPlugin")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, b, e) {
        this.loop = this.ignoreGlobalPause = !1;
        this.duration = 0;
        this.pluginData = e || {};
        this.target = a;
        this.position = null;
        this._paused = this.passive = !1;
        this._curQueueProps = {};
        this._initQueueProps = {};
        this._steps = [];
        this._actions = [];
        this._stepPosition = this._prevPosition = 0;
        this._prevPos = -1;
        this._target = a;
        this._registered = this._inited = this._useTicks = !1;
        b && (this._useTicks = b.useTicks, this.ignoreGlobalPause = b.ignoreGlobalPause, this.loop = b.loop, b.onChange && this.addEventListener("change", b.onChange),
        b.override && c.removeTweens(a));
        b && b.paused ? this._paused = !0 : createjs.Tween._register(this, !0);
        b && null != b.position && this.setPosition(b.position, c.NONE)
    }

    var b = createjs.extend(c, createjs.EventDispatcher);
    c.NONE = 0;
    c.LOOP = 1;
    c.REVERSE = 2;
    c.IGNORE = {};
    c._tweens = [];
    c._plugins = {};
    c.get = function (a, b, e, f) {
        return f && c.removeTweens(a), new c(a, b, e)
    };
    c.tick = function (a, b) {
        for (var e = c._tweens.slice(), f = e.length - 1; 0 <= f; f--) {
            var h = e[f];
            b && !h.ignoreGlobalPause || h._paused || h.tick(h._useTicks ? 1 : a)
        }
    };
    c.handleEvent = function (a) {
        "tick" ==
        a.type && this.tick(a.delta, a.paused)
    };
    c.removeTweens = function (a) {
        if (a.tweenjs_count) {
            for (var b = c._tweens, e = b.length - 1; 0 <= e; e--) {
                var f = b[e];
                f._target == a && (f._paused = !0, b.splice(e, 1))
            }
            a.tweenjs_count = 0
        }
    };
    c.removeAllTweens = function () {
        for (var a = c._tweens, b = 0, e = a.length; e > b; b++) {
            var f = a[b];
            f._paused = !0;
            f.target && (f.target.tweenjs_count = 0)
        }
        a.length = 0
    };
    c.hasActiveTweens = function (a) {
        return a ? null != a.tweenjs_count && !!a.tweenjs_count : c._tweens && !!c._tweens.length
    };
    c.installPlugin = function (a, b) {
        var e = a.priority;
        null == e && (a.priority = e = 0);
        for (var f = 0, h = b.length, k = c._plugins; h > f; f++) {
            var m = b[f];
            if (k[m]) {
                for (var p = k[m], q = 0, u = p.length; u > q && !(e < p[q].priority); q++) ;
                k[m].splice(q, 0, a)
            } else k[m] = [a]
        }
    };
    c._register = function (a, b) {
        var e = a._target, f = c._tweens;
        if (b && !a._registered) e && (e.tweenjs_count = e.tweenjs_count ? e.tweenjs_count + 1 : 1), f.push(a), !c._inited && createjs.Ticker && (createjs.Ticker.addEventListener("tick", c), c._inited = !0); else if (!b && a._registered) for (e && e.tweenjs_count--, e = f.length; e--;) if (f[e] == a) {
            f.splice(e,
                1);
            break
        }
        a._registered = b
    };
    b.wait = function (a, b) {
        if (null == a || 0 >= a) return this;
        var c = this._cloneProps(this._curQueueProps);
        return this._addStep({d: a, p0: c, e: this._linearEase, p1: c, v: b})
    };
    b.to = function (a, b, c) {
        return (isNaN(b) || 0 > b) && (b = 0), this._addStep({
            d: b || 0,
            p0: this._cloneProps(this._curQueueProps),
            e: c,
            p1: this._cloneProps(this._appendQueueProps(a))
        })
    };
    b.call = function (a, b, c) {
        return this._addAction({f: a, p: b ? b : [this], o: c ? c : this._target})
    };
    b.set = function (a, b) {
        return this._addAction({
            f: this._set, o: this, p: [a,
                b ? b : this._target]
        })
    };
    b.play = function (a) {
        return a || (a = this), this.call(a.setPaused, [!1], a)
    };
    b.pause = function (a) {
        return a || (a = this), this.call(a.setPaused, [!0], a)
    };
    b.setPosition = function (a, b) {
        0 > a && (a = 0);
        null == b && (b = 1);
        var c = a, f = !1;
        if (c >= this.duration && (this.loop ? c %= this.duration : (c = this.duration, f = !0)), c == this._prevPos) return f;
        var h = this._prevPos;
        if (this.position = this._prevPos = c, this._prevPosition = a, this._target) if (f) this._updateTargetProps(null, 1); else if (0 < this._steps.length) {
            for (var k = 0, m = this._steps.length; m >
            k && !(this._steps[k].t > c); k++) ;
            k = this._steps[k - 1];
            this._updateTargetProps(k, (this._stepPosition = c - k.t) / k.d)
        }
        return 0 != b && 0 < this._actions.length && (this._useTicks ? this._runActions(c, c) : 1 == b && h > c ? (h != this.duration && this._runActions(h, this.duration), this._runActions(0, c, !0)) : this._runActions(h, c)), f && this.setPaused(!0), this.dispatchEvent("change"), f
    };
    b.tick = function (a) {
        this._paused || this.setPosition(this._prevPosition + a)
    };
    b.setPaused = function (a) {
        return this._paused === !!a ? this : (this._paused = !!a, c._register(this,
            !a), this)
    };
    b.w = b.wait;
    b.t = b.to;
    b.c = b.call;
    b.s = b.set;
    b.toString = function () {
        return "[Tween]"
    };
    b.clone = function () {
        throw"Tween can not be cloned.";
    };
    b._updateTargetProps = function (a, b) {
        var e, f, h, k;
        if (a || 1 != b) {
            if (this.passive = !!a.v, this.passive) return;
            a.e && (b = a.e(b, 0, 1, 1));
            e = a.p0;
            f = a.p1
        } else this.passive = !1, e = f = this._curQueueProps;
        for (var m in this._initQueueProps) {
            null == (h = e[m]) && (e[m] = h = this._initQueueProps[m]);
            null == (k = f[m]) && (f[m] = k = h);
            h = h == k || 0 == b || 1 == b || "number" != typeof h ? 1 == b ? k : h : h + (k - h) * b;
            var p =
                !1;
            if (k = c._plugins[m]) for (var q = 0, u = k.length; u > q; q++) {
                var v = k[q].tween(this, m, h, e, f, b, !!a && e == f, !a);
                v == c.IGNORE ? p = !0 : h = v
            }
            p || (this._target[m] = h)
        }
    };
    b._runActions = function (a, b, c) {
        var f = a, h = b, k = -1, m = this._actions.length, p = 1;
        for (a > b && (f = b, h = a, k = m, m = p = -1); (k += p) != m;) {
            b = this._actions[k];
            var q = b.t;
            (q == h || q > f && h > q || c && q == a) && b.f.apply(b.o, b.p)
        }
    };
    b._appendQueueProps = function (a) {
        var b, e, f, h, k, m;
        for (m in a) if (void 0 === this._initQueueProps[m]) {
            if (e = this._target[m], b = c._plugins[m]) for (f = 0, h = b.length; h > f; f++) e =
                b[f].init(this, m, e);
            this._initQueueProps[m] = this._curQueueProps[m] = void 0 === e ? null : e
        }
        for (m in a) {
            if (e = this._curQueueProps[m], b = c._plugins[m]) for (k = k || {}, f = 0, h = b.length; h > f; f++) b[f].step && b[f].step(this, m, e, a[m], k);
            this._curQueueProps[m] = a[m]
        }
        return k && this._appendQueueProps(k), this._curQueueProps
    };
    b._cloneProps = function (a) {
        var b = {}, c;
        for (c in a) b[c] = a[c];
        return b
    };
    b._addStep = function (a) {
        return 0 < a.d && (this._steps.push(a), a.t = this.duration, this.duration += a.d), this
    };
    b._addAction = function (a) {
        return a.t =
            this.duration, this._actions.push(a), this
    };
    b._set = function (a, b) {
        for (var c in a) b[c] = a[c]
    };
    createjs.Tween = createjs.promote(c, "EventDispatcher")
})();
this.createjs = this.createjs || {};
(function () {
    function c(a, b, c) {
        this.EventDispatcher_constructor();
        this.ignoreGlobalPause = !1;
        this.duration = 0;
        this.loop = !1;
        this.position = null;
        this._paused = !1;
        this._tweens = [];
        this._labelList = this._labels = null;
        this._prevPosition = 0;
        this._prevPos = -1;
        this._registered = this._useTicks = !1;
        c && (this._useTicks = c.useTicks, this.loop = c.loop, this.ignoreGlobalPause = c.ignoreGlobalPause, c.onChange && this.addEventListener("change", c.onChange));
        a && this.addTween.apply(this, a);
        this.setLabels(b);
        c && c.paused ? this._paused = !0 :
            createjs.Tween._register(this, !0);
        c && null != c.position && this.setPosition(c.position, createjs.Tween.NONE)
    }

    var b = createjs.extend(c, createjs.EventDispatcher);
    b.addTween = function (a) {
        var b = arguments.length;
        if (1 < b) {
            for (var c = 0; b > c; c++) this.addTween(arguments[c]);
            return arguments[0]
        }
        return 0 == b ? null : (this.removeTween(a), this._tweens.push(a), a.setPaused(!0), a._paused = !1, a._useTicks = this._useTicks, a.duration > this.duration && (this.duration = a.duration), 0 <= this._prevPos && a.setPosition(this._prevPos, createjs.Tween.NONE),
            a)
    };
    b.removeTween = function (a) {
        var b = arguments.length;
        if (1 < b) {
            for (var c = !0, f = 0; b > f; f++) c = c && this.removeTween(arguments[f]);
            return c
        }
        if (0 == b) return !1;
        b = this._tweens;
        for (f = b.length; f--;) if (b[f] == a) return b.splice(f, 1), a.duration >= this.duration && this.updateDuration(), !0;
        return !1
    };
    b.addLabel = function (a, b) {
        this._labels[a] = b;
        var c = this._labelList;
        if (c) {
            for (var f = 0, h = c.length; h > f && !(b < c[f].position); f++) ;
            c.splice(f, 0, {label: a, position: b})
        }
    };
    b.setLabels = function (a) {
        this._labels = a ? a : {}
    };
    b.getLabels = function () {
        var a =
            this._labelList;
        if (!a) {
            var a = this._labelList = [], b = this._labels, c;
            for (c in b) a.push({label: c, position: b[c]});
            a.sort(function (a, b) {
                return a.position - b.position
            })
        }
        return a
    };
    b.getCurrentLabel = function () {
        var a = this.getLabels(), b = this.position, c = a.length;
        if (c) {
            for (var f = 0; c > f && !(b < a[f].position); f++) ;
            return 0 == f ? null : a[f - 1].label
        }
        return null
    };
    b.gotoAndPlay = function (a) {
        this.setPaused(!1);
        this._goto(a)
    };
    b.gotoAndStop = function (a) {
        this.setPaused(!0);
        this._goto(a)
    };
    b.setPosition = function (a, b) {
        var c = this._calcPosition(a),
            f = !this.loop && a >= this.duration;
        if (c == this._prevPos) return f;
        this._prevPosition = a;
        this.position = this._prevPos = c;
        for (var h = 0, k = this._tweens.length; k > h; h++) if (this._tweens[h].setPosition(c, b), c != this._prevPos) return !1;
        return f && this.setPaused(!0), this.dispatchEvent("change"), f
    };
    b.setPaused = function (a) {
        this._paused = !!a;
        createjs.Tween._register(this, !a)
    };
    b.updateDuration = function () {
        for (var a = this.duration = 0, b = this._tweens.length; b > a; a++) {
            var c = this._tweens[a];
            c.duration > this.duration && (this.duration = c.duration)
        }
    };
    b.tick = function (a) {
        this.setPosition(this._prevPosition + a)
    };
    b.resolve = function (a) {
        var b = Number(a);
        return isNaN(b) && (b = this._labels[a]), b
    };
    b.toString = function () {
        return "[Timeline]"
    };
    b.clone = function () {
        throw"Timeline can not be cloned.";
    };
    b._goto = function (a) {
        a = this.resolve(a);
        null != a && this.setPosition(a)
    };
    b._calcPosition = function (a) {
        return 0 > a ? 0 : a < this.duration ? a : this.loop ? a % this.duration : this.duration
    };
    createjs.Timeline = createjs.promote(c, "EventDispatcher")
})();
this.createjs = this.createjs || {};
(function () {
    function c() {
        throw"Ease cannot be instantiated.";
    }

    c.linear = function (b) {
        return b
    };
    c.none = c.linear;
    c.get = function (b) {
        return -1 > b && (b = -1), 1 < b && (b = 1), function (a) {
            return 0 == b ? a : 0 > b ? a * (a * -b + 1 + b) : a * ((2 - a) * b + (1 - b))
        }
    };
    c.getPowIn = function (b) {
        return function (a) {
            return Math.pow(a, b)
        }
    };
    c.getPowOut = function (b) {
        return function (a) {
            return 1 - Math.pow(1 - a, b)
        }
    };
    c.getPowInOut = function (b) {
        return function (a) {
            return 1 > (a *= 2) ? .5 * Math.pow(a, b) : 1 - .5 * Math.abs(Math.pow(2 - a, b))
        }
    };
    c.quadIn = c.getPowIn(2);
    c.quadOut = c.getPowOut(2);
    c.quadInOut = c.getPowInOut(2);
    c.cubicIn = c.getPowIn(3);
    c.cubicOut = c.getPowOut(3);
    c.cubicInOut = c.getPowInOut(3);
    c.quartIn = c.getPowIn(4);
    c.quartOut = c.getPowOut(4);
    c.quartInOut = c.getPowInOut(4);
    c.quintIn = c.getPowIn(5);
    c.quintOut = c.getPowOut(5);
    c.quintInOut = c.getPowInOut(5);
    c.sineIn = function (b) {
        return 1 - Math.cos(b * Math.PI / 2)
    };
    c.sineOut = function (b) {
        return Math.sin(b * Math.PI / 2)
    };
    c.sineInOut = function (b) {
        return -.5 * (Math.cos(Math.PI * b) - 1)
    };
    c.getBackIn = function (b) {
        return function (a) {
            return a * a * ((b + 1) * a - b)
        }
    };
    c.backIn = c.getBackIn(1.7);
    c.getBackOut = function (b) {
        return function (a) {
            return --a * a * ((b + 1) * a + b) + 1
        }
    };
    c.backOut = c.getBackOut(1.7);
    c.getBackInOut = function (b) {
        return b *= 1.525, function (a) {
            return 1 > (a *= 2) ? .5 * a * a * ((b + 1) * a - b) : .5 * ((a -= 2) * a * ((b + 1) * a + b) + 2)
        }
    };
    c.backInOut = c.getBackInOut(1.7);
    c.circIn = function (b) {
        return -(Math.sqrt(1 - b * b) - 1)
    };
    c.circOut = function (b) {
        return Math.sqrt(1 - --b * b)
    };
    c.circInOut = function (b) {
        return 1 > (b *= 2) ? -.5 * (Math.sqrt(1 - b * b) - 1) : .5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
    };
    c.bounceIn = function (b) {
        return 1 -
            c.bounceOut(1 - b)
    };
    c.bounceOut = function (b) {
        return 1 / 2.75 > b ? 7.5625 * b * b : 2 / 2.75 > b ? 7.5625 * (b -= 1.5 / 2.75) * b + .75 : 2.5 / 2.75 > b ? 7.5625 * (b -= 2.25 / 2.75) * b + .9375 : 7.5625 * (b -= 2.625 / 2.75) * b + .984375
    };
    c.bounceInOut = function (b) {
        return .5 > b ? .5 * c.bounceIn(2 * b) : .5 * c.bounceOut(2 * b - 1) + .5
    };
    c.getElasticIn = function (b, a) {
        var c = 2 * Math.PI;
        return function (e) {
            if (0 == e || 1 == e) return e;
            var f = a / c * Math.asin(1 / b);
            return -(b * Math.pow(2, 10 * --e) * Math.sin((e - f) * c / a))
        }
    };
    c.elasticIn = c.getElasticIn(1, .3);
    c.getElasticOut = function (b, a) {
        var c = 2 * Math.PI;
        return function (e) {
            if (0 == e || 1 == e) return e;
            var f = a / c * Math.asin(1 / b);
            return b * Math.pow(2, -10 * e) * Math.sin((e - f) * c / a) + 1
        }
    };
    c.elasticOut = c.getElasticOut(1, .3);
    c.getElasticInOut = function (b, a) {
        var c = 2 * Math.PI;
        return function (e) {
            var f = a / c * Math.asin(1 / b);
            return 1 > (e *= 2) ? -.5 * b * Math.pow(2, 10 * --e) * Math.sin((e - f) * c / a) : b * Math.pow(2, -10 * --e) * Math.sin((e - f) * c / a) * .5 + 1
        }
    };
    c.elasticInOut = c.getElasticInOut(1, .3 * 1.5);
    createjs.Ease = c
})();
this.createjs = this.createjs || {};
(function () {
    function c() {
        throw"MotionGuidePlugin cannot be instantiated.";
    }

    c.priority = 0;
    c._rotOffS;
    c._rotOffE;
    c._rotNormS;
    c._rotNormE;
    c.install = function () {
        return createjs.Tween.installPlugin(c, ["guide", "x", "y", "rotation"]), createjs.Tween.IGNORE
    };
    c.init = function (b, a, c) {
        var e = b.target;
        return e.hasOwnProperty("x") || (e.x = 0), e.hasOwnProperty("y") || (e.y = 0), e.hasOwnProperty("rotation") || (e.rotation = 0), "rotation" == a && (b.__needsRot = !0), "guide" == a ? null : c
    };
    c.step = function (b, a, d, e, f) {
        if ("rotation" == a && (b.__rotGlobalS =
            d, b.__rotGlobalE = e, c.testRotData(b, f)), "guide" != a) return e;
        var h;
        e.hasOwnProperty("path") || (e.path = []);
        a = e.path;
        if (e.hasOwnProperty("end") || (e.end = 1), e.hasOwnProperty("start") || (e.start = d && d.hasOwnProperty("end") && d.path === a ? d.end : 0), e.hasOwnProperty("_segments") && e._length) return e;
        d = a.length;
        if (!(6 <= d && 0 == (d - 2) % 4)) throw"invalid 'path' data, please see documentation for valid paths";
        e._segments = [];
        e._length = 0;
        for (var k = 2; d > k; k += 4) {
            for (var m, p, q = a[k - 2], u = a[k - 1], v = a[k + 0], z = a[k + 1], y = a[k + 2], t = a[k + 3],
                     B = q, C = u, I = 0, T = [], O = 1; 10 >= O; O++) {
                p = O / 10;
                var G = 1 - p;
                m = G * G * q + 2 * G * p * v + p * p * y;
                p = G * G * u + 2 * G * p * z + p * p * t;
                I += T[T.push(Math.sqrt((h = m - B) * h + (h = p - C) * h)) - 1];
                B = m;
                C = p
            }
            e._segments.push(I);
            e._segments.push(T);
            e._length += I
        }
        h = e.orient;
        e.orient = !0;
        a = {};
        return c.calc(e, e.start, a), b.__rotPathS = Number(a.rotation.toFixed(5)), c.calc(e, e.end, a), b.__rotPathE = Number(a.rotation.toFixed(5)), e.orient = !1, c.calc(e, e.end, f), e.orient = h, e.orient ? (b.__guideData = e, c.testRotData(b, f), e) : e
    };
    c.testRotData = function (b, a) {
        if (void 0 === b.__rotGlobalS ||
            void 0 === b.__rotGlobalE) {
            if (b.__needsRot) return;
            b.__rotGlobalS = b.__rotGlobalE = void 0 !== b._curQueueProps.rotation ? b._curQueueProps.rotation : a.rotation = b.target.rotation || 0
        }
        if (void 0 !== b.__guideData) {
            var c = b.__guideData, e = b.__rotGlobalE - b.__rotGlobalS, f = b.__rotPathE - b.__rotPathS, h = e - f;
            if ("auto" == c.orient) 180 < h ? h -= 360 : -180 > h && (h += 360); else if ("cw" == c.orient) {
                for (; 0 > h;) h += 360;
                0 == h && 0 < e && 180 != e && (h += 360)
            } else if ("ccw" == c.orient) {
                for (h = e - (180 < f ? 360 - f : f); 0 < h;) h -= 360;
                0 == h && 0 > e && -180 != e && (h -= 360)
            }
            c.rotDelta =
                h;
            c.rotOffS = b.__rotGlobalS - b.__rotPathS;
            b.__rotGlobalS = b.__rotGlobalE = b.__guideData = b.__needsRot = void 0
        }
    };
    c.tween = function (b, a, d, e, f, h, k) {
        f = f.guide;
        if (void 0 == f || f === e.guide) return d;
        if (f.lastRatio != h) {
            switch (c.calc(f, (f.end - f.start) * (k ? f.end : h) + f.start, b.target), f.orient) {
                case "cw":
                case "ccw":
                case "auto":
                    b.target.rotation += f.rotOffS + f.rotDelta * h;
                    break;
                default:
                    b.target.rotation += f.rotOffS
            }
            f.lastRatio = h
        }
        return "rotation" != a || f.orient && "false" != f.orient ? b.target[a] : d
    };
    c.calc = function (b, a, d) {
        void 0 ==
        b._segments && c.validate(b);
        void 0 == d && (d = {x: 0, y: 0, rotation: 0});
        var e = b._segments, f = b.path, h = b._length * a, k = e.length - 2;
        for (a = 0; h > e[a] && k > a;) h -= e[a], a += 2;
        for (var e = e[a + 1], m = 0, k = e.length - 1; h > e[m] && k > m;) h -= e[m], m++;
        h = m / ++k + h / (k * e[m]);
        a = 2 * a + 2;
        k = 1 - h;
        return d.x = k * k * f[a - 2] + 2 * k * h * f[a + 0] + h * h * f[a + 2], d.y = k * k * f[a - 1] + 2 * k * h * f[a + 1] + h * h * f[a + 3], b.orient && (d.rotation = 57.2957795 * Math.atan2((f[a + 1] - f[a - 1]) * k + (f[a + 3] - f[a + 1]) * h, (f[a + 0] - f[a - 2]) * k + (f[a + 2] - f[a + 0]) * h)), d
    };
    createjs.MotionGuidePlugin = c
})();
this.createjs = this.createjs || {};
(function () {
    var c = createjs.TweenJS = createjs.TweenJS || {};
    c.version = "0.6.1";
    c.buildDate = "Thu, 21 May 2015 16:17:37 GMT"
})();

function wrLoading(c, b, a) {
    this.callback = a;
    this.objname = c;
    this.imgarray = b;
    this.init();
    b && 0 < b.length ? this.getImgNext() : this.onlyshow()
}

wrLoading.prototype = {
    loaded: 0,
    retried: 0,
    root: "http://mat1.gtimg.com/autoguangzhou/lonz/",
    curCaseId: 0,
    init: function () {
        this.obj = $(this.objname);
        this.percent = this.obj.find(".percent")
    },
    show: function () {
        this.obj.fadeIn(300)
    },
    hide: function (c) {
        c()
    },
    onlyshow: function () {
        var c = this;
        this.show();
        setTimeout(function () {
            c.hide(c.callback)
        }, 300)
    },
    getImgNext: function () {
        var c = this;
        progressHandle(c.loaded / this.imgarray.length);
        var b = function () {
            c.loaded++;
            c.percent.html(Math.ceil(c.loaded / c.imgarray.length *
                100) + " %");
            c.retried = 0;
            setTimeout(function () {
                c.getImgNext()
            }, 1)
        };
        if (c.loaded >= c.imgarray.length) c.percent.html("100%"), setTimeout(function () {
            c.hide(c.callback)
        }, 100), c.loaded = 0, c.retried = 0; else {
            var a = new Image;
            a.onload = function () {
                b()
            };
            a.onerror = function () {
                c.retried++;
                3 > c.retried ? c.getImgNext() : b()
            };
            a.src = c.root + c.imgarray[c.loaded]
        }
    }
};
var Swiper = function (c, b) {
    function a(a) {
        return document.querySelectorAll ? document.querySelectorAll(a) : jQuery(a)
    }

    function d() {
        var a = K - D;
        b.freeMode && (a = K - D);
        b.slidesPerView > g.slides.length && (a = 0);
        0 > a && (a = 0);
        return a
    }

    function e() {
        function c(a) {
            var d = new Image;
            d.onload = function () {
                g.imagesLoaded++;
                if (g.imagesLoaded == g.imagesToLoad.length && (g.reInit(), b.onImagesReady)) b.onImagesReady(g)
            };
            d.src = a
        }

        g.browser.ie10 ? (g.h.addEventListener(g.wrapper, g.touchEvents.touchStart, y, !1), g.h.addEventListener(document, g.touchEvents.touchMove,
            t, !1), g.h.addEventListener(document, g.touchEvents.touchEnd, B, !1)) : (g.support.touch && (g.h.addEventListener(g.wrapper, "touchstart", y, !1), g.h.addEventListener(g.wrapper, "touchmove", t, !1), g.h.addEventListener(g.wrapper, "touchend", B, !1)), b.simulateTouch && (g.h.addEventListener(g.wrapper, "mousedown", y, !1), g.h.addEventListener(document, "mousemove", t, !1), g.h.addEventListener(document, "mouseup", B, !1)));
        b.autoResize && g.h.addEventListener(window, "resize", g.resizeFix, !1);
        f();
        g._wheelEvent = !1;
        if (b.mousewheelControl) {
            void 0 !==
            document.onmousewheel && (g._wheelEvent = "mousewheel");
            try {
                WheelEvent("wheel"), g._wheelEvent = "wheel"
            } catch (d) {
            }
            g._wheelEvent || (g._wheelEvent = "DOMMouseScroll");
            g._wheelEvent && g.h.addEventListener(g.container, g._wheelEvent, m, !1)
        }
        b.keyboardControl && g.h.addEventListener(document, "keydown", k, !1);
        if (b.updateOnImagesReady) {
            document.querySelectorAll ? g.imagesToLoad = g.container.querySelectorAll("img") : window.jQuery && (g.imagesToLoad = a(g.container).find("img"));
            for (var e = 0; e < g.imagesToLoad.length; e++) c(g.imagesToLoad[e].getAttribute("src"))
        }
    }

    function f() {
        if (b.preventLinks) {
            var c = [];
            document.querySelectorAll ? c = g.container.querySelectorAll("a") : window.jQuery && (c = a(g.container).find("a"));
            for (var d = 0; d < c.length; d++) g.h.addEventListener(c[d], "click", v, !1)
        }
        if (b.releaseFormElements) for (c = document.querySelectorAll ? g.container.querySelectorAll("input, textarea, select") : a(g.container).find("input, textarea, select"), d = 0; d < c.length; d++) g.h.addEventListener(c[d], g.touchEvents.touchStart, z, !0);
        if (b.onSlideClick) for (d = 0; d < g.slides.length; d++) g.h.addEventListener(g.slides[d],
            "click", q, !1);
        if (b.onSlideTouch) for (d = 0; d < g.slides.length; d++) g.h.addEventListener(g.slides[d], g.touchEvents.touchStart, u, !1)
    }

    function h() {
        if (b.onSlideClick) for (var c = 0; c < g.slides.length; c++) g.h.removeEventListener(g.slides[c], "click", q, !1);
        if (b.onSlideTouch) for (c = 0; c < g.slides.length; c++) g.h.removeEventListener(g.slides[c], g.touchEvents.touchStart, u, !1);
        if (b.releaseFormElements) for (var d = document.querySelectorAll ? g.container.querySelectorAll("input, textarea, select") : a(g.container).find("input, textarea, select"),
                                            c = 0; c < d.length; c++) g.h.removeEventListener(d[c], g.touchEvents.touchStart, z, !0);
        if (b.preventLinks) for (d = [], document.querySelectorAll ? d = g.container.querySelectorAll("a") : window.jQuery && (d = a(g.container).find("a")), c = 0; c < d.length; c++) g.h.removeEventListener(d[c], "click", v, !1)
    }

    function k(a) {
        var b = a.keyCode || a.charCode;
        if (37 == b || 39 == b || 38 == b || 40 == b) {
            for (var c = !1, d = g.h.getOffset(g.container), e = g.h.windowScroll().left, f = g.h.windowScroll().top, h = g.h.windowWidth(), k = g.h.windowHeight(), d = [[d.left, d.top], [d.left +
            g.width, d.top], [d.left, d.top + g.height], [d.left + g.width, d.top + g.height]], m = 0; m < d.length; m++) {
                var p = d[m];
                p[0] >= e && p[0] <= e + h && p[1] >= f && p[1] <= f + k && (c = !0)
            }
            if (!c) return
        }
        if (E) {
            if (37 == b || 39 == b) a.preventDefault ? a.preventDefault() : a.returnValue = !1;
            39 == b && g.swipeNext();
            37 == b && g.swipePrev()
        } else {
            if (38 == b || 40 == b) a.preventDefault ? a.preventDefault() : a.returnValue = !1;
            40 == b && g.swipeNext();
            38 == b && g.swipePrev()
        }
    }

    function m(a) {
        var c = g._wheelEvent, e;
        a.detail ? e = -a.detail : "mousewheel" == c ? e = a.wheelDelta : "DOMMouseScroll" ==
        c ? e = -a.detail : "wheel" == c && (e = Math.abs(a.deltaX) > Math.abs(a.deltaY) ? -a.deltaX : -a.deltaY);
        b.freeMode ? (E ? g.getWrapperTranslate("x") : g.getWrapperTranslate("y"), E ? (c = g.getWrapperTranslate("x") + e, e = g.getWrapperTranslate("y"), 0 < c && (c = 0), c < -d() && (c = -d())) : (c = g.getWrapperTranslate("x"), e = g.getWrapperTranslate("y") + e, 0 < e && (e = 0), e < -d() && (e = -d())), g.setWrapperTransition(0), g.setWrapperTranslate(c, e, 0), E ? g.updateActiveSlide(c) : g.updateActiveSlide(e)) : 0 > e ? g.swipeNext() : g.swipePrev();
        b.autoplay && g.stopAutoplay();
        a.preventDefault ? a.preventDefault() : a.returnValue = !1;
        return !1
    }

    function p(a) {
        for (var c = !1; !c;) -1 < a.className.indexOf(b.slideClass) && (c = a), a = a.parentElement;
        return c
    }

    function q(a) {
        g.allowSlideClick && (a.target ? (g.clickedSlide = this, g.clickedSlideIndex = g.slides.indexOf(this)) : (g.clickedSlide = p(a.srcElement), g.clickedSlideIndex = g.slides.indexOf(g.clickedSlide)), b.onSlideClick(g))
    }

    function u(a) {
        g.clickedSlide = a.target ? this : p(a.srcElement);
        g.clickedSlideIndex = g.slides.indexOf(g.clickedSlide);
        b.onSlideTouch(g)
    }

    function v(a) {
        if (!g.allowLinks) return a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
    }

    function z(a) {
        a.stopPropagation ? a.stopPropagation() : a.returnValue = !1;
        return !1
    }

    function y(a) {
        b.preventLinks && (g.allowLinks = !0);
        if (g.isTouched || b.onlyExternal) return !1;
        var c;
        if (c = b.noSwiping) if (c = a.target || a.srcElement) {
            c = a.target || a.srcElement;
            var d = !1;
            do -1 < c.className.indexOf(b.noSwipingClass) && (d = !0), c = c.parentElement; while (!d && c.parentElement && -1 == c.className.indexOf(b.wrapperClass));
            !d && -1 < c.className.indexOf(b.wrapperClass) &&
            -1 < c.className.indexOf(b.noSwipingClass) && (d = !0);
            c = d
        }
        if (c) return !1;
        ha = !1;
        g.isTouched = !0;
        fa = "touchstart" == a.type;
        if (!fa || 1 == a.targetTouches.length) {
            b.loop && g.fixLoop();
            g.callPlugins("onTouchStartBegin");
            fa || (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
            c = fa ? a.targetTouches[0].pageX : a.pageX || a.clientX;
            a = fa ? a.targetTouches[0].pageY : a.pageY || a.clientY;
            g.touches.startX = g.touches.currentX = c;
            g.touches.startY = g.touches.currentY = a;
            g.touches.start = g.touches.current = E ? c : a;
            g.setWrapperTransition(0);
            g.positions.start = g.positions.current = E ? g.getWrapperTranslate("x") : g.getWrapperTranslate("y");
            E ? g.setWrapperTranslate(g.positions.start, 0, 0) : g.setWrapperTranslate(0, g.positions.start, 0);
            g.times.start = (new Date).getTime();
            L = void 0;
            0 < b.moveStartThreshold && (N = !1);
            if (b.onTouchStart) b.onTouchStart(g);
            g.callPlugins("onTouchStartEnd")
        }
    }

    function t(a) {
        if (g.isTouched && !b.onlyExternal && (!fa || "mousemove" != a.type)) {
            var c = fa ? a.targetTouches[0].pageX : a.pageX || a.clientX,
                e = fa ? a.targetTouches[0].pageY : a.pageY || a.clientY;
            "undefined" === typeof L && E && (L = !!(L || Math.abs(e - g.touches.startY) > Math.abs(c - g.touches.startX)));
            "undefined" !== typeof L || E || (L = !!(L || Math.abs(e - g.touches.startY) < Math.abs(c - g.touches.startX)));
            if (L) g.isTouched = !1; else if (a.assignedToSwiper) g.isTouched = !1; else if (a.assignedToSwiper = !0, g.isMoved = !0, b.preventLinks && (g.allowLinks = !1), b.onSlideClick && (g.allowSlideClick = !1), b.autoplay && g.stopAutoplay(), !fa || 1 == a.touches.length) {
                g.callPlugins("onTouchMoveStart");
                a.preventDefault ? a.preventDefault() : a.returnValue =
                    !1;
                g.touches.current = E ? c : e;
                g.positions.current = (g.touches.current - g.touches.start) * b.touchRatio + g.positions.start;
                if (0 < g.positions.current && b.onResistanceBefore) b.onResistanceBefore(g, g.positions.current);
                if (g.positions.current < -d() && b.onResistanceAfter) b.onResistanceAfter(g, Math.abs(g.positions.current + d()));
                b.resistance && "100%" != b.resistance && (0 < g.positions.current && (a = 1 - g.positions.current / D / 2, g.positions.current = .5 > a ? D / 2 : g.positions.current * a), g.positions.current < -d() && (c = (g.touches.current - g.touches.start) *
                    b.touchRatio + (d() + g.positions.start), a = (D + c) / D, c = g.positions.current - c * (1 - a) / 2, e = -d() - D / 2, g.positions.current = c < e || 0 >= a ? e : c));
                b.resistance && "100%" == b.resistance && (0 < g.positions.current && (!b.freeMode || b.freeModeFluid) && (g.positions.current = 0), g.positions.current < -d() && (!b.freeMode || b.freeModeFluid) && (g.positions.current = -d()));
                if (b.followFinger) {
                    b.moveStartThreshold ? Math.abs(g.touches.current - g.touches.start) > b.moveStartThreshold || N ? (N = !0, E ? g.setWrapperTranslate(g.positions.current, 0, 0) : g.setWrapperTranslate(0,
                        g.positions.current, 0)) : g.positions.current = g.positions.start : E ? g.setWrapperTranslate(g.positions.current, 0, 0) : g.setWrapperTranslate(0, g.positions.current, 0);
                    (b.freeMode || b.watchActiveIndex) && g.updateActiveSlide(g.positions.current);
                    b.grabCursor && (g.container.style.cursor = "move", g.container.style.cursor = "grabbing", g.container.style.cursor = "-moz-grabbin", g.container.style.cursor = "-webkit-grabbing");
                    ia || (ia = g.touches.current);
                    ca || (ca = (new Date).getTime());
                    g.velocity = (g.touches.current - ia) / ((new Date).getTime() -
                        ca) / 2;
                    2 > Math.abs(g.touches.current - ia) && (g.velocity = 0);
                    ia = g.touches.current;
                    ca = (new Date).getTime();
                    g.callPlugins("onTouchMoveEnd");
                    if (b.onTouchMove) b.onTouchMove(g);
                    return !1
                }
            }
        }
    }

    function B(a) {
        L && g.swipeReset();
        if (!b.onlyExternal && g.isTouched) {
            g.isTouched = !1;
            b.grabCursor && (g.container.style.cursor = "move", g.container.style.cursor = "grab", g.container.style.cursor = "-moz-grab", g.container.style.cursor = "-webkit-grab");
            g.positions.current || 0 === g.positions.current || (g.positions.current = g.positions.start);
            b.followFinger && (E ? g.setWrapperTranslate(g.positions.current, 0, 0) : g.setWrapperTranslate(0, g.positions.current, 0));
            g.times.end = (new Date).getTime();
            g.touches.diff = g.touches.current - g.touches.start;
            g.touches.abs = Math.abs(g.touches.diff);
            g.positions.diff = g.positions.current - g.positions.start;
            g.positions.abs = Math.abs(g.positions.diff);
            var c = g.positions.diff, e = g.positions.abs;
            a = g.times.end - g.times.start;
            5 > e && 300 > a && 0 == g.allowLinks && (b.freeMode || 0 == e || g.swipeReset(), b.preventLinks && (g.allowLinks = !0), b.onSlideClick &&
            (g.allowSlideClick = !0));
            setTimeout(function () {
                b.preventLinks && (g.allowLinks = !0);
                b.onSlideClick && (g.allowSlideClick = !0)
            }, 100);
            if (g.isMoved) {
                g.isMoved = !1;
                var f = d();
                if (0 < g.positions.current) g.swipeReset(); else if (g.positions.current < -f) g.swipeReset(); else if (b.freeMode) {
                    if (b.freeModeFluid) {
                        var e = 1E3 * b.momentumRatio, c = g.positions.current + g.velocity * e, h = !1, k,
                            m = 20 * Math.abs(g.velocity) * b.momentumBounceRatio;
                        c < -f && (b.momentumBounce && g.support.transitions ? (c + f < -m && (c = -f - m), k = -f, ha = h = !0) : c = -f);
                        0 < c && (b.momentumBounce &&
                        g.support.transitions ? (c > m && (c = m), k = 0, ha = h = !0) : c = 0);
                        0 != g.velocity && (e = Math.abs((c - g.positions.current) / g.velocity));
                        E ? g.setWrapperTranslate(c, 0, 0) : g.setWrapperTranslate(0, c, 0);
                        g.setWrapperTransition(e);
                        b.momentumBounce && h && g.wrapperTransitionEnd(function () {
                            if (ha) {
                                if (b.onMomentumBounce) b.onMomentumBounce(g);
                                E ? g.setWrapperTranslate(k, 0, 0) : g.setWrapperTranslate(0, k, 0);
                                g.setWrapperTransition(300)
                            }
                        });
                        g.updateActiveSlide(c)
                    }
                    (!b.freeModeFluid || 300 <= a) && g.updateActiveSlide(g.positions.current)
                } else {
                    Q = 0 > c ?
                        "toNext" : "toPrev";
                    "toNext" == Q && 300 >= a && (30 > e || !b.shortSwipes ? g.swipeReset() : g.swipeNext(!0));
                    "toPrev" == Q && 300 >= a && (30 > e || !b.shortSwipes ? g.swipeReset() : g.swipePrev(!0));
                    f = 0;
                    if ("auto" == b.slidesPerView) {
                        for (var c = Math.abs(E ? g.getWrapperTranslate("x") : g.getWrapperTranslate("y")), p = h = 0; p < g.slides.length; p++) if (m = E ? g.slides[p].getWidth(!0) : g.slides[p].getHeight(!0), h += m, h > c) {
                            f = m;
                            break
                        }
                        f > D && (f = D)
                    } else f = H * b.slidesPerView;
                    "toNext" == Q && 300 < a && (e >= .5 * f ? g.swipeNext(!0) : g.swipeReset());
                    "toPrev" == Q && 300 < a && (e >=
                    .5 * f ? g.swipePrev(!0) : g.swipeReset())
                }
                if (b.onTouchEnd) b.onTouchEnd(g);
                g.callPlugins("onTouchEnd")
            } else {
                g.isMoved = !1;
                if (b.onTouchEnd) b.onTouchEnd(g);
                g.callPlugins("onTouchEnd");
                g.swipeReset()
            }
        }
    }

    function C(a, c, d) {
        function e() {
            h += k;
            if ("toNext" == m ? h > a : h < a) E ? g.setWrapperTranslate(Math.round(h), 0) : g.setWrapperTranslate(0, Math.round(h)), g._DOMAnimating = !0, window.setTimeout(function () {
                e()
            }, 1E3 / 60); else {
                if (b.onSlideChangeEnd) b.onSlideChangeEnd(g);
                E ? g.setWrapperTranslate(a, 0) : g.setWrapperTranslate(0, a);
                g._DOMAnimating =
                    !1
            }
        }

        if (g.support.transitions || !b.DOMAnimation) {
            E ? g.setWrapperTranslate(a, 0, 0) : g.setWrapperTranslate(0, a, 0);
            var f = "to" == c && 0 <= d.speed ? d.speed : b.speed;
            g.setWrapperTransition(f)
        } else {
            var h = E ? g.getWrapperTranslate("x") : g.getWrapperTranslate("y"),
                f = "to" == c && 0 <= d.speed ? d.speed : b.speed, k = Math.ceil((a - h) / f * (1E3 / 60)),
                m = h > a ? "toNext" : "toPrev";
            if (g._DOMAnimating) return;
            e()
        }
        g.updateActiveSlide(a);
        if (b.onSlideNext && "next" == c) b.onSlideNext(g, a);
        if (b.onSlidePrev && "prev" == c) b.onSlidePrev(g, a);
        if (b.onSlideReset && "reset" ==
            c) b.onSlideReset(g, a);
        ("next" == c || "prev" == c || "to" == c && 1 == d.runCallbacks) && I()
    }

    function I() {
        g.callPlugins("onSlideChangeStart");
        if (b.onSlideChangeStart) if (b.queueStartCallbacks && g.support.transitions) {
            if (g._queueStartCallbacks) return;
            g._queueStartCallbacks = !0;
            b.onSlideChangeStart(g);
            g.wrapperTransitionEnd(function () {
                g._queueStartCallbacks = !1
            })
        } else b.onSlideChangeStart(g);
        b.onSlideChangeEnd && (g.support.transitions ? b.queueEndCallbacks ? g._queueEndCallbacks || (g._queueEndCallbacks = !0, g.wrapperTransitionEnd(b.onSlideChangeEnd)) :
            g.wrapperTransitionEnd(b.onSlideChangeEnd) : b.DOMAnimation || setTimeout(function () {
            b.onSlideChangeEnd(g)
        }, 10))
    }

    function T() {
        for (var a = g.paginationButtons, b = 0; b < a.length; b++) g.h.removeEventListener(a[b], "click", O, !1)
    }

    function O(a) {
        var b;
        a = a.target || a.srcElement;
        for (var c = g.paginationButtons, d = 0; d < c.length; d++) a === c[d] && (b = d);
        g.swipeTo(b)
    }

    if (document.body.__defineGetter__ && HTMLElement) {
        var G = HTMLElement.prototype;
        G.__defineGetter__ && G.__defineGetter__("outerHTML", function () {
            return (new XMLSerializer).serializeToString(this)
        })
    }
    window.getComputedStyle ||
    (window.getComputedStyle = function (a, b) {
        this.el = a;
        this.getPropertyValue = function (b) {
            var c = /(\-([a-z]){1})/g;
            "float" === b && (b = "styleFloat");
            c.test(b) && (b = b.replace(c, function (a, b, c) {
                return c.toUpperCase()
            }));
            return a.currentStyle[b] ? a.currentStyle[b] : null
        };
        return this
    });
    Array.prototype.indexOf || (Array.prototype.indexOf = function (a, b) {
        for (var c = b || 0, d = this.length; c < d; c++) if (this[c] === a) return c;
        return -1
    });
    if ((document.querySelectorAll || window.jQuery) && "undefined" !== typeof c && (c.nodeType || 0 !== a(c).length)) {
        var g =
            this;
        g.touches = {start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, diff: 0, abs: 0};
        g.positions = {start: 0, abs: 0, diff: 0, current: 0};
        g.times = {start: 0, end: 0};
        g.id = (new Date).getTime();
        g.container = c.nodeType ? c : a(c)[0];
        g.isTouched = !1;
        g.isMoved = !1;
        g.activeIndex = 0;
        g.activeLoaderIndex = 0;
        g.activeLoopIndex = 0;
        g.previousIndex = null;
        g.velocity = 0;
        g.snapGrid = [];
        g.slidesGrid = [];
        g.imagesToLoad = [];
        g.imagesLoaded = 0;
        g.wrapperLeft = 0;
        g.wrapperRight = 0;
        g.wrapperTop = 0;
        g.wrapperBottom = 0;
        var M, H, K, Q, L, D, G = {
            mode: "horizontal",
            touchRatio: 1,
            speed: 300,
            freeMode: !1,
            freeModeFluid: !1,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            slidesPerView: 1,
            slidesPerGroup: 1,
            simulateTouch: !0,
            followFinger: !0,
            shortSwipes: !0,
            moveStartThreshold: !1,
            autoplay: !1,
            onlyExternal: !1,
            createPagination: !0,
            pagination: !1,
            paginationElement: "span",
            paginationClickable: !1,
            paginationAsRange: !0,
            resistance: !0,
            scrollContainer: !1,
            preventLinks: !0,
            noSwiping: !1,
            noSwipingClass: "swiper-no-swiping",
            initialSlide: 0,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelDebounce: 600,
            useCSS3Transforms: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            calculateHeight: !1,
            updateOnImagesReady: !0,
            releaseFormElements: !0,
            watchActiveIndex: !1,
            visibilityFullFit: !1,
            offsetPxBefore: 0,
            offsetPxAfter: 0,
            offsetSlidesBefore: 0,
            offsetSlidesAfter: 0,
            centeredSlides: !1,
            queueStartCallbacks: !1,
            queueEndCallbacks: !1,
            autoResize: !0,
            resizeReInit: !1,
            DOMAnimation: !0,
            loader: {slides: [], slidesHTMLType: "inner", surroundGroups: 1, logic: "reload", loadAllSlides: !1},
            slideElement: "div",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            wrapperClass: "swiper-wrapper",
            paginationElementClass: "swiper-pagination-switch",
            paginationActiveClass: "swiper-active-switch",
            paginationVisibleClass: "swiper-visible-switch"
        };
        b = b || {};
        for (var U in G) if (U in b && "object" === typeof b[U]) for (var W in G[U]) W in b[U] || (b[U][W] = G[U][W]); else U in b || (b[U] = G[U]);
        g.params = b;
        b.scrollContainer && (b.freeMode = !0, b.freeModeFluid = !0);
        b.loop && (b.resistance = "100%");
        var E = "horizontal" === b.mode;
        g.touchEvents = {
            touchStart: g.support.touch ||
            !b.simulateTouch ? "touchstart" : g.browser.ie10 ? "MSPointerDown" : "mousedown",
            touchMove: g.support.touch || !b.simulateTouch ? "touchmove" : g.browser.ie10 ? "MSPointerMove" : "mousemove",
            touchEnd: g.support.touch || !b.simulateTouch ? "touchend" : g.browser.ie10 ? "MSPointerUp" : "mouseup"
        };
        for (U = g.container.childNodes.length - 1; 0 <= U; U--) if (g.container.childNodes[U].className) for (W = g.container.childNodes[U].className.split(" "), G = 0; G < W.length; G++) W[G] === b.wrapperClass && (M = g.container.childNodes[U]);
        g.wrapper = M;
        g._extendSwiperSlide =
            function (a) {
                a.append = function () {
                    b.loop ? (a.insertAfter(g.slides.length - g.loopedSlides), g.removeLoopedSlides(), g.calcSlides(), g.createLoop()) : g.wrapper.appendChild(a);
                    g.reInit();
                    return a
                };
                a.prepend = function () {
                    b.loop ? (g.wrapper.insertBefore(a, g.slides[g.loopedSlides]), g.removeLoopedSlides(), g.calcSlides(), g.createLoop()) : g.wrapper.insertBefore(a, g.wrapper.firstChild);
                    g.reInit();
                    return a
                };
                a.insertAfter = function (c) {
                    if ("undefined" === typeof c) return !1;
                    b.loop ? (c = g.slides[c + 1 + g.loopedSlides], g.wrapper.insertBefore(a,
                        c), g.removeLoopedSlides(), g.calcSlides(), g.createLoop()) : (c = g.slides[c + 1], g.wrapper.insertBefore(a, c));
                    g.reInit();
                    return a
                };
                a.clone = function () {
                    return g._extendSwiperSlide(a.cloneNode(!0))
                };
                a.remove = function () {
                    g.wrapper.removeChild(a);
                    g.reInit()
                };
                a.html = function (b) {
                    if ("undefined" === typeof b) return a.innerHTML;
                    a.innerHTML = b;
                    return a
                };
                a.index = function () {
                    for (var b, c = g.slides.length - 1; 0 <= c; c--) a === g.slides[c] && (b = c);
                    return b
                };
                a.isActive = function () {
                    return a.index() === g.activeIndex ? !0 : !1
                };
                a.swiperSlideDataStorage ||
                (a.swiperSlideDataStorage = {});
                a.getData = function (b) {
                    return a.swiperSlideDataStorage[b]
                };
                a.setData = function (b, c) {
                    a.swiperSlideDataStorage[b] = c;
                    return a
                };
                a.data = function (b, c) {
                    return c ? (a.setAttribute("data-" + b, c), a) : a.getAttribute("data-" + b)
                };
                a.getWidth = function (b) {
                    return g.h.getWidth(a, b)
                };
                a.getHeight = function (b) {
                    return g.h.getHeight(a, b)
                };
                a.getOffset = function () {
                    return g.h.getOffset(a)
                };
                return a
            };
        g.calcSlides = function (a) {
            var c = g.slides ? g.slides.length : !1;
            g.slides = [];
            g.displaySlides = [];
            for (var d = 0; d <
            g.wrapper.childNodes.length; d++) if (g.wrapper.childNodes[d].className) for (var e = g.wrapper.childNodes[d].className.split(" "), k = 0; k < e.length; k++) e[k] === b.slideClass && g.slides.push(g.wrapper.childNodes[d]);
            for (d = g.slides.length - 1; 0 <= d; d--) g._extendSwiperSlide(g.slides[d]);
            c && (c !== g.slides.length || a) && (h(), f(), g.updateActiveSlide(), b.createPagination && g.params.pagination && g.createPagination(), g.callPlugins("numberOfSlidesChanged"))
        };
        g.createSlide = function (a, c, d) {
            c = c || g.params.slideClass;
            d = d || b.slideElement;
            d = document.createElement(d);
            d.innerHTML = a || "";
            d.className = c;
            return g._extendSwiperSlide(d)
        };
        g.appendSlide = function (a, b, c) {
            if (a) return a.nodeType ? g._extendSwiperSlide(a).append() : g.createSlide(a, b, c).append()
        };
        g.prependSlide = function (a, b, c) {
            if (a) return a.nodeType ? g._extendSwiperSlide(a).prepend() : g.createSlide(a, b, c).prepend()
        };
        g.insertSlideAfter = function (a, b, c, d) {
            return "undefined" === typeof a ? !1 : b.nodeType ? g._extendSwiperSlide(b).insertAfter(a) : g.createSlide(b, c, d).insertAfter(a)
        };
        g.removeSlide = function (a) {
            if (g.slides[a]) {
                if (b.loop) {
                    if (!g.slides[a +
                    g.loopedSlides]) return !1;
                    g.slides[a + g.loopedSlides].remove();
                    g.removeLoopedSlides();
                    g.calcSlides();
                    g.createLoop()
                } else g.slides[a].remove();
                return !0
            }
            return !1
        };
        g.removeLastSlide = function () {
            return 0 < g.slides.length ? (b.loop ? (g.slides[g.slides.length - 1 - g.loopedSlides].remove(), g.removeLoopedSlides(), g.calcSlides(), g.createLoop()) : g.slides[g.slides.length - 1].remove(), !0) : !1
        };
        g.removeAllSlides = function () {
            for (var a = g.slides.length - 1; 0 <= a; a--) g.slides[a].remove()
        };
        g.getSlide = function (a) {
            return g.slides[a]
        };
        g.getLastSlide = function () {
            return g.slides[g.slides.length - 1]
        };
        g.getFirstSlide = function () {
            return g.slides[0]
        };
        g.activeSlide = function () {
            return g.slides[g.activeIndex]
        };
        var V = [], Z;
        for (Z in g.plugins) b[Z] && (U = g.plugins[Z](g, b[Z])) && V.push(U);
        g.callPlugins = function (a, b) {
            b || (b = {});
            for (var c = 0; c < V.length; c++) if (a in V[c]) V[c][a](b)
        };
        g.browser.ie10 && !b.onlyExternal && (E ? g.wrapper.classList.add("swiper-wp8-horizontal") : g.wrapper.classList.add("swiper-wp8-vertical"));
        b.freeMode && (g.container.className += " swiper-free-mode");
        g.initialized = !1;
        g.init = function (a, c) {
            var d = g.h.getWidth(g.container), e = g.h.getHeight(g.container);
            if (d !== g.width || e !== g.height || a) {
                g.width = d;
                g.height = e;
                D = E ? d : e;
                d = g.wrapper;
                a && g.calcSlides(c);
                if ("auto" === b.slidesPerView) {
                    var f = 0, h = 0;
                    0 < b.slidesOffset && (d.style.paddingLeft = "", d.style.paddingRight = "", d.style.paddingTop = "", d.style.paddingBottom = "");
                    d.style.width = "";
                    d.style.height = "";
                    0 < b.offsetPxBefore && (E ? g.wrapperLeft = b.offsetPxBefore : g.wrapperTop = b.offsetPxBefore);
                    0 < b.offsetPxAfter && (E ? g.wrapperRight =
                        b.offsetPxAfter : g.wrapperBottom = b.offsetPxAfter);
                    b.centeredSlides && (E ? (g.wrapperLeft = (D - this.slides[0].getWidth(!0)) / 2, g.wrapperRight = (D - g.slides[g.slides.length - 1].getWidth(!0)) / 2) : (g.wrapperTop = (D - g.slides[0].getHeight(!0)) / 2, g.wrapperBottom = (D - g.slides[g.slides.length - 1].getHeight(!0)) / 2));
                    E ? (0 <= g.wrapperLeft && (d.style.paddingLeft = g.wrapperLeft + "px"), 0 <= g.wrapperRight && (d.style.paddingRight = g.wrapperRight + "px")) : (0 <= g.wrapperTop && (d.style.paddingTop = g.wrapperTop + "px"), 0 <= g.wrapperBottom && (d.style.paddingBottom =
                        g.wrapperBottom + "px"));
                    var k = 0, m = 0;
                    g.snapGrid = [];
                    g.slidesGrid = [];
                    for (var p = 0, q = 0; q < g.slides.length; q++) {
                        var e = g.slides[q].getWidth(!0), t = g.slides[q].getHeight(!0);
                        b.calculateHeight && (p = Math.max(p, t));
                        var u = E ? e : t;
                        if (b.centeredSlides) {
                            var v = q === g.slides.length - 1 ? 0 : g.slides[q + 1].getWidth(!0),
                                n = q === g.slides.length - 1 ? 0 : g.slides[q + 1].getHeight(!0), v = E ? v : n;
                            if (u > D) {
                                for (n = 0; n <= Math.floor(u / (D + g.wrapperLeft)); n++) 0 === n ? g.snapGrid.push(k + g.wrapperLeft) : g.snapGrid.push(k + g.wrapperLeft + D * n);
                                g.slidesGrid.push(k +
                                    g.wrapperLeft)
                            } else g.snapGrid.push(m), g.slidesGrid.push(m);
                            m += u / 2 + v / 2
                        } else {
                            if (u > D) for (n = 0; n <= Math.floor(u / D); n++) g.snapGrid.push(k + D * n); else g.snapGrid.push(k);
                            g.slidesGrid.push(k)
                        }
                        k += u;
                        f += e;
                        h += t
                    }
                    b.calculateHeight && (g.height = p);
                    E ? (K = f + g.wrapperRight + g.wrapperLeft, d.style.width = f + "px", d.style.height = g.height + "px") : (K = h + g.wrapperTop + g.wrapperBottom, d.style.width = g.width + "px", d.style.height = h + "px")
                } else if (b.scrollContainer) d.style.width = "", d.style.height = "", p = g.slides[0].getWidth(!0), f = g.slides[0].getHeight(!0),
                    K = E ? p : f, d.style.width = p + "px", d.style.height = f + "px", H = E ? p : f; else {
                    if (b.calculateHeight) {
                        f = p = 0;
                        E || (g.container.style.height = "");
                        d.style.height = "";
                        for (q = 0; q < g.slides.length; q++) g.slides[q].style.height = "", p = Math.max(g.slides[q].getHeight(!0), p), E || (f += g.slides[q].getHeight(!0));
                        t = p;
                        g.height = t;
                        E ? f = t : (D = t, g.container.style.height = D + "px")
                    } else t = E ? g.height : g.height / b.slidesPerView, f = E ? g.height : g.slides.length * t;
                    e = E ? g.width / b.slidesPerView : g.width;
                    p = E ? g.slides.length * e : g.width;
                    H = E ? e : t;
                    0 < b.offsetSlidesBefore &&
                    (E ? g.wrapperLeft = H * b.offsetSlidesBefore : g.wrapperTop = H * b.offsetSlidesBefore);
                    0 < b.offsetSlidesAfter && (E ? g.wrapperRight = H * b.offsetSlidesAfter : g.wrapperBottom = H * b.offsetSlidesAfter);
                    0 < b.offsetPxBefore && (E ? g.wrapperLeft = b.offsetPxBefore : g.wrapperTop = b.offsetPxBefore);
                    0 < b.offsetPxAfter && (E ? g.wrapperRight = b.offsetPxAfter : g.wrapperBottom = b.offsetPxAfter);
                    b.centeredSlides && (E ? (g.wrapperLeft = (D - H) / 2, g.wrapperRight = (D - H) / 2) : (g.wrapperTop = (D - H) / 2, g.wrapperBottom = (D - H) / 2));
                    E ? (0 < g.wrapperLeft && (d.style.paddingLeft =
                        g.wrapperLeft + "px"), 0 < g.wrapperRight && (d.style.paddingRight = g.wrapperRight + "px")) : (0 < g.wrapperTop && (d.style.paddingTop = g.wrapperTop + "px"), 0 < g.wrapperBottom && (d.style.paddingBottom = g.wrapperBottom + "px"));
                    K = E ? p + g.wrapperRight + g.wrapperLeft : f + g.wrapperTop + g.wrapperBottom;
                    d.style.width = p + "px";
                    d.style.height = f + "px";
                    k = 0;
                    g.snapGrid = [];
                    g.slidesGrid = [];
                    for (q = 0; q < g.slides.length; q++) g.snapGrid.push(k), g.slidesGrid.push(k), k += H, g.slides[q].style.width = e + "px", g.slides[q].style.height = t + "px"
                }
                if (g.initialized) {
                    if (g.callPlugins("onInit"),
                        b.onFirstInit) b.onInit(g)
                } else if (g.callPlugins("onFirstInit"), b.onFirstInit) b.onFirstInit(g);
                g.initialized = !0
            }
        };
        g.reInit = function (a) {
            g.init(!0, a)
        };
        g.resizeFix = function (a) {
            g.callPlugins("beforeResizeFix");
            g.init(b.resizeReInit || a);
            if (!b.freeMode) b.loop ? g.swipeTo(g.activeLoopIndex, 0, !1) : g.swipeTo(g.activeIndex, 0, !1); else if ((E ? g.getWrapperTranslate("x") : g.getWrapperTranslate("y")) < -d()) {
                a = E ? -d() : 0;
                var c = E ? 0 : -d();
                g.setWrapperTransition(0);
                g.setWrapperTranslate(a, c, 0)
            }
            g.callPlugins("afterResizeFix")
        };
        g.destroy = function (a) {
            g.browser.ie10 ? (g.h.removeEventListener(g.wrapper, g.touchEvents.touchStart, y, !1), g.h.removeEventListener(document, g.touchEvents.touchMove, t, !1), g.h.removeEventListener(document, g.touchEvents.touchEnd, B, !1)) : (g.support.touch && (g.h.removeEventListener(g.wrapper, "touchstart", y, !1), g.h.removeEventListener(g.wrapper, "touchmove", t, !1), g.h.removeEventListener(g.wrapper, "touchend", B, !1)), b.simulateTouch && (g.h.removeEventListener(g.wrapper, "mousedown", y, !1), g.h.removeEventListener(document,
                "mousemove", t, !1), g.h.removeEventListener(document, "mouseup", B, !1)));
            b.autoResize && g.h.removeEventListener(window, "resize", g.resizeFix, !1);
            h();
            b.paginationClickable && T();
            b.mousewheelControl && g._wheelEvent && g.h.removeEventListener(g.container, g._wheelEvent, m, !1);
            b.keyboardControl && g.h.removeEventListener(document, "keydown", k, !1);
            b.autoplay && g.stopAutoplay();
            g.callPlugins("onDestroy");
            g = null
        };
        b.grabCursor && (g.container.style.cursor = "move", g.container.style.cursor = "grab", g.container.style.cursor = "-moz-grab",
            g.container.style.cursor = "-webkit-grab");
        g.allowSlideClick = !0;
        g.allowLinks = !0;
        var fa = !1, N, ha = !0, ia, ca;
        g.swipeNext = function (a) {
            !a && b.loop && g.fixLoop();
            g.callPlugins("onSwipeNext");
            var c = a = E ? g.getWrapperTranslate("x") : g.getWrapperTranslate("y");
            if ("auto" == b.slidesPerView) for (var e = 0; e < g.snapGrid.length; e++) {
                if (-a >= g.snapGrid[e] && -a < g.snapGrid[e + 1]) {
                    c = -g.snapGrid[e + 1];
                    break
                }
            } else c = H * b.slidesPerGroup, c = -(Math.floor(Math.abs(a) / Math.floor(c)) * c + c);
            c < -d() && (c = -d());
            if (c == a) return !1;
            C(c, "next");
            return !0
        };
        g.swipePrev = function (a) {
            !a && b.loop && g.fixLoop();
            !a && b.autoplay && g.stopAutoplay();
            g.callPlugins("onSwipePrev");
            a = Math.ceil(E ? g.getWrapperTranslate("x") : g.getWrapperTranslate("y"));
            var c;
            if ("auto" == b.slidesPerView) {
                c = 0;
                for (var d = 1; d < g.snapGrid.length; d++) {
                    if (-a == g.snapGrid[d]) {
                        c = -g.snapGrid[d - 1];
                        break
                    }
                    if (-a > g.snapGrid[d] && -a < g.snapGrid[d + 1]) {
                        c = -g.snapGrid[d];
                        break
                    }
                }
            } else c = H * b.slidesPerGroup, c *= -(Math.ceil(-a / c) - 1);
            0 < c && (c = 0);
            if (c == a) return !1;
            C(c, "prev");
            return !0
        };
        g.swipeReset = function () {
            g.callPlugins("onSwipeReset");
            var a = E ? g.getWrapperTranslate("x") : g.getWrapperTranslate("y"), c = H * b.slidesPerGroup;
            d();
            if ("auto" == b.slidesPerView) {
                for (var e = c = 0; e < g.snapGrid.length; e++) {
                    if (-a === g.snapGrid[e]) return;
                    if (-a >= g.snapGrid[e] && -a < g.snapGrid[e + 1]) {
                        c = 0 < g.positions.diff ? -g.snapGrid[e + 1] : -g.snapGrid[e];
                        break
                    }
                }
                -a >= g.snapGrid[g.snapGrid.length - 1] && (c = -g.snapGrid[g.snapGrid.length - 1]);
                a <= -d() && (c = -d())
            } else c = 0 > a ? Math.round(a / c) * c : 0;
            b.scrollContainer && (c = 0 > a ? a : 0);
            c < -d() && (c = -d());
            b.scrollContainer && D > H && (c = 0);
            if (c == a) return !1;
            C(c, "reset");
            return !0
        };
        g.swipeTo = function (a, c, e) {
            a = parseInt(a, 10);
            g.callPlugins("onSwipeTo", {index: a, speed: c});
            b.loop && (a += g.loopedSlides);
            var f = E ? g.getWrapperTranslate("x") : g.getWrapperTranslate("y");
            if (!(a > g.slides.length - 1 || 0 > a)) {
                var h;
                h = "auto" == b.slidesPerView ? -g.slidesGrid[a] : -a * H;
                h < -d() && (h = -d());
                if (h == f) return !1;
                C(h, "to", {index: a, speed: c, runCallbacks: !1 === e ? !1 : !0});
                return !0
            }
        };
        g._queueStartCallbacks = !1;
        g._queueEndCallbacks = !1;
        g.updateActiveSlide = function (a) {
            if (g.initialized && 0 != g.slides.length) {
                g.previousIndex =
                    g.activeIndex;
                0 < a && (a = 0);
                "undefined" == typeof a && (a = E ? g.getWrapperTranslate("x") : g.getWrapperTranslate("y"));
                if ("auto" == b.slidesPerView) {
                    if (g.activeIndex = g.slidesGrid.indexOf(-a), 0 > g.activeIndex) {
                        for (var c = 0; c < g.slidesGrid.length - 1 && !(-a > g.slidesGrid[c] && -a < g.slidesGrid[c + 1]); c++) ;
                        var d = Math.abs(g.slidesGrid[c] + a), e = Math.abs(g.slidesGrid[c + 1] + a);
                        g.activeIndex = d <= e ? c : c + 1
                    }
                } else g.activeIndex = b.visibilityFullFit ? Math.ceil(-a / H) : Math.round(-a / H);
                g.activeIndex == g.slides.length && (g.activeIndex = g.slides.length -
                    1);
                0 > g.activeIndex && (g.activeIndex = 0);
                if (g.slides[g.activeIndex]) {
                    g.calcVisibleSlides(a);
                    d = RegExp("\\s*" + b.slideActiveClass);
                    e = RegExp("\\s*" + b.slideVisibleClass);
                    for (c = 0; c < g.slides.length; c++) g.slides[c].className = g.slides[c].className.replace(d, "").replace(e, ""), 0 <= g.visibleSlides.indexOf(g.slides[c]) && (g.slides[c].className += " " + b.slideVisibleClass);
                    g.slides[g.activeIndex].className += " " + b.slideActiveClass;
                    b.loop ? (c = g.loopedSlides, g.activeLoopIndex = g.activeIndex - c, g.activeLoopIndex >= g.slides.length -
                    2 * c && (g.activeLoopIndex = g.slides.length - 2 * c - g.activeLoopIndex), 0 > g.activeLoopIndex && (g.activeLoopIndex = g.slides.length - 2 * c + g.activeLoopIndex)) : g.activeLoopIndex = g.activeIndex;
                    b.pagination && g.updatePagination(a)
                }
            }
        };
        g.createPagination = function (c) {
            b.paginationClickable && g.paginationButtons && T();
            var d = "", e = g.slides.length;
            b.loop && (e -= 2 * g.loopedSlides);
            for (var f = 0; f < e; f++) d += "<" + b.paginationElement + ' class="' + b.paginationElementClass + '"></' + b.paginationElement + ">";
            g.paginationContainer = b.pagination.nodeType ?
                b.pagination : a(b.pagination)[0];
            g.paginationContainer.innerHTML = d;
            g.paginationButtons = [];
            document.querySelectorAll ? g.paginationButtons = g.paginationContainer.querySelectorAll("." + b.paginationElementClass) : window.jQuery && (g.paginationButtons = a(g.paginationContainer).find("." + b.paginationElementClass));
            c || g.updatePagination();
            g.callPlugins("onCreatePagination");
            if (b.paginationClickable) for (c = g.paginationButtons, d = 0; d < c.length; d++) g.h.addEventListener(c[d], "click", O, !1)
        };
        g.updatePagination = function (c) {
            if (b.pagination &&
                !(1 > g.slides.length)) {
                if (document.querySelectorAll) var d = g.paginationContainer.querySelectorAll("." + b.paginationActiveClass); else window.jQuery && (d = a(g.paginationContainer).find("." + b.paginationActiveClass));
                if (d && (d = g.paginationButtons, 0 != d.length)) {
                    for (var e = 0; e < d.length; e++) d[e].className = b.paginationElementClass;
                    var f = b.loop ? g.loopedSlides : 0;
                    if (b.paginationAsRange) {
                        g.visibleSlides || g.calcVisibleSlides(c);
                        c = [];
                        for (e = 0; e < g.visibleSlides.length; e++) {
                            var h = g.slides.indexOf(g.visibleSlides[e]) - f;
                            b.loop &&
                            0 > h && (h = g.slides.length - 2 * g.loopedSlides + h);
                            b.loop && h >= g.slides.length - 2 * g.loopedSlides && (h = g.slides.length - 2 * g.loopedSlides - h, h = Math.abs(h));
                            c.push(h)
                        }
                        for (e = 0; e < c.length; e++) d[c[e]] && (d[c[e]].className += " " + b.paginationVisibleClass);
                        b.loop ? d[g.activeLoopIndex].className += " " + b.paginationActiveClass : d[g.activeIndex].className += " " + b.paginationActiveClass
                    } else b.loop ? d[g.activeLoopIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass : d[g.activeIndex].className += " " + b.paginationActiveClass +
                        " " + b.paginationVisibleClass
                }
            }
        };
        g.calcVisibleSlides = function (a) {
            var c = [], d = 0, e = 0, f = 0;
            E && 0 < g.wrapperLeft && (a += g.wrapperLeft);
            !E && 0 < g.wrapperTop && (a += g.wrapperTop);
            for (var h = 0; h < g.slides.length; h++) {
                var d = d + e,
                    e = "auto" == b.slidesPerView ? E ? g.h.getWidth(g.slides[h], !0) : g.h.getHeight(g.slides[h], !0) : H,
                    f = d + e, k = !1;
                b.visibilityFullFit ? (d >= -a && f <= -a + D && (k = !0), d <= -a && f >= -a + D && (k = !0)) : (f > -a && f <= -a + D && (k = !0), d >= -a && d < -a + D && (k = !0), d < -a && f > -a + D && (k = !0));
                k && c.push(g.slides[h])
            }
            0 == c.length && (c = [g.slides[g.activeIndex]]);
            g.visibleSlides = c
        };
        g.autoPlayIntervalId = void 0;
        g.startAutoplay = function () {
            if ("undefined" !== typeof g.autoPlayIntervalId) return !1;
            b.autoplay && !b.loop && (g.autoPlayIntervalId = setInterval(function () {
                g.swipeNext(!0) || g.swipeTo(0)
            }, b.autoplay));
            b.autoplay && b.loop && (g.autoPlayIntervalId = setInterval(function () {
                g.swipeNext()
            }, b.autoplay));
            g.callPlugins("onAutoplayStart")
        };
        g.stopAutoplay = function () {
            g.autoPlayIntervalId && clearInterval(g.autoPlayIntervalId);
            g.autoPlayIntervalId = void 0;
            g.callPlugins("onAutoplayStop")
        };
        g.loopCreated = !1;
        g.removeLoopedSlides = function () {
            if (g.loopCreated) for (var a = 0; a < g.slides.length; a++) !0 === g.slides[a].getData("looped") && g.wrapper.removeChild(g.slides[a])
        };
        g.createLoop = function () {
            if (0 != g.slides.length) {
                g.loopedSlides = b.slidesPerView + b.loopAdditionalSlides;
                for (var a = "", c = "", d = 0; d < g.loopedSlides; d++) a += g.slides[d].outerHTML;
                for (d = g.slides.length - g.loopedSlides; d < g.slides.length; d++) c += g.slides[d].outerHTML;
                M.innerHTML = c + M.innerHTML + a;
                g.loopCreated = !0;
                g.calcSlides();
                for (d = 0; d < g.slides.length; d++) (d <
                    g.loopedSlides || d >= g.slides.length - g.loopedSlides) && g.slides[d].setData("looped", !0);
                g.callPlugins("onCreateLoop")
            }
        };
        g.fixLoop = function () {
            if (g.activeIndex < g.loopedSlides) {
                var a = g.slides.length - 3 * g.loopedSlides + g.activeIndex;
                g.swipeTo(a, 0, !1)
            } else g.activeIndex > g.slides.length - 2 * b.slidesPerView && (a = -g.slides.length + g.activeIndex + g.loopedSlides, g.swipeTo(a, 0, !1))
        };
        g.loadSlides = function () {
            var a = "";
            g.activeLoaderIndex = 0;
            for (var c = b.loader.slides, d = b.loader.loadAllSlides ? c.length : b.slidesPerView * (1 + b.loader.surroundGroups),
                     e = 0; e < d; e++) a = "outer" == b.loader.slidesHTMLType ? a + c[e] : a + ("<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + e + '">' + c[e] + "</" + b.slideElement + ">");
            g.wrapper.innerHTML = a;
            g.calcSlides(!0);
            b.loader.loadAllSlides || g.wrapperTransitionEnd(g.reloadSlides, !0)
        };
        g.reloadSlides = function () {
            var a = b.loader.slides, c = parseInt(g.activeSlide().data("swiperindex"), 10);
            if (!(0 > c || c > a.length - 1)) {
                g.activeLoaderIndex = c;
                var d = Math.max(0, c - b.slidesPerView * b.loader.surroundGroups), e = Math.min(c + b.slidesPerView *
                    (1 + b.loader.surroundGroups) - 1, a.length - 1);
                0 < c && (c = -H * (c - d), E ? g.setWrapperTranslate(c, 0, 0) : g.setWrapperTranslate(0, c, 0), g.setWrapperTransition(0));
                if ("reload" === b.loader.logic) {
                    for (var f = g.wrapper.innerHTML = "", c = d; c <= e; c++) f += "outer" == b.loader.slidesHTMLType ? a[c] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + c + '">' + a[c] + "</" + b.slideElement + ">";
                    g.wrapper.innerHTML = f
                } else {
                    for (var f = 1E3, h = 0, c = 0; c < g.slides.length; c++) {
                        var k = g.slides[c].data("swiperindex");
                        k < d || k > e ? g.wrapper.removeChild(g.slides[c]) :
                            (f = Math.min(k, f), h = Math.max(k, h))
                    }
                    for (c = d; c <= e; c++) c < f && (d = document.createElement(b.slideElement), d.className = b.slideClass, d.setAttribute("data-swiperindex", c), d.innerHTML = a[c], g.wrapper.insertBefore(d, g.wrapper.firstChild)), c > h && (d = document.createElement(b.slideElement), d.className = b.slideClass, d.setAttribute("data-swiperindex", c), d.innerHTML = a[c], g.wrapper.appendChild(d))
                }
                g.reInit(!0)
            }
        };
        g.calcSlides();
        0 < b.loader.slides.length && 0 == g.slides.length && g.loadSlides();
        b.loop && g.createLoop();
        g.init();
        e();
        b.pagination && b.createPagination && g.createPagination(!0);
        b.loop || 0 < b.initialSlide ? g.swipeTo(b.initialSlide, 0, !1) : g.updateActiveSlide(0);
        b.autoplay && g.startAutoplay()
    }
};
Swiper.prototype = {
    plugins: {}, wrapperTransitionEnd: function (c, b) {
        function a() {
            c(d);
            d.params.queueEndCallbacks && (d._queueEndCallbacks = !1);
            if (!b) for (var h = 0; h < f.length; h++) d.h.removeEventListener(e, f[h], a, !1)
        }

        var d = this, e = d.wrapper,
            f = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
        if (c) for (var h = 0; h < f.length; h++) d.h.addEventListener(e, f[h], a, !1)
    }, getWrapperTranslate: function (c) {
        var b = this.wrapper, a, d, e = window.WebKitCSSMatrix ? new WebKitCSSMatrix(window.getComputedStyle(b,
            null).webkitTransform) : window.getComputedStyle(b, null).MozTransform || window.getComputedStyle(b, null).OTransform || window.getComputedStyle(b, null).MsTransform || window.getComputedStyle(b, null).msTransform || window.getComputedStyle(b, null).transform || window.getComputedStyle(b, null).getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
        a = e.toString().split(",");
        this.params.useCSS3Transforms ? ("x" == c && (d = 16 == a.length ? parseFloat(a[12]) : window.WebKitCSSMatrix ? e.m41 : parseFloat(a[4])), "y" ==
        c && (d = 16 == a.length ? parseFloat(a[13]) : window.WebKitCSSMatrix ? e.m42 : parseFloat(a[5]))) : ("x" == c && (d = parseFloat(b.style.left, 10) || 0), "y" == c && (d = parseFloat(b.style.top, 10) || 0));
        return d || 0
    }, setWrapperTranslate: function (c, b, a) {
        var d = this.wrapper.style;
        c = c || 0;
        b = b || 0;
        a = a || 0;
        this.params.useCSS3Transforms ? this.support.transforms3d ? d.webkitTransform = d.MsTransform = d.msTransform = d.MozTransform = d.OTransform = d.transform = "translate3d(" + c + "px, " + b + "px, " + a + "px)" : (d.webkitTransform = d.MsTransform = d.msTransform = d.MozTransform =
            d.OTransform = d.transform = "translate(" + c + "px, " + b + "px)", this.support.transforms || (d.left = c + "px", d.top = b + "px")) : (d.left = c + "px", d.top = b + "px");
        this.callPlugins("onSetWrapperTransform", {x: c, y: b, z: a})
    }, setWrapperTransition: function (c) {
        var b = this.wrapper.style;
        b.webkitTransitionDuration = b.MsTransitionDuration = b.msTransitionDuration = b.MozTransitionDuration = b.OTransitionDuration = b.transitionDuration = c / 1E3 + "s";
        this.callPlugins("onSetWrapperTransition", {duration: c})
    }, h: {
        getWidth: function (c, b) {
            var a = window.getComputedStyle(c,
                null).getPropertyValue("width"), d = parseFloat(a);
            if (isNaN(d) || 0 < a.indexOf("%")) d = c.offsetWidth - parseFloat(window.getComputedStyle(c, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(c, null).getPropertyValue("padding-right"));
            b && (d += parseFloat(window.getComputedStyle(c, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(c, null).getPropertyValue("padding-right")));
            return d
        }, getHeight: function (c, b) {
            if (b) return c.offsetHeight;
            var a = window.getComputedStyle(c,
                null).getPropertyValue("height"), d = parseFloat(a);
            if (isNaN(d) || 0 < a.indexOf("%")) d = c.offsetHeight - parseFloat(window.getComputedStyle(c, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(c, null).getPropertyValue("padding-bottom"));
            b && (d += parseFloat(window.getComputedStyle(c, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(c, null).getPropertyValue("padding-bottom")));
            return d
        }, getOffset: function (c) {
            var b = c.getBoundingClientRect(), a = document.body, d = c.clientTop ||
                a.clientTop || 0, a = c.clientLeft || a.clientLeft || 0, e = window.pageYOffset || c.scrollTop;
            c = window.pageXOffset || c.scrollLeft;
            document.documentElement && !window.pageYOffset && (e = document.documentElement.scrollTop, c = document.documentElement.scrollLeft);
            return {top: b.top + e - d, left: b.left + c - a}
        }, windowWidth: function () {
            if (window.innerWidth) return window.innerWidth;
            if (document.documentElement && document.documentElement.clientWidth) return document.documentElement.clientWidth
        }, windowHeight: function () {
            if (window.innerHeight) return window.innerHeight;
            if (document.documentElement && document.documentElement.clientHeight) return document.documentElement.clientHeight
        }, windowScroll: function () {
            if ("undefined" != typeof pageYOffset) return {left: window.pageXOffset, top: window.pageYOffset};
            if (document.documentElement) return {
                left: document.documentElement.scrollLeft,
                top: document.documentElement.scrollTop
            }
        }, addEventListener: function (c, b, a, d) {
            c.addEventListener ? c.addEventListener(b, a, d) : c.attachEvent && c.attachEvent("on" + b, a)
        }, removeEventListener: function (c, b, a, d) {
            c.removeEventListener ?
                c.removeEventListener(b, a, d) : c.detachEvent && c.detachEvent("on" + b, a)
        }
    }, setTransform: function (c, b) {
        var a = c.style;
        a.webkitTransform = a.MsTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = b
    }, setTranslate: function (c, b) {
        var a = c.style, d = b.x || 0, e = b.y || 0, f = b.z || 0;
        a.webkitTransform = a.MsTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = this.support.transforms3d ? "translate3d(" + d + "px," + e + "px," + f + "px)" : "translate(" + d + "px," + e + "px)";
        this.support.transforms || (a.left = d + "px", a.top = e + "px")
    },
    setTransition: function (c, b) {
        var a = c.style;
        a.webkitTransitionDuration = a.MsTransitionDuration = a.msTransitionDuration = a.MozTransitionDuration = a.OTransitionDuration = a.transitionDuration = b + "ms"
    }, support: {
        touch: window.Modernizr && !0 === Modernizr.touch || function () {
            return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
        }(), transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function () {
            var c = document.createElement("div");
            return "webkitPerspective" in c.style || "MozPerspective" in
                c.style || "OPerspective" in c.style || "MsPerspective" in c.style || "perspective" in c.style
        }(), transforms: window.Modernizr && !0 === Modernizr.csstransforms || function () {
            var c = document.createElement("div").style;
            return "transform" in c || "WebkitTransform" in c || "MozTransform" in c || "msTransform" in c || "MsTransform" in c || "OTransform" in c
        }(), transitions: window.Modernizr && !0 === Modernizr.csstransitions || function () {
            var c = document.createElement("div").style;
            return "transition" in c || "WebkitTransition" in c || "MozTransition" in
                c || "msTransition" in c || "MsTransition" in c || "OTransition" in c
        }()
    }, browser: {
        ie8: function () {
            var c = -1;
            "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (c = parseFloat(RegExp.$1));
            return -1 != c && 9 > c
        }(), ie10: window.navigator.msPointerEnabled
    }
};
(window.jQuery || window.Zepto) && function (c) {
    c.fn.swiper = function (b) {
        b = new Swiper(c(this)[0], b);
        c(this).data("swiper", b);
        return b
    }
}(window.jQuery || window.Zepto);
"undefined" !== typeof module && (module.exports = Swiper);
var land2 = function () {
    this.init()
};
land2.prototype = {
    init: function () {
        this.loadimg()
    }, loadimg: function () {
        var c = this;
        new wrLoading(".loading", ["bg1.jpg", "nvren.png", "laba.png", "logo.png", "chakan_btn.png"], function () {
            c.start()
        })
    }, start: function () {
        $(".load_main").fadeOut();
        console.log("start");
        (new TimelineLite).from($(".intro .t3"), .8, {
            top: "-=100px",
            alpha: 0,
            ease: Back.easeOut
        }).from($(".intro .t2"), .8, {
            top: "-=100px",
            alpha: 0,
            scale: 0,
            ease: Back.easeOut
        }, "-=0.5").from($(".intro .t1"), .8, {top: "-=100px", alpha: 0, scale: 0, ease: Back.easeOut}, "-=0.5")
    }
};
$(function () {
    new land2
});

function progressHandle(c) {
}

var canvas2, stage2, exportRoot, images, stage, stageWidth, stageHeight, timeout, interval, timeNum = 15,
    gameStart = !1, score = 0, gameOver = !1, road1, road2, roadSpeed = 150, borderWidth = 55, roadWidth = 170,
    carSpace = [100, 280, 460], roadID = 1, timer, propArr = [], speed = 150, frame = 1;
$(document).ready(function (c) {
    mydiv_resize();
    stageWidth = WWW;
    stageHeight = HHH;
    $(".load_main").height(stageHeight);
    $(".countDown").height(stageHeight);
    $(".wrapper").height(stageHeight);
    $(".gameMain").height(stageHeight);
    $(".result").height(stageHeight);
    $(".share_cont").height(stageHeight);
    setTimeout(function () {
        $(".intro .t3").addClass("effects")
    }, 1300);
    initObj()
});

function initObj() {
    var c = document.getElementById("gameMain");
    c.width = stageWidth;
    c.height = stageHeight;
    stage = new createjs.Stage("gameMain");
    createjs.Touch.enable(stage);
    manifest = [{src: "images/road.jpg", id: "road"}, {
        src: "http://mat1.gtimg.com/autoguangzhou/lonz/images/p_car.png",
        id: "p_car"
    }, {src: "http://mat1.gtimg.com/autoguangzhou/lonz/images/p_car01.png", id: "p_car01"}, {
        src: "http://mat1.gtimg.com/autoguangzhou/lonz/images/p_car02.png",
        id: "p_car02"
    }, {src: "http://mat1.gtimg.com/autoguangzhou/lonz/images/add_tips.png", id: "add_tips"}, {src: "http://mat1.gtimg.com/autoguangzhou/lonz/images/car1.png", id: "car1"}, {
        src: "http://mat1.gtimg.com/autoguangzhou/lonz/images/car2.png",
        id: "car2"
    }, {src: "http://mat1.gtimg.com/autoguangzhou/lonz/images/watch1.png", id: "watch1"}, {src: "http://mat1.gtimg.com/autoguangzhou/lonz/images/watch2.png", id: "watch2"}];
    loader = new createjs.LoadQueue(!1);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(manifest)
}

function handleComplete() {
    road1 = new createjs.Bitmap(loader.getResult("road"));
    road1.scaleX = road1.scaleY = 2;
    road1.y = 0;
    road2 = new createjs.Bitmap(loader.getResult("road"));
    road2.y = -1138;
    road2.scaleX = road2.scaleY = 2;
    stage.addChild(road1, road2);
    var c = loader.getResult("p_car"), b = new createjs.SpriteSheet({
        framerate: 5,
        images: ["http://mat1.gtimg.com/autoguangzhou/lonz/images/p_car.png", "http://mat1.gtimg.com/autoguangzhou/lonz/images/p_car01.png", "http://mat1.gtimg.com/autoguangzhou/lonz/images/p_car02.png"],
        frames: {width: c.width, height: c.height},
        animations: {run: [0, 2]}
    });
    p_car = new createjs.Sprite(b, "run");
    p_car.x = carSpace[roadID];
    p_car.y = stageHeight - c.height;
    p_car.currRoadId = 1;
    p_car.visible = !0;
    stage.addChild(p_car);
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", tick);
    $(document).bind("touchstart mousedown", function (a) {
        a.preventDefault()
    });
    document.getElementById("controls").play();
    $(".start_btn").on("touchstart click", function () {
        $(".wrapper .logo").fadeOut();
        $(".wrapper .intro").fadeOut();
        startGame()
    });
    $("#again_btn").on("touchstart click", function () {
        $(".wrapper .logo").fadeIn();
        $(".wrapper .intro").fadeIn();
        reStartGame()
    });
    $(".logo").on("touchstart click", function (a) {
    })
}

function tick(c) {
    deltaS = c.delta / 1E3;
    if (1 == gameStart) {
        road1.y += deltaS * roadSpeed;
        road2.y += deltaS * roadSpeed;
        road1.y >= stageHeight && (road1.y = -1138 + road2.y);
        road2.y >= stageHeight && (road2.y = -1138 + road1.y);
        for (var b = 0; b < propArr.length; b++) if (propArr[b].y += speed * deltaS, propArr[b].y > stageHeight && stage.removeChild(propArr[b]), propArr[b].roadIndex == p_car.currRoadId && 130 > Math.abs(p_car.y - propArr[b].y) && 100 > propArr[b].y - p_car.y) if (0 == propArr[b].type) gameOverFun(); else if (1 == propArr[b].type) {
            addScore(30);
            stage.removeChild(propArr[b]);
            propArr.splice(b, 1);
            break
        }
        1E3 > speed && (speed += 1);
        1200 > speed && (roadSpeed += 1);
        rotate = .27 * speed - 25;
        $(".wrapper .yibiao .line").css({"-webkit-transform": "rotate(" + rotate + "deg)"});
        frame++;
        0 == frame % 36 && addpro()
    }
    stage.update(c)
}

function reStartGame() {
    TweenMax.killAll();
    gameStart = gameOver = !1;
    score = 0;
    roadID = 1;
    frame = 0;
    roadSpeed = speed = 150;
    $(".result").fadeOut();
    $(".countDown").fadeOut();
    $(".score").fadeOut();
    $(".result .logo").fadeOut();
    $(".wrapper .yibiao").fadeOut();
    $(".label2").html(score);
    $(".result .sc").html(score);
    rotate = .27 * speed - 25;
    $(".wrapper .yibiao .line").css({"-webkit-transform": "rotate(" + rotate + "deg)"});
    road1.y = 0;
    road2.y = -1138;
    var c = loader.getResult("p_car");
    p_car.x = carSpace[roadID];
    p_car.y = stageHeight - c.height;
    p_car.currRoadId = 1;
    for (c = 0; c < propArr.length; c++) stage.removeChild(propArr[c]);
    propArr = [];
    $(".left_btn").off();
    $(".right_btn").off();
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", tick)
}

function startGame() {
    var c = 3, b = setInterval(function () {
        c--;
        -1 < c && $(".countDown .cont .time").attr("src", "http://mat1.gtimg.com/autoguangzhou/lonz/images/" + c + ".png");
        -1 >= c && ($(".countDown").fadeOut(), clearInterval(b), gameStart = !0, TweenLite.to(p_car, 4, {y: .5 * (stageHeight - 190)}))
    }, 700);
    $(".countDown").fadeIn();
    $(".score").fadeIn();
    $(".result .logo").fadeIn();
    $(".wrapper .yibiao").fadeIn();
    $(".intro .t3").removeClass("effects");
    $(".left_btn").on("touchstart click", function () {
        0 < roadID && roadID--;
        TweenLite.to(p_car, .5, {x: carSpace[roadID]});
        setTimeout(function () {
            p_car.currRoadId =
                roadID
        }, 100)
    });
    $(".right_btn").on("touchstart click", function () {
        2 > roadID && roadID++;
        TweenLite.to(p_car, .5, {x: carSpace[roadID]});
        setTimeout(function () {
            p_car.currRoadId = roadID
        }, 100)
    });
    document.getElementById("controls").play()
}

function gameOverFun() {
    dp_submitScore(score);
    var c = "http://mat1.gtimg.com/autoguangzhou/lonz/images/level1.png",
        c = 300 > score ? "http://mat1.gtimg.com/autoguangzhou/lonz/images/level1.png" : 500 > score ? "http://mat1.gtimg.com/autoguangzhou/lonz/images/level1.png" : 700 > score ? "http://mat1.gtimg.com/autoguangzhou/lonz/images/level1.png" : "http://mat1.gtimg.com/autoguangzhou/lonz/images/level1.png";
    document.getElementById("icons").src = c;
    gameOver = !0;
    clearInterval(interval);
    createjs.Ticker.removeEventListener("tick", tick);
    $(".result").fadeIn()
}

function onTimer() {
    timer = setInterval(function () {
        addpro()
    }, 2E3);
    addpro()
}

function addpro() {
    var c = [{type: 1, img: "http://mat1.gtimg.com/autoguangzhou/lonz/images/watch1.png", h: 310}, {type: 1, img: "http://mat1.gtimg.com/autoguangzhou/lonz/images/watch2.png", h: 310}, {
            type: 1,
            img: "http://mat1.gtimg.com/autoguangzhou/lonz/images/watch3.png",
            h: 310
        }, {type: 0, img: "http://mat1.gtimg.com/autoguangzhou/lonz/images/car1.png", h: 180}, {type: 0, img: "http://mat1.gtimg.com/autoguangzhou/lonz/images/car2.png", h: 180}],
        b = Math.floor(Math.random() * c.length), c = c[b], a = new createjs.Bitmap(c.img);
    a.type = c.type;
    a.h = c.h;
    a.y = -200;
    stage.addChild(a);
    var d = [100, 275, 450], e = [30, 210, 390], b = Math.floor(Math.random() * d.length);
    a.roadIndex = b;
    a.x = 0 == c.type ? d[b] : e[b];
    propArr.push(a)
}

function addScore(c) {
    score += c;
    $(".label2").html(score);
    $(".result .sc").html(score);
    var b = new createjs.Bitmap("http://mat1.gtimg.com/autoguangzhou/lonz/images/tips.png");
    b.x = p_car.x - 30;
    b.y = p_car.y - 100;
    TweenLite.to(b, .4, {
        alpha: 0, y: b.y - 100, delay: .4, onComplete: function () {
            stage.removeChild(b)
        }
    });
    stage.addChild(b)
}

function s() {
    $(".wrapper .logo").fadeOut();
    $(".wrapper .intro").fadeOut();
    startGame()
}

function l() {
    0 < roadID && roadID--;
    TweenLite.to(p_car, .5, {x: carSpace[roadID]});
    setTimeout(function () {
        p_car.currRoadId = roadID
    }, 100)
}

function r() {
    2 > roadID && roadID++;
    TweenLite.to(p_car, .5, {x: carSpace[roadID]});
    setTimeout(function () {
        p_car.currRoadId = roadID
    }, 100)
};