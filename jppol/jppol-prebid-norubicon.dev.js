!function(u) {
    var s = window.pbjsChunk;
    window.pbjsChunk = function(e, t, n) {
        for (var r, i, o, a = 0, c = []; a < e.length; a++) i = e[a], d[i] && c.push(d[i][0]), 
        d[i] = 0;
        for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
        for (s && s(e, t, n); c.length; ) c.shift()();
        if (n) for (a = 0; a < n.length; a++) o = f(f.s = n[a]);
        return o;
    };
    var n = {}, d = {
        330: 0
    };
    function f(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return u[e].call(t.exports, t, t.exports, f), t.l = !0, t.exports;
    }
    f.m = u, f.c = n, f.d = function(e, t, n) {
        f.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        });
    }, f.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return f.d(t, "a", t), t;
    }, f.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, f.p = "", f.oe = function(e) {
        throw console.error(e), e;
    }, f(f.s = 842);
}({
    0: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "internal", function() {
            return R;
        }), n.d(t, "bind", function() {
            return D;
        }), t.getUniqueIdentifierStr = P, t.generateUUID = function e(t) {
            return t ? (t ^ q() >> t / 4).toString(16) : ([ 1e7 ] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e);
        }, t.getBidIdParameter = function(e, t) {
            if (t && t[e]) return t[e];
            return "";
        }, t.tryAppendQueryString = function(e, t, n) {
            if (n) return e + t + "=" + encodeURIComponent(n) + "&";
            return e;
        }, t.parseQueryStringParameters = function(e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
            return t = t.replace(/&$/, "");
        }, t.transformAdServerTargetingObj = function(t) {
            return t && 0 < Object.getOwnPropertyNames(t).length ? le(t).map(function(e) {
                return "".concat(e, "=").concat(encodeURIComponent(t[e]));
            }).join("&") : "";
        }, t.getAdUnitSizes = function(e) {
            if (!e) return;
            var t = [];
            {
                var n;
                e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes) ? (n = e.mediaTypes.banner.sizes, 
                Array.isArray(n[0]) ? t = n : t.push(n)) : Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes));
            }
            return t;
        }, t.parseSizesInput = function(e) {
            var t = [];
            if ("string" == typeof e) {
                var n = e.split(","), r = /^(\d)+x(\d)+$/i;
                if (n) for (var i in n) ie(n, i) && n[i].match(r) && t.push(n[i]);
            } else if ("object" === h(e)) {
                var o = e.length;
                if (0 < o) if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(M(e)); else for (var a = 0; a < o; a++) t.push(M(e[a]));
            }
            return t;
        }, t.parseGPTSingleSizeArray = M, t.parseGPTSingleSizeArrayToRtbSize = function(e) {
            if (G(e)) return {
                w: e[0],
                h: e[1]
            };
        }, t.getWindowTop = W, t.getWindowSelf = L, t.getWindowLocation = F, t.logMessage = z, 
        t.logInfo = V, t.logWarn = H, t.logError = K, t.hasConsoleLogger = function() {
            return _;
        }, t.debugTurnedOn = Y, t.createInvisibleIframe = function() {
            var e = document.createElement("iframe");
            return e.id = P(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", 
            e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", 
            e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", 
            e;
        }, t.getParameterByName = function(e) {
            return Te(F().search)[e] || "";
        }, t.isA = Q, t.isFn = $, t.isStr = X, t.isArray = Z, t.isNumber = ee, t.isPlainObject = te, 
        t.isBoolean = function(e) {
            return Q(e, C);
        }, t.isEmpty = ne, t.isEmptyStr = function(e) {
            return X(e) && (!e || 0 === e.length);
        }, t._each = re, t.contains = function(e, t) {
            if (ne(e)) return !1;
            if ($(e.indexOf)) return -1 !== e.indexOf(t);
            var n = e.length;
            for (;n--; ) if (e[n] === t) return !0;
            return !1;
        }, t._map = function(n, r) {
            if (ne(n)) return [];
            if ($(n.map)) return n.map(r);
            var i = [];
            return re(n, function(e, t) {
                i.push(r(e, t, n));
            }), i;
        }, t.hasOwn = ie, t.insertElement = oe, t.triggerPixel = ae, t.callBurl = function(e) {
            var t = e.source, n = e.burl;
            t === S.S2S.SRC && n && R.triggerPixel(n);
        }, t.insertHtmlIntoIframe = function(e) {
            if (!e) return;
            var t = document.createElement("iframe");
            t.id = P(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", t.marginWidth = "0", 
            t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", t.style.width = "0px", 
            t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", R.insertElement(t, document, "body"), 
            t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close();
        }, t.insertUserSyncIframe = ce, t.createTrackPixelHtml = function(e) {
            if (!e) return "";
            var t = encodeURI(e), n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return n += '<img src="' + t + '"></div>';
        }, t.createTrackPixelIframeHtml = ue, t.getValueString = se, t.uniques = de, t.flatten = fe, 
        t.getBidRequest = function(n, e) {
            return n ? (e.some(function(e) {
                var t = c()(e.bids, function(t) {
                    return [ "bidId", "adId", "bid_id" ].some(function(e) {
                        return t[e] === n;
                    });
                });
                return t && (r = t), t;
            }), r) : void 0;
            var r;
        }, t.getKeys = le, t.getValue = pe, t.getKeyByValue = function(e, t) {
            for (var n in e) if (e.hasOwnProperty(n) && e[n] === t) return n;
        }, t.getBidderCodes = function() {
            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map(function(e) {
                return e.bids.map(function(e) {
                    return e.bidder;
                }).reduce(fe, []);
            }).reduce(fe).filter(de);
        }, t.isGptPubadsDefined = ge, n.d(t, "getHighestCpm", function() {
            return be;
        }), n.d(t, "getOldestHighestCpmBid", function() {
            return ve;
        }), n.d(t, "getLatestHighestCpmBid", function() {
            return ye;
        }), t.shuffle = function(e) {
            var t = e.length;
            for (;0 < t; ) {
                var n = Math.floor(Math.random() * t), r = e[--t];
                e[t] = e[n], e[n] = r;
            }
            return e;
        }, t.adUnitsFilter = function(e, t) {
            return s()(e, t && t.adUnitCode);
        }, t.deepClone = me, t.inIframe = function() {
            try {
                return R.getWindowSelf() !== R.getWindowTop();
            } catch (e) {
                return !0;
            }
        }, t.isSafariBrowser = function() {
            return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent);
        }, t.replaceAuctionPrice = function(e, t) {
            if (!e) return;
            return e.replace(/\$\{AUCTION_PRICE\}/g, t);
        }, t.timestamp = function() {
            return new Date().getTime();
        }, t.hasDeviceAccess = function() {
            return !1 !== r.b.getConfig("deviceAccess");
        }, t.checkCookieSupport = Se, t.delayExecution = function(e, t) {
            if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));
            var n = 0;
            return function() {
                ++n === t && e.apply(this, arguments);
            };
        }, t.groupBy = function(e, n) {
            return e.reduce(function(e, t) {
                return (e[t[n]] = e[t[n]] || []).push(t), e;
            }, {});
        }, t.getDefinedParams = function(n, e) {
            return e.filter(function(e) {
                return n[e];
            }).reduce(function(e, t) {
                return y(e, v({}, t, n[t]));
            }, {});
        }, t.isValidMediaTypes = function(e) {
            var t = [ "banner", "native", "video" ];
            if (!Object.keys(e).every(function(e) {
                return s()(t, e);
            })) return !1;
            if (e.video && e.video.context) return s()([ "instream", "outstream", "adpod" ], e.video.context);
            return !0;
        }, t.getBidderRequest = function(e, t, n) {
            return c()(e, function(e) {
                return 0 < e.bids.filter(function(e) {
                    return e.bidder === t && e.adUnitCode === n;
                }).length;
            }) || {
                start: null,
                auctionId: null
            };
        }, t.getUserConfiguredParams = function(e, t, n) {
            return e.filter(function(e) {
                return e.code === t;
            }).map(function(e) {
                return e.bids;
            }).reduce(fe, []).filter(function(e) {
                return e.bidder === n;
            }).map(function(e) {
                return e.params || {};
            });
        }, t.getOrigin = function() {
            return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
        }, t.getDNT = function() {
            return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack;
        }, t.isAdUnitCodeMatchingSlot = function(t) {
            return function(e) {
                return Ae(t, e);
            };
        }, t.isSlotMatchingAdUnitCode = Ee, t.getGptSlotInfoForAdUnitCode = function(e) {
            var t;
            ge() && (t = c()(window.googletag.pubads().getSlots(), Ee(e)));
            if (t) return {
                gptSlot: t.getAdUnitPath(),
                divId: t.getSlotElementId()
            };
            return {};
        }, t.unsupportedBidderMessage = function(e, t) {
            var n = Object.keys(e.mediaTypes || {
                banner: "banner"
            }).join(", ");
            return "\n    ".concat(e.code, " is a ").concat(n, " ad unit\n    containing bidders that don't support ").concat(n, ": ").concat(t, ".\n    This bidder won't fetch demand.\n  ");
        }, t.isInteger = Oe, t.convertCamelToUnderscore = function(e) {
            return e.replace(/(?:^|\.?)([A-Z])/g, function(e, t) {
                return "_" + t.toLowerCase();
            }).replace(/^_/, "");
        }, t.cleanObj = function(n) {
            return Object.keys(n).reduce(function(e, t) {
                return void 0 !== n[t] && (e[t] = n[t]), e;
            }, {});
        }, t.pick = function(a, c) {
            return "object" === h(a) ? c.reduce(function(e, t, n) {
                if ("function" == typeof t) return e;
                var r = t, i = t.match(/^(.+?)\sas\s(.+?)$/i);
                i && (t = i[1], r = i[2]);
                var o = a[t];
                return "function" == typeof c[n + 1] && (o = c[n + 1](o, e)), void 0 !== o && (e[r] = o), 
                e;
            }, {}) : {};
        }, t.transformBidderParamKeywords = function(e) {
            var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords", i = [];
            return re(e, function(e, t) {
                if (Z(e)) {
                    var n = [];
                    re(e, function(e) {
                        !(e = se(r + "." + t, e)) && "" !== e || n.push(e);
                    }), e = n;
                } else {
                    if (!X(e = se(r + "." + t, e))) return;
                    e = [ e ];
                }
                i.push({
                    key: t,
                    value: e
                });
            }), i;
        }, t.convertTypes = function(r, i) {
            return Object.keys(r).forEach(function(e) {
                var t, n;
                i[e] && ($(r[e]) ? i[e] = r[e](i[e]) : i[e] = (t = r[e], n = i[e], "string" === t ? n && n.toString() : "number" === t ? Number(n) : n), 
                isNaN(i[e]) && delete i.key);
            }), i;
        }, t.isArrayOfNums = function(e, t) {
            return Z(e) && (!t || e.length === t) && e.every(Oe);
        }, t.fill = function(e, t) {
            for (var n = [], r = 0; r < t; r++) {
                var i = te(e) ? me(e) : e;
                n.push(i);
            }
            return n;
        }, t.chunk = function(e, t) {
            for (var n = [], r = 0; r < Math.ceil(e.length / t); r++) {
                var i = r * t, o = i + t;
                n.push(e.slice(i, o));
            }
            return n;
        }, t.getMinValueFromArray = function(e) {
            return Math.min.apply(Math, p(e));
        }, t.getMaxValueFromArray = function(e) {
            return Math.max.apply(Math, p(e));
        }, t.compareOn = function(n) {
            return function(e, t) {
                return e[n] < t[n] ? 1 : e[n] > t[n] ? -1 : 0;
            };
        }, t.parseQS = Te, t.formatQS = Ie, t.parseUrl = function(e, t) {
            var n = document.createElement("a");
            t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
            var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
            return {
                href: n.href,
                protocol: (n.protocol || "").replace(/:$/, ""),
                hostname: n.hostname,
                port: +n.port,
                pathname: n.pathname.replace(/^(?!\/)/, "/"),
                search: r ? n.search : R.parseQS(n.search || ""),
                hash: (n.hash || "").replace(/^#/, ""),
                host: n.host || window.location.host
            };
        }, t.buildUrl = function(e) {
            return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(R.formatQS(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "");
        }, t.deepEqual = Ce, t.mergeDeep = je, t.cyrb53Hash = function(e) {
            for (var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, r = function(e, t) {
                if ($(Math.imul)) return Math.imul(e, t);
                var n = (4194303 & e) * (t |= 0);
                return 4290772992 & e && (n += (4290772992 & e) * t | 0), 0 | n;
            }, i = 3735928559 ^ n, o = 1103547991 ^ n, a = 0; a < e.length; a++) t = e.charCodeAt(a), 
            i = r(i ^ t, 2654435761), o = r(o ^ t, 1597334677);
            return i = r(i ^ i >>> 16, 2246822507) ^ r(o ^ o >>> 13, 3266489909), (4294967296 * (2097151 & (o = r(o ^ o >>> 16, 2246822507) ^ r(i ^ i >>> 13, 3266489909))) + (i >>> 0)).toString();
        };
        var r = n(3), i = n(158), o = n.n(i), a = n(10), c = n.n(a), u = n(12), s = n.n(u), d = n(159);
        n.d(t, "deepAccess", function() {
            return d.a;
        });
        var f = n(160);
        function l(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var n = [], r = !0, i = !1, o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    i = !0, o = e;
                } finally {
                    try {
                        r || null == c.return || c.return();
                    } finally {
                        if (i) throw o;
                    }
                }
                return n;
            }(e, t) || g(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function p(e) {
            return function(e) {
                if (Array.isArray(e)) return b(e);
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
            }(e) || g(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function g(e, t) {
            if (e) {
                if ("string" == typeof e) return b(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? b(e, t) : void 0;
            }
        }
        function b(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function v(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function y() {
            return (y = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        function h(e) {
            return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        n.d(t, "deepSetValue", function() {
            return f.a;
        });
        var m, S = n(5), A = "Array", E = "String", O = "Function", T = "Number", I = "Object", C = "Boolean", j = Object.prototype.toString, w = Boolean(window.console), _ = Boolean(w && window.console.log), B = Boolean(w && window.console.info), x = Boolean(w && window.console.warn), U = Boolean(w && window.console.error), R = {
            checkCookieSupport: Se,
            createTrackPixelIframeHtml: ue,
            getWindowSelf: L,
            getWindowTop: W,
            getWindowLocation: F,
            insertUserSyncIframe: ce,
            insertElement: oe,
            isFn: $,
            triggerPixel: ae,
            logError: K,
            logWarn: H,
            logMessage: z,
            logInfo: V,
            parseQS: Te,
            formatQS: Ie,
            deepEqual: Ce
        }, k = {}, D = function(e, t) {
            return t;
        }.bind(null, 1, k)() === k ? Function.prototype.bind : function(e) {
            var t = this, n = Array.prototype.slice.call(arguments, 1);
            return function() {
                return t.apply(e, n.concat(Array.prototype.slice.call(arguments)));
            };
        }, N = (m = 0, function() {
            return ++m;
        });
        function P() {
            return N() + Math.random().toString(16).substr(2);
        }
        function q() {
            return window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random();
        }
        function M(e) {
            if (G(e)) return e[0] + "x" + e[1];
        }
        function G(e) {
            return Z(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]);
        }
        function W() {
            return window.top;
        }
        function L() {
            return window.self;
        }
        function F() {
            return window.location;
        }
        function z() {
            Y() && _ && console.log.apply(console, J(arguments, "MESSAGE:"));
        }
        function V() {
            Y() && B && console.info.apply(console, J(arguments, "INFO:"));
        }
        function H() {
            Y() && x && console.warn.apply(console, J(arguments, "WARNING:"));
        }
        function K() {
            Y() && U && console.error.apply(console, J(arguments, "ERROR:"));
        }
        function J(e, t) {
            return e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), 
            e.unshift("%cPrebid"), e;
        }
        function Y() {
            return !!r.b.getConfig("debug");
        }
        function Q(e, t) {
            return j.call(e) === "[object " + t + "]";
        }
        function $(e) {
            return Q(e, O);
        }
        function X(e) {
            return Q(e, E);
        }
        function Z(e) {
            return Q(e, A);
        }
        function ee(e) {
            return Q(e, T);
        }
        function te(e) {
            return Q(e, I);
        }
        function ne(e) {
            if (!e) return !0;
            if (Z(e) || X(e)) return !(0 < e.length);
            for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
            return !0;
        }
        function re(e, t) {
            if (!ne(e)) {
                if ($(e.forEach)) return e.forEach(t, this);
                var n = 0, r = e.length;
                if (0 < r) for (;n < r; n++) t(e[n], n, e); else for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n);
            }
        }
        function ie(e, t) {
            return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t];
        }
        function oe(e, t, n, r) {
            var i;
            t = t || document, i = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
            try {
                if ((i = i.length ? i : t.getElementsByTagName("body")).length) {
                    i = i[0];
                    var o = r ? null : i.firstChild;
                    return i.insertBefore(e, o);
                }
            } catch (e) {}
        }
        function ae(e, t) {
            var n = new Image();
            t && R.isFn(t) && (n.addEventListener("load", t), n.addEventListener("error", t)), 
            n.src = e;
        }
        function ce(e, t) {
            var n = R.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"), r = document.createElement("div");
            r.innerHTML = n;
            var i = r.firstChild;
            t && R.isFn(t) && (i.addEventListener("load", t), i.addEventListener("error", t)), 
            R.insertElement(i, document, "html", !0);
        }
        function ue(e) {
            var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            return e ? ((!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && (e = encodeURI(e)), 
            t = t && 'sandbox="'.concat(t, '"'), "<iframe ".concat(t, ' id="').concat(P(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : "";
        }
        function se(e, t, n) {
            return null == t ? n : X(t) ? t : ee(t) ? t.toString() : void R.logWarn("Unsuported type for param: " + e + " required type: String");
        }
        function de(e, t, n) {
            return n.indexOf(e) === t;
        }
        function fe(e, t) {
            return e.concat(t);
        }
        function le(e) {
            return Object.keys(e);
        }
        function pe(e, t) {
            return e[t];
        }
        function ge() {
            if (window.googletag && $(window.googletag.pubads) && $(window.googletag.pubads().getSlots)) return !0;
        }
        var be = he("timeToRespond", function(e, t) {
            return t < e;
        }), ve = he("responseTimestamp", function(e, t) {
            return t < e;
        }), ye = he("responseTimestamp", function(e, t) {
            return e < t;
        });
        function he(n, r) {
            return function(e, t) {
                return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e;
            };
        }
        function me(e) {
            return o()(e);
        }
        function Se() {
            if (window.navigator.cookieEnabled || document.cookie.length) return !0;
        }
        var Ae = function(e, t) {
            return e.getAdUnitPath() === t || e.getSlotElementId() === t;
        };
        function Ee(t) {
            return function(e) {
                return Ae(e, t);
            };
        }
        function Oe(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e;
        }
        function Te(e) {
            return e ? e.replace(/^\?/, "").split("&").reduce(function(e, t) {
                var n = l(t.split("="), 2), r = n[0], i = n[1];
                return /\[\]$/.test(r) ? (e[r = r.replace("[]", "")] = e[r] || [], e[r].push(i)) : e[r] = i || "", 
                e;
            }, {}) : {};
        }
        function Ie(e) {
            return Object.keys(e).map(function(t) {
                return Array.isArray(e[t]) ? e[t].map(function(e) {
                    return "".concat(t, "[]=").concat(e);
                }).join("&") : "".concat(t, "=").concat(e[t]);
            }).join("&");
        }
        function Ce(e, t) {
            if (e === t) return !0;
            if ("object" !== h(e) || null === e || "object" !== h(t) || null === t) return !1;
            if (Object.keys(e).length !== Object.keys(t).length) return !1;
            for (var n in e) {
                if (!t.hasOwnProperty(n)) return !1;
                if (!Ce(e[n], t[n])) return !1;
            }
            return !0;
        }
        function je(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            if (!n.length) return e;
            var i = n.shift();
            if (te(e) && te(i)) for (var o in i) te(i[o]) ? (e[o] || y(e, v({}, o, {})), je(e[o], i[o])) : Z(i[o]) && e[o] ? Z(e[o]) && (e[o] = e[o].concat(i[o])) : y(e, v({}, o, i[o]));
            return je.apply(void 0, [ e ].concat(n));
        }
    },
    1: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "storage", function() {
            return I;
        }), t.registerBidder = function(r) {
            var n = Array.isArray(r.supportedMediaTypes) ? {
                supportedMediaTypes: r.supportedMediaTypes
            } : void 0;
            function i(e) {
                var t = w(e);
                c.default.registerBidAdapter(t, e.code, n);
            }
            i(r), Array.isArray(r.aliases) && r.aliases.forEach(function(e) {
                var t, n = e;
                Object(m.isPlainObject)(e) && (n = e.code, t = e.gvlid), c.default.aliasRegistry[n] = r.code, 
                i(T({}, r, {
                    code: n,
                    gvlid: t
                }));
            });
        }, t.newBidder = w, n.d(t, "registerSyncInner", function() {
            return _;
        }), t.preloadBidderMappingFile = B, t.getIabSubCategory = function(t, e) {
            var n = c.default.getBidAdapter(t);
            if (n.getSpec().getMappingFileInfo) {
                var r = n.getSpec().getMappingFileInfo(), i = r.localStorageKey ? r.localStorageKey : n.getBidderCode(), o = I.getDataFromLocalStorage(i);
                if (o) {
                    try {
                        o = JSON.parse(o);
                    } catch (e) {
                        Object(m.logError)("Failed to parse ".concat(t, " mapping data stored in local storage"));
                    }
                    return o.mapping[e] ? o.mapping[e] : null;
                }
            }
        }, t.isValid = x;
        var r = n(90), c = n(7), u = n(3), v = n(32), s = n(44), o = n(36), a = n(33), i = n(5), y = n.n(i), d = n(9), h = n.n(d), f = n(12), l = n.n(f), p = n(4), m = n(0), g = n(2), b = n(13), S = n(8);
        function A(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var n = [], r = !0, i = !1, o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    i = !0, o = e;
                } finally {
                    try {
                        r || null == c.return || c.return();
                    } finally {
                        if (i) throw o;
                    }
                }
                return n;
            }(e, t) || function(e, t) {
                if (!e) return;
                if ("string" == typeof e) return E(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t);
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function E(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function O(e) {
            return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function T() {
            return (T = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        var I = Object(S.a)("bidderFactory"), C = [ "requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency" ], j = 1;
        function w(p) {
            return T(new r.a(p.code), {
                getSpec: function() {
                    return Object.freeze(p);
                },
                registerSyncs: g,
                callBids: function(o, a, e, n, c, r) {
                    var u, s, t, d, i, f;
                    function l() {
                        e(), h.a.emit(y.a.EVENTS.BIDDER_DONE, o), g(s, o.gdprConsent, o.uspConsent);
                    }
                    Array.isArray(o.bids) && (u = {}, s = [], 0 !== (t = o.bids.filter(b)).length ? (d = {}, 
                    t.forEach(function(e) {
                        (d[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode);
                    }), (i = p.buildRequests(t, o)) && 0 !== i.length ? (Array.isArray(i) || (i = [ i ]), 
                    f = Object(m.delayExecution)(r(l), i.length), i.forEach(function(i) {
                        switch (i.method) {
                          case "GET":
                            n("".concat(i.url).concat(function(e) {
                                if (e) return "?".concat("object" === O(e) ? Object(m.parseQueryStringParameters)(e) : e);
                                return "";
                            }(i.data)), {
                                success: r(e),
                                error: t
                            }, void 0, T({
                                method: "GET",
                                withCredentials: !0
                            }, i.options));
                            break;

                          case "POST":
                            n(i.url, {
                                success: r(e),
                                error: t
                            }, "string" == typeof i.data ? i.data : JSON.stringify(i.data), T({
                                method: "POST",
                                contentType: "text/plain",
                                withCredentials: !0
                            }, i.options));
                            break;

                          default:
                            Object(m.logWarn)("Skipping invalid request from ".concat(p.code, ". Request type ").concat(i.type, " must be GET or POST")), 
                            f();
                        }
                        function e(e, t) {
                            c(p.code);
                            try {
                                e = JSON.parse(e);
                            } catch (e) {}
                            var n;
                            e = {
                                body: e,
                                headers: {
                                    get: t.getResponseHeader.bind(t)
                                }
                            }, s.push(e);
                            try {
                                n = p.interpretResponse(e, i);
                            } catch (e) {
                                return Object(m.logError)("Bidder ".concat(p.code, " failed to interpret the server's response. Continuing without bids"), null, e), 
                                void f();
                            }
                            function r(e) {
                                var t, n, r, i = d[e.requestId];
                                i ? (e.originalCpm = e.cpm, e.originalCurrency = e.currency, e.meta = e.meta || T({}, e[i.bidder]), 
                                t = T(Object(v.a)(y.a.STATUS.GOOD, i), e), n = i.adUnitCode, r = t, u[n] = !0, x(n, r, [ o ]) && a(n, r)) : Object(m.logWarn)("Bidder ".concat(p.code, " made bid for unknown request ID: ").concat(e.requestId, ". Ignoring."));
                            }
                            n && (Object(m.isArray)(n) ? n.forEach(r) : r(n)), f(n);
                        }
                        function t(e) {
                            c(p.code), Object(m.logError)("Server call for ".concat(p.code, " failed: ").concat(e, ". Continuing without bids.")), 
                            f();
                        }
                    })) : l()) : l());
                }
            });
            function g(e, t, n) {
                _(p, e, t, n);
            }
            function b(e) {
                return !!p.isBidRequestValid(e) || (Object(m.logWarn)("Invalid bid sent to bidder ".concat(p.code, ": ").concat(JSON.stringify(e))), 
                !1);
            }
        }
        var _ = Object(b.b)("async", function(t, e, n, r) {
            var i, o, a = u.b.getConfig("userSync.aliasSyncEnabled");
            !t.getUserSyncs || !a && c.default.aliasRegistry[t.code] || (i = u.b.getConfig("userSync.filterSettings"), 
            (o = t.getUserSyncs({
                iframeEnabled: !(!i || !i.iframe && !i.all),
                pixelEnabled: !(!i || !i.image && !i.all)
            }, e, n, r)) && (Array.isArray(o) || (o = [ o ]), o.forEach(function(e) {
                s.a.registerSync(e.type, t.code, e.url);
            })));
        }, "registerSyncs");
        function B(e, t) {
            if (!u.b.getConfig("adpod.brandCategoryExclusion")) return e.call(this, t);
            t.filter(function(e) {
                return Object(m.deepAccess)(e, "mediaTypes.video.context") === g.a;
            }).map(function(e) {
                return e.bids.map(function(e) {
                    return e.bidder;
                });
            }).reduce(m.flatten, []).filter(m.uniques).forEach(function(n) {
                var e = c.default.getBidAdapter(n);
                if (e.getSpec().getMappingFileInfo) {
                    var t = e.getSpec().getMappingFileInfo(), r = t.refreshInDays ? t.refreshInDays : j, i = t.localStorageKey ? t.localStorageKey : e.getSpec().code, o = I.getDataFromLocalStorage(i);
                    try {
                        (!(o = o ? JSON.parse(o) : void 0) || Object(m.timestamp)() > o.lastUpdated + 24 * r * 60 * 60 * 1e3) && Object(p.a)(t.url, {
                            success: function(e) {
                                try {
                                    e = JSON.parse(e);
                                    var t = {
                                        lastUpdated: Object(m.timestamp)(),
                                        mapping: e.mapping
                                    };
                                    I.setDataInLocalStorage(i, JSON.stringify(t));
                                } catch (e) {
                                    Object(m.logError)("Failed to parse ".concat(n, " bidder translation mapping file"));
                                }
                            },
                            error: function() {
                                Object(m.logError)("Failed to load ".concat(n, " bidder translation file"));
                            }
                        });
                    } catch (e) {
                        Object(m.logError)("Failed to parse ".concat(n, " bidder translation mapping file"));
                    }
                }
            }), e.call(this, t);
        }
        function x(e, t, n) {
            function r(e) {
                return "Invalid bid from ".concat(t.bidderCode, ". Ignoring bid: ").concat(e);
            }
            return e ? t ? (i = Object.keys(t), C.every(function(e) {
                return l()(i, e) && !l()([ void 0, null ], t[e]);
            }) ? "native" !== t.mediaType || Object(o.f)(t, n) ? "video" !== t.mediaType || Object(a.d)(t, n) ? !("banner" === t.mediaType && !function(e, t, n) {
                if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10))) return t.width = parseInt(t.width, 10), 
                t.height = parseInt(t.height, 10), 1;
                var r = Object(m.getBidderRequest)(n, t.bidderCode, e), i = r && r.bids && r.bids[0] && r.bids[0].sizes, o = Object(m.parseSizesInput)(i);
                if (1 === o.length) {
                    var a = A(o[0].split("x"), 2), c = a[0], u = a[1];
                    return t.width = parseInt(c, 10), t.height = parseInt(u, 10), 1;
                }
            }(e, t, n)) || (Object(m.logError)(r("Banner bids require a width and height")), 
            !1) : (Object(m.logError)(r("Video bid does not have required vastUrl or renderer property")), 
            !1) : (Object(m.logError)(r("Native bid missing some required properties.")), !1) : (Object(m.logError)(r("Bidder ".concat(t.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), 
            !1)) : (Object(m.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), 
            !1) : (Object(m.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
            var i;
        }
        Object(b.a)("checkAdUnitSetup").before(B);
    },
    10: function(e, t, n) {
        var r = n(96);
        e.exports = r;
    },
    100: function(e, t, n) {
        function r(e, t) {
            var n = c[a(e)];
            return n == s || n != u && ("function" == typeof t ? i(t) : !!t);
        }
        var i = n(29), o = /#|\.prototype\./, a = r.normalize = function(e) {
            return String(e).replace(o, ".").toLowerCase();
        }, c = r.data = {}, u = r.NATIVE = "N", s = r.POLYFILL = "P";
        e.exports = r;
    },
    101: function(e, t, n) {
        var r = n(23), i = n(102), o = n(19)("species");
        e.exports = function(e, t) {
            var n;
            return i(e) && ("function" == typeof (n = e.constructor) && (n === Array || i(n.prototype)) || r(n) && null === (n = n[o])) && (n = void 0), 
            new (void 0 === n ? Array : n)(0 === t ? 0 : t);
        };
    },
    102: function(e, t, n) {
        var r = n(48);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e);
        };
    },
    103: function(e, t, n) {
        var r = n(22), i = n(30);
        e.exports = function(t, n) {
            try {
                i(r, t, n);
            } catch (e) {
                r[t] = n;
            }
            return n;
        };
    },
    104: function(e, t, n) {
        var r = n(75);
        e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    105: function(e, t, n) {
        n(106);
        var r = n(52);
        e.exports = r("Array", "includes");
    },
    106: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(76).includes, o = n(51);
        r({
            target: "Array",
            proto: !0,
            forced: !n(60)("indexOf", {
                ACCESSORS: !0,
                1: 0
            })
        }, {
            includes: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0);
            }
        }), o("includes");
    },
    107: function(e, t, n) {
        var r = n(58), i = Math.max, o = Math.min;
        e.exports = function(e, t) {
            var n = r(e);
            return n < 0 ? i(n + t, 0) : o(n, t);
        };
    },
    108: function(e, t, n) {
        n(109), n(126), n(87), n(128);
        var r = n(43);
        e.exports = r.Set;
    },
    109: function(e, t, n) {
        "use strict";
        var r = n(110), i = n(115);
        e.exports = r("Set", function(t) {
            return function(e) {
                return t(this, arguments.length ? e : void 0);
            };
        }, i);
    },
    11: function(e, t, n) {
        "use strict";
        t.a = i, t.c = function(e) {
            return !(!e || !e.url);
        }, t.b = function(e, t) {
            e.render(t);
        };
        var u = n(40), s = n(0), r = n(10), d = n.n(r), f = "outstream";
        function i(e) {
            var t = this, r = e.url, n = e.config, i = e.id, o = e.callback, a = e.loaded, c = e.adUnitCode;
            this.url = r, this.config = n, this.handlers = {}, this.id = i, this.loaded = a, 
            this.cmd = [], this.push = function(e) {
                "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : s.logError("Commands given to Renderer.push must be wrapped in a function");
            }, this.callback = o || function() {
                t.loaded = !0, t.process();
            }, this.render = function() {
                var t, e, n;
                t = c, e = pbjs.adUnits, (n = d()(e, function(e) {
                    return e.code === t;
                })) && n.renderer && n.renderer.url && n.renderer.render ? s.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(c)) : Object(u.a)(r, f, this.callback), 
                this._render ? this._render.apply(this, arguments) : s.logWarn("No render function was provided, please use .setRender on the renderer");
            }.bind(this);
        }
        i.install = function(e) {
            return new i({
                url: e.url,
                config: e.config,
                id: e.id,
                callback: e.callback,
                loaded: e.loaded,
                adUnitCode: e.adUnitCode
            });
        }, i.prototype.getConfig = function() {
            return this.config;
        }, i.prototype.setRender = function(e) {
            this._render = e;
        }, i.prototype.setEventHandlers = function(e) {
            this.handlers = e;
        }, i.prototype.handleVideoEvent = function(e) {
            var t = e.id, n = e.eventName;
            "function" == typeof this.handlers[n] && this.handlers[n](), s.logMessage("Prebid Renderer event for id ".concat(t, " type ").concat(n));
        }, i.prototype.process = function() {
            for (;0 < this.cmd.length; ) try {
                this.cmd.shift().call();
            } catch (e) {
                s.logError("Error processing Renderer command: ", e);
            }
        };
    },
    110: function(e, t, n) {
        "use strict";
        var f = n(14), l = n(22), p = n(78), g = n(29), b = n(30), v = n(17), y = n(81), h = n(23), m = n(64), S = n(31).f, A = n(56).forEach, E = n(28), r = n(54), O = r.set, T = r.getterFor;
        e.exports = function(n, e, t) {
            var r, a, i = -1 !== n.indexOf("Map"), c = -1 !== n.indexOf("Weak"), o = i ? "set" : "add", u = l[n], s = u && u.prototype, d = {};
            return E && "function" == typeof u && (c || s.forEach && !g(function() {
                new u().entries().next();
            })) ? (r = e(function(e, t) {
                O(y(e, r, n), {
                    type: n,
                    collection: new u()
                }), null != t && v(t, e[o], e, i);
            }), a = T(n), A([ "add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries" ], function(i) {
                var o = "add" == i || "set" == i;
                i in s && (!c || "clear" != i) && b(r.prototype, i, function(e, t) {
                    var n = a(this).collection;
                    if (!o && c && !h(e)) return "get" == i && void 0;
                    var r = n[i](0 === e ? 0 : e, t);
                    return o ? this : r;
                });
            }), c || S(r.prototype, "size", {
                configurable: !0,
                get: function() {
                    return a(this).collection.size;
                }
            })) : (r = t.getConstructor(e, n, i, o), p.REQUIRED = !0), m(r, n, !1, !0), d[n] = r, 
            f({
                global: !0,
                forced: !0
            }, d), c || t.setStrong(r, n, i), r;
        };
    },
    111: function(e, t, n) {
        var r = n(29);
        e.exports = !r(function() {
            return Object.isExtensible(Object.preventExtensions({}));
        });
    },
    112: function(e, t, n) {
        "use strict";
        var r = n(63), i = n(62);
        e.exports = r ? {}.toString : function() {
            return "[object " + i(this) + "]";
        };
    },
    113: function(e, t, n) {
        var r = n(22), i = n(114), o = r.WeakMap;
        e.exports = "function" == typeof o && /native code/.test(i(o));
    },
    114: function(e, t, n) {
        var r = n(74), i = Function.toString;
        "function" != typeof r.inspectSource && (r.inspectSource = function(e) {
            return i.call(e);
        }), e.exports = r.inspectSource;
    },
    115: function(e, t, n) {
        "use strict";
        var s = n(31).f, d = n(82), f = n(120), l = n(21), p = n(81), g = n(17), a = n(66), c = n(125), b = n(28), v = n(78).fastKey, r = n(54), y = r.set, h = r.getterFor;
        e.exports = {
            getConstructor: function(e, n, r, i) {
                function o(e, t, n) {
                    var r, i, o = c(e), a = u(e, t);
                    return a ? a.value = n : (o.last = a = {
                        index: i = v(t, !0),
                        key: t,
                        value: n,
                        previous: r = o.last,
                        next: void 0,
                        removed: !1
                    }, o.first || (o.first = a), r && (r.next = a), b ? o.size++ : e.size++, "F" !== i && (o.index[i] = a)), 
                    e;
                }
                var a = e(function(e, t) {
                    p(e, a, n), y(e, {
                        type: n,
                        index: d(null),
                        first: void 0,
                        last: void 0,
                        size: 0
                    }), b || (e.size = 0), null != t && g(t, e[i], e, r);
                }), c = h(n), u = function(e, t) {
                    var n, r = c(e), i = v(t);
                    if ("F" !== i) return r.index[i];
                    for (n = r.first; n; n = n.next) if (n.key == t) return n;
                };
                return f(a.prototype, {
                    clear: function() {
                        for (var e = c(this), t = e.index, n = e.first; n; ) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), 
                        delete t[n.index], n = n.next;
                        e.first = e.last = void 0, b ? e.size = 0 : this.size = 0;
                    },
                    delete: function(e) {
                        var t, n, r = c(this), i = u(this, e);
                        return i && (t = i.next, n = i.previous, delete r.index[i.index], i.removed = !0, 
                        n && (n.next = t), t && (t.previous = n), r.first == i && (r.first = t), r.last == i && (r.last = n), 
                        b ? r.size-- : this.size--), !!i;
                    },
                    forEach: function(e, t) {
                        for (var n, r = c(this), i = l(e, 1 < arguments.length ? t : void 0, 3); n = n ? n.next : r.first; ) for (i(n.value, n.key, this); n && n.removed; ) n = n.previous;
                    },
                    has: function(e) {
                        return !!u(this, e);
                    }
                }), f(a.prototype, r ? {
                    get: function(e) {
                        var t = u(this, e);
                        return t && t.value;
                    },
                    set: function(e, t) {
                        return o(this, 0 === e ? 0 : e, t);
                    }
                } : {
                    add: function(e) {
                        return o(this, e = 0 === e ? 0 : e, e);
                    }
                }), b && s(a.prototype, "size", {
                    get: function() {
                        return c(this).size;
                    }
                }), a;
            },
            setStrong: function(e, t, n) {
                var r = t + " Iterator", i = h(t), o = h(r);
                a(e, t, function(e, t) {
                    y(this, {
                        type: r,
                        target: e,
                        state: i(e),
                        kind: t,
                        last: void 0
                    });
                }, function() {
                    for (var e = o(this), t = e.kind, n = e.last; n && n.removed; ) n = n.previous;
                    return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
                        value: n.key,
                        done: !1
                    } : "values" == t ? {
                        value: n.value,
                        done: !1
                    } : {
                        value: [ n.key, n.value ],
                        done: !1
                    } : {
                        value: e.target = void 0,
                        done: !0
                    };
                }, n ? "entries" : "values", !n, !0), c(t);
            }
        };
    },
    116: function(e, t, n) {
        var r = n(28), a = n(31), c = n(15), u = n(117);
        e.exports = r ? Object.defineProperties : function(e, t) {
            c(e);
            for (var n, r = u(t), i = r.length, o = 0; o < i; ) a.f(e, n = r[o++], t[n]);
            return e;
        };
    },
    117: function(e, t, n) {
        var r = n(118), i = n(83);
        e.exports = Object.keys || function(e) {
            return r(e, i);
        };
    },
    118: function(e, t, n) {
        var a = n(24), c = n(47), u = n(76).indexOf, s = n(53);
        e.exports = function(e, t) {
            var n, r = c(e), i = 0, o = [];
            for (n in r) !a(s, n) && a(r, n) && o.push(n);
            for (;t.length > i; ) a(r, n = t[i++]) && (~u(o, n) || o.push(n));
            return o;
        };
    },
    119: function(e, t, n) {
        var r = n(25);
        e.exports = r("document", "documentElement");
    },
    12: function(e, t, n) {
        var r = n(105);
        e.exports = r;
    },
    120: function(e, t, n) {
        var i = n(84);
        e.exports = function(e, t, n) {
            for (var r in t) n && n.unsafe && e[r] ? e[r] = t[r] : i(e, r, t[r], n);
            return e;
        };
    },
    121: function(e, t, n) {
        "use strict";
        function i() {
            return this;
        }
        var o = n(85).IteratorPrototype, a = n(82), c = n(46), u = n(64), s = n(38);
        e.exports = function(e, t, n) {
            var r = t + " Iterator";
            return e.prototype = a(o, {
                next: c(1, n)
            }), u(e, r, !1, !0), s[r] = i, e;
        };
    },
    122: function(e, t, n) {
        var r = n(29);
        e.exports = !r(function() {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
        });
    },
    123: function(e, t, n) {
        var i = n(15), o = n(124);
        e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var n, r = !1, e = {};
            try {
                (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []), 
                r = e instanceof Array;
            } catch (e) {}
            return function(e, t) {
                return i(e), o(t), r ? n.call(e, t) : e.__proto__ = t, e;
            };
        }() : void 0);
    },
    124: function(e, t, n) {
        var r = n(23);
        e.exports = function(e) {
            if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
            return e;
        };
    },
    125: function(e, t, n) {
        "use strict";
        var r = n(25), i = n(31), o = n(19), a = n(28), c = o("species");
        e.exports = function(e) {
            var t = r(e), n = i.f;
            a && t && !t[c] && n(t, c, {
                configurable: !0,
                get: function() {
                    return this;
                }
            });
        };
    },
    126: function(e, t) {},
    127: function(e, t, n) {
        function r(c) {
            return function(e, t) {
                var n, r, i = String(s(e)), o = u(t), a = i.length;
                return o < 0 || a <= o ? c ? "" : void 0 : (n = i.charCodeAt(o)) < 55296 || 56319 < n || o + 1 === a || (r = i.charCodeAt(o + 1)) < 56320 || 57343 < r ? c ? i.charAt(o) : n : c ? i.slice(o, o + 2) : r - 56320 + (n - 55296 << 10) + 65536;
            };
        }
        var u = n(58), s = n(49);
        e.exports = {
            codeAt: r(!1),
            charAt: r(!0)
        };
    },
    128: function(e, t, n) {
        n(129);
        var r = n(130), i = n(22), o = n(62), a = n(30), c = n(38), u = n(19)("toStringTag");
        for (var s in r) {
            var d = i[s], f = d && d.prototype;
            f && o(f) !== u && a(f, u, s), c[s] = c.Array;
        }
    },
    129: function(e, t, n) {
        "use strict";
        var r = n(47), i = n(51), o = n(38), a = n(54), c = n(66), u = "Array Iterator", s = a.set, d = a.getterFor(u);
        e.exports = c(Array, "Array", function(e, t) {
            s(this, {
                type: u,
                target: r(e),
                index: 0,
                kind: t
            });
        }, function() {
            var e = d(this), t = e.target, n = e.kind, r = e.index++;
            return !t || r >= t.length ? {
                value: e.target = void 0,
                done: !0
            } : "keys" == n ? {
                value: r,
                done: !1
            } : "values" == n ? {
                value: t[r],
                done: !1
            } : {
                value: [ r, t[r] ],
                done: !1
            };
        }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries");
    },
    13: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "a", function() {
            return c;
        }), t.d = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 15;
            0 === e.getHooks({
                hook: t
            }).length && e.before(t, n);
        }, t.c = function(e, n) {
            a("async", function(e) {
                e.forEach(function(e) {
                    return n.apply(void 0, function(e) {
                        if (Array.isArray(e)) return o(e);
                    }(t = e) || function(e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                    }(t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return o(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0;
                        }
                    }(t) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }());
                    var t;
                });
            }, e)([]);
        }, t.e = function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            c(e).before(function(e, t) {
                t.push(n), e(t);
            });
        };
        var r = n(161), i = n.n(r);
        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        var a = i()({
            ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE
        }), c = a.get;
    },
    130: function(e, t) {
        e.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        };
    },
    131: function(e, t, n) {
        n(14)({
            target: "Set",
            stat: !0
        }, {
            from: n(132)
        });
    },
    132: function(e, t, n) {
        "use strict";
        var s = n(18), d = n(21), f = n(17);
        e.exports = function(e, t, n) {
            var r, i, o, a, c = arguments.length, u = 1 < c ? t : void 0;
            return s(this), (r = void 0 !== u) && s(u), null == e ? new this() : (i = [], r ? (o = 0, 
            a = d(u, 2 < c ? n : void 0, 2), f(e, function(e) {
                i.push(a(e, o++));
            })) : f(e, i.push, i), new this(i));
        };
    },
    133: function(e, t, n) {
        n(14)({
            target: "Set",
            stat: !0
        }, {
            of: n(134)
        });
    },
    134: function(e, t, n) {
        "use strict";
        e.exports = function() {
            for (var e = arguments.length, t = new Array(e); e--; ) t[e] = arguments[e];
            return new this(t);
        };
    },
    135: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(136);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            addAll: function() {
                return o.apply(this, arguments);
            }
        });
    },
    136: function(e, t, n) {
        "use strict";
        var i = n(15), o = n(18);
        e.exports = function() {
            for (var e = i(this), t = o(e.add), n = 0, r = arguments.length; n < r; n++) t.call(e, arguments[n]);
            return e;
        };
    },
    137: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(138);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            deleteAll: function() {
                return o.apply(this, arguments);
            }
        });
    },
    138: function(e, t, n) {
        "use strict";
        var a = n(15), c = n(18);
        e.exports = function() {
            for (var e, t = a(this), n = c(t.delete), r = !0, i = 0, o = arguments.length; i < o; i++) e = n.call(t, arguments[i]), 
            r = r && e;
            return !!r;
        };
    },
    139: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(15), a = n(21), c = n(35), u = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            every: function(e, t) {
                var n = o(this), r = c(n), i = a(e, 1 < arguments.length ? t : void 0, 3);
                return !u(r, function(e) {
                    if (!i(e, e, n)) return u.stop();
                }, void 0, !1, !0).stopped;
            }
        });
    },
    14: function(e, t, n) {
        "use strict";
        function y(r) {
            function e(e, t, n) {
                if (this instanceof r) {
                    switch (arguments.length) {
                      case 0:
                        return new r();

                      case 1:
                        return new r(e);

                      case 2:
                        return new r(e, t);
                    }
                    return new r(e, t, n);
                }
                return r.apply(this, arguments);
            }
            return e.prototype = r.prototype, e;
        }
        var h = n(22), m = n(98).f, S = n(100), A = n(43), E = n(21), O = n(30), T = n(24);
        e.exports = function(e, t) {
            var n, r, i, o, a, c, u, s, d = e.target, f = e.global, l = e.stat, p = e.proto, g = f ? h : l ? h[d] : (h[d] || {}).prototype, b = f ? A : A[d] || (A[d] = {}), v = b.prototype;
            for (i in t) n = !S(f ? i : d + (l ? "." : "#") + i, e.forced) && g && T(g, i), 
            a = b[i], n && (c = e.noTargetGet ? (s = m(g, i)) && s.value : g[i]), o = n && c ? c : t[i], 
            n && typeof a == typeof o || (u = e.bind && n ? E(o, h) : e.wrap && n ? y(o) : p && "function" == typeof o ? E(Function.call, o) : o, 
            (e.sham || o && o.sham || a && a.sham) && O(u, "sham", !0), b[i] = u, p && (T(A, r = d + "Prototype") || O(A, r, {}), 
            A[r][i] = o, e.real && v && !v[i] && O(v, i, o)));
        };
    },
    140: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(25), a = n(15), c = n(18), u = n(39), s = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            difference: function(e) {
                var t = a(this), n = new (u(t, o("Set")))(t), r = c(n.delete);
                return s(e, function(e) {
                    r.call(n, e);
                }), n;
            }
        });
    },
    141: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), c = n(25), u = n(15), s = n(18), d = n(21), f = n(39), l = n(35), p = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            filter: function(e, t) {
                var n = u(this), r = l(n), i = d(e, 1 < arguments.length ? t : void 0, 3), o = new (f(n, c("Set")))(), a = s(o.add);
                return p(r, function(e) {
                    i(e, e, n) && a.call(o, e);
                }, void 0, !1, !0), o;
            }
        });
    },
    142: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(15), a = n(21), c = n(35), u = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            find: function(e, t) {
                var n = o(this), r = c(n), i = a(e, 1 < arguments.length ? t : void 0, 3);
                return u(r, function(e) {
                    if (i(e, e, n)) return u.stop(e);
                }, void 0, !1, !0).result;
            }
        });
    },
    143: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(25), a = n(15), c = n(18), u = n(39), s = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            intersection: function(e) {
                var t = a(this), n = new (u(t, o("Set")))(), r = c(t.has), i = c(n.add);
                return s(e, function(e) {
                    r.call(t, e) && i.call(n, e);
                }), n;
            }
        });
    },
    144: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(15), a = n(18), c = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            isDisjointFrom: function(e) {
                var t = o(this), n = a(t.has);
                return !c(e, function(e) {
                    if (!0 === n.call(t, e)) return c.stop();
                }).stopped;
            }
        });
    },
    145: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(25), a = n(15), c = n(18), u = n(88), s = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            isSubsetOf: function(e) {
                var t = u(this), n = a(e), r = n.has;
                return "function" != typeof r && (n = new (o("Set"))(e), r = c(n.has)), !s(t, function(e) {
                    if (!1 === r.call(n, e)) return s.stop();
                }, void 0, !1, !0).stopped;
            }
        });
    },
    146: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(15), a = n(18), c = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            isSupersetOf: function(e) {
                var t = o(this), n = a(t.has);
                return !c(e, function(e) {
                    if (!1 === n.call(t, e)) return c.stop();
                }).stopped;
            }
        });
    },
    147: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(15), a = n(35), c = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            join: function(e) {
                var t = o(this), n = a(t), r = void 0 === e ? "," : String(e), i = [];
                return c(n, i.push, i, !1, !0), i.join(r);
            }
        });
    },
    148: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), c = n(25), u = n(15), s = n(18), d = n(21), f = n(39), l = n(35), p = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            map: function(e, t) {
                var n = u(this), r = l(n), i = d(e, 1 < arguments.length ? t : void 0, 3), o = new (f(n, c("Set")))(), a = s(o.add);
                return p(r, function(e) {
                    a.call(o, i(e, e, n));
                }, void 0, !1, !0), o;
            }
        });
    },
    149: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), a = n(15), c = n(18), u = n(35), s = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            reduce: function(t, e) {
                var n = a(this), r = u(n), i = arguments.length < 2, o = i ? void 0 : e;
                if (c(t), s(r, function(e) {
                    o = i ? (i = !1, e) : t(o, e, e, n);
                }, void 0, !1, !0), i) throw TypeError("Reduce of empty set with no initial value");
                return o;
            }
        });
    },
    15: function(e, t, n) {
        var r = n(23);
        e.exports = function(e) {
            if (!r(e)) throw TypeError(String(e) + " is not an object");
            return e;
        };
    },
    150: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(15), a = n(21), c = n(35), u = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            some: function(e, t) {
                var n = o(this), r = c(n), i = a(e, 1 < arguments.length ? t : void 0, 3);
                return u(r, function(e) {
                    if (i(e, e, n)) return u.stop();
                }, void 0, !1, !0).stopped;
            }
        });
    },
    151: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(25), a = n(15), c = n(18), u = n(39), s = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            symmetricDifference: function(e) {
                var t = a(this), n = new (u(t, o("Set")))(t), r = c(n.delete), i = c(n.add);
                return s(e, function(e) {
                    r.call(n, e) || i.call(n, e);
                }), n;
            }
        });
    },
    152: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(16), o = n(25), a = n(15), c = n(18), u = n(39), s = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            union: function(e) {
                var t = a(this), n = new (u(t, o("Set")))(t);
                return s(e, c(n.add), n), n;
            }
        });
    },
    153: function(e, t, n) {
        n(87), n(154);
        var r = n(43);
        e.exports = r.Array.from;
    },
    154: function(e, t, n) {
        var r = n(14), i = n(155);
        r({
            target: "Array",
            stat: !0,
            forced: !n(157)(function(e) {
                Array.from(e);
            })
        }, {
            from: i
        });
    },
    155: function(e, t, n) {
        "use strict";
        var v = n(21), y = n(57), h = n(80), m = n(79), S = n(50), A = n(156), E = n(61);
        e.exports = function(e, t, n) {
            var r, i, o, a, c, u, s = y(e), d = "function" == typeof this ? this : Array, f = arguments.length, l = 1 < f ? t : void 0, p = void 0 !== l, g = E(s), b = 0;
            if (p && (l = v(l, 2 < f ? n : void 0, 2)), null == g || d == Array && m(g)) for (i = new d(r = S(s.length)); b < r; b++) u = p ? l(s[b], b) : s[b], 
            A(i, b, u); else for (c = (a = g.call(s)).next, i = new d(); !(o = c.call(a)).done; b++) u = p ? h(a, l, [ o.value, b ], !0) : o.value, 
            A(i, b, u);
            return i.length = b, i;
        };
    },
    156: function(e, t, n) {
        "use strict";
        var i = n(55), o = n(31), a = n(46);
        e.exports = function(e, t, n) {
            var r = i(t);
            r in e ? o.f(e, r, a(0, n)) : e[r] = n;
        };
    },
    157: function(e, t, n) {
        var i = n(19)("iterator"), o = !1;
        try {
            var r = 0, a = {
                next: function() {
                    return {
                        done: !!r++
                    };
                },
                return: function() {
                    o = !0;
                }
            };
            a[i] = function() {
                return this;
            }, Array.from(a, function() {
                throw 2;
            });
        } catch (e) {}
        e.exports = function(e, t) {
            if (!t && !o) return !1;
            var n = !1;
            try {
                var r = {};
                r[i] = function() {
                    return {
                        next: function() {
                            return {
                                done: n = !0
                            };
                        }
                    };
                }, e(r);
            } catch (e) {}
            return n;
        };
    },
    158: function(e, t) {
        e.exports = function e(t) {
            var n = Array.isArray(t) ? [] : {};
            for (var r in t) {
                var i = t[r];
                n[r] = i && "object" == typeof i ? e(i) : i;
            }
            return n;
        };
    },
    159: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n, r, i) {
            for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++) e = e ? e[t[r]] : i;
            return e === i ? n : e;
        };
    },
    16: function(e, t) {
        e.exports = !0;
    },
    160: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n) {
            t.split && (t = t.split("."));
            for (var r, i = 0, o = t.length, a = e; i < o; ++i) r = a[t[i]], a = a[t[i]] = i === o - 1 ? n : null != r ? r : !~t[i + 1].indexOf(".") && -1 < +t[i + 1] ? [] : {};
        };
    },
    161: function(e, t) {
        h.SYNC = 1, h.ASYNC = 2, h.QUEUE = 4;
        var g = "fun-hooks";
        var n = Object.freeze({
            useProxy: !0,
            ready: 0
        }), b = new WeakMap(), r = "2,1,0" === [ 1 ].reduce(function(e, t, n) {
            return [ e, t, n ];
        }, 2).toString() ? Array.prototype.reduce : function(e, t) {
            var n, r = Object(this), i = r.length >>> 0, o = 0;
            if (t) n = t; else {
                for (;o < i && !(o in r); ) o++;
                n = r[o++];
            }
            for (;o < i; ) o in r && (n = e(n, r[o], o, r)), o++;
            return n;
        };
        function v(e, t) {
            return Array.prototype.slice.call(e, t);
        }
        var y = Object.assign || function(e) {
            return r.call(v(arguments, 1), function(t, n) {
                return n && Object.keys(n).forEach(function(e) {
                    t[e] = n[e];
                }), t;
            }, e);
        };
        function h(u) {
            var s, e = {}, d = [];
            function t(e, t) {
                return "function" == typeof e ? f.call(null, "sync", e, t) : "string" == typeof e && "function" == typeof t ? f.apply(null, arguments) : "object" == typeof e ? function(o, e, a) {
                    var t = !0;
                    void 0 === e && (e = Object.getOwnPropertyNames(o), t = !1);
                    var c = {}, n = [ "constructor" ];
                    for (;(e = e.filter(function(e) {
                        return !("function" != typeof o[e] || -1 !== n.indexOf(e) || e.match(/^_/));
                    })).forEach(function(e) {
                        var t, n = e.split(":"), r = n[0], i = n[1] || "sync";
                        c[r] || (t = o[r], c[r] = o[r] = f(i, t, a ? [ a, r ] : void 0));
                    }), o = Object.getPrototypeOf(o), t && o; ) ;
                    return c;
                }.apply(null, arguments) : void 0;
            }
            function l(o) {
                var a = Array.isArray(o) ? o : o.split(".");
                return r.call(a, function(t, n, e) {
                    var r = t[n], i = !1;
                    return r || (e === a.length - 1 ? (s || d.push(function() {
                        i || console.warn(g + ": referenced '" + o + "' but it was never created");
                    }), t[n] = p(function(e) {
                        t[n] = e, i = !0;
                    })) : t[n] = {});
                }, e);
            }
            function p(r) {
                var o = [], a = [], c = function() {}, e = {
                    before: function(e, t) {
                        return n.call(this, o, "before", e, t);
                    },
                    after: function(e, t) {
                        return n.call(this, a, "after", e, t);
                    },
                    getHooks: function(n) {
                        var e = o.concat(a);
                        "object" == typeof n && (e = e.filter(function(t) {
                            return Object.keys(n).every(function(e) {
                                return t[e] === n[e];
                            });
                        }));
                        try {
                            y(e, {
                                remove: function() {
                                    return e.forEach(function(e) {
                                        e.remove();
                                    }), this;
                                }
                            });
                        } catch (e) {
                            console.error("error adding `remove` to array, did you modify Array.prototype?");
                        }
                        return e;
                    },
                    removeAll: function() {
                        return this.getHooks().remove();
                    }
                }, t = {
                    install: function(e, t, n) {
                        this.type = e, (c = n)(o, a), r && r(t);
                    }
                };
                return b.set(e.after, t), e;
                function n(t, e, n, r) {
                    var i = {
                        hook: n,
                        type: e,
                        priority: r || 10,
                        remove: function() {
                            var e = t.indexOf(i);
                            -1 !== e && (t.splice(e, 1), c(o, a));
                        }
                    };
                    return t.push(i), t.sort(function(e, t) {
                        return t.priority - e.priority;
                    }), c(o, a), this;
                }
            }
            function f(f, e, t) {
                var n = e.after && b.get(e.after);
                if (n) {
                    if (n.type !== f) throw g + ": recreated hookable with different type";
                    return e;
                }
                var r, i, o = t ? l(t) : p(), a = {
                    get: function(e, t) {
                        return o[t] || Reflect.get.apply(Reflect, arguments);
                    }
                };
                return s || d.push(c), u.useProxy && "function" == typeof Proxy && Proxy.revocable ? i = new Proxy(e, a) : y(i = function() {
                    return a.apply ? a.apply(e, this, v(arguments)) : e.apply(this, arguments);
                }, o), b.get(i.after).install(f, i, function(e, t) {
                    var s, d = [];
                    r = e.length || t.length ? (e.forEach(n), s = d.push(void 0) - 1, t.forEach(n), 
                    function(n, r, e) {
                        var i, o = 0, a = "async" === f && "function" == typeof e[e.length - 1] && e.pop();
                        function c(e) {
                            "sync" === f ? i = e : a && a.apply(null, arguments);
                        }
                        function u(e) {
                            if (d[o]) {
                                var t = v(arguments);
                                return u.bail = c, t.unshift(u), d[o++].apply(r, t);
                            }
                            "sync" === f ? i = e : a && a.apply(null, arguments);
                        }
                        return d[s] = function() {
                            var e = v(arguments, 1);
                            "async" === f && a && (delete u.bail, e.push(u));
                            var t = n.apply(r, e);
                            "sync" === f && u(t);
                        }, u.apply(null, e), i;
                    }) : void 0;
                    function n(e) {
                        d.push(e.hook);
                    }
                    c();
                }), i;
                function c() {
                    !s && ("sync" !== f || u.ready & h.SYNC) && ("async" !== f || u.ready & h.ASYNC) ? "sync" !== f && u.ready & h.QUEUE ? a.apply = function() {
                        var e = arguments;
                        d.push(function() {
                            i.apply(e[1], e[2]);
                        });
                    } : a.apply = function() {
                        throw g + ": hooked function not ready";
                    } : a.apply = r;
                }
            }
            return (u = y({}, n, u)).ready ? t.ready = function() {
                s = !0, function(e) {
                    for (var t; t = e.shift(); ) t();
                }(d);
            } : s = !0, t.get = l, t;
        }
        e.exports = h;
    },
    17: function(e, t, n) {
        function p(e, t) {
            this.stopped = e, this.result = t;
        }
        var g = n(15), b = n(79), v = n(50), y = n(21), h = n(61), m = n(80);
        (e.exports = function(e, t, n, r, i) {
            var o, a, c, u, s, d, f, l = y(t, n, r ? 2 : 1);
            if (i) o = e; else {
                if ("function" != typeof (a = h(e))) throw TypeError("Target is not iterable");
                if (b(a)) {
                    for (c = 0, u = v(e.length); c < u; c++) if ((s = r ? l(g(f = e[c])[0], f[1]) : l(e[c])) && s instanceof p) return s;
                    return new p(!1);
                }
                o = a.call(e);
            }
            for (d = o.next; !(f = d.call(o)).done; ) if ("object" == typeof (s = m(o, l, f.value, r)) && s && s instanceof p) return s;
            return new p(!1);
        }).stop = function(e) {
            return new p(!0, e);
        };
    },
    18: function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e;
        };
    },
    19: function(e, t, n) {
        var r = n(22), i = n(73), o = n(24), a = n(59), c = n(75), u = n(104), s = i("wks"), d = r.Symbol, f = u ? d : d && d.withoutSetter || a;
        e.exports = function(e) {
            return o(s, e) || (c && o(d, e) ? s[e] = d[e] : s[e] = f("Symbol." + e)), s[e];
        };
    },
    2: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return r;
        }), n.d(t, "d", function() {
            return i;
        }), n.d(t, "b", function() {
            return o;
        }), n.d(t, "a", function() {
            return a;
        });
        var r = "native", i = "video", o = "banner", a = "adpod";
    },
    20: function(e, t, n) {
        "use strict";
        t.a = function() {
            return window.pbjs;
        }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || [], 
        window._pbjsGlobals = window._pbjsGlobals || [], window._pbjsGlobals.push("pbjs");
    },
    21: function(e, t, n) {
        var o = n(18);
        e.exports = function(r, i, e) {
            if (o(r), void 0 === i) return r;
            switch (e) {
              case 0:
                return function() {
                    return r.call(i);
                };

              case 1:
                return function(e) {
                    return r.call(i, e);
                };

              case 2:
                return function(e, t) {
                    return r.call(i, e, t);
                };

              case 3:
                return function(e, t, n) {
                    return r.call(i, e, t, n);
                };
            }
            return function() {
                return r.apply(i, arguments);
            };
        };
    },
    215: function(e, t, n) {
        n(216);
        var r = n(52);
        e.exports = r("Array", "findIndex");
    },
    216: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(56).findIndex, o = n(51), a = n(60), c = "findIndex", u = !0, s = a(c);
        c in [] && Array(1)[c](function() {
            u = !1;
        }), r({
            target: "Array",
            proto: !0,
            forced: u || !s
        }, {
            findIndex: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0);
            }
        }), o(c);
    },
    22: function(n, e, t) {
        (function(e) {
            function t(e) {
                return e && e.Math == Math && e;
            }
            n.exports = t("object" == typeof globalThis && globalThis) || t("object" == typeof window && window) || t("object" == typeof self && self) || t("object" == typeof e && e) || Function("return this")();
        }).call(e, t(34));
    },
    223: function(e, t, n) {
        "use strict";
        t.a = function() {
            window.addEventListener("message", c, !1);
        };
        var r = n(9), g = n.n(r), b = n(36), i = n(5), v = (n.n(i), n(0)), y = n(27), o = n(10), h = n.n(o), m = n(11), a = n(12), S = n.n(a), A = i.EVENTS.BID_WON;
        function c(e) {
            var t, n, r, i, o, a, c, u, s, d = e.message ? "message" : "data", f = {};
            try {
                f = JSON.parse(e[d]);
            } catch (e) {
                return;
            }
            if (f && f.adId) {
                var l = h()(y.a.getBidsReceived(), function(e) {
                    return e.adId === f.adId;
                });
                if (l && "Prebid Request" === f.message && (n = e, r = (t = l).adId, i = t.ad, o = t.adUrl, 
                a = t.width, c = t.height, u = t.renderer, s = t.cpm, Object(m.c)(u) ? Object(m.b)(u, t) : r && (function(e) {
                    var o = e.adId, a = e.adUnitCode, r = e.width, i = e.height;
                    function c(e) {
                        var t, n, r = (t = o, n = a, window.googletag ? function(n) {
                            return h()(window.googletag.pubads().getSlots(), function(t) {
                                return h()(t.getTargetingKeys(), function(e) {
                                    return S()(t.getTargeting(e), n);
                                });
                            }).getSlotElementId();
                        }(t) : window.apntag ? function(e) {
                            var t = window.apntag.getTag(e);
                            return t && t.targetId;
                        }(n) : n), i = document.getElementById(r);
                        return i && i.querySelector(e);
                    }
                    [ "div", "iframe" ].forEach(function(e) {
                        var t, n = c(e + ':not([style*="display: none"])');
                        n ? ((t = n.style).width = r + "px", t.height = i + "px") : Object(v.logWarn)("Unable to locate matching page element for adUnitCode ".concat(a, ".  Can't resize it to ad's dimensions.  Please review setup."));
                    });
                }(t), n.source.postMessage(JSON.stringify({
                    message: "Prebid Response",
                    ad: Object(v.replaceAuctionPrice)(i, s),
                    adUrl: Object(v.replaceAuctionPrice)(o, s),
                    adId: r,
                    width: a,
                    height: c
                }), n.origin)), y.a.addWinningBid(l), g.a.emit(A, l)), l && "Prebid Native" === f.message) {
                    if ("assetRequest" === f.action) {
                        var p = Object(b.c)(f, l);
                        return void e.source.postMessage(JSON.stringify(p), e.origin);
                    }
                    if ("click" === Object(b.b)(f, l)) return;
                    y.a.addWinningBid(l), g.a.emit(A, l);
                }
            }
        }
    },
    224: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t;
            try {
                e = e || window.sessionStorage, t = JSON.parse(e.getItem(u));
            } catch (e) {}
            t && p(t, !0);
        };
        var r, i, o = n(3), a = n(0), c = n(41), u = "pbjs:debugging";
        function s(e) {
            Object(a.logMessage)("DEBUG: " + e);
        }
        function d(e) {
            Object(a.logWarn)("DEBUG: " + e);
        }
        function f(e) {
            r = function(e, t, n) {
                if (b(this.bidders, n.bidderCode)) return void d("bidder '".concat(n.bidderCode, "' excluded from auction by bidder overrides"));
                Array.isArray(this.bids) && this.bids.forEach(function(e) {
                    g(e, n.bidderCode, t) || v(e, n, "bidder");
                });
                e(t, n);
            }.bind(e), c.c.before(r, 5), i = function(e, t) {
                var r = this, n = t.filter(function(e) {
                    return !b(r.bidders, e.bidderCode) || (d("bidRequest '".concat(e.bidderCode, "' excluded from auction by bidder overrides")), 
                    !1);
                });
                Array.isArray(r.bidRequests) && n.forEach(function(n) {
                    r.bidRequests.forEach(function(t) {
                        n.bids.forEach(function(e) {
                            g(t, n.bidderCode, e.adUnitCode) || v(t, e, "bidRequest");
                        });
                    });
                });
                e(n);
            }.bind(e), c.e.before(i, 5);
        }
        function l() {
            c.c.getHooks({
                hook: r
            }).remove(), c.e.getHooks({
                hook: i
            }).remove();
        }
        function p(e, t) {
            var n = 1 < arguments.length && void 0 !== t && t;
            o.b.setConfig({
                debug: !0
            }), l(), f(e), s("bidder overrides enabled".concat(n ? " from session" : ""));
        }
        function g(e, t, n) {
            return e.bidder && e.bidder !== t || !(!e.adUnitCode || e.adUnitCode === n);
        }
        function b(e, t) {
            return Array.isArray(e) && -1 === e.indexOf(t);
        }
        function v(n, e, r) {
            return Object.keys(n).filter(function(e) {
                return -1 === [ "adUnitCode", "bidder" ].indexOf(e);
            }).reduce(function(e, t) {
                return s("bidder overrides changed '".concat(e.adUnitCode, "/").concat(e.bidderCode, "' ").concat(r, ".").concat(t, " from '").concat(e[t], ".js' to '").concat(n[t], "'")), 
                e[t] = n[t], e;
            }, e);
        }
        function y(e) {
            if (e.enabled) {
                try {
                    window.sessionStorage.setItem(u, JSON.stringify(e));
                } catch (e) {}
                p(e);
            } else {
                l(), s("bidder overrides disabled");
                try {
                    window.sessionStorage.removeItem(u);
                } catch (e) {}
            }
        }
        o.b.getConfig("debugging", function(e) {
            return y(e.debugging);
        });
    },
    23: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
        };
    },
    24: function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t);
        };
    },
    25: function(e, t, n) {
        function r(e) {
            return "function" == typeof e ? e : void 0;
        }
        var i = n(43), o = n(22);
        e.exports = function(e, t) {
            return arguments.length < 2 ? r(i[e]) || r(o[e]) : i[e] && i[e][t] || o[e] && o[e][t];
        };
    },
    26: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r;
        });
        var i = n(0);
        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        var a, r = (a = window, function() {
            try {
                var e, t = c(), n = t.length - 1, r = null !== t[n].location || 0 < n && null !== t[n - 1].referrer, i = function(e) {
                    for (var t, n = [], r = null, i = null, o = null, a = null, c = null, u = e.length - 1; 0 <= u; u--) {
                        try {
                            i = e[u].location;
                        } catch (e) {}
                        if (i) n.push(i), c = c || i; else if (0 !== u) {
                            t = e[u - 1];
                            try {
                                o = t.referrer, a = t.ancestor;
                            } catch (e) {}
                            o ? (n.push(o), c = c || o) : a ? (n.push(a), c = c || a) : n.push(r);
                        } else n.push(r);
                    }
                    return {
                        stack: n,
                        detectedRefererUrl: c
                    };
                }(t);
                return t[t.length - 1].canonicalUrl && (e = t[t.length - 1].canonicalUrl), {
                    referer: i.detectedRefererUrl,
                    reachedTop: r,
                    numIframes: n,
                    stack: i.stack,
                    canonicalUrl: e
                };
            } catch (e) {}
        });
        function c() {
            var e = function() {
                var t, n = [];
                do {
                    try {
                        t = t ? t.parent : a;
                        try {
                            var e = t == a.top, r = {
                                referrer: t.document.referrer || null,
                                location: t.location.href || null,
                                isTop: e
                            };
                            e && (r = o(r, {
                                canonicalUrl: function(e) {
                                    try {
                                        var t = e.querySelector("link[rel='canonical']");
                                        if (null !== t) return t.href;
                                    } catch (e) {}
                                    return null;
                                }(t.document)
                            })), n.push(r);
                        } catch (e) {
                            n.push({
                                referrer: null,
                                location: null,
                                isTop: t == a.top
                            }), Object(i.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");
                        }
                    } catch (e) {
                        return n.push({
                            referrer: null,
                            location: null,
                            isTop: !1
                        }), n;
                    }
                } while (t != a.top);
                return n;
            }(), t = function() {
                try {
                    if (!a.location.ancestorOrigins) return;
                    return a.location.ancestorOrigins;
                } catch (e) {}
            }();
            if (t) for (var n = 0, r = t.length; n < r; n++) e[n].ancestor = t[n];
            return e;
        }
    },
    27: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return u;
        });
        var r = n(0), s = n(41), i = n(10), o = n.n(i), a = n(5);
        var d, c, u = (d = [], (c = {}).addWinningBid = function(t) {
            var e = o()(d, function(e) {
                return e.getAuctionId() === t.auctionId;
            });
            e ? (t.status = a.BID_STATUS.RENDERED, e.addWinningBid(t)) : Object(r.logWarn)("Auction not found when adding winning bid");
        }, c.getAllWinningBids = function() {
            return d.map(function(e) {
                return e.getWinningBids();
            }).reduce(r.flatten, []);
        }, c.getBidsRequested = function() {
            return d.map(function(e) {
                return e.getBidRequests();
            }).reduce(r.flatten, []);
        }, c.getNoBids = function() {
            return d.map(function(e) {
                return e.getNoBids();
            }).reduce(r.flatten, []);
        }, c.getBidsReceived = function() {
            return d.map(function(e) {
                if (e.getAuctionStatus() === s.a) return e.getBidsReceived();
            }).reduce(r.flatten, []).filter(function(e) {
                return e;
            });
        }, c.getAdUnits = function() {
            return d.map(function(e) {
                return e.getAdUnits();
            }).reduce(r.flatten, []);
        }, c.getAdUnitCodes = function() {
            return d.map(function(e) {
                return e.getAdUnitCodes();
            }).reduce(r.flatten, []).filter(r.uniques);
        }, c.createAuction = function(e) {
            var t, n = e.adUnits, r = e.adUnitCodes, i = e.callback, o = e.cbTimeout, a = e.labels, c = e.auctionId, u = Object(s.k)({
                adUnits: n,
                adUnitCodes: r,
                callback: i,
                cbTimeout: o,
                labels: a,
                auctionId: c
            });
            return t = u, d.push(t), u;
        }, c.findBidByAdId = function(t) {
            return o()(d.map(function(e) {
                return e.getBidsReceived();
            }).reduce(r.flatten, []), function(e) {
                return e.adId === t;
            });
        }, c.getStandardBidderAdServerTargeting = function() {
            return Object(s.j)()[a.JSON_MAPPING.ADSERVER_TARGETING];
        }, c.setStatusForBids = function(e, t) {
            var n, r = c.findBidByAdId(e);
            r && (r.status = t), !r || t !== a.BID_STATUS.BID_TARGETING_SET || (n = o()(d, function(e) {
                return e.getAuctionId() === r.auctionId;
            })) && n.setBidTargeting(r);
        }, c.getLastAuctionId = function() {
            return d.length && d[d.length - 1].getAuctionId();
        }, c);
    },
    28: function(e, t, n) {
        var r = n(29);
        e.exports = !r(function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7;
                }
            })[1];
        });
    },
    29: function(e, t) {
        e.exports = function(e) {
            try {
                return !!e();
            } catch (e) {
                return !0;
            }
        };
    },
    3: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return y;
        }), n.d(t, "b", function() {
            return C;
        });
        var r = n(45), i = n(10), a = n.n(i), o = n(12), c = n.n(o), u = n(77), s = n.n(u), d = n(0);
        function f() {
            return (f = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        var l = n(89), p = n(0), g = n(5), b = "TRUE" === p.getParameterByName(g.DEBUG_MODE).toUpperCase(), v = window.location.origin, y = "random", h = {};
        h[y] = !0, h.fixed = !0;
        var m = y, S = {
            LOW: "low",
            MEDIUM: "medium",
            HIGH: "high",
            AUTO: "auto",
            DENSE: "dense",
            CUSTOM: "custom"
        };
        var A, E, O, T, I, C = (T = [], I = null, j(), {
            getCurrentBidder: function() {
                return I;
            },
            getConfig: function() {
                if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                    var e = arguments.length <= 0 ? void 0 : arguments[0];
                    return e ? p.deepAccess(w(), e) : w();
                }
                return function(e, t) {
                    var n = t;
                    if ("string" != typeof e && (n = e, e = "*"), "function" == typeof n) {
                        var r = {
                            topic: e,
                            callback: n
                        };
                        return T.push(r), function() {
                            T.splice(T.indexOf(r), 1);
                        };
                    }
                    p.logError("listener must be a function");
                }.apply(void 0, arguments);
            },
            setConfig: function(n) {
                var e, r;
                p.isPlainObject(n) ? (e = Object.keys(n), r = {}, e.forEach(function(e) {
                    var t = n[e];
                    p.isPlainObject(A[e]) && p.isPlainObject(t) && (t = f({}, A[e], t)), r[e] = E[e] = t;
                }), _(r)) : p.logError("setConfig options must be an object");
            },
            setDefaults: function(e) {
                p.isPlainObject(A) ? (f(A, e), f(E, e)) : p.logError("defaults must be an object");
            },
            resetConfig: j,
            runWithBidder: B,
            callbackWithBidder: function(o) {
                return function(i) {
                    return function() {
                        if ("function" == typeof i) {
                            for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            return B(o, (e = p.bind).call.apply(e, [ i, this ].concat(n)));
                        }
                        p.logWarn("config.callbackWithBidder callback is not a function");
                    };
                };
            },
            setBidderConfig: function(r) {
                try {
                    !function(e) {
                        if (!p.isPlainObject(e)) throw "setBidderConfig bidder options must be an object";
                        if (!Array.isArray(e.bidders) || !e.bidders.length) throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                        if (!p.isPlainObject(e.config)) throw "setBidderConfig bidder options must contain a config object";
                    }(r), r.bidders.forEach(function(n) {
                        O[n] || (O[n] = {}), Object.keys(r.config).forEach(function(e) {
                            var t = r.config[e];
                            p.isPlainObject(t) ? O[n][e] = f({}, O[n][e] || {}, t) : O[n][e] = t;
                        });
                    });
                } catch (e) {
                    p.logError(e);
                }
            },
            getBidderConfig: function() {
                return O;
            }
        });
        function j() {
            A = {};
            var n = {
                _debug: b,
                get debug() {
                    return this._debug;
                },
                set debug(e) {
                    this._debug = e;
                },
                _bidderTimeout: 3e3,
                get bidderTimeout() {
                    return this._bidderTimeout;
                },
                set bidderTimeout(e) {
                    this._bidderTimeout = e;
                },
                _publisherDomain: v,
                get publisherDomain() {
                    return this._publisherDomain;
                },
                set publisherDomain(e) {
                    this._publisherDomain = e;
                },
                _priceGranularity: S.MEDIUM,
                set priceGranularity(e) {
                    o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : S.MEDIUM : p.isPlainObject(e) && (this._customPriceBucket = e, 
                    this._priceGranularity = S.CUSTOM, p.logMessage("Using custom price granularity")));
                },
                get priceGranularity() {
                    return this._priceGranularity;
                },
                _customPriceBucket: {},
                get customPriceBucket() {
                    return this._customPriceBucket;
                },
                _mediaTypePriceGranularity: {},
                get mediaTypePriceGranularity() {
                    return this._mediaTypePriceGranularity;
                },
                set mediaTypePriceGranularity(n) {
                    var r = this;
                    this._mediaTypePriceGranularity = Object.keys(n).reduce(function(e, t) {
                        return o(n[t]) ? "string" == typeof n ? e[t] = i(n[t]) ? n[t] : r._priceGranularity : p.isPlainObject(n) && (e[t] = n[t], 
                        p.logMessage("Using custom price granularity for ".concat(t))) : p.logWarn("Invalid price granularity for media type: ".concat(t)), 
                        e;
                    }, {});
                },
                _sendAllBids: !0,
                get enableSendAllBids() {
                    return this._sendAllBids;
                },
                set enableSendAllBids(e) {
                    this._sendAllBids = e;
                },
                _useBidCache: !1,
                get useBidCache() {
                    return this._useBidCache;
                },
                set useBidCache(e) {
                    this._useBidCache = e;
                },
                _deviceAccess: !0,
                get deviceAccess() {
                    return this._deviceAccess;
                },
                set deviceAccess(e) {
                    this._deviceAccess = e;
                },
                _bidderSequence: m,
                get bidderSequence() {
                    return this._bidderSequence;
                },
                set bidderSequence(e) {
                    h[e] ? this._bidderSequence = e : p.logWarn("Invalid order: ".concat(e, ". Bidder Sequence was not set."));
                },
                _timeoutBuffer: 400,
                get timeoutBuffer() {
                    return this._timeoutBuffer;
                },
                set timeoutBuffer(e) {
                    this._timeoutBuffer = e;
                },
                _disableAjaxTimeout: !1,
                get disableAjaxTimeout() {
                    return this._disableAjaxTimeout;
                },
                set disableAjaxTimeout(e) {
                    this._disableAjaxTimeout = e;
                }
            };
            function i(t) {
                return a()(Object.keys(S), function(e) {
                    return t === S[e];
                });
            }
            function o(e) {
                if (e) {
                    if ("string" == typeof e) i(e) || p.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default."); else if (p.isPlainObject(e) && !Object(r.b)(e)) return void p.logError("Invalid custom price value passed to `setPriceGranularity()`");
                    return 1;
                }
                p.logError("Prebid Error: no value passed to `setPriceGranularity()`");
            }
            E && _(Object.keys(E).reduce(function(e, t) {
                return E[t] !== n[t] && (e[t] = n[t] || {}), e;
            }, {})), E = n, O = {};
        }
        function w() {
            if (I && O && p.isPlainObject(O[I])) {
                var n = O[I], e = new s.a(Object.keys(E).concat(Object.keys(n)));
                return l(e).reduce(function(e, t) {
                    return void 0 === n[t] ? e[t] = E[t] : void 0 !== E[t] && p.isPlainObject(n[t]) ? e[t] = Object(d.mergeDeep)({}, E[t], n[t]) : e[t] = n[t], 
                    e;
                }, {});
            }
            return f({}, E);
        }
        function _(i) {
            var t = Object.keys(i);
            T.filter(function(e) {
                return c()(t, e.topic);
            }).forEach(function(e) {
                var t, n, r;
                e.callback((t = {}, n = e.topic, r = i[e.topic], n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, t));
            }), T.filter(function(e) {
                return "*" === e.topic;
            }).forEach(function(e) {
                return e.callback(i);
            });
        }
        function B(e, t) {
            I = e;
            try {
                return t();
            } finally {
                I = null;
            }
        }
    },
    30: function(e, t, n) {
        var r = n(28), i = n(31), o = n(46);
        e.exports = r ? function(e, t, n) {
            return i.f(e, t, o(1, n));
        } : function(e, t, n) {
            return e[t] = n, e;
        };
    },
    31: function(e, t, n) {
        var r = n(28), i = n(71), o = n(15), a = n(55), c = Object.defineProperty;
        t.f = r ? c : function(e, t, n) {
            if (o(e), t = a(t, !0), o(n), i) try {
                return c(e, t, n);
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
            return "value" in n && (e[t] = n.value), e;
        };
    },
    32: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            return new r(e, t);
        };
        var i = n(0);
        function r(e, t) {
            var n = t && t.src || "client", r = e || 0;
            this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, this.statusMessage = function() {
                switch (r) {
                  case 0:
                    return "Pending";

                  case 1:
                    return "Bid available";

                  case 2:
                    return "Bid returned empty or error response";

                  case 3:
                    return "Bid timed out";
                }
            }(), this.adId = i.getUniqueIdentifierStr(), this.requestId = t && t.bidId, this.mediaType = "banner", 
            this.source = n, this.getStatusCode = function() {
                return r;
            }, this.getSize = function() {
                return this.width + "x" + this.height;
            };
        }
    },
    33: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return c;
        }), n.d(t, "a", function() {
            return u;
        }), t.d = function(e, t) {
            var n = Object(o.getBidRequest)(e.requestId, t), r = n && Object(o.deepAccess)(n, "mediaTypes.video"), i = r && Object(o.deepAccess)(r, "context");
            return s(e, n, r, i);
        }, n.d(t, "c", function() {
            return s;
        });
        n(7);
        var o = n(0), i = n(3), r = n(12), a = (n.n(r), n(13)), c = "outstream", u = "instream";
        var s = Object(a.b)("sync", function(e, t, n, r) {
            return !t || n && r !== c ? i.b.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), 
            !1) : r !== c || !(!e.renderer && !t.renderer);
        }, "checkVideoBidSetup");
    },
    34: function(e, t) {
        var n = function() {
            return this;
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this");
        } catch (e) {
            "object" == typeof window && (n = window);
        }
        e.exports = n;
    },
    345: function(e, t, n) {
        var r = n(346);
        e.exports = r;
    },
    346: function(e, t, n) {
        n(347);
        var r = n(52);
        e.exports = r("String", "includes");
    },
    347: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(348), o = n(49);
        r({
            target: "String",
            proto: !0,
            forced: !n(350)("includes")
        }, {
            includes: function(e, t) {
                return !!~String(o(this)).indexOf(i(e), 1 < arguments.length ? t : void 0);
            }
        });
    },
    348: function(e, t, n) {
        var r = n(349);
        e.exports = function(e) {
            if (r(e)) throw TypeError("The method doesn't accept regular expressions");
            return e;
        };
    },
    349: function(e, t, n) {
        var r = n(23), i = n(48), o = n(19)("match");
        e.exports = function(e) {
            var t;
            return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e));
        };
    },
    35: function(e, t, n) {
        var r = n(16), i = n(88);
        e.exports = r ? i : function(e) {
            return Set.prototype.values.call(e);
        };
    },
    350: function(e, t, n) {
        var r = n(19)("match");
        e.exports = function(t) {
            var n = /./;
            try {
                "/./"[t](n);
            } catch (e) {
                try {
                    return n[r] = !1, "/./"[t](n);
                } catch (e) {}
            }
            return !1;
        };
    },
    36: function(e, t, n) {
        "use strict";
        n.d(t, "e", function() {
            return o;
        }), n.d(t, "a", function() {
            return s;
        }), t.g = function(e) {
            if (e && e.type && function(e) {
                return !(!e || !c()(Object.keys(d), e)) || (Object(a.logError)("".concat(e, " nativeParam is not supported")), 
                !1);
            }(e.type)) return d[e.type];
            return e;
        }, t.f = function(t, e) {
            var n = Object(a.getBidRequest)(t.requestId, e);
            if (!n) return !1;
            if (!Object(a.deepAccess)(t, "native.clickUrl")) return !1;
            if (Object(a.deepAccess)(t, "native.image") && (!Object(a.deepAccess)(t, "native.image.height") || !Object(a.deepAccess)(t, "native.image.width"))) return !1;
            if (Object(a.deepAccess)(t, "native.icon") && (!Object(a.deepAccess)(t, "native.icon.height") || !Object(a.deepAccess)(t, "native.icon.width"))) return !1;
            var r = n.nativeParams;
            if (!r) return !0;
            var i = Object.keys(r).filter(function(e) {
                return r[e].required;
            }), o = Object.keys(t.native).filter(function(e) {
                return t.native[e];
            });
            return i.every(function(e) {
                return c()(o, e);
            });
        }, t.b = function(e, t) {
            var n;
            "click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers, 
            t.native && t.native.javascriptTrackers && Object(a.insertHtmlIntoIframe)(t.native.javascriptTrackers));
            return (n || []).forEach(a.triggerPixel), e.action;
        }, t.d = function(r, i) {
            var o = {};
            return Object.keys(r.native).forEach(function(e) {
                var t = u.NATIVE_KEYS[e], n = f(r.native[e]);
                Object(a.deepAccess)(i, "mediaTypes.native.".concat(e, ".sendId")) && (n = "".concat(t, ":").concat(r.adId)), 
                t && n && (o[t] = n);
            }), o;
        }, t.c = function(e, r) {
            var i = {
                message: "assetResponse",
                adId: e.adId,
                assets: []
            };
            return e.assets.forEach(function(e) {
                var t = Object(a.getKeyByValue)(u.NATIVE_KEYS, e), n = f(r.native[t]);
                i.assets.push({
                    key: t,
                    value: n
                });
            }), i;
        };
        var a = n(0), r = n(12), c = n.n(r);
        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        var u = n(5), o = [], s = Object.keys(u.NATIVE_KEYS).map(function(e) {
            return u.NATIVE_KEYS[e];
        }), d = {
            image: {
                image: {
                    required: !0
                },
                title: {
                    required: !0
                },
                sponsoredBy: {
                    required: !0
                },
                clickUrl: {
                    required: !0
                },
                body: {
                    required: !1
                },
                icon: {
                    required: !1
                }
            }
        };
        function f(e) {
            return "object" === i(e) && e.url ? e.url : e;
        }
    },
    38: function(e, t) {
        e.exports = {};
    },
    39: function(e, t, n) {
        var i = n(15), o = n(18), a = n(19)("species");
        e.exports = function(e, t) {
            var n, r = i(e).constructor;
            return void 0 === r || null == (n = i(r)[a]) ? t : o(n);
        };
    },
    4: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r;
        }), t.b = i;
        var l = n(3);
        function p() {
            return (p = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        function g(e) {
            return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        var b = n(0), v = 4, r = i();
        function i() {
            var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, d = e.request, f = e.done;
            return function(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                try {
                    var i, o = r.method || (n ? "POST" : "GET"), a = document.createElement("a");
                    a.href = e;
                    var c, u = "object" === g(t) && null !== t ? t : {
                        success: function() {
                            b.logMessage("xhr success");
                        },
                        error: function(e) {
                            b.logError("xhr error", null, e);
                        }
                    };
                    "function" == typeof t && (u.success = t), (i = new window.XMLHttpRequest()).onreadystatechange = function() {
                        var e;
                        i.readyState === v && ("function" == typeof f && f(a.origin), 200 <= (e = i.status) && e < 300 || 304 === e ? u.success(i.responseText, i) : u.error(i.statusText, i));
                    }, l.b.getConfig("disableAjaxTimeout") || (i.ontimeout = function() {
                        b.logError("  xhr timeout after ", i.timeout, "ms");
                    }), "GET" === o && n && (p((c = b.parseUrl(e, r)).search, n), e = b.buildUrl(c)), 
                    i.open(o, e, !0), l.b.getConfig("disableAjaxTimeout") || (i.timeout = s), r.withCredentials && (i.withCredentials = !0), 
                    b._each(r.customHeaders, function(e, t) {
                        i.setRequestHeader(t, e);
                    }), r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", r.contentType || "text/plain"), 
                    "function" == typeof d && d(a.origin), "POST" === o && n ? i.send(n) : i.send();
                } catch (e) {
                    b.logError("xhr construction", e);
                }
            };
        }
    },
    40: function(e, t, n) {
        "use strict";
        t.a = function(r, e, t) {
            if (!e || !r) return void o.logError("cannot load external script without url and moduleCode");
            if (!i()(c, e)) return void o.logError("".concat(e, " not whitelisted for loading external JavaScript"));
            if (a[r]) return t && "function" == typeof t && (a[r].loaded ? t() : a[r].callbacks.push(t)), 
            a[r].tag;
            a[r] = {
                loaded: !1,
                tag: null,
                callbacks: []
            }, t && "function" == typeof t && a[r].callbacks.push(t);
            return o.logWarn("module ".concat(e, " is loading external JavaScript")), function(e, t) {
                var n = document.createElement("script");
                n.type = "text/javascript", n.async = !0, (a[r].tag = n).readyState ? n.onreadystatechange = function() {
                    "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, 
                    t());
                } : n.onload = function() {
                    t();
                };
                return n.src = e, o.insertElement(n), n;
            }(r, function() {
                a[r].loaded = !0;
                try {
                    for (var e = 0; e < a[r].callbacks.length; e++) a[r].callbacks[e]();
                } catch (e) {
                    o.logError("Error executing callback", "adloader.js:loadExternalScript", e);
                }
            });
        };
        var r = n(12), i = n.n(r), o = n(0), a = {}, c = [ "criteo", "outstream", "adagio", "browsi" ];
    },
    41: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return W;
        }), n.d(t, "a", function() {
            return L;
        }), t.k = function(e) {
            var t, i, b, v, o = e.adUnits, n = e.adUnitCodes, r = e.callback, a = e.cbTimeout, c = e.labels, u = e.auctionId, y = o, s = c, d = n, h = [], f = [], l = [], p = u || N.generateUUID(), g = r, m = a, S = [], A = new Set();
            function E() {
                return {
                    auctionId: p,
                    timestamp: t,
                    auctionEnd: i,
                    auctionStatus: b,
                    adUnits: y,
                    adUnitCodes: d,
                    labels: s,
                    bidderRequests: h,
                    noBids: l,
                    bidsReceived: f,
                    winningBids: S,
                    timeout: m
                };
            }
            function O(n, e) {
                var r, t;
                e && clearTimeout(v), void 0 === i && (r = [], n && (N.logMessage("Auction ".concat(p, " timedOut")), 
                t = A, (r = h.map(function(e) {
                    return (e.bids || []).filter(function(e) {
                        return !t.has(e.bidder);
                    });
                }).reduce(j.flatten, []).map(function(e) {
                    return {
                        bidId: e.bidId,
                        bidder: e.bidder,
                        adUnitCode: e.adUnitCode,
                        auctionId: e.auctionId
                    };
                })).length && q.emit(M.EVENTS.BID_TIMEOUT, r)), b = L, i = Date.now(), q.emit(M.EVENTS.AUCTION_END, E()), 
                Y(y, function() {
                    try {
                        var e;
                        null != g && (e = f.filter(N.bind.call(j.adUnitsFilter, this, d)).reduce(Z, {}), 
                        g.apply(pbjs, [ e, n, p ]), g = null);
                    } catch (e) {
                        N.logError("Error executing bidsBackHandler", null, e);
                    } finally {
                        r.length && P.callTimedOutBidders(o, r, m);
                        var t = B.b.getConfig("userSync") || {};
                        t.enableOverride || D(t.syncDelay);
                    }
                }));
            }
            function T() {
                N.logInfo("Bids Received for Auction with id: ".concat(p), f), b = L, O(!1, !0);
            }
            function I(e) {
                A.add(e);
            }
            function C(d) {
                var f = this;
                d.forEach(function(e) {
                    var t;
                    t = e, h = h.concat(t);
                });
                var l = {}, e = {
                    bidRequests: d,
                    run: function() {
                        var e, t;
                        e = O.bind(null, !0), t = setTimeout(e, m), v = t, b = W, q.emit(M.EVENTS.AUCTION_INIT, E());
                        var n, r, i, o, a, c, u = (n = T, r = f, i = 0, o = !1, a = new Set(), c = {}, {
                            addBidResponse: function(e, t) {
                                c[t.requestId] = !0, i++;
                                var n = function(e) {
                                    var t = e.adUnitCode, n = e.bid, r = e.bidderRequest, i = e.auctionId, o = r.start, a = k({}, n, {
                                        auctionId: i,
                                        responseTimestamp: Object(j.timestamp)(),
                                        requestTimestamp: o,
                                        cpm: parseFloat(n.cpm) || 0,
                                        bidder: n.bidderCode,
                                        adUnitCode: t
                                    });
                                    a.timeToRespond = a.responseTimestamp - a.requestTimestamp, q.emit(M.EVENTS.BID_ADJUSTMENT, a);
                                    var c = r.bids && x()(r.bids, function(e) {
                                        return e.adUnitCode == t;
                                    }), u = c && c.renderer;
                                    u && u.url && (a.renderer = _.a.install({
                                        url: u.url
                                    }), a.renderer.setRender(u.render));
                                    var s = X(n.mediaType, c, B.b.getConfig("mediaTypePriceGranularity")), d = Object(w.a)(a.cpm, "object" === R(s) ? s : B.b.getConfig("customPriceBucket"), B.b.getConfig("currency.granularityMultiplier"));
                                    return a.pbLg = d.low, a.pbMg = d.med, a.pbHg = d.high, a.pbAg = d.auto, a.pbDg = d.dense, 
                                    a.pbCg = d.custom, a;
                                }({
                                    adUnitCode: e,
                                    bid: t,
                                    bidderRequest: this,
                                    auctionId: r.getAuctionId()
                                });
                                "video" === n.mediaType ? function(e, t, n, r) {
                                    var i = !0, o = Object(j.getBidRequest)(t.requestId, [ n ]), a = o && Object(j.deepAccess)(o, "mediaTypes.video"), c = a && Object(j.deepAccess)(a, "context");
                                    B.b.getConfig("cache.url") && c !== U.b && (t.videoCacheKey ? t.vastUrl || (N.logError("videoCacheKey specified but not required vastUrl for video bid"), 
                                    i = !1) : (i = !1, $(e, t, r, o))), i && (Q(e, t), r());
                                }(r, n, this, s) : (Q(r, n), s());
                            },
                            adapterDone: function() {
                                a.add(this), o = r.getBidRequests().every(function(e) {
                                    return a.has(e);
                                }), this.bids.forEach(function(e) {
                                    c[e.bidId] || (r.addNoBid(e), q.emit(M.EVENTS.NO_BID, e));
                                }), o && 0 === i && n();
                            }
                        });
                        function s() {
                            i--, o && 0 === i && n();
                        }
                        P.callBids(y, d, function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            K.apply({
                                dispatch: u.addBidResponse,
                                bidderRequest: this
                            }, t);
                        }, u.adapterDone, {
                            request: function(e, t) {
                                g(z, t), g(l, e), V[e] || (V[e] = {
                                    SRA: !0,
                                    origin: t
                                }), 1 < l[e] && (V[e].SRA = !1);
                            },
                            done: function(e) {
                                z[e]--, H[0] && p(H[0]) && H.shift();
                            }
                        }, m, I);
                    }
                };
                function p(e) {
                    var r = !0, i = B.b.getConfig("maxRequestsPerOrigin") || F;
                    return e.bidRequests.some(function(e) {
                        var t = 1, n = void 0 !== e.src && e.src === M.S2S.SRC ? "s2s" : e.bidderCode;
                        return V[n] && (!1 === V[n].SRA && (t = Math.min(e.bids.length, i)), z[V[n].origin] + t > i && (r = !1)), 
                        !r;
                    }), r && e.run(), r;
                }
                function g(e, t) {
                    void 0 === e[t] ? e[t] = 1 : e[t]++;
                }
                p(e) || (N.logWarn("queueing auction due to limited endpoint capacity"), H.push(e));
            }
            return {
                addBidReceived: function(e) {
                    f = f.concat(e);
                },
                addNoBid: function(e) {
                    l = l.concat(e);
                },
                executeCallback: O,
                callBids: function() {
                    b = G, t = Date.now();
                    var e = P.makeBidRequests(y, t, p, m, s);
                    N.logInfo("Bids Requested for Auction with id: ".concat(p), e), e.length < 1 ? (N.logWarn("No valid bid requests returned for auction"), 
                    T()) : J.call({
                        dispatch: C,
                        context: this
                    }, e);
                },
                addWinningBid: function(e) {
                    S = S.concat(e), P.callBidWonBidder(e.bidder, e, o);
                },
                setBidTargeting: function(e) {
                    P.callSetTargetingBidder(e.bidder, e);
                },
                getWinningBids: function() {
                    return S;
                },
                getTimeout: function() {
                    return m;
                },
                getAuctionId: function() {
                    return p;
                },
                getAuctionStatus: function() {
                    return b;
                },
                getAdUnits: function() {
                    return y;
                },
                getAdUnitCodes: function() {
                    return d;
                },
                getBidRequests: function() {
                    return h;
                },
                getBidsReceived: function() {
                    return f;
                },
                getNoBids: function() {
                    return l;
                }
            };
        }, n.d(t, "c", function() {
            return K;
        }), n.d(t, "e", function() {
            return J;
        }), t.g = s, t.d = Q, n.d(t, "f", function() {
            return $;
        }), n.d(t, "i", function() {
            return d;
        }), n.d(t, "h", function() {
            return f;
        }), t.j = l;
        var j = n(0), w = n(45), a = n(36), o = n(93), _ = n(11), B = n(3), r = n(44), i = n(13), c = n(10), x = n.n(c), U = n(33), u = n(2);
        function R(e) {
            return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function k() {
            return (k = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        var D = r.a.syncUsers, N = n(0), P = n(7).default, q = n(9), M = n(5), G = "started", W = "inProgress", L = "completed";
        q.on(M.EVENTS.BID_ADJUSTMENT, function(e) {
            !function(e) {
                var t, n = e.bidderCode, r = e.cpm;
                if (pbjs.bidderSettings && (n && pbjs.bidderSettings[n] && "function" == typeof pbjs.bidderSettings[n].bidCpmAdjustment ? t = pbjs.bidderSettings[n].bidCpmAdjustment : pbjs.bidderSettings[M.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[M.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = pbjs.bidderSettings[M.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), 
                t)) try {
                    r = t(e.cpm, k({}, e));
                } catch (e) {
                    N.logError("Error during bid adjustment", "bidmanager.js", e);
                }
                0 <= r && (e.cpm = r);
            }(e);
        });
        var F = 4, z = {}, V = {}, H = [];
        var K = Object(i.b)("async", function(e, t) {
            this.dispatch.call(this.bidderRequest, e, t);
        }, "addBidResponse"), J = Object(i.b)("sync", function(e) {
            this.dispatch.call(this.context, e);
        }, "addBidderRequests"), Y = Object(i.b)("async", function(e, t) {
            t && t();
        }, "bidsBackCallback");
        function s(e, t) {
            t.timeToRespond > e.getTimeout() + B.b.getConfig("timeoutBuffer") && e.executeCallback(!0);
        }
        function Q(e, t) {
            var n = e.getBidRequests(), r = x()(n, function(e) {
                return e.bidderCode === t.bidderCode;
            });
            !function(t, e) {
                var n;
                {
                    var r;
                    t.bidderCode && (0 < t.cpm || t.dealId) && (r = x()(e.bids, function(e) {
                        return e.adUnitCode === t.adUnitCode;
                    }), n = function(e, t, n) {
                        if (!t) return {};
                        var r = {}, i = pbjs.bidderSettings;
                        {
                            var o;
                            i && (o = l(t.mediaType, e, n), p(r, o, t), e && i[e] && i[e][M.JSON_MAPPING.ADSERVER_TARGETING] && (p(r, i[e], t), 
                            t.sendStandardTargeting = i[e].sendStandardTargeting));
                        }
                        t.native && (r = k({}, r, Object(a.d)(t, n)));
                        return r;
                    }(t.bidderCode, t, r));
                }
                t.adserverTargeting = k(t.adserverTargeting || {}, n);
            }(t, r), q.emit(M.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), s(e, t);
        }
        var $ = Object(i.b)("async", function(n, r, i, e) {
            Object(o.b)([ r ], function(e, t) {
                e ? (N.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid must be discarded.")), 
                s(n, r)) : "" === t[0].uuid ? (N.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), 
                s(n, r)) : (r.videoCacheKey = t[0].uuid, r.vastUrl || (r.vastUrl = Object(o.a)(r.videoCacheKey)), 
                Q(n, r), i());
            }, e);
        }, "callPrebidCache");
        function X(e, t, n) {
            if (e && n) {
                if (e === u.d) {
                    var r = Object(j.deepAccess)(t, "mediaTypes.".concat(u.d, ".context"), "instream");
                    if (n["".concat(u.d, "-").concat(r)]) return n["".concat(u.d, "-").concat(r)];
                }
                return n[e];
            }
        }
        var d = function(e, t) {
            var n = X(e, t, B.b.getConfig("mediaTypePriceGranularity"));
            return "string" == typeof e && n ? "string" == typeof n ? n : "custom" : B.b.getConfig("priceGranularity");
        }, f = function(t) {
            return function(e) {
                return t === M.GRANULARITY_OPTIONS.AUTO ? e.pbAg : t === M.GRANULARITY_OPTIONS.DENSE ? e.pbDg : t === M.GRANULARITY_OPTIONS.LOW ? e.pbLg : t === M.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : t === M.GRANULARITY_OPTIONS.HIGH ? e.pbHg : t === M.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0;
            };
        };
        function l(e, t, n) {
            function r(e, t) {
                return {
                    key: e,
                    val: "function" == typeof t ? function(e) {
                        return t(e);
                    } : function(e) {
                        return Object(j.getValue)(e, t);
                    }
                };
            }
            var i, o, a = M.TARGETING_KEYS, c = d(e, n), u = pbjs.bidderSettings;
            return u[M.JSON_MAPPING.BD_SETTING_STANDARD] || (u[M.JSON_MAPPING.BD_SETTING_STANDARD] = {}), 
            u[M.JSON_MAPPING.BD_SETTING_STANDARD][M.JSON_MAPPING.ADSERVER_TARGETING] || (u[M.JSON_MAPPING.BD_SETTING_STANDARD][M.JSON_MAPPING.ADSERVER_TARGETING] = [ r(a.BIDDER, "bidderCode"), r(a.AD_ID, "adId"), r(a.PRICE_BUCKET, f(c)), r(a.SIZE, "size"), r(a.DEAL, "dealId"), r(a.SOURCE, "source"), r(a.FORMAT, "mediaType") ]), 
            "video" === e && (i = u[M.JSON_MAPPING.BD_SETTING_STANDARD][M.JSON_MAPPING.ADSERVER_TARGETING], 
            [ a.UUID, a.CACHE_ID ].forEach(function(t) {
                void 0 === x()(i, function(e) {
                    return e.key === t;
                }) && i.push(r(t, "videoCacheKey"));
            }), !B.b.getConfig("cache.url") || t && !1 === N.deepAccess(u, "".concat(t, ".sendStandardTargeting")) || (o = Object(j.parseUrl)(B.b.getConfig("cache.url")), 
            void 0 === x()(i, function(e) {
                return e.key === a.CACHE_HOST;
            }) && i.push(r(a.CACHE_HOST, function(e) {
                return N.deepAccess(e, "adserverTargeting.".concat(a.CACHE_HOST)) ? e.adserverTargeting[a.CACHE_HOST] : o.hostname;
            })))), u[M.JSON_MAPPING.BD_SETTING_STANDARD];
        }
        function p(r, i, o) {
            var e = i[M.JSON_MAPPING.ADSERVER_TARGETING];
            return o.size = o.getSize(), N._each(e, function(e) {
                var t = e.key, n = e.val;
                if (r[t] && N.logWarn("The key: " + t + " is getting ovewritten"), N.isFn(n)) try {
                    n = n(o);
                } catch (e) {
                    N.logError("bidmanager", "ERROR", e);
                }
                (void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && t !== M.TARGETING_KEYS.DEAL || !N.isEmptyStr(n) && null != n ? r[t] = n : N.logInfo("suppressing empty key '" + t + "' from adserver targeting");
            }), r;
        }
        function Z(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = {
                bids: []
            }), e[t.adUnitCode].bids.push(t), e;
        }
    },
    42: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return p;
        });
        var y = n(0), h = n(3), m = n(36), r = n(27), i = n(91), o = n(2), a = n(12), S = n.n(a);
        function A() {
            return (A = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        function E(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function O(e) {
            return function(e) {
                if (Array.isArray(e)) return c(e);
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
            }(e) || function(e, t) {
                if (!e) return;
                if ("string" == typeof e) return c(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t);
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        var u = n(0), T = n(5), I = [], C = Object.keys(T.TARGETING_KEYS).map(function(e) {
            return T.TARGETING_KEYS[e];
        }), s = function(e) {
            return e.responseTimestamp + 1e3 * e.ttl + 1e3 > Object(y.timestamp)();
        }, d = function(e) {
            return e && (e.status && !S()([ T.BID_STATUS.RENDERED ], e.status) || !e.status);
        };
        function j(e, r, t) {
            var i = 2 < arguments.length && void 0 !== t ? t : 0, o = [], a = h.b.getConfig("sendBidsControl.dealPrioritization"), c = Object(y.groupBy)(e, "adUnitCode");
            return Object.keys(c).forEach(function(e) {
                var t = [], n = Object(y.groupBy)(c[e], "bidderCode");
                Object.keys(n).forEach(function(e) {
                    return t.push(n[e].reduce(r));
                }), 0 < i ? (t = a ? t.sort(w(!0)) : t.sort(function(e, t) {
                    return t.cpm - e.cpm;
                }), o.push.apply(o, O(t.slice(0, i)))) : o.push.apply(o, O(t));
            }), o;
        }
        function w(e) {
            var n = 0 < arguments.length && void 0 !== e && e;
            return function(e, t) {
                return void 0 !== e.adserverTargeting.hb_deal && void 0 === t.adserverTargeting.hb_deal ? -1 : void 0 === e.adserverTargeting.hb_deal && void 0 !== t.adserverTargeting.hb_deal ? 1 : n ? t.cpm - e.cpm : t.adserverTargeting.hb_pb - e.adserverTargeting.hb_pb;
            };
        }
        var f, _, l, p = (f = r.a, l = {}, (_ = {}).setLatestAuctionForAdUnit = function(e, t) {
            l[e] = t;
        }, _.resetPresetTargeting = function(e, t) {
            var n, i;
            Object(y.isGptPubadsDefined)() && (n = x(e), i = f.getAdUnits().filter(function(e) {
                return S()(n, e.code);
            }), window.googletag.pubads().getSlots().forEach(function(n) {
                var r = u.isFn(t) && t(n);
                I.forEach(function(t) {
                    i.forEach(function(e) {
                        (e.code === n.getAdUnitPath() || e.code === n.getSlotElementId() || u.isFn(r) && r(e.code)) && n.setTargeting(t, null);
                    });
                });
            }));
        }, _.resetPresetTargetingAST = function(e) {
            x(e).forEach(function(e) {
                var t, n, r = window.apntag.getTag(e);
                r && r.keywords && (t = Object.keys(r.keywords), n = {}, t.forEach(function(e) {
                    S()(I, e.toLowerCase()) || (n[e] = r.keywords[e]);
                }), window.apntag.modifyTag(e, {
                    keywords: n
                }));
            });
        }, _.getAllTargeting = function(e) {
            var n, t, r, i, o, a, c, u, s, d = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : U(), f = x(e), l = (a = f, 
            c = d, u = _.getWinningBids(a, c), s = R(), (u = u.map(function(o) {
                return E({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter(function(e) {
                    return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === s.indexOf(e);
                }).reduce(function(e, t) {
                    var n = [ o.adserverTargeting[t] ], r = E({}, t.substring(0, 20), n);
                    if (t !== T.TARGETING_KEYS.DEAL) return [].concat(O(e), [ r ]);
                    var i = E({}, "".concat(t, "_").concat(o.bidderCode).substring(0, 20), n);
                    return [].concat(O(e), [ r, i ]);
                }, []));
            })).concat((o = f, d.filter(function(e) {
                return S()(o, e.adUnitCode);
            }).map(function(e) {
                return A({}, e);
            }).reduce(k, []).map(D).filter(function(e) {
                return e;
            }))).concat(h.b.getConfig("enableSendAllBids") ? (n = f, t = d, r = C.concat(m.a), 
            i = h.b.getConfig("sendBidsControl.bidLimit"), j(t, y.getHighestCpm, i).map(function(t) {
                if (B(t, n)) return E({}, t.adUnitCode, N(t, r.filter(function(e) {
                    return void 0 !== t.adserverTargeting[e];
                })));
            }).filter(function(e) {
                return e;
            })) : function(e, t) {
                if (!0 !== h.b.getConfig("targetingControls.alwaysIncludeDeals")) return [];
                var n = C.concat(m.a);
                return j(t, y.getHighestCpm).map(function(t) {
                    if (t.dealId && B(t, e)) return E({}, t.adUnitCode, N(t, n.filter(function(e) {
                        return void 0 !== t.adserverTargeting[e];
                    })));
                }).filter(function(e) {
                    return e;
                });
            }(f, d)));
            l.map(function(t) {
                Object.keys(t).map(function(e) {
                    t[e].map(function(e) {
                        -1 === I.indexOf(Object.keys(e)[0]) && (I = Object.keys(e).concat(I));
                    });
                });
            }), l = l.map(function(e) {
                return E({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function(e) {
                    return E({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "));
                }).reduce(function(e, t) {
                    return A(t, e);
                }, {}));
            }).reduce(function(e, t) {
                var n = Object.keys(t)[0];
                return e[n] = A({}, e[n], t[n]), e;
            }, {});
            var p, g, b, v = h.b.getConfig("targetingControls.auctionKeyMaxChars");
            return v && (Object(y.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(v, " characters.  Running checks on auction keys...")), 
            p = l, g = v, b = Object(y.deepClone)(p), l = Object.keys(b).map(function(e) {
                return {
                    adUnitCode: e,
                    adserverTargeting: b[e]
                };
            }).sort(w()).reduce(function(e, t, n, r) {
                var i, o = (i = t.adserverTargeting, Object.keys(i).reduce(function(e, t) {
                    return e + "".concat(t, "%3d").concat(encodeURIComponent(i[t]), "%26");
                }, ""));
                n + 1 === r.length && (o = o.slice(0, -3));
                var a = t.adUnitCode, c = o.length;
                return c <= g ? (g -= c, Object(y.logInfo)("AdUnit '".concat(a, "' auction keys comprised of ").concat(c, " characters.  Deducted from running threshold; new limit is ").concat(g), b[a]), 
                e[a] = b[a]) : Object(y.logWarn)("The following keys for adUnitCode '".concat(a, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(c, ", the current allotted amount was ").concat(g, ".\n"), b[a]), 
                n + 1 === r.length && 0 === Object.keys(e).length && Object(y.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."), 
                e;
            }, {})), f.forEach(function(e) {
                l[e] || (l[e] = {});
            }), l;
        }, _.setTargetingForGPT = function(i, e) {
            window.googletag.pubads().getSlots().forEach(function(r) {
                Object.keys(i).filter((e || Object(y.isAdUnitCodeMatchingSlot))(r)).forEach(function(n) {
                    return Object.keys(i[n]).forEach(function(t) {
                        var e = i[n][t];
                        "string" == typeof e && (e = e.split(",")), (e = 1 < e.length ? [ e ] : e).map(function(e) {
                            return u.logMessage("Attempting to set key value for slot: ".concat(r.getSlotElementId(), " key: ").concat(t, " value: ").concat(e)), 
                            e;
                        }).forEach(function(e) {
                            r.setTargeting(t, e);
                        });
                    });
                });
            });
        }, _.getWinningBids = function(e) {
            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : U(), t = x(e);
            return n.filter(function(e) {
                return S()(t, e.adUnitCode);
            }).filter(function(e) {
                return 0 < e.cpm;
            }).map(function(e) {
                return e.adUnitCode;
            }).filter(y.uniques).map(function(t) {
                return n.filter(function(e) {
                    return e.adUnitCode === t ? e : null;
                }).reduce(y.getHighestCpm);
            });
        }, _.setTargetingForAst = function(e) {
            var r = _.getAllTargeting(e);
            try {
                _.resetPresetTargetingAST(e);
            } catch (e) {
                u.logError("unable to reset targeting for AST" + e);
            }
            Object.keys(r).forEach(function(n) {
                return Object.keys(r[n]).forEach(function(e) {
                    var t;
                    u.logMessage("Attempting to set targeting for targetId: ".concat(n, " key: ").concat(e, " value: ").concat(r[n][e])), 
                    (u.isStr(r[n][e]) || u.isArray(r[n][e])) && (t = {}, e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e], 
                    window.apntag.setKeywords(n, t, {
                        overrideKeyValue: !0
                    }));
                });
            });
        }, _.isApntagDefined = function() {
            if (window.apntag && u.isFn(window.apntag.setKeywords)) return !0;
        }, _);
        function B(e, t) {
            return e.adserverTargeting && t && (u.isArray(t) && S()(t, e.adUnitCode) || "string" == typeof t && e.adUnitCode === t);
        }
        function x(e) {
            return "string" == typeof e ? [ e ] : u.isArray(e) ? e : f.getAdUnitCodes() || [];
        }
        function U() {
            var e = f.getBidsReceived();
            return h.b.getConfig("useBidCache") || (e = e.filter(function(e) {
                return l[e.adUnitCode] === e.auctionId;
            })), j(e = e.filter(function(e) {
                return Object(y.deepAccess)(e, "video.context") !== o.a;
            }).filter(function(e) {
                return "banner" !== e.mediaType || Object(i.c)([ e.width, e.height ]);
            }).filter(d).filter(s), y.getOldestHighestCpmBid);
        }
        function R() {
            return f.getStandardBidderAdServerTargeting().map(function(e) {
                return e.key;
            }).concat(C).filter(y.uniques);
        }
        function k(r, i, e, t) {
            return Object.keys(i.adserverTargeting).filter(g()).forEach(function(e) {
                var t, n;
                r.length && r.filter((n = e, function(e) {
                    return e.adUnitCode === i.adUnitCode && e.adserverTargeting[n];
                })).forEach((t = e, function(e) {
                    u.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [ e.adserverTargeting[t] ]), 
                    e.adserverTargeting[t] = e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(y.uniques), 
                    delete i.adserverTargeting[t];
                }));
            }), r.push(i), r;
        }
        function g() {
            var t = R().concat(m.a);
            return function(e) {
                return -1 === t.indexOf(e);
            };
        }
        function D(t) {
            return E({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(g()).map(function(e) {
                return E({}, e.substring(0, 20), [ t.adserverTargeting[e] ]);
            }));
        }
        function N(t, e) {
            return e.map(function(e) {
                return E({}, "".concat(e, "_").concat(t.bidderCode).substring(0, 20), [ t.adserverTargeting[e] ]);
            });
        }
    },
    43: function(e, t) {
        e.exports = {};
    },
    44: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return S;
        });
        var a = n(0), r = n(3), i = n(12), o = n.n(i), c = n(8);
        function u(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var n = [], r = !0, i = !1, o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    i = !0, o = e;
                } finally {
                    try {
                        r || null == c.return || c.return();
                    } finally {
                        if (i) throw o;
                    }
                }
                return n;
            }(e, t) || function(e, t) {
                if (!e) return;
                if ("string" == typeof e) return s(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function d() {
            return (d = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        r.b.setDefaults({
            userSync: a.deepClone({
                syncEnabled: !0,
                filterSettings: {
                    image: {
                        bidders: "*",
                        filter: "include"
                    }
                },
                syncsPerBidder: 5,
                syncDelay: 3e3,
                auctionDelay: 0
            })
        });
        var f = Object(c.a)("usersync");
        var l, p, g, b, v, y, h, m = !a.isSafariBrowser() && f.cookiesAreEnabled(), S = (l = {
            config: r.b.getConfig("userSync"),
            browserSupportsCookies: m
        }, p = {}, g = A(), b = new Set(), y = {
            image: !0,
            iframe: !(v = {})
        }, h = l.config, r.b.getConfig("userSync", function(e) {
            var t;
            e.userSync && (t = e.userSync.filterSettings, a.isPlainObject(t) && (t.image || t.all || (e.userSync.filterSettings.image = {
                bidders: "*",
                filter: "include"
            }))), h = d(h, e.userSync);
        }), p.registerSync = function(e, t, n) {
            return b.has(t) ? a.logMessage('already fired syncs for "'.concat(t, '", ignoring registerSync call')) : h.syncEnabled && a.isArray(g[e]) ? t ? 0 !== h.syncsPerBidder && Number(v[t]) >= h.syncsPerBidder ? a.logWarn('Number of user syncs exceeded for "'.concat(t, '"')) : p.canBidderRegisterSync(e, t) ? (g[e].push([ t, n ]), 
            (r = v)[i = t] ? r[i] += 1 : r[i] = 1, void (v = r)) : a.logWarn('Bidder "'.concat(t, '" not permitted to register their "').concat(e, '" userSync pixels.')) : a.logWarn("Bidder is required for registering sync") : a.logWarn('User sync type "'.concat(e, '" not supported'));
            var r, i;
        }, p.syncUsers = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
            if (e) return setTimeout(E, Number(e));
            E();
        }, p.triggerUserSyncs = function() {
            h.enableOverride && p.syncUsers();
        }, p.canBidderRegisterSync = function(e, t) {
            return !h.filterSettings || !T(e, t);
        }, p);
        function A() {
            return {
                image: [],
                iframe: []
            };
        }
        function E() {
            if (h.syncEnabled && l.browserSupportsCookies) {
                try {
                    !function() {
                        if (!y.image) return;
                        O(g.image, function(e) {
                            var t = u(e, 2), n = t[0], r = t[1];
                            a.logMessage("Invoking image pixel user sync for bidder: ".concat(n)), a.triggerPixel(r);
                        });
                    }(), function() {
                        if (!y.iframe) return;
                        O(g.iframe, function(e) {
                            var t = u(e, 2), n = t[0], r = t[1];
                            a.logMessage("Invoking iframe user sync for bidder: ".concat(n)), a.insertUserSyncIframe(r);
                        });
                    }();
                } catch (e) {
                    return a.logError("Error firing user syncs", e);
                }
                g = A();
            }
        }
        function O(e, t) {
            a.shuffle(e).forEach(function(e) {
                t(e), b.add(e[0]);
            });
        }
        function T(e, t) {
            var n = h.filterSettings;
            if (function(e, t) {
                if (e.all && e[t]) return a.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), 
                !1;
                var n = e.all ? e.all : e[t], r = e.all ? "all" : t;
                if (!n) return !1;
                var i = n.filter, o = n.bidders;
                if (i && "include" !== i && "exclude" !== i) return a.logWarn('UserSync "filterSettings.'.concat(r, ".filter\" setting '").concat(i, "' is not a valid option; use either 'include' or 'exclude'.")), 
                !1;
                return !!("*" === o || Array.isArray(o) && 0 < o.length && o.every(function(e) {
                    return a.isStr(e) && "*" !== e;
                })) || (a.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(r, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), 
                !1);
            }(n, e)) {
                y[e] = !0;
                var r = n.all ? n.all : n[e], i = "*" === r.bidders ? [ t ] : r.bidders;
                return {
                    include: function(e, t) {
                        return !o()(e, t);
                    },
                    exclude: function(e, t) {
                        return o()(e, t);
                    }
                }[r.filter || "include"](i, t);
            }
        }
    },
    45: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return d;
        }), n.d(t, "b", function() {
            return h;
        });
        var r = n(10), v = n.n(r), i = n(0), y = 2, o = {
            buckets: [ {
                max: 5,
                increment: .5
            } ]
        }, a = {
            buckets: [ {
                max: 20,
                increment: .1
            } ]
        }, c = {
            buckets: [ {
                max: 20,
                increment: .01
            } ]
        }, u = {
            buckets: [ {
                max: 3,
                increment: .01
            }, {
                max: 8,
                increment: .05
            }, {
                max: 20,
                increment: .5
            } ]
        }, s = {
            buckets: [ {
                max: 5,
                increment: .05
            }, {
                max: 10,
                increment: .1
            }, {
                max: 20,
                increment: .5
            } ]
        };
        function d(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1, r = parseFloat(e);
            return isNaN(r) && (r = ""), {
                low: "" === r ? "" : f(e, o, n),
                med: "" === r ? "" : f(e, a, n),
                high: "" === r ? "" : f(e, c, n),
                auto: "" === r ? "" : f(e, s, n),
                dense: "" === r ? "" : f(e, u, n),
                custom: "" === r ? "" : f(e, t, n)
            };
        }
        function f(n, e, r) {
            var i = "";
            if (!h(e)) return i;
            var t, o, a, c, u, s, d, f, l, p = e.buckets.reduce(function(e, t) {
                return e.max > t.max ? e : t;
            }, {
                max: 0
            }), g = 0, b = v()(e.buckets, function(e) {
                if (n > p.max * r) {
                    var t = e.precision;
                    void 0 === t && (t = y), i = (e.max * r).toFixed(t);
                } else {
                    if (n <= e.max * r && g * r <= n) return e.min = g, e;
                    g = e.max;
                }
            });
            return b && (t = n, a = r, c = void 0 !== (o = b).precision ? o.precision : y, u = o.increment * a, 
            s = o.min * a, d = Math.pow(10, c + 2), f = (t * d - s * d) / (u * d), l = Math.floor(f) * u + s, 
            i = (l = Number(l.toFixed(10))).toFixed(c)), i;
        }
        function h(e) {
            if (i.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
            var t = !0;
            return e.buckets.forEach(function(e) {
                e.max && e.increment || (t = !1);
            }), t;
        }
    },
    46: function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            };
        };
    },
    47: function(e, t, n) {
        var r = n(70), i = n(49);
        e.exports = function(e) {
            return r(i(e));
        };
    },
    474: function(e, t, n) {
        var r = n(475);
        e.exports = r;
    },
    475: function(e, t, n) {
        n(476);
        var r = n(43);
        e.exports = r.Number.isInteger;
    },
    476: function(e, t, n) {
        n(14)({
            target: "Number",
            stat: !0
        }, {
            isInteger: n(477)
        });
    },
    477: function(e, t, n) {
        var r = n(23), i = Math.floor;
        e.exports = function(e) {
            return !r(e) && isFinite(e) && i(e) === e;
        };
    },
    48: function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1);
        };
    },
    49: function(e, t) {
        e.exports = function(e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e;
        };
    },
    5: function(e, t) {
        e.exports = {
            JSON_MAPPING: {
                PL_CODE: "code",
                PL_SIZE: "sizes",
                PL_BIDS: "bids",
                BD_BIDDER: "bidder",
                BD_ID: "paramsd",
                BD_PL_ID: "placementId",
                ADSERVER_TARGETING: "adserverTargeting",
                BD_SETTING_STANDARD: "standard"
            },
            DEBUG_MODE: "pbjs_debug",
            STATUS: {
                GOOD: 1,
                NO_BID: 2
            },
            CB: {
                TYPE: {
                    ALL_BIDS_BACK: "allRequestedBidsBack",
                    AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                    BID_WON: "bidWon",
                    REQUEST_BIDS: "requestBids"
                }
            },
            EVENTS: {
                AUCTION_INIT: "auctionInit",
                AUCTION_END: "auctionEnd",
                BID_ADJUSTMENT: "bidAdjustment",
                BID_TIMEOUT: "bidTimeout",
                BID_REQUESTED: "bidRequested",
                BID_RESPONSE: "bidResponse",
                NO_BID: "noBid",
                BID_WON: "bidWon",
                BIDDER_DONE: "bidderDone",
                SET_TARGETING: "setTargeting",
                BEFORE_REQUEST_BIDS: "beforeRequestBids",
                REQUEST_BIDS: "requestBids",
                ADD_AD_UNITS: "addAdUnits",
                AD_RENDER_FAILED: "adRenderFailed",
                TCF2_ENFORCEMENT: "tcf2Enforcement"
            },
            AD_RENDER_FAILED_REASON: {
                PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocuemnt",
                NO_AD: "noAd",
                EXCEPTION: "exception",
                CANNOT_FIND_AD: "cannotFindAd",
                MISSING_DOC_OR_ADID: "missingDocOrAdid"
            },
            EVENT_ID_PATHS: {
                bidWon: "adUnitCode"
            },
            GRANULARITY_OPTIONS: {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            },
            TARGETING_KEYS: {
                BIDDER: "hb_bidder",
                AD_ID: "hb_adid",
                PRICE_BUCKET: "hb_pb",
                SIZE: "hb_size",
                DEAL: "hb_deal",
                SOURCE: "hb_source",
                FORMAT: "hb_format",
                UUID: "hb_uuid",
                CACHE_ID: "hb_cache_id",
                CACHE_HOST: "hb_cache_host"
            },
            NATIVE_KEYS: {
                title: "hb_native_title",
                body: "hb_native_body",
                body2: "hb_native_body2",
                privacyLink: "hb_native_privacy",
                privacyIcon: "hb_native_privicon",
                sponsoredBy: "hb_native_brand",
                image: "hb_native_image",
                icon: "hb_native_icon",
                clickUrl: "hb_native_linkurl",
                displayUrl: "hb_native_displayurl",
                cta: "hb_native_cta",
                rating: "hb_native_rating",
                address: "hb_native_address",
                downloads: "hb_native_downloads",
                likes: "hb_native_likes",
                phone: "hb_native_phone",
                price: "hb_native_price",
                salePrice: "hb_native_saleprice"
            },
            S2S: {
                SRC: "s2s",
                DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
                SYNCED_BIDDERS_KEY: "pbjsSyncs"
            },
            BID_STATUS: {
                BID_TARGETING_SET: "targetingSet",
                RENDERED: "rendered",
                BID_REJECTED: "bidRejected"
            }
        };
    },
    50: function(e, t, n) {
        var r = n(58), i = Math.min;
        e.exports = function(e) {
            return 0 < e ? i(r(e), 9007199254740991) : 0;
        };
    },
    51: function(e, t) {
        e.exports = function() {};
    },
    52: function(e, t, n) {
        var r = n(25);
        e.exports = r;
    },
    53: function(e, t) {
        e.exports = {};
    },
    54: function(e, t, n) {
        var r, i, o, a, c, u, s, d, f = n(113), l = n(22), p = n(23), g = n(30), b = n(24), v = n(65), y = n(53), h = l.WeakMap;
        s = f ? (r = new h(), i = r.get, o = r.has, a = r.set, c = function(e, t) {
            return a.call(r, e, t), t;
        }, u = function(e) {
            return i.call(r, e) || {};
        }, function(e) {
            return o.call(r, e);
        }) : (y[d = v("state")] = !0, c = function(e, t) {
            return g(e, d, t), t;
        }, u = function(e) {
            return b(e, d) ? e[d] : {};
        }, function(e) {
            return b(e, d);
        }), e.exports = {
            set: c,
            get: u,
            has: s,
            enforce: function(e) {
                return s(e) ? u(e) : c(e, {});
            },
            getterFor: function(n) {
                return function(e) {
                    var t;
                    if (!p(e) || (t = u(e)).type !== n) throw TypeError("Incompatible receiver, " + n + " required");
                    return t;
                };
            }
        };
    },
    55: function(e, t, n) {
        var i = n(23);
        e.exports = function(e, t) {
            if (!i(e)) return e;
            var n, r;
            if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
            if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e))) return r;
            if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    56: function(e, t, n) {
        function r(p) {
            var g = 1 == p, b = 2 == p, v = 3 == p, y = 4 == p, h = 6 == p, m = 5 == p || h;
            return function(e, t, n, r) {
                for (var i, o, a = E(e), c = A(a), u = S(t, n, 3), s = O(c.length), d = 0, f = r || T, l = g ? f(e, s) : b ? f(e, 0) : void 0; d < s; d++) if ((m || d in c) && (o = u(i = c[d], d, a), 
                p)) if (g) l[d] = o; else if (o) switch (p) {
                  case 3:
                    return !0;

                  case 5:
                    return i;

                  case 6:
                    return d;

                  case 2:
                    I.call(l, i);
                } else if (y) return !1;
                return h ? -1 : v || y ? y : l;
            };
        }
        var S = n(21), A = n(70), E = n(57), O = n(50), T = n(101), I = [].push;
        e.exports = {
            forEach: r(0),
            map: r(1),
            filter: r(2),
            some: r(3),
            every: r(4),
            find: r(5),
            findIndex: r(6)
        };
    },
    57: function(e, t, n) {
        var r = n(49);
        e.exports = function(e) {
            return Object(r(e));
        };
    },
    58: function(e, t) {
        var n = Math.ceil, r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e);
        };
    },
    59: function(e, t) {
        var n = 0, r = Math.random();
        e.exports = function(e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36);
        };
    },
    60: function(e, t, n) {
        function a(e) {
            throw e;
        }
        var c = n(28), u = n(29), s = n(24), d = Object.defineProperty, f = {};
        e.exports = function(e, t) {
            if (s(f, e)) return f[e];
            var n = [][e], r = !!s(t = t || {}, "ACCESSORS") && t.ACCESSORS, i = s(t, 0) ? t[0] : a, o = s(t, 1) ? t[1] : void 0;
            return f[e] = !!n && !u(function() {
                if (r && !c) return !0;
                var e = {
                    length: -1
                };
                r ? d(e, 1, {
                    enumerable: !0,
                    get: a
                }) : e[1] = 1, n.call(e, i, o);
            });
        };
    },
    61: function(e, t, n) {
        var r = n(62), i = n(38), o = n(19)("iterator");
        e.exports = function(e) {
            if (null != e) return e[o] || e["@@iterator"] || i[r(e)];
        };
    },
    62: function(e, t, n) {
        var r = n(63), i = n(48), o = n(19)("toStringTag"), a = "Arguments" == i(function() {
            return arguments;
        }());
        e.exports = r ? i : function(e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
                try {
                    return e[t];
                } catch (e) {}
            }(t = Object(e), o)) ? n : a ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r;
        };
    },
    63: function(e, t, n) {
        var r = {};
        r[n(19)("toStringTag")] = "z", e.exports = "[object z]" === String(r);
    },
    64: function(e, t, n) {
        var o = n(63), a = n(31).f, c = n(30), u = n(24), s = n(112), d = n(19)("toStringTag");
        e.exports = function(e, t, n, r) {
            var i;
            e && (i = n ? e : e.prototype, u(i, d) || a(i, d, {
                configurable: !0,
                value: t
            }), r && !o && c(i, "toString", s));
        };
    },
    65: function(e, t, n) {
        var r = n(73), i = n(59), o = r("keys");
        e.exports = function(e) {
            return o[e] || (o[e] = i(e));
        };
    },
    66: function(e, t, n) {
        "use strict";
        function y() {
            return this;
        }
        var h = n(14), m = n(121), S = n(86), A = n(123), E = n(64), O = n(30), T = n(84), r = n(19), I = n(16), C = n(38), i = n(85), j = i.IteratorPrototype, w = i.BUGGY_SAFARI_ITERATORS, _ = r("iterator"), B = "values", x = "entries";
        e.exports = function(e, t, n, r, i, o, a) {
            m(n, t, r);
            function c(e) {
                if (e === i && b) return b;
                if (!w && e in p) return p[e];
                switch (e) {
                  case "keys":
                  case B:
                  case x:
                    return function() {
                        return new n(this, e);
                    };
                }
                return function() {
                    return new n(this);
                };
            }
            var u, s, d, f = t + " Iterator", l = !1, p = e.prototype, g = p[_] || p["@@iterator"] || i && p[i], b = !w && g || c(i), v = "Array" == t && p.entries || g;
            if (v && (u = S(v.call(new e())), j !== Object.prototype && u.next && (I || S(u) === j || (A ? A(u, j) : "function" != typeof u[_] && O(u, _, y)), 
            E(u, f, !0, !0), I && (C[f] = y))), i == B && g && g.name !== B && (l = !0, b = function() {
                return g.call(this);
            }), I && !a || p[_] === b || O(p, _, b), C[t] = b, i) if (s = {
                values: c(B),
                keys: o ? b : c("keys"),
                entries: c(x)
            }, a) for (d in s) !w && !l && d in p || T(p, d, s[d]); else h({
                target: t,
                proto: !0,
                forced: w || l
            }, s);
            return s;
        };
    },
    67: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o;
        });
        var r = n(0), c = {};
        function i(e, t, n) {
            var r, i, o, a = (i = n, o = c[r = e] = c[r] || {
                bidders: {}
            }, i ? o.bidders[i] = o.bidders[i] || {} : o);
            return a[t] = (a[t] || 0) + 1, a[t];
        }
        var o = {
            incrementRequestsCounter: function(e) {
                return i(e, "requestsCounter");
            },
            incrementBidderRequestsCounter: function(e, t) {
                return i(e, "requestsCounter", t);
            },
            incrementBidderWinsCounter: function(e, t) {
                return i(e, "winsCounter", t);
            },
            getRequestsCounter: function(e) {
                return Object(r.deepAccess)(c, "".concat(e, ".requestsCounter")) || 0;
            },
            getBidderRequestsCounter: function(e, t) {
                return Object(r.deepAccess)(c, "".concat(e, ".bidders.").concat(t, ".requestsCounter")) || 0;
            },
            getBidderWinsCounter: function(e, t) {
                return Object(r.deepAccess)(c, "".concat(e, ".bidders.").concat(t, ".winsCounter")) || 0;
            }
        };
    },
    68: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "adUnitSetupChecks", function() {
            return z;
        }), n.d(t, "checkAdUnitSetup", function() {
            return V;
        }), t.executeCallbacks = J;
        var r = n(20), i = n(0), o = n(223), a = n(44), d = n(3), y = n(27), f = n(42), c = n(13), u = n(224), s = n(12), l = n.n(s), p = n(67), h = n(11), g = n(32), b = n(8);
        function v(e) {
            return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function m() {
            return (m = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        var S = Object(r.a)(), A = n(5), E = n(0), O = n(7).default, T = n(9), I = a.a.triggerUserSyncs, C = A.EVENTS, j = C.ADD_AD_UNITS, w = C.BID_WON, _ = C.REQUEST_BIDS, B = C.SET_TARGETING, x = C.AD_RENDER_FAILED, U = A.AD_RENDER_FAILED_REASON, R = U.PREVENT_WRITING_ON_MAIN_DOCUMENT, k = U.NO_AD, D = U.EXCEPTION, N = U.CANNOT_FIND_AD, P = U.MISSING_DOC_OR_ADID, q = {
            bidWon: function(e) {
                var t = y.a.getBidsRequested().map(function(e) {
                    return e.bids.map(function(e) {
                        return e.adUnitCode;
                    });
                }).reduce(i.flatten).filter(i.uniques);
                return !!E.contains(t, e) || void E.logError('The "' + e + '" placement is not defined.');
            }
        };
        function M(e, t, n) {
            e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, 
            e.defaultView.frameElement.height = n);
        }
        function G(e, t) {
            var n = [];
            return E.isArray(e) && (t ? e.length === t : 0 < e.length) && (e.every(function(e) {
                return Object(i.isArrayOfNums)(e, 2);
            }) ? n = e : Object(i.isArrayOfNums)(e, 2) && n.push(e)), n;
        }
        function W(e) {
            var t = E.deepClone(e), n = t.mediaTypes.banner, r = G(n.sizes);
            return 0 < r.length ? (n.sizes = r, t.sizes = r) : (E.logError("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."), 
            delete t.mediaTypes.banner), t;
        }
        function L(e) {
            var t, n, r = E.deepClone(e), i = r.mediaTypes.video;
            return i.playerSize && (t = "number" == typeof i.playerSize[0] ? 2 : 1, 0 < (n = G(i.playerSize, t)).length ? (2 == t && E.logInfo("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."), 
            i.playerSize = n, r.sizes = n) : (E.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), 
            delete r.mediaTypes.video.playerSize)), r;
        }
        function F(e) {
            var t = E.deepClone(e), n = t.mediaTypes.native;
            return n.image && n.image.sizes && !Array.isArray(n.image.sizes) && (E.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), 
            delete t.mediaTypes.native.image.sizes), n.image && n.image.aspect_ratios && !Array.isArray(n.image.aspect_ratios) && (E.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), 
            delete t.mediaTypes.native.image.aspect_ratios), n.icon && n.icon.sizes && !Array.isArray(n.icon.sizes) && (E.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), 
            delete t.mediaTypes.native.icon.sizes), t;
        }
        Object(u.a)(), S.bidderSettings = S.bidderSettings || {}, S.libLoaded = !0, S.version = "v4.4.0", 
        E.logInfo("Prebid.js v4.4.0 loaded"), S.adUnits = S.adUnits || [], S.triggerUserSyncs = I;
        var z = {
            validateBannerMediaType: W,
            validateVideoMediaType: L,
            validateNativeMediaType: F,
            validateSizes: G
        }, V = Object(c.b)("sync", function(e) {
            var a = [];
            return e.forEach(function(e) {
                var t, n, r, i, o = e.mediaTypes;
                o && 0 !== Object.keys(o).length ? (o.banner && (t = W(e)), o.video && (n = L(t || e)), 
                o.native && (r = F(n || (t || e))), i = m({}, t, n, r), a.push(i)) : E.logError("Detected adUnit.code '".concat(e.code, "' did not have a 'mediaTypes' object defined.  This is a required field for the auction, so this adUnit has been removed."));
            }), a;
        }, "checkAdUnitSetup");
        function H(e) {
            var n = y.a[e]().filter(E.bind.call(i.adUnitsFilter, this, y.a.getAdUnitCodes())), r = y.a.getLastAuctionId();
            return n.map(function(e) {
                return e.adUnitCode;
            }).filter(i.uniques).map(function(t) {
                return n.filter(function(e) {
                    return e.auctionId === r && e.adUnitCode === t;
                });
            }).filter(function(e) {
                return e && e[0] && e[0].adUnitCode;
            }).map(function(e) {
                return t = {}, n = e[0].adUnitCode, r = {
                    bids: e
                }, n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, t;
                var t, n, r;
            }).reduce(function(e, t) {
                return m(e, t);
            }, {});
        }
        function K(e) {
            var t = e.reason, n = e.message, r = e.bid, i = e.id, o = {
                reason: t,
                message: n
            };
            r && (o.bid = r), i && (o.adId = i), E.logError(n), T.emit(x, o);
        }
        function J(e, t) {
            function n(e) {
                for (var t; t = e.shift(); ) t();
            }
            n(b.c), n(Y), e.call(this, t);
        }
        S.getAdserverTargetingForAdUnitCodeStr = function(e) {
            if (E.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), 
            e) {
                var t = S.getAdserverTargetingForAdUnitCode(e);
                return E.transformAdServerTargetingObj(t);
            }
            E.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode");
        }, S.getAdserverTargetingForAdUnitCode = function(e) {
            return S.getAdserverTargeting(e)[e];
        }, S.getAdserverTargeting = function(e) {
            return E.logInfo("Invoking pbjs.getAdserverTargeting", arguments), f.a.getAllTargeting(e);
        }, S.getNoBids = function() {
            return E.logInfo("Invoking pbjs.getNoBids", arguments), H("getNoBids");
        }, S.getBidResponses = function() {
            return E.logInfo("Invoking pbjs.getBidResponses", arguments), H("getBidsReceived");
        }, S.getBidResponsesForAdUnitCode = function(t) {
            return {
                bids: y.a.getBidsReceived().filter(function(e) {
                    return e.adUnitCode === t;
                })
            };
        }, S.setTargetingForGPTAsync = function(e, t) {
            var n;
            E.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), Object(i.isGptPubadsDefined)() ? (n = f.a.getAllTargeting(e), 
            f.a.resetPresetTargeting(e, t), f.a.setTargetingForGPT(n, t), Object.keys(n).forEach(function(t) {
                Object.keys(n[t]).forEach(function(e) {
                    "hb_adid" === e && y.a.setStatusForBids(n[t][e], A.BID_STATUS.BID_TARGETING_SET);
                });
            }), T.emit(B, n)) : E.logError("window.googletag is not defined on the page");
        }, S.setTargetingForAst = function(e) {
            E.logInfo("Invoking pbjs.setTargetingForAn", arguments), f.a.isApntagDefined() ? (f.a.setTargetingForAst(e), 
            T.emit(B, f.a.getAllTargeting())) : E.logError("window.apntag is not defined on the page");
        }, S.renderAd = function(e, t) {
            if (E.logInfo("Invoking pbjs.renderAd", arguments), E.logMessage("Calling renderAd with adId :" + t), 
            e && t) try {
                var n, r, i, o, a, c, u, s, d, f, l, p, g = y.a.findBidByAdId(t);
                g ? (g.ad = E.replaceAuctionPrice(g.ad, g.cpm), g.adUrl = E.replaceAuctionPrice(g.adUrl, g.cpm), 
                y.a.addWinningBid(g), T.emit(w, g), n = g.height, r = g.width, i = g.ad, o = g.mediaType, 
                a = g.adUrl, c = g.renderer, u = document.createComment("Creative ".concat(g.creativeId, " served by ").concat(g.bidder, " Prebid.js Header Bidding")), 
                E.insertElement(u, e, "body"), Object(h.c)(c) ? Object(h.b)(c, g) : e === document && !E.inIframe() || "video" === o ? (s = "Error trying to write ad. Ad render call ad id ".concat(t, " was prevented from writing to the main document."), 
                K({
                    reason: R,
                    message: s,
                    bid: g,
                    id: t
                })) : i ? (navigator.userAgent && -1 < navigator.userAgent.toLowerCase().indexOf("firefox/") && ((d = navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1]) && parseInt(d, 10) < 67 && e.open("text/html", "replace")), 
                e.write(i), e.close(), M(e, r, n), E.callBurl(g)) : a ? ((f = E.createInvisibleIframe()).height = n, 
                f.width = r, f.style.display = "inline", f.style.overflow = "hidden", f.src = a, 
                E.insertElement(f, e, "body"), M(e, r, n), E.callBurl(g)) : (l = "Error trying to write ad. No ad for bid response id: ".concat(t), 
                K({
                    reason: k,
                    message: l,
                    bid: g,
                    id: t
                }))) : (p = "Error trying to write ad. Cannot find ad by given id : ".concat(t), 
                K({
                    reason: N,
                    message: p,
                    id: t
                }));
            } catch (e) {
                var b = "Error trying to write ad Id :".concat(t, " to the page:").concat(e.message);
                K({
                    reason: D,
                    message: b,
                    id: t
                });
            } else {
                var v = "Error trying to write ad Id :".concat(t, " to the page. Missing document or adId");
                K({
                    reason: P,
                    message: v,
                    id: t
                });
            }
        }, S.removeAdUnit = function(e) {
            E.logInfo("Invoking pbjs.removeAdUnit", arguments), e ? (E.isArray(e) ? e : [ e ]).forEach(function(e) {
                for (var t = S.adUnits.length - 1; 0 <= t; t--) S.adUnits[t].code === e && S.adUnits.splice(t, 1);
            }) : S.adUnits = [];
        }, S.requestBids = Object(c.b)("async", function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.bidsBackHandler, n = e.timeout, r = e.adUnits, i = e.adUnitCodes, o = e.labels, a = e.auctionId;
            T.emit(_);
            var c = n || d.b.getConfig("bidderTimeout"), r = r || S.adUnits;
            if (E.logInfo("Invoking pbjs.requestBids", arguments), r = V(r), i && i.length ? r = r.filter(function(e) {
                return l()(i, e.code);
            }) : i = r && r.map(function(e) {
                return e.code;
            }), r.forEach(function(i) {
                var o = Object.keys(i.mediaTypes || {
                    banner: "banner"
                }), e = i.bids.map(function(e) {
                    return e.bidder;
                }), a = O.bidderRegistry, t = d.b.getConfig("s2sConfig"), n = t && t.bidders, r = n ? e.filter(function(e) {
                    return !l()(n, e);
                }) : e;
                i.transactionId = E.generateUUID(), r.forEach(function(t) {
                    var e = a[t], n = e && e.getSpec && e.getSpec(), r = n && n.supportedMediaTypes || [ "banner" ];
                    o.some(function(e) {
                        return l()(r, e);
                    }) ? p.a.incrementBidderRequestsCounter(i.code, t) : (E.logWarn(E.unsupportedBidderMessage(i, t)), 
                    i.bids = i.bids.filter(function(e) {
                        return e.bidder !== t;
                    }));
                }), p.a.incrementRequestsCounter(i.code);
            }), r && 0 !== r.length) {
                var u = y.a.createAuction({
                    adUnits: r,
                    adUnitCodes: i,
                    callback: t,
                    cbTimeout: c,
                    labels: o,
                    auctionId: a
                }), s = r.length;
                15 < s && E.logInfo("Current auction ".concat(u.getAuctionId(), " contains ").concat(s, " adUnits."), r), 
                i.forEach(function(e) {
                    return f.a.setLatestAuctionForAdUnit(e, u.getAuctionId());
                }), u.callBids();
            } else if (E.logMessage("No adUnits configured. No bids requested."), "function" == typeof t) try {
                t();
            } catch (e) {
                E.logError("Error executing bidsBackHandler", null, e);
            }
        }), S.requestBids.before(J, 49), S.addAdUnits = function(e) {
            E.logInfo("Invoking pbjs.addAdUnits", arguments), E.isArray(e) ? S.adUnits.push.apply(S.adUnits, e) : "object" === v(e) && S.adUnits.push(e), 
            T.emit(j);
        }, S.onEvent = function(e, t, n) {
            E.logInfo("Invoking pbjs.onEvent", arguments), E.isFn(t) ? !n || q[e].call(null, n) ? T.on(e, t, n) : E.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : E.logError('The event handler provided is not a function and was not set on event "' + e + '".');
        }, S.offEvent = function(e, t, n) {
            E.logInfo("Invoking pbjs.offEvent", arguments), n && !q[e].call(null, n) || T.off(e, t, n);
        }, S.registerBidAdapter = function(e, t) {
            E.logInfo("Invoking pbjs.registerBidAdapter", arguments);
            try {
                O.registerBidAdapter(e(), t);
            } catch (e) {
                E.logError("Error registering bidder adapter : " + e.message);
            }
        }, S.registerAnalyticsAdapter = function(e) {
            E.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
            try {
                O.registerAnalyticsAdapter(e);
            } catch (e) {
                E.logError("Error registering analytics adapter : " + e.message);
            }
        }, S.createBid = function(e) {
            return E.logInfo("Invoking pbjs.createBid", arguments), Object(g.a)(e);
        };
        var Y = [], Q = Object(c.b)("async", function(e) {
            e && !E.isEmpty(e) ? (E.logInfo("Invoking pbjs.enableAnalytics for: ", e), O.enableAnalytics(e)) : E.logError("pbjs.enableAnalytics should be called with option {}");
        }, "enableAnalyticsCb");
        function $(e) {
            e.forEach(function(e) {
                if (void 0 === e.called) try {
                    e.call(), e.called = !0;
                } catch (e) {
                    E.logError("Error processing command :", "prebid.js", e);
                }
            });
        }
        S.enableAnalytics = function(e) {
            Y.push(Q.bind(this, e));
        }, S.aliasBidder = function(e, t, n) {
            E.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? O.aliasBidAdapter(e, t, n) : E.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder");
        }, S.getAllWinningBids = function() {
            return y.a.getAllWinningBids();
        }, S.getAllPrebidWinningBids = function() {
            return y.a.getBidsReceived().filter(function(e) {
                return e.status === A.BID_STATUS.BID_TARGETING_SET;
            });
        }, S.getHighestCpmBids = function(e) {
            return f.a.getWinningBids(e);
        }, S.markWinningBidAsUsed = function(t) {
            var e = [];
            t.adUnitCode && t.adId ? e = y.a.getBidsReceived().filter(function(e) {
                return e.adId === t.adId && e.adUnitCode === t.adUnitCode;
            }) : t.adUnitCode ? e = f.a.getWinningBids(t.adUnitCode) : t.adId ? e = y.a.getBidsReceived().filter(function(e) {
                return e.adId === t.adId;
            }) : E.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."), 
            0 < e.length && (e[0].status = A.BID_STATUS.RENDERED);
        }, S.getConfig = d.b.getConfig, S.setConfig = d.b.setConfig, S.setBidderConfig = d.b.setBidderConfig, 
        S.que.push(function() {
            return Object(o.a)();
        }), S.cmd.push = function(e) {
            if ("function" == typeof e) try {
                e.call();
            } catch (e) {
                E.logError("Error processing command :", e.message, e.stack);
            } else E.logError("Commands written into pbjs.cmd.push must be wrapped in a function");
        }, S.que.push = S.cmd.push, S.processQueue = function() {
            c.b.ready(), $(S.que), $(S.cmd);
        }, t.default = S;
    },
    69: function(e, t, n) {
        "use strict";
        t.a = function(t, n) {
            o.adServers = o.adServers || {}, o.adServers[t] = o.adServers[t] || {}, Object.keys(n).forEach(function(e) {
                o.adServers[t][e] ? Object(i.logWarn)("Attempting to add an already registered function property ".concat(e, " for AdServer ").concat(t, ".")) : o.adServers[t][e] = n[e];
            });
        };
        var r = n(20), i = n(0), o = Object(r.a)();
    },
    7: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "gdprDataHandler", function() {
            return R;
        }), n.d(t, "uspDataHandler", function() {
            return k;
        }), t.setS2STestingModule = function(e) {
            I = e;
        };
        var S = n(0), p = n(91), g = n(36), l = n(1), h = n(4), A = n(3), r = n(13), i = n(12), E = n.n(i), o = n(10), O = n.n(o), b = n(67), T = n(26);
        function m(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var n = [], r = !0, i = !1, o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    i = !0, o = e;
                } finally {
                    try {
                        r || null == c.return || c.return();
                    } finally {
                        if (i) throw o;
                    }
                }
                return n;
            }(e, t) || function(e, t) {
                if (!e) return;
                if ("string" == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t);
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function v() {
            return (v = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        var I, C = n(0), j = n(5), w = n(9), y = {}, _ = y.bidderRegistry = {}, B = y.aliasRegistry = {}, x = {};
        A.b.getConfig("s2sConfig", function(e) {
            x = e.s2sConfig;
        });
        var c = {};
        var U = Object(r.b)("sync", function(e) {
            var i = e.bidderCode, s = e.auctionId, d = e.bidderRequestId, t = e.adUnits, f = e.labels, l = e.src;
            return t.reduce(function(e, c) {
                var t = Object(p.b)(Object(p.a)(c, f), c.mediaTypes, c.sizes), n = t.active, u = t.mediaTypes, r = t.filterResults;
                return n ? r && C.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '), r.before, "to ", r.after) : C.logInfo('Size mapping disabled adUnit "'.concat(c.code, '"')), 
                n && e.push(c.bids.filter(function(e) {
                    return e.bidder === i;
                }).reduce(function(e, t) {
                    var n = c.nativeParams || C.deepAccess(c, "mediaTypes.native");
                    n && (t = v({}, t, {
                        nativeParams: Object(g.g)(n)
                    })), t = v({}, t, Object(S.getDefinedParams)(c, [ "fpd", "mediaType", "renderer", "storedAuctionResponse" ]));
                    var r = Object(p.b)(Object(p.a)(t, f), u), i = r.active, o = r.mediaTypes, a = r.filterResults;
                    return i ? a && C.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '" banner sizes from '), a.before, "to ", a.after) : C.logInfo('Size mapping deactivated adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '"')), 
                    C.isValidMediaTypes(o) ? t = v({}, t, {
                        mediaTypes: o
                    }) : C.logError("mediaTypes is not correctly configured for adunit ".concat(c.code)), 
                    i && e.push(v({}, t, {
                        adUnitCode: c.code,
                        transactionId: c.transactionId,
                        sizes: C.deepAccess(o, "banner.sizes") || C.deepAccess(o, "video.playerSize") || [],
                        bidId: t.bid_id || C.getUniqueIdentifierStr(),
                        bidderRequestId: d,
                        auctionId: s,
                        src: l,
                        bidRequestsCount: b.a.getRequestsCounter(c.code),
                        bidderRequestsCount: b.a.getBidderRequestsCounter(c.code, t.bidder),
                        bidderWinsCount: b.a.getBidderWinsCounter(c.code, t.bidder)
                    })), e;
                }, [])), e;
            }, []).reduce(S.flatten, []).filter(function(e) {
                return "" !== e;
            });
        }, "getBids");
        var R = {
            consentData: null,
            setConsentData: function(e) {
                R.consentData = e;
            },
            getConsentData: function() {
                return R.consentData;
            }
        }, k = {
            consentData: null,
            setConsentData: function(e) {
                k.consentData = e;
            },
            getConsentData: function() {
                return k.consentData;
            }
        };
        function D() {
            return x && x.enabled && x.testing && I;
        }
        function u(t, n, e) {
            try {
                var r = _[t].getSpec();
                r && r[n] && "function" == typeof r[n] && (C.logInfo("Invoking ".concat(t, ".").concat(n)), 
                A.b.runWithBidder(t, S.bind.call(r[n], r, e)));
            } catch (e) {
                C.logWarn("Error calling ".concat(n, " of ").concat(t));
            }
        }
        y.makeBidRequests = Object(r.b)("sync", function(e, i, o, a, c) {
            w.emit(j.EVENTS.BEFORE_REQUEST_BIDS, e);
            var u = [], t = Object(S.getBidderCodes)(e);
            A.b.getConfig("bidderSequence") === A.a && (t = Object(S.shuffle)(t));
            var n, r, s, d, f, l, p, g = Object(T.a)(), b = t, v = [];
            x.enabled && (D() && (v = I.getSourceBidderMap(e)[I.CLIENT]), n = x.bidders, b = t.filter(function(e) {
                return !E()(n, e) || E()(v, e);
            }), Boolean(D() && x.testServerOnly) && (p = e, Boolean(O()(p, function(e) {
                return O()(e.bids, function(e) {
                    return (e.bidSource || x.bidderControl && x.bidderControl[e.bidder]) && e.finalSource === I.SERVER;
                });
            }))) && (b.length = 0), d = e, f = x.bidders, (l = C.deepClone(d)).forEach(function(e) {
                e.bids = e.bids.filter(function(e) {
                    return E()(f, e.bidder) && (!D() || e.finalSource !== I.CLIENT);
                }).map(function(e) {
                    return e.bid_id = C.getUniqueIdentifierStr(), e;
                });
            }), r = l = l.filter(function(e) {
                return 0 !== e.bids.length;
            }), s = C.generateUUID(), n.forEach(function(e) {
                var t = C.getUniqueIdentifierStr(), n = {
                    bidderCode: e,
                    auctionId: o,
                    bidderRequestId: t,
                    tid: s,
                    bids: U({
                        bidderCode: e,
                        auctionId: o,
                        bidderRequestId: t,
                        adUnits: C.deepClone(r),
                        labels: c,
                        src: j.S2S.SRC
                    }),
                    auctionStart: i,
                    timeout: x.timeout,
                    src: j.S2S.SRC,
                    refererInfo: g
                };
                0 !== n.bids.length && u.push(n);
            }), r.forEach(function(e) {
                var t = e.bids.filter(function(t) {
                    return O()(u, function(e) {
                        return O()(e.bids, function(e) {
                            return e.bidId === t.bid_id;
                        });
                    });
                });
                e.bids = t;
            }), u.forEach(function(e) {
                e.adUnitsS2SCopy = r.filter(function(e) {
                    return 0 < e.bids.length;
                });
            }));
            var y, h, m = (y = e, (h = C.deepClone(y)).forEach(function(e) {
                e.bids = e.bids.filter(function(e) {
                    return !D() || e.finalSource !== I.SERVER;
                });
            }), h = h.filter(function(e) {
                return 0 !== e.bids.length;
            }));
            return b.forEach(function(e) {
                var t = C.getUniqueIdentifierStr(), n = {
                    bidderCode: e,
                    auctionId: o,
                    bidderRequestId: t,
                    bids: U({
                        bidderCode: e,
                        auctionId: o,
                        bidderRequestId: t,
                        adUnits: C.deepClone(m),
                        labels: c,
                        src: "client"
                    }),
                    auctionStart: i,
                    timeout: a,
                    refererInfo: g
                }, r = _[e];
                r || C.logError("Trying to make a request for bidder that does not exist: ".concat(e)), 
                r && n.bids && 0 !== n.bids.length && u.push(n);
            }), R.getConsentData() && u.forEach(function(e) {
                e.gdprConsent = R.getConsentData();
            }), k.getConsentData() && u.forEach(function(e) {
                e.uspConsent = k.getConsentData();
            }), u;
        }, "makeBidRequests"), y.callBids = function(e, t, i, o, a, c, u) {
            var n, r, s, d, f, l, p, g, b, v, y;
            t.length ? (r = (n = m(t.reduce(function(e, t) {
                return e[Number(void 0 !== t.src && t.src === j.S2S.SRC)].push(t), e;
            }, [ [], [] ]), 2))[0], (s = n[1]).length && (d = Object(h.b)(c, a ? {
                request: a.request.bind(null, "s2s"),
                done: a.done
            } : void 0), f = x.bidders, l = _[x.adapter], p = s[0].tid, g = s[0].adUnitsS2SCopy, 
            l ? (b = {
                tid: p,
                ad_units: g
            }).ad_units.length && (v = s.map(function(e) {
                return e.start = Object(S.timestamp)(), o.bind(e);
            }), y = b.ad_units.reduce(function(e, t) {
                return e.concat((t.bids || []).reduce(function(e, t) {
                    return e.concat(t.bidder);
                }, []));
            }, []), C.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(f.filter(function(e) {
                return E()(y, e);
            }).join(","))), s.forEach(function(e) {
                w.emit(j.EVENTS.BID_REQUESTED, e);
            }), l.callBids(b, s, function(e, t) {
                var n = Object(S.getBidderRequest)(s, t.bidderCode, e);
                n && i.call(n, e, t);
            }, function() {
                return v.forEach(function(e) {
                    return e();
                });
            }, d)) : C.logError("missing " + x.adapter)), r.forEach(function(t) {
                t.start = Object(S.timestamp)();
                var e = _[t.bidderCode];
                C.logMessage("CALLING BIDDER ======= ".concat(t.bidderCode)), w.emit(j.EVENTS.BID_REQUESTED, t);
                var n = Object(h.b)(c, a ? {
                    request: a.request.bind(null, t.bidderCode),
                    done: a.done
                } : void 0), r = o.bind(t);
                try {
                    A.b.runWithBidder(t.bidderCode, S.bind.call(e.callBids, e, t, i.bind(t), r, n, u, A.b.callbackWithBidder(t.bidderCode)));
                } catch (e) {
                    C.logError("".concat(t.bidderCode, " Bid Adapter emitted an uncaught error when parsing their bidRequest"), {
                        e: e,
                        bidRequest: t
                    }), r();
                }
            })) : C.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?");
        }, y.videoAdapters = [], y.registerBidAdapter = function(e, t) {
            var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes, r = void 0 === n ? [] : n;
            e && t ? "function" == typeof e.callBids ? (_[t] = e, E()(r, "video") && y.videoAdapters.push(t), 
            E()(r, "native") && g.e.push(t)) : C.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : C.logError("bidAdaptor or bidderCode not specified");
        }, y.aliasBidAdapter = function(t, e, n) {
            var r, i;
            if (void 0 === _[e]) {
                var o = _[t];
                if (void 0 === o) {
                    var a = A.b.getConfig("s2sConfig"), c = a && a.bidders;
                    c && E()(c, e) ? B[e] = t : C.logError('bidderCode "' + t + '" is not an existing bidder.', "adapterManager.aliasBidAdapter");
                } else try {
                    var u, s, d, f = (r = t, i = [], E()(y.videoAdapters, r) && i.push("video"), E()(g.e, r) && i.push("native"), 
                    i);
                    o.constructor.prototype != Object.prototype ? (d = new o.constructor()).setBidderCode(e) : (u = o.getSpec(), 
                    s = n && n.gvlid, d = Object(l.newBidder)(v({}, u, {
                        code: e,
                        gvlid: s
                    })), B[e] = t), y.registerBidAdapter(d, e, {
                        supportedMediaTypes: f
                    });
                } catch (e) {
                    C.logError(t + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter");
                }
            } else C.logMessage('alias name "' + e + '" has been already specified.');
        }, y.registerAnalyticsAdapter = function(e) {
            var t = e.adapter, n = e.code, r = e.gvlid;
            t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, c[n] = {
                adapter: t,
                gvlid: r
            }) : C.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function')) : C.logError("Prebid Error: analyticsAdapter or analyticsCode not specified");
        }, y.enableAnalytics = function(e) {
            C.isArray(e) || (e = [ e ]), C._each(e, function(e) {
                var t = c[e.provider].adapter;
                t ? t.enableAnalytics(e) : C.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."));
            });
        }, y.getBidAdapter = function(e) {
            return _[e];
        }, y.getAnalyticsAdapter = function(e) {
            return c[e];
        }, y.callTimedOutBidders = function(t, n, r) {
            n = n.map(function(e) {
                return e.params = C.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = r, 
                e;
            }), n = C.groupBy(n, "bidder"), Object.keys(n).forEach(function(e) {
                u(e, "onTimeout", n[e]);
            });
        }, y.callBidWonBidder = function(e, t, n) {
            t.params = C.getUserConfiguredParams(n, t.adUnitCode, t.bidder), b.a.incrementBidderWinsCounter(t.adUnitCode, t.bidder), 
            u(e, "onBidWon", t);
        }, y.callSetTargetingBidder = function(e, t) {
            u(e, "onSetTargeting", t);
        }, t.default = y;
    },
    70: function(e, t, n) {
        var r = n(29), i = n(48), o = "".split;
        e.exports = r(function() {
            return !Object("z").propertyIsEnumerable(0);
        }) ? function(e) {
            return "String" == i(e) ? o.call(e, "") : Object(e);
        } : Object;
    },
    71: function(e, t, n) {
        var r = n(28), i = n(29), o = n(72);
        e.exports = !r && !i(function() {
            return 7 != Object.defineProperty(o("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    },
    72: function(e, t, n) {
        var r = n(22), i = n(23), o = r.document, a = i(o) && i(o.createElement);
        e.exports = function(e) {
            return a ? o.createElement(e) : {};
        };
    },
    73: function(e, t, n) {
        var r = n(16), i = n(74);
        (e.exports = function(e, t) {
            return i[e] || (i[e] = void 0 !== t ? t : {});
        })("versions", []).push({
            version: "3.6.4",
            mode: r ? "pure" : "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        });
    },
    74: function(e, t, n) {
        var r = n(22), i = n(103), o = "__core-js_shared__", a = r[o] || i(o, {});
        e.exports = a;
    },
    75: function(e, t, n) {
        var r = n(29);
        e.exports = !!Object.getOwnPropertySymbols && !r(function() {
            return !String(Symbol());
        });
    },
    76: function(e, t, n) {
        function r(c) {
            return function(e, t, n) {
                var r, i = u(e), o = s(i.length), a = d(n, o);
                if (c && t != t) {
                    for (;a < o; ) if ((r = i[a++]) != r) return !0;
                } else for (;a < o; a++) if ((c || a in i) && i[a] === t) return c || a || 0;
                return !c && -1;
            };
        }
        var u = n(47), s = n(50), d = n(107);
        e.exports = {
            includes: r(!0),
            indexOf: r(!1)
        };
    },
    77: function(e, t, n) {
        var r = n(108);
        n(131), n(133), n(135), n(137), n(139), n(140), n(141), n(142), n(143), n(144), 
        n(145), n(146), n(147), n(148), n(149), n(150), n(151), n(152), e.exports = r;
    },
    78: function(e, t, n) {
        function r(e) {
            c(e, d, {
                value: {
                    objectID: "O" + ++f,
                    weakData: {}
                }
            });
        }
        var i = n(53), o = n(23), a = n(24), c = n(31).f, u = n(59), s = n(111), d = u("meta"), f = 0, l = Object.isExtensible || function() {
            return !0;
        }, p = e.exports = {
            REQUIRED: !1,
            fastKey: function(e, t) {
                if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!a(e, d)) {
                    if (!l(e)) return "F";
                    if (!t) return "E";
                    r(e);
                }
                return e[d].objectID;
            },
            getWeakData: function(e, t) {
                if (!a(e, d)) {
                    if (!l(e)) return !0;
                    if (!t) return !1;
                    r(e);
                }
                return e[d].weakData;
            },
            onFreeze: function(e) {
                return s && p.REQUIRED && l(e) && !a(e, d) && r(e), e;
            }
        };
        i[d] = !0;
    },
    79: function(e, t, n) {
        var r = n(19), i = n(38), o = r("iterator"), a = Array.prototype;
        e.exports = function(e) {
            return void 0 !== e && (i.Array === e || a[o] === e);
        };
    },
    8: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return f;
        }), n.d(t, "d", function() {
            return l;
        }), t.a = function(e) {
            return o({
                moduleName: e,
                moduleType: "core"
            });
        }, t.b = function(e, t) {
            return o({
                gvlid: e,
                moduleName: t
            });
        };
        var r = n(13), c = n(0), i = n(12), u = n.n(i), d = [ "core", "prebid-module" ], f = [];
        function o(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : {}, i = t.gvlid, o = t.moduleName, a = t.moduleType;
            function s(n) {
                if (u()(d, a)) {
                    return n({
                        valid: !0
                    });
                }
                var r;
                return l(i, o, {
                    hasEnforcementHook: !1
                }, function(e) {
                    var t;
                    r = e && e.hasEnforcementHook ? n(e) : (t = {
                        hasEnforcementHook: !1,
                        valid: c.hasDeviceAccess()
                    }, n(t));
                }), r;
            }
            return {
                setCookie: function(i, o, a, c, u, t) {
                    function n(e) {
                        var t, n, r;
                        e && e.valid && (t = u && "" !== u ? " ;domain=".concat(encodeURIComponent(u)) : "", 
                        n = a && "" !== a ? " ;expires=".concat(a) : "", r = null != c && "none" == c.toLowerCase() ? "; Secure" : "", 
                        document.cookie = "".concat(i, "=").concat(encodeURIComponent(o)).concat(n, "; path=/").concat(t).concat(c ? "; SameSite=".concat(c) : "").concat(r));
                    }
                    if (!t || "function" != typeof t) return s(n);
                    f.push(function() {
                        var e = s(n);
                        t(e);
                    });
                },
                getCookie: function(n, t) {
                    function r(e) {
                        if (e && e.valid) {
                            var t = window.document.cookie.match("(^|;)\\s*" + n + "\\s*=\\s*([^;]*)\\s*(;|$)");
                            return t ? decodeURIComponent(t[2]) : null;
                        }
                        return null;
                    }
                    if (!t || "function" != typeof t) return s(r);
                    f.push(function() {
                        var e = s(r);
                        t(e);
                    });
                },
                localStorageIsEnabled: function(t) {
                    function n(e) {
                        if (e && e.valid) try {
                            return localStorage.setItem("prebid.cookieTest", "1"), "1" === localStorage.getItem("prebid.cookieTest");
                        } catch (e) {}
                        return !1;
                    }
                    if (!t || "function" != typeof t) return s(n);
                    f.push(function() {
                        var e = s(n);
                        t(e);
                    });
                },
                cookiesAreEnabled: function(t) {
                    function n(e) {
                        return !(!e || !e.valid) && (!!c.checkCookieSupport() || (window.document.cookie = "prebid.cookieTest", 
                        -1 !== window.document.cookie.indexOf("prebid.cookieTest")));
                    }
                    if (!t || "function" != typeof t) return s(n);
                    f.push(function() {
                        var e = s(n);
                        t(e);
                    });
                },
                setDataInLocalStorage: function(t, n, r) {
                    function i(e) {
                        e && e.valid && window.localStorage.setItem(t, n);
                    }
                    if (!r || "function" != typeof r) return s(i);
                    f.push(function() {
                        var e = s(i);
                        r(e);
                    });
                },
                getDataFromLocalStorage: function(t, n) {
                    function r(e) {
                        return e && e.valid ? window.localStorage.getItem(t) : null;
                    }
                    if (!n || "function" != typeof n) return s(r);
                    f.push(function() {
                        var e = s(r);
                        n(e);
                    });
                },
                removeDataFromLocalStorage: function(t, n) {
                    function r(e) {
                        e && e.valid && window.localStorage.removeItem(t);
                    }
                    if (!n || "function" != typeof n) return s(r);
                    f.push(function() {
                        var e = s(r);
                        n(e);
                    });
                },
                hasLocalStorage: function(t) {
                    function n(e) {
                        if (e && e.valid) try {
                            return !!window.localStorage;
                        } catch (e) {
                            c.logError("Local storage api disabled");
                        }
                        return !1;
                    }
                    if (!t || "function" != typeof t) return s(n);
                    f.push(function() {
                        var e = s(n);
                        t(e);
                    });
                },
                findSimilarCookies: function(o, t) {
                    function n(e) {
                        if (e && e.valid) {
                            var t = [];
                            if (c.hasDeviceAccess()) for (var n = document.cookie.split(";"); n.length; ) {
                                var r = n.pop(), i = (i = r.indexOf("=")) < 0 ? r.length : i;
                                0 <= decodeURIComponent(r.slice(0, i).replace(/^\s+/, "")).indexOf(o) && t.push(decodeURIComponent(r.slice(i + 1)));
                            }
                            return t;
                        }
                    }
                    if (!t || "function" != typeof t) return s(n);
                    f.push(function() {
                        var e = s(n);
                        t(e);
                    });
                }
            };
        }
        var l = Object(r.b)("async", function(e, t, n, r) {
            r(n);
        }, "validateStorageEnforcement");
    },
    80: function(e, t, n) {
        var o = n(15);
        e.exports = function(t, e, n, r) {
            try {
                return r ? e(o(n)[0], n[1]) : e(n);
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && o(i.call(t)), e;
            }
        };
    },
    81: function(e, t) {
        e.exports = function(e, t, n) {
            if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return e;
        };
    },
    82: function(e, t, n) {
        function r() {}
        function i(e) {
            return "<script>" + e + "</" + g + ">";
        }
        var o, a = n(15), c = n(116), u = n(83), s = n(53), d = n(119), f = n(72), l = n(65), p = "prototype", g = "script", b = l("IE_PROTO"), v = function() {
            try {
                o = document.domain && new ActiveXObject("htmlfile");
            } catch (e) {}
            var e, t;
            v = o ? function(e) {
                e.write(i("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t;
            }(o) : ((t = f("iframe")).style.display = "none", d.appendChild(t), t.src = String("javascript:"), 
            (e = t.contentWindow.document).open(), e.write(i("document.F=Object")), e.close(), 
            e.F);
            for (var n = u.length; n--; ) delete v[p][u[n]];
            return v();
        };
        s[b] = !0, e.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (r[p] = a(e), n = new r(), r[p] = null, n[b] = e) : n = v(), 
            void 0 === t ? n : c(n, t);
        };
    },
    83: function(e, t) {
        e.exports = [ "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ];
    },
    84: function(e, t, n) {
        var i = n(30);
        e.exports = function(e, t, n, r) {
            r && r.enumerable ? e[t] = n : i(e, t, n);
        };
    },
    842: function(e, t, n) {
        e.exports = n(68);
    },
    85: function(e, t, n) {
        "use strict";
        var r, i, o, a = n(86), c = n(30), u = n(24), s = n(19), d = n(16), f = s("iterator"), l = !1;
        [].keys && ("next" in (o = [].keys()) ? (i = a(a(o))) !== Object.prototype && (r = i) : l = !0), 
        null == r && (r = {}), d || u(r, f) || c(r, f, function() {
            return this;
        }), e.exports = {
            IteratorPrototype: r,
            BUGGY_SAFARI_ITERATORS: l
        };
    },
    86: function(e, t, n) {
        var r = n(24), i = n(57), o = n(65), a = n(122), c = o("IE_PROTO"), u = Object.prototype;
        e.exports = a ? Object.getPrototypeOf : function(e) {
            return e = i(e), r(e, c) ? e[c] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? u : null;
        };
    },
    87: function(e, t, n) {
        "use strict";
        var i = n(127).charAt, r = n(54), o = n(66), a = "String Iterator", c = r.set, u = r.getterFor(a);
        o(String, "String", function(e) {
            c(this, {
                type: a,
                string: String(e),
                index: 0
            });
        }, function() {
            var e, t = u(this), n = t.string, r = t.index;
            return r >= n.length ? {
                value: void 0,
                done: !0
            } : (e = i(n, r), t.index += e.length, {
                value: e,
                done: !1
            });
        });
    },
    88: function(e, t, n) {
        var r = n(15), i = n(61);
        e.exports = function(e) {
            var t = i(e);
            if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
            return r(t.call(e));
        };
    },
    89: function(e, t, n) {
        var r = n(153);
        e.exports = r;
    },
    9: function(e, t, n) {
        function r() {
            return (r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        var c, i, u = n(0), o = n(5), a = Array.prototype.slice, s = Array.prototype.push, d = u._map(o.EVENTS, function(e) {
            return e;
        }), f = o.EVENT_ID_PATHS, l = [];
        e.exports = (c = {}, (i = {}).on = function(e, t, n) {
            var r, i;
            i = e, u.contains(d, i) ? (r = c[e] || {
                que: []
            }, n ? (r[n] = r[n] || {
                que: []
            }, r[n].que.push(t)) : r.que.push(t), c[e] = r) : u.logError("Wrong event name : " + e + " Valid event names :" + d);
        }, i.emit = function(e) {
            !function(e, t) {
                u.logMessage("Emitting event for: " + e);
                var n = t[0] || {}, r = n[f[e]], i = c[e] || {
                    que: []
                }, o = u._map(i, function(e, t) {
                    return t;
                }), a = [];
                l.push({
                    eventType: e,
                    args: n,
                    id: r
                }), r && u.contains(o, r) && s.apply(a, i[r].que), s.apply(a, i.que), u._each(a, function(e) {
                    if (e) try {
                        e.apply(null, t);
                    } catch (e) {
                        u.logError("Error executing handler:", "events.js", e);
                    }
                });
            }(e, a.call(arguments, 1));
        }, i.off = function(e, n, r) {
            var i = c[e];
            u.isEmpty(i) || u.isEmpty(i.que) && u.isEmpty(i[r]) || r && (u.isEmpty(i[r]) || u.isEmpty(i[r].que)) || (r ? u._each(i[r].que, function(e) {
                var t = i[r].que;
                e === n && t.splice(t.indexOf(e), 1);
            }) : u._each(i.que, function(e) {
                var t = i.que;
                e === n && t.splice(t.indexOf(e), 1);
            }), c[e] = i);
        }, i.get = function() {
            return c;
        }, i.getEvents = function() {
            var n = [];
            return u._each(l, function(e) {
                var t = r({}, e);
                n.push(t);
            }), n;
        }, i);
    },
    90: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = e;
            return {
                callBids: function() {},
                setBidderCode: function(e) {
                    t = e;
                },
                getBidderCode: function() {
                    return t;
                }
            };
        };
    },
    91: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (e.labelAll) return {
                labelAll: !0,
                labels: e.labelAll,
                activeLabels: t
            };
            return {
                labelAll: !1,
                labels: e.labelAny,
                activeLabels: t
            };
        }, t.c = function(e) {
            var t = v(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : b);
            return !t.shouldFilter || !!t.sizesSupported[e];
        }, t.b = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.labels, n = void 0 === t ? [] : t, r = e.labelAll, i = void 0 !== r && r, o = e.activeLabels, a = void 0 === o ? [] : o, c = 1 < arguments.length ? arguments[1] : void 0, u = 2 < arguments.length ? arguments[2] : void 0, s = v(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : b);
            c = Object(p.isPlainObject)(c) ? Object(p.deepClone)(c) : u ? {
                banner: {
                    sizes: u
                }
            } : {};
            var d = Object(p.deepAccess)(c, "banner.sizes");
            s.shouldFilter && d && (c.banner.sizes = d.filter(function(e) {
                return s.sizesSupported[e];
            }));
            var f = Object.keys(c), l = {
                active: f.every(function(e) {
                    return "banner" !== e;
                }) || f.some(function(e) {
                    return "banner" === e;
                }) && 0 < Object(p.deepAccess)(c, "banner.sizes.length") && (0 === n.length || !i && (n.some(function(e) {
                    return s.labels[e];
                }) || n.some(function(e) {
                    return g()(a, e);
                })) || i && n.reduce(function(e, t) {
                    return e ? s.labels[t] || g()(a, t) : e;
                }, !0)),
                mediaTypes: c
            };
            d && d.length !== c.banner.sizes.length && (l.filterResults = {
                before: d,
                after: c.banner.sizes
            });
            return l;
        };
        var r = n(3), p = n(0), i = n(12), g = n.n(i);
        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        var b = [];
        function v(e) {
            return e.reduce(function(n, r) {
                if ("object" === o(r) && "string" == typeof r.mediaQuery) {
                    var t = !1;
                    if ("" === r.mediaQuery) t = !0; else try {
                        t = Object(p.getWindowTop)().matchMedia(r.mediaQuery).matches;
                    } catch (e) {
                        Object(p.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), 
                        t = matchMedia(r.mediaQuery).matches;
                    }
                    t && (Array.isArray(r.sizesSupported) && (n.shouldFilter = !0), [ "labels", "sizesSupported" ].forEach(function(t) {
                        return (r[t] || []).forEach(function(e) {
                            return n[t][e] = !0;
                        });
                    }));
                } else Object(p.logWarn)('sizeConfig rule missing required property "mediaQuery"');
                return n;
            }, {
                labels: {},
                sizesSupported: {},
                shouldFilter: !1
            });
        }
        r.b.getConfig("sizeConfig", function(e) {
            return t = e.sizeConfig, void (b = t);
            var t;
        });
    },
    92: function(e, t, n) {
        var r = n(215);
        e.exports = r;
    },
    93: function(e, t, n) {
        "use strict";
        t.b = function(e, t, n) {
            var r = {
                puts: e.map(c, n)
            };
            Object(i.a)(o.b.getConfig("cache.url"), function(n) {
                return {
                    success: function(e) {
                        var t;
                        try {
                            t = JSON.parse(e).responses;
                        } catch (e) {
                            return void n(e, []);
                        }
                        t ? n(null, t) : n(new Error("The cache server didn't respond with a responses property."), []);
                    },
                    error: function(e, t) {
                        n(new Error("Error storing video ad in the cache: ".concat(e, ": ").concat(JSON.stringify(t))), []);
                    }
                };
            }(t), JSON.stringify(r), {
                contentType: "text/plain",
                withCredentials: !0
            });
        }, t.a = function(e) {
            return "".concat(o.b.getConfig("cache.url"), "?uuid=").concat(e);
        };
        var i = n(4), o = n(3), a = n(0);
        function c(e) {
            var t, n, r, i = {
                type: "xml",
                value: e.vastXml ? e.vastXml : (t = e.vastUrl, n = e.vastImpUrl, r = n ? "<![CDATA[".concat(n, "]]>") : "", 
                '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(t, "]]></VASTAdTagURI>\n        <Impression>").concat(r, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")),
                ttlseconds: Number(e.ttl)
            };
            return o.b.getConfig("cache.vasttrack") && (i.bidder = e.bidder, i.bidid = e.requestId, 
            a.isPlainObject(this) && this.hasOwnProperty("auctionStart") && (i.timestamp = this.auctionStart)), 
            "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (i.key = e.customCacheKey), 
            i;
        }
    },
    96: function(e, t, n) {
        n(97);
        var r = n(52);
        e.exports = r("Array", "find");
    },
    97: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(56).find, o = n(51), a = n(60), c = "find", u = !0, s = a(c);
        c in [] && Array(1).find(function() {
            u = !1;
        }), r({
            target: "Array",
            proto: !0,
            forced: u || !s
        }, {
            find: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0);
            }
        }), o(c);
    },
    98: function(e, t, n) {
        var r = n(28), i = n(99), o = n(46), a = n(47), c = n(55), u = n(24), s = n(71), d = Object.getOwnPropertyDescriptor;
        t.f = r ? d : function(e, t) {
            if (e = a(e), t = c(t, !0), s) try {
                return d(e, t);
            } catch (e) {}
            if (u(e, t)) return o(!i.f.call(e, t), e[t]);
        };
    },
    99: function(e, t, n) {
        "use strict";
        var r = {}.propertyIsEnumerable, i = Object.getOwnPropertyDescriptor, o = i && !r.call({
            1: 2
        }, 1);
        t.f = o ? function(e) {
            var t = i(this, e);
            return !!t && t.enumerable;
        } : r;
    }
});

