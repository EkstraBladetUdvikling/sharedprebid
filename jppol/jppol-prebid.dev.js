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
        200: 0
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
    }, f(f.s = 485);
}({
    0: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "internal", function() {
            return C;
        }), t.replaceTokenInString = function(i, e, o) {
            return $(e, function(e, t) {
                e = void 0 === e ? "" : e;
                var n = o + t.toUpperCase() + o, r = new RegExp(n, "g");
                i = i.replace(r, e);
            }), i;
        }, t.getUniqueIdentifierStr = B, t.generateUUID = function e(t) {
            return t ? (t ^ U() >> t / 4).toString(16) : ([ 1e7 ] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e);
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
            return t && 0 < Object.getOwnPropertyNames(t).length ? ue(t).map(function(e) {
                return "".concat(e, "=").concat(encodeURIComponent(se(t, e)));
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
                if (n) for (var i in n) ee(n, i) && n[i].match(r) && t.push(n[i]);
            } else if ("object" === l(e)) {
                var o = e.length;
                if (0 < o) if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(R(e)); else for (var a = 0; a < o; a++) t.push(R(e[a]));
            }
            return t;
        }, t.parseGPTSingleSizeArray = R, t.getTopWindowLocation = N, t.getTopFrameReferrer = D, 
        t.getAncestorOrigins = k, t.getWindowTop = P, t.getWindowSelf = x, t.getWindowLocation = q, 
        t.getTopWindowUrl = function() {
            var t;
            try {
                t = C.getTopWindowLocation().href;
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
        }, t.logMessage = G, t.logInfo = M, t.logWarn = W, t.logError = z, t.hasConsoleLogger = function() {
            return A;
        }, t.debugTurnedOn = F, t.createInvisibleIframe = function() {
            var e = document.createElement("iframe");
            return e.id = B(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", 
            e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", 
            e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", 
            e;
        }, t.getParameterByName = V, t.hasValidBidRequest = function(e, n, t) {
            var r = !1;
            function i(e, t) {
                t === n[o] && (r = !0);
            }
            for (var o = 0; o < n.length; o++) if (r = !1, $(e, i), !r) return z("Params are missing for bid request. One of these required paramaters are missing: " + n, t), 
            !1;
            return !0;
        }, t.addEventHandler = function(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent && e.attachEvent("on" + t, n);
        }, t.isA = H, t.isFn = K, t.isStr = Y, t.isArray = J, t.isNumber = Q, t.isPlainObject = function(e) {
            return H(e, h);
        }, t.isBoolean = function(e) {
            return H(e, E);
        }, t.isEmpty = X, t.isEmptyStr = function(e) {
            return Y(e) && (!e || 0 === e.length);
        }, t._each = $, t.contains = function(e, t) {
            if (X(e)) return !1;
            if (K(e.indexOf)) return -1 !== e.indexOf(t);
            var n = e.length;
            for (;n--; ) if (e[n] === t) return !0;
            return !1;
        }, n.d(t, "indexOf", function() {
            return Z;
        }), t._map = function(n, r) {
            if (X(n)) return [];
            if (K(n.map)) return n.map(r);
            var i = [];
            return $(n, function(e, t) {
                i.push(r(e, t, n));
            }), i;
        }, t.insertElement = te, t.triggerPixel = ne, t.callBurl = function(e) {
            var t = e.source, n = e.burl;
            t === g.S2S.SRC && n && C.triggerPixel(n);
        }, t.insertHtmlIntoIframe = function(e) {
            if (!e) return;
            var t = document.createElement("iframe");
            t.id = B(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", t.marginWidth = "0", 
            t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", t.style.width = "0px", 
            t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", C.insertElement(t, document, "body"), 
            t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close();
        }, t.insertUserSyncIframe = re, t.createTrackPixelHtml = function(e) {
            if (!e) return "";
            var t = encodeURI(e), n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return n += '<img src="' + t + '"></div>';
        }, t.createTrackPixelIframeHtml = ie, t.getIframeDocument = function(e) {
            if (!e) return;
            var t;
            try {
                t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument;
            } catch (e) {
                C.logError("Cannot get iframe document", e);
            }
            return t;
        }, t.getValueString = oe, t.uniques = ae, t.flatten = ce, t.getBidRequest = function(n, e) {
            return n ? (e.some(function(e) {
                var t = c()(e.bids, function(t) {
                    return [ "bidId", "adId", "bid_id" ].some(function(e) {
                        return t[e] === n;
                    });
                });
                return t && (r = t), t;
            }), r) : void 0;
            var r;
        }, t.getKeys = ue, t.getValue = se, t.getBidderCodes = function() {
            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map(function(e) {
                return e.bids.map(function(e) {
                    return e.bidder;
                }).reduce(ce, []);
            }).reduce(ce).filter(ae);
        }, t.isGptPubadsDefined = function() {
            if (window.googletag && K(window.googletag.pubads) && K(window.googletag.pubads().getSlots)) return !0;
        }, n.d(t, "getHighestCpm", function() {
            return de;
        }), n.d(t, "getOldestHighestCpmBid", function() {
            return fe;
        }), n.d(t, "getLatestHighestCpmBid", function() {
            return le;
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
        }, t.deepClone = function(e) {
            return o()(e);
        }, t.inIframe = pe, t.isSafariBrowser = function() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        }, t.replaceAuctionPrice = function(e, t) {
            if (!e) return;
            return e.replace(/\$\{AUCTION_PRICE\}/g, t);
        }, t.timestamp = function() {
            return new Date().getTime();
        }, t.checkCookieSupport = be, t.cookiesAreEnabled = function() {
            if (C.checkCookieSupport()) return !0;
            return window.document.cookie = "prebid.cookieTest", -1 != window.document.cookie.indexOf("prebid.cookieTest");
        }, t.getCookie = function(e) {
            var t = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
            return t ? decodeURIComponent(t[2]) : null;
        }, t.delayExecution = function(e, t) {
            if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));
            var n = 0;
            return function() {
                ++n === t && e.apply(null, arguments);
            };
        }, t.groupBy = function(e, n) {
            return e.reduce(function(e, t) {
                return (e[t[n]] = e[t[n]] || []).push(t), e;
            }, {});
        }, t.deepAccess = function(e, t) {
            if (!e) return;
            t = String(t).split(".");
            for (var n = 0; n < t.length; n++) if (void 0 === (e = e[t[n]])) return;
            return e;
        }, t.createContentToExecuteExtScriptInFriendlyFrame = function(e) {
            return e ? '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="'.concat(e, '"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>') : "";
        }, t.getDefinedParams = function(n, e) {
            return e.filter(function(e) {
                return n[e];
            }).reduce(function(e, t) {
                return f(e, function(e, t, n) {
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
            if (e.video && e.video.context) return s()([ "instream", "outstream" ], e.video.context);
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
            }).reduce(ce, []).filter(function(e) {
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
                return ye(t, e);
            };
        }, t.isSlotMatchingAdUnitCode = function(t) {
            return function(e) {
                return ye(e, t);
            };
        }, t.unsupportedBidderMessage = function(e, t) {
            var n = Object.keys(e.mediaTypes || {
                banner: "banner"
            }).join(", ");
            return "\n    ".concat(e.code, " is a ").concat(n, " ad unit\n    containing bidders that don't support ").concat(n, ": ").concat(t, ".\n    This bidder won't fetch demand.\n  ");
        }, t.deletePropertyFromObject = ve, t.removeRequestId = function(e) {
            return ve(e, "requestId");
        }, t.isInteger = me, t.convertCamelToUnderscore = function(e) {
            return e.replace(/(?:^|\.?)([A-Z])/g, function(e, t) {
                return "_" + t.toLowerCase();
            }).replace(/^_/, "");
        }, t.transformBidderParamKeywords = function(e) {
            var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords", i = [];
            return $(e, function(e, t) {
                if (J(e)) {
                    var n = [];
                    $(e, function(e) {
                        ((e = oe(r + "." + t, e)) || "" === e) && n.push(e);
                    }), e = n;
                } else {
                    if (!Y(e = oe(r + "." + t, e))) return;
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
                i[e] && (K(r[e]) ? i[e] = r[e](i[e]) : i[e] = (t = r[e], n = i[e], "string" === t ? n && n.toString() : "number" === t ? Number(n) : n), 
                isNaN(i[e]) && delete i.key);
            }), i;
        }, t.isArrayOfNums = function(e, t) {
            return J(e) && (!t || e.length === t) && e.every(function(e) {
                return me(e);
            });
        };
        var r = n(3), i = n(69), o = n.n(i), a = n(10), c = n.n(a), u = n(7), s = n.n(u), d = n(11);
        function f() {
            return (f = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        function l(e) {
            return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        var g = n(4), p = !1, b = "Array", y = "String", v = "Function", m = "Number", h = "Object", E = "Boolean", S = Object.prototype.toString, T = Boolean(window.console), A = Boolean(T && window.console.log), I = Boolean(T && window.console.info), O = Boolean(T && window.console.warn), w = Boolean(T && window.console.error), C = {
            checkCookieSupport: be,
            createTrackPixelIframeHtml: ie,
            getWindowSelf: x,
            getWindowTop: P,
            getAncestorOrigins: k,
            getTopFrameReferrer: D,
            getWindowLocation: q,
            getTopWindowLocation: N,
            insertUserSyncIframe: re,
            insertElement: te,
            isFn: K,
            triggerPixel: ne,
            logError: z,
            logWarn: W,
            logMessage: G,
            logInfo: M
        };
        var j, _ = (j = 0, function() {
            return ++j;
        });
        function B() {
            return _() + Math.random().toString(16).substr(2);
        }
        function U() {
            return window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random();
        }
        function R(e) {
            if (J(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])) return e[0] + "x" + e[1];
        }
        function N() {
            if (pe()) {
                var e;
                try {
                    e = C.getAncestorOrigins() || C.getTopFrameReferrer();
                } catch (e) {
                    M("could not obtain top window location", e);
                }
                if (e) return Object(d.c)(e, {
                    decodeSearchAsString: !0
                });
            }
            return C.getWindowLocation();
        }
        function D() {
            try {
                window.top.location.toString();
                for (var e, t = ""; (e = e ? e.parent : window).document && e.document.referrer && (t = e.document.referrer), 
                e !== window.top; ) ;
                return t;
            } catch (e) {
                return window.document.referrer;
            }
        }
        function k() {
            if (window.document.location && window.document.location.ancestorOrigins && 1 <= window.document.location.ancestorOrigins.length) return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1];
        }
        function P() {
            return window.top;
        }
        function x() {
            return window.self;
        }
        function q() {
            return window.location;
        }
        function G() {
            F() && A && console.log.apply(console, L(arguments, "MESSAGE:"));
        }
        function M() {
            F() && I && console.info.apply(console, L(arguments, "INFO:"));
        }
        function W() {
            F() && O && console.warn.apply(console, L(arguments, "WARNING:"));
        }
        function z() {
            F() && w && console.error.apply(console, L(arguments, "ERROR:"));
        }
        function L(e, t) {
            return e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), 
            e.unshift("%cPrebid"), e;
        }
        function F() {
            if (!1 === r.config.getConfig("debug") && !1 === p) {
                var e = "TRUE" === V(g.DEBUG_MODE).toUpperCase();
                r.config.setConfig({
                    debug: e
                }), p = !0;
            }
            return !!r.config.getConfig("debug");
        }
        function V(e) {
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
            return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "));
        }
        function H(e, t) {
            return S.call(e) === "[object " + t + "]";
        }
        function K(e) {
            return H(e, v);
        }
        function Y(e) {
            return H(e, y);
        }
        function J(e) {
            return H(e, b);
        }
        function Q(e) {
            return H(e, m);
        }
        function X(e) {
            if (!e) return !0;
            if (J(e) || Y(e)) return !(0 < e.length);
            for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
            return !0;
        }
        function $(e, t) {
            if (!X(e)) {
                if (K(e.forEach)) return e.forEach(t, this);
                var n = 0, r = e.length;
                if (0 < r) for (;n < r; n++) t(e[n], n, e); else for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n);
            }
        }
        var Z = function() {
            if (Array.prototype.indexOf) return Array.prototype.indexOf;
        }();
        var ee = function(e, t) {
            return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t];
        };
        function te(e, t, n, r) {
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
        function ne(e, t) {
            var n = new Image();
            t && C.isFn(t) && (n.addEventListener("load", t), n.addEventListener("error", t)), 
            n.src = e;
        }
        function re(e, t) {
            var n = C.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"), r = document.createElement("div");
            r.innerHTML = n;
            var i = r.firstChild;
            t && C.isFn(t) && (i.addEventListener("load", t), i.addEventListener("error", t)), 
            C.insertElement(i, document, "html", !0);
        }
        function ie(e) {
            var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1], n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            return e ? (t && (e = encodeURI(e)), n && (n = 'sandbox="'.concat(n, '"')), "<iframe ".concat(n, ' id="').concat(B(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : "";
        }
        function oe(e, t, n) {
            return null == t ? n : Y(t) ? t : Q(t) ? t.toString() : void C.logWarn("Unsuported type for param: " + e + " required type: String");
        }
        function ae(e, t, n) {
            return n.indexOf(e) === t;
        }
        function ce(e, t) {
            return e.concat(t);
        }
        function ue(e) {
            return Object.keys(e);
        }
        function se(e, t) {
            return e[t];
        }
        var de = ge("timeToRespond", function(e, t) {
            return t < e;
        }), fe = ge("responseTimestamp", function(e, t) {
            return t < e;
        }), le = ge("responseTimestamp", function(e, t) {
            return e < t;
        });
        function ge(n, r) {
            return function(e, t) {
                return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e;
            };
        }
        function pe() {
            try {
                return C.getWindowSelf() !== C.getWindowTop();
            } catch (e) {
                return !0;
            }
        }
        function be() {
            if (window.navigator.cookieEnabled || document.cookie.length) return !0;
        }
        var ye = function(e, t) {
            return e.getAdUnitPath() === t || e.getSlotElementId() === t;
        };
        function ve(e, t) {
            var n = f({}, e);
            return delete n[t], n;
        }
        function me(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e;
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
                var t = S(e);
                i.default.registerBidAdapter(t, e.code, n);
            }
            r(t), Array.isArray(t.aliases) && t.aliases.forEach(function(e) {
                i.default.aliasRegistry[e] = t.code, r(h({}, t, {
                    code: e
                }));
            });
        }, t.newBidder = S, t.isValid = T;
        var r = n(28), i = n(8), o = n(3), p = n(14), a = n(19), c = n(18), u = n(42), s = n(4), b = n.n(s), d = n(9), y = n.n(d), f = n(7), l = n.n(f), v = n(0);
        function g(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, t) {
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
        function m(e) {
            return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function h() {
            return (h = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        var E = [ "requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency" ];
        function S(f) {
            return h(new r.a(f.code), {
                getSpec: function() {
                    return Object.freeze(f);
                },
                registerSyncs: l,
                callBids: function(o, a, e, n) {
                    if (Array.isArray(o.bids)) {
                        var c = {}, u = [], t = o.bids.filter(g);
                        if (0 !== t.length) {
                            var s = {};
                            t.forEach(function(e) {
                                (s[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode);
                            });
                            var r = f.buildRequests(t, o);
                            if (r && 0 !== r.length) {
                                Array.isArray(r) || (r = [ r ]);
                                var d = Object(v.delayExecution)(i, r.length);
                                r.forEach(function(i) {
                                    switch (i.method) {
                                      case "GET":
                                        n("".concat(i.url).concat(function(e) {
                                            if (e) return "?".concat("object" === m(e) ? Object(v.parseQueryStringParameters)(e) : e);
                                            return "";
                                        }(i.data)), {
                                            success: e,
                                            error: t
                                        }, void 0, h({
                                            method: "GET",
                                            withCredentials: !0
                                        }, i.options));
                                        break;

                                      case "POST":
                                        n(i.url, {
                                            success: e,
                                            error: t
                                        }, "string" == typeof i.data ? i.data : JSON.stringify(i.data), h({
                                            method: "POST",
                                            contentType: "text/plain",
                                            withCredentials: !0
                                        }, i.options));
                                        break;

                                      default:
                                        Object(v.logWarn)("Skipping invalid request from ".concat(f.code, ". Request type ").concat(i.type, " must be GET or POST")), 
                                        d();
                                    }
                                    function e(e, t) {
                                        try {
                                            e = JSON.parse(e);
                                        } catch (e) {}
                                        var n;
                                        e = {
                                            body: e,
                                            headers: {
                                                get: t.getResponseHeader.bind(t)
                                            }
                                        }, u.push(e);
                                        try {
                                            n = f.interpretResponse(e, i);
                                        } catch (e) {
                                            return Object(v.logError)("Bidder ".concat(f.code, " failed to interpret the server's response. Continuing without bids"), null, e), 
                                            void d();
                                        }
                                        function r(e) {
                                            var t, n, r = s[e.requestId];
                                            if (r) {
                                                var i = h(Object(p.a)(b.a.STATUS.GOOD, r), e);
                                                t = r.adUnitCode, n = i, c[t] = !0, T(t, n, [ o ]) && a(t, n);
                                            } else Object(v.logWarn)("Bidder ".concat(f.code, " made bid for unknown request ID: ").concat(e.requestId, ". Ignoring."));
                                        }
                                        n && (n.forEach ? n.forEach(r) : r(n)), d(n);
                                    }
                                    function t(e) {
                                        Object(v.logError)("Server call for ".concat(f.code, " failed: ").concat(e, ". Continuing without bids.")), 
                                        d();
                                    }
                                });
                            } else i();
                        } else i();
                    }
                    function i() {
                        e(), y.a.emit(b.a.EVENTS.BIDDER_DONE, o), l(u, o.gdprConsent);
                    }
                }
            });
            function l(e, t) {
                if (f.getUserSyncs) {
                    var n = o.config.getConfig("userSync.filterSettings"), r = f.getUserSyncs({
                        iframeEnabled: !!(o.config.getConfig("userSync.iframeEnabled") || n && (n.iframe || n.all)),
                        pixelEnabled: !!(o.config.getConfig("userSync.pixelEnabled") || n && (n.image || n.all))
                    }, e, t);
                    r && (Array.isArray(r) || (r = [ r ]), r.forEach(function(e) {
                        a.a.registerSync(e.type, f.code, e.url);
                    }));
                }
            }
            function g(e) {
                return !!f.isBidRequestValid(e) || (Object(v.logWarn)("Invalid bid sent to bidder ".concat(f.code, ": ").concat(JSON.stringify(e))), 
                !1);
            }
        }
        function T(e, t, n) {
            function r(e) {
                return "Invalid bid from ".concat(t.bidderCode, ". Ignoring bid: ").concat(e);
            }
            return e ? t ? (i = Object.keys(t), E.every(function(e) {
                return l()(i, e) && !l()([ void 0, null ], t[e]);
            }) ? "native" !== t.mediaType || Object(c.e)(t, n) ? "video" !== t.mediaType || Object(u.b)(t, n) ? !("banner" === t.mediaType && !function(e, t, n) {
                if ((t.width || 0 === t.width) && (t.height || 0 === t.height)) return !0;
                var r = Object(v.getBidderRequest)(n, t.bidderCode, e), i = r && r.bids && r.bids[0] && r.bids[0].sizes, o = Object(v.parseSizesInput)(i);
                if (1 !== o.length) return !1;
                var a = g(o[0].split("x"), 2), c = a[0], u = a[1];
                return t.width = c, t.height = u, !0;
            }(e, t, n)) || (Object(v.logError)(r("Banner bids require a width and height")), 
            !1) : (Object(v.logError)(r("Video bid does not have required vastUrl or renderer property")), 
            !1) : (Object(v.logError)(r("Native bid missing some required properties.")), !1) : (Object(v.logError)(r("Bidder ".concat(t.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), 
            !1)) : (Object(v.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), 
            !1) : (Object(v.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
            var i;
        }
    },
    10: function(e, t, n) {
        n(48), e.exports = n(13).Array.find;
    },
    108: function(e, t, n) {
        "use strict";
        var r = n(15), i = n(34)(6), o = "findIndex", a = !0;
        o in [] && Array(1)[o](function() {
            a = !1;
        }), r(r.P + r.F * a, "Array", {
            findIndex: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0);
            }
        }), n(27)(o);
    },
    11: function(e, t, n) {
        "use strict";
        function r(e) {
            return Object.keys(e).map(function(t) {
                return Array.isArray(e[t]) ? e[t].map(function(e) {
                    return "".concat(t, "[]=").concat(e);
                }).join("&") : "".concat(t, "=").concat(e[t]);
            }).join("&");
        }
        t.b = r, t.c = function(e, t) {
            var n = document.createElement("a");
            t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
            var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
            return {
                href: n.href,
                protocol: (n.protocol || "").replace(/:$/, ""),
                hostname: n.hostname,
                port: +n.port,
                pathname: n.pathname.replace(/^(?!\/)/, "/"),
                search: r ? n.search : (i = n.search || "", i ? i.replace(/^\?/, "").split("&").reduce(function(e, t) {
                    var n, r, i = t.split("="), o = (r = 2, function(e) {
                        if (Array.isArray(e)) return e;
                    }(n = i) || function(e, t) {
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
                    }(n, r) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    }()), a = o[0], c = o[1];
                    return /\[\]$/.test(a) ? (a = a.replace("[]", ""), e[a] = e[a] || [], e[a].push(c)) : e[a] = c || "", 
                    e;
                }, {}) : {}),
                hash: (n.hash || "").replace(/^#/, ""),
                host: n.host || window.location.host
            };
            var i;
        }, t.a = function(e) {
            return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(r(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "");
        };
    },
    12: function(e, t, n) {
        "use strict";
        t.a = i, t.c = function(e) {
            return !(!e || !e.url);
        }, t.b = function(e, t) {
            e.render(t);
        };
        var f = n(29), l = n(0), r = n(10), g = n.n(r);
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
    13: function(e, t) {
        var n = e.exports = {
            version: "2.6.4"
        };
        "number" == typeof __e && (__e = n);
    },
    14: function(e, t, n) {
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
    15: function(e, t, n) {
        var b = n(20), y = n(13), v = n(32), m = n(50), h = n(57), E = "prototype", S = function(e, t, n) {
            var r, i, o, a = e & S.F, c = e & S.G, u = e & S.S, s = e & S.P, d = e & S.B, f = e & S.W, l = c ? y : y[t] || (y[t] = {}), g = l[E], p = c ? b : u ? b[t] : (b[t] || {})[E];
            for (r in c && (n = t), n) (i = !a && p && void 0 !== p[r]) && h(l, r) || (o = i ? p[r] : n[r], 
            l[r] = c && "function" != typeof p[r] ? n[r] : d && i ? v(o, b) : f && p[r] == o ? function(r) {
                var e = function(e, t, n) {
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
                };
                return e[E] = r[E], e;
            }(o) : s && "function" == typeof o ? v(Function.call, o) : o, s && ((l.virtual || (l.virtual = {}))[r] = o, 
            e & S.R && g && !g[r] && m(g, r, o)));
        };
        S.F = 1, S.G = 2, S.S = 4, S.P = 8, S.B = 16, S.W = 32, S.U = 64, S.R = 128, e.exports = S;
    },
    16: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
        };
    },
    17: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o;
        }), n.d(t, "b", function() {
            return a;
        });
        var r = n(68), i = n.n(r), o = i()({
            ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE
        }), a = o.hooks;
    },
    18: function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return i;
        }), n.d(t, "a", function() {
            return s;
        }), t.f = function(e) {
            if (e && e.type && (t = e.type, t && c()(Object.keys(d), t) || (Object(a.logError)("".concat(t, " nativeParam is not supported")), 
            0))) return d[e.type];
            var t;
            return e;
        }, t.e = function(t, e) {
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
            (n || []).forEach(a.triggerPixel);
        }, t.c = function(r) {
            var i = {};
            return Object.keys(r.native).forEach(function(e) {
                var t = u.NATIVE_KEYS[e], n = r.native[e];
                "object" === o(n) && n.url && (n = n.url), t && n && (i[t] = n);
            }), i;
        };
        var a = n(0), r = n(7), c = n.n(r);
        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        var u = n(4), i = [], s = Object.keys(u.NATIVE_KEYS).map(function(e) {
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
    },
    19: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a;
        });
        var s = n(0), i = n(3), r = n(7), d = n.n(r);
        function f(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, t) {
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
        function l() {
            return (l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        i.config.setDefaults({
            userSync: {
                syncEnabled: !0,
                pixelEnabled: !0,
                syncsPerBidder: 5,
                syncDelay: 3e3
            }
        });
        var o = !s.isSafariBrowser() && s.cookiesAreEnabled(), a = function(e) {
            var t = {}, o = {
                image: [],
                iframe: []
            }, n = !1, a = {}, c = {
                image: !1,
                iframe: !1
            }, u = e.config;
            function r() {
                if (u.syncEnabled && e.browserSupportsCookies && (u.enableOverride || !n)) {
                    try {
                        (u.pixelEnabled || c.image) && s.shuffle(o.image).forEach(function(e) {
                            var t = f(e, 2), n = t[0], r = t[1];
                            s.logMessage("Invoking image pixel user sync for bidder: ".concat(n)), s.triggerPixel(r);
                        }), (u.iframeEnabled || c.iframe) && s.shuffle(o.iframe).forEach(function(e) {
                            var t = f(e, 2), n = t[0], r = t[1];
                            s.logMessage("Invoking iframe user sync for bidder: ".concat(n)), s.insertUserSyncIframe(r);
                        });
                    } catch (e) {
                        return s.logError("Error firing user syncs", e);
                    }
                    o = {
                        image: [],
                        iframe: []
                    }, n = !0;
                }
            }
            return i.config.getConfig("userSync", function(e) {
                u = l(u, e.userSync);
            }), t.registerSync = function(e, t, n) {
                if (!u.syncEnabled || !s.isArray(o[e])) return s.logWarn('User sync type "'.concat(e, '" not supported'));
                if (!t) return s.logWarn("Bidder is required for registering sync");
                if (0 !== u.syncsPerBidder && Number(a[t]) >= u.syncsPerBidder) return s.logWarn('Number of user syncs exceeded for "'.concat(t, '"'));
                if (u.filterSettings) {
                    if (function(e, t) {
                        var n = u.filterSettings;
                        if (function(e, t) {
                            if (e.all && e[t]) return s.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), 
                            !1;
                            var n = e.all ? e.all : e[t], r = e.all ? "all" : t;
                            if (!n) return !1;
                            var i = n.filter, o = n.bidders;
                            return i && "include" !== i && "exclude" !== i ? (s.logWarn('UserSync "filterSettings.'.concat(r, ".filter\" setting '").concat(i, "' is not a valid option; use either 'include' or 'exclude'.")), 
                            !1) : !!("*" === o || Array.isArray(o) && 0 < o.length && o.every(function(e) {
                                return s.isStr(e) && "*" !== e;
                            })) || (s.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(r, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), 
                            !1);
                        }(n, e)) {
                            c[e] = !0;
                            var r = n.all ? n.all : n[e], i = "*" === r.bidders ? [ t ] : r.bidders, o = r.filter || "include", a = {
                                include: function(e, t) {
                                    return !d()(e, t);
                                },
                                exclude: function(e, t) {
                                    return d()(e, t);
                                }
                            };
                            return a[o](i, t);
                        }
                        return !1;
                    }(e, t)) return s.logWarn("Bidder '".concat(t, "' is not permitted to register their userSync ").concat(e, " pixels as per filterSettings config."));
                } else if (u.enabledBidders && u.enabledBidders.length && u.enabledBidders.indexOf(t) < 0) return s.logWarn('Bidder "'.concat(t, '" not permitted to register their userSync pixels.'));
                var r, i;
                o[e].push([ t, n ]), (r = a)[i = t] ? r[i] += 1 : r[i] = 1, a = r;
            }, t.syncUsers = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                if (e) return setTimeout(r, Number(e));
                r();
            }, t.triggerUserSyncs = function() {
                u.enableOverride && t.syncUsers();
            }, t;
        }({
            config: i.config.getConfig("userSync"),
            browserSupportsCookies: o
        });
    },
    194: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            var n = {
                puts: e.map(a)
            };
            Object(i.a)(o.config.getConfig("cache.url"), (r = t, {
                success: function(e) {
                    var t;
                    try {
                        t = JSON.parse(e).responses;
                    } catch (e) {
                        return void r(e, []);
                    }
                    t ? r(null, t) : r(new Error("The cache server didn't respond with a responses property."), []);
                },
                error: function(e, t) {
                    r(new Error("Error storing video ad in the cache: ".concat(e, ": ").concat(JSON.stringify(t))), []);
                }
            }), JSON.stringify(n), {
                contentType: "text/plain",
                withCredentials: !0
            });
            var r;
        }, t.a = function(e) {
            return "".concat(o.config.getConfig("cache.url"), "?uuid=").concat(e);
        };
        var i = n(6), o = n(3);
        function a(e) {
            var t, n, r, i = {
                type: "xml",
                value: e.vastXml ? e.vastXml : (t = e.vastUrl, n = e.vastImpUrl, r = n ? "<![CDATA[".concat(n, "]]>") : "", 
                '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(t, "]]></VASTAdTagURI>\n        <Impression>").concat(r, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")),
                ttlseconds: Number(e.ttl)
            };
            return "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (i.key = e.customCacheKey), 
            i;
        }
    },
    2: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {
            return o;
        });
        var r = "native", i = "video", o = "banner";
    },
    20: function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n);
    },
    21: function(e, t, n) {
        n(108), e.exports = n(13).Array.findIndex;
    },
    22: function(to, uo) {
        var vo;
        vo = function() {
            return this;
        }();
        try {
            vo = vo || Function("return this")() || eval("this");
        } catch (e) {
            "object" == typeof window && (vo = window);
        }
        to.exports = vo;
    },
    23: function(e, t, n) {
        e.exports = !n(33)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    },
    24: function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1);
        };
    },
    25: function(e, t) {
        e.exports = function(e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e;
        };
    },
    26: function(e, t, n) {
        var r = n(61)("wks"), i = n(63), o = n(20).Symbol, a = "function" == typeof o;
        (e.exports = function(e) {
            return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e));
        }).store = r;
    },
    27: function(e, t) {
        e.exports = function() {};
    },
    28: function(e, t, n) {
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
    29: function(e, t, n) {
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
        var r = n(7), i = n.n(r), o = n(0), a = {}, c = [ "criteo" ];
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
    3: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "RANDOM", function() {
            return a;
        }), t.newConfig = c, n.d(t, "config", function() {
            return u;
        });
        var s = n(31), r = n(10), d = n.n(r), i = n(7), o = n.n(i), f = n(17);
        function l() {
            return (l = Object.assign || function(e) {
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
        var p = n(0), b = !1, y = 3e3, v = window.location.origin, m = !0, h = !1, E = !1, S = 400, a = "random", T = {};
        T[a] = !0, T.fixed = !0;
        var A = a, I = {
            LOW: "low",
            MEDIUM: "medium",
            HIGH: "high",
            AUTO: "auto",
            DENSE: "dense",
            CUSTOM: "custom"
        }, O = "*";
        function c() {
            var a, c, r = [];
            function e() {
                a = {};
                var n = {
                    _debug: b,
                    get debug() {
                        return this._debug;
                    },
                    set debug(e) {
                        this._debug = e;
                    },
                    _bidderTimeout: y,
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
                    _priceGranularity: I.MEDIUM,
                    set priceGranularity(e) {
                        o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : I.MEDIUM : "object" === g(e) && (this._customPriceBucket = e, 
                        this._priceGranularity = I.CUSTOM, p.logMessage("Using custom price granularity")));
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
                            return o(n[t]) ? "string" == typeof n ? e[t] = i(n[t]) ? n[t] : r._priceGranularity : "object" === g(n) && (e[t] = n[t], 
                            p.logMessage("Using custom price granularity for ".concat(t))) : p.logWarn("Invalid price granularity for media type: ".concat(t)), 
                            e;
                        }, {});
                    },
                    _sendAllBids: m,
                    get enableSendAllBids() {
                        return this._sendAllBids;
                    },
                    set enableSendAllBids(e) {
                        this._sendAllBids = e;
                    },
                    _useBidCache: E,
                    get useBidCache() {
                        return this._useBidCache;
                    },
                    set useBidCache(e) {
                        this._useBidCache = e;
                    },
                    _bidderSequence: A,
                    get bidderSequence() {
                        return this._bidderSequence;
                    },
                    set bidderSequence(e) {
                        T[e] ? this._bidderSequence = e : p.logWarn("Invalid order: ".concat(e, ". Bidder Sequence was not set."));
                    },
                    _timeoutBuffer: S,
                    get timeoutBuffer() {
                        return this._timeoutBuffer;
                    },
                    set timeoutBuffer(e) {
                        this._timeoutBuffer = e;
                    },
                    _disableAjaxTimeout: h,
                    get disableAjaxTimeout() {
                        return this._disableAjaxTimeout;
                    },
                    set disableAjaxTimeout(e) {
                        this._disableAjaxTimeout = e;
                    }
                };
                function i(t) {
                    return d()(Object.keys(I), function(e) {
                        return t === I[e];
                    });
                }
                function o(e) {
                    if (!e) return p.logError("Prebid Error: no value passed to `setPriceGranularity()`"), 
                    !1;
                    if ("string" == typeof e) i(e) || p.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default."); else if ("object" === g(e) && !Object(s.b)(e)) return p.logError("Invalid custom price value passed to `setPriceGranularity()`"), 
                    !1;
                    return !0;
                }
                c && u(Object.keys(c).reduce(function(e, t) {
                    return c[t] !== n[t] && (e[t] = n[t] || {}), e;
                }, {})), c = n;
            }
            var t = Object(f.a)("async", function(n) {
                if ("object" === g(n)) {
                    var e = Object.keys(n), r = {};
                    e.forEach(function(e) {
                        var t = n[e];
                        "object" === g(a[e]) && "object" === g(t) && (t = l({}, a[e], t)), r[e] = c[e] = t;
                    }), u(r);
                } else p.logError("setConfig options must be an object");
            });
            function u(i) {
                var t = Object.keys(i);
                r.filter(function(e) {
                    return o()(t, e.topic);
                }).forEach(function(e) {
                    var t, n, r;
                    e.callback((t = {}, n = e.topic, r = i[e.topic], n in t ? Object.defineProperty(t, n, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = r, t));
                }), r.filter(function(e) {
                    return e.topic === O;
                }).forEach(function(e) {
                    return e.callback(i);
                });
            }
            return e(), {
                getConfig: function() {
                    if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                        var e = arguments.length <= 0 ? void 0 : arguments[0];
                        return e ? p.deepAccess(c, e) : c;
                    }
                    return function(e, t) {
                        var n = t;
                        return "string" != typeof e && (n = e, e = O), "function" == typeof n ? (r.push({
                            topic: e,
                            callback: n
                        }), function() {
                            r.splice(r.indexOf(t), 1);
                        }) : void p.logError("listener must be a function");
                    }.apply(void 0, arguments);
                },
                setConfig: t,
                setDefaults: function(e) {
                    "object" === g(a) ? (l(a, e), l(c, e)) : p.logError("defaults must be an object");
                },
                resetConfig: e
            };
        }
        var u = c();
    },
    30: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return d;
        });
        var r = n(0), u = n(45), i = n(10), o = n.n(i), a = n(4);
        var s, c, d = (s = [], (c = {}).addWinningBid = function(t) {
            var e = o()(s, function(e) {
                return e.getAuctionId() === t.auctionId;
            });
            e ? e.addWinningBid(t) : utils.logWarn("Auction not found when adding winning bid");
        }, c.getAllWinningBids = function() {
            return s.map(function(e) {
                return e.getWinningBids();
            }).reduce(r.flatten, []);
        }, c.getBidsRequested = function() {
            return s.map(function(e) {
                return e.getBidRequests();
            }).reduce(r.flatten, []);
        }, c.getNoBids = function() {
            return s.map(function(e) {
                return e.getNoBids();
            }).reduce(r.flatten, []);
        }, c.getBidsReceived = function() {
            return s.map(function(e) {
                if (e.getAuctionStatus() === u.a) return e.getBidsReceived();
            }).reduce(r.flatten, []).filter(function(e) {
                return e;
            });
        }, c.getAdUnits = function() {
            return s.map(function(e) {
                return e.getAdUnits();
            }).reduce(r.flatten, []);
        }, c.getAdUnitCodes = function() {
            return s.map(function(e) {
                return e.getAdUnitCodes();
            }).reduce(r.flatten, []).filter(r.uniques);
        }, c.createAuction = function(e) {
            var t, n = e.adUnits, r = e.adUnitCodes, i = e.callback, o = e.cbTimeout, a = e.labels, c = Object(u.d)({
                adUnits: n,
                adUnitCodes: r,
                callback: i,
                cbTimeout: o,
                labels: a
            });
            return t = c, s.push(t), c;
        }, c.findBidByAdId = function(t) {
            return o()(s.map(function(e) {
                return e.getBidsReceived();
            }).reduce(r.flatten, []), function(e) {
                return e.adId === t;
            });
        }, c.getStandardBidderAdServerTargeting = function() {
            return Object(u.c)()[a.JSON_MAPPING.ADSERVER_TARGETING];
        }, c.setStatusForBids = function(e, t) {
            var n = c.findBidByAdId(e);
            if (n && (n.status = t), n && t === a.BID_STATUS.BID_TARGETING_SET) {
                var r = o()(s, function(e) {
                    return e.getAuctionId() === n.auctionId;
                });
                r && r.setBidTargeting(n);
            }
        }, c.getLastAuctionId = function() {
            return s.length && s[s.length - 1].getAuctionId();
        }, c);
    },
    31: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return d;
        }), n.d(t, "b", function() {
            return v;
        });
        var r = n(10), b = n.n(r), i = n(0), y = 2, o = {
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
    32: function(e, t, n) {
        var o = n(49);
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
    33: function(e, t) {
        e.exports = function(e) {
            try {
                return !!e();
            } catch (e) {
                return !0;
            }
        };
    },
    34: function(e, t, n) {
        var h = n(32), E = n(35), S = n(58), T = n(36), r = n(59);
        e.exports = function(f, e) {
            var l = 1 == f, g = 2 == f, p = 3 == f, b = 4 == f, y = 6 == f, v = 5 == f || y, m = e || r;
            return function(e, t, n) {
                for (var r, i, o = S(e), a = E(o), c = h(t, n, 3), u = T(a.length), s = 0, d = l ? m(e, u) : g ? m(e, 0) : void 0; s < u; s++) if ((v || s in a) && (i = c(r = a[s], s, o), 
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
    35: function(e, t, n) {
        var r = n(24);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e);
        };
    },
    36: function(e, t, n) {
        var r = n(37), i = Math.min;
        e.exports = function(e) {
            return 0 < e ? i(r(e), 9007199254740991) : 0;
        };
    },
    37: function(e, t) {
        var n = Math.ceil, r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e);
        };
    },
    38: function(e, t, n) {
        var r = n(24);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e);
        };
    },
    39: function(e, t, n) {
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
                active: 1 < f.length || 1 === f.length && "banner" !== f[0] || "banner" === f[0] && 0 < Object(g.deepAccess)(c, "banner.sizes.length") && (0 === n.length || !i && (n.some(function(e) {
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
        var r = n(3), g = n(0), i = n(7), p = n.n(i);
        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        var b = [];
        function y(e) {
            return e.reduce(function(n, e) {
                return "object" === o(e) && "string" == typeof e.mediaQuery ? matchMedia(e.mediaQuery).matches && (Array.isArray(e.sizesSupported) && (n.shouldFilter = !0), 
                [ "labels", "sizesSupported" ].forEach(function(t) {
                    return (e[t] || []).forEach(function(e) {
                        return n[t][e] = !0;
                    });
                })) : Object(g.logWarn)('sizeConfig rule missing required property "mediaQuery"'), 
                n;
            }, {
                labels: {},
                sizesSupported: {},
                shouldFilter: !1
            });
        }
        r.config.getConfig("sizeConfig", function(e) {
            return t = e.sizeConfig, void (b = t);
            var t;
        });
    },
    4: function(e, t) {
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
                FORMAT: "hb_format"
            },
            NATIVE_KEYS: {
                title: "hb_native_title",
                body: "hb_native_body",
                body2: "hb_native_body2",
                privacyLink: "hb_native_privacy",
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
            }
        };
    },
    40: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o;
        });
        var r = n(0), i = {};
        var o = {
            incrementCounter: function(e) {
                return i[e] = i[e] || {}, i[e].counter = Object(r.deepAccess)(i, "".concat(e, ".counter")) + 1 || 1, 
                i[e].counter;
            },
            getCounter: function(e) {
                return Object(r.deepAccess)(i, "".concat(e, ".counter")) || 0;
            }
        };
    },
    41: function(e, t, n) {
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
                            if (r) n.push(r), c || (c = r); else if (0 !== t) {
                                i = e[t - 1];
                                try {
                                    o = i.referrer, a = i.ancestor;
                                } catch (e) {}
                                o ? (n.push(o), c || (c = o)) : a ? (n.push(a), c || (c = a)) : n.push(null);
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
    42: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return c;
        }), t.b = function(e, t) {
            var n = Object(o.getBidRequest)(e.requestId, t), r = n && Object(o.deepAccess)(n, "mediaTypes.video"), i = r && Object(o.deepAccess)(r, "context");
            return u(e, n, r, i);
        };
        n(8);
        var o = n(0), i = n(3), r = n(7), a = (n.n(r), n(17)), c = "outstream";
        var u = Object(a.a)("sync", function(e, t, n, r) {
            return !t || n && r !== c ? i.config.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), 
            !1) : r !== c || !(!e.renderer && !t.renderer);
        }, "checkVideoBidSetup");
    },
    43: function(e, t, n) {
        "use strict";
        t.a = function() {
            return window.pbjs;
        }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || [];
    },
    44: function(e, t, n) {
        "use strict";
        t.a = B, n.d(t, "b", function() {
            return u;
        });
        var h = n(0), E = n(3), S = n(18), r = n(30), i = n(39), o = n(7), T = n.n(o);
        function A(e) {
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
        function I() {
            return (I = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        function O(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var w = n(0), C = n(4), j = [], _ = Object.keys(C.TARGETING_KEYS).map(function(e) {
            return C.TARGETING_KEYS[e];
        }), a = function(e) {
            return e.responseTimestamp + 1e3 * e.ttl + 1e3 > Object(h.timestamp)();
        }, c = function(e) {
            return e && (e.status && !T()([ C.BID_STATUS.BID_TARGETING_SET, C.BID_STATUS.RENDERED ], e.status) || !e.status);
        };
        function B(e, n) {
            var r = [], i = Object(h.groupBy)(e, "adUnitCode");
            return Object.keys(i).forEach(function(e) {
                var t = Object(h.groupBy)(i[e], "bidderCode");
                Object.keys(t).forEach(function(e) {
                    return r.push(t[e].reduce(n));
                });
            }), r;
        }
        var u = function(n) {
            var g = {}, r = {};
            function p(e) {
                return "string" == typeof e ? [ e ] : w.isArray(e) ? e : n.getAdUnitCodes() || [];
            }
            function b() {
                var e = n.getBidsReceived();
                return E.config.getConfig("useBidCache") || (e = e.filter(function(e) {
                    return r[e.adUnitCode] === e.auctionId;
                })), B(e = e.filter(function(e) {
                    return "banner" !== e.mediaType || Object(i.c)([ e.width, e.height ]);
                }).filter(c).filter(a), h.getOldestHighestCpmBid);
            }
            function y() {
                return n.getStandardBidderAdServerTargeting().map(function(e) {
                    return e.key;
                }).concat(_).filter(h.uniques);
            }
            function v(r, i, e, t) {
                return Object.keys(i.adserverTargeting).filter(o()).forEach(function(e) {
                    var t, n;
                    r.length && r.filter((n = e, function(e) {
                        return e.adUnitCode === i.adUnitCode && e.adserverTargeting[n];
                    })).forEach((t = e, function(e) {
                        w.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [ e.adserverTargeting[t] ]), 
                        e.adserverTargeting[t] = e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(h.uniques), 
                        delete i.adserverTargeting[t];
                    }));
                }), r.push(i), r;
            }
            function o() {
                var t = y();
                return function(e) {
                    return -1 === t.indexOf(e);
                };
            }
            function m(t) {
                return O({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(o()).map(function(e) {
                    return O({}, e.substring(0, 20), [ t.adserverTargeting[e] ]);
                }));
            }
            return g.setLatestAuctionForAdUnit = function(e, t) {
                r[e] = t;
            }, g.resetPresetTargeting = function(e) {
                if (Object(h.isGptPubadsDefined)()) {
                    var t = p(e), r = n.getAdUnits().filter(function(e) {
                        return T()(t, e.code);
                    });
                    window.googletag.pubads().getSlots().forEach(function(n) {
                        j.forEach(function(t) {
                            r.forEach(function(e) {
                                e.code !== n.getAdUnitPath() && e.code !== n.getSlotElementId() || n.setTargeting(t, null);
                            });
                        });
                    });
                }
            }, g.resetPresetTargetingAST = function(e) {
                p(e).forEach(function(e) {
                    var t = window.apntag.getTag(e);
                    if (t && t.keywords) {
                        var n = Object.keys(t.keywords), r = {};
                        n.forEach(function(e) {
                            T()(j, e.toLowerCase()) || (r[e] = t.keywords[e]);
                        }), window.apntag.modifyTag(e, {
                            keywords: r
                        });
                    }
                });
            }, g.getAllTargeting = function(e) {
                var r, t, i, n, o, a, c, u, s, d = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : b(), f = p(e), l = (a = f, 
                c = d, u = g.getWinningBids(a, c), s = y(), u = u.map(function(o) {
                    return O({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter(function(e) {
                        return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === s.indexOf(e);
                    }).reduce(function(e, t) {
                        var n = [ o.adserverTargeting[t] ], r = O({}, t.substring(0, 20), n);
                        if (t !== C.TARGETING_KEYS.DEAL) return [].concat(A(e), [ r ]);
                        var i = O({}, "".concat(t, "_").concat(o.bidderCode).substring(0, 20), n);
                        return [].concat(A(e), [ r, i ]);
                    }, []));
                })).concat((n = f, o = d, o.filter(function(e) {
                    return T()(n, e.adUnitCode);
                }).map(function(e) {
                    return I({}, e);
                }).reduce(v, []).map(m).filter(function(e) {
                    return e;
                }))).concat(E.config.getConfig("enableSendAllBids") ? (r = f, t = d, i = _.concat(S.a), 
                B(t, h.getHighestCpm).map(function(t) {
                    if (t.adserverTargeting && r && (w.isArray(r) && T()(r, t.adUnitCode) || "string" == typeof r && t.adUnitCode === r)) return O({}, t.adUnitCode, (n = t, 
                    i.filter(function(e) {
                        return void 0 !== t.adserverTargeting[e];
                    }).map(function(e) {
                        return O({}, "".concat(e, "_").concat(n.bidderCode).substring(0, 20), [ n.adserverTargeting[e] ]);
                    })));
                    var n;
                }).filter(function(e) {
                    return e;
                })) : []);
                return l.map(function(t) {
                    Object.keys(t).map(function(e) {
                        t[e].map(function(e) {
                            -1 === j.indexOf(Object.keys(e)[0]) && (j = Object.keys(e).concat(j));
                        });
                    });
                }), l = l.map(function(e) {
                    return O({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function(e) {
                        return O({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "));
                    }).reduce(function(e, t) {
                        return I(t, e);
                    }, {}));
                }).reduce(function(e, t) {
                    var n = Object.keys(t)[0];
                    return e[n] = I({}, e[n], t[n]), e;
                }, {}), f.forEach(function(e) {
                    l[e] || (l[e] = {});
                }), l;
            }, g.setTargetingForGPT = function(i, e) {
                window.googletag.pubads().getSlots().forEach(function(r) {
                    Object.keys(i).filter(e ? e(r) : Object(h.isAdUnitCodeMatchingSlot)(r)).forEach(function(n) {
                        return Object.keys(i[n]).forEach(function(t) {
                            var e = i[n][t].split(",");
                            (e = 1 < e.length ? [ e ] : e).map(function(e) {
                                return w.logMessage("Attempting to set key value for slot: ".concat(r.getSlotElementId(), " key: ").concat(t, " value: ").concat(e)), 
                                e;
                            }).forEach(function(e) {
                                r.setTargeting(t, e);
                            });
                        });
                    });
                });
            }, g.getWinningBids = function(e) {
                var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : b(), t = p(e);
                return n.filter(function(e) {
                    return T()(t, e.adUnitCode);
                }).filter(function(e) {
                    return 0 < e.cpm;
                }).map(function(e) {
                    return e.adUnitCode;
                }).filter(h.uniques).map(function(t) {
                    return n.filter(function(e) {
                        return e.adUnitCode === t ? e : null;
                    }).reduce(h.getHighestCpm);
                });
            }, g.setTargetingForAst = function() {
                var r = g.getAllTargeting();
                try {
                    g.resetPresetTargetingAST();
                } catch (e) {
                    w.logError("unable to reset targeting for AST" + e);
                }
                Object.keys(r).forEach(function(n) {
                    return Object.keys(r[n]).forEach(function(e) {
                        if (w.logMessage("Attempting to set targeting for targetId: ".concat(n, " key: ").concat(e, " value: ").concat(r[n][e])), 
                        w.isStr(r[n][e]) || w.isArray(r[n][e])) {
                            var t = {};
                            e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e], window.apntag.setKeywords(n, t, {
                                overrideKeyValue: !0
                            });
                        }
                    });
                });
            }, g.isApntagDefined = function() {
                if (window.apntag && w.isFn(window.apntag.setKeywords)) return !0;
            }, g;
        }(r.a);
    },
    45: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return N;
        }), t.d = function(e) {
            var t, f, l, g, p = e.adUnits, n = e.adUnitCodes, r = e.callback, i = e.cbTimeout, o = e.labels, u = p, s = o, b = n, y = [], v = [], a = [], m = C.generateUUID(), h = r, E = i, c = [];
            function S() {
                return {
                    auctionId: m,
                    timestamp: t,
                    auctionEnd: f,
                    auctionStatus: l,
                    adUnits: u,
                    adUnitCodes: b,
                    labels: s,
                    bidderRequests: y,
                    noBids: a,
                    bidsReceived: v,
                    winningBids: c,
                    timeout: E
                };
            }
            function d(e, t) {
                if (t && clearTimeout(g), null != h) {
                    var n = [];
                    e && (C.logMessage("Auction ".concat(m, " timedOut")), c = v, u = (a = y).filter(function(e) {
                        return !e.doneCbCallCount;
                    }).map(function(e) {
                        return e.bidderCode;
                    }).filter(A.uniques), s = c.map(function(e) {
                        return e.bidder;
                    }).filter(A.uniques), d = u.filter(function(e) {
                        return !O()(s, e);
                    }), (n = a.map(function(e) {
                        return (e.bids || []).filter(function(e) {
                            return O()(d, e.bidder);
                        });
                    }).reduce(A.flatten, []).map(function(e) {
                        return {
                            bidId: e.bidId,
                            bidder: e.bidder,
                            adUnitCode: e.adUnitCode,
                            auctionId: e.auctionId
                        };
                    })).length && _.emit(B.EVENTS.BID_TIMEOUT, n));
                    try {
                        l = N, f = Date.now(), _.emit(B.EVENTS.AUCTION_END, S());
                        var r = b, i = v.filter(A.adUnitsFilter.bind(this, r)).reduce(M, {});
                        h.apply(pbjs, [ i, e ]);
                    } catch (e) {
                        C.logError("Error executing bidsBackHandler", null, e);
                    } finally {
                        n.length && j.callTimedOutBidders(p, n, E);
                        var o = I.config.getConfig("userSync") || {};
                        o.enableOverride || w(o.syncDelay);
                    }
                    h = null;
                }
                var a, c, u, s, d;
            }
            function T() {
                C.logInfo("Bids Received for Auction with id: ".concat(m), v), l = N, d(!1, !0);
            }
            return {
                addBidReceived: function(e) {
                    v = v.concat(e);
                },
                addNoBid: function(e) {
                    a = a.concat(e);
                },
                executeCallback: d,
                callBids: function() {
                    var n = this;
                    l = U, t = Date.now();
                    var i = j.makeBidRequests(u, t, m, E, s);
                    C.logInfo("Bids Requested for Auction with id: ".concat(m), i), i.forEach(function(e) {
                        var t;
                        t = e, y = y.concat(t);
                    });
                    var o = {};
                    if (i.length < 1) C.logWarn("No valid bid requests returned for auction"), T(); else {
                        var e = {
                            bidRequests: i,
                            run: function() {
                                var e, t;
                                e = d.bind(null, !0), t = setTimeout(e, E), g = t, l = R, _.emit(B.EVENTS.AUCTION_INIT, S());
                                var r = G(T, n);
                                j.callBids(u, i, function() {
                                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    q.apply({
                                        dispatch: r.addBidResponse,
                                        bidderRequest: this
                                    }, t);
                                }, r.adapterDone, {
                                    request: function(e, t) {
                                        c(k, t), c(o, e), P[e] || (P[e] = {
                                            SRA: !0,
                                            origin: t
                                        }), 1 < o[e] && (P[e].SRA = !1);
                                    },
                                    done: function(e) {
                                        k[e]--, x[0] && a(x[0]) && x.shift();
                                    }
                                }, E);
                            }
                        };
                        a(e) || (C.logWarn("queueing auction due to limited endpoint capacity"), x.push(e));
                    }
                    function a(e) {
                        var r = !0, i = I.config.getConfig("maxRequestsPerOrigin") || D;
                        return e.bidRequests.some(function(e) {
                            var t = 1, n = void 0 !== e.src && e.src === B.S2S.SRC ? "s2s" : e.bidderCode;
                            return P[n] && (!1 === P[n].SRA && (t = Math.min(e.bids.length, i)), k[P[n].origin] + t > i && (r = !1)), 
                            !r;
                        }), r && e.run(), r;
                    }
                    function c(e, t) {
                        void 0 === e[t] ? e[t] = 1 : e[t]++;
                    }
                },
                addWinningBid: function(e) {
                    c = c.concat(e), j.callBidWonBidder(e.bidder, e, p);
                },
                setBidTargeting: function(e) {
                    j.callSetTargetingBidder(e.bidder, e);
                },
                getWinningBids: function() {
                    return c;
                },
                getTimeout: function() {
                    return E;
                },
                getAuctionId: function() {
                    return m;
                },
                getAuctionStatus: function() {
                    return l;
                },
                getAdUnits: function() {
                    return u;
                },
                getAdUnitCodes: function() {
                    return b;
                },
                getBidRequests: function() {
                    return y;
                },
                getBidsReceived: function() {
                    return v;
                },
                getNoBids: function() {
                    return a;
                }
            };
        }, n.d(t, "b", function() {
            return q;
        }), t.c = E;
        var A = n(0), l = n(31), o = n(18), a = n(194), g = n(12), I = n(3), r = n(19), i = n(17), c = n(10), p = n.n(c), u = n(7), O = n.n(u), s = n(42);
        function b(e) {
            return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
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
        var w = r.a.syncUsers, C = n(0), j = n(8).default, _ = n(9), B = n(4), U = "started", R = "inProgress", N = "completed";
        _.on(B.EVENTS.BID_ADJUSTMENT, function(e) {
            !function(e) {
                var t, n = e.bidderCode, r = e.cpm;
                if (pbjs.bidderSettings && (n && pbjs.bidderSettings[n] && "function" == typeof pbjs.bidderSettings[n].bidCpmAdjustment ? t = pbjs.bidderSettings[n].bidCpmAdjustment : pbjs.bidderSettings[B.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[B.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = pbjs.bidderSettings[B.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), 
                t)) try {
                    r = t(e.cpm, y({}, e));
                } catch (e) {
                    C.logError("Error during bid adjustment", "bidmanager.js", e);
                }
                0 <= r && (e.cpm = r);
            }(e);
        });
        var D = 4, k = {}, P = {}, x = [];
        var q = Object(i.a)("async", function(e, t) {
            this.dispatch.call(this.bidderRequest, e, t);
        }, "addBidResponse");
        function G(t, o) {
            var a = 0, n = false, r = new Set(), c = {};
            function u() {
                a--;
                if (n && a === 0) {
                    t();
                }
            }
            function e(e, t) {
                var n = this;
                c[t.requestId] = true, a++;
                var r = o.getAuctionId(), i = h({
                    adUnitCode: e,
                    bid: t,
                    bidderRequest: n,
                    auctionId: r
                });
                if (i.mediaType === "video") {
                    v(o, i, n, u);
                } else {
                    f(o, i);
                    u();
                }
            }
            function i() {
                var e = this;
                if (r.add(this), n = o.getBidRequests().every(function(e) {
                    return r.has(e);
                }), this.bids.forEach(function(e) {
                    c[e.bidId] || (o.addNoBid(e), _.emit(B.EVENTS.NO_BID, e));
                }), n && 0 === a) {
                    t();
                }
            }
            return {
                addBidResponse: e,
                adapterDone: i
            };
        }
        function d(e, t) {
            t.timeToRespond > e.getTimeout() + I.config.getConfig("timeoutBuffer") && e.executeCallback(!0);
        }
        function f(e, t) {
            _.emit(B.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), d(e, t);
        }
        function v(e, t, n, r) {
            var i = true, o = Object(A["getBidRequest"])(t.requestId, [ n ]), a = o && Object(A["deepAccess"])(o, "mediaTypes.video"), c = a && Object(A["deepAccess"])(a, "context");
            if (I["config"].getConfig("cache.url") && c !== s["a"]) {
                if (!t.videoCacheKey) {
                    i = false;
                    m(e, t, r, o);
                } else if (!t.vastUrl) {
                    C.logError("videoCacheKey specified but not required vastUrl for video bid");
                    i = false;
                }
            }
            if (i) {
                f(e, t);
                r();
            }
        }
        var m = Object(i.a)("async", function(n, r, i, e) {
            Object(a.b)([ r ], function(e, t) {
                e ? (C.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid must be discarded.")), 
                d(n, r)) : "" === t[0].uuid ? (C.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), 
                d(n, r)) : (r.videoCacheKey = t[0].uuid, r.vastUrl || (r.vastUrl = Object(a.a)(r.videoCacheKey)), 
                f(n, r), i());
            });
        }, "callPrebidCache");
        function h(e) {
            var t = e.adUnitCode, n = e.bid, r = e.bidderRequest, i = e.auctionId, o = r.start, a = y({}, n, {
                auctionId: i,
                responseTimestamp: Object(A["timestamp"])(),
                requestTimestamp: o,
                cpm: parseFloat(n.cpm) || 0,
                bidder: n.bidderCode,
                adUnitCode: t
            });
            a.timeToRespond = a.responseTimestamp - a.requestTimestamp, _.emit(B.EVENTS.BID_ADJUSTMENT, a);
            var c = r.bids && p()(r.bids, function(e) {
                return e.adUnitCode == t;
            }), u = c && c.renderer;
            if (u && u.url) {
                a.renderer = g["a"].install({
                    url: u.url
                });
                a.renderer.setRender(u.render);
            }
            var s = I["config"].getConfig("mediaTypePriceGranularity.".concat(n.mediaType)), d = Object(l["a"])(a.cpm, b(s) === "object" ? s : I["config"].getConfig("customPriceBucket"), I["config"].getConfig("currency.granularityMultiplier")), f;
            if (a.pbLg = d.low, a.pbMg = d.med, a.pbHg = d.high, a.pbAg = d.auto, a.pbDg = d.dense, 
            a.pbCg = d.custom, a.bidderCode && (0 < a.cpm || a.dealId)) {
                f = S(a.bidderCode, a);
            }
            return a.adserverTargeting = y(a.adserverTargeting || {}, f), a;
        }
        function E(e) {
            var t = I.config.getConfig("mediaTypePriceGranularity.".concat(e)), n = "string" == typeof e && t ? "string" == typeof t ? t : "custom" : I.config.getConfig("priceGranularity"), r = pbjs.bidderSettings;
            return r[B.JSON_MAPPING.BD_SETTING_STANDARD] || (r[B.JSON_MAPPING.BD_SETTING_STANDARD] = {}), 
            r[B.JSON_MAPPING.BD_SETTING_STANDARD][B.JSON_MAPPING.ADSERVER_TARGETING] || (r[B.JSON_MAPPING.BD_SETTING_STANDARD][B.JSON_MAPPING.ADSERVER_TARGETING] = [ {
                key: B.TARGETING_KEYS.BIDDER,
                val: function(e) {
                    return e.bidderCode;
                }
            }, {
                key: B.TARGETING_KEYS.AD_ID,
                val: function(e) {
                    return e.adId;
                }
            }, {
                key: B.TARGETING_KEYS.PRICE_BUCKET,
                val: function(e) {
                    return n === B.GRANULARITY_OPTIONS.AUTO ? e.pbAg : n === B.GRANULARITY_OPTIONS.DENSE ? e.pbDg : n === B.GRANULARITY_OPTIONS.LOW ? e.pbLg : n === B.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : n === B.GRANULARITY_OPTIONS.HIGH ? e.pbHg : n === B.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0;
                }
            }, {
                key: B.TARGETING_KEYS.SIZE,
                val: function(e) {
                    return e.size;
                }
            }, {
                key: B.TARGETING_KEYS.DEAL,
                val: function(e) {
                    return e.dealId;
                }
            }, {
                key: B.TARGETING_KEYS.SOURCE,
                val: function(e) {
                    return e.source;
                }
            }, {
                key: B.TARGETING_KEYS.FORMAT,
                val: function(e) {
                    return e.mediaType;
                }
            } ]), r[B.JSON_MAPPING.BD_SETTING_STANDARD];
        }
        function S(e, t) {
            if (!t) {
                return {};
            }
            var n = {}, r = pbjs.bidderSettings;
            if (r) {
                var i = E(t.mediaType);
                T(n, i, t);
                if (e && r[e] && r[e][B.JSON_MAPPING.ADSERVER_TARGETING]) {
                    T(n, r[e], t);
                    t.sendStandardTargeting = r[e].sendStandardTargeting;
                }
            }
            if (t["native"]) {
                n = y({}, n, Object(o["c"])(t));
            }
            return n;
        }
        function T(r, i, o) {
            var e = i[B.JSON_MAPPING.ADSERVER_TARGETING];
            return o.size = o.getSize(), C._each(e, function(e) {
                var t = e.key, n = e.val;
                if (r[t] && C.logWarn("The key: " + t + " is getting ovewritten"), C.isFn(n)) try {
                    n = n(o);
                } catch (e) {
                    C.logError("bidmanager", "ERROR", e);
                }
                (void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && t !== B.TARGETING_KEYS.DEAL || !C.isEmptyStr(n) && null != n ? r[t] = n : C.logInfo("suppressing empty key '" + t + "' from adserver targeting");
            }), r;
        }
        function M(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = {
                bids: []
            }), e[t.adUnitCode].bids.push(t), e;
        }
    },
    48: function(e, t, n) {
        "use strict";
        var r = n(15), i = n(34)(5), o = "find", a = !0;
        o in [] && Array(1)[o](function() {
            a = !1;
        }), r(r.P + r.F * a, "Array", {
            find: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0);
            }
        }), n(27)(o);
    },
    485: function(e, t, n) {
        e.exports = n(486);
    },
    486: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(43), c = n(0), i = n(487), o = n(19), a = n(29), u = n(3), y = n(30), s = n(44), d = n(17), f = n(488), l = n(7), g = n.n(l), p = n(40), v = n(12), b = n(14);
        function m(e) {
            return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function h() {
            return (h = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        var E = Object(r.a)(), S = n(4), T = n(0), A = n(8).default, I = n(9), O = o.a.triggerUserSyncs, w = S.EVENTS, C = w.ADD_AD_UNITS, j = w.BID_WON, _ = w.REQUEST_BIDS, B = w.SET_TARGETING, U = w.AD_RENDER_FAILED, R = S.AD_RENDER_FAILED_REASON, N = R.PREVENT_WRITING_ON_MAIN_DOCUMENT, D = R.NO_AD, k = R.EXCEPTION, P = R.CANNOT_FIND_AD, x = R.MISSING_DOC_OR_ADID, q = {
            bidWon: function(e) {
                var t = y.a.getBidsRequested().map(function(e) {
                    return e.bids.map(function(e) {
                        return e.adUnitCode;
                    });
                }).reduce(c.flatten).filter(c.uniques);
                return !!T.contains(t, e) || void T.logError('The "' + e + '" placement is not defined.');
            }
        };
        function G(e, t, n) {
            e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, 
            e.defaultView.frameElement.height = n);
        }
        Object(f.a)(), E.bidderSettings = E.bidderSettings || {}, E.libLoaded = !0, E.version = "v2.2.0", 
        T.logInfo("Prebid.js v2.2.0 loaded"), E.adUnits = E.adUnits || [], E.triggerUserSyncs = O;
        var M = Object(d.a)("sync", function(e) {
            return e.forEach(function(e) {
                var t = e.mediaTypes, n = T.getAdUnitSizes(e);
                if (t && t.banner) {
                    var r = t.banner;
                    r.sizes ? (r.sizes = n, e.sizes = n) : (T.logError("Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request."), 
                    delete e.mediaTypes.banner);
                } else e.sizes && (T.logWarn("Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes)."), 
                e.sizes = n);
                if (t && t.video) {
                    var i = t.video;
                    if (i.playerSize) if (Array.isArray(i.playerSize) && 1 === i.playerSize.length && i.playerSize.every(function(e) {
                        return Object(c.isArrayOfNums)(e, 2);
                    })) e.sizes = i.playerSize; else if (Object(c.isArrayOfNums)(i.playerSize, 2)) {
                        var o = [];
                        o.push(i.playerSize), T.logInfo("Transforming video.playerSize from [".concat(i.playerSize, "] to [[").concat(o, "]] so it's in the proper format.")), 
                        e.sizes = i.playerSize = o;
                    } else T.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), 
                    delete e.mediaTypes.video.playerSize;
                }
                if (t && t.native) {
                    var a = t.native;
                    a.image && a.image.sizes && !Array.isArray(a.image.sizes) && (T.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), 
                    delete e.mediaTypes.native.image.sizes), a.image && a.image.aspect_ratios && !Array.isArray(a.image.aspect_ratios) && (T.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), 
                    delete e.mediaTypes.native.image.aspect_ratios), a.icon && a.icon.sizes && !Array.isArray(a.icon.sizes) && (T.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), 
                    delete e.mediaTypes.native.icon.sizes);
                }
            }), e;
        }, "checkAdUnitSetup");
        function W(e) {
            var n = y.a[e]().filter(c.adUnitsFilter.bind(this, y.a.getAdUnitCodes())), r = y.a.getLastAuctionId();
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
                    bids: e.map(c.removeRequestId)
                }, n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, t;
                var t, n, r;
            }).reduce(function(e, t) {
                return h(e, t);
            }, {});
        }
        function z(e, t, n) {
            var r = {};
            r.reason = e, r.message = t, n && (r.bid = n), T.logError(t), I.emit(U, r);
        }
        function L(e) {
            e.forEach(function(e) {
                if (void 0 === e.called) try {
                    e.call(), e.called = !0;
                } catch (e) {
                    T.logError("Error processing command :", "prebid.js", e);
                }
            });
        }
        E.getAdserverTargetingForAdUnitCodeStr = function(e) {
            if (T.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), 
            e) {
                var t = E.getAdserverTargetingForAdUnitCode(e);
                return T.transformAdServerTargetingObj(t);
            }
            T.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode");
        }, E.getAdserverTargetingForAdUnitCode = function(e) {
            return E.getAdserverTargeting(e)[e];
        }, E.getAdserverTargeting = function(e) {
            return T.logInfo("Invoking pbjs.getAdserverTargeting", arguments), s.b.getAllTargeting(e);
        }, E.getNoBids = function() {
            return T.logInfo("Invoking pbjs.getNoBids", arguments), W("getNoBids");
        }, E.getBidResponses = function() {
            return T.logInfo("Invoking pbjs.getBidResponses", arguments), W("getBidsReceived");
        }, E.getBidResponsesForAdUnitCode = function(t) {
            return {
                bids: y.a.getBidsReceived().filter(function(e) {
                    return e.adUnitCode === t;
                }).map(c.removeRequestId)
            };
        }, E.setTargetingForGPTAsync = function(e, t) {
            if (T.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), Object(c.isGptPubadsDefined)()) {
                var n = s.b.getAllTargeting(e);
                s.b.resetPresetTargeting(e), s.b.setTargetingForGPT(n, t), Object.keys(n).forEach(function(t) {
                    Object.keys(n[t]).forEach(function(e) {
                        "hb_adid" === e && y.a.setStatusForBids(n[t][e], S.BID_STATUS.BID_TARGETING_SET);
                    });
                }), I.emit(B, n);
            } else T.logError("window.googletag is not defined on the page");
        }, E.setTargetingForAst = function() {
            T.logInfo("Invoking pbjs.setTargetingForAn", arguments), s.b.isApntagDefined() ? (s.b.setTargetingForAst(), 
            I.emit(B, s.b.getAllTargeting())) : T.logError("window.apntag is not defined on the page");
        }, E.renderAd = function(e, t) {
            if (T.logInfo("Invoking pbjs.renderAd", arguments), T.logMessage("Calling renderAd with adId :" + t), 
            e && t) try {
                var n = y.a.findBidByAdId(t);
                if (n) {
                    n.status = S.BID_STATUS.RENDERED, n.ad = T.replaceAuctionPrice(n.ad, n.cpm), n.adUrl = T.replaceAuctionPrice(n.adUrl, n.cpm), 
                    y.a.addWinningBid(n), I.emit(j, n);
                    var r = n.height, i = n.width, o = n.ad, a = n.mediaType, c = n.adUrl, u = n.renderer, s = document.createComment("Creative ".concat(n.creativeId, " served by ").concat(n.bidder, " Prebid.js Header Bidding"));
                    if (T.insertElement(s, e, "body"), Object(v.c)(u)) Object(v.b)(u, n); else if (e === document && !T.inIframe() || "video" === a) {
                        var d = "Error trying to write ad. Ad render call ad id ".concat(t, " was prevented from writing to the main document.");
                        z(N, d, n);
                    } else if (o) e.write(o), e.close(), G(e, i, r), T.callBurl(n); else if (c) {
                        var f = T.createInvisibleIframe();
                        f.height = r, f.width = i, f.style.display = "inline", f.style.overflow = "hidden", 
                        f.src = c, T.insertElement(f, e, "body"), G(e, i, r), T.callBurl(n);
                    } else {
                        var l = "Error trying to write ad. No ad for bid response id: ".concat(t);
                        z(D, l, n);
                    }
                } else {
                    var g = "Error trying to write ad. Cannot find ad by given id : ".concat(t);
                    z(P, g);
                }
            } catch (e) {
                var p = "Error trying to write ad Id :".concat(t, " to the page:").concat(e.message);
                z(k, p);
            } else {
                var b = "Error trying to write ad Id :".concat(t, " to the page. Missing document or adId");
                z(x, b);
            }
        }, E.removeAdUnit = function(e) {
            if (T.logInfo("Invoking pbjs.removeAdUnit", arguments), e) for (var t = 0; t < E.adUnits.length; t++) E.adUnits[t].code === e && E.adUnits.splice(t, 1);
        }, E.requestBids = Object(d.a)("async", function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.bidsBackHandler, n = e.timeout, r = e.adUnits, i = e.adUnitCodes, o = e.labels;
            I.emit(_);
            var a = n || u.config.getConfig("bidderTimeout");
            if (r = r || E.adUnits, T.logInfo("Invoking pbjs.requestBids", arguments), i && i.length ? r = r.filter(function(e) {
                return g()(i, e.code);
            }) : i = r && r.map(function(e) {
                return e.code;
            }), (r = M(r)).forEach(function(i) {
                var o = Object.keys(i.mediaTypes || {
                    banner: "banner"
                }), e = i.bids.map(function(e) {
                    return e.bidder;
                }), a = A.bidderRegistry, t = u.config.getConfig("s2sConfig"), n = t && t.bidders, r = n ? e.filter(function(e) {
                    return !g()(n, e);
                }) : e;
                i.transactionId = T.generateUUID(), r.forEach(function(t) {
                    var e = a[t], n = e && e.getSpec && e.getSpec(), r = n && n.supportedMediaTypes || [ "banner" ];
                    o.some(function(e) {
                        return g()(r, e);
                    }) || (T.logWarn(T.unsupportedBidderMessage(i, t)), i.bids = i.bids.filter(function(e) {
                        return e.bidder !== t;
                    }));
                }), p.a.incrementCounter(i.code);
            }), r && 0 !== r.length) {
                var c = y.a.createAuction({
                    adUnits: r,
                    adUnitCodes: i,
                    callback: t,
                    cbTimeout: a,
                    labels: o
                });
                return i.forEach(function(e) {
                    return s.b.setLatestAuctionForAdUnit(e, c.getAuctionId());
                }), c.callBids(), c;
            }
            if (T.logMessage("No adUnits configured. No bids requested."), "function" == typeof t) try {
                t();
            } catch (e) {
                T.logError("Error executing bidsBackHandler", null, e);
            }
        }), E.addAdUnits = function(e) {
            T.logInfo("Invoking pbjs.addAdUnits", arguments), T.isArray(e) ? E.adUnits.push.apply(E.adUnits, e) : "object" === m(e) && E.adUnits.push(e), 
            I.emit(C);
        }, E.onEvent = function(e, t, n) {
            T.logInfo("Invoking pbjs.onEvent", arguments), T.isFn(t) ? !n || q[e].call(null, n) ? I.on(e, t, n) : T.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : T.logError('The event handler provided is not a function and was not set on event "' + e + '".');
        }, E.offEvent = function(e, t, n) {
            T.logInfo("Invoking pbjs.offEvent", arguments), n && !q[e].call(null, n) || I.off(e, t, n);
        }, E.registerBidAdapter = function(e, t) {
            T.logInfo("Invoking pbjs.registerBidAdapter", arguments);
            try {
                A.registerBidAdapter(e(), t);
            } catch (e) {
                T.logError("Error registering bidder adapter : " + e.message);
            }
        }, E.registerAnalyticsAdapter = function(e) {
            T.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
            try {
                A.registerAnalyticsAdapter(e);
            } catch (e) {
                T.logError("Error registering analytics adapter : " + e.message);
            }
        }, E.createBid = function(e) {
            return T.logInfo("Invoking pbjs.createBid", arguments), Object(b.a)(e);
        }, E.loadScript = function(e, t, n) {
            T.logInfo("Invoking pbjs.loadScript", arguments), Object(a.b)(e, t, n);
        }, E.enableAnalytics = function(e) {
            e && !T.isEmpty(e) ? (T.logInfo("Invoking pbjs.enableAnalytics for: ", e), A.enableAnalytics(e)) : T.logError("pbjs.enableAnalytics should be called with option {}");
        }, E.aliasBidder = function(e, t) {
            T.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? A.aliasBidAdapter(e, t) : T.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder");
        }, E.getAllWinningBids = function() {
            return y.a.getAllWinningBids().map(c.removeRequestId);
        }, E.getAllPrebidWinningBids = function() {
            return y.a.getBidsReceived().filter(function(e) {
                return e.status === S.BID_STATUS.BID_TARGETING_SET;
            }).map(c.removeRequestId);
        }, E.getHighestCpmBids = function(e) {
            var t = Object(s.a)(y.a.getBidsReceived(), c.getLatestHighestCpmBid);
            return s.b.getWinningBids(e, t).map(c.removeRequestId);
        }, E.markWinningBidAsUsed = function(t) {
            var e = [];
            t.adUnitCode && t.adId ? e = y.a.getBidsReceived().filter(function(e) {
                return e.adId === t.adId && e.adUnitCode === t.adUnitCode;
            }) : t.adUnitCode ? e = s.b.getWinningBids(t.adUnitCode) : t.adId ? e = y.a.getBidsReceived().filter(function(e) {
                return e.adId === t.adId;
            }) : T.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."), 
            0 < e.length && (e[0].status = S.BID_STATUS.RENDERED);
        }, E.getConfig = u.config.getConfig, E.setConfig = u.config.setConfig, E.que.push(function() {
            return Object(i.a)();
        }), E.cmd.push = function(e) {
            if ("function" == typeof e) try {
                e.call();
            } catch (e) {
                T.logError("Error processing command :", e.message, e.stack);
            } else T.logError("Commands written into pbjs.cmd.push must be wrapped in a function");
        }, E.que.push = E.cmd.push, E.processQueue = function() {
            d.a.ready(), L(E.que), L(E.cmd);
        }, t.default = E;
    },
    487: function(e, t, n) {
        "use strict";
        t.a = function() {
            addEventListener("message", a, !1);
        };
        var r = n(9), p = n.n(r), b = n(18), i = n(4), y = (n.n(i), n(0)), v = n(30), o = n(10), m = n.n(o), h = n(12), E = i.EVENTS.BID_WON;
        function a(e) {
            var t, n, r, i, o, a, c, u, s, d, f = e.message ? "message" : "data", l = {};
            try {
                l = JSON.parse(e[f]);
            } catch (e) {
                return;
            }
            if (l && l.adId) {
                var g = m()(v.a.getBidsReceived(), function(e) {
                    return e.adId === l.adId;
                });
                "Prebid Request" === l.message && (t = g, n = l.adServerDomain, r = e.source, i = t.adId, 
                o = t.ad, a = t.adUrl, c = t.width, u = t.height, s = t.renderer, d = t.cpm, Object(h.c)(s) ? Object(h.b)(s, t) : i && (function(e) {
                    var c = e.adUnitCode, r = e.width, i = e.height;
                    function o(e) {
                        var t, n, r, i, o = (t = c, window.googletag ? (i = t, m()(window.googletag.pubads().getSlots().filter(Object(y.isSlotMatchingAdUnitCode)(i)), function(e) {
                            return e;
                        }).getSlotElementId()) : window.apntag ? (n = t, (r = window.apntag.getTag(n)) && r.targetId) : t), a = document.getElementById(o);
                        return a && a.querySelector(e);
                    }
                    [ "div", "iframe" ].forEach(function(e) {
                        var t = o(e);
                        if (t) {
                            var n = t.style;
                            n.width = r + "px", n.height = i + "px";
                        } else Object(y.logWarn)("Unable to locate matching page element for adUnitCode ".concat(c, ".  Can't resize it to ad's dimensions.  Please review setup."));
                    });
                }(t), r.postMessage(JSON.stringify({
                    message: "Prebid Response",
                    ad: Object(y.replaceAuctionPrice)(o, d),
                    adUrl: Object(y.replaceAuctionPrice)(a, d),
                    adId: i,
                    width: c,
                    height: u
                }), n)), v.a.addWinningBid(g), p.a.emit(E, g)), "Prebid Native" === l.message && (Object(b.b)(l, g), 
                v.a.addWinningBid(g), p.a.emit(E, g));
            }
        }
    },
    488: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t;
            try {
                e = e || window.sessionStorage, t = JSON.parse(e.getItem(u));
            } catch (e) {}
            t && f(t, !0);
        };
        var r = n(3), o = n(0), i = n(45);
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
            i.b.getHooks({
                hook: c
            }).remove();
        }
        function f(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            r.config.setConfig({
                debug: !0
            }), s("bidder overrides enabled".concat(t ? " from session" : "")), d(), c = function(e, r, i) {
                if (Array.isArray(this.bidders) && -1 === this.bidders.indexOf(i.bidderCode)) return t = "bidder '".concat(i.bidderCode, "' excluded from auction by bidder overrides"), 
                void Object(o.logWarn)("DEBUG: " + t);
                var t;
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
            }.bind(e), i.b.before(c, 5);
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
        r.config.getConfig("debugging", function(e) {
            return l(e.debugging);
        });
    },
    49: function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e;
        };
    },
    50: function(e, t, n) {
        var r = n(51), i = n(56);
        e.exports = n(23) ? function(e, t, n) {
            return r.f(e, t, i(1, n));
        } : function(e, t, n) {
            return e[t] = n, e;
        };
    },
    51: function(e, t, n) {
        var r = n(52), i = n(53), o = n(55), a = Object.defineProperty;
        t.f = n(23) ? Object.defineProperty : function(e, t, n) {
            if (r(e), t = o(t, !0), r(n), i) try {
                return a(e, t, n);
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e;
        };
    },
    52: function(e, t, n) {
        var r = n(16);
        e.exports = function(e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e;
        };
    },
    53: function(e, t, n) {
        e.exports = !n(23) && !n(33)(function() {
            return 7 != Object.defineProperty(n(54)("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    },
    54: function(e, t, n) {
        var r = n(16), i = n(20).document, o = r(i) && r(i.createElement);
        e.exports = function(e) {
            return o ? i.createElement(e) : {};
        };
    },
    55: function(e, t, n) {
        var i = n(16);
        e.exports = function(e, t) {
            if (!i(e)) return e;
            var n, r;
            if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
            if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e))) return r;
            if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    56: function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            };
        };
    },
    57: function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t);
        };
    },
    58: function(e, t, n) {
        var r = n(25);
        e.exports = function(e) {
            return Object(r(e));
        };
    },
    59: function(e, t, n) {
        var r = n(60);
        e.exports = function(e, t) {
            return new (r(e))(t);
        };
    },
    6: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r;
        }), t.b = i;
        var l = n(11), g = n(3);
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
                    }, g.config.getConfig("disableAjaxTimeout") || (i.ontimeout = function() {
                        y.logError("  xhr timeout after ", i.timeout, "ms");
                    }), "GET" === o && n) {
                        var u = Object(l.c)(e, r);
                        p(u.search, n), e = Object(l.a)(u);
                    }
                    i.open(o, e, !0), g.config.getConfig("disableAjaxTimeout") || (i.timeout = s), r.withCredentials && (i.withCredentials = !0), 
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
    60: function(e, t, n) {
        var r = n(16), i = n(38), o = n(26)("species");
        e.exports = function(e) {
            var t;
            return i(e) && ("function" != typeof (t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), 
            r(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t;
        };
    },
    61: function(e, t, n) {
        var r = n(13), i = n(20), o = "__core-js_shared__", a = i[o] || (i[o] = {});
        (e.exports = function(e, t) {
            return a[e] || (a[e] = void 0 !== t ? t : {});
        })("versions", []).push({
            version: r.version,
            mode: n(62) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        });
    },
    62: function(e, t) {
        e.exports = !0;
    },
    63: function(e, t) {
        var n = 0, r = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36));
        };
    },
    64: function(e, t, n) {
        "use strict";
        var r = n(15), i = n(65)(!0);
        r(r.P, "Array", {
            includes: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0);
            }
        }), n(27)("includes");
    },
    65: function(e, t, n) {
        var u = n(66), s = n(36), d = n(67);
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
    66: function(e, t, n) {
        var r = n(35), i = n(25);
        e.exports = function(e) {
            return r(i(e));
        };
    },
    67: function(e, t, n) {
        var r = n(37), i = Math.max, o = Math.min;
        e.exports = function(e, t) {
            return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t);
        };
    },
    68: function(e, t) {
        A.SYNC = 1, A.ASYNC = 2, A.QUEUE = 4;
        var n = "function" == typeof Proxy, r = Object.freeze({
            useProxy: n,
            ready: 0
        }), i = Object.getPrototypeOf({}), o = {}, E = function(e, t) {
            return t;
        }.bind(null, 1, o)() === o ? Function.prototype.bind : function(e) {
            var t = this, n = T(arguments, 1);
            return function() {
                return t.apply(e, n.concat(T(arguments)));
            };
        };
        function S(e) {
            return T(arguments, 1).reduce(function(t, n) {
                return n && Object.keys(n).forEach(function(e) {
                    t[e] = n[e];
                }), t;
            }, e);
        }
        function T(e, t) {
            return Array.prototype.slice.call(e, t);
        }
        function a(e) {
            for (var t; t = e.shift(); ) t();
        }
        function A(b) {
            var y, v = {}, m = [], h = [];
            function e(e, t) {
                return "function" == typeof e ? c.call(null, "sync", e, t) : "string" == typeof e && "function" == typeof t ? c.apply(null, arguments) : "object" == typeof e ? function(o, e, t) {
                    var n = !0;
                    void 0 === e && (e = Object.getOwnPropertyNames(o), n = !1);
                    var a = {}, r = [ "constructor" ];
                    for (;(e = e.filter(function(e) {
                        return "function" == typeof o[e] && !r.includes(e) && !e.match(/^_/);
                    })).forEach(function(e) {
                        var t = e.split(":"), n = t[0], r = t[1] || "sync";
                        if (!a[n]) {
                            var i = o[n];
                            a[n] = o[n] = c(r, i);
                        }
                    }), o = Object.getPrototypeOf(o), n && o !== i; ) ;
                    t && (v[t] = a);
                    return a;
                }.apply(null, arguments) : void 0;
            }
            function c(i, e, t) {
                if (e.__funHook) {
                    if (e.__funHook === i) return t && (v[t] = e), e;
                    throw "attempting to wrap func with different hook types";
                }
                var o, a, c = [];
                c.type = "before";
                var u = [];
                u.type = "after";
                var n = E.call(p, c), r = E.call(p, u), s = {
                    __funHook: i,
                    before: n,
                    after: r,
                    getHooks: g,
                    removeAll: function() {
                        return g().remove();
                    },
                    fn: e
                }, d = {
                    get: function(e, t) {
                        return s[t] || Reflect.get.apply(Reflect, arguments);
                    }
                };
                return y || h.push(l), b.useProxy ? a = new Proxy(e, d) : S(a = function() {
                    return d.apply ? d.apply(e, this, T(arguments)) : e.apply(this, arguments);
                }, s), t && (v[t] = a), l(), a;
                function f() {
                    function e(e, t, n) {
                        for (var r = e.length; 0 < r--; ) 0 !== r || "async" === i && "a" === t ? (n = "i.call(" + t + "[" + r + "].hook, h," + n + ")", 
                        "async" === i && "a" === t && 0 === r || (n = "n(" + n + ",e)")) : n = t + "[" + r + "].hook.apply(h,[" + n + ("b" === t ? "].concat(g))" : ",r])");
                        return n;
                    }
                    if (c.length || u.length) {
                        var t;
                        if ("sync" === i) {
                            var n, r = "r=t.apply(h," + (c.length ? "arguments" : "g") + ")";
                            u.length && (n = e(u, "a", "n(function extract(s){r=s},e)")), c.length && (r = e(c, "b", "n(function extract(){" + r + ";" + n + "},e)"), 
                            n = ""), t = [ "var r,e={bail:function(a){r=a}}", r, n, "return r" ].join(";");
                        } else "async" === i && (t = "t.apply(h," + (c.length ? "Array.prototype.slice.call(arguments)" : "g") + ".concat(" + e(u, "a", "z?n(z,e):[]") + "))", 
                        c.length && (t = "n(function partial(){" + t + "},e)"), t = [ "var z", 'typeof g[g.length-1]==="function"&&(z=i.call(g.pop(),null))', "var e={bail:z}", e(c, "b", t) ].join(";"));
                        o = E.call(new Function("i,b,a,n,t,h,g", t), null, E, c, u, Object.assign || S);
                    } else o = void 0;
                    l();
                }
                function l() {
                    !y && ("sync" !== i || b.ready & A.SYNC) && ("async" !== i || b.ready & A.ASYNC) ? "sync" !== i && b.ready & A.QUEUE ? d.apply = function() {
                        var e = arguments;
                        m.push(function() {
                            a.apply(e[1], e[2]);
                        });
                    } : d.apply = function() {
                        throw "hooked function not ready";
                    } : d.apply = o;
                }
                function g(n) {
                    var e = c.concat(u);
                    return "object" == typeof n && (e = e.filter(function(t) {
                        return Object.keys(n).every(function(e) {
                            return t[e] === n[e];
                        });
                    })), S(e, {
                        remove: function() {
                            return e.forEach(function(e) {
                                e.remove();
                            }), a;
                        }
                    });
                }
                function p(e, t) {
                    var n = this, r = {
                        hook: e,
                        type: this.type,
                        priority: t || 10,
                        remove: function() {
                            var e = n.indexOf(r);
                            -1 !== e && (n.splice(e, 1), f());
                        }
                    };
                    return this.push(r), this.sort(function(e, t) {
                        return t.priority - e.priority;
                    }), f(), a;
                }
            }
            return (b = S({}, r, b)).ready ? e.ready = function() {
                y = !0, a(h), a(m);
            } : y = !0, e.hooks = v, e;
        }
        e.exports = A;
    },
    69: function(e, t) {
        e.exports = function e(t) {
            var n = Array.isArray(t) ? [] : {};
            for (var r in t) {
                var i = t[r];
                n[r] = i && "object" == typeof i ? e(i) : i;
            }
            return n;
        };
    },
    7: function(e, t, n) {
        n(64), e.exports = n(13).Array.includes;
    },
    8: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "gdprDataHandler", function() {
            return U;
        }), t.setS2STestingModule = function(e) {
            I = e;
        };
        var h = n(0), g = n(39), p = n(18), d = n(1), v = n(6), E = n(3), r = n(7), S = n.n(r), i = n(10), T = n.n(i), b = n(40), A = n(41);
        function m(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, t) {
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
        var I, O = n(0), w = n(4), C = n(9), f = {}, j = f.bidderRegistry = {}, l = f.aliasRegistry = {}, _ = {};
        E.config.getConfig("s2sConfig", function(e) {
            _ = e.s2sConfig;
        });
        var o = {};
        function B(e) {
            var i = e.bidderCode, s = e.auctionId, d = e.bidderRequestId, t = e.adUnits, f = e.labels, l = e.src;
            return t.reduce(function(e, c) {
                var t = Object(g.b)(Object(g.a)(c, f), c.mediaTypes, c.sizes), n = t.active, u = t.mediaTypes, r = t.filterResults;
                return n ? r && O.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '), r.before, "to ", r.after) : O.logInfo('Size mapping disabled adUnit "'.concat(c.code, '"')), 
                n && e.push(c.bids.filter(function(e) {
                    return e.bidder === i;
                }).reduce(function(e, t) {
                    var n = c.nativeParams || O.deepAccess(c, "mediaTypes.native");
                    n && (t = y({}, t, {
                        nativeParams: Object(p.f)(n)
                    })), t = y({}, t, Object(h.getDefinedParams)(c, [ "mediaType", "renderer" ]));
                    var r = Object(g.b)(Object(g.a)(t, f), u), i = r.active, o = r.mediaTypes, a = r.filterResults;
                    return i ? a && O.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '" banner sizes from '), a.before, "to ", a.after) : O.logInfo('Size mapping deactivated adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '"')), 
                    O.isValidMediaTypes(o) ? t = y({}, t, {
                        mediaTypes: o
                    }) : O.logError("mediaTypes is not correctly configured for adunit ".concat(c.code)), 
                    i && e.push(y({}, t, {
                        adUnitCode: c.code,
                        transactionId: c.transactionId,
                        sizes: O.deepAccess(o, "banner.sizes") || O.deepAccess(o, "video.playerSize") || [],
                        bidId: t.bid_id || O.getUniqueIdentifierStr(),
                        bidderRequestId: d,
                        auctionId: s,
                        src: l,
                        bidRequestsCount: b.a.getCounter(c.code)
                    })), e;
                }, [])), e;
            }, []).reduce(h.flatten, []).filter(function(e) {
                return "" !== e;
            });
        }
        var U = {
            consentData: null,
            setConsentData: function(e) {
                U.consentData = e;
            },
            getConsentData: function() {
                return U.consentData;
            }
        };
        function R() {
            return _ && _.enabled && _.testing && I;
        }
        function a(t, n, e) {
            try {
                var r = j[t].getSpec();
                r && r[n] && "function" == typeof r[n] && (O.logInfo("Invoking ".concat(t, ".").concat(n)), 
                r[n](e));
            } catch (e) {
                O.logWarn("Error calling ".concat(n, " of ").concat(t));
            }
        }
        f.makeBidRequests = function(e, i, o, a, c) {
            var u = [], t = Object(h.getBidderCodes)(e);
            E.config.getConfig("bidderSequence") === E.RANDOM && (t = Object(h.shuffle)(t));
            var n, r, s, d = Object(A.b)(), f = t, l = [];
            if (_.enabled) {
                R() && (l = I.getSourceBidderMap(e)[I.CLIENT]);
                var g = _.bidders;
                f = t.filter(function(e) {
                    return !S()(g, e) || S()(l, e);
                });
                var p = (n = e, r = _.bidders, (s = O.deepClone(n)).forEach(function(e) {
                    e.bids = e.bids.filter(function(e) {
                        return S()(r, e.bidder) && (!R() || e.finalSource !== I.CLIENT);
                    }).map(function(e) {
                        return e.bid_id = O.getUniqueIdentifierStr(), e;
                    });
                }), s = s.filter(function(e) {
                    return 0 !== e.bids.length;
                })), b = O.generateUUID();
                g.forEach(function(e) {
                    var t = O.getUniqueIdentifierStr(), n = {
                        bidderCode: e,
                        auctionId: o,
                        bidderRequestId: t,
                        tid: b,
                        bids: B({
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            adUnits: O.deepClone(p),
                            labels: c,
                            src: w.S2S.SRC
                        }),
                        auctionStart: i,
                        timeout: _.timeout,
                        src: w.S2S.SRC,
                        refererInfo: d
                    };
                    0 !== n.bids.length && u.push(n);
                }), p.forEach(function(e) {
                    var t = e.bids.filter(function(t) {
                        return T()(u, function(e) {
                            return T()(e.bids, function(e) {
                                return e.bidId === t.bid_id;
                            });
                        });
                    });
                    e.bids = t;
                }), u.forEach(function(e) {
                    e.adUnitsS2SCopy = p.filter(function(e) {
                        return 0 < e.bids.length;
                    });
                });
            }
            var y, v, m = (y = e, (v = O.deepClone(y)).forEach(function(e) {
                e.bids = e.bids.filter(function(e) {
                    return !R() || e.finalSource !== I.SERVER;
                });
            }), v = v.filter(function(e) {
                return 0 !== e.bids.length;
            }));
            return f.forEach(function(e) {
                var t = O.getUniqueIdentifierStr(), n = {
                    bidderCode: e,
                    auctionId: o,
                    bidderRequestId: t,
                    bids: B({
                        bidderCode: e,
                        auctionId: o,
                        bidderRequestId: t,
                        adUnits: O.deepClone(m),
                        labels: c,
                        src: "client"
                    }),
                    auctionStart: i,
                    timeout: a,
                    refererInfo: d
                }, r = j[e];
                r || O.logError("Trying to make a request for bidder that does not exist: ".concat(e)), 
                r && n.bids && 0 !== n.bids.length && u.push(n);
            }), U.getConsentData() && u.forEach(function(e) {
                e.gdprConsent = U.getConsentData();
            }), u;
        }, f.callBids = function(e, t, r, i, o, a) {
            if (t.length) {
                var n = m(t.reduce(function(e, t) {
                    return e[Number(void 0 !== t.src && t.src === w.S2S.SRC)].push(t), e;
                }, [ [], [] ]), 2), c = n[0], u = n[1];
                if (u.length) {
                    var s = Object(v.b)(a, o ? {
                        request: o.request.bind(null, "s2s"),
                        done: o.done
                    } : void 0), d = _.bidders, f = j[_.adapter], l = u[0].tid, g = u[0].adUnitsS2SCopy;
                    if (f) {
                        var p = {
                            tid: l,
                            ad_units: g
                        };
                        if (p.ad_units.length) {
                            var b = u.map(function(e) {
                                return e.start = Object(h.timestamp)(), i.bind(e);
                            }), y = p.ad_units.reduce(function(e, t) {
                                return e.concat((t.bids || []).reduce(function(e, t) {
                                    return e.concat(t.bidder);
                                }, []));
                            }, []);
                            O.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(d.filter(function(e) {
                                return S()(y, e);
                            }).join(","))), u.forEach(function(e) {
                                C.emit(w.EVENTS.BID_REQUESTED, e);
                            }), f.callBids(p, u, function(e, t) {
                                var n = Object(h.getBidderRequest)(u, t.bidderCode, e);
                                n && r.call(n, e, t);
                            }, function() {
                                return b.forEach(function(e) {
                                    return e();
                                });
                            }, s);
                        }
                    }
                }
                c.forEach(function(e) {
                    e.start = Object(h.timestamp)();
                    var t = j[e.bidderCode];
                    O.logMessage("CALLING BIDDER ======= ".concat(e.bidderCode)), C.emit(w.EVENTS.BID_REQUESTED, e);
                    var n = Object(v.b)(a, o ? {
                        request: o.request.bind(null, e.bidderCode),
                        done: o.done
                    } : void 0);
                    t.callBids(e, r.bind(e), i.bind(e), n);
                });
            } else O.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?");
        }, f.videoAdapters = [], f.registerBidAdapter = function(e, t) {
            var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes, r = void 0 === n ? [] : n;
            e && t ? "function" == typeof e.callBids ? (j[t] = e, S()(r, "video") && f.videoAdapters.push(t), 
            S()(r, "native") && p.d.push(t)) : O.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : O.logError("bidAdaptor or bidderCode not specified");
        }, f.aliasBidAdapter = function(t, e) {
            var n, r;
            if (void 0 === j[e]) {
                var i = j[t];
                if (void 0 === i) {
                    var o = E.config.getConfig("s2sConfig"), a = o && o.bidders;
                    a && S()(a, e) ? l[e] = t : O.logError('bidderCode "' + t + '" is not an existing bidder.', "adapterManager.aliasBidAdapter");
                } else try {
                    var c, u = (n = t, r = [], S()(f.videoAdapters, n) && r.push("video"), S()(p.d, n) && r.push("native"), 
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
                    O.logError(t + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter");
                }
            } else O.logMessage('alias name "' + e + '" has been already specified.');
        }, f.registerAnalyticsAdapter = function(e) {
            var t = e.adapter, n = e.code;
            t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, o[n] = t) : O.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function')) : O.logError("Prebid Error: analyticsAdapter or analyticsCode not specified");
        }, f.enableAnalytics = function(e) {
            O.isArray(e) || (e = [ e ]), O._each(e, function(e) {
                var t = o[e.provider];
                t ? t.enableAnalytics(e) : O.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."));
            });
        }, f.getBidAdapter = function(e) {
            return j[e];
        }, f.callTimedOutBidders = function(t, n, r) {
            n = n.map(function(e) {
                return e.params = O.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = r, 
                e;
            }), n = O.groupBy(n, "bidder"), Object.keys(n).forEach(function(e) {
                a(e, "onTimeout", n[e]);
            });
        }, f.callBidWonBidder = function(e, t, n) {
            t.params = O.getUserConfiguredParams(n, t.adUnitCode, t.bidder), a(e, "onBidWon", t);
        }, f.callSetTargetingBidder = function(e, t) {
            a(e, "onSetTargeting", t);
        }, t.default = f;
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
        var c, i, u = n(0), o = n(4), a = Array.prototype.slice, s = Array.prototype.push, d = u._map(o.EVENTS, function(e) {
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
    }
});

