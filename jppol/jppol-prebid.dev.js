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
        293: 0
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
    }, f(f.s = 720);
}({
    0: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "internal", function() {
            return _;
        }), n.d(t, "bind", function() {
            return U;
        }), t.replaceTokenInString = function(i, e, o) {
            return re(e, function(e, t) {
                e = void 0 === e ? "" : e;
                var n = o + t.toUpperCase() + o, r = new RegExp(n, "g");
                i = i.replace(r, e);
            }), i;
        }, t.getUniqueIdentifierStr = N, t.generateUUID = function e(t) {
            return t ? (t ^ x() >> t / 4).toString(16) : ([ 1e7 ] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e);
        }, t.getBidIdParameter = function(e, t) {
            if (t && t[e]) return t[e];
            return "";
        }, t.tryAppendQueryString = function(e, t, n) {
            if (n) return e += t + "=" + encodeURIComponent(n) + "&";
            return e;
        }, t.parseQueryStringParameters = function(e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
            return t;
        }, t.transformAdServerTargetingObj = function(t) {
            return t && 0 < Object.getOwnPropertyNames(t).length ? ge(t).map(function(e) {
                return "".concat(e, "=").concat(encodeURIComponent(pe(t, e)));
            }).join("&") : "";
        }, t.getAdUnitSizes = function(e) {
            if (!e) return;
            var t = [];
            if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
                var n = e.mediaTypes.banner.sizes;
                Array.isArray(n[0]) ? t = n : t.push(n);
            } else Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes));
            return t;
        }, t.parseSizesInput = function(e) {
            var t = [];
            if ("string" == typeof e) {
                var n = e.split(","), r = /^(\d)+x(\d)+$/i;
                if (n) for (var i in n) oe(n, i) && n[i].match(r) && t.push(n[i]);
            } else if ("object" === b(e)) {
                var o = e.length;
                if (0 < o) if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(k(e)); else for (var a = 0; a < o; a++) t.push(k(e[a]));
            }
            return t;
        }, t.parseGPTSingleSizeArray = k, t.parseGPTSingleSizeArrayToRtbSize = function(e) {
            if (P(e)) return {
                w: e[0],
                h: e[1]
            };
        }, t.getTopWindowLocation = q, t.getTopFrameReferrer = M, t.getAncestorOrigins = G, 
        t.getWindowTop = W, t.getWindowSelf = L, t.getWindowLocation = F, t.getTopWindowUrl = function() {
            var t;
            try {
                t = _.getTopWindowLocation().href;
            } catch (e) {
                t = "";
            }
            return t;
        }, t.getTopWindowReferrer = function() {
            try {
                return window.top.document.referrer;
            } catch (e) {
                return document.referrer;
            }
        }, t.logMessage = z, t.logInfo = V, t.logWarn = H, t.logError = K, t.hasConsoleLogger = function() {
            return I;
        }, t.debugTurnedOn = Y, t.createInvisibleIframe = function() {
            var e = document.createElement("iframe");
            return e.id = N(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", 
            e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", 
            e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", 
            e;
        }, t.getParameterByName = function(e) {
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
            return null !== t ? decodeURIComponent(t[1].replace(/\+/g, " ")) : "";
        }, t.hasValidBidRequest = function(e, n, t) {
            var r = !1;
            function i(e, t) {
                t === n[o] && (r = !0);
            }
            for (var o = 0; o < n.length; o++) if (r = !1, re(e, i), !r) return K("Params are missing for bid request. One of these required paramaters are missing: " + n, t), 
            !1;
            return !0;
        }, t.addEventHandler = function(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent && e.attachEvent("on" + t, n);
        }, t.isA = Q, t.isFn = X, t.isStr = $, t.isArray = Z, t.isNumber = ee, t.isPlainObject = te, 
        t.isBoolean = function(e) {
            return Q(e, A);
        }, t.isEmpty = ne, t.isEmptyStr = function(e) {
            return $(e) && (!e || 0 === e.length);
        }, t._each = re, t.contains = function(e, t) {
            if (ne(e)) return !1;
            if (X(e.indexOf)) return -1 !== e.indexOf(t);
            var n = e.length;
            for (;n--; ) if (e[n] === t) return !0;
            return !1;
        }, n.d(t, "indexOf", function() {
            return ie;
        }), t._map = function(n, r) {
            if (ne(n)) return [];
            if (X(n.map)) return n.map(r);
            var i = [];
            return re(n, function(e, t) {
                i.push(r(e, t, n));
            }), i;
        }, t.hasOwn = oe, t.insertElement = ae, t.triggerPixel = ce, t.callBurl = function(e) {
            var t = e.source, n = e.burl;
            t === y.S2S.SRC && n && _.triggerPixel(n);
        }, t.insertHtmlIntoIframe = function(e) {
            if (!e) return;
            var t = document.createElement("iframe");
            t.id = N(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", t.marginWidth = "0", 
            t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", t.style.width = "0px", 
            t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", _.insertElement(t, document, "body"), 
            t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close();
        }, t.insertUserSyncIframe = ue, t.createTrackPixelHtml = function(e) {
            if (!e) return "";
            var t = encodeURI(e), n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return n += '<img src="' + t + '"></div>';
        }, t.createTrackPixelIframeHtml = se, t.getIframeDocument = function(e) {
            if (!e) return;
            var t;
            try {
                t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument;
            } catch (e) {
                _.logError("Cannot get iframe document", e);
            }
            return t;
        }, t.getValueString = de, t.uniques = fe, t.flatten = le, t.getBidRequest = function(n, e) {
            return n ? (e.some(function(e) {
                var t = c()(e.bids, function(t) {
                    return [ "bidId", "adId", "bid_id" ].some(function(e) {
                        return t[e] === n;
                    });
                });
                return t && (r = t), t;
            }), r) : void 0;
            var r;
        }, t.getKeys = ge, t.getValue = pe, t.getKeyByValue = function(e, t) {
            for (var n in e) if (e.hasOwnProperty(n) && e[n] === t) return n;
        }, t.getBidderCodes = function() {
            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map(function(e) {
                return e.bids.map(function(e) {
                    return e.bidder;
                }).reduce(le, []);
            }).reduce(le).filter(fe);
        }, t.isGptPubadsDefined = function() {
            if (window.googletag && X(window.googletag.pubads) && X(window.googletag.pubads().getSlots)) return !0;
        }, n.d(t, "getHighestCpm", function() {
            return be;
        }), n.d(t, "getOldestHighestCpmBid", function() {
            return ye;
        }), n.d(t, "getLatestHighestCpmBid", function() {
            return ve;
        }), t.shuffle = function(e) {
            var t = e.length;
            for (;0 < t; ) {
                var n = Math.floor(Math.random() * t), r = e[--t];
                e[t] = e[n], e[n] = r;
            }
            return e;
        }, t.adUnitsFilter = function(e, t) {
            return s()(e, t && t.adUnitCode);
        }, t.isSrcdocSupported = function(e) {
            return e.defaultView && e.defaultView.frameElement && "srcdoc" in e.defaultView.frameElement && !/firefox/i.test(navigator.userAgent);
        }, t.deepClone = me, t.inIframe = Se, t.isSafariBrowser = function() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        }, t.replaceAuctionPrice = function(e, t) {
            if (!e) return;
            return e.replace(/\$\{AUCTION_PRICE\}/g, t);
        }, t.timestamp = function() {
            return new Date().getTime();
        }, t.checkCookieSupport = Ee, t.cookiesAreEnabled = function() {
            if (_.checkCookieSupport()) return !0;
            return window.document.cookie = "prebid.cookieTest", -1 != window.document.cookie.indexOf("prebid.cookieTest");
        }, t.getCookie = function(e) {
            var t = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
            return t ? decodeURIComponent(t[2]) : null;
        }, t.setCookie = function(e, t, n, r) {
            document.cookie = "".concat(e, "=").concat(encodeURIComponent(t)).concat("" !== n ? "; expires=".concat(n) : "", "; path=/").concat(r ? "; SameSite=".concat(r) : "");
        }, t.localStorageIsEnabled = function() {
            try {
                return localStorage.setItem("prebid.cookieTest", "1"), "1" === localStorage.getItem("prebid.cookieTest");
            } catch (e) {
                return !1;
            }
        }, t.delayExecution = function(e, t) {
            if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));
            var n = 0;
            return function() {
                ++n === t && e.apply(this, arguments);
            };
        }, t.groupBy = function(e, n) {
            return e.reduce(function(e, t) {
                return (e[t[n]] = e[t[n]] || []).push(t), e;
            }, {});
        }, t.createContentToExecuteExtScriptInFriendlyFrame = function(e) {
            return e ? '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="'.concat(e, '"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>') : "";
        }, t.getDefinedParams = function(n, e) {
            return e.filter(function(e) {
                return n[e];
            }).reduce(function(e, t) {
                return p(e, function(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n;
                    return e;
                }({}, t, n[t]));
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
            }).reduce(le, []).filter(function(e) {
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
        }, t.isSlotMatchingAdUnitCode = function(t) {
            return function(e) {
                return Ae(e, t);
            };
        }, t.unsupportedBidderMessage = function(e, t) {
            var n = Object.keys(e.mediaTypes || {
                banner: "banner"
            }).join(", ");
            return "\n    ".concat(e.code, " is a ").concat(n, " ad unit\n    containing bidders that don't support ").concat(n, ": ").concat(t, ".\n    This bidder won't fetch demand.\n  ");
        }, t.deletePropertyFromObject = function(e, t) {
            var n = p({}, e);
            return delete n[t], n;
        }, t.isInteger = Te, t.convertCamelToUnderscore = function(e) {
            return e.replace(/(?:^|\.?)([A-Z])/g, function(e, t) {
                return "_" + t.toLowerCase();
            }).replace(/^_/, "");
        }, t.cleanObj = function(n) {
            return Object.keys(n).reduce(function(e, t) {
                return void 0 !== n[t] && (e[t] = n[t]), e;
            }, {});
        }, t.pick = function(a, c) {
            return "object" === b(a) ? c.reduce(function(e, t, n) {
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
                        !(e = de(r + "." + t, e)) && "" !== e || n.push(e);
                    }), e = n;
                } else {
                    if (!$(e = de(r + "." + t, e))) return;
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
                i[e] && (X(r[e]) ? i[e] = r[e](i[e]) : i[e] = (t = r[e], n = i[e], "string" === t ? n && n.toString() : "number" === t ? Number(n) : n), 
                isNaN(i[e]) && delete i.key);
            }), i;
        }, t.setDataInLocalStorage = function(e, t) {
            Oe() && window.localStorage.setItem(e, t);
        }, t.getDataFromLocalStorage = function(e) {
            if (Oe()) return window.localStorage.getItem(e);
        }, t.removeDataFromLocalStorage = function(e) {
            Oe() && window.localStorage.removeItem(e);
        }, t.hasLocalStorage = Oe, t.isArrayOfNums = function(e, t) {
            return Z(e) && (!t || e.length === t) && e.every(function(e) {
                return Te(e);
            });
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
            return Math.min.apply(Math, g(e));
        }, t.getMaxValueFromArray = function(e) {
            return Math.max.apply(Math, g(e));
        }, t.compareOn = function(n) {
            return function(e, t) {
                return e[n] < t[n] ? 1 : e[n] > t[n] ? -1 : 0;
            };
        };
        var r = n(3), i = n(118), o = n.n(i), a = n(12), c = n.n(a), u = n(11), s = n.n(u), d = n(9), f = n(119);
        n.d(t, "deepAccess", function() {
            return f.a;
        });
        var l = n(120);
        function g(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n;
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance");
            }();
        }
        function p() {
            return (p = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        function b(e) {
            return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        n.d(t, "deepSetValue", function() {
            return l.a;
        });
        var y = n(5), v = "Array", h = "String", m = "Function", S = "Number", E = "Object", A = "Boolean", T = Object.prototype.toString, O = Boolean(window.console), I = Boolean(O && window.console.log), w = Boolean(O && window.console.info), C = Boolean(O && window.console.warn), j = Boolean(O && window.console.error), _ = {
            checkCookieSupport: Ee,
            createTrackPixelIframeHtml: se,
            getWindowSelf: L,
            getWindowTop: W,
            getAncestorOrigins: G,
            getTopFrameReferrer: M,
            getWindowLocation: F,
            getTopWindowLocation: q,
            insertUserSyncIframe: ue,
            insertElement: ae,
            isFn: X,
            triggerPixel: ce,
            logError: K,
            logWarn: H,
            logMessage: z,
            logInfo: V
        }, B = {}, U = function(e, t) {
            return t;
        }.bind(null, 1, B)() === B ? Function.prototype.bind : function(e) {
            var t = this, n = Array.prototype.slice.call(arguments, 1);
            return function() {
                return t.apply(e, n.concat(Array.prototype.slice.call(arguments)));
            };
        };
        var R, D = (R = 0, function() {
            return ++R;
        });
        function N() {
            return D() + Math.random().toString(16).substr(2);
        }
        function x() {
            return window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random();
        }
        function k(e) {
            if (P(e)) return e[0] + "x" + e[1];
        }
        function P(e) {
            return Z(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]);
        }
        function q() {
            if (Se()) {
                var e;
                try {
                    e = _.getAncestorOrigins() || _.getTopFrameReferrer();
                } catch (e) {
                    V("could not obtain top window location", e);
                }
                if (e) return Object(d.c)(e, {
                    decodeSearchAsString: !0
                });
            }
            return _.getWindowLocation();
        }
        function M() {
            try {
                window.top.location.toString();
                for (var e, t = ""; (e = e ? e.parent : window).document && e.document.referrer && (t = e.document.referrer), 
                e !== window.top; ) ;
                return t;
            } catch (e) {
                return window.document.referrer;
            }
        }
        function G() {
            if (window.document.location && window.document.location.ancestorOrigins && 1 <= window.document.location.ancestorOrigins.length) return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1];
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
            Y() && I && console.log.apply(console, J(arguments, "MESSAGE:"));
        }
        function V() {
            Y() && w && console.info.apply(console, J(arguments, "INFO:"));
        }
        function H() {
            Y() && C && console.warn.apply(console, J(arguments, "WARNING:"));
        }
        function K() {
            Y() && j && console.error.apply(console, J(arguments, "ERROR:"));
        }
        function J(e, t) {
            return e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), 
            e.unshift("%cPrebid"), e;
        }
        function Y() {
            return !!r.b.getConfig("debug");
        }
        function Q(e, t) {
            return T.call(e) === "[object " + t + "]";
        }
        function X(e) {
            return Q(e, m);
        }
        function $(e) {
            return Q(e, h);
        }
        function Z(e) {
            return Q(e, v);
        }
        function ee(e) {
            return Q(e, S);
        }
        function te(e) {
            return Q(e, E);
        }
        function ne(e) {
            if (!e) return !0;
            if (Z(e) || $(e)) return !(0 < e.length);
            for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
            return !0;
        }
        function re(e, t) {
            if (!ne(e)) {
                if (X(e.forEach)) return e.forEach(t, this);
                var n = 0, r = e.length;
                if (0 < r) for (;n < r; n++) t(e[n], n, e); else for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n);
            }
        }
        var ie = function() {
            if (Array.prototype.indexOf) return Array.prototype.indexOf;
        }();
        function oe(e, t) {
            return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t];
        }
        function ae(e, t, n, r) {
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
        function ce(e, t) {
            var n = new Image();
            t && _.isFn(t) && (n.addEventListener("load", t), n.addEventListener("error", t)), 
            n.src = e;
        }
        function ue(e, t) {
            var n = _.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"), r = document.createElement("div");
            r.innerHTML = n;
            var i = r.firstChild;
            t && _.isFn(t) && (i.addEventListener("load", t), i.addEventListener("error", t)), 
            _.insertElement(i, document, "html", !0);
        }
        function se(e) {
            var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            return e ? ((!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && (e = encodeURI(e)), 
            t = t && 'sandbox="'.concat(t, '"'), "<iframe ".concat(t, ' id="').concat(N(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : "";
        }
        function de(e, t, n) {
            return null == t ? n : $(t) ? t : ee(t) ? t.toString() : void _.logWarn("Unsuported type for param: " + e + " required type: String");
        }
        function fe(e, t, n) {
            return n.indexOf(e) === t;
        }
        function le(e, t) {
            return e.concat(t);
        }
        function ge(e) {
            return Object.keys(e);
        }
        function pe(e, t) {
            return e[t];
        }
        var be = he("timeToRespond", function(e, t) {
            return t < e;
        }), ye = he("responseTimestamp", function(e, t) {
            return t < e;
        }), ve = he("responseTimestamp", function(e, t) {
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
            try {
                return _.getWindowSelf() !== _.getWindowTop();
            } catch (e) {
                return !0;
            }
        }
        function Ee() {
            if (window.navigator.cookieEnabled || document.cookie.length) return !0;
        }
        var Ae = function(e, t) {
            return e.getAdUnitPath() === t || e.getSlotElementId() === t;
        };
        function Te(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e;
        }
        function Oe() {
            try {
                return !!window.localStorage;
            } catch (e) {
                K("Local storage api disabled");
            }
        }
    },
    1: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.registerBidder = function(t) {
            var n = Array.isArray(t.supportedMediaTypes) ? {
                supportedMediaTypes: t.supportedMediaTypes
            } : void 0;
            function r(e) {
                var t = I(e);
                a.default.registerBidAdapter(t, e.code, n);
            }
            r(t), Array.isArray(t.aliases) && t.aliases.forEach(function(e) {
                a.default.aliasRegistry[e] = t.code, r(A({}, t, {
                    code: e
                }));
            });
        }, t.newBidder = I, t.preloadBidderMappingFile = w, t.getIabSubCategory = function(t, e) {
            var n = a.default.getBidAdapter(t);
            if (n.getSpec().getMappingFileInfo) {
                var r = n.getSpec().getMappingFileInfo(), i = r.localStorageKey ? r.localStorageKey : n.getBidderCode(), o = Object(m.getDataFromLocalStorage)(i);
                if (o) {
                    try {
                        o = JSON.parse(o);
                    } catch (e) {
                        Object(m.logError)("Failed to parse ".concat(t, " mapping data stored in local storage"));
                    }
                    return o.mapping[e] ? o.mapping[e] : null;
                }
            }
        }, t.isValid = C;
        var r = n(54), a = n(7), o = n(3), y = n(23), c = n(32), u = n(27), s = n(33), i = n(5), v = n.n(i), d = n(8), h = n.n(d), f = n(11), l = n.n(f), g = n(4), m = n(0), p = n(2), b = n(13);
        function S(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
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
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }();
        }
        function E(e) {
            return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function A() {
            return (A = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        var T = [ "requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency" ], O = 1;
        function I(g) {
            return A(new r.a(g.code), {
                getSpec: function() {
                    return Object.freeze(g);
                },
                registerSyncs: p,
                callBids: function(o, a, e, n, c, r) {
                    if (Array.isArray(o.bids)) {
                        var u = {}, s = [], t = o.bids.filter(b);
                        if (0 !== t.length) {
                            var d = {};
                            t.forEach(function(e) {
                                (d[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode);
                            });
                            var i = g.buildRequests(t, o);
                            if (i && 0 !== i.length) {
                                Array.isArray(i) || (i = [ i ]);
                                var f = Object(m.delayExecution)(r(l), i.length);
                                i.forEach(function(i) {
                                    switch (i.method) {
                                      case "GET":
                                        n("".concat(i.url).concat(function(e) {
                                            if (e) return "?".concat("object" === E(e) ? Object(m.parseQueryStringParameters)(e) : e);
                                            return "";
                                        }(i.data)), {
                                            success: r(e),
                                            error: t
                                        }, void 0, A({
                                            method: "GET",
                                            withCredentials: !0
                                        }, i.options));
                                        break;

                                      case "POST":
                                        n(i.url, {
                                            success: r(e),
                                            error: t
                                        }, "string" == typeof i.data ? i.data : JSON.stringify(i.data), A({
                                            method: "POST",
                                            contentType: "text/plain",
                                            withCredentials: !0
                                        }, i.options));
                                        break;

                                      default:
                                        Object(m.logWarn)("Skipping invalid request from ".concat(g.code, ". Request type ").concat(i.type, " must be GET or POST")), 
                                        f();
                                    }
                                    function e(e, t) {
                                        c(g.code);
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
                                            n = g.interpretResponse(e, i);
                                        } catch (e) {
                                            return Object(m.logError)("Bidder ".concat(g.code, " failed to interpret the server's response. Continuing without bids"), null, e), 
                                            void f();
                                        }
                                        function r(e) {
                                            var t, n, r = d[e.requestId];
                                            if (r) {
                                                e.originalCpm = e.cpm, e.originalCurrency = e.currency;
                                                var i = A(Object(y.a)(v.a.STATUS.GOOD, r), e);
                                                t = r.adUnitCode, n = i, u[t] = !0, C(t, n, [ o ]) && a(t, n);
                                            } else Object(m.logWarn)("Bidder ".concat(g.code, " made bid for unknown request ID: ").concat(e.requestId, ". Ignoring."));
                                        }
                                        n && (Object(m.isArray)(n) ? n.forEach(r) : r(n)), f(n);
                                    }
                                    function t(e) {
                                        c(g.code), Object(m.logError)("Server call for ".concat(g.code, " failed: ").concat(e, ". Continuing without bids.")), 
                                        f();
                                    }
                                });
                            } else l();
                        } else l();
                    }
                    function l() {
                        e(), h.a.emit(v.a.EVENTS.BIDDER_DONE, o), p(s, o.gdprConsent, o.uspConsent);
                    }
                }
            });
            function p(e, t, n) {
                if (g.getUserSyncs && !a.default.aliasRegistry[g.code]) {
                    var r = o.b.getConfig("userSync.filterSettings"), i = g.getUserSyncs({
                        iframeEnabled: !!(o.b.getConfig("userSync.iframeEnabled") || r && (r.iframe || r.all)),
                        pixelEnabled: !!(o.b.getConfig("userSync.pixelEnabled") || r && (r.image || r.all))
                    }, e, t, n);
                    i && (Array.isArray(i) || (i = [ i ]), i.forEach(function(e) {
                        c.a.registerSync(e.type, g.code, e.url);
                    }));
                }
            }
            function b(e) {
                return !!g.isBidRequestValid(e) || (Object(m.logWarn)("Invalid bid sent to bidder ".concat(g.code, ": ").concat(JSON.stringify(e))), 
                !1);
            }
        }
        function w(e, t) {
            if (!o.b.getConfig("adpod.brandCategoryExclusion")) return e.call(this, t);
            t.filter(function(e) {
                return Object(m.deepAccess)(e, "mediaTypes.video.context") === p.a;
            }).map(function(e) {
                return e.bids.map(function(e) {
                    return e.bidder;
                });
            }).reduce(m.flatten, []).filter(m.uniques).forEach(function(n) {
                var e = a.default.getBidAdapter(n);
                if (e.getSpec().getMappingFileInfo) {
                    var t = e.getSpec().getMappingFileInfo(), r = t.refreshInDays ? t.refreshInDays : O, i = t.localStorageKey ? t.localStorageKey : e.getSpec().code, o = Object(m.getDataFromLocalStorage)(i);
                    (!o || Object(m.timestamp)() < o.lastUpdated + 24 * r * 60 * 60 * 1e3) && Object(g.a)(t.url, {
                        success: function(e) {
                            try {
                                e = JSON.parse(e);
                                var t = {
                                    lastUpdated: Object(m.timestamp)(),
                                    mapping: e.mapping
                                };
                                Object(m.setDataInLocalStorage)(i, JSON.stringify(t));
                            } catch (e) {
                                Object(m.logError)("Failed to parse ".concat(n, " bidder translation mapping file"));
                            }
                        },
                        error: function() {
                            Object(m.logError)("Failed to load ".concat(n, " bidder translation file"));
                        }
                    });
                }
            }), e.call(this, t);
        }
        function C(e, t, n) {
            function r(e) {
                return "Invalid bid from ".concat(t.bidderCode, ". Ignoring bid: ").concat(e);
            }
            return e ? t ? (i = Object.keys(t), T.every(function(e) {
                return l()(i, e) && !l()([ void 0, null ], t[e]);
            }) ? "native" !== t.mediaType || Object(u.f)(t, n) ? "video" !== t.mediaType || Object(s.d)(t, n) ? !("banner" === t.mediaType && !function(e, t, n) {
                if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10))) return t.width = parseInt(t.width, 10), 
                t.height = parseInt(t.height, 10), 1;
                var r = Object(m.getBidderRequest)(n, t.bidderCode, e), i = r && r.bids && r.bids[0] && r.bids[0].sizes, o = Object(m.parseSizesInput)(i);
                if (1 === o.length) {
                    var a = S(o[0].split("x"), 2), c = a[0], u = a[1];
                    return t.width = parseInt(c, 10), t.height = parseInt(u, 10), 1;
                }
            }(e, t, n)) || (Object(m.logError)(r("Banner bids require a width and height")), 
            !1) : (Object(m.logError)(r("Video bid does not have required vastUrl or renderer property")), 
            !1) : (Object(m.logError)(r("Native bid missing some required properties.")), !1) : (Object(m.logError)(r("Bidder ".concat(t.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), 
            !1)) : (Object(m.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), 
            !1) : (Object(m.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
            var i;
        }
        Object(b.a)("checkAdUnitSetup").before(w);
    },
    10: function(e, t, n) {
        "use strict";
        t.a = i, t.c = function(e) {
            return !(!e || !e.url);
        }, t.b = function(e, t) {
            e.render(t);
        };
        var f = n(42), l = n(0), r = n(12), g = n.n(r);
        function i(e) {
            var t, n, r, i = this, o = e.url, a = e.config, c = e.id, u = e.callback, s = e.loaded, d = e.adUnitCode;
            this.url = o, this.config = a, this.handlers = {}, this.id = c, this.loaded = s, 
            this.cmd = [], this.push = function(e) {
                "function" == typeof e ? i.loaded ? e.call() : i.cmd.push(e) : l.logError("Commands given to Renderer.push must be wrapped in a function");
            }, this.callback = u || function() {
                i.loaded = !0, i.process();
            }, t = d, n = pbjs.adUnits, (r = g()(n, function(e) {
                return e.code === t;
            })) && r.renderer && r.renderer.url && r.renderer.render ? l.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(d)) : Object(f.b)(o, this.callback, !0);
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
            this.render = e;
        }, i.prototype.setEventHandlers = function(e) {
            this.handlers = e;
        }, i.prototype.handleVideoEvent = function(e) {
            var t = e.id, n = e.eventName;
            "function" == typeof this.handlers[n] && this.handlers[n](), l.logMessage("Prebid Renderer event for id ".concat(t, " type ").concat(n));
        }, i.prototype.process = function() {
            for (;0 < this.cmd.length; ) try {
                this.cmd.shift().call();
            } catch (e) {
                l.logError("Error processing Renderer command: ", e);
            }
        };
    },
    100: function(e, t, n) {
        var r = n(19).document;
        e.exports = r && r.documentElement;
    },
    101: function(e, t, n) {
        var r = n(29), i = n(47), o = n(52)("IE_PROTO"), a = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) {
            return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null;
        };
    },
    102: function(e, t, n) {
        n(103);
        for (var r = n(19), i = n(21), o = n(30), a = n(14)("toStringTag"), c = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < c.length; u++) {
            var s = c[u], d = r[s], f = d && d.prototype;
            f && !f[a] && i(f, a, s), o[s] = o.Array;
        }
    },
    103: function(e, t, n) {
        "use strict";
        var r = n(40), i = n(69), o = n(30), a = n(50);
        e.exports = n(51)(Array, "Array", function(e, t) {
            this._t = a(e), this._i = 0, this._k = t;
        }, function() {
            var e = this._t, t = this._k, n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [ n, e[n] ]);
        }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries");
    },
    104: function(e, t, n) {
        "use strict";
        var r = n(105), i = n(77);
        e.exports = n(107)("Set", function(t) {
            return function(e) {
                return t(this, 0 < arguments.length ? e : void 0);
            };
        }, {
            add: function(e) {
                return r.def(i(this, "Set"), e = 0 === e ? 0 : e, e);
            }
        }, r);
    },
    105: function(e, t, n) {
        "use strict";
        function a(e, t) {
            var n, r = p(t);
            if ("F" !== r) return e._i[r];
            for (n = e._f; n; n = n.n) if (n.k == t) return n;
        }
        var c = n(20).f, u = n(67), s = n(70), d = n(26), f = n(71), l = n(41), r = n(51), i = n(69), o = n(106), g = n(22), p = n(76).fastKey, b = n(77), y = g ? "_s" : "size";
        e.exports = {
            getConstructor: function(e, o, n, r) {
                var i = e(function(e, t) {
                    f(e, i, o, "_i"), e._t = o, e._i = u(null), e._f = void 0, e._l = void 0, e[y] = 0, 
                    null != t && l(t, n, e[r], e);
                });
                return s(i.prototype, {
                    clear: function() {
                        for (var e = b(this, o), t = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), 
                        delete t[n.i];
                        e._f = e._l = void 0, e[y] = 0;
                    },
                    delete: function(e) {
                        var t = b(this, o), n = a(t, e);
                        if (n) {
                            var r = n.n, i = n.p;
                            delete t._i[n.i], n.r = !0, i && (i.n = r), r && (r.p = i), t._f == n && (t._f = r), 
                            t._l == n && (t._l = i), t[y]--;
                        }
                        return !!n;
                    },
                    forEach: function(e, t) {
                        b(this, o);
                        for (var n, r = d(e, 1 < arguments.length ? t : void 0, 3); n = n ? n.n : this._f; ) for (r(n.v, n.k, this); n && n.r; ) n = n.p;
                    },
                    has: function(e) {
                        return !!a(b(this, o), e);
                    }
                }), g && c(i.prototype, "size", {
                    get: function() {
                        return b(this, o)[y];
                    }
                }), i;
            },
            def: function(e, t, n) {
                var r, i, o = a(e, t);
                return o ? o.v = n : (e._l = o = {
                    i: i = p(t, !0),
                    k: t,
                    v: n,
                    p: r = e._l,
                    n: void 0,
                    r: !1
                }, e._f || (e._f = o), r && (r.n = o), e[y]++, "F" !== i && (e._i[i] = o)), e;
            },
            getEntry: a,
            setStrong: function(e, n, t) {
                r(e, n, function(e, t) {
                    this._t = b(e, n), this._k = t, this._l = void 0;
                }, function() {
                    for (var e = this, t = e._k, n = e._l; n && n.r; ) n = n.p;
                    return e._t && (e._l = n = n ? n.n : e._t._f) ? i(0, "keys" == t ? n.k : "values" == t ? n.v : [ n.k, n.v ]) : (e._t = void 0, 
                    i(1));
                }, t ? "entries" : "values", !t, !0), o(n);
            }
        };
    },
    106: function(e, t, n) {
        "use strict";
        var r = n(19), i = n(16), o = n(20), a = n(22), c = n(14)("species");
        e.exports = function(e) {
            var t = "function" == typeof i[e] ? i[e] : r[e];
            a && t && !t[c] && o.f(t, c, {
                configurable: !0,
                get: function() {
                    return this;
                }
            });
        };
    },
    107: function(e, t, n) {
        "use strict";
        var f = n(19), l = n(15), g = n(76), p = n(36), b = n(21), y = n(70), v = n(41), h = n(71), m = n(17), S = n(53), E = n(20).f, A = n(46)(0), T = n(22);
        e.exports = function(n, e, t, r, i, o) {
            var a = f[n], c = a, u = i ? "set" : "add", s = c && c.prototype, d = {};
            return T && "function" == typeof c && (o || s.forEach && !p(function() {
                new c().entries().next();
            })) ? (c = e(function(e, t) {
                h(e, c, n, "_c"), e._c = new a(), null != t && v(t, i, e[u], e);
            }), A("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(r) {
                var i = "add" == r || "set" == r;
                r in s && (!o || "clear" != r) && b(c.prototype, r, function(e, t) {
                    if (h(this, c, r), !i && o && !m(e)) return "get" == r && void 0;
                    var n = this._c[r](0 === e ? 0 : e, t);
                    return i ? this : n;
                });
            }), o || E(c.prototype, "size", {
                get: function() {
                    return this._c.size;
                }
            })) : (c = r.getConstructor(e, n, i, u), y(c.prototype, t), g.NEED = !0), S(c, n), 
            d[n] = c, l(l.G + l.W + l.F, d), o || r.setStrong(c, n, i), c;
        };
    },
    108: function(e, t, n) {
        var r = n(15);
        r(r.P + r.R, "Set", {
            toJSON: n(109)("Set")
        });
    },
    109: function(e, t, n) {
        var r = n(75), i = n(110);
        e.exports = function(e) {
            return function() {
                if (r(this) != e) throw TypeError(e + "#toJSON isn't generic");
                return i(this);
            };
        };
    },
    11: function(e, t, n) {
        n(91), e.exports = n(16).Array.includes;
    },
    110: function(e, t, n) {
        var r = n(41);
        e.exports = function(e, t) {
            var n = [];
            return r(e, !1, n.push, n, t), n;
        };
    },
    111: function(e, t, n) {
        n(112)("Set");
    },
    112: function(e, t, n) {
        "use strict";
        var r = n(15);
        e.exports = function(e) {
            r(r.S, e, {
                of: function() {
                    for (var e = arguments.length, t = new Array(e); e--; ) t[e] = arguments[e];
                    return new this(t);
                }
            });
        };
    },
    113: function(e, t, n) {
        n(114)("Set");
    },
    114: function(e, t, n) {
        "use strict";
        var r = n(15), u = n(59), s = n(26), d = n(41);
        e.exports = function(e) {
            r(r.S, e, {
                from: function(e, t, n) {
                    var r, i, o, a, c = t;
                    return u(this), (r = void 0 !== c) && u(c), null == e ? new this() : (i = [], r ? (o = 0, 
                    a = s(c, n, 2), d(e, !1, function(e) {
                        i.push(a(e, o++));
                    })) : d(e, !1, i.push, i), new this(i));
                }
            });
        };
    },
    115: function(e, t, n) {
        "use strict";
        var p = n(26), r = n(15), b = n(47), y = n(72), v = n(73), h = n(39), m = n(116), S = n(74);
        r(r.S + r.F * !n(117)(function(e) {
            Array.from(e);
        }), "Array", {
            from: function(e, t, n) {
                var r, i, o, a, c = b(e), u = "function" == typeof this ? this : Array, s = arguments.length, d = 1 < s ? t : void 0, f = void 0 !== d, l = 0, g = S(c);
                if (f && (d = p(d, 2 < s ? n : void 0, 2)), null == g || u == Array && v(g)) for (i = new u(r = h(c.length)); l < r; l++) m(i, l, f ? d(c[l], l) : c[l]); else for (a = g.call(c), 
                i = new u(); !(o = a.next()).done; l++) m(i, l, f ? y(a, d, [ o.value, l ], !0) : o.value);
                return i.length = l, i;
            }
        });
    },
    116: function(e, t, n) {
        "use strict";
        var r = n(20), i = n(45);
        e.exports = function(e, t, n) {
            t in e ? r.f(e, t, i(0, n)) : e[t] = n;
        };
    },
    117: function(e, t, n) {
        var o = n(14)("iterator"), a = !1;
        try {
            var r = [ 7 ][o]();
            r.return = function() {
                a = !0;
            }, Array.from(r, function() {
                throw 2;
            });
        } catch (e) {}
        e.exports = function(e, t) {
            if (!t && !a) return !1;
            var n = !1;
            try {
                var r = [ 7 ], i = r[o]();
                i.next = function() {
                    return {
                        done: n = !0
                    };
                }, r[o] = function() {
                    return i;
                }, e(r);
            } catch (e) {}
            return n;
        };
    },
    118: function(e, t) {
        e.exports = function e(t) {
            var n = Array.isArray(t) ? [] : {};
            for (var r in t) {
                var i = t[r];
                n[r] = i && "object" == typeof i ? e(i) : i;
            }
            return n;
        };
    },
    119: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n, r, i) {
            for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++) e = e ? e[t[r]] : i;
            return e === i ? n : e;
        };
    },
    12: function(e, t, n) {
        n(85), e.exports = n(16).Array.find;
    },
    120: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n) {
            t.split && (t = t.split("."));
            for (var r, i = 0, o = t.length, a = e; i < o; ++i) r = a[t[i]], a = a[t[i]] = i === o - 1 ? n : null != r ? r : !~t[i + 1].indexOf(".") && -1 < +t[i + 1] ? [] : {};
        };
    },
    121: function(e, t) {
        h.SYNC = 1, h.ASYNC = 2, h.QUEUE = 4;
        var p = "fun-hooks";
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
        function y(e, t) {
            return Array.prototype.slice.call(e, t);
        }
        var v = Object.assign || function(e) {
            return r.call(y(arguments, 1), function(t, n) {
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
                        var t = e.split(":"), n = t[0], r = t[1] || "sync";
                        if (!c[n]) {
                            var i = o[n];
                            c[n] = o[n] = f(r, i, a ? [ a, n ] : void 0);
                        }
                    }), o = Object.getPrototypeOf(o), t && o; ) ;
                    return c;
                }.apply(null, arguments) : void 0;
            }
            function l(o) {
                var a = Array.isArray(o) ? o : o.split(".");
                return r.call(a, function(t, n, e) {
                    var r = t[n], i = !1;
                    return r || (e === a.length - 1 ? (s || d.push(function() {
                        i || console.warn(p + ": referenced '" + o + "' but it was never created");
                    }), t[n] = g(function(e) {
                        t[n] = e, i = !0;
                    })) : t[n] = {});
                }, e);
            }
            function g(r) {
                var o = [], a = [], c = function() {}, e = {
                    before: function(e, t) {
                        return n.call(this, o, "before", e, t);
                    },
                    after: function(e, t) {
                        return n.call(this, a, "after", e, t);
                    },
                    getHooks: function(n) {
                        var e = o.concat(a);
                        return "object" == typeof n && (e = e.filter(function(t) {
                            return Object.keys(n).every(function(e) {
                                return t[e] === n[e];
                            });
                        })), v(e, {
                            remove: function() {
                                return e.forEach(function(e) {
                                    e.remove();
                                }), this;
                            }
                        });
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
                    if (n.type !== f) throw p + ": recreated hookable with different type";
                    return e;
                }
                var r, i, o = t ? l(t) : g(), a = {
                    get: function(e, t) {
                        return o[t] || Reflect.get.apply(Reflect, arguments);
                    }
                };
                return s || d.push(c), u.useProxy && "function" == typeof Proxy && Proxy.revocable ? i = new Proxy(e, a) : v(i = function() {
                    return a.apply ? a.apply(e, this, y(arguments)) : e.apply(this, arguments);
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
                                var t = y(arguments);
                                return u.bail = c, t.unshift(u), d[o++].apply(r, t);
                            }
                            "sync" === f ? i = e : a && a.apply(null, arguments);
                        }
                        return d[s] = function() {
                            var e = y(arguments, 1);
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
                        throw p + ": hooked function not ready";
                    } : a.apply = r;
                }
            }
            return (u = v({}, n, u)).ready ? t.ready = function() {
                s = !0, function(e) {
                    for (var t; t = e.shift(); ) t();
                }(d);
            } : s = !0, t.get = l, t;
        }
        e.exports = h;
    },
    13: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "a", function() {
            return a;
        }), t.d = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 15;
            0 === e.getHooks({
                hook: t
            }).length && e.before(t, n);
        }, t.c = function(e, n) {
            o("async", function(e) {
                e.forEach(function(e) {
                    return n.apply(void 0, function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                            return n;
                        }
                    }(t = e) || function(e) {
                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
                    }(t) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance");
                    }());
                    var t;
                });
            }, e)([]);
        }, t.e = function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            a(e).before(function(e, t) {
                t.push(n), e(t);
            });
        };
        var r = n(121), i = n.n(r);
        var o = i()({
            ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE
        }), a = o.get;
    },
    14: function(e, t, n) {
        var r = n(62)("wks"), i = n(49), o = n(19).Symbol, a = "function" == typeof o;
        (e.exports = function(e) {
            return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e));
        }).store = r;
    },
    15: function(e, t, n) {
        var b = n(19), y = n(16), v = n(26), h = n(21), m = n(29), S = "prototype", E = function(e, t, n) {
            var r, i, o, a = e & E.F, c = e & E.G, u = e & E.S, s = e & E.P, d = e & E.B, f = e & E.W, l = c ? y : y[t] || (y[t] = {}), g = l[S], p = c ? b : u ? b[t] : (b[t] || {})[S];
            for (r in c && (n = t), n) (i = !a && p && void 0 !== p[r]) && m(l, r) || (o = i ? p[r] : n[r], 
            l[r] = c && "function" != typeof p[r] ? n[r] : d && i ? v(o, b) : f && p[r] == o ? function(r) {
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
                return e[S] = r[S], e;
            }(o) : s && "function" == typeof o ? v(Function.call, o) : o, s && ((l.virtual || (l.virtual = {}))[r] = o, 
            e & E.R && g && !g[r] && h(g, r, o)));
        };
        E.F = 1, E.G = 2, E.S = 4, E.P = 8, E.B = 16, E.W = 32, E.U = 64, E.R = 128, e.exports = E;
    },
    16: function(e, t) {
        var n = e.exports = {
            version: "2.6.11"
        };
        "number" == typeof __e && (__e = n);
    },
    166: function(e, t, n) {
        "use strict";
        var r = n(15), i = n(46)(6), o = "findIndex", a = !0;
        o in [] && Array(1)[o](function() {
            a = !1;
        }), r(r.P + r.F * a, "Array", {
            findIndex: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0);
            }
        }), n(40)(o);
    },
    169: function(e, t, n) {
        "use strict";
        t.a = function() {
            addEventListener("message", a, !1);
        };
        var r = n(8), b = n.n(r), y = n(27), i = n(5), v = (n.n(i), n(0)), h = n(25), o = n(12), m = n.n(o), S = n(10), E = i.EVENTS.BID_WON;
        function a(e) {
            var t, n, r, i, o, a, c, u, s, d, f = e.message ? "message" : "data", l = {};
            try {
                l = JSON.parse(e[f]);
            } catch (e) {
                return;
            }
            if (l && l.adId) {
                var g = m()(h.a.getBidsReceived(), function(e) {
                    return e.adId === l.adId;
                });
                if (g && "Prebid Request" === l.message && (t = g, n = l.adServerDomain, r = e.source, 
                i = t.adId, o = t.ad, a = t.adUrl, c = t.width, u = t.height, s = t.renderer, d = t.cpm, 
                Object(S.c)(s) ? Object(S.b)(s, t) : i && (function(e) {
                    var i = e.adUnitCode, r = e.width, o = e.height;
                    function a(e) {
                        var t, n = (t = i, window.googletag ? function(e) {
                            return m()(window.googletag.pubads().getSlots().filter(Object(v.isSlotMatchingAdUnitCode)(e)), function(e) {
                                return e;
                            }).getSlotElementId();
                        }(t) : window.apntag ? function(e) {
                            var t = window.apntag.getTag(e);
                            return t && t.targetId;
                        }(t) : t), r = document.getElementById(n);
                        return r && r.querySelector(e);
                    }
                    [ "div", "iframe" ].forEach(function(e) {
                        var t = a(e + ':not([style*="display: none"])');
                        if (t) {
                            var n = t.style;
                            n.width = r + "px", n.height = o + "px";
                        } else Object(v.logWarn)("Unable to locate matching page element for adUnitCode ".concat(i, ".  Can't resize it to ad's dimensions.  Please review setup."));
                    });
                }(t), r.postMessage(JSON.stringify({
                    message: "Prebid Response",
                    ad: Object(v.replaceAuctionPrice)(o, d),
                    adUrl: Object(v.replaceAuctionPrice)(a, d),
                    adId: i,
                    width: c,
                    height: u
                }), n)), h.a.addWinningBid(g), b.a.emit(E, g)), g && "Prebid Native" === l.message) {
                    if ("assetRequest" === l.action) {
                        var p = Object(y.c)(l, g);
                        return void e.source.postMessage(JSON.stringify(p), e.origin);
                    }
                    if ("click" === Object(y.b)(l, g)) return;
                    h.a.addWinningBid(g), b.a.emit(E, g);
                }
            }
        }
    },
    17: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
        };
    },
    170: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t;
            try {
                e = e || window.sessionStorage, t = JSON.parse(e.getItem(u));
            } catch (e) {}
            t && f(t, !0);
        };
        var r = n(3), o = n(0), i = n(43);
        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        var c, u = "pbjs:debugging";
        function s(e) {
            Object(o.logMessage)("DEBUG: " + e);
        }
        function d() {
            i.c.getHooks({
                hook: c
            }).remove();
        }
        function f(e, t) {
            var n = 1 < arguments.length && void 0 !== t && t;
            r.b.setConfig({
                debug: !0
            }), s("bidder overrides enabled".concat(n ? " from session" : "")), d(), c = function(e, r, i) {
                if (Array.isArray(this.bidders) && -1 === this.bidders.indexOf(i.bidderCode)) return void function(e) {
                    Object(o.logWarn)("DEBUG: " + e);
                }("bidder '".concat(i.bidderCode, "' excluded from auction by bidder overrides"));
                Array.isArray(this.bids) && this.bids.forEach(function(n) {
                    n.bidder && n.bidder !== i.bidderCode || n.adUnitCode && n.adUnitCode !== r || (i = a({}, i), 
                    Object.keys(n).filter(function(e) {
                        return -1 === [ "bidder", "adUnitCode" ].indexOf(e);
                    }).forEach(function(e) {
                        var t = n[e];
                        s("bidder overrides changed '".concat(r, "/").concat(i.bidderCode, "' bid.").concat(e, " from '").concat(i[e], "' to '").concat(t, "'")), 
                        i[e] = t;
                    }));
                });
                e(r, i);
            }.bind(e), i.c.before(c, 5);
        }
        function l(e) {
            if (e.enabled) {
                try {
                    window.sessionStorage.setItem(u, JSON.stringify(e));
                } catch (e) {}
                f(e);
            } else {
                d(), s("bidder overrides disabled");
                try {
                    window.sessionStorage.removeItem(u);
                } catch (e) {}
            }
        }
        r.b.getConfig("debugging", function(e) {
            return l(e.debugging);
        });
    },
    19: function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n);
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
        var r = n(28), i = n(86), o = n(87), a = Object.defineProperty;
        t.f = n(22) ? Object.defineProperty : function(e, t, n) {
            if (r(e), t = o(t, !0), r(n), i) try {
                return a(e, t, n);
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e;
        };
    },
    21: function(e, t, n) {
        var r = n(20), i = n(45);
        e.exports = n(22) ? function(e, t, n) {
            return r.f(e, t, i(1, n));
        } : function(e, t, n) {
            return e[t] = n, e;
        };
    },
    22: function(e, t, n) {
        e.exports = !n(36)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    },
    23: function(e, t, n) {
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
    24: function(e, t, n) {
        "use strict";
        t.a = function() {
            return window.pbjs;
        }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || [], 
        window._pbjsGlobals = window._pbjsGlobals || [], window._pbjsGlobals.push("pbjs");
    },
    25: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return u;
        });
        var r = n(0), s = n(43), i = n(12), o = n.n(i), a = n(5);
        var d, c, u = (d = [], (c = {}).addWinningBid = function(t) {
            var e = o()(d, function(e) {
                return e.getAuctionId() === t.auctionId;
            });
            e ? e.addWinningBid(t) : utils.logWarn("Auction not found when adding winning bid");
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
            var t, n = e.adUnits, r = e.adUnitCodes, i = e.callback, o = e.cbTimeout, a = e.labels, c = e.auctionId, u = Object(s.j)({
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
            return Object(s.i)()[a.JSON_MAPPING.ADSERVER_TARGETING];
        }, c.setStatusForBids = function(e, t) {
            var n = c.findBidByAdId(e);
            if (n && (n.status = t), n && t === a.BID_STATUS.BID_TARGETING_SET) {
                var r = o()(d, function(e) {
                    return e.getAuctionId() === n.auctionId;
                });
                r && r.setBidTargeting(n);
            }
        }, c.getLastAuctionId = function() {
            return d.length && d[d.length - 1].getAuctionId();
        }, c);
    },
    26: function(e, t, n) {
        var o = n(59);
        e.exports = function(r, i, e) {
            if (o(r), void 0 === i) return r;
            switch (e) {
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
    265: function(e, t, n) {
        n(266), e.exports = n(16).String.includes;
    },
    266: function(e, t, n) {
        "use strict";
        var r = n(15), i = n(267), o = "includes";
        r(r.P + r.F * n(269)(o), "String", {
            includes: function(e, t) {
                return !!~i(this, e, o).indexOf(e, 1 < arguments.length ? t : void 0);
            }
        });
    },
    267: function(e, t, n) {
        var r = n(268), i = n(38);
        e.exports = function(e, t, n) {
            if (r(t)) throw TypeError("String#" + n + " doesn't accept regex!");
            return String(i(e));
        };
    },
    268: function(e, t, n) {
        var r = n(17), i = n(37), o = n(14)("match");
        e.exports = function(e) {
            var t;
            return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e));
        };
    },
    269: function(e, t, n) {
        var r = n(14)("match");
        e.exports = function(t) {
            var n = /./;
            try {
                "/./"[t](n);
            } catch (e) {
                try {
                    return n[r] = !1, !"/./"[t](n);
                } catch (e) {}
            }
            return !0;
        };
    },
    27: function(e, t, n) {
        "use strict";
        n.d(t, "e", function() {
            return o;
        }), n.d(t, "a", function() {
            return s;
        }), t.g = function(e) {
            if (e && e.type && function(e) {
                return e && c()(Object.keys(d), e) || (Object(a.logError)("".concat(e, " nativeParam is not supported")), 
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
                Object(a.deepAccess)(i, "mediaTypes.native.".concat(e, ".sendId")) && (n = "".concat(t, ":").concat(r.adId));
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
        var a = n(0), r = n(11), c = n.n(r);
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
    28: function(e, t, n) {
        var r = n(17);
        e.exports = function(e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e;
        };
    },
    29: function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t);
        };
    },
    3: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return v;
        }), n.d(t, "b", function() {
            return w;
        });
        var r = n(44), i = n(12), a = n.n(i), o = n(11), c = n.n(o), u = n(65), s = n.n(u), d = n(9);
        function f() {
            return (f = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        var l = n(78), g = n(0), p = n(5), b = "TRUE" === (Object(d.d)(window.location.search)[p.DEBUG_MODE] || "").toUpperCase(), y = window.location.origin, v = "random", h = {};
        h[v] = !0, h.fixed = !0;
        var m = v, S = {
            LOW: "low",
            MEDIUM: "medium",
            HIGH: "high",
            AUTO: "auto",
            DENSE: "dense",
            CUSTOM: "custom"
        };
        var E, A, T, O, I, w = (O = [], I = null, C(), {
            getConfig: function() {
                if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                    var e = arguments.length <= 0 ? void 0 : arguments[0];
                    return e ? g.deepAccess(j(), e) : j();
                }
                return function(e, t) {
                    var n = t;
                    if ("string" != typeof e && (n = e, e = "*"), "function" == typeof n) {
                        var r = {
                            topic: e,
                            callback: n
                        };
                        return O.push(r), function() {
                            O.splice(O.indexOf(r), 1);
                        };
                    }
                    g.logError("listener must be a function");
                }.apply(void 0, arguments);
            },
            setConfig: function(n) {
                if (g.isPlainObject(n)) {
                    var e = Object.keys(n), r = {};
                    e.forEach(function(e) {
                        var t = n[e];
                        g.isPlainObject(E[e]) && g.isPlainObject(t) && (t = f({}, E[e], t)), r[e] = A[e] = t;
                    }), _(r);
                } else g.logError("setConfig options must be an object");
            },
            setDefaults: function(e) {
                g.isPlainObject(E) ? (f(E, e), f(A, e)) : g.logError("defaults must be an object");
            },
            resetConfig: C,
            runWithBidder: B,
            callbackWithBidder: function(o) {
                return function(i) {
                    return function() {
                        for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return B(o, (e = g.bind).call.apply(e, [ i, this ].concat(n)));
                    };
                };
            },
            setBidderConfig: function(r) {
                try {
                    !function(e) {
                        if (!g.isPlainObject(e)) throw "setBidderConfig bidder options must be an object";
                        if (!Array.isArray(e.bidders) || !e.bidders.length) throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                        if (!g.isPlainObject(e.config)) throw "setBidderConfig bidder options must contain a config object";
                    }(r), r.bidders.forEach(function(n) {
                        T[n] || (T[n] = {}), Object.keys(r.config).forEach(function(e) {
                            var t = r.config[e];
                            g.isPlainObject(t) ? T[n][e] = f({}, T[n][e] || {}, t) : T[n][e] = t;
                        });
                    });
                } catch (e) {
                    g.logError(e);
                }
            },
            getBidderConfig: function() {
                return T;
            }
        });
        function C() {
            E = {};
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
                _publisherDomain: y,
                get publisherDomain() {
                    return this._publisherDomain;
                },
                set publisherDomain(e) {
                    this._publisherDomain = e;
                },
                _priceGranularity: S.MEDIUM,
                set priceGranularity(e) {
                    o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : S.MEDIUM : g.isPlainObject(e) && (this._customPriceBucket = e, 
                    this._priceGranularity = S.CUSTOM, g.logMessage("Using custom price granularity")));
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
                        return o(n[t]) ? "string" == typeof n ? e[t] = i(n[t]) ? n[t] : r._priceGranularity : g.isPlainObject(n) && (e[t] = n[t], 
                        g.logMessage("Using custom price granularity for ".concat(t))) : g.logWarn("Invalid price granularity for media type: ".concat(t)), 
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
                _bidderSequence: m,
                get bidderSequence() {
                    return this._bidderSequence;
                },
                set bidderSequence(e) {
                    h[e] ? this._bidderSequence = e : g.logWarn("Invalid order: ".concat(e, ". Bidder Sequence was not set."));
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
                    if ("string" == typeof e) i(e) || g.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default."); else if (g.isPlainObject(e) && !Object(r.b)(e)) return void g.logError("Invalid custom price value passed to `setPriceGranularity()`");
                    return 1;
                }
                g.logError("Prebid Error: no value passed to `setPriceGranularity()`");
            }
            A && _(Object.keys(A).reduce(function(e, t) {
                return A[t] !== n[t] && (e[t] = n[t] || {}), e;
            }, {})), A = n, T = {};
        }
        function j() {
            if (I && T && g.isPlainObject(T[I])) {
                var n = T[I], e = new s.a(Object.keys(A).concat(Object.keys(n)));
                return l(e).reduce(function(e, t) {
                    return void 0 === n[t] ? e[t] = A[t] : void 0 === A[t] ? e[t] = n[t] : g.isPlainObject(n[t]) ? e[t] = f({}, A[t], n[t]) : e[t] = n[t], 
                    e;
                }, {});
            }
            return f({}, A);
        }
        function _(i) {
            var t = Object.keys(i);
            O.filter(function(e) {
                return c()(t, e.topic);
            }).forEach(function(e) {
                var t, n, r;
                e.callback((t = {}, n = e.topic, r = i[e.topic], n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, t));
            }), O.filter(function(e) {
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
    30: function(e, t) {
        e.exports = {};
    },
    31: function(e, t, n) {
        "use strict";
        t.a = r, n.d(t, "b", function() {
            return i;
        });
        var c = n(0);
        function u() {
            return (u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        function r(i) {
            function o() {
                var e = function() {
                    var t, n = [];
                    do {
                        try {
                            t = t ? t.parent : i;
                            try {
                                var e = t == i.top, r = {
                                    referrer: t.document.referrer || null,
                                    location: t.location.href || null,
                                    isTop: e
                                };
                                e && (r = u(r, {
                                    canonicalUrl: a(t.document)
                                })), n.push(r);
                            } catch (e) {
                                n.push({
                                    referrer: null,
                                    location: null,
                                    isTop: t == i.top
                                }), Object(c.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");
                            }
                        } catch (e) {
                            return n.push({
                                referrer: null,
                                location: null,
                                isTop: !1
                            }), n;
                        }
                    } while (t != i.top);
                    return n;
                }(), t = function() {
                    try {
                        if (!i.location.ancestorOrigins) return;
                        return i.location.ancestorOrigins;
                    } catch (e) {}
                }();
                if (t) for (var n = 0, r = t.length; n < r; n++) e[n].ancestor = t[n];
                return e;
            }
            function a(e) {
                try {
                    var t = e.querySelector("link[rel='canonical']");
                    if (null !== t) return t.href;
                } catch (e) {}
                return null;
            }
            return function() {
                try {
                    var e, t = o(), n = t.length - 1, r = null !== t[n].location || 0 < n && null !== t[n - 1].referrer, i = function(e) {
                        var t, n = [], r = null, i = null, o = null, a = null, c = null;
                        for (t = e.length - 1; 0 <= t; t--) {
                            try {
                                r = e[t].location;
                            } catch (e) {}
                            if (r) n.push(r), c = c || r; else if (0 !== t) {
                                i = e[t - 1];
                                try {
                                    o = i.referrer, a = i.ancestor;
                                } catch (e) {}
                                o ? (n.push(o), c = c || o) : a ? (n.push(a), c = c || a) : n.push(null);
                            } else n.push(null);
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
            };
        }
        var i = r(window);
    },
    32: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return v;
        });
        var a = n(0), r = n(3), i = n(11), o = n.n(i);
        function c(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
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
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }();
        }
        function u() {
            return (u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        r.b.setDefaults({
            userSync: {
                syncEnabled: !0,
                pixelEnabled: !0,
                syncsPerBidder: 5,
                syncDelay: 3e3,
                auctionDelay: 0
            }
        });
        var s, d, f, l, g, p, b, y = !a.isSafariBrowser() && a.cookiesAreEnabled(), v = (s = {
            config: r.b.getConfig("userSync"),
            browserSupportsCookies: y
        }, d = {}, f = h(), l = new Set(), p = {
            image: !(g = {}),
            iframe: !1
        }, b = s.config, r.b.getConfig("userSync", function(e) {
            b = u(b, e.userSync);
        }), d.registerSync = function(e, t, n) {
            return l.has(t) ? a.logMessage('already fired syncs for "'.concat(t, '", ignoring registerSync call')) : b.syncEnabled && a.isArray(f[e]) ? t ? 0 !== b.syncsPerBidder && Number(g[t]) >= b.syncsPerBidder ? a.logWarn('Number of user syncs exceeded for "'.concat(t, '"')) : d.canBidderRegisterSync(e, t) ? (f[e].push([ t, n ]), 
            (r = g)[i = t] ? r[i] += 1 : r[i] = 1, void (g = r)) : a.logWarn('Bidder "'.concat(t, '" not permitted to register their "').concat(e, '" userSync pixels.')) : a.logWarn("Bidder is required for registering sync") : a.logWarn('User sync type "'.concat(e, '" not supported'));
            var r, i;
        }, d.syncUsers = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
            if (e) return setTimeout(m, Number(e));
            m();
        }, d.triggerUserSyncs = function() {
            b.enableOverride && d.syncUsers();
        }, d.canBidderRegisterSync = function(e, t) {
            if (b.filterSettings) {
                if (E(e, t)) return !1;
            } else {
                if (b.enabledBidders && b.enabledBidders.length && b.enabledBidders.indexOf(t) < 0) return !1;
                if ("iframe" === e && !b.iframeEnabled && !p.iframe) return !1;
                if ("image" === e && !b.pixelEnabled && !p.image) return !1;
            }
            return !0;
        }, d);
        function h() {
            return {
                image: [],
                iframe: []
            };
        }
        function m() {
            if (b.syncEnabled && s.browserSupportsCookies) {
                try {
                    !function() {
                        if (!b.pixelEnabled && !p.image) return;
                        S(f.image, function(e) {
                            var t = c(e, 2), n = t[0], r = t[1];
                            a.logMessage("Invoking image pixel user sync for bidder: ".concat(n)), a.triggerPixel(r);
                        });
                    }(), function() {
                        if (!b.iframeEnabled && !p.iframe) return;
                        S(f.iframe, function(e) {
                            var t = c(e, 2), n = t[0], r = t[1];
                            a.logMessage("Invoking iframe user sync for bidder: ".concat(n)), a.insertUserSyncIframe(r);
                        });
                    }();
                } catch (e) {
                    return a.logError("Error firing user syncs", e);
                }
                f = h();
            }
        }
        function S(e, t) {
            a.shuffle(e).forEach(function(e) {
                t(e), l.add(e[0]);
            });
        }
        function E(e, t) {
            var n = b.filterSettings;
            if (function(e, t) {
                if (e.all && e[t]) return void a.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.'));
                var n = e.all ? e.all : e[t], r = e.all ? "all" : t;
                if (!n) return;
                var i = n.filter, o = n.bidders;
                if (i && "include" !== i && "exclude" !== i) return void a.logWarn('UserSync "filterSettings.'.concat(r, ".filter\" setting '").concat(i, "' is not a valid option; use either 'include' or 'exclude'."));
                return "*" === o || Array.isArray(o) && 0 < o.length && o.every(function(e) {
                    return a.isStr(e) && "*" !== e;
                }) || (a.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(r, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), 
                !1);
            }(n, e)) {
                p[e] = !0;
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
        var o = n(0), i = n(3), r = n(11), a = (n.n(r), n(13)), c = "outstream", u = "instream";
        var s = Object(a.b)("sync", function(e, t, n, r) {
            return !t || n && r !== c ? i.b.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), 
            !1) : r !== c || !(!e.renderer && !t.renderer);
        }, "checkVideoBidSetup");
    },
    34: function(e, t, n) {
        n(166), e.exports = n(16).Array.findIndex;
    },
    35: function(e, t, n) {
        "use strict";
        t.a = C, n.d(t, "b", function() {
            return l;
        });
        var v = n(0), h = n(3), m = n(27), r = n(25), i = n(79), o = n(2), a = n(11), S = n.n(a);
        function E() {
            return (E = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        function A(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function T(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n;
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance");
            }();
        }
        var c = n(0), O = n(5), I = [], w = Object.keys(O.TARGETING_KEYS).map(function(e) {
            return O.TARGETING_KEYS[e];
        }), u = function(e) {
            return e.responseTimestamp + 1e3 * e.ttl + 1e3 > Object(v.timestamp)();
        }, s = function(e) {
            return e && (e.status && !S()([ O.BID_STATUS.BID_TARGETING_SET, O.BID_STATUS.RENDERED ], e.status) || !e.status);
        };
        function C(e, r) {
            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0, o = [], a = Object(v.groupBy)(e, "adUnitCode");
            return Object.keys(a).forEach(function(e) {
                var t = [], n = Object(v.groupBy)(a[e], "bidderCode");
                Object.keys(n).forEach(function(e) {
                    return t.push(n[e].reduce(r));
                }), 0 < i ? (t.sort(function(e, t) {
                    return t.cpm - e.cpm;
                }), o.push.apply(o, T(t.slice(0, i)))) : o.push.apply(o, t);
            }), o;
        }
        function j(e, t) {
            return void 0 !== e.adUnitTargeting.hb_deal && void 0 === t.adUnitTargeting.hb_deal ? -1 : void 0 === e.adUnitTargeting.hb_deal && void 0 !== t.adUnitTargeting.hb_deal ? 1 : t.adUnitTargeting.hb_pb - e.adUnitTargeting.hb_pb;
        }
        var d, _, f, l = (d = r.a, f = {}, (_ = {}).setLatestAuctionForAdUnit = function(e, t) {
            f[e] = t;
        }, _.resetPresetTargeting = function(e) {
            if (Object(v.isGptPubadsDefined)()) {
                var t = U(e), r = d.getAdUnits().filter(function(e) {
                    return S()(t, e.code);
                });
                window.googletag.pubads().getSlots().forEach(function(n) {
                    I.forEach(function(t) {
                        r.forEach(function(e) {
                            e.code !== n.getAdUnitPath() && e.code !== n.getSlotElementId() || n.setTargeting(t, null);
                        });
                    });
                });
            }
        }, _.resetPresetTargetingAST = function(e) {
            U(e).forEach(function(e) {
                var t = window.apntag.getTag(e);
                if (t && t.keywords) {
                    var n = Object.keys(t.keywords), r = {};
                    n.forEach(function(e) {
                        S()(I, e.toLowerCase()) || (r[e] = t.keywords[e]);
                    }), window.apntag.modifyTag(e, {
                        keywords: r
                    });
                }
            });
        }, _.getAllTargeting = function(e) {
            var n, t, r, i, o, a, c, u, s, d = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : R(), f = U(e), l = (a = f, 
            c = d, u = _.getWinningBids(a, c), s = D(), u = u.map(function(o) {
                return A({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter(function(e) {
                    return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === s.indexOf(e);
                }).reduce(function(e, t) {
                    var n = [ o.adserverTargeting[t] ], r = A({}, t.substring(0, 20), n);
                    if (t !== O.TARGETING_KEYS.DEAL) return [].concat(T(e), [ r ]);
                    var i = A({}, "".concat(t, "_").concat(o.bidderCode).substring(0, 20), n);
                    return [].concat(T(e), [ r, i ]);
                }, []));
            })).concat((o = f, d.filter(function(e) {
                return S()(o, e.adUnitCode);
            }).map(function(e) {
                return E({}, e);
            }).reduce(N, []).map(x).filter(function(e) {
                return e;
            }))).concat(h.b.getConfig("enableSendAllBids") ? (n = f, t = d, r = w.concat(m.a), 
            i = h.b.getConfig("sendBidsControl.bidLimit"), C(t, v.getHighestCpm, i).map(function(t) {
                if (B(t, n)) return A({}, t.adUnitCode, k(t, r.filter(function(e) {
                    return void 0 !== t.adserverTargeting[e];
                })));
            }).filter(function(e) {
                return e;
            })) : function(e, t) {
                if (!0 !== h.b.getConfig("targetingControls.alwaysIncludeDeals")) return [];
                var n = w.concat(m.a);
                return C(t, v.getHighestCpm).map(function(t) {
                    if (t.dealId && B(t, e)) return A({}, t.adUnitCode, k(t, n.filter(function(e) {
                        return void 0 !== t.adserverTargeting[e];
                    })));
                }).filter(function(e) {
                    return e;
                });
            }(f, d));
            l.map(function(t) {
                Object.keys(t).map(function(e) {
                    t[e].map(function(e) {
                        -1 === I.indexOf(Object.keys(e)[0]) && (I = Object.keys(e).concat(I));
                    });
                });
            }), l = l.map(function(e) {
                return A({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function(e) {
                    return A({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "));
                }).reduce(function(e, t) {
                    return E(t, e);
                }, {}));
            }).reduce(function(e, t) {
                var n = Object.keys(t)[0];
                return e[n] = E({}, e[n], t[n]), e;
            }, {});
            var g, p, b, y = h.b.getConfig("targetingControls.auctionKeyMaxChars");
            return y && (Object(v.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(y, " characters.  Running checks on auction keys...")), 
            g = l, p = y, b = Object(v.deepClone)(g), l = Object.keys(b).map(function(e) {
                return {
                    adUnitCode: e,
                    adUnitTargeting: b[e]
                };
            }).sort(j).reduce(function(e, t, n, r) {
                var i, o = (i = t.adUnitTargeting, Object.keys(i).reduce(function(e, t) {
                    return e + "".concat(t, "%3d").concat(encodeURIComponent(i[t]), "%26");
                }, ""));
                n + 1 === r.length && (o = o.slice(0, -3));
                var a = t.adUnitCode, c = o.length;
                return c <= p ? (p -= c, Object(v.logInfo)("AdUnit '".concat(a, "' auction keys comprised of ").concat(c, " characters.  Deducted from running threshold; new limit is ").concat(p), b[a]), 
                e[a] = b[a]) : Object(v.logWarn)("The following keys for adUnitCode '".concat(a, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(c, ", the current allotted amount was ").concat(p, ".\n"), b[a]), 
                n + 1 === r.length && 0 === Object.keys(e).length && Object(v.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."), 
                e;
            }, {})), f.forEach(function(e) {
                l[e] || (l[e] = {});
            }), l;
        }, _.setTargetingForGPT = function(i, e) {
            window.googletag.pubads().getSlots().forEach(function(r) {
                Object.keys(i).filter((e || Object(v.isAdUnitCodeMatchingSlot))(r)).forEach(function(n) {
                    return Object.keys(i[n]).forEach(function(t) {
                        var e = i[n][t].split(",");
                        (e = 1 < e.length ? [ e ] : e).map(function(e) {
                            return c.logMessage("Attempting to set key value for slot: ".concat(r.getSlotElementId(), " key: ").concat(t, " value: ").concat(e)), 
                            e;
                        }).forEach(function(e) {
                            r.setTargeting(t, e);
                        });
                    });
                });
            });
        }, _.getWinningBids = function(e) {
            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : R(), t = U(e);
            return n.filter(function(e) {
                return S()(t, e.adUnitCode);
            }).filter(function(e) {
                return 0 < e.cpm;
            }).map(function(e) {
                return e.adUnitCode;
            }).filter(v.uniques).map(function(t) {
                return n.filter(function(e) {
                    return e.adUnitCode === t ? e : null;
                }).reduce(v.getHighestCpm);
            });
        }, _.setTargetingForAst = function(e) {
            var r = _.getAllTargeting(e);
            try {
                _.resetPresetTargetingAST(e);
            } catch (e) {
                c.logError("unable to reset targeting for AST" + e);
            }
            Object.keys(r).forEach(function(n) {
                return Object.keys(r[n]).forEach(function(e) {
                    if (c.logMessage("Attempting to set targeting for targetId: ".concat(n, " key: ").concat(e, " value: ").concat(r[n][e])), 
                    c.isStr(r[n][e]) || c.isArray(r[n][e])) {
                        var t = {};
                        e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e], window.apntag.setKeywords(n, t, {
                            overrideKeyValue: !0
                        });
                    }
                });
            });
        }, _.isApntagDefined = function() {
            if (window.apntag && c.isFn(window.apntag.setKeywords)) return !0;
        }, _);
        function B(e, t) {
            return e.adserverTargeting && t && (c.isArray(t) && S()(t, e.adUnitCode) || "string" == typeof t && e.adUnitCode === t);
        }
        function U(e) {
            return "string" == typeof e ? [ e ] : c.isArray(e) ? e : d.getAdUnitCodes() || [];
        }
        function R() {
            var e = d.getBidsReceived();
            return h.b.getConfig("useBidCache") || (e = e.filter(function(e) {
                return f[e.adUnitCode] === e.auctionId;
            })), C(e = e.filter(function(e) {
                return Object(v.deepAccess)(e, "video.context") !== o.a;
            }).filter(function(e) {
                return "banner" !== e.mediaType || Object(i.c)([ e.width, e.height ]);
            }).filter(s).filter(u), v.getOldestHighestCpmBid);
        }
        function D() {
            return d.getStandardBidderAdServerTargeting().map(function(e) {
                return e.key;
            }).concat(w).filter(v.uniques);
        }
        function N(r, i, e, t) {
            return Object.keys(i.adserverTargeting).filter(g()).forEach(function(e) {
                var t, n;
                r.length && r.filter((n = e, function(e) {
                    return e.adUnitCode === i.adUnitCode && e.adserverTargeting[n];
                })).forEach((t = e, function(e) {
                    c.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [ e.adserverTargeting[t] ]), 
                    e.adserverTargeting[t] = e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(v.uniques), 
                    delete i.adserverTargeting[t];
                }));
            }), r.push(i), r;
        }
        function g() {
            var t = D().concat(m.a);
            return function(e) {
                return -1 === t.indexOf(e);
            };
        }
        function x(t) {
            return A({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(g()).map(function(e) {
                return A({}, e.substring(0, 20), [ t.adserverTargeting[e] ]);
            }));
        }
        function k(t, e) {
            return e.map(function(e) {
                return A({}, "".concat(e, "_").concat(t.bidderCode).substring(0, 20), [ t.adserverTargeting[e] ]);
            });
        }
    },
    36: function(e, t) {
        e.exports = function(e) {
            try {
                return !!e();
            } catch (e) {
                return !0;
            }
        };
    },
    37: function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1);
        };
    },
    38: function(e, t) {
        e.exports = function(e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e;
        };
    },
    39: function(e, t, n) {
        var r = n(48), i = Math.min;
        e.exports = function(e) {
            return 0 < e ? i(r(e), 9007199254740991) : 0;
        };
    },
    390: function(e, t, n) {
        n(391), e.exports = n(16).Number.isInteger;
    },
    391: function(e, t, n) {
        var r = n(15);
        r(r.S, "Number", {
            isInteger: n(392)
        });
    },
    392: function(e, t, n) {
        var r = n(17), i = Math.floor;
        e.exports = function(e) {
            return !r(e) && isFinite(e) && i(e) === e;
        };
    },
    4: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r;
        }), t.b = i;
        var l = n(9), g = n(3);
        function p() {
            return (p = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        function b(e) {
            return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        var y = n(0), v = 4, r = i();
        function i() {
            var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, d = e.request, f = e.done;
            return function(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                try {
                    var i, o = r.method || (n ? "POST" : "GET"), a = document.createElement("a");
                    a.href = e;
                    var c = "object" === b(t) && null !== t ? t : {
                        success: function() {
                            y.logMessage("xhr success");
                        },
                        error: function(e) {
                            y.logError("xhr error", null, e);
                        }
                    };
                    if ("function" == typeof t && (c.success = t), (i = new window.XMLHttpRequest()).onreadystatechange = function() {
                        if (i.readyState === v) {
                            "function" == typeof f && f(a.origin);
                            var e = i.status;
                            200 <= e && e < 300 || 304 === e ? c.success(i.responseText, i) : c.error(i.statusText, i);
                        }
                    }, g.b.getConfig("disableAjaxTimeout") || (i.ontimeout = function() {
                        y.logError("  xhr timeout after ", i.timeout, "ms");
                    }), "GET" === o && n) {
                        var u = Object(l.c)(e, r);
                        p(u.search, n), e = Object(l.a)(u);
                    }
                    i.open(o, e, !0), g.b.getConfig("disableAjaxTimeout") || (i.timeout = s), r.withCredentials && (i.withCredentials = !0), 
                    y._each(r.customHeaders, function(e, t) {
                        i.setRequestHeader(t, e);
                    }), r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", r.contentType || "text/plain"), 
                    "function" == typeof d && d(a.origin), "POST" === o && n ? i.send(n) : i.send();
                } catch (e) {
                    y.logError("xhr construction", e);
                }
            };
        }
    },
    40: function(e, t) {
        e.exports = function() {};
    },
    41: function(e, t, n) {
        var l = n(26), g = n(72), p = n(73), b = n(28), y = n(39), v = n(74), h = {}, m = {};
        (t = e.exports = function(e, t, n, r, i) {
            var o, a, c, u, s = i ? function() {
                return e;
            } : v(e), d = l(n, r, t ? 2 : 1), f = 0;
            if ("function" != typeof s) throw TypeError(e + " is not iterable!");
            if (p(s)) {
                for (o = y(e.length); f < o; f++) if ((u = t ? d(b(a = e[f])[0], a[1]) : d(e[f])) === h || u === m) return u;
            } else for (c = s.call(e); !(a = c.next()).done; ) if ((u = g(c, d, a.value, t)) === h || u === m) return u;
        }).BREAK = h, t.RETURN = m;
    },
    42: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (!t || !e) return void o.logError("cannot load external script without url and moduleCode");
            if (!i()(c, t)) return void o.logError("".concat(t, " not whitelisted for loading external JavaScript"));
            if (a[e]) return;
            o.logWarn("module ".concat(t, " is loading external JavaScript"));
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0, n.src = e, o.insertElement(n), a[e] = !0;
        }, t.b = function(t, e, n) {
            if (!t) return void o.logError("Error attempting to request empty URL", "adloader.js:loadScript");
            n ? a[t] ? e && "function" == typeof e && (a[t].loaded ? e() : a[t].callbacks.push(e)) : (a[t] = {
                loaded: !1,
                callbacks: []
            }, e && "function" == typeof e && a[t].callbacks.push(e), u(t, function() {
                a[t].loaded = !0;
                try {
                    for (var e = 0; e < a[t].callbacks.length; e++) a[t].callbacks[e]();
                } catch (e) {
                    o.logError("Error executing callback", "adloader.js:loadScript", e);
                }
            })) : u(t, e);
        };
        var r = n(11), i = n.n(r), o = n(0), a = {}, c = [ "criteo", "adagio" ];
        function u(e, t) {
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0, t && "function" == typeof t && (n.readyState ? n.onreadystatechange = function() {
                "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, 
                t());
            } : n.onload = function() {
                t();
            }), n.src = e;
            var r = document.getElementsByTagName("head");
            (r = r.length ? r : document.getElementsByTagName("body")).length && (r = r[0]).insertBefore(n, r.firstChild);
        }
    },
    43: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return G;
        }), n.d(t, "a", function() {
            return W;
        }), t.j = function(e) {
            var t, n, b, y, o = e.adUnits, r = e.adUnitCodes, i = e.callback, a = e.cbTimeout, c = e.labels, u = e.auctionId, v = o, s = c, d = r, h = [], f = [], l = [], m = u || x.generateUUID(), g = i, S = a, p = [], E = new Set();
            function A() {
                return {
                    auctionId: m,
                    timestamp: t,
                    auctionEnd: n,
                    auctionStatus: b,
                    adUnits: v,
                    adUnitCodes: d,
                    labels: s,
                    bidderRequests: h,
                    noBids: l,
                    bidsReceived: f,
                    winningBids: p,
                    timeout: S
                };
            }
            function T(r, e) {
                if (e && clearTimeout(y), void 0 === n) {
                    var i = [];
                    r && (x.logMessage("Auction ".concat(m, " timedOut")), t = E, (i = h.map(function(e) {
                        return (e.bids || []).filter(function(e) {
                            return !t.has(e.bidder);
                        });
                    }).reduce(w.flatten, []).map(function(e) {
                        return {
                            bidId: e.bidId,
                            bidder: e.bidder,
                            adUnitCode: e.adUnitCode,
                            auctionId: e.auctionId
                        };
                    })).length && P.emit(q.EVENTS.BID_TIMEOUT, i)), b = W, n = Date.now(), P.emit(q.EVENTS.AUCTION_END, A()), 
                    K(d, function() {
                        try {
                            if (null != g) {
                                var e = d, t = f.filter(x.bind.call(w.adUnitsFilter, this, e)).reduce(X, {});
                                g.apply(pbjs, [ t, r ]), g = null;
                            }
                        } catch (e) {
                            x.logError("Error executing bidsBackHandler", null, e);
                        } finally {
                            i.length && k.callTimedOutBidders(o, i, S);
                            var n = _.b.getConfig("userSync") || {};
                            n.enableOverride || N(n.syncDelay);
                        }
                    });
                }
                var t;
            }
            function O() {
                x.logInfo("Bids Received for Auction with id: ".concat(m), f), b = W, T(!1, !0);
            }
            function I(e) {
                E.add(e);
            }
            return {
                addBidReceived: function(e) {
                    f = f.concat(e);
                },
                addNoBid: function(e) {
                    l = l.concat(e);
                },
                executeCallback: T,
                callBids: function() {
                    var d = this;
                    b = M, t = Date.now();
                    var f = k.makeBidRequests(v, t, m, S, s);
                    x.logInfo("Bids Requested for Auction with id: ".concat(m), f), f.forEach(function(e) {
                        var t;
                        t = e, h = h.concat(t);
                    });
                    var l = {};
                    if (f.length < 1) x.logWarn("No valid bid requests returned for auction"), O(); else {
                        var e = {
                            bidRequests: f,
                            run: function() {
                                var e, t;
                                e = T.bind(null, !0), t = setTimeout(e, S), y = t, b = G, P.emit(q.EVENTS.AUCTION_INIT, A());
                                var n, r, i, o, a, c, u = (n = O, r = d, i = 0, o = !1, a = new Set(), c = {}, {
                                    addBidResponse: function(e, t) {
                                        c[t.requestId] = !0, i++;
                                        var n = function(e) {
                                            var t = e.adUnitCode, n = e.bid, r = e.bidderRequest, i = e.auctionId, o = r.start, a = D({}, n, {
                                                auctionId: i,
                                                responseTimestamp: Object(w.timestamp)(),
                                                requestTimestamp: o,
                                                cpm: parseFloat(n.cpm) || 0,
                                                bidder: n.bidderCode,
                                                adUnitCode: t
                                            });
                                            a.timeToRespond = a.responseTimestamp - a.requestTimestamp, P.emit(q.EVENTS.BID_ADJUSTMENT, a);
                                            var c = r.bids && B()(r.bids, function(e) {
                                                return e.adUnitCode == t;
                                            }), u = c && c.renderer;
                                            u && u.url && (a.renderer = j.a.install({
                                                url: u.url
                                            }), a.renderer.setRender(u.render));
                                            var s = Q(n.mediaType, c, _.b.getConfig("mediaTypePriceGranularity")), d = Object(C.a)(a.cpm, "object" === R(s) ? s : _.b.getConfig("customPriceBucket"), _.b.getConfig("currency.granularityMultiplier"));
                                            return a.pbLg = d.low, a.pbMg = d.med, a.pbHg = d.high, a.pbAg = d.auto, a.pbDg = d.dense, 
                                            a.pbCg = d.custom, a;
                                        }({
                                            adUnitCode: e,
                                            bid: t,
                                            bidderRequest: this,
                                            auctionId: r.getAuctionId()
                                        });
                                        "video" === n.mediaType ? function(e, t, n, r) {
                                            var i = !0, o = Object(w.getBidRequest)(t.requestId, [ n ]), a = o && Object(w.deepAccess)(o, "mediaTypes.video"), c = a && Object(w.deepAccess)(a, "context");
                                            _.b.getConfig("cache.url") && c !== U.b && (t.videoCacheKey ? t.vastUrl || (x.logError("videoCacheKey specified but not required vastUrl for video bid"), 
                                            i = !1) : (i = !1, Y(e, t, r, o))), i && (J(e, t), r());
                                        }(r, n, this, s) : (J(r, n), s());
                                    },
                                    adapterDone: function() {
                                        a.add(this), o = r.getBidRequests().every(function(e) {
                                            return a.has(e);
                                        }), this.bids.forEach(function(e) {
                                            c[e.bidId] || (r.addNoBid(e), P.emit(q.EVENTS.NO_BID, e));
                                        }), o && 0 === i && n();
                                    }
                                });
                                function s() {
                                    i--, o && 0 === i && n();
                                }
                                k.callBids(v, f, function() {
                                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    H.apply({
                                        dispatch: u.addBidResponse,
                                        bidderRequest: this
                                    }, t);
                                }, u.adapterDone, {
                                    request: function(e, t) {
                                        p(F, t), p(l, e), z[e] || (z[e] = {
                                            SRA: !0,
                                            origin: t
                                        }), 1 < l[e] && (z[e].SRA = !1);
                                    },
                                    done: function(e) {
                                        F[e]--, V[0] && g(V[0]) && V.shift();
                                    }
                                }, S, I);
                            }
                        };
                        g(e) || (x.logWarn("queueing auction due to limited endpoint capacity"), V.push(e));
                    }
                    function g(e) {
                        var r = !0, i = _.b.getConfig("maxRequestsPerOrigin") || L;
                        return e.bidRequests.some(function(e) {
                            var t = 1, n = void 0 !== e.src && e.src === q.S2S.SRC ? "s2s" : e.bidderCode;
                            return z[n] && (!1 === z[n].SRA && (t = Math.min(e.bids.length, i)), F[z[n].origin] + t > i && (r = !1)), 
                            !r;
                        }), r && e.run(), r;
                    }
                    function p(e, t) {
                        void 0 === e[t] ? e[t] = 1 : e[t]++;
                    }
                },
                addWinningBid: function(e) {
                    p = p.concat(e), k.callBidWonBidder(e.bidder, e, o);
                },
                setBidTargeting: function(e) {
                    k.callSetTargetingBidder(e.bidder, e);
                },
                getWinningBids: function() {
                    return p;
                },
                getTimeout: function() {
                    return S;
                },
                getAuctionId: function() {
                    return m;
                },
                getAuctionStatus: function() {
                    return b;
                },
                getAdUnits: function() {
                    return v;
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
            return H;
        }), t.f = d, t.d = J, n.d(t, "e", function() {
            return Y;
        }), n.d(t, "h", function() {
            return f;
        }), n.d(t, "g", function() {
            return l;
        }), t.i = g;
        var w = n(0), s = n(9), C = n(44), a = n(27), o = n(81), j = n(10), _ = n(3), r = n(32), i = n(13), c = n(12), B = n.n(c), U = n(33), u = n(2);
        function R(e) {
            return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function D() {
            return (D = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        var N = r.a.syncUsers, x = n(0), k = n(7).default, P = n(8), q = n(5), M = "started", G = "inProgress", W = "completed";
        P.on(q.EVENTS.BID_ADJUSTMENT, function(e) {
            !function(e) {
                var t, n = e.bidderCode, r = e.cpm;
                if (pbjs.bidderSettings && (n && pbjs.bidderSettings[n] && "function" == typeof pbjs.bidderSettings[n].bidCpmAdjustment ? t = pbjs.bidderSettings[n].bidCpmAdjustment : pbjs.bidderSettings[q.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[q.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = pbjs.bidderSettings[q.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), 
                t)) try {
                    r = t(e.cpm, D({}, e));
                } catch (e) {
                    x.logError("Error during bid adjustment", "bidmanager.js", e);
                }
                0 <= r && (e.cpm = r);
            }(e);
        });
        var L = 4, F = {}, z = {}, V = [];
        var H = Object(i.b)("async", function(e, t) {
            this.dispatch.call(this.bidderRequest, e, t);
        }, "addBidResponse"), K = Object(i.b)("async", function(e, t) {
            t && t();
        }, "bidsBackCallback");
        function d(e, t) {
            t.timeToRespond > e.getTimeout() + _.b.getConfig("timeoutBuffer") && e.executeCallback(!0);
        }
        function J(e, t) {
            var n = e.getBidRequests(), r = B()(n, function(e) {
                return e.bidderCode === t.bidderCode;
            });
            !function(t, e) {
                var n;
                if (t.bidderCode && (0 < t.cpm || t.dealId)) {
                    var r = B()(e.bids, function(e) {
                        return e.adUnitCode === t.adUnitCode;
                    });
                    n = function(e, t, n) {
                        if (!t) return {};
                        var r = {}, i = pbjs.bidderSettings;
                        if (i) {
                            var o = g(t.mediaType, e, n);
                            p(r, o, t), e && i[e] && i[e][q.JSON_MAPPING.ADSERVER_TARGETING] && (p(r, i[e], t), 
                            t.sendStandardTargeting = i[e].sendStandardTargeting);
                        }
                        t.native && (r = D({}, r, Object(a.d)(t, n)));
                        return r;
                    }(t.bidderCode, t, r);
                }
                t.adserverTargeting = D(t.adserverTargeting || {}, n);
            }(t, r), P.emit(q.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), d(e, t);
        }
        var Y = Object(i.b)("async", function(n, r, i, e) {
            Object(o.b)([ r ], function(e, t) {
                e ? (x.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid must be discarded.")), 
                d(n, r)) : "" === t[0].uuid ? (x.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), 
                d(n, r)) : (r.videoCacheKey = t[0].uuid, r.vastUrl || (r.vastUrl = Object(o.a)(r.videoCacheKey)), 
                J(n, r), i());
            });
        }, "callPrebidCache");
        function Q(e, t, n) {
            if (e && n) {
                if (e === u.d) {
                    var r = Object(w.deepAccess)(t, "mediaTypes.".concat(u.d, ".context"), "instream");
                    if (n["".concat(u.d, "-").concat(r)]) return n["".concat(u.d, "-").concat(r)];
                }
                return n[e];
            }
        }
        var f = function(e, t) {
            var n = Q(e, t, _.b.getConfig("mediaTypePriceGranularity"));
            return "string" == typeof e && n ? "string" == typeof n ? n : "custom" : _.b.getConfig("priceGranularity");
        }, l = function(t) {
            return function(e) {
                return t === q.GRANULARITY_OPTIONS.AUTO ? e.pbAg : t === q.GRANULARITY_OPTIONS.DENSE ? e.pbDg : t === q.GRANULARITY_OPTIONS.LOW ? e.pbLg : t === q.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : t === q.GRANULARITY_OPTIONS.HIGH ? e.pbHg : t === q.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0;
            };
        };
        function g(e, t, n) {
            function r(e, t) {
                return {
                    key: e,
                    val: "function" == typeof t ? function(e) {
                        return t(e);
                    } : function(e) {
                        return Object(w.getValue)(e, t);
                    }
                };
            }
            var i = q.TARGETING_KEYS, o = f(e, n), a = pbjs.bidderSettings;
            if (a[q.JSON_MAPPING.BD_SETTING_STANDARD] || (a[q.JSON_MAPPING.BD_SETTING_STANDARD] = {}), 
            a[q.JSON_MAPPING.BD_SETTING_STANDARD][q.JSON_MAPPING.ADSERVER_TARGETING] || (a[q.JSON_MAPPING.BD_SETTING_STANDARD][q.JSON_MAPPING.ADSERVER_TARGETING] = [ r(i.BIDDER, "bidderCode"), r(i.AD_ID, "adId"), r(i.PRICE_BUCKET, l(o)), r(i.SIZE, "size"), r(i.DEAL, "dealId"), r(i.SOURCE, "source"), r(i.FORMAT, "mediaType") ]), 
            "video" === e) {
                var c = a[q.JSON_MAPPING.BD_SETTING_STANDARD][q.JSON_MAPPING.ADSERVER_TARGETING];
                if ([ i.UUID, i.CACHE_ID ].forEach(function(t) {
                    void 0 === B()(c, function(e) {
                        return e.key === t;
                    }) && c.push(r(t, "videoCacheKey"));
                }), _.b.getConfig("cache.url") && (!t || !1 !== x.deepAccess(a, "".concat(t, ".sendStandardTargeting")))) {
                    var u = Object(s.c)(_.b.getConfig("cache.url"));
                    void 0 === B()(c, function(e) {
                        return e.key === i.CACHE_HOST;
                    }) && c.push(r(i.CACHE_HOST, function(e) {
                        return x.deepAccess(e, "adserverTargeting.".concat(i.CACHE_HOST)) ? e.adserverTargeting[i.CACHE_HOST] : u.hostname;
                    }));
                }
            }
            return a[q.JSON_MAPPING.BD_SETTING_STANDARD];
        }
        function p(r, i, o) {
            var e = i[q.JSON_MAPPING.ADSERVER_TARGETING];
            return o.size = o.getSize(), x._each(e, function(e) {
                var t = e.key, n = e.val;
                if (r[t] && x.logWarn("The key: " + t + " is getting ovewritten"), x.isFn(n)) try {
                    n = n(o);
                } catch (e) {
                    x.logError("bidmanager", "ERROR", e);
                }
                (void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && t !== q.TARGETING_KEYS.DEAL || !x.isEmptyStr(n) && null != n ? r[t] = n : x.logInfo("suppressing empty key '" + t + "' from adserver targeting");
            }), r;
        }
        function X(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = {
                bids: []
            }), e[t.adUnitCode].bids.push(t), e;
        }
    },
    44: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return d;
        }), n.d(t, "b", function() {
            return v;
        });
        var r = n(12), b = n.n(r), i = n(0), y = 2, o = {
            buckets: [ {
                min: 0,
                max: 5,
                increment: .5
            } ]
        }, a = {
            buckets: [ {
                min: 0,
                max: 20,
                increment: .1
            } ]
        }, c = {
            buckets: [ {
                min: 0,
                max: 20,
                increment: .01
            } ]
        }, u = {
            buckets: [ {
                min: 0,
                max: 3,
                increment: .01
            }, {
                min: 3,
                max: 8,
                increment: .05
            }, {
                min: 8,
                max: 20,
                increment: .5
            } ]
        }, s = {
            buckets: [ {
                min: 0,
                max: 5,
                increment: .05
            }, {
                min: 5,
                max: 10,
                increment: .1
            }, {
                min: 10,
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
            if (!v(e)) return i;
            var t, o, a, c, u, s, d, f, l, g = e.buckets.reduce(function(e, t) {
                return e.max > t.max ? e : t;
            }, {
                max: 0
            }), p = b()(e.buckets, function(e) {
                if (n > g.max * r) {
                    var t = e.precision;
                    void 0 === t && (t = y), i = (e.max * r).toFixed(t);
                } else if (n <= e.max * r && n >= e.min * r) return e;
            });
            return p && (t = n, a = r, c = void 0 !== (o = p).precision ? o.precision : y, u = o.increment * a, 
            s = o.min * a, d = Math.pow(10, c + 2), f = (t * d - s * d) / (u * d), l = Math.floor(f) * u + s, 
            i = (l = Number(l.toFixed(10))).toFixed(c)), i;
        }
        function v(e) {
            if (i.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
            var t = !0;
            return e.buckets.forEach(function(e) {
                void 0 !== e.min && e.max && e.increment || (t = !1);
            }), t;
        }
    },
    45: function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            };
        };
    },
    46: function(e, t, n) {
        var m = n(26), S = n(61), E = n(47), A = n(39), r = n(88);
        e.exports = function(f, e) {
            var l = 1 == f, g = 2 == f, p = 3 == f, b = 4 == f, y = 6 == f, v = 5 == f || y, h = e || r;
            return function(e, t, n) {
                for (var r, i, o = E(e), a = S(o), c = m(t, n, 3), u = A(a.length), s = 0, d = l ? h(e, u) : g ? h(e, 0) : void 0; s < u; s++) if ((v || s in a) && (i = c(r = a[s], s, o), 
                f)) if (l) d[s] = i; else if (i) switch (f) {
                  case 3:
                    return !0;

                  case 5:
                    return r;

                  case 6:
                    return s;

                  case 2:
                    d.push(r);
                } else if (b) return !1;
                return y ? -1 : p || b ? b : d;
            };
        };
    },
    47: function(e, t, n) {
        var r = n(38);
        e.exports = function(e) {
            return Object(r(e));
        };
    },
    48: function(e, t) {
        var n = Math.ceil, r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e);
        };
    },
    49: function(e, t) {
        var n = 0, r = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36));
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
                REQUEST_BIDS: "requestBids",
                ADD_AD_UNITS: "addAdUnits",
                AD_RENDER_FAILED: "adRenderFailed"
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
                RENDERED: "rendered"
            },
            SUBMODULES_THAT_ALWAYS_REFRESH_ID: {
                parrableId: !0
            }
        };
    },
    50: function(e, t, n) {
        var r = n(61), i = n(38);
        e.exports = function(e) {
            return r(i(e));
        };
    },
    51: function(e, t, n) {
        "use strict";
        function m() {
            return this;
        }
        var S = n(63), E = n(15), A = n(95), T = n(21), O = n(30), I = n(96), w = n(53), C = n(101), j = n(14)("iterator"), _ = !([].keys && "next" in [].keys()), B = "values";
        e.exports = function(e, t, n, r, i, o, a) {
            I(n, t, r);
            function c(e) {
                if (!_ && e in p) return p[e];
                switch (e) {
                  case "keys":
                  case B:
                    return function() {
                        return new n(this, e);
                    };
                }
                return function() {
                    return new n(this, e);
                };
            }
            var u, s, d, f = t + " Iterator", l = i == B, g = !1, p = e.prototype, b = p[j] || p["@@iterator"] || i && p[i], y = b || c(i), v = i ? l ? c("entries") : y : void 0, h = "Array" == t && p.entries || b;
            if (h && (d = C(h.call(new e()))) !== Object.prototype && d.next && (w(d, f, !0), 
            S || "function" == typeof d[j] || T(d, j, m)), l && b && b.name !== B && (g = !0, 
            y = function() {
                return b.call(this);
            }), S && !a || !_ && !g && p[j] || T(p, j, y), O[t] = y, O[f] = m, i) if (u = {
                values: l ? y : c(B),
                keys: o ? y : c("keys"),
                entries: v
            }, a) for (s in u) s in p || A(p, s, u[s]); else E(E.P + E.F * (_ || g), t, u);
            return u;
        };
    },
    52: function(e, t, n) {
        var r = n(62)("keys"), i = n(49);
        e.exports = function(e) {
            return r[e] || (r[e] = i(e));
        };
    },
    53: function(e, t, n) {
        var r = n(20).f, i = n(29), o = n(14)("toStringTag");
        e.exports = function(e, t, n) {
            e && !i(e = n ? e : e.prototype, o) && r(e, o, {
                configurable: !0,
                value: t
            });
        };
    },
    54: function(e, t, n) {
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
    58: function(e, t, n) {
        "use strict";
        t.a = function(t, n) {
            o.adServers = o.adServers || {}, o.adServers[t] = o.adServers[t] || {}, Object.keys(n).forEach(function(e) {
                o.adServers[t][e] ? Object(i.logWarn)("Attempting to add an already registered function property ".concat(e, " for AdServer ").concat(t, ".")) : o.adServers[t][e] = n[e];
            });
        };
        var r = n(24), i = n(0), o = Object(r.a)();
    },
    59: function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e;
        };
    },
    60: function(e, t, n) {
        var r = n(17), i = n(19).document, o = r(i) && r(i.createElement);
        e.exports = function(e) {
            return o ? i.createElement(e) : {};
        };
    },
    61: function(e, t, n) {
        var r = n(37);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e);
        };
    },
    62: function(e, t, n) {
        var r = n(16), i = n(19), o = "__core-js_shared__", a = i[o] || (i[o] = {});
        (e.exports = function(e, t) {
            return a[e] || (a[e] = void 0 !== t ? t : {});
        })("versions", []).push({
            version: r.version,
            mode: n(63) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        });
    },
    63: function(e, t) {
        e.exports = !0;
    },
    64: function(e, t, n) {
        var u = n(50), s = n(39), d = n(92);
        e.exports = function(c) {
            return function(e, t, n) {
                var r, i = u(e), o = s(i.length), a = d(n, o);
                if (c && t != t) {
                    for (;a < o; ) if ((r = i[a++]) != r) return !0;
                } else for (;a < o; a++) if ((c || a in i) && i[a] === t) return c || a || 0;
                return !c && -1;
            };
        };
    },
    65: function(e, t, n) {
        n(93), n(66), n(102), n(104), n(108), n(111), n(113), e.exports = n(16).Set;
    },
    66: function(e, t, n) {
        "use strict";
        var r = n(94)(!0);
        n(51)(String, "String", function(e) {
            this._t = String(e), this._i = 0;
        }, function() {
            var e, t = this._t, n = this._i;
            return n >= t.length ? {
                value: void 0,
                done: !0
            } : (e = r(t, n), this._i += e.length, {
                value: e,
                done: !1
            });
        });
    },
    67: function(e, t, r) {
        function i() {}
        var o = r(28), a = r(97), c = r(68), u = r(52)("IE_PROTO"), s = "prototype", d = function() {
            var e, t = r(60)("iframe"), n = c.length;
            for (t.style.display = "none", r(100).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), 
            e.write("<script>document.F=Object<\/script>"), e.close(), d = e.F; n--; ) delete d[s][c[n]];
            return d();
        };
        e.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (i[s] = o(e), n = new i(), i[s] = null, n[u] = e) : n = d(), 
            void 0 === t ? n : a(n, t);
        };
    },
    68: function(e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    },
    69: function(e, t) {
        e.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            };
        };
    },
    7: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "gdprDataHandler", function() {
            return R;
        }), n.d(t, "uspDataHandler", function() {
            return D;
        }), t.setS2STestingModule = function(e) {
            w = e;
        };
        var E = n(0), g = n(79), p = n(27), d = n(1), h = n(4), A = n(3), r = n(11), T = n.n(r), i = n(12), O = n.n(i), b = n(80), I = n(31);
        function m(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
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
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }();
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
        var w, C = n(0), j = n(5), S = n(8), f = {}, _ = f.bidderRegistry = {}, l = f.aliasRegistry = {}, B = {};
        A.b.getConfig("s2sConfig", function(e) {
            B = e.s2sConfig;
        });
        var o = {};
        function U(e) {
            var i = e.bidderCode, s = e.auctionId, d = e.bidderRequestId, t = e.adUnits, f = e.labels, l = e.src;
            return t.reduce(function(e, c) {
                var t = Object(g.b)(Object(g.a)(c, f), c.mediaTypes, c.sizes), n = t.active, u = t.mediaTypes, r = t.filterResults;
                return n ? r && C.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '), r.before, "to ", r.after) : C.logInfo('Size mapping disabled adUnit "'.concat(c.code, '"')), 
                n && e.push(c.bids.filter(function(e) {
                    return e.bidder === i;
                }).reduce(function(e, t) {
                    var n = c.nativeParams || C.deepAccess(c, "mediaTypes.native");
                    n && (t = y({}, t, {
                        nativeParams: Object(p.g)(n)
                    })), t = y({}, t, Object(E.getDefinedParams)(c, [ "mediaType", "renderer" ]));
                    var r = Object(g.b)(Object(g.a)(t, f), u), i = r.active, o = r.mediaTypes, a = r.filterResults;
                    return i ? a && C.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '" banner sizes from '), a.before, "to ", a.after) : C.logInfo('Size mapping deactivated adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '"')), 
                    C.isValidMediaTypes(o) ? t = y({}, t, {
                        mediaTypes: o
                    }) : C.logError("mediaTypes is not correctly configured for adunit ".concat(c.code)), 
                    i && e.push(y({}, t, {
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
            }, []).reduce(E.flatten, []).filter(function(e) {
                return "" !== e;
            });
        }
        var R = {
            consentData: null,
            setConsentData: function(e) {
                R.consentData = e;
            },
            getConsentData: function() {
                return R.consentData;
            }
        }, D = {
            consentData: null,
            setConsentData: function(e) {
                D.consentData = e;
            },
            getConsentData: function() {
                return D.consentData;
            }
        };
        function N() {
            return B && B.enabled && B.testing && w;
        }
        function a(t, n, e) {
            try {
                var r = _[t].getSpec();
                r && r[n] && "function" == typeof r[n] && (C.logInfo("Invoking ".concat(t, ".").concat(n)), 
                A.b.runWithBidder(t, E.bind.call(r[n], r, e)));
            } catch (e) {
                C.logWarn("Error calling ".concat(n, " of ").concat(t));
            }
        }
        f.makeBidRequests = function(e, i, o, a, c) {
            var u = [], t = Object(E.getBidderCodes)(e);
            A.b.getConfig("bidderSequence") === A.a && (t = Object(E.shuffle)(t));
            var n, r, s, d, f = Object(I.b)(), l = t, g = [];
            if (B.enabled) {
                if (N()) {
                    var p = w.getSourceBidderMap(e);
                    g = p[w.CLIENT];
                }
                var b = B.bidders;
                l = t.filter(function(e) {
                    return !T()(b, e) || T()(g, e);
                });
                Boolean(N() && B.testServerOnly) && (d = e, Boolean(O()(d, function(e) {
                    return O()(e.bids, function(e) {
                        return (e.bidSource || B.bidderControl && B.bidderControl[e.bidder]) && e.finalSource === w.SERVER;
                    });
                }))) && (l.length = 0);
                var y = (n = e, r = B.bidders, (s = C.deepClone(n)).forEach(function(e) {
                    e.bids = e.bids.filter(function(e) {
                        return T()(r, e.bidder) && (!N() || e.finalSource !== w.CLIENT);
                    }).map(function(e) {
                        return e.bid_id = C.getUniqueIdentifierStr(), e;
                    });
                }), s = s.filter(function(e) {
                    return 0 !== e.bids.length;
                })), v = C.generateUUID();
                b.forEach(function(e) {
                    var t = C.getUniqueIdentifierStr(), n = {
                        bidderCode: e,
                        auctionId: o,
                        bidderRequestId: t,
                        tid: v,
                        bids: U({
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            adUnits: C.deepClone(y),
                            labels: c,
                            src: j.S2S.SRC
                        }),
                        auctionStart: i,
                        timeout: B.timeout,
                        src: j.S2S.SRC,
                        refererInfo: f
                    };
                    0 !== n.bids.length && u.push(n);
                }), y.forEach(function(e) {
                    var t = e.bids.filter(function(t) {
                        return O()(u, function(e) {
                            return O()(e.bids, function(e) {
                                return e.bidId === t.bid_id;
                            });
                        });
                    });
                    e.bids = t;
                }), u.forEach(function(e) {
                    e.adUnitsS2SCopy = y.filter(function(e) {
                        return 0 < e.bids.length;
                    });
                });
            }
            var h, m, S = (h = e, (m = C.deepClone(h)).forEach(function(e) {
                e.bids = e.bids.filter(function(e) {
                    return !N() || e.finalSource !== w.SERVER;
                });
            }), m = m.filter(function(e) {
                return 0 !== e.bids.length;
            }));
            return l.forEach(function(e) {
                var t = C.getUniqueIdentifierStr(), n = {
                    bidderCode: e,
                    auctionId: o,
                    bidderRequestId: t,
                    bids: U({
                        bidderCode: e,
                        auctionId: o,
                        bidderRequestId: t,
                        adUnits: C.deepClone(S),
                        labels: c,
                        src: "client"
                    }),
                    auctionStart: i,
                    timeout: a,
                    refererInfo: f
                }, r = _[e];
                r || C.logError("Trying to make a request for bidder that does not exist: ".concat(e)), 
                r && n.bids && 0 !== n.bids.length && u.push(n);
            }), R.getConsentData() && u.forEach(function(e) {
                e.gdprConsent = R.getConsentData();
            }), D.getConsentData() && u.forEach(function(e) {
                e.uspConsent = D.getConsentData();
            }), u;
        }, f.callBids = function(e, t, r, i, o, a, c) {
            if (t.length) {
                var n = m(t.reduce(function(e, t) {
                    return e[Number(void 0 !== t.src && t.src === j.S2S.SRC)].push(t), e;
                }, [ [], [] ]), 2), u = n[0], s = n[1];
                if (s.length) {
                    var d = Object(h.b)(a, o ? {
                        request: o.request.bind(null, "s2s"),
                        done: o.done
                    } : void 0), f = B.bidders, l = _[B.adapter], g = s[0].tid, p = s[0].adUnitsS2SCopy;
                    if (l) {
                        var b = {
                            tid: g,
                            ad_units: p
                        };
                        if (b.ad_units.length) {
                            var y = s.map(function(e) {
                                return e.start = Object(E.timestamp)(), i.bind(e);
                            }), v = b.ad_units.reduce(function(e, t) {
                                return e.concat((t.bids || []).reduce(function(e, t) {
                                    return e.concat(t.bidder);
                                }, []));
                            }, []);
                            C.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(f.filter(function(e) {
                                return T()(v, e);
                            }).join(","))), s.forEach(function(e) {
                                S.emit(j.EVENTS.BID_REQUESTED, e);
                            }), l.callBids(b, s, function(e, t) {
                                var n = Object(E.getBidderRequest)(s, t.bidderCode, e);
                                n && r.call(n, e, t);
                            }, function() {
                                return y.forEach(function(e) {
                                    return e();
                                });
                            }, d);
                        }
                    } else C.logError("missing " + B.adapter);
                }
                u.forEach(function(e) {
                    e.start = Object(E.timestamp)();
                    var t = _[e.bidderCode];
                    C.logMessage("CALLING BIDDER ======= ".concat(e.bidderCode)), S.emit(j.EVENTS.BID_REQUESTED, e);
                    var n = Object(h.b)(a, o ? {
                        request: o.request.bind(null, e.bidderCode),
                        done: o.done
                    } : void 0);
                    A.b.runWithBidder(e.bidderCode, E.bind.call(t.callBids, t, e, r.bind(e), i.bind(e), n, c, A.b.callbackWithBidder(e.bidderCode)));
                });
            } else C.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?");
        }, f.videoAdapters = [], f.registerBidAdapter = function(e, t) {
            var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes, r = void 0 === n ? [] : n;
            e && t ? "function" == typeof e.callBids ? (_[t] = e, T()(r, "video") && f.videoAdapters.push(t), 
            T()(r, "native") && p.e.push(t)) : C.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : C.logError("bidAdaptor or bidderCode not specified");
        }, f.aliasBidAdapter = function(t, e) {
            var n, r;
            if (void 0 === _[e]) {
                var i = _[t];
                if (void 0 === i) {
                    var o = A.b.getConfig("s2sConfig"), a = o && o.bidders;
                    a && T()(a, e) ? l[e] = t : C.logError('bidderCode "' + t + '" is not an existing bidder.', "adapterManager.aliasBidAdapter");
                } else try {
                    var c, u = (n = t, r = [], T()(f.videoAdapters, n) && r.push("video"), T()(p.e, n) && r.push("native"), 
                    r);
                    if (i.constructor.prototype != Object.prototype) (c = new i.constructor()).setBidderCode(e); else {
                        var s = i.getSpec();
                        c = Object(d.newBidder)(y({}, s, {
                            code: e
                        })), l[e] = t;
                    }
                    f.registerBidAdapter(c, e, {
                        supportedMediaTypes: u
                    });
                } catch (e) {
                    C.logError(t + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter");
                }
            } else C.logMessage('alias name "' + e + '" has been already specified.');
        }, f.registerAnalyticsAdapter = function(e) {
            var t = e.adapter, n = e.code;
            t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, o[n] = t) : C.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function')) : C.logError("Prebid Error: analyticsAdapter or analyticsCode not specified");
        }, f.enableAnalytics = function(e) {
            C.isArray(e) || (e = [ e ]), C._each(e, function(e) {
                var t = o[e.provider];
                t ? t.enableAnalytics(e) : C.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."));
            });
        }, f.getBidAdapter = function(e) {
            return _[e];
        }, f.callTimedOutBidders = function(t, n, r) {
            n = n.map(function(e) {
                return e.params = C.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = r, 
                e;
            }), n = C.groupBy(n, "bidder"), Object.keys(n).forEach(function(e) {
                a(e, "onTimeout", n[e]);
            });
        }, f.callBidWonBidder = function(e, t, n) {
            t.params = C.getUserConfiguredParams(n, t.adUnitCode, t.bidder), b.a.incrementBidderWinsCounter(t.adUnitCode, t.bidder), 
            a(e, "onBidWon", t);
        }, f.callSetTargetingBidder = function(e, t) {
            a(e, "onSetTargeting", t);
        }, t.default = f;
    },
    70: function(e, t, n) {
        var i = n(21);
        e.exports = function(e, t, n) {
            for (var r in t) n && e[r] ? e[r] = t[r] : i(e, r, t[r]);
            return e;
        };
    },
    71: function(e, t) {
        e.exports = function(e, t, n, r) {
            if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
            return e;
        };
    },
    72: function(e, t, n) {
        var o = n(28);
        e.exports = function(t, e, n, r) {
            try {
                return r ? e(o(n)[0], n[1]) : e(n);
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && o(i.call(t)), e;
            }
        };
    },
    720: function(e, t, n) {
        e.exports = n(82);
    },
    73: function(e, t, n) {
        var r = n(30), i = n(14)("iterator"), o = Array.prototype;
        e.exports = function(e) {
            return void 0 !== e && (r.Array === e || o[i] === e);
        };
    },
    74: function(e, t, n) {
        var r = n(75), i = n(14)("iterator"), o = n(30);
        e.exports = n(16).getIteratorMethod = function(e) {
            if (null != e) return e[i] || e["@@iterator"] || o[r(e)];
        };
    },
    75: function(e, t, n) {
        var i = n(37), o = n(14)("toStringTag"), a = "Arguments" == i(function() {
            return arguments;
        }());
        e.exports = function(e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
                try {
                    return e[t];
                } catch (e) {}
            }(t = Object(e), o)) ? n : a ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r;
        };
    },
    76: function(e, t, n) {
        function r(e) {
            c(e, i, {
                value: {
                    i: "O" + ++u,
                    w: {}
                }
            });
        }
        var i = n(49)("meta"), o = n(17), a = n(29), c = n(20).f, u = 0, s = Object.isExtensible || function() {
            return !0;
        }, d = !n(36)(function() {
            return s(Object.preventExtensions({}));
        }), f = e.exports = {
            KEY: i,
            NEED: !1,
            fastKey: function(e, t) {
                if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!a(e, i)) {
                    if (!s(e)) return "F";
                    if (!t) return "E";
                    r(e);
                }
                return e[i].i;
            },
            getWeak: function(e, t) {
                if (!a(e, i)) {
                    if (!s(e)) return !0;
                    if (!t) return !1;
                    r(e);
                }
                return e[i].w;
            },
            onFreeze: function(e) {
                return d && f.NEED && s(e) && !a(e, i) && r(e), e;
            }
        };
    },
    77: function(e, t, n) {
        var r = n(17);
        e.exports = function(e, t) {
            if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
            return e;
        };
    },
    78: function(e, t, n) {
        n(66), n(115), e.exports = n(16).Array.from;
    },
    79: function(e, t, n) {
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
            var t = y(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : b);
            return !t.shouldFilter || !!t.sizesSupported[e];
        }, t.b = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.labels, n = void 0 === t ? [] : t, r = e.labelAll, i = void 0 !== r && r, o = e.activeLabels, a = void 0 === o ? [] : o, c = 1 < arguments.length ? arguments[1] : void 0, u = 2 < arguments.length ? arguments[2] : void 0, s = y(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : b);
            c = Object(g.isPlainObject)(c) ? Object(g.deepClone)(c) : u ? {
                banner: {
                    sizes: u
                }
            } : {};
            var d = Object(g.deepAccess)(c, "banner.sizes");
            s.shouldFilter && d && (c.banner.sizes = d.filter(function(e) {
                return s.sizesSupported[e];
            }));
            var f = Object.keys(c), l = {
                active: f.every(function(e) {
                    return "banner" !== e;
                }) || f.some(function(e) {
                    return "banner" === e;
                }) && 0 < Object(g.deepAccess)(c, "banner.sizes.length") && (0 === n.length || !i && (n.some(function(e) {
                    return s.labels[e];
                }) || n.some(function(e) {
                    return p()(a, e);
                })) || i && n.reduce(function(e, t) {
                    return e ? s.labels[t] || p()(a, t) : e;
                }, !0)),
                mediaTypes: c
            };
            d && d.length !== c.banner.sizes.length && (l.filterResults = {
                before: d,
                after: c.banner.sizes
            });
            return l;
        };
        var r = n(3), g = n(0), i = n(11), p = n.n(i);
        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        var b = [];
        function y(e) {
            return e.reduce(function(n, r) {
                if ("object" === o(r) && "string" == typeof r.mediaQuery) {
                    var t = !1;
                    try {
                        t = Object(g.getWindowTop)().matchMedia(r.mediaQuery).matches;
                    } catch (e) {
                        Object(g.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), 
                        t = matchMedia(r.mediaQuery).matches;
                    }
                    t && (Array.isArray(r.sizesSupported) && (n.shouldFilter = !0), [ "labels", "sizesSupported" ].forEach(function(t) {
                        return (r[t] || []).forEach(function(e) {
                            return n[t][e] = !0;
                        });
                    }));
                } else Object(g.logWarn)('sizeConfig rule missing required property "mediaQuery"');
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
    8: function(e, t, n) {
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
            if (i = e, u.contains(d, i)) {
                var r = c[e] || {
                    que: []
                };
                n ? (r[n] = r[n] || {
                    que: []
                }, r[n].que.push(t)) : r.que.push(t), c[e] = r;
            } else u.logError("Wrong event name : " + e + " Valid event names :" + d);
            var i;
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
                e === n && t.splice(u.indexOf.call(t, e), 1);
            }) : u._each(i.que, function(e) {
                var t = i.que;
                e === n && t.splice(u.indexOf.call(t, e), 1);
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
    80: function(e, t, n) {
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
    81: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            var n = {
                puts: e.map(i)
            };
            Object(r.a)(o.b.getConfig("cache.url"), function(n) {
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
            }(t), JSON.stringify(n), {
                contentType: "text/plain",
                withCredentials: !0
            });
        }, t.a = function(e) {
            return "".concat(o.b.getConfig("cache.url"), "?uuid=").concat(e);
        };
        var r = n(4), o = n(3);
        function i(e) {
            var t, n, r, i = {
                type: "xml",
                value: e.vastXml ? e.vastXml : (t = e.vastUrl, n = e.vastImpUrl, r = n ? "<![CDATA[".concat(n, "]]>") : "", 
                '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(t, "]]></VASTAdTagURI>\n        <Impression>").concat(r, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")),
                ttlseconds: Number(e.ttl)
            };
            return o.b.getConfig("cache.vasttrack") && (i.bidder = e.bidder, i.bidid = e.requestId), 
            "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (i.key = e.customCacheKey), 
            i;
        }
    },
    82: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "checkAdUnitSetup", function() {
            return G;
        });
        var r = n(24), c = n(0), i = n(169), o = n(32), a = n(42), d = n(3), v = n(25), f = n(35), u = n(13), s = n(170), l = n(11), g = n.n(l), p = n(80), h = n(10), b = n(23);
        function y(e) {
            return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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
        var S = Object(r.a)(), E = n(5), A = n(0), T = n(7).default, O = n(8), I = o.a.triggerUserSyncs, w = E.EVENTS, C = w.ADD_AD_UNITS, j = w.BID_WON, _ = w.REQUEST_BIDS, B = w.SET_TARGETING, U = w.AD_RENDER_FAILED, R = E.AD_RENDER_FAILED_REASON, D = R.PREVENT_WRITING_ON_MAIN_DOCUMENT, N = R.NO_AD, x = R.EXCEPTION, k = R.CANNOT_FIND_AD, P = R.MISSING_DOC_OR_ADID, q = {
            bidWon: function(e) {
                var t = v.a.getBidsRequested().map(function(e) {
                    return e.bids.map(function(e) {
                        return e.adUnitCode;
                    });
                }).reduce(c.flatten).filter(c.uniques);
                return !!A.contains(t, e) || void A.logError('The "' + e + '" placement is not defined.');
            }
        };
        function M(e, t, n) {
            e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, 
            e.defaultView.frameElement.height = n);
        }
        Object(s.a)(), S.bidderSettings = S.bidderSettings || {}, S.libLoaded = !0, S.version = "v2.44.2", 
        A.logInfo("Prebid.js v2.44.2 loaded"), S.adUnits = S.adUnits || [], S.triggerUserSyncs = I;
        var G = Object(u.b)("sync", function(e) {
            return e.forEach(function(e) {
                var t = e.mediaTypes, n = A.getAdUnitSizes(e);
                if (t && t.banner) {
                    var r = t.banner;
                    r.sizes ? (r.sizes = n, e.sizes = n) : (A.logError("Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request."), 
                    delete e.mediaTypes.banner);
                } else e.sizes && (A.logWarn("Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes)."), 
                e.sizes = n);
                if (t && t.video) {
                    var i = t.video;
                    if (i.playerSize) if (Array.isArray(i.playerSize) && 1 === i.playerSize.length && i.playerSize.every(function(e) {
                        return Object(c.isArrayOfNums)(e, 2);
                    })) e.sizes = i.playerSize; else if (Object(c.isArrayOfNums)(i.playerSize, 2)) {
                        var o = [];
                        o.push(i.playerSize), A.logInfo("Transforming video.playerSize from [".concat(i.playerSize, "] to [[").concat(o, "]] so it's in the proper format.")), 
                        e.sizes = i.playerSize = o;
                    } else A.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), 
                    delete e.mediaTypes.video.playerSize;
                }
                if (t && t.native) {
                    var a = t.native;
                    a.image && a.image.sizes && !Array.isArray(a.image.sizes) && (A.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), 
                    delete e.mediaTypes.native.image.sizes), a.image && a.image.aspect_ratios && !Array.isArray(a.image.aspect_ratios) && (A.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), 
                    delete e.mediaTypes.native.image.aspect_ratios), a.icon && a.icon.sizes && !Array.isArray(a.icon.sizes) && (A.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), 
                    delete e.mediaTypes.native.icon.sizes);
                }
            }), e;
        }, "checkAdUnitSetup");
        function W(e) {
            var n = v.a[e]().filter(A.bind.call(c.adUnitsFilter, this, v.a.getAdUnitCodes())), r = v.a.getLastAuctionId();
            return n.map(function(e) {
                return e.adUnitCode;
            }).filter(c.uniques).map(function(t) {
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
        function L(e) {
            var t = e.reason, n = e.message, r = e.bid, i = e.id, o = {
                reason: t,
                message: n
            };
            r && (o.bid = r), i && (o.adId = i), A.logError(n), O.emit(U, o);
        }
        function F(e) {
            e.forEach(function(e) {
                if (void 0 === e.called) try {
                    e.call(), e.called = !0;
                } catch (e) {
                    A.logError("Error processing command :", "prebid.js", e);
                }
            });
        }
        S.getAdserverTargetingForAdUnitCodeStr = function(e) {
            if (A.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), 
            e) {
                var t = S.getAdserverTargetingForAdUnitCode(e);
                return A.transformAdServerTargetingObj(t);
            }
            A.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode");
        }, S.getAdserverTargetingForAdUnitCode = function(e) {
            return S.getAdserverTargeting(e)[e];
        }, S.getAdserverTargeting = function(e) {
            return A.logInfo("Invoking pbjs.getAdserverTargeting", arguments), f.b.getAllTargeting(e);
        }, S.getNoBids = function() {
            return A.logInfo("Invoking pbjs.getNoBids", arguments), W("getNoBids");
        }, S.getBidResponses = function() {
            return A.logInfo("Invoking pbjs.getBidResponses", arguments), W("getBidsReceived");
        }, S.getBidResponsesForAdUnitCode = function(t) {
            return {
                bids: v.a.getBidsReceived().filter(function(e) {
                    return e.adUnitCode === t;
                })
            };
        }, S.setTargetingForGPTAsync = function(e, t) {
            if (A.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), Object(c.isGptPubadsDefined)()) {
                var n = f.b.getAllTargeting(e);
                f.b.resetPresetTargeting(e), f.b.setTargetingForGPT(n, t), Object.keys(n).forEach(function(t) {
                    Object.keys(n[t]).forEach(function(e) {
                        "hb_adid" === e && v.a.setStatusForBids(n[t][e], E.BID_STATUS.BID_TARGETING_SET);
                    });
                }), O.emit(B, n);
            } else A.logError("window.googletag is not defined on the page");
        }, S.setTargetingForAst = function(e) {
            A.logInfo("Invoking pbjs.setTargetingForAn", arguments), f.b.isApntagDefined() ? (f.b.setTargetingForAst(e), 
            O.emit(B, f.b.getAllTargeting())) : A.logError("window.apntag is not defined on the page");
        }, S.renderAd = function(e, t) {
            if (A.logInfo("Invoking pbjs.renderAd", arguments), A.logMessage("Calling renderAd with adId :" + t), 
            e && t) try {
                var n = v.a.findBidByAdId(t);
                if (n) {
                    n.status = E.BID_STATUS.RENDERED, n.ad = A.replaceAuctionPrice(n.ad, n.cpm), n.adUrl = A.replaceAuctionPrice(n.adUrl, n.cpm), 
                    v.a.addWinningBid(n), O.emit(j, n);
                    var r = n.height, i = n.width, o = n.ad, a = n.mediaType, c = n.adUrl, u = n.renderer, s = document.createComment("Creative ".concat(n.creativeId, " served by ").concat(n.bidder, " Prebid.js Header Bidding"));
                    if (A.insertElement(s, e, "body"), Object(h.c)(u)) Object(h.b)(u, n); else if (e === document && !A.inIframe() || "video" === a) {
                        var d = "Error trying to write ad. Ad render call ad id ".concat(t, " was prevented from writing to the main document.");
                        L({
                            reason: D,
                            message: d,
                            bid: n,
                            id: t
                        });
                    } else if (o) {
                        if (navigator.userAgent && -1 < navigator.userAgent.toLowerCase().indexOf("firefox/")) {
                            var f = navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1];
                            f && parseInt(f, 10) < 67 && e.open("text/html", "replace");
                        }
                        e.write(o), e.close(), M(e, i, r), A.callBurl(n);
                    } else if (c) {
                        var l = A.createInvisibleIframe();
                        l.height = r, l.width = i, l.style.display = "inline", l.style.overflow = "hidden", 
                        l.src = c, A.insertElement(l, e, "body"), M(e, i, r), A.callBurl(n);
                    } else {
                        var g = "Error trying to write ad. No ad for bid response id: ".concat(t);
                        L({
                            reason: N,
                            message: g,
                            bid: n,
                            id: t
                        });
                    }
                } else {
                    var p = "Error trying to write ad. Cannot find ad by given id : ".concat(t);
                    L({
                        reason: k,
                        message: p,
                        id: t
                    });
                }
            } catch (e) {
                var b = "Error trying to write ad Id :".concat(t, " to the page:").concat(e.message);
                L({
                    reason: x,
                    message: b,
                    id: t
                });
            } else {
                var y = "Error trying to write ad Id :".concat(t, " to the page. Missing document or adId");
                L({
                    reason: P,
                    message: y,
                    id: t
                });
            }
        }, S.removeAdUnit = function(e) {
            (A.logInfo("Invoking pbjs.removeAdUnit", arguments), e) ? (A.isArray(e) ? e : [ e ]).forEach(function(e) {
                for (var t = S.adUnits.length - 1; 0 <= t; t--) S.adUnits[t].code === e && S.adUnits.splice(t, 1);
            }) : S.adUnits = [];
        }, S.requestBids = Object(u.b)("async", function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.bidsBackHandler, n = e.timeout, r = e.adUnits, i = e.adUnitCodes, o = e.labels, a = e.auctionId;
            O.emit(_);
            var c = n || d.b.getConfig("bidderTimeout");
            if (r = r || S.adUnits, A.logInfo("Invoking pbjs.requestBids", arguments), i && i.length ? r = r.filter(function(e) {
                return g()(i, e.code);
            }) : i = r && r.map(function(e) {
                return e.code;
            }), (r = G(r)).forEach(function(i) {
                var o = Object.keys(i.mediaTypes || {
                    banner: "banner"
                }), e = i.bids.map(function(e) {
                    return e.bidder;
                }), a = T.bidderRegistry, t = d.b.getConfig("s2sConfig"), n = t && t.bidders, r = n ? e.filter(function(e) {
                    return !g()(n, e);
                }) : e;
                i.transactionId = A.generateUUID(), r.forEach(function(t) {
                    var e = a[t], n = e && e.getSpec && e.getSpec(), r = n && n.supportedMediaTypes || [ "banner" ];
                    o.some(function(e) {
                        return g()(r, e);
                    }) ? p.a.incrementBidderRequestsCounter(i.code, t) : (A.logWarn(A.unsupportedBidderMessage(i, t)), 
                    i.bids = i.bids.filter(function(e) {
                        return e.bidder !== t;
                    }));
                }), p.a.incrementRequestsCounter(i.code);
            }), r && 0 !== r.length) {
                var u = v.a.createAuction({
                    adUnits: r,
                    adUnitCodes: i,
                    callback: t,
                    cbTimeout: c,
                    labels: o,
                    auctionId: a
                }), s = r.length;
                return 15 < s && A.logInfo("Current auction ".concat(u.getAuctionId(), " contains ").concat(s, " adUnits."), r), 
                i.forEach(function(e) {
                    return f.b.setLatestAuctionForAdUnit(e, u.getAuctionId());
                }), u.callBids(), u;
            }
            if (A.logMessage("No adUnits configured. No bids requested."), "function" == typeof t) try {
                t();
            } catch (e) {
                A.logError("Error executing bidsBackHandler", null, e);
            }
        }), S.addAdUnits = function(e) {
            A.logInfo("Invoking pbjs.addAdUnits", arguments), A.isArray(e) ? S.adUnits.push.apply(S.adUnits, e) : "object" === y(e) && S.adUnits.push(e), 
            O.emit(C);
        }, S.onEvent = function(e, t, n) {
            A.logInfo("Invoking pbjs.onEvent", arguments), A.isFn(t) ? !n || q[e].call(null, n) ? O.on(e, t, n) : A.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : A.logError('The event handler provided is not a function and was not set on event "' + e + '".');
        }, S.offEvent = function(e, t, n) {
            A.logInfo("Invoking pbjs.offEvent", arguments), n && !q[e].call(null, n) || O.off(e, t, n);
        }, S.registerBidAdapter = function(e, t) {
            A.logInfo("Invoking pbjs.registerBidAdapter", arguments);
            try {
                T.registerBidAdapter(e(), t);
            } catch (e) {
                A.logError("Error registering bidder adapter : " + e.message);
            }
        }, S.registerAnalyticsAdapter = function(e) {
            A.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
            try {
                T.registerAnalyticsAdapter(e);
            } catch (e) {
                A.logError("Error registering analytics adapter : " + e.message);
            }
        }, S.createBid = function(e) {
            return A.logInfo("Invoking pbjs.createBid", arguments), Object(b.a)(e);
        }, S.loadScript = function(e, t, n) {
            A.logInfo("Invoking pbjs.loadScript", arguments), Object(a.b)(e, t, n);
        }, S.enableAnalytics = function(e) {
            e && !A.isEmpty(e) ? (A.logInfo("Invoking pbjs.enableAnalytics for: ", e), T.enableAnalytics(e)) : A.logError("pbjs.enableAnalytics should be called with option {}");
        }, S.aliasBidder = function(e, t) {
            A.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? T.aliasBidAdapter(e, t) : A.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder");
        }, S.getAllWinningBids = function() {
            return v.a.getAllWinningBids();
        }, S.getAllPrebidWinningBids = function() {
            return v.a.getBidsReceived().filter(function(e) {
                return e.status === E.BID_STATUS.BID_TARGETING_SET;
            });
        }, S.getHighestCpmBids = function(e) {
            var t = Object(f.a)(v.a.getBidsReceived(), c.getLatestHighestCpmBid);
            return f.b.getWinningBids(e, t);
        }, S.markWinningBidAsUsed = function(t) {
            var e = [];
            t.adUnitCode && t.adId ? e = v.a.getBidsReceived().filter(function(e) {
                return e.adId === t.adId && e.adUnitCode === t.adUnitCode;
            }) : t.adUnitCode ? e = f.b.getWinningBids(t.adUnitCode) : t.adId ? e = v.a.getBidsReceived().filter(function(e) {
                return e.adId === t.adId;
            }) : A.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."), 
            0 < e.length && (e[0].status = E.BID_STATUS.RENDERED);
        }, S.getConfig = d.b.getConfig, S.setConfig = d.b.setConfig, S.setBidderConfig = d.b.setBidderConfig, 
        S.que.push(function() {
            return Object(i.a)();
        }), S.cmd.push = function(e) {
            if ("function" == typeof e) try {
                e.call();
            } catch (e) {
                A.logError("Error processing command :", e.message, e.stack);
            } else A.logError("Commands written into pbjs.cmd.push must be wrapped in a function");
        }, S.que.push = S.cmd.push, S.processQueue = function() {
            u.b.ready(), F(S.que), F(S.cmd);
        }, t.default = S;
    },
    85: function(e, t, n) {
        "use strict";
        var r = n(15), i = n(46)(5), o = "find", a = !0;
        o in [] && Array(1)[o](function() {
            a = !1;
        }), r(r.P + r.F * a, "Array", {
            find: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0);
            }
        }), n(40)(o);
    },
    86: function(e, t, n) {
        e.exports = !n(22) && !n(36)(function() {
            return 7 != Object.defineProperty(n(60)("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    },
    87: function(e, t, n) {
        var i = n(17);
        e.exports = function(e, t) {
            if (!i(e)) return e;
            var n, r;
            if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
            if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e))) return r;
            if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    88: function(e, t, n) {
        var r = n(89);
        e.exports = function(e, t) {
            return new (r(e))(t);
        };
    },
    89: function(e, t, n) {
        var r = n(17), i = n(90), o = n(14)("species");
        e.exports = function(e) {
            var t;
            return i(e) && ("function" != typeof (t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), 
            r(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t;
        };
    },
    9: function(e, t, n) {
        "use strict";
        function o(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
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
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }();
        }
        function i(e) {
            return e ? e.replace(/^\?/, "").split("&").reduce(function(e, t) {
                var n = o(t.split("="), 2), r = n[0], i = n[1];
                return /\[\]$/.test(r) ? (e[r = r.replace("[]", "")] = e[r] || [], e[r].push(i)) : e[r] = i || "", 
                e;
            }, {}) : {};
        }
        function r(e) {
            return Object.keys(e).map(function(t) {
                return Array.isArray(e[t]) ? e[t].map(function(e) {
                    return "".concat(t, "[]=").concat(e);
                }).join("&") : "".concat(t, "=").concat(e[t]);
            }).join("&");
        }
        t.d = i, t.b = r, t.c = function(e, t) {
            var n = document.createElement("a");
            t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
            var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
            return {
                href: n.href,
                protocol: (n.protocol || "").replace(/:$/, ""),
                hostname: n.hostname,
                port: +n.port,
                pathname: n.pathname.replace(/^(?!\/)/, "/"),
                search: r ? n.search : i(n.search || ""),
                hash: (n.hash || "").replace(/^#/, ""),
                host: n.host || window.location.host
            };
        }, t.a = function(e) {
            return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(r(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "");
        };
    },
    90: function(e, t, n) {
        var r = n(37);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e);
        };
    },
    91: function(e, t, n) {
        "use strict";
        var r = n(15), i = n(64)(!0);
        r(r.P, "Array", {
            includes: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0);
            }
        }), n(40)("includes");
    },
    92: function(e, t, n) {
        var r = n(48), i = Math.max, o = Math.min;
        e.exports = function(e, t) {
            return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t);
        };
    },
    93: function(e, t) {},
    94: function(e, t, n) {
        var u = n(48), s = n(38);
        e.exports = function(c) {
            return function(e, t) {
                var n, r, i = String(s(e)), o = u(t), a = i.length;
                return o < 0 || a <= o ? c ? "" : void 0 : (n = i.charCodeAt(o)) < 55296 || 56319 < n || o + 1 === a || (r = i.charCodeAt(o + 1)) < 56320 || 57343 < r ? c ? i.charAt(o) : n : c ? i.slice(o, o + 2) : r - 56320 + (n - 55296 << 10) + 65536;
            };
        };
    },
    95: function(e, t, n) {
        e.exports = n(21);
    },
    96: function(e, t, n) {
        "use strict";
        var r = n(67), i = n(45), o = n(53), a = {};
        n(21)(a, n(14)("iterator"), function() {
            return this;
        }), e.exports = function(e, t, n) {
            e.prototype = r(a, {
                next: i(1, n)
            }), o(e, t + " Iterator");
        };
    },
    97: function(e, t, n) {
        var a = n(20), c = n(28), u = n(98);
        e.exports = n(22) ? Object.defineProperties : function(e, t) {
            c(e);
            for (var n, r = u(t), i = r.length, o = 0; o < i; ) a.f(e, n = r[o++], t[n]);
            return e;
        };
    },
    98: function(e, t, n) {
        var r = n(99), i = n(68);
        e.exports = Object.keys || function(e) {
            return r(e, i);
        };
    },
    99: function(e, t, n) {
        var a = n(29), c = n(50), u = n(64)(!1), s = n(52)("IE_PROTO");
        e.exports = function(e, t) {
            var n, r = c(e), i = 0, o = [];
            for (n in r) n != s && a(r, n) && o.push(n);
            for (;t.length > i; ) a(r, n = t[i++]) && (~u(o, n) || o.push(n));
            return o;
        };
    }
});

pbjsChunk([ 285 ], {
    138: function(e, r, n) {
        e.exports = n(139);
    },
    139: function(e, r, n) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), n.d(r, "spec", function() {
            return d;
        });
        var t = n(1), v = n(3), l = n(2), h = n(10), f = n(0), _ = "adform", d = {
            code: _,
            supportedMediaTypes: [ l.b, l.d ],
            isBidRequestValid: function(e) {
                return !!e.params.mid;
            },
            buildRequests: function(e, r) {
                var n, t, d, s, i, o, p, a, u, c, g = v.b.getConfig("currency.adServerCurrency"), l = [], h = [ [ "adxDomain", "adx.adform.net" ], [ "fd", 1 ], [ "url", null ], [ "tid", null ] ], f = JSON.parse(JSON.stringify(e)), b = f[0] && f[0].bidder || _;
                for (n = 0, t = f.length; n < t; n++) {
                    for ("net" !== (i = f[n]).params.priceType && "net" !== i.params.pt || (u = "net"), 
                    d = 0, s = h.length; d < s; d++) (p = i[o = h[d][0]] || i.params[o]) && (i[o] = i.params[o] = null, 
                    h[d][1] = p);
                    (a = i.params).transactionId = i.transactionId, a.rcur = a.rcur || g, l.push(m(a));
                }
                for (l.unshift("//" + h[0][1] + "/adx/?rp=4"), u = u || "gross", l.push("pt=" + u), 
                l.push("stid=" + e[0].auctionId), r && r.gdprConsent && r.gdprConsent.gdprApplies && (c = {
                    gdpr: r.gdprConsent.gdprApplies,
                    gdpr_consent: r.gdprConsent.consentString
                }, l.push("gdpr=" + c.gdpr), l.push("gdpr_consent=" + c.gdpr_consent)), n = 1, t = h.length; n < t; n++) o = h[n][0], 
                (p = h[n][1]) && l.push(o + "=" + encodeURIComponent(p));
                return {
                    method: "GET",
                    url: l.join("&"),
                    bids: e,
                    netRevenue: u,
                    bidder: b,
                    gdpr: c
                };
                function m(e) {
                    var r, n = [];
                    for (r in e) e.hasOwnProperty(r) && e[r] && n.push(r, "=", e[r], "&");
                    return encodeURIComponent(btoa(n.join("").slice(0, -1)));
                }
            },
            interpretResponse: function(e, r) {
                for (var n, t, d, s, i = {
                    banner: 1,
                    vast_content: 1,
                    vast_url: 1
                }, o = [], p = r.bids, a = e.body, u = 0; u < a.length; u++) s = "banner" === (t = a[u]).response ? l.b : l.d, 
                d = p[u], i[t.response] && (g(t, f.getAdUnitSizes(d)) || s === l.d) && (n = {
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
                }, d.renderer || s !== l.d || "outstream" !== f.deepAccess(d, "mediaTypes.video.context") || (n.renderer = h.a.install({
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
                function g(e, r) {
                    for (var n = 0, t = r.length; n < t; n++) if (e.width == r[n][0] && e.height == r[n][1]) return 1;
                }
            }
        };
        Object(t.registerBidder)(d);
    }
}, [ 138 ]);

pbjsChunk([ 259 ], {
    207: function(e, r, a) {
        e.exports = a(208);
    },
    208: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), a.d(r, "spec", function() {
            return l;
        });
        var f = a(10), _ = a(0), k = a(3), v = a(1), g = a(2), c = a(25), t = a(12), I = a.n(t), n = a(11), x = a.n(n), y = a(33);
        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function b() {
            return (b = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var a = arguments[r];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                }
                return e;
            }).apply(this, arguments);
        }
        function A(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var r = 0, a = new Array(e.length); r < e.length; r++) a[r] = e[r];
                    return a;
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance");
            }();
        }
        var C = "appnexus", w = "//ib.adnxs.com/ut/v3/prebid", u = [ "id", "mimes", "minduration", "maxduration", "startdelay", "skippable", "playback_method", "frameworks" ], S = [ "age", "externalUid", "segments", "gender", "dnt", "language" ], T = [ "geo", "device_id" ], E = [ "enabled", "dongle", "member_id", "debug_timeout" ], p = {
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
        }, s = "<script", o = /\/\/cdn\.adnxs\.com\/v/, d = "trk.js", l = {
            code: C,
            aliases: [ "appnexusAst", "brealtime", "emxdigital", "pagescience", "defymedia", "gourmetads", "matomy", "featureforward", "oftmedia", "districtm", "adasta" ],
            supportedMediaTypes: [ g.b, g.d, g.c ],
            isBidRequestValid: function(e) {
                return !!(e.params.placementId || e.params.member && e.params.invCode);
            },
            buildRequests: function(e, r) {
                var t = e.map(O), a = I()(e, P), n = {};
                !0 === k.b.getConfig("coppa") && (n = {
                    coppa: !0
                }), a && Object.keys(a.params.user).filter(function(e) {
                    return x()(S, e);
                }).forEach(function(e) {
                    return n[e] = a.params.user[e];
                });
                var i, s = I()(e, U);
                s && s.params && s.params.app && (i = {}, Object.keys(s.params.app).filter(function(e) {
                    return x()(T, e);
                }).forEach(function(e) {
                    return i[e] = s.params.app[e];
                }));
                var o, d = I()(e, q);
                d && d.params && s.params.app && s.params.app.id && (o = {
                    appid: d.params.app.id
                });
                var c = {}, u = {}, p = _.getCookie("apn_prebid_debug") || null;
                if (p) try {
                    c = JSON.parse(p);
                } catch (e) {
                    _.logError("AppNexus Debug Auction Cookie Error:\n\n" + e);
                } else {
                    var l = I()(e, z);
                    l && l.debug && (c = l.debug);
                }
                c && c.enabled && Object.keys(c).filter(function(e) {
                    return x()(E, e);
                }).forEach(function(e) {
                    u[e] = c[e];
                });
                var m = I()(e, N), f = m ? parseInt(m.params.member, 10) : 0, v = e[0].schain, g = {
                    tags: A(t),
                    user: n,
                    sdk: {
                        source: "pbjs",
                        version: "2.44.2"
                    },
                    schain: v
                };
                if (0 < f && (g.member_id = f), s && (g.device = i), d && (g.app = o), k.b.getConfig("adpod.brandCategoryExclusion") && (g.brand_category_uniqueness = !0), 
                u.enabled && (g.debug = u, _.logInfo("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(u, null, 4))), 
                r && r.gdprConsent && (g.gdpr_consent = {
                    consent_string: r.gdprConsent.consentString,
                    consent_required: r.gdprConsent.gdprApplies
                }), r && r.uspConsent && (g.us_privacy = r.uspConsent), r && r.refererInfo) {
                    var y = {
                        rd_ref: encodeURIComponent(r.refererInfo.referer),
                        rd_top: r.refererInfo.reachedTop,
                        rd_ifs: r.refererInfo.numIframes,
                        rd_stk: r.refererInfo.stack.map(function(e) {
                            return encodeURIComponent(e);
                        }).join(",")
                    };
                    g.referrer_detection = y;
                }
                I()(e, M) && e.filter(M).forEach(function(r) {
                    var e = function(e, r) {
                        var a = r.mediaTypes.video, t = a.durationRangeSec, n = a.requireExactDuration, i = function(e) {
                            var r = e.adPodDurationSec, a = e.durationRangeSec, t = e.requireExactDuration, n = _.getMinValueFromArray(a), i = Math.floor(r / n);
                            return t ? Math.max(i, a.length) : i;
                        }(r.mediaTypes.video), s = _.getMaxValueFromArray(t), o = e.filter(function(e) {
                            return e.uuid === r.bidId;
                        }), d = _.fill.apply(_, A(o).concat([ i ]));
                        if (n) {
                            var c = Math.ceil(i / t.length), u = _.chunk(d, c);
                            t.forEach(function(r, e) {
                                u[e].map(function(e) {
                                    B(e, "minduration", r), B(e, "maxduration", r);
                                });
                            });
                        } else d.map(function(e) {
                            return B(e, "maxduration", s);
                        });
                        return d;
                    }(t, r), a = g.tags.filter(function(e) {
                        return e.uuid !== r.bidId;
                    });
                    g.tags = [].concat(A(a), A(e));
                });
                var b = _.deepAccess(e[0], "userId.criteortus.".concat(C, ".userid"));
                if (b) {
                    var h = [];
                    h.push({
                        provider: "criteo",
                        user_id: b
                    }), g.tpuids = h;
                }
                return function(e, a) {
                    var t = [];
                    if (15 < e.tags.length) {
                        var n = _.deepClone(e);
                        _.chunk(e.tags, 15).forEach(function(e) {
                            n.tags = e;
                            var r = JSON.stringify(n);
                            t.push({
                                method: "POST",
                                url: w,
                                data: r,
                                bidderRequest: a
                            });
                        });
                    } else {
                        var r = JSON.stringify(e);
                        t = {
                            method: "POST",
                            url: w,
                            data: r,
                            bidderRequest: a
                        };
                    }
                    return t;
                }(g, r);
            },
            interpretResponse: function(e, r) {
                var i = this, s = r.bidderRequest;
                e = e.body;
                var o = [];
                if (!e || e.error) {
                    var a = "in response for ".concat(s.bidderCode, " adapter");
                    return e && e.error && (a += ": ".concat(e.error)), _.logError(a), o;
                }
                if (e.tags && e.tags.forEach(function(e) {
                    var r, a, t = (r = e) && r.ads && r.ads.length && I()(r.ads, function(e) {
                        return e.rtb;
                    });
                    if (t && 0 !== t.cpm && x()(i.supportedMediaTypes, t.ad_type)) {
                        var n = function(r, e, a) {
                            var t = _.getBidRequest(r.uuid, [ a ]), n = {
                                requestId: r.uuid,
                                cpm: e.cpm,
                                creativeId: e.creative_id,
                                dealId: e.deal_id,
                                currency: "USD",
                                netRevenue: !0,
                                ttl: 300,
                                adUnitCode: t.adUnitCode,
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
                                switch (b(n, {
                                    width: e.rtb.video.player_width,
                                    height: e.rtb.video.player_height,
                                    vastImpUrl: e.notify_url,
                                    ttl: 3600
                                }), _.deepAccess(t, "mediaTypes.video.context")) {
                                  case g.a:
                                    var i = Object(v.getIabSubCategory)(t.bidder, e.brand_category_id);
                                    n.meta = b({}, n.meta, {
                                        iabSubCatId: i
                                    });
                                    var s = e.rtb.dealPriority;
                                    n.video = {
                                        context: g.a,
                                        durationSeconds: Math.floor(e.rtb.video.duration_ms / 1e3),
                                        dealTier: s
                                    }, n.vastUrl = e.rtb.video.asset_url;
                                    break;

                                  case y.b:
                                    if (n.adResponse = r, n.adResponse.ad = n.adResponse.ads[0], n.adResponse.ad.video = n.adResponse.ad.rtb.video, 
                                    n.vastXml = e.rtb.video.content, e.renderer_url) {
                                        var o = I()(a.bids, function(e) {
                                            return e.bidId === r.uuid;
                                        }), d = _.deepAccess(o, "renderer.options");
                                        n.renderer = function(e, r) {
                                            var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, t = f.a.install({
                                                id: r.renderer_id,
                                                url: r.renderer_url,
                                                config: a,
                                                loaded: !1,
                                                adUnitCode: e
                                            });
                                            try {
                                                t.setRender(D);
                                            } catch (e) {
                                                _.logWarn("Prebid Error calling setRender on renderer", e);
                                            }
                                            return t.setEventHandlers({
                                                impression: function() {
                                                    return _.logMessage("AppNexus outstream video impression event");
                                                },
                                                loaded: function() {
                                                    return _.logMessage("AppNexus outstream video loaded event");
                                                },
                                                ended: function() {
                                                    _.logMessage("AppNexus outstream renderer video event"), document.querySelector("#".concat(e)).style.display = "none";
                                                }
                                            }), t;
                                        }(n.adUnitCode, e, d);
                                    }
                                    break;

                                  case y.a:
                                    n.vastUrl = e.notify_url + "&redir=" + encodeURIComponent(e.rtb.video.asset_url);
                                }
                            } else if (e.rtb[g.c]) {
                                var c = e.rtb[g.c], u = e.viewability.config.replace("src=", "data-src="), p = c.javascript_trackers;
                                null == p ? p = u : _.isStr(p) ? p = [ p, u ] : p.push(u), n[g.c] = {
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
                                    javascriptTrackers: p
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
                                    var l = e.rtb.trackers[0].impression_urls[0], m = _.createTrackPixelHtml(l);
                                    n.ad += m;
                                } catch (e) {
                                    _.logError("Error appending tracking pixel", e);
                                }
                            }
                            return n;
                        }(e, t, s);
                        n.mediaType = (a = t.ad_type) === g.d ? g.d : a === g.c ? g.c : g.b, o.push(n);
                    }
                }), e.debug && e.debug.debug_info) {
                    var t = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info;
                    t = t.replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""), 
                    _.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"), 
                    _.logMessage(t);
                }
                return o;
            },
            getMappingFileInfo: function() {
                return {
                    url: "//acdn.adnxs.com/prebid/appnexus-mapping/mappings.json",
                    refreshInDays: 7
                };
            },
            getUserSyncs: function(e) {
                if (e.iframeEnabled) return [ {
                    type: "iframe",
                    url: "//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html"
                } ];
            },
            transformBidParams: function(a, e) {
                return a = _.convertTypes({
                    member: "string",
                    invCode: "string",
                    placementId: "number",
                    keywords: _.transformBidderParamKeywords
                }, a), e && (a.use_pmt_rule = "boolean" == typeof a.usePaymentRule && a.usePaymentRule, 
                a.usePaymentRule && delete a.usePaymentRule, m(a.keywords) && a.keywords.forEach(h), 
                Object.keys(a).forEach(function(e) {
                    var r = _.convertCamelToUnderscore(e);
                    r !== e && (a[r] = a[e], delete a[e]);
                })), a;
            },
            onBidWon: function(e) {
                e.native && function(e) {
                    var r = function(e) {
                        var r;
                        if (_.isStr(e) && R(e)) r = e; else if (_.isArray(e)) for (var a = 0; a < e.length; a++) {
                            var t = e[a];
                            R(t) && (r = t);
                        }
                        return r;
                    }(e.native.javascriptTrackers);
                    if (r) for (var a = "pbjs_adid=" + e.adId + ";pbjs_auc=" + e.adUnitCode, t = function(e) {
                        var r = e.indexOf('src="') + 5, a = e.indexOf('"', r);
                        return e.substring(r, a);
                    }(r), n = t.replace("dom_id=%native_dom_id%", a), i = document.getElementsByTagName("iframe"), s = !1, o = 0; o < i.length && !s; o++) {
                        var d = i[o];
                        try {
                            var c = d.contentDocument || d.contentWindow.document;
                            if (c) for (var u = c.getElementsByTagName("script"), p = 0; p < u.length && !s; p++) {
                                var l = u[p];
                                l.getAttribute("data-src") == t && (l.setAttribute("src", n), l.setAttribute("data-src", ""), 
                                l.removeAttribute && l.removeAttribute("data-src"), s = !0);
                            }
                        } catch (e) {
                            if (!(e instanceof DOMException && "SecurityError" === e.name)) throw e;
                        }
                    }
                }(e);
            }
        };
        function m(e) {
            return _.isArray(e) && 0 < e.length;
        }
        function h(e) {
            m(e.value) && "" === e.value[0] && delete e.value;
        }
        function R(e) {
            var r = e.match(o), a = null != r && 1 <= r.length, t = e.match(d), n = null != t && 1 <= t.length;
            return e.startsWith(s) && n && a;
        }
        function O(r) {
            var n, i, a = {};
            if (a.sizes = j(r.sizes), a.primary_size = a.sizes[0], a.ad_types = [], a.uuid = r.bidId, 
            r.params.placementId ? a.id = parseInt(r.params.placementId, 10) : a.code = r.params.invCode, 
            a.allow_smaller_sizes = r.params.allowSmallerSizes || !1, a.use_pmt_rule = r.params.usePaymentRule || !1, 
            a.prebid = !0, a.disable_psa = !0, r.params.reserve && (a.reserve = r.params.reserve), 
            r.params.position && (a.position = {
                above: 1,
                below: 2
            }[r.params.position] || 0), r.params.trafficSourceCode && (a.traffic_source_code = r.params.trafficSourceCode), 
            r.params.privateSizes && (a.private_sizes = j(r.params.privateSizes)), r.params.supplyType && (a.supply_type = r.params.supplyType), 
            r.params.pubClick && (a.pubclick = r.params.pubClick), r.params.extInvCode && (a.ext_inv_code = r.params.extInvCode), 
            r.params.externalImpId && (a.external_imp_id = r.params.externalImpId), !_.isEmpty(r.params.keywords)) {
                var e = _.transformBidderParamKeywords(r.params.keywords);
                0 < e.length && e.forEach(h), a.keywords = e;
            }
            if ((r.mediaType === g.c || _.deepAccess(r, "mediaTypes.".concat(g.c))) && (a.ad_types.push(g.c), 
            0 === a.sizes.length && (a.sizes = j([ 1, 1 ])), r.nativeParams)) {
                var t = (n = r.nativeParams, i = {}, Object.keys(n).forEach(function(e) {
                    var r = p[e] && p[e].serverName || p[e] || e, a = p[e] && p[e].requiredParams;
                    if (i[r] = b({}, a, n[e]), (r === p.image.serverName || r === p.icon.serverName) && i[r].sizes) {
                        var t = i[r].sizes;
                        (_.isArrayOfNums(t) || _.isArray(t) && 0 < t.length && t.every(function(e) {
                            return _.isArrayOfNums(e);
                        })) && (i[r].sizes = j(i[r].sizes));
                    }
                    r === p.privacyLink && (i.privacy_supported = !0);
                }), i);
                a[g.c] = {
                    layouts: [ t ]
                };
            }
            var s = _.deepAccess(r, "mediaTypes.".concat(g.d)), o = _.deepAccess(r, "mediaTypes.video.context");
            r.mediaType !== g.d && !s || a.ad_types.push(g.d), (r.mediaType === g.d || s && "outstream" !== o) && (a.require_asset_url = !0), 
            r.params.video && (a.video = {}, Object.keys(r.params.video).filter(function(e) {
                return x()(u, e);
            }).forEach(function(e) {
                return a.video[e] = r.params.video[e];
            })), r.renderer && (a.video = b({}, a.video, {
                custom_renderer_present: !0
            }));
            var d = I()(c.a.getAdUnits(), function(e) {
                return r.transactionId === e.transactionId;
            });
            return d && d.mediaTypes && d.mediaTypes.banner && a.ad_types.push(g.b), 0 === a.ad_types.length && delete a.ad_types, 
            a;
        }
        function j(e) {
            var r = [], a = {};
            if (_.isArray(e) && 2 === e.length && !_.isArray(e[0])) a.width = parseInt(e[0], 10), 
            a.height = parseInt(e[1], 10), r.push(a); else if ("object" === i(e)) for (var t = 0; t < e.length; t++) {
                var n = e[t];
                (a = {}).width = parseInt(n[0], 10), a.height = parseInt(n[1], 10), r.push(a);
            }
            return r;
        }
        function P(e) {
            return !!e.params.user;
        }
        function N(e) {
            return !!parseInt(e.params.member, 10);
        }
        function U(e) {
            if (e.params) return !!e.params.app;
        }
        function q(e) {
            return e.params && e.params.app ? !!e.params.app.id : !!e.params.app;
        }
        function z(e) {
            return !!e.debug;
        }
        function M(e) {
            return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === g.a;
        }
        function B(e, r, a) {
            _.isEmpty(e.video) && (e.video = {}), e.video[r] = a;
        }
        function D(e) {
            e.renderer.push(function() {
                window.ANOutstreamVideo.renderAd({
                    tagId: e.adResponse.tag_id,
                    sizes: [ e.getSize().split("x") ],
                    targetId: e.adUnitCode,
                    uuid: e.adResponse.uuid,
                    adResponse: e.adResponse,
                    rendererOptions: e.renderer.getConfig()
                }, function(e, r, a) {
                    e.renderer.handleVideoEvent({
                        id: r,
                        eventName: a
                    });
                }.bind(null, e));
            });
        }
        Object(v.registerBidder)(l);
    }
}, [ 207 ]);

pbjsChunk([ 231 ], {
    263: function(n, t, e) {
        n.exports = e(264);
    },
    264: function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), e.d(t, "userCMP", function() {
            return d;
        }), e.d(t, "consentTimeout", function() {
            return f;
        }), e.d(t, "allowAuction", function() {
            return g;
        }), e.d(t, "staticConsentData", function() {
            return p;
        }), t.requestBidsHook = D, t.resetConsentData = function() {
            m = void 0, d = void 0, a.gdprDataHandler.setConsentData(null);
        }, t.setConsentConfig = M;
        var l = e(0), o = e(3), a = e(7), s = e(11), i = e.n(s), c = e(265), u = e.n(c);
        function r(n) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                return typeof n;
            } : function(n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
            })(n);
        }
        var d, f, g, p, m, C = "iab", b = 1e4, v = !0, w = !1, y = {
            iab: function(n, t, i) {
                var e, o = function() {
                    var t = {};
                    function e() {
                        t.getConsentData && t.getVendorConsents && n(t, i);
                    }
                    return {
                        consentDataCallback: function(n) {
                            t.getConsentData = n, e();
                        },
                        vendorConsentsCallback: function(n) {
                            t.getVendorConsents = n, e();
                        }
                    };
                }(), c = {};
                try {
                    e = window.__cmp || l.getWindowTop().__cmp;
                } catch (n) {}
                if (l.isFn(e)) e("getConsentData", null, o.consentDataCallback), e("getVendorConsents", null, o.vendorConsentsCallback); else if (window.$sf && window.$sf.ext && "function" == typeof window.$sf.ext.cmp) r("getConsentData", o.consentDataCallback), 
                r("getVendorConsents", o.vendorConsentsCallback); else {
                    for (var a, s = window; !a; ) {
                        try {
                            s.frames.__cmpLocator && (a = s);
                        } catch (n) {}
                        if (s === window.top) break;
                        s = s.parent;
                    }
                    if (!a) return t("CMP not found.", i);
                    d("getConsentData", a, o.consentDataCallback), d("getVendorConsents", a, o.vendorConsentsCallback);
                }
                function r(o, a) {
                    var n = i.adUnits, t = 1, e = 1;
                    if (Array.isArray(n) && 0 < n.length) {
                        var s = l.getAdUnitSizes(n[0]);
                        t = s[0][0], e = s[0][1];
                    }
                    window.$sf.ext.register(t, e, function(n, t) {
                        if ("cmpReturn" === n) {
                            var e = "getConsentData" === o ? t.vendorConsentData : t.vendorConsents;
                            a(e);
                        }
                    }), window.$sf.ext.cmp(o);
                }
                function d(n, s, t) {
                    function e(n) {
                        var t = "string" == typeof n.data && u()(n.data, "cmpReturn") ? JSON.parse(n.data) : n.data;
                        if (t.__cmpReturn && t.__cmpReturn.callId) {
                            var e = t.__cmpReturn;
                            void 0 !== c[e.callId] && (c[e.callId](e.returnValue, e.success), delete c[e.callId]);
                        }
                    }
                    window.__cmp = function(n, t, e) {
                        var o = Math.random() + "", a = {
                            __cmpCall: {
                                command: n,
                                parameter: t,
                                callId: o
                            }
                        };
                        c[o] = e, s.postMessage(a, "*");
                    }, window.addEventListener("message", e, !1), window.__cmp(n, null, function(n) {
                        window.removeEventListener("message", e, !1), t(n);
                    });
                }
            },
            static: function(n, t, e) {
                n(p, e);
            }
        };
        function D(n, t) {
            var e = {
                context: this,
                args: [ t ],
                nextFn: n,
                adUnits: t.adUnits || pbjs.adUnits,
                bidsBackHandler: t.bidsBackHandler,
                haveExited: !1,
                timer: null
            };
            return m ? x(null, e) : i()(Object.keys(y), d) ? (y[d].call(this, k, h, e), void (e.haveExited || (0 === f ? k(void 0, e) : e.timer = setTimeout(function(n) {
                h("CMP workflow exceeded timeout threshold.", n);
            }.bind(null, e), f)))) : (l.logWarn("CMP framework (".concat(d, ") is not a supported framework.  Aborting consentManagement module and resuming auction.")), 
            e.nextFn.apply(e.context, e.args));
        }
        function k(n, t) {
            var e = n && n.getConsentData && n.getConsentData.gdprApplies;
            "boolean" == typeof e && (!0 !== e || l.isStr(n.getConsentData.consentData) && l.isPlainObject(n.getVendorConsents) && 1 < Object.keys(n.getVendorConsents).length) ? (clearTimeout(t.timer), 
            _(n), x(null, t)) : h("CMP returned unexpected value during lookup process.", t, n);
        }
        function h(n, t, e) {
            clearTimeout(t.timer), g && _(void 0), x(n, t, e);
        }
        function _(n) {
            m = {
                consentString: n ? n.getConsentData.consentData : void 0,
                vendorData: n ? n.getVendorConsents : void 0,
                gdprApplies: n ? n.getConsentData.gdprApplies : void 0
            }, a.gdprDataHandler.setConsentData(m);
        }
        function x(n, t, e) {
            if (!1 === t.haveExited) {
                t.haveExited = !0;
                var o = t.context, a = t.args, s = t.nextFn;
                n ? g ? (l.logWarn(n + " Resuming auction without consent data as per consentManagement config.", e), 
                s.apply(o, a)) : (l.logError(n + " Canceling auction as per consentManagement config.", e), 
                "function" == typeof t.bidsBackHandler ? t.bidsBackHandler() : l.logError("Error executing bidsBackHandler")) : s.apply(o, a);
            }
        }
        function M(n) {
            (n = n.gdpr || n.usp ? n.gdpr : n) && "object" === r(n) ? (l.isStr(n.cmpApi) ? d = n.cmpApi : (d = C, 
            l.logInfo("consentManagement config did not specify cmp.  Using system default setting (".concat(C, ")."))), 
            l.isNumber(n.timeout) ? f = n.timeout : (f = b, l.logInfo("consentManagement config did not specify timeout.  Using system default setting (".concat(b, ")."))), 
            "boolean" == typeof n.allowAuctionWithoutConsent ? g = n.allowAuctionWithoutConsent : (g = v, 
            l.logInfo("consentManagement config did not specify allowAuctionWithoutConsent.  Using system default setting (".concat(v, ")."))), 
            l.logInfo("consentManagement module has been activated..."), "static" === d && (l.isPlainObject(n.consentData) ? (p = n.consentData, 
            f = 0) : l.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), 
            w || pbjs.requestBids.before(D, 50), w = !0) : l.logWarn("consentManagement config not defined, exiting consent manager");
        }
        o.b.getConfig("consentManagement", function(n) {
            return M(n.consentManagement);
        });
    }
}, [ 263 ]);

pbjsChunk([ 0 ], {
    282: function(t, e, i) {
        t.exports = i(283);
    },
    283: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        }), __webpack_require__.d(__webpack_exports__, "ADAPTER_VERSION", function() {
            return ADAPTER_VERSION;
        }), __webpack_require__.d(__webpack_exports__, "PROFILE_ID_PUBLISHERTAG", function() {
            return PROFILE_ID_PUBLISHERTAG;
        }), __webpack_require__.d(__webpack_exports__, "FAST_BID_PUBKEY", function() {
            return FAST_BID_PUBKEY;
        }), __webpack_require__.d(__webpack_exports__, "spec", function() {
            return spec;
        }), __webpack_exports__.tryGetCriteoFastBid = tryGetCriteoFastBid;
        var __WEBPACK_IMPORTED_MODULE_0__src_adloader__ = __webpack_require__(42), __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory__ = __webpack_require__(1), __WEBPACK_IMPORTED_MODULE_2__src_config__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__ = __webpack_require__(2), __WEBPACK_IMPORTED_MODULE_4__src_url__ = __webpack_require__(9), __WEBPACK_IMPORTED_MODULE_5__src_utils__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_find__ = __webpack_require__(12), __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_find__), __WEBPACK_IMPORTED_MODULE_7_jsencrypt_bin_jsencrypt__ = __webpack_require__(55), __WEBPACK_IMPORTED_MODULE_7_jsencrypt_bin_jsencrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jsencrypt_bin_jsencrypt__), __WEBPACK_IMPORTED_MODULE_8_crypto_js_sha256__ = __webpack_require__(56), __WEBPACK_IMPORTED_MODULE_8_crypto_js_sha256___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_crypto_js_sha256__);
        function _extends() {
            return (_extends = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
                }
                return t;
            }).apply(this, arguments);
        }
        var ADAPTER_VERSION = 23, BIDDER_CODE = "criteo", CDB_ENDPOINT = "https://bidder.criteo.com/cdb", CRITEO_VENDOR_ID = 91, PROFILE_ID_INLINE = 207, PROFILE_ID_PUBLISHERTAG = 185, PUBLISHER_TAG_URL = "//static.criteo.net/js/ld/publishertag.prebid.js", FAST_BID_PUBKEY = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDO1BjAITkFTtP0IMzmF7qsqhpu\ny1dGaTPHnjMU9mRZsrnfR3C0sEN5pYEzEcFRPnkJjJuhH8Rnh5+CE+LcKg0Z8ZZ7\nOmOSj0/qnYTAYCu0cR5LiyWG79KlIgUyMbp92ulGg24gAyGrVn4+v/4c53WlOEUp\n4YWvb82G0CD5NcDNpQIDAQAB\n-----END PUBLIC KEY-----", spec = {
            code: BIDDER_CODE,
            supportedMediaTypes: [ __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__.b, __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__.d ],
            isBidRequestValid: function(t) {
                return !(!t || !t.params || !t.params.zoneId && !t.params.networkId) && !(hasVideoMediaType(t) && !hasValidVideoMediaType(t));
            },
            buildRequests: function(t, e) {
                var i, r;
                if (_extends(e, {
                    ceh: __WEBPACK_IMPORTED_MODULE_2__src_config__.b.getConfig("criteo.ceh")
                }), publisherTagAvailable() || (window.Criteo = window.Criteo || {}, window.Criteo.usePrebidEvents = !1, 
                tryGetCriteoFastBid(), setTimeout(function() {
                    Object(__WEBPACK_IMPORTED_MODULE_0__src_adloader__.a)(PUBLISHER_TAG_URL, BIDDER_CODE);
                }, e.timeout)), publisherTagAvailable()) {
                    var n = new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG, ADAPTER_VERSION, t, e, "2.44.2");
                    i = n.buildCdbUrl(), r = n.buildCdbRequest();
                } else {
                    var s = buildContext(t, e);
                    i = buildCdbUrl(s), r = buildCdbRequest(s, t, e);
                }
                if (r) return {
                    method: "POST",
                    url: i,
                    data: r,
                    bidRequests: t
                };
            },
            interpretResponse: function(t, n) {
                var e = t.body || t;
                if (publisherTagAvailable()) {
                    var i = Criteo.PubTag.Adapters.Prebid.GetAdapter(n);
                    if (i) return i.interpretResponse(e, n);
                }
                var s = [];
                return e && e.slots && __WEBPACK_IMPORTED_MODULE_5__src_utils__.isArray(e.slots) && e.slots.forEach(function(e) {
                    var t = __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_find___default()(n.bidRequests, function(t) {
                        return t.adUnitCode === e.impid && (!t.params.zoneId || parseInt(t.params.zoneId) === e.zoneid);
                    }), i = t.bidId, r = {
                        requestId: i,
                        adId: e.bidId || __WEBPACK_IMPORTED_MODULE_5__src_utils__.getUniqueIdentifierStr(),
                        cpm: e.cpm,
                        currency: e.currency,
                        netRevenue: !0,
                        ttl: e.ttl || 60,
                        creativeId: i,
                        width: e.width,
                        height: e.height,
                        dealId: e.dealCode
                    };
                    e.native ? r.ad = createNativeAd(i, e.native, t.params.nativeCallback) : e.video ? (r.vastUrl = e.displayurl, 
                    r.mediaType = __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__.d) : r.ad = e.creative, 
                    s.push(r);
                }), s;
            },
            onTimeout: function(t) {
                publisherTagAvailable() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidTimeout();
            },
            onBidWon: function(t) {
                publisherTagAvailable() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidWon(t);
            },
            onSetTargeting: function(t) {
                publisherTagAvailable() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleSetTargeting(t);
            }
        };
        function publisherTagAvailable() {
            return "undefined" != typeof Criteo && Criteo.PubTag && Criteo.PubTag.Adapters && Criteo.PubTag.Adapters.Prebid;
        }
        function buildContext(t, e) {
            var i = "";
            e && e.refererInfo && (i = e.refererInfo.referer);
            var r = Object(__WEBPACK_IMPORTED_MODULE_4__src_url__.c)(i).search, n = {
                url: i,
                debug: "1" === r.pbt_debug,
                noLog: "1" === r.pbt_nolog,
                amp: !1
            };
            return t.forEach(function(t) {
                "amp" === t.params.integrationMode && (n.amp = !0);
            }), n;
        }
        function buildCdbUrl(t) {
            var e = CDB_ENDPOINT;
            return e += "?profileId=" + PROFILE_ID_INLINE, e += "&av=" + String(ADAPTER_VERSION), 
            e += "&wv=" + encodeURIComponent("2.44.2"), e += "&cb=" + String(Math.floor(99999999999 * Math.random())), 
            t.amp && (e += "&im=1"), t.debug && (e += "&debug=1"), t.noLog && (e += "&nolog=1"), 
            e;
        }
        function buildCdbRequest(t, e, i) {
            var r, n = {
                publisher: {
                    url: t.url
                },
                slots: e.map(function(t) {
                    r = t.params.networkId || r;
                    var e = {
                        impid: t.adUnitCode,
                        transactionid: t.transactionId,
                        auctionId: t.auctionId,
                        sizes: getBannerSizes(t)
                    };
                    if (t.params.zoneId && (e.zoneid = t.params.zoneId), t.params.publisherSubId && (e.publishersubid = t.params.publisherSubId), 
                    t.params.nativeCallback && (e.native = !0), hasVideoMediaType(t)) {
                        var i = {
                            playersizes: getVideoSizes(t),
                            mimes: t.mediaTypes.video.mimes,
                            protocols: t.mediaTypes.video.protocols,
                            maxduration: t.mediaTypes.video.maxduration,
                            api: t.mediaTypes.video.api
                        };
                        i.skip = t.params.video.skip, i.placement = t.params.video.placement, i.minduration = t.params.video.minduration, 
                        i.playbackmethod = t.params.video.playbackmethod, i.startdelay = t.params.video.startdelay, 
                        e.video = i;
                    }
                    return e;
                })
            };
            return r && (n.publisher.networkid = r), n.user = {}, i && i.ceh && (n.user.ceh = i.ceh), 
            i && i.gdprConsent && (n.gdprConsent = {}, void 0 !== i.gdprConsent.gdprApplies && (n.gdprConsent.gdprApplies = !!i.gdprConsent.gdprApplies), 
            i.gdprConsent.vendorData && i.gdprConsent.vendorData.vendorConsents && void 0 !== i.gdprConsent.vendorData.vendorConsents[CRITEO_VENDOR_ID.toString(10)] && (n.gdprConsent.consentGiven = !!i.gdprConsent.vendorData.vendorConsents[CRITEO_VENDOR_ID.toString(10)]), 
            void 0 !== i.gdprConsent.consentString && (n.gdprConsent.consentData = i.gdprConsent.consentString)), 
            n;
        }
        function getVideoSizes(t) {
            return parseSizes(__WEBPACK_IMPORTED_MODULE_5__src_utils__.deepAccess(t, "mediaTypes.video.playerSize"));
        }
        function getBannerSizes(t) {
            return parseSizes(__WEBPACK_IMPORTED_MODULE_5__src_utils__.deepAccess(t, "mediaTypes.banner.sizes") || t.sizes);
        }
        function parseSize(t) {
            return t[0] + "x" + t[1];
        }
        function parseSizes(t) {
            return Array.isArray(t[0]) ? t.map(function(t) {
                return parseSize(t);
            }) : [ parseSize(t) ];
        }
        function hasVideoMediaType(t) {
            return void 0 !== __WEBPACK_IMPORTED_MODULE_5__src_utils__.deepAccess(t, "params.video") && void 0 !== __WEBPACK_IMPORTED_MODULE_5__src_utils__.deepAccess(t, "mediaTypes.video");
        }
        function hasValidVideoMediaType(e) {
            var i = !0;
            [ "mimes", "playerSize", "maxduration", "protocols", "api" ].forEach(function(t) {
                void 0 === __WEBPACK_IMPORTED_MODULE_5__src_utils__.deepAccess(e, "mediaTypes.video." + t) && (i = !1, 
                __WEBPACK_IMPORTED_MODULE_5__src_utils__.logError("Criteo Bid Adapter: mediaTypes.video." + t + " is required"));
            });
            if ([ "skip", "placement", "playbackmethod" ].forEach(function(t) {
                void 0 === __WEBPACK_IMPORTED_MODULE_5__src_utils__.deepAccess(e, "params.video." + t) && (i = !1, 
                __WEBPACK_IMPORTED_MODULE_5__src_utils__.logError("Criteo Bid Adapter: params.video." + t + " is required"));
            }), i) {
                if ("instream" == e.mediaTypes.video.context && 1 === e.params.video.placement) return 1;
                if ("outstream" == e.mediaTypes.video.context && 1 !== e.params.video.placement) return 1;
            }
        }
        function createNativeAd(t, e, i) {
            return window.criteo_prebid_native_slots = window.criteo_prebid_native_slots || {}, 
            window.criteo_prebid_native_slots[t] = {
                callback: i,
                payload: e
            }, '<script type="text/javascript">\n    var win = window;\n    for (var i = 0; i < 10; ++i) {\n      win = win.parent;\n      if (win.criteo_prebid_native_slots) {\n        var responseSlot = win.criteo_prebid_native_slots["'.concat(t, '"];\n        responseSlot.callback(responseSlot.payload);\n        break;\n      }\n    }\n  <\/script>');
        }
        function tryGetCriteoFastBid() {
            try {
                var fastBidStorageKey = "criteo_fast_bid", hashPrefix = "// Hash: ", fastBidFromStorage = localStorage.getItem(fastBidStorageKey);
                if (null !== fastBidFromStorage) {
                    var firstLineEndPosition = fastBidFromStorage.indexOf("\n"), firstLine = fastBidFromStorage.substr(0, firstLineEndPosition).trim();
                    if (firstLine.substr(0, hashPrefix.length) !== hashPrefix) __WEBPACK_IMPORTED_MODULE_5__src_utils__.logWarn("No hash found in FastBid"), 
                    localStorage.removeItem(fastBidStorageKey); else {
                        var publisherTagHash = firstLine.substr(hashPrefix.length), publisherTag = fastBidFromStorage.substr(firstLineEndPosition + 1), jsEncrypt = new __WEBPACK_IMPORTED_MODULE_7_jsencrypt_bin_jsencrypt___default.a();
                        jsEncrypt.setPublicKey(FAST_BID_PUBKEY), jsEncrypt.verify(publisherTag, publisherTagHash, __WEBPACK_IMPORTED_MODULE_8_crypto_js_sha256___default.a) ? (__WEBPACK_IMPORTED_MODULE_5__src_utils__.logInfo("Using Criteo FastBid"), 
                        eval(publisherTag)) : (__WEBPACK_IMPORTED_MODULE_5__src_utils__.logWarn("Invalid Criteo FastBid found"), 
                        localStorage.removeItem(fastBidStorageKey));
                    }
                }
            } catch (t) {}
        }
        Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory__.registerBidder)(spec);
    },
    55: function(t, e, i) {
        (function(t) {
            "use strict";
            var e = "0123456789abcdefghijklmnopqrstuvwxyz";
            function h(t) {
                return e.charAt(t);
            }
            function i(t, e) {
                return t & e;
            }
            function u(t, e) {
                return t | e;
            }
            function r(t, e) {
                return t ^ e;
            }
            function n(t, e) {
                return t & ~e;
            }
            function s(t) {
                if (0 == t) return -1;
                var e = 0;
                return 0 == (65535 & t) && (t >>= 16, e += 16), 0 == (255 & t) && (t >>= 8, e += 8), 
                0 == (15 & t) && (t >>= 4, e += 4), 0 == (3 & t) && (t >>= 2, e += 2), 0 == (1 & t) && ++e, 
                e;
            }
            function o(t) {
                for (var e = 0; 0 != t; ) t &= t - 1, ++e;
                return e;
            }
            var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            function c(t) {
                var e, i, r = "";
                for (e = 0; e + 3 <= t.length; e += 3) i = parseInt(t.substring(e, e + 3), 16), 
                r += a.charAt(i >> 6) + a.charAt(63 & i);
                for (e + 1 == t.length ? (i = parseInt(t.substring(e, e + 1), 16), r += a.charAt(i << 2)) : e + 2 == t.length && (i = parseInt(t.substring(e, e + 2), 16), 
                r += a.charAt(i >> 2) + a.charAt((3 & i) << 4)); 0 < (3 & r.length); ) r += "=";
                return r;
            }
            function f(t) {
                var e, i = "", r = 0, n = 0;
                for (e = 0; e < t.length && "=" != t.charAt(e); ++e) {
                    var s = a.indexOf(t.charAt(e));
                    s < 0 || (r = 0 == r ? (i += h(s >> 2), n = 3 & s, 1) : 1 == r ? (i += h(n << 2 | s >> 4), 
                    n = 15 & s, 2) : 2 == r ? (i += h(n), i += h(s >> 2), n = 3 & s, 3) : (i += h(n << 2 | s >> 4), 
                    i += h(15 & s), 0));
                }
                return 1 == r && (i += h(n << 2)), i;
            }
            var l, p = function(t, e) {
                return (p = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(t, e) {
                    t.__proto__ = e;
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                })(t, e);
            };
            var d, g = function(t) {
                var e;
                if (void 0 === l) {
                    var i = "0123456789ABCDEF", r = " \f\n\r\t \u2028\u2029";
                    for (l = {}, e = 0; e < 16; ++e) l[i.charAt(e)] = e;
                    for (i = i.toLowerCase(), e = 10; e < 16; ++e) l[i.charAt(e)] = e;
                    for (e = 0; e < r.length; ++e) l[r.charAt(e)] = -1;
                }
                var n = [], s = 0, o = 0;
                for (e = 0; e < t.length; ++e) {
                    var a = t.charAt(e);
                    if ("=" == a) break;
                    if (-1 != (a = l[a])) {
                        if (void 0 === a) throw new Error("Illegal character at offset " + e);
                        s |= a, 2 <= ++o ? (n[n.length] = s, o = s = 0) : s <<= 4;
                    }
                }
                if (o) throw new Error("Hex encoding incomplete: 4 bits missing");
                return n;
            }, _ = {
                decode: function(t) {
                    var e;
                    if (void 0 === d) {
                        var i = "= \f\n\r\t \u2028\u2029";
                        for (d = Object.create(null), e = 0; e < 64; ++e) d["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)] = e;
                        for (e = 0; e < i.length; ++e) d[i.charAt(e)] = -1;
                    }
                    var r = [], n = 0, s = 0;
                    for (e = 0; e < t.length; ++e) {
                        var o = t.charAt(e);
                        if ("=" == o) break;
                        if (-1 != (o = d[o])) {
                            if (void 0 === o) throw new Error("Illegal character at offset " + e);
                            n |= o, 4 <= ++s ? (r[r.length] = n >> 16, r[r.length] = n >> 8 & 255, r[r.length] = 255 & n, 
                            s = n = 0) : n <<= 6;
                        }
                    }
                    switch (s) {
                      case 1:
                        throw new Error("Base64 encoding incomplete: at least 2 bits missing");

                      case 2:
                        r[r.length] = n >> 10;
                        break;

                      case 3:
                        r[r.length] = n >> 16, r[r.length] = n >> 8 & 255;
                    }
                    return r;
                },
                re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
                unarmor: function(t) {
                    var e = _.re.exec(t);
                    if (e) if (e[1]) t = e[1]; else {
                        if (!e[2]) throw new Error("RegExp out of sync");
                        t = e[2];
                    }
                    return _.decode(t);
                }
            }, v = 1e13, m = (y.prototype.mulAdd = function(t, e) {
                var i, r, n = this.buf, s = n.length;
                for (i = 0; i < s; ++i) (r = n[i] * t + e) < v ? e = 0 : r -= (e = 0 | r / v) * v, 
                n[i] = r;
                0 < e && (n[i] = e);
            }, y.prototype.sub = function(t) {
                var e, i, r = this.buf, n = r.length;
                for (e = 0; e < n; ++e) t = (i = r[e] - t) < 0 ? (i += v, 1) : 0, r[e] = i;
                for (;0 === r[r.length - 1]; ) r.pop();
            }, y.prototype.toString = function(t) {
                if (10 != (t || 10)) throw new Error("only base 10 is supported");
                for (var e = this.buf, i = e[e.length - 1].toString(), r = e.length - 2; 0 <= r; --r) i += (v + e[r]).toString().substring(1);
                return i;
            }, y.prototype.valueOf = function() {
                for (var t = this.buf, e = 0, i = t.length - 1; 0 <= i; --i) e = e * v + t[i];
                return e;
            }, y.prototype.simplify = function() {
                var t = this.buf;
                return 1 == t.length ? t[0] : this;
            }, y);
            function y(t) {
                this.buf = [ +t || 0 ];
            }
            var b = "…", E = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/, T = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
            function S(t, e) {
                return t.length > e && (t = t.substring(0, e) + b), t;
            }
            var D = (w.prototype.get = function(t) {
                if (void 0 === t && (t = this.pos++), t >= this.enc.length) throw new Error("Requesting byte offset " + t + " on a stream of length " + this.enc.length);
                return "string" == typeof this.enc ? this.enc.charCodeAt(t) : this.enc[t];
            }, w.prototype.hexByte = function(t) {
                return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t);
            }, w.prototype.hexDump = function(t, e, i) {
                for (var r = "", n = t; n < e; ++n) if (r += this.hexByte(this.get(n)), !0 !== i) switch (15 & n) {
                  case 7:
                    r += "  ";
                    break;

                  case 15:
                    r += "\n";
                    break;

                  default:
                    r += " ";
                }
                return r;
            }, w.prototype.isASCII = function(t, e) {
                for (var i = t; i < e; ++i) {
                    var r = this.get(i);
                    if (r < 32 || 176 < r) return !1;
                }
                return !0;
            }, w.prototype.parseStringISO = function(t, e) {
                for (var i = "", r = t; r < e; ++r) i += String.fromCharCode(this.get(r));
                return i;
            }, w.prototype.parseStringUTF = function(t, e) {
                for (var i = "", r = t; r < e; ) {
                    var n = this.get(r++);
                    i += n < 128 ? String.fromCharCode(n) : 191 < n && n < 224 ? String.fromCharCode((31 & n) << 6 | 63 & this.get(r++)) : String.fromCharCode((15 & n) << 12 | (63 & this.get(r++)) << 6 | 63 & this.get(r++));
                }
                return i;
            }, w.prototype.parseStringBMP = function(t, e) {
                for (var i, r, n = "", s = t; s < e; ) i = this.get(s++), r = this.get(s++), n += String.fromCharCode(i << 8 | r);
                return n;
            }, w.prototype.parseTime = function(t, e, i) {
                var r = this.parseStringISO(t, e), n = (i ? E : T).exec(r);
                return n ? (i && (n[1] = +n[1], n[1] += +n[1] < 70 ? 2e3 : 1900), r = n[1] + "-" + n[2] + "-" + n[3] + " " + n[4], 
                n[5] && (r += ":" + n[5], n[6] && (r += ":" + n[6], n[7] && (r += "." + n[7]))), 
                n[8] && (r += " UTC", "Z" != n[8] && (r += n[8], n[9] && (r += ":" + n[9]))), r) : "Unrecognized time: " + r;
            }, w.prototype.parseInteger = function(t, e) {
                for (var i, r = this.get(t), n = 127 < r, s = n ? 255 : 0, o = ""; r == s && ++t < e; ) r = this.get(t);
                if (0 == (i = e - t)) return n ? -1 : 0;
                if (4 < i) {
                    for (o = r, i <<= 3; 0 == (128 & (+o ^ s)); ) o = +o << 1, --i;
                    o = "(" + i + " bit)\n";
                }
                n && (r -= 256);
                for (var a = new m(r), h = t + 1; h < e; ++h) a.mulAdd(256, this.get(h));
                return o + a.toString();
            }, w.prototype.parseBitString = function(t, e, i) {
                for (var r = this.get(t), n = "(" + ((e - t - 1 << 3) - r) + " bit)\n", s = "", o = t + 1; o < e; ++o) {
                    for (var a = this.get(o), h = o == e - 1 ? r : 0, u = 7; h <= u; --u) s += a >> u & 1 ? "1" : "0";
                    if (s.length > i) return n + S(s, i);
                }
                return n + s;
            }, w.prototype.parseOctetString = function(t, e, i) {
                if (this.isASCII(t, e)) return S(this.parseStringISO(t, e), i);
                var r = e - t, n = "(" + r + " byte)\n";
                (i /= 2) < r && (e = t + i);
                for (var s = t; s < e; ++s) n += this.hexByte(this.get(s));
                return i < r && (n += b), n;
            }, w.prototype.parseOID = function(t, e, i) {
                for (var r = "", n = new m(), s = 0, o = t; o < e; ++o) {
                    var a = this.get(o);
                    if (n.mulAdd(128, 127 & a), s += 7, !(128 & a)) {
                        if ("" === r) if ((n = n.simplify()) instanceof m) n.sub(80), r = "2." + n.toString(); else {
                            var h = n < 80 ? n < 40 ? 0 : 1 : 2;
                            r = h + "." + (n - 40 * h);
                        } else r += "." + n.toString();
                        if (r.length > i) return S(r, i);
                        n = new m(), s = 0;
                    }
                }
                return 0 < s && (r += ".incomplete"), r;
            }, w);
            function w(t, e) {
                this.hexDigits = "0123456789ABCDEF", t instanceof w ? (this.enc = t.enc, this.pos = t.pos) : (this.enc = t, 
                this.pos = e);
            }
            var B = (O.prototype.typeName = function() {
                switch (this.tag.tagClass) {
                  case 0:
                    switch (this.tag.tagNumber) {
                      case 0:
                        return "EOC";

                      case 1:
                        return "BOOLEAN";

                      case 2:
                        return "INTEGER";

                      case 3:
                        return "BIT_STRING";

                      case 4:
                        return "OCTET_STRING";

                      case 5:
                        return "NULL";

                      case 6:
                        return "OBJECT_IDENTIFIER";

                      case 7:
                        return "ObjectDescriptor";

                      case 8:
                        return "EXTERNAL";

                      case 9:
                        return "REAL";

                      case 10:
                        return "ENUMERATED";

                      case 11:
                        return "EMBEDDED_PDV";

                      case 12:
                        return "UTF8String";

                      case 16:
                        return "SEQUENCE";

                      case 17:
                        return "SET";

                      case 18:
                        return "NumericString";

                      case 19:
                        return "PrintableString";

                      case 20:
                        return "TeletexString";

                      case 21:
                        return "VideotexString";

                      case 22:
                        return "IA5String";

                      case 23:
                        return "UTCTime";

                      case 24:
                        return "GeneralizedTime";

                      case 25:
                        return "GraphicString";

                      case 26:
                        return "VisibleString";

                      case 27:
                        return "GeneralString";

                      case 28:
                        return "UniversalString";

                      case 30:
                        return "BMPString";
                    }
                    return "Universal_" + this.tag.tagNumber.toString();

                  case 1:
                    return "Application_" + this.tag.tagNumber.toString();

                  case 2:
                    return "[" + this.tag.tagNumber.toString() + "]";

                  case 3:
                    return "Private_" + this.tag.tagNumber.toString();
                }
            }, O.prototype.content = function(t) {
                if (void 0 === this.tag) return null;
                void 0 === t && (t = 1 / 0);
                var e = this.posContent(), i = Math.abs(this.length);
                if (!this.tag.isUniversal()) return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + i, t);
                switch (this.tag.tagNumber) {
                  case 1:
                    return 0 === this.stream.get(e) ? "false" : "true";

                  case 2:
                    return this.stream.parseInteger(e, e + i);

                  case 3:
                    return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(e, e + i, t);

                  case 4:
                    return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + i, t);

                  case 6:
                    return this.stream.parseOID(e, e + i, t);

                  case 16:
                  case 17:
                    return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";

                  case 12:
                    return S(this.stream.parseStringUTF(e, e + i), t);

                  case 18:
                  case 19:
                  case 20:
                  case 21:
                  case 22:
                  case 26:
                    return S(this.stream.parseStringISO(e, e + i), t);

                  case 30:
                    return S(this.stream.parseStringBMP(e, e + i), t);

                  case 23:
                  case 24:
                    return this.stream.parseTime(e, e + i, 23 == this.tag.tagNumber);
                }
                return null;
            }, O.prototype.toString = function() {
                return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]";
            }, O.prototype.toPrettyString = function(t) {
                void 0 === t && (t = "");
                var e = t + this.typeName() + " @" + this.stream.pos;
                if (0 <= this.length && (e += "+"), e += this.length, this.tag.tagConstructed ? e += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (e += " (encapsulates)"), 
                e += "\n", null !== this.sub) {
                    t += "  ";
                    for (var i = 0, r = this.sub.length; i < r; ++i) e += this.sub[i].toPrettyString(t);
                }
                return e;
            }, O.prototype.posStart = function() {
                return this.stream.pos;
            }, O.prototype.posContent = function() {
                return this.stream.pos + this.header;
            }, O.prototype.posEnd = function() {
                return this.stream.pos + this.header + Math.abs(this.length);
            }, O.prototype.toHexString = function() {
                return this.stream.hexDump(this.posStart(), this.posEnd(), !0);
            }, O.decodeLength = function(t) {
                var e = t.get(), i = 127 & e;
                if (i == e) return i;
                if (6 < i) throw new Error("Length over 48 bits not supported at position " + (t.pos - 1));
                if (0 == i) return null;
                for (var r = e = 0; r < i; ++r) e = 256 * e + t.get();
                return e;
            }, O.prototype.getHexStringValue = function() {
                var t = this.toHexString(), e = 2 * this.header, i = 2 * this.length;
                return t.substr(e, i);
            }, O.decode = function(t) {
                var r;
                function e() {
                    var t = [];
                    if (null !== s) {
                        for (var e = o + s; r.pos < e; ) t[t.length] = O.decode(r);
                        if (r.pos != e) throw new Error("Content size is not correct for container starting at offset " + o);
                    } else try {
                        for (;;) {
                            var i = O.decode(r);
                            if (i.tag.isEOC()) break;
                            t[t.length] = i;
                        }
                        s = o - r.pos;
                    } catch (t) {
                        throw new Error("Exception while decoding undefined length content: " + t);
                    }
                    return t;
                }
                r = t instanceof D ? t : new D(t, 0);
                var i = new D(r), n = new R(r), s = O.decodeLength(r), o = r.pos, a = o - i.pos, h = null;
                if (n.tagConstructed) h = e(); else if (n.isUniversal() && (3 == n.tagNumber || 4 == n.tagNumber)) try {
                    if (3 == n.tagNumber && 0 != r.get()) throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                    h = e();
                    for (var u = 0; u < h.length; ++u) if (h[u].tag.isEOC()) throw new Error("EOC is not supposed to be actual content.");
                } catch (t) {
                    h = null;
                }
                if (null === h) {
                    if (null === s) throw new Error("We can't skip over an invalid tag with undefined length at offset " + o);
                    r.pos = o + Math.abs(s);
                }
                return new O(i, a, s, n, h);
            }, O);
            function O(t, e, i, r, n) {
                if (!(r instanceof R)) throw new Error("Invalid tag value.");
                this.stream = t, this.header = e, this.length = i, this.tag = r, this.sub = n;
            }
            var A, R = (I.prototype.isUniversal = function() {
                return 0 === this.tagClass;
            }, I.prototype.isEOC = function() {
                return 0 === this.tagClass && 0 === this.tagNumber;
            }, I);
            function I(t) {
                var e = t.get();
                if (this.tagClass = e >> 6, this.tagConstructed = 0 != (32 & e), this.tagNumber = 31 & e, 
                31 == this.tagNumber) {
                    for (var i = new m(); e = t.get(), i.mulAdd(128, 127 & e), 128 & e; ) ;
                    this.tagNumber = i.simplify();
                }
            }
            var P = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997 ], x = (1 << 26) / P[P.length - 1], M = (C.prototype.toString = function(t) {
                if (this.s < 0) return "-" + this.negate().toString(t);
                var e;
                if (16 == t) e = 4; else if (8 == t) e = 3; else if (2 == t) e = 1; else if (32 == t) e = 5; else {
                    if (4 != t) return this.toRadix(t);
                    e = 2;
                }
                var i, r = (1 << e) - 1, n = !1, s = "", o = this.t, a = this.DB - o * this.DB % e;
                if (0 < o--) for (a < this.DB && 0 < (i = this[o] >> a) && (n = !0, s = h(i)); 0 <= o; ) a < e ? (i = (this[o] & (1 << a) - 1) << e - a, 
                i |= this[--o] >> (a += this.DB - e)) : (i = this[o] >> (a -= e) & r, a <= 0 && (a += this.DB, 
                --o)), 0 < i && (n = !0), n && (s += h(i));
                return n ? s : "0";
            }, C.prototype.negate = function() {
                var t = k();
                return C.ZERO.subTo(this, t), t;
            }, C.prototype.abs = function() {
                return this.s < 0 ? this.negate() : this;
            }, C.prototype.compareTo = function(t) {
                var e = this.s - t.s;
                if (0 != e) return e;
                var i = this.t;
                if (0 != (e = i - t.t)) return this.s < 0 ? -e : e;
                for (;0 <= --i; ) if (0 != (e = this[i] - t[i])) return e;
                return 0;
            }, C.prototype.bitLength = function() {
                return this.t <= 0 ? 0 : this.DB * (this.t - 1) + $(this[this.t - 1] ^ this.s & this.DM);
            }, C.prototype.mod = function(t) {
                var e = k();
                return this.abs().divRemTo(t, null, e), this.s < 0 && 0 < e.compareTo(C.ZERO) && t.subTo(e, e), 
                e;
            }, C.prototype.modPowInt = function(t, e) {
                var i;
                return i = new (t < 256 || e.isEven() ? L : q)(e), this.exp(t, i);
            }, C.prototype.clone = function() {
                var t = k();
                return this.copyTo(t), t;
            }, C.prototype.intValue = function() {
                if (this.s < 0) {
                    if (1 == this.t) return this[0] - this.DV;
                    if (0 == this.t) return -1;
                } else {
                    if (1 == this.t) return this[0];
                    if (0 == this.t) return 0;
                }
                return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
            }, C.prototype.byteValue = function() {
                return 0 == this.t ? this.s : this[0] << 24 >> 24;
            }, C.prototype.shortValue = function() {
                return 0 == this.t ? this.s : this[0] << 16 >> 16;
            }, C.prototype.signum = function() {
                return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1;
            }, C.prototype.toByteArray = function() {
                var t = this.t, e = [];
                e[0] = this.s;
                var i, r = this.DB - t * this.DB % 8, n = 0;
                if (0 < t--) for (r < this.DB && (i = this[t] >> r) != (this.s & this.DM) >> r && (e[n++] = i | this.s << this.DB - r); 0 <= t; ) r < 8 ? (i = (this[t] & (1 << r) - 1) << 8 - r, 
                i |= this[--t] >> (r += this.DB - 8)) : (i = this[t] >> (r -= 8) & 255, r <= 0 && (r += this.DB, 
                --t)), 0 != (128 & i) && (i |= -256), 0 == n && (128 & this.s) != (128 & i) && ++n, 
                (0 < n || i != this.s) && (e[n++] = i);
                return e;
            }, C.prototype.equals = function(t) {
                return 0 == this.compareTo(t);
            }, C.prototype.min = function(t) {
                return this.compareTo(t) < 0 ? this : t;
            }, C.prototype.max = function(t) {
                return 0 < this.compareTo(t) ? this : t;
            }, C.prototype.and = function(t) {
                var e = k();
                return this.bitwiseTo(t, i, e), e;
            }, C.prototype.or = function(t) {
                var e = k();
                return this.bitwiseTo(t, u, e), e;
            }, C.prototype.xor = function(t) {
                var e = k();
                return this.bitwiseTo(t, r, e), e;
            }, C.prototype.andNot = function(t) {
                var e = k();
                return this.bitwiseTo(t, n, e), e;
            }, C.prototype.not = function() {
                for (var t = k(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
                return t.t = this.t, t.s = ~this.s, t;
            }, C.prototype.shiftLeft = function(t) {
                var e = k();
                return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e;
            }, C.prototype.shiftRight = function(t) {
                var e = k();
                return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e;
            }, C.prototype.getLowestSetBit = function() {
                for (var t = 0; t < this.t; ++t) if (0 != this[t]) return t * this.DB + s(this[t]);
                return this.s < 0 ? this.t * this.DB : -1;
            }, C.prototype.bitCount = function() {
                for (var t = 0, e = this.s & this.DM, i = 0; i < this.t; ++i) t += o(this[i] ^ e);
                return t;
            }, C.prototype.testBit = function(t) {
                var e = Math.floor(t / this.DB);
                return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB);
            }, C.prototype.setBit = function(t) {
                return this.changeBit(t, u);
            }, C.prototype.clearBit = function(t) {
                return this.changeBit(t, n);
            }, C.prototype.flipBit = function(t) {
                return this.changeBit(t, r);
            }, C.prototype.add = function(t) {
                var e = k();
                return this.addTo(t, e), e;
            }, C.prototype.subtract = function(t) {
                var e = k();
                return this.subTo(t, e), e;
            }, C.prototype.multiply = function(t) {
                var e = k();
                return this.multiplyTo(t, e), e;
            }, C.prototype.divide = function(t) {
                var e = k();
                return this.divRemTo(t, e, null), e;
            }, C.prototype.remainder = function(t) {
                var e = k();
                return this.divRemTo(t, null, e), e;
            }, C.prototype.divideAndRemainder = function(t) {
                var e = k(), i = k();
                return this.divRemTo(t, e, i), [ e, i ];
            }, C.prototype.modPow = function(t, e) {
                var i, r, n = t.bitLength(), s = Y(1);
                if (n <= 0) return s;
                i = n < 18 ? 1 : n < 48 ? 3 : n < 144 ? 4 : n < 768 ? 5 : 6, r = new (n < 8 ? L : e.isEven() ? K : q)(e);
                var o = [], a = 3, h = i - 1, u = (1 << i) - 1;
                if (o[1] = r.convert(this), 1 < i) {
                    var c = k();
                    for (r.sqrTo(o[1], c); a <= u; ) o[a] = k(), r.mulTo(c, o[a - 2], o[a]), a += 2;
                }
                var f, l, p = t.t - 1, d = !0, g = k();
                for (n = $(t[p]) - 1; 0 <= p; ) {
                    for (h <= n ? f = t[p] >> n - h & u : (f = (t[p] & (1 << n + 1) - 1) << h - n, 0 < p && (f |= t[p - 1] >> this.DB + n - h)), 
                    a = i; 0 == (1 & f); ) f >>= 1, --a;
                    if ((n -= a) < 0 && (n += this.DB, --p), d) o[f].copyTo(s), d = !1; else {
                        for (;1 < a; ) r.sqrTo(s, g), r.sqrTo(g, s), a -= 2;
                        0 < a ? r.sqrTo(s, g) : (l = s, s = g, g = l), r.mulTo(g, o[f], s);
                    }
                    for (;0 <= p && 0 == (t[p] & 1 << n); ) r.sqrTo(s, g), l = s, s = g, g = l, --n < 0 && (n = this.DB - 1, 
                    --p);
                }
                return r.revert(s);
            }, C.prototype.modInverse = function(t) {
                var e = t.isEven();
                if (this.isEven() && e || 0 == t.signum()) return C.ZERO;
                for (var i = t.clone(), r = this.clone(), n = Y(1), s = Y(0), o = Y(0), a = Y(1); 0 != i.signum(); ) {
                    for (;i.isEven(); ) i.rShiftTo(1, i), e ? (n.isEven() && s.isEven() || (n.addTo(this, n), 
                    s.subTo(t, s)), n.rShiftTo(1, n)) : s.isEven() || s.subTo(t, s), s.rShiftTo(1, s);
                    for (;r.isEven(); ) r.rShiftTo(1, r), e ? (o.isEven() && a.isEven() || (o.addTo(this, o), 
                    a.subTo(t, a)), o.rShiftTo(1, o)) : a.isEven() || a.subTo(t, a), a.rShiftTo(1, a);
                    0 <= i.compareTo(r) ? (i.subTo(r, i), e && n.subTo(o, n), s.subTo(a, s)) : (r.subTo(i, r), 
                    e && o.subTo(n, o), a.subTo(s, a));
                }
                return 0 != r.compareTo(C.ONE) ? C.ZERO : 0 <= a.compareTo(t) ? a.subtract(t) : a.signum() < 0 ? (a.addTo(t, a), 
                a.signum() < 0 ? a.add(t) : a) : a;
            }, C.prototype.pow = function(t) {
                return this.exp(t, new V());
            }, C.prototype.gcd = function(t) {
                var e = this.s < 0 ? this.negate() : this.clone(), i = t.s < 0 ? t.negate() : t.clone();
                if (e.compareTo(i) < 0) {
                    var r = e;
                    e = i, i = r;
                }
                var n = e.getLowestSetBit(), s = i.getLowestSetBit();
                if (s < 0) return e;
                for (n < s && (s = n), 0 < s && (e.rShiftTo(s, e), i.rShiftTo(s, i)); 0 < e.signum(); ) 0 < (n = e.getLowestSetBit()) && e.rShiftTo(n, e), 
                0 < (n = i.getLowestSetBit()) && i.rShiftTo(n, i), 0 <= e.compareTo(i) ? (e.subTo(i, e), 
                e.rShiftTo(1, e)) : (i.subTo(e, i), i.rShiftTo(1, i));
                return 0 < s && i.lShiftTo(s, i), i;
            }, C.prototype.isProbablePrime = function(t) {
                var e, i = this.abs();
                if (1 == i.t && i[0] <= P[P.length - 1]) {
                    for (e = 0; e < P.length; ++e) if (i[0] == P[e]) return !0;
                    return !1;
                }
                if (i.isEven()) return !1;
                for (e = 1; e < P.length; ) {
                    for (var r = P[e], n = e + 1; n < P.length && r < x; ) r *= P[n++];
                    for (r = i.modInt(r); e < n; ) if (r % P[e++] == 0) return !1;
                }
                return i.millerRabin(t);
            }, C.prototype.copyTo = function(t) {
                for (var e = this.t - 1; 0 <= e; --e) t[e] = this[e];
                t.t = this.t, t.s = this.s;
            }, C.prototype.fromInt = function(t) {
                this.t = 1, this.s = t < 0 ? -1 : 0, 0 < t ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0;
            }, C.prototype.fromString = function(t, e) {
                var i;
                if (16 == e) i = 4; else if (8 == e) i = 3; else if (256 == e) i = 8; else if (2 == e) i = 1; else if (32 == e) i = 5; else {
                    if (4 != e) return void this.fromRadix(t, e);
                    i = 2;
                }
                this.t = 0, this.s = 0;
                for (var r = t.length, n = !1, s = 0; 0 <= --r; ) {
                    var o = 8 == i ? 255 & +t[r] : Z(t, r);
                    o < 0 ? "-" == t.charAt(r) && (n = !0) : (n = !1, 0 == s ? this[this.t++] = o : s + i > this.DB ? (this[this.t - 1] |= (o & (1 << this.DB - s) - 1) << s, 
                    this[this.t++] = o >> this.DB - s) : this[this.t - 1] |= o << s, (s += i) >= this.DB && (s -= this.DB));
                }
                8 == i && 0 != (128 & +t[0]) && (this.s = -1, 0 < s && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), 
                this.clamp(), n && C.ZERO.subTo(this, this);
            }, C.prototype.clamp = function() {
                for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t; ) --this.t;
            }, C.prototype.dlShiftTo = function(t, e) {
                var i;
                for (i = this.t - 1; 0 <= i; --i) e[i + t] = this[i];
                for (i = t - 1; 0 <= i; --i) e[i] = 0;
                e.t = this.t + t, e.s = this.s;
            }, C.prototype.drShiftTo = function(t, e) {
                for (var i = t; i < this.t; ++i) e[i - t] = this[i];
                e.t = Math.max(this.t - t, 0), e.s = this.s;
            }, C.prototype.lShiftTo = function(t, e) {
                for (var i = t % this.DB, r = this.DB - i, n = (1 << r) - 1, s = Math.floor(t / this.DB), o = this.s << i & this.DM, a = this.t - 1; 0 <= a; --a) e[a + s + 1] = this[a] >> r | o, 
                o = (this[a] & n) << i;
                for (a = s - 1; 0 <= a; --a) e[a] = 0;
                e[s] = o, e.t = this.t + s + 1, e.s = this.s, e.clamp();
            }, C.prototype.rShiftTo = function(t, e) {
                e.s = this.s;
                var i = Math.floor(t / this.DB);
                if (i >= this.t) e.t = 0; else {
                    var r = t % this.DB, n = this.DB - r, s = (1 << r) - 1;
                    e[0] = this[i] >> r;
                    for (var o = i + 1; o < this.t; ++o) e[o - i - 1] |= (this[o] & s) << n, e[o - i] = this[o] >> r;
                    0 < r && (e[this.t - i - 1] |= (this.s & s) << n), e.t = this.t - i, e.clamp();
                }
            }, C.prototype.subTo = function(t, e) {
                for (var i = 0, r = 0, n = Math.min(t.t, this.t); i < n; ) r += this[i] - t[i], 
                e[i++] = r & this.DM, r >>= this.DB;
                if (t.t < this.t) {
                    for (r -= t.s; i < this.t; ) r += this[i], e[i++] = r & this.DM, r >>= this.DB;
                    r += this.s;
                } else {
                    for (r += this.s; i < t.t; ) r -= t[i], e[i++] = r & this.DM, r >>= this.DB;
                    r -= t.s;
                }
                e.s = r < 0 ? -1 : 0, r < -1 ? e[i++] = this.DV + r : 0 < r && (e[i++] = r), e.t = i, 
                e.clamp();
            }, C.prototype.multiplyTo = function(t, e) {
                var i = this.abs(), r = t.abs(), n = i.t;
                for (e.t = n + r.t; 0 <= --n; ) e[n] = 0;
                for (n = 0; n < r.t; ++n) e[n + i.t] = i.am(0, r[n], e, n, 0, i.t);
                e.s = 0, e.clamp(), this.s != t.s && C.ZERO.subTo(e, e);
            }, C.prototype.squareTo = function(t) {
                for (var e = this.abs(), i = t.t = 2 * e.t; 0 <= --i; ) t[i] = 0;
                for (i = 0; i < e.t - 1; ++i) {
                    var r = e.am(i, e[i], t, 2 * i, 0, 1);
                    (t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, r, e.t - i - 1)) >= e.DV && (t[i + e.t] -= e.DV, 
                    t[i + e.t + 1] = 1);
                }
                0 < t.t && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)), t.s = 0, t.clamp();
            }, C.prototype.divRemTo = function(t, e, i) {
                var r = t.abs();
                if (!(r.t <= 0)) {
                    var n = this.abs();
                    if (n.t < r.t) return null != e && e.fromInt(0), void (null != i && this.copyTo(i));
                    null == i && (i = k());
                    var s = k(), o = this.s, a = t.s, h = this.DB - $(r[r.t - 1]);
                    0 < h ? (r.lShiftTo(h, s), n.lShiftTo(h, i)) : (r.copyTo(s), n.copyTo(i));
                    var u = s.t, c = s[u - 1];
                    if (0 != c) {
                        var f = c * (1 << this.F1) + (1 < u ? s[u - 2] >> this.F2 : 0), l = this.FV / f, p = (1 << this.F1) / f, d = 1 << this.F2, g = i.t, _ = g - u, v = null == e ? k() : e;
                        for (s.dlShiftTo(_, v), 0 <= i.compareTo(v) && (i[i.t++] = 1, i.subTo(v, i)), C.ONE.dlShiftTo(u, v), 
                        v.subTo(s, s); s.t < u; ) s[s.t++] = 0;
                        for (;0 <= --_; ) {
                            var m = i[--g] == c ? this.DM : Math.floor(i[g] * l + (i[g - 1] + d) * p);
                            if ((i[g] += s.am(0, m, i, _, 0, u)) < m) for (s.dlShiftTo(_, v), i.subTo(v, i); i[g] < --m; ) i.subTo(v, i);
                        }
                        null != e && (i.drShiftTo(u, e), o != a && C.ZERO.subTo(e, e)), i.t = u, i.clamp(), 
                        0 < h && i.rShiftTo(h, i), o < 0 && C.ZERO.subTo(i, i);
                    }
                }
            }, C.prototype.invDigit = function() {
                if (this.t < 1) return 0;
                var t = this[0];
                if (0 == (1 & t)) return 0;
                var e = 3 & t;
                return 0 < (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) ? this.DV - e : -e;
            }, C.prototype.isEven = function() {
                return 0 == (0 < this.t ? 1 & this[0] : this.s);
            }, C.prototype.exp = function(t, e) {
                if (4294967295 < t || t < 1) return C.ONE;
                var i = k(), r = k(), n = e.convert(this), s = $(t) - 1;
                for (n.copyTo(i); 0 <= --s; ) if (e.sqrTo(i, r), 0 < (t & 1 << s)) e.mulTo(r, n, i); else {
                    var o = i;
                    i = r, r = o;
                }
                return e.revert(i);
            }, C.prototype.chunkSize = function(t) {
                return Math.floor(Math.LN2 * this.DB / Math.log(t));
            }, C.prototype.toRadix = function(t) {
                if (null == t && (t = 10), 0 == this.signum() || t < 2 || 36 < t) return "0";
                var e = this.chunkSize(t), i = Math.pow(t, e), r = Y(i), n = k(), s = k(), o = "";
                for (this.divRemTo(r, n, s); 0 < n.signum(); ) o = (i + s.intValue()).toString(t).substr(1) + o, 
                n.divRemTo(r, n, s);
                return s.intValue().toString(t) + o;
            }, C.prototype.fromRadix = function(t, e) {
                this.fromInt(0), null == e && (e = 10);
                for (var i = this.chunkSize(e), r = Math.pow(e, i), n = !1, s = 0, o = 0, a = 0; a < t.length; ++a) {
                    var h = Z(t, a);
                    h < 0 ? "-" == t.charAt(a) && 0 == this.signum() && (n = !0) : (o = e * o + h, ++s >= i && (this.dMultiply(r), 
                    this.dAddOffset(o, 0), o = s = 0));
                }
                0 < s && (this.dMultiply(Math.pow(e, s)), this.dAddOffset(o, 0)), n && C.ZERO.subTo(this, this);
            }, C.prototype.fromNumber = function(t, e, i) {
                if ("number" == typeof e) if (t < 2) this.fromInt(1); else for (this.fromNumber(t, i), 
                this.testBit(t - 1) || this.bitwiseTo(C.ONE.shiftLeft(t - 1), u, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e); ) this.dAddOffset(2, 0), 
                this.bitLength() > t && this.subTo(C.ONE.shiftLeft(t - 1), this); else {
                    var r = [], n = 7 & t;
                    r.length = 1 + (t >> 3), e.nextBytes(r), 0 < n ? r[0] &= (1 << n) - 1 : r[0] = 0, 
                    this.fromString(r, 256);
                }
            }, C.prototype.bitwiseTo = function(t, e, i) {
                var r, n, s = Math.min(t.t, this.t);
                for (r = 0; r < s; ++r) i[r] = e(this[r], t[r]);
                if (t.t < this.t) {
                    for (n = t.s & this.DM, r = s; r < this.t; ++r) i[r] = e(this[r], n);
                    i.t = this.t;
                } else {
                    for (n = this.s & this.DM, r = s; r < t.t; ++r) i[r] = e(n, t[r]);
                    i.t = t.t;
                }
                i.s = e(this.s, t.s), i.clamp();
            }, C.prototype.changeBit = function(t, e) {
                var i = C.ONE.shiftLeft(t);
                return this.bitwiseTo(i, e, i), i;
            }, C.prototype.addTo = function(t, e) {
                for (var i = 0, r = 0, n = Math.min(t.t, this.t); i < n; ) r += this[i] + t[i], 
                e[i++] = r & this.DM, r >>= this.DB;
                if (t.t < this.t) {
                    for (r += t.s; i < this.t; ) r += this[i], e[i++] = r & this.DM, r >>= this.DB;
                    r += this.s;
                } else {
                    for (r += this.s; i < t.t; ) r += t[i], e[i++] = r & this.DM, r >>= this.DB;
                    r += t.s;
                }
                e.s = r < 0 ? -1 : 0, 0 < r ? e[i++] = r : r < -1 && (e[i++] = this.DV + r), e.t = i, 
                e.clamp();
            }, C.prototype.dMultiply = function(t) {
                this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp();
            }, C.prototype.dAddOffset = function(t, e) {
                if (0 != t) {
                    for (;this.t <= e; ) this[this.t++] = 0;
                    for (this[e] += t; this[e] >= this.DV; ) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), 
                    ++this[e];
                }
            }, C.prototype.multiplyLowerTo = function(t, e, i) {
                var r = Math.min(this.t + t.t, e);
                for (i.s = 0, i.t = r; 0 < r; ) i[--r] = 0;
                for (var n = i.t - this.t; r < n; ++r) i[r + this.t] = this.am(0, t[r], i, r, 0, this.t);
                for (n = Math.min(t.t, e); r < n; ++r) this.am(0, t[r], i, r, 0, e - r);
                i.clamp();
            }, C.prototype.multiplyUpperTo = function(t, e, i) {
                --e;
                var r = i.t = this.t + t.t - e;
                for (i.s = 0; 0 <= --r; ) i[r] = 0;
                for (r = Math.max(e - this.t, 0); r < t.t; ++r) i[this.t + r - e] = this.am(e - r, t[r], i, 0, 0, this.t + r - e);
                i.clamp(), i.drShiftTo(1, i);
            }, C.prototype.modInt = function(t) {
                if (t <= 0) return 0;
                var e = this.DV % t, i = this.s < 0 ? t - 1 : 0;
                if (0 < this.t) if (0 == e) i = this[0] % t; else for (var r = this.t - 1; 0 <= r; --r) i = (e * i + this[r]) % t;
                return i;
            }, C.prototype.millerRabin = function(t) {
                var e = this.subtract(C.ONE), i = e.getLowestSetBit();
                if (i <= 0) return !1;
                var r = e.shiftRight(i);
                P.length < (t = t + 1 >> 1) && (t = P.length);
                for (var n = k(), s = 0; s < t; ++s) {
                    n.fromInt(P[Math.floor(Math.random() * P.length)]);
                    var o = n.modPow(r, this);
                    if (0 != o.compareTo(C.ONE) && 0 != o.compareTo(e)) {
                        for (var a = 1; a++ < i && 0 != o.compareTo(e); ) if (0 == (o = o.modPowInt(2, this)).compareTo(C.ONE)) return !1;
                        if (0 != o.compareTo(e)) return !1;
                    }
                }
                return !0;
            }, C.prototype.square = function() {
                var t = k();
                return this.squareTo(t), t;
            }, C.prototype.gcda = function(t, e) {
                var i = this.s < 0 ? this.negate() : this.clone(), r = t.s < 0 ? t.negate() : t.clone();
                if (i.compareTo(r) < 0) {
                    var n = i;
                    i = r, r = n;
                }
                var s = i.getLowestSetBit(), o = r.getLowestSetBit();
                if (o < 0) e(i); else {
                    s < o && (o = s), 0 < o && (i.rShiftTo(o, i), r.rShiftTo(o, r));
                    var a = function() {
                        0 < (s = i.getLowestSetBit()) && i.rShiftTo(s, i), 0 < (s = r.getLowestSetBit()) && r.rShiftTo(s, r), 
                        0 <= i.compareTo(r) ? (i.subTo(r, i), i.rShiftTo(1, i)) : (r.subTo(i, r), r.rShiftTo(1, r)), 
                        0 < i.signum() ? setTimeout(a, 0) : (0 < o && r.lShiftTo(o, r), setTimeout(function() {
                            e(r);
                        }, 0));
                    };
                    setTimeout(a, 10);
                }
            }, C.prototype.fromNumberAsync = function(t, e, i, r) {
                if ("number" == typeof e) if (t < 2) this.fromInt(1); else {
                    this.fromNumber(t, i), this.testBit(t - 1) || this.bitwiseTo(C.ONE.shiftLeft(t - 1), u, this), 
                    this.isEven() && this.dAddOffset(1, 0);
                    var n = this, s = function() {
                        n.dAddOffset(2, 0), n.bitLength() > t && n.subTo(C.ONE.shiftLeft(t - 1), n), n.isProbablePrime(e) ? setTimeout(function() {
                            r();
                        }, 0) : setTimeout(s, 0);
                    };
                    setTimeout(s, 0);
                } else {
                    var o = [], a = 7 & t;
                    o.length = 1 + (t >> 3), e.nextBytes(o), 0 < a ? o[0] &= (1 << a) - 1 : o[0] = 0, 
                    this.fromString(o, 256);
                }
            }, C);
            function C(t, e, i) {
                null != t && ("number" == typeof t ? this.fromNumber(t, e, i) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e));
            }
            var V = (N.prototype.convert = function(t) {
                return t;
            }, N.prototype.revert = function(t) {
                return t;
            }, N.prototype.mulTo = function(t, e, i) {
                t.multiplyTo(e, i);
            }, N.prototype.sqrTo = function(t, e) {
                t.squareTo(e);
            }, N);
            function N() {}
            var L = (U.prototype.convert = function(t) {
                return t.s < 0 || 0 <= t.compareTo(this.m) ? t.mod(this.m) : t;
            }, U.prototype.revert = function(t) {
                return t;
            }, U.prototype.reduce = function(t) {
                t.divRemTo(this.m, null, t);
            }, U.prototype.mulTo = function(t, e, i) {
                t.multiplyTo(e, i), this.reduce(i);
            }, U.prototype.sqrTo = function(t, e) {
                t.squareTo(e), this.reduce(e);
            }, U);
            function U(t) {
                this.m = t;
            }
            var q = (j.prototype.convert = function(t) {
                var e = k();
                return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && 0 < e.compareTo(M.ZERO) && this.m.subTo(e, e), 
                e;
            }, j.prototype.revert = function(t) {
                var e = k();
                return t.copyTo(e), this.reduce(e), e;
            }, j.prototype.reduce = function(t) {
                for (;t.t <= this.mt2; ) t[t.t++] = 0;
                for (var e = 0; e < this.m.t; ++e) {
                    var i = 32767 & t[e], r = i * this.mpl + ((i * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                    for (t[i = e + this.m.t] += this.m.am(0, r, t, e, 0, this.m.t); t[i] >= t.DV; ) t[i] -= t.DV, 
                    t[++i]++;
                }
                t.clamp(), t.drShiftTo(this.m.t, t), 0 <= t.compareTo(this.m) && t.subTo(this.m, t);
            }, j.prototype.mulTo = function(t, e, i) {
                t.multiplyTo(e, i), this.reduce(i);
            }, j.prototype.sqrTo = function(t, e) {
                t.squareTo(e), this.reduce(e);
            }, j);
            function j(t) {
                this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, 
                this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t;
            }
            var K = (H.prototype.convert = function(t) {
                if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
                if (t.compareTo(this.m) < 0) return t;
                var e = k();
                return t.copyTo(e), this.reduce(e), e;
            }, H.prototype.revert = function(t) {
                return t;
            }, H.prototype.reduce = function(t) {
                for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, 
                t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0; ) t.dAddOffset(1, this.m.t + 1);
                for (t.subTo(this.r2, t); 0 <= t.compareTo(this.m); ) t.subTo(this.m, t);
            }, H.prototype.mulTo = function(t, e, i) {
                t.multiplyTo(e, i), this.reduce(i);
            }, H.prototype.sqrTo = function(t, e) {
                t.squareTo(e), this.reduce(e);
            }, H);
            function H(t) {
                this.m = t, this.r2 = k(), this.q3 = k(), M.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t);
            }
            function k() {
                return new M(null);
            }
            function F(t, e) {
                return new M(t, e);
            }
            A = "Microsoft Internet Explorer" == navigator.appName ? (M.prototype.am = function(t, e, i, r, n, s) {
                for (var o = 32767 & e, a = e >> 15; 0 <= --s; ) {
                    var h = 32767 & this[t], u = this[t++] >> 15, c = a * h + u * o;
                    n = ((h = o * h + ((32767 & c) << 15) + i[r] + (1073741823 & n)) >>> 30) + (c >>> 15) + a * u + (n >>> 30), 
                    i[r++] = 1073741823 & h;
                }
                return n;
            }, 30) : "Netscape" != navigator.appName ? (M.prototype.am = function(t, e, i, r, n, s) {
                for (;0 <= --s; ) {
                    var o = e * this[t++] + i[r] + n;
                    n = Math.floor(o / 67108864), i[r++] = 67108863 & o;
                }
                return n;
            }, 26) : (M.prototype.am = function(t, e, i, r, n, s) {
                for (var o = 16383 & e, a = e >> 14; 0 <= --s; ) {
                    var h = 16383 & this[t], u = this[t++] >> 14, c = a * h + u * o;
                    n = ((h = o * h + ((16383 & c) << 14) + i[r] + n) >> 28) + (c >> 14) + a * u, i[r++] = 268435455 & h;
                }
                return n;
            }, 28), M.prototype.DB = A, M.prototype.DM = (1 << A) - 1, M.prototype.DV = 1 << A;
            M.prototype.FV = Math.pow(2, 52), M.prototype.F1 = 52 - A, M.prototype.F2 = 2 * A - 52;
            var z, W, G = [];
            for (z = "0".charCodeAt(0), W = 0; W <= 9; ++W) G[z++] = W;
            for (z = "a".charCodeAt(0), W = 10; W < 36; ++W) G[z++] = W;
            for (z = "A".charCodeAt(0), W = 10; W < 36; ++W) G[z++] = W;
            function Z(t, e) {
                var i = G[t.charCodeAt(e)];
                return null == i ? -1 : i;
            }
            function Y(t) {
                var e = k();
                return e.fromInt(t), e;
            }
            function $(t) {
                var e, i = 1;
                return 0 != (e = t >>> 16) && (t = e, i += 16), 0 != (e = t >> 8) && (t = e, i += 8), 
                0 != (e = t >> 4) && (t = e, i += 4), 0 != (e = t >> 2) && (t = e, i += 2), 0 != (e = t >> 1) && (t = e, 
                i += 1), i;
            }
            M.ZERO = Y(0), M.ONE = Y(1);
            var Q = (J.prototype.init = function(t) {
                var e, i, r;
                for (e = 0; e < 256; ++e) this.S[e] = e;
                for (e = i = 0; e < 256; ++e) i = i + this.S[e] + t[e % t.length] & 255, r = this.S[e], 
                this.S[e] = this.S[i], this.S[i] = r;
                this.i = 0, this.j = 0;
            }, J.prototype.next = function() {
                var t;
                return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], 
                this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255];
            }, J);
            function J() {
                this.i = 0, this.j = 0, this.S = [];
            }
            var X, tt, et = 256, it = null;
            if (null == it) {
                it = [];
                var rt = void (tt = 0);
                if (window.crypto && window.crypto.getRandomValues) {
                    var nt = new Uint32Array(256);
                    for (window.crypto.getRandomValues(nt), rt = 0; rt < nt.length; ++rt) it[tt++] = 255 & nt[rt];
                }
                var st = function(t) {
                    if (this.count = this.count || 0, 256 <= this.count || et <= tt) window.removeEventListener ? window.removeEventListener("mousemove", st, !1) : window.detachEvent && window.detachEvent("onmousemove", st); else try {
                        var e = t.x + t.y;
                        it[tt++] = 255 & e, this.count += 1;
                    } catch (t) {}
                };
                window.addEventListener ? window.addEventListener("mousemove", st, !1) : window.attachEvent && window.attachEvent("onmousemove", st);
            }
            function ot() {
                if (null == X) {
                    for (X = new Q(); tt < et; ) {
                        var t = Math.floor(65536 * Math.random());
                        it[tt++] = 255 & t;
                    }
                    for (X.init(it), tt = 0; tt < it.length; ++tt) it[tt] = 0;
                    tt = 0;
                }
                return X.next();
            }
            var at = (ht.prototype.nextBytes = function(t) {
                for (var e = 0; e < t.length; ++e) t[e] = ot();
            }, ht);
            function ht() {}
            var ut = (ct.prototype.doPublic = function(t) {
                return t.modPowInt(this.e, this.n);
            }, ct.prototype.doPrivate = function(t) {
                if (null == this.p || null == this.q) return t.modPow(this.d, this.n);
                for (var e = t.mod(this.p).modPow(this.dmp1, this.p), i = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(i) < 0; ) e = e.add(this.p);
                return e.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i);
            }, ct.prototype.setPublic = function(t, e) {
                null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = F(t, 16), this.e = parseInt(e, 16)) : console.error("Invalid RSA public key");
            }, ct.prototype.encrypt = function(t) {
                var e = function(t, e) {
                    if (e < t.length + 11) return console.error("Message too long for RSA"), null;
                    for (var i = [], r = t.length - 1; 0 <= r && 0 < e; ) {
                        var n = t.charCodeAt(r--);
                        n < 128 ? i[--e] = n : 127 < n && n < 2048 ? (i[--e] = 63 & n | 128, i[--e] = n >> 6 | 192) : (i[--e] = 63 & n | 128, 
                        i[--e] = n >> 6 & 63 | 128, i[--e] = n >> 12 | 224);
                    }
                    i[--e] = 0;
                    for (var s = new at(), o = []; 2 < e; ) {
                        for (o[0] = 0; 0 == o[0]; ) s.nextBytes(o);
                        i[--e] = o[0];
                    }
                    return i[--e] = 2, i[--e] = 0, new M(i);
                }(t, this.n.bitLength() + 7 >> 3);
                if (null == e) return null;
                var i = this.doPublic(e);
                if (null == i) return null;
                var r = i.toString(16);
                return 0 == (1 & r.length) ? r : "0" + r;
            }, ct.prototype.setPrivate = function(t, e, i) {
                null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = F(t, 16), this.e = parseInt(e, 16), 
                this.d = F(i, 16)) : console.error("Invalid RSA private key");
            }, ct.prototype.setPrivateEx = function(t, e, i, r, n, s, o, a) {
                null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = F(t, 16), this.e = parseInt(e, 16), 
                this.d = F(i, 16), this.p = F(r, 16), this.q = F(n, 16), this.dmp1 = F(s, 16), this.dmq1 = F(o, 16), 
                this.coeff = F(a, 16)) : console.error("Invalid RSA private key");
            }, ct.prototype.generate = function(t, e) {
                var i = new at(), r = t >> 1;
                this.e = parseInt(e, 16);
                for (var n = new M(e, 16); ;) {
                    for (;this.p = new M(t - r, 1, i), 0 != this.p.subtract(M.ONE).gcd(n).compareTo(M.ONE) || !this.p.isProbablePrime(10); ) ;
                    for (;this.q = new M(r, 1, i), 0 != this.q.subtract(M.ONE).gcd(n).compareTo(M.ONE) || !this.q.isProbablePrime(10); ) ;
                    if (this.p.compareTo(this.q) <= 0) {
                        var s = this.p;
                        this.p = this.q, this.q = s;
                    }
                    var o = this.p.subtract(M.ONE), a = this.q.subtract(M.ONE), h = o.multiply(a);
                    if (0 == h.gcd(n).compareTo(M.ONE)) {
                        this.n = this.p.multiply(this.q), this.d = n.modInverse(h), this.dmp1 = this.d.mod(o), 
                        this.dmq1 = this.d.mod(a), this.coeff = this.q.modInverse(this.p);
                        break;
                    }
                }
            }, ct.prototype.decrypt = function(t) {
                var e = F(t, 16), i = this.doPrivate(e);
                return null == i ? null : function(t, e) {
                    for (var i = t.toByteArray(), r = 0; r < i.length && 0 == i[r]; ) ++r;
                    if (i.length - r != e - 1 || 2 != i[r]) return null;
                    for (++r; 0 != i[r]; ) if (++r >= i.length) return null;
                    for (var n = ""; ++r < i.length; ) {
                        var s = 255 & i[r];
                        s < 128 ? n += String.fromCharCode(s) : 191 < s && s < 224 ? (n += String.fromCharCode((31 & s) << 6 | 63 & i[r + 1]), 
                        ++r) : (n += String.fromCharCode((15 & s) << 12 | (63 & i[r + 1]) << 6 | 63 & i[r + 2]), 
                        r += 2);
                    }
                    return n;
                }(i, this.n.bitLength() + 7 >> 3);
            }, ct.prototype.generateAsync = function(t, e, n) {
                var s = new at(), o = t >> 1;
                this.e = parseInt(e, 16);
                var a = new M(e, 16), h = this, u = function() {
                    function e() {
                        if (h.p.compareTo(h.q) <= 0) {
                            var t = h.p;
                            h.p = h.q, h.q = t;
                        }
                        var e = h.p.subtract(M.ONE), i = h.q.subtract(M.ONE), r = e.multiply(i);
                        0 == r.gcd(a).compareTo(M.ONE) ? (h.n = h.p.multiply(h.q), h.d = a.modInverse(r), 
                        h.dmp1 = h.d.mod(e), h.dmq1 = h.d.mod(i), h.coeff = h.q.modInverse(h.p), setTimeout(function() {
                            n();
                        }, 0)) : setTimeout(u, 0);
                    }
                    var i = function() {
                        h.q = k(), h.q.fromNumberAsync(o, 1, s, function() {
                            h.q.subtract(M.ONE).gcda(a, function(t) {
                                0 == t.compareTo(M.ONE) && h.q.isProbablePrime(10) ? setTimeout(e, 0) : setTimeout(i, 0);
                            });
                        });
                    }, r = function() {
                        h.p = k(), h.p.fromNumberAsync(t - o, 1, s, function() {
                            h.p.subtract(M.ONE).gcda(a, function(t) {
                                0 == t.compareTo(M.ONE) && h.p.isProbablePrime(10) ? setTimeout(i, 0) : setTimeout(r, 0);
                            });
                        });
                    };
                    setTimeout(r, 0);
                };
                setTimeout(u, 0);
            }, ct.prototype.sign = function(t, e, i) {
                var r = function(t, e) {
                    if (e < t.length + 22) return console.error("Message too long for RSA"), null;
                    for (var i = e - t.length - 6, r = "", n = 0; n < i; n += 2) r += "ff";
                    return F("0001" + r + "00" + t, 16);
                }((ft[i] || "") + e(t).toString(), this.n.bitLength() / 4);
                if (null == r) return null;
                var n = this.doPrivate(r);
                if (null == n) return null;
                var s = n.toString(16);
                return 0 == (1 & s.length) ? s : "0" + s;
            }, ct.prototype.verify = function(t, e, i) {
                var r = F(e, 16), n = this.doPublic(r);
                return null == n ? null : function(t) {
                    for (var e in ft) if (ft.hasOwnProperty(e)) {
                        var i = ft[e], r = i.length;
                        if (t.substr(0, r) == i) return t.substr(r);
                    }
                    return t;
                }(n.toString(16).replace(/^1f+00/, "")) == i(t).toString();
            }, ct);
            function ct() {
                this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, 
                this.dmq1 = null, this.coeff = null;
            }
            var ft = {
                md2: "3020300c06082a864886f70d020205000410",
                md5: "3020300c06082a864886f70d020505000410",
                sha1: "3021300906052b0e03021a05000414",
                sha224: "302d300d06096086480165030402040500041c",
                sha256: "3031300d060960864801650304020105000420",
                sha384: "3041300d060960864801650304020205000430",
                sha512: "3051300d060960864801650304020305000440",
                ripemd160: "3021300906052b2403020105000414"
            };
            var lt = {};
            lt.lang = {
                extend: function(t, e, i) {
                    if (!e || !t) throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
                    function r() {}
                    if (r.prototype = e.prototype, t.prototype = new r(), (t.prototype.constructor = t).superclass = e.prototype, 
                    e.prototype.constructor == Object.prototype.constructor && (e.prototype.constructor = e), 
                    i) {
                        var n;
                        for (n in i) t.prototype[n] = i[n];
                        var s = function() {}, o = [ "toString", "valueOf" ];
                        try {
                            /MSIE/.test(navigator.userAgent) && (s = function(t, e) {
                                for (n = 0; n < o.length; n += 1) {
                                    var i = o[n], r = e[i];
                                    "function" == typeof r && r != Object.prototype[i] && (t[i] = r);
                                }
                            });
                        } catch (t) {}
                        s(t.prototype, i);
                    }
                }
            };
            var pt = {};
            void 0 !== pt.asn1 && pt.asn1 || (pt.asn1 = {}), pt.asn1.ASN1Util = new function() {
                this.integerToByteHex = function(t) {
                    var e = t.toString(16);
                    return e.length % 2 == 1 && (e = "0" + e), e;
                }, this.bigIntToMinTwosComplementsHex = function(t) {
                    var e = t.toString(16);
                    if ("-" != e.substr(0, 1)) e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e); else {
                        var i = e.substr(1).length;
                        i % 2 == 1 ? i += 1 : e.match(/^[0-7]/) || (i += 2);
                        for (var r = "", n = 0; n < i; n++) r += "f";
                        e = new M(r, 16).xor(t).add(M.ONE).toString(16).replace(/^-/, "");
                    }
                    return e;
                }, this.getPEMStringFromHex = function(t, e) {
                    return hextopem(t, e);
                }, this.newObject = function(t) {
                    var e = pt.asn1, i = e.DERBoolean, r = e.DERInteger, n = e.DERBitString, s = e.DEROctetString, o = e.DERNull, a = e.DERObjectIdentifier, h = e.DEREnumerated, u = e.DERUTF8String, c = e.DERNumericString, f = e.DERPrintableString, l = e.DERTeletexString, p = e.DERIA5String, d = e.DERUTCTime, g = e.DERGeneralizedTime, _ = e.DERSequence, v = e.DERSet, m = e.DERTaggedObject, y = e.ASN1Util.newObject, b = Object.keys(t);
                    if (1 != b.length) throw "key of param shall be only one.";
                    var E = b[0];
                    if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + E + ":")) throw "undefined key: " + E;
                    if ("bool" == E) return new i(t[E]);
                    if ("int" == E) return new r(t[E]);
                    if ("bitstr" == E) return new n(t[E]);
                    if ("octstr" == E) return new s(t[E]);
                    if ("null" == E) return new o(t[E]);
                    if ("oid" == E) return new a(t[E]);
                    if ("enum" == E) return new h(t[E]);
                    if ("utf8str" == E) return new u(t[E]);
                    if ("numstr" == E) return new c(t[E]);
                    if ("prnstr" == E) return new f(t[E]);
                    if ("telstr" == E) return new l(t[E]);
                    if ("ia5str" == E) return new p(t[E]);
                    if ("utctime" == E) return new d(t[E]);
                    if ("gentime" == E) return new g(t[E]);
                    if ("seq" == E) {
                        for (var T = t[E], S = [], D = 0; D < T.length; D++) {
                            var w = y(T[D]);
                            S.push(w);
                        }
                        return new _({
                            array: S
                        });
                    }
                    if ("set" == E) {
                        for (T = t[E], S = [], D = 0; D < T.length; D++) {
                            w = y(T[D]);
                            S.push(w);
                        }
                        return new v({
                            array: S
                        });
                    }
                    if ("tag" == E) {
                        var B = t[E];
                        if ("[object Array]" === Object.prototype.toString.call(B) && 3 == B.length) {
                            var O = y(B[2]);
                            return new m({
                                tag: B[0],
                                explicit: B[1],
                                obj: O
                            });
                        }
                        var A = {};
                        if (void 0 !== B.explicit && (A.explicit = B.explicit), void 0 !== B.tag && (A.tag = B.tag), 
                        void 0 === B.obj) throw "obj shall be specified for 'tag'.";
                        return A.obj = y(B.obj), new m(A);
                    }
                }, this.jsonToASN1HEX = function(t) {
                    return this.newObject(t).getEncodedHex();
                };
            }(), pt.asn1.ASN1Util.oidHexToInt = function(t) {
                for (var e = "", i = parseInt(t.substr(0, 2), 16), r = (e = Math.floor(i / 40) + "." + i % 40, 
                ""), n = 2; n < t.length; n += 2) {
                    var s = ("00000000" + parseInt(t.substr(n, 2), 16).toString(2)).slice(-8);
                    if (r += s.substr(1, 7), "0" == s.substr(0, 1)) e = e + "." + new M(r, 2).toString(10), 
                    r = "";
                }
                return e;
            }, pt.asn1.ASN1Util.oidIntToHex = function(t) {
                function a(t) {
                    var e = t.toString(16);
                    return 1 == e.length && (e = "0" + e), e;
                }
                function e(t) {
                    var e = "", i = new M(t, 10).toString(2), r = 7 - i.length % 7;
                    7 == r && (r = 0);
                    for (var n = "", s = 0; s < r; s++) n += "0";
                    for (i = n + i, s = 0; s < i.length - 1; s += 7) {
                        var o = i.substr(s, 7);
                        s != i.length - 7 && (o = "1" + o), e += a(parseInt(o, 2));
                    }
                    return e;
                }
                if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
                var i = "", r = t.split("."), n = 40 * parseInt(r[0]) + parseInt(r[1]);
                i += a(n), r.splice(0, 2);
                for (var s = 0; s < r.length; s++) i += e(r[s]);
                return i;
            }, pt.asn1.ASN1Object = function() {
                this.getLengthHexFromValue = function() {
                    if (void 0 === this.hV || null == this.hV) throw "this.hV is null or undefined.";
                    if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
                    var t = this.hV.length / 2, e = t.toString(16);
                    if (e.length % 2 == 1 && (e = "0" + e), t < 128) return e;
                    var i = e.length / 2;
                    if (15 < i) throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
                    return (128 + i).toString(16) + e;
                }, this.getEncodedHex = function() {
                    return null != this.hTLV && !this.isModified || (this.hV = this.getFreshValueHex(), 
                    this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, 
                    this.isModified = !1), this.hTLV;
                }, this.getValueHex = function() {
                    return this.getEncodedHex(), this.hV;
                }, this.getFreshValueHex = function() {
                    return "";
                };
            }, pt.asn1.DERAbstractString = function(t) {
                pt.asn1.DERAbstractString.superclass.constructor.call(this), this.getString = function() {
                    return this.s;
                }, this.setString = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(this.s);
                }, this.setStringHex = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t;
                }, this.getFreshValueHex = function() {
                    return this.hV;
                }, void 0 !== t && ("string" == typeof t ? this.setString(t) : void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex && this.setStringHex(t.hex));
            }, lt.lang.extend(pt.asn1.DERAbstractString, pt.asn1.ASN1Object), pt.asn1.DERAbstractTime = function(t) {
                pt.asn1.DERAbstractTime.superclass.constructor.call(this), this.localDateToUTC = function(t) {
                    return utc = t.getTime() + 6e4 * t.getTimezoneOffset(), new Date(utc);
                }, this.formatDate = function(t, e, i) {
                    var r = this.zeroPadding, n = this.localDateToUTC(t), s = String(n.getFullYear());
                    "utc" == e && (s = s.substr(2, 2));
                    var o = s + r(String(n.getMonth() + 1), 2) + r(String(n.getDate()), 2) + r(String(n.getHours()), 2) + r(String(n.getMinutes()), 2) + r(String(n.getSeconds()), 2);
                    if (!0 === i) {
                        var a = n.getMilliseconds();
                        if (0 != a) {
                            var h = r(String(a), 3);
                            o = o + "." + (h = h.replace(/[0]+$/, ""));
                        }
                    }
                    return o + "Z";
                }, this.zeroPadding = function(t, e) {
                    return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t;
                }, this.getString = function() {
                    return this.s;
                }, this.setString = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(t);
                }, this.setByDateValue = function(t, e, i, r, n, s) {
                    var o = new Date(Date.UTC(t, e - 1, i, r, n, s, 0));
                    this.setByDate(o);
                }, this.getFreshValueHex = function() {
                    return this.hV;
                };
            }, lt.lang.extend(pt.asn1.DERAbstractTime, pt.asn1.ASN1Object), pt.asn1.DERAbstractStructured = function(t) {
                pt.asn1.DERAbstractString.superclass.constructor.call(this), this.setByASN1ObjectArray = function(t) {
                    this.hTLV = null, this.isModified = !0, this.asn1Array = t;
                }, this.appendASN1Object = function(t) {
                    this.hTLV = null, this.isModified = !0, this.asn1Array.push(t);
                }, this.asn1Array = new Array(), void 0 !== t && void 0 !== t.array && (this.asn1Array = t.array);
            }, lt.lang.extend(pt.asn1.DERAbstractStructured, pt.asn1.ASN1Object), pt.asn1.DERBoolean = function() {
                pt.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff";
            }, lt.lang.extend(pt.asn1.DERBoolean, pt.asn1.ASN1Object), pt.asn1.DERInteger = function(t) {
                pt.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function(t) {
                    this.hTLV = null, this.isModified = !0, this.hV = pt.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t);
                }, this.setByInteger = function(t) {
                    var e = new M(String(t), 10);
                    this.setByBigInteger(e);
                }, this.setValueHex = function(t) {
                    this.hV = t;
                }, this.getFreshValueHex = function() {
                    return this.hV;
                }, void 0 !== t && (void 0 !== t.bigint ? this.setByBigInteger(t.bigint) : void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex));
            }, lt.lang.extend(pt.asn1.DERInteger, pt.asn1.ASN1Object), pt.asn1.DERBitString = function(t) {
                if (void 0 !== t && void 0 !== t.obj) {
                    var e = pt.asn1.ASN1Util.newObject(t.obj);
                    t.hex = "00" + e.getEncodedHex();
                }
                pt.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(t) {
                    this.hTLV = null, this.isModified = !0, this.hV = t;
                }, this.setUnusedBitsAndHexValue = function(t, e) {
                    if (t < 0 || 7 < t) throw "unused bits shall be from 0 to 7: u = " + t;
                    var i = "0" + t;
                    this.hTLV = null, this.isModified = !0, this.hV = i + e;
                }, this.setByBinaryString = function(t) {
                    var e = 8 - (t = t.replace(/0+$/, "")).length % 8;
                    8 == e && (e = 0);
                    for (var i = 0; i <= e; i++) t += "0";
                    var r = "";
                    for (i = 0; i < t.length - 1; i += 8) {
                        var n = t.substr(i, 8), s = parseInt(n, 2).toString(16);
                        1 == s.length && (s = "0" + s), r += s;
                    }
                    this.hTLV = null, this.isModified = !0, this.hV = "0" + e + r;
                }, this.setByBooleanArray = function(t) {
                    for (var e = "", i = 0; i < t.length; i++) 1 == t[i] ? e += "1" : e += "0";
                    this.setByBinaryString(e);
                }, this.newFalseArray = function(t) {
                    for (var e = new Array(t), i = 0; i < t; i++) e[i] = !1;
                    return e;
                }, this.getFreshValueHex = function() {
                    return this.hV;
                }, void 0 !== t && ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : void 0 !== t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : void 0 !== t.bin ? this.setByBinaryString(t.bin) : void 0 !== t.array && this.setByBooleanArray(t.array));
            }, lt.lang.extend(pt.asn1.DERBitString, pt.asn1.ASN1Object), pt.asn1.DEROctetString = function(t) {
                if (void 0 !== t && void 0 !== t.obj) {
                    var e = pt.asn1.ASN1Util.newObject(t.obj);
                    t.hex = e.getEncodedHex();
                }
                pt.asn1.DEROctetString.superclass.constructor.call(this, t), this.hT = "04";
            }, lt.lang.extend(pt.asn1.DEROctetString, pt.asn1.DERAbstractString), pt.asn1.DERNull = function() {
                pt.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500";
            }, lt.lang.extend(pt.asn1.DERNull, pt.asn1.ASN1Object), pt.asn1.DERObjectIdentifier = function(t) {
                function a(t) {
                    var e = t.toString(16);
                    return 1 == e.length && (e = "0" + e), e;
                }
                function s(t) {
                    var e = "", i = new M(t, 10).toString(2), r = 7 - i.length % 7;
                    7 == r && (r = 0);
                    for (var n = "", s = 0; s < r; s++) n += "0";
                    for (i = n + i, s = 0; s < i.length - 1; s += 7) {
                        var o = i.substr(s, 7);
                        s != i.length - 7 && (o = "1" + o), e += a(parseInt(o, 2));
                    }
                    return e;
                }
                pt.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t;
                }, this.setValueOidString = function(t) {
                    if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
                    var e = "", i = t.split("."), r = 40 * parseInt(i[0]) + parseInt(i[1]);
                    e += a(r), i.splice(0, 2);
                    for (var n = 0; n < i.length; n++) e += s(i[n]);
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = e;
                }, this.setValueName = function(t) {
                    var e = pt.asn1.x509.OID.name2oid(t);
                    if ("" === e) throw "DERObjectIdentifier oidName undefined: " + t;
                    this.setValueOidString(e);
                }, this.getFreshValueHex = function() {
                    return this.hV;
                }, void 0 !== t && ("string" == typeof t ? t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t) : void 0 !== t.oid ? this.setValueOidString(t.oid) : void 0 !== t.hex ? this.setValueHex(t.hex) : void 0 !== t.name && this.setValueName(t.name));
            }, lt.lang.extend(pt.asn1.DERObjectIdentifier, pt.asn1.ASN1Object), pt.asn1.DEREnumerated = function(t) {
                pt.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function(t) {
                    this.hTLV = null, this.isModified = !0, this.hV = pt.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t);
                }, this.setByInteger = function(t) {
                    var e = new M(String(t), 10);
                    this.setByBigInteger(e);
                }, this.setValueHex = function(t) {
                    this.hV = t;
                }, this.getFreshValueHex = function() {
                    return this.hV;
                }, void 0 !== t && (void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex));
            }, lt.lang.extend(pt.asn1.DEREnumerated, pt.asn1.ASN1Object), pt.asn1.DERUTF8String = function(t) {
                pt.asn1.DERUTF8String.superclass.constructor.call(this, t), this.hT = "0c";
            }, lt.lang.extend(pt.asn1.DERUTF8String, pt.asn1.DERAbstractString), pt.asn1.DERNumericString = function(t) {
                pt.asn1.DERNumericString.superclass.constructor.call(this, t), this.hT = "12";
            }, lt.lang.extend(pt.asn1.DERNumericString, pt.asn1.DERAbstractString), pt.asn1.DERPrintableString = function(t) {
                pt.asn1.DERPrintableString.superclass.constructor.call(this, t), this.hT = "13";
            }, lt.lang.extend(pt.asn1.DERPrintableString, pt.asn1.DERAbstractString), pt.asn1.DERTeletexString = function(t) {
                pt.asn1.DERTeletexString.superclass.constructor.call(this, t), this.hT = "14";
            }, lt.lang.extend(pt.asn1.DERTeletexString, pt.asn1.DERAbstractString), pt.asn1.DERIA5String = function(t) {
                pt.asn1.DERIA5String.superclass.constructor.call(this, t), this.hT = "16";
            }, lt.lang.extend(pt.asn1.DERIA5String, pt.asn1.DERAbstractString), pt.asn1.DERUTCTime = function(t) {
                pt.asn1.DERUTCTime.superclass.constructor.call(this, t), this.hT = "17", this.setByDate = function(t) {
                    this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "utc"), 
                    this.hV = stohex(this.s);
                }, this.getFreshValueHex = function() {
                    return void 0 === this.date && void 0 === this.s && (this.date = new Date(), this.s = this.formatDate(this.date, "utc"), 
                    this.hV = stohex(this.s)), this.hV;
                }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date));
            }, lt.lang.extend(pt.asn1.DERUTCTime, pt.asn1.DERAbstractTime), pt.asn1.DERGeneralizedTime = function(t) {
                pt.asn1.DERGeneralizedTime.superclass.constructor.call(this, t), this.hT = "18", 
                this.withMillis = !1, this.setByDate = function(t) {
                    this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "gen", this.withMillis), 
                    this.hV = stohex(this.s);
                }, this.getFreshValueHex = function() {
                    return void 0 === this.date && void 0 === this.s && (this.date = new Date(), this.s = this.formatDate(this.date, "gen", this.withMillis), 
                    this.hV = stohex(this.s)), this.hV;
                }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date), 
                !0 === t.millis && (this.withMillis = !0));
            }, lt.lang.extend(pt.asn1.DERGeneralizedTime, pt.asn1.DERAbstractTime), pt.asn1.DERSequence = function(t) {
                pt.asn1.DERSequence.superclass.constructor.call(this, t), this.hT = "30", this.getFreshValueHex = function() {
                    for (var t = "", e = 0; e < this.asn1Array.length; e++) {
                        t += this.asn1Array[e].getEncodedHex();
                    }
                    return this.hV = t, this.hV;
                };
            }, lt.lang.extend(pt.asn1.DERSequence, pt.asn1.DERAbstractStructured), pt.asn1.DERSet = function(t) {
                pt.asn1.DERSet.superclass.constructor.call(this, t), this.hT = "31", this.sortFlag = !0, 
                this.getFreshValueHex = function() {
                    for (var t = new Array(), e = 0; e < this.asn1Array.length; e++) {
                        var i = this.asn1Array[e];
                        t.push(i.getEncodedHex());
                    }
                    return 1 == this.sortFlag && t.sort(), this.hV = t.join(""), this.hV;
                }, void 0 !== t && void 0 !== t.sortflag && 0 == t.sortflag && (this.sortFlag = !1);
            }, lt.lang.extend(pt.asn1.DERSet, pt.asn1.DERAbstractStructured), pt.asn1.DERTaggedObject = function(t) {
                pt.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", 
                this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function(t, e, i) {
                    this.hT = e, this.isExplicit = t, this.asn1Object = i, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), 
                    this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = i.getEncodedHex(), 
                    this.hTLV = this.hTLV.replace(/^../, e), this.isModified = !1);
                }, this.getFreshValueHex = function() {
                    return this.hV;
                }, void 0 !== t && (void 0 !== t.tag && (this.hT = t.tag), void 0 !== t.explicit && (this.isExplicit = t.explicit), 
                void 0 !== t.obj && (this.asn1Object = t.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
            }, lt.lang.extend(pt.asn1.DERTaggedObject, pt.asn1.ASN1Object);
            var dt, gt, _t, vt = (p(gt = yt, _t = dt = ut), gt.prototype = null === _t ? Object.create(_t) : (mt.prototype = _t.prototype, 
            new mt()), yt.prototype.parseKey = function(t) {
                try {
                    var e = 0, i = 0, r = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t) ? g(t) : _.unarmor(t), n = B.decode(r);
                    if (3 === n.sub.length && (n = n.sub[2].sub[0]), 9 === n.sub.length) {
                        e = n.sub[1].getHexStringValue(), this.n = F(e, 16), i = n.sub[2].getHexStringValue(), 
                        this.e = parseInt(i, 16);
                        var s = n.sub[3].getHexStringValue();
                        this.d = F(s, 16);
                        var o = n.sub[4].getHexStringValue();
                        this.p = F(o, 16);
                        var a = n.sub[5].getHexStringValue();
                        this.q = F(a, 16);
                        var h = n.sub[6].getHexStringValue();
                        this.dmp1 = F(h, 16);
                        var u = n.sub[7].getHexStringValue();
                        this.dmq1 = F(u, 16);
                        var c = n.sub[8].getHexStringValue();
                        this.coeff = F(c, 16);
                    } else {
                        if (2 !== n.sub.length) return !1;
                        var f = n.sub[1].sub[0];
                        e = f.sub[0].getHexStringValue(), this.n = F(e, 16), i = f.sub[1].getHexStringValue(), 
                        this.e = parseInt(i, 16);
                    }
                    return !0;
                } catch (t) {
                    return !1;
                }
            }, yt.prototype.getPrivateBaseKey = function() {
                var t = {
                    array: [ new pt.asn1.DERInteger({
                        int: 0
                    }), new pt.asn1.DERInteger({
                        bigint: this.n
                    }), new pt.asn1.DERInteger({
                        int: this.e
                    }), new pt.asn1.DERInteger({
                        bigint: this.d
                    }), new pt.asn1.DERInteger({
                        bigint: this.p
                    }), new pt.asn1.DERInteger({
                        bigint: this.q
                    }), new pt.asn1.DERInteger({
                        bigint: this.dmp1
                    }), new pt.asn1.DERInteger({
                        bigint: this.dmq1
                    }), new pt.asn1.DERInteger({
                        bigint: this.coeff
                    }) ]
                };
                return new pt.asn1.DERSequence(t).getEncodedHex();
            }, yt.prototype.getPrivateBaseKeyB64 = function() {
                return c(this.getPrivateBaseKey());
            }, yt.prototype.getPublicBaseKey = function() {
                var t = new pt.asn1.DERSequence({
                    array: [ new pt.asn1.DERObjectIdentifier({
                        oid: "1.2.840.113549.1.1.1"
                    }), new pt.asn1.DERNull() ]
                }), e = new pt.asn1.DERSequence({
                    array: [ new pt.asn1.DERInteger({
                        bigint: this.n
                    }), new pt.asn1.DERInteger({
                        int: this.e
                    }) ]
                }), i = new pt.asn1.DERBitString({
                    hex: "00" + e.getEncodedHex()
                });
                return new pt.asn1.DERSequence({
                    array: [ t, i ]
                }).getEncodedHex();
            }, yt.prototype.getPublicBaseKeyB64 = function() {
                return c(this.getPublicBaseKey());
            }, yt.wordwrap = function(t, e) {
                if (!t) return t;
                var i = "(.{1," + (e = e || 64) + "})( +|$\n?)|(.{1," + e + "})";
                return t.match(RegExp(i, "g")).join("\n");
            }, yt.prototype.getPrivateKey = function() {
                var t = "-----BEGIN RSA PRIVATE KEY-----\n";
                return t += yt.wordwrap(this.getPrivateBaseKeyB64()) + "\n", t += "-----END RSA PRIVATE KEY-----";
            }, yt.prototype.getPublicKey = function() {
                var t = "-----BEGIN PUBLIC KEY-----\n";
                return t += yt.wordwrap(this.getPublicBaseKeyB64()) + "\n", t += "-----END PUBLIC KEY-----";
            }, yt.hasPublicKeyProperty = function(t) {
                return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e");
            }, yt.hasPrivateKeyProperty = function(t) {
                return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff");
            }, yt.prototype.parsePropertiesFrom = function(t) {
                this.n = t.n, this.e = t.e, t.hasOwnProperty("d") && (this.d = t.d, this.p = t.p, 
                this.q = t.q, this.dmp1 = t.dmp1, this.dmq1 = t.dmq1, this.coeff = t.coeff);
            }, yt);
            function mt() {
                this.constructor = gt;
            }
            function yt(t) {
                var e = dt.call(this) || this;
                return t && ("string" == typeof t ? e.parseKey(t) : (yt.hasPrivateKeyProperty(t) || yt.hasPublicKeyProperty(t)) && e.parsePropertiesFrom(t)), 
                e;
            }
            var bt = (Et.prototype.setKey = function(t) {
                this.log && this.key && console.warn("A key was already set, overriding existing."), 
                this.key = new vt(t);
            }, Et.prototype.setPrivateKey = function(t) {
                this.setKey(t);
            }, Et.prototype.setPublicKey = function(t) {
                this.setKey(t);
            }, Et.prototype.decrypt = function(t) {
                try {
                    return this.getKey().decrypt(f(t));
                } catch (t) {
                    return !1;
                }
            }, Et.prototype.encrypt = function(t) {
                try {
                    return c(this.getKey().encrypt(t));
                } catch (t) {
                    return !1;
                }
            }, Et.prototype.sign = function(t, e, i) {
                try {
                    return c(this.getKey().sign(t, e, i));
                } catch (t) {
                    return !1;
                }
            }, Et.prototype.verify = function(t, e, i) {
                try {
                    return this.getKey().verify(t, f(e), i);
                } catch (t) {
                    return !1;
                }
            }, Et.prototype.getKey = function(t) {
                if (!this.key) {
                    if (this.key = new vt(), t && "[object Function]" === {}.toString.call(t)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                    this.key.generate(this.default_key_size, this.default_public_exponent);
                }
                return this.key;
            }, Et.prototype.getPrivateKey = function() {
                return this.getKey().getPrivateKey();
            }, Et.prototype.getPrivateKeyB64 = function() {
                return this.getKey().getPrivateBaseKeyB64();
            }, Et.prototype.getPublicKey = function() {
                return this.getKey().getPublicKey();
            }, Et.prototype.getPublicKeyB64 = function() {
                return this.getKey().getPublicBaseKeyB64();
            }, Et.version = "3.0.0-rc.1", Et);
            function Et(t) {
                t = t || {}, this.default_key_size = parseInt(t.default_key_size, 10) || 1024, this.default_public_exponent = t.default_public_exponent || "010001", 
                this.log = t.log || !1, this.key = null;
            }
            window.JSEncrypt = bt, t.JSEncrypt = bt, t.default = bt, Object.defineProperty(t, "__esModule", {
                value: !0
            });
        })(e);
    },
    56: function(t, e, i) {
        var r;
        r = function(h) {
            return function(n) {
                var t = h, e = t.lib, i = e.WordArray, r = e.Hasher, s = t.algo, o = [], y = [];
                !function() {
                    function t(t) {
                        for (var e = n.sqrt(t), i = 2; i <= e; i++) if (!(t % i)) return;
                        return 1;
                    }
                    function e(t) {
                        return 4294967296 * (t - (0 | t)) | 0;
                    }
                    for (var i = 2, r = 0; r < 64; ) t(i) && (r < 8 && (o[r] = e(n.pow(i, .5))), y[r] = e(n.pow(i, 1 / 3)), 
                    r++), i++;
                }();
                var b = [], a = s.SHA256 = r.extend({
                    _doReset: function() {
                        this._hash = new i.init(o.slice(0));
                    },
                    _doProcessBlock: function(t, e) {
                        for (var i = this._hash.words, r = i[0], n = i[1], s = i[2], o = i[3], a = i[4], h = i[5], u = i[6], c = i[7], f = 0; f < 64; f++) {
                            if (f < 16) b[f] = 0 | t[e + f]; else {
                                var l = b[f - 15], p = (l << 25 | l >>> 7) ^ (l << 14 | l >>> 18) ^ l >>> 3, d = b[f - 2], g = (d << 15 | d >>> 17) ^ (d << 13 | d >>> 19) ^ d >>> 10;
                                b[f] = p + b[f - 7] + g + b[f - 16];
                            }
                            var _ = r & n ^ r & s ^ n & s, v = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22), m = c + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & h ^ ~a & u) + y[f] + b[f];
                            c = u, u = h, h = a, a = o + m | 0, o = s, s = n, n = r, r = m + (v + _) | 0;
                        }
                        i[0] = i[0] + r | 0, i[1] = i[1] + n | 0, i[2] = i[2] + s | 0, i[3] = i[3] + o | 0, 
                        i[4] = i[4] + a | 0, i[5] = i[5] + h | 0, i[6] = i[6] + u | 0, i[7] = i[7] + c | 0;
                    },
                    _doFinalize: function() {
                        var t = this._data, e = t.words, i = 8 * this._nDataBytes, r = 8 * t.sigBytes;
                        return e[r >>> 5] |= 128 << 24 - r % 32, e[14 + (64 + r >>> 9 << 4)] = n.floor(i / 4294967296), 
                        e[15 + (64 + r >>> 9 << 4)] = i, t.sigBytes = 4 * e.length, this._process(), this._hash;
                    },
                    clone: function() {
                        var t = r.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                });
                t.SHA256 = r._createHelper(a), t.HmacSHA256 = r._createHmacHelper(a);
            }(Math), h.SHA256;
        }, t.exports = r(i(57));
    },
    57: function(t, e, i) {
        var r;
        r = function() {
            var c, i, t, e, r, f, n, s, o, a, h, u, l = l || (c = Math, i = Object.create || function(t) {
                var e;
                return p.prototype = t, e = new p(), p.prototype = null, e;
            }, e = (t = {}).lib = {}, r = e.Base = {
                extend: function(t) {
                    var e = i(this);
                    return t && e.mixIn(t), e.hasOwnProperty("init") && this.init !== e.init || (e.init = function() {
                        e.$super.init.apply(this, arguments);
                    }), (e.init.prototype = e).$super = this, e;
                },
                create: function() {
                    var t = this.extend();
                    return t.init.apply(t, arguments), t;
                },
                init: function() {},
                mixIn: function(t) {
                    for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                    t.hasOwnProperty("toString") && (this.toString = t.toString);
                },
                clone: function() {
                    return this.init.prototype.extend(this);
                }
            }, f = e.WordArray = r.extend({
                init: function(t, e) {
                    t = this.words = t || [], this.sigBytes = null != e ? e : 4 * t.length;
                },
                toString: function(t) {
                    return (t || s).stringify(this);
                },
                concat: function(t) {
                    var e = this.words, i = t.words, r = this.sigBytes, n = t.sigBytes;
                    if (this.clamp(), r % 4) for (var s = 0; s < n; s++) {
                        var o = i[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                        e[r + s >>> 2] |= o << 24 - (r + s) % 4 * 8;
                    } else for (s = 0; s < n; s += 4) e[r + s >>> 2] = i[s >>> 2];
                    return this.sigBytes += n, this;
                },
                clamp: function() {
                    var t = this.words, e = this.sigBytes;
                    t[e >>> 2] &= 4294967295 << 32 - e % 4 * 8, t.length = c.ceil(e / 4);
                },
                clone: function() {
                    var t = r.clone.call(this);
                    return t.words = this.words.slice(0), t;
                },
                random: function(t) {
                    function e(e) {
                        e = e;
                        var i = 987654321, r = 4294967295;
                        return function() {
                            var t = ((i = 36969 * (65535 & i) + (i >> 16) & r) << 16) + (e = 18e3 * (65535 & e) + (e >> 16) & r) & r;
                            return t /= 4294967296, (t += .5) * (.5 < c.random() ? 1 : -1);
                        };
                    }
                    for (var i, r = [], n = 0; n < t; n += 4) {
                        var s = e(4294967296 * (i || c.random()));
                        i = 987654071 * s(), r.push(4294967296 * s() | 0);
                    }
                    return new f.init(r, t);
                }
            }), n = t.enc = {}, s = n.Hex = {
                stringify: function(t) {
                    for (var e = t.words, i = t.sigBytes, r = [], n = 0; n < i; n++) {
                        var s = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                        r.push((s >>> 4).toString(16)), r.push((15 & s).toString(16));
                    }
                    return r.join("");
                },
                parse: function(t) {
                    for (var e = t.length, i = [], r = 0; r < e; r += 2) i[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4;
                    return new f.init(i, e / 2);
                }
            }, o = n.Latin1 = {
                stringify: function(t) {
                    for (var e = t.words, i = t.sigBytes, r = [], n = 0; n < i; n++) {
                        var s = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                        r.push(String.fromCharCode(s));
                    }
                    return r.join("");
                },
                parse: function(t) {
                    for (var e = t.length, i = [], r = 0; r < e; r++) i[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
                    return new f.init(i, e);
                }
            }, a = n.Utf8 = {
                stringify: function(t) {
                    try {
                        return decodeURIComponent(escape(o.stringify(t)));
                    } catch (t) {
                        throw new Error("Malformed UTF-8 data");
                    }
                },
                parse: function(t) {
                    return o.parse(unescape(encodeURIComponent(t)));
                }
            }, h = e.BufferedBlockAlgorithm = r.extend({
                reset: function() {
                    this._data = new f.init(), this._nDataBytes = 0;
                },
                _append: function(t) {
                    "string" == typeof t && (t = a.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes;
                },
                _process: function(t) {
                    var e = this._data, i = e.words, r = e.sigBytes, n = this.blockSize, s = r / (4 * n), o = (s = t ? c.ceil(s) : c.max((0 | s) - this._minBufferSize, 0)) * n, a = c.min(4 * o, r);
                    if (o) {
                        for (var h = 0; h < o; h += n) this._doProcessBlock(i, h);
                        var u = i.splice(0, o);
                        e.sigBytes -= a;
                    }
                    return new f.init(u, a);
                },
                clone: function() {
                    var t = r.clone.call(this);
                    return t._data = this._data.clone(), t;
                },
                _minBufferSize: 0
            }), e.Hasher = h.extend({
                cfg: r.extend(),
                init: function(t) {
                    this.cfg = this.cfg.extend(t), this.reset();
                },
                reset: function() {
                    h.reset.call(this), this._doReset();
                },
                update: function(t) {
                    return this._append(t), this._process(), this;
                },
                finalize: function(t) {
                    return t && this._append(t), this._doFinalize();
                },
                blockSize: 16,
                _createHelper: function(i) {
                    return function(t, e) {
                        return new i.init(e).finalize(t);
                    };
                },
                _createHmacHelper: function(i) {
                    return function(t, e) {
                        return new u.HMAC.init(i, e).finalize(t);
                    };
                }
            }), u = t.algo = {}, t);
            function p() {}
            return l;
        }, t.exports = r();
    }
}, [ 282 ]);

pbjsChunk([ 192 ], {
    354: function(e, n, t) {
        e.exports = t(355);
    },
    355: function(e, n, t) {
        "use strict";
        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t(8), r = t(0), o = t(5), a = t(7).default, u = o.EVENTS.BID_REQUESTED, c = o.EVENTS.BID_TIMEOUT, d = o.EVENTS.BID_RESPONSE, l = o.EVENTS.BID_WON, f = {
            nonInteraction: !0
        }, p = [], b = null, m = !0, v = "Prebid.js Bids", y = 0, g = !1, T = null, w = null, E = !0, S = {};
        function h() {
            if (m && "function" == typeof window[b]) {
                for (var e = 0; e < p.length; e++) p[e].call();
                p.push = function(e) {
                    e.call();
                }, m = !1;
            }
            r.logMessage("event count sent to GA: " + y);
        }
        function D(e) {
            return e ? Math.floor(100 * e) : 0;
        }
        function $(e) {
            return T ? T(e) : (0 <= e && e < .5 ? n = "$0-0.5" : .5 <= e && e < 1 ? n = "$0.5-1" : 1 <= e && e < 1.5 ? n = "$1-1.5" : 1.5 <= e && e < 2 ? n = "$1.5-2" : 2 <= e && e < 2.5 ? n = "$2-2.5" : 2.5 <= e && e < 3 ? n = "$2.5-3" : 3 <= e && e < 4 ? n = "$3-4" : 4 <= e && e < 6 ? n = "$4-6" : 6 <= e && e < 8 ? n = "$6-8" : 8 <= e && (n = "$8 above"), 
            n);
            var n;
        }
        function C(e) {
            e && e.bidderCode && p.push(function() {
                y++, window[b](w, "event", v, "Requests", e.bidderCode, 1, f);
            }), h();
        }
        function M(r) {
            r && r.bidderCode && p.push(function() {
                var e, n, t = D(r.cpm), o = r.bidderCode;
                if (void 0 !== r.timeToRespond && g) {
                    y++;
                    var i = (0 <= (e = r.timeToRespond) && e < 200 ? n = "0-200ms" : 200 <= e && e < 300 ? n = "0200-300ms" : 300 <= e && e < 400 ? n = "0300-400ms" : 400 <= e && e < 500 ? n = "0400-500ms" : 500 <= e && e < 600 ? n = "0500-600ms" : 600 <= e && e < 800 ? n = "0600-800ms" : 800 <= e && e < 1e3 ? n = "0800-1000ms" : 1e3 <= e && e < 1200 ? n = "1000-1200ms" : 1200 <= e && e < 1500 ? n = "1200-1500ms" : 1500 <= e && e < 2e3 ? n = "1500-2000ms" : 2e3 <= e && (n = "2000ms above"), 
                    n);
                    window[b](w, "event", "Prebid.js Load Time Distribution", i, o, 1, f);
                }
                if (0 < r.cpm) {
                    y += 2;
                    var s = $(r.cpm);
                    g && (y++, window[b](w, "event", "Prebid.js CPM Distribution", s, o, 1, f)), window[b](w, "event", v, "Bids", o, t, f), 
                    window[b](w, "event", v, "Bid Load Time", o, r.timeToRespond, f);
                }
            }), h();
        }
        function N(e) {
            p.push(function() {
                r._each(e, function(e) {
                    y++;
                    var n = e.bidder;
                    window[b](w, "event", v, "Timeouts", n, f);
                });
            }), h();
        }
        function _(e) {
            var n = D(e.cpm);
            p.push(function() {
                y++, window[b](w, "event", v, "Wins", e.bidderCode, n, f);
            }), h();
        }
        S.enableAnalytics = function(e) {
            var n = e.provider, t = e.options;
            b = n || "ga", w = t && t.trackerName ? t.trackerName + ".send" : "send", E = void 0 === t || void 0 === t.sampling || Math.random() < parseFloat(t.sampling), 
            t && void 0 !== t.global && (b = t.global), t && void 0 !== t.enableDistribution && (g = t.enableDistribution), 
            t && "function" == typeof t.cpmDistribution && (T = t.cpmDistribution);
            if (E) {
                var o = s.getEvents();
                r._each(o, function(e) {
                    if ("object" === i(e)) {
                        var n = e.args;
                        if (e.eventType === u) C(n); else if (e.eventType === d) M(n); else if (e.eventType === c) {
                            N(n);
                        } else e.eventType === l && _(n);
                    }
                }), s.on(u, function(e) {
                    C(e);
                }), s.on(d, function(e) {
                    M(e);
                }), s.on(c, function(e) {
                    N(e);
                }), s.on(l, function(e) {
                    _(e);
                });
            } else r.logMessage("Prebid.js google analytics disabled by sampling");
            this.enableAnalytics = function() {
                return r.logMessage("Analytics adapter already enabled, unnecessary call to `enableAnalytics`.");
            };
        }, S.getTrackerSend = function() {
            return w;
        }, S.getCpmDistribution = $, a.registerAnalyticsAdapter({
            adapter: S,
            code: "ga"
        }), n.default = S;
    }
}, [ 354 ]);

pbjsChunk([ 121 ], {
    520: function(e, r, a) {
        e.exports = a(521);
    },
    521: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), a.d(r, "spec", function() {
            return x;
        });
        var h = a(0), i = a(1), f = a(2), I = a(3);
        function y(e) {
            return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        var E = "PubMatic: ", v = "USD", t = "nFIn8aLzbd", b = void 0, w = {
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
        }, s = {
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
        }, p = {
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
        }, c = {
            ICON: 1,
            LOGO: 2,
            IMAGE: 3
        }, l = [ {
            id: p.SPONSOREDBY.ID,
            required: !0,
            data: {
                type: 1
            }
        }, {
            id: p.TITLE.ID,
            required: !0
        }, {
            id: p.IMAGE.ID,
            required: !0
        } ], o = {
            1: "PMP",
            5: "PREF",
            6: "PMPG"
        }, T = 0, O = !1, d = {}, u = {};
        function D(e, r) {
            if (!h.isStr(r)) return r && h.logWarn(E + "Ignoring param key: " + e + ", expects string-value, found " + y(r)), 
            b;
            switch (e) {
              case "pmzoneid":
                return r.split(",").slice(0, 50).map(function(e) {
                    return e.trim();
                }).join();

              case "kadfloor":
              case "lat":
              case "lon":
                return parseFloat(r) || b;

              case "yob":
                return parseInt(r) || b;

              default:
                return r;
            }
        }
        function S(e) {
            var r;
            e.params.adUnit = "", e.params.adUnitIndex = "0", e.params.width = 0, e.params.height = 0, 
            e.params.adSlot = (r = e.params.adSlot, h.isStr(r) ? r.replace(/^\s+/g, "").replace(/\s+$/g, "") : "");
            var a = e.params.adSlot, i = a.split(":");
            if (a = i[0], 2 == i.length && (e.params.adUnitIndex = i[1]), i = a.split("@"), 
            e.params.adUnit = i[0], 1 < i.length) {
                if (2 != (i = i[1].split("x")).length) return void h.logWarn(E + "AdSlot Error: adSlot not in required format");
                e.params.width = parseInt(i[0], 10), e.params.height = parseInt(i[1], 10);
            } else if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(f.b) && e.mediaTypes.banner.hasOwnProperty("sizes")) {
                for (var s = 0, t = []; s < e.mediaTypes.banner.sizes.length; s++) 2 === e.mediaTypes.banner.sizes[s].length && t.push(e.mediaTypes.banner.sizes[s]);
                e.mediaTypes.banner.sizes = t, 1 <= e.mediaTypes.banner.sizes.length && (e.params.width = e.mediaTypes.banner.sizes[0][0], 
                e.params.height = e.mediaTypes.banner.sizes[0][1], e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1));
            }
        }
        function m(e, r, a) {
            var i, s = "Ignoring param key: " + e + ", expects " + a + ", found " + y(r);
            switch (a) {
              case n.BOOLEAN:
                i = h.isBoolean;
                break;

              case n.NUMBER:
                i = h.isNumber;
                break;

              case n.STRING:
                i = h.isStr;
                break;

              case n.ARRAY:
                i = h.isArray;
            }
            return i(r) ? r : (h.logWarn(E + s), b);
        }
        function Y(e) {
            var r, a, i, s = {
                assets: []
            };
            for (var t in e) {
                if (e.hasOwnProperty(t)) {
                    var n = {};
                    if (!(s.assets && 0 < s.assets.length && s.assets.hasOwnProperty(t))) switch (t) {
                      case p.TITLE.KEY:
                        e[t].len || e[t].length ? n = {
                            id: p.TITLE.ID,
                            required: e[t].required ? 1 : 0,
                            title: {
                                len: e[t].len || e[t].length,
                                ext: e[t].ext
                            }
                        } : h.logWarn(E + "Error: Title Length is required for native ad: " + JSON.stringify(e));
                        break;

                      case p.IMAGE.KEY:
                        e[t].sizes && 0 < e[t].sizes.length ? n = {
                            id: p.IMAGE.ID,
                            required: e[t].required ? 1 : 0,
                            img: {
                                type: c.IMAGE,
                                w: e[t].w || e[t].width || (e[t].sizes ? e[t].sizes[0] : b),
                                h: e[t].h || e[t].height || (e[t].sizes ? e[t].sizes[1] : b),
                                wmin: e[t].wmin || e[t].minimumWidth || (e[t].minsizes ? e[t].minsizes[0] : b),
                                hmin: e[t].hmin || e[t].minimumHeight || (e[t].minsizes ? e[t].minsizes[1] : b),
                                mimes: e[t].mimes,
                                ext: e[t].ext
                            }
                        } : h.logWarn(E + "Error: Image sizes is required for native ad: " + JSON.stringify(e));
                        break;

                      case p.ICON.KEY:
                        e[t].sizes && 0 < e[t].sizes.length ? n = {
                            id: p.ICON.ID,
                            required: e[t].required ? 1 : 0,
                            img: {
                                type: c.ICON,
                                w: e[t].w || e[t].width || (e[t].sizes ? e[t].sizes[0] : b),
                                h: e[t].h || e[t].height || (e[t].sizes ? e[t].sizes[1] : b)
                            }
                        } : h.logWarn(E + "Error: Icon sizes is required for native ad: " + JSON.stringify(e));
                        break;

                      case p.VIDEO.KEY:
                        n = {
                            id: p.VIDEO.ID,
                            required: e[t].required ? 1 : 0,
                            video: {
                                minduration: e[t].minduration,
                                maxduration: e[t].maxduration,
                                protocols: e[t].protocols,
                                mimes: e[t].mimes,
                                ext: e[t].ext
                            }
                        };
                        break;

                      case p.EXT.KEY:
                        n = {
                            id: p.EXT.ID,
                            required: e[t].required ? 1 : 0
                        };
                        break;

                      case p.LOGO.KEY:
                        n = {
                            id: p.LOGO.ID,
                            required: e[t].required ? 1 : 0,
                            img: {
                                type: c.LOGO,
                                w: e[t].w || e[t].width || (e[t].sizes ? e[t].sizes[0] : b),
                                h: e[t].h || e[t].height || (e[t].sizes ? e[t].sizes[1] : b)
                            }
                        };
                        break;

                      case p.SPONSOREDBY.KEY:
                      case p.BODY.KEY:
                      case p.RATING.KEY:
                      case p.LIKES.KEY:
                      case p.DOWNLOADS.KEY:
                      case p.PRICE.KEY:
                      case p.SALEPRICE.KEY:
                      case p.PHONE.KEY:
                      case p.ADDRESS.KEY:
                      case p.DESC2.KEY:
                      case p.DISPLAYURL.KEY:
                      case p.CTA.KEY:
                        r = u[t], a = e, i = r.KEY, n = {
                            id: r.ID,
                            required: a[i].required ? 1 : 0,
                            data: {
                                type: r.TYPE,
                                len: a[i].len,
                                ext: a[i].ext
                            }
                        };
                    }
                }
                n && n.id && (s.assets[s.assets.length] = n);
            }
            var o = l.length, d = 0;
            return l.forEach(function(e) {
                for (var r = s.assets.length, a = 0; a < r; a++) if (e.id == s.assets[a].id) {
                    d++;
                    break;
                }
            }), O = o != d, s;
        }
        function P(e) {
            var r, a = e.mediaTypes.banner.sizes, i = [];
            if (a !== b && h.isArray(a)) {
                if (r = {}, e.params.width || e.params.height) r.w = e.params.width, r.h = e.params.height; else {
                    if (0 === a.length) return r = b, h.logWarn(E + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), 
                    r;
                    r.w = parseInt(a[0][0], 10), r.h = parseInt(a[0][1], 10), a = a.splice(1, a.length - 1);
                }
                0 < a.length && (i = [], a.forEach(function(e) {
                    1 < e.length && i.push({
                        w: e[0],
                        h: e[1]
                    });
                }), 0 < i.length && (r.format = i)), r.pos = 0, r.topframe = h.inIframe() ? 0 : 1;
            } else h.logWarn(E + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), 
            r = b;
            return r;
        }
        function A(e) {
            var r, a = e.params.video;
            if (a !== b) {
                for (var i in r = {}, s) a.hasOwnProperty(i) && (r[i] = m(i, a[i], s[i]));
                h.isArray(e.mediaTypes.video.playerSize[0]) ? (r.w = parseInt(e.mediaTypes.video.playerSize[0][0], 10), 
                r.h = parseInt(e.mediaTypes.video.playerSize[0][1], 10)) : h.isNumber(e.mediaTypes.video.playerSize[0]) && (r.w = parseInt(e.mediaTypes.video.playerSize[0], 10), 
                r.h = parseInt(e.mediaTypes.video.playerSize[1], 10)), e.params.video.hasOwnProperty("skippable") && (r.ext = {
                    video_skippable: e.params.video.skippable ? 1 : 0
                });
            } else r = b, h.logWarn(E + "Error: Video config params missing for adunit: " + e.params.adUnit + " with mediaType set as video. Ignoring video impression in the adunit.");
            return r;
        }
        function g(e) {
            var r, a, i, s = (r = t, !(i = (a = window.DigiTrust && (I.b.getConfig("digiTrustId") || window.DigiTrust.getUser({
                member: r
            }))) && a.success && a.identity || null) || i.privacy && i.privacy.optout ? null : i);
            null !== s && e.push({
                source: "digitru.st",
                uids: [ {
                    id: s.id || "",
                    atype: 1,
                    ext: {
                        keyv: parseInt(s.keyv) || 0
                    }
                } ]
            });
        }
        function R(e, r, a, i) {
            h.isStr(r) && e.push({
                source: a,
                uids: [ {
                    id: r,
                    atype: i
                } ]
            });
        }
        function k(e, r) {
            var a, i, s, t, n = [];
            g(n), a = n, i = r, s = null, t = I.b.getConfig("adsrvrOrgId"), h.isStr(h.deepAccess(i, "0.userId.tdid")) ? s = i[0].userId.tdid : t && h.isStr(t.TDID) && (s = t.TDID), 
            null !== s && a.push({
                source: "adserver.org",
                uids: [ {
                    id: s,
                    atype: 1,
                    ext: {
                        rtiPartner: "TDID"
                    }
                } ]
            });
            var o = r[0];
            o && o.userId && (R(n, h.deepAccess(o, "userId.pubcid"), "pubcid.org", 1), R(n, h.deepAccess(o, "userId.digitrustid.data.id"), "digitru.st", 1), 
            R(n, h.deepAccess(o, "userId.id5id"), "id5-sync.com", 1), R(n, h.deepAccess(o, "userId.criteoId"), "criteo.com", 1), 
            R(n, h.deepAccess(o, "userId.idl_env"), "liveramp.com", 1), R(n, h.deepAccess(o, "userId.lipb.lipbid"), "liveintent.com", 1), 
            R(n, h.deepAccess(o, "userId.parrableid"), "parrable.com", 1), R(n, h.deepAccess(o, "userId.britepoolid"), "britepool.com", 1)), 
            0 < n.length && (e.user.eids = n);
        }
        h._each(p, function(e) {
            d[e.ID] = e.KEY;
        }), h._each(p, function(e) {
            u[e.KEY] = e;
        });
        var x = {
            code: "pubmatic",
            supportedMediaTypes: [ f.b, f.d, f.c ],
            isBidRequestValid: function(e) {
                return !(!e || !e.params) && (h.isStr(e.params.publisherId) ? !!(!e.params.hasOwnProperty("video") || e.params.video.hasOwnProperty("mimes") && h.isArray(e.params.video.mimes) && 0 !== e.params.video.mimes.length) || (h.logWarn(E + "Error: For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(e)), 
                !1) : (h.logWarn(E + "Error: publisherId is mandatory and cannot be numeric. Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)), 
                !1));
            },
            buildRequests: function(e, r) {
                var a;
                r && r.refererInfo && (a = r.refererInfo);
                var i, s, t, n, o, d, p, c = {
                    pageURL: (i = a) && i.referer ? i.referer : window.location.href,
                    refURL: window.document.referrer
                }, l = (s = c, {
                    id: "" + new Date().getTime(),
                    at: 1,
                    cur: [ v ],
                    imp: [],
                    site: {
                        page: s.pageURL,
                        ref: s.refURL,
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
                }), u = "", m = [], g = [];
                if (e.forEach(function(e) {
                    if ((t = h.deepClone(e)).params.adSlot = t.params.adSlot || "", S(t), t.params.hasOwnProperty("video") || t.hasOwnProperty("mediaTypes") && t.mediaTypes.hasOwnProperty(f.c) || 0 !== t.params.width || 0 !== t.params.height) {
                        c.pubId = c.pubId || t.params.publisherId, (c = function(e, r) {
                            var a, i, s;
                            for (a in r.kadpageurl || (r.kadpageurl = r.pageURL), w) w.hasOwnProperty(a) && (i = e[a]) && ("object" === y(s = w[a]) && (i = s.f(i, r)), 
                            h.isStr(i) ? r[a] = i : h.logWarn(E + "Ignoring param : " + a + " with value : " + w[a] + ", expects string-value, found " + y(i)));
                            return r;
                        }(t.params, c)).transactionId = t.transactionId, "" === u ? u = t.params.currency || b : t.params.hasOwnProperty("currency") && u !== t.params.currency && h.logWarn(E + "Currency specifier ignored. Only one currency permitted."), 
                        t.params.currency = u, t.params.hasOwnProperty("dctr") && h.isStr(t.params.dctr) && m.push(t.params.dctr), 
                        t.params.hasOwnProperty("bcat") && h.isArray(t.params.bcat) && (g = g.concat(t.params.bcat));
                        var r = function(e) {
                            var r, a, i = {}, s = {}, t = e.hasOwnProperty("sizes") ? e.sizes : [], n = "", o = [];
                            if (i = {
                                id: e.bidId,
                                tagid: e.params.adUnit || void 0,
                                bidfloor: D("kadfloor", e.params.kadfloor),
                                secure: 1,
                                ext: {
                                    pmZoneId: D("pmzoneid", e.params.pmzoneid)
                                },
                                bidfloorcur: e.params.currency ? D("currency", e.params.currency) : v
                            }, e.hasOwnProperty("mediaTypes")) for (n in e.mediaTypes) switch (n) {
                              case f.b:
                                (r = P(e)) !== b && (i.banner = r);
                                break;

                              case f.c:
                                s.request = JSON.stringify(Y(e.nativeParams)), O ? h.logWarn(E + "Error: Error in Native adunit " + e.params.adUnit + ". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.") : i.native = s;
                                break;

                              case f.d:
                                (a = A(e)) !== b && (i.video = a);
                            } else r = {
                                pos: 0,
                                w: e.params.width,
                                h: e.params.height,
                                topframe: h.inIframe() ? 0 : 1
                            }, h.isArray(t) && 1 < t.length && ((t = t.splice(1, t.length - 1)).forEach(function(e) {
                                o.push({
                                    w: e[0],
                                    h: e[1]
                                });
                            }), r.format = o), i.banner = r;
                            return i.hasOwnProperty(f.b) || i.hasOwnProperty(f.c) || i.hasOwnProperty(f.d) ? i : b;
                        }(t);
                        r && l.imp.push(r);
                    } else h.logWarn(E + "Skipping the non-standard adslot: ", t.params.adSlot, JSON.stringify(t));
                }), 0 != l.imp.length) return l.site.publisher.id = c.pubId.trim(), T = c.pubId.trim(), 
                l.ext.wrapper = {}, l.ext.wrapper.profile = parseInt(c.profId) || b, l.ext.wrapper.version = parseInt(c.verId) || b, 
                l.ext.wrapper.wiid = c.wiid || b, l.ext.wrapper.wv = "prebid_prebid_2.44.2", l.ext.wrapper.transactionId = c.transactionId, 
                l.ext.wrapper.wp = "pbjs", l.user.gender = c.gender ? c.gender.trim() : b, l.user.geo = {}, 
                l.user.geo.lat = D("lat", c.lat), l.user.geo.lon = D("lon", c.lon), l.user.yob = D("yob", c.yob), 
                l.device.geo = l.user.geo, l.site.page = c.kadpageurl.trim() || l.site.page.trim(), 
                l.site.domain = (n = l.site.page, (o = document.createElement("a")).href = n, o.hostname), 
                -1 !== window.location.href.indexOf("pubmaticTest=true") && (l.test = 1), e[0].schain && (l.source = {
                    ext: {
                        schain: e[0].schain
                    }
                }), r && r.gdprConsent && (l.user.ext = {
                    consent: r.gdprConsent.consentString
                }, l.regs = {
                    ext: {
                        gdpr: r.gdprConsent.gdprApplies ? 1 : 0
                    }
                }), r && r.uspConsent && h.deepSetValue(l, "regs.ext.us_privacy", r.uspConsent), 
                !0 === I.b.getConfig("coppa") && h.deepSetValue(l, "regs.coppa", 1), function(e, r, a) {
                    var i, s = "";
                    if (0 < r.length) if (a[0].params.hasOwnProperty("dctr")) {
                        if (s = a[0].params.dctr, h.isStr(s) && 0 < s.length) {
                            var t = s.split("|");
                            s = "", t.forEach(function(e) {
                                s += 0 < e.length ? e.trim() + "|" : "";
                            }), i = s.length, "|" === s.substring(i, i - 1) && (s = s.substring(0, i - 1)), 
                            e.site.ext = {
                                key_val: s.trim()
                            };
                        } else h.logWarn(E + "Ignoring param : dctr with value : " + s + ", expects string-value, found empty or non-string value");
                        1 < r.length && h.logWarn(E + "dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits");
                    } else h.logWarn(E + "dctr value not found in 1st adunit, ignoring values from subsequent adunits");
                }(l, m, e), k(l, e), d = l, 0 < (p = (p = g).filter(function(e) {
                    return "string" == typeof e || (h.logWarn(E + "bcat: Each category should be a string, ignoring category: " + e), 
                    !1);
                }).map(function(e) {
                    return e.trim();
                }).filter(function(e, r, a) {
                    if (3 < e.length) return a.indexOf(e) === r;
                    h.logWarn(E + "bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " + e);
                })).length && (h.logWarn(E + "bcat: Selected: ", p), d.bcat = p), {
                    method: "POST",
                    url: "https://hbopenbid.pubmatic.com/translator?source=prebid-client",
                    data: JSON.stringify(l)
                };
            },
            interpretResponse: function(e, r) {
                var i = [], s = v, t = JSON.parse(r.data), n = t.site && t.site.ref ? t.site.ref : "";
                try {
                    e.body && e.body.seatbid && h.isArray(e.body.seatbid) && (s = e.body.cur || s, e.body.seatbid.forEach(function(e) {
                        e.bid && h.isArray(e.bid) && e.bid.forEach(function(r) {
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
                                referrer: n,
                                ad: r.adm
                            };
                            t.imp && 0 < t.imp.length && t.imp.forEach(function(e) {
                                if (r.impid === e.id) switch (!function(r, e) {
                                    var a = "", i = new RegExp(/VAST\s+version/);
                                    if (0 <= r.indexOf('span class="PubAPIAd"')) e.mediaType = f.b; else if (i.test(r)) e.mediaType = f.d; else try {
                                        (a = JSON.parse(r.replace(/\\/g, ""))) && a.native && (e.mediaType = f.c);
                                    } catch (e) {
                                        h.logWarn(E + "Error: Cannot parse native reponse for ad response: " + r);
                                    }
                                }(r.adm, a), a.mediaType) {
                                  case f.b:
                                    break;

                                  case f.d:
                                    a.width = r.hasOwnProperty("w") ? r.w : e.video.w, a.height = r.hasOwnProperty("h") ? r.h : e.video.h, 
                                    a.vastXml = r.adm;
                                    break;

                                  case f.c:
                                    !function(e, r) {
                                        if (r.native = {}, e.hasOwnProperty("adm")) {
                                            var a = "";
                                            try {
                                                a = JSON.parse(e.adm.replace(/\\/g, ""));
                                            } catch (e) {
                                                return h.logWarn(E + "Error: Cannot parse native reponse for ad response: " + r.adm);
                                            }
                                            if (a && a.native && a.native.assets && 0 < a.native.assets.length) {
                                                r.mediaType = f.c;
                                                for (var i = 0, s = a.native.assets.length; i < s; i++) switch (a.native.assets[i].id) {
                                                  case p.TITLE.ID:
                                                    r.native.title = a.native.assets[i].title && a.native.assets[i].title.text;
                                                    break;

                                                  case p.IMAGE.ID:
                                                    r.native.image = {
                                                        url: a.native.assets[i].img && a.native.assets[i].img.url,
                                                        height: a.native.assets[i].img && a.native.assets[i].img.h,
                                                        width: a.native.assets[i].img && a.native.assets[i].img.w
                                                    };
                                                    break;

                                                  case p.ICON.ID:
                                                    r.native.icon = {
                                                        url: a.native.assets[i].img && a.native.assets[i].img.url,
                                                        height: a.native.assets[i].img && a.native.assets[i].img.h,
                                                        width: a.native.assets[i].img && a.native.assets[i].img.w
                                                    };
                                                    break;

                                                  case p.SPONSOREDBY.ID:
                                                  case p.BODY.ID:
                                                  case p.LIKES.ID:
                                                  case p.DOWNLOADS.ID:
                                                  case p.PRICE:
                                                  case p.SALEPRICE.ID:
                                                  case p.PHONE.ID:
                                                  case p.ADDRESS.ID:
                                                  case p.DESC2.ID:
                                                  case p.CTA.ID:
                                                  case p.RATING.ID:
                                                  case p.DISPLAYURL.ID:
                                                    r.native[d[a.native.assets[i].id]] = a.native.assets[i].data && a.native.assets[i].data.value;
                                                }
                                                r.native.clickUrl = a.native.link && a.native.link.url, r.native.clickTrackers = a.native.link && a.native.link.clicktrackers || [], 
                                                r.native.impressionTrackers = a.native.imptrackers || [], r.native.jstracker = a.native.jstracker || [], 
                                                r.width || (r.width = 0), r.height || (r.height = 0);
                                            }
                                        }
                                    }(r, a);
                                }
                            }), r.ext && r.ext.deal_channel && (a.dealChannel = o[r.ext.deal_channel] || null), 
                            a.meta = {}, r.ext && r.ext.dspid && (a.meta.networkId = r.ext.dspid), r.ext && r.ext.advid && (a.meta.buyerId = r.ext.advid), 
                            r.adomain && 0 < r.adomain.length && (a.meta.clickUrl = r.adomain[0]), i.push(a);
                        });
                    }));
                } catch (e) {
                    h.logError(e);
                }
                return i;
            },
            getUserSyncs: function(e, r, a, i) {
                var s = "https://ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=" + T;
                if (a && (s += "&gdpr=" + (a.gdprApplies ? 1 : 0), s += "&gdpr_consent=" + encodeURIComponent(a.consentString || "")), 
                i && (s += "&us_privacy=" + encodeURIComponent(i)), !0 === I.b.getConfig("coppa") && (s += "&coppa=1"), 
                e.iframeEnabled) return [ {
                    type: "iframe",
                    url: s
                } ];
                h.logWarn(E + "Please enable iframe based user sync.");
            },
            transformBidParams: function(e) {
                return h.convertTypes({
                    publisherId: "string",
                    adSlot: "string"
                }, e);
            }
        };
        Object(i.registerBidder)(x);
    }
}, [ 520 ]);

pbjsChunk([ 104 ], {
    568: function(e, r, t) {
        e.exports = t(569);
    },
    569: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "FASTLANE_ENDPOINT", function() {
            return a;
        }), t.d(r, "VIDEO_ENDPOINT", function() {
            return s;
        }), t.d(r, "SYNC_ENDPOINT", function() {
            return o;
        }), t.d(r, "spec", function() {
            return g;
        }), r.hasVideoMediaType = n, r.masSizeOrdering = A, r.determineRubiconVideoSizeId = S, 
        r.getPriceGranularity = j, r.hasValidVideoParams = C, r.hasValidSupplyChainParams = k, 
        r.encodeParam = T, r.resetUserSync = function() {
            R = !1;
        };
        var u = t(0), i = t(1), p = t(3), l = t(2);
        function m() {
            return (m = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                }
                return e;
            }).apply(this, arguments);
        }
        function v(e, r) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, r) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                var t = [], i = !0, n = !1, o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (t.push(a.value), 
                    !r || t.length !== r); i = !0) ;
                } catch (e) {
                    n = !0, o = e;
                } finally {
                    try {
                        i || null == s.return || s.return();
                    } finally {
                        if (n) throw o;
                    }
                }
                return t;
            }(e, r) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }();
        }
        function c(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e;
        }
        function f(e) {
            return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        var a = "https://fastlane.rubiconproject.com/a/api/fastlane.json", s = "https://prebid-server.rubiconproject.com/openrtb2/auction", o = "https://eus.rubiconproject.com/usync.html", d = {
            FASTLANE: {
                id: "dt.id",
                keyv: "dt.keyv",
                pref: "dt.pref"
            },
            PREBID_SERVER: {
                id: "id",
                keyv: "keyv"
            }
        }, b = {
            1: "468x60",
            2: "728x90",
            5: "120x90",
            8: "120x600",
            9: "160x600",
            10: "300x600",
            13: "200x200",
            14: "250x250",
            15: "300x250",
            16: "336x280",
            17: "240x400",
            19: "300x100",
            31: "980x120",
            32: "250x360",
            33: "180x500",
            35: "980x150",
            37: "468x400",
            38: "930x180",
            39: "750x100",
            40: "750x200",
            41: "750x300",
            42: "2x4",
            43: "320x50",
            44: "300x50",
            48: "300x300",
            53: "1024x768",
            54: "300x1050",
            55: "970x90",
            57: "970x250",
            58: "1000x90",
            59: "320x80",
            60: "320x150",
            61: "1000x1000",
            64: "580x500",
            65: "640x480",
            66: "930x600",
            67: "320x480",
            68: "1800x1000",
            72: "320x320",
            73: "320x160",
            78: "980x240",
            79: "980x300",
            80: "980x400",
            83: "480x300",
            94: "970x310",
            96: "970x210",
            101: "480x320",
            102: "768x1024",
            103: "480x280",
            105: "250x800",
            108: "320x240",
            113: "1000x300",
            117: "320x100",
            125: "800x250",
            126: "200x600",
            144: "980x600",
            145: "980x150",
            152: "1000x250",
            156: "640x320",
            159: "320x250",
            179: "250x600",
            195: "600x300",
            198: "640x360",
            199: "640x200",
            213: "1030x590",
            214: "980x360",
            221: "1x1",
            229: "320x180",
            232: "580x400",
            234: "6x6",
            251: "2x2",
            257: "400x600",
            264: "970x1000",
            265: "1920x1080",
            278: "320x500",
            288: "640x380"
        };
        u._each(b, function(e, r) {
            return b[e] = r;
        });
        var g = {
            code: "rubicon",
            supportedMediaTypes: [ l.b, l.d ],
            isBidRequestValid: function(e) {
                if ("object" !== f(e.params)) return !1;
                for (var r = 0, t = [ "accountId", "siteId", "zoneId" ]; r < t.length; r++) if (e.params[t[r]] = parseInt(e.params[t[r]]), 
                isNaN(e.params[t[r]])) return u.logError("Rubicon: wrong format of accountId or siteId or zoneId."), 
                !1;
                var i = I(e, !0);
                return !!i && ("video" !== i || C(e));
            },
            buildRequests: function(e, o) {
                var r = [], t = e.filter(function(e) {
                    return "video" === I(e);
                }).map(function(e) {
                    e.startTime = new Date().getTime();
                    var r = {
                        id: e.transactionId,
                        test: p.b.getConfig("debug") ? 1 : 0,
                        cur: [ "USD" ],
                        source: {
                            tid: e.transactionId
                        },
                        tmax: p.b.getConfig("TTL") || 1e3,
                        imp: [ {
                            exp: 300,
                            id: e.adUnitCode,
                            secure: 1,
                            ext: c({}, e.bidder, e.params),
                            video: u.deepAccess(e, "mediaTypes.video") || {}
                        } ],
                        ext: {
                            prebid: {
                                cache: {
                                    vastxml: {
                                        returnCreative: !1
                                    }
                                },
                                targeting: {
                                    includewinners: !0,
                                    includebidderkeys: !1,
                                    pricegranularity: j(p.b)
                                }
                            }
                        }
                    };
                    "rubicon" !== e.bidder && (r.ext.prebid.aliases = c({}, e.bidder, "rubicon"));
                    var t = parseFloat(u.deepAccess(e, "params.floor"));
                    isNaN(t) || (r.imp[0].bidfloor = t), r.imp[0].ext[e.bidder].video.size_id = S(e), 
                    function(r, t, e) {
                        if (!r) return;
                        "object" === f(p.b.getConfig("app")) ? r.app = p.b.getConfig("app") : r.site = {
                            page: h(t, e)
                        };
                        "object" === f(p.b.getConfig("device")) && (r.device = p.b.getConfig("device"));
                        t.params.video.language && [ "site", "device" ].forEach(function(e) {
                            r[e] && (r[e].content = m({
                                language: t.params.video.language
                            }, r[e].content));
                        });
                    }(r, e, o), function(e, r) {
                        "object" === f(e.imp[0].video) && void 0 === e.imp[0].video.skip && (e.imp[0].video.skip = r.params.video.skip);
                        "object" === f(e.imp[0].video) && void 0 === e.imp[0].video.skipafter && (e.imp[0].video.skipafter = r.params.video.skipdelay);
                        "object" === f(e.imp[0].video) && void 0 === e.imp[0].video.pos && ("atf" === r.params.position ? e.imp[0].video.pos = 1 : "btf" === r.params.position && (e.imp[0].video.pos = 3));
                        var t = x(r, "video");
                        e.imp[0].video.w = t[0], e.imp[0].video.h = t[1];
                    }(r, e);
                    var i, n = y(e, "PREBID_SERVER");
                    n && u.deepSetValue(r, "user.ext.digitrust", n), o.gdprConsent && ("boolean" == typeof o.gdprConsent.gdprApplies && (i = o.gdprConsent.gdprApplies ? 1 : 0), 
                    u.deepSetValue(r, "regs.ext.gdpr", i), u.deepSetValue(r, "user.ext.consent", o.gdprConsent.consentString));
                    return o.uspConsent && u.deepSetValue(r, "regs.ext.us_privacy", o.uspConsent), e.userId && "object" === f(e.userId) && (e.userId.tdid || e.userId.pubcid || e.userId.lipb) && (u.deepSetValue(r, "user.ext.eids", []), 
                    e.userId.tdid && r.user.ext.eids.push({
                        source: "adserver.org",
                        uids: [ {
                            id: e.userId.tdid,
                            ext: {
                                rtiPartner: "TDID"
                            }
                        } ]
                    }), e.userId.pubcid && r.user.ext.eids.push({
                        source: "pubcommon",
                        uids: [ {
                            id: e.userId.pubcid
                        } ]
                    }), e.userId.lipb && e.userId.lipb.lipbid && (r.user.ext.eids.push({
                        source: "liveintent.com",
                        uids: [ {
                            id: e.userId.lipb.lipbid
                        } ]
                    }), r.user.ext.tpid = {
                        source: "liveintent.com",
                        uid: e.userId.lipb.lipbid
                    }, Array.isArray(e.userId.lipb.segments) && e.userId.lipb.segments.length && u.deepSetValue(r, "rp.target.LIseg", e.userId.lipb.segments))), 
                    !0 === p.b.getConfig("coppa") && u.deepSetValue(r, "regs.coppa", 1), e.schain && k(e.schain) && u.deepSetValue(r, "source.ext.schain", e.schain), 
                    {
                        method: "POST",
                        url: s,
                        data: r,
                        bidRequest: e
                    };
                });
                if (!0 !== p.b.getConfig("rubicon.singleRequest")) r = t.concat(e.filter(function(e) {
                    return "banner" === I(e);
                }).map(function(e) {
                    var i = g.createSlotParams(e, o);
                    return {
                        method: "GET",
                        url: a,
                        data: g.getOrderedParams(i).reduce(function(e, r) {
                            var t = i[r];
                            return u.isStr(t) && "" !== t || u.isNumber(t) ? "".concat(e).concat(T(r, t), "&") : e;
                        }, "") + "slots=1&rand=".concat(Math.random()),
                        bidRequest: e
                    };
                })); else {
                    var n = e.filter(function(e) {
                        return "banner" === I(e);
                    }).reduce(function(e, r) {
                        return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e;
                    }, {});
                    r = t.concat(Object.keys(n).reduce(function(r, e) {
                        var t, i;
                        return (t = n[e], i = 10, t.map(function(e, r) {
                            return r % i == 0 ? t.slice(r, r + i) : null;
                        }).filter(function(e) {
                            return e;
                        })).forEach(function(e) {
                            var i = g.combineSlotUrlParams(e.map(function(e) {
                                return g.createSlotParams(e, o);
                            }));
                            r.push({
                                method: "GET",
                                url: a,
                                data: g.getOrderedParams(i).reduce(function(e, r) {
                                    var t = i[r];
                                    return u.isStr(t) && "" !== t || u.isNumber(t) ? "".concat(e).concat(T(r, t), "&") : e;
                                }, "") + "slots=".concat(e.length, "&rand=").concat(Math.random()),
                                bidRequest: e
                            });
                        }), r;
                    }, []));
                }
                return r;
            },
            getOrderedParams: function(e) {
                var r = /^tg_v/, t = /^tg_i/, i = [ "account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "us_privacy", "rp_schain", "tpid_tdid", "tpid_liveintent.com", "tg_v.LIseg", "dt.id", "dt.keyv", "dt.pref", "rf", "p_geo.latitude", "p_geo.longitude", "kw" ].concat(Object.keys(e).filter(function(e) {
                    return r.test(e);
                })).concat(Object.keys(e).filter(function(e) {
                    return t.test(e);
                })).concat([ "tk_flint", "x_source.tid", "x_source.pchain", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key" ]);
                return i.concat(Object.keys(e).filter(function(e) {
                    return -1 === i.indexOf(e);
                }));
            },
            combineSlotUrlParams: function(n) {
                if (1 === n.length) return n[0];
                var i = n.reduce(function(r, t, i) {
                    return Object.keys(t).forEach(function(e) {
                        r.hasOwnProperty(e) || (r[e] = new Array(n.length)), r[e].splice(i, 1, t[e]);
                    }), r;
                }, {}), o = new RegExp("^([^;]*)(;\\1)+$");
                return Object.keys(i).forEach(function(e) {
                    var r = i[e].join(";"), t = r.match(o);
                    i[e] = t ? t[1] : r;
                }), i;
            },
            createSlotParams: function(e, r) {
                e.startTime = new Date().getTime();
                var t = e.params, i = x(e, "banner"), n = v(t.latLong || [], 2), o = n[0], a = n[1], s = p.b.getConfig("rubicon.int_type"), c = {
                    account_id: t.accountId,
                    site_id: t.siteId,
                    zone_id: t.zoneId,
                    size_id: i[0],
                    alt_size_ids: i.slice(1).join(",") || void 0,
                    rp_floor: .01 < (t.floor = parseFloat(t.floor)) ? t.floor : .01,
                    rp_secure: "1",
                    tk_flint: "".concat(s || "pbjs_lite", "_v2.44.2"),
                    "x_source.tid": e.transactionId,
                    "x_source.pchain": t.pchain,
                    p_screen_res: [ window.screen.width, window.screen.height ].join("x"),
                    kw: Array.isArray(t.keywords) ? t.keywords.join(",") : "",
                    tk_user_key: t.userId,
                    "p_geo.latitude": isNaN(parseFloat(o)) ? void 0 : parseFloat(o).toFixed(4),
                    "p_geo.longitude": isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                    "tg_fl.eid": e.code,
                    rf: h(e, r)
                };
                c.p_pos = "atf" === t.position || "btf" === t.position ? t.position : "", e.userId && (e.userId.tdid && (c.tpid_tdid = e.userId.tdid), 
                e.userId.lipb && e.userId.lipb.lipbid && (c["tpid_liveintent.com"] = e.userId.lipb.lipbid, 
                Array.isArray(e.userId.lipb.segments) && e.userId.lipb.segments.length && (c["tg_v.LIseg"] = e.userId.lipb.segments.join(",")))), 
                r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (c.gdpr = Number(r.gdprConsent.gdprApplies)), 
                c.gdpr_consent = r.gdprConsent.consentString), r.uspConsent && (c.us_privacy = encodeURIComponent(r.uspConsent)), 
                null !== t.visitor && "object" === f(t.visitor) && Object.keys(t.visitor).forEach(function(e) {
                    null != t.visitor[e] && (c["tg_v.".concat(e)] = t.visitor[e].toString());
                }), null !== t.inventory && "object" === f(t.inventory) && Object.keys(t.inventory).forEach(function(e) {
                    null != t.inventory[e] && (c["tg_i.".concat(e)] = t.inventory[e].toString());
                });
                var d = y(e, "FASTLANE");
                return m(c, d), !0 === p.b.getConfig("coppa") && (c.coppa = 1), e.schain && k(e.schain) && (c.rp_schain = g.serializeSupplyChain(e.schain)), 
                c;
            },
            serializeSupplyChain: function(e) {
                if (!k(e)) return "";
                var r = e.ver, t = e.complete, i = e.nodes;
                return "".concat(r, ",").concat(t, "!").concat(g.serializeSupplyChainNodes(i));
            },
            serializeSupplyChainNodes: function(e) {
                var t = [ "asi", "sid", "hp", "rid", "name", "domain" ];
                return e.map(function(r) {
                    return t.map(function(e) {
                        return encodeURIComponent(r[e] || "");
                    }).join(",");
                }).join("!");
            },
            interpretResponse: function(c, e) {
                var d = e.bidRequest;
                if (!(c = c.body) || "object" !== f(c)) return [];
                if (c.seatbid) {
                    var r = u.deepAccess(c, "ext.errors.rubicon");
                    Array.isArray(r) && 0 < r.length && u.logWarn("Rubicon: Error in video response");
                    var o = [];
                    return c.seatbid.forEach(function(n) {
                        (n.bid || []).forEach(function(e) {
                            var r = {
                                requestId: d.bidId,
                                currency: c.cur || "USD",
                                creativeId: e.crid,
                                cpm: e.price || 0,
                                bidderCode: n.seat,
                                ttl: 300,
                                netRevenue: !1 !== p.b.getConfig("rubicon.netRevenue"),
                                width: e.w || u.deepAccess(d, "mediaTypes.video.w") || u.deepAccess(d, "params.video.playerWidth"),
                                height: e.h || u.deepAccess(d, "mediaTypes.video.h") || u.deepAccess(d, "params.video.playerHeight")
                            };
                            e.id && (r.seatBidId = e.id), e.dealid && (r.dealId = e.dealid);
                            var t = u.deepAccess(c, "ext.responsetimemillis.rubicon");
                            if (d && t && (d.serverResponseTimeMs = t), u.deepAccess(e, "ext.prebid.type") === l.d) {
                                r.mediaType = l.d;
                                var i = u.deepAccess(e, "ext.prebid.targeting");
                                i && "object" === f(i) && (r.adserverTargeting = i), e.ext.prebid.cache && "object" === f(e.ext.prebid.cache.vastXml) && e.ext.prebid.cache.vastXml.cacheId && e.ext.prebid.cache.vastXml.url ? (r.videoCacheKey = e.ext.prebid.cache.vastXml.cacheId, 
                                r.vastUrl = e.ext.prebid.cache.vastXml.url) : i && i.hb_uuid && i.hb_cache_host && i.hb_cache_path && (r.videoCacheKey = i.hb_uuid, 
                                r.vastUrl = "https://".concat(i.hb_cache_host).concat(i.hb_cache_path, "?uuid=").concat(i.hb_uuid)), 
                                e.adm && (r.vastXml = e.adm), e.nurl && (r.vastUrl = e.nurl), !r.vastUrl && e.nurl && (r.vastUrl = e.nurl);
                            } else u.logWarn("Rubicon: video response received non-video media type");
                            o.push(r);
                        });
                    }), o;
                }
                var t = c.ads;
                return "object" !== f(d) || Array.isArray(d) || "video" !== I(d) || "object" !== f(t) || (t = t[d.adUnitCode]), 
                !Array.isArray(t) || t.length < 1 ? [] : t.reduce(function(e, r, t) {
                    if ("ok" !== r.status) return e;
                    var i, n, o = Array.isArray(d) ? d[t] : d;
                    if (o && "object" === f(o)) {
                        var a = {
                            requestId: o.bidId,
                            currency: "USD",
                            creativeId: r.creative_id || "".concat(r.network || "", "-").concat(r.advertiser || ""),
                            cpm: r.cpm || 0,
                            dealId: r.deal,
                            ttl: 300,
                            netRevenue: !1 !== p.b.getConfig("rubicon.netRevenue"),
                            rubicon: {
                                advertiserId: r.advertiser,
                                networkId: r.network
                            },
                            meta: {
                                advertiserId: r.advertiser,
                                networkId: r.network
                            }
                        };
                        if (r.creative_type && (a.mediaType = r.creative_type), r.creative_type === l.d) a.width = o.params.video.playerWidth, 
                        a.height = o.params.video.playerHeight, a.vastUrl = r.creative_depot_url, a.impression_id = r.impression_id, 
                        a.videoCacheKey = r.impression_id; else {
                            a.ad = (i = r.script, n = r.impression_id, "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(n, "'>\n<script type='text/javascript'>").concat(i, "<\/script>\n</div>\n</body>\n</html>"));
                            var s = v(b[r.size_id].split("x").map(function(e) {
                                return Number(e);
                            }), 2);
                            a.width = s[0], a.height = s[1];
                        }
                        a.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce(function(e, r) {
                            return e[r.key] = r.values[0], e;
                        }, {
                            rpfl_elemid: o.adUnitCode
                        }), e.push(a);
                    } else u.logError("Rubicon: bidRequest undefined at index position:".concat(t), d, c);
                    return e;
                }, []).sort(function(e, r) {
                    return (r.cpm || 0) - (e.cpm || 0);
                });
            },
            getUserSyncs: function(e, r, t, i) {
                if (!R && e.iframeEnabled) {
                    var n = "";
                    return t && "string" == typeof t.consentString && ("boolean" == typeof t.gdprApplies ? n += "?gdpr=".concat(Number(t.gdprApplies), "&gdpr_consent=").concat(t.consentString) : n += "?gdpr_consent=".concat(t.consentString)), 
                    i && (n += "".concat(n ? "&" : "?", "us_privacy=").concat(encodeURIComponent(i))), 
                    R = !0, {
                        type: "iframe",
                        url: o + n
                    };
                }
            },
            transformBidParams: function(e) {
                return u.convertTypes({
                    accountId: "number",
                    siteId: "number",
                    zoneId: "number"
                }, e);
            }
        };
        function y(e, r) {
            var t, i = 0 < arguments.length && void 0 !== e ? e : {}, n = 1 < arguments.length ? r : void 0;
            if (!n || !d[n]) return null;
            var o = d[n];
            var a = function() {
                var e = u.deepAccess(i, "userId.digitrustid.data");
                if (e) return e;
                var r = window.DigiTrust && (p.b.getConfig("digiTrustId") || window.DigiTrust.getUser({
                    member: "T9QSFKPDN9"
                }));
                return r && r.success && r.identity || null;
            }();
            if (!a || a.privacy && a.privacy.optout) return null;
            var s = (c(t = {}, o.id, a.id), c(t, o.keyv, a.keyv), t);
            return o.pref && (s[o.pref] = 0), s;
        }
        function h(e, r) {
            var t = p.b.getConfig("pageUrl");
            return t = e.params.referrer ? e.params.referrer : t || r.refererInfo.referer, e.params.secure ? t.replace(/^http:/i, "https:") : t;
        }
        function x(e, r) {
            var t = e.params;
            if ("video" === r) {
                var i = [];
                return t.video && t.video.playerWidth && t.video.playerHeight ? i = [ t.video.playerWidth, t.video.playerHeight ] : Array.isArray(u.deepAccess(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? i = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (i = e.sizes[0]), 
                i;
            }
            var n = [];
            return Array.isArray(t.sizes) ? n = t.sizes : void 0 !== u.deepAccess(e, "mediaTypes.banner.sizes") ? n = _(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && 0 < e.sizes.length ? n = _(e.sizes) : u.logWarn("Rubicon: no sizes are setup or found"), 
            A(n);
        }
        function _(e) {
            return u.parseSizesInput(e).reduce(function(e, r) {
                var t = parseInt(b[r], 10);
                return t && e.push(t), e;
            }, []);
        }
        function n(e) {
            return "object" === f(u.deepAccess(e, "params.video")) && void 0 !== u.deepAccess(e, "mediaTypes.".concat(l.d));
        }
        function I(e, r) {
            var t = 1 < arguments.length && void 0 !== r && r;
            return n(e) ? -1 === [ "outstream", "instream" ].indexOf(u.deepAccess(e, "mediaTypes.".concat(l.d, ".context"))) ? void (t && u.logError("Rubicon: mediaTypes.video.context must be outstream or instream")) : x(e, "video").length < 2 ? void (t && u.logError("Rubicon: could not determine the playerSize of the video")) : (t && u.logMessage("Rubicon: making video request for adUnit", e.adUnitCode), 
            "video") : 0 === x(e, "banner").length ? void (t && u.logError("Rubicon: could not determine the sizes for banner request")) : (t && u.logMessage("Rubicon: making banner request for adUnit", e.adUnitCode), 
            "banner");
        }
        function A(e) {
            var n = [ 15, 2, 9 ];
            return e.sort(function(e, r) {
                var t = n.indexOf(e), i = n.indexOf(r);
                return -1 < t || -1 < i ? -1 === t ? 1 : -1 === i ? -1 : t - i : e - r;
            });
        }
        function S(e) {
            var r = parseInt(u.deepAccess(e, "params.video.size_id"));
            return isNaN(r) ? "outstream" === u.deepAccess(e, "mediaTypes.".concat(l.d, ".context")) ? 203 : 201 : r;
        }
        function j(e) {
            return {
                ranges: {
                    low: [ {
                        max: 5,
                        increment: .5
                    } ],
                    medium: [ {
                        max: 20,
                        increment: .1
                    } ],
                    high: [ {
                        max: 20,
                        increment: .01
                    } ],
                    auto: [ {
                        max: 5,
                        increment: .05
                    }, {
                        min: 5,
                        max: 10,
                        increment: .1
                    }, {
                        min: 10,
                        max: 20,
                        increment: .5
                    } ],
                    dense: [ {
                        max: 3,
                        increment: .01
                    }, {
                        min: 3,
                        max: 8,
                        increment: .05
                    }, {
                        min: 8,
                        max: 20,
                        increment: .5
                    } ],
                    custom: e.getConfig("customPriceBucket") && e.getConfig("customPriceBucket").buckets
                }[e.getConfig("priceGranularity")]
            };
        }
        function C(r) {
            var t = !0, e = Object.prototype.toString.call([]), i = Object.prototype.toString.call(0), n = {
                mimes: e,
                protocols: e,
                maxduration: i,
                linearity: i,
                api: e
            };
            return Object.keys(n).forEach(function(e) {
                Object.prototype.toString.call(u.deepAccess(r, "mediaTypes.video." + e)) !== n[e] && (t = !1, 
                u.logError("Rubicon: mediaTypes.video." + e + " is required and must be of type: " + n[e]));
            }), t;
        }
        function k(e) {
            var r = !1, t = [ "asi", "sid", "hp" ];
            return e.nodes && ((r = e.nodes.reduce(function(e, r) {
                return e ? t.every(function(e) {
                    return r[e];
                }) : e;
            }, !0)) || u.logError("Rubicon: required schain params missing")), r;
        }
        function T(e, r) {
            return "rp_schain" === e ? "rp_schain=".concat(r) : "".concat(e, "=").concat(encodeURIComponent(r));
        }
        var R = !1;
        Object(i.registerBidder)(g);
    }
}, [ 568 ]);

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
    var PrebidAnalytics = function() {
        function PrebidAnalytics(trackingOptions) {
            this.reCheckCount = 0;
            var trackingDefaults = {
                distribution: false,
                sampling: true
            };
            var options = __assign(__assign({}, trackingDefaults), trackingOptions);
            this.initializeTracking(options);
        }
        PrebidAnalytics.prototype.initializeTracking = function(options) {
            var _this = this;
            try {
                console.log("prebid: PrebidAnalytics arguments: trackingSampling " + options.sampling + " | trackingDistribution " + options.distribution);
                var win = window;
                var ga_1 = win.ga;
                var pbjs_1 = win.pbjs;
                this.reCheckInterval = setInterval(function() {
                    _this.reCheckCount++;
                    var prebidTrackerName = "";
                    clearInterval(_this.reCheckInterval);
                    if (typeof ga_1 !== "undefined" && typeof ga_1.getAll !== "undefined") {
                        var trackers = ga_1.getAll();
                        console.log("prebid: PrebidAnalytics: custom ga " + ga_1.getAll());
                        for (var _i = 0, trackers_1 = trackers; _i < trackers_1.length; _i++) {
                            var tracker = trackers_1[_i];
                            var trackerName = tracker.get("name") === "" ? "(unnamed)" : tracker.get("name");
                            if (tracker.get("trackingId") === options.id) {
                                prebidTrackerName = trackerName;
                            }
                        }
                        console.log("prebid: PrebidAnalytics custom ga, ready for tracking " + prebidTrackerName);
                        if (prebidTrackerName !== "") {
                            console.log("prebid: PrebidAnalytics custom ga, ready for tracking");
                            pbjs_1.que.push(function() {
                                var sampling = options.sampling ? .05 : 1;
                                var analyticsObject = [ {
                                    options: {
                                        enableDistribution: options.distribution,
                                        sampling: sampling,
                                        trackerName: prebidTrackerName
                                    },
                                    provider: "ga"
                                } ];
                                pbjs_1.enableAnalytics(analyticsObject);
                            });
                        }
                    } else if (_this.reCheckCount === 10) {
                        clearInterval(_this.reCheckInterval);
                        throw new Error("Prebid Analytics Checked 10 times with no luck");
                    }
                }, 300);
            } catch (err) {
                console.error("PrebidAnalytics " + err);
            }
        };
        return PrebidAnalytics;
    }();
    function BidderHandler(bannerObject) {
        try {
            var ebBidders = [];
            if (typeof bannerObject.adformMID !== "undefined") {
                console.log("prebid: add adform as bidder");
                ebBidders.push({
                    bidder: "adform",
                    params: {
                        mid: bannerObject.adformMID,
                        rcur: "USD"
                    }
                });
            }
            if (typeof bannerObject.appnexusID !== "undefined") {
                console.log("prebid: add appnexus as bidder");
                ebBidders.push({
                    bidder: "appnexus",
                    params: {
                        placementId: bannerObject.appnexusID
                    }
                });
            }
            if (typeof bannerObject.criteoId !== "undefined") {
                console.log("prebid: add criteo as bidder");
                ebBidders.push({
                    bidder: "criteo",
                    params: {
                        zoneId: bannerObject.criteoId
                    }
                });
            }
            if (typeof bannerObject.pubmaticAdSlot !== "undefined") {
                console.log("prebid: add pubmatic as bidder");
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
                console.log("prebid: add rubicon as bidder");
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
    function AdUnitCreator(bannerContainer) {
        try {
            var adUnits = [];
            console.log("jppolPrebid AdUnitCreator - bannerContainer", bannerContainer);
            for (var _i = 0, bannerContainer_1 = bannerContainer; _i < bannerContainer_1.length; _i++) {
                var banner = bannerContainer_1[_i];
                var bidders = BidderHandler(banner);
                var adUnit = {
                    bids: bidders,
                    code: banner.targetId,
                    sizes: banner.sizes
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
                var adUnits_1 = AdUnitCreator(options.banners);
                var pbjs_1 = window.pbjs;
                if (options.tracking) {
                    new PrebidAnalytics(options.tracking);
                }
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
                                            console.log("prebid: bidsBackHandler pbjs.setTargetingForAst() && apntag.loadTags()");
                                        });
                                    });
                                }
                                if (typeof options.adserverCallback !== "undefined") {
                                    options.adserverCallback(bidResponse);
                                }
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
    function prebid(options) {
        new AuctionHandler(options);
    }
    exports.prebid = prebid;
    return exports;
}({});