pbjsChunk([ 322 ], {
    183: function(e, r, n) {
        e.exports = n(184);
    },
    184: function(e, r, n) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), n.d(r, "spec", function() {
            return d;
        });
        var t = n(1), I = n(3), g = n(2), h = n(11), _ = n(0), C = "adform", d = {
            code: C,
            gvlid: 50,
            supportedMediaTypes: [ g.b, g.d ],
            isBidRequestValid: function(e) {
                return !!e.params.mid;
            },
            buildRequests: function(e, r) {
                for (var n, t, d, s, i, o, u, a, p = I.b.getConfig("currency.adServerCurrency"), c = function(e) {
                    if (_.isArray(e) && 0 < e.length) {
                        var r = function(e) {
                            return e.reduce(function(n, e) {
                                var t = e.source;
                                return n[t] = n[t] || {}, e.uids.forEach(function(e) {
                                    var r = e.id + "";
                                    n[t][r] = n[t][r] || [], n[t][r].push(e.atype);
                                }), n;
                            }, {});
                        }(e);
                        return encodeURIComponent(btoa(JSON.stringify(r)));
                    }
                }(_.deepAccess(e, "0.userIdAsEids")), g = [], h = [ [ "adxDomain", "adx.adform.net" ], [ "fd", 1 ], [ "url", null ], [ "tid", null ] ], f = JSON.parse(JSON.stringify(e)), l = f[0] && f[0].bidder || C, v = 0, b = f.length; v < b; v++) {
                    for ("net" !== (d = f[v]).params.priceType && "net" !== d.params.pt || (u = "net"), 
                    n = 0, t = h.length; n < t; n++) (i = d[s = h[n][0]] || d.params[s]) && (d[s] = d.params[s] = null, 
                    h[n][1] = i);
                    (o = d.params).transactionId = d.transactionId, o.rcur = o.rcur || p, g.push(function(e) {
                        var r, n = [];
                        for (r in e) e.hasOwnProperty(r) && e[r] && n.push(r, "=", e[r], "&");
                        return encodeURIComponent(btoa(n.join("").slice(0, -1)));
                    }(o));
                }
                g.unshift("https://" + h[0][1] + "/adx/?rp=4"), u = u || "gross", g.push("pt=" + u), 
                g.push("stid=" + e[0].auctionId);
                var m = _.deepAccess(r, "gdprConsent.gdprApplies"), y = _.deepAccess(r, "gdprConsent.consentString");
                for (void 0 !== m && (a = {
                    gdpr: m,
                    gdpr_consent: y
                }, g.push("gdpr=" + (1 & m)), g.push("gdpr_consent=" + y)), r && r.uspConsent && g.push("us_privacy=" + r.uspConsent), 
                c && g.push("eids=" + c), v = 1, b = h.length; v < b; v++) s = h[v][0], (i = h[v][1]) && g.push(s + "=" + encodeURIComponent(i));
                return {
                    method: "GET",
                    url: g.join("&"),
                    bids: e,
                    netRevenue: u,
                    bidder: l,
                    gdpr: a
                };
            },
            interpretResponse: function(e, r) {
                for (var n, t, d, s, i = {
                    banner: 1,
                    vast_content: 1,
                    vast_url: 1
                }, o = [], u = r.bids, a = e.body, p = 0; p < a.length; p++) s = "banner" === (t = a[p]).response ? g.b : g.d, 
                d = u[p], i[t.response] && (function(e, r) {
                    for (var n = 0, t = r.length; n < t; n++) if (e.width == r[n][0] && e.height == r[n][1]) return !0;
                    return !1;
                }(t, _.getAdUnitSizes(d)) || s === g.d) && (n = {
                    requestId: d.bidId,
                    cpm: t.win_bid,
                    width: t.width,
                    height: t.height,
                    creativeId: d.bidId,
                    dealId: t.deal_id,
                    currency: t.win_cur,
                    netRevenue: "gross" !== r.netRevenue,
                    ttl: 360,
                    ad: t.banner,
                    bidderCode: r.bidder,
                    transactionId: d.transactionId,
                    vastUrl: t.vast_url,
                    vastXml: t.vast_content,
                    mediaType: s
                }, d.renderer || s !== g.d || "outstream" !== _.deepAccess(d, "mediaTypes.video.context") || (n.renderer = h.a.install({
                    id: d.bidId,
                    url: "https://s2.adform.net/banners/scripts/video/outstream/render.js"
                }), n.renderer.setRender(c)), r.gdpr && (n.gdpr = r.gdpr.gdpr, n.gdpr_consent = r.gdpr.gdpr_consent), 
                o.push(n));
                return o;
                function c(e) {
                    e.renderer.push(function() {
                        window.Adform.renderOutstream(e);
                    });
                }
            }
        };
        Object(t.registerBidder)(d);
    }
}, [ 183 ]);