pbjsChunk([ 194 ], {
    80: function(e, n, r) {
        e.exports = r(81);
    },
    81: function(e, n, r) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), r.d(n, "spec", function() {
            return d;
        });
        var t = r(1), g = r(2), m = "adform", d = {
            code: m,
            supportedMediaTypes: [ g.a, g.c ],
            isBidRequestValid: function(e) {
                return !!e.params.mid;
            },
            buildRequests: function(e, n) {
                var r, t, d, s, i, p, o, a, u, c, g = [], l = [ [ "adxDomain", "adx.adform.net" ], [ "fd", 1 ], [ "url", null ], [ "tid", null ] ], h = JSON.parse(JSON.stringify(e)), f = h[0] && h[0].bidder || m;
                for (r = 0, t = h.length; r < t; r++) {
                    for ("net" !== (i = h[r]).params.priceType && "net" !== i.params.pt || (u = "net"), 
                    d = 0, s = l.length; d < s; d++) (o = i[p = l[d][0]] || i.params[p]) && (i[p] = i.params[p] = null, 
                    l[d][1] = o);
                    (a = i.params).transactionId = i.transactionId, g.push(b(a));
                }
                for (g.unshift("//" + l[0][1] + "/adx/?rp=4"), u = u || "gross", g.push("pt=" + u), 
                g.push("stid=" + e[0].auctionId), n && n.gdprConsent && n.gdprConsent.gdprApplies && (c = {
                    gdpr: n.gdprConsent.gdprApplies,
                    gdpr_consent: n.gdprConsent.consentString
                }, g.push("gdpr=" + c.gdpr), g.push("gdpr_consent=" + c.gdpr_consent)), r = 1, t = l.length; r < t; r++) p = l[r][0], 
                (o = l[r][1]) && g.push(p + "=" + encodeURIComponent(o));
                return {
                    method: "GET",
                    url: g.join("&"),
                    bids: e,
                    netRevenue: u,
                    bidder: f,
                    gdpr: c
                };
                function b(e) {
                    var n, r = [];
                    for (n in e) e.hasOwnProperty(n) && e[n] && r.push(n, "=", e[n], "&");
                    return encodeURIComponent(btoa(r.join("").slice(0, -1)));
                }
            },
            interpretResponse: function(e, n) {
                for (var r, t, d, s, i = {
                    banner: 1,
                    vast_content: 1,
                    vast_url: 1
                }, p = [], o = n.bids, a = e.body, u = 0; u < a.length; u++) s = "banner" === (t = a[u]).response ? g.a : g.c, 
                d = o[u], i[t.response] && (c(t, d.sizes) || s === g.c) && (r = {
                    requestId: d.bidId,
                    cpm: t.win_bid,
                    width: t.width,
                    height: t.height,
                    creativeId: d.bidId,
                    dealId: t.deal_id,
                    currency: t.win_cur,
                    netRevenue: "gross" !== n.netRevenue,
                    ttl: 360,
                    ad: t.banner,
                    bidderCode: n.bidder,
                    transactionId: d.transactionId,
                    vastUrl: t.vast_url,
                    vastXml: t.vast_content,
                    mediaType: s
                }, n.gdpr && (r.gdpr = n.gdpr.gdpr, r.gdpr_consent = n.gdpr.gdpr_consent), p.push(r));
                return p;
                function c(e, n) {
                    for (var r = 0, t = n.length; r < t; r++) if (e.width == n[r][0] && e.height == n[r][1]) return !0;
                    return !1;
                }
            }
        };
        Object(t.registerBidder)(d);
    }
}, [ 80 ]);

