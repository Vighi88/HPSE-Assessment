! function t(e, i, a) {
    function s(n, r) {
        if (!i[n]) {
            if (!e[n]) {
                var h = "function" == typeof require && require;
                if (!r && h) return h(n, !0);
                if (o) return o(n, !0);
                var l = new Error("Cannot find module '" + n + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var c = i[n] = {
                exports: {}
            };
            e[n][0].call(c.exports, function(t) {
                var i = e[n][1][t];
                return s(i ? i : t)
            }, c, c.exports, t, e, i, a)
        }
        return i[n].exports
    }
    for (var o = "function" == typeof require && require, n = 0; n < a.length; n++) s(a[n]);
    return s
}({
    1: [function(t, e, i) {}, {}],
    2: [function(t, e, i) {
        function a(t) {
            var e, i, a, s = t[0] / 255,
                o = t[1] / 255,
                n = t[2] / 255,
                r = Math.min(s, o, n),
                h = Math.max(s, o, n),
                l = h - r;
            return h == r ? e = 0 : s == h ? e = (o - n) / l : o == h ? e = 2 + (n - s) / l : n == h && (e = 4 + (s - o) / l), e = Math.min(60 * e, 360), 0 > e && (e += 360), a = (r + h) / 2, i = h == r ? 0 : .5 >= a ? l / (h + r) : l / (2 - h - r), [e, 100 * i, 100 * a]
        }

        function s(t) {
            var e, i, a, s = t[0],
                o = t[1],
                n = t[2],
                r = Math.min(s, o, n),
                h = Math.max(s, o, n),
                l = h - r;
            return i = 0 == h ? 0 : l / h * 1e3 / 10, h == r ? e = 0 : s == h ? e = (o - n) / l : o == h ? e = 2 + (n - s) / l : n == h && (e = 4 + (s - o) / l), e = Math.min(60 * e, 360), 0 > e && (e += 360), a = h / 255 * 1e3 / 10, [e, i, a]
        }

        function o(t) {
            var e = t[0],
                i = t[1],
                s = t[2],
                o = a(t)[0],
                n = 1 / 255 * Math.min(e, Math.min(i, s)),
                s = 1 - 1 / 255 * Math.max(e, Math.max(i, s));
            return [o, 100 * n, 100 * s]
        }

        function n(t) {
            var e, i, a, s, o = t[0] / 255,
                n = t[1] / 255,
                r = t[2] / 255;
            return s = Math.min(1 - o, 1 - n, 1 - r), e = (1 - o - s) / (1 - s) || 0, i = (1 - n - s) / (1 - s) || 0, a = (1 - r - s) / (1 - s) || 0, [100 * e, 100 * i, 100 * a, 100 * s]
        }

        function h(t) {
            return G[JSON.stringify(t)]
        }

        function l(t) {
            var e = t[0] / 255,
                i = t[1] / 255,
                a = t[2] / 255;
            e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92, a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92;
            var s = .4124 * e + .3576 * i + .1805 * a,
                o = .2126 * e + .7152 * i + .0722 * a,
                n = .0193 * e + .1192 * i + .9505 * a;
            return [100 * s, 100 * o, 100 * n]
        }

        function c(t) {
            var e, i, a, s = l(t),
                o = s[0],
                n = s[1],
                r = s[2];
            return o /= 95.047, n /= 100, r /= 108.883, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, e = 116 * n - 16, i = 500 * (o - n), a = 200 * (n - r), [e, i, a]
        }

        function d(t) {
            return W(c(t))
        }

        function u(t) {
            var e, i, a, s, o, n = t[0] / 360,
                r = t[1] / 100,
                h = t[2] / 100;
            if (0 == r) return o = 255 * h, [o, o, o];
            i = .5 > h ? h * (1 + r) : h + r - h * r, e = 2 * h - i, s = [0, 0, 0];
            for (var l = 0; 3 > l; l++) a = n + 1 / 3 * -(l - 1), 0 > a && a++, a > 1 && a--, o = 1 > 6 * a ? e + 6 * (i - e) * a : 1 > 2 * a ? i : 2 > 3 * a ? e + (i - e) * (2 / 3 - a) * 6 : e, s[l] = 255 * o;
            return s
        }

        function f(t) {
            var e, i, a = t[0],
                s = t[1] / 100,
                o = t[2] / 100;
            return 0 === o ? [0, 0, 0] : (o *= 2, s *= 1 >= o ? o : 2 - o, i = (o + s) / 2, e = 2 * s / (o + s), [a, 100 * e, 100 * i])
        }

        function m(t) {
            return o(u(t))
        }

        function p(t) {
            return n(u(t))
        }

        function x(t) {
            return h(u(t))
        }

        function v(t) {
            var e = t[0] / 60,
                i = t[1] / 100,
                a = t[2] / 100,
                s = Math.floor(e) % 6,
                o = e - Math.floor(e),
                n = 255 * a * (1 - i),
                r = 255 * a * (1 - i * o),
                h = 255 * a * (1 - i * (1 - o)),
                a = 255 * a;
            switch (s) {
                case 0:
                    return [a, h, n];
                case 1:
                    return [r, a, n];
                case 2:
                    return [n, a, h];
                case 3:
                    return [n, r, a];
                case 4:
                    return [h, n, a];
                case 5:
                    return [a, n, r]
            }
        }

        function y(t) {
            var e, i, a = t[0],
                s = t[1] / 100,
                o = t[2] / 100;
            return i = (2 - s) * o, e = s * o, e /= 1 >= i ? i : 2 - i, e = e || 0, i /= 2, [a, 100 * e, 100 * i]
        }

        function k(t) {
            return o(v(t))
        }

        function D(t) {
            return n(v(t))
        }

        function S(t) {
            return h(v(t))
        }

        function C(t) {
            var e, i, a, s, o = t[0] / 360,
                n = t[1] / 100,
                h = t[2] / 100,
                l = n + h;
            switch (l > 1 && (n /= l, h /= l), e = Math.floor(6 * o), i = 1 - h, a = 6 * o - e, 0 != (1 & e) && (a = 1 - a), s = n + a * (i - n), e) {
                default:
                    case 6:
                    case 0:
                    r = i,
                g = s,
                b = n;
                break;
                case 1:
                        r = s,
                    g = i,
                    b = n;
                    break;
                case 2:
                        r = n,
                    g = i,
                    b = s;
                    break;
                case 3:
                        r = n,
                    g = s,
                    b = i;
                    break;
                case 4:
                        r = s,
                    g = n,
                    b = i;
                    break;
                case 5:
                        r = i,
                    g = n,
                    b = s
            }
            return [255 * r, 255 * g, 255 * b]
        }

        function w(t) {
            return a(C(t))
        }

        function _(t) {
            return s(C(t))
        }

        function A(t) {
            return n(C(t))
        }

        function M(t) {
            return h(C(t))
        }

        function I(t) {
            var e, i, a, s = t[0] / 100,
                o = t[1] / 100,
                n = t[2] / 100,
                r = t[3] / 100;
            return e = 1 - Math.min(1, s * (1 - r) + r), i = 1 - Math.min(1, o * (1 - r) + r), a = 1 - Math.min(1, n * (1 - r) + r), [255 * e, 255 * i, 255 * a]
        }

        function F(t) {
            return a(I(t))
        }

        function P(t) {
            return s(I(t))
        }

        function T(t) {
            return o(I(t))
        }

        function V(t) {
            return h(I(t))
        }

        function R(t) {
            var e, i, a, s = t[0] / 100,
                o = t[1] / 100,
                n = t[2] / 100;
            return e = 3.2406 * s + -1.5372 * o + n * -.4986, i = s * -.9689 + 1.8758 * o + .0415 * n, a = .0557 * s + o * -.204 + 1.057 * n, e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e = 12.92 * e, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i = 12.92 * i, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : a = 12.92 * a, e = Math.min(Math.max(0, e), 1), i = Math.min(Math.max(0, i), 1), a = Math.min(Math.max(0, a), 1), [255 * e, 255 * i, 255 * a]
        }

        function O(t) {
            var e, i, a, s = t[0],
                o = t[1],
                n = t[2];
            return s /= 95.047, o /= 100, n /= 108.883, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, e = 116 * o - 16, i = 500 * (s - o), a = 200 * (o - n), [e, i, a]
        }

        function L(t) {
            return W(O(t))
        }

        function z(t) {
            var e, i, a, s, o = t[0],
                n = t[1],
                r = t[2];
            return 8 >= o ? (i = 100 * o / 903.3, s = 7.787 * (i / 100) + 16 / 116) : (i = 100 * Math.pow((o + 16) / 116, 3), s = Math.pow(i / 100, 1 / 3)), e = .008856 >= e / 95.047 ? e = 95.047 * (n / 500 + s - 16 / 116) / 7.787 : 95.047 * Math.pow(n / 500 + s, 3), a = .008859 >= a / 108.883 ? a = 108.883 * (s - r / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(s - r / 200, 3), [e, i, a]
        }

        function W(t) {
            var e, i, a, s = t[0],
                o = t[1],
                n = t[2];
            return e = Math.atan2(n, o), i = 360 * e / 2 / Math.PI, 0 > i && (i += 360), a = Math.sqrt(o * o + n * n), [s, a, i]
        }

        function B(t) {
            return R(z(t))
        }

        function N(t) {
            var e, i, a, s = t[0],
                o = t[1],
                n = t[2];
            return a = n / 360 * 2 * Math.PI, e = o * Math.cos(a), i = o * Math.sin(a), [s, e, i]
        }

        function H(t) {
            return z(N(t))
        }

        function E(t) {
            return B(N(t))
        }

        function U(t) {
            return X[t]
        }

        function j(t) {
            return a(U(t))
        }

        function q(t) {
            return s(U(t))
        }

        function Y(t) {
            return o(U(t))
        }

        function Q(t) {
            return n(U(t))
        }

        function J(t) {
            return c(U(t))
        }

        function Z(t) {
            return l(U(t))
        }
        e.exports = {
            rgb2hsl: a,
            rgb2hsv: s,
            rgb2hwb: o,
            rgb2cmyk: n,
            rgb2keyword: h,
            rgb2xyz: l,
            rgb2lab: c,
            rgb2lch: d,
            hsl2rgb: u,
            hsl2hsv: f,
            hsl2hwb: m,
            hsl2cmyk: p,
            hsl2keyword: x,
            hsv2rgb: v,
            hsv2hsl: y,
            hsv2hwb: k,
            hsv2cmyk: D,
            hsv2keyword: S,
            hwb2rgb: C,
            hwb2hsl: w,
            hwb2hsv: _,
            hwb2cmyk: A,
            hwb2keyword: M,
            cmyk2rgb: I,
            cmyk2hsl: F,
            cmyk2hsv: P,
            cmyk2hwb: T,
            cmyk2keyword: V,
            keyword2rgb: U,
            keyword2hsl: j,
            keyword2hsv: q,
            keyword2hwb: Y,
            keyword2cmyk: Q,
            keyword2lab: J,
            keyword2xyz: Z,
            xyz2rgb: R,
            xyz2lab: O,
            xyz2lch: L,
            lab2xyz: z,
            lab2rgb: B,
            lab2lch: W,
            lch2lab: N,
            lch2xyz: H,
            lch2rgb: E
        };
        var X = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            },
            G = {};
        for (var $ in X) G[JSON.stringify(X[$])] = $
    }, {}],
    3: [function(t, e, i) {
        var a = t("./conversions"),
            s = function() {
                return new l
            };
        for (var o in a) {
            s[o + "Raw"] = function(t) {
                return function(e) {
                    return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), a[t](e)
                }
            }(o);
            var n = /(\w+)2(\w+)/.exec(o),
                r = n[1],
                h = n[2];
            s[r] = s[r] || {}, s[r][h] = s[o] = function(t) {
                return function(e) {
                    "number" == typeof e && (e = Array.prototype.slice.call(arguments));
                    var i = a[t](e);
                    if ("string" == typeof i || void 0 === i) return i;
                    for (var s = 0; s < i.length; s++) i[s] = Math.round(i[s]);
                    return i
                }
            }(o)
        }
        var l = function() {
            this.convs = {}
        };
        l.prototype.routeSpace = function(t, e) {
            var i = e[0];
            return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i))
        }, l.prototype.setValues = function(t, e) {
            return this.space = t, this.convs = {}, this.convs[t] = e, this
        }, l.prototype.getValues = function(t) {
            var e = this.convs[t];
            if (!e) {
                var i = this.space,
                    a = this.convs[i];
                e = s[i][t](a), this.convs[t] = e
            }
            return e
        }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(t) {
            l.prototype[t] = function(e) {
                return this.routeSpace(t, arguments)
            }
        }), e.exports = s
    }, {
        "./conversions": 2
    }],
    4: [function(t, e, i) {
        function a(t) {
            if (t) {
                var e = /^#([a-fA-F0-9]{3})$/,
                    i = /^#([a-fA-F0-9]{6})$/,
                    a = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
                    s = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
                    o = /(\w+)/,
                    n = [0, 0, 0],
                    r = 1,
                    h = t.match(e);
                if (h) {
                    h = h[1];
                    for (var l = 0; l < n.length; l++) n[l] = parseInt(h[l] + h[l], 16)
                } else if (h = t.match(i)) {
                    h = h[1];
                    for (var l = 0; l < n.length; l++) n[l] = parseInt(h.slice(2 * l, 2 * l + 2), 16)
                } else if (h = t.match(a)) {
                    for (var l = 0; l < n.length; l++) n[l] = parseInt(h[l + 1]);
                    r = parseFloat(h[4])
                } else if (h = t.match(s)) {
                    for (var l = 0; l < n.length; l++) n[l] = Math.round(2.55 * parseFloat(h[l + 1]));
                    r = parseFloat(h[4])
                } else if (h = t.match(o)) {
                    if ("transparent" == h[1]) return [0, 0, 0, 0];
                    if (n = y[h[1]], !n) return
                }
                for (var l = 0; l < n.length; l++) n[l] = x(n[l], 0, 255);
                return r = r || 0 == r ? x(r, 0, 1) : 1, n[3] = r, n
            }
        }

        function s(t) {
            if (t) {
                var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                    i = t.match(e);
                if (i) {
                    var a = parseFloat(i[4]),
                        s = x(parseInt(i[1]), 0, 360),
                        o = x(parseFloat(i[2]), 0, 100),
                        n = x(parseFloat(i[3]), 0, 100),
                        r = x(isNaN(a) ? 1 : a, 0, 1);
                    return [s, o, n, r]
                }
            }
        }

        function o(t) {
            if (t) {
                var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                    i = t.match(e);
                if (i) {
                    var a = parseFloat(i[4]),
                        s = x(parseInt(i[1]), 0, 360),
                        o = x(parseFloat(i[2]), 0, 100),
                        n = x(parseFloat(i[3]), 0, 100),
                        r = x(isNaN(a) ? 1 : a, 0, 1);
                    return [s, o, n, r]
                }
            }
        }

        function n(t) {
            var e = a(t);
            return e && e.slice(0, 3)
        }

        function r(t) {
            var e = s(t);
            return e && e.slice(0, 3)
        }

        function h(t) {
            var e = a(t);
            return e ? e[3] : (e = s(t)) ? e[3] : (e = o(t)) ? e[3] : void 0
        }

        function l(t) {
            return "#" + v(t[0]) + v(t[1]) + v(t[2])
        }

        function c(t, e) {
            return 1 > e || t[3] && t[3] < 1 ? d(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
        }

        function d(t, e) {
            return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
        }

        function u(t, e) {
            if (1 > e || t[3] && t[3] < 1) return g(t, e);
            var i = Math.round(t[0] / 255 * 100),
                a = Math.round(t[1] / 255 * 100),
                s = Math.round(t[2] / 255 * 100);
            return "rgb(" + i + "%, " + a + "%, " + s + "%)"
        }

        function g(t, e) {
            var i = Math.round(t[0] / 255 * 100),
                a = Math.round(t[1] / 255 * 100),
                s = Math.round(t[2] / 255 * 100);
            return "rgba(" + i + "%, " + a + "%, " + s + "%, " + (e || t[3] || 1) + ")"
        }

        function f(t, e) {
            return 1 > e || t[3] && t[3] < 1 ? m(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
        }

        function m(t, e) {
            return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
        }

        function p(t, e) {
            return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
        }

        function b(t) {
            return k[t.slice(0, 3)]
        }

        function x(t, e, i) {
            return Math.min(Math.max(e, t), i)
        }

        function v(t) {
            var e = t.toString(16).toUpperCase();
            return e.length < 2 ? "0" + e : e
        }
        var y = t("color-name");
        e.exports = {
            getRgba: a,
            getHsla: s,
            getRgb: n,
            getHsl: r,
            getHwb: o,
            getAlpha: h,
            hexString: l,
            rgbString: c,
            rgbaString: d,
            percentString: u,
            percentaString: g,
            hslString: f,
            hslaString: m,
            hwbString: p,
            keyword: b
        };
        var k = {};
        for (var D in y) k[y[D]] = D
    }, {
        "color-name": 5
    }],
    5: [function(t, e, i) {
        e.exports = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        }
    }, {}],
    6: [function(t, e, i) {
        var a = t("color-convert"),
            s = t("color-string"),
            o = function(t) {
                if (t instanceof o) return t;
                if (!(this instanceof o)) return new o(t);
                if (this.values = {
                        rgb: [0, 0, 0],
                        hsl: [0, 0, 0],
                        hsv: [0, 0, 0],
                        hwb: [0, 0, 0],
                        cmyk: [0, 0, 0, 0],
                        alpha: 1
                    }, "string" == typeof t) {
                    var e = s.getRgba(t);
                    if (e) this.setValues("rgb", e);
                    else if (e = s.getHsla(t)) this.setValues("hsl", e);
                    else {
                        if (!(e = s.getHwb(t))) throw new Error('Unable to parse color from string "' + t + '"');
                        this.setValues("hwb", e)
                    }
                } else if ("object" == typeof t) {
                    var e = t;
                    if (void 0 !== e.r || void 0 !== e.red) this.setValues("rgb", e);
                    else if (void 0 !== e.l || void 0 !== e.lightness) this.setValues("hsl", e);
                    else if (void 0 !== e.v || void 0 !== e.value) this.setValues("hsv", e);
                    else if (void 0 !== e.w || void 0 !== e.whiteness) this.setValues("hwb", e);
                    else {
                        if (void 0 === e.c && void 0 === e.cyan) throw new Error("Unable to parse color from object " + JSON.stringify(t));
                        this.setValues("cmyk", e)
                    }
                }
            };
        o.prototype = {
            rgb: function(t) {
                return this.setSpace("rgb", arguments)
            },
            hsl: function(t) {
                return this.setSpace("hsl", arguments)
            },
            hsv: function(t) {
                return this.setSpace("hsv", arguments)
            },
            hwb: function(t) {
                return this.setSpace("hwb", arguments)
            },
            cmyk: function(t) {
                return this.setSpace("cmyk", arguments)
            },
            rgbArray: function() {
                return this.values.rgb
            },
            hslArray: function() {
                return this.values.hsl
            },
            hsvArray: function() {
                return this.values.hsv
            },
            hwbArray: function() {
                return 1 !== this.values.alpha ? this.values.hwb.concat([this.values.alpha]) : this.values.hwb
            },
            cmykArray: function() {
                return this.values.cmyk
            },
            rgbaArray: function() {
                var t = this.values.rgb;
                return t.concat([this.values.alpha])
            },
            hslaArray: function() {
                var t = this.values.hsl;
                return t.concat([this.values.alpha])
            },
            alpha: function(t) {
                return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
            },
            red: function(t) {
                return this.setChannel("rgb", 0, t)
            },
            green: function(t) {
                return this.setChannel("rgb", 1, t)
            },
            blue: function(t) {
                return this.setChannel("rgb", 2, t)
            },
            hue: function(t) {
                return this.setChannel("hsl", 0, t)
            },
            saturation: function(t) {
                return this.setChannel("hsl", 1, t)
            },
            lightness: function(t) {
                return this.setChannel("hsl", 2, t)
            },
            saturationv: function(t) {
                return this.setChannel("hsv", 1, t)
            },
            whiteness: function(t) {
                return this.setChannel("hwb", 1, t)
            },
            blackness: function(t) {
                return this.setChannel("hwb", 2, t)
            },
            value: function(t) {
                return this.setChannel("hsv", 2, t)
            },
            cyan: function(t) {
                return this.setChannel("cmyk", 0, t)
            },
            magenta: function(t) {
                return this.setChannel("cmyk", 1, t)
            },
            yellow: function(t) {
                return this.setChannel("cmyk", 2, t)
            },
            black: function(t) {
                return this.setChannel("cmyk", 3, t)
            },
            hexString: function() {
                return s.hexString(this.values.rgb)
            },
            rgbString: function() {
                return s.rgbString(this.values.rgb, this.values.alpha)
            },
            rgbaString: function() {
                return s.rgbaString(this.values.rgb, this.values.alpha)
            },
            percentString: function() {
                return s.percentString(this.values.rgb, this.values.alpha)
            },
            hslString: function() {
                return s.hslString(this.values.hsl, this.values.alpha)
            },
            hslaString: function() {
                return s.hslaString(this.values.hsl, this.values.alpha)
            },
            hwbString: function() {
                return s.hwbString(this.values.hwb, this.values.alpha)
            },
            keyword: function() {
                return s.keyword(this.values.rgb, this.values.alpha)
            },
            rgbNumber: function() {
                return this.values.rgb[0] << 16 | this.values.rgb[1] << 8 | this.values.rgb[2]
            },
            luminosity: function() {
                for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
                    var a = t[i] / 255;
                    e[i] = .03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)
                }
                return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
            },
            contrast: function(t) {
                var e = this.luminosity(),
                    i = t.luminosity();
                return e > i ? (e + .05) / (i + .05) : (i + .05) / (e + .05)
            },
            level: function(t) {
                var e = this.contrast(t);
                return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
            },
            dark: function() {
                var t = this.values.rgb,
                    e = (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3;
                return 128 > e
            },
            light: function() {
                return !this.dark()
            },
            negate: function() {
                for (var t = [], e = 0; 3 > e; e++) t[e] = 255 - this.values.rgb[e];
                return this.setValues("rgb", t), this
            },
            lighten: function(t) {
                return this.values.hsl[2] += this.values.hsl[2] * t, this.setValues("hsl", this.values.hsl), this
            },
            darken: function(t) {
                return this.values.hsl[2] -= this.values.hsl[2] * t, this.setValues("hsl", this.values.hsl), this
            },
            saturate: function(t) {
                return this.values.hsl[1] += this.values.hsl[1] * t, this.setValues("hsl", this.values.hsl), this
            },
            desaturate: function(t) {
                return this.values.hsl[1] -= this.values.hsl[1] * t, this.setValues("hsl", this.values.hsl), this
            },
            whiten: function(t) {
                return this.values.hwb[1] += this.values.hwb[1] * t, this.setValues("hwb", this.values.hwb), this
            },
            blacken: function(t) {
                return this.values.hwb[2] += this.values.hwb[2] * t, this.setValues("hwb", this.values.hwb), this
            },
            greyscale: function() {
                var t = this.values.rgb,
                    e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                return this.setValues("rgb", [e, e, e]), this
            },
            clearer: function(t) {
                return this.setValues("alpha", this.values.alpha - this.values.alpha * t), this
            },
            opaquer: function(t) {
                return this.setValues("alpha", this.values.alpha + this.values.alpha * t), this
            },
            rotate: function(t) {
                var e = this.values.hsl[0];
                return e = (e + t) % 360, e = 0 > e ? 360 + e : e, this.values.hsl[0] = e, this.setValues("hsl", this.values.hsl), this
            },
            mix: function(t, e) {
                e = 1 - (null == e ? .5 : e);
                for (var i = 2 * e - 1, a = this.alpha() - t.alpha(), s = ((i * a == -1 ? i : (i + a) / (1 + i * a)) + 1) / 2, o = 1 - s, n = this.rgbArray(), r = t.rgbArray(), h = 0; h < n.length; h++) n[h] = n[h] * s + r[h] * o;
                this.setValues("rgb", n);
                var l = this.alpha() * e + t.alpha() * (1 - e);
                return this.setValues("alpha", l), this
            },
            toJSON: function() {
                return this.rgb()
            },
            clone: function() {
                return new o(this.rgb())
            }
        }, o.prototype.getValues = function(t) {
            for (var e = {}, i = 0; i < t.length; i++) e[t.charAt(i)] = this.values[t][i];
            return 1 != this.values.alpha && (e.a = this.values.alpha), e
        }, o.prototype.setValues = function(t, e) {
            var i = {
                    rgb: ["red", "green", "blue"],
                    hsl: ["hue", "saturation", "lightness"],
                    hsv: ["hue", "saturation", "value"],
                    hwb: ["hue", "whiteness", "blackness"],
                    cmyk: ["cyan", "magenta", "yellow", "black"]
                },
                s = {
                    rgb: [255, 255, 255],
                    hsl: [360, 100, 100],
                    hsv: [360, 100, 100],
                    hwb: [360, 100, 100],
                    cmyk: [100, 100, 100, 100]
                },
                o = 1;
            if ("alpha" == t) o = e;
            else if (e.length) this.values[t] = e.slice(0, t.length), o = e[t.length];
            else if (void 0 !== e[t.charAt(0)]) {
                for (var n = 0; n < t.length; n++) this.values[t][n] = e[t.charAt(n)];
                o = e.a
            } else if (void 0 !== e[i[t][0]]) {
                for (var r = i[t], n = 0; n < t.length; n++) this.values[t][n] = e[r[n]];
                o = e.alpha
            }
            if (this.values.alpha = Math.max(0, Math.min(1, void 0 !== o ? o : this.values.alpha)), "alpha" != t) {
                for (var n = 0; n < t.length; n++) {
                    var h = Math.max(0, Math.min(s[t][n], this.values[t][n]));
                    this.values[t][n] = Math.round(h)
                }
                for (var l in i) {
                    l != t && (this.values[l] = a[t][l](this.values[t]));
                    for (var n = 0; n < l.length; n++) {
                        var h = Math.max(0, Math.min(s[l][n], this.values[l][n]));
                        this.values[l][n] = Math.round(h)
                    }
                }
                return !0
            }
        }, o.prototype.setSpace = function(t, e) {
            var i = e[0];
            return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this)
        }, o.prototype.setChannel = function(t, e, i) {
            return void 0 === i ? this.values[t][e] : (this.values[t][e] = i, this.setValues(t, this.values[t]), this)
        }, window.Color = e.exports = o
    }, {
        "color-convert": 3,
        "color-string": 4
    }],
    7: [function(t, e, i) {
        /*!
         * Chart.js
         * http://chartjs.org/
         * Version: 2.0.2
         *
         * Copyright 2015 Nick Downie
         * Released under the MIT license
         * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
         */
        var a = t("./core/core.js")();
        t("./core/core.helpers")(a), t("./core/core.element")(a), t("./core/core.animation")(a), t("./core/core.controller")(a), t("./core/core.datasetController")(a), t("./core/core.layoutService")(a), t("./core/core.legend")(a), t("./core/core.scale")(a), t("./core/core.scaleService")(a), t("./core/core.title")(a), t("./core/core.tooltip")(a), t("./controllers/controller.bar")(a), t("./controllers/controller.bubble")(a), t("./controllers/controller.doughnut")(a), t("./controllers/controller.line")(a), t("./controllers/controller.polarArea")(a), t("./controllers/controller.radar")(a), t("./scales/scale.category")(a), t("./scales/scale.linear")(a), t("./scales/scale.logarithmic")(a), t("./scales/scale.radialLinear")(a), t("./scales/scale.time")(a), t("./elements/element.arc")(a), t("./elements/element.line")(a), t("./elements/element.point")(a), t("./elements/element.rectangle")(a), t("./charts/Chart.Bar")(a), t("./charts/Chart.Bubble")(a), t("./charts/Chart.Doughnut")(a), t("./charts/Chart.Line")(a), t("./charts/Chart.PolarArea")(a), t("./charts/Chart.Radar")(a), t("./charts/Chart.Scatter")(a), window.Chart = e.exports = a
    }, {
        "./charts/Chart.Bar": 8,
        "./charts/Chart.Bubble": 9,
        "./charts/Chart.Doughnut": 10,
        "./charts/Chart.Line": 11,
        "./charts/Chart.PolarArea": 12,
        "./charts/Chart.Radar": 13,
        "./charts/Chart.Scatter": 14,
        "./controllers/controller.bar": 15,
        "./controllers/controller.bubble": 16,
        "./controllers/controller.doughnut": 17,
        "./controllers/controller.line": 18,
        "./controllers/controller.polarArea": 19,
        "./controllers/controller.radar": 20,
        "./core/core.animation": 21,
        "./core/core.controller": 22,
        "./core/core.datasetController": 23,
        "./core/core.element": 24,
        "./core/core.helpers": 25,
        "./core/core.js": 26,
        "./core/core.layoutService": 27,
        "./core/core.legend": 28,
        "./core/core.scale": 29,
        "./core/core.scaleService": 30,
        "./core/core.title": 31,
        "./core/core.tooltip": 32,
        "./elements/element.arc": 33,
        "./elements/element.line": 34,
        "./elements/element.point": 35,
        "./elements/element.rectangle": 36,
        "./scales/scale.category": 37,
        "./scales/scale.linear": 38,
        "./scales/scale.logarithmic": 39,
        "./scales/scale.radialLinear": 40,
        "./scales/scale.time": 41
    }],
    8: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            t.Bar = function(e, i) {
                return i.type = "bar", new t(e, i)
            }
        }
    }, {}],
    9: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            t.Bubble = function(e, i) {
                return i.type = "bubble", new t(e, i)
            }
        }
    }, {}],
    10: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            t.Doughnut = function(e, i) {
                return i.type = "doughnut", new t(e, i)
            }
        }
    }, {}],
    11: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            t.Line = function(e, i) {
                return i.type = "line", new t(e, i)
            }
        }
    }, {}],
    12: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            t.PolarArea = function(e, i) {
                return i.type = "polarArea", new t(e, i)
            }
        }
    }, {}],
    13: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers,
                i = {
                    aspectRatio: 1
                };
            t.Radar = function(a, s) {
                return s.options = e.configMerge(i, s.options), s.type = "radar", new t(a, s)
            }
        }
    }, {}],
    14: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom",
                        id: "x-axis-1"
                    }],
                    yAxes: [{
                        type: "linear",
                        position: "left",
                        id: "y-axis-1"
                    }]
                },
                tooltips: {
                    callbacks: {
                        title: function(t, e) {
                            return ""
                        },
                        label: function(t, e) {
                            return "(" + t.xLabel + ", " + t.yLabel + ")"
                        }
                    }
                }
            };
            t.defaults.scatter = e, t.controllers.scatter = t.controllers.line, t.Scatter = function(e, i) {
                return i.type = "scatter", new t(e, i)
            }
        }
    }, {}],
    15: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.bar = {
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        gridLines: {
                            offsetGridLines: !0
                        }
                    }],
                    yAxes: [{
                        type: "linear"
                    }]
                }
            }, t.controllers.bar = t.DatasetController.extend({
                initialize: function(e, i) {
                    t.DatasetController.prototype.initialize.call(this, e, i), this.getDataset().bar = !0
                },
                getBarCount: function() {
                    var t = 0;
                    return e.each(this.chart.data.datasets, function(i) {
                        e.isDatasetVisible(i) && i.bar && ++t
                    }), t
                },
                addElements: function() {
                    this.getDataset().metaData = this.getDataset().metaData || [], e.each(this.getDataset().data, function(e, i) {
                        this.getDataset().metaData[i] = this.getDataset().metaData[i] || new t.elements.Rectangle({
                            _chart: this.chart.chart,
                            _datasetIndex: this.index,
                            _index: i
                        })
                    }, this)
                },
                addElementAndReset: function(e) {
                    this.getDataset().metaData = this.getDataset().metaData || [];
                    var i = new t.elements.Rectangle({
                            _chart: this.chart.chart,
                            _datasetIndex: this.index,
                            _index: e
                        }),
                        a = this.getBarCount();
                    this.updateElement(i, e, !0, a), this.getDataset().metaData.splice(e, 0, i)
                },
                update: function(t) {
                    var i = this.getBarCount();
                    e.each(this.getDataset().metaData, function(e, a) {
                        this.updateElement(e, a, t, i)
                    }, this)
                },
                updateElement: function(t, i, a, s) {
                    var o, n = this.getScaleForId(this.getDataset().xAxisID),
                        r = this.getScaleForId(this.getDataset().yAxisID);
                    o = r.min < 0 && r.max < 0 ? r.getPixelForValue(r.max) : r.min > 0 && r.max > 0 ? r.getPixelForValue(r.min) : r.getPixelForValue(0), e.extend(t, {
                        _chart: this.chart.chart,
                        _xScale: n,
                        _yScale: r,
                        _datasetIndex: this.index,
                        _index: i,
                        _model: {
                            x: this.calculateBarX(i, this.index),
                            y: a ? o : this.calculateBarY(i, this.index),
                            label: this.chart.data.labels[i],
                            datasetLabel: this.getDataset().label,
                            base: a ? o : this.calculateBarBase(this.index, i),
                            width: this.calculateBarWidth(s),
                            backgroundColor: t.custom && t.custom.backgroundColor ? t.custom.backgroundColor : e.getValueAtIndexOrDefault(this.getDataset().backgroundColor, i, this.chart.options.elements.rectangle.backgroundColor),
                            borderSkipped: t.custom && t.custom.borderSkipped ? t.custom.borderSkipped : this.chart.options.elements.rectangle.borderSkipped,
                            borderColor: t.custom && t.custom.borderColor ? t.custom.borderColor : e.getValueAtIndexOrDefault(this.getDataset().borderColor, i, this.chart.options.elements.rectangle.borderColor),
                            borderWidth: t.custom && t.custom.borderWidth ? t.custom.borderWidth : e.getValueAtIndexOrDefault(this.getDataset().borderWidth, i, this.chart.options.elements.rectangle.borderWidth)
                        }
                    }), t.pivot()
                },
                calculateBarBase: function(t, i) {
                    var a = (this.getScaleForId(this.getDataset().xAxisID), this.getScaleForId(this.getDataset().yAxisID)),
                        s = 0;
                    if (a.options.stacked) {
                        var o = this.chart.data.datasets[t].data[i];
                        if (0 > o)
                            for (var n = 0; t > n; n++) {
                                var r = this.chart.data.datasets[n];
                                e.isDatasetVisible(r) && r.yAxisID === a.id && r.bar && (s += r.data[i] < 0 ? r.data[i] : 0)
                            } else
                                for (var h = 0; t > h; h++) {
                                    var l = this.chart.data.datasets[h];
                                    e.isDatasetVisible(l) && l.yAxisID === a.id && l.bar && (s += l.data[i] > 0 ? l.data[i] : 0)
                                }
                        return a.getPixelForValue(s)
                    }
                    return s = a.getPixelForValue(a.min), a.beginAtZero || a.min <= 0 && a.max >= 0 || a.min >= 0 && a.max <= 0 ? s = a.getPixelForValue(0, 0) : a.min < 0 && a.max < 0 && (s = a.getPixelForValue(a.max)), s
                },
                getRuler: function() {
                    var t = this.getScaleForId(this.getDataset().xAxisID),
                        e = (this.getScaleForId(this.getDataset().yAxisID), this.getBarCount()),
                        i = function() {
                            for (var e = t.getPixelForTick(1) - t.getPixelForTick(0), i = 2; i < this.getDataset().data.length; i++) e = Math.min(t.getPixelForTick(i) - t.getPixelForTick(i - 1), e);
                            return e
                        }.call(this),
                        a = i * t.options.categoryPercentage,
                        s = (i - i * t.options.categoryPercentage) / 2,
                        o = a / e,
                        n = o * t.options.barPercentage,
                        r = o - o * t.options.barPercentage;
                    return {
                        datasetCount: e,
                        tickWidth: i,
                        categoryWidth: a,
                        categorySpacing: s,
                        fullBarWidth: o,
                        barWidth: n,
                        barSpacing: r
                    }
                },
                calculateBarWidth: function() {
                    var t = this.getScaleForId(this.getDataset().xAxisID),
                        e = this.getRuler();
                    return t.options.stacked ? e.categoryWidth : e.barWidth
                },
                getBarIndex: function(t) {
                    for (var i = 0, a = 0; t > a; ++a) e.isDatasetVisible(this.chart.data.datasets[a]) && this.chart.data.datasets[a].bar && ++i;
                    return i
                },
                calculateBarX: function(t, e) {
                    var i = (this.getScaleForId(this.getDataset().yAxisID), this.getScaleForId(this.getDataset().xAxisID)),
                        a = this.getBarIndex(e),
                        s = this.getRuler(),
                        o = i.getPixelForValue(null, t, e, this.chart.isCombo);
                    return o -= this.chart.isCombo ? s.tickWidth / 2 : 0, i.options.stacked ? o + s.categoryWidth / 2 + s.categorySpacing : o + s.barWidth / 2 + s.categorySpacing + s.barWidth * a + s.barSpacing / 2 + s.barSpacing * a
                },
                calculateBarY: function(t, i) {
                    var a = (this.getScaleForId(this.getDataset().xAxisID), this.getScaleForId(this.getDataset().yAxisID)),
                        s = this.getDataset().data[t];
                    if (a.options.stacked) {
                        for (var o = 0, n = 0, r = 0; i > r; r++) {
                            var h = this.chart.data.datasets[r];
                            e.isDatasetVisible(h) && h.bar && h.yAxisID === a.id && (h.data[t] < 0 ? n += h.data[t] || 0 : o += h.data[t] || 0)
                        }
                        return 0 > s ? a.getPixelForValue(n + s) : a.getPixelForValue(o + s)
                    }
                    return a.getPixelForValue(s)
                },
                draw: function(t) {
                    var i = t || 1;
                    e.each(this.getDataset().metaData, function(t, e) {
                        var a = this.getDataset().data[e];
                        null === a || void 0 === a || isNaN(a) || t.transition(i).draw()
                    }, this)
                },
                setHoverStyle: function(t) {
                    var i = this.chart.data.datasets[t._datasetIndex],
                        a = t._index;
                    t._model.backgroundColor = t.custom && t.custom.hoverBackgroundColor ? t.custom.hoverBackgroundColor : e.getValueAtIndexOrDefault(i.hoverBackgroundColor, a, e.color(t._model.backgroundColor).saturate(.5).darken(.1).rgbString()), t._model.borderColor = t.custom && t.custom.hoverBorderColor ? t.custom.hoverBorderColor : e.getValueAtIndexOrDefault(i.hoverBorderColor, a, e.color(t._model.borderColor).saturate(.5).darken(.1).rgbString()), t._model.borderWidth = t.custom && t.custom.hoverBorderWidth ? t.custom.hoverBorderWidth : e.getValueAtIndexOrDefault(i.hoverBorderWidth, a, t._model.borderWidth)
                },
                removeHoverStyle: function(t) {
                    var i = (this.chart.data.datasets[t._datasetIndex], t._index);
                    t._model.backgroundColor = t.custom && t.custom.backgroundColor ? t.custom.backgroundColor : e.getValueAtIndexOrDefault(this.getDataset().backgroundColor, i, this.chart.options.elements.rectangle.backgroundColor), t._model.borderColor = t.custom && t.custom.borderColor ? t.custom.borderColor : e.getValueAtIndexOrDefault(this.getDataset().borderColor, i, this.chart.options.elements.rectangle.borderColor), t._model.borderWidth = t.custom && t.custom.borderWidth ? t.custom.borderWidth : e.getValueAtIndexOrDefault(this.getDataset().borderWidth, i, this.chart.options.elements.rectangle.borderWidth)
                }
            })
        }
    }, {}],
    16: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.bubble = {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        position: "left",
                        id: "y-axis-0"
                    }]
                },
                tooltips: {
                    callbacks: {
                        title: function(t, e) {
                            return ""
                        },
                        label: function(t, e) {
                            var i = e.datasets[t.datasetIndex].label || "",
                                a = e.datasets[t.datasetIndex].data[t.index];
                            return i + ": (" + a.x + ", " + a.y + ", " + a.r + ")"
                        }
                    }
                }
            }, t.controllers.bubble = t.DatasetController.extend({
                addElements: function() {
                    this.getDataset().metaData = this.getDataset().metaData || [], e.each(this.getDataset().data, function(e, i) {
                        this.getDataset().metaData[i] = this.getDataset().metaData[i] || new t.elements.Point({
                            _chart: this.chart.chart,
                            _datasetIndex: this.index,
                            _index: i
                        })
                    }, this)
                },
                addElementAndReset: function(e) {
                    this.getDataset().metaData = this.getDataset().metaData || [];
                    var i = new t.elements.Point({
                        _chart: this.chart.chart,
                        _datasetIndex: this.index,
                        _index: e
                    });
                    this.updateElement(i, e, !0), this.getDataset().metaData.splice(e, 0, i)
                },
                update: function(t) {
                    var i, a = this.getDataset().metaData,
                        s = this.getScaleForId(this.getDataset().yAxisID);
                    this.getScaleForId(this.getDataset().xAxisID);
                    i = s.min < 0 && s.max < 0 ? s.getPixelForValue(s.max) : s.min > 0 && s.max > 0 ? s.getPixelForValue(s.min) : s.getPixelForValue(0), e.each(a, function(e, i) {
                        this.updateElement(e, i, t)
                    }, this)
                },
                updateElement: function(t, i, a) {
                    var s, o = this.getScaleForId(this.getDataset().yAxisID),
                        n = this.getScaleForId(this.getDataset().xAxisID);
                    s = o.min < 0 && o.max < 0 ? o.getPixelForValue(o.max) : o.min > 0 && o.max > 0 ? o.getPixelForValue(o.min) : o.getPixelForValue(0), e.extend(t, {
                        _chart: this.chart.chart,
                        _xScale: n,
                        _yScale: o,
                        _datasetIndex: this.index,
                        _index: i,
                        _model: {
                            x: a ? n.getPixelForDecimal(.5) : n.getPixelForValue(this.getDataset().data[i], i, this.index, this.chart.isCombo),
                            y: a ? s : o.getPixelForValue(this.getDataset().data[i], i, this.index),
                            radius: a ? 0 : t.custom && t.custom.radius ? t.custom.radius : this.getRadius(this.getDataset().data[i]),
                            backgroundColor: t.custom && t.custom.backgroundColor ? t.custom.backgroundColor : e.getValueAtIndexOrDefault(this.getDataset().backgroundColor, i, this.chart.options.elements.point.backgroundColor),
                            borderColor: t.custom && t.custom.borderColor ? t.custom.borderColor : e.getValueAtIndexOrDefault(this.getDataset().borderColor, i, this.chart.options.elements.point.borderColor),
                            borderWidth: t.custom && t.custom.borderWidth ? t.custom.borderWidth : e.getValueAtIndexOrDefault(this.getDataset().borderWidth, i, this.chart.options.elements.point.borderWidth),
                            hitRadius: t.custom && t.custom.hitRadius ? t.custom.hitRadius : e.getValueAtIndexOrDefault(this.getDataset().hitRadius, i, this.chart.options.elements.point.hitRadius)
                        }
                    }), t._model.skip = t.custom && t.custom.skip ? t.custom.skip : isNaN(t._model.x) || isNaN(t._model.y), t.pivot()
                },
                getRadius: function(t) {
                    return t.r || this.chart.options.elements.point.radius
                },
                draw: function(t) {
                    var i = t || 1;
                    e.each(this.getDataset().metaData, function(t, e) {
                        t.transition(i), t.draw()
                    })
                },
                setHoverStyle: function(t) {
                    var i = this.chart.data.datasets[t._datasetIndex],
                        a = t._index;
                    t._model.radius = t.custom && t.custom.hoverRadius ? t.custom.hoverRadius : e.getValueAtIndexOrDefault(i.hoverRadius, a, this.chart.options.elements.point.hoverRadius) + this.getRadius(this.getDataset().data[t._index]), t._model.backgroundColor = t.custom && t.custom.hoverBackgroundColor ? t.custom.hoverBackgroundColor : e.getValueAtIndexOrDefault(i.hoverBackgroundColor, a, e.color(t._model.backgroundColor).saturate(.5).darken(.1).rgbString()), t._model.borderColor = t.custom && t.custom.hoverBorderColor ? t.custom.hoverBorderColor : e.getValueAtIndexOrDefault(i.hoverBorderColor, a, e.color(t._model.borderColor).saturate(.5).darken(.1).rgbString()), t._model.borderWidth = t.custom && t.custom.hoverBorderWidth ? t.custom.hoverBorderWidth : e.getValueAtIndexOrDefault(i.hoverBorderWidth, a, t._model.borderWidth)
                },
                removeHoverStyle: function(t) {
                    var i = (this.chart.data.datasets[t._datasetIndex], t._index);
                    t._model.radius = t.custom && t.custom.radius ? t.custom.radius : this.getRadius(this.getDataset().data[t._index]), t._model.backgroundColor = t.custom && t.custom.backgroundColor ? t.custom.backgroundColor : e.getValueAtIndexOrDefault(this.getDataset().backgroundColor, i, this.chart.options.elements.point.backgroundColor), t._model.borderColor = t.custom && t.custom.borderColor ? t.custom.borderColor : e.getValueAtIndexOrDefault(this.getDataset().borderColor, i, this.chart.options.elements.point.borderColor), t._model.borderWidth = t.custom && t.custom.borderWidth ? t.custom.borderWidth : e.getValueAtIndexOrDefault(this.getDataset().borderWidth, i, this.chart.options.elements.point.borderWidth)
                }
            })
        }
    }, {}],
    17: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.doughnut = {
                animation: {
                    animateRotate: !0,
                    animateScale: !1
                },
                aspectRatio: 1,
                hover: {
                    mode: "single"
                },
                legendCallback: function(t) {
                    var e = [];
                    if (e.push('<ul class="' + t.id + '-legend">'), t.data.datasets.length)
                        for (var i = 0; i < t.data.datasets[0].data.length; ++i) e.push('<li><span style="background-color:' + t.data.datasets[0].backgroundColor[i] + '">'), t.data.labels[i] && e.push(t.data.labels[i]), e.push("</span></li>");
                    return e.push("</ul>"), e.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function(t) {
                            return t.labels.length && t.datasets.length ? t.labels.map(function(e, i) {
                                return {
                                    text: e,
                                    fillStyle: t.datasets[0].backgroundColor[i],
                                    hidden: isNaN(t.datasets[0].data[i]),
                                    index: i
                                }
                            }) : []
                        }
                    },
                    onClick: function(t, i) {
                        e.each(this.chart.data.datasets, function(t) {
                            t.metaHiddenData = t.metaHiddenData || [];
                            var e = i.index;
                            isNaN(t.data[e]) ? isNaN(t.metaHiddenData[e]) || (t.data[e] = t.metaHiddenData[e]) : (t.metaHiddenData[e] = t.data[e], t.data[e] = NaN)
                        }), this.chart.update()
                    }
                },
                cutoutPercentage: 50,
                rotation: Math.PI * -.5,
                circumference: 2 * Math.PI,
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t, e) {
                            return e.labels[t.index] + ": " + e.datasets[t.datasetIndex].data[t.index]
                        }
                    }
                }
            }, t.defaults.pie = e.clone(t.defaults.doughnut), e.extend(t.defaults.pie, {
                cutoutPercentage: 0
            }), t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
                linkScales: function() {},
                addElements: function() {
                    this.getDataset().metaData = this.getDataset().metaData || [], e.each(this.getDataset().data, function(e, i) {
                        this.getDataset().metaData[i] = this.getDataset().metaData[i] || new t.elements.Arc({
                            _chart: this.chart.chart,
                            _datasetIndex: this.index,
                            _index: i
                        })
                    }, this)
                },
                addElementAndReset: function(i, a) {
                    this.getDataset().metaData = this.getDataset().metaData || [];
                    var s = new t.elements.Arc({
                        _chart: this.chart.chart,
                        _datasetIndex: this.index,
                        _index: i
                    });
                    a && e.isArray(this.getDataset().backgroundColor) && this.getDataset().backgroundColor.splice(i, 0, a), this.updateElement(s, i, !0), this.getDataset().metaData.splice(i, 0, s)
                },
                getVisibleDatasetCount: function() {
                    return e.where(this.chart.data.datasets, function(t) {
                        return e.isDatasetVisible(t)
                    }).length
                },
                getRingIndex: function(t) {
                    for (var i = 0, a = 0; t > a; ++a) e.isDatasetVisible(this.chart.data.datasets[a]) && ++i;
                    return i
                },
                update: function(t) {
                    var i = this.chart.chartArea.right - this.chart.chartArea.left - this.chart.options.elements.arc.borderWidth,
                        a = this.chart.chartArea.bottom - this.chart.chartArea.top - this.chart.options.elements.arc.borderWidth,
                        s = Math.min(i, a),
                        o = {
                            x: 0,
                            y: 0
                        };
                    if (this.chart.options.circumference && this.chart.options.circumference < 2 * Math.PI) {
                        var n = this.chart.options.rotation % (2 * Math.PI);
                        n += 2 * Math.PI * (n >= Math.PI ? -1 : n < -Math.PI ? 1 : 0);
                        var r = n + this.chart.options.circumference,
                            h = {
                                x: Math.cos(n),
                                y: Math.sin(n)
                            },
                            l = {
                                x: Math.cos(r),
                                y: Math.sin(r)
                            },
                            c = 0 >= n && r >= 0 || n <= 2 * Math.PI && 2 * Math.PI <= r,
                            d = n <= .5 * Math.PI && .5 * Math.PI <= r || n <= 2.5 * Math.PI && 2.5 * Math.PI <= r,
                            u = n <= -Math.PI && -Math.PI <= r || n <= Math.PI && Math.PI <= r,
                            g = n <= .5 * -Math.PI && .5 * -Math.PI <= r || n <= 1.5 * Math.PI && 1.5 * Math.PI <= r,
                            f = this.chart.options.cutoutPercentage / 100,
                            m = {
                                x: u ? -1 : Math.min(h.x * (h.x < 0 ? 1 : f), l.x * (l.x < 0 ? 1 : f)),
                                y: g ? -1 : Math.min(h.y * (h.y < 0 ? 1 : f), l.y * (l.y < 0 ? 1 : f))
                            },
                            p = {
                                x: c ? 1 : Math.max(h.x * (h.x > 0 ? 1 : f), l.x * (l.x > 0 ? 1 : f)),
                                y: d ? 1 : Math.max(h.y * (h.y > 0 ? 1 : f), l.y * (l.y > 0 ? 1 : f))
                            },
                            b = {
                                width: .5 * (p.x - m.x),
                                height: .5 * (p.y - m.y)
                            };
                        s = Math.min(i / b.width, a / b.height), o = {
                            x: (p.x + m.x) * -.5,
                            y: (p.y + m.y) * -.5
                        }
                    }
                    this.chart.outerRadius = Math.max(s / 2, 0), this.chart.innerRadius = Math.max(this.chart.options.cutoutPercentage ? this.chart.outerRadius / 100 * this.chart.options.cutoutPercentage : 1, 0), this.chart.radiusLength = (this.chart.outerRadius - this.chart.innerRadius) / this.getVisibleDatasetCount(), this.chart.offsetX = o.x * this.chart.outerRadius, this.chart.offsetY = o.y * this.chart.outerRadius, this.getDataset().total = 0, e.each(this.getDataset().data, function(t) {
                        isNaN(t) || (this.getDataset().total += Math.abs(t))
                    }, this), this.outerRadius = this.chart.outerRadius - this.chart.radiusLength * this.getRingIndex(this.index), this.innerRadius = this.outerRadius - this.chart.radiusLength, e.each(this.getDataset().metaData, function(e, i) {
                        this.updateElement(e, i, t)
                    }, this)
                },
                updateElement: function(t, i, a) {
                    var s = (this.chart.chartArea.left + this.chart.chartArea.right) / 2,
                        o = (this.chart.chartArea.top + this.chart.chartArea.bottom) / 2,
                        n = this.chart.options.rotation || Math.PI * -.5,
                        r = this.chart.options.rotation || Math.PI * -.5,
                        h = a && this.chart.options.animation.animateRotate ? 0 : this.calculateCircumference(this.getDataset().data[i]) * ((this.chart.options.circumference || 2 * Math.PI) / (2 * Math.PI)),
                        l = a && this.chart.options.animation.animateScale ? 0 : this.innerRadius,
                        c = a && this.chart.options.animation.animateScale ? 0 : this.outerRadius;
                    e.extend(t, {
                        _chart: this.chart.chart,
                        _datasetIndex: this.index,
                        _index: i,
                        _model: {
                            x: s + this.chart.offsetX,
                            y: o + this.chart.offsetY,
                            startAngle: n,
                            endAngle: r,
                            circumference: h,
                            outerRadius: c,
                            innerRadius: l,
                            backgroundColor: t.custom && t.custom.backgroundColor ? t.custom.backgroundColor : e.getValueAtIndexOrDefault(this.getDataset().backgroundColor, i, this.chart.options.elements.arc.backgroundColor),
                            hoverBackgroundColor: t.custom && t.custom.hoverBackgroundColor ? t.custom.hoverBackgroundColor : e.getValueAtIndexOrDefault(this.getDataset().hoverBackgroundColor, i, this.chart.options.elements.arc.hoverBackgroundColor),
                            borderWidth: t.custom && t.custom.borderWidth ? t.custom.borderWidth : e.getValueAtIndexOrDefault(this.getDataset().borderWidth, i, this.chart.options.elements.arc.borderWidth),
                            borderColor: t.custom && t.custom.borderColor ? t.custom.borderColor : e.getValueAtIndexOrDefault(this.getDataset().borderColor, i, this.chart.options.elements.arc.borderColor),
                            label: e.getValueAtIndexOrDefault(this.getDataset().label, i, this.chart.data.labels[i])
                        }
                    }), a || (0 === i ? t._model.startAngle = this.chart.options.rotation || Math.PI * -.5 : t._model.startAngle = this.getDataset().metaData[i - 1]._model.endAngle, t._model.endAngle = t._model.startAngle + t._model.circumference), t.pivot()
                },
                draw: function(t) {
                    var i = t || 1;
                    e.each(this.getDataset().metaData, function(t, e) {
                        t.transition(i).draw()
                    })
                },
                setHoverStyle: function(t) {
                    var i = this.chart.data.datasets[t._datasetIndex],
                        a = t._index;
                    t._model.backgroundColor = t.custom && t.custom.hoverBackgroundColor ? t.custom.hoverBackgroundColor : e.getValueAtIndexOrDefault(i.hoverBackgroundColor, a, e.color(t._model.backgroundColor).saturate(.5).darken(.1).rgbString()), t._model.borderColor = t.custom && t.custom.hoverBorderColor ? t.custom.hoverBorderColor : e.getValueAtIndexOrDefault(i.hoverBorderColor, a, e.color(t._model.borderColor).saturate(.5).darken(.1).rgbString()), t._model.borderWidth = t.custom && t.custom.hoverBorderWidth ? t.custom.hoverBorderWidth : e.getValueAtIndexOrDefault(i.hoverBorderWidth, a, t._model.borderWidth)
                },
                removeHoverStyle: function(t) {
                    var i = (this.chart.data.datasets[t._datasetIndex], t._index);
                    t._model.backgroundColor = t.custom && t.custom.backgroundColor ? t.custom.backgroundColor : e.getValueAtIndexOrDefault(this.getDataset().backgroundColor, i, this.chart.options.elements.arc.backgroundColor), t._model.borderColor = t.custom && t.custom.borderColor ? t.custom.borderColor : e.getValueAtIndexOrDefault(this.getDataset().borderColor, i, this.chart.options.elements.arc.borderColor), t._model.borderWidth = t.custom && t.custom.borderWidth ? t.custom.borderWidth : e.getValueAtIndexOrDefault(this.getDataset().borderWidth, i, this.chart.options.elements.arc.borderWidth)
                },
                calculateCircumference: function(t) {
                    return this.getDataset().total > 0 && !isNaN(t) ? 1.999999 * Math.PI * (t / this.getDataset().total) : 0
                }
            })
        }
    }, {}],
    18: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.line = {
                showLines: !0,
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        id: "y-axis-0"
                    }]
                }
            }, t.controllers.line = t.DatasetController.extend({
                addElements: function() {
                    this.getDataset().metaData = this.getDataset().metaData || [], this.getDataset().metaDataset = this.getDataset().metaDataset || new t.elements.Line({
                        _chart: this.chart.chart,
                        _datasetIndex: this.index,
                        _points: this.getDataset().metaData
                    }), e.each(this.getDataset().data, function(e, i) {
                        this.getDataset().metaData[i] = this.getDataset().metaData[i] || new t.elements.Point({
                            _chart: this.chart.chart,
                            _datasetIndex: this.index,
                            _index: i
                        })
                    }, this)
                },
                addElementAndReset: function(e) {
                    this.getDataset().metaData = this.getDataset().metaData || [];
                    var i = new t.elements.Point({
                        _chart: this.chart.chart,
                        _datasetIndex: this.index,
                        _index: e
                    });
                    this.updateElement(i, e, !0), this.getDataset().metaData.splice(e, 0, i), this.chart.options.showLines && 0 !== this.chart.options.elements.line.tension && this.updateBezierControlPoints()
                },
                update: function(t) {
                    var i, a = this.getDataset().metaDataset,
                        s = this.getDataset().metaData,
                        o = this.getScaleForId(this.getDataset().yAxisID);
                    this.getScaleForId(this.getDataset().xAxisID);
                    i = o.min < 0 && o.max < 0 ? o.getPixelForValue(o.max) : o.min > 0 && o.max > 0 ? o.getPixelForValue(o.min) : o.getPixelForValue(0), this.chart.options.showLines && (a._scale = o, a._datasetIndex = this.index, a._children = s, a._model = {
                        tension: a.custom && a.custom.tension ? a.custom.tension : e.getValueOrDefault(this.getDataset().tension, this.chart.options.elements.line.tension),
                        backgroundColor: a.custom && a.custom.backgroundColor ? a.custom.backgroundColor : this.getDataset().backgroundColor || this.chart.options.elements.line.backgroundColor,
                        borderWidth: a.custom && a.custom.borderWidth ? a.custom.borderWidth : this.getDataset().borderWidth || this.chart.options.elements.line.borderWidth,
                        borderColor: a.custom && a.custom.borderColor ? a.custom.borderColor : this.getDataset().borderColor || this.chart.options.elements.line.borderColor,
                        borderCapStyle: a.custom && a.custom.borderCapStyle ? a.custom.borderCapStyle : this.getDataset().borderCapStyle || this.chart.options.elements.line.borderCapStyle,
                        borderDash: a.custom && a.custom.borderDash ? a.custom.borderDash : this.getDataset().borderDash || this.chart.options.elements.line.borderDash,
                        borderDashOffset: a.custom && a.custom.borderDashOffset ? a.custom.borderDashOffset : this.getDataset().borderDashOffset || this.chart.options.elements.line.borderDashOffset,
                        borderJoinStyle: a.custom && a.custom.borderJoinStyle ? a.custom.borderJoinStyle : this.getDataset().borderJoinStyle || this.chart.options.elements.line.borderJoinStyle,
                        fill: a.custom && a.custom.fill ? a.custom.fill : void 0 !== this.getDataset().fill ? this.getDataset().fill : this.chart.options.elements.line.fill,
                        scaleTop: o.top,
                        scaleBottom: o.bottom,
                        scaleZero: i
                    }, a.pivot()), e.each(s, function(e, i) {
                        this.updateElement(e, i, t)
                    }, this), this.chart.options.showLines && 0 !== this.chart.options.elements.line.tension && this.updateBezierControlPoints()
                },
                getPointBackgroundColor: function(t, i) {
                    var a = this.chart.options.elements.point.backgroundColor,
                        s = this.getDataset();
                    return t.custom && t.custom.backgroundColor ? a = t.custom.backgroundColor : s.pointBackgroundColor ? a = e.getValueAtIndexOrDefault(s.pointBackgroundColor, i, a) : s.backgroundColor && (a = s.backgroundColor), a
                },
                getPointBorderColor: function(t, i) {
                    var a = this.chart.options.elements.point.borderColor,
                        s = this.getDataset();
                    return t.custom && t.custom.borderColor ? a = t.custom.borderColor : s.pointBorderColor ? a = e.getValueAtIndexOrDefault(this.getDataset().pointBorderColor, i, a) : s.borderColor && (a = s.borderColor), a
                },
                getPointBorderWidth: function(t, i) {
                    var a = this.chart.options.elements.point.borderWidth,
                        s = this.getDataset();
                    return t.custom && void 0 !== t.custom.borderWidth ? a = t.custom.borderWidth : void 0 !== s.pointBorderWidth ? a = e.getValueAtIndexOrDefault(s.pointBorderWidth, i, a) : void 0 !== s.borderWidth && (a = s.borderWidth), a
                },
                updateElement: function(t, i, a) {
                    var s, o = this.getScaleForId(this.getDataset().yAxisID),
                        n = this.getScaleForId(this.getDataset().xAxisID);
                    s = o.min < 0 && o.max < 0 ? o.getPixelForValue(o.max) : o.min > 0 && o.max > 0 ? o.getPixelForValue(o.min) : o.getPixelForValue(0), t._chart = this.chart.chart, t._xScale = n, t._yScale = o, t._datasetIndex = this.index, t._index = i, t._model = {
                        x: n.getPixelForValue(this.getDataset().data[i], i, this.index, this.chart.isCombo),
                        y: a ? s : this.calculatePointY(this.getDataset().data[i], i, this.index, this.chart.isCombo),
                        tension: t.custom && t.custom.tension ? t.custom.tension : e.getValueOrDefault(this.getDataset().tension, this.chart.options.elements.line.tension),
                        radius: t.custom && t.custom.radius ? t.custom.radius : e.getValueAtIndexOrDefault(this.getDataset().radius, i, this.chart.options.elements.point.radius),
                        pointStyle: t.custom && t.custom.pointStyle ? t.custom.pointStyle : e.getValueAtIndexOrDefault(this.getDataset().pointStyle, i, this.chart.options.elements.point.pointStyle),
                        backgroundColor: this.getPointBackgroundColor(t, i),
                        borderColor: this.getPointBorderColor(t, i),
                        borderWidth: this.getPointBorderWidth(t, i),
                        hitRadius: t.custom && t.custom.hitRadius ? t.custom.hitRadius : e.getValueAtIndexOrDefault(this.getDataset().hitRadius, i, this.chart.options.elements.point.hitRadius)
                    }, t._model.skip = t.custom && t.custom.skip ? t.custom.skip : isNaN(t._model.x) || isNaN(t._model.y)
                },
                calculatePointY: function(t, i, a, s) {
                    var o = (this.getScaleForId(this.getDataset().xAxisID), this.getScaleForId(this.getDataset().yAxisID));
                    if (o.options.stacked) {
                        for (var n = 0, r = 0, h = 0; a > h; h++) {
                            var l = this.chart.data.datasets[h];
                            "line" === l.type && e.isDatasetVisible(l) && (l.data[i] < 0 ? r += l.data[i] || 0 : n += l.data[i] || 0)
                        }
                        return 0 > t ? o.getPixelForValue(r + t) : o.getPixelForValue(n + t)
                    }
                    return o.getPixelForValue(t)
                },
                updateBezierControlPoints: function() {
                    e.each(this.getDataset().metaData, function(t, i) {
                        var a = e.splineCurve(e.previousItem(this.getDataset().metaData, i)._model, t._model, e.nextItem(this.getDataset().metaData, i)._model, t._model.tension);
                        t._model.controlPointPreviousX = Math.max(Math.min(a.previous.x, this.chart.chartArea.right), this.chart.chartArea.left), t._model.controlPointPreviousY = Math.max(Math.min(a.previous.y, this.chart.chartArea.bottom), this.chart.chartArea.top), t._model.controlPointNextX = Math.max(Math.min(a.next.x, this.chart.chartArea.right), this.chart.chartArea.left), t._model.controlPointNextY = Math.max(Math.min(a.next.y, this.chart.chartArea.bottom), this.chart.chartArea.top), t.pivot()
                    }, this)
                },
                draw: function(t) {
                    var i = t || 1;
                    e.each(this.getDataset().metaData, function(t) {
                        t.transition(i)
                    }), this.chart.options.showLines && this.getDataset().metaDataset.transition(i).draw(), e.each(this.getDataset().metaData, function(t) {
                        t.draw()
                    })
                },
                setHoverStyle: function(t) {
                    var i = this.chart.data.datasets[t._datasetIndex],
                        a = t._index;
                    t._model.radius = t.custom && t.custom.hoverRadius ? t.custom.hoverRadius : e.getValueAtIndexOrDefault(i.pointHoverRadius, a, this.chart.options.elements.point.hoverRadius), t._model.backgroundColor = t.custom && t.custom.hoverBackgroundColor ? t.custom.hoverBackgroundColor : e.getValueAtIndexOrDefault(i.pointHoverBackgroundColor, a, e.color(t._model.backgroundColor).saturate(.5).darken(.1).rgbString()), t._model.borderColor = t.custom && t.custom.hoverBorderColor ? t.custom.hoverBorderColor : e.getValueAtIndexOrDefault(i.pointHoverBorderColor, a, e.color(t._model.borderColor).saturate(.5).darken(.1).rgbString()), t._model.borderWidth = t.custom && t.custom.hoverBorderWidth ? t.custom.hoverBorderWidth : e.getValueAtIndexOrDefault(i.pointHoverBorderWidth, a, t._model.borderWidth)
                },
                removeHoverStyle: function(t) {
                    var i = (this.chart.data.datasets[t._datasetIndex], t._index);
                    t._model.radius = t.custom && t.custom.radius ? t.custom.radius : e.getValueAtIndexOrDefault(this.getDataset().radius, i, this.chart.options.elements.point.radius), t._model.backgroundColor = this.getPointBackgroundColor(t, i), t._model.borderColor = this.getPointBorderColor(t, i), t._model.borderWidth = this.getPointBorderWidth(t, i)
                }
            })
        }
    }, {}],
    19: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.polarArea = {
                scale: {
                    type: "radialLinear",
                    lineArc: !0
                },
                animateRotate: !0,
                animateScale: !0,
                aspectRatio: 1,
                legendCallback: function(t) {
                    var e = [];
                    if (e.push('<ul class="' + t.id + '-legend">'), t.data.datasets.length)
                        for (var i = 0; i < t.data.datasets[0].data.length; ++i) e.push('<li><span style="background-color:' + t.data.datasets[0].backgroundColor[i] + '">'), t.data.labels[i] && e.push(t.data.labels[i]), e.push("</span></li>");
                    return e.push("</ul>"), e.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function(t) {
                            return t.labels.length && t.datasets.length ? t.labels.map(function(e, i) {
                                return {
                                    text: e,
                                    fillStyle: t.datasets[0].backgroundColor[i],
                                    hidden: isNaN(t.datasets[0].data[i]),
                                    index: i
                                }
                            }) : []
                        }
                    },
                    onClick: function(t, i) {
                        e.each(this.chart.data.datasets, function(t) {
                            t.metaHiddenData = t.metaHiddenData || [];
                            var e = i.index;
                            isNaN(t.data[e]) ? isNaN(t.metaHiddenData[e]) || (t.data[e] = t.metaHiddenData[e]) : (t.metaHiddenData[e] = t.data[e], t.data[e] = NaN)
                        }), this.chart.update()
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t, e) {
                            return e.labels[t.index] + ": " + t.yLabel
                        }
                    }
                }
            }, t.controllers.polarArea = t.DatasetController.extend({
                linkScales: function() {},
                addElements: function() {
                    this.getDataset().metaData = this.getDataset().metaData || [], e.each(this.getDataset().data, function(e, i) {
                        this.getDataset().metaData[i] = this.getDataset().metaData[i] || new t.elements.Arc({
                            _chart: this.chart.chart,
                            _datasetIndex: this.index,
                            _index: i
                        })
                    }, this)
                },
                addElementAndReset: function(e) {
                    this.getDataset().metaData = this.getDataset().metaData || [];
                    var i = new t.elements.Arc({
                        _chart: this.chart.chart,
                        _datasetIndex: this.index,
                        _index: e
                    });
                    this.updateElement(i, e, !0), this.getDataset().metaData.splice(e, 0, i)
                },
                getVisibleDatasetCount: function() {
                    return e.where(this.chart.data.datasets, function(t) {
                        return e.isDatasetVisible(t)
                    }).length
                },
                update: function(t) {
                    var i = Math.min(this.chart.chartArea.right - this.chart.chartArea.left, this.chart.chartArea.bottom - this.chart.chartArea.top);
                    this.chart.outerRadius = Math.max((i - this.chart.options.elements.arc.borderWidth / 2) / 2, 0), this.chart.innerRadius = Math.max(this.chart.options.cutoutPercentage ? this.chart.outerRadius / 100 * this.chart.options.cutoutPercentage : 1, 0), this.chart.radiusLength = (this.chart.outerRadius - this.chart.innerRadius) / this.getVisibleDatasetCount(), this.getDataset().total = 0, e.each(this.getDataset().data, function(t) {
                        this.getDataset().total += Math.abs(t)
                    }, this), this.outerRadius = this.chart.outerRadius - this.chart.radiusLength * this.index, this.innerRadius = this.outerRadius - this.chart.radiusLength, e.each(this.getDataset().metaData, function(e, i) {
                        this.updateElement(e, i, t)
                    }, this)
                },
                updateElement: function(t, i, a) {
                    for (var s = this.calculateCircumference(this.getDataset().data[i]), o = (this.chart.chartArea.left + this.chart.chartArea.right) / 2, n = (this.chart.chartArea.top + this.chart.chartArea.bottom) / 2, r = 0, h = 0; i > h; ++h) isNaN(this.getDataset().data[h]) || ++r;
                    var l = -.5 * Math.PI + s * r,
                        c = l + s,
                        d = {
                            x: o,
                            y: n,
                            innerRadius: 0,
                            outerRadius: this.chart.options.animateScale ? 0 : this.chart.scale.getDistanceFromCenterForValue(this.getDataset().data[i]),
                            startAngle: this.chart.options.animateRotate ? Math.PI * -.5 : l,
                            endAngle: this.chart.options.animateRotate ? Math.PI * -.5 : c,
                            backgroundColor: t.custom && t.custom.backgroundColor ? t.custom.backgroundColor : e.getValueAtIndexOrDefault(this.getDataset().backgroundColor, i, this.chart.options.elements.arc.backgroundColor),
                            borderWidth: t.custom && t.custom.borderWidth ? t.custom.borderWidth : e.getValueAtIndexOrDefault(this.getDataset().borderWidth, i, this.chart.options.elements.arc.borderWidth),
                            borderColor: t.custom && t.custom.borderColor ? t.custom.borderColor : e.getValueAtIndexOrDefault(this.getDataset().borderColor, i, this.chart.options.elements.arc.borderColor),
                            label: e.getValueAtIndexOrDefault(this.chart.data.labels, i, this.chart.data.labels[i])
                        };
                    e.extend(t, {
                        _chart: this.chart.chart,
                        _datasetIndex: this.index,
                        _index: i,
                        _scale: this.chart.scale,
                        _model: a ? d : {
                            x: o,
                            y: n,
                            innerRadius: 0,
                            outerRadius: this.chart.scale.getDistanceFromCenterForValue(this.getDataset().data[i]),
                            startAngle: l,
                            endAngle: c,
                            backgroundColor: t.custom && t.custom.backgroundColor ? t.custom.backgroundColor : e.getValueAtIndexOrDefault(this.getDataset().backgroundColor, i, this.chart.options.elements.arc.backgroundColor),
                            borderWidth: t.custom && t.custom.borderWidth ? t.custom.borderWidth : e.getValueAtIndexOrDefault(this.getDataset().borderWidth, i, this.chart.options.elements.arc.borderWidth),
                            borderColor: t.custom && t.custom.borderColor ? t.custom.borderColor : e.getValueAtIndexOrDefault(this.getDataset().borderColor, i, this.chart.options.elements.arc.borderColor),
                            label: e.getValueAtIndexOrDefault(this.chart.data.labels, i, this.chart.data.labels[i])
                        }
                    }), t.pivot()
                },
                draw: function(t) {
                    var i = t || 1;
                    e.each(this.getDataset().metaData, function(t, e) {
                        t.transition(i).draw()
                    })
                },
                setHoverStyle: function(t) {
                    var i = this.chart.data.datasets[t._datasetIndex],
                        a = t._index;
                    t._model.backgroundColor = t.custom && t.custom.hoverBackgroundColor ? t.custom.hoverBackgroundColor : e.getValueAtIndexOrDefault(i.hoverBackgroundColor, a, e.color(t._model.backgroundColor).saturate(.5).darken(.1).rgbString()), t._model.borderColor = t.custom && t.custom.hoverBorderColor ? t.custom.hoverBorderColor : e.getValueAtIndexOrDefault(i.hoverBorderColor, a, e.color(t._model.borderColor).saturate(.5).darken(.1).rgbString()), t._model.borderWidth = t.custom && t.custom.hoverBorderWidth ? t.custom.hoverBorderWidth : e.getValueAtIndexOrDefault(i.hoverBorderWidth, a, t._model.borderWidth)
                },
                removeHoverStyle: function(t) {
                    var i = (this.chart.data.datasets[t._datasetIndex], t._index);
                    t._model.backgroundColor = t.custom && t.custom.backgroundColor ? t.custom.backgroundColor : e.getValueAtIndexOrDefault(this.getDataset().backgroundColor, i, this.chart.options.elements.arc.backgroundColor), t._model.borderColor = t.custom && t.custom.borderColor ? t.custom.borderColor : e.getValueAtIndexOrDefault(this.getDataset().borderColor, i, this.chart.options.elements.arc.borderColor), t._model.borderWidth = t.custom && t.custom.borderWidth ? t.custom.borderWidth : e.getValueAtIndexOrDefault(this.getDataset().borderWidth, i, this.chart.options.elements.arc.borderWidth)
                },
                calculateCircumference: function(t) {
                    if (isNaN(t)) return 0;
                    var i = e.where(this.getDataset().data, function(t) {
                        return isNaN(t)
                    }).length;
                    return 2 * Math.PI / (this.getDataset().data.length - i)
                }
            })
        }
    }, {}],
    20: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.radar = {
                scale: {
                    type: "radialLinear"
                },
                elements: {
                    line: {
                        tension: 0
                    }
                }
            }, t.controllers.radar = t.DatasetController.extend({
                linkScales: function() {},
                addElements: function() {
                    this.getDataset().metaData = this.getDataset().metaData || [], this.getDataset().metaDataset = this.getDataset().metaDataset || new t.elements.Line({
                        _chart: this.chart.chart,
                        _datasetIndex: this.index,
                        _points: this.getDataset().metaData,
                        _loop: !0
                    }), e.each(this.getDataset().data, function(e, i) {
                        this.getDataset().metaData[i] = this.getDataset().metaData[i] || new t.elements.Point({
                            _chart: this.chart.chart,
                            _datasetIndex: this.index,
                            _index: i,
                            _model: {
                                x: 0,
                                y: 0
                            }
                        })
                    }, this)
                },
                addElementAndReset: function(e) {
                    this.getDataset().metaData = this.getDataset().metaData || [];
                    var i = new t.elements.Point({
                        _chart: this.chart.chart,
                        _datasetIndex: this.index,
                        _index: e
                    });
                    this.updateElement(i, e, !0), this.getDataset().metaData.splice(e, 0, i), this.updateBezierControlPoints()
                },
                update: function(t) {
                    var i, a = this.getDataset().metaDataset,
                        s = this.getDataset().metaData,
                        o = this.chart.scale;
                    i = o.min < 0 && o.max < 0 ? o.getPointPositionForValue(0, o.max) : o.min > 0 && o.max > 0 ? o.getPointPositionForValue(0, o.min) : o.getPointPositionForValue(0, 0), e.extend(this.getDataset().metaDataset, {
                        _datasetIndex: this.index,
                        _children: this.getDataset().metaData,
                        _model: {
                            tension: a.custom && a.custom.tension ? a.custom.tension : e.getValueOrDefault(this.getDataset().tension, this.chart.options.elements.line.tension),
                            backgroundColor: a.custom && a.custom.backgroundColor ? a.custom.backgroundColor : this.getDataset().backgroundColor || this.chart.options.elements.line.backgroundColor,
                            borderWidth: a.custom && a.custom.borderWidth ? a.custom.borderWidth : this.getDataset().borderWidth || this.chart.options.elements.line.borderWidth,
                            borderColor: a.custom && a.custom.borderColor ? a.custom.borderColor : this.getDataset().borderColor || this.chart.options.elements.line.borderColor,
                            fill: a.custom && a.custom.fill ? a.custom.fill : void 0 !== this.getDataset().fill ? this.getDataset().fill : this.chart.options.elements.line.fill,
                            borderCapStyle: a.custom && a.custom.borderCapStyle ? a.custom.borderCapStyle : this.getDataset().borderCapStyle || this.chart.options.elements.line.borderCapStyle,
                            borderDash: a.custom && a.custom.borderDash ? a.custom.borderDash : this.getDataset().borderDash || this.chart.options.elements.line.borderDash,
                            borderDashOffset: a.custom && a.custom.borderDashOffset ? a.custom.borderDashOffset : this.getDataset().borderDashOffset || this.chart.options.elements.line.borderDashOffset,
                            borderJoinStyle: a.custom && a.custom.borderJoinStyle ? a.custom.borderJoinStyle : this.getDataset().borderJoinStyle || this.chart.options.elements.line.borderJoinStyle,
                            scaleTop: o.top,
                            scaleBottom: o.bottom,
                            scaleZero: i
                        }
                    }), this.getDataset().metaDataset.pivot(), e.each(s, function(e, i) {
                        this.updateElement(e, i, t)
                    }, this), this.updateBezierControlPoints()
                },
                updateElement: function(t, i, a) {
                    var s = this.chart.scale.getPointPositionForValue(i, this.getDataset().data[i]);
                    e.extend(t, {
                        _datasetIndex: this.index,
                        _index: i,
                        _scale: this.chart.scale,
                        _model: {
                            x: a ? this.chart.scale.xCenter : s.x,
                            y: a ? this.chart.scale.yCenter : s.y,
                            tension: t.custom && t.custom.tension ? t.custom.tension : e.getValueOrDefault(this.getDataset().tension, this.chart.options.elements.line.tension),
                            radius: t.custom && t.custom.radius ? t.custom.radius : e.getValueAtIndexOrDefault(this.getDataset().pointRadius, i, this.chart.options.elements.point.radius),
                            backgroundColor: t.custom && t.custom.backgroundColor ? t.custom.backgroundColor : e.getValueAtIndexOrDefault(this.getDataset().pointBackgroundColor, i, this.chart.options.elements.point.backgroundColor),
                            borderColor: t.custom && t.custom.borderColor ? t.custom.borderColor : e.getValueAtIndexOrDefault(this.getDataset().pointBorderColor, i, this.chart.options.elements.point.borderColor),
                            borderWidth: t.custom && t.custom.borderWidth ? t.custom.borderWidth : e.getValueAtIndexOrDefault(this.getDataset().pointBorderWidth, i, this.chart.options.elements.point.borderWidth),
                            pointStyle: t.custom && t.custom.pointStyle ? t.custom.pointStyle : e.getValueAtIndexOrDefault(this.getDataset().pointStyle, i, this.chart.options.elements.point.pointStyle),
                            hitRadius: t.custom && t.custom.hitRadius ? t.custom.hitRadius : e.getValueAtIndexOrDefault(this.getDataset().hitRadius, i, this.chart.options.elements.point.hitRadius)
                        }
                    }), t._model.skip = t.custom && t.custom.skip ? t.custom.skip : isNaN(t._model.x) || isNaN(t._model.y)
                },
                updateBezierControlPoints: function() {
                    e.each(this.getDataset().metaData, function(t, i) {
                        var a = e.splineCurve(e.previousItem(this.getDataset().metaData, i, !0)._model, t._model, e.nextItem(this.getDataset().metaData, i, !0)._model, t._model.tension);
                        t._model.controlPointPreviousX = Math.max(Math.min(a.previous.x, this.chart.chartArea.right), this.chart.chartArea.left), t._model.controlPointPreviousY = Math.max(Math.min(a.previous.y, this.chart.chartArea.bottom), this.chart.chartArea.top), t._model.controlPointNextX = Math.max(Math.min(a.next.x, this.chart.chartArea.right), this.chart.chartArea.left), t._model.controlPointNextY = Math.max(Math.min(a.next.y, this.chart.chartArea.bottom), this.chart.chartArea.top), t.pivot()
                    }, this)
                },
                draw: function(t) {
                    var i = t || 1;
                    e.each(this.getDataset().metaData, function(t, e) {
                        t.transition(i)
                    }), this.getDataset().metaDataset.transition(i).draw(), e.each(this.getDataset().metaData, function(t) {
                        t.draw()
                    })
                },
                setHoverStyle: function(t) {
                    var i = this.chart.data.datasets[t._datasetIndex],
                        a = t._index;
                    t._model.radius = t.custom && t.custom.hoverRadius ? t.custom.hoverRadius : e.getValueAtIndexOrDefault(i.pointHoverRadius, a, this.chart.options.elements.point.hoverRadius), t._model.backgroundColor = t.custom && t.custom.hoverBackgroundColor ? t.custom.hoverBackgroundColor : e.getValueAtIndexOrDefault(i.pointHoverBackgroundColor, a, e.color(t._model.backgroundColor).saturate(.5).darken(.1).rgbString()), t._model.borderColor = t.custom && t.custom.hoverBorderColor ? t.custom.hoverBorderColor : e.getValueAtIndexOrDefault(i.pointHoverBorderColor, a, e.color(t._model.borderColor).saturate(.5).darken(.1).rgbString()), t._model.borderWidth = t.custom && t.custom.hoverBorderWidth ? t.custom.hoverBorderWidth : e.getValueAtIndexOrDefault(i.pointHoverBorderWidth, a, t._model.borderWidth)
                },
                removeHoverStyle: function(t) {
                    var i = (this.chart.data.datasets[t._datasetIndex], t._index);
                    t._model.radius = t.custom && t.custom.radius ? t.custom.radius : e.getValueAtIndexOrDefault(this.getDataset().radius, i, this.chart.options.elements.point.radius), t._model.backgroundColor = t.custom && t.custom.backgroundColor ? t.custom.backgroundColor : e.getValueAtIndexOrDefault(this.getDataset().pointBackgroundColor, i, this.chart.options.elements.point.backgroundColor), t._model.borderColor = t.custom && t.custom.borderColor ? t.custom.borderColor : e.getValueAtIndexOrDefault(this.getDataset().pointBorderColor, i, this.chart.options.elements.point.borderColor), t._model.borderWidth = t.custom && t.custom.borderWidth ? t.custom.borderWidth : e.getValueAtIndexOrDefault(this.getDataset().pointBorderWidth, i, this.chart.options.elements.point.borderWidth)
                }
            })
        }
    }, {}],
    21: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.global.animation = {
                duration: 1e3,
                easing: "easeOutQuart",
                onProgress: e.noop,
                onComplete: e.noop
            }, t.Animation = t.Element.extend({
                currentStep: null,
                numSteps: 60,
                easing: "",
                render: null,
                onAnimationProgress: null,
                onAnimationComplete: null
            }), t.animationService = {
                frameDuration: 17,
                animations: [],
                dropFrames: 0,
                request: null,
                addAnimation: function(t, e, i, a) {
                    a || (t.animating = !0);
                    for (var s = 0; s < this.animations.length; ++s)
                        if (this.animations[s].chartInstance === t) return void(this.animations[s].animationObject = e);
                    this.animations.push({
                        chartInstance: t,
                        animationObject: e
                    }), 1 === this.animations.length && this.requestAnimationFrame()
                },
                cancelAnimation: function(t) {
                    var i = e.findIndex(this.animations, function(e) {
                        return e.chartInstance === t
                    }); - 1 !== i && (this.animations.splice(i, 1), t.animating = !1)
                },
                requestAnimationFrame: function() {
                    var t = this;
                    null === t.request && (t.request = e.requestAnimFrame.call(window, function() {
                        t.request = null, t.startDigest()
                    }))
                },
                startDigest: function() {
                    var t = Date.now(),
                        e = 0;
                    this.dropFrames > 1 && (e = Math.floor(this.dropFrames), this.dropFrames = this.dropFrames % 1);
                    for (var i = 0; i < this.animations.length;) null === this.animations[i].animationObject.currentStep && (this.animations[i].animationObject.currentStep = 0), this.animations[i].animationObject.currentStep += 1 + e, this.animations[i].animationObject.currentStep > this.animations[i].animationObject.numSteps && (this.animations[i].animationObject.currentStep = this.animations[i].animationObject.numSteps), this.animations[i].animationObject.render(this.animations[i].chartInstance, this.animations[i].animationObject), this.animations[i].animationObject.onAnimationProgress && this.animations[i].animationObject.onAnimationProgress.call && this.animations[i].animationObject.onAnimationProgress.call(this.animations[i].chartInstance, this.animations[i]), this.animations[i].animationObject.currentStep === this.animations[i].animationObject.numSteps ? (this.animations[i].animationObject.onAnimationComplete && this.animations[i].animationObject.onAnimationComplete.call && this.animations[i].animationObject.onAnimationComplete.call(this.animations[i].chartInstance, this.animations[i]), this.animations[i].chartInstance.animating = !1, this.animations.splice(i, 1)) : ++i;
                    var a = Date.now(),
                        s = (a - t) / this.frameDuration;
                    this.dropFrames += s, this.animations.length > 0 && this.requestAnimationFrame()
                }
            }
        }
    }, {}],
    22: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.types = {}, t.instances = {}, t.controllers = {}, t.Controller = function(i) {
                return this.chart = i, this.config = i.config, this.options = this.config.options = e.configMerge(t.defaults.global, t.defaults[this.config.type], this.config.options || {}), this.id = e.uid(), Object.defineProperty(this, "data", {
                    get: function() {
                        return this.config.data
                    }
                }), t.instances[this.id] = this, this.options.responsive && this.resize(!0), this.initialize(), this
            }, e.extend(t.Controller.prototype, {
                initialize: function() {
                    return this.bindEvents(), this.ensureScalesHaveIDs(), this.buildOrUpdateControllers(), this.buildScales(), this.buildSurroundingItems(), this.updateLayout(), this.resetElements(), this.initToolTip(), this.update(), this
                },
                clear: function() {
                    return e.clear(this.chart), this
                },
                stop: function() {
                    return t.animationService.cancelAnimation(this), this
                },
                resize: function(t) {
                    var i = this.chart.canvas,
                        a = e.getMaximumWidth(this.chart.canvas),
                        s = this.options.maintainAspectRatio && isNaN(this.chart.aspectRatio) === !1 && isFinite(this.chart.aspectRatio) && 0 !== this.chart.aspectRatio ? a / this.chart.aspectRatio : e.getMaximumHeight(this.chart.canvas),
                        o = this.chart.width !== a || this.chart.height !== s;
                    return o ? (i.width = this.chart.width = a, i.height = this.chart.height = s, e.retinaScale(this.chart), t || (this.stop(), this.update(this.options.responsiveAnimationDuration)), this) : this
                },
                ensureScalesHaveIDs: function() {
                    var t = "x-axis-",
                        i = "y-axis-";
                    this.options.scales && (this.options.scales.xAxes && this.options.scales.xAxes.length && e.each(this.options.scales.xAxes, function(e, i) {
                        e.id = e.id || t + i
                    }), this.options.scales.yAxes && this.options.scales.yAxes.length && e.each(this.options.scales.yAxes, function(t, e) {
                        t.id = t.id || i + e
                    }))
                },
                buildScales: function() {
                    if (this.scales = {}, this.options.scales && (this.options.scales.xAxes && this.options.scales.xAxes.length && e.each(this.options.scales.xAxes, function(i, a) {
                            var s = e.getValueOrDefault(i.type, "category"),
                                o = t.scaleService.getScaleConstructor(s);
                            if (o) {
                                var n = new o({
                                    ctx: this.chart.ctx,
                                    options: i,
                                    chart: this,
                                    id: i.id
                                });
                                this.scales[n.id] = n
                            }
                        }, this), this.options.scales.yAxes && this.options.scales.yAxes.length && e.each(this.options.scales.yAxes, function(i, a) {
                            var s = e.getValueOrDefault(i.type, "linear"),
                                o = t.scaleService.getScaleConstructor(s);
                            if (o) {
                                var n = new o({
                                    ctx: this.chart.ctx,
                                    options: i,
                                    chart: this,
                                    id: i.id
                                });
                                this.scales[n.id] = n
                            }
                        }, this)), this.options.scale) {
                        var i = t.scaleService.getScaleConstructor(this.options.scale.type);
                        if (i) {
                            var a = new i({
                                ctx: this.chart.ctx,
                                options: this.options.scale,
                                chart: this
                            });
                            this.scale = a, this.scales.radialScale = a
                        }
                    }
                    t.scaleService.addScalesToLayout(this)
                },
                buildSurroundingItems: function() {
                    this.options.title && (this.titleBlock = new t.Title({
                        ctx: this.chart.ctx,
                        options: this.options.title,
                        chart: this
                    }), t.layoutService.addBox(this, this.titleBlock)), this.options.legend && (this.legend = new t.Legend({
                        ctx: this.chart.ctx,
                        options: this.options.legend,
                        chart: this
                    }), t.layoutService.addBox(this, this.legend))
                },
                updateLayout: function() {
                    t.layoutService.update(this, this.chart.width, this.chart.height)
                },
                buildOrUpdateControllers: function() {
                    var i = [],
                        a = [];
                    if (e.each(this.data.datasets, function(e, s) {
                            e.type || (e.type = this.config.type);
                            var o = e.type;
                            i.push(o), e.controller ? e.controller.updateIndex(s) : (e.controller = new t.controllers[o](this, s), a.push(e.controller))
                        }, this), i.length > 1)
                        for (var s = 1; s < i.length; s++)
                            if (i[s] !== i[s - 1]) {
                                this.isCombo = !0;
                                break
                            }
                    return a
                },
                resetElements: function() {
                    e.each(this.data.datasets, function(t, e) {
                        t.controller.reset()
                    })
                },
                update: function(i, a) {
                    this.tooltip._data = this.data;
                    var s = this.buildOrUpdateControllers();
                    t.layoutService.update(this, this.chart.width, this.chart.height), e.each(s, function(t) {
                        t.reset()
                    }), e.each(this.data.datasets, function(t, e) {
                        t.controller.buildOrUpdateElements()
                    }), e.each(this.data.datasets, function(t, e) {
                        t.controller.update()
                    }), this.render(i, a)
                },
                render: function(i, a) {
                    if (this.options.animation && ("undefined" != typeof i && 0 !== i || "undefined" == typeof i && 0 !== this.options.animation.duration)) {
                        var s = new t.Animation;
                        s.numSteps = (i || this.options.animation.duration) / 16.66, s.easing = this.options.animation.easing, s.render = function(t, i) {
                            var a = e.easingEffects[i.easing],
                                s = i.currentStep / i.numSteps,
                                o = a(s);
                            t.draw(o, s, i.currentStep)
                        }, s.onAnimationProgress = this.options.animation.onProgress, s.onAnimationComplete = this.options.animation.onComplete, t.animationService.addAnimation(this, s, i, a)
                    } else this.draw(), this.options.animation && this.options.animation.onComplete && this.options.animation.onComplete.call && this.options.animation.onComplete.call(this);
                    return this
                },
                draw: function(t) {
                    var i = t || 1;
                    this.clear(), e.each(this.boxes, function(t) {
                        t.draw(this.chartArea)
                    }, this), this.scale && this.scale.draw(), this.chart.ctx.save(), this.chart.ctx.beginPath(), this.chart.ctx.rect(this.chartArea.left, this.chartArea.top, this.chartArea.right - this.chartArea.left, this.chartArea.bottom - this.chartArea.top), this.chart.ctx.clip(), e.each(this.data.datasets, function(i, a) {
                        e.isDatasetVisible(i) && i.controller.draw(t)
                    }, null, !0), this.chart.ctx.restore(), this.tooltip.transition(i).draw()
                },
                getElementAtEvent: function(t) {
                    var i = e.getRelativePosition(t, this.chart),
                        a = [];
                    return e.each(this.data.datasets, function(t, s) {
                        e.isDatasetVisible(t) && e.each(t.metaData, function(t, e) {
                            return t.inRange(i.x, i.y) ? (a.push(t), a) : void 0
                        })
                    }), a
                },
                getElementsAtEvent: function(t) {
                    var i = e.getRelativePosition(t, this.chart),
                        a = [],
                        s = function() {
                            if (this.data.datasets)
                                for (var t = 0; t < this.data.datasets.length; t++)
                                    if (e.isDatasetVisible(this.data.datasets[t]))
                                        for (var a = 0; a < this.data.datasets[t].metaData.length; a++)
                                            if (this.data.datasets[t].metaData[a].inRange(i.x, i.y)) return this.data.datasets[t].metaData[a]
                        }.call(this);
                    return s ? (e.each(this.data.datasets, function(t, i) {
                        e.isDatasetVisible(t) && a.push(t.metaData[s._index])
                    }), a) : a
                },
                getDatasetAtEvent: function(t) {
                    var e = this.getElementAtEvent(t);
                    return e.length > 0 && (e = this.data.datasets[e[0]._datasetIndex].metaData), e
                },
                generateLegend: function() {
                    return this.options.legendCallback(this)
                },
                destroy: function() {
                    this.clear(), e.unbindEvents(this, this.events), e.removeResizeListener(this.chart.canvas.parentNode);
                    var i = this.chart.canvas;
                    i.width = this.chart.width, i.height = this.chart.height, void 0 !== this.chart.originalDevicePixelRatio && this.chart.ctx.scale(1 / this.chart.originalDevicePixelRatio, 1 / this.chart.originalDevicePixelRatio), i.style.width = this.chart.originalCanvasStyleWidth, i.style.height = this.chart.originalCanvasStyleHeight, delete t.instances[this.id]
                },
                toBase64Image: function() {
                    return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
                },
                initToolTip: function() {
                    this.tooltip = new t.Tooltip({
                        _chart: this.chart,
                        _chartInstance: this,
                        _data: this.data,
                        _options: this.options
                    }, this)
                },
                bindEvents: function() {
                    e.bindEvents(this, this.options.events, function(t) {
                        this.eventHandler(t)
                    })
                },
                eventHandler: function(t) {
                    if (this.lastActive = this.lastActive || [], this.lastTooltipActive = this.lastTooltipActive || [], "mouseout" === t.type) this.active = [], this.tooltipActive = [];
                    else {
                        var i = this,
                            a = function(e) {
                                switch (e) {
                                    case "single":
                                        return i.getElementAtEvent(t);
                                    case "label":
                                        return i.getElementsAtEvent(t);
                                    case "dataset":
                                        return i.getDatasetAtEvent(t);
                                    default:
                                        return t
                                }
                            };
                        this.active = a(this.options.hover.mode), this.tooltipActive = a(this.options.tooltips.mode)
                    }
                    this.options.hover.onHover && this.options.hover.onHover.call(this, this.active), ("mouseup" === t.type || "click" === t.type) && (this.options.onClick && this.options.onClick.call(this, t, this.active), this.legend && this.legend.handleEvent && this.legend.handleEvent(t));
                    if (this.lastActive.length) switch (this.options.hover.mode) {
                        case "single":
                            this.data.datasets[this.lastActive[0]._datasetIndex].controller.removeHoverStyle(this.lastActive[0], this.lastActive[0]._datasetIndex, this.lastActive[0]._index);
                            break;
                        case "label":
                        case "dataset":
                            for (var s = 0; s < this.lastActive.length; s++) this.lastActive[s] && this.data.datasets[this.lastActive[s]._datasetIndex].controller.removeHoverStyle(this.lastActive[s], this.lastActive[s]._datasetIndex, this.lastActive[s]._index)
                    }
                    if (this.active.length && this.options.hover.mode) switch (this.options.hover.mode) {
                        case "single":
                            this.data.datasets[this.active[0]._datasetIndex].controller.setHoverStyle(this.active[0]);
                            break;
                        case "label":
                        case "dataset":
                            for (var o = 0; o < this.active.length; o++) this.active[o] && this.data.datasets[this.active[o]._datasetIndex].controller.setHoverStyle(this.active[o])
                    }
                    if ((this.options.tooltips.enabled || this.options.tooltips.custom) && (this.tooltip.initialize(), this.tooltip._active = this.tooltipActive, this.tooltip.update()), this.tooltip.pivot(), !this.animating) {
                        var n;
                        e.each(this.active, function(t, e) {
                            t !== this.lastActive[e] && (n = !0)
                        }, this), e.each(this.tooltipActive, function(t, e) {
                            t !== this.lastTooltipActive[e] && (n = !0)
                        }, this), (this.lastActive.length !== this.active.length || this.lastTooltipActive.length !== this.tooltipActive.length || n) && (this.stop(), (this.options.tooltips.enabled || this.options.tooltips.custom) && this.tooltip.update(!0), this.render(this.options.hover.animationDuration, !0))
                    }
                    return this.lastActive = this.active, this.lastTooltipActive = this.tooltipActive, this
                }
            })
        }
    }, {}],
    23: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.DatasetController = function(t, e) {
                this.initialize.call(this, t, e)
            }, e.extend(t.DatasetController.prototype, {
                initialize: function(t, e) {
                    this.chart = t, this.index = e, this.linkScales(), this.addElements()
                },
                updateIndex: function(t) {
                    this.index = t
                },
                linkScales: function() {
                    this.getDataset().xAxisID || (this.getDataset().xAxisID = this.chart.options.scales.xAxes[0].id), this.getDataset().yAxisID || (this.getDataset().yAxisID = this.chart.options.scales.yAxes[0].id)
                },
                getDataset: function() {
                    return this.chart.data.datasets[this.index]
                },
                getScaleForId: function(t) {
                    return this.chart.scales[t]
                },
                reset: function() {
                    this.update(!0)
                },
                buildOrUpdateElements: function() {
                    var t = this.getDataset().data.length,
                        e = this.getDataset().metaData.length;
                    if (e > t) this.getDataset().metaData.splice(t, e - t);
                    else if (t > e)
                        for (var i = e; t > i; ++i) this.addElementAndReset(i)
                },
                addElements: e.noop,
                addElementAndReset: e.noop,
                draw: e.noop,
                removeHoverStyle: e.noop,
                setHoverStyle: e.noop,
                update: e.noop
            }), t.DatasetController.extend = e.inherits
        }
    }, {}],
    24: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.elements = {}, t.Element = function(t) {
                e.extend(this, t), this.initialize.apply(this, arguments)
            }, e.extend(t.Element.prototype, {
                initialize: function() {},
                pivot: function() {
                    return this._view || (this._view = e.clone(this._model)), this._start = e.clone(this._view), this
                },
                transition: function(t) {
                    return this._view || (this._view = e.clone(this._model)), 1 === t ? (this._view = this._model, this._start = null, this) : (this._start || this.pivot(), e.each(this._model, function(i, a) {
                        if ("_" !== a[0] && this._model.hasOwnProperty(a))
                            if (this._view.hasOwnProperty(a))
                                if (i === this._view[a]);
                                else if ("string" == typeof i) try {
                            var s = e.color(this._start[a]).mix(e.color(this._model[a]), t);
                            this._view[a] = s.rgbString()
                        } catch (o) {
                            this._view[a] = i
                        } else if ("number" == typeof i) {
                            var n = void 0 !== this._start[a] && isNaN(this._start[a]) === !1 ? this._start[a] : 0;
                            this._view[a] = (this._model[a] - n) * t + n
                        } else this._view[a] = i;
                        else "number" != typeof i || isNaN(this._view[a]) ? this._view[a] = i : this._view[a] = i * t;
                        else;
                    }, this), this)
                },
                tooltipPosition: function() {
                    return {
                        x: this._model.x,
                        y: this._model.y
                    }
                },
                hasValue: function() {
                    return e.isNumber(this._model.x) && e.isNumber(this._model.y)
                }
            }), t.Element.extend = e.inherits
        }
    }, {}],
    25: [function(t, e, i) {
        "use strict";
        var a = t("chartjs-color");
        e.exports = function(t) {
            function e(t, e, i) {
                var a;
                return "string" == typeof t ? (a = parseInt(t, 10), -1 != t.indexOf("%") && (a = a / 100 * e.parentNode[i])) : a = t, a
            }

            function i(t, i, a) {
                var s, o = document.defaultView.getComputedStyle(t)[i],
                    n = document.defaultView.getComputedStyle(t.parentNode)[i],
                    r = null !== o && "none" !== o,
                    h = null !== n && "none" !== n;
                return (r || h) && (s = Math.min(r ? e(o, t, a) : Number.POSITIVE_INFINITY, h ? e(n, t.parentNode, a) : Number.POSITIVE_INFINITY)), s
            }
            var s = t.helpers = {};
            s.each = function(t, e, i, a) {
                var o, n;
                if (s.isArray(t))
                    if (n = t.length, a)
                        for (o = n - 1; o >= 0; o--) e.call(i, t[o], o);
                    else
                        for (o = 0; n > o; o++) e.call(i, t[o], o);
                else if ("object" == typeof t) {
                    var r = Object.keys(t);
                    for (n = r.length, o = 0; n > o; o++) e.call(i, t[r[o]], r[o])
                }
            }, s.clone = function(t) {
                var e = {};
                return s.each(t, function(i, a) {
                    t.hasOwnProperty(a) && (s.isArray(i) ? e[a] = i.slice(0) : "object" == typeof i && null !== i ? e[a] = s.clone(i) : e[a] = i)
                }), e
            }, s.extend = function(t) {
                for (var e = arguments.length, i = [], a = 1; e > a; a++) i.push(arguments[a]);
                return s.each(i, function(e) {
                    s.each(e, function(i, a) {
                        e.hasOwnProperty(a) && (t[a] = i)
                    })
                }), t
            }, s.configMerge = function(e) {
                var i = s.clone(e);
                return s.each(Array.prototype.slice.call(arguments, 1), function(e) {
                    s.each(e, function(a, o) {
                        if (e.hasOwnProperty(o))
                            if ("scales" === o) i[o] = s.scaleMerge(i.hasOwnProperty(o) ? i[o] : {}, a);
                            else if ("scale" === o) i[o] = s.configMerge(i.hasOwnProperty(o) ? i[o] : {}, t.scaleService.getScaleDefaults(a.type), a);
                        else if (i.hasOwnProperty(o) && s.isArray(i[o]) && s.isArray(a)) {
                            var n = i[o];
                            s.each(a, function(t, e) {
                                e < n.length ? "object" == typeof n[e] && null !== n[e] && "object" == typeof t && null !== t ? n[e] = s.configMerge(n[e], t) : n[e] = t : n.push(t)
                            })
                        } else i.hasOwnProperty(o) && "object" == typeof i[o] && null !== i[o] && "object" == typeof a ? i[o] = s.configMerge(i[o], a) : i[o] = a
                    })
                }), i
            }, s.extendDeep = function(t) {
                function e(t) {
                    return s.each(arguments, function(i) {
                        i !== t && s.each(i, function(i, a) {
                            t[a] && t[a].constructor && t[a].constructor === Object ? e(t[a], i) : t[a] = i
                        })
                    }), t
                }
                return e.apply(this, arguments)
            }, s.scaleMerge = function(e, i) {
                var a = s.clone(e);
                return s.each(i, function(e, o) {
                    i.hasOwnProperty(o) && ("xAxes" === o || "yAxes" === o ? a.hasOwnProperty(o) ? s.each(e, function(e, i) {
                        var n = s.getValueOrDefault(e.type, "xAxes" === o ? "category" : "linear"),
                            r = t.scaleService.getScaleDefaults(n);
                        i >= a[o].length || !a[o][i].type ? a[o].push(s.configMerge(r, e)) : e.type && e.type !== a[o][i].type ? a[o][i] = s.configMerge(a[o][i], r, e) : a[o][i] = s.configMerge(a[o][i], e)
                    }) : (a[o] = [], s.each(e, function(e) {
                        var i = s.getValueOrDefault(e.type, "xAxes" === o ? "category" : "linear");
                        a[o].push(s.configMerge(t.scaleService.getScaleDefaults(i), e))
                    })) : a.hasOwnProperty(o) && "object" == typeof a[o] && null !== a[o] && "object" == typeof e ? a[o] = s.configMerge(a[o], e) : a[o] = e)
                }), a
            }, s.getValueAtIndexOrDefault = function(t, e, i) {
                return void 0 === t || null === t ? i : s.isArray(t) ? e < t.length ? t[e] : i : t
            }, s.getValueOrDefault = function(t, e) {
                return void 0 === t ? e : t
            }, s.indexOf = function(t, e) {
                if (Array.prototype.indexOf) return t.indexOf(e);
                for (var i = 0; i < t.length; i++)
                    if (t[i] === e) return i;
                return -1
            }, s.where = function(t, e) {
                var i = [];
                return s.each(t, function(t) {
                    e(t) && i.push(t)
                }), i
            }, s.findIndex = function(t, e, i) {
                var a = -1;
                if (Array.prototype.findIndex) a = t.findIndex(e, i);
                else
                    for (var s = 0; s < t.length; ++s)
                        if (i = void 0 !== i ? i : t, e.call(i, t[s], s, t)) {
                            a = s;
                            break
                        } return a
            }, s.findNextWhere = function(t, e, i) {
                (void 0 === i || null === i) && (i = -1);
                for (var a = i + 1; a < t.length; a++) {
                    var s = t[a];
                    if (e(s)) return s
                }
            }, s.findPreviousWhere = function(t, e, i) {
                (void 0 === i || null === i) && (i = t.length);
                for (var a = i - 1; a >= 0; a--) {
                    var s = t[a];
                    if (e(s)) return s
                }
            }, s.inherits = function(t) {
                var e = this,
                    i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                        return e.apply(this, arguments)
                    },
                    a = function() {
                        this.constructor = i
                    };
                return a.prototype = e.prototype, i.prototype = new a, i.extend = s.inherits, t && s.extend(i.prototype, t), i.__super__ = e.prototype, i
            }, s.noop = function() {}, s.uid = function() {
                var t = 0;
                return function() {
                    return "chart-" + t++
                }
            }(), s.warn = function(t) {
                console && "function" == typeof console.warn && console.warn(t)
            }, s.isNumber = function(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            }, s.almostEquals = function(t, e, i) {
                return Math.abs(t - e) < i
            }, s.max = function(t) {
                return t.reduce(function(t, e) {
                    return isNaN(e) ? t : Math.max(t, e)
                }, Number.NEGATIVE_INFINITY)
            }, s.min = function(t) {
                return t.reduce(function(t, e) {
                    return isNaN(e) ? t : Math.min(t, e)
                }, Number.POSITIVE_INFINITY)
            }, s.sign = function(t) {
                return Math.sign ? Math.sign(t) : (t = +t, 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1)
            }, s.log10 = function(t) {
                return Math.log10 ? Math.log10(t) : Math.log(t) / Math.LN10
            }, s.toRadians = function(t) {
                return t * (Math.PI / 180)
            }, s.toDegrees = function(t) {
                return t * (180 / Math.PI)
            }, s.getAngleFromPoint = function(t, e) {
                var i = e.x - t.x,
                    a = e.y - t.y,
                    s = Math.sqrt(i * i + a * a),
                    o = Math.atan2(a, i);
                return o < -.5 * Math.PI && (o += 2 * Math.PI), {
                    angle: o,
                    distance: s
                }
            }, s.aliasPixel = function(t) {
                return t % 2 === 0 ? 0 : .5
            }, s.splineCurve = function(t, e, i, a) {
                var s = t.skip ? e : t,
                    o = e,
                    n = i.skip ? e : i,
                    r = Math.sqrt(Math.pow(o.x - s.x, 2) + Math.pow(o.y - s.y, 2)),
                    h = Math.sqrt(Math.pow(n.x - o.x, 2) + Math.pow(n.y - o.y, 2)),
                    l = r / (r + h),
                    c = h / (r + h);
                l = isNaN(l) ? 0 : l, c = isNaN(c) ? 0 : c;
                var d = a * l,
                    u = a * c;
                return {
                    previous: {
                        x: o.x - d * (n.x - s.x),
                        y: o.y - d * (n.y - s.y)
                    },
                    next: {
                        x: o.x + u * (n.x - s.x),
                        y: o.y + u * (n.y - s.y)
                    }
                }
            }, s.nextItem = function(t, e, i) {
                return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
            }, s.previousItem = function(t, e, i) {
                return i ? 0 >= e ? t[t.length - 1] : t[e - 1] : 0 >= e ? t[0] : t[e - 1]
            }, s.niceNum = function(t, e) {
                var i, a = Math.floor(s.log10(t)),
                    o = t / Math.pow(10, a);
                return i = e ? 1.5 > o ? 1 : 3 > o ? 2 : 7 > o ? 5 : 10 : 1 >= o ? 1 : 2 >= o ? 2 : 5 >= o ? 5 : 10, i * Math.pow(10, a)
            };
            var o = s.easingEffects = {
                linear: function(t) {
                    return t
                },
                easeInQuad: function(t) {
                    return t * t
                },
                easeOutQuad: function(t) {
                    return -1 * t * (t - 2)
                },
                easeInOutQuad: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1)
                },
                easeInCubic: function(t) {
                    return t * t * t
                },
                easeOutCubic: function(t) {
                    return 1 * ((t = t / 1 - 1) * t * t + 1)
                },
                easeInOutCubic: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                },
                easeInQuart: function(t) {
                    return t * t * t * t
                },
                easeOutQuart: function(t) {
                    return -1 * ((t = t / 1 - 1) * t * t * t - 1)
                },
                easeInOutQuart: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)
                },
                easeInQuint: function(t) {
                    return 1 * (t /= 1) * t * t * t * t
                },
                easeOutQuint: function(t) {
                    return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
                },
                easeInOutQuint: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                },
                easeInSine: function(t) {
                    return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
                },
                easeOutSine: function(t) {
                    return 1 * Math.sin(t / 1 * (Math.PI / 2))
                },
                easeInOutSine: function(t) {
                    return -0.5 * (Math.cos(Math.PI * t / 1) - 1)
                },
                easeInExpo: function(t) {
                    return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
                },
                easeOutExpo: function(t) {
                    return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
                },
                easeInOutExpo: function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
                },
                easeInCirc: function(t) {
                    return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
                },
                easeOutCirc: function(t) {
                    return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
                },
                easeInOutCirc: function(t) {
                    return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                },
                easeInElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        a = 1;
                    return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (i || (i = .3), a < Math.abs(1) ? (a = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / a), -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)))
                },
                easeOutElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        a = 1;
                    return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (i || (i = .3), a < Math.abs(1) ? (a = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / a), a * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / i) + 1)
                },
                easeInOutElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        a = 1;
                    return 0 === t ? 0 : 2 === (t /= .5) ? 1 : (i || (i = 1 * (.3 * 1.5)), a < Math.abs(1) ? (a = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / a), 1 > t ? -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)) : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i) * .5 + 1)
                },
                easeInBack: function(t) {
                    var e = 1.70158;
                    return 1 * (t /= 1) * t * ((e + 1) * t - e)
                },
                easeOutBack: function(t) {
                    var e = 1.70158;
                    return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
                },
                easeInOutBack: function(t) {
                    var e = 1.70158;
                    return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
                },
                easeInBounce: function(t) {
                    return 1 - o.easeOutBounce(1 - t)
                },
                easeOutBounce: function(t) {
                    return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                },
                easeInOutBounce: function(t) {
                    return .5 > t ? .5 * o.easeInBounce(2 * t) : .5 * o.easeOutBounce(2 * t - 1) + .5
                }
            };
            s.requestAnimFrame = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    return window.setTimeout(t, 1e3 / 60)
                }
            }(), s.cancelAnimFrame = function() {
                return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
                    return window.clearTimeout(t, 1e3 / 60)
                }
            }(), s.getRelativePosition = function(t, e) {
                var i, a, o = t.originalEvent || t,
                    n = t.currentTarget || t.srcElement,
                    r = n.getBoundingClientRect();
                o.touches && o.touches.length > 0 ? (i = o.touches[0].clientX, a = o.touches[0].clientY) : (i = o.clientX, a = o.clientY);
                var h = parseFloat(s.getStyle(n, "padding-left")),
                    l = parseFloat(s.getStyle(n, "padding-top")),
                    c = parseFloat(s.getStyle(n, "padding-right")),
                    d = parseFloat(s.getStyle(n, "padding-bottom")),
                    u = r.right - r.left - h - c,
                    g = r.bottom - r.top - l - d;
                return i = Math.round((i - r.left - h) / u * n.width / e.currentDevicePixelRatio), a = Math.round((a - r.top - l) / g * n.height / e.currentDevicePixelRatio), {
                    x: i,
                    y: a
                }
            }, s.addEvent = function(t, e, i) {
                t.addEventListener ? t.addEventListener(e, i) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
            }, s.removeEvent = function(t, e, i) {
                t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = s.noop
            }, s.bindEvents = function(t, e, i) {
                t.events || (t.events = {}), s.each(e, function(e) {
                    t.events[e] = function() {
                        i.apply(t, arguments)
                    }, s.addEvent(t.chart.canvas, e, t.events[e])
                })
            }, s.unbindEvents = function(t, e) {
                s.each(e, function(e, i) {
                    s.removeEvent(t.chart.canvas, i, e)
                })
            }, s.getConstraintWidth = function(t) {
                return i(t, "max-width", "clientWidth")
            }, s.getConstraintHeight = function(t) {
                return i(t, "max-height", "clientHeight")
            }, s.getMaximumWidth = function(t) {
                var e = t.parentNode,
                    i = parseInt(s.getStyle(e, "padding-left")) + parseInt(s.getStyle(e, "padding-right")),
                    a = e.clientWidth - i,
                    o = s.getConstraintWidth(t);
                return void 0 !== o && (a = Math.min(a, o)), a
            }, s.getMaximumHeight = function(t) {
                var e = t.parentNode,
                    i = parseInt(s.getStyle(e, "padding-top")) + parseInt(s.getStyle(e, "padding-bottom")),
                    a = e.clientHeight - i,
                    o = s.getConstraintHeight(t);
                return void 0 !== o && (a = Math.min(a, o)), a
            }, s.getStyle = function(t, e) {
                return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
            }, s.retinaScale = function(t) {
                var e = t.ctx,
                    i = t.canvas.width,
                    a = t.canvas.height,
                    s = t.currentDevicePixelRatio = window.devicePixelRatio || 1;
                1 !== s && (e.canvas.height = a * s, e.canvas.width = i * s, e.scale(s, s), t.originalDevicePixelRatio = t.originalDevicePixelRatio || s), e.canvas.style.width = i + "px", e.canvas.style.height = a + "px"
            }, s.clear = function(t) {
                t.ctx.clearRect(0, 0, t.width, t.height)
            }, s.fontString = function(t, e, i) {
                return e + " " + t + "px " + i
            }, s.longestText = function(t, e, i, a) {
                a = a || {}, a.data = a.data || {}, a.garbageCollect = a.garbageCollect || [], a.font !== e && (a.data = {}, a.garbageCollect = [], a.font = e), t.font = e;
                var o = 0;
                s.each(i, function(e) {
                    if (void 0 !== e && null !== e) {
                        var i = a.data[e];
                        i || (i = a.data[e] = t.measureText(e).width, a.garbageCollect.push(e)), i > o && (o = i)
                    }
                });
                var n = a.garbageCollect.length / 2;
                if (n > i.length) {
                    for (var r = 0; n > r; r++) delete a.data[a.garbageCollect[r]];
                    a.garbageCollect.splice(0, n)
                }
                return o
            }, s.drawRoundedRectangle = function(t, e, i, a, s, o) {
                t.beginPath(), t.moveTo(e + o, i), t.lineTo(e + a - o, i), t.quadraticCurveTo(e + a, i, e + a, i + o), t.lineTo(e + a, i + s - o), t.quadraticCurveTo(e + a, i + s, e + a - o, i + s), t.lineTo(e + o, i + s), t.quadraticCurveTo(e, i + s, e, i + s - o), t.lineTo(e, i + o), t.quadraticCurveTo(e, i, e + o, i), t.closePath()
            }, s.color = function(e) {
                return a ? a(e instanceof CanvasGradient ? t.defaults.global.defaultColor : e) : (console.log("Color.js not found!"), e)
            }, s.addResizeListener = function(t, e) {
                var i = document.createElement("iframe"),
                    a = "chartjs-hidden-iframe";
                i.classlist ? i.classlist.add(a) : i.setAttribute("class", a), i.style.width = "100%", i.style.display = "block", i.style.border = 0, i.style.height = 0, i.style.margin = 0, i.style.position = "absolute", i.style.left = 0, i.style.right = 0, i.style.top = 0, i.style.bottom = 0, t.insertBefore(i, t.firstChild), (i.contentWindow || i).onresize = function() {
                    e && e()
                }
            }, s.removeResizeListener = function(t) {
                var e = t.querySelector(".chartjs-hidden-iframe");
                e && e.parentNode.removeChild(e)
            }, s.isArray = function(t) {
                return Array.isArray ? Array.isArray(t) : "[object Array]" === Object.prototype.toString.call(t)
            }, s.pushAllIfDefined = function(t, e) {
                "undefined" != typeof t && (s.isArray(t) ? e.push.apply(e, t) : e.push(t))
            }, s.isDatasetVisible = function(t) {
                return !t.hidden
            }, s.callCallback = function(t, e, i) {
                t && "function" == typeof t.call && t.apply(i, e)
            }
        }
    }, {
        "chartjs-color": 6
    }],
    26: [function(t, e, i) {
        "use strict";
        e.exports = function() {
            var t = function(e, i) {
                this.config = i, e.length && e[0].getContext && (e = e[0]), e.getContext && (e = e.getContext("2d")), this.ctx = e, this.canvas = e.canvas, this.width = e.canvas.width || parseInt(t.helpers.getStyle(e.canvas, "width")) || t.helpers.getMaximumWidth(e.canvas), this.height = e.canvas.height || parseInt(t.helpers.getStyle(e.canvas, "height")) || t.helpers.getMaximumHeight(e.canvas), this.aspectRatio = this.width / this.height, (isNaN(this.aspectRatio) || isFinite(this.aspectRatio) === !1) && (this.aspectRatio = void 0 !== i.aspectRatio ? i.aspectRatio : 2), this.originalCanvasStyleWidth = e.canvas.style.width, this.originalCanvasStyleHeight = e.canvas.style.height, t.helpers.retinaScale(this), i && (this.controller = new t.Controller(this));
                var a = this;
                return t.helpers.addResizeListener(e.canvas.parentNode, function() {
                    a.controller && a.controller.config.options.responsive && a.controller.resize()
                }), this.controller ? this.controller : this
            };
            return t.defaults = {
                global: {
                    responsive: !0,
                    responsiveAnimationDuration: 0,
                    maintainAspectRatio: !0,
                    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                    hover: {
                        onHover: null,
                        mode: "single",
                        animationDuration: 400
                    },
                    onClick: null,
                    defaultColor: "rgba(0,0,0,0.1)",
                    defaultFontColor: "#666",
                    defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    defaultFontSize: 12,
                    defaultFontStyle: "normal",
                    showLines: !0,
                    elements: {},
                    legendCallback: function(t) {
                        var e = [];
                        e.push('<ul class="' + t.id + '-legend">');
                        for (var i = 0; i < t.data.datasets.length; i++) e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
                        return e.push("</ul>"), e.join("")
                    }
                }
            }, t
        }
    }, {}],
    27: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.layoutService = {
                defaults: {},
                addBox: function(t, e) {
                    t.boxes || (t.boxes = []), t.boxes.push(e)
                },
                removeBox: function(t, e) {
                    t.boxes && t.boxes.splice(t.boxes.indexOf(e), 1)
                },
                update: function(t, i, a) {
                    function s(t) {
                        var e, i = t.isHorizontal();
                        i ? (e = t.update(t.options.fullWidth ? m : k, y), D -= e.height) : (e = t.update(v, x), k -= e.width), S.push({
                            horizontal: i,
                            minSize: e,
                            box: t
                        })
                    }

                    function o(t) {
                        var i = e.findNextWhere(S, function(e) {
                            return e.box === t
                        });
                        if (i)
                            if (t.isHorizontal()) {
                                var a = {
                                    left: C,
                                    right: w,
                                    top: 0,
                                    bottom: 0
                                };
                                t.update(t.options.fullWidth ? m : k, p / 2, a)
                            } else t.update(i.minSize.width, D)
                    }

                    function n(t) {
                        var i = e.findNextWhere(S, function(e) {
                                return e.box === t
                            }),
                            a = {
                                left: 0,
                                right: 0,
                                top: _,
                                bottom: A
                            };
                        i && t.update(i.minSize.width, D, a)
                    }

                    function r(t) {
                        t.isHorizontal() ? (t.left = t.options.fullWidth ? h : C, t.right = t.options.fullWidth ? i - h : C + k, t.top = P, t.bottom = P + t.height, P = t.bottom) : (t.left = F, t.right = F + t.width, t.top = _, t.bottom = _ + D, F = t.right)
                    }
                    if (t) {
                        var h = 0,
                            l = 0,
                            c = e.where(t.boxes, function(t) {
                                return "left" === t.options.position
                            }),
                            d = e.where(t.boxes, function(t) {
                                return "right" === t.options.position
                            }),
                            u = e.where(t.boxes, function(t) {
                                return "top" === t.options.position
                            }),
                            g = e.where(t.boxes, function(t) {
                                return "bottom" === t.options.position
                            }),
                            f = e.where(t.boxes, function(t) {
                                return "chartArea" === t.options.position
                            });
                        u.sort(function(t, e) {
                            return (e.options.fullWidth ? 1 : 0) - (t.options.fullWidth ? 1 : 0)
                        }), g.sort(function(t, e) {
                            return (t.options.fullWidth ? 1 : 0) - (e.options.fullWidth ? 1 : 0)
                        });
                        var m = i - 2 * h,
                            p = a - 2 * l,
                            b = m / 2,
                            x = p / 2,
                            v = (i - b) / (c.length + d.length),
                            y = (a - x) / (u.length + g.length),
                            k = m,
                            D = p,
                            S = [];
                        e.each(c.concat(d, u, g), s);
                        var C = h,
                            w = h,
                            _ = l,
                            A = l;
                        e.each(c.concat(d), o), e.each(c, function(t) {
                            C += t.width
                        }), e.each(d, function(t) {
                            w += t.width
                        }), e.each(u.concat(g), o), e.each(u, function(t) {
                            _ += t.height
                        }), e.each(g, function(t) {
                            A += t.height
                        }), e.each(c.concat(d), n), C = h, w = h, _ = l, A = l, e.each(c, function(t) {
                            C += t.width
                        }), e.each(d, function(t) {
                            w += t.width
                        }), e.each(u, function(t) {
                            _ += t.height
                        }), e.each(g, function(t) {
                            A += t.height
                        });
                        var M = a - _ - A,
                            I = i - C - w;
                        (I !== k || M !== D) && (e.each(c, function(t) {
                            t.height = M
                        }), e.each(d, function(t) {
                            t.height = M
                        }), e.each(u, function(t) {
                            t.width = I
                        }), e.each(g, function(t) {
                            t.width = I
                        }), D = M, k = I);
                        var F = h,
                            P = l;
                        e.each(c.concat(u), r), F += k, P += D, e.each(d, r), e.each(g, r), t.chartArea = {
                            left: C,
                            top: _,
                            right: C + k,
                            bottom: _ + D
                        }, e.each(f, function(e) {
                            e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(k, D)
                        })
                    }
                }
            }
        }
    }, {}],
    28: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.global.legend = {
                display: !0,
                position: "top",
                fullWidth: !0,
                reverse: !1,
                onClick: function(t, e) {
                    var i = this.chart.data.datasets[e.datasetIndex];
                    i.hidden = !i.hidden, this.chart.update()
                },
                labels: {
                    boxWidth: 40,
                    padding: 10,
                    generateLabels: function(t) {
                        return e.isArray(t.datasets) ? t.datasets.map(function(t, e) {
                            return {
                                text: t.label,
                                fillStyle: t.backgroundColor,
                                hidden: t.hidden,
                                lineCap: t.borderCapStyle,
                                lineDash: t.borderDash,
                                lineDashOffset: t.borderDashOffset,
                                lineJoin: t.borderJoinStyle,
                                lineWidth: t.borderWidth,
                                strokeStyle: t.borderColor,
                                datasetIndex: e
                            }
                        }, this) : []
                    }
                }
            }, t.Legend = t.Element.extend({
                initialize: function(t) {
                    e.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
                },
                beforeUpdate: e.noop,
                update: function(t, e, i) {
                    return this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this.margins = i, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this.beforeBuildLabels(), this.buildLabels(), this.afterBuildLabels(), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate(), this.minSize
                },
                afterUpdate: e.noop,
                beforeSetDimensions: e.noop,
                setDimensions: function() {
                    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0, this.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: e.noop,
                beforeBuildLabels: e.noop,
                buildLabels: function() {
                    this.legendItems = this.options.labels.generateLabels.call(this, this.chart.data), this.options.reverse && this.legendItems.reverse()
                },
                afterBuildLabels: e.noop,
                beforeFit: e.noop,
                fit: function() {
                    var i = this.ctx,
                        a = e.getValueOrDefault(this.options.labels.fontSize, t.defaults.global.defaultFontSize),
                        s = e.getValueOrDefault(this.options.labels.fontStyle, t.defaults.global.defaultFontStyle),
                        o = e.getValueOrDefault(this.options.labels.fontFamily, t.defaults.global.defaultFontFamily),
                        n = e.fontString(a, s, o);
                    if (this.legendHitBoxes = [], this.isHorizontal() ? this.minSize.width = this.maxWidth : this.minSize.width = this.options.display ? 10 : 0, this.isHorizontal() ? this.minSize.height = this.options.display ? 10 : 0 : this.minSize.height = this.maxHeight, this.options.display && this.isHorizontal()) {
                        this.lineWidths = [0];
                        var r = this.legendItems.length ? a + this.options.labels.padding : 0;
                        i.textAlign = "left", i.textBaseline = "top", i.font = n, e.each(this.legendItems, function(t, e) {
                            var s = this.options.labels.boxWidth + a / 2 + i.measureText(t.text).width;
                            this.lineWidths[this.lineWidths.length - 1] + s + this.options.labels.padding >= this.width && (r += a + this.options.labels.padding, this.lineWidths[this.lineWidths.length] = this.left), this.legendHitBoxes[e] = {
                                left: 0,
                                top: 0,
                                width: s,
                                height: a
                            }, this.lineWidths[this.lineWidths.length - 1] += s + this.options.labels.padding
                        }, this), this.minSize.height += r
                    }
                    this.width = this.minSize.width, this.height = this.minSize.height
                },
                afterFit: e.noop,
                isHorizontal: function() {
                    return "top" === this.options.position || "bottom" === this.options.position
                },
                draw: function() {
                    if (this.options.display) {
                        var i = this.ctx,
                            a = {
                                x: this.left + (this.width - this.lineWidths[0]) / 2,
                                y: this.top + this.options.labels.padding,
                                line: 0
                            },
                            s = e.getValueOrDefault(this.options.labels.fontColor, t.defaults.global.defaultFontColor),
                            o = e.getValueOrDefault(this.options.labels.fontSize, t.defaults.global.defaultFontSize),
                            n = e.getValueOrDefault(this.options.labels.fontStyle, t.defaults.global.defaultFontStyle),
                            r = e.getValueOrDefault(this.options.labels.fontFamily, t.defaults.global.defaultFontFamily),
                            h = e.fontString(o, n, r);
                        this.isHorizontal() && (i.textAlign = "left", i.textBaseline = "top", i.lineWidth = .5, i.strokeStyle = s, i.fillStyle = s, i.font = h, e.each(this.legendItems, function(e, s) {
                            var n = i.measureText(e.text).width,
                                r = this.options.labels.boxWidth + o / 2 + n;
                            a.x + r >= this.width && (a.y += o + this.options.labels.padding, a.line++, a.x = this.left + (this.width - this.lineWidths[a.line]) / 2), i.save();
                            var h = function(t, e) {
                                return void 0 !== t ? t : e
                            };
                            i.fillStyle = h(e.fillStyle, t.defaults.global.defaultColor), i.lineCap = h(e.lineCap, t.defaults.global.elements.line.borderCapStyle), i.lineDashOffset = h(e.lineDashOffset, t.defaults.global.elements.line.borderDashOffset), i.lineJoin = h(e.lineJoin, t.defaults.global.elements.line.borderJoinStyle), i.lineWidth = h(e.lineWidth, t.defaults.global.elements.line.borderWidth), i.strokeStyle = h(e.strokeStyle, t.defaults.global.defaultColor), i.setLineDash && i.setLineDash(h(e.lineDash, t.defaults.global.elements.line.borderDash)), i.strokeRect(a.x, a.y, this.options.labels.boxWidth, o), i.fillRect(a.x, a.y, this.options.labels.boxWidth, o), i.restore(), this.legendHitBoxes[s].left = a.x, this.legendHitBoxes[s].top = a.y, i.fillText(e.text, this.options.labels.boxWidth + o / 2 + a.x, a.y), e.hidden && (i.beginPath(), i.lineWidth = 2, i.moveTo(this.options.labels.boxWidth + o / 2 + a.x, a.y + o / 2), i.lineTo(this.options.labels.boxWidth + o / 2 + a.x + n, a.y + o / 2), i.stroke()), a.x += r + this.options.labels.padding
                        }, this))
                    }
                },
                handleEvent: function(t) {
                    var i = e.getRelativePosition(t, this.chart.chart);
                    if (i.x >= this.left && i.x <= this.right && i.y >= this.top && i.y <= this.bottom)
                        for (var a = 0; a < this.legendHitBoxes.length; ++a) {
                            var s = this.legendHitBoxes[a];
                            if (i.x >= s.left && i.x <= s.left + s.width && i.y >= s.top && i.y <= s.top + s.height) {
                                this.options.onClick && this.options.onClick.call(this, t, this.legendItems[a]);
                                break
                            }
                        }
                }
            })
        }
    }, {}],
    29: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.scale = {
                display: !0,
                gridLines: {
                    display: !0,
                    color: "rgba(0, 0, 0, 0.1)",
                    lineWidth: 1,
                    drawOnChartArea: !0,
                    drawTicks: !0,
                    zeroLineWidth: 1,
                    zeroLineColor: "rgba(0,0,0,0.25)",
                    offsetGridLines: !1
                },
                scaleLabel: {
                    labelString: "",
                    display: !1
                },
                ticks: {
                    beginAtZero: !1,
                    maxRotation: 50,
                    mirror: !1,
                    padding: 10,
                    reverse: !1,
                    display: !0,
                    autoSkip: !0,
                    autoSkipPadding: 0,
                    callback: function(t) {
                        return "" + t
                    }
                }
            }, t.Scale = t.Element.extend({
                beforeUpdate: function() {
                    e.callCallback(this.options.beforeUpdate, [this])
                },
                update: function(t, i, a) {
                    return this.beforeUpdate(), this.maxWidth = t, this.maxHeight = i, this.margins = e.extend({
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }, a), this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this.beforeBuildTicks(), this.buildTicks(), this.afterBuildTicks(), this.beforeTickToLabelConversion(), this.convertTicksToLabels(), this.afterTickToLabelConversion(), this.beforeCalculateTickRotation(), this.calculateTickRotation(), this.afterCalculateTickRotation(), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate(), this.minSize
                },
                afterUpdate: function() {
                    e.callCallback(this.options.afterUpdate, [this])
                },
                beforeSetDimensions: function() {
                    e.callCallback(this.options.beforeSetDimensions, [this])
                },
                setDimensions: function() {
                    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0
                },
                afterSetDimensions: function() {
                    e.callCallback(this.options.afterSetDimensions, [this])
                },
                beforeDataLimits: function() {
                    e.callCallback(this.options.beforeDataLimits, [this])
                },
                determineDataLimits: e.noop,
                afterDataLimits: function() {
                    e.callCallback(this.options.afterDataLimits, [this])
                },
                beforeBuildTicks: function() {
                    e.callCallback(this.options.beforeBuildTicks, [this])
                },
                buildTicks: e.noop,
                afterBuildTicks: function() {
                    e.callCallback(this.options.afterBuildTicks, [this])
                },
                beforeTickToLabelConversion: function() {
                    e.callCallback(this.options.beforeTickToLabelConversion, [this])
                },
                convertTicksToLabels: function() {
                    this.ticks = this.ticks.map(function(t, e, i) {
                        return this.options.ticks.userCallback ? this.options.ticks.userCallback(t, e, i) : this.options.ticks.callback(t, e, i)
                    }, this)
                },
                afterTickToLabelConversion: function() {
                    e.callCallback(this.options.afterTickToLabelConversion, [this])
                },
                beforeCalculateTickRotation: function() {
                    e.callCallback(this.options.beforeCalculateTickRotation, [this])
                },
                calculateTickRotation: function() {
                    var i = e.getValueOrDefault(this.options.ticks.fontSize, t.defaults.global.defaultFontSize),
                        a = e.getValueOrDefault(this.options.ticks.fontStyle, t.defaults.global.defaultFontStyle),
                        s = e.getValueOrDefault(this.options.ticks.fontFamily, t.defaults.global.defaultFontFamily),
                        o = e.fontString(i, a, s);
                    this.ctx.font = o;
                    var n, r = this.ctx.measureText(this.ticks[0]).width,
                        h = this.ctx.measureText(this.ticks[this.ticks.length - 1]).width;
                    if (this.labelRotation = 0, this.paddingRight = 0, this.paddingLeft = 0, this.options.display && this.isHorizontal()) {
                        this.paddingRight = h / 2 + 3, this.paddingLeft = r / 2 + 3, this.longestTextCache || (this.longestTextCache = {});
                        for (var l, c, d = e.longestText(this.ctx, o, this.ticks, this.longestTextCache), u = d, g = this.getPixelForTick(1) - this.getPixelForTick(0) - 6; u > g && this.labelRotation < this.options.ticks.maxRotation;) {
                            if (l = Math.cos(e.toRadians(this.labelRotation)), c = Math.sin(e.toRadians(this.labelRotation)), n = l * r, n + i / 2 > this.yLabelWidth && (this.paddingLeft = n + i / 2), this.paddingRight = i / 2, c * d > this.maxHeight) {
                                this.labelRotation--;
                                break
                            }
                            this.labelRotation++, u = l * d
                        }
                    }
                    this.margins && (this.paddingLeft = Math.max(this.paddingLeft - this.margins.left, 0), this.paddingRight = Math.max(this.paddingRight - this.margins.right, 0))
                },
                afterCalculateTickRotation: function() {
                    e.callCallback(this.options.afterCalculateTickRotation, [this])
                },
                beforeFit: function() {
                    e.callCallback(this.options.beforeFit, [this])
                },
                fit: function() {
                    this.minSize = {
                        width: 0,
                        height: 0
                    };
                    var i = e.getValueOrDefault(this.options.ticks.fontSize, t.defaults.global.defaultFontSize),
                        a = e.getValueOrDefault(this.options.ticks.fontStyle, t.defaults.global.defaultFontStyle),
                        s = e.getValueOrDefault(this.options.ticks.fontFamily, t.defaults.global.defaultFontFamily),
                        o = e.fontString(i, a, s),
                        n = e.getValueOrDefault(this.options.scaleLabel.fontSize, t.defaults.global.defaultFontSize),
                        r = e.getValueOrDefault(this.options.scaleLabel.fontStyle, t.defaults.global.defaultFontStyle),
                        h = e.getValueOrDefault(this.options.scaleLabel.fontFamily, t.defaults.global.defaultFontFamily);
                    e.fontString(n, r, h);
                    if (this.isHorizontal() ? this.minSize.width = this.isFullWidth() ? this.maxWidth - this.margins.left - this.margins.right : this.maxWidth : this.minSize.width = this.options.gridLines.display && this.options.display ? 10 : 0, this.isHorizontal() ? this.minSize.height = this.options.gridLines.display && this.options.display ? 10 : 0 : this.minSize.height = this.maxHeight, this.options.scaleLabel.display && (this.isHorizontal() ? this.minSize.height += 1.5 * n : this.minSize.width += 1.5 * n), this.options.ticks.display && this.options.display) {
                        this.longestTextCache || (this.longestTextCache = {});
                        var l = e.longestText(this.ctx, o, this.ticks, this.longestTextCache);
                        if (this.isHorizontal()) {
                            this.longestLabelWidth = l;
                            var c = Math.sin(e.toRadians(this.labelRotation)) * this.longestLabelWidth + 1.5 * i;
                            this.minSize.height = Math.min(this.maxHeight, this.minSize.height + c), this.ctx.font = o;
                            var d = this.ctx.measureText(this.ticks[0]).width,
                                u = this.ctx.measureText(this.ticks[this.ticks.length - 1]).width,
                                g = Math.cos(e.toRadians(this.labelRotation)),
                                f = Math.sin(e.toRadians(this.labelRotation));
                            this.paddingLeft = 0 !== this.labelRotation ? g * d + 3 : d / 2 + 3, this.paddingRight = 0 !== this.labelRotation ? f * (i / 2) + 3 : u / 2 + 3
                        } else {
                            var m = this.maxWidth - this.minSize.width;
                            this.options.ticks.mirror || (l += this.options.ticks.padding), m > l ? this.minSize.width += l : this.minSize.width = this.maxWidth, this.paddingTop = i / 2, this.paddingBottom = i / 2
                        }
                    }
                    this.margins && (this.paddingLeft = Math.max(this.paddingLeft - this.margins.left, 0), this.paddingTop = Math.max(this.paddingTop - this.margins.top, 0), this.paddingRight = Math.max(this.paddingRight - this.margins.right, 0), this.paddingBottom = Math.max(this.paddingBottom - this.margins.bottom, 0)), this.width = this.minSize.width, this.height = this.minSize.height
                },
                afterFit: function() {
                    e.callCallback(this.options.afterFit, [this])
                },
                isHorizontal: function() {
                    return "top" === this.options.position || "bottom" === this.options.position
                },
                isFullWidth: function() {
                    return this.options.fullWidth
                },
                getRightValue: function i(t) {
                    return null === t || "undefined" == typeof t ? NaN : "number" == typeof t && isNaN(t) ? NaN : "object" == typeof t ? t instanceof Date ? t : i(this.isHorizontal() ? t.x : t.y) : t
                },
                getLabelForIndex: e.noop,
                getPixelForValue: e.noop,
                getPixelForTick: function(t, e) {
                    if (this.isHorizontal()) {
                        var i = this.width - (this.paddingLeft + this.paddingRight),
                            a = i / Math.max(this.ticks.length - (this.options.gridLines.offsetGridLines ? 0 : 1), 1),
                            s = a * t + this.paddingLeft;
                        e && (s += a / 2);
                        var o = this.left + Math.round(s);
                        return o += this.isFullWidth() ? this.margins.left : 0
                    }
                    var n = this.height - (this.paddingTop + this.paddingBottom);
                    return this.top + t * (n / (this.ticks.length - 1))
                },
                getPixelForDecimal: function(t) {
                    if (this.isHorizontal()) {
                        var e = this.width - (this.paddingLeft + this.paddingRight),
                            i = e * t + this.paddingLeft,
                            a = this.left + Math.round(i);
                        return a += this.isFullWidth() ? this.margins.left : 0
                    }
                    return this.top + t * this.height
                },
                draw: function(i) {
                    if (this.options.display) {
                        var a, s, o, n, r, h = 0 !== this.labelRotation,
                            l = this.options.ticks.autoSkip;
                        this.options.ticks.maxTicksLimit && (r = this.options.ticks.maxTicksLimit);
                        var c = e.getValueOrDefault(this.options.ticks.fontColor, t.defaults.global.defaultFontColor),
                            d = e.getValueOrDefault(this.options.ticks.fontSize, t.defaults.global.defaultFontSize),
                            u = e.getValueOrDefault(this.options.ticks.fontStyle, t.defaults.global.defaultFontStyle),
                            g = e.getValueOrDefault(this.options.ticks.fontFamily, t.defaults.global.defaultFontFamily),
                            f = e.fontString(d, u, g),
                            m = e.getValueOrDefault(this.options.scaleLabel.fontColor, t.defaults.global.defaultFontColor),
                            p = e.getValueOrDefault(this.options.scaleLabel.fontSize, t.defaults.global.defaultFontSize),
                            b = e.getValueOrDefault(this.options.scaleLabel.fontStyle, t.defaults.global.defaultFontStyle),
                            x = e.getValueOrDefault(this.options.scaleLabel.fontFamily, t.defaults.global.defaultFontFamily),
                            v = e.fontString(p, b, x),
                            y = Math.cos(e.toRadians(this.labelRotation)),
                            k = (Math.sin(e.toRadians(this.labelRotation)), this.longestLabelWidth * y);
                        if (this.ctx.fillStyle = c, this.isHorizontal()) {
                            a = !0;
                            var D = "bottom" === this.options.position ? this.top : this.bottom - 10,
                                S = "bottom" === this.options.position ? this.top + 10 : this.bottom;
                            if (s = !1, (k / 2 + this.options.ticks.autoSkipPadding) * this.ticks.length > this.width - (this.paddingLeft + this.paddingRight) && (s = 1 + Math.floor((k / 2 + this.options.ticks.autoSkipPadding) * this.ticks.length / (this.width - (this.paddingLeft + this.paddingRight)))), r && this.ticks.length > r)
                                for (; !s || this.ticks.length / (s || 1) > r;) s || (s = 1), s += 1;
                            l || (s = !1), e.each(this.ticks, function(t, o) {
                                var n = this.ticks.length === o + 1,
                                    r = s > 1 && o % s > 0 || o % s === 0 && o + s > this.ticks.length;
                                if ((!r || n) && void 0 !== t && null !== t) {
                                    var l = this.getPixelForTick(o),
                                        c = this.getPixelForTick(o, this.options.gridLines.offsetGridLines);
                                    this.options.gridLines.display && (o === ("undefined" != typeof this.zeroLineIndex ? this.zeroLineIndex : 0) ? (this.ctx.lineWidth = this.options.gridLines.zeroLineWidth, this.ctx.strokeStyle = this.options.gridLines.zeroLineColor, a = !0) : a && (this.ctx.lineWidth = this.options.gridLines.lineWidth, this.ctx.strokeStyle = this.options.gridLines.color, a = !1), l += e.aliasPixel(this.ctx.lineWidth), this.ctx.beginPath(), this.options.gridLines.drawTicks && (this.ctx.moveTo(l, D), this.ctx.lineTo(l, S)), this.options.gridLines.drawOnChartArea && (this.ctx.moveTo(l, i.top), this.ctx.lineTo(l, i.bottom)), this.ctx.stroke()), this.options.ticks.display && (this.ctx.save(), this.ctx.translate(c, h ? this.top + 12 : "top" === this.options.position ? this.bottom - 10 : this.top + 10), this.ctx.rotate(-1 * e.toRadians(this.labelRotation)), this.ctx.font = f, this.ctx.textAlign = h ? "right" : "center", this.ctx.textBaseline = h ? "middle" : "top" === this.options.position ? "bottom" : "top", this.ctx.fillText(t, 0, 0), this.ctx.restore())
                                }
                            }, this), this.options.scaleLabel.display && (this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillStyle = m, this.ctx.font = v, o = this.left + (this.right - this.left) / 2, n = "bottom" === this.options.position ? this.bottom - p / 2 : this.top + p / 2, this.ctx.fillText(this.options.scaleLabel.labelString, o, n))
                        } else {
                            a = !0;
                            var C = "right" === this.options.position ? this.left : this.right - 5,
                                w = "right" === this.options.position ? this.left + 5 : this.right;
                            if (e.each(this.ticks, function(t, s) {
                                    if (void 0 !== t && null !== t) {
                                        var o = this.getPixelForTick(s);
                                        if (this.options.gridLines.display && (s === ("undefined" != typeof this.zeroLineIndex ? this.zeroLineIndex : 0) ? (this.ctx.lineWidth = this.options.gridLines.zeroLineWidth, this.ctx.strokeStyle = this.options.gridLines.zeroLineColor, a = !0) : a && (this.ctx.lineWidth = this.options.gridLines.lineWidth, this.ctx.strokeStyle = this.options.gridLines.color, a = !1), o += e.aliasPixel(this.ctx.lineWidth), this.ctx.beginPath(), this.options.gridLines.drawTicks && (this.ctx.moveTo(C, o), this.ctx.lineTo(w, o)), this.options.gridLines.drawOnChartArea && (this.ctx.moveTo(i.left, o), this.ctx.lineTo(i.right, o)), this.ctx.stroke()), this.options.ticks.display) {
                                            var n, r = this.getPixelForTick(s, this.options.gridLines.offsetGridLines);
                                            this.ctx.save(), "left" === this.options.position ? this.options.ticks.mirror ? (n = this.right + this.options.ticks.padding, this.ctx.textAlign = "left") : (n = this.right - this.options.ticks.padding, this.ctx.textAlign = "right") : this.options.ticks.mirror ? (n = this.left - this.options.ticks.padding, this.ctx.textAlign = "right") : (n = this.left + this.options.ticks.padding, this.ctx.textAlign = "left"), this.ctx.translate(n, r), this.ctx.rotate(-1 * e.toRadians(this.labelRotation)), this.ctx.font = f, this.ctx.textBaseline = "middle", this.ctx.fillText(t, 0, 0), this.ctx.restore()
                                        }
                                    }
                                }, this), this.options.scaleLabel.display) {
                                o = "left" === this.options.position ? this.left + p / 2 : this.right - p / 2, n = this.top + (this.bottom - this.top) / 2;
                                var _ = "left" === this.options.position ? -.5 * Math.PI : .5 * Math.PI;
                                this.ctx.save(), this.ctx.translate(o, n), this.ctx.rotate(_), this.ctx.textAlign = "center", this.ctx.fillStyle = m, this.ctx.font = v, this.ctx.textBaseline = "middle", this.ctx.fillText(this.options.scaleLabel.labelString, 0, 0), this.ctx.restore()
                            }
                        }
                        this.ctx.lineWidth = this.options.gridLines.lineWidth, this.ctx.strokeStyle = this.options.gridLines.color;
                        var A = this.left,
                            M = this.right,
                            I = this.top,
                            F = this.bottom;
                        this.isHorizontal() ? (I = F = "top" === this.options.position ? this.bottom : this.top, I += e.aliasPixel(this.ctx.lineWidth), F += e.aliasPixel(this.ctx.lineWidth)) : (A = M = "left" === this.options.position ? this.right : this.left, A += e.aliasPixel(this.ctx.lineWidth), M += e.aliasPixel(this.ctx.lineWidth)), this.ctx.beginPath(), this.ctx.moveTo(A, I), this.ctx.lineTo(M, F), this.ctx.stroke()
                    }
                }
            })
        }
    }, {}],
    30: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.scaleService = {
                constructors: {},
                defaults: {},
                registerScaleType: function(t, i, a) {
                    this.constructors[t] = i, this.defaults[t] = e.clone(a)
                },
                getScaleConstructor: function(t) {
                    return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                },
                getScaleDefaults: function(i) {
                    return this.defaults.hasOwnProperty(i) ? e.scaleMerge(t.defaults.scale, this.defaults[i]) : {}
                },
                addScalesToLayout: function(i) {
                    e.each(i.scales, function(e) {
                        t.layoutService.addBox(i, e)
                    })
                }
            }
        }
    }, {}],
    31: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.global.title = {
                display: !1,
                position: "top",
                fullWidth: !0,
                fontStyle: "bold",
                padding: 10,
                text: ""
            }, t.Title = t.Element.extend({
                initialize: function(i) {
                    e.extend(this, i), this.options = e.configMerge(t.defaults.global.title, i.options), this.legendHitBoxes = []
                },
                beforeUpdate: e.noop,
                update: function(t, e, i) {
                    return this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this.margins = i, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this.beforeBuildLabels(), this.buildLabels(), this.afterBuildLabels(), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate(), this.minSize
                },
                afterUpdate: e.noop,
                beforeSetDimensions: e.noop,
                setDimensions: function() {
                    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0, this.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: e.noop,
                beforeBuildLabels: e.noop,
                buildLabels: e.noop,
                afterBuildLabels: e.noop,
                beforeFit: e.noop,
                fit: function() {
                    var i = (this.ctx, e.getValueOrDefault(this.options.fontSize, t.defaults.global.defaultFontSize)),
                        a = e.getValueOrDefault(this.options.fontStyle, t.defaults.global.defaultFontStyle),
                        s = e.getValueOrDefault(this.options.fontFamily, t.defaults.global.defaultFontFamily);
                    e.fontString(i, a, s);
                    this.isHorizontal() ? this.minSize.width = this.maxWidth : this.minSize.width = 0, this.isHorizontal() ? this.minSize.height = 0 : this.minSize.height = this.maxHeight, this.isHorizontal() ? this.options.display && (this.minSize.height += i + 2 * this.options.padding) : this.options.display && (this.minSize.width += i + 2 * this.options.padding), this.width = this.minSize.width, this.height = this.minSize.height
                },
                afterFit: e.noop,
                isHorizontal: function() {
                    return "top" === this.options.position || "bottom" === this.options.position
                },
                draw: function() {
                    if (this.options.display) {
                        var i, a, s = this.ctx,
                            o = e.getValueOrDefault(this.options.fontColor, t.defaults.global.defaultFontColor),
                            n = e.getValueOrDefault(this.options.fontSize, t.defaults.global.defaultFontSize),
                            r = e.getValueOrDefault(this.options.fontStyle, t.defaults.global.defaultFontStyle),
                            h = e.getValueOrDefault(this.options.fontFamily, t.defaults.global.defaultFontFamily),
                            l = e.fontString(n, r, h);
                        if (s.fillStyle = o, s.font = l, this.isHorizontal()) s.textAlign = "center", s.textBaseline = "middle", i = this.left + (this.right - this.left) / 2, a = this.top + (this.bottom - this.top) / 2, s.fillText(this.options.text, i, a);
                        else {
                            i = "left" === this.options.position ? this.left + n / 2 : this.right - n / 2, a = this.top + (this.bottom - this.top) / 2;
                            var c = "left" === this.options.position ? -.5 * Math.PI : .5 * Math.PI;
                            s.save(), s.translate(i, a), s.rotate(c), s.textAlign = "center", s.textBaseline = "middle", s.fillText(this.options.text, 0, 0), s.restore()
                        }
                    }
                }
            })
        }
    }, {}],
    32: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            function e(t, e) {
                return e && (i.isArray(e) ? t = t.concat(e) : t.push(e)), t
            }
            var i = t.helpers;
            t.defaults.global.tooltips = {
                enabled: !0,
                custom: null,
                mode: "single",
                backgroundColor: "rgba(0,0,0,0.8)",
                titleFontStyle: "bold",
                titleSpacing: 2,
                titleMarginBottom: 6,
                titleColor: "#fff",
                titleAlign: "left",
                bodySpacing: 2,
                bodyColor: "#fff",
                bodyAlign: "left",
                footerFontStyle: "bold",
                footerSpacing: 2,
                footerMarginTop: 6,
                footerColor: "#fff",
                footerAlign: "left",
                yPadding: 6,
                xPadding: 6,
                yAlign: "center",
                xAlign: "center",
                caretSize: 5,
                cornerRadius: 6,
                multiKeyBackground: "#fff",
                callbacks: {
                    beforeTitle: i.noop,
                    title: function(t, e) {
                        var i = "";
                        return t.length > 0 && (t[0].xLabel ? i = t[0].xLabel : e.labels.length > 0 && t[0].index < e.labels.length && (i = e.labels[t[0].index])), i
                    },
                    afterTitle: i.noop,
                    beforeBody: i.noop,
                    beforeLabel: i.noop,
                    label: function(t, e) {
                        var i = e.datasets[t.datasetIndex].label || "";
                        return i + ": " + t.yLabel
                    },
                    afterLabel: i.noop,
                    afterBody: i.noop,
                    beforeFooter: i.noop,
                    footer: i.noop,
                    afterFooter: i.noop
                }
            }, t.Tooltip = t.Element.extend({
                initialize: function() {
                    var e = this._options;
                    i.extend(this, {
                        _model: {
                            xPadding: e.tooltips.xPadding,
                            yPadding: e.tooltips.yPadding,
                            xAlign: e.tooltips.yAlign,
                            yAlign: e.tooltips.xAlign,
                            bodyColor: e.tooltips.bodyColor,
                            _bodyFontFamily: i.getValueOrDefault(e.tooltips.bodyFontFamily, t.defaults.global.defaultFontFamily),
                            _bodyFontStyle: i.getValueOrDefault(e.tooltips.bodyFontStyle, t.defaults.global.defaultFontStyle),
                            _bodyAlign: e.tooltips.bodyAlign,
                            bodyFontSize: i.getValueOrDefault(e.tooltips.bodyFontSize, t.defaults.global.defaultFontSize),
                            bodySpacing: e.tooltips.bodySpacing,
                            titleColor: e.tooltips.titleColor,
                            _titleFontFamily: i.getValueOrDefault(e.tooltips.titleFontFamily, t.defaults.global.defaultFontFamily),
                            _titleFontStyle: i.getValueOrDefault(e.tooltips.titleFontStyle, t.defaults.global.defaultFontStyle),
                            titleFontSize: i.getValueOrDefault(e.tooltips.titleFontSize, t.defaults.global.defaultFontSize),
                            _titleAlign: e.tooltips.titleAlign,
                            titleSpacing: e.tooltips.titleSpacing,
                            titleMarginBottom: e.tooltips.titleMarginBottom,
                            footerColor: e.tooltips.footerColor,
                            _footerFontFamily: i.getValueOrDefault(e.tooltips.footerFontFamily, t.defaults.global.defaultFontFamily),
                            _footerFontStyle: i.getValueOrDefault(e.tooltips.footerFontStyle, t.defaults.global.defaultFontStyle),
                            footerFontSize: i.getValueOrDefault(e.tooltips.footerFontSize, t.defaults.global.defaultFontSize),
                            _footerAlign: e.tooltips.footerAlign,
                            footerSpacing: e.tooltips.footerSpacing,
                            footerMarginTop: e.tooltips.footerMarginTop,
                            caretSize: e.tooltips.caretSize,
                            cornerRadius: e.tooltips.cornerRadius,
                            backgroundColor: e.tooltips.backgroundColor,
                            opacity: 0,
                            legendColorBackground: e.tooltips.multiKeyBackground
                        }
                    })
                },
                getTitle: function() {
                    var t = this._options.tooltips.callbacks.beforeTitle.apply(this, arguments),
                        i = this._options.tooltips.callbacks.title.apply(this, arguments),
                        a = this._options.tooltips.callbacks.afterTitle.apply(this, arguments),
                        s = [];
                    return s = e(s, t), s = e(s, i), s = e(s, a)
                },
                getBeforeBody: function() {
                    var t = this._options.tooltips.callbacks.beforeBody.apply(this, arguments);
                    return i.isArray(t) ? t : void 0 !== t ? [t] : []
                },
                getBody: function(t, e) {
                    var a = [];
                    return i.each(t, function(t) {
                        i.pushAllIfDefined(this._options.tooltips.callbacks.beforeLabel.call(this, t, e), a), i.pushAllIfDefined(this._options.tooltips.callbacks.label.call(this, t, e), a), i.pushAllIfDefined(this._options.tooltips.callbacks.afterLabel.call(this, t, e), a)
                    }, this), a
                },
                getAfterBody: function() {
                    var t = this._options.tooltips.callbacks.afterBody.apply(this, arguments);
                    return i.isArray(t) ? t : void 0 !== t ? [t] : []
                },
                getFooter: function() {
                    var t = this._options.tooltips.callbacks.beforeFooter.apply(this, arguments),
                        i = this._options.tooltips.callbacks.footer.apply(this, arguments),
                        a = this._options.tooltips.callbacks.afterFooter.apply(this, arguments),
                        s = [];
                    return s = e(s, t), s = e(s, i), s = e(s, a)
                },
                getAveragePosition: function(t) {
                    if (!t.length) return !1;
                    var e = [],
                        a = [];
                    i.each(t, function(t) {
                        if (t) {
                            var i = t.tooltipPosition();
                            e.push(i.x), a.push(i.y)
                        }
                    });
                    for (var s = 0, o = 0, n = 0; n < e.length; n++) s += e[n], o += a[n];
                    return {
                        x: Math.round(s / e.length),
                        y: Math.round(o / e.length)
                    }
                },
                update: function(t) {
                    if (this._active.length) {
                        this._model.opacity = 1;
                        var e, a = this._active[0],
                            s = [],
                            o = [];
                        if ("single" === this._options.tooltips.mode) {
                            var n = a._yScale || a._scale;
                            o.push({
                                xLabel: a._xScale ? a._xScale.getLabelForIndex(a._index, a._datasetIndex) : "",
                                yLabel: n ? n.getLabelForIndex(a._index, a._datasetIndex) : "",
                                index: a._index,
                                datasetIndex: a._datasetIndex
                            }), e = this.getAveragePosition(this._active)
                        } else i.each(this._data.datasets, function(t, e) {
                            if (i.isDatasetVisible(t)) {
                                var s = t.metaData[a._index];
                                if (s) {
                                    var n = a._yScale || a._scale;
                                    o.push({
                                        xLabel: s._xScale ? s._xScale.getLabelForIndex(s._index, s._datasetIndex) : "",
                                        yLabel: n ? n.getLabelForIndex(s._index, s._datasetIndex) : "",
                                        index: a._index,
                                        datasetIndex: e
                                    })
                                }
                            }
                        }, null, a._yScale.options.stacked), i.each(this._active, function(t) {
                            t && s.push({
                                borderColor: t._view.borderColor,
                                backgroundColor: t._view.backgroundColor
                            })
                        }, null, a._yScale.options.stacked), e = this.getAveragePosition(this._active), e.y = this._active[0]._yScale.getPixelForDecimal(.5);
                        i.extend(this._model, {
                            title: this.getTitle(o, this._data),
                            beforeBody: this.getBeforeBody(o, this._data),
                            body: this.getBody(o, this._data),
                            afterBody: this.getAfterBody(o, this._data),
                            footer: this.getFooter(o, this._data)
                        }), i.extend(this._model, {
                            x: Math.round(e.x),
                            y: Math.round(e.y),
                            caretPadding: i.getValueOrDefault(e.padding, 2),
                            labelColors: s
                        });
                        var r = this.getTooltipSize(this._model);
                        this.determineAlignment(r), i.extend(this._model, this.getBackgroundPoint(this._model, r))
                    } else this._model.opacity = 0;
                    return t && this._options.tooltips.custom && this._options.tooltips.custom.call(this, this._model), this
                },
                getTooltipSize: function(t) {
                    var e = this._chart.ctx,
                        a = {
                            height: 2 * t.yPadding,
                            width: 0
                        },
                        s = t.body.length + t.beforeBody.length + t.afterBody.length;
                    return a.height += t.title.length * t.titleFontSize, a.height += (t.title.length - 1) * t.titleSpacing, a.height += t.title.length ? t.titleMarginBottom : 0, a.height += s * t.bodyFontSize, a.height += s ? (s - 1) * t.bodySpacing : 0, a.height += t.footer.length ? t.footerMarginTop : 0, a.height += t.footer.length * t.footerFontSize, a.height += t.footer.length ? (t.footer.length - 1) * t.footerSpacing : 0, e.font = i.fontString(t.titleFontSize, t._titleFontStyle, t._titleFontFamily), i.each(t.title, function(t) {
                        a.width = Math.max(a.width, e.measureText(t).width)
                    }), e.font = i.fontString(t.bodyFontSize, t._bodyFontStyle, t._bodyFontFamily), i.each(t.beforeBody.concat(t.afterBody), function(t) {
                        a.width = Math.max(a.width, e.measureText(t).width)
                    }), i.each(t.body, function(i) {
                        a.width = Math.max(a.width, e.measureText(i).width + ("single" !== this._options.tooltips.mode ? t.bodyFontSize + 2 : 0))
                    }, this), e.font = i.fontString(t.footerFontSize, t._footerFontStyle, t._footerFontFamily), i.each(t.footer, function(t) {
                        a.width = Math.max(a.width, e.measureText(t).width)
                    }), a.width += 2 * t.xPadding, a
                },
                determineAlignment: function(t) {
                    this._model.y < t.height ? this._model.yAlign = "top" : this._model.y > this._chart.height - t.height && (this._model.yAlign = "bottom");
                    var e, i, a, s, o, n = this,
                        r = (this._chartInstance.chartArea.left + this._chartInstance.chartArea.right) / 2,
                        h = (this._chartInstance.chartArea.top + this._chartInstance.chartArea.bottom) / 2;
                    "center" === this._model.yAlign ? (e = function(t) {
                        return r >= t
                    }, i = function(t) {
                        return t > r
                    }) : (e = function(e) {
                        return e <= t.width / 2
                    }, i = function(e) {
                        return e >= n._chart.width - t.width / 2
                    }), a = function(e) {
                        return e + t.width > n._chart.width
                    }, s = function(e) {
                        return e - t.width < 0
                    }, o = function(t) {
                        return h >= t ? "top" : "bottom"
                    }, e(this._model.x) ? (this._model.xAlign = "left", a(this._model.x) && (this._model.xAlign = "center", this._model.yAlign = o(this._model.y))) : i(this._model.x) && (this._model.xAlign = "right", s(this._model.x) && (this._model.xAlign = "center", this._model.yAlign = o(this._model.y)))
                },
                getBackgroundPoint: function(t, e) {
                    var i = {
                        x: t.x,
                        y: t.y
                    };
                    return "right" === t.xAlign ? i.x -= e.width : "center" === t.xAlign && (i.x -= e.width / 2), "top" === t.yAlign ? i.y += t.caretPadding + t.caretSize : "bottom" === t.yAlign ? i.y -= e.height + t.caretPadding + t.caretSize : i.y -= e.height / 2, "center" === t.yAlign ? "left" === t.xAlign ? i.x += t.caretPadding + t.caretSize : "right" === t.xAlign && (i.x -= t.caretPadding + t.caretSize) : "left" === t.xAlign ? i.x -= t.cornerRadius + t.caretPadding : "right" === t.xAlign && (i.x += t.cornerRadius + t.caretPadding), i
                },
                drawCaret: function(t, e, a, s) {
                    var o, n, r, h, l, c, d = this._view,
                        u = this._chart.ctx;
                    "center" === d.yAlign ? ("left" === d.xAlign ? (o = t.x, n = o - d.caretSize, r = o) : (o = t.x + e.width, n = o + d.caretSize, r = o), l = t.y + e.height / 2, h = l - d.caretSize, c = l + d.caretSize) : ("left" === d.xAlign ? (o = t.x + d.cornerRadius, n = o + d.caretSize, r = n + d.caretSize) : "right" === d.xAlign ? (o = t.x + e.width - d.cornerRadius, n = o - d.caretSize, r = n - d.caretSize) : (n = t.x + e.width / 2, o = n - d.caretSize, r = n + d.caretSize), "top" === d.yAlign ? (h = t.y, l = h - d.caretSize, c = h) : (h = t.y + e.height, l = h + d.caretSize, c = h));
                    var g = i.color(d.backgroundColor);
                    u.fillStyle = g.alpha(a * g.alpha()).rgbString(), u.beginPath(), u.moveTo(o, h), u.lineTo(n, l), u.lineTo(r, c), u.closePath(), u.fill()
                },
                drawTitle: function(t, e, a, s) {
                    if (e.title.length) {
                        a.textAlign = e._titleAlign, a.textBaseline = "top";
                        var o = i.color(e.titleColor);
                        a.fillStyle = o.alpha(s * o.alpha()).rgbString(), a.font = i.fontString(e.titleFontSize, e._titleFontStyle, e._titleFontFamily), i.each(e.title, function(i, s) {
                            a.fillText(i, t.x, t.y), t.y += e.titleFontSize + e.titleSpacing, s + 1 === e.title.length && (t.y += e.titleMarginBottom - e.titleSpacing)
                        })
                    }
                },
                drawBody: function(t, e, a, s) {
                    a.textAlign = e._bodyAlign, a.textBaseline = "top";
                    var o = i.color(e.bodyColor);
                    a.fillStyle = o.alpha(s * o.alpha()).rgbString(), a.font = i.fontString(e.bodyFontSize, e._bodyFontStyle, e._bodyFontFamily), i.each(e.beforeBody, function(i) {
                        a.fillText(i, t.x, t.y), t.y += e.bodyFontSize + e.bodySpacing
                    }), i.each(e.body, function(o, n) {
                        "single" !== this._options.tooltips.mode && (a.fillStyle = i.color(e.legendColorBackground).alpha(s).rgbaString(), a.fillRect(t.x, t.y, e.bodyFontSize, e.bodyFontSize), a.strokeStyle = i.color(e.labelColors[n].borderColor).alpha(s).rgbaString(), a.strokeRect(t.x, t.y, e.bodyFontSize, e.bodyFontSize), a.fillStyle = i.color(e.labelColors[n].backgroundColor).alpha(s).rgbaString(), a.fillRect(t.x + 1, t.y + 1, e.bodyFontSize - 2, e.bodyFontSize - 2), a.fillStyle = i.color(e.bodyColor).alpha(s).rgbaString()), a.fillText(o, t.x + ("single" !== this._options.tooltips.mode ? e.bodyFontSize + 2 : 0), t.y), t.y += e.bodyFontSize + e.bodySpacing
                    }, this), i.each(e.afterBody, function(i) {
                        a.fillText(i, t.x, t.y), t.y += e.bodyFontSize
                    }), t.y -= e.bodySpacing
                },
                drawFooter: function(t, e, a, s) {
                    if (e.footer.length) {
                        t.y += e.footerMarginTop, a.textAlign = e._footerAlign, a.textBaseline = "top";
                        var o = i.color(e.footerColor);
                        a.fillStyle = o.alpha(s * o.alpha()).rgbString(), a.font = i.fontString(e.footerFontSize, e._footerFontStyle, e._footerFontFamily), i.each(e.footer, function(i) {
                            a.fillText(i, t.x, t.y), t.y += e.footerFontSize + e.footerSpacing
                        })
                    }
                },
                draw: function() {
                    var t = this._chart.ctx,
                        e = this._view;
                    if (0 !== e.opacity) {
                        var a = e.caretPadding,
                            s = this.getTooltipSize(e),
                            o = {
                                x: e.x,
                                y: e.y
                            },
                            n = Math.abs(e.opacity < .001) ? 0 : e.opacity;
                        if (this._options.tooltips.enabled) {
                            var r = i.color(e.backgroundColor);
                            t.fillStyle = r.alpha(n * r.alpha()).rgbString(), i.drawRoundedRectangle(t, o.x, o.y, s.width, s.height, e.cornerRadius), t.fill(), this.drawCaret(o, s, n, a), o.x += e.xPadding, o.y += e.yPadding, this.drawTitle(o, e, t, n), this.drawBody(o, e, t, n), this.drawFooter(o, e, t, n)
                        }
                    }
                }
            })
        }
    }, {}],
    33: [function(t, e, i) {
        "use strict";
        e.exports = function(t, e) {
            var i = t.helpers;
            t.defaults.global.elements.arc = {
                backgroundColor: t.defaults.global.defaultColor,
                borderColor: "#fff",
                borderWidth: 2
            }, t.elements.Arc = t.Element.extend({
                inLabelRange: function(t) {
                    var e = this._view;
                    return e ? Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2) : !1
                },
                inRange: function(t, e) {
                    var a = this._view;
                    if (a) {
                        for (var s = i.getAngleFromPoint(a, {
                                x: t,
                                y: e
                            }), o = a.startAngle, n = a.endAngle; o > n;) n += 2 * Math.PI;
                        for (; s.angle > n;) s.angle -= 2 * Math.PI;
                        for (; s.angle < o;) s.angle += 2 * Math.PI;
                        var r = s.angle >= o && s.angle <= n,
                            h = s.distance >= a.innerRadius && s.distance <= a.outerRadius;
                        return r && h
                    }
                    return !1
                },
                tooltipPosition: function() {
                    var t = this._view,
                        e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                        i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                    return {
                        x: t.x + Math.cos(e) * i,
                        y: t.y + Math.sin(e) * i
                    }
                },
                draw: function() {
                    var t = this._chart.ctx,
                        e = this._view;
                    t.beginPath(), t.arc(e.x, e.y, e.outerRadius, e.startAngle, e.endAngle), t.arc(e.x, e.y, e.innerRadius, e.endAngle, e.startAngle, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
                }
            })
        }
    }, {}],
    34: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.global.elements.line = {
                tension: .4,
                backgroundColor: t.defaults.global.defaultColor,
                borderWidth: 3,
                borderColor: t.defaults.global.defaultColor,
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                fill: !0
            }, t.elements.Line = t.Element.extend({
                lineToNextPoint: function(t, e, i, a, s) {
                    var o = this._chart.ctx;
                    e._view.skip ? a.call(this, t, e, i) : t._view.skip ? s.call(this, t, e, i) : 0 === e._view.tension ? o.lineTo(e._view.x, e._view.y) : o.bezierCurveTo(t._view.controlPointNextX, t._view.controlPointNextY, e._view.controlPointPreviousX, e._view.controlPointPreviousY, e._view.x, e._view.y)
                },
                draw: function() {
                    function i(t) {
                        n._view.skip || r._view.skip ? t && o.lineTo(a._view.scaleZero.x, a._view.scaleZero.y) : o.bezierCurveTo(r._view.controlPointNextX, r._view.controlPointNextY, n._view.controlPointPreviousX, n._view.controlPointPreviousY, n._view.x, n._view.y)
                    }
                    var a = this,
                        s = this._view,
                        o = this._chart.ctx,
                        n = this._children[0],
                        r = this._children[this._children.length - 1];
                    o.save(), this._children.length > 0 && s.fill && (o.beginPath(), e.each(this._children, function(t, i) {
                        var a = e.previousItem(this._children, i),
                            n = e.nextItem(this._children, i);
                        0 === i ? (this._loop ? o.moveTo(s.scaleZero.x, s.scaleZero.y) : o.moveTo(t._view.x, s.scaleZero), t._view.skip ? this._loop || o.moveTo(n._view.x, this._view.scaleZero) : o.lineTo(t._view.x, t._view.y)) : this.lineToNextPoint(a, t, n, function(t, e, i) {
                            this._loop ? o.lineTo(this._view.scaleZero.x, this._view.scaleZero.y) : (o.lineTo(t._view.x, this._view.scaleZero), o.moveTo(i._view.x, this._view.scaleZero))
                        }, function(t, e) {
                            o.lineTo(e._view.x, e._view.y)
                        })
                    }, this), this._loop ? i(!0) : (o.lineTo(this._children[this._children.length - 1]._view.x, s.scaleZero), o.lineTo(this._children[0]._view.x, s.scaleZero)), o.fillStyle = s.backgroundColor || t.defaults.global.defaultColor, o.closePath(), o.fill()), o.lineCap = s.borderCapStyle || t.defaults.global.elements.line.borderCapStyle, o.setLineDash && o.setLineDash(s.borderDash || t.defaults.global.elements.line.borderDash), o.lineDashOffset = s.borderDashOffset || t.defaults.global.elements.line.borderDashOffset, o.lineJoin = s.borderJoinStyle || t.defaults.global.elements.line.borderJoinStyle, o.lineWidth = s.borderWidth || t.defaults.global.elements.line.borderWidth, o.strokeStyle = s.borderColor || t.defaults.global.defaultColor, o.beginPath(), e.each(this._children, function(t, i) {
                        var a = e.previousItem(this._children, i),
                            s = e.nextItem(this._children, i);
                        0 === i ? o.moveTo(t._view.x, t._view.y) : this.lineToNextPoint(a, t, s, function(t, e, i) {
                            o.moveTo(i._view.x, i._view.y)
                        }, function(t, e) {
                            o.moveTo(e._view.x, e._view.y)
                        })
                    }, this), this._loop && this._children.length > 0 && i(), o.stroke(), o.restore()
                }
            })
        }
    }, {}],
    35: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.global.elements.point = {
                radius: 3,
                pointStyle: "circle",
                backgroundColor: t.defaults.global.defaultColor,
                borderWidth: 1,
                borderColor: t.defaults.global.defaultColor,
                hitRadius: 1,
                hoverRadius: 4,
                hoverBorderWidth: 1
            }, t.elements.Point = t.Element.extend({
                inRange: function(t, e) {
                    var i = this._view;
                    if (i) {
                        var a = i.hitRadius + i.radius;
                        return Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(a, 2)
                    }
                    return !1
                },
                inLabelRange: function(t) {
                    var e = this._view;
                    return e ? Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2) : !1
                },
                tooltipPosition: function() {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y,
                        padding: t.radius + t.borderWidth
                    }
                },
                draw: function() {
                    var i = this._view,
                        a = this._chart.ctx;
                    if (!i.skip) {
                        if ("object" == typeof i.pointStyle && ("[object HTMLImageElement]" === i.pointStyle.toString() || "[object HTMLCanvasElement]" === i.pointStyle.toString())) return void a.drawImage(i.pointStyle, i.x - i.pointStyle.width / 2, i.y - i.pointStyle.height / 2);
                        if (!isNaN(i.radius) && i.radius > 0) {
                            a.strokeStyle = i.borderColor || t.defaults.global.defaultColor, a.lineWidth = e.getValueOrDefault(i.borderWidth, t.defaults.global.elements.point.borderWidth), a.fillStyle = i.backgroundColor || t.defaults.global.defaultColor;
                            var s, o, n = i.radius;
                            switch (i.pointStyle) {
                                default: a.beginPath(),
                                a.arc(i.x, i.y, n, 0, 2 * Math.PI),
                                a.closePath(),
                                a.fill();
                                break;
                                case "triangle":
                                        a.beginPath();
                                    var r = 3 * n / Math.sqrt(3),
                                        h = r * Math.sqrt(3) / 2;a.moveTo(i.x - r / 2, i.y + h / 3),
                                    a.lineTo(i.x + r / 2, i.y + h / 3),
                                    a.lineTo(i.x, i.y - 2 * h / 3),
                                    a.closePath(),
                                    a.fill();
                                    break;
                                case "rect":
                                        a.fillRect(i.x - 1 / Math.SQRT2 * n, i.y - 1 / Math.SQRT2 * n, 2 / Math.SQRT2 * n, 2 / Math.SQRT2 * n),
                                    a.strokeRect(i.x - 1 / Math.SQRT2 * n, i.y - 1 / Math.SQRT2 * n, 2 / Math.SQRT2 * n, 2 / Math.SQRT2 * n);
                                    break;
                                case "rectRot":
                                        a.translate(i.x, i.y),
                                    a.rotate(Math.PI / 4),
                                    a.fillRect(-1 / Math.SQRT2 * n, -1 / Math.SQRT2 * n, 2 / Math.SQRT2 * n, 2 / Math.SQRT2 * n),
                                    a.strokeRect(-1 / Math.SQRT2 * n, -1 / Math.SQRT2 * n, 2 / Math.SQRT2 * n, 2 / Math.SQRT2 * n),
                                    a.setTransform(1, 0, 0, 1, 0, 0);
                                    break;
                                case "cross":
                                        a.beginPath(),
                                    a.moveTo(i.x, i.y + n),
                                    a.lineTo(i.x, i.y - n),
                                    a.moveTo(i.x - n, i.y),
                                    a.lineTo(i.x + n, i.y),
                                    a.closePath();
                                    break;
                                case "crossRot":
                                        a.beginPath(),
                                    s = Math.cos(Math.PI / 4) * n,
                                    o = Math.sin(Math.PI / 4) * n,
                                    a.moveTo(i.x - s, i.y - o),
                                    a.lineTo(i.x + s, i.y + o),
                                    a.moveTo(i.x - s, i.y + o),
                                    a.lineTo(i.x + s, i.y - o),
                                    a.closePath();
                                    break;
                                case "star":
                                        a.beginPath(),
                                    a.moveTo(i.x, i.y + n),
                                    a.lineTo(i.x, i.y - n),
                                    a.moveTo(i.x - n, i.y),
                                    a.lineTo(i.x + n, i.y),
                                    s = Math.cos(Math.PI / 4) * n,
                                    o = Math.sin(Math.PI / 4) * n,
                                    a.moveTo(i.x - s, i.y - o),
                                    a.lineTo(i.x + s, i.y + o),
                                    a.moveTo(i.x - s, i.y + o),
                                    a.lineTo(i.x + s, i.y - o),
                                    a.closePath();
                                    break;
                                case "line":
                                        a.beginPath(),
                                    a.moveTo(i.x - n, i.y),
                                    a.lineTo(i.x + n, i.y),
                                    a.closePath();
                                    break;
                                case "dash":
                                        a.beginPath(),
                                    a.moveTo(i.x, i.y),
                                    a.lineTo(i.x + n, i.y),
                                    a.closePath()
                            }
                            a.stroke()
                        }
                    }
                }
            })
        }
    }, {}],
    36: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            t.helpers;
            t.defaults.global.elements.rectangle = {
                backgroundColor: t.defaults.global.defaultColor,
                borderWidth: 0,
                borderColor: t.defaults.global.defaultColor,
                borderSkipped: "bottom"
            }, t.elements.Rectangle = t.Element.extend({
                draw: function() {
                    function t(t) {
                        return h[(c + t) % 4]
                    }
                    var e = this._chart.ctx,
                        i = this._view,
                        a = i.width / 2,
                        s = i.x - a,
                        o = i.x + a,
                        n = i.base - (i.base - i.y),
                        r = i.borderWidth / 2;
                    i.borderWidth && (s += r, o -= r, n += r), e.beginPath(), e.fillStyle = i.backgroundColor, e.strokeStyle = i.borderColor, e.lineWidth = i.borderWidth;
                    var h = [
                            [s, i.base],
                            [s, n],
                            [o, n],
                            [o, i.base]
                        ],
                        l = ["bottom", "left", "top", "right"],
                        c = l.indexOf(i.borderSkipped, 0); - 1 === c && (c = 0), e.moveTo.apply(e, t(0));
                    for (var d = 1; 4 > d; d++) e.lineTo.apply(e, t(d));
                    e.fill(), i.borderWidth && e.stroke()
                },
                height: function() {
                    var t = this._view;
                    return t.base - t.y
                },
                inRange: function(t, e) {
                    var i = this._view,
                        a = !1;
                    return i && (a = i.y < i.base ? t >= i.x - i.width / 2 && t <= i.x + i.width / 2 && e >= i.y && e <= i.base : t >= i.x - i.width / 2 && t <= i.x + i.width / 2 && e >= i.base && e <= i.y), a
                },
                inLabelRange: function(t) {
                    var e = this._view;
                    return e ? t >= e.x - e.width / 2 && t <= e.x + e.width / 2 : !1
                },
                tooltipPosition: function() {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y
                    }
                }
            })
        }
    }, {}],
    37: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers,
                i = {
                    position: "bottom"
                },
                a = t.Scale.extend({
                    buildTicks: function(t) {
                        this.startIndex = 0, this.endIndex = this.chart.data.labels.length;
                        var i;
                        void 0 !== this.options.ticks.min && (i = e.indexOf(this.chart.data.labels, this.options.ticks.min), this.startIndex = -1 !== i ? i : this.startIndex), void 0 !== this.options.ticks.max && (i = e.indexOf(this.chart.data.labels, this.options.ticks.max), this.endIndex = -1 !== i ? i : this.endIndex), this.ticks = 0 === this.startIndex && this.endIndex === this.chart.data.labels.length ? this.chart.data.labels : this.chart.data.labels.slice(this.startIndex, this.endIndex + 1)
                    },
                    getLabelForIndex: function(t, e) {
                        return this.ticks[t]
                    },
                    getPixelForValue: function(t, e, i, a) {
                        var s = Math.max(this.ticks.length - (this.options.gridLines.offsetGridLines ? 0 : 1), 1);
                        if (this.isHorizontal()) {
                            var o = this.width - (this.paddingLeft + this.paddingRight),
                                n = o / s,
                                r = n * (e - this.startIndex) + this.paddingLeft;
                            return this.options.gridLines.offsetGridLines && a && (r += n / 2), this.left + Math.round(r)
                        }
                        var h = this.height - (this.paddingTop + this.paddingBottom),
                            l = h / s,
                            c = l * (e - this.startIndex) + this.paddingTop;
                        return this.options.gridLines.offsetGridLines && a && (c += l / 2), this.top + Math.round(c)
                    },
                    getPixelForTick: function(t, e) {
                        return this.getPixelForValue(this.ticks[t], t + this.startIndex, null, e)
                    }
                });
            t.scaleService.registerScaleType("category", a, i)
        }
    }, {}],
    38: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers,
                i = {
                    position: "left",
                    ticks: {
                        callback: function(t, i, a) {
                            var s = a[1] - a[0];
                            Math.abs(s) > 1 && t !== Math.floor(t) && (s = t - Math.floor(t));
                            var o = e.log10(Math.abs(s)),
                                n = "";
                            if (0 !== t) {
                                var r = -1 * Math.floor(o);
                                r = Math.max(Math.min(r, 20), 0), n = t.toFixed(r)
                            } else n = "0";
                            return n
                        }
                    }
                },
                a = t.Scale.extend({
                    determineDataLimits: function() {
                        if (this.min = null, this.max = null, this.options.stacked) {
                            var t = {},
                                i = !1,
                                a = !1;
                            e.each(this.chart.data.datasets, function(s) {
                                void 0 === t[s.type] && (t[s.type] = {
                                    positiveValues: [],
                                    negativeValues: []
                                });
                                var o = t[s.type].positiveValues,
                                    n = t[s.type].negativeValues;
                                e.isDatasetVisible(s) && (this.isHorizontal() ? s.xAxisID === this.id : s.yAxisID === this.id) && e.each(s.data, function(t, e) {
                                    var s = +this.getRightValue(t);
                                    isNaN(s) || (o[e] = o[e] || 0, n[e] = n[e] || 0, this.options.relativePoints ? o[e] = 100 : 0 > s ? (a = !0, n[e] += s) : (i = !0, o[e] += s))
                                }, this)
                            }, this), e.each(t, function(t) {
                                var i = t.positiveValues.concat(t.negativeValues),
                                    a = e.min(i),
                                    s = e.max(i);
                                this.min = null === this.min ? a : Math.min(this.min, a), this.max = null === this.max ? s : Math.max(this.max, s)
                            }, this)
                        } else e.each(this.chart.data.datasets, function(t) {
                            e.isDatasetVisible(t) && (this.isHorizontal() ? t.xAxisID === this.id : t.yAxisID === this.id) && e.each(t.data, function(t, e) {
                                var i = +this.getRightValue(t);
                                isNaN(i) || (null === this.min ? this.min = i : i < this.min && (this.min = i), null === this.max ? this.max = i : i > this.max && (this.max = i))
                            }, this)
                        }, this);
                        if (this.options.ticks.beginAtZero) {
                            var s = e.sign(this.min),
                                o = e.sign(this.max);
                            0 > s && 0 > o ? this.max = 0 : s > 0 && o > 0 && (this.min = 0)
                        }
                        void 0 !== this.options.ticks.min ? this.min = this.options.ticks.min : void 0 !== this.options.ticks.suggestedMin && (this.min = Math.min(this.min, this.options.ticks.suggestedMin)), void 0 !== this.options.ticks.max ? this.max = this.options.ticks.max : void 0 !== this.options.ticks.suggestedMax && (this.max = Math.max(this.max, this.options.ticks.suggestedMax)), this.min === this.max && (this.min--, this.max++)
                    },
                    buildTicks: function() {
                        this.ticks = [];
                        var i;
                        if (this.isHorizontal()) i = Math.min(this.options.ticks.maxTicksLimit ? this.options.ticks.maxTicksLimit : 11, Math.ceil(this.width / 50));
                        else {
                            var a = e.getValueOrDefault(this.options.ticks.fontSize, t.defaults.global.defaultFontSize);
                            i = Math.min(this.options.ticks.maxTicksLimit ? this.options.ticks.maxTicksLimit : 11, Math.ceil(this.height / (2 * a)))
                        }
                        i = Math.max(2, i);
                        var s, o = this.options.ticks.fixedStepSize && this.options.ticks.fixedStepSize > 0 || this.options.ticks.stepSize && this.options.ticks.stepSize > 0;
                        if (o) s = e.getValueOrDefault(this.options.ticks.fixedStepSize, this.options.ticks.stepSize);
                        else {
                            var n = e.niceNum(this.max - this.min, !1);
                            s = e.niceNum(n / (i - 1), !0)
                        }
                        var r = Math.floor(this.min / s) * s,
                            h = Math.ceil(this.max / s) * s,
                            l = (h - r) / s;
                        l = e.almostEquals(l, Math.round(l), s / 1e3) ? Math.round(l) : Math.ceil(l), this.ticks.push(void 0 !== this.options.ticks.min ? this.options.ticks.min : r);
                        for (var c = 1; l > c; ++c) this.ticks.push(r + c * s);
                        this.ticks.push(void 0 !== this.options.ticks.max ? this.options.ticks.max : h), ("left" === this.options.position || "right" === this.options.position) && this.ticks.reverse(), this.max = e.max(this.ticks), this.min = e.min(this.ticks), this.options.ticks.reverse ? (this.ticks.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max)
                    },
                    getLabelForIndex: function(t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    },
                    convertTicksToLabels: function() {
                        this.ticksAsNumbers = this.ticks.slice(), this.zeroLineIndex = this.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(this)
                    },
                    getPixelForValue: function(t, e, i, a) {
                        var s, o = +this.getRightValue(t),
                            n = this.end - this.start;
                        if (this.isHorizontal()) {
                            var r = this.width - (this.paddingLeft + this.paddingRight);
                            return s = this.left + r / n * (o - this.start), Math.round(s + this.paddingLeft)
                        }
                        var h = this.height - (this.paddingTop + this.paddingBottom);
                        return s = this.bottom - this.paddingBottom - h / n * (o - this.start), Math.round(s)
                    },
                    getPixelForTick: function(t, e) {
                        return this.getPixelForValue(this.ticksAsNumbers[t], null, null, e)
                    }
                });
            t.scaleService.registerScaleType("linear", a, i)
        }
    }, {}],
    39: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers,
                i = {
                    position: "left",
                    ticks: {
                        callback: function(e, i, a) {
                            var s = e / Math.pow(10, Math.floor(t.helpers.log10(e)));
                            return 1 === s || 2 === s || 5 === s || 0 === i || i === a.length - 1 ? e.toExponential() : ""
                        }
                    }
                },
                a = t.Scale.extend({
                    determineDataLimits: function() {
                        if (this.min = null, this.max = null, this.options.stacked) {
                            var t = {};
                            e.each(this.chart.data.datasets, function(i) {
                                e.isDatasetVisible(i) && (this.isHorizontal() ? i.xAxisID === this.id : i.yAxisID === this.id) && (void 0 === t[i.type] && (t[i.type] = []), e.each(i.data, function(e, a) {
                                    var s = t[i.type],
                                        o = +this.getRightValue(e);
                                    isNaN(o) || (s[a] = s[a] || 0, this.options.relativePoints ? s[a] = 100 : s[a] += o)
                                }, this))
                            }, this), e.each(t, function(t) {
                                var i = e.min(t),
                                    a = e.max(t);
                                this.min = null === this.min ? i : Math.min(this.min, i), this.max = null === this.max ? a : Math.max(this.max, a)
                            }, this)
                        } else e.each(this.chart.data.datasets, function(t) {
                            e.isDatasetVisible(t) && (this.isHorizontal() ? t.xAxisID === this.id : t.yAxisID === this.id) && e.each(t.data, function(t, e) {
                                var i = +this.getRightValue(t);
                                isNaN(i) || (null === this.min ? this.min = i : i < this.min && (this.min = i), null === this.max ? this.max = i : i > this.max && (this.max = i))
                            }, this)
                        }, this);
                        this.min = void 0 !== this.options.ticks.min ? this.options.ticks.min : this.min, this.max = void 0 !== this.options.ticks.max ? this.options.ticks.max : this.max, this.min === this.max && (0 !== this.min && null !== this.min ? (this.min = Math.pow(10, Math.floor(e.log10(this.min)) - 1), this.max = Math.pow(10, Math.floor(e.log10(this.max)) + 1)) : (this.min = 1, this.max = 10))
                    },
                    buildTicks: function() {
                        this.ticks = [];
                        for (var t = void 0 !== this.options.ticks.min ? this.options.ticks.min : Math.pow(10, Math.floor(e.log10(this.min))); t < this.max;) {
                            this.ticks.push(t);
                            var i = Math.floor(e.log10(t)),
                                a = Math.floor(t / Math.pow(10, i)) + 1;
                            10 === a && (a = 1, ++i), t = a * Math.pow(10, i)
                        }
                        var s = void 0 !== this.options.ticks.max ? this.options.ticks.max : t;
                        this.ticks.push(s), ("left" === this.options.position || "right" === this.options.position) && this.ticks.reverse(), this.max = e.max(this.ticks), this.min = e.min(this.ticks), this.options.ticks.reverse ? (this.ticks.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max)
                    },
                    convertTicksToLabels: function() {
                        this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this)
                    },
                    getLabelForIndex: function(t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    },
                    getPixelForTick: function(t, e) {
                        return this.getPixelForValue(this.tickValues[t], null, null, e)
                    },
                    getPixelForValue: function(t, i, a, s) {
                        var o, n = +this.getRightValue(t),
                            r = e.log10(this.end) - e.log10(this.start);
                        if (this.isHorizontal())
                            if (0 === n) o = this.left + this.paddingLeft;
                            else {
                                var h = this.width - (this.paddingLeft + this.paddingRight);
                                o = this.left + h / r * (e.log10(n) - e.log10(this.start)), o += this.paddingLeft
                            }
                        else if (0 === n) o = this.top + this.paddingTop;
                        else {
                            var l = this.height - (this.paddingTop + this.paddingBottom);
                            o = this.bottom - this.paddingBottom - l / r * (e.log10(n) - e.log10(this.start))
                        }
                        return o
                    }
                });
            t.scaleService.registerScaleType("logarithmic", a, i)
        }
    }, {}],
    40: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers,
                i = {
                    display: !0,
                    animate: !0,
                    lineArc: !1,
                    position: "chartArea",
                    angleLines: {
                        display: !0,
                        color: "rgba(0, 0, 0, 0.1)",
                        lineWidth: 1
                    },
                    ticks: {
                        showLabelBackdrop: !0,
                        backdropColor: "rgba(255,255,255,0.75)",
                        backdropPaddingY: 2,
                        backdropPaddingX: 2
                    },
                    pointLabels: {
                        fontSize: 10,
                        callback: function(t) {
                            return t
                        }
                    }
                },
                a = t.Scale.extend({
                    getValueCount: function() {
                        return this.chart.data.labels.length
                    },
                    setDimensions: function() {
                        this.width = this.maxWidth, this.height = this.maxHeight, this.xCenter = Math.round(this.width / 2), this.yCenter = Math.round(this.height / 2);
                        var i = e.min([this.height, this.width]),
                            a = e.getValueOrDefault(this.options.ticks.fontSize, t.defaults.global.defaultFontSize);
                        this.drawingArea = this.options.display ? i / 2 - (a / 2 + this.options.ticks.backdropPaddingY) : i / 2
                    },
                    determineDataLimits: function() {
                        if (this.min = null, this.max = null, e.each(this.chart.data.datasets, function(t) {
                                e.isDatasetVisible(t) && e.each(t.data, function(t, e) {
                                    var i = +this.getRightValue(t);
                                    isNaN(i) || (null === this.min ? this.min = i : i < this.min && (this.min = i), null === this.max ? this.max = i : i > this.max && (this.max = i))
                                }, this)
                            }, this), this.options.ticks.beginAtZero) {
                            var t = e.sign(this.min),
                                i = e.sign(this.max);
                            0 > t && 0 > i ? this.max = 0 : t > 0 && i > 0 && (this.min = 0)
                        }
                        void 0 !== this.options.ticks.min ? this.min = this.options.ticks.min : void 0 !== this.options.ticks.suggestedMin && (this.min = Math.min(this.min, this.options.ticks.suggestedMin)), void 0 !== this.options.ticks.max ? this.max = this.options.ticks.max : void 0 !== this.options.ticks.suggestedMax && (this.max = Math.max(this.max, this.options.ticks.suggestedMax)), this.min === this.max && (this.min--, this.max++)
                    },
                    buildTicks: function() {
                        this.ticks = [];
                        var i = e.getValueOrDefault(this.options.ticks.fontSize, t.defaults.global.defaultFontSize),
                            a = Math.min(this.options.ticks.maxTicksLimit ? this.options.ticks.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * i)));
                        a = Math.max(2, a);
                        var s = e.niceNum(this.max - this.min, !1),
                            o = e.niceNum(s / (a - 1), !0),
                            n = Math.floor(this.min / o) * o,
                            r = Math.ceil(this.max / o) * o,
                            h = Math.ceil((r - n) / o);
                        this.ticks.push(void 0 !== this.options.ticks.min ? this.options.ticks.min : n);
                        for (var l = 1; h > l; ++l) this.ticks.push(n + l * o);
                        this.ticks.push(void 0 !== this.options.ticks.max ? this.options.ticks.max : r), this.max = e.max(this.ticks), this.min = e.min(this.ticks), this.options.ticks.reverse ? (this.ticks.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), this.zeroLineIndex = this.ticks.indexOf(0)
                    },
                    convertTicksToLabels: function() {
                        t.Scale.prototype.convertTicksToLabels.call(this), this.pointLabels = this.chart.data.labels.map(this.options.pointLabels.callback, this)
                    },
                    getLabelForIndex: function(t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    },
                    fit: function() {
                        var i, a, s, o, n, r, h, l, c, d, u, g, f = e.getValueOrDefault(this.options.pointLabels.fontSize, t.defaults.global.defaultFontSize),
                            m = e.getValueOrDefault(this.options.pointLabels.fontStyle, t.defaults.global.defaultFontStyle),
                            p = e.getValueOrDefault(this.options.pointLabels.fontFamily, t.defaults.global.defaultFontFamily),
                            b = e.fontString(f, m, p),
                            x = e.min([this.height / 2 - f - 5, this.width / 2]),
                            v = this.width,
                            y = 0;
                        for (this.ctx.font = b, a = 0; a < this.getValueCount(); a++) i = this.getPointPosition(a, x), s = this.ctx.measureText(this.pointLabels[a] ? this.pointLabels[a] : "").width + 5, 0 === a || a === this.getValueCount() / 2 ? (o = s / 2, i.x + o > v && (v = i.x + o, n = a), i.x - o < y && (y = i.x - o, h = a)) : a < this.getValueCount() / 2 ? i.x + s > v && (v = i.x + s, n = a) : a > this.getValueCount() / 2 && i.x - s < y && (y = i.x - s, h = a);
                        c = y, d = Math.ceil(v - this.width), r = this.getIndexAngle(n), l = this.getIndexAngle(h), u = d / Math.sin(r + Math.PI / 2), g = c / Math.sin(l + Math.PI / 2), u = e.isNumber(u) ? u : 0, g = e.isNumber(g) ? g : 0, this.drawingArea = Math.round(x - (g + u) / 2), this.setCenterPoint(g, u)
                    },
                    setCenterPoint: function(t, e) {
                        var i = this.width - e - this.drawingArea,
                            a = t + this.drawingArea;
                        this.xCenter = Math.round((a + i) / 2 + this.left), this.yCenter = Math.round(this.height / 2 + this.top)
                    },
                    getIndexAngle: function(t) {
                        var e = 2 * Math.PI / this.getValueCount();
                        return t * e - Math.PI / 2
                    },
                    getDistanceFromCenterForValue: function(t) {
                        if (null === t) return 0;
                        var e = this.drawingArea / (this.max - this.min);
                        return this.options.reverse ? (this.max - t) * e : (t - this.min) * e
                    },
                    getPointPosition: function(t, e) {
                        var i = this.getIndexAngle(t);
                        return {
                            x: Math.round(Math.cos(i) * e) + this.xCenter,
                            y: Math.round(Math.sin(i) * e) + this.yCenter
                        }
                    },
                    getPointPositionForValue: function(t, e) {
                        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                    },
                    draw: function() {
                        if (this.options.display) {
                            var i = this.ctx;
                            if (e.each(this.ticks, function(a, s) {
                                    if (s > 0 || this.options.reverse) {
                                        var o = this.getDistanceFromCenterForValue(this.ticks[s]),
                                            n = this.yCenter - o;
                                        if (this.options.gridLines.display)
                                            if (i.strokeStyle = this.options.gridLines.color, i.lineWidth = this.options.gridLines.lineWidth, this.options.lineArc) i.beginPath(), i.arc(this.xCenter, this.yCenter, o, 0, 2 * Math.PI), i.closePath(), i.stroke();
                                            else {
                                                i.beginPath();
                                                for (var r = 0; r < this.getValueCount(); r++) {
                                                    var h = this.getPointPosition(r, this.getDistanceFromCenterForValue(this.ticks[s]));
                                                    0 === r ? i.moveTo(h.x, h.y) : i.lineTo(h.x, h.y)
                                                }
                                                i.closePath(), i.stroke()
                                            }
                                        if (this.options.ticks.display) {
                                            var l = e.getValueOrDefault(this.options.ticks.fontColor, t.defaults.global.defaultFontColor),
                                                c = e.getValueOrDefault(this.options.ticks.fontSize, t.defaults.global.defaultFontSize),
                                                d = e.getValueOrDefault(this.options.ticks.fontStyle, t.defaults.global.defaultFontStyle),
                                                u = e.getValueOrDefault(this.options.ticks.fontFamily, t.defaults.global.defaultFontFamily),
                                                g = e.fontString(c, d, u);
                                            if (i.font = g, this.options.ticks.showLabelBackdrop) {
                                                var f = i.measureText(a).width;
                                                i.fillStyle = this.options.ticks.backdropColor, i.fillRect(this.xCenter - f / 2 - this.options.ticks.backdropPaddingX, n - c / 2 - this.options.ticks.backdropPaddingY, f + 2 * this.options.ticks.backdropPaddingX, c + 2 * this.options.ticks.backdropPaddingY)
                                            }
                                            i.textAlign = "center", i.textBaseline = "middle", i.fillStyle = l, i.fillText(a, this.xCenter, n)
                                        }
                                    }
                                }, this), !this.options.lineArc) {
                                i.lineWidth = this.options.angleLines.lineWidth, i.strokeStyle = this.options.angleLines.color;
                                for (var a = this.getValueCount() - 1; a >= 0; a--) {
                                    if (this.options.angleLines.display) {
                                        var s = this.getPointPosition(a, this.getDistanceFromCenterForValue(this.options.reverse ? this.min : this.max));
                                        i.beginPath(), i.moveTo(this.xCenter, this.yCenter), i.lineTo(s.x, s.y), i.stroke(), i.closePath()
                                    }
                                    var o = this.getPointPosition(a, this.getDistanceFromCenterForValue(this.options.reverse ? this.min : this.max) + 5),
                                        n = e.getValueOrDefault(this.options.pointLabels.fontColor, t.defaults.global.defaultFontColor),
                                        r = e.getValueOrDefault(this.options.pointLabels.fontSize, t.defaults.global.defaultFontSize),
                                        h = e.getValueOrDefault(this.options.pointLabels.fontStyle, t.defaults.global.defaultFontStyle),
                                        l = e.getValueOrDefault(this.options.pointLabels.fontFamily, t.defaults.global.defaultFontFamily),
                                        c = e.fontString(r, h, l);
                                    i.font = c, i.fillStyle = n;
                                    var d = this.pointLabels.length,
                                        u = this.pointLabels.length / 2,
                                        g = u / 2,
                                        f = g > a || a > d - g,
                                        m = a === g || a === d - g;
                                    0 === a ? i.textAlign = "center" : a === u ? i.textAlign = "center" : u > a ? i.textAlign = "left" : i.textAlign = "right", m ? i.textBaseline = "middle" : f ? i.textBaseline = "bottom" : i.textBaseline = "top", i.fillText(this.pointLabels[a] ? this.pointLabels[a] : "", o.x, o.y)
                                }
                            }
                        }
                    }
                });
            t.scaleService.registerScaleType("radialLinear", a, i)
        }
    }, {}],
    41: [function(t, e, i) {
        "use strict";
        var a = t("moment");
        a = "function" == typeof a ? a : window.moment, e.exports = function(t) {
            var e = t.helpers,
                i = {
                    units: [{
                        name: "millisecond",
                        steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
                    }, {
                        name: "second",
                        steps: [1, 2, 5, 10, 30]
                    }, {
                        name: "minute",
                        steps: [1, 2, 5, 10, 30]
                    }, {
                        name: "hour",
                        steps: [1, 2, 3, 6, 12]
                    }, {
                        name: "day",
                        steps: [1, 2, 5]
                    }, {
                        name: "week",
                        maxStep: 4
                    }, {
                        name: "month",
                        maxStep: 3
                    }, {
                        name: "quarter",
                        maxStep: 4
                    }, {
                        name: "year",
                        maxStep: !1
                    }]
                },
                s = {
                    position: "bottom",
                    time: {
                        parser: !1,
                        format: !1,
                        unit: !1,
                        round: !1,
                        displayFormat: !1,
                        displayFormats: {
                            millisecond: "h:mm:ss.SSS a",
                            second: "h:mm:ss a",
                            minute: "h:mm:ss a",
                            hour: "MMM D, hA",
                            day: "ll",
                            week: "ll",
                            month: "MMM YYYY",
                            quarter: "[Q]Q - YYYY",
                            year: "YYYY"
                        }
                    },
                    ticks: {
                        autoSkip: !1
                    }
                },
                o = t.Scale.extend({
                    initialize: function() {
                        if (!a) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                        t.Scale.prototype.initialize.call(this)
                    },
                    getLabelMoment: function(t, e) {
                        return this.labelMoments[t][e]
                    },
                    determineDataLimits: function() {
                        this.labelMoments = [];
                        var t = [];
                        this.chart.data.labels && this.chart.data.labels.length > 0 ? (e.each(this.chart.data.labels, function(e, i) {
                            var a = this.parseTime(e);
                            this.options.time.round && a.startOf(this.options.time.round), t.push(a)
                        }, this), this.firstTick = a.min.call(this, t), this.lastTick = a.max.call(this, t)) : (this.firstTick = null, this.lastTick = null), e.each(this.chart.data.datasets, function(i, s) {
                            var o = [];
                            "object" == typeof i.data[0] ? e.each(i.data, function(t, e) {
                                var i = this.parseTime(this.getRightValue(t));
                                this.options.time.round && i.startOf(this.options.time.round), o.push(i), this.firstTick = null !== this.firstTick ? a.min(this.firstTick, i) : i, this.lastTick = null !== this.lastTick ? a.max(this.lastTick, i) : i
                            }, this) : o = t, this.labelMoments.push(o)
                        }, this), this.options.time.min && (this.firstTick = this.parseTime(this.options.time.min)), this.options.time.max && (this.lastTick = this.parseTime(this.options.time.max)), this.firstTick = (this.firstTick || a()).clone(), this.lastTick = (this.lastTick || a()).clone()
                    },
                    buildTicks: function(a) {
                        this.ctx.save();
                        var s = e.getValueOrDefault(this.options.ticks.fontSize, t.defaults.global.defaultFontSize),
                            o = e.getValueOrDefault(this.options.ticks.fontStyle, t.defaults.global.defaultFontStyle),
                            n = e.getValueOrDefault(this.options.ticks.fontFamily, t.defaults.global.defaultFontFamily),
                            r = e.fontString(s, o, n);
                        if (this.ctx.font = r, this.ticks = [], this.unitScale = 1, this.scaleSizeInUnits = 0, this.options.time.unit) this.tickUnit = this.options.time.unit || "day", this.displayFormat = this.options.time.displayFormats[this.tickUnit], this.scaleSizeInUnits = this.lastTick.diff(this.firstTick, this.tickUnit, !0), this.unitScale = e.getValueOrDefault(this.options.time.unitStepSize, 1);
                        else {
                            var h = this.isHorizontal() ? this.width - (this.paddingLeft + this.paddingRight) : this.height - (this.paddingTop + this.paddingBottom),
                                l = this.tickFormatFunction(this.firstTick, 0, []),
                                c = this.ctx.measureText(l).width,
                                d = Math.cos(e.toRadians(this.options.ticks.maxRotation)),
                                u = Math.sin(e.toRadians(this.options.ticks.maxRotation));
                            c = c * d + s * u;
                            var g = h / c;
                            this.tickUnit = "millisecond", this.scaleSizeInUnits = this.lastTick.diff(this.firstTick, this.tickUnit, !0), this.displayFormat = this.options.time.displayFormats[this.tickUnit];
                            for (var f = 0, m = i.units[f]; f < i.units.length;) {
                                if (this.unitScale = 1, e.isArray(m.steps) && Math.ceil(this.scaleSizeInUnits / g) < e.max(m.steps)) {
                                    for (var p = 0; p < m.steps.length; ++p)
                                        if (m.steps[p] >= Math.ceil(this.scaleSizeInUnits / g)) {
                                            this.unitScale = e.getValueOrDefault(this.options.time.unitStepSize, m.steps[p]);
                                            break
                                        }
                                    break
                                }
                                if (m.maxStep === !1 || Math.ceil(this.scaleSizeInUnits / g) < m.maxStep) {
                                    this.unitScale = e.getValueOrDefault(this.options.time.unitStepSize, Math.ceil(this.scaleSizeInUnits / g));
                                    break
                                }++f, m = i.units[f], this.tickUnit = m.name, this.scaleSizeInUnits = this.lastTick.diff(this.firstTick, this.tickUnit, !0), this.displayFormat = this.options.time.displayFormats[m.name]
                            }
                        }
                        var b;
                        this.options.time.min ? b = this.firstTick.clone().startOf(this.tickUnit) : (this.firstTick.startOf(this.tickUnit), b = this.firstTick), this.options.time.max || this.lastTick.endOf(this.tickUnit), this.smallestLabelSeparation = this.width, e.each(this.chart.data.datasets, function(t, e) {
                            for (var i = 1; i < this.labelMoments[e].length; i++) this.smallestLabelSeparation = Math.min(this.smallestLabelSeparation, this.labelMoments[e][i].diff(this.labelMoments[e][i - 1], this.tickUnit, !0))
                        }, this), this.options.time.displayFormat && (this.displayFormat = this.options.time.displayFormat), this.ticks.push(this.firstTick.clone());
                        for (var x = 1; x < this.scaleSizeInUnits; ++x) {
                            var v = b.clone().add(x, this.tickUnit);
                            if (this.options.time.max && v.diff(this.lastTick, this.tickUnit, !0) >= 0) break;
                            x % this.unitScale === 0 && this.ticks.push(v)
                        }(0 !== this.ticks[this.ticks.length - 1].diff(this.lastTick, this.tickUnit) || 0 === this.scaleSizeInUnits) && (this.options.time.max ? (this.ticks.push(this.lastTick.clone()), this.scaleSizeInUnits = this.lastTick.diff(this.ticks[0], this.tickUnit, !0)) : (this.scaleSizeInUnits = Math.ceil(this.scaleSizeInUnits / this.unitScale) * this.unitScale, this.ticks.push(this.firstTick.clone().add(this.scaleSizeInUnits, this.tickUnit)), this.lastTick = this.ticks[this.ticks.length - 1].clone())), this.ctx.restore()
                    },
                    getLabelForIndex: function(t, e) {
                        var i = this.chart.data.labels && t < this.chart.data.labels.length ? this.chart.data.labels[t] : "";
                        return "object" == typeof this.chart.data.datasets[e].data[0] && (i = this.getRightValue(this.chart.data.datasets[e].data[t])), this.options.time.tooltipFormat && (i = this.parseTime(i).format(this.options.time.tooltipFormat)), i
                    },
                    tickFormatFunction: function(t, e, i) {
                        var a = t.format(this.displayFormat);
                        return this.options.ticks.userCallback ? this.options.ticks.userCallback(a, e, i) : a
                    },
                    convertTicksToLabels: function() {
                        this.ticks = this.ticks.map(this.tickFormatFunction, this)
                    },
                    getPixelForValue: function(t, e, i, a) {
                        var s = this.getLabelMoment(i, e);
                        if (s) {
                            var o = s.diff(this.firstTick, this.tickUnit, !0),
                                n = o / this.scaleSizeInUnits;
                            if (this.isHorizontal()) {
                                var r = this.width - (this.paddingLeft + this.paddingRight),
                                    h = (r / Math.max(this.ticks.length - 1, 1), r * n + this.paddingLeft);
                                return this.left + Math.round(h)
                            }
                            var l = this.height - (this.paddingTop + this.paddingBottom),
                                c = (l / Math.max(this.ticks.length - 1, 1), l * n + this.paddingTop);
                            return this.top + Math.round(c)
                        }
                    },
                    parseTime: function(t) {
                        return "string" == typeof this.options.time.parser ? a(t, this.options.time.parser) : "function" == typeof this.options.time.parser ? this.options.time.parser(t) : "function" == typeof t.getMonth || "number" == typeof t ? a(t) : t.isValid && t.isValid() ? t : "string" != typeof this.options.time.format && this.options.time.format.call ? (console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"), this.options.time.format(t)) : a(t, this.options.time.format)
                    }
                });
            t.scaleService.registerScaleType("time", o, s)
        }
    }, {
        moment: 1
    }]
}, {}, [7]);