pbjsChunk([ 289 ], {
    265: function(e, r, t) {
        e.exports = t(266);
    },
    266: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "spec", function() {
            return R;
        });
        var f = t(11), k = t(0), I = t(3), g = t(1), v = t(2), c = t(27), a = t(10), x = t.n(a), n = t(12), A = t.n(n), y = t(33), i = t(8);
        function s(e) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function b() {
            return (b = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                }
                return e;
            }).apply(this, arguments);
        }
        function C(e) {
            return function(e) {
                if (Array.isArray(e)) return o(e);
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
            }(e) || function(e, r) {
                if (!e) return;
                if ("string" == typeof e) return o(e, r);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === t && e.constructor && (t = e.constructor.name);
                if ("Map" === t || "Set" === t) return Array.from(e);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return o(e, r);
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function o(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var t = 0, a = new Array(r); t < r; t++) a[t] = e[t];
            return a;
        }
        var d = "appnexus", w = "https://ib.adnxs.com/ut/v3/prebid", p = [ "id", "minduration", "maxduration", "skippable", "playback_method", "frameworks", "context", "skipoffset" ], S = [ "age", "externalUid", "segments", "gender", "dnt", "language" ], T = [ "geo", "device_id" ], E = [ "enabled", "dongle", "member_id", "debug_timeout" ], u = {
            playback_method: {
                unknown: 0,
                auto_play_sound_on: 1,
                auto_play_sound_off: 2,
                click_to_play: 3,
                mouse_over: 4,
                auto_play_sound_unknown: 5
            },
            context: {
                unknown: 0,
                pre_roll: 1,
                mid_roll: 2,
                post_roll: 3,
                outstream: 4,
                "in-banner": 5
            }
        }, l = {
            body: "description",
            body2: "desc2",
            cta: "ctatext",
            image: {
                serverName: "main_image",
                requiredParams: {
                    required: !0
                }
            },
            icon: {
                serverName: "icon",
                requiredParams: {
                    required: !0
                }
            },
            sponsoredBy: "sponsored_by",
            privacyLink: "privacy_link",
            salePrice: "saleprice",
            displayUrl: "displayurl"
        }, m = "<script", h = /\/\/cdn\.adnxs\.com\/v/, _ = "trk.js", O = Object(i.b)(32, d), R = {
            code: d,
            gvlid: 32,
            aliases: [ {
                code: "appnexusAst",
                gvlid: 32
            }, {
                code: "brealtime"
            }, {
                code: "emxdigital",
                gvlid: 183
            }, {
                code: "pagescience"
            }, {
                code: "defymedia"
            }, {
                code: "gourmetads"
            }, {
                code: "matomy"
            }, {
                code: "featureforward"
            }, {
                code: "oftmedia"
            }, {
                code: "districtm",
                gvlid: 144
            }, {
                code: "adasta"
            }, {
                code: "beintoo",
                gvlid: 618
            } ],
            supportedMediaTypes: [ v.b, v.d, v.c ],
            isBidRequestValid: function(e) {
                return !!(e.params.placementId || e.params.member && e.params.invCode);
            },
            buildRequests: function(e, r) {
                var a = e.map(N), t = x()(e, M), n = {};
                !0 === I.b.getConfig("coppa") && (n = {
                    coppa: !0
                }), t && Object.keys(t.params.user).filter(function(e) {
                    return A()(S, e);
                }).forEach(function(e) {
                    var r = k.convertCamelToUnderscore(e);
                    n[r] = t.params.user[e];
                });
                var i, s = x()(e, D);
                s && s.params && s.params.app && (i = {}, Object.keys(s.params.app).filter(function(e) {
                    return A()(T, e);
                }).forEach(function(e) {
                    return i[e] = s.params.app[e];
                }));
                var o, d = x()(e, B);
                d && d.params && s.params.app && s.params.app.id && (o = {
                    appid: d.params.app.id
                });
                var c = {}, p = {}, u = O.getCookie("apn_prebid_debug") || null;
                if (u) try {
                    c = JSON.parse(u);
                } catch (e) {
                    k.logError("AppNexus Debug Auction Cookie Error:\n\n" + e);
                } else {
                    var l = x()(e, V);
                    l && l.debug && (c = l.debug);
                }
                c && c.enabled && Object.keys(c).filter(function(e) {
                    return A()(E, e);
                }).forEach(function(e) {
                    p[e] = c[e];
                });
                var m, f = x()(e, z), g = f ? parseInt(f.params.member, 10) : 0, v = e[0].schain, y = {
                    tags: C(a),
                    user: n,
                    sdk: {
                        source: "pbjs",
                        version: "4.4.0"
                    },
                    schain: v
                };
                0 < g && (y.member_id = g), s && (y.device = i), d && (y.app = o), I.b.getConfig("adpod.brandCategoryExclusion") && (y.brand_category_uniqueness = !0), 
                p.enabled && (y.debug = p, k.logInfo("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(p, null, 4))), 
                r && r.gdprConsent && (y.gdpr_consent = {
                    consent_string: r.gdprConsent.consentString,
                    consent_required: r.gdprConsent.gdprApplies
                }), r && r.uspConsent && (y.us_privacy = r.uspConsent), r && r.refererInfo && (m = {
                    rd_ref: encodeURIComponent(r.refererInfo.referer),
                    rd_top: r.refererInfo.reachedTop,
                    rd_ifs: r.refererInfo.numIframes,
                    rd_stk: r.refererInfo.stack.map(function(e) {
                        return encodeURIComponent(e);
                    }).join(",")
                }, y.referrer_detection = m), x()(e, J) && e.filter(J).forEach(function(r) {
                    var e = function(e, r) {
                        var t = r.mediaTypes.video, a = t.durationRangeSec, n = t.requireExactDuration, i = function(e) {
                            var r = e.adPodDurationSec, t = e.durationRangeSec, a = e.requireExactDuration, n = k.getMinValueFromArray(t), i = Math.floor(r / n);
                            return a ? Math.max(i, t.length) : i;
                        }(r.mediaTypes.video), s = k.getMaxValueFromArray(a), o = e.filter(function(e) {
                            return e.uuid === r.bidId;
                        }), d = k.fill.apply(k, C(o).concat([ i ]));
                        {
                            var c, p;
                            n ? (c = Math.ceil(i / a.length), p = k.chunk(d, c), a.forEach(function(r, e) {
                                p[e].map(function(e) {
                                    W(e, "minduration", r), W(e, "maxduration", r);
                                });
                            })) : d.map(function(e) {
                                return W(e, "maxduration", s);
                            });
                        }
                        return d;
                    }(a, r), t = y.tags.filter(function(e) {
                        return e.uuid !== r.bidId;
                    });
                    y.tags = [].concat(C(t), C(e));
                });
                var b = [], h = k.deepAccess(e[0], "userId.criteoId");
                h && b.push({
                    source: "criteo.com",
                    id: h
                });
                var _ = k.deepAccess(e[0], "userId.tdid");
                return _ && b.push({
                    source: "adserver.org",
                    id: _,
                    rti_partner: "TDID"
                }), b.length && (y.eids = b), a[0].publisher_id && (y.publisher_id = a[0].publisher_id), 
                function(e, t) {
                    var a = [], n = {};
                    !function(e) {
                        var r = !0;
                        e && e.gdprConsent && e.gdprConsent.gdprApplies && 2 === e.gdprConsent.apiVersion && (r = !(!0 !== k.deepAccess(e.gdprConsent, "vendorData.purpose.consents.1")));
                        return r;
                    }(t) && (n = {
                        withCredentials: !1
                    });
                    {
                        var i, r;
                        15 < e.tags.length ? (i = k.deepClone(e), k.chunk(e.tags, 15).forEach(function(e) {
                            i.tags = e;
                            var r = JSON.stringify(i);
                            a.push({
                                method: "POST",
                                url: w,
                                data: r,
                                bidderRequest: t,
                                options: n
                            });
                        })) : (r = JSON.stringify(e), a = {
                            method: "POST",
                            url: w,
                            data: r,
                            bidderRequest: t,
                            options: n
                        });
                    }
                    return a;
                }(y, r);
            },
            interpretResponse: function(e, r) {
                var i = this, s = r.bidderRequest;
                e = e.body;
                var t, o = [];
                if (e && !e.error) return e.tags && e.tags.forEach(function(e) {
                    var r, t, a, n = (r = e) && r.ads && r.ads.length && x()(r.ads, function(e) {
                        return e.rtb;
                    });
                    n && 0 !== n.cpm && A()(i.supportedMediaTypes, n.ad_type) && ((t = function(r, e, t) {
                        var a = k.getBidRequest(r.uuid, [ t ]), n = {
                            requestId: r.uuid,
                            cpm: e.cpm,
                            creativeId: e.creative_id,
                            dealId: e.deal_id,
                            currency: "USD",
                            netRevenue: !0,
                            ttl: 300,
                            adUnitCode: a.adUnitCode,
                            appnexus: {
                                buyerMemberId: e.buyer_member_id,
                                dealPriority: e.deal_priority,
                                dealCode: e.deal_code
                            }
                        };
                        e.advertiser_id && (n.meta = b({}, n.meta, {
                            advertiserId: e.advertiser_id
                        }));
                        if (e.rtb.video) {
                            var i, s;
                            switch (b(n, {
                                width: e.rtb.video.player_width,
                                height: e.rtb.video.player_height,
                                vastImpUrl: e.notify_url,
                                ttl: 3600
                            }), k.deepAccess(a, "mediaTypes.video.context")) {
                              case v.a:
                                var o = Object(g.getIabSubCategory)(a.bidder, e.brand_category_id);
                                n.meta = b({}, n.meta, {
                                    primaryCatId: o
                                });
                                var d = e.deal_priority;
                                n.video = {
                                    context: v.a,
                                    durationSeconds: Math.floor(e.rtb.video.duration_ms / 1e3),
                                    dealTier: d
                                }, n.vastUrl = e.rtb.video.asset_url;
                                break;

                              case y.b:
                                n.adResponse = r, n.adResponse.ad = n.adResponse.ads[0], n.adResponse.ad.video = n.adResponse.ad.rtb.video, 
                                n.vastXml = e.rtb.video.content, e.renderer_url && (i = x()(t.bids, function(e) {
                                    return e.bidId === r.uuid;
                                }), s = k.deepAccess(i, "renderer.options"), n.renderer = function(e, r) {
                                    var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, a = f.a.install({
                                        id: r.renderer_id,
                                        url: r.renderer_url,
                                        config: t,
                                        loaded: !1,
                                        adUnitCode: e
                                    });
                                    try {
                                        a.setRender(F);
                                    } catch (e) {
                                        k.logWarn("Prebid Error calling setRender on renderer", e);
                                    }
                                    return a.setEventHandlers({
                                        impression: function() {
                                            return k.logMessage("AppNexus outstream video impression event");
                                        },
                                        loaded: function() {
                                            return k.logMessage("AppNexus outstream video loaded event");
                                        },
                                        ended: function() {
                                            k.logMessage("AppNexus outstream renderer video event"), document.querySelector("#".concat(e)).style.display = "none";
                                        }
                                    }), a;
                                }(n.adUnitCode, e, s));
                                break;

                              case y.a:
                                n.vastUrl = e.notify_url + "&redir=" + encodeURIComponent(e.rtb.video.asset_url);
                            }
                        } else if (e.rtb[v.c]) {
                            var c = e.rtb[v.c], p = e.viewability.config.replace("src=", "data-src="), u = c.javascript_trackers;
                            null == u ? u = p : k.isStr(u) ? u = [ u, p ] : u.push(p), n[v.c] = {
                                title: c.title,
                                body: c.desc,
                                body2: c.desc2,
                                cta: c.ctatext,
                                rating: c.rating,
                                sponsoredBy: c.sponsored,
                                privacyLink: c.privacy_link,
                                address: c.address,
                                downloads: c.downloads,
                                likes: c.likes,
                                phone: c.phone,
                                price: c.price,
                                salePrice: c.saleprice,
                                clickUrl: c.link.url,
                                displayUrl: c.displayurl,
                                clickTrackers: c.link.click_trackers,
                                impressionTrackers: c.impression_trackers,
                                javascriptTrackers: u
                            }, c.main_img && (n.native.image = {
                                url: c.main_img.url,
                                height: c.main_img.height,
                                width: c.main_img.width
                            }), c.icon && (n.native.icon = {
                                url: c.icon.url,
                                height: c.icon.height,
                                width: c.icon.width
                            });
                        } else {
                            b(n, {
                                width: e.rtb.banner.width,
                                height: e.rtb.banner.height,
                                ad: e.rtb.banner.content
                            });
                            try {
                                var l, m;
                                e.rtb.trackers && (l = e.rtb.trackers[0].impression_urls[0], m = k.createTrackPixelHtml(l), 
                                n.ad += m);
                            } catch (e) {
                                k.logError("Error appending tracking pixel", e);
                            }
                        }
                        return n;
                    }(e, n, s)).mediaType = (a = n.ad_type) === v.d ? v.d : a === v.c ? v.c : v.b, o.push(t));
                }), e.debug && e.debug.debug_info && (t = (t = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info).replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""), 
                k.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"), 
                k.logMessage(t)), o;
                var a = "in response for ".concat(s.bidderCode, " adapter");
                return e && e.error && (a += ": ".concat(e.error)), k.logError(a), o;
            },
            getMappingFileInfo: function() {
                return {
                    url: "https://acdn.adnxs.com/prebid/appnexus-mapping/mappings.json",
                    refreshInDays: 2
                };
            },
            getUserSyncs: function(e) {
                if (e.iframeEnabled) return [ {
                    type: "iframe",
                    url: "https://acdn.adnxs.com/dmp/async_usersync.html"
                } ];
            },
            transformBidParams: function(t, e) {
                return t = k.convertTypes({
                    member: "string",
                    invCode: "string",
                    placementId: "number",
                    keywords: k.transformBidderParamKeywords,
                    publisherId: "number"
                }, t), e && (t.use_pmt_rule = "boolean" == typeof t.usePaymentRule && t.usePaymentRule, 
                t.usePaymentRule && delete t.usePaymentRule, j(t.keywords) && t.keywords.forEach(P), 
                Object.keys(t).forEach(function(e) {
                    var r = k.convertCamelToUnderscore(e);
                    r !== e && (t[r] = t[e], delete t[e]);
                })), t;
            },
            onBidWon: function(e) {
                e.native && function(e) {
                    var r = function(e) {
                        var r;
                        if (k.isStr(e) && U(e)) r = e; else if (k.isArray(e)) for (var t = 0; t < e.length; t++) {
                            var a = e[t];
                            U(a) && (r = a);
                        }
                        return r;
                    }(e.native.javascriptTrackers);
                    if (r) for (var t = "pbjs_adid=" + e.adId + ";pbjs_auc=" + e.adUnitCode, a = function(e) {
                        var r = e.indexOf('src="') + 5, t = e.indexOf('"', r);
                        return e.substring(r, t);
                    }(r), n = a.replace("dom_id=%native_dom_id%", t), i = document.getElementsByTagName("iframe"), s = !1, o = 0; o < i.length && !s; o++) {
                        var d = i[o];
                        try {
                            var c = d.contentDocument || d.contentWindow.document;
                            if (c) for (var p = c.getElementsByTagName("script"), u = 0; u < p.length && !s; u++) {
                                var l = p[u];
                                l.getAttribute("data-src") == a && (l.setAttribute("src", n), l.setAttribute("data-src", ""), 
                                l.removeAttribute && l.removeAttribute("data-src"), s = !0);
                            }
                        } catch (e) {
                            if (!(e instanceof DOMException && "SecurityError" === e.name)) throw e;
                        }
                    }
                }(e);
            }
        };
        function j(e) {
            return k.isArray(e) && 0 < e.length;
        }
        function P(e) {
            j(e.value) && "" === e.value[0] && delete e.value;
        }
        function U(e) {
            var r = e.match(h), t = null != r && 1 <= r.length, a = e.match(_), n = null != a && 1 <= a.length;
            return e.startsWith(m) && n && t;
        }
        function N(t) {
            var e, r, n, i, a = {};
            a.sizes = q(t.sizes), a.primary_size = a.sizes[0], a.ad_types = [], a.uuid = t.bidId, 
            t.params.placementId ? a.id = parseInt(t.params.placementId, 10) : a.code = t.params.invCode, 
            a.allow_smaller_sizes = t.params.allowSmallerSizes || !1, a.use_pmt_rule = t.params.usePaymentRule || !1, 
            a.prebid = !0, a.disable_psa = !0, t.params.reserve && (a.reserve = t.params.reserve), 
            t.params.position && (a.position = {
                above: 1,
                below: 2
            }[t.params.position] || 0), t.params.trafficSourceCode && (a.traffic_source_code = t.params.trafficSourceCode), 
            t.params.privateSizes && (a.private_sizes = q(t.params.privateSizes)), t.params.supplyType && (a.supply_type = t.params.supplyType), 
            t.params.pubClick && (a.pubclick = t.params.pubClick), t.params.extInvCode && (a.ext_inv_code = t.params.extInvCode), 
            t.params.publisherId && (a.publisher_id = parseInt(t.params.publisherId, 10)), t.params.externalImpId && (a.external_imp_id = t.params.externalImpId), 
            k.isEmpty(t.params.keywords) || (0 < (e = k.transformBidderParamKeywords(t.params.keywords)).length && e.forEach(P), 
            a.keywords = e), t.mediaType !== v.c && !k.deepAccess(t, "mediaTypes.".concat(v.c)) || (a.ad_types.push(v.c), 
            0 === a.sizes.length && (a.sizes = q([ 1, 1 ])), t.nativeParams && (n = t.nativeParams, 
            i = {}, Object.keys(n).forEach(function(e) {
                var r, t = l[e] && l[e].serverName || l[e] || e, a = l[e] && l[e].requiredParams;
                i[t] = b({}, a, n[e]), t !== l.image.serverName && t !== l.icon.serverName || !i[t].sizes || (r = i[t].sizes, 
                (k.isArrayOfNums(r) || k.isArray(r) && 0 < r.length && r.every(function(e) {
                    return k.isArrayOfNums(e);
                })) && (i[t].sizes = q(i[t].sizes))), t === l.privacyLink && (i.privacy_supported = !0);
            }), r = i, a[v.c] = {
                layouts: [ r ]
            }));
            var s = k.deepAccess(t, "mediaTypes.".concat(v.d)), o = k.deepAccess(t, "mediaTypes.video.context");
            a.hb_source = s && "adpod" === o ? 7 : 1, t.mediaType !== v.d && !s || a.ad_types.push(v.d), 
            (t.mediaType === v.d || s && "outstream" !== o) && (a.require_asset_url = !0), t.params.video && (a.video = {}, 
            Object.keys(t.params.video).filter(function(e) {
                return A()(p, e);
            }).forEach(function(e) {
                switch (e) {
                  case "context":
                  case "playback_method":
                    var r = t.params.video[e], r = k.isArray(r) ? r[0] : r;
                    a.video[e] = u[e][r];
                    break;

                  default:
                    a.video[e] = t.params.video[e];
                }
            })), t.renderer && (a.video = b({}, a.video, {
                custom_renderer_present: !0
            }));
            var d = x()(c.a.getAdUnits(), function(e) {
                return t.transactionId === e.transactionId;
            });
            return d && d.mediaTypes && d.mediaTypes.banner && a.ad_types.push(v.b), 0 === a.ad_types.length && delete a.ad_types, 
            a;
        }
        function q(e) {
            var r = [], t = {};
            if (k.isArray(e) && 2 === e.length && !k.isArray(e[0])) t.width = parseInt(e[0], 10), 
            t.height = parseInt(e[1], 10), r.push(t); else if ("object" === s(e)) for (var a = 0; a < e.length; a++) {
                var n = e[a];
                (t = {}).width = parseInt(n[0], 10), t.height = parseInt(n[1], 10), r.push(t);
            }
            return r;
        }
        function M(e) {
            return !!e.params.user;
        }
        function z(e) {
            return !!parseInt(e.params.member, 10);
        }
        function D(e) {
            if (e.params) return !!e.params.app;
        }
        function B(e) {
            return e.params && e.params.app ? !!e.params.app.id : !!e.params.app;
        }
        function V(e) {
            return !!e.debug;
        }
        function J(e) {
            return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === v.a;
        }
        function W(e, r, t) {
            k.isEmpty(e.video) && (e.video = {}), e.video[r] = t;
        }
        function F(e) {
            var r, t;
            r = e.adUnitCode, (t = document.getElementById(r).querySelectorAll("div[id^='google_ads']"))[0] && t[0].style.setProperty("display", "none"), 
            e.renderer.push(function() {
                window.ANOutstreamVideo.renderAd({
                    tagId: e.adResponse.tag_id,
                    sizes: [ e.getSize().split("x") ],
                    targetId: e.adUnitCode,
                    uuid: e.adResponse.uuid,
                    adResponse: e.adResponse,
                    rendererOptions: e.renderer.getConfig()
                }, function(e, r, t) {
                    e.renderer.handleVideoEvent({
                        id: r,
                        eventName: t
                    });
                }.bind(null, e));
            });
        }
        Object(g.registerBidder)(R);
    }
}, [ 265 ]);