pbjsChunk([ 171 ], {
    135: function(e, r, a) {
        e.exports = a(136);
    },
    136: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), a.d(r, "spec", function() {
            return o;
        });
        var p = a(12), g = a(0), n = a(1), u = a(2), t = a(10), v = a.n(t), i = a(7), h = a.n(i);
        function s(e) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function c() {
            return (c = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var a = arguments[r];
                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                }
                return e;
            }).apply(this, arguments);
        }
        function _(e) {
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
        var d = [ "id", "mimes", "minduration", "maxduration", "startdelay", "skippable", "playback_method", "frameworks" ], k = [ "age", "external_uid", "segments", "gender", "dnt", "language" ], I = [ "geo", "device_id" ], w = [ "enabled", "dongle", "member_id", "debug_timeout" ], m = {
            body: "description",
            body2: "desc2",
            cta: "ctatext",
            image: {
                serverName: "main_image",
                requiredParams: {
                    required: !0
                },
                minimumParams: {
                    sizes: [ {} ]
                }
            },
            icon: {
                serverName: "icon",
                requiredParams: {
                    required: !0
                },
                minimumParams: {
                    sizes: [ {} ]
                }
            },
            sponsoredBy: "sponsored_by",
            privacyLink: "privacy_link",
            salePrice: "saleprice",
            displayUrl: "displayurl"
        }, o = {
            code: "appnexus",
            aliases: [ "appnexusAst", "brealtime", "emxdigital", "pagescience", "defymedia", "gourmetads", "matomy", "featureforward", "oftmedia", "districtm" ],
            supportedMediaTypes: [ u.a, u.c, u.b ],
            isBidRequestValid: function(e) {
                return !!(e.params.placementId || e.params.member && e.params.invCode);
            },
            buildRequests: function(e, r) {
                var a, n = e.map(x), t = v()(e, C);
                t && (a = {}, Object.keys(t.params.user).filter(function(e) {
                    return h()(k, e);
                }).forEach(function(e) {
                    return a[e] = t.params.user[e];
                }));
                var i, s = v()(e, P);
                s && s.params && s.params.app && (i = {}, Object.keys(s.params.app).filter(function(e) {
                    return h()(I, e);
                }).forEach(function(e) {
                    return i[e] = s.params.app[e];
                }));
                var o, d = v()(e, R);
                d && d.params && s.params.app && s.params.app.id && (o = {
                    appid: d.params.app.id
                });
                var p = {}, u = {}, c = g.getCookie("apn_prebid_debug") || null;
                if (c) try {
                    p = JSON.parse(c);
                } catch (e) {
                    g.logError("AppNexus Debug Auction Cookie Error:\n\n" + e);
                } else {
                    var m = v()(e, T);
                    m && m.debug && (p = m.debug);
                }
                p && p.enabled && Object.keys(p).filter(function(e) {
                    return h()(w, e);
                }).forEach(function(e) {
                    u[e] = p[e];
                });
                var l = v()(e, A), f = l ? parseInt(l.params.member, 10) : 0, y = {
                    tags: _(n),
                    user: a,
                    sdk: {
                        source: "pbjs",
                        version: "2.2.0"
                    }
                };
                if (0 < f && (y.member_id = f), s && (y.device = i), d && (y.app = o), u.enabled && (y.debug = u, 
                g.logInfo("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(u, null, 4))), 
                r && r.gdprConsent && (y.gdpr_consent = {
                    consent_string: r.gdprConsent.consentString,
                    consent_required: r.gdprConsent.gdprApplies
                }), r && r.refererInfo) {
                    var b = {
                        rd_ref: encodeURIComponent(r.refererInfo.referer),
                        rd_top: r.refererInfo.reachedTop,
                        rd_ifs: r.refererInfo.numIframes,
                        rd_stk: r.refererInfo.stack.map(function(e) {
                            return encodeURIComponent(e);
                        }).join(",")
                    };
                    y.referrer_detection = b;
                }
                return {
                    method: "POST",
                    url: "//ib.adnxs.com/ut/v3/prebid",
                    data: JSON.stringify(y),
                    bidderRequest: r
                };
            },
            interpretResponse: function(e, r) {
                var i = this, s = r.bidderRequest;
                e = e.body;
                var o = [];
                if (!e || e.error) {
                    var a = "in response for ".concat(s.bidderCode, " adapter");
                    return e && e.error && (a += ": ".concat(e.error)), g.logError(a), o;
                }
                if (e.tags && e.tags.forEach(function(e) {
                    var r, a, n = (r = e) && r.ads && r.ads.length && v()(r.ads, function(e) {
                        return e.rtb;
                    });
                    if (n && 0 !== n.cpm && h()(i.supportedMediaTypes, n.ad_type)) {
                        var t = function(e, r, a) {
                            var n = g.getBidRequest(e.uuid, [ a ]), t = {
                                requestId: e.uuid,
                                cpm: r.cpm,
                                creativeId: r.creative_id,
                                dealId: r.deal_id,
                                currency: "USD",
                                netRevenue: !0,
                                ttl: 300,
                                adUnitCode: n.adUnitCode,
                                appnexus: {
                                    buyerMemberId: r.buyer_member_id,
                                    dealPriority: r.deal_priority,
                                    dealCode: r.deal_code
                                }
                            };
                            if (r.rtb.video) {
                                if (c(t, {
                                    width: r.rtb.video.player_width,
                                    height: r.rtb.video.player_height,
                                    vastUrl: r.rtb.video.asset_url,
                                    vastImpUrl: r.notify_url,
                                    ttl: 3600
                                }), r.renderer_url) {
                                    var i = g.deepAccess(a.bids[0], "renderer.options");
                                    c(t, {
                                        adResponse: e,
                                        renderer: function(e, r) {
                                            var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, n = p.a.install({
                                                id: r.renderer_id,
                                                url: r.renderer_url,
                                                config: a,
                                                loaded: !1,
                                                adUnitCode: e
                                            });
                                            try {
                                                n.setRender(b);
                                            } catch (e) {
                                                g.logWarn("Prebid Error calling setRender on renderer", e);
                                            }
                                            return n.setEventHandlers({
                                                impression: function() {
                                                    return g.logMessage("AppNexus outstream video impression event");
                                                },
                                                loaded: function() {
                                                    return g.logMessage("AppNexus outstream video loaded event");
                                                },
                                                ended: function() {
                                                    g.logMessage("AppNexus outstream renderer video event"), document.querySelector("#".concat(e)).style.display = "none";
                                                }
                                            }), n;
                                        }(t.adUnitCode, r, i)
                                    }), t.adResponse.ad = t.adResponse.ads[0], t.adResponse.ad.video = t.adResponse.ad.rtb.video;
                                }
                            } else if (r.rtb[u.b]) {
                                var s = r.rtb[u.b];
                                t[u.b] = {
                                    title: s.title,
                                    body: s.desc,
                                    body2: s.desc2,
                                    cta: s.ctatext,
                                    rating: s.rating,
                                    sponsoredBy: s.sponsored,
                                    privacyLink: s.privacy_link,
                                    address: s.address,
                                    downloads: s.downloads,
                                    likes: s.likes,
                                    phone: s.phone,
                                    price: s.price,
                                    salePrice: s.saleprice,
                                    clickUrl: s.link.url,
                                    displayUrl: s.displayurl,
                                    clickTrackers: s.link.click_trackers,
                                    impressionTrackers: s.impression_trackers,
                                    javascriptTrackers: s.javascript_trackers
                                }, s.main_img && (t.native.image = {
                                    url: s.main_img.url,
                                    height: s.main_img.height,
                                    width: s.main_img.width
                                }), s.icon && (t.native.icon = {
                                    url: s.icon.url,
                                    height: s.icon.height,
                                    width: s.icon.width
                                });
                            } else {
                                c(t, {
                                    width: r.rtb.banner.width,
                                    height: r.rtb.banner.height,
                                    ad: r.rtb.banner.content
                                });
                                try {
                                    var o = r.rtb.trackers[0].impression_urls[0], d = g.createTrackPixelHtml(o);
                                    t.ad += d;
                                } catch (e) {
                                    g.logError("Error appending tracking pixel", e);
                                }
                            }
                            return t;
                        }(e, n, s);
                        t.mediaType = (a = n.ad_type) === u.c ? u.c : a === u.b ? u.b : u.a, o.push(t);
                    }
                }), e.debug && e.debug.debug_info) {
                    var n = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info;
                    n = n.replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""), 
                    g.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"), 
                    g.logMessage(n);
                }
                return o;
            },
            getUserSyncs: function(e) {
                if (e.iframeEnabled) return [ {
                    type: "iframe",
                    url: "//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html"
                } ];
            },
            transformBidParams: function(a, e) {
                return a = g.convertTypes({
                    member: "string",
                    invCode: "string",
                    placementId: "number",
                    keywords: g.transformBidderParamKeywords
                }, a), e && (a.use_pmt_rule = "boolean" == typeof a.usePaymentRule && a.usePaymentRule, 
                a.usePaymentRule && delete a.usePaymentRule, l(a.keywords) && a.keywords.forEach(f), 
                Object.keys(a).forEach(function(e) {
                    var r = g.convertCamelToUnderscore(e);
                    r !== e && (a[r] = a[e], delete a[e]);
                })), a;
            }
        };
        function l(e) {
            return !!(g.isArray(e) && 0 < e.length);
        }
        function f(e) {
            l(e.value) && "" === e.value[0] && delete e.value;
        }
        function x(r) {
            var s, o, a = {};
            if (a.sizes = y(r.sizes), a.primary_size = a.sizes[0], a.ad_types = [], a.uuid = r.bidId, 
            r.params.placementId ? a.id = parseInt(r.params.placementId, 10) : a.code = r.params.invCode, 
            a.allow_smaller_sizes = r.params.allowSmallerSizes || !1, a.use_pmt_rule = r.params.usePaymentRule || !1, 
            a.prebid = !0, a.disable_psa = !0, r.params.reserve && (a.reserve = r.params.reserve), 
            r.params.position && (a.position = {
                above: 1,
                below: 2
            }[r.params.position] || 0), r.params.trafficSourceCode && (a.traffic_source_code = r.params.trafficSourceCode), 
            r.params.privateSizes && (a.private_sizes = y(r.params.privateSizes)), r.params.supplyType && (a.supply_type = r.params.supplyType), 
            r.params.pubClick && (a.pubclick = r.params.pubClick), r.params.extInvCode && (a.ext_inv_code = r.params.extInvCode), 
            r.params.externalImpId && (a.external_imp_id = r.params.externalImpId), !g.isEmpty(r.params.keywords)) {
                var e = g.transformBidderParamKeywords(r.params.keywords);
                0 < e.length && e.forEach(f), a.keywords = e;
            }
            if ((r.mediaType === u.b || g.deepAccess(r, "mediaTypes.".concat(u.b))) && (a.ad_types.push(u.b), 
            r.nativeParams)) {
                var n = (s = r.nativeParams, o = {}, Object.keys(s).forEach(function(e) {
                    var r = m[e] && m[e].serverName || m[e] || e, a = m[e] && m[e].requiredParams;
                    o[r] = c({}, a, s[e]);
                    var n = m[e] && m[e].minimumParams;
                    if (a && n) {
                        var t = Object.keys(s[e]), i = Object.keys(a);
                        0 === t.filter(function(e) {
                            return !h()(i, e);
                        }).length && (o[r] = c({}, o[r], n));
                    }
                }), o);
                a[u.b] = {
                    layouts: [ n ]
                };
            }
            var t = g.deepAccess(r, "mediaTypes.".concat(u.c)), i = g.deepAccess(r, "mediaTypes.video.context");
            return (r.mediaType === u.c || t) && a.ad_types.push(u.c), (r.mediaType === u.c || t && "outstream" !== i) && (a.require_asset_url = !0), 
            r.params.video && (a.video = {}, Object.keys(r.params.video).filter(function(e) {
                return h()(d, e);
            }).forEach(function(e) {
                return a.video[e] = r.params.video[e];
            })), (g.isEmpty(r.mediaType) && g.isEmpty(r.mediaTypes) || r.mediaType === u.a || r.mediaTypes && r.mediaTypes[u.a]) && a.ad_types.push(u.a), 
            a;
        }
        function y(e) {
            var r = [], a = {};
            if (g.isArray(e) && 2 === e.length && !g.isArray(e[0])) a.width = parseInt(e[0], 10), 
            a.height = parseInt(e[1], 10), r.push(a); else if ("object" === s(e)) for (var n = 0; n < e.length; n++) {
                var t = e[n];
                (a = {}).width = parseInt(t[0], 10), a.height = parseInt(t[1], 10), r.push(a);
            }
            return r;
        }
        function C(e) {
            return !!e.params.user;
        }
        function A(e) {
            return !!parseInt(e.params.member, 10);
        }
        function P(e) {
            if (e.params) return !!e.params.app;
        }
        function R(e) {
            return e.params && e.params.app ? !!e.params.app.id : !!e.params.app;
        }
        function T(e) {
            return !!e.debug;
        }
        function b(e) {
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
        Object(n.registerBidder)(o);
    }
}, [ 135 ]);

