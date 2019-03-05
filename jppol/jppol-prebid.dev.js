!function(u) {
    var s = window.pbjsChunk;
    window.pbjsChunk = function(e, t, n) {
        for (var r, i, o, a = 0, d = []; a < e.length; a++) i = e[a], c[i] && d.push(c[i][0]), 
        c[i] = 0;
        for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
        for (s && s(e, t, n); d.length; ) d.shift()();
        if (n) for (a = 0; a < n.length; a++) o = f(f.s = n[a]);
        return o;
    };
    var n = {}, c = {
        192: 0
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
    }, f(f.s = 637);
}({
    0: function(e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.getLatestHighestCpmBid = a.getOldestHighestCpmBid = a.getHighestCpm = void 0;
        var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        a.getAdUnitSizes = function(e) {
            if (!e) return;
            var t = [];
            if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
                var n = e.mediaTypes.banner.sizes;
                Array.isArray(n[0]) ? t = n : t.push(n);
            } else Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes));
            return t;
        }, a.parseSizesInput = function(e) {
            var t = [];
            if ("string" == typeof e) {
                var n = e.split(","), r = /^(\d)+x(\d)+$/i;
                if (n) for (var i in n) w(n, i) && n[i].match(r) && t.push(n[i]);
            } else if ("object" === (void 0 === e ? "undefined" : d(e))) {
                var o = e.length;
                if (0 < o) if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(T(e)); else for (var a = 0; a < o; a++) t.push(T(e[a]));
            }
            return t;
        }, a.parseGPTSingleSizeArray = T, a.uniques = C, a.flatten = B, a.getBidRequest = function(n, e) {
            var r = void 0;
            return e.some(function(e) {
                var t = (0, o.default)(e.bids, function(t) {
                    return [ "bidId", "adId", "bid_id" ].some(function(e) {
                        return t[e] === n;
                    });
                });
                return t && (r = t), t;
            }), r;
        }, a.getKeys = O, a.getValue = R, a.getBidderCodes = function() {
            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map(function(e) {
                return e.bids.map(function(e) {
                    return e.bidder;
                }).reduce(B, []);
            }).reduce(B).filter(C);
        }, a.isGptPubadsDefined = function() {
            if (window.googletag && a.isFn(window.googletag.pubads) && a.isFn(window.googletag.pubads().getSlots)) return !0;
        }, a.shuffle = function(e) {
            var t = e.length;
            for (;0 < t; ) {
                var n = Math.floor(Math.random() * t), r = e[--t];
                e[t] = e[n], e[n] = r;
            }
            return e;
        }, a.adUnitsFilter = function(e, t) {
            return (0, u.default)(e, t && t.adUnitCode);
        }, a.isSrcdocSupported = function(e) {
            return e.defaultView && e.defaultView.frameElement && "srcdoc" in e.defaultView.frameElement && !/firefox/i.test(navigator.userAgent);
        }, a.deepClone = function(e) {
            return (0, i.default)(e);
        }, a.inIframe = function() {
            try {
                return a.getWindowSelf() !== a.getWindowTop();
            } catch (e) {
                return !0;
            }
        }, a.isSafariBrowser = function() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        }, a.replaceAuctionPrice = function(e, t) {
            if (!e) return;
            return e.replace(/\$\{AUCTION_PRICE\}/g, t);
        }, a.timestamp = function() {
            return new Date().getTime();
        }, a.checkCookieSupport = function() {
            if (window.navigator.cookieEnabled || document.cookie.length) return !0;
        }, a.cookiesAreEnabled = function() {
            if (a.checkCookieSupport()) return !0;
            return window.document.cookie = "prebid.cookieTest", -1 != window.document.cookie.indexOf("prebid.cookieTest");
        }, a.getCookie = function(e) {
            var t = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
            return t ? decodeURIComponent(t[2]) : null;
        }, a.delayExecution = function(e, t) {
            if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got " + t);
            var n = 0;
            return function() {
                ++n === t && e.apply(null, arguments);
            };
        }, a.groupBy = function(e, n) {
            return e.reduce(function(e, t) {
                return (e[t[n]] = e[t[n]] || []).push(t), e;
            }, {});
        }, a.deepAccess = function(e, t) {
            if (!e) return;
            t = String(t).split(".");
            for (var n = 0; n < t.length; n++) if (void 0 === (e = e[t[n]])) return;
            return e;
        }, a.createContentToExecuteExtScriptInFriendlyFrame = function(e) {
            return e ? '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="' + e + '"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>' : "";
        }, a.getDefinedParams = function(n, e) {
            return e.filter(function(e) {
                return n[e];
            }).reduce(function(e, t) {
                return r(e, function(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n;
                    return e;
                }({}, t, n[t]));
            }, {});
        }, a.isValidMediaTypes = function(e) {
            var t = [ "banner", "native", "video" ];
            if (!Object.keys(e).every(function(e) {
                return (0, u.default)(t, e);
            })) return !1;
            if (e.video && e.video.context) return (0, u.default)([ "instream", "outstream" ], e.video.context);
            return !0;
        }, a.getBidderRequest = function(e, t, n) {
            return (0, o.default)(e, function(e) {
                return 0 < e.bids.filter(function(e) {
                    return e.bidder === t && e.adUnitCode === n;
                }).length;
            }) || {
                start: null,
                auctionId: null
            };
        }, a.getUserConfiguredParams = function(e, t, n) {
            return e.filter(function(e) {
                return e.code === t;
            }).map(function(e) {
                return e.bids;
            }).reduce(B, []).filter(function(e) {
                return e.bidder === n;
            }).map(function(e) {
                return e.params || {};
            });
        }, a.getOrigin = function() {
            return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
        }, a.getDNT = function() {
            return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack;
        }, a.isAdUnitCodeMatchingSlot = function(t) {
            return function(e) {
                return N(t, e);
            };
        }, a.isSlotMatchingAdUnitCode = function(t) {
            return function(e) {
                return N(e, t);
            };
        }, a.unsupportedBidderMessage = function(e, t) {
            var n = Object.keys(e.mediaTypes || {
                banner: "banner"
            }).join(", ");
            return "\n    " + e.code + " is a " + n + " ad unit\n    containing bidders that don't support " + n + ": " + t + ".\n    This bidder won't fetch demand.\n  ";
        }, a.deletePropertyFromObject = function(e, t) {
            var n = r({}, e);
            return delete n[t], n;
        }, a.removeRequestId = function(e) {
            return a.deletePropertyFromObject(e, "requestId");
        }, a.isInteger = function(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e;
        }, a.convertCamelToUnderscore = function(e) {
            return e.replace(/(?:^|\.?)([A-Z])/g, function(e, t) {
                return "_" + t.toLowerCase();
            }).replace(/^_/, "");
        }, a.transformBidderParamKeywords = function(e) {
            var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords", i = [];
            return a._each(e, function(e, t) {
                if (a.isArray(e)) {
                    var n = [];
                    a._each(e, function(e) {
                        ((e = a.getValueString(r + "." + t, e)) || "" === e) && n.push(e);
                    }), e = n;
                } else {
                    if (e = a.getValueString(r + "." + t, e), !a.isStr(e)) return;
                    e = [ e ];
                }
                i.push({
                    key: t,
                    value: e
                });
            }), i;
        }, a.convertTypes = function(r, i) {
            return Object.keys(r).forEach(function(e) {
                var t, n;
                i[e] && (a.isFn(r[e]) ? i[e] = r[e](i[e]) : i[e] = (t = r[e], n = i[e], "string" === t ? n && n.toString() : "number" === t ? Number(n) : n), 
                isNaN(i[e]) && delete i.key);
            }), i;
        };
        var n = t(3), i = c(t(67)), o = c(t(10)), u = c(t(7)), s = t(11);
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var f = t(4), l = !1, g = Object.prototype.toString, p = Boolean(window.console), v = Boolean(p && window.console.log), y = Boolean(p && window.console.info), m = Boolean(p && window.console.warn), b = Boolean(p && window.console.error);
        a.replaceTokenInString = function(i, e, o) {
            return a._each(e, function(e, t) {
                e = void 0 === e ? "" : e;
                var n = o + t.toUpperCase() + o, r = new RegExp(n, "g");
                i = i.replace(r, e);
            }), i;
        };
        var h, S = (h = 0, function() {
            return ++h;
        });
        function E() {
            return S() + Math.random().toString(16).substr(2);
        }
        function T(e) {
            if (a.isArray(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])) return e[0] + "x" + e[1];
        }
        function A(e, t) {
            return e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), 
            e.unshift("%cPrebid"), e;
        }
        a.getUniqueIdentifierStr = E, a.generateUUID = function e(t) {
            return t ? (t ^ (window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()) >> t / 4).toString(16) : ([ 1e7 ] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e);
        }, a.getBidIdParameter = function(e, t) {
            return t && t[e] ? t[e] : "";
        }, a.tryAppendQueryString = function(e, t, n) {
            return n ? e + (t + "=") + encodeURIComponent(n) + "&" : e;
        }, a.parseQueryStringParameters = function(e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
            return t;
        }, a.transformAdServerTargetingObj = function(t) {
            return t && 0 < Object.getOwnPropertyNames(t).length ? O(t).map(function(e) {
                return e + "=" + encodeURIComponent(R(t, e));
            }).join("&") : "";
        }, a.getTopWindowLocation = function() {
            if (a.inIframe()) {
                var e = void 0;
                try {
                    e = a.getAncestorOrigins() || a.getTopFrameReferrer();
                } catch (e) {
                    logInfo("could not obtain top window location", e);
                }
                if (e) return (0, s.parse)(e, {
                    decodeSearchAsString: !0
                });
            }
            return a.getWindowLocation();
        }, a.getTopFrameReferrer = function() {
            try {
                window.top.location.toString();
                for (var e = "", t = void 0; (t = t ? t.parent : window).document && t.document.referrer && (e = t.document.referrer), 
                t !== window.top; ) ;
                return e;
            } catch (e) {
                return window.document.referrer;
            }
        }, a.getAncestorOrigins = function() {
            if (window.document.location && window.document.location.ancestorOrigins && 1 <= window.document.location.ancestorOrigins.length) return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1];
        }, a.getWindowTop = function() {
            return window.top;
        }, a.getWindowSelf = function() {
            return window.self;
        }, a.getWindowLocation = function() {
            return window.location;
        }, a.getTopWindowUrl = function() {
            var t = void 0;
            try {
                t = a.getTopWindowLocation().href;
            } catch (e) {
                t = "";
            }
            return t;
        }, a.getTopWindowReferrer = function() {
            try {
                return window.top.document.referrer;
            } catch (e) {
                return document.referrer;
            }
        }, a.logMessage = function() {
            I() && v && console.log.apply(console, A(arguments, "MESSAGE:"));
        }, a.logInfo = function() {
            I() && y && console.info.apply(console, A(arguments, "INFO:"));
        }, a.logWarn = function() {
            I() && m && console.warn.apply(console, A(arguments, "WARNING:"));
        }, a.logError = function() {
            I() && b && console.error.apply(console, A(arguments, "ERROR:"));
        }, a.hasConsoleLogger = function() {
            return v;
        };
        var I = function() {
            if (!1 === n.config.getConfig("debug") && !1 === l) {
                var e = "TRUE" === _(f.DEBUG_MODE).toUpperCase();
                n.config.setConfig({
                    debug: e
                }), l = !0;
            }
            return !!n.config.getConfig("debug");
        };
        a.debugTurnedOn = I, a.createInvisibleIframe = function() {
            var e = document.createElement("iframe");
            return e.id = E(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", 
            e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", 
            e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", 
            e;
        };
        var _ = function(e) {
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
            return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "));
        };
        a.getParameterByName = _, a.hasValidBidRequest = function(e, n, t) {
            var r = !1;
            function i(e, t) {
                t === n[o] && (r = !0);
            }
            for (var o = 0; o < n.length; o++) if (r = !1, a._each(e, i), !r) return a.logError("Params are missing for bid request. One of these required paramaters are missing: " + n, t), 
            !1;
            return !0;
        }, a.addEventHandler = function(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent && e.attachEvent("on" + t, n);
        }, a.isA = function(e, t) {
            return g.call(e) === "[object " + t + "]";
        }, a.isFn = function(e) {
            return a.isA(e, "Function");
        }, a.isStr = function(e) {
            return a.isA(e, "String");
        }, a.isArray = function(e) {
            return a.isA(e, "Array");
        }, a.isNumber = function(e) {
            return a.isA(e, "Number");
        }, a.isPlainObject = function(e) {
            return a.isA(e, "Object");
        }, a.isBoolean = function(e) {
            return a.isA(e, "Boolean");
        }, a.isEmpty = function(e) {
            if (!e) return !0;
            if (a.isArray(e) || a.isStr(e)) return !(0 < e.length);
            for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
            return !0;
        }, a.isEmptyStr = function(e) {
            return a.isStr(e) && (!e || 0 === e.length);
        }, a._each = function(e, t) {
            if (!a.isEmpty(e)) {
                if (a.isFn(e.forEach)) return e.forEach(t, this);
                var n = 0, r = e.length;
                if (0 < r) for (;n < r; n++) t(e[n], n, e); else for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n);
            }
        }, a.contains = function(e, t) {
            if (a.isEmpty(e)) return !1;
            if (a.isFn(e.indexOf)) return -1 !== e.indexOf(t);
            for (var n = e.length; n--; ) if (e[n] === t) return !0;
            return !1;
        }, a.indexOf = function() {
            if (Array.prototype.indexOf) return Array.prototype.indexOf;
        }(), a._map = function(n, r) {
            if (a.isEmpty(n)) return [];
            if (a.isFn(n.map)) return n.map(r);
            var i = [];
            return a._each(n, function(e, t) {
                i.push(r(e, t, n));
            }), i;
        };
        var w = function(e, t) {
            return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t];
        };
        function C(e, t, n) {
            return n.indexOf(e) === t;
        }
        function B(e, t) {
            return e.concat(t);
        }
        function O(e) {
            return Object.keys(e);
        }
        function R(e, t) {
            return e[t];
        }
        a.insertElement = function(e, t, n) {
            var r = void 0, i = (t = t || document).getElementsByTagName("head");
            r = n ? t.getElementsByTagName(n) : i;
            try {
                if ((r = r.length ? r : t.getElementsByTagName("body")).length) {
                    r = r[0];
                    var o = i && i[0] === r ? null : r.firstChild;
                    return r.insertBefore(e, o);
                }
            } catch (e) {}
        }, a.triggerPixel = function(e) {
            new Image().src = e;
        }, a.callBurl = function(e) {
            var t = e.source, n = e.burl;
            t === f.S2S.SRC && n && a.triggerPixel(n);
        }, a.insertHtmlIntoIframe = function(e) {
            if (e) {
                var t = document.createElement("iframe");
                t.id = a.getUniqueIdentifierStr(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", 
                t.marginWidth = "0", t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", 
                t.style.width = "0px", t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", 
                a.insertElement(t, document, "body"), t.contentWindow.document.open(), t.contentWindow.document.write(e), 
                t.contentWindow.document.close();
            }
        }, a.insertUserSyncIframe = function(e) {
            var t = a.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"), n = document.createElement("div");
            n.innerHTML = t;
            var r = n.firstChild;
            a.insertElement(r);
        }, a.createTrackPixelHtml = function(e) {
            if (!e) return "";
            var t = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return t += '<img src="' + encodeURI(e) + '"></div>';
        }, a.createTrackPixelIframeHtml = function(e) {
            var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1], n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            return e ? (t && (e = encodeURI(e)), n && (n = 'sandbox="' + n + '"'), "<iframe " + n + ' id="' + a.getUniqueIdentifierStr() + '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="' + e + '">\n    </iframe>') : "";
        }, a.getIframeDocument = function(e) {
            if (e) {
                var t = void 0;
                try {
                    t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument;
                } catch (e) {
                    a.logError("Cannot get iframe document", e);
                }
                return t;
            }
        }, a.getValueString = function(e, t, n) {
            return null == t ? n : a.isStr(t) ? t : a.isNumber(t) ? t.toString() : void a.logWarn("Unsuported type for param: " + e + " required type: String");
        };
        a.getHighestCpm = U("timeToRespond", function(e, t) {
            return t < e;
        }), a.getOldestHighestCpmBid = U("responseTimestamp", function(e, t) {
            return t < e;
        }), a.getLatestHighestCpmBid = U("responseTimestamp", function(e, t) {
            return e < t;
        });
        function U(n, r) {
            return function(e, t) {
                return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e;
            };
        }
        var N = function(e, t) {
            return e.getAdUnitPath() === t || e.getSlotElementId() === t;
        };
    },
    1: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var n = [], r = !0, i = !1, o = void 0;
                try {
                    for (var a, d = e[Symbol.iterator](); !(r = (a = d.next()).done) && (n.push(a.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    i = !0, o = e;
                } finally {
                    try {
                        !r && d.return && d.return();
                    } finally {
                        if (i) throw o;
                    }
                }
                return n;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, v = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        };
        t.registerBidder = function(t) {
            var n = Array.isArray(t.supportedMediaTypes) ? {
                supportedMediaTypes: t.supportedMediaTypes
            } : void 0;
            function r(e) {
                var t = g(e);
                i.default.registerBidAdapter(t, e.code, n);
            }
            r(t), Array.isArray(t.aliases) && t.aliases.forEach(function(e) {
                i.default.aliasRegistry[e] = t.code, r(v({}, t, {
                    code: e
                }));
            });
        }, t.newBidder = g, t.isValid = S;
        var r = f(n(27)), i = f(n(8)), o = n(3), y = f(n(16)), a = n(18), d = n(17), u = n(41), m = f(n(4)), b = f(n(9)), s = f(n(7)), h = n(0);
        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var l = [ "requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency" ];
        function g(f) {
            return v(new r.default(f.code), {
                getSpec: function() {
                    return Object.freeze(f);
                },
                registerSyncs: l,
                callBids: function(o, a, e, n) {
                    if (Array.isArray(o.bids)) {
                        var d = {}, u = [], t = o.bids.filter(g);
                        if (0 !== t.length) {
                            var s = {};
                            t.forEach(function(e) {
                                (s[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode);
                            });
                            var r = f.buildRequests(t, o);
                            if (r && 0 !== r.length) {
                                Array.isArray(r) || (r = [ r ]);
                                var c = (0, h.delayExecution)(i, r.length);
                                r.forEach(function(i) {
                                    switch (i.method) {
                                      case "GET":
                                        n("" + i.url + function(e) {
                                            if (e) return "?" + ("object" === (void 0 === e ? "undefined" : p(e)) ? (0, h.parseQueryStringParameters)(e) : e);
                                            return "";
                                        }(i.data), {
                                            success: e,
                                            error: t
                                        }, void 0, v({
                                            method: "GET",
                                            withCredentials: !0
                                        }, i.options));
                                        break;

                                      case "POST":
                                        n(i.url, {
                                            success: e,
                                            error: t
                                        }, "string" == typeof i.data ? i.data : JSON.stringify(i.data), v({
                                            method: "POST",
                                            contentType: "text/plain",
                                            withCredentials: !0
                                        }, i.options));
                                        break;

                                      default:
                                        (0, h.logWarn)("Skipping invalid request from " + f.code + ". Request type " + i.type + " must be GET or POST"), 
                                        c();
                                    }
                                    function e(e, t) {
                                        try {
                                            e = JSON.parse(e);
                                        } catch (e) {}
                                        e = {
                                            body: e,
                                            headers: {
                                                get: t.getResponseHeader.bind(t)
                                            }
                                        }, u.push(e);
                                        var n = void 0;
                                        try {
                                            n = f.interpretResponse(e, i);
                                        } catch (e) {
                                            return (0, h.logError)("Bidder " + f.code + " failed to interpret the server's response. Continuing without bids", null, e), 
                                            void c();
                                        }
                                        function r(e) {
                                            var t, n, r = s[e.requestId];
                                            if (r) {
                                                var i = v(y.default.createBid(m.default.STATUS.GOOD, r), e);
                                                t = r.adUnitCode, n = i, d[t] = !0, S(t, n, [ o ]) && a(t, n);
                                            } else (0, h.logWarn)("Bidder " + f.code + " made bid for unknown request ID: " + e.requestId + ". Ignoring.");
                                        }
                                        n && (n.forEach ? n.forEach(r) : r(n)), c(n);
                                    }
                                    function t(e) {
                                        (0, h.logError)("Server call for " + f.code + " failed: " + e + ". Continuing without bids."), 
                                        c();
                                    }
                                });
                            } else i();
                        } else i();
                    }
                    function i() {
                        e(), b.default.emit(m.default.EVENTS.BIDDER_DONE, o), l(u, o.gdprConsent);
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
                        a.userSync.registerSync(e.type, f.code, e.url);
                    }));
                }
            }
            function g(e) {
                return !!f.isBidRequestValid(e) || ((0, h.logWarn)("Invalid bid sent to bidder " + f.code + ": " + JSON.stringify(e)), 
                !1);
            }
        }
        function S(e, t, n) {
            function r(e) {
                return "Invalid bid from " + t.bidderCode + ". Ignoring bid: " + e;
            }
            return e ? t ? (i = Object.keys(t), l.every(function(e) {
                return (0, s.default)(i, e) && !(0, s.default)([ void 0, null ], t[e]);
            }) ? "native" !== t.mediaType || (0, d.nativeBidIsValid)(t, n) ? "video" !== t.mediaType || (0, 
            u.isValidVideoBid)(t, n) ? !("banner" === t.mediaType && !function(e, t, n) {
                if ((t.width || 0 === t.width) && (t.height || 0 === t.height)) return !0;
                var r = (0, h.getBidderRequest)(n, t.bidderCode, e), i = r && r.bids && r.bids[0] && r.bids[0].sizes, o = (0, 
                h.parseSizesInput)(i);
                if (1 !== o.length) return !1;
                var a = o[0].split("x"), d = c(a, 2), u = d[0], s = d[1];
                return t.width = u, t.height = s, !0;
            }(e, t, n)) || ((0, h.logError)(r("Banner bids require a width and height")), !1) : ((0, 
            h.logError)(r("Video bid does not have required vastUrl or renderer property")), 
            !1) : ((0, h.logError)(r("Native bid missing some required properties.")), !1) : ((0, 
            h.logError)(r("Bidder " + t.bidderCode + " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.")), 
            !1)) : ((0, h.logWarn)("Some adapter tried to add an undefined bid for " + e + "."), 
            !1) : ((0, h.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
            var i;
        }
    },
    10: function(e, t, n) {
        n(47), e.exports = n(13).Array.find;
    },
    11: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var n = [], r = !0, i = !1, o = void 0;
                try {
                    for (var a, d = e[Symbol.iterator](); !(r = (a = d.next()).done) && (n.push(a.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    i = !0, o = e;
                } finally {
                    try {
                        !r && d.return && d.return();
                    } finally {
                        if (i) throw o;
                    }
                }
                return n;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
        function i(e) {
            return e ? e.replace(/^\?/, "").split("&").reduce(function(e, t) {
                var n = t.split("="), r = a(n, 2), i = r[0], o = r[1];
                return /\[\]$/.test(i) ? (e[i = i.replace("[]", "")] = e[i] || [], e[i].push(o)) : e[i] = o || "", 
                e;
            }, {}) : {};
        }
        function r(e) {
            return Object.keys(e).map(function(t) {
                return Array.isArray(e[t]) ? e[t].map(function(e) {
                    return t + "[]=" + e;
                }).join("&") : t + "=" + e[t];
            }).join("&");
        }
        t.parseQS = i, t.formatQS = r, t.parse = function(e, t) {
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
        }, t.format = function(e) {
            return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":" + e.port : "")) + (e.pathname || "") + (e.search ? "?" + r(e.search || "") : "") + (e.hash ? "#" + e.hash : "");
        };
    },
    12: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Renderer = o, t.isRendererRequired = function(e) {
            return !(!e || !e.url);
        }, t.executeRenderer = function(e, t) {
            e.render(t);
        };
        var r, f = n(28), l = function(e) {
            {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t;
            }
        }(n(0)), i = n(10), g = (r = i) && r.__esModule ? r : {
            default: r
        };
        function o(e) {
            var t, n, r, i = this, o = e.url, a = e.config, d = e.id, u = e.callback, s = e.loaded, c = e.adUnitCode;
            this.url = o, this.config = a, this.handlers = {}, this.id = d, this.loaded = s, 
            this.cmd = [], this.push = function(e) {
                "function" == typeof e ? i.loaded ? e.call() : i.cmd.push(e) : l.logError("Commands given to Renderer.push must be wrapped in a function");
            }, this.callback = u || function() {
                i.loaded = !0, i.process();
            }, t = c, n = pbjs.adUnits, (r = (0, g.default)(n, function(e) {
                return e.code === t;
            })) && r.renderer && r.renderer.url && r.renderer.render ? l.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit " + c) : (0, 
            f.loadScript)(o, this.callback, !0);
        }
        o.install = function(e) {
            return new o({
                url: e.url,
                config: e.config,
                id: e.id,
                callback: e.callback,
                loaded: e.loaded,
                adUnitCode: e.adUnitCode
            });
        }, o.prototype.getConfig = function() {
            return this.config;
        }, o.prototype.setRender = function(e) {
            this.render = e;
        }, o.prototype.setEventHandlers = function(e) {
            this.handlers = e;
        }, o.prototype.handleVideoEvent = function(e) {
            var t = e.id, n = e.eventName;
            "function" == typeof this.handlers[n] && this.handlers[n](), l.logMessage("Prebid Renderer event for id " + t + " type " + n);
        }, o.prototype.process = function() {
            for (;0 < this.cmd.length; ) try {
                this.cmd.shift().call();
            } catch (e) {
                l.logError("Error processing Renderer command: ", e);
            }
        };
    },
    120: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(34)(6), o = "findIndex", a = !0;
        o in [] && Array(1)[o](function() {
            a = !1;
        }), r(r.P + r.F * a, "Array", {
            findIndex: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0);
            }
        }), n(26)(o);
    },
    13: function(e, t) {
        var n = e.exports = {
            version: "2.5.7"
        };
        "number" == typeof __e && (__e = n);
    },
    14: function(e, t, n) {
        var v = n(19), y = n(13), m = n(32), b = n(49), h = n(56), S = "prototype", E = function(e, t, n) {
            var r, i, o, a = e & E.F, d = e & E.G, u = e & E.S, s = e & E.P, c = e & E.B, f = e & E.W, l = d ? y : y[t] || (y[t] = {}), g = l[S], p = d ? v : u ? v[t] : (v[t] || {})[S];
            for (r in d && (n = t), n) (i = !a && p && void 0 !== p[r]) && h(l, r) || (o = i ? p[r] : n[r], 
            l[r] = d && "function" != typeof p[r] ? n[r] : c && i ? m(o, v) : f && p[r] == o ? function(r) {
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
                return e[S] = r[S], e;
            }(o) : s && "function" == typeof o ? m(Function.call, o) : o, s && ((l.virtual || (l.virtual = {}))[r] = o, 
            e & E.R && g && !g[r] && b(g, r, o)));
        };
        E.F = 1, E.G = 2, E.S = 4, E.P = 8, E.B = 16, E.W = 32, E.U = 64, E.R = 128, e.exports = E;
    },
    15: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
        };
    },
    16: function(e, t, n) {
        "use strict";
        var o = n(0);
        function r(e, t) {
            var n = t && t.bidId || o.getUniqueIdentifierStr(), r = t && t.src || "client", i = e || 0;
            this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, this.statusMessage = function() {
                switch (i) {
                  case 0:
                    return "Pending";

                  case 1:
                    return "Bid available";

                  case 2:
                    return "Bid returned empty or error response";

                  case 3:
                    return "Bid timed out";
                }
            }(), this.adId = n, this.mediaType = "banner", this.source = r, this.getStatusCode = function() {
                return i;
            }, this.getSize = function() {
                return this.width + "x" + this.height;
            };
        }
        t.createBid = function(e, t) {
            return new r(e, t);
        };
    },
    17: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hasNonNativeBidder = t.nativeBidder = t.nativeAdUnit = t.NATIVE_TARGETING_KEYS = t.nativeAdapters = void 0;
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        t.processNativeAdUnitParams = function(e) {
            if (e && e.type && (t = e.type, t && (0, d.default)(Object.keys(c), t) || ((0, a.logError)(t + " nativeParam is not supported"), 
            0))) return c[e.type];
            var t;
            return e;
        }, t.nativeBidIsValid = function(t, e) {
            var n = (0, a.getBidRequest)(t.adId, e);
            if (!n) return !1;
            if (!(0, a.deepAccess)(t, "native.clickUrl")) return !1;
            if ((0, a.deepAccess)(t, "native.image") && (!(0, a.deepAccess)(t, "native.image.height") || !(0, 
            a.deepAccess)(t, "native.image.width"))) return !1;
            if ((0, a.deepAccess)(t, "native.icon") && (!(0, a.deepAccess)(t, "native.icon.height") || !(0, 
            a.deepAccess)(t, "native.icon.width"))) return !1;
            var r = n.nativeParams;
            if (!r) return !0;
            var i = Object.keys(r).filter(function(e) {
                return r[e].required;
            }), o = Object.keys(t.native).filter(function(e) {
                return t.native[e];
            });
            return i.every(function(e) {
                return (0, d.default)(o, e);
            });
        }, t.fireNativeTrackers = function(e, t) {
            var n = void 0;
            "click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers, 
            t.native && t.native.javascriptTrackers && (0, a.insertHtmlIntoIframe)(t.native.javascriptTrackers));
            (n || []).forEach(a.triggerPixel);
        }, t.getNativeTargeting = function(r) {
            var i = {};
            return Object.keys(r.native).forEach(function(e) {
                var t = u.NATIVE_KEYS[e], n = r.native[e];
                "object" === (void 0 === n ? "undefined" : o(n)) && n.url && (n = n.url), t && n && (i[t] = n);
            }), i;
        };
        var r, a = n(0), i = n(7), d = (r = i) && r.__esModule ? r : {
            default: r
        };
        var u = n(4), s = t.nativeAdapters = [], c = (t.NATIVE_TARGETING_KEYS = Object.keys(u.NATIVE_KEYS).map(function(e) {
            return u.NATIVE_KEYS[e];
        }), {
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
        });
        t.nativeAdUnit = function(e) {
            var t = "native" === e.mediaType, n = (0, a.deepAccess)(e, "mediaTypes.native");
            return t || n;
        };
        var f = t.nativeBidder = function(e) {
            return (0, d.default)(s, e.bidder);
        };
        t.hasNonNativeBidder = function(e) {
            return e.bids.filter(function(e) {
                return !f(e);
            }).length;
        };
    },
    18: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.userSync = void 0;
        var i = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var n = [], r = !0, i = !1, o = void 0;
                try {
                    for (var a, d = e[Symbol.iterator](); !(r = (a = d.next()).done) && (n.push(a.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    i = !0, o = e;
                } finally {
                    try {
                        !r && d.return && d.return();
                    } finally {
                        if (i) throw o;
                    }
                }
                return n;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        };
        t.newUserSync = a;
        var r, c = function(e) {
            {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t;
            }
        }(n(0)), f = n(3), o = n(7), l = (r = o) && r.__esModule ? r : {
            default: r
        };
        function a(e) {
            var t = {}, o = {
                image: [],
                iframe: []
            }, n = !1, a = {}, d = {
                image: !1,
                iframe: !1
            }, u = e.config;
            function r() {
                if (u.syncEnabled && e.browserSupportsCookies && !n) {
                    try {
                        !function() {
                            if (!u.pixelEnabled && !d.image) return;
                            c.shuffle(o.image).forEach(function(e) {
                                var t = i(e, 2), n = t[0], r = t[1];
                                c.logMessage("Invoking image pixel user sync for bidder: " + n), c.triggerPixel(r);
                            });
                        }(), function() {
                            if (!u.iframeEnabled && !d.iframe) return;
                            c.shuffle(o.iframe).forEach(function(e) {
                                var t = i(e, 2), n = t[0], r = t[1];
                                c.logMessage("Invoking iframe user sync for bidder: " + n), c.insertUserSyncIframe(r);
                            });
                        }();
                    } catch (e) {
                        return c.logError("Error firing user syncs", e);
                    }
                    o = {
                        image: [],
                        iframe: []
                    }, n = !0;
                }
            }
            return f.config.getConfig("userSync", function(e) {
                u = s(u, e.userSync);
            }), t.registerSync = function(e, t, n) {
                if (!u.syncEnabled || !c.isArray(o[e])) return c.logWarn('User sync type "' + e + '" not supported');
                if (!t) return c.logWarn("Bidder is required for registering sync");
                if (0 !== u.syncsPerBidder && Number(a[t]) >= u.syncsPerBidder) return c.logWarn('Number of user syncs exceeded for "' + t + '"');
                if (u.filterSettings) {
                    if (function(e, t) {
                        var n = u.filterSettings;
                        if (function(e, t) {
                            if (e.all && e[t]) return c.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.' + t + '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.'), 
                            !1;
                            var n = e.all ? e.all : e[t], r = e.all ? "all" : t;
                            if (!n) return !1;
                            var i = n.filter, o = n.bidders;
                            if (i && "include" !== i && "exclude" !== i) return c.logWarn('UserSync "filterSettings.' + r + ".filter\" setting '" + i + "' is not a valid option; use either 'include' or 'exclude'."), 
                            !1;
                            return !!("*" === o || Array.isArray(o) && 0 < o.length && o.every(function(e) {
                                return c.isStr(e) && "*" !== e;
                            })) || (c.logWarn('Detected an invalid setup in userSync "filterSettings.' + r + ".bidders\"; use either '*' (to represent all bidders) or an array of bidders."), 
                            !1);
                        }(n, e)) {
                            d[e] = !0;
                            var r = n.all ? n.all : n[e], i = "*" === r.bidders ? [ t ] : r.bidders, o = r.filter || "include", a = {
                                include: function(e, t) {
                                    return !(0, l.default)(e, t);
                                },
                                exclude: function(e, t) {
                                    return (0, l.default)(e, t);
                                }
                            };
                            return a[o](i, t);
                        }
                        return !1;
                    }(e, t)) return c.logWarn("Bidder '" + t + "' is not permitted to register their userSync " + e + " pixels as per filterSettings config.");
                } else if (u.enabledBidders && u.enabledBidders.length && u.enabledBidders.indexOf(t) < 0) return c.logWarn('Bidder "' + t + '" not permitted to register their userSync pixels.');
                var r, i;
                o[e].push([ t, n ]), (r = a)[i = t] ? r[i] += 1 : r[i] = 1, a = r;
            }, t.syncUsers = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                if (e) return setTimeout(r, Number(e));
                r();
            }, t.triggerUserSyncs = function() {
                u.enableOverride && t.syncUsers();
            }, t;
        }
        f.config.setDefaults({
            userSync: {
                syncEnabled: !0,
                pixelEnabled: !0,
                syncsPerBidder: 5,
                syncDelay: 3e3
            }
        });
        var d = !c.isSafariBrowser() && c.cookiesAreEnabled();
        t.userSync = a({
            config: f.config.getConfig("userSync"),
            browserSupportsCookies: d
        });
    },
    19: function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n);
    },
    2: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.NATIVE = "native", t.VIDEO = "video", t.BANNER = "banner";
    },
    20: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        t.createHook = function(r, i, e) {
            var d = [ {
                fn: i,
                priority: 0
            } ], o = {
                sync: function() {
                    for (var t = this, e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    d.forEach(function(e) {
                        e.fn.apply(t, n);
                    });
                },
                asyncSeries: function() {
                    for (var o = this, e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var a = 0;
                    return d[a].fn.apply(this, t.concat(function e() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        var i = d[++a];
                        if ("object" === (void 0 === i ? "undefined" : u(i)) && "function" == typeof i.fn) return i.fn.apply(o, n.concat(e));
                    }));
                }
            };
            if (!o[r]) throw "invalid hook type";
            var t = {
                addHook: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 10;
                    "function" == typeof e && (d.push({
                        fn: e,
                        priority: t
                    }), d.sort(function(e, t) {
                        return t.priority - e.priority;
                    }));
                },
                removeHook: function(t) {
                    d = d.filter(function(e) {
                        return e.fn === i || e.fn !== t;
                    });
                },
                hasHook: function(t) {
                    return d.some(function(e) {
                        return e.fn === t;
                    });
                }
            };
            "string" == typeof e && (s[e] = t);
            return a(function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return 1 !== d.length || d[0].fn !== i ? o[r].apply(this, t) : i.apply(this, t);
            }, t);
        };
        var s = t.hooks = {};
    },
    21: function(e, t, n) {
        n(120), e.exports = n(13).Array.findIndex;
    },
    22: function(e, t, n) {
        e.exports = !n(33)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    },
    23: function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1);
        };
    },
    234: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.store = function(e, t) {
            var n = {
                puts: e.map(a)
            };
            (0, i.ajax)(o.config.getConfig("cache.url"), (r = t, {
                success: function(e) {
                    var t = void 0;
                    try {
                        t = JSON.parse(e).responses;
                    } catch (e) {
                        return void r(e, []);
                    }
                    t ? r(null, t) : r(new Error("The cache server didn't respond with a responses property."), []);
                },
                error: function(e, t) {
                    r(new Error("Error storing video ad in the cache: " + e + ": " + JSON.stringify(t)), []);
                }
            }), JSON.stringify(n), {
                contentType: "text/plain",
                withCredentials: !0
            });
            var r;
        }, t.getCacheUrl = function(e) {
            return o.config.getConfig("cache.url") + "?uuid=" + e;
        };
        var i = n(6), o = n(3);
        function a(e) {
            var t, n;
            return {
                type: "xml",
                value: e.vastXml ? e.vastXml : (t = e.vastUrl, n = e.vastImpUrl, '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA[' + t + "]]></VASTAdTagURI>\n        <Impression>" + (n ? "<![CDATA[" + n + "]]>" : "") + "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>"),
                ttlseconds: Number(e.ttl)
            };
        }
    },
    24: function(e, t) {
        e.exports = function(e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e;
        };
    },
    25: function(e, t, n) {
        var r = n(60)("wks"), i = n(62), o = n(19).Symbol, a = "function" == typeof o;
        (e.exports = function(e) {
            return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e));
        }).store = r;
    },
    26: function(e, t) {
        e.exports = function() {};
    },
    27: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
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
    28: function(e, t, n) {
        "use strict";
        var r, i = n(7), o = (r = i) && r.__esModule ? r : {
            default: r
        }, a = function(e) {
            {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t;
            }
        }(n(0));
        var d = {}, u = [ "criteo" ];
        function s(e, t) {
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
        t.loadExternalScript = function(e, t) {
            if (t && e) if ((0, o.default)(u, t)) {
                if (!d[e]) {
                    a.logWarn("module " + t + " is loading external JavaScript");
                    var n = document.createElement("script");
                    n.type = "text/javascript", n.async = !0, n.src = e, a.insertElement(n), d[e] = !0;
                }
            } else a.logError(t + " not whitelisted for loading external JavaScript"); else a.logError("cannot load external script without url and moduleCode");
        }, t.loadScript = function(t, e, n) {
            t ? n ? d[t] ? e && "function" == typeof e && (d[t].loaded ? e() : d[t].callbacks.push(e)) : (d[t] = {
                loaded: !1,
                callbacks: []
            }, e && "function" == typeof e && d[t].callbacks.push(e), s(t, function() {
                d[t].loaded = !0;
                try {
                    for (var e = 0; e < d[t].callbacks.length; e++) d[t].callbacks[e]();
                } catch (e) {
                    a.logError("Error executing callback", "adloader.js:loadScript", e);
                }
            })) : s(t, e) : a.logError("Error attempting to request empty URL", "adloader.js:loadScript");
        };
    },
    29: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.auctionManager = void 0, t.newAuctionManager = u;
        var r, o = n(0), s = n(44), i = n(10), a = (r = i) && r.__esModule ? r : {
            default: r
        };
        var d = n(4);
        function u() {
            var u = [], i = {};
            return i.addWinningBid = function(t) {
                var e = (0, a.default)(u, function(e) {
                    return e.getAuctionId() === t.auctionId;
                });
                e ? e.addWinningBid(t) : utils.logWarn("Auction not found when adding winning bid");
            }, i.getAllWinningBids = function() {
                return u.map(function(e) {
                    return e.getWinningBids();
                }).reduce(o.flatten, []);
            }, i.getBidsRequested = function() {
                return u.map(function(e) {
                    return e.getBidRequests();
                }).reduce(o.flatten, []);
            }, i.getNoBids = function() {
                return u.map(function(e) {
                    return e.getNoBids();
                }).reduce(o.flatten, []);
            }, i.getBidsReceived = function() {
                return u.map(function(e) {
                    if (e.getAuctionStatus() === s.AUCTION_COMPLETED) return e.getBidsReceived();
                }).reduce(o.flatten, []).filter(function(e) {
                    return e;
                });
            }, i.getAdUnits = function() {
                return u.map(function(e) {
                    return e.getAdUnits();
                }).reduce(o.flatten, []);
            }, i.getAdUnitCodes = function() {
                return u.map(function(e) {
                    return e.getAdUnitCodes();
                }).reduce(o.flatten, []).filter(o.uniques);
            }, i.createAuction = function(e) {
                var t, n = e.adUnits, r = e.adUnitCodes, i = e.callback, o = e.cbTimeout, a = e.labels, d = (0, 
                s.newAuction)({
                    adUnits: n,
                    adUnitCodes: r,
                    callback: i,
                    cbTimeout: o,
                    labels: a
                });
                return t = d, u.push(t), d;
            }, i.findBidByAdId = function(t) {
                return (0, a.default)(u.map(function(e) {
                    return e.getBidsReceived();
                }).reduce(o.flatten, []), function(e) {
                    return e.adId === t;
                });
            }, i.getStandardBidderAdServerTargeting = function() {
                return (0, s.getStandardBidderSettings)()[d.JSON_MAPPING.ADSERVER_TARGETING];
            }, i.setStatusForBids = function(e, t) {
                var n = i.findBidByAdId(e);
                if (n && (n.status = t), n && t === d.BID_STATUS.BID_TARGETING_SET) {
                    var r = (0, a.default)(u, function(e) {
                        return e.getAuctionId() === n.auctionId;
                    });
                    r && r.setBidTargeting(n);
                }
            }, i;
        }
        t.auctionManager = u();
    },
    3: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.config = t.RANDOM = void 0;
        var u = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        t.newConfig = d;
        var r = n(31), c = o(n(10)), f = o(n(7)), i = n(20);
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var l = n(0), g = !1, p = 3e3, v = window.location.origin, y = !0, m = !1, b = 400, a = t.RANDOM = "random", h = {};
        h[a] = !0, h.fixed = !0;
        var S = a, E = {
            LOW: "low",
            MEDIUM: "medium",
            HIGH: "high",
            AUTO: "auto",
            DENSE: "dense",
            CUSTOM: "custom"
        }, T = "*";
        function d() {
            var o = [], a = void 0, d = void 0;
            function e() {
                function i(t) {
                    return (0, c.default)(Object.keys(E), function(e) {
                        return t === E[e];
                    });
                }
                function o(e) {
                    if (!e) return l.logError("Prebid Error: no value passed to `setPriceGranularity()`"), 
                    !1;
                    if ("string" == typeof e) i(e) || l.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default."); else if ("object" === (void 0 === e ? "undefined" : s(e)) && !(0, 
                    r.isValidPriceConfig)(e)) return l.logError("Invalid custom price value passed to `setPriceGranularity()`"), 
                    !1;
                    return !0;
                }
                a = {}, d = {
                    _debug: g,
                    get debug() {
                        return this._debug;
                    },
                    set debug(e) {
                        this._debug = e;
                    },
                    _bidderTimeout: p,
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
                    _priceGranularity: E.MEDIUM,
                    set priceGranularity(e) {
                        o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : E.MEDIUM : "object" === (void 0 === e ? "undefined" : s(e)) && (this._customPriceBucket = e, 
                        this._priceGranularity = E.CUSTOM, l.logMessage("Using custom price granularity")));
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
                            return o(n[t]) ? "string" == typeof n ? e[t] = i(n[t]) ? n[t] : r._priceGranularity : "object" === (void 0 === n ? "undefined" : s(n)) && (e[t] = n[t], 
                            l.logMessage("Using custom price granularity for " + t)) : l.logWarn("Invalid price granularity for media type: " + t), 
                            e;
                        }, {});
                    },
                    _sendAllBids: y,
                    get enableSendAllBids() {
                        return this._sendAllBids;
                    },
                    set enableSendAllBids(e) {
                        this._sendAllBids = e;
                    },
                    _bidderSequence: S,
                    get bidderSequence() {
                        return this._bidderSequence;
                    },
                    set bidderSequence(e) {
                        h[e] ? this._bidderSequence = e : l.logWarn("Invalid order: " + e + ". Bidder Sequence was not set.");
                    },
                    _timeoutBuffer: b,
                    get timeoutBuffer() {
                        return this._timeoutBuffer;
                    },
                    set timeoutBuffer(e) {
                        this._timeoutBuffer = e;
                    },
                    _disableAjaxTimeout: m,
                    get disableAjaxTimeout() {
                        return this._disableAjaxTimeout;
                    },
                    set disableAjaxTimeout(e) {
                        this._disableAjaxTimeout = e;
                    }
                };
            }
            var t = (0, i.createHook)("asyncSeries", function(n) {
                if ("object" === (void 0 === n ? "undefined" : s(n))) {
                    var i, t, e = Object.keys(n), r = {};
                    e.forEach(function(e) {
                        var t = n[e];
                        "object" === s(a[e]) && "object" === (void 0 === t ? "undefined" : s(t)) && (t = u({}, a[e], t)), 
                        r[e] = d[e] = t;
                    }), i = r, t = Object.keys(i), o.filter(function(e) {
                        return (0, f.default)(t, e.topic);
                    }).forEach(function(e) {
                        var t, n, r;
                        e.callback((t = {}, n = e.topic, r = i[e.topic], n in t ? Object.defineProperty(t, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = r, t));
                    }), o.filter(function(e) {
                        return e.topic === T;
                    }).forEach(function(e) {
                        return e.callback(i);
                    });
                } else l.logError("setConfig options must be an object");
            });
            return e(), {
                getConfig: function() {
                    if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                        var e = arguments.length <= 0 ? void 0 : arguments[0];
                        return e ? l.deepAccess(d, e) : d;
                    }
                    return function(e, t) {
                        var n = t;
                        return "string" != typeof e && (n = e, e = T), "function" == typeof n ? (o.push({
                            topic: e,
                            callback: n
                        }), function() {
                            o.splice(o.indexOf(t), 1);
                        }) : void l.logError("listener must be a function");
                    }.apply(void 0, arguments);
                },
                setConfig: t,
                setDefaults: function(e) {
                    "object" === (void 0 === a ? "undefined" : s(a)) ? (u(a, e), u(d, e)) : l.logError("defaults must be an object");
                },
                resetConfig: e
            };
        }
        t.config = d();
    },
    30: function(Pr, Qr) {
        var Rr;
        Rr = function() {
            return this;
        }();
        try {
            Rr = Rr || Function("return this")() || eval("this");
        } catch (e) {
            "object" == typeof window && (Rr = window);
        }
        Pr.exports = Rr;
    },
    31: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isValidPriceConfig = t.getPriceBucketString = void 0;
        var r, i = n(10), v = (r = i) && r.__esModule ? r : {
            default: r
        };
        var o = n(0), y = 2, a = {
            buckets: [ {
                min: 0,
                max: 5,
                increment: .5
            } ]
        }, d = {
            buckets: [ {
                min: 0,
                max: 20,
                increment: .1
            } ]
        }, u = {
            buckets: [ {
                min: 0,
                max: 20,
                increment: .01
            } ]
        }, s = {
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
        }, c = {
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
        function f(n, e, r) {
            var i = "";
            if (!m(e)) return i;
            var t, o, a, d, u, s, c, f, l, g = e.buckets.reduce(function(e, t) {
                return e.max > t.max ? e : t;
            }, {
                max: 0
            }), p = (0, v.default)(e.buckets, function(e) {
                if (n > g.max * r) {
                    var t = e.precision;
                    void 0 === t && (t = y), i = (e.max * r).toFixed(t);
                } else if (n <= e.max * r && n >= e.min * r) return e;
            });
            return p && (t = n, a = r, d = void 0 !== (o = p).precision ? o.precision : y, u = o.increment * a, 
            s = o.min * a, c = Math.pow(10, d + 2), f = (t * c - s * c) / (u * c), l = Math.floor(f) * u + s, 
            i = (l = Number(l.toFixed(10))).toFixed(d)), i;
        }
        function m(e) {
            if (o.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
            var t = !0;
            return e.buckets.forEach(function(e) {
                void 0 !== e.min && e.max && e.increment || (t = !1);
            }), t;
        }
        t.getPriceBucketString = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1, r = parseFloat(e);
            return isNaN(r) && (r = ""), {
                low: "" === r ? "" : f(e, a, n),
                med: "" === r ? "" : f(e, d, n),
                high: "" === r ? "" : f(e, u, n),
                auto: "" === r ? "" : f(e, c, n),
                dense: "" === r ? "" : f(e, s, n),
                custom: "" === r ? "" : f(e, t, n)
            };
        }, t.isValidPriceConfig = m;
    },
    32: function(e, t, n) {
        var o = n(48);
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
        var h = n(32), S = n(35), E = n(57), T = n(36), r = n(58);
        e.exports = function(f, e) {
            var l = 1 == f, g = 2 == f, p = 3 == f, v = 4 == f, y = 6 == f, m = 5 == f || y, b = e || r;
            return function(e, t, n) {
                for (var r, i, o = E(e), a = S(o), d = h(t, n, 3), u = T(a.length), s = 0, c = l ? b(e, u) : g ? b(e, 0) : void 0; s < u; s++) if ((m || s in a) && (i = d(r = a[s], s, o), 
                f)) if (l) c[s] = i; else if (i) switch (f) {
                  case 3:
                    return !0;

                  case 5:
                    return r;

                  case 6:
                    return s;

                  case 2:
                    c.push(r);
                } else if (v) return !1;
                return y ? -1 : p || v ? v : c;
            };
        };
    },
    35: function(e, t, n) {
        var r = n(23);
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
        var r = n(23);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e);
        };
    },
    39: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        t.setSizeConfig = d, t.getLabels = function(e, t) {
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
        }, t.sizeSupported = function(e) {
            var t = y(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : v);
            return !t.shouldFilter || !!t.sizesSupported[e];
        }, t.resolveStatus = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.labels, n = void 0 === t ? [] : t, r = e.labelAll, i = void 0 !== r && r, o = e.activeLabels, a = void 0 === o ? [] : o, d = arguments[1], u = arguments[2], s = y(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : v);
            d = (0, g.isPlainObject)(d) ? (0, g.deepClone)(d) : u ? {
                banner: {
                    sizes: u
                }
            } : {};
            var c = (0, g.deepAccess)(d, "banner.sizes");
            s.shouldFilter && c && (d.banner.sizes = c.filter(function(e) {
                return s.sizesSupported[e];
            }));
            var f = Object.keys(d), l = {
                active: 1 < f.length || 1 === f.length && "banner" !== f[0] || "banner" === f[0] && 0 < (0, 
                g.deepAccess)(d, "banner.sizes.length") && (0 === n.length || !i && (n.some(function(e) {
                    return s.labels[e];
                }) || n.some(function(e) {
                    return (0, p.default)(a, e);
                })) || i && n.reduce(function(e, t) {
                    return e ? s.labels[t] || (0, p.default)(a, t) : e;
                }, !0)),
                mediaTypes: d
            };
            c && c.length !== d.banner.sizes.length && (l.filterResults = {
                before: c,
                after: d.banner.sizes
            });
            return l;
        };
        var i, o = n(3), g = n(0), a = n(7), p = (i = a) && i.__esModule ? i : {
            default: i
        };
        var v = [];
        function d(e) {
            v = e;
        }
        function y(e) {
            return e.reduce(function(n, e) {
                return "object" === (void 0 === e ? "undefined" : r(e)) && "string" == typeof e.mediaQuery ? matchMedia(e.mediaQuery).matches && (Array.isArray(e.sizesSupported) && (n.shouldFilter = !0), 
                [ "labels", "sizesSupported" ].forEach(function(t) {
                    return (e[t] || []).forEach(function(e) {
                        return n[t][e] = !0;
                    });
                })) : (0, g.logWarn)('sizeConfig rule missing required property "mediaQuery"'), 
                n;
            }, {
                labels: {},
                sizesSupported: {},
                shouldFilter: !1
            });
        }
        o.config.getConfig("sizeConfig", function(e) {
            return d(e.sizeConfig);
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
            REPO_AND_VERSION: "prebid_prebid_1.36.0",
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
                cta: "hb_native_cta",
                rating: "hb_native_rating"
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.adunitCounter = void 0;
        var r = n(0), i = {};
        var o = {
            incrementCounter: function(e) {
                return i[e] = i[e] || {}, i[e].counter = (0, r.deepAccess)(i, e + ".counter") + 1 || 1, 
                i[e].counter;
            },
            getCounter: function(e) {
                return (0, r.deepAccess)(i, e + ".counter") || 0;
            }
        };
        t.adunitCounter = o;
    },
    41: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hasNonVideoBidder = t.videoBidder = t.videoAdUnit = t.OUTSTREAM = void 0, 
        t.isValidVideoBid = function(e, t) {
            var n = (0, o.getBidRequest)(e.adId, t), r = n && (0, o.deepAccess)(n, "mediaTypes.video"), i = r && (0, 
            o.deepAccess)(r, "context");
            if (!n || r && i !== s) return a.config.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : ((0, 
            o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), 
            !1);
            return i !== s || !(!e.renderer && !n.renderer);
        };
        var r, i = n(8), o = n(0), a = n(3), d = n(7), u = (r = d) && r.__esModule ? r : {
            default: r
        };
        var s = t.OUTSTREAM = "outstream", c = (t.videoAdUnit = function(e) {
            var t = "video" === e.mediaType, n = (0, o.deepAccess)(e, "mediaTypes.video");
            return t || n;
        }, t.videoBidder = function(e) {
            return (0, u.default)(i.videoAdapters, e.bidder);
        });
        t.hasNonVideoBidder = function(e) {
            return e.bids.filter(function(e) {
                return !c(e);
            }).length;
        };
    },
    42: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getGlobal = function() {
            return window.pbjs;
        }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || [];
    },
    43: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.targeting = t.isBidNotExpired = t.TARGETING_KEYS = void 0;
        var h = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        };
        t.getHighestCpmBidsFromBidPool = U, t.newTargeting = u;
        var r, S = n(0), E = n(3), T = n(17), i = n(29), a = n(39), o = n(7), A = (r = o) && r.__esModule ? r : {
            default: r
        };
        function I(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n;
            }
            return Array.from(e);
        }
        function _(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var w = n(0), C = n(4), B = [], O = 20, R = t.TARGETING_KEYS = Object.keys(C.TARGETING_KEYS).map(function(e) {
            return C.TARGETING_KEYS[e];
        }), d = (t.isBidNotExpired = function(e) {
            return e.responseTimestamp + 1e3 * e.ttl + 1e3 > (0, S.timestamp)();
        }, function(e) {
            return e && (e.status && !(0, A.default)([ C.BID_STATUS.BID_TARGETING_SET, C.BID_STATUS.RENDERED ], e.status) || !e.status);
        });
        function U(e, n) {
            var r = [], i = (0, S.groupBy)(e, "adUnitCode");
            return Object.keys(i).forEach(function(e) {
                var t = (0, S.groupBy)(i[e], "bidderCode");
                Object.keys(t).forEach(function(e) {
                    return r.push(t[e].reduce(n));
                });
            }), r;
        }
        function u(n) {
            var g = {};
            function p(e) {
                return "string" == typeof e ? [ e ] : w.isArray(e) ? e : n.getAdUnitCodes() || [];
            }
            function v() {
                return U(n.getBidsReceived().filter(function(e) {
                    return "banner" !== e.mediaType || (0, a.sizeSupported)([ e.width, e.height ]);
                }).filter(d).filter(t.isBidNotExpired), S.getOldestHighestCpmBid);
            }
            function y() {
                return n.getStandardBidderAdServerTargeting().map(function(e) {
                    return e.key;
                }).concat(R).filter(S.uniques);
            }
            function m(r, i, e, t) {
                return Object.keys(i.adserverTargeting).filter(o()).forEach(function(e) {
                    var t, n;
                    r.length && r.filter((n = e, function(e) {
                        return e.adUnitCode === i.adUnitCode && e.adserverTargeting[n];
                    })).forEach((t = e, function(e) {
                        w.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [ e.adserverTargeting[t] ]), 
                        e.adserverTargeting[t] = e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(S.uniques), 
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
            function b(t) {
                return _({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(o()).map(function(e) {
                    return _({}, e.substring(0, O), [ t.adserverTargeting[e] ]);
                }));
            }
            return g.resetPresetTargeting = function(e) {
                if ((0, S.isGptPubadsDefined)()) {
                    var t = p(e), r = n.getAdUnits().filter(function(e) {
                        return (0, A.default)(t, e.code);
                    });
                    window.googletag.pubads().getSlots().forEach(function(n) {
                        B.forEach(function(t) {
                            r.forEach(function(e) {
                                e.code !== n.getAdUnitPath() && e.code !== n.getSlotElementId() || n.setTargeting(t, null);
                            });
                        });
                    });
                }
            }, g.getAllTargeting = function(e) {
                var r, t, i, n, o, a, d, u, s, c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : v(), f = p(e), l = (a = f, 
                d = c, u = g.getWinningBids(a, d), s = y(), u = u.map(function(o) {
                    return _({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter(function(e) {
                        return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === s.indexOf(e);
                    }).reduce(function(e, t) {
                        var n = [ o.adserverTargeting[t] ], r = _({}, t.substring(0, O), n);
                        if (t !== C.TARGETING_KEYS.DEAL) return [].concat(I(e), [ r ]);
                        var i = _({}, (t + "_" + o.bidderCode).substring(0, O), n);
                        return [].concat(I(e), [ r, i ]);
                    }, []));
                })).concat((n = f, o = c, o.filter(function(e) {
                    return (0, A.default)(n, e.adUnitCode);
                }).map(function(e) {
                    return h({}, e);
                }).reduce(m, []).map(b).filter(function(e) {
                    return e;
                }))).concat(E.config.getConfig("enableSendAllBids") ? (r = f, t = c, i = R.concat(T.NATIVE_TARGETING_KEYS), 
                U(t, S.getHighestCpm).map(function(t) {
                    if (t.adserverTargeting && r && (w.isArray(r) && (0, A.default)(r, t.adUnitCode) || "string" == typeof r && t.adUnitCode === r)) return _({}, t.adUnitCode, (n = t, 
                    i.filter(function(e) {
                        return void 0 !== t.adserverTargeting[e];
                    }).map(function(e) {
                        return _({}, (e + "_" + n.bidderCode).substring(0, O), [ n.adserverTargeting[e] ]);
                    })));
                    var n;
                }).filter(function(e) {
                    return e;
                })) : []);
                return l.map(function(t) {
                    Object.keys(t).map(function(e) {
                        t[e].map(function(e) {
                            -1 === B.indexOf(Object.keys(e)[0]) && (B = Object.keys(e).concat(B));
                        });
                    });
                }), l = l.map(function(e) {
                    return _({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function(e) {
                        return _({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "));
                    }).reduce(function(e, t) {
                        return h(t, e);
                    }, {}));
                }).reduce(function(e, t) {
                    var n = Object.keys(t)[0];
                    return e[n] = h({}, e[n], t[n]), e;
                }, {}), f.forEach(function(e) {
                    l[e] || (l[e] = {});
                }), l;
            }, g.setTargetingForGPT = function(i, e) {
                window.googletag.pubads().getSlots().forEach(function(r) {
                    Object.keys(i).filter(e ? e(r) : (0, S.isAdUnitCodeMatchingSlot)(r)).forEach(function(n) {
                        return Object.keys(i[n]).forEach(function(t) {
                            var e = i[n][t].split(",");
                            (e = 1 < e.length ? [ e ] : e).map(function(e) {
                                return w.logMessage("Attempting to set key value for slot: " + r.getSlotElementId() + " key: " + t + " value: " + e), 
                                e;
                            }).forEach(function(e) {
                                r.setTargeting(t, e);
                            });
                        });
                    });
                });
            }, g.getWinningBids = function(e) {
                var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : v(), t = p(e);
                return n.filter(function(e) {
                    return (0, A.default)(t, e.adUnitCode);
                }).filter(function(e) {
                    return 0 < e.cpm;
                }).map(function(e) {
                    return e.adUnitCode;
                }).filter(S.uniques).map(function(t) {
                    return n.filter(function(e) {
                        return e.adUnitCode === t ? e : null;
                    }).reduce(S.getHighestCpm);
                });
            }, g.setTargetingForAst = function() {
                var r = g.getAllTargeting();
                Object.keys(r).forEach(function(n) {
                    return Object.keys(r[n]).forEach(function(e) {
                        if (w.logMessage("Attempting to set targeting for targetId: " + n + " key: " + e + " value: " + r[n][e]), 
                        w.isStr(r[n][e]) || w.isArray(r[n][e])) {
                            var t = {};
                            e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e], window.apntag.setKeywords(n, t);
                        }
                    });
                });
            }, g.isApntagDefined = function() {
                if (window.apntag && w.isFn(window.apntag.setKeywords)) return !0;
            }, g;
        }
        t.targeting = u(i.auctionManager);
    },
    44: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.addBidResponse = t.AUCTION_COMPLETED = t.AUCTION_IN_PROGRESS = t.AUCTION_STARTED = void 0;
        var v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, y = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        };
        t.newAuction = function(e) {
            var f = e.adUnits, t = e.adUnitCodes, n = e.callback, r = e.cbTimeout, i = e.labels, u = f, s = i, l = t, g = [], p = [], o = [], c = void 0, v = void 0, y = B.generateUUID(), m = void 0, b = n, h = void 0, S = r, a = [];
            function E() {
                return {
                    auctionId: y,
                    timestamp: c,
                    auctionEnd: v,
                    auctionStatus: m,
                    adUnits: u,
                    adUnitCodes: l,
                    labels: s,
                    bidderRequests: g,
                    noBids: o,
                    bidsReceived: p,
                    winningBids: a,
                    timeout: S
                };
            }
            function T(e, t) {
                if (t && clearTimeout(h), null != b) {
                    var n = [];
                    e && (B.logMessage("Auction " + y + " timedOut"), d = p, u = (a = g).filter(function(e) {
                        return !e.doneCbCallCount;
                    }).map(function(e) {
                        return e.bidderCode;
                    }).filter(I.uniques), s = d.map(function(e) {
                        return e.bidder;
                    }).filter(I.uniques), c = u.filter(function(e) {
                        return !(0, w.default)(s, e);
                    }), (n = a.map(function(e) {
                        return (e.bids || []).filter(function(e) {
                            return (0, w.default)(c, e.bidder);
                        });
                    }).reduce(I.flatten, []).map(function(e) {
                        return {
                            bidId: e.bidId,
                            bidder: e.bidder,
                            adUnitCode: e.adUnitCode,
                            auctionId: e.auctionId
                        };
                    })).length && R.emit(U.EVENTS.BID_TIMEOUT, n));
                    try {
                        m = j, v = Date.now(), R.emit(U.EVENTS.AUCTION_END, E());
                        var r = l, i = p.filter(I.adUnitsFilter.bind(this, r)).reduce(z, {});
                        b.apply(pbjs, [ i, e ]);
                    } catch (e) {
                        B.logError("Error executing bidsBackHandler", null, e);
                    } finally {
                        n.length && O.callTimedOutBidders(f, n, S);
                        var o = _.config.getConfig("userSync") || {};
                        o.enableOverride || C(o.syncDelay);
                    }
                    b = null;
                }
                var a, d, u, s, c;
            }
            function A() {
                B.logInfo("Bids Received for Auction with id: " + y, p), m = j, T(!1, !0);
            }
            return {
                addBidReceived: function(e) {
                    p = p.concat(e);
                },
                addNoBid: function(e) {
                    o = o.concat(e);
                },
                executeCallback: T,
                callBids: function() {
                    var n = this;
                    m = N, c = Date.now();
                    var i = O.makeBidRequests(u, c, y, S, s);
                    B.logInfo("Bids Requested for Auction with id: " + y, i), i.forEach(function(e) {
                        var t;
                        t = e, g = g.concat(t);
                    });
                    var o = {};
                    if (i.length < 1) B.logWarn("No valid bid requests returned for auction"), A(); else {
                        var e = {
                            bidRequests: i,
                            run: function() {
                                var e, t;
                                e = T.bind(null, !0), t = setTimeout(e, S), h = t, m = D, R.emit(U.EVENTS.AUCTION_INIT, E());
                                var r = G(A, n);
                                O.callBids(u, i, function() {
                                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    q.apply({
                                        dispatch: r.addBidResponse,
                                        bidderRequest: this
                                    }, t);
                                }, r.adapterDone, {
                                    request: function(e, t) {
                                        d(k, t), d(o, e), x[e] || (x[e] = {
                                            SRA: !0,
                                            origin: t
                                        }), 1 < o[e] && (x[e].SRA = !1);
                                    },
                                    done: function(e) {
                                        k[e]--, M[0] && a(M[0]) && M.shift();
                                    }
                                }, S);
                            }
                        };
                        a(e) || (B.logWarn("queueing auction due to limited endpoint capacity"), M.push(e));
                    }
                    function a(e) {
                        var r = !0, i = _.config.getConfig("maxRequestsPerOrigin") || P;
                        return e.bidRequests.some(function(e) {
                            var t = 1, n = void 0 !== e.src && e.src === U.S2S.SRC ? "s2s" : e.bidderCode;
                            return x[n] && (!1 === x[n].SRA && (t = Math.min(e.bids.length, i)), k[x[n].origin] + t > i && (r = !1)), 
                            !r;
                        }), r && e.run(), r;
                    }
                    function d(e, t) {
                        void 0 === e[t] ? e[t] = 1 : e[t]++;
                    }
                },
                addWinningBid: function(e) {
                    a = a.concat(e), O.callBidWonBidder(e.bidder, e, f);
                },
                setBidTargeting: function(e) {
                    O.callSetTargetingBidder(e.bidder, e);
                },
                getWinningBids: function() {
                    return a;
                },
                getTimeout: function() {
                    return S;
                },
                getAuctionId: function() {
                    return y;
                },
                getAuctionStatus: function() {
                    return m;
                },
                getAdUnits: function() {
                    return u;
                },
                getAdUnitCodes: function() {
                    return l;
                },
                getBidRequests: function() {
                    return g;
                },
                getBidsReceived: function() {
                    return p;
                },
                getNoBids: function() {
                    return o;
                }
            };
        }, t.auctionCallbacks = G, t.getStandardBidderSettings = d, t.getKeyValueTargetingPairs = W, 
        t.adjustBids = s;
        var I = n(0), m = n(31), i = n(17), b = n(234), h = n(12), _ = n(3), r = n(18), o = n(20), S = a(n(10)), w = a(n(7)), E = n(41);
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var C = r.userSync.syncUsers, B = n(0), O = n(8), R = n(9), U = n(4), N = t.AUCTION_STARTED = "started", D = t.AUCTION_IN_PROGRESS = "inProgress", j = t.AUCTION_COMPLETED = "completed";
        R.on(U.EVENTS.BID_ADJUSTMENT, function(e) {
            s(e);
        });
        var P = 4, k = {}, x = {}, M = [];
        var q = t.addBidResponse = (0, o.createHook)("asyncSeries", function(e, t) {
            this.dispatch.call(this.bidderRequest, e, t);
        }, "addBidResponse");
        function G(e, f) {
            var l = 0, t = !1, n = new Set(), g = {};
            function p() {
                l--, t && 0 === l && e();
            }
            return {
                addBidResponse: function(e, t) {
                    g[t.requestId] = !0, l++;
                    var n = function(e) {
                        var t = e.adUnitCode, n = e.bid, r = e.bidderRequest, i = e.auctionId, o = r.start, a = y({}, n, {
                            auctionId: i,
                            responseTimestamp: (0, I.timestamp)(),
                            requestTimestamp: o,
                            cpm: parseFloat(n.cpm) || 0,
                            bidder: n.bidderCode,
                            adUnitCode: t
                        });
                        a.timeToRespond = a.responseTimestamp - a.requestTimestamp, R.emit(U.EVENTS.BID_ADJUSTMENT, a);
                        var d = r.bids && (0, S.default)(r.bids, function(e) {
                            return e.adUnitCode == t;
                        }), u = d && d.renderer;
                        u && u.url && (a.renderer = h.Renderer.install({
                            url: u.url
                        }), a.renderer.setRender(u.render));
                        var s, c = _.config.getConfig("mediaTypePriceGranularity." + n.mediaType), f = (0, 
                        m.getPriceBucketString)(a.cpm, "object" === (void 0 === c ? "undefined" : v(c)) ? c : _.config.getConfig("customPriceBucket"), _.config.getConfig("currency.granularityMultiplier"));
                        return a.pbLg = f.low, a.pbMg = f.med, a.pbHg = f.high, a.pbAg = f.auto, a.pbDg = f.dense, 
                        a.pbCg = f.custom, a.bidderCode && (0 < a.cpm || a.dealId) && (s = W(a.bidderCode, a)), 
                        a.adserverTargeting = y(a.adserverTargeting || {}, s), a;
                    }({
                        adUnitCode: e,
                        bid: t,
                        bidderRequest: this,
                        auctionId: f.getAuctionId()
                    });
                    "video" === n.mediaType ? (r = f, i = n, o = this, a = p, d = !0, u = (0, I.getBidRequest)(i.adId, [ o ]), 
                    s = u && (0, I.deepAccess)(u, "mediaTypes.video"), c = s && (0, I.deepAccess)(s, "context"), 
                    _.config.getConfig("cache.url") && c !== E.OUTSTREAM && (i.videoCacheKey ? i.vastUrl || (B.logError("videoCacheKey specified but not required vastUrl for video bid"), 
                    d = !1) : (d = !1, (0, b.store)([ i ], function(e, t) {
                        e ? (B.logWarn("Failed to save to the video cache: " + e + ". Video bid must be discarded."), 
                        T(r, i)) : (i.videoCacheKey = t[0].uuid, i.vastUrl || (i.vastUrl = (0, b.getCacheUrl)(i.videoCacheKey)), 
                        A(r, i), a());
                    }))), d && (A(r, i), a())) : (A(f, n), p());
                    var r, i, o, a, d, u, s, c;
                },
                adapterDone: function() {
                    n.add(this), t = f.getBidRequests().every(function(e) {
                        return n.has(e);
                    }), this.bids.forEach(function(e) {
                        g[e.bidId] || (f.addNoBid(e), R.emit(U.EVENTS.NO_BID, e));
                    }), t && 0 === l && e();
                }
            };
        }
        function T(e, t) {
            t.timeToRespond > e.getTimeout() + _.config.getConfig("timeoutBuffer") && e.executeCallback(!0);
        }
        function A(e, t) {
            R.emit(U.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), T(e, t);
        }
        function d(e) {
            var t = _.config.getConfig("mediaTypePriceGranularity." + e), n = "string" == typeof e && t ? "string" == typeof t ? t : "custom" : _.config.getConfig("priceGranularity"), r = pbjs.bidderSettings;
            return r[U.JSON_MAPPING.BD_SETTING_STANDARD] || (r[U.JSON_MAPPING.BD_SETTING_STANDARD] = {}), 
            r[U.JSON_MAPPING.BD_SETTING_STANDARD][U.JSON_MAPPING.ADSERVER_TARGETING] || (r[U.JSON_MAPPING.BD_SETTING_STANDARD][U.JSON_MAPPING.ADSERVER_TARGETING] = [ {
                key: U.TARGETING_KEYS.BIDDER,
                val: function(e) {
                    return e.bidderCode;
                }
            }, {
                key: U.TARGETING_KEYS.AD_ID,
                val: function(e) {
                    return e.adId;
                }
            }, {
                key: U.TARGETING_KEYS.PRICE_BUCKET,
                val: function(e) {
                    return n === U.GRANULARITY_OPTIONS.AUTO ? e.pbAg : n === U.GRANULARITY_OPTIONS.DENSE ? e.pbDg : n === U.GRANULARITY_OPTIONS.LOW ? e.pbLg : n === U.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : n === U.GRANULARITY_OPTIONS.HIGH ? e.pbHg : n === U.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0;
                }
            }, {
                key: U.TARGETING_KEYS.SIZE,
                val: function(e) {
                    return e.size;
                }
            }, {
                key: U.TARGETING_KEYS.DEAL,
                val: function(e) {
                    return e.dealId;
                }
            }, {
                key: U.TARGETING_KEYS.SOURCE,
                val: function(e) {
                    return e.source;
                }
            }, {
                key: U.TARGETING_KEYS.FORMAT,
                val: function(e) {
                    return e.mediaType;
                }
            } ]), r[U.JSON_MAPPING.BD_SETTING_STANDARD];
        }
        function W(e, t) {
            if (!t) return {};
            var n = {}, r = pbjs.bidderSettings;
            r && (u(n, d(t.mediaType), t), e && r[e] && r[e][U.JSON_MAPPING.ADSERVER_TARGETING] && (u(n, r[e], t), 
            t.sendStandardTargeting = r[e].sendStandardTargeting));
            return t.native && (n = y({}, n, (0, i.getNativeTargeting)(t))), n;
        }
        function u(r, i, o) {
            var e = i[U.JSON_MAPPING.ADSERVER_TARGETING];
            return o.size = o.getSize(), B._each(e, function(e) {
                var t = e.key, n = e.val;
                if (r[t] && B.logWarn("The key: " + t + " is getting ovewritten"), B.isFn(n)) try {
                    n = n(o);
                } catch (e) {
                    B.logError("bidmanager", "ERROR", e);
                }
                (void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && t !== U.TARGETING_KEYS.DEAL || !B.isEmptyStr(n) && null != n ? r[t] = n : B.logInfo("suppressing empty key '" + t + "' from adserver targeting");
            }), r;
        }
        function s(e) {
            var t = e.bidderCode, n = e.cpm, r = void 0;
            if (pbjs.bidderSettings && (t && pbjs.bidderSettings[t] && "function" == typeof pbjs.bidderSettings[t].bidCpmAdjustment ? r = pbjs.bidderSettings[t].bidCpmAdjustment : pbjs.bidderSettings[U.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[U.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (r = pbjs.bidderSettings[U.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), 
            r)) try {
                n = r(e.cpm, y({}, e));
            } catch (e) {
                B.logError("Error during bid adjustment", "bidmanager.js", e);
            }
            0 <= n && (e.cpm = n);
        }
        function z(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = {
                bids: []
            }), e[t.adUnitCode].bids.push(t), e;
        }
    },
    47: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(34)(5), o = "find", a = !0;
        o in [] && Array(1)[o](function() {
            a = !1;
        }), r(r.P + r.F * a, "Array", {
            find: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0);
            }
        }), n(26)(o);
    },
    48: function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e;
        };
    },
    49: function(e, t, n) {
        var r = n(50), i = n(55);
        e.exports = n(22) ? function(e, t, n) {
            return r.f(e, t, i(1, n));
        } : function(e, t, n) {
            return e[t] = n, e;
        };
    },
    50: function(e, t, n) {
        var r = n(51), i = n(52), o = n(54), a = Object.defineProperty;
        t.f = n(22) ? Object.defineProperty : function(e, t, n) {
            if (r(e), t = o(t, !0), r(n), i) try {
                return a(e, t, n);
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e;
        };
    },
    51: function(e, t, n) {
        var r = n(15);
        e.exports = function(e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e;
        };
    },
    52: function(e, t, n) {
        e.exports = !n(22) && !n(33)(function() {
            return 7 != Object.defineProperty(n(53)("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    },
    53: function(e, t, n) {
        var r = n(15), i = n(19).document, o = r(i) && r(i.createElement);
        e.exports = function(e) {
            return o ? i.createElement(e) : {};
        };
    },
    54: function(e, t, n) {
        var i = n(15);
        e.exports = function(e, t) {
            if (!i(e)) return e;
            var n, r;
            if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
            if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e))) return r;
            if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    55: function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            };
        };
    },
    56: function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t);
        };
    },
    57: function(e, t, n) {
        var r = n(24);
        e.exports = function(e) {
            return Object(r(e));
        };
    },
    58: function(e, t, n) {
        var r = n(59);
        e.exports = function(e, t) {
            return new (r(e))(t);
        };
    },
    59: function(e, t, n) {
        var r = n(15), i = n(38), o = n(25)("species");
        e.exports = function(e) {
            var t;
            return i(e) && ("function" != typeof (t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), 
            r(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t;
        };
    },
    6: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ajax = void 0;
        var l = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        t.ajaxBuilder = r;
        var p = n(11), v = n(3), y = n(0), m = 4;
        t.ajax = r();
        function r() {
            var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, c = e.request, f = e.done;
            return function(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                try {
                    var i = void 0, o = r.method || (n ? "POST" : "GET"), a = document.createElement("a");
                    a.href = e;
                    var d = "object" === (void 0 === t ? "undefined" : g(t)) && null !== t ? t : {
                        success: function() {
                            y.logMessage("xhr success");
                        },
                        error: function(e) {
                            y.logError("xhr error", null, e);
                        }
                    };
                    if ("function" == typeof t && (d.success = t), (i = new window.XMLHttpRequest()).onreadystatechange = function() {
                        if (i.readyState === m) {
                            "function" == typeof f && f(a.origin);
                            var e = i.status;
                            200 <= e && e < 300 || 304 === e ? d.success(i.responseText, i) : d.error(i.statusText, i);
                        }
                    }, v.config.getConfig("disableAjaxTimeout") || (i.ontimeout = function() {
                        y.logError("  xhr timeout after ", i.timeout, "ms");
                    }), "GET" === o && n) {
                        var u = (0, p.parse)(e, r);
                        l(u.search, n), e = (0, p.format)(u);
                    }
                    i.open(o, e, !0), v.config.getConfig("disableAjaxTimeout") || (i.timeout = s), r.withCredentials && (i.withCredentials = !0), 
                    y._each(r.customHeaders, function(e, t) {
                        i.setRequestHeader(t, e);
                    }), r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", r.contentType || "text/plain"), 
                    "function" == typeof c && c(a.origin), "POST" === o && n ? i.send(n) : i.send();
                } catch (e) {
                    y.logError("xhr construction", e);
                }
            };
        }
    },
    60: function(e, t, n) {
        var r = n(13), i = n(19), o = "__core-js_shared__", a = i[o] || (i[o] = {});
        (e.exports = function(e, t) {
            return a[e] || (a[e] = void 0 !== t ? t : {});
        })("versions", []).push({
            version: r.version,
            mode: n(61) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        });
    },
    61: function(e, t) {
        e.exports = !0;
    },
    62: function(e, t) {
        var n = 0, r = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36));
        };
    },
    63: function(e, t, n) {
        "use strict";
        var r = n(14), i = n(64)(!0);
        r(r.P, "Array", {
            includes: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0);
            }
        }), n(26)("includes");
    },
    637: function(e, t, n) {
        e.exports = n(638);
    },
    638: function(e, t, n) {
        "use strict";
        var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, a = n(42), d = n(0), u = n(639), s = n(18), c = n(28), f = n(3), l = n(29), g = n(43), p = n(20), v = n(640), y = n(7), m = (r = y) && r.__esModule ? r : {
            default: r
        }, b = n(40), h = n(12);
        var S = (0, a.getGlobal)(), E = n(4), T = n(0), A = n(8), I = n(16), _ = n(9), w = s.userSync.triggerUserSyncs, C = E.EVENTS, B = C.ADD_AD_UNITS, O = C.BID_WON, R = C.REQUEST_BIDS, U = C.SET_TARGETING, N = C.AD_RENDER_FAILED, D = E.AD_RENDER_FAILED_REASON, j = D.PREVENT_WRITING_ON_MAIN_DOCUMENT, P = D.NO_AD, k = D.EXCEPTION, x = D.CANNOT_FIND_AD, M = D.MISSING_DOC_OR_ADID, q = {
            bidWon: function(e) {
                var t = l.auctionManager.getBidsRequested().map(function(e) {
                    return e.bids.map(function(e) {
                        return e.adUnitCode;
                    });
                }).reduce(d.flatten).filter(d.uniques);
                return !!T.contains(t, e) || void T.logError('The "' + e + '" placement is not defined.');
            }
        };
        function G(e, t, n) {
            e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, 
            e.defaultView.frameElement.height = n);
        }
        function W(e) {
            var n = l.auctionManager[e]().filter(d.adUnitsFilter.bind(this, l.auctionManager.getAdUnitCodes())), r = n && n.length && n[n.length - 1].auctionId;
            return n.map(function(e) {
                return e.adUnitCode;
            }).filter(d.uniques).map(function(t) {
                return n.filter(function(e) {
                    return e.auctionId === r && e.adUnitCode === t;
                });
            }).filter(function(e) {
                return e && e[0] && e[0].adUnitCode;
            }).map(function(e) {
                return t = {}, n = e[0].adUnitCode, r = {
                    bids: e.map(d.removeRequestId)
                }, n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, t;
                var t, n, r;
            }).reduce(function(e, t) {
                return o(e, t);
            }, {});
        }
        function z(e, t, n) {
            var r = {};
            r.reason = e, r.message = t, n && (r.bid = n), T.logError(t), _.emit(N, r);
        }
        function V(e) {
            e.forEach(function(e) {
                if (void 0 === e.called) try {
                    e.call(), e.called = !0;
                } catch (e) {
                    T.logError("Error processing command :", "prebid.js", e);
                }
            });
        }
        (0, v.sessionLoader)(), S.bidderSettings = S.bidderSettings || {}, S.libLoaded = !0, 
        S.version = "v1.36.0", T.logInfo("Prebid.js v1.36.0 loaded"), S.adUnits = S.adUnits || [], 
        S.triggerUserSyncs = w, S.getAdserverTargetingForAdUnitCodeStr = function(e) {
            if (T.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), 
            e) {
                var t = S.getAdserverTargetingForAdUnitCode(e);
                return T.transformAdServerTargetingObj(t);
            }
            T.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode");
        }, S.getAdserverTargetingForAdUnitCode = function(e) {
            return S.getAdserverTargeting(e)[e];
        }, S.getAdserverTargeting = function(e) {
            return T.logInfo("Invoking pbjs.getAdserverTargeting", arguments), g.targeting.getAllTargeting(e);
        }, S.getNoBids = function() {
            return T.logInfo("Invoking pbjs.getNoBids", arguments), W("getNoBids");
        }, S.getBidResponses = function() {
            return T.logInfo("Invoking pbjs.getBidResponses", arguments), W("getBidsReceived");
        }, S.getBidResponsesForAdUnitCode = function(t) {
            return {
                bids: l.auctionManager.getBidsReceived().filter(function(e) {
                    return e.adUnitCode === t;
                }).map(d.removeRequestId)
            };
        }, S.setTargetingForGPTAsync = function(e, t) {
            if (T.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), (0, d.isGptPubadsDefined)()) {
                var n = g.targeting.getAllTargeting(e);
                g.targeting.resetPresetTargeting(e), g.targeting.setTargetingForGPT(n, t), Object.keys(n).forEach(function(t) {
                    Object.keys(n[t]).forEach(function(e) {
                        "hb_adid" === e && l.auctionManager.setStatusForBids(n[t][e], E.BID_STATUS.BID_TARGETING_SET);
                    });
                }), _.emit(U, n);
            } else T.logError("window.googletag is not defined on the page");
        }, S.setTargetingForAst = function() {
            T.logInfo("Invoking pbjs.setTargetingForAn", arguments), g.targeting.isApntagDefined() ? (g.targeting.setTargetingForAst(), 
            _.emit(U, g.targeting.getAllTargeting())) : T.logError("window.apntag is not defined on the page");
        }, S.renderAd = function(e, t) {
            if (T.logInfo("Invoking pbjs.renderAd", arguments), T.logMessage("Calling renderAd with adId :" + t), 
            e && t) try {
                var n = l.auctionManager.findBidByAdId(t);
                if (n) {
                    n.status = E.BID_STATUS.RENDERED, n.ad = T.replaceAuctionPrice(n.ad, n.cpm), n.adUrl = T.replaceAuctionPrice(n.adUrl, n.cpm), 
                    l.auctionManager.addWinningBid(n), _.emit(O, n);
                    var r = n.height, i = n.width, o = n.ad, a = n.mediaType, d = n.adUrl, u = n.renderer, s = document.createComment("Creative " + n.creativeId + " served by " + n.bidder + " Prebid.js Header Bidding");
                    if (T.insertElement(s, e, "body"), (0, h.isRendererRequired)(u)) (0, h.executeRenderer)(u, n); else if (e === document && !T.inIframe() || "video" === a) {
                        z(j, "Error trying to write ad. Ad render call ad id " + t + " was prevented from writing to the main document.", n);
                    } else if (o) e.write(o), e.close(), G(e, i, r), T.callBurl(n); else if (d) {
                        var c = T.createInvisibleIframe();
                        c.height = r, c.width = i, c.style.display = "inline", c.style.overflow = "hidden", 
                        c.src = d, T.insertElement(c, e, "body"), G(e, i, r), T.callBurl(n);
                    } else {
                        z(P, "Error trying to write ad. No ad for bid response id: " + t, n);
                    }
                } else {
                    z(x, "Error trying to write ad. Cannot find ad by given id : " + t);
                }
            } catch (e) {
                var f = "Error trying to write ad Id :" + t + " to the page:" + e.message;
                z(k, f);
            } else z(M, "Error trying to write ad Id :" + t + " to the page. Missing document or adId");
        }, S.removeAdUnit = function(e) {
            if (T.logInfo("Invoking pbjs.removeAdUnit", arguments), e) for (var t = 0; t < S.adUnits.length; t++) S.adUnits[t].code === e && S.adUnits.splice(t, 1);
        }, S.requestBids = (0, p.createHook)("asyncSeries", function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.bidsBackHandler, n = e.timeout, r = e.adUnits, i = e.adUnitCodes, o = e.labels;
            _.emit(R);
            var a = n || f.config.getConfig("bidderTimeout");
            if (r = r || S.adUnits, T.logInfo("Invoking pbjs.requestBids", arguments), i && i.length ? r = r.filter(function(e) {
                return (0, m.default)(i, e.code);
            }) : i = r && r.map(function(e) {
                return e.code;
            }), r.forEach(function(i) {
                var o = Object.keys(i.mediaTypes || {
                    banner: "banner"
                }), e = i.bids.map(function(e) {
                    return e.bidder;
                }), a = A.bidderRegistry, t = f.config.getConfig("s2sConfig"), n = t && t.bidders, r = n ? e.filter(function(e) {
                    return !(0, m.default)(n, e);
                }) : e;
                i.transactionId = T.generateUUID(), r.forEach(function(t) {
                    var e = a[t], n = e && e.getSpec && e.getSpec(), r = n && n.supportedMediaTypes || [ "banner" ];
                    o.some(function(e) {
                        return (0, m.default)(r, e);
                    }) || (T.logWarn(T.unsupportedBidderMessage(i, t)), i.bids = i.bids.filter(function(e) {
                        return e.bidder !== t;
                    }));
                }), b.adunitCounter.incrementCounter(i.code);
            }), r && 0 !== r.length) {
                var d = l.auctionManager.createAuction({
                    adUnits: r,
                    adUnitCodes: i,
                    callback: t,
                    cbTimeout: a,
                    labels: o
                });
                return d.callBids(), d;
            }
            if (T.logMessage("No adUnits configured. No bids requested."), "function" == typeof t) try {
                t();
            } catch (e) {
                T.logError("Error executing bidsBackHandler", null, e);
            }
        }), S.addAdUnits = function(e) {
            T.logInfo("Invoking pbjs.addAdUnits", arguments), T.isArray(e) ? S.adUnits.push.apply(S.adUnits, e) : "object" === (void 0 === e ? "undefined" : i(e)) && S.adUnits.push(e), 
            _.emit(B);
        }, S.onEvent = function(e, t, n) {
            T.logInfo("Invoking pbjs.onEvent", arguments), T.isFn(t) ? !n || q[e].call(null, n) ? _.on(e, t, n) : T.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : T.logError('The event handler provided is not a function and was not set on event "' + e + '".');
        }, S.offEvent = function(e, t, n) {
            T.logInfo("Invoking pbjs.offEvent", arguments), n && !q[e].call(null, n) || _.off(e, t, n);
        }, S.registerBidAdapter = function(e, t) {
            T.logInfo("Invoking pbjs.registerBidAdapter", arguments);
            try {
                A.registerBidAdapter(e(), t);
            } catch (e) {
                T.logError("Error registering bidder adapter : " + e.message);
            }
        }, S.registerAnalyticsAdapter = function(e) {
            T.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
            try {
                A.registerAnalyticsAdapter(e);
            } catch (e) {
                T.logError("Error registering analytics adapter : " + e.message);
            }
        }, S.createBid = function(e) {
            return T.logInfo("Invoking pbjs.createBid", arguments), I.createBid(e);
        }, S.loadScript = function(e, t, n) {
            T.logInfo("Invoking pbjs.loadScript", arguments), (0, c.loadScript)(e, t, n);
        }, S.enableAnalytics = function(e) {
            e && !T.isEmpty(e) ? (T.logInfo("Invoking pbjs.enableAnalytics for: ", e), A.enableAnalytics(e)) : T.logError("pbjs.enableAnalytics should be called with option {}");
        }, S.aliasBidder = function(e, t) {
            T.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? A.aliasBidAdapter(e, t) : T.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder");
        }, S.getAllWinningBids = function() {
            return l.auctionManager.getAllWinningBids().map(d.removeRequestId);
        }, S.getAllPrebidWinningBids = function() {
            return l.auctionManager.getBidsReceived().filter(function(e) {
                return e.status === E.BID_STATUS.BID_TARGETING_SET;
            }).map(d.removeRequestId);
        }, S.getHighestCpmBids = function(e) {
            var t = (0, g.getHighestCpmBidsFromBidPool)(l.auctionManager.getBidsReceived(), d.getLatestHighestCpmBid);
            return g.targeting.getWinningBids(e, t).map(d.removeRequestId);
        }, S.markWinningBidAsUsed = function(t) {
            var e = [];
            t.adUnitCode && t.adId ? e = l.auctionManager.getBidsReceived().filter(function(e) {
                return e.adId === t.adId && e.adUnitCode === t.adUnitCode;
            }) : t.adUnitCode ? e = g.targeting.getWinningBids(t.adUnitCode) : t.adId ? e = l.auctionManager.getBidsReceived().filter(function(e) {
                return e.adId === t.adId;
            }) : T.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."), 
            0 < e.length && (e[0].status = E.BID_STATUS.RENDERED);
        }, S.getConfig = f.config.getConfig, S.setConfig = f.config.setConfig, S.que.push(function() {
            return (0, u.listenMessagesFromCreative)();
        }), S.cmd.push = function(e) {
            if ("function" == typeof e) try {
                e.call();
            } catch (e) {
                T.logError("Error processing command :", e.message, e.stack);
            } else T.logError("Commands written into pbjs.cmd.push must be wrapped in a function");
        }, S.que.push = S.cmd.push, S.processQueue = function() {
            V(S.que), V(S.cmd);
        };
    },
    639: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.listenMessagesFromCreative = function() {
            addEventListener("message", o, !1);
        };
        var g = i(n(9)), p = n(17), r = n(4), v = n(0), y = n(29), m = i(n(10)), b = n(12);
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var h = r.EVENTS.BID_WON;
        function o(e) {
            var t, n, r, i, o, a, d, u, s, c = e.message ? "message" : "data", f = {};
            try {
                f = JSON.parse(e[c]);
            } catch (e) {
                return;
            }
            if (f && f.adId) {
                var l = (0, m.default)(y.auctionManager.getBidsReceived(), function(e) {
                    return e.adId === f.adId;
                });
                "Prebid Request" === f.message && (t = l, n = f.adServerDomain, r = e.source, i = t.adId, 
                o = t.ad, a = t.adUrl, d = t.width, u = t.height, s = t.renderer, (0, b.isRendererRequired)(s) ? (0, 
                b.executeRenderer)(s, t) : i && (function(e) {
                    var d = e.adUnitCode, r = e.width, i = e.height;
                    function o(e) {
                        var t, n, r, i, o = (t = d, window.googletag ? (i = t, (0, m.default)(window.googletag.pubads().getSlots().filter((0, 
                        v.isSlotMatchingAdUnitCode)(i)), function(e) {
                            return e;
                        }).getSlotElementId()) : window.apntag ? (n = t, (r = window.apntag.getTag(n)) && r.targetId) : t), a = document.getElementById(o);
                        return a && a.querySelector(e);
                    }
                    [ "div", "iframe" ].forEach(function(e) {
                        var t = o(e);
                        if (t) {
                            var n = t.style;
                            n.width = r + "px", n.height = i + "px";
                        } else (0, v.logWarn)("Unable to locate matching page element for adUnitCode " + d + ".  Can't resize it to ad's dimensions.  Please review setup.");
                    });
                }(t), r.postMessage(JSON.stringify({
                    message: "Prebid Response",
                    ad: o,
                    adUrl: a,
                    adId: i,
                    width: d,
                    height: u
                }), n)), y.auctionManager.addWinningBid(l), g.default.emit(h, l)), "Prebid Native" === f.message && ((0, 
                p.fireNativeTrackers)(f, l), y.auctionManager.addWinningBid(l), g.default.emit(h, l));
            }
        }
    },
    64: function(e, t, n) {
        var u = n(65), s = n(36), c = n(66);
        e.exports = function(d) {
            return function(e, t, n) {
                var r, i = u(e), o = s(i.length), a = c(n, o);
                if (d && t != t) {
                    for (;a < o; ) if ((r = i[a++]) != r) return !0;
                } else for (;a < o; a++) if ((d || a in i) && i[a] === t) return d || a || 0;
                return !d && -1;
            };
        };
    },
    640: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.boundHook = void 0;
        var o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        };
        n.disableOverrides = f, n.addBidResponseHook = l, n.getConfig = g, n.sessionLoader = function(e) {
            var t = void 0;
            try {
                e = e || window.sessionStorage, t = JSON.parse(e.getItem(d));
            } catch (e) {}
            t && c(t, !0);
        };
        var r = t(3), a = t(0), i = t(44), d = "pbjs:debugging", u = n.boundHook = void 0;
        function s(e) {
            (0, a.logMessage)("DEBUG: " + e);
        }
        function c(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            r.config.setConfig({
                debug: !0
            }), s("bidder overrides enabled" + (t ? " from session" : "")), u && i.addBidResponse.removeHook(u), 
            n.boundHook = u = l.bind(null, e), i.addBidResponse.addHook(u, 5);
        }
        function f() {
            u && (i.addBidResponse.removeHook(u), s("bidder overrides disabled"));
        }
        function l(e, r, i, t) {
            if (Array.isArray(e.bidders) && -1 === e.bidders.indexOf(i.bidderCode)) return n = "bidder '" + i.bidderCode + "' excluded from auction by bidder overrides", 
            void (0, a.logWarn)("DEBUG: " + n);
            var n;
            Array.isArray(e.bids) && e.bids.forEach(function(n) {
                n.bidder && n.bidder !== i.bidderCode || n.adUnitCode && n.adUnitCode !== r || (i = o({}, i), 
                Object.keys(n).filter(function(e) {
                    return -1 === [ "bidder", "adUnitCode" ].indexOf(e);
                }).forEach(function(e) {
                    var t = n[e];
                    s("bidder overrides changed '" + r + "/" + i.bidderCode + "' bid." + e + " from '" + i[e] + "' to '" + t + "'"), 
                    i[e] = t;
                }));
            }), t(r, i);
        }
        function g(e) {
            if (e.enabled) {
                try {
                    window.sessionStorage.setItem(d, JSON.stringify(e));
                } catch (e) {}
                c(e);
            } else {
                f();
                try {
                    window.sessionStorage.removeItem(d);
                } catch (e) {}
            }
        }
        r.config.getConfig("debugging", function(e) {
            return g(e.debugging);
        });
    },
    65: function(e, t, n) {
        var r = n(35), i = n(24);
        e.exports = function(e) {
            return r(i(e));
        };
    },
    66: function(e, t, n) {
        var r = n(37), i = Math.max, o = Math.min;
        e.exports = function(e, t) {
            return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t);
        };
    },
    67: function(e, t) {
        e.exports = function e(t) {
            var n = Array.isArray(t) ? [] : {};
            for (var r in t) {
                var i = t[r];
                n[r] = i && "object" == typeof i ? e(i) : i;
            }
            return n;
        };
    },
    68: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getRefererInfo = void 0;
        var d = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        };
        t.detectReferer = r;
        var u = n(0);
        function r(i) {
            function o() {
                var e = function() {
                    var t = [], n = void 0;
                    do {
                        try {
                            n = n ? n.parent : i;
                            try {
                                var e = n == i.top, r = {
                                    referrer: n.document.referrer || null,
                                    location: n.location.href || null,
                                    isTop: e
                                };
                                e && (r = d(r, {
                                    canonicalUrl: a(n.document)
                                })), t.push(r);
                            } catch (e) {
                                t.push({
                                    referrer: null,
                                    location: null,
                                    isTop: n == i.top
                                }), (0, u.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");
                            }
                        } catch (e) {
                            return t.push({
                                referrer: null,
                                location: null,
                                isTop: !1
                            }), t;
                        }
                    } while (n != i.top);
                    return t;
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
                    var e = o(), t = e.length - 1, n = null !== e[t].location || 0 < t && null !== e[t - 1].referrer, r = function(e) {
                        var t = [], n = null, r = null, i = null, o = null, a = null, d = void 0;
                        for (d = e.length - 1; 0 <= d; d--) {
                            try {
                                n = e[d].location;
                            } catch (e) {}
                            if (n) t.push(n), a || (a = n); else if (0 !== d) {
                                r = e[d - 1];
                                try {
                                    i = r.referrer, o = r.ancestor;
                                } catch (e) {}
                                i ? (t.push(i), a || (a = i)) : o ? (t.push(o), a || (a = o)) : t.push(null);
                            } else t.push(null);
                        }
                        return {
                            stack: t,
                            detectedRefererUrl: a
                        };
                    }(e), i = void 0;
                    return e[e.length - 1].canonicalUrl && (i = e[e.length - 1].canonicalUrl), {
                        referer: r.detectedRefererUrl,
                        reachedTop: n,
                        numIframes: t,
                        stack: r.stack,
                        canonicalUrl: i
                    };
                } catch (e) {}
            };
        }
        t.getRefererInfo = r(window);
    },
    7: function(e, t, n) {
        n(63), e.exports = n(13).Array.includes;
    },
    8: function(e, h, t) {
        "use strict";
        var b = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var n = [], r = !0, i = !1, o = void 0;
                try {
                    for (var a, d = e[Symbol.iterator](); !(r = (a = d.next()).done) && (n.push(a.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    i = !0, o = e;
                } finally {
                    try {
                        !r && d.return && d.return();
                    } finally {
                        if (i) throw o;
                    }
                }
                return n;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, g = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, S = t(0), p = t(39), v = t(17), c = t(1), E = t(6), T = t(3), A = n(t(7)), I = n(t(10)), y = t(40), _ = t(68);
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var w = t(0), C = t(4), B = t(9), O = void 0, R = {};
        h.bidderRegistry = R, h.aliasRegistry = {};
        var U = {};
        T.config.getConfig("s2sConfig", function(e) {
            U = e.s2sConfig;
        });
        var r = {};
        function N(e) {
            var i = e.bidderCode, s = e.auctionId, c = e.bidderRequestId, t = e.adUnits, f = e.labels, l = e.src;
            return t.reduce(function(e, d) {
                var t = (0, p.resolveStatus)((0, p.getLabels)(d, f), d.mediaTypes, d.sizes), n = t.active, u = t.mediaTypes, r = t.filterResults;
                return n ? r && w.logInfo('Size mapping filtered adUnit "' + d.code + '" banner sizes from ', r.before, "to ", r.after) : w.logInfo('Size mapping disabled adUnit "' + d.code + '"'), 
                n && e.push(d.bids.filter(function(e) {
                    return e.bidder === i;
                }).reduce(function(e, t) {
                    var n = d.nativeParams || w.deepAccess(d, "mediaTypes.native");
                    n && (t = g({}, t, {
                        nativeParams: (0, v.processNativeAdUnitParams)(n)
                    })), t = g({}, t, (0, S.getDefinedParams)(d, [ "mediaType", "renderer" ]));
                    var r = (0, p.resolveStatus)((0, p.getLabels)(t, f), u), i = r.active, o = r.mediaTypes, a = r.filterResults;
                    return i ? a && w.logInfo('Size mapping filtered adUnit "' + d.code + '" bidder "' + t.bidder + '" banner sizes from ', a.before, "to ", a.after) : w.logInfo('Size mapping deactivated adUnit "' + d.code + '" bidder "' + t.bidder + '"'), 
                    w.isValidMediaTypes(o) ? t = g({}, t, {
                        mediaTypes: o
                    }) : w.logError("mediaTypes is not correctly configured for adunit " + d.code), 
                    i && e.push(g({}, t, {
                        adUnitCode: d.code,
                        transactionId: d.transactionId,
                        sizes: w.deepAccess(o, "banner.sizes") || [],
                        bidId: t.bid_id || w.getUniqueIdentifierStr(),
                        bidderRequestId: c,
                        auctionId: s,
                        src: l,
                        bidRequestsCount: y.adunitCounter.getCounter(d.code)
                    })), e;
                }, [])), e;
            }, []).reduce(S.flatten, []).filter(function(e) {
                return "" !== e;
            });
        }
        function D() {
            return U && U.enabled && U.testing && O;
        }
        function i(t, n, e) {
            try {
                var r = R[t].getSpec();
                r && r[n] && "function" == typeof r[n] && (w.logInfo("Invoking " + t + "." + n), 
                r[n](e));
            } catch (e) {
                w.logWarn("Error calling " + n + " of " + t);
            }
        }
        h.gdprDataHandler = {
            consentData: null,
            setConsentData: function(e) {
                this.consentData = e;
            },
            getConsentData: function() {
                return this.consentData;
            }
        }, h.makeBidRequests = function(e, i, o, a, d) {
            var u = [];
            e = h.checkBidRequestSizes(e);
            var t = (0, S.getBidderCodes)(e);
            T.config.getConfig("bidderSequence") === T.RANDOM && (t = (0, S.shuffle)(t));
            var n, r, s, c = (0, _.getRefererInfo)(), f = t, l = [];
            if (U.enabled) {
                D() && (l = O.getSourceBidderMap(e)[O.CLIENT]);
                var g = U.bidders;
                f = t.filter(function(e) {
                    return !(0, A.default)(g, e) || (0, A.default)(l, e);
                });
                var p = (n = e, r = U.bidders, (s = w.deepClone(n)).forEach(function(e) {
                    e.bids = e.bids.filter(function(e) {
                        return (0, A.default)(r, e.bidder) && (!D() || e.finalSource !== O.CLIENT);
                    }).map(function(e) {
                        return e.bid_id = w.getUniqueIdentifierStr(), e;
                    });
                }), s = s.filter(function(e) {
                    return 0 !== e.bids.length;
                })), v = w.generateUUID();
                g.forEach(function(e) {
                    var t = w.getUniqueIdentifierStr(), n = {
                        bidderCode: e,
                        auctionId: o,
                        bidderRequestId: t,
                        tid: v,
                        bids: N({
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            adUnits: w.deepClone(p),
                            labels: d,
                            src: C.S2S.SRC
                        }),
                        auctionStart: i,
                        timeout: U.timeout,
                        src: C.S2S.SRC,
                        refererInfo: c
                    };
                    0 !== n.bids.length && u.push(n);
                }), p.forEach(function(e) {
                    var t = e.bids.filter(function(t) {
                        return (0, I.default)(u, function(e) {
                            return (0, I.default)(e.bids, function(e) {
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
            var y, m, b = (y = e, (m = w.deepClone(y)).forEach(function(e) {
                e.bids = e.bids.filter(function(e) {
                    return !D() || e.finalSource !== O.SERVER;
                });
            }), m = m.filter(function(e) {
                return 0 !== e.bids.length;
            }));
            return f.forEach(function(e) {
                var t = w.getUniqueIdentifierStr(), n = {
                    bidderCode: e,
                    auctionId: o,
                    bidderRequestId: t,
                    bids: N({
                        bidderCode: e,
                        auctionId: o,
                        bidderRequestId: t,
                        adUnits: w.deepClone(b),
                        labels: d,
                        src: "client"
                    }),
                    auctionStart: i,
                    timeout: a,
                    refererInfo: c
                }, r = R[e];
                r || w.logError("Trying to make a request for bidder that does not exist: " + e), 
                r && n.bids && 0 !== n.bids.length && u.push(n);
            }), h.gdprDataHandler.getConsentData() && u.forEach(function(e) {
                e.gdprConsent = h.gdprDataHandler.getConsentData();
            }), u;
        }, h.checkBidRequestSizes = function(e) {
            function d(e) {
                return Array.isArray(e) && 2 === e.length && w.isInteger(e[0]) && w.isInteger(e[1]);
            }
            return e.forEach(function(e) {
                var t = e.mediaTypes, n = w.getAdUnitSizes(e);
                if (t && t.banner) {
                    var r = t.banner;
                    r.sizes ? (r.sizes = n, e.sizes = n) : (w.logError("Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request."), 
                    delete e.mediaTypes.banner);
                } else e.sizes && (w.logWarn("Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes)."), 
                e.sizes = n);
                if (t && t.video) {
                    var i = t.video;
                    if (i.playerSize) if (Array.isArray(i.playerSize) && 1 === i.playerSize.length && i.playerSize.every(d)) e.sizes = i.playerSize; else if (d(i.playerSize)) {
                        var o = [];
                        o.push(i.playerSize), w.logInfo("Transforming video.playerSize from " + i.playerSize + " to " + o + " so it's in the proper format."), 
                        e.sizes = i.playerSize = o;
                    } else w.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), 
                    delete e.mediaTypes.video.playerSize;
                }
                if (t && t.native) {
                    var a = t.native;
                    a.image && a.image.sizes && !Array.isArray(a.image.sizes) && (w.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), 
                    delete e.mediaTypes.native.image.sizes), a.image && a.image.aspect_ratios && !Array.isArray(a.image.aspect_ratios) && (w.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), 
                    delete e.mediaTypes.native.image.aspect_ratios), a.icon && a.icon.sizes && !Array.isArray(a.icon.sizes) && (w.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), 
                    delete e.mediaTypes.native.icon.sizes);
                }
            }), e;
        }, h.callBids = function(e, t, r, i, o, a) {
            if (t.length) {
                var n = t.reduce(function(e, t) {
                    return e[Number(void 0 !== t.src && t.src === C.S2S.SRC)].push(t), e;
                }, [ [], [] ]), d = b(n, 2), u = d[0], s = d[1];
                if (s.length) {
                    var c = (0, E.ajaxBuilder)(a, o ? {
                        request: o.request.bind(null, "s2s"),
                        done: o.done
                    } : void 0), f = U.bidders, l = R[U.adapter], g = s[0].tid, p = s[0].adUnitsS2SCopy;
                    if (l) {
                        var v = {
                            tid: g,
                            ad_units: p
                        };
                        if (v.ad_units.length) {
                            var y = s.map(function(e) {
                                return e.start = (0, S.timestamp)(), i.bind(e);
                            }), m = v.ad_units.reduce(function(e, t) {
                                return e.concat((t.bids || []).reduce(function(e, t) {
                                    return e.concat(t.bidder);
                                }, []));
                            }, []);
                            w.logMessage("CALLING S2S HEADER BIDDERS ==== " + f.filter(function(e) {
                                return (0, A.default)(m, e);
                            }).join(",")), s.forEach(function(e) {
                                B.emit(C.EVENTS.BID_REQUESTED, e);
                            }), l.callBids(v, s, function(e, t) {
                                var n = (0, S.getBidderRequest)(s, t.bidderCode, e);
                                n && r.call(n, e, t);
                            }, function() {
                                return y.forEach(function(e) {
                                    return e();
                                });
                            }, c);
                        }
                    }
                }
                u.forEach(function(e) {
                    e.start = (0, S.timestamp)();
                    var t = R[e.bidderCode];
                    w.logMessage("CALLING BIDDER ======= " + e.bidderCode), B.emit(C.EVENTS.BID_REQUESTED, e);
                    var n = (0, E.ajaxBuilder)(a, o ? {
                        request: o.request.bind(null, e.bidderCode),
                        done: o.done
                    } : void 0);
                    t.callBids(e, r.bind(e), i.bind(e), n);
                });
            } else w.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?");
        }, h.videoAdapters = [], h.registerBidAdapter = function(e, t) {
            var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes, r = void 0 === n ? [] : n;
            e && t ? "function" == typeof e.callBids ? (R[t] = e, (0, A.default)(r, "video") && h.videoAdapters.push(t), 
            (0, A.default)(r, "native") && v.nativeAdapters.push(t)) : w.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : w.logError("bidAdaptor or bidderCode not specified");
        }, h.aliasBidAdapter = function(t, e) {
            var n, r;
            if (void 0 === R[e]) {
                var i = R[t];
                if (void 0 === i) {
                    var o = T.config.getConfig("s2sConfig"), a = o && o.bidders;
                    a && (0, A.default)(a, e) ? h.aliasRegistry[e] = t : w.logError('bidderCode "' + t + '" is not an existing bidder.', "adaptermanager.aliasBidAdapter");
                } else try {
                    var d = void 0, u = (n = t, r = [], (0, A.default)(h.videoAdapters, n) && r.push("video"), 
                    (0, A.default)(v.nativeAdapters, n) && r.push("native"), r);
                    if (i.constructor.prototype != Object.prototype) (d = new i.constructor()).setBidderCode(e); else {
                        var s = i.getSpec();
                        d = (0, c.newBidder)(g({}, s, {
                            code: e
                        })), h.aliasRegistry[e] = t;
                    }
                    this.registerBidAdapter(d, e, {
                        supportedMediaTypes: u
                    });
                } catch (e) {
                    w.logError(t + " bidder does not currently support aliasing.", "adaptermanager.aliasBidAdapter");
                }
            } else w.logMessage('alias name "' + e + '" has been already specified.');
        }, h.registerAnalyticsAdapter = function(e) {
            var t = e.adapter, n = e.code;
            t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, r[n] = t) : w.logError('Prebid Error: Analytics adaptor error for analytics "' + n + '"\n        analytics adapter must implement an enableAnalytics() function') : w.logError("Prebid Error: analyticsAdapter or analyticsCode not specified");
        }, h.enableAnalytics = function(e) {
            w.isArray(e) || (e = [ e ]), w._each(e, function(e) {
                var t = r[e.provider];
                t ? t.enableAnalytics(e) : w.logError("Prebid Error: no analytics adapter found in registry for\n        " + e.provider + ".");
            });
        }, h.getBidAdapter = function(e) {
            return R[e];
        }, h.setS2STestingModule = function(e) {
            O = e;
        }, h.callTimedOutBidders = function(t, n, r) {
            n = n.map(function(e) {
                return e.params = w.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = r, 
                e;
            }), n = w.groupBy(n, "bidder"), Object.keys(n).forEach(function(e) {
                i(e, "onTimeout", n[e]);
            });
        }, h.callBidWonBidder = function(e, t, n) {
            t.params = w.getUserConfiguredParams(n, t.adUnitCode, t.bidder), i(e, "onBidWon", t);
        }, h.callSetTargetingBidder = function(e, t) {
            i(e, "onSetTargeting", t);
        };
    },
    9: function(e, t, n) {
        "use strict";
        var d, r, i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, u = n(0), o = n(4), a = Array.prototype.slice, s = Array.prototype.push, c = u._map(o.EVENTS, function(e) {
            return e;
        }), f = o.EVENT_ID_PATHS, l = [];
        e.exports = (d = {}, (r = {}).on = function(e, t, n) {
            if (i = e, u.contains(c, i)) {
                var r = d[e] || {
                    que: []
                };
                n ? (r[n] = r[n] || {
                    que: []
                }, r[n].que.push(t)) : r.que.push(t), d[e] = r;
            } else u.logError("Wrong event name : " + e + " Valid event names :" + c);
            var i;
        }, r.emit = function(e) {
            !function(e, t) {
                u.logMessage("Emitting event for: " + e);
                var n = t[0] || {}, r = n[f[e]], i = d[e] || {
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
        }, r.off = function(e, n, r) {
            var i = d[e];
            u.isEmpty(i) || u.isEmpty(i.que) && u.isEmpty(i[r]) || r && (u.isEmpty(i[r]) || u.isEmpty(i[r].que)) || (r ? u._each(i[r].que, function(e) {
                var t = i[r].que;
                e === n && t.splice(u.indexOf.call(t, e), 1);
            }) : u._each(i.que, function(e) {
                var t = i.que;
                e === n && t.splice(u.indexOf.call(t, e), 1);
            }), d[e] = i);
        }, r.get = function() {
            return d;
        }, r.getEvents = function() {
            var n = [];
            return u._each(l, function(e) {
                var t = i({}, e);
                n.push(t);
            }), n;
        }, r);
    }
});

pbjsChunk([ 177 ], {
    85: function(e, n, r) {
        r(86), e.exports = r(87);
    },
    86: function(e, n, r) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.spec = void 0;
        var t = r(1), g = r(2), v = "adform", d = n.spec = {
            code: v,
            supportedMediaTypes: [ g.BANNER, g.VIDEO ],
            isBidRequestValid: function(e) {
                return !!e.params.mid;
            },
            buildRequests: function(e, n) {
                var r, t, d, s, i, p, o, a, u, c, g = [], l = [ [ "adxDomain", "adx.adform.net" ], [ "fd", 1 ], [ "url", null ], [ "tid", null ] ], h = JSON.parse(JSON.stringify(e)), f = h[0] && h[0].bidder || v;
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
                }, p = [], o = n.bids, a = e.body, u = 0; u < a.length; u++) s = "banner" === (t = a[u]).response ? g.BANNER : g.VIDEO, 
                d = o[u], i[t.response] && (c(t, d.sizes) || s === g.VIDEO) && (r = {
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
        (0, t.registerBidder)(d);
    },
    87: function(e, n) {}
}, [ 85 ]);

pbjsChunk([ 155 ], {
    156: function(e, r, a) {
        a(157), e.exports = a(158);
    },
    157: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.spec = void 0;
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, p = Object.assign || function(e) {
            for (var r = 1; r < arguments.length; r++) {
                var a = arguments[r];
                for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
            }
            return e;
        }, u = a(12), v = function(e) {
            {
                if (e && e.__esModule) return e;
                var r = {};
                if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
                return r.default = e, r;
            }
        }(a(0)), t = a(1), c = a(2), b = n(a(10)), h = n(a(7));
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var o = [ "id", "mimes", "minduration", "maxduration", "startdelay", "skippable", "playback_method", "frameworks" ], _ = [ "age", "external_uid", "segments", "gender", "dnt", "language" ], I = [ "geo", "device_id" ], k = [ "enabled", "dongle", "member_id", "debug_timeout" ], m = {
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
            privacyLink: "privacy_link"
        }, s = r.spec = {
            code: "appnexus",
            aliases: [ "appnexusAst", "brealtime", "emxdigital", "pagescience", "defymedia", "gourmetads", "matomy", "featureforward", "oftmedia", "districtm" ],
            supportedMediaTypes: [ c.BANNER, c.VIDEO, c.NATIVE ],
            isBidRequestValid: function(e) {
                return !!(e.params.placementId || e.params.member && e.params.invCode);
            },
            buildRequests: function(e, r) {
                var a = e.map(E), t = (0, b.default)(e, A), n = void 0;
                t && (n = {}, Object.keys(t.params.user).filter(function(e) {
                    return (0, h.default)(_, e);
                }).forEach(function(e) {
                    return n[e] = t.params.user[e];
                }));
                var i = (0, b.default)(e, T), s = void 0;
                i && i.params && i.params.app && (s = {}, Object.keys(i.params.app).filter(function(e) {
                    return (0, h.default)(I, e);
                }).forEach(function(e) {
                    return s[e] = i.params.app[e];
                }));
                var d = (0, b.default)(e, R), o = void 0;
                d && d.params && i.params.app && i.params.app.id && (o = {
                    appid: d.params.app.id
                });
                var p = {}, u = {}, c = v.getCookie("apn_prebid_debug") || null;
                if (c) try {
                    p = JSON.parse(c);
                } catch (e) {
                    v.logError("AppNexus Debug Auction Cookie Error:\n\n" + e);
                } else {
                    var m = (0, b.default)(e, x);
                    m && m.debug && (p = m.debug);
                }
                p && p.enabled && Object.keys(p).filter(function(e) {
                    return (0, h.default)(k, e);
                }).forEach(function(e) {
                    u[e] = p[e];
                });
                var l = (0, b.default)(e, N), f = l ? parseInt(l.params.member, 10) : 0, y = {
                    tags: [].concat(function(e) {
                        if (Array.isArray(e)) {
                            for (var r = 0, a = Array(e.length); r < e.length; r++) a[r] = e[r];
                            return a;
                        }
                        return Array.from(e);
                    }(a)),
                    user: n,
                    sdk: {
                        source: "pbjs",
                        version: "1.36.0"
                    }
                };
                if (0 < f && (y.member_id = f), i && (y.device = s), d && (y.app = o), u.enabled && (y.debug = u, 
                v.logInfo("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(u, null, 4))), 
                r && r.gdprConsent && (y.gdpr_consent = {
                    consent_string: r.gdprConsent.consentString,
                    consent_required: r.gdprConsent.gdprApplies
                }), r && r.refererInfo) {
                    var g = {
                        rd_ref: encodeURIComponent(r.refererInfo.referer),
                        rd_top: r.refererInfo.reachedTop,
                        rd_ifs: r.refererInfo.numIframes,
                        rd_stk: r.refererInfo.stack.map(function(e) {
                            return encodeURIComponent(e);
                        }).join(",")
                    };
                    y.referrer_detection = g;
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
                var d = [];
                if (!e || e.error) {
                    var a = "in response for " + s.bidderCode + " adapter";
                    return e && e.error && (a += ": " + e.error), v.logError(a), d;
                }
                if (e.tags && e.tags.forEach(function(e) {
                    var r, a, t = (r = e) && r.ads && r.ads.length && (0, b.default)(r.ads, function(e) {
                        return e.rtb;
                    });
                    if (t && 0 !== t.cpm && (0, h.default)(i.supportedMediaTypes, t.ad_type)) {
                        var n = function(e, r, a) {
                            var t = v.getBidRequest(e.uuid, [ a ]), n = {
                                requestId: e.uuid,
                                cpm: r.cpm,
                                creativeId: r.creative_id,
                                dealId: r.deal_id,
                                currency: "USD",
                                netRevenue: !0,
                                ttl: 300,
                                adUnitCode: t.adUnitCode,
                                appnexus: {
                                    buyerMemberId: r.buyer_member_id,
                                    dealPriority: r.deal_priority,
                                    dealCode: r.deal_code
                                }
                            };
                            if (r.rtb.video) {
                                if (p(n, {
                                    width: r.rtb.video.player_width,
                                    height: r.rtb.video.player_height,
                                    vastUrl: r.rtb.video.asset_url,
                                    vastImpUrl: r.notify_url,
                                    ttl: 3600
                                }), r.renderer_url) {
                                    var i = v.deepAccess(a.bids[0], "renderer.options");
                                    p(n, {
                                        adResponse: e,
                                        renderer: function(e, r) {
                                            var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, t = u.Renderer.install({
                                                id: r.renderer_id,
                                                url: r.renderer_url,
                                                config: a,
                                                loaded: !1,
                                                adUnitCode: e
                                            });
                                            try {
                                                t.setRender(y);
                                            } catch (e) {
                                                v.logWarn("Prebid Error calling setRender on renderer", e);
                                            }
                                            return t.setEventHandlers({
                                                impression: function() {
                                                    return v.logMessage("AppNexus outstream video impression event");
                                                },
                                                loaded: function() {
                                                    return v.logMessage("AppNexus outstream video loaded event");
                                                },
                                                ended: function() {
                                                    v.logMessage("AppNexus outstream renderer video event"), document.querySelector("#" + e).style.display = "none";
                                                }
                                            }), t;
                                        }(n.adUnitCode, r, i)
                                    }), n.adResponse.ad = n.adResponse.ads[0], n.adResponse.ad.video = n.adResponse.ad.rtb.video;
                                }
                            } else if (r.rtb[c.NATIVE]) {
                                var s = r.rtb[c.NATIVE];
                                n[c.NATIVE] = {
                                    title: s.title,
                                    body: s.desc,
                                    body2: s.desc2,
                                    cta: s.ctatext,
                                    rating: s.rating,
                                    sponsoredBy: s.sponsored,
                                    privacyLink: s.privacy_link,
                                    clickUrl: s.link.url,
                                    clickTrackers: s.link.click_trackers,
                                    impressionTrackers: s.impression_trackers,
                                    javascriptTrackers: s.javascript_trackers
                                }, s.main_img && (n.native.image = {
                                    url: s.main_img.url,
                                    height: s.main_img.height,
                                    width: s.main_img.width
                                }), s.icon && (n.native.icon = {
                                    url: s.icon.url,
                                    height: s.icon.height,
                                    width: s.icon.width
                                });
                            } else {
                                p(n, {
                                    width: r.rtb.banner.width,
                                    height: r.rtb.banner.height,
                                    ad: r.rtb.banner.content
                                });
                                try {
                                    var d = r.rtb.trackers[0].impression_urls[0], o = v.createTrackPixelHtml(d);
                                    n.ad += o;
                                } catch (e) {
                                    v.logError("Error appending tracking pixel", e);
                                }
                            }
                            return n;
                        }(e, t, s);
                        n.mediaType = (a = t.ad_type) === c.VIDEO ? c.VIDEO : a === c.NATIVE ? c.NATIVE : c.BANNER, 
                        d.push(n);
                    }
                }), e.debug && e.debug.debug_info) {
                    var t = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info;
                    t = t.replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""), 
                    v.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"), 
                    v.logMessage(t);
                }
                return d;
            },
            getUserSyncs: function(e) {
                if (e.iframeEnabled) return [ {
                    type: "iframe",
                    url: "//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html"
                } ];
            },
            transformBidParams: function(a, e) {
                return a = v.convertTypes({
                    member: "string",
                    invCode: "string",
                    placementId: "number",
                    keywords: v.transformBidderParamKeywords
                }, a), e && (a.use_pmt_rule = "boolean" == typeof a.usePaymentRule && a.usePaymentRule, 
                a.usePaymentRule && delete a.usePaymentRule, d(a.keywords) && a.keywords.forEach(l), 
                Object.keys(a).forEach(function(e) {
                    var r = v.convertCamelToUnderscore(e);
                    r !== e && (a[r] = a[e], delete a[e]);
                })), a;
            }
        };
        function d(e) {
            return !!(v.isArray(e) && 0 < e.length);
        }
        function l(e) {
            d(e.value) && "" === e.value[0] && delete e.value;
        }
        function E(r) {
            var s, d, a = {};
            if (a.sizes = f(r.sizes), a.primary_size = a.sizes[0], a.ad_types = [], a.uuid = r.bidId, 
            r.params.placementId ? a.id = parseInt(r.params.placementId, 10) : a.code = r.params.invCode, 
            a.allow_smaller_sizes = r.params.allowSmallerSizes || !1, a.use_pmt_rule = r.params.usePaymentRule || !1, 
            a.prebid = !0, a.disable_psa = !0, r.params.reserve && (a.reserve = r.params.reserve), 
            r.params.position && (a.position = {
                above: 1,
                below: 2
            }[r.params.position] || 0), r.params.trafficSourceCode && (a.traffic_source_code = r.params.trafficSourceCode), 
            r.params.privateSizes && (a.private_sizes = f(r.params.privateSizes)), r.params.supplyType && (a.supply_type = r.params.supplyType), 
            r.params.pubClick && (a.pubclick = r.params.pubClick), r.params.extInvCode && (a.ext_inv_code = r.params.extInvCode), 
            r.params.externalImpId && (a.external_imp_id = r.params.externalImpId), !v.isEmpty(r.params.keywords)) {
                var e = v.transformBidderParamKeywords(r.params.keywords);
                0 < e.length && e.forEach(l), a.keywords = e;
            }
            if ((r.mediaType === c.NATIVE || v.deepAccess(r, "mediaTypes." + c.NATIVE)) && (a.ad_types.push(c.NATIVE), 
            r.nativeParams)) {
                var t = (s = r.nativeParams, d = {}, Object.keys(s).forEach(function(e) {
                    var r = m[e] && m[e].serverName || m[e] || e, a = m[e] && m[e].requiredParams;
                    d[r] = p({}, a, s[e]);
                    var t = m[e] && m[e].minimumParams;
                    if (a && t) {
                        var n = Object.keys(s[e]), i = Object.keys(a);
                        0 === n.filter(function(e) {
                            return !(0, h.default)(i, e);
                        }).length && (d[r] = p({}, d[r], t));
                    }
                }), d);
                a[c.NATIVE] = {
                    layouts: [ t ]
                };
            }
            var n = v.deepAccess(r, "mediaTypes." + c.VIDEO), i = v.deepAccess(r, "mediaTypes.video.context");
            return (r.mediaType === c.VIDEO || n) && a.ad_types.push(c.VIDEO), (r.mediaType === c.VIDEO || n && "outstream" !== i) && (a.require_asset_url = !0), 
            r.params.video && (a.video = {}, Object.keys(r.params.video).filter(function(e) {
                return (0, h.default)(o, e);
            }).forEach(function(e) {
                return a.video[e] = r.params.video[e];
            })), (v.isEmpty(r.mediaType) && v.isEmpty(r.mediaTypes) || r.mediaType === c.BANNER || r.mediaTypes && r.mediaTypes[c.BANNER]) && a.ad_types.push(c.BANNER), 
            a;
        }
        function f(e) {
            var r = [], a = {};
            if (v.isArray(e) && 2 === e.length && !v.isArray(e[0])) a.width = parseInt(e[0], 10), 
            a.height = parseInt(e[1], 10), r.push(a); else if ("object" === (void 0 === e ? "undefined" : i(e))) for (var t = 0; t < e.length; t++) {
                var n = e[t];
                (a = {}).width = parseInt(n[0], 10), a.height = parseInt(n[1], 10), r.push(a);
            }
            return r;
        }
        function A(e) {
            return !!e.params.user;
        }
        function N(e) {
            return !!parseInt(e.params.member, 10);
        }
        function T(e) {
            if (e.params) return !!e.params.app;
        }
        function R(e) {
            return e.params && e.params.app ? !!e.params.app.id : !!e.params.app;
        }
        function x(e) {
            return !!e.debug;
        }
        function y(e) {
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
        (0, t.registerBidder)(s);
    },
    158: function(e, r) {}
}, [ 156 ]);

pbjsChunk([ 1 ], {
    204: function(n, t, e) {
        n.exports = e(205);
    },
    205: function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.staticConsentData = t.allowAuction = t.consentTimeout = t.userCMP = void 0, 
        t.requestBidsHook = w, t.resetConsentData = function() {
            v = void 0, a.gdprDataHandler.setConsentData(null);
        }, t.setConfig = x;
        var u = function(n) {
            {
                if (n && n.__esModule) return n;
                var t = {};
                if (null != n) for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
                return t.default = n, t;
            }
        }(e(0)), o = e(3), a = e(8), i = s(e(7)), l = s(e(206));
        function s(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        var r = "iab", c = 1e4, d = !0, f = t.userCMP = void 0, g = t.consentTimeout = void 0, p = t.allowAuction = void 0, m = t.staticConsentData = void 0, v = void 0, C = {
            iab: function(n, t, s) {
                var e = function() {
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
                }(), r = {}, o = void 0;
                try {
                    o = window.__cmp || u.getWindowTop().__cmp;
                } catch (n) {}
                if (u.isFn(o)) o("getConsentData", null, e.consentDataCallback), o("getVendorConsents", null, e.vendorConsentsCallback); else if (window.$sf && window.$sf.ext && "function" == typeof window.$sf.ext.cmp) c("getConsentData", e.consentDataCallback), 
                c("getVendorConsents", e.vendorConsentsCallback); else {
                    for (var a = window, i = void 0; !i; ) {
                        try {
                            a.frames.__cmpLocator && (i = a);
                        } catch (n) {}
                        if (a === window.top) break;
                        a = a.parent;
                    }
                    if (!i) return t("CMP not found.", s);
                    d("getConsentData", i, e.consentDataCallback), d("getVendorConsents", i, e.vendorConsentsCallback);
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
                        var t = "string" == typeof n.data && (0, l.default)(n.data, "cmpReturn") ? JSON.parse(n.data) : n.data;
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
                n(m, e);
            }
        };
        function w(n, t) {
            var e = {
                context: this,
                args: arguments,
                nextFn: t,
                adUnits: n.adUnits || pbjs.adUnits,
                bidsBackHandler: n.bidsBackHandler,
                haveExited: !1,
                timer: null
            };
            return v ? y(null, e) : (0, i.default)(Object.keys(C), f) ? (C[f].call(this, b, D, e), 
            void (e.haveExited || (0 === g ? b(void 0, e) : e.timer = setTimeout(function(n) {
                D("CMP workflow exceeded timeout threshold.", n);
            }.bind(null, e), g)))) : (u.logWarn("CMP framework (" + f + ") is not a supported framework.  Aborting consentManagement module and resuming auction."), 
            e.nextFn.apply(e.context, e.args));
        }
        function b(n, t) {
            var e = n && n.getConsentData && n.getConsentData.gdprApplies;
            "boolean" == typeof e && (!0 !== e || u.isStr(n.getConsentData.consentData) && u.isPlainObject(n.getVendorConsents) && 1 < Object.keys(n.getVendorConsents).length) ? (clearTimeout(t.timer), 
            h(n), y(null, t)) : D("CMP returned unexpected value during lookup process.", t, n);
        }
        function D(n, t, e) {
            clearTimeout(t.timer), p && h(void 0), y(n, t, e);
        }
        function h(n) {
            v = {
                consentString: n ? n.getConsentData.consentData : void 0,
                vendorData: n ? n.getVendorConsents : void 0,
                gdprApplies: n ? n.getConsentData.gdprApplies : void 0
            }, a.gdprDataHandler.setConsentData(v);
        }
        function y(n, t, e) {
            if (!1 === t.haveExited) {
                t.haveExited = !0;
                var o = t.context, a = t.args, i = t.nextFn;
                n ? p ? (u.logWarn(n + " Resuming auction without consent data as per consentManagement config.", e), 
                i.apply(o, a)) : (u.logError(n + " Canceling auction as per consentManagement config.", e), 
                "function" == typeof t.bidsBackHandler ? t.bidsBackHandler() : u.logError("Error executing bidsBackHandler")) : i.apply(o, a);
            }
        }
        function x(n) {
            u.isStr(n.cmpApi) ? t.userCMP = f = n.cmpApi : (t.userCMP = f = r, u.logInfo("consentManagement config did not specify cmp.  Using system default setting (" + r + ").")), 
            u.isNumber(n.timeout) ? t.consentTimeout = g = n.timeout : (t.consentTimeout = g = c, 
            u.logInfo("consentManagement config did not specify timeout.  Using system default setting (" + c + ").")), 
            "boolean" == typeof n.allowAuctionWithoutConsent ? t.allowAuction = p = n.allowAuctionWithoutConsent : (t.allowAuction = p = d, 
            u.logInfo("consentManagement config did not specify allowAuctionWithoutConsent.  Using system default setting (" + d + ").")), 
            u.logInfo("consentManagement module has been activated..."), "static" === f && (u.isPlainObject(n.consentData) ? (t.staticConsentData = m = n.consentData, 
            t.consentTimeout = g = 0) : u.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), 
            pbjs.requestBids.addHook(w, 50);
        }
        o.config.getConfig("consentManagement", function(n) {
            return x(n.consentManagement);
        });
    },
    206: function(n, t, e) {
        e(207), n.exports = e(13).String.includes;
    },
    207: function(n, t, e) {
        "use strict";
        var o = e(14), a = e(208), i = "includes";
        o(o.P + o.F * e(210)(i), "String", {
            includes: function(n) {
                return !!~a(this, n, i).indexOf(n, 1 < arguments.length ? arguments[1] : void 0);
            }
        });
    },
    208: function(n, t, e) {
        var o = e(209), a = e(24);
        n.exports = function(n, t, e) {
            if (o(t)) throw TypeError("String#" + e + " doesn't accept regex!");
            return String(a(n));
        };
    },
    209: function(n, t, e) {
        var o = e(15), a = e(23), i = e(25)("match");
        n.exports = function(n) {
            var t;
            return o(n) && (void 0 !== (t = n[i]) ? !!t : "RegExp" == a(n));
        };
    },
    210: function(n, t, e) {
        var o = e(25)("match");
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
}, [ 204 ]);

pbjsChunk([ 2 ], {
    220: function(t, e, i) {
        i(221), t.exports = i(225);
    },
    221: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.spec = exports.FAST_BID_PUBKEY = void 0, exports.cryptoVerify = cryptoVerify;
        var _adloader = __webpack_require__(28), _bidderFactory = __webpack_require__(1), _url = __webpack_require__(11), _utils = __webpack_require__(0), utils = _interopRequireWildcard(_utils), _find = __webpack_require__(10), _find2 = _interopRequireDefault(_find), _jsencrypt = __webpack_require__(222), _jsencrypt2 = _interopRequireDefault(_jsencrypt), _sha = __webpack_require__(223), _sha2 = _interopRequireDefault(_sha);
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function _interopRequireWildcard(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e;
        }
        var ADAPTER_VERSION = 15, BIDDER_CODE = "criteo", CDB_ENDPOINT = "//bidder.criteo.com/cdb", CRITEO_VENDOR_ID = 91, INTEGRATION_MODES = {
            amp: 1
        }, PROFILE_ID_INLINE = 207, PROFILE_ID_PUBLISHERTAG = 185, PUBLISHER_TAG_URL = "//static.criteo.net/js/ld/publishertag.prebid.js", FAST_BID_PUBKEY = exports.FAST_BID_PUBKEY = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDO1BjAITkFTtP0IMzmF7qsqhpu\ny1dGaTPHnjMU9mRZsrnfR3C0sEN5pYEzEcFRPnkJjJuhH8Rnh5+CE+LcKg0Z8ZZ7\nOmOSj0/qnYTAYCu0cR5LiyWG79KlIgUyMbp92ulGg24gAyGrVn4+v/4c53WlOEUp\n4YWvb82G0CD5NcDNpQIDAQAB\n-----END PUBLIC KEY-----", spec = exports.spec = {
            code: BIDDER_CODE,
            isBidRequestValid: function(t) {
                return !(!t || !t.params || !t.params.zoneId && !t.params.networkId);
            },
            buildRequests: function(t, e) {
                var i = void 0, r = void 0;
                if (publisherTagAvailable() || (window.Criteo = window.Criteo || {}, window.Criteo.usePrebidEvents = !1, 
                tryGetCriteoFastBid(), setTimeout(function() {
                    (0, _adloader.loadExternalScript)(PUBLISHER_TAG_URL, BIDDER_CODE);
                }, e.timeout)), publisherTagAvailable()) {
                    var n = new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG, ADAPTER_VERSION, t, e, "1.36.0");
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
                return e && e.slots && utils.isArray(e.slots) && e.slots.forEach(function(e) {
                    var t = (0, _find2.default)(n.bidRequests, function(t) {
                        return t.adUnitCode === e.impid && (!t.params.zoneId || parseInt(t.params.zoneId) === e.zoneid);
                    }), i = t.bidId, r = {
                        requestId: i,
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
            var e = utils.getTopWindowUrl(), i = (0, _url.parse)(e).search, r = {
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
            e += "&wv=" + encodeURIComponent("1.36.0"), e += "&cb=" + String(Math.floor(99999999999 * Math.random())), 
            t.integrationMode in INTEGRATION_MODES && (e += "&im=" + INTEGRATION_MODES[t.integrationMode]), 
            t.debug && (e += "&debug=1"), t.noLog && (e += "&nolog=1"), e;
        }
        function buildCdbRequest(t, e, i) {
            var r = void 0, n = {
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
            }, '<script type="text/javascript">\n    var win = window;\n    for (var i = 0; i < 10; ++i) {\n      win = win.parent;\n      if (win.criteo_prebid_native_slots) {\n        var responseSlot = win.criteo_prebid_native_slots["' + t + '"];\n        responseSlot.callback(responseSlot.payload);\n        break;\n      }\n    }\n  <\/script>';
        }
        function cryptoVerify(t, e, i) {
            var r = new _jsencrypt2.default();
            return r.setPublicKey(t), r.verify(i, e, _sha2.default);
        }
        function validateFastBid(t) {
            var e = t.indexOf("\n"), i = t.substr(0, e).trim();
            if ("// Hash: " !== i.substr(0, 9)) return utils.logWarn("No hash found in FastBid"), 
            !1;
            var r = i.substr(9), n = t.substr(e + 1);
            try {
                return cryptoVerify(FAST_BID_PUBKEY, r, n);
            } catch (t) {
                return void utils.logWarn("Failed to verify Criteo FastBid");
            }
        }
        function tryGetCriteoFastBid() {
            try {
                var fastBid = localStorage.getItem("criteo_fast_bid");
                null !== fastBid && (!1 === validateFastBid(fastBid) ? (utils.logWarn("Invalid Criteo FastBid found"), 
                localStorage.removeItem("criteo_fast_bid")) : (utils.logInfo("Using Criteo FastBid"), 
                eval(fastBid)));
            } catch (t) {}
        }
        (0, _bidderFactory.registerBidder)(spec);
    },
    222: function(t, e, i) {
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
            }, m = 1e13, y = function() {
                function t(t) {
                    this.buf = [ +t || 0 ];
                }
                return t.prototype.mulAdd = function(t, e) {
                    var i, r, n = this.buf, s = n.length;
                    for (i = 0; i < s; ++i) (r = n[i] * t + e) < m ? e = 0 : r -= (e = 0 | r / m) * m, 
                    n[i] = r;
                    0 < e && (n[i] = e);
                }, t.prototype.sub = function(t) {
                    var e, i, r = this.buf, n = r.length;
                    for (e = 0; e < n; ++e) t = (i = r[e] - t) < 0 ? (i += m, 1) : 0, r[e] = i;
                    for (;0 === r[r.length - 1]; ) r.pop();
                }, t.prototype.toString = function(t) {
                    if (10 != (t || 10)) throw new Error("only base 10 is supported");
                    for (var e = this.buf, i = e[e.length - 1].toString(), r = e.length - 2; 0 <= r; --r) i += (m + e[r]).toString().substring(1);
                    return i;
                }, t.prototype.valueOf = function() {
                    for (var t = this.buf, e = 0, i = t.length - 1; 0 <= i; --i) e = e * m + t[i];
                    return e;
                }, t.prototype.simplify = function() {
                    var t = this.buf;
                    return 1 == t.length ? t[0] : this;
                }, t;
            }(), b = "…", T = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/, S = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
            function E(t, e) {
                return t.length > e && (t = t.substring(0, e) + b), t;
            }
            var w, D = function() {
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
                    var r = this.parseStringISO(t, e), n = (i ? T : S).exec(r);
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
                        if (s.length > i) return n + E(s, i);
                    }
                    return n + s;
                }, i.prototype.parseOctetString = function(t, e, i) {
                    if (this.isASCII(t, e)) return E(this.parseStringISO(t, e), i);
                    var r = e - t, n = "(" + r + " byte)\n";
                    (i /= 2) < r && (e = t + i);
                    for (var s = t; s < e; ++s) n += this.hexByte(this.get(s));
                    return i < r && (n += b), n;
                }, i.prototype.parseOID = function(t, e, i) {
                    for (var r = "", n = new y(), s = 0, o = t; o < e; ++o) {
                        var a = this.get(o);
                        if (n.mulAdd(128, 127 & a), s += 7, !(128 & a)) {
                            if ("" === r) if ((n = n.simplify()) instanceof y) n.sub(80), r = "2." + n.toString(); else {
                                var h = n < 80 ? n < 40 ? 0 : 1 : 2;
                                r = h + "." + (n - 40 * h);
                            } else r += "." + n.toString();
                            if (r.length > i) return E(r, i);
                            n = new y(), s = 0;
                        }
                    }
                    return 0 < s && (r += ".incomplete"), r;
                }, i;
            }(), B = function() {
                function c(t, e, i, r, n) {
                    if (!(r instanceof R)) throw new Error("Invalid tag value.");
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
                        return E(this.stream.parseStringUTF(e, e + i), t);

                      case 18:
                      case 19:
                      case 20:
                      case 21:
                      case 22:
                      case 26:
                        return E(this.stream.parseStringISO(e, e + i), t);

                      case 30:
                        return E(this.stream.parseStringBMP(e, e + i), t);

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
                    var e = new D(r), i = new R(r), n = c.decodeLength(r), s = r.pos, o = s - e.pos, a = null, h = function() {
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
            }(), R = function() {
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
            }(), x = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997 ], A = (1 << 26) / x[x.length - 1], I = function() {
                function b(t, e, i) {
                    null != t && ("number" == typeof t ? this.fromNumber(t, e, i) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e));
                }
                return b.prototype.toString = function(t) {
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
                }, b.prototype.negate = function() {
                    var t = P();
                    return b.ZERO.subTo(this, t), t;
                }, b.prototype.abs = function() {
                    return this.s < 0 ? this.negate() : this;
                }, b.prototype.compareTo = function(t) {
                    var e = this.s - t.s;
                    if (0 != e) return e;
                    var i = this.t;
                    if (0 != (e = i - t.t)) return this.s < 0 ? -e : e;
                    for (;0 <= --i; ) if (0 != (e = this[i] - t[i])) return e;
                    return 0;
                }, b.prototype.bitLength = function() {
                    return this.t <= 0 ? 0 : this.DB * (this.t - 1) + U(this[this.t - 1] ^ this.s & this.DM);
                }, b.prototype.mod = function(t) {
                    var e = P();
                    return this.abs().divRemTo(t, null, e), this.s < 0 && 0 < e.compareTo(b.ZERO) && t.subTo(e, e), 
                    e;
                }, b.prototype.modPowInt = function(t, e) {
                    var i;
                    return i = t < 256 || e.isEven() ? new O(e) : new V(e), this.exp(t, i);
                }, b.prototype.clone = function() {
                    var t = P();
                    return this.copyTo(t), t;
                }, b.prototype.intValue = function() {
                    if (this.s < 0) {
                        if (1 == this.t) return this[0] - this.DV;
                        if (0 == this.t) return -1;
                    } else {
                        if (1 == this.t) return this[0];
                        if (0 == this.t) return 0;
                    }
                    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
                }, b.prototype.byteValue = function() {
                    return 0 == this.t ? this.s : this[0] << 24 >> 24;
                }, b.prototype.shortValue = function() {
                    return 0 == this.t ? this.s : this[0] << 16 >> 16;
                }, b.prototype.signum = function() {
                    return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1;
                }, b.prototype.toByteArray = function() {
                    var t = this.t, e = [];
                    e[0] = this.s;
                    var i, r = this.DB - t * this.DB % 8, n = 0;
                    if (0 < t--) for (r < this.DB && (i = this[t] >> r) != (this.s & this.DM) >> r && (e[n++] = i | this.s << this.DB - r); 0 <= t; ) r < 8 ? (i = (this[t] & (1 << r) - 1) << 8 - r, 
                    i |= this[--t] >> (r += this.DB - 8)) : (i = this[t] >> (r -= 8) & 255, r <= 0 && (r += this.DB, 
                    --t)), 0 != (128 & i) && (i |= -256), 0 == n && (128 & this.s) != (128 & i) && ++n, 
                    (0 < n || i != this.s) && (e[n++] = i);
                    return e;
                }, b.prototype.equals = function(t) {
                    return 0 == this.compareTo(t);
                }, b.prototype.min = function(t) {
                    return this.compareTo(t) < 0 ? this : t;
                }, b.prototype.max = function(t) {
                    return 0 < this.compareTo(t) ? this : t;
                }, b.prototype.and = function(t) {
                    var e = P();
                    return this.bitwiseTo(t, i, e), e;
                }, b.prototype.or = function(t) {
                    var e = P();
                    return this.bitwiseTo(t, u, e), e;
                }, b.prototype.xor = function(t) {
                    var e = P();
                    return this.bitwiseTo(t, r, e), e;
                }, b.prototype.andNot = function(t) {
                    var e = P();
                    return this.bitwiseTo(t, n, e), e;
                }, b.prototype.not = function() {
                    for (var t = P(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
                    return t.t = this.t, t.s = ~this.s, t;
                }, b.prototype.shiftLeft = function(t) {
                    var e = P();
                    return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e;
                }, b.prototype.shiftRight = function(t) {
                    var e = P();
                    return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e;
                }, b.prototype.getLowestSetBit = function() {
                    for (var t = 0; t < this.t; ++t) if (0 != this[t]) return t * this.DB + s(this[t]);
                    return this.s < 0 ? this.t * this.DB : -1;
                }, b.prototype.bitCount = function() {
                    for (var t = 0, e = this.s & this.DM, i = 0; i < this.t; ++i) t += o(this[i] ^ e);
                    return t;
                }, b.prototype.testBit = function(t) {
                    var e = Math.floor(t / this.DB);
                    return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB);
                }, b.prototype.setBit = function(t) {
                    return this.changeBit(t, u);
                }, b.prototype.clearBit = function(t) {
                    return this.changeBit(t, n);
                }, b.prototype.flipBit = function(t) {
                    return this.changeBit(t, r);
                }, b.prototype.add = function(t) {
                    var e = P();
                    return this.addTo(t, e), e;
                }, b.prototype.subtract = function(t) {
                    var e = P();
                    return this.subTo(t, e), e;
                }, b.prototype.multiply = function(t) {
                    var e = P();
                    return this.multiplyTo(t, e), e;
                }, b.prototype.divide = function(t) {
                    var e = P();
                    return this.divRemTo(t, e, null), e;
                }, b.prototype.remainder = function(t) {
                    var e = P();
                    return this.divRemTo(t, null, e), e;
                }, b.prototype.divideAndRemainder = function(t) {
                    var e = P(), i = P();
                    return this.divRemTo(t, e, i), [ e, i ];
                }, b.prototype.modPow = function(t, e) {
                    var i, r, n = t.bitLength(), s = j(1);
                    if (n <= 0) return s;
                    i = n < 18 ? 1 : n < 48 ? 3 : n < 144 ? 4 : n < 768 ? 5 : 6, r = n < 8 ? new O(e) : e.isEven() ? new N(e) : new V(e);
                    var o = [], a = 3, h = i - 1, u = (1 << i) - 1;
                    if (o[1] = r.convert(this), 1 < i) {
                        var c = P();
                        for (r.sqrTo(o[1], c); a <= u; ) o[a] = P(), r.mulTo(c, o[a - 2], o[a]), a += 2;
                    }
                    var f, l, p = t.t - 1, d = !0, g = P();
                    for (n = U(t[p]) - 1; 0 <= p; ) {
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
                }, b.prototype.modInverse = function(t) {
                    var e = t.isEven();
                    if (this.isEven() && e || 0 == t.signum()) return b.ZERO;
                    for (var i = t.clone(), r = this.clone(), n = j(1), s = j(0), o = j(0), a = j(1); 0 != i.signum(); ) {
                        for (;i.isEven(); ) i.rShiftTo(1, i), e ? (n.isEven() && s.isEven() || (n.addTo(this, n), 
                        s.subTo(t, s)), n.rShiftTo(1, n)) : s.isEven() || s.subTo(t, s), s.rShiftTo(1, s);
                        for (;r.isEven(); ) r.rShiftTo(1, r), e ? (o.isEven() && a.isEven() || (o.addTo(this, o), 
                        a.subTo(t, a)), o.rShiftTo(1, o)) : a.isEven() || a.subTo(t, a), a.rShiftTo(1, a);
                        0 <= i.compareTo(r) ? (i.subTo(r, i), e && n.subTo(o, n), s.subTo(a, s)) : (r.subTo(i, r), 
                        e && o.subTo(n, o), a.subTo(s, a));
                    }
                    return 0 != r.compareTo(b.ONE) ? b.ZERO : 0 <= a.compareTo(t) ? a.subtract(t) : a.signum() < 0 ? (a.addTo(t, a), 
                    a.signum() < 0 ? a.add(t) : a) : a;
                }, b.prototype.pow = function(t) {
                    return this.exp(t, new _());
                }, b.prototype.gcd = function(t) {
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
                }, b.prototype.isProbablePrime = function(t) {
                    var e, i = this.abs();
                    if (1 == i.t && i[0] <= x[x.length - 1]) {
                        for (e = 0; e < x.length; ++e) if (i[0] == x[e]) return !0;
                        return !1;
                    }
                    if (i.isEven()) return !1;
                    for (e = 1; e < x.length; ) {
                        for (var r = x[e], n = e + 1; n < x.length && r < A; ) r *= x[n++];
                        for (r = i.modInt(r); e < n; ) if (r % x[e++] == 0) return !1;
                    }
                    return i.millerRabin(t);
                }, b.prototype.copyTo = function(t) {
                    for (var e = this.t - 1; 0 <= e; --e) t[e] = this[e];
                    t.t = this.t, t.s = this.s;
                }, b.prototype.fromInt = function(t) {
                    this.t = 1, this.s = t < 0 ? -1 : 0, 0 < t ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0;
                }, b.prototype.fromString = function(t, e) {
                    var i;
                    if (16 == e) i = 4; else if (8 == e) i = 3; else if (256 == e) i = 8; else if (2 == e) i = 1; else if (32 == e) i = 5; else {
                        if (4 != e) return void this.fromRadix(t, e);
                        i = 2;
                    }
                    this.t = 0, this.s = 0;
                    for (var r = t.length, n = !1, s = 0; 0 <= --r; ) {
                        var o = 8 == i ? 255 & +t[r] : L(t, r);
                        o < 0 ? "-" == t.charAt(r) && (n = !0) : (n = !1, 0 == s ? this[this.t++] = o : s + i > this.DB ? (this[this.t - 1] |= (o & (1 << this.DB - s) - 1) << s, 
                        this[this.t++] = o >> this.DB - s) : this[this.t - 1] |= o << s, (s += i) >= this.DB && (s -= this.DB));
                    }
                    8 == i && 0 != (128 & +t[0]) && (this.s = -1, 0 < s && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), 
                    this.clamp(), n && b.ZERO.subTo(this, this);
                }, b.prototype.clamp = function() {
                    for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t; ) --this.t;
                }, b.prototype.dlShiftTo = function(t, e) {
                    var i;
                    for (i = this.t - 1; 0 <= i; --i) e[i + t] = this[i];
                    for (i = t - 1; 0 <= i; --i) e[i] = 0;
                    e.t = this.t + t, e.s = this.s;
                }, b.prototype.drShiftTo = function(t, e) {
                    for (var i = t; i < this.t; ++i) e[i - t] = this[i];
                    e.t = Math.max(this.t - t, 0), e.s = this.s;
                }, b.prototype.lShiftTo = function(t, e) {
                    for (var i = t % this.DB, r = this.DB - i, n = (1 << r) - 1, s = Math.floor(t / this.DB), o = this.s << i & this.DM, a = this.t - 1; 0 <= a; --a) e[a + s + 1] = this[a] >> r | o, 
                    o = (this[a] & n) << i;
                    for (a = s - 1; 0 <= a; --a) e[a] = 0;
                    e[s] = o, e.t = this.t + s + 1, e.s = this.s, e.clamp();
                }, b.prototype.rShiftTo = function(t, e) {
                    e.s = this.s;
                    var i = Math.floor(t / this.DB);
                    if (i >= this.t) e.t = 0; else {
                        var r = t % this.DB, n = this.DB - r, s = (1 << r) - 1;
                        e[0] = this[i] >> r;
                        for (var o = i + 1; o < this.t; ++o) e[o - i - 1] |= (this[o] & s) << n, e[o - i] = this[o] >> r;
                        0 < r && (e[this.t - i - 1] |= (this.s & s) << n), e.t = this.t - i, e.clamp();
                    }
                }, b.prototype.subTo = function(t, e) {
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
                }, b.prototype.multiplyTo = function(t, e) {
                    var i = this.abs(), r = t.abs(), n = i.t;
                    for (e.t = n + r.t; 0 <= --n; ) e[n] = 0;
                    for (n = 0; n < r.t; ++n) e[n + i.t] = i.am(0, r[n], e, n, 0, i.t);
                    e.s = 0, e.clamp(), this.s != t.s && b.ZERO.subTo(e, e);
                }, b.prototype.squareTo = function(t) {
                    for (var e = this.abs(), i = t.t = 2 * e.t; 0 <= --i; ) t[i] = 0;
                    for (i = 0; i < e.t - 1; ++i) {
                        var r = e.am(i, e[i], t, 2 * i, 0, 1);
                        (t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, r, e.t - i - 1)) >= e.DV && (t[i + e.t] -= e.DV, 
                        t[i + e.t + 1] = 1);
                    }
                    0 < t.t && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)), t.s = 0, t.clamp();
                }, b.prototype.divRemTo = function(t, e, i) {
                    var r = t.abs();
                    if (!(r.t <= 0)) {
                        var n = this.abs();
                        if (n.t < r.t) return null != e && e.fromInt(0), void (null != i && this.copyTo(i));
                        null == i && (i = P());
                        var s = P(), o = this.s, a = t.s, h = this.DB - U(r[r.t - 1]);
                        0 < h ? (r.lShiftTo(h, s), n.lShiftTo(h, i)) : (r.copyTo(s), n.copyTo(i));
                        var u = s.t, c = s[u - 1];
                        if (0 != c) {
                            var f = c * (1 << this.F1) + (1 < u ? s[u - 2] >> this.F2 : 0), l = this.FV / f, p = (1 << this.F1) / f, d = 1 << this.F2, g = i.t, v = g - u, m = null == e ? P() : e;
                            for (s.dlShiftTo(v, m), 0 <= i.compareTo(m) && (i[i.t++] = 1, i.subTo(m, i)), b.ONE.dlShiftTo(u, m), 
                            m.subTo(s, s); s.t < u; ) s[s.t++] = 0;
                            for (;0 <= --v; ) {
                                var y = i[--g] == c ? this.DM : Math.floor(i[g] * l + (i[g - 1] + d) * p);
                                if ((i[g] += s.am(0, y, i, v, 0, u)) < y) for (s.dlShiftTo(v, m), i.subTo(m, i); i[g] < --y; ) i.subTo(m, i);
                            }
                            null != e && (i.drShiftTo(u, e), o != a && b.ZERO.subTo(e, e)), i.t = u, i.clamp(), 
                            0 < h && i.rShiftTo(h, i), o < 0 && b.ZERO.subTo(i, i);
                        }
                    }
                }, b.prototype.invDigit = function() {
                    if (this.t < 1) return 0;
                    var t = this[0];
                    if (0 == (1 & t)) return 0;
                    var e = 3 & t;
                    return 0 < (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) ? this.DV - e : -e;
                }, b.prototype.isEven = function() {
                    return 0 == (0 < this.t ? 1 & this[0] : this.s);
                }, b.prototype.exp = function(t, e) {
                    if (4294967295 < t || t < 1) return b.ONE;
                    var i = P(), r = P(), n = e.convert(this), s = U(t) - 1;
                    for (n.copyTo(i); 0 <= --s; ) if (e.sqrTo(i, r), 0 < (t & 1 << s)) e.mulTo(r, n, i); else {
                        var o = i;
                        i = r, r = o;
                    }
                    return e.revert(i);
                }, b.prototype.chunkSize = function(t) {
                    return Math.floor(Math.LN2 * this.DB / Math.log(t));
                }, b.prototype.toRadix = function(t) {
                    if (null == t && (t = 10), 0 == this.signum() || t < 2 || 36 < t) return "0";
                    var e = this.chunkSize(t), i = Math.pow(t, e), r = j(i), n = P(), s = P(), o = "";
                    for (this.divRemTo(r, n, s); 0 < n.signum(); ) o = (i + s.intValue()).toString(t).substr(1) + o, 
                    n.divRemTo(r, n, s);
                    return s.intValue().toString(t) + o;
                }, b.prototype.fromRadix = function(t, e) {
                    this.fromInt(0), null == e && (e = 10);
                    for (var i = this.chunkSize(e), r = Math.pow(e, i), n = !1, s = 0, o = 0, a = 0; a < t.length; ++a) {
                        var h = L(t, a);
                        h < 0 ? "-" == t.charAt(a) && 0 == this.signum() && (n = !0) : (o = e * o + h, ++s >= i && (this.dMultiply(r), 
                        this.dAddOffset(o, 0), o = s = 0));
                    }
                    0 < s && (this.dMultiply(Math.pow(e, s)), this.dAddOffset(o, 0)), n && b.ZERO.subTo(this, this);
                }, b.prototype.fromNumber = function(t, e, i) {
                    if ("number" == typeof e) if (t < 2) this.fromInt(1); else for (this.fromNumber(t, i), 
                    this.testBit(t - 1) || this.bitwiseTo(b.ONE.shiftLeft(t - 1), u, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e); ) this.dAddOffset(2, 0), 
                    this.bitLength() > t && this.subTo(b.ONE.shiftLeft(t - 1), this); else {
                        var r = [], n = 7 & t;
                        r.length = 1 + (t >> 3), e.nextBytes(r), 0 < n ? r[0] &= (1 << n) - 1 : r[0] = 0, 
                        this.fromString(r, 256);
                    }
                }, b.prototype.bitwiseTo = function(t, e, i) {
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
                }, b.prototype.changeBit = function(t, e) {
                    var i = b.ONE.shiftLeft(t);
                    return this.bitwiseTo(i, e, i), i;
                }, b.prototype.addTo = function(t, e) {
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
                }, b.prototype.dMultiply = function(t) {
                    this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp();
                }, b.prototype.dAddOffset = function(t, e) {
                    if (0 != t) {
                        for (;this.t <= e; ) this[this.t++] = 0;
                        for (this[e] += t; this[e] >= this.DV; ) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), 
                        ++this[e];
                    }
                }, b.prototype.multiplyLowerTo = function(t, e, i) {
                    var r = Math.min(this.t + t.t, e);
                    for (i.s = 0, i.t = r; 0 < r; ) i[--r] = 0;
                    for (var n = i.t - this.t; r < n; ++r) i[r + this.t] = this.am(0, t[r], i, r, 0, this.t);
                    for (n = Math.min(t.t, e); r < n; ++r) this.am(0, t[r], i, r, 0, e - r);
                    i.clamp();
                }, b.prototype.multiplyUpperTo = function(t, e, i) {
                    --e;
                    var r = i.t = this.t + t.t - e;
                    for (i.s = 0; 0 <= --r; ) i[r] = 0;
                    for (r = Math.max(e - this.t, 0); r < t.t; ++r) i[this.t + r - e] = this.am(e - r, t[r], i, 0, 0, this.t + r - e);
                    i.clamp(), i.drShiftTo(1, i);
                }, b.prototype.modInt = function(t) {
                    if (t <= 0) return 0;
                    var e = this.DV % t, i = this.s < 0 ? t - 1 : 0;
                    if (0 < this.t) if (0 == e) i = this[0] % t; else for (var r = this.t - 1; 0 <= r; --r) i = (e * i + this[r]) % t;
                    return i;
                }, b.prototype.millerRabin = function(t) {
                    var e = this.subtract(b.ONE), i = e.getLowestSetBit();
                    if (i <= 0) return !1;
                    var r = e.shiftRight(i);
                    x.length < (t = t + 1 >> 1) && (t = x.length);
                    for (var n = P(), s = 0; s < t; ++s) {
                        n.fromInt(x[Math.floor(Math.random() * x.length)]);
                        var o = n.modPow(r, this);
                        if (0 != o.compareTo(b.ONE) && 0 != o.compareTo(e)) {
                            for (var a = 1; a++ < i && 0 != o.compareTo(e); ) if (0 == (o = o.modPowInt(2, this)).compareTo(b.ONE)) return !1;
                            if (0 != o.compareTo(e)) return !1;
                        }
                    }
                    return !0;
                }, b.prototype.square = function() {
                    var t = P();
                    return this.squareTo(t), t;
                }, b.prototype.gcda = function(t, e) {
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
                }, b.prototype.fromNumberAsync = function(t, e, i, r) {
                    if ("number" == typeof e) if (t < 2) this.fromInt(1); else {
                        this.fromNumber(t, i), this.testBit(t - 1) || this.bitwiseTo(b.ONE.shiftLeft(t - 1), u, this), 
                        this.isEven() && this.dAddOffset(1, 0);
                        var n = this, s = function() {
                            n.dAddOffset(2, 0), n.bitLength() > t && n.subTo(b.ONE.shiftLeft(t - 1), n), n.isProbablePrime(e) ? setTimeout(function() {
                                r();
                            }, 0) : setTimeout(s, 0);
                        };
                        setTimeout(s, 0);
                    } else {
                        var o = [], a = 7 & t;
                        o.length = 1 + (t >> 3), e.nextBytes(o), 0 < a ? o[0] &= (1 << a) - 1 : o[0] = 0, 
                        this.fromString(o, 256);
                    }
                }, b;
            }(), _ = function() {
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
            }(), O = function() {
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
            }(), V = function() {
                function t(t) {
                    this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, 
                    this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t;
                }
                return t.prototype.convert = function(t) {
                    var e = P();
                    return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && 0 < e.compareTo(I.ZERO) && this.m.subTo(e, e), 
                    e;
                }, t.prototype.revert = function(t) {
                    var e = P();
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
            }(), N = function() {
                function t(t) {
                    this.m = t, this.r2 = P(), this.q3 = P(), I.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t);
                }
                return t.prototype.convert = function(t) {
                    if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
                    if (t.compareTo(this.m) < 0) return t;
                    var e = P();
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
            function P() {
                return new I(null);
            }
            function C(t, e) {
                return new I(t, e);
            }
            w = "Microsoft Internet Explorer" == navigator.appName ? (I.prototype.am = function(t, e, i, r, n, s) {
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
            }, 28), I.prototype.DB = w, I.prototype.DM = (1 << w) - 1, I.prototype.DV = 1 << w;
            I.prototype.FV = Math.pow(2, 52), I.prototype.F1 = 52 - w, I.prototype.F2 = 2 * w - 52;
            var M, q, H = [];
            for (M = "0".charCodeAt(0), q = 0; q <= 9; ++q) H[M++] = q;
            for (M = "a".charCodeAt(0), q = 10; q < 36; ++q) H[M++] = q;
            for (M = "A".charCodeAt(0), q = 10; q < 36; ++q) H[M++] = q;
            function L(t, e) {
                var i = H[t.charCodeAt(e)];
                return null == i ? -1 : i;
            }
            function j(t) {
                var e = P();
                return e.fromInt(t), e;
            }
            function U(t) {
                var e, i = 1;
                return 0 != (e = t >>> 16) && (t = e, i += 16), 0 != (e = t >> 8) && (t = e, i += 8), 
                0 != (e = t >> 4) && (t = e, i += 4), 0 != (e = t >> 2) && (t = e, i += 2), 0 != (e = t >> 1) && (t = e, 
                i += 1), i;
            }
            I.ZERO = j(0), I.ONE = j(1);
            var F = function() {
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
            var k, K, z = 256, G = null;
            if (null == G) {
                G = [];
                var Z = void (K = 0);
                if (window.crypto && window.crypto.getRandomValues) {
                    var Y = new Uint32Array(256);
                    for (window.crypto.getRandomValues(Y), Z = 0; Z < Y.length; ++Z) G[K++] = 255 & Y[Z];
                }
                var W = function(t) {
                    if (this.count = this.count || 0, 256 <= this.count || z <= K) window.removeEventListener ? window.removeEventListener("mousemove", W, !1) : window.detachEvent && window.detachEvent("onmousemove", W); else try {
                        var e = t.x + t.y;
                        G[K++] = 255 & e, this.count += 1;
                    } catch (t) {}
                };
                window.addEventListener ? window.addEventListener("mousemove", W, !1) : window.attachEvent && window.attachEvent("onmousemove", W);
            }
            function $() {
                if (null == k) {
                    for (k = new F(); K < z; ) {
                        var t = Math.floor(65536 * Math.random());
                        G[K++] = 255 & t;
                    }
                    for (k.init(G), K = 0; K < G.length; ++K) G[K] = 0;
                    K = 0;
                }
                return k.next();
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
                    null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = C(t, 16), this.e = parseInt(e, 16)) : console.error("Invalid RSA public key");
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
                    null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = C(t, 16), this.e = parseInt(e, 16), 
                    this.d = C(i, 16)) : console.error("Invalid RSA private key");
                }, t.prototype.setPrivateEx = function(t, e, i, r, n, s, o, a) {
                    null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = C(t, 16), this.e = parseInt(e, 16), 
                    this.d = C(i, 16), this.p = C(r, 16), this.q = C(n, 16), this.dmp1 = C(s, 16), this.dmq1 = C(o, 16), 
                    this.coeff = C(a, 16)) : console.error("Invalid RSA private key");
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
                    var e = C(t, 16), i = this.doPrivate(e);
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
                            h.q = P(), h.q.fromNumberAsync(o, 1, s, function() {
                                h.q.subtract(I.ONE).gcda(a, function(t) {
                                    0 == t.compareTo(I.ONE) && h.q.isProbablePrime(10) ? setTimeout(e, 0) : setTimeout(i, 0);
                                });
                            });
                        }, r = function() {
                            h.p = P(), h.p.fromNumberAsync(t - o, 1, s, function() {
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
                        return C("0001" + r + "00" + t, 16);
                    }((X[i] || "") + e(t).toString(), this.n.bitLength() / 4);
                    if (null == r) return null;
                    var n = this.doPrivate(r);
                    if (null == n) return null;
                    var s = n.toString(16);
                    return 0 == (1 & s.length) ? s : "0" + s;
                }, t.prototype.verify = function(t, e, i) {
                    var r = C(e, 16), n = this.doPublic(r);
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
                    var e = et.asn1, i = e.DERBoolean, r = e.DERInteger, n = e.DERBitString, s = e.DEROctetString, o = e.DERNull, a = e.DERObjectIdentifier, h = e.DEREnumerated, u = e.DERUTF8String, c = e.DERNumericString, f = e.DERPrintableString, l = e.DERTeletexString, p = e.DERIA5String, d = e.DERUTCTime, g = e.DERGeneralizedTime, v = e.DERSequence, m = e.DERSet, y = e.DERTaggedObject, b = e.ASN1Util.newObject, T = Object.keys(t);
                    if (1 != T.length) throw "key of param shall be only one.";
                    var S = T[0];
                    if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + S + ":")) throw "undefined key: " + S;
                    if ("bool" == S) return new i(t[S]);
                    if ("int" == S) return new r(t[S]);
                    if ("bitstr" == S) return new n(t[S]);
                    if ("octstr" == S) return new s(t[S]);
                    if ("null" == S) return new o(t[S]);
                    if ("oid" == S) return new a(t[S]);
                    if ("enum" == S) return new h(t[S]);
                    if ("utf8str" == S) return new u(t[S]);
                    if ("numstr" == S) return new c(t[S]);
                    if ("prnstr" == S) return new f(t[S]);
                    if ("telstr" == S) return new l(t[S]);
                    if ("ia5str" == S) return new p(t[S]);
                    if ("utctime" == S) return new d(t[S]);
                    if ("gentime" == S) return new g(t[S]);
                    if ("seq" == S) {
                        for (var E = t[S], w = [], D = 0; D < E.length; D++) {
                            var B = b(E[D]);
                            w.push(B);
                        }
                        return new v({
                            array: w
                        });
                    }
                    if ("set" == S) {
                        for (E = t[S], w = [], D = 0; D < E.length; D++) {
                            B = b(E[D]);
                            w.push(B);
                        }
                        return new m({
                            array: w
                        });
                    }
                    if ("tag" == S) {
                        var R = t[S];
                        if ("[object Array]" === Object.prototype.toString.call(R) && 3 == R.length) {
                            var x = b(R[2]);
                            return new y({
                                tag: R[0],
                                explicit: R[1],
                                obj: x
                            });
                        }
                        var A = {};
                        if (void 0 !== R.explicit && (A.explicit = R.explicit), void 0 !== R.tag && (A.tag = R.tag), 
                        void 0 === R.obj) throw "obj shall be specified for 'tag'.";
                        return A.obj = b(R.obj), new y(A);
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
                        var e = 0, i = 0, r = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t) ? g(t) : v.unarmor(t), n = B.decode(r);
                        if (3 === n.sub.length && (n = n.sub[2].sub[0]), 9 === n.sub.length) {
                            e = n.sub[1].getHexStringValue(), this.n = C(e, 16), i = n.sub[2].getHexStringValue(), 
                            this.e = parseInt(i, 16);
                            var s = n.sub[3].getHexStringValue();
                            this.d = C(s, 16);
                            var o = n.sub[4].getHexStringValue();
                            this.p = C(o, 16);
                            var a = n.sub[5].getHexStringValue();
                            this.q = C(a, 16);
                            var h = n.sub[6].getHexStringValue();
                            this.dmp1 = C(h, 16);
                            var u = n.sub[7].getHexStringValue();
                            this.dmq1 = C(u, 16);
                            var c = n.sub[8].getHexStringValue();
                            this.coeff = C(c, 16);
                        } else {
                            if (2 !== n.sub.length) return !1;
                            var f = n.sub[1].sub[0];
                            e = f.sub[0].getHexStringValue(), this.n = C(e, 16), i = f.sub[1].getHexStringValue(), 
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
    223: function(t, e, i) {
        var r;
        r = function(h) {
            return function(n) {
                var t = h, e = t.lib, i = e.WordArray, r = e.Hasher, s = t.algo, o = [], b = [];
                !function() {
                    function t(t) {
                        for (var e = n.sqrt(t), i = 2; i <= e; i++) if (!(t % i)) return !1;
                        return !0;
                    }
                    function e(t) {
                        return 4294967296 * (t - (0 | t)) | 0;
                    }
                    for (var i = 2, r = 0; r < 64; ) t(i) && (r < 8 && (o[r] = e(n.pow(i, .5))), b[r] = e(n.pow(i, 1 / 3)), 
                    r++), i++;
                }();
                var T = [], a = s.SHA256 = r.extend({
                    _doReset: function() {
                        this._hash = new i.init(o.slice(0));
                    },
                    _doProcessBlock: function(t, e) {
                        for (var i = this._hash.words, r = i[0], n = i[1], s = i[2], o = i[3], a = i[4], h = i[5], u = i[6], c = i[7], f = 0; f < 64; f++) {
                            if (f < 16) T[f] = 0 | t[e + f]; else {
                                var l = T[f - 15], p = (l << 25 | l >>> 7) ^ (l << 14 | l >>> 18) ^ l >>> 3, d = T[f - 2], g = (d << 15 | d >>> 17) ^ (d << 13 | d >>> 19) ^ d >>> 10;
                                T[f] = p + T[f - 7] + g + T[f - 16];
                            }
                            var v = r & n ^ r & s ^ n & s, m = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22), y = c + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & h ^ ~a & u) + b[f] + T[f];
                            c = u, u = h, h = a, a = o + y | 0, o = s, s = n, n = r, r = y + (m + v) | 0;
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
        }, t.exports = r(i(224));
    },
    224: function(t, e, i) {
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
    },
    225: function(t, e) {}
}, [ 220 ]);

pbjsChunk([ 188 ], {
    292: function(e, n, o) {
        e.exports = o(293);
    },
    293: function(e, n, o) {
        "use strict";
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, s = o(9), a = o(0), t = o(4), r = o(8), d = t.EVENTS.BID_REQUESTED, c = t.EVENTS.BID_TIMEOUT, u = t.EVENTS.BID_RESPONSE, l = t.EVENTS.BID_WON, f = {
            nonInteraction: !0
        }, b = [], p = null, m = !0, v = "Prebid.js Bids", y = 0, g = !1, T = null, w = !0;
        function E() {
            if (m && "function" == typeof window[p]) {
                for (var e = 0; e < b.length; e++) b[e].call();
                b.push = function(e) {
                    e.call();
                }, m = !1;
            }
            a.logMessage("event count sent to GA: " + y);
        }
        function S(e) {
            return e ? Math.floor(100 * e) : 0;
        }
        function h(e) {
            e && e.bidderCode && b.push(function() {
                y++, window[p](T, "event", v, "Requests", e.bidderCode, 1, f);
            }), E();
        }
        function $(d) {
            d && d.bidderCode && b.push(function() {
                var e, n, o, t, i = S(d.cpm), s = d.bidderCode;
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
            }), E();
        }
        function D(e) {
            b.push(function() {
                a._each(e, function(e) {
                    y++;
                    var n = e.bidder;
                    window[p](T, "event", v, "Timeouts", n, f);
                });
            }), E();
        }
        function N(e) {
            var n = S(e.cpm);
            b.push(function() {
                y++, window[p](T, "event", v, "Wins", e.bidderCode, n, f);
            }), E();
        }
        n.enableAnalytics = function(e) {
            var n = e.provider, o = e.options;
            p = n || "ga", T = o && o.trackerName ? o.trackerName + ".send" : "send", w = void 0 === o || void 0 === o.sampling || Math.random() < parseFloat(o.sampling), 
            o && void 0 !== o.global && (p = o.global), o && void 0 !== o.enableDistribution && (g = o.enableDistribution);
            if (w) {
                var t = s.getEvents();
                a._each(t, function(e) {
                    if ("object" === (void 0 === e ? "undefined" : i(e))) {
                        var n = e.args;
                        if (e.eventType === d) h(n); else if (e.eventType === u) $(n); else if (e.eventType === c) {
                            D(n);
                        } else e.eventType === l && N(n);
                    }
                }), s.on(d, function(e) {
                    h(e);
                }), s.on(u, function(e) {
                    $(e);
                }), s.on(c, function(e) {
                    D(e);
                }), s.on(l, function(e) {
                    N(e);
                });
            } else a.logMessage("Prebid.js google analytics disabled by sampling");
            this.enableAnalytics = function() {
                return a.logMessage("Analytics adapter already enabled, unnecessary call to `enableAnalytics`.");
            };
        }, n.getTrackerSend = function() {
            return T;
        }, r.registerAnalyticsAdapter({
            adapter: n,
            code: "ga"
        });
    }
}, [ 292 ]);

pbjsChunk([ 68 ], {
    452: function(e, r, a) {
        a(453), e.exports = a(454);
    },
    453: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.spec = void 0;
        var g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, f = function(e) {
            {
                if (e && e.__esModule) return e;
                var r = {};
                if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
                return r.default = e, r;
            }
        }(a(0)), t = a(1), i = a(2), n = a(3);
        var h = a(4), y = "pubmatic", v = "USD", o = "nFIn8aLzbd", b = void 0, w = {
            kadpageurl: "",
            gender: "",
            yob: "",
            lat: "",
            lon: "",
            wiid: "",
            profId: "",
            verId: ""
        }, s = {
            NUMBER: "number",
            STRING: "string",
            BOOLEAN: "boolean",
            ARRAY: "array"
        }, I = {
            mimes: s.ARRAY,
            minduration: s.NUMBER,
            maxduration: s.NUMBER,
            startdelay: s.NUMBER,
            playbackmethod: s.ARRAY,
            api: s.ARRAY,
            protocols: s.ARRAY,
            w: s.NUMBER,
            h: s.NUMBER,
            battr: s.ARRAY,
            linearity: s.NUMBER,
            placement: s.NUMBER,
            minbitrate: s.NUMBER,
            maxbitrate: s.NUMBER
        }, d = {
            1: "PMP",
            5: "PREF",
            6: "PMPG"
        }, S = 0;
        function R(e, r) {
            if (!f.isStr(r)) return r && f.logWarn("PubMatic: Ignoring param key: " + e + ", expects string-value, found " + (void 0 === r ? "undefined" : g(r))), 
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
        function O(e) {
            e.params.adUnit = "", e.params.adUnitIndex = "0", e.params.width = 0, e.params.height = 0;
            var r, a = e.hasOwnProperty("sizes") && f.isArray(e.sizes) && 1 <= e.sizes.length;
            e.params.adSlot = (r = e.params.adSlot, f.isStr(r) ? r.replace(/^\s+/g, "").replace(/\s+$/g, "") : "");
            var t = e.params.adSlot, i = t.split(":");
            if (t = i[0], 2 == i.length && (e.params.adUnitIndex = i[1]), 2 == (i = t.split("@")).length || a) if (e.params.adUnit = i[0], 
            1 < i.length) {
                if (2 != (i = i[1].split("x")).length) return void f.logWarn("AdSlot Error: adSlot not in required format");
                e.params.width = parseInt(i[0]), e.params.height = parseInt(i[1]), delete e.sizes;
            } else a && (e.params.width = parseInt(e.sizes[0][0]), e.params.height = parseInt(e.sizes[0][1])); else f.logWarn("AdSlot Error: adSlot not in required format");
        }
        function P(e, r, a) {
            var t = "PubMatic: Ignoring param key: " + e + ", expects " + a + ", found " + (void 0 === r ? "undefined" : g(r));
            switch (a) {
              case s.BOOLEAN:
                return f.isBoolean(r) ? r : (f.logWarn(t), b);

              case s.NUMBER:
                return f.isNumber(r) ? r : (f.logWarn(t), b);

              case s.STRING:
                return f.isStr(r) ? r : (f.logWarn(t), b);

              case s.ARRAY:
                return f.isArray(r) ? r : (f.logWarn(t), b);
            }
        }
        function p(e) {
            var r, a, t, i = (r = o, !(t = (a = window.DigiTrust && (n.config.getConfig("digiTrustId") || window.DigiTrust.getUser({
                member: r
            }))) && a.success && a.identity || null) || t.privacy && t.privacy.optout ? null : t);
            null !== i && e.push({
                source: "digitru.st",
                uids: [ {
                    id: i.id || "",
                    atype: 1,
                    ext: {
                        keyv: parseInt(i.keyv) || 0
                    }
                } ]
            });
        }
        function x(e) {
            var r, a, t = [];
            p(t), r = t, (a = n.config.getConfig("adsrvrOrgId")) && f.isStr(a.TDID) && r.push({
                source: "adserver.org",
                uids: [ {
                    id: a.TDID,
                    atype: 1,
                    ext: {
                        rtiPartner: "TDID"
                    }
                } ]
            }), 0 < t.length && (e.user.eids = t);
        }
        var l = r.spec = {
            code: y,
            supportedMediaTypes: [ i.BANNER, i.VIDEO ],
            isBidRequestValid: function(e) {
                return !(!e || !e.params) && (f.isStr(e.params.publisherId) ? f.isStr(e.params.adSlot) ? !!(!e.params.hasOwnProperty("video") || e.params.video.hasOwnProperty("mimes") && f.isArray(e.params.video.mimes) && 0 !== e.params.video.mimes.length) || (f.logWarn(y + ": For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent."), 
                !1) : (f.logWarn(y + ": adSlotId is mandatory and cannot be numeric. Call to OpenBid will not be sent."), 
                !1) : (f.logWarn(y + " Error: publisherId is mandatory and cannot be numeric. Call to OpenBid will not be sent."), 
                !1));
            },
            buildRequests: function(e, r) {
                var a, t, i, n, o = ((a = {}).pageURL = f.getTopWindowUrl(), a.refURL = f.getTopWindowReferrer(), 
                a), s = (t = o, {
                    id: "" + new Date().getTime(),
                    at: 1,
                    cur: [ v ],
                    imp: [],
                    site: {
                        page: t.pageURL,
                        ref: t.refURL,
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
                }), d = "", p = "", l = [];
                if (e.forEach(function(e) {
                    if (O(n = f.deepClone(e)), n.params.hasOwnProperty("video")) {
                        if (!(n.params.adSlot && n.params.adUnit && n.params.adUnitIndex)) return void f.logWarn(y + ": Skipping the non-standard adslot: ", n.params.adSlot, n);
                    } else if (!(n.params.adSlot && n.params.adUnit && n.params.adUnitIndex && n.params.width && n.params.height)) return void f.logWarn(y + ": Skipping the non-standard adslot: ", n.params.adSlot, n);
                    o.pubId = o.pubId || n.params.publisherId, (o = function(e, r) {
                        var a, t, i;
                        for (a in r.kadpageurl || (r.kadpageurl = r.pageURL), w) w.hasOwnProperty(a) && (t = e[a]) && ("object" === (void 0 === (i = w[a]) ? "undefined" : g(i)) && (t = i.f(t, r)), 
                        f.isStr(t) ? r[a] = t : f.logWarn("PubMatic: Ignoring param : " + a + " with value : " + w[a] + ", expects string-value, found " + (void 0 === t ? "undefined" : g(t))));
                        return r;
                    }(n.params, o)).transactionId = n.transactionId, "" === d ? d = n.params.currency || void 0 : n.params.hasOwnProperty("currency") && d !== n.params.currency && f.logWarn(y + ": Currency specifier ignored. Only one currency permitted."), 
                    n.params.currency = d, n.params.hasOwnProperty("dctr") && f.isStr(n.params.dctr) && l.push(n.params.dctr), 
                    s.imp.push(function(e, r) {
                        var a = {}, t = {}, i = {}, n = e.hasOwnProperty("sizes") ? e.sizes : [];
                        if (a = {
                            id: e.bidId,
                            tagid: e.params.adUnit,
                            bidfloor: R("kadfloor", e.params.kadfloor),
                            secure: "https:" === window.location.protocol ? 1 : 0,
                            ext: {
                                pmZoneId: R("pmzoneid", e.params.pmzoneid)
                            },
                            bidfloorcur: e.params.currency ? R("currency", e.params.currency) : v
                        }, e.params.hasOwnProperty("video")) {
                            var o = e.params.video;
                            for (var s in I) o.hasOwnProperty(s) && (i[s] = P(s, o[s], I[s]));
                            f.isArray(e.mediaTypes.video.playerSize[0]) ? (i.w = e.mediaTypes.video.playerSize[0][0], 
                            i.h = e.mediaTypes.video.playerSize[0][1]) : f.isNumber(e.mediaTypes.video.playerSize[0]) && (i.w = e.mediaTypes.video.playerSize[0], 
                            i.h = e.mediaTypes.video.playerSize[1]), e.params.video.hasOwnProperty("skippable") && (i.ext = {
                                video_skippable: e.params.video.skippable ? 1 : 0
                            }), a.video = i;
                        } else {
                            if (t = {
                                pos: 0,
                                w: e.params.width,
                                h: e.params.height,
                                topframe: f.inIframe() ? 0 : 1
                            }, f.isArray(n) && 1 < n.length) {
                                n = n.splice(1, n.length - 1);
                                var d = [];
                                n.forEach(function(e) {
                                    d.push({
                                        w: e[0],
                                        h: e[1]
                                    });
                                }), t.format = d;
                            }
                            a.banner = t;
                        }
                        return a;
                    }(n));
                }), 0 != s.imp.length) {
                    var u, c;
                    if (s.site.publisher.id = o.pubId.trim(), S = o.pubId.trim(), s.ext.wrapper = {}, 
                    s.ext.wrapper.profile = parseInt(o.profId) || b, s.ext.wrapper.version = parseInt(o.verId) || b, 
                    s.ext.wrapper.wiid = o.wiid || b, s.ext.wrapper.wv = h.REPO_AND_VERSION, s.ext.wrapper.transactionId = o.transactionId, 
                    s.ext.wrapper.wp = "pbjs", s.user.gender = o.gender ? o.gender.trim() : b, s.user.geo = {}, 
                    r && r.gdprConsent && (s.user.ext = {
                        consent: r.gdprConsent.consentString
                    }, s.regs = {
                        ext: {
                            gdpr: r.gdprConsent.gdprApplies ? 1 : 0
                        }
                    }), s.user.geo.lat = R("lat", o.lat), s.user.geo.lon = R("lon", o.lon), s.user.yob = R("yob", o.yob), 
                    s.device.geo = {}, s.device.geo.lat = R("lat", o.lat), s.device.geo.lon = R("lon", o.lon), 
                    s.site.page = o.kadpageurl.trim() || s.site.page.trim(), s.site.domain = (u = s.site.page, 
                    (c = document.createElement("a")).href = u, c.hostname), 0 < l.length) if (e[0].params.hasOwnProperty("dctr")) {
                        if (p = e[0].params.dctr, f.isStr(p) && 0 < p.length) {
                            var m = p.split("|");
                            p = "", m.forEach(function(e) {
                                p += 0 < e.length ? e.trim() + "|" : "";
                            }), i = p.length, "|" === p.substring(i, i - 1) && (p = p.substring(0, i - 1)), 
                            s.site.ext = {
                                key_val: p.trim()
                            };
                        } else f.logWarn(y + ": Ignoring param : dctr with value : " + p + ", expects string-value, found empty or non-string value");
                        1 < l.length && f.logWarn(y + ": dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits");
                    } else f.logWarn(y + ": dctr value not found in 1st adunit, ignoring values from subsequent adunits");
                    return x(s), {
                        method: "POST",
                        url: "//hbopenbid.pubmatic.com/translator?source=prebid-client",
                        data: JSON.stringify(s)
                    };
                }
            },
            interpretResponse: function(e, t) {
                var i = [], n = v;
                try {
                    e.body && e.body.seatbid && f.isArray(e.body.seatbid) && (n = e.body.cur || n, e.body.seatbid.forEach(function(e) {
                        e.bid && f.isArray(e.bid) && e.bid.forEach(function(r) {
                            var a = {
                                requestId: r.impid,
                                cpm: (parseFloat(r.price) || 0).toFixed(2),
                                width: r.w,
                                height: r.h,
                                creativeId: r.crid || r.id,
                                dealId: r.dealid,
                                currency: n,
                                netRevenue: !1,
                                ttl: 300,
                                referrer: f.getTopWindowUrl(),
                                ad: r.adm
                            }, e = JSON.parse(t.data);
                            e.imp && 0 < e.imp.length && e.imp.forEach(function(e) {
                                r.impid === e.id && e.hasOwnProperty("video") && (a.mediaType = "video", a.width = r.hasOwnProperty("w") ? r.w : e.video.w, 
                                a.height = r.hasOwnProperty("h") ? r.h : e.video.h, a.vastXml = r.adm);
                            }), r.ext && r.ext.deal_channel && (a.dealChannel = d[r.ext.deal_channel] || null), 
                            i.push(a);
                        });
                    }));
                } catch (e) {
                    f.logError(e);
                }
                return i;
            },
            getUserSyncs: function(e, r, a) {
                var t = "//ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=" + S;
                if (a && (t += "&gdpr=" + (a.gdprApplies ? 1 : 0), t += "&gdpr_consent=" + encodeURIComponent(a.consentString || "")), 
                e.iframeEnabled) return [ {
                    type: "iframe",
                    url: t
                } ];
                f.logWarn("PubMatic: Please enable iframe based user sync.");
            },
            transformBidParams: function(e, r) {
                return f.convertTypes({
                    publisherId: "string",
                    adSlot: "string"
                }, e);
            }
        };
        (0, t.registerBidder)(l);
    },
    454: function(e, r) {}
}, [ 452 ]);

pbjsChunk([ 52 ], {
    502: function(e, r, t) {
        t(503), e.exports = t(504);
    },
    503: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.spec = r.SYNC_ENDPOINT = r.VIDEO_ENDPOINT = r.FASTLANE_ENDPOINT = void 0;
        var u = function(e, r) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, r) {
                var t = [], i = !0, n = !1, o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (t.push(a.value), 
                    !r || t.length !== r); i = !0) ;
                } catch (e) {
                    n = !0, o = e;
                } finally {
                    try {
                        !i && s.return && s.return();
                    } finally {
                        if (n) throw o;
                    }
                }
                return t;
            }(e, r);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        r.hasVideoMediaType = c, r.masSizeOrdering = h, r.determineRubiconVideoSizeId = I, 
        r.resetUserSync = function() {
            A = !1;
        };
        var l = function(e) {
            {
                if (e && e.__esModule) return e;
                var r = {};
                if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                return r.default = e, r;
            }
        }(t(0)), i = t(1), f = t(3), v = t(2);
        var y = "pbjs_lite_v1.36.0";
        var a = r.FASTLANE_ENDPOINT = "//fastlane.rubiconproject.com/a/api/fastlane.json", s = r.VIDEO_ENDPOINT = "//fastlane-adv.rubiconproject.com/v1/auction/video", n = r.SYNC_ENDPOINT = "https://eus.rubiconproject.com/usync.html", g = {
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
            195: "600x300",
            198: "640x360",
            199: "640x200",
            213: "1030x590",
            214: "980x360",
            229: "320x180",
            232: "580x400",
            257: "400x600"
        };
        l._each(g, function(e, r) {
            return g[e] = r;
        });
        var d = r.spec = {
            code: "rubicon",
            aliases: [ "rubiconLite" ],
            supportedMediaTypes: [ v.BANNER, v.VIDEO ],
            isBidRequestValid: function(e) {
                return "object" === p(e.params) && (!!/^\d+$/.test(e.params.accountId) && !!_(e, !0));
            },
            buildRequests: function(e, o) {
                var r = [], t = e.filter(function(e) {
                    return "video" === _(e);
                }).map(function(e) {
                    e.startTime = new Date().getTime();
                    var r = e.params, t = x(e, "video"), i = {
                        page_url: b(e, o),
                        resolution: m(),
                        account_id: r.accountId,
                        integration: y,
                        "x_source.tid": e.transactionId,
                        timeout: o.timeout - (Date.now() - o.auctionStart + 500),
                        stash_creatives: !0,
                        slots: []
                    }, n = {
                        site_id: r.siteId,
                        zone_id: r.zoneId,
                        position: "atf" === r.position || "btf" === r.position ? r.position : "unknown",
                        floor: .01 < parseFloat(r.floor) ? r.floor : .01,
                        element_id: e.adUnitCode,
                        name: e.adUnitCode,
                        width: t[0],
                        height: t[1],
                        size_id: I(e)
                    };
                    return r.video && (i.ae_pass_through_parameters = r.video.aeParams, n.language = r.video.language), 
                    r.inventory && "object" === p(r.inventory) && (n.inventory = r.inventory), r.keywords && Array.isArray(r.keywords) && (n.keywords = r.keywords), 
                    r.visitor && "object" === p(r.visitor) && (n.visitor = r.visitor), i.slots.push(n), 
                    o.gdprConsent && ("boolean" == typeof o.gdprConsent.gdprApplies && (i.gdpr = Number(o.gdprConsent.gdprApplies)), 
                    i.gdpr_consent = o.gdprConsent.consentString), {
                        method: "POST",
                        url: s,
                        data: i,
                        bidRequest: e
                    };
                });
                if (!0 !== f.config.getConfig("rubicon.singleRequest")) r = t.concat(e.filter(function(e) {
                    return "banner" === _(e);
                }).map(function(e) {
                    var i = d.createSlotParams(e, o);
                    return {
                        method: "GET",
                        url: a,
                        data: d.getOrderedParams(i).reduce(function(e, r) {
                            var t = i[r];
                            return l.isStr(t) && "" !== t || l.isNumber(t) ? "" + e + r + "=" + encodeURIComponent(t) + "&" : e;
                        }, "") + "slots=1&rand=" + Math.random(),
                        bidRequest: e
                    };
                })); else {
                    var n = e.filter(function(e) {
                        return "banner" === _(e);
                    }).reduce(function(e, r) {
                        return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e;
                    }, {});
                    r = t.concat(Object.keys(n).map(function(e) {
                        var r = n[e];
                        10 < r.length && (l.logWarn("Rubicon bid adapter Warning: single request mode has a limit of 10 bids: " + (r.length - 10) + " bids were not sent"), 
                        r = r.slice(0, 10));
                        var i = d.combineSlotUrlParams(r.map(function(e) {
                            return d.createSlotParams(e, o);
                        }));
                        return {
                            method: "GET",
                            url: a,
                            data: d.getOrderedParams(i).reduce(function(e, r) {
                                var t = i[r];
                                return l.isStr(t) && "" !== t || l.isNumber(t) ? "" + e + r + "=" + encodeURIComponent(t) + "&" : e;
                            }, "") + "slots=" + r.length + "&rand=" + Math.random(),
                            bidRequest: r
                        };
                    }));
                }
                return r;
            },
            getOrderedParams: function(e) {
                var r = /^tg_v/, t = /^tg_i/, i = [ "account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "rf", "dt.id", "dt.keyv", "dt.pref", "p_geo.latitude", "p_geo.longitude", "kw" ].concat(Object.keys(e).filter(function(e) {
                    return r.test(e);
                })).concat(Object.keys(e).filter(function(e) {
                    return t.test(e);
                })).concat([ "tk_flint", "x_source.tid", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key" ]);
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
                var t = e.params, i = x(e, "banner"), n = t.latLong || [], o = u(n, 2), a = o[0], s = o[1], d = {
                    account_id: t.accountId,
                    site_id: t.siteId,
                    zone_id: t.zoneId,
                    size_id: i[0],
                    alt_size_ids: i.slice(1).join(",") || void 0,
                    p_pos: "atf" === t.position || "btf" === t.position ? t.position : "unknown",
                    rp_floor: .01 < (t.floor = parseFloat(t.floor)) ? t.floor : .01,
                    rp_secure: "https:" === location.protocol ? "1" : "0",
                    tk_flint: y,
                    "x_source.tid": e.transactionId,
                    p_screen_res: m(),
                    kw: Array.isArray(t.keywords) ? t.keywords.join(",") : "",
                    tk_user_key: t.userId,
                    "p_geo.latitude": isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                    "p_geo.longitude": isNaN(parseFloat(s)) ? void 0 : parseFloat(s).toFixed(4),
                    "tg_fl.eid": e.code,
                    rf: b(e, r)
                };
                r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (d.gdpr = Number(r.gdprConsent.gdprApplies)), 
                d.gdpr_consent = r.gdprConsent.consentString), null !== t.visitor && "object" === p(t.visitor) && Object.keys(t.visitor).forEach(function(e) {
                    null != t.visitor[e] && (d["tg_v." + e] = t.visitor[e].toString());
                }), null !== t.inventory && "object" === p(t.inventory) && Object.keys(t.inventory).forEach(function(e) {
                    null != t.inventory[e] && (d["tg_i." + e] = t.inventory[e].toString());
                });
                var c = function() {
                    var e = (r = window.DigiTrust && (f.config.getConfig("digiTrustId") || window.DigiTrust.getUser({
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
                return Object.keys(c).forEach(function(e) {
                    d[e] = c[e];
                }), d;
            },
            interpretResponse: function(d, e) {
                var c = e.bidRequest;
                if (!(d = d.body) || "object" !== (void 0 === d ? "undefined" : p(d))) return [];
                var r = d.ads;
                return "object" !== (void 0 === c ? "undefined" : p(c)) || Array.isArray(c) || "video" !== _(c) || "object" !== (void 0 === r ? "undefined" : p(r)) || (r = r[c.adUnitCode]), 
                !Array.isArray(r) || r.length < 1 ? [] : r.reduce(function(e, r, t) {
                    if ("ok" !== r.status) return e;
                    var i, n = Array.isArray(c) ? c[t] : c;
                    if (n && "object" === (void 0 === n ? "undefined" : p(n))) {
                        var o = {
                            requestId: n.bidId,
                            currency: "USD",
                            creativeId: r.creative_id || (r.network || "") + "-" + (r.advertiser || ""),
                            cpm: r.cpm || 0,
                            dealId: r.deal,
                            ttl: 300,
                            netRevenue: f.config.getConfig("rubicon.netRevenue") || !1,
                            rubicon: {
                                advertiserId: r.advertiser,
                                networkId: r.network
                            }
                        };
                        if (r.creative_type && (o.mediaType = r.creative_type), r.creative_type === v.VIDEO) o.width = n.params.video.playerWidth, 
                        o.height = n.params.video.playerHeight, o.vastUrl = r.creative_depot_url, o.impression_id = r.impression_id, 
                        o.videoCacheKey = r.impression_id; else {
                            o.ad = (i = r.script, "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='" + r.impression_id + "'>\n<script type='text/javascript'>" + i + "<\/script>\n</div>\n</body>\n</html>");
                            var a = g[r.size_id].split("x").map(function(e) {
                                return Number(e);
                            }), s = u(a, 2);
                            o.width = s[0], o.height = s[1];
                        }
                        o.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce(function(e, r) {
                            return e[r.key] = r.values[0], e;
                        }, {
                            rpfl_elemid: n.adUnitCode
                        }), e.push(o);
                    } else l.logError("Rubicon bid adapter Error: bidRequest undefined at index position:" + t, c, d);
                    return e;
                }, []).sort(function(e, r) {
                    return (r.cpm || 0) - (e.cpm || 0);
                });
            },
            getUserSyncs: function(e, r, t) {
                if (!A && e.iframeEnabled) {
                    var i = "";
                    return t && "string" == typeof t.consentString && ("boolean" == typeof t.gdprApplies ? i += "?gdpr=" + Number(t.gdprApplies) + "&gdpr_consent=" + t.consentString : i += "?gdpr_consent=" + t.consentString), 
                    A = !0, {
                        type: "iframe",
                        url: n + i
                    };
                }
            },
            transformBidParams: function(e, r) {
                return l.convertTypes({
                    accountId: "number",
                    siteId: "number",
                    zoneId: "number"
                }, e);
            }
        };
        function m() {
            return [ window.screen.width, window.screen.height ].join("x");
        }
        function b(e, r) {
            var t = f.config.getConfig("pageUrl");
            return e.params.referrer ? t = e.params.referrer : t || (t = r.refererInfo.referer), 
            e.params.secure ? t.replace(/^http:/i, "https:") : t;
        }
        function x(e, r) {
            var t = e.params;
            if ("video" === r) {
                var i = [];
                return t.video && t.video.playerWidth && t.video.playerHeight ? i = [ t.video.playerWidth, t.video.playerHeight ] : Array.isArray(l.deepAccess(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? i = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (i = e.sizes[0]), 
                i;
            }
            var n = [];
            return Array.isArray(t.sizes) ? n = t.sizes : void 0 !== l.deepAccess(e, "mediaTypes.banner.sizes") ? n = o(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && 0 < e.sizes.length ? n = o(e.sizes) : l.logWarn("Warning: no sizes are setup or found"), 
            h(n);
        }
        function o(e) {
            return l.parseSizesInput(e).reduce(function(e, r) {
                var t = parseInt(g[r], 10);
                return t && e.push(t), e;
            }, []);
        }
        function c(e) {
            return "object" === p(l.deepAccess(e, "params.video")) && (e.mediaType === v.VIDEO || void 0 !== l.deepAccess(e, "mediaTypes." + v.VIDEO));
        }
        function _(e) {
            var r = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            if (c(e)) {
                if (void 0 !== l.deepAccess(e, "mediaTypes." + v.VIDEO)) {
                    if (-1 === [ "outstream", "instream" ].indexOf(l.deepAccess(e, "mediaTypes." + v.VIDEO + ".context"))) return void (r && l.logError("Rubicon bid adapter requires mediaTypes.video.context to be one of outstream or instream"));
                } else if (r && l.logWarn("Rubicon video bid requested using legacy `adUnit.mediaType = `video``\nThis is deprecated\nPlease move towards the PBJS standard using mediaTypes object!"), 
                isNaN(parseInt(l.deepAccess(e, "params.video.size_id")))) return void (r && l.logError("Rubicon bid adapter needs params.video.size_id to be declared and an integer in order to process a legacy video request using mediaType == video"));
                return x(e, "video").length < 2 ? void (r && l.logError("Rubicon bid adapter could not determine the playerSize of the video\nplayerWidth and playerHeight are inferred from one of params.playerWidth/playerHeight or mediaTypes.video.playerSize or adUnit.sizes, in that order")) : (r && l.logMessage("Rubicon bid adapter making video request for adUnit", e.adUnitCode), 
                "video");
            }
            return 0 === x(e, "banner").length ? void (r && l.logError("Rubicon bid adapter could not determine the sizes for a banner request\nThey are inferred from one of params.sizes or mediaTypes.banner.sizes or adUnit.sizes, in that order")) : (r && l.logMessage("Rubicon bid adapter making banner request for adUnit", e.adUnitCode), 
            "banner");
        }
        function h(e) {
            var n = [ 15, 2, 9 ];
            return e.sort(function(e, r) {
                var t = n.indexOf(e), i = n.indexOf(r);
                return -1 < t || -1 < i ? -1 === t ? 1 : -1 === i ? -1 : t - i : e - r;
            });
        }
        function I(e) {
            var r = parseInt(l.deepAccess(e, "params.video.size_id"));
            return isNaN(r) ? "outstream" === l.deepAccess(e, "mediaTypes." + v.VIDEO + ".context") ? 203 : 201 : r;
        }
        var A = !1;
        (0, i.registerBidder)(d);
    },
    504: function(e, r) {}
}, [ 502 ]);

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
                if (bannerObject.outstream) {
                    ebBidders.push({
                        bidder: "appnexus",
                        params: {
                            placementId: bannerObject.appnexusID,
                            video: {
                                playback_method: [ "click_to_play" ],
                                skippable: true
                            }
                        }
                    });
                } else {
                    ebBidders.push({
                        bidder: "appnexus",
                        params: {
                            placementId: bannerObject.appnexusID
                        }
                    });
                }
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
                    if (bannerObject.outstream) {
                        ebBidders.push({
                            bidder: "pubmatic",
                            params: {
                                adSlot: PubMaticAdslotName,
                                publisherId: bannerObject.pubmaticPublisherId,
                                video: {
                                    mimes: [ "video/mp4" ],
                                    playbackmethod: 3,
                                    skippable: true
                                }
                            }
                        });
                    } else {
                        ebBidders.push({
                            bidder: "pubmatic",
                            params: {
                                adSlot: PubMaticAdslotName,
                                publisherId: bannerObject.pubmaticPublisherId
                            }
                        });
                    }
                }
            }
            if (typeof bannerObject.rubiconZone !== "undefined") {
                console.log("prebid: add rubicon as bidder");
                if (bannerObject.outstream) {
                    ebBidders.push({
                        bidder: "rubicon",
                        params: {
                            accountId: bannerObject.rubiconAccountId,
                            siteId: bannerObject.rubiconSiteID,
                            video: {
                                language: "da"
                            },
                            zoneId: bannerObject.rubiconZone
                        }
                    });
                } else {
                    ebBidders.push({
                        bidder: "rubicon",
                        params: {
                            accountId: bannerObject.rubiconAccountId,
                            siteId: bannerObject.rubiconSiteID,
                            zoneId: bannerObject.rubiconZone
                        }
                    });
                }
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
                if (banner.outstream) {
                    adUnits.push({
                        bids: bidders,
                        code: banner.targetId,
                        mediaTypes: {
                            video: {
                                context: "outstream",
                                playerSize: banner.outstreamSize
                            }
                        },
                        sizes: banner.sizes
                    });
                } else {
                    adUnits.push({
                        bids: bidders,
                        code: banner.targetId,
                        sizes: banner.sizes
                    });
                }
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