pbjsChunk([ 254 ], {
    343: function(n, t, e) {
        n.exports = e(344);
    },
    344: function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), e.d(t, "allowAuction", function() {
            return y;
        }), e.d(t, "userCMP", function() {
            return l;
        }), e.d(t, "consentTimeout", function() {
            return u;
        }), e.d(t, "gdprScope", function() {
            return p;
        }), e.d(t, "staticConsentData", function() {
            return g;
        }), t.requestBidsHook = h, t.resetConsentData = function() {
            C = void 0, l = void 0, w = 0, a.gdprDataHandler.setConsentData(null);
        }, t.setConsentConfig = _;
        var d = e(0), o = e(3), a = e(7), i = e(12), r = e.n(i), s = e(345), f = e.n(s);
        function c(n) {
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                return typeof n;
            } : function(n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
            })(n);
        }
        var l, u, p, g, C, m = "iab", v = 1e4, b = !0, y = {
            value: b,
            definedInConfig: !1
        }, w = 0, D = !1, k = {
            iab: function(o, e, r) {
                function n(n, t) {
                    d.logInfo("Received a response from CMP", n), t ? (!1 === n.gdprApplies || "tcloaded" === n.eventStatus || "useractioncomplete" === n.eventStatus || "cmpuishown" === n.eventStatus && n.tcString && !0 === n.purposeOneTreatment) && o(n, r) : e("CMP unable to register callback function.  Please check CMP setup.", r);
                }
                var t = function() {
                    var t = {};
                    function e() {
                        t.getConsentData && t.getVendorConsents && (d.logInfo("Received all requested responses from CMP", t), 
                        o(t, r));
                    }
                    return {
                        consentDataCallback: function(n) {
                            t.getConsentData = n, e();
                        },
                        vendorConsentsCallback: function(n) {
                            t.getVendorConsents = n, e();
                        }
                    };
                }(), u = {}, a = function() {
                    for (var n, t, e = window; !n; ) {
                        try {
                            if ("function" == typeof e.__tcfapi || "function" == typeof e.__cmp) {
                                t = "function" == typeof e.__tcfapi ? (w = 2, e.__tcfapi) : (w = 1, e.__cmp), n = e;
                                break;
                            }
                        } catch (n) {}
                        try {
                            if (e.frames.__tcfapiLocator) {
                                w = 2, n = e;
                                break;
                            }
                        } catch (n) {}
                        try {
                            if (e.frames.__cmpLocator) {
                                w = 1, n = e;
                                break;
                            }
                        } catch (n) {}
                        if (e === window.top) break;
                        e = e.parent;
                    }
                    return {
                        cmpFrame: n,
                        cmpFunction: t
                    };
                }(), i = a.cmpFrame, s = a.cmpFunction;
                if (!i) return e("CMP not found.", r);
                d.isFn(s) ? (d.logInfo("Detected CMP API is directly accessible, calling it now..."), 
                1 === w ? (s("getConsentData", null, t.consentDataCallback), s("getVendorConsents", null, t.vendorConsentsCallback)) : 2 === w && s("addEventListener", w, n)) : 1 === w && window.$sf && window.$sf.ext && "function" == typeof window.$sf.ext.cmp ? (d.logInfo("Detected Prebid.js is encased in a SafeFrame and CMP is registered, calling it now..."), 
                c("getConsentData", t.consentDataCallback), c("getVendorConsents", t.vendorConsentsCallback)) : (d.logInfo("Detected CMP is outside the current iframe where Prebid.js is located, calling it now..."), 
                1 === w ? (l("getConsentData", i, t.consentDataCallback), l("getVendorConsents", i, t.vendorConsentsCallback)) : 2 === w && l("addEventListener", i, n));
                function c(o, a) {
                    var n, t = r.adUnits, e = 1, i = 1;
                    Array.isArray(t) && 0 < t.length && (e = (n = d.getAdUnitSizes(t[0]))[0][0], i = n[0][1]), 
                    window.$sf.ext.register(e, i, function(n, t) {
                        var e;
                        "cmpReturn" === n && (e = "getConsentData" === o ? t.vendorConsentData : t.vendorConsents, 
                        a(e));
                    }), window.$sf.ext.cmp(o);
                }
                function l(n, l, t) {
                    var d = 2 === w ? "__tcfapi" : "__cmp";
                    window[d] = function(n, t, e) {
                        var o, a, i, r = Math.random() + "", s = "".concat(d, "Call"), c = (i = {
                            command: n,
                            parameter: t,
                            callId: r
                        }, (a = s) in (o = {}) ? Object.defineProperty(o, a, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : o[a] = i, o);
                        1 !== w && (c[s].version = w), u[r] = e, l.postMessage(c, "*");
                    }, window.addEventListener("message", function(n) {
                        var t = "".concat(d, "Return"), e = "string" == typeof n.data && f()(n.data, t) ? JSON.parse(n.data) : n.data;
                        {
                            var o;
                            e[t] && e[t].callId && (o = e[t], void 0 !== u[o.callId] && u[o.callId](o.returnValue, o.success));
                        }
                    }, !1), window[d](n, null, t);
                }
            },
            static: function(n, t, e) {
                n(g, e);
            }
        };
        function h(n, t) {
            var e = {
                context: this,
                args: [ t ],
                nextFn: n,
                adUnits: t.adUnits || pbjs.adUnits,
                bidsBackHandler: t.bidsBackHandler,
                haveExited: !1,
                timer: null
            };
            return C ? (d.logInfo("User consent information already known.  Pulling internally stored information..."), 
            S(null, e)) : r()(Object.keys(k), l) ? (k[l].call(this, M, A, e), void (e.haveExited || (0 === u ? M(void 0, e) : e.timer = setTimeout(function(n) {
                A("CMP workflow exceeded timeout threshold.", n);
            }.bind(null, e), u)))) : (d.logWarn("CMP framework (".concat(l, ") is not a supported framework.  Aborting consentManagement module and resuming auction.")), 
            e.nextFn.apply(e.context, e.args));
        }
        function M(e, n) {
            "static" === l && 2 === (w = e.getConsentData ? 1 : e.getTCData ? 2 : 0) && (e = e.getTCData);
            var t = 1 === w ? function(n) {
                var t = n && n.getConsentData && n.getConsentData.gdprApplies;
                return !("boolean" == typeof t && (!0 !== t || d.isStr(n.getConsentData.consentData) && d.isPlainObject(n.getVendorConsents) && 1 < Object.keys(n.getVendorConsents).length));
            } : 2 === w ? function() {
                var n = e && "boolean" == typeof e.gdprApplies ? e.gdprApplies : p, t = e && e.tcString;
                return !("boolean" == typeof n && (!0 !== n || d.isStr(t)));
            } : null;
            y.definedInConfig && 2 === w ? d.logWarn("'allowAuctionWithoutConsent' ignored for TCF 2") : y.definedInConfig || 1 !== w || d.logInfo("'allowAuctionWithoutConsent' using system default: (".concat(b, ").")), 
            d.isFn(t) ? t(e) ? A("CMP returned unexpected value during lookup process.", n, e) : (clearTimeout(n.timer), 
            P(e), S(null, n)) : A("Unable to derive CMP version to process data.  Consent object does not conform to TCF v1 or v2 specs.", n, e);
        }
        function A(n, t, e) {
            clearTimeout(t.timer), y.value && 1 === w && P(void 0), S(n, t, e);
        }
        function P(n) {
            1 === w ? C = {
                consentString: n ? n.getConsentData.consentData : void 0,
                vendorData: n ? n.getVendorConsents : void 0,
                gdprApplies: n ? n.getConsentData.gdprApplies : p
            } : (C = {
                consentString: n ? n.tcString : void 0,
                vendorData: n || void 0,
                gdprApplies: n && "boolean" == typeof n.gdprApplies ? n.gdprApplies : p
            }, n.addtlConsent && d.isStr(n.addtlConsent) && (C.addtlConsent = n.addtlConsent)), 
            C.apiVersion = w, a.gdprDataHandler.setConsentData(C);
        }
        function S(n, t, e) {
            var o, a, i;
            !1 === t.haveExited && (t.haveExited = !0, o = t.context, a = t.args, i = t.nextFn, 
            n ? y.value && 1 === w ? (d.logWarn(n + " 'allowAuctionWithoutConsent' activated.", e), 
            i.apply(o, a)) : (d.logError(n + " Canceling auction as per consentManagement config.", e), 
            "function" == typeof t.bidsBackHandler ? t.bidsBackHandler() : d.logError("Error executing bidsBackHandler")) : i.apply(o, a));
        }
        function _(n) {
            (n = n.gdpr || n.usp ? n.gdpr : n) && "object" === c(n) ? (d.isStr(n.cmpApi) ? l = n.cmpApi : (l = m, 
            d.logInfo("consentManagement config did not specify cmp.  Using system default setting (".concat(m, ")."))), 
            d.isNumber(n.timeout) ? u = n.timeout : (u = v, d.logInfo("consentManagement config did not specify timeout.  Using system default setting (".concat(v, ")."))), 
            "boolean" == typeof n.allowAuctionWithoutConsent && (y.value = n.allowAuctionWithoutConsent, 
            y.definedInConfig = !0), p = !0 === n.defaultGdprScope, d.logInfo("consentManagement module has been activated..."), 
            "static" === l && (d.isPlainObject(n.consentData) ? (g = n.consentData, u = 0) : d.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), 
            D || pbjs.requestBids.before(h, 50), D = !0) : d.logWarn("consentManagement config not defined, exiting consent manager");
        }
        o.b.getConfig("consentManagement", function(n) {
            return _(n.consentManagement);
        });
    }
}, [ 343 ]);