pbjsChunk([ 1 ], {
    169: function(n, t, e) {
        n.exports = e(170);
    },
    170: function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), e.d(t, "userCMP", function() {
            return o;
        }), e.d(t, "consentTimeout", function() {
            return a;
        }), e.d(t, "allowAuction", function() {
            return s;
        }), e.d(t, "staticConsentData", function() {
            return i;
        }), t.requestBidsHook = D, t.resetConsentData = function() {
            r = void 0, d.gdprDataHandler.setConsentData(null);
        }, t.setConfig = _;
        var o, a, s, i, r, u = e(0), c = e(3), d = e(8), l = e(7), f = e.n(l), g = e(171), p = e.n(g), m = "iab", C = 1e4, v = !0, w = !1, b = {
            iab: function(n, t, s) {
                var e, o = function() {
                    var t = {};
                    function e() {
                        t.getConsentData && t.getVendorConsents && n(t, s);
                    }
                    return {
                        consentDataCallback: function(n) {
                            t.getConsentData = n, e();
                        },
                        vendorConsentsCallback: function(n) {
                            t.getVendorConsents = n, e();
                        }
                    };
                }(), r = {};
                try {
                    e = window.__cmp || u.getWindowTop().__cmp;
                } catch (n) {}
                if (u.isFn(e)) e("getConsentData", null, o.consentDataCallback), e("getVendorConsents", null, o.vendorConsentsCallback); else if (window.$sf && window.$sf.ext && "function" == typeof window.$sf.ext.cmp) c("getConsentData", o.consentDataCallback), 
                c("getVendorConsents", o.vendorConsentsCallback); else {
                    for (var a, i = window; !a; ) {
                        try {
                            i.frames.__cmpLocator && (a = i);
                        } catch (n) {}
                        if (i === window.top) break;
                        i = i.parent;
                    }
                    if (!a) return t("CMP not found.", s);
                    d("getConsentData", a, o.consentDataCallback), d("getVendorConsents", a, o.vendorConsentsCallback);
                }
                function c(o, a) {
                    var n = s.adUnits, t = 1, e = 1;
                    if (Array.isArray(n) && 0 < n.length) {
                        var i = u.getAdUnitSizes(n[0]);
                        t = i[0][0], e = i[0][1];
                    }
                    window.$sf.ext.register(t, e, function(n, t) {
                        if ("cmpReturn" === n) {
                            var e = "getConsentData" === o ? t.vendorConsentData : t.vendorConsents;
                            a(e);
                        }
                    }), window.$sf.ext.cmp(o);
                }
                function d(n, i, t) {
                    function e(n) {
                        var t = "string" == typeof n.data && p()(n.data, "cmpReturn") ? JSON.parse(n.data) : n.data;
                        if (t.__cmpReturn && t.__cmpReturn.callId) {
                            var e = t.__cmpReturn;
                            void 0 !== r[e.callId] && (r[e.callId](e.returnValue, e.success), delete r[e.callId]);
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
                        r[o] = e, i.postMessage(a, "*");
                    }, window.addEventListener("message", e, !1), window.__cmp(n, null, function(n) {
                        window.removeEventListener("message", e, !1), t(n);
                    });
                }
            },
            static: function(n, t, e) {
                n(i, e);
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
            return r ? k(null, e) : f()(Object.keys(b), o) ? (b[o].call(this, h, x, e), void (e.haveExited || (0 === a ? h(void 0, e) : e.timer = setTimeout(function(n) {
                x("CMP workflow exceeded timeout threshold.", n);
            }.bind(null, e), a)))) : (u.logWarn("CMP framework (".concat(o, ") is not a supported framework.  Aborting consentManagement module and resuming auction.")), 
            e.nextFn.apply(e.context, e.args));
        }
        function h(n, t) {
            var e = n && n.getConsentData && n.getConsentData.gdprApplies;
            "boolean" == typeof e && (!0 !== e || u.isStr(n.getConsentData.consentData) && u.isPlainObject(n.getVendorConsents) && 1 < Object.keys(n.getVendorConsents).length) ? (clearTimeout(t.timer), 
            y(n), k(null, t)) : x("CMP returned unexpected value during lookup process.", t, n);
        }
        function x(n, t, e) {
            clearTimeout(t.timer), s && y(void 0), k(n, t, e);
        }
        function y(n) {
            r = {
                consentString: n ? n.getConsentData.consentData : void 0,
                vendorData: n ? n.getVendorConsents : void 0,
                gdprApplies: n ? n.getConsentData.gdprApplies : void 0
            }, d.gdprDataHandler.setConsentData(r);
        }
        function k(n, t, e) {
            if (!1 === t.haveExited) {
                t.haveExited = !0;
                var o = t.context, a = t.args, i = t.nextFn;
                n ? s ? (u.logWarn(n + " Resuming auction without consent data as per consentManagement config.", e), 
                i.apply(o, a)) : (u.logError(n + " Canceling auction as per consentManagement config.", e), 
                "function" == typeof t.bidsBackHandler ? t.bidsBackHandler() : u.logError("Error executing bidsBackHandler")) : i.apply(o, a);
            }
        }
        function _(n) {
            u.isStr(n.cmpApi) ? o = n.cmpApi : (o = m, u.logInfo("consentManagement config did not specify cmp.  Using system default setting (".concat(m, ")."))), 
            u.isNumber(n.timeout) ? a = n.timeout : (a = C, u.logInfo("consentManagement config did not specify timeout.  Using system default setting (".concat(C, ")."))), 
            "boolean" == typeof n.allowAuctionWithoutConsent ? s = n.allowAuctionWithoutConsent : (s = v, 
            u.logInfo("consentManagement config did not specify allowAuctionWithoutConsent.  Using system default setting (".concat(v, ")."))), 
            u.logInfo("consentManagement module has been activated..."), "static" === o && (u.isPlainObject(n.consentData) ? (i = n.consentData, 
            a = 0) : u.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), 
            w || pbjs.requestBids.before(D, 50), w = !0;
        }
        c.config.getConfig("consentManagement", function(n) {
            return _(n.consentManagement);
        });
    },
    171: function(n, t, e) {
        e(172), n.exports = e(13).String.includes;
    },
    172: function(n, t, e) {
        "use strict";
        var o = e(15), a = e(173), i = "includes";
        o(o.P + o.F * e(175)(i), "String", {
            includes: function(n) {
                return !!~a(this, n, i).indexOf(n, 1 < arguments.length ? arguments[1] : void 0);
            }
        });
    },
    173: function(n, t, e) {
        var o = e(174), a = e(25);
        n.exports = function(n, t, e) {
            if (o(t)) throw TypeError("String#" + e + " doesn't accept regex!");
            return String(a(n));
        };
    },
    174: function(n, t, e) {
        var o = e(16), a = e(24), i = e(26)("match");
        n.exports = function(n) {
            var t;
            return o(n) && (void 0 !== (t = n[i]) ? !!t : "RegExp" == a(n));
        };
    },
    175: function(n, t, e) {
        var o = e(26)("match");
        n.exports = function(t) {
            var e = /./;
            try {
                "/./"[t](e);
            } catch (n) {
                try {
                    return e[o] = !1, !"/./"[t](e);
                } catch (n) {}
            }
            return !0;
        };
    }
}, [ 169 ]);