pbjsChunk([ 0 ], {
    365: function(t, e, r) {
        t.exports = r(366);
    },
    366: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        }), __webpack_require__.d(__webpack_exports__, "ADAPTER_VERSION", function() {
            return ADAPTER_VERSION;
        }), __webpack_require__.d(__webpack_exports__, "PROFILE_ID_PUBLISHERTAG", function() {
            return PROFILE_ID_PUBLISHERTAG;
        }), __webpack_require__.d(__webpack_exports__, "spec", function() {
            return spec;
        }), __webpack_exports__.tryGetCriteoFastBid = tryGetCriteoFastBid;
        var __WEBPACK_IMPORTED_MODULE_0__src_adloader_js__ = __webpack_require__(40), __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__ = __webpack_require__(1), __WEBPACK_IMPORTED_MODULE_2__src_config_js__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__ = __webpack_require__(2), __WEBPACK_IMPORTED_MODULE_4__src_utils_js__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js__ = __webpack_require__(10), __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js__), __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__ = __webpack_require__(367), __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__), __WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__ = __webpack_require__(8);
        function _extends() {
            return (_extends = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
                }
                return t;
            }).apply(this, arguments);
        }
        var GVLID = 91, ADAPTER_VERSION = 32, BIDDER_CODE = "criteo", CDB_ENDPOINT = "https://bidder.criteo.com/cdb", PROFILE_ID_INLINE = 207, PROFILE_ID_PUBLISHERTAG = 185, storage = Object(__WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__.b)(GVLID), LOG_PREFIX = "Criteo: ", PUBLISHER_TAG_URL = "https://static.criteo.net/js/ld/publishertag.prebid.js", FAST_BID_PUBKEY_E = 65537, FAST_BID_PUBKEY_N = "ztQYwCE5BU7T9CDM5he6rKoabstXRmkzx54zFPZkWbK530dwtLBDeaWBMxHBUT55CYyboR/EZ4efghPi3CoNGfGWezpjko9P6p2EwGArtHEeS4slhu/SpSIFMjG6fdrpRoNuIAMhq1Z+Pr/+HOd1pThFKeGFr2/NhtAg+TXAzaU=", spec = {
            code: BIDDER_CODE,
            gvlid: GVLID,
            supportedMediaTypes: [ __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.b, __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.d, __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.c ],
            isBidRequestValid: function(t) {
                return !(!t || !t.params || !t.params.zoneId && !t.params.networkId) && !(hasVideoMediaType(t) && !hasValidVideoMediaType(t));
            },
            buildRequests: function(t, e) {
                var r, i, s, o, _;
                if (_extends(e, {
                    publisherExt: __WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("fpd.context"),
                    userExt: __WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("fpd.user"),
                    ceh: __WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("criteo.ceh")
                }), publisherTagAvailable() || (window.Criteo = window.Criteo || {}, window.Criteo.usePrebidEvents = !1, 
                tryGetCriteoFastBid(), setTimeout(function() {
                    Object(__WEBPACK_IMPORTED_MODULE_0__src_adloader_js__.a)(PUBLISHER_TAG_URL, BIDDER_CODE);
                }, e.timeout)), _ = publisherTagAvailable() ? (r = new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG, ADAPTER_VERSION, t, e, "4.4.0"), 
                i = __WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("enableSendAllBids"), 
                r.setEnableSendAllBids && "function" == typeof r.setEnableSendAllBids && "boolean" == typeof i && r.setEnableSendAllBids(i), 
                o = r.buildCdbUrl(), r.buildCdbRequest()) : (o = buildCdbUrl(s = buildContext(t, e)), 
                buildCdbRequest(s, t, e))) return {
                    method: "POST",
                    url: o,
                    data: _,
                    bidRequests: t
                };
            },
            interpretResponse: function(t, s) {
                var e = t.body || t;
                if (publisherTagAvailable()) {
                    var r = Criteo.PubTag.Adapters.Prebid.GetAdapter(s);
                    if (r) return r.interpretResponse(e, s);
                }
                var o = [];
                return e && e.slots && __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.isArray(e.slots) && e.slots.forEach(function(e) {
                    var t = __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default()(s.bidRequests, function(t) {
                        return t.adUnitCode === e.impid && (!t.params.zoneId || parseInt(t.params.zoneId) === e.zoneid);
                    }), r = t.bidId, i = {
                        requestId: r,
                        adId: e.bidId || __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.getUniqueIdentifierStr(),
                        cpm: e.cpm,
                        currency: e.currency,
                        netRevenue: !0,
                        ttl: e.ttl || 60,
                        creativeId: r,
                        width: e.width,
                        height: e.height,
                        dealId: e.dealCode
                    };
                    if (e.native) if (t.params.nativeCallback) i.ad = createNativeAd(r, e.native, t.params.nativeCallback); else {
                        if (!0 === __WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("enableSendAllBids")) return;
                        i.native = createPrebidNativeAd(e.native), i.mediaType = __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.c;
                    } else e.video ? (i.vastUrl = e.displayurl, i.mediaType = __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.d) : i.ad = e.creative;
                    o.push(i);
                }), o;
            },
            onTimeout: function(t) {
                var e;
                publisherTagAvailable() && Array.isArray(t) && (e = [], t.forEach(function(t) {
                    -1 === e.indexOf(t.auctionId) && (e.push(t.auctionId), Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidTimeout());
                }));
            },
            onBidWon: function(t) {
                publisherTagAvailable() && t && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidWon(t);
            },
            onSetTargeting: function(t) {
                publisherTagAvailable() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleSetTargeting(t);
            }
        };
        function publisherTagAvailable() {
            return "undefined" != typeof Criteo && Criteo.PubTag && Criteo.PubTag.Adapters && Criteo.PubTag.Adapters.Prebid;
        }
        function buildContext(t, e) {
            var r = "";
            e && e.refererInfo && (r = e.refererInfo.referer);
            var i = __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.parseUrl(r).search, s = {
                url: r,
                debug: "1" === i.pbt_debug,
                noLog: "1" === i.pbt_nolog,
                amp: !1
            };
            return t.forEach(function(t) {
                "amp" === t.params.integrationMode && (s.amp = !0);
            }), s;
        }
        function buildCdbUrl(t) {
            var e = CDB_ENDPOINT;
            return e += "?profileId=" + PROFILE_ID_INLINE, e += "&av=" + String(ADAPTER_VERSION), 
            e += "&wv=" + encodeURIComponent("4.4.0"), e += "&cb=" + String(Math.floor(99999999999 * Math.random())), 
            t.amp && (e += "&im=1"), t.debug && (e += "&debug=1"), t.noLog && (e += "&nolog=1"), 
            e;
        }
        function checkNativeSendId(t) {
            return !t.nativeParams || !(t.nativeParams.image && !0 !== t.nativeParams.image.sendId || t.nativeParams.icon && !0 !== t.nativeParams.icon.sendId || t.nativeParams.clickUrl && !0 !== t.nativeParams.clickUrl.sendId || t.nativeParams.displayUrl && !0 !== t.nativeParams.displayUrl.sendId || t.nativeParams.privacyLink && !0 !== t.nativeParams.privacyLink.sendId || t.nativeParams.privacyIcon && !0 !== t.nativeParams.privacyIcon.sendId);
        }
        function buildCdbRequest(t, e, r) {
            var i, s = {
                publisher: {
                    url: t.url,
                    ext: r.publisherExt
                },
                slots: e.map(function(t) {
                    i = t.params.networkId || i;
                    var e, r = {
                        impid: t.adUnitCode,
                        transactionid: t.transactionId,
                        auctionId: t.auctionId
                    };
                    return t.params.zoneId && (r.zoneid = t.params.zoneId), t.fpd && t.fpd.context && (r.ext = t.fpd.context), 
                    t.params.ext && (r.ext = _extends({}, r.ext, t.params.ext)), t.params.publisherSubId && (r.publishersubid = t.params.publisherSubId), 
                    t.params.nativeCallback || __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.c)) ? (r.native = !0, 
                    checkNativeSendId(t) || __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn(LOG_PREFIX + "all native assets containing URL should be sent as placeholders with sendId(icon, image, clickUrl, displayUrl, privacyLink, privacyIcon)"), 
                    r.sizes = parseSizes(retrieveBannerSizes(t), parseNativeSize)) : r.sizes = parseSizes(retrieveBannerSizes(t), parseSize), 
                    hasVideoMediaType(t) && ((e = {
                        playersizes: parseSizes(__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "mediaTypes.video.playerSize"), parseSize),
                        mimes: t.mediaTypes.video.mimes,
                        protocols: t.mediaTypes.video.protocols,
                        maxduration: t.mediaTypes.video.maxduration,
                        api: t.mediaTypes.video.api
                    }).skip = t.params.video.skip, e.placement = t.params.video.placement, e.minduration = t.params.video.minduration, 
                    e.playbackmethod = t.params.video.playbackmethod, e.startdelay = t.params.video.startdelay, 
                    r.video = e), r;
                })
            };
            return i && (s.publisher.networkid = i), s.user = {
                ext: r.userExt
            }, r && r.ceh && (s.user.ceh = r.ceh), r && r.gdprConsent && (s.gdprConsent = {}, 
            void 0 !== r.gdprConsent.gdprApplies && (s.gdprConsent.gdprApplies = !!r.gdprConsent.gdprApplies), 
            s.gdprConsent.version = r.gdprConsent.apiVersion, void 0 !== r.gdprConsent.consentString && (s.gdprConsent.consentData = r.gdprConsent.consentString)), 
            r && r.uspConsent && (s.user.uspIab = r.uspConsent), s;
        }
        function retrieveBannerSizes(t) {
            return __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "mediaTypes.banner.sizes") || t.sizes;
        }
        function parseSizes(t, e) {
            return Array.isArray(t[0]) ? t.map(function(t) {
                return e(t);
            }) : [ e(t) ];
        }
        function parseSize(t) {
            return t[0] + "x" + t[1];
        }
        function parseNativeSize(t) {
            return void 0 === t[0] && void 0 === t[1] ? "2x2" : t[0] + "x" + t[1];
        }
        function hasVideoMediaType(t) {
            return void 0 !== __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "params.video") && void 0 !== __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "mediaTypes.video");
        }
        function hasValidVideoMediaType(e) {
            var r = !0;
            [ "mimes", "playerSize", "maxduration", "protocols", "api" ].forEach(function(t) {
                void 0 === __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(e, "mediaTypes.video." + t) && (r = !1, 
                __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logError("Criteo Bid Adapter: mediaTypes.video." + t + " is required"));
            });
            if ([ "skip", "placement", "playbackmethod" ].forEach(function(t) {
                void 0 === __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(e, "params.video." + t) && (r = !1, 
                __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logError("Criteo Bid Adapter: params.video." + t + " is required"));
            }), r) {
                if ("instream" == e.mediaTypes.video.context && 1 === e.params.video.placement) return 1;
                if ("outstream" == e.mediaTypes.video.context && 1 !== e.params.video.placement) return 1;
            }
        }
        function createPrebidNativeAd(t) {
            return {
                title: t.products[0].title,
                body: t.products[0].description,
                sponsoredBy: t.advertiser.description,
                icon: t.advertiser.logo,
                image: t.products[0].image,
                clickUrl: t.products[0].click_url,
                privacyLink: t.privacy.optout_click_url,
                privacyIcon: t.privacy.optout_image_url,
                cta: t.products[0].call_to_action,
                price: t.products[0].price,
                impressionTrackers: t.impression_pixels.map(function(t) {
                    return t.url;
                })
            };
        }
        function createNativeAd(t, e, r) {
            var i = "criteo_prebid_native_slots";
            return window[i] = window[i] || {}, window[i][t] = {
                callback: r,
                payload: e
            }, '\n<script type="text/javascript">\nfor (var i = 0; i < 10; ++i) {\n var slots = window.parent.'.concat(i, ';\n  if(!slots){continue;}\n  var responseSlot = slots["').concat(t, '"];\n  responseSlot.callback(responseSlot.payload);\n  break;\n}\n<\/script>');
        }
        function tryGetCriteoFastBid() {
            try {
                var fastBidStorageKey = "criteo_fast_bid", hashPrefix = "// Hash: ", fastBidFromStorage = storage.getDataFromLocalStorage(fastBidStorageKey), firstLineEndPosition, firstLine, publisherTagHash, publisherTag;
                null !== fastBidFromStorage && (firstLineEndPosition = fastBidFromStorage.indexOf("\n"), 
                firstLine = fastBidFromStorage.substr(0, firstLineEndPosition).trim(), firstLine.substr(0, hashPrefix.length) !== hashPrefix ? (__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn("No hash found in FastBid"), 
                storage.removeDataFromLocalStorage(fastBidStorageKey)) : (publisherTagHash = firstLine.substr(hashPrefix.length), 
                publisherTag = fastBidFromStorage.substr(firstLineEndPosition + 1), Object(__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__.verify)(publisherTag, publisherTagHash, FAST_BID_PUBKEY_N, FAST_BID_PUBKEY_E) ? (__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logInfo("Using Criteo FastBid"), 
                eval(publisherTag)) : (__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn("Invalid Criteo FastBid found"), 
                storage.removeDataFromLocalStorage(fastBidStorageKey))));
            } catch (t) {}
        }
        Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__.registerBidder)(spec);
    },
    367: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(368), n = r(369);
        e.verify = function(t, e, r, i) {
            var s = new a.BigInteger(a.b64toHex(e)), o = new a.BigInteger(a.b64toHex(r)), _ = s.modPowInt(i, o);
            return a.removeExtraSymbols(_.toHexString()) === n.Sha256.hash(t);
        };
    },
    368: function(t, e, r) {
        "use strict";
        var i;
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = (T.prototype.toHexString = function() {
            if (this.s < 0) return "-" + this.negate().toHexString();
            var t, e = !1, r = "", i = this.t, s = this.DB - i * this.DB % 4;
            if (0 < i--) for (s < this.DB && 0 < (t = this[i] >> s) && (e = !0, r = c(t)); 0 <= i; ) s < 4 ? (t = (this[i] & (1 << s) - 1) << 4 - s, 
            t |= this[--i] >> (s += this.DB - 4)) : (t = this[i] >> (s -= 4) & 15, s <= 0 && (s += this.DB, 
            --i)), 0 < t && (e = !0), e && (r += c(t));
            return e ? r : "0";
        }, T.prototype.fromHexString = function(t) {
            if (null !== t) {
                this.t = 0, this.s = 0;
                for (var e = t.length, r = !1, i = 0; 0 <= --e; ) {
                    var s = n(t, e);
                    s < 0 ? "-" == t.charAt(e) && (r = !0) : (r = !1, 0 == i ? this[this.t++] = s : i + 4 > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - i) - 1) << i, 
                    this[this.t++] = s >> this.DB - i) : this[this.t - 1] |= s << i, (i += 4) >= this.DB && (i -= this.DB));
                }
                this.clamp(), r && T.ZERO.subTo(this, this);
            }
        }, T.prototype.negate = function() {
            var t = b();
            return T.ZERO.subTo(this, t), t;
        }, T.prototype.abs = function() {
            return this.s < 0 ? this.negate() : this;
        }, T.prototype.mod = function(t) {
            var e = b();
            return this.abs().divRemTo(t, null, e), this.s < 0 && 0 < e.compareTo(T.ZERO) && t.subTo(e, e), 
            e;
        }, T.prototype.copyTo = function(t) {
            for (var e = this.t - 1; 0 <= e; --e) t[e] = this[e];
            t.t = this.t, t.s = this.s;
        }, T.prototype.lShiftTo = function(t, e) {
            for (var r = t % this.DB, i = this.DB - r, s = (1 << i) - 1, o = Math.floor(t / this.DB), _ = this.s << r & this.DM, a = this.t - 1; 0 <= a; --a) e[a + o + 1] = this[a] >> i | _, 
            _ = (this[a] & s) << r;
            for (a = o - 1; 0 <= a; --a) e[a] = 0;
            e[o] = _, e.t = this.t + o + 1, e.s = this.s, e.clamp();
        }, T.prototype.invDigit = function() {
            if (this.t < 1) return 0;
            var t = this[0];
            if (0 == (1 & t)) return 0;
            var e = 3 & t;
            return 0 < (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) ? this.DV - e : -e;
        }, T.prototype.dlShiftTo = function(t, e) {
            for (var r = this.t - 1; 0 <= r; --r) e[r + t] = this[r];
            for (r = t - 1; 0 <= r; --r) e[r] = 0;
            e.t = this.t + t, e.s = this.s;
        }, T.prototype.squareTo = function(t) {
            for (var e = this.abs(), r = t.t = 2 * e.t; 0 <= --r; ) t[r] = 0;
            for (r = 0; r < e.t - 1; ++r) {
                var i = e.am(r, e[r], t, 2 * r, 0, 1);
                (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, i, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV, 
                t[r + e.t + 1] = 1);
            }
            0 < t.t && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)), t.s = 0, t.clamp();
        }, T.prototype.multiplyTo = function(t, e) {
            var r = this.abs(), i = t.abs(), s = r.t;
            for (e.t = s + i.t; 0 <= --s; ) e[s] = 0;
            for (s = 0; s < i.t; ++s) e[s + r.t] = r.am(0, i[s], e, s, 0, r.t);
            e.s = 0, e.clamp(), this.s != t.s && T.ZERO.subTo(e, e);
        }, T.prototype.divRemTo = function(t, e, r) {
            var i = t.abs();
            if (!(i.t <= 0)) {
                var s = this.abs();
                if (s.t < i.t) return null != e && e.fromHexString("0"), void (null != r && this.copyTo(r));
                null == r && (r = b());
                var o = b(), _ = this.s, a = t.s, n = this.DB - D(i[i.t - 1]);
                0 < n ? (i.lShiftTo(n, o), s.lShiftTo(n, r)) : (i.copyTo(o), s.copyTo(r));
                var p = o.t, c = o[p - 1];
                if (0 != c) {
                    var d = c * (1 << this.F1) + (1 < p ? o[p - 2] >> this.F2 : 0), u = this.FV / d, h = (1 << this.F1) / d, l = 1 << this.F2, f = r.t, E = f - p, v = null == e ? b() : e;
                    for (o.dlShiftTo(E, v), 0 <= r.compareTo(v) && (r[r.t++] = 1, r.subTo(v, r)), T.ONE.dlShiftTo(p, v), 
                    v.subTo(o, o); o.t < p; ) o[o.t++] = 0;
                    for (;0 <= --E; ) {
                        var m = r[--f] == c ? this.DM : Math.floor(r[f] * u + (r[f - 1] + l) * h);
                        if ((r[f] += o.am(0, m, r, E, 0, p)) < m) for (o.dlShiftTo(E, v), r.subTo(v, r); r[f] < --m; ) r.subTo(v, r);
                    }
                    null != e && (r.drShiftTo(p, e), _ != a && T.ZERO.subTo(e, e)), r.t = p, r.clamp(), 
                    0 < n && r.rShiftTo(n, r), _ < 0 && T.ZERO.subTo(r, r);
                }
            }
        }, T.prototype.rShiftTo = function(t, e) {
            e.s = this.s;
            var r = Math.floor(t / this.DB);
            if (r >= this.t) e.t = 0; else {
                var i = t % this.DB, s = this.DB - i, o = (1 << i) - 1;
                e[0] = this[r] >> i;
                for (var _ = r + 1; _ < this.t; ++_) e[_ - r - 1] |= (this[_] & o) << s, e[_ - r] = this[_] >> i;
                0 < i && (e[this.t - r - 1] |= (this.s & o) << s), e.t = this.t - r, e.clamp();
            }
        }, T.prototype.drShiftTo = function(t, e) {
            for (var r = t; r < this.t; ++r) e[r - t] = this[r];
            e.t = Math.max(this.t - t, 0), e.s = this.s;
        }, T.prototype.subTo = function(t, e) {
            for (var r = 0, i = 0, s = Math.min(t.t, this.t); r < s; ) i += this[r] - t[r], 
            e[r++] = i & this.DM, i >>= this.DB;
            if (t.t < this.t) {
                for (i -= t.s; r < this.t; ) i += this[r], e[r++] = i & this.DM, i >>= this.DB;
                i += this.s;
            } else {
                for (i += this.s; r < t.t; ) i -= t[r], e[r++] = i & this.DM, i >>= this.DB;
                i -= t.s;
            }
            e.s = i < 0 ? -1 : 0, i < -1 ? e[r++] = this.DV + i : 0 < i && (e[r++] = i), e.t = r, 
            e.clamp();
        }, T.prototype.clamp = function() {
            for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t; ) --this.t;
        }, T.prototype.modPowInt = function(t, e) {
            var r = new (t < 256 || e.isEven() ? d : h)(e);
            return this.exp(t, r);
        }, T.prototype.exp = function(t, e) {
            if (4294967295 < t || t < 1) return T.ONE;
            var r, i = b(), s = b(), o = e.convert(this), _ = D(t) - 1;
            for (o.copyTo(i); 0 <= --_; ) e.sqrTo(i, s), 0 < (t & 1 << _) ? e.mulTo(s, o, i) : (r = i, 
            i = s, s = r);
            return e.revert(i);
        }, T.prototype.isEven = function() {
            return 0 == (0 < this.t ? 1 & this[0] : this.s);
        }, T.prototype.compareTo = function(t) {
            var e = this.s - t.s;
            if (0 != e) return e;
            var r = this.t;
            if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
            for (;0 <= --r; ) if (0 != (e = this[r] - t[r])) return e;
            return 0;
        }, T.prototype.am1 = function(t, e, r, i, s, o) {
            for (;0 <= --o; ) {
                var _ = e * this[t++] + r[i] + s;
                s = Math.floor(_ / 67108864), r[i++] = 67108863 & _;
            }
            return s;
        }, T.prototype.am2 = function(t, e, r, i, s, o) {
            for (var _ = 32767 & e, a = e >> 15; 0 <= --o; ) {
                var n = 32767 & this[t], p = this[t++] >> 15, c = a * n + p * _;
                s = ((n = _ * n + ((32767 & c) << 15) + r[i] + (1073741823 & s)) >>> 30) + (c >>> 15) + a * p + (s >>> 30), 
                r[i++] = 1073741823 & n;
            }
            return s;
        }, T.prototype.am3 = function(t, e, r, i, s, o) {
            for (var _ = 16383 & e, a = e >> 14; 0 <= --o; ) {
                var n = 16383 & this[t], p = this[t++] >> 14, c = a * n + p * _;
                s = ((n = _ * n + ((16383 & c) << 14) + r[i] + s) >> 28) + (c >> 14) + a * p, r[i++] = 268435455 & n;
            }
            return s;
        }, T);
        function T(t) {
            null !== t && this.fromHexString(t);
        }
        function b() {
            return new s(null);
        }
        function D(t) {
            var e, r = 1;
            return 0 != (e = t >>> 16) && (t = e, r += 16), 0 != (e = t >> 8) && (t = e, r += 8), 
            0 != (e = t >> 4) && (t = e, r += 4), 0 != (e = t >> 2) && (t = e, r += 2), 0 != (e = t >> 1) && (t = e, 
            r += 1), r;
        }
        e.BigInteger = s, e.nbi = b, e.nbits = D;
        for (var o = [], _ = "0".charCodeAt(0), a = 0; a <= 9; ++a) o[_++] = a;
        for (_ = "a".charCodeAt(0), a = 10; a < 36; ++a) o[_++] = a;
        for (_ = "A".charCodeAt(0), a = 10; a < 36; ++a) o[_++] = a;
        function n(t, e) {
            var r = o[t.charCodeAt(e)];
            return null == r ? -1 : r;
        }
        e.intAt = n;
        var p = "0123456789abcdefghijklmnopqrstuvwxyz";
        function c(t) {
            return p.charAt(t);
        }
        e.int2char = c;
        e.b64toHex = function(t) {
            for (var e = "", r = 0, i = 0, s = 0; s < t.length && "=" != t.charAt(s); ++s) {
                var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t.charAt(s));
                o < 0 || (r = 0 == r ? (e += c(o >> 2), i = 3 & o, 1) : 1 == r ? (e += c(i << 2 | o >> 4), 
                i = 15 & o, 2) : 2 == r ? (e += c(i), e += c(o >> 2), i = 3 & o, 3) : (e += c(i << 2 | o >> 4), 
                e += c(15 & o), 0));
            }
            return 1 == r && (e += c(i << 2)), e;
        }, e.removeExtraSymbols = function(t) {
            return t.replace(/^1f+00/, "").replace("3031300d060960864801650304020105000420", "");
        };
        var d = (u.prototype.convert = function(t) {
            return t.s < 0 || 0 <= t.compareTo(this.m) ? t.mod(this.m) : t;
        }, u.prototype.revert = function(t) {
            return t;
        }, u.prototype.reduce = function(t) {
            t.divRemTo(this.m, null, t);
        }, u.prototype.mulTo = function(t, e, r) {
            t.multiplyTo(e, r), this.reduce(r);
        }, u.prototype.sqrTo = function(t, e) {
            t.squareTo(e), this.reduce(e);
        }, u);
        function u(t) {
            this.m = t;
        }
        var h = (l.prototype.convert = function(t) {
            var e = b();
            return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && 0 < e.compareTo(s.ZERO) && this.m.subTo(e, e), 
            e;
        }, l.prototype.revert = function(t) {
            var e = b();
            return t.copyTo(e), this.reduce(e), e;
        }, l.prototype.reduce = function(t) {
            for (;t.t <= this.mt2; ) t[t.t++] = 0;
            for (var e = 0; e < this.m.t; ++e) {
                var r = 32767 & t[e], i = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                for (t[r = e + this.m.t] += this.m.am(0, i, t, e, 0, this.m.t); t[r] >= t.DV; ) t[r] -= t.DV, 
                t[++r]++;
            }
            t.clamp(), t.drShiftTo(this.m.t, t), 0 <= t.compareTo(this.m) && t.subTo(this.m, t);
        }, l.prototype.mulTo = function(t, e, r) {
            t.multiplyTo(e, r), this.reduce(r);
        }, l.prototype.sqrTo = function(t, e) {
            t.squareTo(e), this.reduce(e);
        }, l);
        function l(t) {
            this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, 
            this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t;
        }
        function f(t) {
            var e = b();
            return e.fromHexString(t.toString()), e;
        }
        e.nbv = f, s.ZERO = f(0), s.ONE = f(1), i = "Microsoft Internet Explorer" == navigator.appName ? (s.prototype.am = s.prototype.am2, 
        30) : "Netscape" != navigator.appName ? (s.prototype.am = s.prototype.am1, 26) : (s.prototype.am = s.prototype.am3, 
        28), s.prototype.DB = i, s.prototype.DM = (1 << i) - 1, s.prototype.DV = 1 << i;
        s.prototype.FV = Math.pow(2, 52), s.prototype.F1 = 52 - i, s.prototype.F2 = 2 * i - 52;
    },
    369: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = (y.hash = function(t) {
            t = y.utf8Encode(t || "");
            for (var e = [ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ], r = [ 1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225 ], i = (t += String.fromCharCode(128)).length / 4 + 2, s = Math.ceil(i / 16), o = new Array(s), _ = 0; _ < s; _++) {
                o[_] = new Array(16);
                for (var a = 0; a < 16; a++) o[_][a] = t.charCodeAt(64 * _ + 4 * a) << 24 | t.charCodeAt(64 * _ + 4 * a + 1) << 16 | t.charCodeAt(64 * _ + 4 * a + 2) << 8 | t.charCodeAt(64 * _ + 4 * a + 3) << 0;
            }
            var n = 8 * (t.length - 1) / Math.pow(2, 32), p = 8 * (t.length - 1) >>> 0;
            for (o[s - 1][14] = Math.floor(n), o[s - 1][15] = p, _ = 0; _ < s; _++) {
                for (var c = new Array(64), d = 0; d < 16; d++) c[d] = o[_][d];
                for (d = 16; d < 64; d++) c[d] = y.q1(c[d - 2]) + c[d - 7] + y.q0(c[d - 15]) + c[d - 16] >>> 0;
                for (var u = r[0], h = r[1], l = r[2], f = r[3], E = r[4], v = r[5], m = r[6], T = r[7], d = 0; d < 64; d++) {
                    var b = T + y.z1(E) + y.Ch(E, v, m) + e[d] + c[d], D = y.z0(u) + y.Maj(u, h, l);
                    T = m, m = v, v = E, E = f + b >>> 0, f = l, l = h, h = u, u = b + D >>> 0;
                }
                r[0] = r[0] + u >>> 0, r[1] = r[1] + h >>> 0, r[2] = r[2] + l >>> 0, r[3] = r[3] + f >>> 0, 
                r[4] = r[4] + E >>> 0, r[5] = r[5] + v >>> 0, r[6] = r[6] + m >>> 0, r[7] = r[7] + T >>> 0;
            }
            for (var P = new Array(r.length), T = 0; T < r.length; T++) P[T] = ("00000000" + r[T].toString(16)).slice(-8);
            return P.join("");
        }, y.utf8Encode = function(e) {
            try {
                return new TextEncoder().encode(e).reduce(function(t, e) {
                    return t + String.fromCharCode(e);
                }, "");
            } catch (t) {
                return unescape(encodeURIComponent(e));
            }
        }, y.ROTR = function(t, e) {
            return e >>> t | e << 32 - t;
        }, y.z0 = function(t) {
            return y.ROTR(2, t) ^ y.ROTR(13, t) ^ y.ROTR(22, t);
        }, y.z1 = function(t) {
            return y.ROTR(6, t) ^ y.ROTR(11, t) ^ y.ROTR(25, t);
        }, y.q0 = function(t) {
            return y.ROTR(7, t) ^ y.ROTR(18, t) ^ t >>> 3;
        }, y.q1 = function(t) {
            return y.ROTR(17, t) ^ y.ROTR(19, t) ^ t >>> 10;
        }, y.Ch = function(t, e, r) {
            return t & e ^ ~t & r;
        }, y.Maj = function(t, e, r) {
            return t & e ^ t & r ^ e & r;
        }, y);
        function y() {}
        e.Sha256 = i;
    }
}, [ 365 ]);

pbjsChunk([ 221 ], {
    426: function(e, r, n) {
        e.exports = n(427);
    },
    427: function(e, r, n) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), n.d(r, "purpose1Rule", function() {
            return O;
        }), n.d(r, "purpose2Rule", function() {
            return h;
        }), n.d(r, "purpose7Rule", function() {
            return A;
        }), n.d(r, "enforcementRules", function() {
            return j;
        }), r.validateRules = H, r.deviceAccessHook = B, r.userSyncHook = R, r.userIdHook = T, 
        r.makeBidRequestsHook = S, r.enableAnalyticsHook = M, r.setEnforcementConfig = x;
        var u = n(0), i = n(3), s = n(7), t = n(10), o = n.n(t), a = n(12), l = n.n(a), c = n(1), p = n(13), d = n(8), f = n(9), g = n.n(f), b = n(5);
        n.n(b);
        function v(r, e) {
            var n, t = Object.keys(r);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(r), e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
            })), t.push.apply(t, n)), t;
        }
        function y(o) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? v(Object(a), !0).forEach(function(e) {
                    var r, n, t;
                    r = o, t = a[n = e], n in r ? Object.defineProperty(r, n, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[n] = t;
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : v(Object(a)).forEach(function(e) {
                    Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e));
                });
            }
            return o;
        }
        function m() {
            return (m = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = arguments[r];
                    for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
                }
                return e;
            }).apply(this, arguments);
        }
        var O, h, A, j, C = {
            purpose1: {
                id: 1,
                name: "storage"
            },
            purpose2: {
                id: 2,
                name: "basicAds"
            },
            purpose7: {
                id: 7,
                name: "measurement"
            }
        }, D = [ {
            purpose: "storage",
            enforcePurpose: !0,
            enforceVendor: !0,
            vendorExceptions: []
        }, {
            purpose: "basicAds",
            enforcePurpose: !0,
            enforceVendor: !0,
            vendorExceptions: []
        } ], E = [], P = [], k = [], w = !1;
        function V(e) {
            var r, n, t;
            return (e = e || i.b.getCurrentBidder()) && ((n = i.b.getConfig("gvlMapping")) && n[e] ? r = n[e] : (t = s.default.getBidAdapter(e)) && t.getSpec && (r = t.getSpec().gvlid)), 
            r;
        }
        function H(r, e, n, t) {
            var o = C[Object.keys(C).filter(function(e) {
                return C[e].name === r.purpose;
            })[0]].id;
            if (l()(r.vendorExceptions || [], n)) return !0;
            var a = u.deepAccess(e, "vendorData.purpose.consents.".concat(o)), c = u.deepAccess(e, "vendorData.vendor.consents.".concat(t)), i = u.deepAccess(e, "vendorData.purpose.legitimateInterests.".concat(o)), s = !1 === r.enforcePurpose || !0 === a, p = !1 === r.enforceVendor || !0 === c;
            return 2 === o ? s && p || !0 === i : s && p;
        }
        function B(e, r, n, t) {
            var o, a, c;
            t = m({}, {
                hasEnforcementHook: !0
            }), Object(u.hasDeviceAccess)() ? (o = s.gdprDataHandler.getConsentData()) && o.gdprApplies && 2 === o.apiVersion ? (r = (a = i.b.getCurrentBidder()) && a != n && s.default.aliasRegistry[a] === n ? V(a) : V(n), 
            H(O, o, c = n || a, r) ? t.valid = !0 : (c && u.logWarn("TCF2 denied device access for ".concat(c)), 
            t.valid = !1, E.push(c))) : t.valid = !0 : (u.logWarn("Device access is disabled by Publisher"), 
            t.valid = !1), e.call(this, r, n, t);
        }
        function R(e) {
            for (var r, n, t = s.gdprDataHandler.getConsentData(), o = arguments.length, a = new Array(1 < o ? o - 1 : 0), c = 1; c < o; c++) a[c - 1] = arguments[c];
            t && t.gdprApplies && 2 === t.apiVersion ? (r = V(), n = i.b.getCurrentBidder(), 
            H(O, t, n, r) ? e.call.apply(e, [ this ].concat(a)) : (u.logWarn("User sync not allowed for ".concat(n)), 
            E.push(n))) : e.call.apply(e, [ this ].concat(a));
        }
        function T(e, r, a) {
            var n;
            a && a.gdprApplies && 2 === a.apiVersion ? (n = r.map(function(e) {
                var r, n, t = (r = e.submodule, n = i.b.getConfig("gvlMapping"), n && n[r.name] ? n[r.name] : r.gvlid), o = e.submodule.name;
                if (H(O, a, o, t)) return e;
                u.logWarn("User denied permission to fetch user id for ".concat(o, " User id module")), 
                E.push(o);
            }).filter(function(e) {
                return e;
            }), e.call(this, n, y(y({}, a), {}, {
                hasValidated: !0
            }))) : e.call(this, r, a);
        }
        function S(e, r) {
            for (var o = s.gdprDataHandler.getConsentData(), n = arguments.length, t = new Array(2 < n ? n - 2 : 0), a = 2; a < n; a++) t[a - 2] = arguments[a];
            o && o.gdprApplies && 2 === o.apiVersion && r.forEach(function(e) {
                e.bids = e.bids.filter(function(e) {
                    var r = e.bidder, n = V(r);
                    if (l()(P, r)) return !1;
                    var t = !!H(h, o, r, n);
                    return t || (u.logWarn("TCF2 blocked auction for ".concat(r)), P.push(r)), t;
                });
            }), e.call.apply(e, [ this, r ].concat(t));
        }
        function M(e, r) {
            var c = s.gdprDataHandler.getConsentData();
            c && c.gdprApplies && 2 === c.apiVersion && (u.isArray(r) || (r = [ r ]), r = r.filter(function(e) {
                var r, n, t = e.provider, o = (r = t, n = i.b.getConfig("gvlMapping"), n && n[r] ? n[r] : s.default.getAnalyticsAdapter(r).gvlid), a = !!H(A, c, t, o);
                return a || (k.push(t), u.logWarn("TCF2 blocked analytics adapter ".concat(e.provider))), 
                a;
            })), e.call(this, r);
        }
        g.a.on(b.EVENTS.AUCTION_END, function() {
            function e(n) {
                return n.filter(function(e, r) {
                    return null !== e && n.indexOf(e) === r;
                });
            }
            var r = {
                storageBlocked: e(E),
                biddersBlocked: e(P),
                analyticsBlocked: e(k)
            };
            g.a.emit(b.EVENTS.TCF2_ENFORCEMENT, r);
        });
        var W = function(e) {
            return e.purpose === C.purpose1.name;
        }, F = function(e) {
            return e.purpose === C.purpose2.name;
        }, N = function(e) {
            return e.purpose === C.purpose7.name;
        };
        function x(e) {
            var r = u.deepAccess(e, "gdpr.rules");
            j = r || (u.logWarn("TCF2: enforcing P1 and P2"), D), O = o()(j, W), h = o()(j, F), 
            A = o()(j, N), O = O || D[0], h = h || D[1], O && !w && (w = !0, d.d.before(B, 49), 
            c.registerSyncInner.before(R, 48), Object(p.a)("validateGdprEnforcement").before(T, 47)), 
            h && Object(p.a)("makeBidRequests").before(S), A && Object(p.a)("enableAnalyticsCb").before(M);
        }
        i.b.getConfig("consentManagement", function(e) {
            return x(e.consentManagement);
        });
    }
}, [ 426 ]);