pbjsChunk([ 2 ], {
    182: function(t, e, i) {
        t.exports = i(183);
    },
    183: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        }), __webpack_require__.d(__webpack_exports__, "FAST_BID_PUBKEY", function() {
            return FAST_BID_PUBKEY;
        }), __webpack_require__.d(__webpack_exports__, "spec", function() {
            return spec;
        }), __webpack_exports__.cryptoVerify = cryptoVerify;
        var __WEBPACK_IMPORTED_MODULE_0__src_adloader__ = __webpack_require__(29), __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory__ = __webpack_require__(1), __WEBPACK_IMPORTED_MODULE_2__src_url__ = __webpack_require__(11), __WEBPACK_IMPORTED_MODULE_3__src_utils__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_find__ = __webpack_require__(10), __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_find__), __WEBPACK_IMPORTED_MODULE_5_jsencrypt_bin_jsencrypt__ = __webpack_require__(184), __WEBPACK_IMPORTED_MODULE_5_jsencrypt_bin_jsencrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jsencrypt_bin_jsencrypt__), __WEBPACK_IMPORTED_MODULE_6_crypto_js_sha256__ = __webpack_require__(185), __WEBPACK_IMPORTED_MODULE_6_crypto_js_sha256___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_crypto_js_sha256__), ADAPTER_VERSION = 16, BIDDER_CODE = "criteo", CDB_ENDPOINT = "//bidder.criteo.com/cdb", CRITEO_VENDOR_ID = 91, INTEGRATION_MODES = {
            amp: 1
        }, PROFILE_ID_INLINE = 207, PROFILE_ID_PUBLISHERTAG = 185, PUBLISHER_TAG_URL = "//static.criteo.net/js/ld/publishertag.prebid.js", FAST_BID_PUBKEY = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDO1BjAITkFTtP0IMzmF7qsqhpu\ny1dGaTPHnjMU9mRZsrnfR3C0sEN5pYEzEcFRPnkJjJuhH8Rnh5+CE+LcKg0Z8ZZ7\nOmOSj0/qnYTAYCu0cR5LiyWG79KlIgUyMbp92ulGg24gAyGrVn4+v/4c53WlOEUp\n4YWvb82G0CD5NcDNpQIDAQAB\n-----END PUBLIC KEY-----", spec = {
            code: BIDDER_CODE,
            isBidRequestValid: function(t) {
                return !(!t || !t.params || !t.params.zoneId && !t.params.networkId);
            },
            buildRequests: function(t, e) {
                var i, r;
                if (publisherTagAvailable() || (window.Criteo = window.Criteo || {}, window.Criteo.usePrebidEvents = !1, 
                tryGetCriteoFastBid(), setTimeout(function() {
                    Object(__WEBPACK_IMPORTED_MODULE_0__src_adloader__.a)(PUBLISHER_TAG_URL, BIDDER_CODE);
                }, e.timeout)), publisherTagAvailable()) {
                    var n = new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG, ADAPTER_VERSION, t, e, "2.2.0");
                    i = n.buildCdbUrl(), r = n.buildCdbRequest();
                } else {
                    var s = buildContext(t);
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
                return e && e.slots && __WEBPACK_IMPORTED_MODULE_3__src_utils__.isArray(e.slots) && e.slots.forEach(function(e) {
                    var t = __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_find___default()(n.bidRequests, function(t) {
                        return t.adUnitCode === e.impid && (!t.params.zoneId || parseInt(t.params.zoneId) === e.zoneid);
                    }), i = t.bidId, r = {
                        requestId: i,
                        adId: e.bidId || __WEBPACK_IMPORTED_MODULE_3__src_utils__.getUniqueIdentifierStr(),
                        cpm: e.cpm,
                        currency: e.currency,
                        netRevenue: !0,
                        ttl: e.ttl || 60,
                        creativeId: i,
                        width: e.width,
                        height: e.height
                    };
                    e.native ? r.ad = createNativeAd(i, e.native, t.params.nativeCallback) : r.ad = e.creative, 
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
        function buildContext(t) {
            var e = __WEBPACK_IMPORTED_MODULE_3__src_utils__.getTopWindowUrl(), i = Object(__WEBPACK_IMPORTED_MODULE_2__src_url__.c)(e).search, r = {
                url: e,
                debug: "1" === i.pbt_debug,
                noLog: "1" === i.pbt_nolog,
                integrationMode: void 0
            };
            return t.forEach(function(t) {
                t.params.integrationMode && (r.integrationMode = t.params.integrationMode);
            }), r;
        }
        function buildCdbUrl(t) {
            var e = CDB_ENDPOINT;
            return e += "?profileId=" + PROFILE_ID_INLINE, e += "&av=" + String(ADAPTER_VERSION), 
            e += "&wv=" + encodeURIComponent("2.2.0"), e += "&cb=" + String(Math.floor(99999999999 * Math.random())), 
            t.integrationMode in INTEGRATION_MODES && (e += "&im=" + INTEGRATION_MODES[t.integrationMode]), 
            t.debug && (e += "&debug=1"), t.noLog && (e += "&nolog=1"), e;
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
                        sizes: t.sizes.map(function(t) {
                            return t[0] + "x" + t[1];
                        })
                    };
                    return t.params.zoneId && (e.zoneid = t.params.zoneId), t.params.publisherSubId && (e.publishersubid = t.params.publisherSubId), 
                    t.params.nativeCallback && (e.native = !0), e;
                })
            };
            return r && (n.publisher.networkid = r), i && i.gdprConsent && (n.gdprConsent = {}, 
            void 0 !== i.gdprConsent.gdprApplies && (n.gdprConsent.gdprApplies = !!i.gdprConsent.gdprApplies), 
            i.gdprConsent.vendorData && i.gdprConsent.vendorData.vendorConsents && void 0 !== i.gdprConsent.vendorData.vendorConsents[CRITEO_VENDOR_ID.toString(10)] && (n.gdprConsent.consentGiven = !!i.gdprConsent.vendorData.vendorConsents[CRITEO_VENDOR_ID.toString(10)]), 
            void 0 !== i.gdprConsent.consentString && (n.gdprConsent.consentData = i.gdprConsent.consentString)), 
            n;
        }
        function createNativeAd(t, e, i) {
            return window.criteo_prebid_native_slots = window.criteo_prebid_native_slots || {}, 
            window.criteo_prebid_native_slots[t] = {
                callback: i,
                payload: e
            }, '<script type="text/javascript">\n    var win = window;\n    for (var i = 0; i < 10; ++i) {\n      win = win.parent;\n      if (win.criteo_prebid_native_slots) {\n        var responseSlot = win.criteo_prebid_native_slots["'.concat(t, '"];\n        responseSlot.callback(responseSlot.payload);\n        break;\n      }\n    }\n  <\/script>');
        }
        function cryptoVerify(t, e, i) {
            var r = new __WEBPACK_IMPORTED_MODULE_5_jsencrypt_bin_jsencrypt___default.a();
            return r.setPublicKey(t), r.verify(i, e, __WEBPACK_IMPORTED_MODULE_6_crypto_js_sha256___default.a);
        }
        function validateFastBid(t) {
            var e = t.indexOf("\n"), i = t.substr(0, e).trim();
            if ("// Hash: " !== i.substr(0, 9)) return __WEBPACK_IMPORTED_MODULE_3__src_utils__.logWarn("No hash found in FastBid"), 
            !1;
            var r = i.substr(9), n = t.substr(e + 1);
            try {
                return cryptoVerify(FAST_BID_PUBKEY, r, n);
            } catch (t) {
                return void __WEBPACK_IMPORTED_MODULE_3__src_utils__.logWarn("Failed to verify Criteo FastBid");
            }
        }
        function tryGetCriteoFastBid() {
            try {
                var fastBid = localStorage.getItem("criteo_fast_bid");
                null !== fastBid && (!1 === validateFastBid(fastBid) ? (__WEBPACK_IMPORTED_MODULE_3__src_utils__.logWarn("Invalid Criteo FastBid found"), 
                localStorage.removeItem("criteo_fast_bid")) : (__WEBPACK_IMPORTED_MODULE_3__src_utils__.logInfo("Using Criteo FastBid"), 
                eval(fastBid)));
            } catch (t) {}
        }
        Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory__.registerBidder)(spec);
    },
    184: function(t, e, i) {
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
            }, v = {
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
                    var e = v.re.exec(t);
                    if (e) if (e[1]) t = e[1]; else {
                        if (!e[2]) throw new Error("RegExp out of sync");
                        t = e[2];
                    }
                    return v.decode(t);
                }
            }, _ = 1e13, y = function() {
                function t(t) {
                    this.buf = [ +t || 0 ];
                }
                return t.prototype.mulAdd = function(t, e) {
                    var i, r, n = this.buf, s = n.length;
                    for (i = 0; i < s; ++i) (r = n[i] * t + e) < _ ? e = 0 : r -= (e = 0 | r / _) * _, 
                    n[i] = r;
                    0 < e && (n[i] = e);
                }, t.prototype.sub = function(t) {
                    var e, i, r = this.buf, n = r.length;
                    for (e = 0; e < n; ++e) t = (i = r[e] - t) < 0 ? (i += _, 1) : 0, r[e] = i;
                    for (;0 === r[r.length - 1]; ) r.pop();
                }, t.prototype.toString = function(t) {
                    if (10 != (t || 10)) throw new Error("only base 10 is supported");
                    for (var e = this.buf, i = e[e.length - 1].toString(), r = e.length - 2; 0 <= r; --r) i += (_ + e[r]).toString().substring(1);
                    return i;
                }, t.prototype.valueOf = function() {
                    for (var t = this.buf, e = 0, i = t.length - 1; 0 <= i; --i) e = e * _ + t[i];
                    return e;
                }, t.prototype.simplify = function() {
                    var t = this.buf;
                    return 1 == t.length ? t[0] : this;
                }, t;
            }(), m = "…", b = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/, E = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
            function T(t, e) {
                return t.length > e && (t = t.substring(0, e) + m), t;
            }
            var S, D = function() {
                function i(t, e) {
                    this.hexDigits = "0123456789ABCDEF", this.pos = t instanceof i ? (this.enc = t.enc, 
                    t.pos) : (this.enc = t, e);
                }
                return i.prototype.get = function(t) {
                    if (void 0 === t && (t = this.pos++), t >= this.enc.length) throw new Error("Requesting byte offset " + t + " on a stream of length " + this.enc.length);
                    return "string" == typeof this.enc ? this.enc.charCodeAt(t) : this.enc[t];
                }, i.prototype.hexByte = function(t) {
                    return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t);
                }, i.prototype.hexDump = function(t, e, i) {
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
                }, i.prototype.isASCII = function(t, e) {
                    for (var i = t; i < e; ++i) {
                        var r = this.get(i);
                        if (r < 32 || 176 < r) return !1;
                    }
                    return !0;
                }, i.prototype.parseStringISO = function(t, e) {
                    for (var i = "", r = t; r < e; ++r) i += String.fromCharCode(this.get(r));
                    return i;
                }, i.prototype.parseStringUTF = function(t, e) {
                    for (var i = "", r = t; r < e; ) {
                        var n = this.get(r++);
                        i += n < 128 ? String.fromCharCode(n) : 191 < n && n < 224 ? String.fromCharCode((31 & n) << 6 | 63 & this.get(r++)) : String.fromCharCode((15 & n) << 12 | (63 & this.get(r++)) << 6 | 63 & this.get(r++));
                    }
                    return i;
                }, i.prototype.parseStringBMP = function(t, e) {
                    for (var i, r, n = "", s = t; s < e; ) i = this.get(s++), r = this.get(s++), n += String.fromCharCode(i << 8 | r);
                    return n;
                }, i.prototype.parseTime = function(t, e, i) {
                    var r = this.parseStringISO(t, e), n = (i ? b : E).exec(r);
                    return n ? (i && (n[1] = +n[1], n[1] += +n[1] < 70 ? 2e3 : 1900), r = n[1] + "-" + n[2] + "-" + n[3] + " " + n[4], 
                    n[5] && (r += ":" + n[5], n[6] && (r += ":" + n[6], n[7] && (r += "." + n[7]))), 
                    n[8] && (r += " UTC", "Z" != n[8] && (r += n[8], n[9] && (r += ":" + n[9]))), r) : "Unrecognized time: " + r;
                }, i.prototype.parseInteger = function(t, e) {
                    for (var i, r = this.get(t), n = 127 < r, s = n ? 255 : 0, o = ""; r == s && ++t < e; ) r = this.get(t);
                    if (0 === (i = e - t)) return n ? -1 : 0;
                    if (4 < i) {
                        for (o = r, i <<= 3; 0 == (128 & (+o ^ s)); ) o = +o << 1, --i;
                        o = "(" + i + " bit)\n";
                    }
                    n && (r -= 256);
                    for (var a = new y(r), h = t + 1; h < e; ++h) a.mulAdd(256, this.get(h));
                    return o + a.toString();
                }, i.prototype.parseBitString = function(t, e, i) {
                    for (var r = this.get(t), n = "(" + ((e - t - 1 << 3) - r) + " bit)\n", s = "", o = t + 1; o < e; ++o) {
                        for (var a = this.get(o), h = o == e - 1 ? r : 0, u = 7; h <= u; --u) s += a >> u & 1 ? "1" : "0";
                        if (s.length > i) return n + T(s, i);
                    }
                    return n + s;
                }, i.prototype.parseOctetString = function(t, e, i) {
                    if (this.isASCII(t, e)) return T(this.parseStringISO(t, e), i);
                    var r = e - t, n = "(" + r + " byte)\n";
                    (i /= 2) < r && (e = t + i);
                    for (var s = t; s < e; ++s) n += this.hexByte(this.get(s));
                    return i < r && (n += m), n;
                }, i.prototype.parseOID = function(t, e, i) {
                    for (var r = "", n = new y(), s = 0, o = t; o < e; ++o) {
                        var a = this.get(o);
                        if (n.mulAdd(128, 127 & a), s += 7, !(128 & a)) {
                            if ("" === r) if ((n = n.simplify()) instanceof y) n.sub(80), r = "2." + n.toString(); else {
                                var h = n < 80 ? n < 40 ? 0 : 1 : 2;
                                r = h + "." + (n - 40 * h);
                            } else r += "." + n.toString();
                            if (r.length > i) return T(r, i);
                            n = new y(), s = 0;
                        }
                    }
                    return 0 < s && (r += ".incomplete"), r;
                }, i;
            }(), w = function() {
                function c(t, e, i, r, n) {
                    if (!(r instanceof B)) throw new Error("Invalid tag value.");
                    this.stream = t, this.header = e, this.length = i, this.tag = r, this.sub = n;
                }
                return c.prototype.typeName = function() {
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
                }, c.prototype.content = function(t) {
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
                        return T(this.stream.parseStringUTF(e, e + i), t);

                      case 18:
                      case 19:
                      case 20:
                      case 21:
                      case 22:
                      case 26:
                        return T(this.stream.parseStringISO(e, e + i), t);

                      case 30:
                        return T(this.stream.parseStringBMP(e, e + i), t);

                      case 23:
                      case 24:
                        return this.stream.parseTime(e, e + i, 23 == this.tag.tagNumber);
                    }
                    return null;
                }, c.prototype.toString = function() {
                    return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]";
                }, c.prototype.toPrettyString = function(t) {
                    void 0 === t && (t = "");
                    var e = t + this.typeName() + " @" + this.stream.pos;
                    if (0 <= this.length && (e += "+"), e += this.length, this.tag.tagConstructed ? e += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (e += " (encapsulates)"), 
                    e += "\n", null !== this.sub) {
                        t += "  ";
                        for (var i = 0, r = this.sub.length; i < r; ++i) e += this.sub[i].toPrettyString(t);
                    }
                    return e;
                }, c.prototype.posStart = function() {
                    return this.stream.pos;
                }, c.prototype.posContent = function() {
                    return this.stream.pos + this.header;
                }, c.prototype.posEnd = function() {
                    return this.stream.pos + this.header + Math.abs(this.length);
                }, c.prototype.toHexString = function() {
                    return this.stream.hexDump(this.posStart(), this.posEnd(), !0);
                }, c.decodeLength = function(t) {
                    var e = t.get(), i = 127 & e;
                    if (i == e) return i;
                    if (6 < i) throw new Error("Length over 48 bits not supported at position " + (t.pos - 1));
                    if (0 === i) return null;
                    for (var r = e = 0; r < i; ++r) e = 256 * e + t.get();
                    return e;
                }, c.prototype.getHexStringValue = function() {
                    var t = this.toHexString(), e = 2 * this.header, i = 2 * this.length;
                    return t.substr(e, i);
                }, c.decode = function(t) {
                    var r;
                    r = t instanceof D ? t : new D(t, 0);
                    var e = new D(r), i = new B(r), n = c.decodeLength(r), s = r.pos, o = s - e.pos, a = null, h = function() {
                        var t = [];
                        if (null !== n) {
                            for (var e = s + n; r.pos < e; ) t[t.length] = c.decode(r);
                            if (r.pos != e) throw new Error("Content size is not correct for container starting at offset " + s);
                        } else try {
                            for (;;) {
                                var i = c.decode(r);
                                if (i.tag.isEOC()) break;
                                t[t.length] = i;
                            }
                            n = s - r.pos;
                        } catch (t) {
                            throw new Error("Exception while decoding undefined length content: " + t);
                        }
                        return t;
                    };
                    if (i.tagConstructed) a = h(); else if (i.isUniversal() && (3 == i.tagNumber || 4 == i.tagNumber)) try {
                        if (3 == i.tagNumber && 0 != r.get()) throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                        a = h();
                        for (var u = 0; u < a.length; ++u) if (a[u].tag.isEOC()) throw new Error("EOC is not supposed to be actual content.");
                    } catch (t) {
                        a = null;
                    }
                    if (null === a) {
                        if (null === n) throw new Error("We can't skip over an invalid tag with undefined length at offset " + s);
                        r.pos = s + Math.abs(n);
                    }
                    return new c(e, o, n, i, a);
                }, c;
            }(), B = function() {
                function t(t) {
                    var e = t.get();
                    if (this.tagClass = e >> 6, this.tagConstructed = 0 != (32 & e), this.tagNumber = 31 & e, 
                    31 == this.tagNumber) {
                        for (var i = new y(); e = t.get(), i.mulAdd(128, 127 & e), 128 & e; ) ;
                        this.tagNumber = i.simplify();
                    }
                }
                return t.prototype.isUniversal = function() {
                    return 0 === this.tagClass;
                }, t.prototype.isEOC = function() {
                    return 0 === this.tagClass && 0 === this.tagNumber;
                }, t;
            }(), R = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997 ], O = (1 << 26) / R[R.length - 1], I = function() {
                function m(t, e, i) {
                    null != t && ("number" == typeof t ? this.fromNumber(t, e, i) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e));
                }
                return m.prototype.toString = function(t) {
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
                }, m.prototype.negate = function() {
                    var t = C();
                    return m.ZERO.subTo(this, t), t;
                }, m.prototype.abs = function() {
                    return this.s < 0 ? this.negate() : this;
                }, m.prototype.compareTo = function(t) {
                    var e = this.s - t.s;
                    if (0 != e) return e;
                    var i = this.t;
                    if (0 != (e = i - t.t)) return this.s < 0 ? -e : e;
                    for (;0 <= --i; ) if (0 != (e = this[i] - t[i])) return e;
                    return 0;
                }, m.prototype.bitLength = function() {
                    return this.t <= 0 ? 0 : this.DB * (this.t - 1) + H(this[this.t - 1] ^ this.s & this.DM);
                }, m.prototype.mod = function(t) {
                    var e = C();
                    return this.abs().divRemTo(t, null, e), this.s < 0 && 0 < e.compareTo(m.ZERO) && t.subTo(e, e), 
                    e;
                }, m.prototype.modPowInt = function(t, e) {
                    var i;
                    return i = t < 256 || e.isEven() ? new x(e) : new P(e), this.exp(t, i);
                }, m.prototype.clone = function() {
                    var t = C();
                    return this.copyTo(t), t;
                }, m.prototype.intValue = function() {
                    if (this.s < 0) {
                        if (1 == this.t) return this[0] - this.DV;
                        if (0 == this.t) return -1;
                    } else {
                        if (1 == this.t) return this[0];
                        if (0 == this.t) return 0;
                    }
                    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
                }, m.prototype.byteValue = function() {
                    return 0 == this.t ? this.s : this[0] << 24 >> 24;
                }, m.prototype.shortValue = function() {
                    return 0 == this.t ? this.s : this[0] << 16 >> 16;
                }, m.prototype.signum = function() {
                    return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1;
                }, m.prototype.toByteArray = function() {
                    var t = this.t, e = [];
                    e[0] = this.s;
                    var i, r = this.DB - t * this.DB % 8, n = 0;
                    if (0 < t--) for (r < this.DB && (i = this[t] >> r) != (this.s & this.DM) >> r && (e[n++] = i | this.s << this.DB - r); 0 <= t; ) r < 8 ? (i = (this[t] & (1 << r) - 1) << 8 - r, 
                    i |= this[--t] >> (r += this.DB - 8)) : (i = this[t] >> (r -= 8) & 255, r <= 0 && (r += this.DB, 
                    --t)), 0 != (128 & i) && (i |= -256), 0 == n && (128 & this.s) != (128 & i) && ++n, 
                    (0 < n || i != this.s) && (e[n++] = i);
                    return e;
                }, m.prototype.equals = function(t) {
                    return 0 == this.compareTo(t);
                }, m.prototype.min = function(t) {
                    return this.compareTo(t) < 0 ? this : t;
                }, m.prototype.max = function(t) {
                    return 0 < this.compareTo(t) ? this : t;
                }, m.prototype.and = function(t) {
                    var e = C();
                    return this.bitwiseTo(t, i, e), e;
                }, m.prototype.or = function(t) {
                    var e = C();
                    return this.bitwiseTo(t, u, e), e;
                }, m.prototype.xor = function(t) {
                    var e = C();
                    return this.bitwiseTo(t, r, e), e;
                }, m.prototype.andNot = function(t) {
                    var e = C();
                    return this.bitwiseTo(t, n, e), e;
                }, m.prototype.not = function() {
                    for (var t = C(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
                    return t.t = this.t, t.s = ~this.s, t;
                }, m.prototype.shiftLeft = function(t) {
                    var e = C();
                    return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e;
                }, m.prototype.shiftRight = function(t) {
                    var e = C();
                    return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e;
                }, m.prototype.getLowestSetBit = function() {
                    for (var t = 0; t < this.t; ++t) if (0 != this[t]) return t * this.DB + s(this[t]);
                    return this.s < 0 ? this.t * this.DB : -1;
                }, m.prototype.bitCount = function() {
                    for (var t = 0, e = this.s & this.DM, i = 0; i < this.t; ++i) t += o(this[i] ^ e);
                    return t;
                }, m.prototype.testBit = function(t) {
                    var e = Math.floor(t / this.DB);
                    return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB);
                }, m.prototype.setBit = function(t) {
                    return this.changeBit(t, u);
                }, m.prototype.clearBit = function(t) {
                    return this.changeBit(t, n);
                }, m.prototype.flipBit = function(t) {
                    return this.changeBit(t, r);
                }, m.prototype.add = function(t) {
                    var e = C();
                    return this.addTo(t, e), e;
                }, m.prototype.subtract = function(t) {
                    var e = C();
                    return this.subTo(t, e), e;
                }, m.prototype.multiply = function(t) {
                    var e = C();
                    return this.multiplyTo(t, e), e;
                }, m.prototype.divide = function(t) {
                    var e = C();
                    return this.divRemTo(t, e, null), e;
                }, m.prototype.remainder = function(t) {
                    var e = C();
                    return this.divRemTo(t, null, e), e;
                }, m.prototype.divideAndRemainder = function(t) {
                    var e = C(), i = C();
                    return this.divRemTo(t, e, i), [ e, i ];
                }, m.prototype.modPow = function(t, e) {
                    var i, r, n = t.bitLength(), s = U(1);
                    if (n <= 0) return s;
                    i = n < 18 ? 1 : n < 48 ? 3 : n < 144 ? 4 : n < 768 ? 5 : 6, r = n < 8 ? new x(e) : e.isEven() ? new M(e) : new P(e);
                    var o = [], a = 3, h = i - 1, u = (1 << i) - 1;
                    if (o[1] = r.convert(this), 1 < i) {
                        var c = C();
                        for (r.sqrTo(o[1], c); a <= u; ) o[a] = C(), r.mulTo(c, o[a - 2], o[a]), a += 2;
                    }
                    var f, l, p = t.t - 1, d = !0, g = C();
                    for (n = H(t[p]) - 1; 0 <= p; ) {
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
                }, m.prototype.modInverse = function(t) {
                    var e = t.isEven();
                    if (this.isEven() && e || 0 == t.signum()) return m.ZERO;
                    for (var i = t.clone(), r = this.clone(), n = U(1), s = U(0), o = U(0), a = U(1); 0 != i.signum(); ) {
                        for (;i.isEven(); ) i.rShiftTo(1, i), e ? (n.isEven() && s.isEven() || (n.addTo(this, n), 
                        s.subTo(t, s)), n.rShiftTo(1, n)) : s.isEven() || s.subTo(t, s), s.rShiftTo(1, s);
                        for (;r.isEven(); ) r.rShiftTo(1, r), e ? (o.isEven() && a.isEven() || (o.addTo(this, o), 
                        a.subTo(t, a)), o.rShiftTo(1, o)) : a.isEven() || a.subTo(t, a), a.rShiftTo(1, a);
                        0 <= i.compareTo(r) ? (i.subTo(r, i), e && n.subTo(o, n), s.subTo(a, s)) : (r.subTo(i, r), 
                        e && o.subTo(n, o), a.subTo(s, a));
                    }
                    return 0 != r.compareTo(m.ONE) ? m.ZERO : 0 <= a.compareTo(t) ? a.subtract(t) : a.signum() < 0 ? (a.addTo(t, a), 
                    a.signum() < 0 ? a.add(t) : a) : a;
                }, m.prototype.pow = function(t) {
                    return this.exp(t, new A());
                }, m.prototype.gcd = function(t) {
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
                }, m.prototype.isProbablePrime = function(t) {
                    var e, i = this.abs();
                    if (1 == i.t && i[0] <= R[R.length - 1]) {
                        for (e = 0; e < R.length; ++e) if (i[0] == R[e]) return !0;
                        return !1;
                    }
                    if (i.isEven()) return !1;
                    for (e = 1; e < R.length; ) {
                        for (var r = R[e], n = e + 1; n < R.length && r < O; ) r *= R[n++];
                        for (r = i.modInt(r); e < n; ) if (r % R[e++] == 0) return !1;
                    }
                    return i.millerRabin(t);
                }, m.prototype.copyTo = function(t) {
                    for (var e = this.t - 1; 0 <= e; --e) t[e] = this[e];
                    t.t = this.t, t.s = this.s;
                }, m.prototype.fromInt = function(t) {
                    this.t = 1, this.s = t < 0 ? -1 : 0, 0 < t ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0;
                }, m.prototype.fromString = function(t, e) {
                    var i;
                    if (16 == e) i = 4; else if (8 == e) i = 3; else if (256 == e) i = 8; else if (2 == e) i = 1; else if (32 == e) i = 5; else {
                        if (4 != e) return void this.fromRadix(t, e);
                        i = 2;
                    }
                    this.t = 0, this.s = 0;
                    for (var r = t.length, n = !1, s = 0; 0 <= --r; ) {
                        var o = 8 == i ? 255 & +t[r] : j(t, r);
                        o < 0 ? "-" == t.charAt(r) && (n = !0) : (n = !1, 0 == s ? this[this.t++] = o : s + i > this.DB ? (this[this.t - 1] |= (o & (1 << this.DB - s) - 1) << s, 
                        this[this.t++] = o >> this.DB - s) : this[this.t - 1] |= o << s, (s += i) >= this.DB && (s -= this.DB));
                    }
                    8 == i && 0 != (128 & +t[0]) && (this.s = -1, 0 < s && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), 
                    this.clamp(), n && m.ZERO.subTo(this, this);
                }, m.prototype.clamp = function() {
                    for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t; ) --this.t;
                }, m.prototype.dlShiftTo = function(t, e) {
                    var i;
                    for (i = this.t - 1; 0 <= i; --i) e[i + t] = this[i];
                    for (i = t - 1; 0 <= i; --i) e[i] = 0;
                    e.t = this.t + t, e.s = this.s;
                }, m.prototype.drShiftTo = function(t, e) {
                    for (var i = t; i < this.t; ++i) e[i - t] = this[i];
                    e.t = Math.max(this.t - t, 0), e.s = this.s;
                }, m.prototype.lShiftTo = function(t, e) {
                    for (var i = t % this.DB, r = this.DB - i, n = (1 << r) - 1, s = Math.floor(t / this.DB), o = this.s << i & this.DM, a = this.t - 1; 0 <= a; --a) e[a + s + 1] = this[a] >> r | o, 
                    o = (this[a] & n) << i;
                    for (a = s - 1; 0 <= a; --a) e[a] = 0;
                    e[s] = o, e.t = this.t + s + 1, e.s = this.s, e.clamp();
                }, m.prototype.rShiftTo = function(t, e) {
                    e.s = this.s;
                    var i = Math.floor(t / this.DB);
                    if (i >= this.t) e.t = 0; else {
                        var r = t % this.DB, n = this.DB - r, s = (1 << r) - 1;
                        e[0] = this[i] >> r;
                        for (var o = i + 1; o < this.t; ++o) e[o - i - 1] |= (this[o] & s) << n, e[o - i] = this[o] >> r;
                        0 < r && (e[this.t - i - 1] |= (this.s & s) << n), e.t = this.t - i, e.clamp();
                    }
                }, m.prototype.subTo = function(t, e) {
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
                }, m.prototype.multiplyTo = function(t, e) {
                    var i = this.abs(), r = t.abs(), n = i.t;
                    for (e.t = n + r.t; 0 <= --n; ) e[n] = 0;
                    for (n = 0; n < r.t; ++n) e[n + i.t] = i.am(0, r[n], e, n, 0, i.t);
                    e.s = 0, e.clamp(), this.s != t.s && m.ZERO.subTo(e, e);
                }, m.prototype.squareTo = function(t) {
                    for (var e = this.abs(), i = t.t = 2 * e.t; 0 <= --i; ) t[i] = 0;
                    for (i = 0; i < e.t - 1; ++i) {
                        var r = e.am(i, e[i], t, 2 * i, 0, 1);
                        (t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, r, e.t - i - 1)) >= e.DV && (t[i + e.t] -= e.DV, 
                        t[i + e.t + 1] = 1);
                    }
                    0 < t.t && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)), t.s = 0, t.clamp();
                }, m.prototype.divRemTo = function(t, e, i) {
                    var r = t.abs();
                    if (!(r.t <= 0)) {
                        var n = this.abs();
                        if (n.t < r.t) return null != e && e.fromInt(0), void (null != i && this.copyTo(i));
                        null == i && (i = C());
                        var s = C(), o = this.s, a = t.s, h = this.DB - H(r[r.t - 1]);
                        0 < h ? (r.lShiftTo(h, s), n.lShiftTo(h, i)) : (r.copyTo(s), n.copyTo(i));
                        var u = s.t, c = s[u - 1];
                        if (0 != c) {
                            var f = c * (1 << this.F1) + (1 < u ? s[u - 2] >> this.F2 : 0), l = this.FV / f, p = (1 << this.F1) / f, d = 1 << this.F2, g = i.t, v = g - u, _ = null == e ? C() : e;
                            for (s.dlShiftTo(v, _), 0 <= i.compareTo(_) && (i[i.t++] = 1, i.subTo(_, i)), m.ONE.dlShiftTo(u, _), 
                            _.subTo(s, s); s.t < u; ) s[s.t++] = 0;
                            for (;0 <= --v; ) {
                                var y = i[--g] == c ? this.DM : Math.floor(i[g] * l + (i[g - 1] + d) * p);
                                if ((i[g] += s.am(0, y, i, v, 0, u)) < y) for (s.dlShiftTo(v, _), i.subTo(_, i); i[g] < --y; ) i.subTo(_, i);
                            }
                            null != e && (i.drShiftTo(u, e), o != a && m.ZERO.subTo(e, e)), i.t = u, i.clamp(), 
                            0 < h && i.rShiftTo(h, i), o < 0 && m.ZERO.subTo(i, i);
                        }
                    }
                }, m.prototype.invDigit = function() {
                    if (this.t < 1) return 0;
                    var t = this[0];
                    if (0 == (1 & t)) return 0;
                    var e = 3 & t;
                    return 0 < (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) ? this.DV - e : -e;
                }, m.prototype.isEven = function() {
                    return 0 == (0 < this.t ? 1 & this[0] : this.s);
                }, m.prototype.exp = function(t, e) {
                    if (4294967295 < t || t < 1) return m.ONE;
                    var i = C(), r = C(), n = e.convert(this), s = H(t) - 1;
                    for (n.copyTo(i); 0 <= --s; ) if (e.sqrTo(i, r), 0 < (t & 1 << s)) e.mulTo(r, n, i); else {
                        var o = i;
                        i = r, r = o;
                    }
                    return e.revert(i);
                }, m.prototype.chunkSize = function(t) {
                    return Math.floor(Math.LN2 * this.DB / Math.log(t));
                }, m.prototype.toRadix = function(t) {
                    if (null == t && (t = 10), 0 == this.signum() || t < 2 || 36 < t) return "0";
                    var e = this.chunkSize(t), i = Math.pow(t, e), r = U(i), n = C(), s = C(), o = "";
                    for (this.divRemTo(r, n, s); 0 < n.signum(); ) o = (i + s.intValue()).toString(t).substr(1) + o, 
                    n.divRemTo(r, n, s);
                    return s.intValue().toString(t) + o;
                }, m.prototype.fromRadix = function(t, e) {
                    this.fromInt(0), null == e && (e = 10);
                    for (var i = this.chunkSize(e), r = Math.pow(e, i), n = !1, s = 0, o = 0, a = 0; a < t.length; ++a) {
                        var h = j(t, a);
                        h < 0 ? "-" == t.charAt(a) && 0 == this.signum() && (n = !0) : (o = e * o + h, ++s >= i && (this.dMultiply(r), 
                        this.dAddOffset(o, 0), o = s = 0));
                    }
                    0 < s && (this.dMultiply(Math.pow(e, s)), this.dAddOffset(o, 0)), n && m.ZERO.subTo(this, this);
                }, m.prototype.fromNumber = function(t, e, i) {
                    if ("number" == typeof e) if (t < 2) this.fromInt(1); else for (this.fromNumber(t, i), 
                    this.testBit(t - 1) || this.bitwiseTo(m.ONE.shiftLeft(t - 1), u, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e); ) this.dAddOffset(2, 0), 
                    this.bitLength() > t && this.subTo(m.ONE.shiftLeft(t - 1), this); else {
                        var r = [], n = 7 & t;
                        r.length = 1 + (t >> 3), e.nextBytes(r), 0 < n ? r[0] &= (1 << n) - 1 : r[0] = 0, 
                        this.fromString(r, 256);
                    }
                }, m.prototype.bitwiseTo = function(t, e, i) {
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
                }, m.prototype.changeBit = function(t, e) {
                    var i = m.ONE.shiftLeft(t);
                    return this.bitwiseTo(i, e, i), i;
                }, m.prototype.addTo = function(t, e) {
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
                }, m.prototype.dMultiply = function(t) {
                    this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp();
                }, m.prototype.dAddOffset = function(t, e) {
                    if (0 != t) {
                        for (;this.t <= e; ) this[this.t++] = 0;
                        for (this[e] += t; this[e] >= this.DV; ) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), 
                        ++this[e];
                    }
                }, m.prototype.multiplyLowerTo = function(t, e, i) {
                    var r = Math.min(this.t + t.t, e);
                    for (i.s = 0, i.t = r; 0 < r; ) i[--r] = 0;
                    for (var n = i.t - this.t; r < n; ++r) i[r + this.t] = this.am(0, t[r], i, r, 0, this.t);
                    for (n = Math.min(t.t, e); r < n; ++r) this.am(0, t[r], i, r, 0, e - r);
                    i.clamp();
                }, m.prototype.multiplyUpperTo = function(t, e, i) {
                    --e;
                    var r = i.t = this.t + t.t - e;
                    for (i.s = 0; 0 <= --r; ) i[r] = 0;
                    for (r = Math.max(e - this.t, 0); r < t.t; ++r) i[this.t + r - e] = this.am(e - r, t[r], i, 0, 0, this.t + r - e);
                    i.clamp(), i.drShiftTo(1, i);
                }, m.prototype.modInt = function(t) {
                    if (t <= 0) return 0;
                    var e = this.DV % t, i = this.s < 0 ? t - 1 : 0;
                    if (0 < this.t) if (0 == e) i = this[0] % t; else for (var r = this.t - 1; 0 <= r; --r) i = (e * i + this[r]) % t;
                    return i;
                }, m.prototype.millerRabin = function(t) {
                    var e = this.subtract(m.ONE), i = e.getLowestSetBit();
                    if (i <= 0) return !1;
                    var r = e.shiftRight(i);
                    R.length < (t = t + 1 >> 1) && (t = R.length);
                    for (var n = C(), s = 0; s < t; ++s) {
                        n.fromInt(R[Math.floor(Math.random() * R.length)]);
                        var o = n.modPow(r, this);
                        if (0 != o.compareTo(m.ONE) && 0 != o.compareTo(e)) {
                            for (var a = 1; a++ < i && 0 != o.compareTo(e); ) if (0 == (o = o.modPowInt(2, this)).compareTo(m.ONE)) return !1;
                            if (0 != o.compareTo(e)) return !1;
                        }
                    }
                    return !0;
                }, m.prototype.square = function() {
                    var t = C();
                    return this.squareTo(t), t;
                }, m.prototype.gcda = function(t, e) {
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
                }, m.prototype.fromNumberAsync = function(t, e, i, r) {
                    if ("number" == typeof e) if (t < 2) this.fromInt(1); else {
                        this.fromNumber(t, i), this.testBit(t - 1) || this.bitwiseTo(m.ONE.shiftLeft(t - 1), u, this), 
                        this.isEven() && this.dAddOffset(1, 0);
                        var n = this, s = function() {
                            n.dAddOffset(2, 0), n.bitLength() > t && n.subTo(m.ONE.shiftLeft(t - 1), n), n.isProbablePrime(e) ? setTimeout(function() {
                                r();
                            }, 0) : setTimeout(s, 0);
                        };
                        setTimeout(s, 0);
                    } else {
                        var o = [], a = 7 & t;
                        o.length = 1 + (t >> 3), e.nextBytes(o), 0 < a ? o[0] &= (1 << a) - 1 : o[0] = 0, 
                        this.fromString(o, 256);
                    }
                }, m;
            }(), A = function() {
                function t() {}
                return t.prototype.convert = function(t) {
                    return t;
                }, t.prototype.revert = function(t) {
                    return t;
                }, t.prototype.mulTo = function(t, e, i) {
                    t.multiplyTo(e, i);
                }, t.prototype.sqrTo = function(t, e) {
                    t.squareTo(e);
                }, t;
            }(), x = function() {
                function t(t) {
                    this.m = t;
                }
                return t.prototype.convert = function(t) {
                    return t.s < 0 || 0 <= t.compareTo(this.m) ? t.mod(this.m) : t;
                }, t.prototype.revert = function(t) {
                    return t;
                }, t.prototype.reduce = function(t) {
                    t.divRemTo(this.m, null, t);
                }, t.prototype.mulTo = function(t, e, i) {
                    t.multiplyTo(e, i), this.reduce(i);
                }, t.prototype.sqrTo = function(t, e) {
                    t.squareTo(e), this.reduce(e);
                }, t;
            }(), P = function() {
                function t(t) {
                    this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, 
                    this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t;
                }
                return t.prototype.convert = function(t) {
                    var e = C();
                    return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && 0 < e.compareTo(I.ZERO) && this.m.subTo(e, e), 
                    e;
                }, t.prototype.revert = function(t) {
                    var e = C();
                    return t.copyTo(e), this.reduce(e), e;
                }, t.prototype.reduce = function(t) {
                    for (;t.t <= this.mt2; ) t[t.t++] = 0;
                    for (var e = 0; e < this.m.t; ++e) {
                        var i = 32767 & t[e], r = i * this.mpl + ((i * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                        for (t[i = e + this.m.t] += this.m.am(0, r, t, e, 0, this.m.t); t[i] >= t.DV; ) t[i] -= t.DV, 
                        t[++i]++;
                    }
                    t.clamp(), t.drShiftTo(this.m.t, t), 0 <= t.compareTo(this.m) && t.subTo(this.m, t);
                }, t.prototype.mulTo = function(t, e, i) {
                    t.multiplyTo(e, i), this.reduce(i);
                }, t.prototype.sqrTo = function(t, e) {
                    t.squareTo(e), this.reduce(e);
                }, t;
            }(), M = function() {
                function t(t) {
                    this.m = t, this.r2 = C(), this.q3 = C(), I.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t);
                }
                return t.prototype.convert = function(t) {
                    if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
                    if (t.compareTo(this.m) < 0) return t;
                    var e = C();
                    return t.copyTo(e), this.reduce(e), e;
                }, t.prototype.revert = function(t) {
                    return t;
                }, t.prototype.reduce = function(t) {
                    for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, 
                    t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0; ) t.dAddOffset(1, this.m.t + 1);
                    for (t.subTo(this.r2, t); 0 <= t.compareTo(this.m); ) t.subTo(this.m, t);
                }, t.prototype.mulTo = function(t, e, i) {
                    t.multiplyTo(e, i), this.reduce(i);
                }, t.prototype.sqrTo = function(t, e) {
                    t.squareTo(e), this.reduce(e);
                }, t;
            }();
            function C() {
                return new I(null);
            }
            function V(t, e) {
                return new I(t, e);
            }
            S = "Microsoft Internet Explorer" == navigator.appName ? (I.prototype.am = function(t, e, i, r, n, s) {
                for (var o = 32767 & e, a = e >> 15; 0 <= --s; ) {
                    var h = 32767 & this[t], u = this[t++] >> 15, c = a * h + u * o;
                    n = ((h = o * h + ((32767 & c) << 15) + i[r] + (1073741823 & n)) >>> 30) + (c >>> 15) + a * u + (n >>> 30), 
                    i[r++] = 1073741823 & h;
                }
                return n;
            }, 30) : "Netscape" != navigator.appName ? (I.prototype.am = function(t, e, i, r, n, s) {
                for (;0 <= --s; ) {
                    var o = e * this[t++] + i[r] + n;
                    n = Math.floor(o / 67108864), i[r++] = 67108863 & o;
                }
                return n;
            }, 26) : (I.prototype.am = function(t, e, i, r, n, s) {
                for (var o = 16383 & e, a = e >> 14; 0 <= --s; ) {
                    var h = 16383 & this[t], u = this[t++] >> 14, c = a * h + u * o;
                    n = ((h = o * h + ((16383 & c) << 14) + i[r] + n) >> 28) + (c >> 14) + a * u, i[r++] = 268435455 & h;
                }
                return n;
            }, 28), I.prototype.DB = S, I.prototype.DM = (1 << S) - 1, I.prototype.DV = 1 << S;
            I.prototype.FV = Math.pow(2, 52), I.prototype.F1 = 52 - S, I.prototype.F2 = 2 * S - 52;
            var N, L, q = [];
            for (N = "0".charCodeAt(0), L = 0; L <= 9; ++L) q[N++] = L;
            for (N = "a".charCodeAt(0), L = 10; L < 36; ++L) q[N++] = L;
            for (N = "A".charCodeAt(0), L = 10; L < 36; ++L) q[N++] = L;
            function j(t, e) {
                var i = q[t.charCodeAt(e)];
                return null == i ? -1 : i;
            }
            function U(t) {
                var e = C();
                return e.fromInt(t), e;
            }
            function H(t) {
                var e, i = 1;
                return 0 != (e = t >>> 16) && (t = e, i += 16), 0 != (e = t >> 8) && (t = e, i += 8), 
                0 != (e = t >> 4) && (t = e, i += 4), 0 != (e = t >> 2) && (t = e, i += 2), 0 != (e = t >> 1) && (t = e, 
                i += 1), i;
            }
            I.ZERO = U(0), I.ONE = U(1);
            var K = function() {
                function t() {
                    this.i = 0, this.j = 0, this.S = [];
                }
                return t.prototype.init = function(t) {
                    var e, i, r;
                    for (e = 0; e < 256; ++e) this.S[e] = e;
                    for (e = i = 0; e < 256; ++e) i = i + this.S[e] + t[e % t.length] & 255, r = this.S[e], 
                    this.S[e] = this.S[i], this.S[i] = r;
                    this.i = 0, this.j = 0;
                }, t.prototype.next = function() {
                    var t;
                    return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], 
                    this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255];
                }, t;
            }();
            var F, k, z = 256, G = null;
            if (null == G) {
                G = [];
                var W = void (k = 0);
                if (window.crypto && window.crypto.getRandomValues) {
                    var Z = new Uint32Array(256);
                    for (window.crypto.getRandomValues(Z), W = 0; W < Z.length; ++W) G[k++] = 255 & Z[W];
                }
                var Y = function(t) {
                    if (this.count = this.count || 0, 256 <= this.count || z <= k) window.removeEventListener ? window.removeEventListener("mousemove", Y, !1) : window.detachEvent && window.detachEvent("onmousemove", Y); else try {
                        var e = t.x + t.y;
                        G[k++] = 255 & e, this.count += 1;
                    } catch (t) {}
                };
                window.addEventListener ? window.addEventListener("mousemove", Y, !1) : window.attachEvent && window.attachEvent("onmousemove", Y);
            }
            function $() {
                if (null == F) {
                    for (F = new K(); k < z; ) {
                        var t = Math.floor(65536 * Math.random());
                        G[k++] = 255 & t;
                    }
                    for (F.init(G), k = 0; k < G.length; ++k) G[k] = 0;
                    k = 0;
                }
                return F.next();
            }
            var Q = function() {
                function t() {}
                return t.prototype.nextBytes = function(t) {
                    for (var e = 0; e < t.length; ++e) t[e] = $();
                }, t;
            }();
            var J = function() {
                function t() {
                    this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, 
                    this.dmq1 = null, this.coeff = null;
                }
                return t.prototype.doPublic = function(t) {
                    return t.modPowInt(this.e, this.n);
                }, t.prototype.doPrivate = function(t) {
                    if (null == this.p || null == this.q) return t.modPow(this.d, this.n);
                    for (var e = t.mod(this.p).modPow(this.dmp1, this.p), i = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(i) < 0; ) e = e.add(this.p);
                    return e.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i);
                }, t.prototype.setPublic = function(t, e) {
                    null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = V(t, 16), this.e = parseInt(e, 16)) : console.error("Invalid RSA public key");
                }, t.prototype.encrypt = function(t) {
                    var e = function(t, e) {
                        if (e < t.length + 11) return console.error("Message too long for RSA"), null;
                        for (var i = [], r = t.length - 1; 0 <= r && 0 < e; ) {
                            var n = t.charCodeAt(r--);
                            i[--e] = n < 128 ? n : 127 < n && n < 2048 ? (i[--e] = 63 & n | 128, n >> 6 | 192) : (i[--e] = 63 & n | 128, 
                            i[--e] = n >> 6 & 63 | 128, n >> 12 | 224);
                        }
                        i[--e] = 0;
                        for (var s = new Q(), o = []; 2 < e; ) {
                            for (o[0] = 0; 0 == o[0]; ) s.nextBytes(o);
                            i[--e] = o[0];
                        }
                        return i[--e] = 2, i[--e] = 0, new I(i);
                    }(t, this.n.bitLength() + 7 >> 3);
                    if (null == e) return null;
                    var i = this.doPublic(e);
                    if (null == i) return null;
                    var r = i.toString(16);
                    return 0 == (1 & r.length) ? r : "0" + r;
                }, t.prototype.setPrivate = function(t, e, i) {
                    null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = V(t, 16), this.e = parseInt(e, 16), 
                    this.d = V(i, 16)) : console.error("Invalid RSA private key");
                }, t.prototype.setPrivateEx = function(t, e, i, r, n, s, o, a) {
                    null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = V(t, 16), this.e = parseInt(e, 16), 
                    this.d = V(i, 16), this.p = V(r, 16), this.q = V(n, 16), this.dmp1 = V(s, 16), this.dmq1 = V(o, 16), 
                    this.coeff = V(a, 16)) : console.error("Invalid RSA private key");
                }, t.prototype.generate = function(t, e) {
                    var i = new Q(), r = t >> 1;
                    this.e = parseInt(e, 16);
                    for (var n = new I(e, 16); ;) {
                        for (;this.p = new I(t - r, 1, i), 0 != this.p.subtract(I.ONE).gcd(n).compareTo(I.ONE) || !this.p.isProbablePrime(10); ) ;
                        for (;this.q = new I(r, 1, i), 0 != this.q.subtract(I.ONE).gcd(n).compareTo(I.ONE) || !this.q.isProbablePrime(10); ) ;
                        if (this.p.compareTo(this.q) <= 0) {
                            var s = this.p;
                            this.p = this.q, this.q = s;
                        }
                        var o = this.p.subtract(I.ONE), a = this.q.subtract(I.ONE), h = o.multiply(a);
                        if (0 == h.gcd(n).compareTo(I.ONE)) {
                            this.n = this.p.multiply(this.q), this.d = n.modInverse(h), this.dmp1 = this.d.mod(o), 
                            this.dmq1 = this.d.mod(a), this.coeff = this.q.modInverse(this.p);
                            break;
                        }
                    }
                }, t.prototype.decrypt = function(t) {
                    var e = V(t, 16), i = this.doPrivate(e);
                    return null == i ? null : function(t, e) {
                        var i = t.toByteArray(), r = 0;
                        for (;r < i.length && 0 == i[r]; ) ++r;
                        if (i.length - r != e - 1 || 2 != i[r]) return null;
                        ++r;
                        for (;0 != i[r]; ) if (++r >= i.length) return null;
                        var n = "";
                        for (;++r < i.length; ) {
                            var s = 255 & i[r];
                            s < 128 ? n += String.fromCharCode(s) : 191 < s && s < 224 ? (n += String.fromCharCode((31 & s) << 6 | 63 & i[r + 1]), 
                            ++r) : (n += String.fromCharCode((15 & s) << 12 | (63 & i[r + 1]) << 6 | 63 & i[r + 2]), 
                            r += 2);
                        }
                        return n;
                    }(i, this.n.bitLength() + 7 >> 3);
                }, t.prototype.generateAsync = function(t, e, n) {
                    var s = new Q(), o = t >> 1;
                    this.e = parseInt(e, 16);
                    var a = new I(e, 16), h = this, u = function() {
                        var e = function() {
                            if (h.p.compareTo(h.q) <= 0) {
                                var t = h.p;
                                h.p = h.q, h.q = t;
                            }
                            var e = h.p.subtract(I.ONE), i = h.q.subtract(I.ONE), r = e.multiply(i);
                            0 == r.gcd(a).compareTo(I.ONE) ? (h.n = h.p.multiply(h.q), h.d = a.modInverse(r), 
                            h.dmp1 = h.d.mod(e), h.dmq1 = h.d.mod(i), h.coeff = h.q.modInverse(h.p), setTimeout(function() {
                                n();
                            }, 0)) : setTimeout(u, 0);
                        }, i = function() {
                            h.q = C(), h.q.fromNumberAsync(o, 1, s, function() {
                                h.q.subtract(I.ONE).gcda(a, function(t) {
                                    0 == t.compareTo(I.ONE) && h.q.isProbablePrime(10) ? setTimeout(e, 0) : setTimeout(i, 0);
                                });
                            });
                        }, r = function() {
                            h.p = C(), h.p.fromNumberAsync(t - o, 1, s, function() {
                                h.p.subtract(I.ONE).gcda(a, function(t) {
                                    0 == t.compareTo(I.ONE) && h.p.isProbablePrime(10) ? setTimeout(i, 0) : setTimeout(r, 0);
                                });
                            });
                        };
                        setTimeout(r, 0);
                    };
                    setTimeout(u, 0);
                }, t.prototype.sign = function(t, e, i) {
                    var r = function(t, e) {
                        if (e < t.length + 22) return console.error("Message too long for RSA"), null;
                        for (var i = e - t.length - 6, r = "", n = 0; n < i; n += 2) r += "ff";
                        return V("0001" + r + "00" + t, 16);
                    }((X[i] || "") + e(t).toString(), this.n.bitLength() / 4);
                    if (null == r) return null;
                    var n = this.doPrivate(r);
                    if (null == n) return null;
                    var s = n.toString(16);
                    return 0 == (1 & s.length) ? s : "0" + s;
                }, t.prototype.verify = function(t, e, i) {
                    var r = V(e, 16), n = this.doPublic(r);
                    return null == n ? null : function(t) {
                        for (var e in X) if (X.hasOwnProperty(e)) {
                            var i = X[e], r = i.length;
                            if (t.substr(0, r) == i) return t.substr(r);
                        }
                        return t;
                    }(n.toString(16).replace(/^1f+00/, "")) == i(t).toString();
                }, t;
            }();
            var X = {
                md2: "3020300c06082a864886f70d020205000410",
                md5: "3020300c06082a864886f70d020505000410",
                sha1: "3021300906052b0e03021a05000414",
                sha224: "302d300d06096086480165030402040500041c",
                sha256: "3031300d060960864801650304020105000420",
                sha384: "3041300d060960864801650304020205000430",
                sha512: "3051300d060960864801650304020305000440",
                ripemd160: "3021300906052b2403020105000414"
            };
            var tt = {};
            tt.lang = {
                extend: function(t, e, i) {
                    if (!e || !t) throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
                    var r = function() {};
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
            var et = {};
            void 0 !== et.asn1 && et.asn1 || (et.asn1 = {}), et.asn1.ASN1Util = new function() {
                this.integerToByteHex = function(t) {
                    var e = t.toString(16);
                    return e.length % 2 == 1 && (e = "0" + e), e;
                }, this.bigIntToMinTwosComplementsHex = function(t) {
                    var e = t.toString(16);
                    if ("-" != e.substr(0, 1)) e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e); else {
                        var i = e.substr(1).length;
                        i % 2 == 1 ? i += 1 : e.match(/^[0-7]/) || (i += 2);
                        for (var r = "", n = 0; n < i; n++) r += "f";
                        e = new I(r, 16).xor(t).add(I.ONE).toString(16).replace(/^-/, "");
                    }
                    return e;
                }, this.getPEMStringFromHex = function(t, e) {
                    return hextopem(t, e);
                }, this.newObject = function(t) {
                    var e = et.asn1, i = e.DERBoolean, r = e.DERInteger, n = e.DERBitString, s = e.DEROctetString, o = e.DERNull, a = e.DERObjectIdentifier, h = e.DEREnumerated, u = e.DERUTF8String, c = e.DERNumericString, f = e.DERPrintableString, l = e.DERTeletexString, p = e.DERIA5String, d = e.DERUTCTime, g = e.DERGeneralizedTime, v = e.DERSequence, _ = e.DERSet, y = e.DERTaggedObject, m = e.ASN1Util.newObject, b = Object.keys(t);
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
                            var w = m(T[D]);
                            S.push(w);
                        }
                        return new v({
                            array: S
                        });
                    }
                    if ("set" == E) {
                        for (T = t[E], S = [], D = 0; D < T.length; D++) {
                            w = m(T[D]);
                            S.push(w);
                        }
                        return new _({
                            array: S
                        });
                    }
                    if ("tag" == E) {
                        var B = t[E];
                        if ("[object Array]" === Object.prototype.toString.call(B) && 3 == B.length) {
                            var R = m(B[2]);
                            return new y({
                                tag: B[0],
                                explicit: B[1],
                                obj: R
                            });
                        }
                        var O = {};
                        if (void 0 !== B.explicit && (O.explicit = B.explicit), void 0 !== B.tag && (O.tag = B.tag), 
                        void 0 === B.obj) throw "obj shall be specified for 'tag'.";
                        return O.obj = m(B.obj), new y(O);
                    }
                }, this.jsonToASN1HEX = function(t) {
                    return this.newObject(t).getEncodedHex();
                };
            }(), et.asn1.ASN1Util.oidHexToInt = function(t) {
                for (var e = "", i = parseInt(t.substr(0, 2), 16), r = (e = Math.floor(i / 40) + "." + i % 40, 
                ""), n = 2; n < t.length; n += 2) {
                    var s = ("00000000" + parseInt(t.substr(n, 2), 16).toString(2)).slice(-8);
                    if (r += s.substr(1, 7), "0" == s.substr(0, 1)) e = e + "." + new I(r, 2).toString(10), 
                    r = "";
                }
                return e;
            }, et.asn1.ASN1Util.oidIntToHex = function(t) {
                var a = function(t) {
                    var e = t.toString(16);
                    return 1 == e.length && (e = "0" + e), e;
                }, e = function(t) {
                    var e = "", i = new I(t, 10).toString(2), r = 7 - i.length % 7;
                    7 == r && (r = 0);
                    for (var n = "", s = 0; s < r; s++) n += "0";
                    i = n + i;
                    for (s = 0; s < i.length - 1; s += 7) {
                        var o = i.substr(s, 7);
                        s != i.length - 7 && (o = "1" + o), e += a(parseInt(o, 2));
                    }
                    return e;
                };
                if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
                var i = "", r = t.split("."), n = 40 * parseInt(r[0]) + parseInt(r[1]);
                i += a(n), r.splice(0, 2);
                for (var s = 0; s < r.length; s++) i += e(r[s]);
                return i;
            }, et.asn1.ASN1Object = function() {
                this.getLengthHexFromValue = function() {
                    if (void 0 === this.hV || null == this.hV) throw "this.hV is null or undefined.";
                    if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
                    var t = this.hV.length / 2, e = t.toString(16);
                    if (e.length % 2 == 1 && (e = "0" + e), t < 128) return e;
                    var i = e.length / 2;
                    if (15 < i) throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
                    return (128 + i).toString(16) + e;
                }, this.getEncodedHex = function() {
                    return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), 
                    this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, 
                    this.isModified = !1), this.hTLV;
                }, this.getValueHex = function() {
                    return this.getEncodedHex(), this.hV;
                }, this.getFreshValueHex = function() {
                    return "";
                };
            }, et.asn1.DERAbstractString = function(t) {
                et.asn1.DERAbstractString.superclass.constructor.call(this), this.getString = function() {
                    return this.s;
                }, this.setString = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(this.s);
                }, this.setStringHex = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t;
                }, this.getFreshValueHex = function() {
                    return this.hV;
                }, void 0 !== t && ("string" == typeof t ? this.setString(t) : void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex && this.setStringHex(t.hex));
            }, tt.lang.extend(et.asn1.DERAbstractString, et.asn1.ASN1Object), et.asn1.DERAbstractTime = function(t) {
                et.asn1.DERAbstractTime.superclass.constructor.call(this), this.localDateToUTC = function(t) {
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
            }, tt.lang.extend(et.asn1.DERAbstractTime, et.asn1.ASN1Object), et.asn1.DERAbstractStructured = function(t) {
                et.asn1.DERAbstractString.superclass.constructor.call(this), this.setByASN1ObjectArray = function(t) {
                    this.hTLV = null, this.isModified = !0, this.asn1Array = t;
                }, this.appendASN1Object = function(t) {
                    this.hTLV = null, this.isModified = !0, this.asn1Array.push(t);
                }, this.asn1Array = new Array(), void 0 !== t && void 0 !== t.array && (this.asn1Array = t.array);
            }, tt.lang.extend(et.asn1.DERAbstractStructured, et.asn1.ASN1Object), et.asn1.DERBoolean = function() {
                et.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff";
            }, tt.lang.extend(et.asn1.DERBoolean, et.asn1.ASN1Object), et.asn1.DERInteger = function(t) {
                et.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function(t) {
                    this.hTLV = null, this.isModified = !0, this.hV = et.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t);
                }, this.setByInteger = function(t) {
                    var e = new I(String(t), 10);
                    this.setByBigInteger(e);
                }, this.setValueHex = function(t) {
                    this.hV = t;
                }, this.getFreshValueHex = function() {
                    return this.hV;
                }, void 0 !== t && (void 0 !== t.bigint ? this.setByBigInteger(t.bigint) : void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex));
            }, tt.lang.extend(et.asn1.DERInteger, et.asn1.ASN1Object), et.asn1.DERBitString = function(t) {
                if (void 0 !== t && void 0 !== t.obj) {
                    var e = et.asn1.ASN1Util.newObject(t.obj);
                    t.hex = "00" + e.getEncodedHex();
                }
                et.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(t) {
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
            }, tt.lang.extend(et.asn1.DERBitString, et.asn1.ASN1Object), et.asn1.DEROctetString = function(t) {
                if (void 0 !== t && void 0 !== t.obj) {
                    var e = et.asn1.ASN1Util.newObject(t.obj);
                    t.hex = e.getEncodedHex();
                }
                et.asn1.DEROctetString.superclass.constructor.call(this, t), this.hT = "04";
            }, tt.lang.extend(et.asn1.DEROctetString, et.asn1.DERAbstractString), et.asn1.DERNull = function() {
                et.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500";
            }, tt.lang.extend(et.asn1.DERNull, et.asn1.ASN1Object), et.asn1.DERObjectIdentifier = function(t) {
                var a = function(t) {
                    var e = t.toString(16);
                    return 1 == e.length && (e = "0" + e), e;
                }, s = function(t) {
                    var e = "", i = new I(t, 10).toString(2), r = 7 - i.length % 7;
                    7 == r && (r = 0);
                    for (var n = "", s = 0; s < r; s++) n += "0";
                    i = n + i;
                    for (s = 0; s < i.length - 1; s += 7) {
                        var o = i.substr(s, 7);
                        s != i.length - 7 && (o = "1" + o), e += a(parseInt(o, 2));
                    }
                    return e;
                };
                et.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t;
                }, this.setValueOidString = function(t) {
                    if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
                    var e = "", i = t.split("."), r = 40 * parseInt(i[0]) + parseInt(i[1]);
                    e += a(r), i.splice(0, 2);
                    for (var n = 0; n < i.length; n++) e += s(i[n]);
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = e;
                }, this.setValueName = function(t) {
                    var e = et.asn1.x509.OID.name2oid(t);
                    if ("" === e) throw "DERObjectIdentifier oidName undefined: " + t;
                    this.setValueOidString(e);
                }, this.getFreshValueHex = function() {
                    return this.hV;
                }, void 0 !== t && ("string" == typeof t ? t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t) : void 0 !== t.oid ? this.setValueOidString(t.oid) : void 0 !== t.hex ? this.setValueHex(t.hex) : void 0 !== t.name && this.setValueName(t.name));
            }, tt.lang.extend(et.asn1.DERObjectIdentifier, et.asn1.ASN1Object), et.asn1.DEREnumerated = function(t) {
                et.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function(t) {
                    this.hTLV = null, this.isModified = !0, this.hV = et.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t);
                }, this.setByInteger = function(t) {
                    var e = new I(String(t), 10);
                    this.setByBigInteger(e);
                }, this.setValueHex = function(t) {
                    this.hV = t;
                }, this.getFreshValueHex = function() {
                    return this.hV;
                }, void 0 !== t && (void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex));
            }, tt.lang.extend(et.asn1.DEREnumerated, et.asn1.ASN1Object), et.asn1.DERUTF8String = function(t) {
                et.asn1.DERUTF8String.superclass.constructor.call(this, t), this.hT = "0c";
            }, tt.lang.extend(et.asn1.DERUTF8String, et.asn1.DERAbstractString), et.asn1.DERNumericString = function(t) {
                et.asn1.DERNumericString.superclass.constructor.call(this, t), this.hT = "12";
            }, tt.lang.extend(et.asn1.DERNumericString, et.asn1.DERAbstractString), et.asn1.DERPrintableString = function(t) {
                et.asn1.DERPrintableString.superclass.constructor.call(this, t), this.hT = "13";
            }, tt.lang.extend(et.asn1.DERPrintableString, et.asn1.DERAbstractString), et.asn1.DERTeletexString = function(t) {
                et.asn1.DERTeletexString.superclass.constructor.call(this, t), this.hT = "14";
            }, tt.lang.extend(et.asn1.DERTeletexString, et.asn1.DERAbstractString), et.asn1.DERIA5String = function(t) {
                et.asn1.DERIA5String.superclass.constructor.call(this, t), this.hT = "16";
            }, tt.lang.extend(et.asn1.DERIA5String, et.asn1.DERAbstractString), et.asn1.DERUTCTime = function(t) {
                et.asn1.DERUTCTime.superclass.constructor.call(this, t), this.hT = "17", this.setByDate = function(t) {
                    this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "utc"), 
                    this.hV = stohex(this.s);
                }, this.getFreshValueHex = function() {
                    return void 0 === this.date && void 0 === this.s && (this.date = new Date(), this.s = this.formatDate(this.date, "utc"), 
                    this.hV = stohex(this.s)), this.hV;
                }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date));
            }, tt.lang.extend(et.asn1.DERUTCTime, et.asn1.DERAbstractTime), et.asn1.DERGeneralizedTime = function(t) {
                et.asn1.DERGeneralizedTime.superclass.constructor.call(this, t), this.hT = "18", 
                this.withMillis = !1, this.setByDate = function(t) {
                    this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "gen", this.withMillis), 
                    this.hV = stohex(this.s);
                }, this.getFreshValueHex = function() {
                    return void 0 === this.date && void 0 === this.s && (this.date = new Date(), this.s = this.formatDate(this.date, "gen", this.withMillis), 
                    this.hV = stohex(this.s)), this.hV;
                }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date), 
                !0 === t.millis && (this.withMillis = !0));
            }, tt.lang.extend(et.asn1.DERGeneralizedTime, et.asn1.DERAbstractTime), et.asn1.DERSequence = function(t) {
                et.asn1.DERSequence.superclass.constructor.call(this, t), this.hT = "30", this.getFreshValueHex = function() {
                    for (var t = "", e = 0; e < this.asn1Array.length; e++) {
                        t += this.asn1Array[e].getEncodedHex();
                    }
                    return this.hV = t, this.hV;
                };
            }, tt.lang.extend(et.asn1.DERSequence, et.asn1.DERAbstractStructured), et.asn1.DERSet = function(t) {
                et.asn1.DERSet.superclass.constructor.call(this, t), this.hT = "31", this.sortFlag = !0, 
                this.getFreshValueHex = function() {
                    for (var t = new Array(), e = 0; e < this.asn1Array.length; e++) {
                        var i = this.asn1Array[e];
                        t.push(i.getEncodedHex());
                    }
                    return 1 == this.sortFlag && t.sort(), this.hV = t.join(""), this.hV;
                }, void 0 !== t && void 0 !== t.sortflag && 0 == t.sortflag && (this.sortFlag = !1);
            }, tt.lang.extend(et.asn1.DERSet, et.asn1.DERAbstractStructured), et.asn1.DERTaggedObject = function(t) {
                et.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", 
                this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function(t, e, i) {
                    this.hT = e, this.isExplicit = t, this.asn1Object = i, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), 
                    this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = i.getEncodedHex(), 
                    this.hTLV = this.hTLV.replace(/^../, e), this.isModified = !1);
                }, this.getFreshValueHex = function() {
                    return this.hV;
                }, void 0 !== t && (void 0 !== t.tag && (this.hT = t.tag), void 0 !== t.explicit && (this.isExplicit = t.explicit), 
                void 0 !== t.obj && (this.asn1Object = t.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
            }, tt.lang.extend(et.asn1.DERTaggedObject, et.asn1.ASN1Object);
            var it = function(i) {
                function r(t) {
                    var e = i.call(this) || this;
                    return t && ("string" == typeof t ? e.parseKey(t) : (r.hasPrivateKeyProperty(t) || r.hasPublicKeyProperty(t)) && e.parsePropertiesFrom(t)), 
                    e;
                }
                return function(t, e) {
                    function i() {
                        this.constructor = t;
                    }
                    p(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, 
                    new i());
                }(r, i), r.prototype.parseKey = function(t) {
                    try {
                        var e = 0, i = 0, r = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t) ? g(t) : v.unarmor(t), n = w.decode(r);
                        if (3 === n.sub.length && (n = n.sub[2].sub[0]), 9 === n.sub.length) {
                            e = n.sub[1].getHexStringValue(), this.n = V(e, 16), i = n.sub[2].getHexStringValue(), 
                            this.e = parseInt(i, 16);
                            var s = n.sub[3].getHexStringValue();
                            this.d = V(s, 16);
                            var o = n.sub[4].getHexStringValue();
                            this.p = V(o, 16);
                            var a = n.sub[5].getHexStringValue();
                            this.q = V(a, 16);
                            var h = n.sub[6].getHexStringValue();
                            this.dmp1 = V(h, 16);
                            var u = n.sub[7].getHexStringValue();
                            this.dmq1 = V(u, 16);
                            var c = n.sub[8].getHexStringValue();
                            this.coeff = V(c, 16);
                        } else {
                            if (2 !== n.sub.length) return !1;
                            var f = n.sub[1].sub[0];
                            e = f.sub[0].getHexStringValue(), this.n = V(e, 16), i = f.sub[1].getHexStringValue(), 
                            this.e = parseInt(i, 16);
                        }
                        return !0;
                    } catch (t) {
                        return !1;
                    }
                }, r.prototype.getPrivateBaseKey = function() {
                    var t = {
                        array: [ new et.asn1.DERInteger({
                            int: 0
                        }), new et.asn1.DERInteger({
                            bigint: this.n
                        }), new et.asn1.DERInteger({
                            int: this.e
                        }), new et.asn1.DERInteger({
                            bigint: this.d
                        }), new et.asn1.DERInteger({
                            bigint: this.p
                        }), new et.asn1.DERInteger({
                            bigint: this.q
                        }), new et.asn1.DERInteger({
                            bigint: this.dmp1
                        }), new et.asn1.DERInteger({
                            bigint: this.dmq1
                        }), new et.asn1.DERInteger({
                            bigint: this.coeff
                        }) ]
                    };
                    return new et.asn1.DERSequence(t).getEncodedHex();
                }, r.prototype.getPrivateBaseKeyB64 = function() {
                    return c(this.getPrivateBaseKey());
                }, r.prototype.getPublicBaseKey = function() {
                    var t = new et.asn1.DERSequence({
                        array: [ new et.asn1.DERObjectIdentifier({
                            oid: "1.2.840.113549.1.1.1"
                        }), new et.asn1.DERNull() ]
                    }), e = new et.asn1.DERSequence({
                        array: [ new et.asn1.DERInteger({
                            bigint: this.n
                        }), new et.asn1.DERInteger({
                            int: this.e
                        }) ]
                    }), i = new et.asn1.DERBitString({
                        hex: "00" + e.getEncodedHex()
                    });
                    return new et.asn1.DERSequence({
                        array: [ t, i ]
                    }).getEncodedHex();
                }, r.prototype.getPublicBaseKeyB64 = function() {
                    return c(this.getPublicBaseKey());
                }, r.wordwrap = function(t, e) {
                    if (!t) return t;
                    var i = "(.{1," + (e = e || 64) + "})( +|$\n?)|(.{1," + e + "})";
                    return t.match(RegExp(i, "g")).join("\n");
                }, r.prototype.getPrivateKey = function() {
                    var t = "-----BEGIN RSA PRIVATE KEY-----\n";
                    return t += r.wordwrap(this.getPrivateBaseKeyB64()) + "\n", t += "-----END RSA PRIVATE KEY-----";
                }, r.prototype.getPublicKey = function() {
                    var t = "-----BEGIN PUBLIC KEY-----\n";
                    return t += r.wordwrap(this.getPublicBaseKeyB64()) + "\n", t += "-----END PUBLIC KEY-----";
                }, r.hasPublicKeyProperty = function(t) {
                    return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e");
                }, r.hasPrivateKeyProperty = function(t) {
                    return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff");
                }, r.prototype.parsePropertiesFrom = function(t) {
                    this.n = t.n, this.e = t.e, t.hasOwnProperty("d") && (this.d = t.d, this.p = t.p, 
                    this.q = t.q, this.dmp1 = t.dmp1, this.dmq1 = t.dmq1, this.coeff = t.coeff);
                }, r;
            }(J), rt = function() {
                function t(t) {
                    t = t || {}, this.default_key_size = parseInt(t.default_key_size, 10) || 1024, this.default_public_exponent = t.default_public_exponent || "010001", 
                    this.log = t.log || !1, this.key = null;
                }
                return t.prototype.setKey = function(t) {
                    this.log && this.key && console.warn("A key was already set, overriding existing."), 
                    this.key = new it(t);
                }, t.prototype.setPrivateKey = function(t) {
                    this.setKey(t);
                }, t.prototype.setPublicKey = function(t) {
                    this.setKey(t);
                }, t.prototype.decrypt = function(t) {
                    try {
                        return this.getKey().decrypt(f(t));
                    } catch (t) {
                        return !1;
                    }
                }, t.prototype.encrypt = function(t) {
                    try {
                        return c(this.getKey().encrypt(t));
                    } catch (t) {
                        return !1;
                    }
                }, t.prototype.sign = function(t, e, i) {
                    try {
                        return c(this.getKey().sign(t, e, i));
                    } catch (t) {
                        return !1;
                    }
                }, t.prototype.verify = function(t, e, i) {
                    try {
                        return this.getKey().verify(t, f(e), i);
                    } catch (t) {
                        return !1;
                    }
                }, t.prototype.getKey = function(t) {
                    if (!this.key) {
                        if (this.key = new it(), t && "[object Function]" === {}.toString.call(t)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                        this.key.generate(this.default_key_size, this.default_public_exponent);
                    }
                    return this.key;
                }, t.prototype.getPrivateKey = function() {
                    return this.getKey().getPrivateKey();
                }, t.prototype.getPrivateKeyB64 = function() {
                    return this.getKey().getPrivateBaseKeyB64();
                }, t.prototype.getPublicKey = function() {
                    return this.getKey().getPublicKey();
                }, t.prototype.getPublicKeyB64 = function() {
                    return this.getKey().getPublicBaseKeyB64();
                }, t.version = "3.0.0-rc.1", t;
            }();
            window.JSEncrypt = rt, t.JSEncrypt = rt, t.default = rt, Object.defineProperty(t, "__esModule", {
                value: !0
            });
        })(e);
    },
    185: function(t, e, i) {
        var r;
        r = function(h) {
            return function(n) {
                var t = h, e = t.lib, i = e.WordArray, r = e.Hasher, s = t.algo, o = [], m = [];
                !function() {
                    function t(t) {
                        for (var e = n.sqrt(t), i = 2; i <= e; i++) if (!(t % i)) return !1;
                        return !0;
                    }
                    function e(t) {
                        return 4294967296 * (t - (0 | t)) | 0;
                    }
                    for (var i = 2, r = 0; r < 64; ) t(i) && (r < 8 && (o[r] = e(n.pow(i, .5))), m[r] = e(n.pow(i, 1 / 3)), 
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
                            var v = r & n ^ r & s ^ n & s, _ = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22), y = c + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & h ^ ~a & u) + m[f] + b[f];
                            c = u, u = h, h = a, a = o + y | 0, o = s, s = n, n = r, r = y + (_ + v) | 0;
                        }
                        i[0] = i[0] + r | 0, i[1] = i[1] + n | 0, i[2] = i[2] + s | 0, i[3] = i[3] + o | 0, 
                        i[4] = i[4] + a | 0, i[5] = i[5] + h | 0, i[6] = i[6] + u | 0, i[7] = i[7] + c | 0;
                    },
                    _doFinalize: function() {
                        var t = this._data, e = t.words, i = 8 * this._nDataBytes, r = 8 * t.sigBytes;
                        return e[r >>> 5] |= 128 << 24 - r % 32, e[14 + (r + 64 >>> 9 << 4)] = n.floor(i / 4294967296), 
                        e[15 + (r + 64 >>> 9 << 4)] = i, t.sigBytes = 4 * e.length, this._process(), this._hash;
                    },
                    clone: function() {
                        var t = r.clone.call(this);
                        return t._hash = this._hash.clone(), t;
                    }
                });
                t.SHA256 = r._createHelper(a), t.HmacSHA256 = r._createHmacHelper(a);
            }(Math), h.SHA256;
        }, t.exports = r(i(186));
    },
    186: function(t, e, i) {
        var r;
        r = function() {
            var c, i, t, e, r, f, n, s, o, a, h, u, l = l || (c = Math, i = Object.create || function() {
                function i() {}
                return function(t) {
                    var e;
                    return i.prototype = t, e = new i(), i.prototype = null, e;
                };
            }(), e = (t = {}).lib = {}, r = e.Base = {
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
                    for (var e, i = [], r = function(e) {
                        e = e;
                        var i = 987654321, r = 4294967295;
                        return function() {
                            var t = ((i = 36969 * (65535 & i) + (i >> 16) & r) << 16) + (e = 18e3 * (65535 & e) + (e >> 16) & r) & r;
                            return t /= 4294967296, (t += .5) * (.5 < c.random() ? 1 : -1);
                        };
                    }, n = 0; n < t; n += 4) {
                        var s = r(4294967296 * (e || c.random()));
                        e = 987654071 * s(), i.push(4294967296 * s() | 0);
                    }
                    return new f.init(i, t);
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
            return l;
        }, t.exports = r();
    }
}, [ 182 ]);