pbjsChunk([ 138 ], {
    622: function(e, r, a) {
        e.exports = a(623);
    },
    623: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), a.d(r, "spec", function() {
            return b;
        });
        var O = a(0), t = a(1), S = a(2), R = a(3), i = a(11);
        function P() {
            return (P = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var a = arguments[r];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                }
                return e;
            }).apply(this, arguments);
        }
        function D(e) {
            return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        var Y = "PubMatic: ", A = "USD", x = void 0, s = "https://pubmatic.bbvms.com/r/".concat("$RENDERER", ".js"), N = {
            kadpageurl: "",
            gender: "",
            yob: "",
            lat: "",
            lon: "",
            wiid: "",
            profId: "",
            verId: ""
        }, n = {
            NUMBER: "number",
            STRING: "string",
            BOOLEAN: "boolean",
            ARRAY: "array",
            OBJECT: "object"
        }, o = {
            mimes: n.ARRAY,
            minduration: n.NUMBER,
            maxduration: n.NUMBER,
            startdelay: n.NUMBER,
            playbackmethod: n.ARRAY,
            api: n.ARRAY,
            protocols: n.ARRAY,
            w: n.NUMBER,
            h: n.NUMBER,
            battr: n.ARRAY,
            linearity: n.NUMBER,
            placement: n.NUMBER,
            minbitrate: n.NUMBER,
            maxbitrate: n.NUMBER
        }, c = {
            TITLE: {
                ID: 1,
                KEY: "title",
                TYPE: 0
            },
            IMAGE: {
                ID: 2,
                KEY: "image",
                TYPE: 0
            },
            ICON: {
                ID: 3,
                KEY: "icon",
                TYPE: 0
            },
            SPONSOREDBY: {
                ID: 4,
                KEY: "sponsoredBy",
                TYPE: 1
            },
            BODY: {
                ID: 5,
                KEY: "body",
                TYPE: 2
            },
            CLICKURL: {
                ID: 6,
                KEY: "clickUrl",
                TYPE: 0
            },
            VIDEO: {
                ID: 7,
                KEY: "video",
                TYPE: 0
            },
            EXT: {
                ID: 8,
                KEY: "ext",
                TYPE: 0
            },
            DATA: {
                ID: 9,
                KEY: "data",
                TYPE: 0
            },
            LOGO: {
                ID: 10,
                KEY: "logo",
                TYPE: 0
            },
            SPONSORED: {
                ID: 11,
                KEY: "sponsored",
                TYPE: 1
            },
            DESC: {
                ID: 12,
                KEY: "data",
                TYPE: 2
            },
            RATING: {
                ID: 13,
                KEY: "rating",
                TYPE: 3
            },
            LIKES: {
                ID: 14,
                KEY: "likes",
                TYPE: 4
            },
            DOWNLOADS: {
                ID: 15,
                KEY: "downloads",
                TYPE: 5
            },
            PRICE: {
                ID: 16,
                KEY: "price",
                TYPE: 6
            },
            SALEPRICE: {
                ID: 17,
                KEY: "saleprice",
                TYPE: 7
            },
            PHONE: {
                ID: 18,
                KEY: "phone",
                TYPE: 8
            },
            ADDRESS: {
                ID: 19,
                KEY: "address",
                TYPE: 9
            },
            DESC2: {
                ID: 20,
                KEY: "desc2",
                TYPE: 10
            },
            DISPLAYURL: {
                ID: 21,
                KEY: "displayurl",
                TYPE: 11
            },
            CTA: {
                ID: 22,
                KEY: "cta",
                TYPE: 12
            }
        }, l = {
            ICON: 1,
            LOGO: 2,
            IMAGE: 3
        }, m = [ {
            id: c.SPONSOREDBY.ID,
            required: !0,
            data: {
                type: 1
            }
        }, {
            id: c.TITLE.ID,
            required: !0
        }, {
            id: c.IMAGE.ID,
            required: !0
        } ], d = {
            1: "PMP",
            5: "PREF",
            6: "PMPG"
        }, p = {
            bootstrapPlayer: function(e) {
                var r = {
                    code: e.adUnitCode
                };
                if (e.vastXml ? r.vastXml = e.vastXml : e.vastUrl && (r.vastUrl = e.vastUrl), e.vastXml || e.vastUrl) {
                    for (var a, t = p.getRendererId("pubmatic", e.rendererCode), i = document.getElementById(e.adUnitCode), s = 0; s < window.bluebillywig.renderers.length; s++) if (window.bluebillywig.renderers[s]._id === t) {
                        a = window.bluebillywig.renderers[s];
                        break;
                    }
                    a ? a.bootstrap(r, i) : O.logWarn("".concat(Y, ": Couldn't find a renderer with ").concat(t));
                } else O.logWarn("".concat(Y, ": No vastXml or vastUrl on bid, bailing..."));
            },
            newRenderer: function(e, r) {
                var a = s.replace("$RENDERER", e), t = i.a.install({
                    url: a,
                    loaded: !1,
                    adUnitCode: r
                });
                try {
                    t.setRender(p.outstreamRender);
                } catch (e) {
                    O.logWarn("".concat(Y, ": Error tying to setRender on renderer"), e);
                }
                return t;
            },
            outstreamRender: function(e) {
                e.renderer.push(function() {
                    p.bootstrapPlayer(e);
                });
            },
            getRendererId: function(e, r) {
                return "".concat(e, "-").concat(r);
            }
        }, k = 0, u = !1, g = {}, h = {};
        function C(e, r) {
            if (!O.isStr(r)) return r && O.logWarn(Y + "Ignoring param key: " + e + ", expects string-value, found " + D(r)), 
            x;
            switch (e) {
              case "pmzoneid":
                return r.split(",").slice(0, 50).map(function(e) {
                    return e.trim();
                }).join();

              case "kadfloor":
              case "lat":
              case "lon":
                return parseFloat(r) || x;

              case "yob":
                return parseInt(r) || x;

              default:
                return r;
            }
        }
        function U(e) {
            var r;
            e.params.adUnit = "", e.params.adUnitIndex = "0", e.params.width = 0, e.params.height = 0, 
            e.params.adSlot = (r = e.params.adSlot, O.isStr(r) ? r.replace(/^\s+/g, "").replace(/\s+$/g, "") : "");
            var a = (t = e.params.adSlot).split(":"), t = a[0];
            if (2 == a.length && (e.params.adUnitIndex = a[1]), a = t.split("@"), e.params.adUnit = a[0], 
            1 < a.length) {
                if (2 != (a = a[1].split("x")).length) return void O.logWarn(Y + "AdSlot Error: adSlot not in required format");
                e.params.width = parseInt(a[0], 10), e.params.height = parseInt(a[1], 10);
            } else if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(S.b) && e.mediaTypes.banner.hasOwnProperty("sizes")) {
                for (var i = 0, s = []; i < e.mediaTypes.banner.sizes.length; i++) 2 === e.mediaTypes.banner.sizes[i].length && s.push(e.mediaTypes.banner.sizes[i]);
                e.mediaTypes.banner.sizes = s, 1 <= e.mediaTypes.banner.sizes.length && (e.params.width = e.mediaTypes.banner.sizes[0][0], 
                e.params.height = e.mediaTypes.banner.sizes[0][1], e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1));
            }
        }
        function f(e) {
            var r, a = e.params.video;
            if (a !== x) {
                for (var t in r = {}, o) a.hasOwnProperty(t) && (r[t] = function(e, r, a) {
                    var t, i = "Ignoring param key: " + e + ", expects " + a + ", found " + D(r);
                    switch (a) {
                      case n.BOOLEAN:
                        t = O.isBoolean;
                        break;

                      case n.NUMBER:
                        t = O.isNumber;
                        break;

                      case n.STRING:
                        t = O.isStr;
                        break;

                      case n.ARRAY:
                        t = O.isArray;
                    }
                    return t(r) ? r : (O.logWarn(Y + i), x);
                }(t, a[t], o[t]));
                O.isArray(e.mediaTypes.video.playerSize[0]) ? (r.w = parseInt(e.mediaTypes.video.playerSize[0][0], 10), 
                r.h = parseInt(e.mediaTypes.video.playerSize[0][1], 10)) : O.isNumber(e.mediaTypes.video.playerSize[0]) && (r.w = parseInt(e.mediaTypes.video.playerSize[0], 10), 
                r.h = parseInt(e.mediaTypes.video.playerSize[1], 10)), e.params.video.hasOwnProperty("skippable") && (r.ext = {
                    video_skippable: e.params.video.skippable ? 1 : 0
                });
            } else r = x, O.logWarn(Y + "Error: Video config params missing for adunit: " + e.params.adUnit + " with mediaType set as video. Ignoring video impression in the adunit.");
            return r;
        }
        function z(e) {
            var r, a, t, i, s = {}, n = {}, o = e.hasOwnProperty("sizes") ? e.sizes : [], d = "", p = [], s = {
                id: e.bidId,
                tagid: e.params.adUnit || void 0,
                bidfloor: C("kadfloor", e.params.kadfloor),
                secure: 1,
                ext: {
                    pmZoneId: C("pmzoneid", e.params.pmzoneid)
                },
                bidfloorcur: e.params.currency ? C("currency", e.params.currency) : A
            };
            if (t = s, (i = e).params.deals && (O.isArray(i.params.deals) ? i.params.deals.forEach(function(e) {
                O.isStr(e) && 3 < e.length ? (t.pmp || (t.pmp = {
                    private_auction: 0,
                    deals: []
                }), t.pmp.deals.push({
                    id: e
                })) : O.logWarn(Y + "Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: " + e);
            }) : O.logWarn(Y + "Error: bid.params.deals should be an array of strings.")), e.hasOwnProperty("mediaTypes")) for (d in e.mediaTypes) switch (d) {
              case S.b:
                (r = function(e) {
                    var r, a = e.mediaTypes.banner.sizes, t = [];
                    if (a !== x && O.isArray(a)) {
                        if (r = {}, e.params.width || e.params.height) r.w = e.params.width, r.h = e.params.height; else {
                            if (0 === a.length) return r = x, O.logWarn(Y + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), 
                            r;
                            r.w = parseInt(a[0][0], 10), r.h = parseInt(a[0][1], 10), a = a.splice(1, a.length - 1);
                        }
                        0 < a.length && (t = [], a.forEach(function(e) {
                            1 < e.length && t.push({
                                w: e[0],
                                h: e[1]
                            });
                        }), 0 < t.length && (r.format = t)), r.pos = 0, r.topframe = O.inIframe() ? 0 : 1;
                    } else O.logWarn(Y + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), 
                    r = x;
                    return r;
                }(e)) !== x && (s.banner = r);
                break;

              case S.c:
                n.request = JSON.stringify(function(e) {
                    var r, a, t, i = {
                        assets: []
                    };
                    for (var s in e) {
                        if (e.hasOwnProperty(s)) {
                            var n = {};
                            if (!(i.assets && 0 < i.assets.length && i.assets.hasOwnProperty(s))) switch (s) {
                              case c.TITLE.KEY:
                                e[s].len || e[s].length ? n = {
                                    id: c.TITLE.ID,
                                    required: e[s].required ? 1 : 0,
                                    title: {
                                        len: e[s].len || e[s].length,
                                        ext: e[s].ext
                                    }
                                } : O.logWarn(Y + "Error: Title Length is required for native ad: " + JSON.stringify(e));
                                break;

                              case c.IMAGE.KEY:
                                e[s].sizes && 0 < e[s].sizes.length ? n = {
                                    id: c.IMAGE.ID,
                                    required: e[s].required ? 1 : 0,
                                    img: {
                                        type: l.IMAGE,
                                        w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : x),
                                        h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : x),
                                        wmin: e[s].wmin || e[s].minimumWidth || (e[s].minsizes ? e[s].minsizes[0] : x),
                                        hmin: e[s].hmin || e[s].minimumHeight || (e[s].minsizes ? e[s].minsizes[1] : x),
                                        mimes: e[s].mimes,
                                        ext: e[s].ext
                                    }
                                } : O.logWarn(Y + "Error: Image sizes is required for native ad: " + JSON.stringify(e));
                                break;

                              case c.ICON.KEY:
                                e[s].sizes && 0 < e[s].sizes.length ? n = {
                                    id: c.ICON.ID,
                                    required: e[s].required ? 1 : 0,
                                    img: {
                                        type: l.ICON,
                                        w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : x),
                                        h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : x)
                                    }
                                } : O.logWarn(Y + "Error: Icon sizes is required for native ad: " + JSON.stringify(e));
                                break;

                              case c.VIDEO.KEY:
                                n = {
                                    id: c.VIDEO.ID,
                                    required: e[s].required ? 1 : 0,
                                    video: {
                                        minduration: e[s].minduration,
                                        maxduration: e[s].maxduration,
                                        protocols: e[s].protocols,
                                        mimes: e[s].mimes,
                                        ext: e[s].ext
                                    }
                                };
                                break;

                              case c.EXT.KEY:
                                n = {
                                    id: c.EXT.ID,
                                    required: e[s].required ? 1 : 0
                                };
                                break;

                              case c.LOGO.KEY:
                                n = {
                                    id: c.LOGO.ID,
                                    required: e[s].required ? 1 : 0,
                                    img: {
                                        type: l.LOGO,
                                        w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : x),
                                        h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : x)
                                    }
                                };
                                break;

                              case c.SPONSOREDBY.KEY:
                              case c.BODY.KEY:
                              case c.RATING.KEY:
                              case c.LIKES.KEY:
                              case c.DOWNLOADS.KEY:
                              case c.PRICE.KEY:
                              case c.SALEPRICE.KEY:
                              case c.PHONE.KEY:
                              case c.ADDRESS.KEY:
                              case c.DESC2.KEY:
                              case c.DISPLAYURL.KEY:
                              case c.CTA.KEY:
                                r = h[s], a = e, t = void 0, t = r.KEY, n = {
                                    id: r.ID,
                                    required: a[t].required ? 1 : 0,
                                    data: {
                                        type: r.TYPE,
                                        len: a[t].len,
                                        ext: a[t].ext
                                    }
                                };
                            }
                        }
                        n && n.id && (i.assets[i.assets.length] = n);
                    }
                    var o = m.length, d = 0;
                    return m.forEach(function(e) {
                        for (var r = i.assets.length, a = 0; a < r; a++) if (e.id == i.assets[a].id) {
                            d++;
                            break;
                        }
                    }), u = o != d, i;
                }(e.nativeParams)), u ? O.logWarn(Y + "Error: Error in Native adunit " + e.params.adUnit + ". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.") : s.native = n;
                break;

              case S.d:
                (a = f(e)) !== x && (s.video = a);
            } else r = {
                pos: 0,
                w: e.params.width,
                h: e.params.height,
                topframe: O.inIframe() ? 0 : 1
            }, O.isArray(o) && 1 < o.length && ((o = o.splice(1, o.length - 1)).forEach(function(e) {
                p.push({
                    w: e[0],
                    h: e[1]
                });
            }), r.format = p), s.banner = r;
            return function(t, i) {
                var s = -1;
                "function" != typeof i.getFloor || R.b.getConfig("pubmatic.disableFloors") || [ S.b, S.d, S.c ].forEach(function(e) {
                    var r, a;
                    t.hasOwnProperty(e) && ("object" !== D(r = i.getFloor({
                        currency: t.bidfloorcur,
                        mediaType: e,
                        size: "*"
                    })) || r.currency !== t.bidfloorcur || isNaN(parseInt(r.floor)) || (a = parseFloat(r.floor), 
                    s = -1 == s ? a : Math.min(a, s)));
                });
                t.bidfloor && (s = Math.max(s, t.bidfloor));
                t.bidfloor = !isNaN(s) && 0 < s ? s : x;
            }(s, e), s.hasOwnProperty(S.b) || s.hasOwnProperty(S.c) || s.hasOwnProperty(S.d) ? s : x;
        }
        O._each(c, function(e) {
            g[e.ID] = e.KEY;
        }), O._each(c, function(e) {
            h[e.KEY] = e;
        });
        var b = {
            code: "pubmatic",
            gvlid: 76,
            supportedMediaTypes: [ S.b, S.d, S.c ],
            isBidRequestValid: function(e) {
                if (e && e.params) {
                    if (!O.isStr(e.params.publisherId)) return O.logWarn(Y + "Error: publisherId is mandatory and cannot be numeric. Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)), 
                    !1;
                    if (e.params.hasOwnProperty("video")) {
                        if (!e.params.video.hasOwnProperty("mimes") || !O.isArray(e.params.video.mimes) || 0 === e.params.video.mimes.length) return O.logWarn(Y + "Error: For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(e)), 
                        !1;
                        if (!e.hasOwnProperty("mediaTypes") || !e.mediaTypes.hasOwnProperty(S.d)) return O.logError("".concat(Y, ": mediaTypes or mediaTypes.video is not specified. Rejecting bid: "), e), 
                        !1;
                        if (!e.mediaTypes[S.d].hasOwnProperty("context")) return O.logError("".concat(Y, ": no context specified in bid. Rejecting bid: "), e), 
                        !1;
                        if ("outstream" === e.mediaTypes[S.d].context && !O.isStr(e.params.outstreamAU)) return O.logError("".concat(Y, ': for "outstream" bids outstreamAU is required. Rejecting bid: '), e), 
                        !1;
                    }
                    return !0;
                }
                return !1;
            },
            buildRequests: function(e, r) {
                var a;
                r && r.refererInfo && (a = r.refererInfo);
                var t, i, s, n, o, d, p, c, l, m, u, g, h, f, b, y, v = {
                    pageURL: (t = a) && t.referer ? t.referer : window.location.href,
                    refURL: window.document.referrer
                }, E = (i = v, {
                    id: "" + new Date().getTime(),
                    at: 1,
                    cur: [ A ],
                    imp: [],
                    site: {
                        page: i.pageURL,
                        ref: i.refURL,
                        publisher: {}
                    },
                    device: {
                        ua: navigator.userAgent,
                        js: 1,
                        dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                        h: screen.height,
                        w: screen.width,
                        language: navigator.language
                    },
                    user: {},
                    ext: {}
                }), I = "", w = [], T = [];
                if (e.forEach(function(e) {
                    var r;
                    (s = O.deepClone(e)).params.adSlot = s.params.adSlot || "", U(s), s.params.hasOwnProperty("video") || s.hasOwnProperty("mediaTypes") && s.mediaTypes.hasOwnProperty(S.c) || 0 !== s.params.width || 0 !== s.params.height ? (v.pubId = v.pubId || s.params.publisherId, 
                    (v = function(e, r) {
                        var a, t, i;
                        for (a in r.kadpageurl || (r.kadpageurl = r.pageURL), N) N.hasOwnProperty(a) && (t = e[a]) && ("object" === D(i = N[a]) && (t = i.f(t, r)), 
                        O.isStr(t) ? r[a] = t : O.logWarn(Y + "Ignoring param : " + a + " with value : " + N[a] + ", expects string-value, found " + D(t)));
                        return r;
                    }(s.params, v)).transactionId = s.transactionId, "" === I ? I = s.params.currency || x : s.params.hasOwnProperty("currency") && I !== s.params.currency && O.logWarn(Y + "Currency specifier ignored. Only one currency permitted."), 
                    s.params.currency = I, s.params.hasOwnProperty("dctr") && O.isStr(s.params.dctr) && w.push(s.params.dctr), 
                    s.params.hasOwnProperty("bcat") && O.isArray(s.params.bcat) && (T = T.concat(s.params.bcat)), 
                    (r = z(s)) && E.imp.push(r)) : O.logWarn(Y + "Skipping the non-standard adslot: ", s.params.adSlot, JSON.stringify(s));
                }), 0 != E.imp.length) return E.site.publisher.id = v.pubId.trim(), k = v.pubId.trim(), 
                E.ext.wrapper = {}, E.ext.wrapper.profile = parseInt(v.profId) || x, E.ext.wrapper.version = parseInt(v.verId) || x, 
                E.ext.wrapper.wiid = v.wiid || x, E.ext.wrapper.wv = "prebid_prebid_4.4.0", E.ext.wrapper.transactionId = v.transactionId, 
                E.ext.wrapper.wp = "pbjs", E.user.gender = v.gender ? v.gender.trim() : x, E.user.geo = {}, 
                E.user.geo.lat = C("lat", v.lat), E.user.geo.lon = C("lon", v.lon), E.user.yob = C("yob", v.yob), 
                E.device.geo = E.user.geo, E.site.page = v.kadpageurl.trim() || E.site.page.trim(), 
                E.site.domain = (n = E.site.page, (o = document.createElement("a")).href = n, o.hostname), 
                "object" === D(R.b.getConfig("content")) && (E.site.content = R.b.getConfig("content")), 
                "object" === D(R.b.getConfig("device")) && (E.device = P(E.device, R.b.getConfig("device"))), 
                O.deepSetValue(E, "source.tid", v.transactionId), -1 !== window.location.href.indexOf("pubmaticTest=true") && (E.test = 1), 
                e[0].schain && O.deepSetValue(E, "source.ext.schain", e[0].schain), r && r.gdprConsent && (O.deepSetValue(E, "user.ext.consent", r.gdprConsent.consentString), 
                O.deepSetValue(E, "regs.ext.gdpr", r.gdprConsent.gdprApplies ? 1 : 0)), r && r.uspConsent && O.deepSetValue(E, "regs.ext.us_privacy", r.uspConsent), 
                !0 === R.b.getConfig("coppa") && O.deepSetValue(E, "regs.coppa", 1), d = E, c = e, 
                u = "", 0 < (p = w).length && (c[0].params.hasOwnProperty("dctr") ? (u = c[0].params.dctr, 
                O.isStr(u) && 0 < u.length ? (m = u.split("|"), u = "", m.forEach(function(e) {
                    u += 0 < e.length ? e.trim() + "|" : "";
                }), l = u.length, "|" === u.substring(l, l - 1) && (u = u.substring(0, l - 1)), 
                d.site.ext = {
                    key_val: u.trim()
                }) : O.logWarn(Y + "Ignoring param : dctr with value : " + u + ", expects string-value, found empty or non-string value"), 
                1 < p.length && O.logWarn(Y + "dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits")) : O.logWarn(Y + "dctr value not found in 1st adunit, ignoring values from subsequent adunits")), 
                g = E, h = e, f = O.deepAccess(h, "0.userIdAsEids"), O.isArray(f) && 0 < f.length && O.deepSetValue(g, "user.eids", f), 
                b = E, 0 < (y = (y = T).filter(function(e) {
                    return "string" == typeof e || (O.logWarn(Y + "bcat: Each category should be a string, ignoring category: " + e), 
                    !1);
                }).map(function(e) {
                    return e.trim();
                }).filter(function(e, r, a) {
                    return 3 < e.length ? a.indexOf(e) === r : void O.logWarn(Y + "bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " + e);
                })).length && (O.logWarn(Y + "bcat: Selected: ", y), b.bcat = y), "object" === D(R.b.getConfig("app")) && (E.app = R.b.getConfig("app"), 
                E.app.publisher = E.site.publisher, E.app.ext = E.site.ext || x, "object" !== D(E.app.content) && (E.app.content = E.site.content || x), 
                delete E.site), {
                    method: "POST",
                    url: "https://hbopenbid.pubmatic.com/translator?source=prebid-client",
                    data: JSON.stringify(E),
                    bidderRequest: r
                };
            },
            interpretResponse: function(e, t) {
                var i = [], s = A, n = JSON.parse(t.data), o = n.site && n.site.ref ? n.site.ref : "";
                try {
                    e.body && e.body.seatbid && O.isArray(e.body.seatbid) && (s = e.body.cur || s, e.body.seatbid.forEach(function(e) {
                        e.bid && O.isArray(e.bid) && e.bid.forEach(function(r) {
                            var a = {
                                requestId: r.impid,
                                cpm: (parseFloat(r.price) || 0).toFixed(2),
                                width: r.w,
                                height: r.h,
                                creativeId: r.crid || r.id,
                                dealId: r.dealid,
                                currency: s,
                                netRevenue: !1,
                                ttl: 300,
                                referrer: o,
                                ad: r.adm,
                                pm_seat: e.seat || null,
                                pm_dspid: r.ext && r.ext.dspid ? r.ext.dspid : null,
                                partnerImpId: r.id || ""
                            };
                            n.imp && 0 < n.imp.length && n.imp.forEach(function(e) {
                                if (r.impid === e.id) switch (!function(r, e) {
                                    var a, t = new RegExp(/VAST\s+version/);
                                    if (0 <= r.indexOf('span class="PubAPIAd"')) e.mediaType = S.b; else if (t.test(r)) e.mediaType = S.d; else try {
                                        (a = JSON.parse(r.replace(/\\/g, ""))) && a.native && (e.mediaType = S.c);
                                    } catch (e) {
                                        O.logWarn(Y + "Error: Cannot parse native reponse for ad response: " + r);
                                    }
                                }(r.adm, a), a.mediaType) {
                                  case S.b:
                                    break;

                                  case S.d:
                                    a.width = r.hasOwnProperty("w") ? r.w : e.video.w, a.height = r.hasOwnProperty("h") ? r.h : e.video.h, 
                                    a.vastXml = r.adm, function(e, r) {
                                        var a, t, i;
                                        if (r.bidderRequest && r.bidderRequest.bids) {
                                            for (var s = 0; s < r.bidderRequest.bids.length; s++) r.bidderRequest.bids[s].bidId === e.requestId && (a = r.bidderRequest.bids[s].params, 
                                            t = r.bidderRequest.bids[s].mediaTypes[S.d].context, i = r.bidderRequest.bids[s].adUnitCode);
                                            t && "outstream" === t && a && a.outstreamAU && i && (e.rendererCode = a.outstreamAU, 
                                            e.renderer = p.newRenderer(e.rendererCode, i));
                                        }
                                    }(a, t);
                                    break;

                                  case S.c:
                                    !function(e, r) {
                                        if (r.native = {}, e.hasOwnProperty("adm")) {
                                            var a = "";
                                            try {
                                                a = JSON.parse(e.adm.replace(/\\/g, ""));
                                            } catch (e) {
                                                return O.logWarn(Y + "Error: Cannot parse native reponse for ad response: " + r.adm);
                                            }
                                            if (a && a.native && a.native.assets && 0 < a.native.assets.length) {
                                                r.mediaType = S.c;
                                                for (var t = 0, i = a.native.assets.length; t < i; t++) switch (a.native.assets[t].id) {
                                                  case c.TITLE.ID:
                                                    r.native.title = a.native.assets[t].title && a.native.assets[t].title.text;
                                                    break;

                                                  case c.IMAGE.ID:
                                                    r.native.image = {
                                                        url: a.native.assets[t].img && a.native.assets[t].img.url,
                                                        height: a.native.assets[t].img && a.native.assets[t].img.h,
                                                        width: a.native.assets[t].img && a.native.assets[t].img.w
                                                    };
                                                    break;

                                                  case c.ICON.ID:
                                                    r.native.icon = {
                                                        url: a.native.assets[t].img && a.native.assets[t].img.url,
                                                        height: a.native.assets[t].img && a.native.assets[t].img.h,
                                                        width: a.native.assets[t].img && a.native.assets[t].img.w
                                                    };
                                                    break;

                                                  case c.SPONSOREDBY.ID:
                                                  case c.BODY.ID:
                                                  case c.LIKES.ID:
                                                  case c.DOWNLOADS.ID:
                                                  case c.PRICE:
                                                  case c.SALEPRICE.ID:
                                                  case c.PHONE.ID:
                                                  case c.ADDRESS.ID:
                                                  case c.DESC2.ID:
                                                  case c.CTA.ID:
                                                  case c.RATING.ID:
                                                  case c.DISPLAYURL.ID:
                                                    r.native[g[a.native.assets[t].id]] = a.native.assets[t].data && a.native.assets[t].data.value;
                                                }
                                                r.native.clickUrl = a.native.link && a.native.link.url, r.native.clickTrackers = a.native.link && a.native.link.clicktrackers || [], 
                                                r.native.impressionTrackers = a.native.imptrackers || [], r.native.jstracker = a.native.jstracker || [], 
                                                r.width || (r.width = 0), r.height || (r.height = 0);
                                            }
                                        }
                                    }(r, a);
                                }
                            }), r.ext && r.ext.deal_channel && (a.dealChannel = d[r.ext.deal_channel] || null), 
                            a.meta = {}, r.ext && r.ext.dspid && (a.meta.networkId = r.ext.dspid), r.ext && r.ext.advid && (a.meta.buyerId = r.ext.advid), 
                            r.adomain && 0 < r.adomain.length && (a.meta.advertiserDomains = r.adomain, a.meta.clickUrl = r.adomain[0]), 
                            e.ext && e.ext.buyid && (a.adserverTargeting = {
                                hb_buyid_pubmatic: e.ext.buyid
                            }), i.push(a);
                        });
                    }));
                } catch (e) {
                    O.logError(e);
                }
                return i;
            },
            getUserSyncs: function(e, r, a, t) {
                var i = "" + k;
                return a && (i += "&gdpr=" + (a.gdprApplies ? 1 : 0), i += "&gdpr_consent=" + encodeURIComponent(a.consentString || "")), 
                t && (i += "&us_privacy=" + encodeURIComponent(t)), !0 === R.b.getConfig("coppa") && (i += "&coppa=1"), 
                e.iframeEnabled ? [ {
                    type: "iframe",
                    url: "https://ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=" + i
                } ] : [ {
                    type: "image",
                    url: "https://image8.pubmatic.com/AdServer/ImgSync?p=" + i
                } ];
            },
            transformBidParams: function(e) {
                return O.convertTypes({
                    publisherId: "string",
                    adSlot: "string"
                }, e);
            }
        };
        Object(t.registerBidder)(b);
    }
}, [ 622 ]);

pbjs.processQueue();

var jppol = function(exports) {
    "use strict";
    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function BidderHandler(bannerObject, keywords) {
        try {
            var ebBidders = [];
            if (typeof bannerObject.adformMID !== "undefined") {
                ebBidders.push({
                    bidder: "adform",
                    params: {
                        mid: bannerObject.adformMID,
                        rcur: "USD"
                    }
                });
            }
            if (typeof bannerObject.appnexusID !== "undefined") {
                var appnexusObj = keywords ? {
                    bidder: "appnexus",
                    params: {
                        keywords: keywords,
                        placementId: bannerObject.appnexusID
                    }
                } : {
                    bidder: "appnexus",
                    params: {
                        placementId: bannerObject.appnexusID
                    }
                };
                ebBidders.push(appnexusObj);
            }
            if (typeof bannerObject.criteoId !== "undefined") {
                ebBidders.push({
                    bidder: "criteo",
                    params: {
                        zoneId: bannerObject.criteoId
                    }
                });
            }
            if (typeof bannerObject.pubmaticAdSlot !== "undefined") {
                var sizes = bannerObject.sizes;
                var sizesLength = sizes.length;
                for (var i = sizesLength; i--; ) {
                    var sizeJoint = sizes[i].join("x");
                    var PubMaticAdslotName = bannerObject.pubmaticAdSlot + "@" + sizeJoint;
                    ebBidders.push({
                        bidder: "pubmatic",
                        params: {
                            adSlot: PubMaticAdslotName,
                            publisherId: bannerObject.pubmaticPublisherId
                        }
                    });
                }
            }
            if (typeof bannerObject.rubiconZone !== "undefined") {
                ebBidders.push({
                    bidder: "rubicon",
                    params: {
                        accountId: bannerObject.rubiconAccountId,
                        siteId: bannerObject.rubiconSiteID,
                        zoneId: bannerObject.rubiconZone
                    }
                });
            }
            return ebBidders;
        } catch (err) {
            console.error("jppolPrebid BidderHandler", err);
        }
    }
    function AdUnitCreator(bannerContainer, keywords) {
        try {
            var adUnits = [];
            for (var _i = 0, bannerContainer_1 = bannerContainer; _i < bannerContainer_1.length; _i++) {
                var banner = bannerContainer_1[_i];
                var bidders = BidderHandler(banner, keywords);
                var adUnit = {
                    bids: bidders,
                    code: banner.targetId,
                    mediaTypes: {
                        banner: {
                            sizes: banner.sizes
                        }
                    }
                };
                if (banner.pubstackData) {
                    adUnit.pubstack = banner.pubstackData;
                    console.log("prebid: add pubstack data");
                }
                adUnits.push(adUnit);
            }
            return adUnits;
        } catch (err) {
            console.error("prebid", "biddersetup", err);
        }
    }
    var PREBIDAUCTION = "prebidAuction";
    var COMPLETED = "completed";
    var AuctionHandler = function() {
        function AuctionHandler(options) {
            var prebidDefault = {
                consentAllowAuction: true,
                consentTimeout: 3e6,
                debug: false,
                timeout: 700
            };
            var auctionSettings = __assign(__assign({}, prebidDefault), options);
            this.auction(auctionSettings);
        }
        AuctionHandler.prototype.auction = function(options) {
            try {
                var pbjs_1 = window.pbjs;
                console.log("prebid: window[PREBIDAUCTION][COMPLETED]", window[PREBIDAUCTION][COMPLETED]);
                if (window[PREBIDAUCTION][COMPLETED]) {
                    console.log("prebid: If the auction is completed, remove adunits");
                    pbjs_1.removeAdUnit();
                }
                window[PREBIDAUCTION][COMPLETED] = false;
                var adUnits_1 = AdUnitCreator(options.banners, options.keywords);
                pbjs_1.que.push(function() {
                    if (adUnits_1.length > 0) {
                        pbjs_1.setConfig({
                            bidderTimeout: options.timeout,
                            consentManagement: {
                                allowAuctionWithoutConsent: options.consentAllowAuction,
                                cmpApi: "iab",
                                timeout: options.consentTimeout
                            },
                            debug: options.debug,
                            priceGranularity: "high",
                            userSync: {
                                enabledBidders: [ "pubmatic" ],
                                iframeEnabled: true,
                                syncDelay: 6e3
                            }
                        });
                        pbjs_1.addAdUnits(adUnits_1);
                        console.log("prebid: pbjs.adUnits?", pbjs_1.adUnits);
                        pbjs_1.requestBids({
                            bidsBackHandler: function(bidResponse) {
                                console.log("prebid: bidsBackHandler", bidResponse);
                                var apntag = window.apntag;
                                if (typeof apntag !== "undefined") {
                                    pbjs_1.que.push(function() {
                                        console.log("prebid: bidsBackHandler adding apn to pbjs que");
                                        apntag.anq.push(function() {
                                            pbjs_1.setTargetingForAst();
                                            apntag.loadTags();
                                            window.jppolStillWaitingForPrebid = false;
                                            console.log("__apn we just loaded prebid banners");
                                            console.log("prebid: bidsBackHandler pbjs.setTargetingForAst() && apntag.loadTags()");
                                        });
                                    });
                                }
                                if (typeof options.adserverCallback !== "undefined") {
                                    options.adserverCallback(bidResponse);
                                }
                                window[PREBIDAUCTION][COMPLETED] = true;
                            }
                        });
                    }
                });
            } catch (err) {
                console.error("AuctionHandler auction", err);
            }
        };
        return AuctionHandler;
    }();
    var _a;
    window[PREBIDAUCTION] = window[PREBIDAUCTION] || (_a = {}, _a[COMPLETED] = true, 
    _a);
    window.PublisherCommonId = {
        getId: function() {
            var _a;
            return (_a = window.jppolidvalue) !== null && _a !== void 0 ? _a : "missing";
        }
    };
    function prebid(options) {
        window.jppolStillWaitingForPrebid = true;
        new AuctionHandler(options);
    }
    exports.prebid = prebid;
    return exports;
}({});