pbjsChunk([ 132 ], {
    231: function(e, n, o) {
        e.exports = o(232);
    },
    232: function(e, n, o) {
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
        var s = o(9), a = o(0), t = o(4), r = o(8).default, d = t.EVENTS.BID_REQUESTED, u = t.EVENTS.BID_TIMEOUT, c = t.EVENTS.BID_RESPONSE, l = t.EVENTS.BID_WON, f = {
            nonInteraction: !0
        }, b = [], p = null, m = !0, v = "Prebid.js Bids", y = 0, g = !1, T = null, w = !0, E = {};
        function S() {
            if (m && "function" == typeof window[p]) {
                for (var e = 0; e < b.length; e++) b[e].call();
                b.push = function(e) {
                    e.call();
                }, m = !1;
            }
            a.logMessage("event count sent to GA: " + y);
        }
        function h(e) {
            return e ? Math.floor(100 * e) : 0;
        }
        function $(e) {
            e && e.bidderCode && b.push(function() {
                y++, window[p](T, "event", v, "Requests", e.bidderCode, 1, f);
            }), S();
        }
        function D(d) {
            d && d.bidderCode && b.push(function() {
                var e, n, o, t, i = h(d.cpm), s = d.bidderCode;
                if (void 0 !== d.timeToRespond && g) {
                    y++;
                    var a = (0 <= (e = d.timeToRespond) && e < 200 ? n = "0-200ms" : 200 <= e && e < 300 ? n = "0200-300ms" : 300 <= e && e < 400 ? n = "0300-400ms" : 400 <= e && e < 500 ? n = "0400-500ms" : 500 <= e && e < 600 ? n = "0500-600ms" : 600 <= e && e < 800 ? n = "0600-800ms" : 800 <= e && e < 1e3 ? n = "0800-1000ms" : 1e3 <= e && e < 1200 ? n = "1000-1200ms" : 1200 <= e && e < 1500 ? n = "1200-1500ms" : 1500 <= e && e < 2e3 ? n = "1500-2000ms" : 2e3 <= e && (n = "2000ms above"), 
                    n);
                    window[p](T, "event", "Prebid.js Load Time Distribution", a, s, 1, f);
                }
                if (0 < d.cpm) {
                    y += 2;
                    var r = (0 <= (o = d.cpm) && o < .5 ? t = "$0-0.5" : .5 <= o && o < 1 ? t = "$0.5-1" : 1 <= o && o < 1.5 ? t = "$1-1.5" : 1.5 <= o && o < 2 ? t = "$1.5-2" : 2 <= o && o < 2.5 ? t = "$2-2.5" : 2.5 <= o && o < 3 ? t = "$2.5-3" : 3 <= o && o < 4 ? t = "$3-4" : 4 <= o && o < 6 ? t = "$4-6" : 6 <= o && o < 8 ? t = "$6-8" : 8 <= o && (t = "$8 above"), 
                    t);
                    g && (y++, window[p](T, "event", "Prebid.js CPM Distribution", r, s, 1, f)), window[p](T, "event", v, "Bids", s, i, f), 
                    window[p](T, "event", v, "Bid Load Time", s, d.timeToRespond, f);
                }
            }), S();
        }
        function M(e) {
            b.push(function() {
                a._each(e, function(e) {
                    y++;
                    var n = e.bidder;
                    window[p](T, "event", v, "Timeouts", n, f);
                });
            }), S();
        }
        function N(e) {
            var n = h(e.cpm);
            b.push(function() {
                y++, window[p](T, "event", v, "Wins", e.bidderCode, n, f);
            }), S();
        }
        E.enableAnalytics = function(e) {
            var n = e.provider, o = e.options;
            p = n || "ga", T = o && o.trackerName ? o.trackerName + ".send" : "send", w = void 0 === o || void 0 === o.sampling || Math.random() < parseFloat(o.sampling), 
            o && void 0 !== o.global && (p = o.global), o && void 0 !== o.enableDistribution && (g = o.enableDistribution);
            if (w) {
                var t = s.getEvents();
                a._each(t, function(e) {
                    if ("object" === i(e)) {
                        var n = e.args;
                        if (e.eventType === d) $(n); else if (e.eventType === c) D(n); else if (e.eventType === u) {
                            M(n);
                        } else e.eventType === l && N(n);
                    }
                }), s.on(d, function(e) {
                    $(e);
                }), s.on(c, function(e) {
                    D(e);
                }), s.on(u, function(e) {
                    M(e);
                }), s.on(l, function(e) {
                    N(e);
                });
            } else a.logMessage("Prebid.js google analytics disabled by sampling");
            this.enableAnalytics = function() {
                return a.logMessage("Analytics adapter already enabled, unnecessary call to `enableAnalytics`.");
            };
        }, E.getTrackerSend = function() {
            return T;
        }, r.registerAnalyticsAdapter({
            adapter: E,
            code: "ga"
        }), n.default = E;
    }
}, [ 231 ]);

pbjsChunk([ 84 ], {
    347: function(e, r, a) {
        e.exports = a(348);
    },
    348: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), a.d(r, "spec", function() {
            return x;
        });
        var v = a(0), i = a(1), t = a(2), s = a(3);
        function f(e) {
            return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        var y = "pubmatic", S = "USD", n = "nFIn8aLzbd", E = void 0, I = {
            kadpageurl: "",
            gender: "",
            yob: "",
            lat: "",
            lon: "",
            wiid: "",
            profId: "",
            verId: ""
        }, d = {
            NUMBER: "number",
            STRING: "string",
            BOOLEAN: "boolean",
            ARRAY: "array",
            OBJECT: "object"
        }, p = {
            mimes: d.ARRAY,
            minduration: d.NUMBER,
            maxduration: d.NUMBER,
            startdelay: d.NUMBER,
            playbackmethod: d.ARRAY,
            api: d.ARRAY,
            protocols: d.ARRAY,
            w: d.NUMBER,
            h: d.NUMBER,
            battr: d.ARRAY,
            linearity: d.NUMBER,
            placement: d.NUMBER,
            minbitrate: d.NUMBER,
            maxbitrate: d.NUMBER
        }, l = {
            TITLE: 1,
            IMAGE: 2,
            ICON: 3,
            SPONSOREDBY: 4,
            BODY: 5,
            CLICKURL: 6,
            VIDEO: 7,
            EXT: 8,
            DATA: 9,
            LOGO: 10,
            SPONSORED: 11,
            DESC: 12,
            RATING: 13,
            LIKES: 14,
            DOWNLOADS: 15,
            PRICE: 16,
            SALEPRICE: 17,
            PHONE: 18,
            ADDRESS: 19,
            DESC2: 20,
            DISPLAYURL: 21,
            CTA: 22
        }, o = {
            4: "sponsoredBy",
            5: "body",
            6: "clickUrl",
            7: "video",
            8: "ext",
            9: "data",
            10: "logo",
            11: "sponsored",
            12: "desc",
            13: "rating",
            14: "likes",
            15: "downloads",
            16: "price",
            17: "saleprice",
            18: "phone",
            19: "address",
            20: "desc2",
            21: "displayurl",
            22: "cta"
        }, u = {
            TITLE: "title",
            IMAGE: "image",
            ICON: "icon",
            SPONSOREDBY: "sponsoredBy",
            BODY: "body",
            VIDEO: "video",
            EXT: "ext",
            DATA: "data",
            LOGO: "logo",
            DESC: "desc",
            RATING: "rating",
            LIKES: "likes",
            DOWNLOADS: "downloads",
            PRICE: "price",
            SALEPRICE: "saleprice",
            PHONE: "phone",
            ADDRESS: "address",
            DESC2: "desc2",
            DISPLAYURL: "displayurl",
            CTA: "cta"
        }, c = {
            ICON: 1,
            LOGO: 2,
            IMAGE: 3
        }, m = {
            SPONSORED: 1,
            DESC: 2,
            RATING: 3,
            LIKES: 4,
            DOWNLOADS: 5,
            PRICE: 6,
            SALEPRICE: 7,
            PHONE: 8,
            ADDRESS: 9,
            DESC2: 10,
            DISPLAYURL: 11,
            CTA: 12
        }, g = [ {
            id: l.SPONSOREDBY,
            required: !0,
            data: {
                type: 1
            }
        }, {
            id: l.TITLE,
            required: !0
        }, {
            id: l.IMAGE,
            required: !0
        } ], h = {
            1: "PMP",
            5: "PREF",
            6: "PMPG"
        }, O = 0, b = !1;
        function w(e, r) {
            if (!v.isStr(r)) return r && v.logWarn("PubMatic: Ignoring param key: " + e + ", expects string-value, found " + f(r)), 
            E;
            switch (e) {
              case "pmzoneid":
                return r.split(",").slice(0, 50).map(function(e) {
                    return e.trim();
                }).join();

              case "kadfloor":
              case "lat":
              case "lon":
                return parseFloat(r) || E;

              case "yob":
                return parseInt(r) || E;

              default:
                return r;
            }
        }
        function R(e) {
            e.params.adUnit = "", e.params.adUnitIndex = "0", e.params.width = 0, e.params.height = 0;
            var r, a = e.hasOwnProperty("sizes") && v.isArray(e.sizes) && 1 <= e.sizes.length;
            e.params.adSlot = (r = e.params.adSlot, v.isStr(r) ? r.replace(/^\s+/g, "").replace(/\s+$/g, "") : "");
            var i = e.params.adSlot, t = i.split(":");
            if (i = t[0], 2 == t.length && (e.params.adUnitIndex = t[1]), 2 == (t = i.split("@")).length || a) if (e.params.adUnit = t[0], 
            1 < t.length) {
                if (2 != (t = t[1].split("x")).length) return void v.logWarn("AdSlot Error: adSlot not in required format");
                e.params.width = parseInt(t[0]), e.params.height = parseInt(t[1]), delete e.sizes;
            } else a && (e.params.width = parseInt(e.sizes[0][0]), e.params.height = parseInt(e.sizes[0][1])); else v.logWarn("AdSlot Error: adSlot not in required format");
        }
        function A(e, r, a) {
            var i = "PubMatic: Ignoring param key: " + e + ", expects " + a + ", found " + f(r);
            switch (a) {
              case d.BOOLEAN:
                return v.isBoolean(r) ? r : (v.logWarn(i), E);

              case d.NUMBER:
                return v.isNumber(r) ? r : (v.logWarn(i), E);

              case d.STRING:
                return v.isStr(r) ? r : (v.logWarn(i), E);

              case d.ARRAY:
                return v.isArray(r) ? r : (v.logWarn(i), E);
            }
        }
        function D(e, r) {
            var a = {}, i = {}, t = {}, s = e.hasOwnProperty("sizes") ? e.sizes : [];
            if (a = {
                id: e.bidId,
                tagid: e.params.adUnit,
                bidfloor: w("kadfloor", e.params.kadfloor),
                secure: "https:" === window.location.protocol ? 1 : 0,
                ext: {
                    pmZoneId: w("pmzoneid", e.params.pmzoneid)
                },
                bidfloorcur: e.params.currency ? w("currency", e.params.currency) : S
            }, e.params.hasOwnProperty("video")) {
                var n = e.params.video;
                for (var d in p) n.hasOwnProperty(d) && (t[d] = A(d, n[d], p[d]));
                v.isArray(e.mediaTypes.video.playerSize[0]) ? (t.w = e.mediaTypes.video.playerSize[0][0], 
                t.h = e.mediaTypes.video.playerSize[0][1]) : v.isNumber(e.mediaTypes.video.playerSize[0]) && (t.w = e.mediaTypes.video.playerSize[0], 
                t.h = e.mediaTypes.video.playerSize[1]), e.params.video.hasOwnProperty("skippable") && (t.ext = {
                    video_skippable: e.params.video.skippable ? 1 : 0
                }), a.video = t;
            } else if (e.nativeParams) a.native = {}, a.native.request = JSON.stringify(function(e) {
                var i = {
                    assets: []
                };
                for (var r in e) {
                    if (e.hasOwnProperty(r)) {
                        var a = {};
                        if (!(i.assets && 0 < i.assets.length && i.assets.hasOwnProperty(r))) switch (r) {
                          case u.TITLE:
                            e[r].len || e[r].length ? a = {
                                id: l.TITLE,
                                required: e[r].required ? 1 : 0,
                                title: {
                                    len: e[r].len || e[r].length,
                                    ext: e[r].ext
                                }
                            } : v.logWarn(y + " Error: Title Length is required for native ad: " + JSON.stringify(e));
                            break;

                          case u.IMAGE:
                            e[r].sizes && 0 < e[r].sizes.length ? a = {
                                id: l.IMAGE,
                                required: e[r].required ? 1 : 0,
                                img: {
                                    type: c.IMAGE,
                                    w: e[r].w || e[r].width || (e[r].sizes ? e[r].sizes[0] : void 0),
                                    h: e[r].h || e[r].height || (e[r].sizes ? e[r].sizes[1] : void 0),
                                    wmin: e[r].wmin || e[r].minimumWidth || (e[r].minsizes ? e[r].minsizes[0] : void 0),
                                    hmin: e[r].hmin || e[r].minimumHeight || (e[r].minsizes ? e[r].minsizes[1] : void 0),
                                    mimes: e[r].mimes,
                                    ext: e[r].ext
                                }
                            } : v.logWarn(y + " Error: Image sizes is required for native ad: " + JSON.stringify(e));
                            break;

                          case u.ICON:
                            e[r].sizes && 0 < e[r].sizes.length ? a = {
                                id: l.ICON,
                                required: e[r].required ? 1 : 0,
                                img: {
                                    type: c.ICON,
                                    w: e[r].w || e[r].width || (e[r].sizes ? e[r].sizes[0] : void 0),
                                    h: e[r].h || e[r].height || (e[r].sizes ? e[r].sizes[1] : void 0)
                                }
                            } : v.logWarn(y + " Error: Icon sizes is required for native ad: " + JSON.stringify(e));
                            break;

                          case u.SPONSOREDBY:
                            a = {
                                id: l.SPONSOREDBY,
                                required: e[r].required ? 1 : 0,
                                data: {
                                    type: m.SPONSORED,
                                    len: e[r].len,
                                    ext: e[r].ext
                                }
                            };
                            break;

                          case u.BODY:
                            a = {
                                id: l.BODY,
                                required: e[r].required ? 1 : 0,
                                data: {
                                    type: m.DESC,
                                    len: e[r].len,
                                    ext: e[r].ext
                                }
                            };
                            break;

                          case u.VIDEO:
                            a = {
                                id: l.VIDEO,
                                required: e[r].required ? 1 : 0,
                                video: {
                                    minduration: e[r].minduration,
                                    maxduration: e[r].maxduration,
                                    protocols: e[r].protocols,
                                    mimes: e[r].mimes,
                                    ext: e[r].ext
                                }
                            };
                            break;

                          case u.EXT:
                            a = {
                                id: l.EXT,
                                required: e[r].required ? 1 : 0
                            };
                            break;

                          case u.LOGO:
                            a = {
                                id: l.LOGO,
                                required: e[r].required ? 1 : 0,
                                img: {
                                    type: c.LOGO,
                                    w: e[r].w || e[r].width || (e[r].sizes ? e[r].sizes[0] : void 0),
                                    h: e[r].h || e[r].height || (e[r].sizes ? e[r].sizes[1] : void 0)
                                }
                            };
                            break;

                          case u.RATING:
                            a = {
                                id: l.RATING,
                                required: e[r].required ? 1 : 0,
                                data: {
                                    type: m.RATING,
                                    len: e[r].len,
                                    ext: e[r].ext
                                }
                            };
                            break;

                          case u.LIKES:
                            a = {
                                id: l.LIKES,
                                required: e[r].required ? 1 : 0,
                                data: {
                                    type: m.LIKES,
                                    len: e[r].len,
                                    ext: e[r].ext
                                }
                            };
                            break;

                          case u.DOWNLOADS:
                            a = {
                                id: l.DOWNLOADS,
                                required: e[r].required ? 1 : 0,
                                data: {
                                    type: m.DOWNLOADS,
                                    len: e[r].len,
                                    ext: e[r].ext
                                }
                            };
                            break;

                          case u.PRICE:
                            a = {
                                id: l.PRICE,
                                required: e[r].required ? 1 : 0,
                                data: {
                                    type: m.PRICE,
                                    len: e[r].len,
                                    ext: e[r].ext
                                }
                            };
                            break;

                          case u.SALEPRICE:
                            a = {
                                id: l.SALEPRICE,
                                required: e[r].required ? 1 : 0,
                                data: {
                                    type: m.SALEPRICE,
                                    len: e[r].len,
                                    ext: e[r].ext
                                }
                            };
                            break;

                          case u.PHONE:
                            a = {
                                id: l.PHONE,
                                required: e[r].required ? 1 : 0,
                                data: {
                                    type: m.PHONE,
                                    len: e[r].len,
                                    ext: e[r].ext
                                }
                            };
                            break;

                          case u.ADDRESS:
                            a = {
                                id: l.ADDRESS,
                                required: e[r].required ? 1 : 0,
                                data: {
                                    type: m.ADDRESS,
                                    len: e[r].len,
                                    ext: e[r].ext
                                }
                            };
                            break;

                          case u.DESC2:
                            a = {
                                id: l.DESC2,
                                required: e[r].required ? 1 : 0,
                                data: {
                                    type: m.DESC2,
                                    len: e[r].len,
                                    ext: e[r].ext
                                }
                            };
                            break;

                          case u.DISPLAYURL:
                            a = {
                                id: l.DISPLAYURL,
                                required: e[r].required ? 1 : 0,
                                data: {
                                    type: m.DISPLAYURL,
                                    len: e[r].len,
                                    ext: e[r].ext
                                }
                            };
                            break;

                          case u.CTA:
                            a = {
                                id: l.CTA,
                                required: e[r].required ? 1 : 0,
                                data: {
                                    type: m.CTA,
                                    len: e[r].len,
                                    ext: e[r].ext
                                }
                            };
                        }
                    }
                    a && a.id && (i.assets[i.assets.length] = a);
                }
                var t = g.length, s = 0;
                return g.forEach(function(e) {
                    for (var r = i.assets.length, a = 0; a < r; a++) if (e.id == i.assets[a].id) {
                        s++;
                        break;
                    }
                }), b = t != s, i;
            }(e.nativeParams)); else {
                if (i = {
                    pos: 0,
                    w: e.params.width,
                    h: e.params.height,
                    topframe: v.inIframe() ? 0 : 1
                }, v.isArray(s) && 1 < s.length) {
                    s = s.splice(1, s.length - 1);
                    var o = [];
                    s.forEach(function(e) {
                        o.push({
                            w: e[0],
                            h: e[1]
                        });
                    }), i.format = o;
                }
                a.banner = i;
            }
            if (!b || !a.hasOwnProperty("native")) return a;
            v.logWarn(y + ": Call to OpenBid will not be sent for  native ad unit as it does not contain required valid native params." + JSON.stringify(e) + " Refer:http://prebid.org/dev-docs/show-native-ads.html");
        }
        function P(e) {
            var r, a, i, t = (r = n, !(i = (a = window.DigiTrust && (s.config.getConfig("digiTrustId") || window.DigiTrust.getUser({
                member: r
            }))) && a.success && a.identity || null) || i.privacy && i.privacy.optout ? null : i);
            null !== t && e.push({
                source: "digitru.st",
                uids: [ {
                    id: t.id || "",
                    atype: 1,
                    ext: {
                        keyv: parseInt(t.keyv) || 0
                    }
                } ]
            });
        }
        function N(e) {
            var r, a, i = [];
            P(i), r = i, (a = s.config.getConfig("adsrvrOrgId")) && v.isStr(a.TDID) && r.push({
                source: "adserver.org",
                uids: [ {
                    id: a.TDID,
                    atype: 1,
                    ext: {
                        rtiPartner: "TDID"
                    }
                } ]
            }), 0 < i.length && (e.user.eids = i);
        }
        var x = {
            code: y,
            supportedMediaTypes: [ t.a, t.c, t.b ],
            isBidRequestValid: function(e) {
                return !(!e || !e.params) && (v.isStr(e.params.publisherId) ? v.isStr(e.params.adSlot) ? !!(!e.params.hasOwnProperty("video") || e.params.video.hasOwnProperty("mimes") && v.isArray(e.params.video.mimes) && 0 !== e.params.video.mimes.length) || (v.logWarn(y + ": For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(e)), 
                !1) : (v.logWarn(y + ": adSlotId is mandatory and cannot be numeric. Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)), 
                !1) : (v.logWarn(y + " Error: publisherId is mandatory and cannot be numeric. Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)), 
                !1));
            },
            buildRequests: function(e, r) {
                var a;
                r && r.refererInfo && (a = r.refererInfo);
                var i, t, s, n, d, o = (i = a, (t = {}).pageURL = v.getTopWindowUrl(), i && i.referer ? t.refURL = i.referer : t.refURL = "", 
                t), p = (s = o, {
                    id: "" + new Date().getTime(),
                    at: 1,
                    cur: [ S ],
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
                }), l = "", u = "", c = [];
                if (e.forEach(function(e) {
                    if (R(d = v.deepClone(e)), d.params.hasOwnProperty("video")) {
                        if (!(d.params.adSlot && d.params.adUnit && d.params.adUnitIndex)) return void v.logWarn(y + ": Skipping the non-standard adslot: ", d.params.adSlot, JSON.stringify(d));
                    } else if (!(d.params.adSlot && d.params.adUnit && d.params.adUnitIndex && d.params.width && d.params.height)) return void v.logWarn(y + ": Skipping the non-standard adslot: ", d.params.adSlot, JSON.stringify(d));
                    o.pubId = o.pubId || d.params.publisherId, (o = function(e, r) {
                        var a, i, t;
                        for (a in r.kadpageurl || (r.kadpageurl = r.pageURL), I) I.hasOwnProperty(a) && (i = e[a]) && ("object" === f(t = I[a]) && (i = t.f(i, r)), 
                        v.isStr(i) ? r[a] = i : v.logWarn("PubMatic: Ignoring param : " + a + " with value : " + I[a] + ", expects string-value, found " + f(i)));
                        return r;
                    }(d.params, o)).transactionId = d.transactionId, "" === l ? l = d.params.currency || void 0 : d.params.hasOwnProperty("currency") && l !== d.params.currency && v.logWarn(y + ": Currency specifier ignored. Only one currency permitted."), 
                    d.params.currency = l, d.params.hasOwnProperty("dctr") && v.isStr(d.params.dctr) && c.push(d.params.dctr);
                    var r = D(d);
                    r && p.imp.push(r);
                }), 0 != p.imp.length) {
                    var m, g;
                    if (p.site.publisher.id = o.pubId.trim(), O = o.pubId.trim(), p.ext.wrapper = {}, 
                    p.ext.wrapper.profile = parseInt(o.profId) || E, p.ext.wrapper.version = parseInt(o.verId) || E, 
                    p.ext.wrapper.wiid = o.wiid || E, p.ext.wrapper.wv = "prebid_prebid_2.2.0", p.ext.wrapper.transactionId = o.transactionId, 
                    p.ext.wrapper.wp = "pbjs", p.user.gender = o.gender ? o.gender.trim() : E, p.user.geo = {}, 
                    r && r.gdprConsent && (p.user.ext = {
                        consent: r.gdprConsent.consentString
                    }, p.regs = {
                        ext: {
                            gdpr: r.gdprConsent.gdprApplies ? 1 : 0
                        }
                    }), p.user.geo.lat = w("lat", o.lat), p.user.geo.lon = w("lon", o.lon), p.user.yob = w("yob", o.yob), 
                    p.device.geo = {}, p.device.geo.lat = w("lat", o.lat), p.device.geo.lon = w("lon", o.lon), 
                    p.site.page = o.kadpageurl.trim() || p.site.page.trim(), p.site.domain = (m = p.site.page, 
                    (g = document.createElement("a")).href = m, g.hostname), 0 < c.length) if (e[0].params.hasOwnProperty("dctr")) {
                        if (u = e[0].params.dctr, v.isStr(u) && 0 < u.length) {
                            var h = u.split("|");
                            u = "", h.forEach(function(e) {
                                u += 0 < e.length ? e.trim() + "|" : "";
                            }), n = u.length, "|" === u.substring(n, n - 1) && (u = u.substring(0, n - 1)), 
                            p.site.ext = {
                                key_val: u.trim()
                            };
                        } else v.logWarn(y + ": Ignoring param : dctr with value : " + u + ", expects string-value, found empty or non-string value");
                        1 < c.length && v.logWarn(y + ": dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits");
                    } else v.logWarn(y + ": dctr value not found in 1st adunit, ignoring values from subsequent adunits");
                    return N(p), {
                        method: "POST",
                        url: "//hbopenbid.pubmatic.com/translator?source=prebid-client",
                        data: JSON.stringify(p)
                    };
                }
            },
            interpretResponse: function(e, i) {
                var t = [], s = S;
                try {
                    e.body && e.body.seatbid && v.isArray(e.body.seatbid) && (s = e.body.cur || s, e.body.seatbid.forEach(function(e) {
                        e.bid && v.isArray(e.bid) && e.bid.forEach(function(r) {
                            var e = JSON.parse(i.data), a = {
                                requestId: r.impid,
                                cpm: (parseFloat(r.price) || 0).toFixed(2),
                                width: r.w,
                                height: r.h,
                                creativeId: r.crid || r.id,
                                dealId: r.dealid,
                                currency: s,
                                netRevenue: !1,
                                ttl: 300,
                                referrer: e.site && e.site.ref ? e.site.ref : "",
                                ad: r.adm
                            };
                            e.imp && 0 < e.imp.length && e.imp.forEach(function(e) {
                                r.impid === e.id && e.hasOwnProperty("video") && (a.mediaType = "video", a.width = r.hasOwnProperty("w") ? r.w : e.video.w, 
                                a.height = r.hasOwnProperty("h") ? r.h : e.video.h, a.vastXml = r.adm), r.impid === e.id && e.hasOwnProperty("native") && function(e, r) {
                                    if (r.native = {}, e.hasOwnProperty("adm")) {
                                        var a = "";
                                        try {
                                            a = JSON.parse(e.adm.replace(/\\/g, ""));
                                        } catch (e) {
                                            return v.logWarn(y + " Error: Cannot parse native reponse for ad response: " + r.adm);
                                        }
                                        if (a && a.native && a.native.assets && 0 < a.native.assets.length) {
                                            r.mediaType = "native";
                                            for (var i = 0, t = a.native.assets.length; i < t; i++) switch (a.native.assets[i].id) {
                                              case l.TITLE:
                                                r.native.title = a.native.assets[i].title && a.native.assets[i].title.text;
                                                break;

                                              case l.IMAGE:
                                                r.native.image = {
                                                    url: a.native.assets[i].img && a.native.assets[i].img.url,
                                                    height: a.native.assets[i].img && a.native.assets[i].img.h,
                                                    width: a.native.assets[i].img && a.native.assets[i].img.w
                                                };
                                                break;

                                              case l.ICON:
                                                r.native.icon = {
                                                    url: a.native.assets[i].img && a.native.assets[i].img.url,
                                                    height: a.native.assets[i].img && a.native.assets[i].img.h,
                                                    width: a.native.assets[i].img && a.native.assets[i].img.w
                                                };
                                                break;

                                              case l.SPONSOREDBY:
                                              case l.BODY:
                                              case l.LIKES:
                                              case l.DOWNLOADS:
                                              case l.PRICE:
                                              case l.SALEPRICE:
                                              case l.PHONE:
                                              case l.ADDRESS:
                                              case l.DESC2:
                                              case l.CTA:
                                              case l.RATING:
                                              case l.DISPLAYURL:
                                                r.native[o[a.native.assets[i].id]] = a.native.assets[i].data && a.native.assets[i].data.value;
                                            }
                                            r.native.clickUrl = a.native.link && a.native.link.url, r.native.clickTrackers = a.native.link && a.native.link.clicktrackers || [], 
                                            r.native.impressionTrackers = a.native.imptrackers || [], r.native.jstracker = a.native.jstracker || [], 
                                            r.width || (r.width = 0), r.height || (r.height = 0);
                                        }
                                    }
                                }(r, a);
                            }), r.ext && r.ext.deal_channel && (a.dealChannel = h[r.ext.deal_channel] || null), 
                            t.push(a);
                        });
                    }));
                } catch (e) {
                    v.logError(e);
                }
                return t;
            },
            getUserSyncs: function(e, r, a) {
                var i = "//ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=" + O;
                if (a && (i += "&gdpr=" + (a.gdprApplies ? 1 : 0), i += "&gdpr_consent=" + encodeURIComponent(a.consentString || "")), 
                e.iframeEnabled) return [ {
                    type: "iframe",
                    url: i
                } ];
                v.logWarn("PubMatic: Please enable iframe based user sync.");
            },
            transformBidParams: function(e, r) {
                return v.convertTypes({
                    publisherId: "string",
                    adSlot: "string"
                }, e);
            }
        };
        Object(i.registerBidder)(x);
    }
}, [ 347 ]);

pbjsChunk([ 70 ], {
    387: function(e, r, t) {
        e.exports = t(388);
    },
    388: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "FASTLANE_ENDPOINT", function() {
            return a;
        }), t.d(r, "VIDEO_ENDPOINT", function() {
            return s;
        }), t.d(r, "SYNC_ENDPOINT", function() {
            return i;
        }), t.d(r, "spec", function() {
            return d;
        }), r.hasVideoMediaType = x, r.masSizeOrdering = _, r.determineRubiconVideoSizeId = A, 
        r.resetUserSync = function() {
            z = !1;
        };
        var u = t(0), n = t(1), p = t(3), l = t(2);
        function f(e, r) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, r) {
                var t = [], n = !0, i = !1, o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (t.push(a.value), 
                    !r || t.length !== r); n = !0) ;
                } catch (e) {
                    i = !0, o = e;
                } finally {
                    try {
                        n || null == s.return || s.return();
                    } finally {
                        if (i) throw o;
                    }
                }
                return t;
            }(e, r) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }();
        }
        function y(e) {
            return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        var c = "pbjs_lite_v2.2.0";
        var a = "//fastlane.rubiconproject.com/a/api/fastlane.json", s = "//fastlane-adv.rubiconproject.com/v1/auction/video", i = "https://eus.rubiconproject.com/usync.html", g = {
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
            159: "320x250",
            179: "250x600",
            195: "600x300",
            198: "640x360",
            199: "640x200",
            213: "1030x590",
            214: "980x360",
            229: "320x180",
            232: "580x400",
            257: "400x600"
        };
        u._each(g, function(e, r) {
            return g[e] = r;
        });
        var d = {
            code: "rubicon",
            aliases: [ "rubiconLite" ],
            supportedMediaTypes: [ l.a, l.c ],
            isBidRequestValid: function(e) {
                return "object" === y(e.params) && (!!/^\d+$/.test(e.params.accountId) && !!h(e, !0));
            },
            buildRequests: function(e, o) {
                var r = [], t = e.filter(function(e) {
                    return "video" === h(e);
                }).map(function(e) {
                    e.startTime = new Date().getTime();
                    var n = e.params, r = b(e, "video"), t = {
                        page_url: m(e, o),
                        resolution: v(),
                        account_id: n.accountId,
                        integration: c,
                        "x_source.tid": e.transactionId,
                        timeout: o.timeout - (Date.now() - o.auctionStart + 500),
                        stash_creatives: !0,
                        slots: []
                    }, i = {
                        site_id: n.siteId,
                        zone_id: n.zoneId,
                        position: "atf" === n.position || "btf" === n.position ? n.position : "unknown",
                        floor: .01 < parseFloat(n.floor) ? n.floor : .01,
                        element_id: e.adUnitCode,
                        name: e.adUnitCode,
                        width: r[0],
                        height: r[1],
                        size_id: A(e)
                    };
                    return n.video && (t.ae_pass_through_parameters = n.video.aeParams, i.language = n.video.language), 
                    [ "inventory", "visitor" ].forEach(function(t) {
                        n[t] && "object" === y(n[t]) && (i[t] = {}, Object.keys(n[t]).forEach(function(e) {
                            var r = n[t][e];
                            Array.isArray(r) ? i[t][e] = r : ("string" == typeof r && "" !== r || "number" == typeof r) && (i[t][e] = [ r ]);
                        }));
                    }), n.keywords && Array.isArray(n.keywords) && (i.keywords = n.keywords), t.slots.push(i), 
                    o.gdprConsent && ("boolean" == typeof o.gdprConsent.gdprApplies && (t.gdpr = Number(o.gdprConsent.gdprApplies)), 
                    t.gdpr_consent = o.gdprConsent.consentString), {
                        method: "POST",
                        url: s,
                        data: t,
                        bidRequest: e
                    };
                });
                if (!0 !== p.config.getConfig("rubicon.singleRequest")) r = t.concat(e.filter(function(e) {
                    return "banner" === h(e);
                }).map(function(e) {
                    var n = d.createSlotParams(e, o);
                    return {
                        method: "GET",
                        url: a,
                        data: d.getOrderedParams(n).reduce(function(e, r) {
                            var t = n[r];
                            return u.isStr(t) && "" !== t || u.isNumber(t) ? "".concat(e).concat(r, "=").concat(encodeURIComponent(t), "&") : e;
                        }, "") + "slots=1&rand=".concat(Math.random()),
                        bidRequest: e
                    };
                })); else {
                    var i = e.filter(function(e) {
                        return "banner" === h(e);
                    }).reduce(function(e, r) {
                        return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e;
                    }, {});
                    r = t.concat(Object.keys(i).map(function(e) {
                        var r = i[e];
                        10 < r.length && (u.logWarn("Rubicon bid adapter Warning: single request mode has a limit of 10 bids: ".concat(r.length - 10, " bids were not sent")), 
                        r = r.slice(0, 10));
                        var n = d.combineSlotUrlParams(r.map(function(e) {
                            return d.createSlotParams(e, o);
                        }));
                        return {
                            method: "GET",
                            url: a,
                            data: d.getOrderedParams(n).reduce(function(e, r) {
                                var t = n[r];
                                return u.isStr(t) && "" !== t || u.isNumber(t) ? "".concat(e).concat(r, "=").concat(encodeURIComponent(t), "&") : e;
                            }, "") + "slots=".concat(r.length, "&rand=").concat(Math.random()),
                            bidRequest: r
                        };
                    }));
                }
                return r;
            },
            getOrderedParams: function(e) {
                var r = /^tg_v/, t = /^tg_i/, n = [ "account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "rf", "dt.id", "dt.keyv", "dt.pref", "p_geo.latitude", "p_geo.longitude", "kw" ].concat(Object.keys(e).filter(function(e) {
                    return r.test(e);
                })).concat(Object.keys(e).filter(function(e) {
                    return t.test(e);
                })).concat([ "tk_flint", "x_source.tid", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key" ]);
                return n.concat(Object.keys(e).filter(function(e) {
                    return -1 === n.indexOf(e);
                }));
            },
            combineSlotUrlParams: function(i) {
                if (1 === i.length) return i[0];
                var n = i.reduce(function(r, t, n) {
                    return Object.keys(t).forEach(function(e) {
                        r.hasOwnProperty(e) || (r[e] = new Array(i.length)), r[e].splice(n, 1, t[e]);
                    }), r;
                }, {}), o = new RegExp("^([^;]*)(;\\1)+$");
                return Object.keys(n).forEach(function(e) {
                    var r = n[e].join(";"), t = r.match(o);
                    n[e] = t ? t[1] : r;
                }), n;
            },
            createSlotParams: function(e, r) {
                e.startTime = new Date().getTime();
                var t = e.params, n = b(e, "banner"), i = f(t.latLong || [], 2), o = i[0], a = i[1], s = {
                    account_id: t.accountId,
                    site_id: t.siteId,
                    zone_id: t.zoneId,
                    size_id: n[0],
                    alt_size_ids: n.slice(1).join(",") || void 0,
                    p_pos: "atf" === t.position || "btf" === t.position ? t.position : "unknown",
                    rp_floor: .01 < (t.floor = parseFloat(t.floor)) ? t.floor : .01,
                    rp_secure: "https:" === location.protocol ? "1" : "0",
                    tk_flint: c,
                    "x_source.tid": e.transactionId,
                    p_screen_res: v(),
                    kw: Array.isArray(t.keywords) ? t.keywords.join(",") : "",
                    tk_user_key: t.userId,
                    "p_geo.latitude": isNaN(parseFloat(o)) ? void 0 : parseFloat(o).toFixed(4),
                    "p_geo.longitude": isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                    "tg_fl.eid": e.code,
                    rf: m(e, r)
                };
                r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (s.gdpr = Number(r.gdprConsent.gdprApplies)), 
                s.gdpr_consent = r.gdprConsent.consentString), null !== t.visitor && "object" === y(t.visitor) && Object.keys(t.visitor).forEach(function(e) {
                    null != t.visitor[e] && (s["tg_v.".concat(e)] = t.visitor[e].toString());
                }), null !== t.inventory && "object" === y(t.inventory) && Object.keys(t.inventory).forEach(function(e) {
                    null != t.inventory[e] && (s["tg_i.".concat(e)] = t.inventory[e].toString());
                });
                var d = function() {
                    var e = (r = window.DigiTrust && (p.config.getConfig("digiTrustId") || window.DigiTrust.getUser({
                        member: "T9QSFKPDN9"
                    })), r && r.success && r.identity || null);
                    var r;
                    if (!e || e.privacy && e.privacy.optout) return [];
                    return {
                        "dt.id": e.id,
                        "dt.keyv": e.keyv,
                        "dt.pref": 0
                    };
                }();
                return Object.keys(d).forEach(function(e) {
                    s[e] = d[e];
                }), s;
            },
            interpretResponse: function(d, e) {
                var c = e.bidRequest;
                if (!(d = d.body) || "object" !== y(d)) return [];
                var r = d.ads;
                return "object" !== y(c) || Array.isArray(c) || "video" !== h(c) || "object" !== y(r) || (r = r[c.adUnitCode]), 
                !Array.isArray(r) || r.length < 1 ? [] : r.reduce(function(e, r, t) {
                    if ("ok" !== r.status) return e;
                    var n, i, o = Array.isArray(c) ? c[t] : c;
                    if (o && "object" === y(o)) {
                        var a = {
                            requestId: o.bidId,
                            currency: "USD",
                            creativeId: r.creative_id || "".concat(r.network || "", "-").concat(r.advertiser || ""),
                            cpm: r.cpm || 0,
                            dealId: r.deal,
                            ttl: 300,
                            netRevenue: p.config.getConfig("rubicon.netRevenue") || !1,
                            rubicon: {
                                advertiserId: r.advertiser,
                                networkId: r.network
                            }
                        };
                        if (r.creative_type && (a.mediaType = r.creative_type), r.creative_type === l.c) a.width = o.params.video.playerWidth, 
                        a.height = o.params.video.playerHeight, a.vastUrl = r.creative_depot_url, a.impression_id = r.impression_id, 
                        a.videoCacheKey = r.impression_id; else {
                            a.ad = (n = r.script, i = r.impression_id, "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(i, "'>\n<script type='text/javascript'>").concat(n, "<\/script>\n</div>\n</body>\n</html>"));
                            var s = f(g[r.size_id].split("x").map(function(e) {
                                return Number(e);
                            }), 2);
                            a.width = s[0], a.height = s[1];
                        }
                        a.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce(function(e, r) {
                            return e[r.key] = r.values[0], e;
                        }, {
                            rpfl_elemid: o.adUnitCode
                        }), e.push(a);
                    } else u.logError("Rubicon bid adapter Error: bidRequest undefined at index position:".concat(t), c, d);
                    return e;
                }, []).sort(function(e, r) {
                    return (r.cpm || 0) - (e.cpm || 0);
                });
            },
            getUserSyncs: function(e, r, t) {
                if (!z && e.iframeEnabled) {
                    var n = "";
                    return t && "string" == typeof t.consentString && ("boolean" == typeof t.gdprApplies ? n += "?gdpr=".concat(Number(t.gdprApplies), "&gdpr_consent=").concat(t.consentString) : n += "?gdpr_consent=".concat(t.consentString)), 
                    z = !0, {
                        type: "iframe",
                        url: i + n
                    };
                }
            },
            transformBidParams: function(e, r) {
                return u.convertTypes({
                    accountId: "number",
                    siteId: "number",
                    zoneId: "number"
                }, e);
            }
        };
        function v() {
            return [ window.screen.width, window.screen.height ].join("x");
        }
        function m(e, r) {
            var t = p.config.getConfig("pageUrl");
            return e.params.referrer ? t = e.params.referrer : t || (t = r.refererInfo.referer), 
            e.params.secure ? t.replace(/^http:/i, "https:") : t;
        }
        function b(e, r) {
            var t = e.params;
            if ("video" === r) {
                var n = [];
                return t.video && t.video.playerWidth && t.video.playerHeight ? n = [ t.video.playerWidth, t.video.playerHeight ] : Array.isArray(u.deepAccess(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? n = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (n = e.sizes[0]), 
                n;
            }
            var i = [];
            return Array.isArray(t.sizes) ? i = t.sizes : void 0 !== u.deepAccess(e, "mediaTypes.banner.sizes") ? i = o(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && 0 < e.sizes.length ? i = o(e.sizes) : u.logWarn("Warning: no sizes are setup or found"), 
            _(i);
        }
        function o(e) {
            return u.parseSizesInput(e).reduce(function(e, r) {
                var t = parseInt(g[r], 10);
                return t && e.push(t), e;
            }, []);
        }
        function x(e) {
            return "object" === y(u.deepAccess(e, "params.video")) && (e.mediaType === l.c || void 0 !== u.deepAccess(e, "mediaTypes.".concat(l.c)));
        }
        function h(e) {
            var r = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            if (x(e)) {
                if (void 0 !== u.deepAccess(e, "mediaTypes.".concat(l.c))) {
                    if (-1 === [ "outstream", "instream" ].indexOf(u.deepAccess(e, "mediaTypes.".concat(l.c, ".context")))) return void (r && u.logError("Rubicon bid adapter requires mediaTypes.video.context to be one of outstream or instream"));
                } else if (r && u.logWarn("Rubicon video bid requested using legacy `adUnit.mediaType = `video``\nThis is deprecated\nPlease move towards the PBJS standard using mediaTypes object!"), 
                isNaN(parseInt(u.deepAccess(e, "params.video.size_id")))) return void (r && u.logError("Rubicon bid adapter needs params.video.size_id to be declared and an integer in order to process a legacy video request using mediaType == video"));
                return b(e, "video").length < 2 ? void (r && u.logError("Rubicon bid adapter could not determine the playerSize of the video\nplayerWidth and playerHeight are inferred from one of params.playerWidth/playerHeight or mediaTypes.video.playerSize or adUnit.sizes, in that order")) : (r && u.logMessage("Rubicon bid adapter making video request for adUnit", e.adUnitCode), 
                "video");
            }
            return 0 === b(e, "banner").length ? void (r && u.logError("Rubicon bid adapter could not determine the sizes for a banner request\nThey are inferred from one of params.sizes or mediaTypes.banner.sizes or adUnit.sizes, in that order")) : (r && u.logMessage("Rubicon bid adapter making banner request for adUnit", e.adUnitCode), 
            "banner");
        }
        function _(e) {
            var i = [ 15, 2, 9 ];
            return e.sort(function(e, r) {
                var t = i.indexOf(e), n = i.indexOf(r);
                return -1 < t || -1 < n ? -1 === t ? 1 : -1 === n ? -1 : t - n : e - r;
            });
        }
        function A(e) {
            var r = parseInt(u.deepAccess(e, "params.video.size_id"));
            return isNaN(r) ? "outstream" === u.deepAccess(e, "mediaTypes.".concat(l.c, ".context")) ? 203 : 201 : r;
        }
        var z = !1;
        Object(n.registerBidder)(d);
    }
}, [ 387 ]);

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
            var options = __assign({}, trackingDefaults, trackingOptions);
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
                adUnits.push({
                    bids: bidders,
                    code: banner.targetId,
                    sizes: banner.sizes
                });
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
            var auctionSettings = __assign({}, prebidDefault, options);
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