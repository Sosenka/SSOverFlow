
function Spying(){

window.socketService = window.injector.get('socketService'); window.routeProvider = window.injector.get('routeProvider');

socketService.emit(routeProvider.GET_CHARACTER_VILLAGES, {}, function(data){
	 for (i = 0; i < data.villages.length; i++){
		 if (data.villages[i].character_name == null){
       var lista = new Array(data.villages.length);
			 lista[i] = data.villages[i].id;
         socketService.emit(routeProvider.SCOUTING_RECRUIT, {village_id: lista[i], slot:1}, function(data){console.log(data)});
         socketService.emit(routeProvider.SCOUTING_RECRUIT, {village_id: lista[i], slot:2}, function(data){console.log(data)});
         socketService.emit(routeProvider.SCOUTING_RECRUIT, {village_id: lista[i], slot:3}, function(data){console.log(data)});
         socketService.emit(routeProvider.SCOUTING_RECRUIT, {village_id: lista[i], slot:4}, function(data){console.log(data)});
         socketService.emit(routeProvider.SCOUTING_RECRUIT, {village_id: lista[i], slot:5}, function(data){console.log(data)});
		}
	}
});
}
/*! tw2overflow.min.js@1.0.1 | Licence MIT */ ! function(a, b) {
    define("Lockr", function(a, b) {
        "use strict";
        return b.prefix = "", b._getPrefixedKey = function(a, b) {
            return b = b || {}, b.noPrefix ? a : this.prefix + a
        }, b.set = function(a, b, c) {
            var d = this._getPrefixedKey(a, c);
            try {
                localStorage.setItem(d, JSON.stringify({
                    data: b
                }))
            } catch (a) {}
        }, b.get = function(a, b, c) {
            var d, e = this._getPrefixedKey(a, c);
            try {
                d = JSON.parse(localStorage.getItem(e))
            } catch (a) {
                d = localStorage[e] ? {
                    data: localStorage.getItem(e)
                } : null
            }
            return null === d ? b : "object" == typeof d && void 0 !== d.data ? d.data : b
        }, b
    }(a, {}))
}(this),
function() {
    var a, b, c, d = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    };
    a = function() {
        function a() {
            this.translate = d(this.translate, this), this.data = {
                values: {},
                contexts: []
            }, this.globalContext = {}
        }
        return a.prototype.translate = function(a, b, c, d, e) {
            var f, g, h, i;
            return null == e && (e = this.globalContext), h = function(a) {
                var b;
                return "function" === (b = typeof a) || "object" === b && !!a
            }, h(b) ? (f = null, i = null, g = b, e = c || this.globalContext) : "number" == typeof b ? (f = null, i = b, g = c, e = d || this.globalContext) : (f = b, "number" == typeof c ? (i = c, g = d, e = e) : (i = null, g = c, e = d || this.globalContext)), h(a) ? (h(a.i18n) && (a = a.i18n), this.translateHash(a, e)) : this.translateText(a, i, g, e, f)
        }, a.prototype.add = function(a) {
            var b, c, d, e, f, g, h, i;
            if (null != a.values) {
                g = a.values;
                for (c in g) d = g[c], this.data.values[c] = d
            }
            if (null != a.contexts) {
                for (h = a.contexts, i = [], e = 0, f = h.length; e < f; e++) b = h[e], i.push(this.data.contexts.push(b));
                return i
            }
        }, a.prototype.setContext = function(a, b) {
            return this.globalContext[a] = b
        }, a.prototype.clearContext = function(a) {
            return this.lobalContext[a] = null
        }, a.prototype.reset = function() {
            return this.data = {
                values: {},
                contexts: []
            }, this.globalContext = {}
        }, a.prototype.resetData = function() {
            return this.data = {
                values: {},
                contexts: []
            }
        }, a.prototype.resetContext = function() {
            return this.globalContext = {}
        }, a.prototype.translateHash = function(a, b) {
            var c, d;
            for (c in a) "string" == typeof(d = a[c]) && (a[c] = this.translateText(d, null, null, b));
            return a
        }, a.prototype.translateText = function(a, b, c, d, e) {
            var f, g;
            return null == d && (d = this.globalContext), null == this.data ? this.useOriginalText(e || a, b, c) : (f = this.getContextData(this.data, d), null != f && (g = this.findTranslation(a, b, c, f.values, e)), null == g && (g = this.findTranslation(a, b, c, this.data.values, e)), null == g ? this.useOriginalText(e || a, b, c) : g)
        }, a.prototype.findTranslation = function(a, b, c, d) {
            var e, f, g, h, i;
            if (null == (g = d[a])) return null;
            if (null == b) {
                if ("string" == typeof g) return this.applyFormatting(g, b, c)
            } else if (g instanceof Array || g.length)
                for (h = 0, i = g.length; h < i; h++)
                    if (f = g[h], (b >= f[0] || null === f[0]) && (b <= f[1] || null === f[1])) return e = this.applyFormatting(f[2].replace("-%n", String(-b)), b, c), this.applyFormatting(e.replace("%n", String(b)), b, c);
            return null
        }, a.prototype.getContextData = function(a, b) {
            var c, d, e, f, g, h, i, j;
            if (null == a.contexts) return null;
            for (i = a.contexts, g = 0, h = i.length; g < h; g++) {
                c = i[g], d = !0, j = c.matches;
                for (e in j) f = j[e], d = d && f === b[e];
                if (d) return c
            }
            return null
        }, a.prototype.useOriginalText = function(a, b, c) {
            return null == b ? this.applyFormatting(a, b, c) : this.applyFormatting(a.replace("%n", String(b)), b, c)
        }, a.prototype.applyFormatting = function(a, b, c) {
            var d, e;
            for (d in c) e = new RegExp("%{" + d + "}", "g"), a = a.replace(e, c[d]);
            return a
        }, a
    }(), c = new a, b = c.translate, b.translator = c, b.create = function(c) {
        var d;
        return d = new a, null != c && d.add(c), d.translate.create = b.create, d.translate
    }, define("i18n", function() {
        return b
    })
}.call(this),
    function(a) {
        define("ejs", function() {
            return function a(b, c, d) {
                function e(g, h) {
                    if (!c[g]) {
                        if (!b[g]) {
                            var i = "function" == typeof require && require;
                            if (!h && i) return i(g, !0);
                            if (f) return f(g, !0);
                            var j = new Error("Cannot find module '" + g + "'");
                            throw j.code = "MODULE_NOT_FOUND", j
                        }
                        var k = c[g] = {
                            exports: {}
                        };
                        b[g][0].call(k.exports, function(a) {
                            var c = b[g][1][a];
                            return e(c || a)
                        }, k, k.exports, a, b, c, d)
                    }
                    return c[g].exports
                }
                for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
                return e
            }({
                1: [function(a, b, c) {
                    "use strict";

                    function d(a, b) {
                        var d;
                        if ("/" == a.charAt(0)) d = c.resolveInclude(a.replace(/^\/*/, ""), b.root || "/", !0);
                        else {
                            if (!b.filename) throw new Error("`include` use relative path requires the 'filename' option.");
                            d = c.resolveInclude(a, b.filename)
                        }
                        return d
                    }

                    function e(a, b) {
                        var d, e = a.filename,
                            f = arguments.length > 1;
                        if (a.cache) {
                            if (!e) throw new Error("cache option requires a filename");
                            if (d = c.cache.get(e)) return d;
                            f || (b = g(e).toString().replace(v, ""))
                        } else if (!f) {
                            if (!e) throw new Error("Internal EJS error: no file name or template provided");
                            b = g(e).toString().replace(v, "")
                        }
                        return d = c.compile(b, a), a.cache && c.cache.set(e, d), d
                    }

                    function f(a, b, c) {
                        var d;
                        try {
                            d = e(a)(b)
                        } catch (a) {
                            return c(a)
                        }
                        return c(null, d)
                    }

                    function g(a) {
                        return c.fileLoader(a)
                    }

                    function h(a, b) {
                        var c = o.shallowCopy({}, b);
                        return c.filename = d(a, c), e(c)
                    }

                    function i(a, b) {
                        var c, e, f = o.shallowCopy({}, b);
                        c = d(a, f), e = g(c).toString().replace(v, ""), f.filename = c;
                        var h = new l(e, f);
                        return h.generateSource(), {
                            source: h.source,
                            filename: c,
                            template: e
                        }
                    }

                    function j(a, b, c, d, e) {
                        var f = b.split("\n"),
                            g = Math.max(d - 3, 0),
                            h = Math.min(f.length, d + 3),
                            i = e(c),
                            j = f.slice(g, h).map(function(a, b) {
                                var c = b + g + 1;
                                return (c == d ? " >> " : "    ") + c + "| " + a
                            }).join("\n");
                        throw a.path = i, a.message = (i || "ejs") + ":" + d + "\n" + j + "\n\n" + a.message, a
                    }

                    function k(a) {
                        return a.replace(/;(\s*$)/, "$1")
                    }

                    function l(a, b) {
                        b = b || {};
                        var d = {};
                        this.templateText = a, this.mode = null, this.truncate = !1, this.currentLine = 1, this.source = "", this.dependencies = [], d.client = b.client || !1, d.escapeFunction = b.escape || o.escapeXML, d.compileDebug = !1 !== b.compileDebug, d.debug = !!b.debug, d.filename = b.filename, d.delimiter = b.delimiter || c.delimiter || r, d.strict = b.strict || !1, d.context = b.context, d.cache = b.cache || !1, d.rmWhitespace = b.rmWhitespace, d.root = b.root, d.localsName = b.localsName || c.localsName || s, d.strict ? d._with = !1 : d._with = void 0 === b._with || b._with, this.opts = d, this.regex = this.createRegex()
                    }
                    var m = a("fs"),
                        n = a("path"),
                        o = a("./utils"),
                        p = !1,
                        q = a("../package.json").version,
                        r = "%",
                        s = "locals",
                        t = ["delimiter", "scope", "context", "debug", "compileDebug", "client", "_with", "rmWhitespace", "strict", "filename"],
                        u = t.concat("cache"),
                        v = /^\uFEFF/;
                    c.cache = o.cache, c.fileLoader = m.readFileSync, c.localsName = s, c.resolveInclude = function(a, b, c) {
                        var d = n.dirname,
                            e = n.extname,
                            f = n.resolve,
                            g = f(c ? b : d(b), a);
                        return e(a) || (g += ".ejs"), g
                    }, c.compile = function(a, b) {
                        var c;
                        return b && b.scope && (p || (console.warn("`scope` option is deprecated and will be removed in EJS 3"), p = !0), b.context || (b.context = b.scope), delete b.scope), c = new l(a, b), c.compile()
                    }, c.render = function(a, b, c) {
                        var d = b || {},
                            f = c || {};
                        return 2 == arguments.length && o.shallowCopyFromList(f, d, t), e(f, a)(d)
                    }, c.renderFile = function() {
                        var a, b = arguments[0],
                            c = arguments[arguments.length - 1],
                            d = {
                                filename: b
                            };
                        return arguments.length > 2 ? (a = arguments[1], 3 === arguments.length ? a.settings && a.settings["view options"] ? o.shallowCopyFromList(d, a.settings["view options"], u) : o.shallowCopyFromList(d, a, u) : o.shallowCopy(d, arguments[2]), d.filename = b) : a = {}, f(d, a, c)
                    }, c.clearCache = function() {
                        c.cache.reset()
                    }, l.modes = {
                        EVAL: "eval",
                        ESCAPED: "escaped",
                        RAW: "raw",
                        COMMENT: "comment",
                        LITERAL: "literal"
                    }, l.prototype = {
                        createRegex: function() {
                            var a = "(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",
                                b = o.escapeRegExpChars(this.opts.delimiter);
                            return a = a.replace(/%/g, b), new RegExp(a)
                        },
                        compile: function() {
                            var a, b, c = this.opts,
                                d = "",
                                e = "",
                                f = c.escapeFunction;
                            this.source || (this.generateSource(), d += "  var __output = [], __append = __output.push.bind(__output);\n", !1 !== c._with && (d += "  with (" + c.localsName + " || {}) {\n", e += "  }\n"), e += '  return __output.join("");\n', this.source = d + this.source + e), a = c.compileDebug ? "var __line = 1\n  , __lines = " + JSON.stringify(this.templateText) + "\n  , __filename = " + (c.filename ? JSON.stringify(c.filename) : "undefined") + ";\ntry {\n" + this.source + "} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n" : this.source, c.debug && console.log(a), c.client && (a = "escapeFn = escapeFn || " + f.toString() + ";\n" + a, c.compileDebug && (a = "rethrow = rethrow || " + j.toString() + ";\n" + a)), c.strict && (a = '"use strict";\n' + a);
                            try {
                                b = new Function(c.localsName + ", escapeFn, include, rethrow", a)
                            } catch (a) {
                                throw a instanceof SyntaxError && (c.filename && (a.message += " in " + c.filename), a.message += " while compiling ejs\n\n", a.message += "If the above error is not helpful, you may want to try EJS-Lint:\n", a.message += "https://github.com/RyanZim/EJS-Lint"), a
                            }
                            if (c.client) return b.dependencies = this.dependencies, b;
                            var g = function(a) {
                                var d = function(b, d) {
                                    var e = o.shallowCopy({}, a);
                                    return d && (e = o.shallowCopy(e, d)), h(b, c)(e)
                                };
                                return b.apply(c.context, [a || {}, f, d, j])
                            };
                            return g.dependencies = this.dependencies, g
                        },
                        generateSource: function() {
                            this.opts.rmWhitespace && (this.templateText = this.templateText.replace(/\r/g, "").replace(/^\s+|\s+$/gm, "")), this.templateText = this.templateText.replace(/[ \t]*<%_/gm, "<%_").replace(/_%>[ \t]*/gm, "_%>");
                            var a = this,
                                b = this.parseTemplateText(),
                                d = this.opts.delimiter;
                            b && b.length && b.forEach(function(e, f) {
                                var g, h, j, k, l, m;
                                if (0 === e.indexOf("<" + d) && 0 !== e.indexOf("<" + d + d) && (h = b[f + 2]) != d + ">" && h != "-" + d + ">" && h != "_" + d + ">") throw new Error('Could not find matching close tag for "' + e + '".');
                                if ((j = e.match(/^\s*include\s+(\S+)/)) && (g = b[f - 1]) && (g == "<" + d || g == "<" + d + "-" || g == "<" + d + "_")) return k = o.shallowCopy({}, a.opts), l = i(j[1], k), m = a.opts.compileDebug ? "    ; (function(){\n      var __line = 1\n      , __lines = " + JSON.stringify(l.template) + "\n      , __filename = " + JSON.stringify(l.filename) + ";\n      try {\n" + l.source + "      } catch (e) {\n        rethrow(e, __lines, __filename, __line);\n      }\n    ; }).call(this)\n" : "    ; (function(){\n" + l.source + "    ; }).call(this)\n", a.source += m, void a.dependencies.push(c.resolveInclude(j[1], k.filename));
                                a.scanLine(e)
                            })
                        },
                        parseTemplateText: function() {
                            for (var a, b = this.templateText, c = this.regex, d = c.exec(b), e = []; d;) a = d.index, 0 !== a && (e.push(b.substring(0, a)), b = b.slice(a)), e.push(d[0]), b = b.slice(d[0].length), d = c.exec(b);
                            return b && e.push(b), e
                        },
                        scanLine: function(a) {
                            function b() {
                                c.truncate ? (a = a.replace(/^(?:\r\n|\r|\n)/, ""), c.truncate = !1) : c.opts.rmWhitespace && (a = a.replace(/^\n/, "")), a && (a = a.replace(/\\/g, "\\\\"), a = a.replace(/\n/g, "\\n"), a = a.replace(/\r/g, "\\r"), a = a.replace(/"/g, '\\"'), c.source += '    ; __append("' + a + '")\n')
                            }
                            var c = this,
                                d = this.opts.delimiter,
                                e = 0;
                            switch (e = a.split("\n").length - 1, a) {
                                case "<" + d:
                                case "<" + d + "_":
                                    this.mode = l.modes.EVAL;
                                    break;
                                case "<" + d + "=":
                                    this.mode = l.modes.ESCAPED;
                                    break;
                                case "<" + d + "-":
                                    this.mode = l.modes.RAW;
                                    break;
                                case "<" + d + "#":
                                    this.mode = l.modes.COMMENT;
                                    break;
                                case "<" + d + d:
                                    this.mode = l.modes.LITERAL, this.source += '    ; __append("' + a.replace("<" + d + d, "<" + d) + '")\n';
                                    break;
                                case d + d + ">":
                                    this.mode = l.modes.LITERAL, this.source += '    ; __append("' + a.replace(d + d + ">", d + ">") + '")\n';
                                    break;
                                case d + ">":
                                case "-" + d + ">":
                                case "_" + d + ">":
                                    this.mode == l.modes.LITERAL && b(), this.mode = null, this.truncate = 0 === a.indexOf("-") || 0 === a.indexOf("_");
                                    break;
                                default:
                                    if (this.mode) {
                                        switch (this.mode) {
                                            case l.modes.EVAL:
                                            case l.modes.ESCAPED:
                                            case l.modes.RAW:
                                                a.lastIndexOf("//") > a.lastIndexOf("\n") && (a += "\n")
                                        }
                                        switch (this.mode) {
                                            case l.modes.EVAL:
                                                this.source += "    ; " + a + "\n";
                                                break;
                                            case l.modes.ESCAPED:
                                                this.source += "    ; __append(escapeFn(" + k(a) + "))\n";
                                                break;
                                            case l.modes.RAW:
                                                this.source += "    ; __append(" + k(a) + ")\n";
                                                break;
                                            case l.modes.COMMENT:
                                                break;
                                            case l.modes.LITERAL:
                                                b()
                                        }
                                    } else b()
                            }
                            c.opts.compileDebug && e && (this.currentLine += e, this.source += "    ; __line = " + this.currentLine + "\n")
                        }
                    }, c.escapeXML = o.escapeXML, c.__express = c.renderFile, a.extensions && (a.extensions[".ejs"] = function(a, b) {
                        var d = b || a.filename,
                            e = {
                                filename: d,
                                client: !0
                            },
                            f = g(d).toString(),
                            h = c.compile(f, e);
                        a._compile("module.exports = " + h.toString() + ";", d)
                    }), c.VERSION = q, c.name = "ejs", "undefined" != typeof window && (window.ejs = c)
                }, {
                    "../package.json": 6,
                    "./utils": 2,
                    fs: 3,
                    path: 4
                }],
                2: [function(a, b, c) {
                    "use strict";

                    function d(a) {
                        return f[a] || a
                    }
                    var e = /[|\\{}()[\]^$+*?.]/g;
                    c.escapeRegExpChars = function(a) {
                        return a ? String(a).replace(e, "\\$&") : ""
                    };
                    var f = {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&#34;",
                            "'": "&#39;"
                        },
                        g = /[&<>\'"]/g;
                    c.escapeXML = function(a) {
                        return void 0 == a ? "" : String(a).replace(g, d)
                    }, c.escapeXML.toString = function() {
                        return Function.prototype.toString.call(this) + ';\nvar _ENCODE_HTML_RULES = {\n      "&": "&amp;"\n    , "<": "&lt;"\n    , ">": "&gt;"\n    , \'"\': "&#34;"\n    , "\'": "&#39;"\n    }\n  , _MATCH_HTML = /[&<>\'"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n'
                    }, c.shallowCopy = function(a, b) {
                        b = b || {};
                        for (var c in b) a[c] = b[c];
                        return a
                    }, c.shallowCopyFromList = function(a, b, c) {
                        for (var d = 0; d < c.length; d++) {
                            var e = c[d];
                            void 0 !== b[e] && (a[e] = b[e])
                        }
                        return a
                    }, c.cache = {
                        _data: {},
                        set: function(a, b) {
                            this._data[a] = b
                        },
                        get: function(a) {
                            return this._data[a]
                        },
                        reset: function() {
                            this._data = {}
                        }
                    }
                }, {}],
                3: [function(a, b, c) {}, {}],
                4: [function(a, b, c) {
                    (function(a) {
                        function b(a, b) {
                            for (var c = 0, d = a.length - 1; d >= 0; d--) {
                                var e = a[d];
                                "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--)
                            }
                            if (b)
                                for (; c--; c) a.unshift("..");
                            return a
                        }

                        function d(a, b) {
                            if (a.filter) return a.filter(b);
                            for (var c = [], d = 0; d < a.length; d++) b(a[d], d, a) && c.push(a[d]);
                            return c
                        }
                        var e = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
                            f = function(a) {
                                return e.exec(a).slice(1)
                            };
                        c.resolve = function() {
                            for (var c = "", e = !1, f = arguments.length - 1; f >= -1 && !e; f--) {
                                var g = f >= 0 ? arguments[f] : a.cwd();
                                if ("string" != typeof g) throw new TypeError("Arguments to path.resolve must be strings");
                                g && (c = g + "/" + c, e = "/" === g.charAt(0))
                            }
                            return c = b(d(c.split("/"), function(a) {
                                return !!a
                            }), !e).join("/"), (e ? "/" : "") + c || "."
                        }, c.normalize = function(a) {
                            var e = c.isAbsolute(a),
                                f = "/" === g(a, -1);
                            return a = b(d(a.split("/"), function(a) {
                                return !!a
                            }), !e).join("/"), a || e || (a = "."), a && f && (a += "/"), (e ? "/" : "") + a
                        }, c.isAbsolute = function(a) {
                            return "/" === a.charAt(0)
                        }, c.join = function() {
                            var a = Array.prototype.slice.call(arguments, 0);
                            return c.normalize(d(a, function(a, b) {
                                if ("string" != typeof a) throw new TypeError("Arguments to path.join must be strings");
                                return a
                            }).join("/"))
                        }, c.relative = function(a, b) {
                            function d(a) {
                                for (var b = 0; b < a.length && "" === a[b]; b++);
                                for (var c = a.length - 1; c >= 0 && "" === a[c]; c--);
                                return b > c ? [] : a.slice(b, c - b + 1)
                            }
                            a = c.resolve(a).substr(1), b = c.resolve(b).substr(1);
                            for (var e = d(a.split("/")), f = d(b.split("/")), g = Math.min(e.length, f.length), h = g, i = 0; i < g; i++)
                                if (e[i] !== f[i]) {
                                    h = i;
                                    break
                                }
                            for (var j = [], i = h; i < e.length; i++) j.push("..");
                            return j = j.concat(f.slice(h)), j.join("/")
                        }, c.sep = "/", c.delimiter = ":", c.dirname = function(a) {
                            var b = f(a),
                                c = b[0],
                                d = b[1];
                            return c || d ? (d && (d = d.substr(0, d.length - 1)), c + d) : "."
                        }, c.basename = function(a, b) {
                            var c = f(a)[2];
                            return b && c.substr(-1 * b.length) === b && (c = c.substr(0, c.length - b.length)), c
                        }, c.extname = function(a) {
                            return f(a)[3]
                        };
                        var g = "b" === "ab".substr(-1) ? function(a, b, c) {
                            return a.substr(b, c)
                        } : function(a, b, c) {
                            return b < 0 && (b = a.length + b), a.substr(b, c)
                        }
                    }).call(this, a("_process"))
                }, {
                    _process: 5
                }],
                5: [function(a, b, c) {
                    function d() {
                        throw new Error("setTimeout has not been defined")
                    }

                    function e() {
                        throw new Error("clearTimeout has not been defined")
                    }

                    function f(a) {
                        if (l === setTimeout) return setTimeout(a, 0);
                        if ((l === d || !l) && setTimeout) return l = setTimeout, setTimeout(a, 0);
                        try {
                            return l(a, 0)
                        } catch (b) {
                            try {
                                return l.call(null, a, 0)
                            } catch (b) {
                                return l.call(this, a, 0)
                            }
                        }
                    }

                    function g(a) {
                        if (m === clearTimeout) return clearTimeout(a);
                        if ((m === e || !m) && clearTimeout) return m = clearTimeout, clearTimeout(a);
                        try {
                            return m(a)
                        } catch (b) {
                            try {
                                return m.call(null, a)
                            } catch (b) {
                                return m.call(this, a)
                            }
                        }
                    }

                    function h() {
                        q && o && (q = !1, o.length ? p = o.concat(p) : r = -1, p.length && i())
                    }

                    function i() {
                        if (!q) {
                            var a = f(h);
                            q = !0;
                            for (var b = p.length; b;) {
                                for (o = p, p = []; ++r < b;) o && o[r].run();
                                r = -1, b = p.length
                            }
                            o = null, q = !1, g(a)
                        }
                    }

                    function j(a, b) {
                        this.fun = a, this.array = b
                    }

                    function k() {}
                    var l, m, n = b.exports = {};
                    ! function() {
                        try {
                            l = "function" == typeof setTimeout ? setTimeout : d
                        } catch (a) {
                            l = d
                        }
                        try {
                            m = "function" == typeof clearTimeout ? clearTimeout : e
                        } catch (a) {
                            m = e
                        }
                    }();
                    var o, p = [],
                        q = !1,
                        r = -1;
                    n.nextTick = function(a) {
                        var b = new Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
                        p.push(new j(a, b)), 1 !== p.length || q || f(i)
                    }, j.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = k, n.addListener = k, n.once = k, n.off = k, n.removeListener = k, n.removeAllListeners = k, n.emit = k, n.binding = function(a) {
                        throw new Error("process.binding is not supported")
                    }, n.cwd = function() {
                        return "/"
                    }, n.chdir = function(a) {
                        throw new Error("process.chdir is not supported")
                    }, n.umask = function() {
                        return 0
                    }
                }, {}],
                6: [function(a, b, c) {
                    b.exports = {
                        name: "ejs",
                        description: "Embedded JavaScript templates",
                        keywords: ["template", "engine", "ejs"],
                        version: "2.5.6",
                        author: "Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",
                        contributors: ["Timothy Gu <timothygu99@gmail.com> (https://timothygu.github.io)"],
                        license: "Apache-2.0",
                        main: "./lib/ejs.js",
                        repository: {
                            type: "git",
                            url: "git://github.com/mde/ejs.git"
                        },
                        bugs: "https://github.com/mde/ejs/issues",
                        homepage: "https://github.com/mde/ejs",
                        dependencies: {},
                        devDependencies: {
                            browserify: "^13.0.1",
                            eslint: "^3.0.0",
                            "git-directory-deploy": "^1.5.1",
                            istanbul: "~0.4.3",
                            jake: "^8.0.0",
                            jsdoc: "^3.4.0",
                            "lru-cache": "^4.0.1",
                            mocha: "^3.0.2",
                            "uglify-js": "^2.6.2"
                        },
                        engines: {
                            node: ">=0.10.0"
                        },
                        scripts: {
                            test: "mocha",
                            lint: 'eslint "**/*.js" Jakefile',
                            coverage: "istanbul cover node_modules/mocha/bin/_mocha",
                            doc: "jake doc",
                            devdoc: "jake doc[dev]"
                        }
                    }
                }, {}]
            }, {}, [1])(1)
        }())
    }(),
    function(a, b) {
        function c(a) {
            a = parseInt(a, 10);
            var b = a + a / 2,
                c = a - a / 2;
            return Math.round(Math.random() * (b - c) + c)
        }

        function d(a) {
            return a = a.split(":"), a[0] = 60 * parseInt(a[0], 10) * 60, a[1] = 60 * parseInt(a[1], 10), a[2] = parseInt(a[2], 10), a.reduce(function(a, b) {
                return a + b
            })
        }

        function e(a, b) {
            var c = "success" === a ? r.MESSAGE_SUCCESS : r.MESSAGE_ERROR;
            n.$broadcast(c, {
                message: b
            })
        }

        function f(a) {
            return a.name + " (" + a.x + "|" + a.y + ")"
        }

        function g(a) {
            return /\s*\d{2,3}\|\d{2,3}\s*/.test(a)
        }

        function h(a) {
            return /^\s*([01][0-9]|2[0-3]):[0-5]\d:[0-5]\d(:\d{1,3})? (0[1-9]|[12][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}\s*$/.test(a)
        }

        function i(a) {
            var b = a.split(" "),
                c = b[0],
                d = b[1].split("/");
            return c + " " + d[1] + "/" + d[0] + "/" + d[2]
        }

        function j() {
            return Math.floor(16777216 * Math.random()).toString(16)
        }

        function k(a, b) {
            return !!$(a).parents(b).length
        }

        function l(a, b) {
            var c = a.trim().split(" "),
                d = c[0].split(":"),
                e = c[1].split("/"),
                f = d[0],
                g = d[1],
                h = d[2],
                i = d[3] || null,
                j = parseInt(e[0], 10) - 1,
                k = e[1],
                l = e[2],
                e = new Date(l, j, k, f, g, h, i);
            return e.getTime() + (b || 0)
        }

        function m(a, b) {
            return x("readableDateFilter")(a, null, n.GAME_TIMEZONE, n.GAME_TIME_OFFSET, b || "HH:mm:ss dd/MM/yyyy")
        }
        var n = angular.element(document).scope(),
            o = injector.get("modelDataService"),
            p = injector.get("socketService"),
            q = injector.get("routeProvider"),
            r = injector.get("eventTypeProvider"),
            s = injector.get("windowDisplayService"),
            t = injector.get("windowManagerService"),
            u = injector.get("hotkeys"),
            v = injector.get("armyService"),
            w = injector.get("villageService"),
            x = injector.get("$filter");
        define("TWOverflow/locale", ["conf/locale", "i18n"], function(a, b) {
            function c(a, b, c) {
                if (!d.hasOwnProperty(a)) return console.error("Language for module " + a + " not created");
                var e = Array.from(arguments).slice(1),
                    g = f[a];
                return d[a][g].apply(this, e)
            }
            var d = {},
                e = {},
                f = {},
                g = a.LANGUAGE.split("_")[0],
                h = function(a) {
                    for (var b in a) return b
                };
            return c.create = function(a, c, i) {
                if (d.hasOwnProperty(a)) return !1;
                d[a] = {};
                var j = c.hasOwnProperty(g),
                    k = c.hasOwnProperty(i);
                e[a] = k ? i : h(c), f[a] = j ? g : e[a];
                for (var l in c) d[a][l] = b.create({
                    values: c[l]
                })
            }, c.change = function(a, b) {
                d[a].hasOwnProperty(b) ? f[a] = b : (console.error("Language " + b + " of module " + a + " not created. Selection default (" + e[a] + ")"), f[a] = e[a])
            }, c.current = function(a) {
                return f[a]
            }, c.eachLang = function(a, b) {
                var c = d[a];
                for (var e in c) b(e, c[e]("langName"))
            }, c
        }), define("TWOverflow/ready", function() {
            return function(a) {
                var b = document.querySelector("#map");
                angular.element(b).scope().isInitialized ? a() : n.$on(r.MAP_INITIALIZED, a)
            }
        }), require(["TWOverflow/ready", "Lockr", "ejs"], function(a, b, c) {
            a(function() {
                var a = o.getSelectedCharacter();
                c.delimiter = "#", b.prefix = a.getId() + "_twOverflow_", u.add("esc", function() {
                    n.$broadcast(r.WINDOW_CLOSED)
                }, ["INPUT", "SELECT", "TEXTAREA"])
            })
        }), require(["TWOverflow/locale"], function(a) {
            a.create("common", {
                en: {
                    start: "Start",
                    pause: "Pause",
                    paused: "Paused",
                    status: "Status",
                    none: "None",
                    info: "Information",
                    settings: "Settings",
                    others: "Others",
                    villages: "Villages",
                    registers: "Registers",
                    filters: "Filters",
                    add: "Add",
                    waiting: "Waiting",
                    attack: "Attack",
                    support: "Support",
                    relocate: "Transfer",
                    activate: "Activate",
                    deactivate: "Disable",
                    units: "Units",
                    officers: "Officers",
                    origin: "Origin",
                    target: "Target",
                    headquarter: "Headquarters",
                    barracks: "Barracks",
                    tavern: "Tavern",
                    hospital: "Hospital",
                    preceptory: "Hall of Orders",
                    chapel: "Chapel",
                    church: "Church",
                    academy: "Academy",
                    rally_point: "Rally Point",
                    statue: "Statue",
                    market: "Market",
                    timber_camp: "Timber Camp",
                    clay_pit: "Clay Pit",
                    iron_mine: "Iron Mine",
                    farm: "Farm",
                    warehouse: "Warehouse",
                    wall: "Wall",
                    spear: "Spearman",
                    sword: "Swordsman",
                    axe: "Axe Fighter",
                    archer: "Archer",
                    light_cavalry: "Light Cavalry",
                    mounted_archer: "Mounted Archer",
                    heavy_cavalry: "Heavy Cavalry",
                    ram: "Ram",
                    catapult: "Catapult",
                    doppelsoldner: "Berserker",
                    trebuchet: "Trebuchet",
                    snob: "Nobleman",
                    knight: "Paladin"
                },
                pl: {
                    start: "Start",
                    pause: "Pause",
                    paused: "Zatrzymane",
                    status: "Status",
                    none: "Brak",
                    info: "Informacje",
                    settings: "Ustawienia",
                    others: "Inne",
                    villages: "Wioski",
                    registers: "Dziennik",
                    filters: "Filtry",
                    add: "Dodaj",
                    waiting: "Oczekujące",
                    attack: "Atak",
                    support: "Wsparcie",
                    relocate: "Przenieś",
                    activate: "Aktywuj",
                    deactivate: "Wyłącz",
                    units: "Jednostki",
                    officers: "Oficerowie",
                    origin: "Pochodzenie",
                    target: "Cel",
                    headquarter: "Ratusz",
                    barracks: "Koszary",
                    tavern: "Tawerna",
                    hospital: "Szpital",
                    preceptory: "Komturia",
                    chapel: "Kaplica",
                    church: "Kościół",
                    academy: "Akademia",
                    rally_point: "Plac",
                    statue: "Piedestał",
                    market: "Rynek",
                    timber_camp: "Tartak",
                    clay_pit: "Kopalnia gliny",
                    iron_mine: "Huta żelaza",
                    farm: "Farma",
                    warehouse: "Magazyn",
                    wall: "Mur",
                    spear: "Pikinier",
                    sword: "Miecznik",
                    axe: "Topornik",
                    archer: "Łucznik",
                    light_cavalry: "Lekki kawalerzysta",
                    mounted_archer: "Łucznik na koniu",
                    heavy_cavalry: "Ciężki kawalerzysta",
                    ram: "Taran",
                    catapult: "Katapulta",
                    doppelsoldner: "Berserker",
                    trebuchet: "Trebusz",
                    snob: "Szlachcic",
                    knight: "Rycerz"
                },
                pt: {
                    start: "Iniciar",
                    pause: "Pausar",
                    paused: "Pausado",
                    status: "Status",
                    none: "Nenhum",
                    info: "Informações",
                    settings: "Configurações",
                    others: "Outros",
                    villages: "Aldeias",
                    registers: "Registros",
                    filters: "Filtros",
                    add: "Adicionar",
                    waiting: "Em espera",
                    attack: "Ataque",
                    support: "Apoio",
                    relocate: "Transferência",
                    activate: "Ativar",
                    deactivate: "Desativar",
                    units: "Unidades",
                    officers: "Oficiais",
                    origin: "Origem",
                    target: "Alvo",
                    headquarter: "Edifício Principal",
                    barracks: "Quartel",
                    tavern: "Taverna",
                    hospital: "Hospital",
                    preceptory: "Salão das Ordens",
                    chapel: "Capela",
                    church: "Igreja",
                    academy: "Academia",
                    rally_point: "Ponto de Encontro",
                    statue: "Estátua",
                    market: "Mercado",
                    timber_camp: "Bosque",
                    clay_pit: "Poço de Argila",
                    iron_mine: "Mina de Ferro",
                    farm: "Fazenda",
                    warehouse: "Armazém",
                    wall: "Muralha",
                    spear: "Lanceiro",
                    sword: "Espadachim",
                    axe: "Viking",
                    archer: "Arqueiro",
                    light_cavalry: "Cavalaria Leve",
                    mounted_archer: "Arqueiro Montado",
                    heavy_cavalry: "Cavalaria Pesada",
                    ram: "Aríete",
                    catapult: "Catapulta",
                    doppelsoldner: "Berserker",
                    trebuchet: "Trabuco",
                    snob: "Nobre",
                    knight: "Paladino"
                }
            }, "en")
        }), define("TWOverflow/autoDeposit", ["TWOverflow/locale", "helper/time"], function(a, b) {
            var c = !1,
                d = !1,
                e = null,
                f = null,
                g = injector.get("resourceDepositService"),
                h = function() {
                    if (d) {
                        var a = i();
                        if (f - b.gameTime() < 0) return v(h);
                        if (!l(a)) {
                            if (j(a)) {
                                var c = k(a);
                                return t(c)
                            }
                            if (m(a)) {
                                var c = s(a);
                                return u(c)
                            }
                        }
                    }
                },
                i = function() {
                    return o.getSelectedCharacter().getResourceDeposit().getJobs()
                },
                j = function(a) {
                    for (var b in a)
                        if (1 === a[b].state) return !0;
                    return !1
                },
                k = function(a) {
                    for (var b in a)
                        if (1 === a[b].state) return a[b];
                    return !1
                },
                l = function(a) {
                    for (var b in a)
                        if (0 === a[b].state) return !0;
                    return !1
                },
                m = function(a) {
                    for (var b in a)
                        if (2 === a[b].state) return !0;
                    return !1
                },
                s = function(a) {
                    for (var b in a)
                        if (2 === a[b].state) return a[b];
                    return !1
                },
                t = function(a) {
                    p.emit(q.RESOURCE_DEPOSIT_COLLECT, {
                        job_id: a.id,
                        village_id: o.getSelectedVillage().getId()
                    })
                },
                u = function(a) {
                    p.emit(q.RESOURCE_DEPOSIT_START_JOB, {
                        job_id: a.id
                    })
                },
                v = function(a) {
                    p.emit(q.RESOURCE_DEPOSIT_GET_INFO, {}, function(b) {
                        g.updateJobData(b.jobs), f = 1e3 * b.time_next_reset, a && a()
                    })
                },
                w = {};
            return w.init = function() {
                a.create("deposit", {
                    en: {
                        title: "AutoDeposit",
                        description: "Automatic Resource Deposit/Second Village collector.",
                        activated: "Automatic Deposit activated",
                        deactivated: "Automatic Deposit deactivated"
                    },
                    pt: {
                        title: "AutoDeposit",
                        description: "Coletor automático para Depósito de Recursos/Segunda Aldeia.",
                        activated: "Depósito Automático ativado",
                        deactivated: "Depósito Automático desativado"
                    }
                }, "en"), c = !0, n.$on(r.RESOURCE_DEPOSIT_JOB_COLLECTED, h), n.$on(r.RESOURCE_DEPOSIT_JOBS_REROLLED, h)
            }, w.start = function() {
                d = !0, e = setInterval(h, 6e4), v(function() {
                    h()
                })
            }, w.stop = function() {
                d = !1, clearInterval(e)
            }, w.isRunning = function() {
                return d
            }, w.isInitialized = function() {
                return c
            }, w
        }), define("TWOverflow/autoDeposit/secondVillage", ["TWOverflow/autoDeposit", "helper/time"], function(a, b) {
            var c, d, e = !1,
                f = !1,
                g = !1,
                h = null,
                i = injector.get("secondVillageService"),
                j = function() {
                    if (!f) return !1;
                    var a = k();
                    return a ? (setTimeout(function() {
                        v()
                    }, 1e3 * a.time_completed - Date.now()), !1) : l() ? m() : s() ? t() : void 0
                },
                k = function() {
                    var a = i.getJobInProgress(c);
                    if (a in i.getCollectedJobs(c)) return !1;
                    if (!(a in c)) return !1;
                    var d = 1e3 * c[a].time_completed;
                    return b.gameTime() < d && c[a]
                },
                l = function() {
                    var a = i.getJobInProgress(c),
                        b = i.getCollectedJobs(c);
                    return !!a && !(k() || a in b)
                },
                m = function() {
                    var a = i.getJobInProgress(c);
                    p.emit(q.SECOND_VILLAGE_COLLECT_JOB_REWARD, {
                        job_id: c[a].id,
                        village_id: o.getSelectedVillage().getId()
                    }, function() {
                        v()
                    })
                },
                s = function() {
                    var a = i.getCurrentDayJobs(c, d);
                    for (var b in a)
                        if (!a[b].collected) return !0;
                    return !1
                },
                t = function() {
                    var a = i.getCurrentDayJobs(c, d),
                        b = u(a);
                    if (!b) return !1;
                    p.emit(q.SECOND_VILLAGE_START_JOB, {
                        job_id: b.id,
                        village_id: o.getSelectedVillage().getId()
                    }, function() {
                        v(), setTimeout(v, 1e3 * b.duration + 3e3)
                    })
                },
                u = function() {
                    var a = i.getCurrentDayJobs(c, d),
                        b = i.getCollectedJobs(c),
                        e = o.getSelectedVillage().getResources().getResources(),
                        f = i.getAvailableJobs(a, b, e, []);
                    for (var g in f) return f[g];
                    return !1
                },
                v = function(a) {
                    p.emit(q.SECOND_VILLAGE_GET_INFO, {}, function(b) {
                        c = b.jobs, d = b.day, a && a()
                    })
                },
                w = {};
            w.init = function() {
                if (e = !0, !i.isFeatureActive()) return !1;
                g = !0, n.$on(r.SECOND_VILLAGE_JOB_COLLECTED, j), n.$on(r.SECOND_VILLAGE_VILLAGE_CREATED, j)
            }, w.start = function() {
                if (!g) return !1;
                f = !0, h = setInterval(j, 6e4), v(j)
            }, w.stop = function() {
                if (!g) return !1;
                f = !1, clearInterval(h)
            }, w.isRunning = function() {
                return g && f
            }, w.isInitialized = function() {
                return e
            }, a.secondVillage = w
        }), define("TWOverflow/autoDeposit/interface", ["TWOverflow/autoDeposit", "TWOverflow/FrontButton", "TWOverflow/locale"], function(a, b, c) {
            function d() {
                f = new b("Deposit", {
                    classHover: !1,
                    classBlur: !1,
                    tooltip: c("deposit", "description")
                }), f.click(function() {
                    a.isRunning() ? (a.stop(), a.secondVillage.stop(), f.$elem.removeClass("btn-red").addClass("btn-green"), e("success", c("deposit", "deactivated"))) : (a.start(), a.secondVillage.start(), f.$elem.removeClass("btn-green").addClass("btn-red"), e("success", c("deposit", "activated")))
                })
            }
            var f;
            a.interface = d
        }), require(["TWOverflow/ready", "TWOverflow/autoDeposit", "TWOverflow/autoDeposit/secondVillage", "TWOverflow/autoDeposit/interface"], function(a, b) {
            if (b.isInitialized()) return !1;
            a(function() {
                b.init(), b.secondVillage.init(), b.interface()
            })
        }), define("TWOverflow/Queue", ["TWOverflow/locale", "helper/time", "helper/math", "struct/MapData", "conf/conf", "Lockr"], function(b, c, d, e, f, k) {
            var r, s, t = {},
                u = [],
                w = {},
                x = [],
                y = [],
                z = !1,
                A = {
                    selectedVillage: function(a) {
                        return a.origin.id === o.getSelectedVillage().getId()
                    },
                    barbarianTarget: function(a) {
                        return !a.target.character_id
                    },
                    allowedTypes: function(a, b) {
                        return b.allowedTypes[a.type]
                    },
                    attack: function(a) {
                        return "attack" !== a.type
                    },
                    support: function(a) {
                        return "support" !== a.type
                    },
                    relocate: function(a) {
                        return "relocate" !== a.type
                    },
                    textMatch: function(a, b) {
                        var c = !0,
                            d = b.textMatch.toLowerCase().split(/\W/),
                            e = [a.origin.name, a.originCoords, a.originCoords, a.origin.character_name || "", a.target.name, a.targetCoords, a.target.character_name || "", a.target.tribe_name || "", a.target.tribe_tag || ""];
                        return e = e.join("").toLowerCase(), d.some(function(a) {
                            if (a.length && !e.includes(a)) return c = !1, !0
                        }), c
                    }
                },
                B = function() {
                    return 1e3 * c.gameDate().getTimezoneOffset() * 60 + n.GAME_TIME_OFFSET
                },
                C = function(a) {
                    return r.getWorldId() + "-" + a
                },
                D = function(a) {
                    return a < c.gameTime() + s
                },
                E = function(a) {
                    var b = {};
                    for (var c in a) {
                        var d = a[c];
                        "*" !== d && 0 === d || (b[c] = d)
                    }
                    return b
                },
                F = function() {
                    u = u.sort(function(a, b) {
                        return a.sendTime - b.sendTime
                    })
                },
                G = function(a) {
                    u.push(a)
                },
                H = function(a) {
                    w[a.id] = a
                },
                I = function(a) {
                    x.push(a)
                },
                J = function(a) {
                    y.push(a)
                },
                K = function() {
                    k.set(C("queue-commands"), u)
                },
                L = function() {
                    k.set(C("queue-sended"), x)
                },
                M = function() {
                    k.set(C("queue-expired"), y)
                },
                N = function() {
                    var a = k.get(C("queue-commands"), [], !0);
                    if (a.length)
                        for (var b = 0; b < a.length; b++) {
                            var d = a[b];
                            c.gameTime() > d.sendTime ? Q.expireCommand(d) : (G(d), H(d))
                        }
                },
                O = function(a) {
                    var b = o.getVillages(),
                        c = b[a.origin.id];
                    if (!c) return !1;
                    var d = c.unitInfo.units,
                        e = {};
                    for (var f in a.units) {
                        var g = a.units[f];
                        if ("*" === g) {
                            if (0 === (g = d[f].available)) continue
                        } else if (g < 0 && (g = d[f].available - Math.abs(g)) < 0) return !1;
                        e[f] = g
                    }
                    return e
                },
                P = function() {
                    setInterval(function() {
                        u.length && u.some(function(a) {
                            if (!D(a.sendTime)) return !0;
                            z ? Q.sendCommand(a) : Q.expireCommand(a)
                        })
                    }, 200)
                },
                Q = {};
            return Q.initialized = !1, Q.version = "1.0.0", Q.init = function() {
                b.create("queue", {
                    en: {
                        title: "CommandQueue",
                        attack: "attack",
                        support: "support",
                        relocate: "transfer",
                        sended: "sended",
                        activated: "activated",
                        deactivated: "disabled",
                        expired: "expired",
                        removed: "removed",
                        added: "added",
                        "general.clear": "Clear registers",
                        "general.nextCommand": "Next command",
                        "info.dev1": "In development!",
                        "info.dev2": "This tool is still under development, so it may not work as expected.",
                        "info.active1": "Enable/disable",
                        "info.active2": "To the commands be sended, the CommandQueue must be mode enabled! All commands you added will be expired instead of send if disabled.",
                        "info.active3": "To enable/disable or hit the button at the bottom of this window.",
                        "info.dynamic1": "Dynamic amount of troops",
                        "info.dynamic2": "To send the maximum amount of a unit, just place a * (asterisk) instead of specify a number.",
                        "info.dynamic3": "To keep a certain amount of troops in the village, you must specify a negative number, so when the command is sended, it will be used the maximum amount of the unit minus the amount you specified.",
                        "info.delay1": "Delay to send commands",
                        "info.delay2": "If your internet have a response time fast enough, the commands will arrive at the exact moment you specify.",
                        "info.delay3": "Depending on the response time of the connection to the game server, the commands may not arrive at the exact moment you specify.",
                        "info.delay4": "Make tests before and see how long it takes from the moment you press to send the command and when it actually is sent, so use this difference in time to specify the arrival time of the commands.",
                        "info.date1": "Date of arrive",
                        "info.date2": "You can specify the milliseconds in the arrival time for a greater precision.",
                        "add.basics": "Basic information",
                        "add.origin": "Origin coordinates",
                        "add.addSelected": "Active village",
                        "add.target": "Target coordinates",
                        "add.addMapSelected": "Selected village on a map",
                        "add.arrive": "Date of arrive",
                        "add.out": "Date of out",
                        "add.currentDate": "Current date",
                        "add.travelTimes": "Travel time",
                        "queue.waiting": "Waiting commands",
                        "queue.noneAdded": "No command added.",
                        "queue.sended": "Commands sent",
                        "queue.noneSended": "No command sent.",
                        "queue.expired": "Expired commands",
                        "queue.noneExpired": "No command expired.",
                        "queue.remove": "Remove command form list",
                        "queue.filters": "Filter commands",
                        "filters.selectedVillage": "Show only commands from the selected village",
                        "filters.barbarianTarget": "Show only commands with barbarian villages as target",
                        "filters.attack": "Show attacks",
                        "filters.support": "Show supports",
                        "filters.relocate": "Show transfers",
                        "filters.textMatch": "Filter by text...",
                        "command.out": "Out",
                        "command.timeLeft": "Time remaining",
                        "command.arrive": "Arrival",
                        "error.noUnitsEnough": "Without the enough units to send the command!",
                        "error.origin": "Origin village coordinates invalid!",
                        "error.target": "Target village coordinates invalid!",
                        "error.noUnits": "No units specified!",
                        "error.invalidDate": "Invalid date",
                        "error.alreadySent": "This %{type} should have left %{date}",
                        "error.originNotExist": "Specified origin village does not exist!",
                        "error.targetNotExist": "Specified target village does not exist!",
                        "error.noMapSelectedVillage": "No selected village on the map.",
                        "error.removeError": "Error removing command."
                    },
                    pl: {
                        title: "Planer ataków",
                        attack: "atak",
                        support: "wsparcie",
                        relocate: "przenieś",
                        sended: "wysłane",
                        activated: "włączony",
                        deactivated: "wyłączony",
                        expired: "zakończony",
                        removed: "usunięty",
                        added: "dodany",
                        "general.clear": "Wyczyść dziennik",
                        "general.nextCommand": "Następne polecenie",
                        "info.dev1": "System Szpiegowski",
                        "info.dev2": "<button>xD<button>.",
                        "info.active1": "Włącz/wyłącz",
                        "info.active2": 'Aby polecenia zostały wysłane, zawsze po dodaniu polecenia musisz je włączyć w zakładce "Oczekujące". W przeciwnym przypadku polecenia nie zostaną wysłane.',
                        "info.active3": 'Aby włączyć lub wyłączyć polecenie naciśnij przycisk "włącz/wyłącz" na dole tego okna lub w zakładce "oczekujące".',
                        "info.dynamic1": "Dynamiczna ilość wojsk",
                        "info.dynamic2": 'Do wysłania maksymalnej liczby jednostek należy zamiast liczby wstawić " * " (gwiazdkę).',
                        "info.dynamic3": "Aby zostawić pewną ilość danej jednostki w wiosce, należy określić jej ujemną liczbę ,  a gdy polecenie będzie realizowane od maksymalnej liczby posiadanych jednostek zostanie odliczona ujemna liczba podana wcześniej.",
                        "info.delay1": "Czas dotarcia",
                        "info.delay2": "Jeśli twój internet ma wystarczająco szybki czas reakcji, możliwe jest ustawienie polecenie z dokładnością co do milisekund dla lepszej precyzji ataku.",
                        "info.delay3": "Jeśli są problemy z połączeniem między graczem a serwerem gry, polecenie może być nie zrealizowane w zaplanowanym czasie.",
                        "info.delay4": 'Zalecane jest zrobić test, jak długo po naciśnięciu w grze polecenia atakuj faktycznie atak zostaje wysłany. W ten sposób można określić jaka jest faktyczna różnica w reakcji i pamiętać o niej podczas ustawiania konkretnej daty w "Planer ataków".',
                        "info.date1": "Data dotarcia",
                        "info.date2": "Aby uzyskać większą precyzję można ustawić planer w milisekundach.",
                        "add.basics": "Podstawowe Informacje",
                        "add.origin": "Współrzędne początkowe",
                        "add.addSelected": "Aktywna wioska",
                        "add.target": "Współrzędne wioski",
                        "add.addMapSelected": "Wybrana wioska z mapy",
                        "add.arrive": "Data dotarcia",
                        "add.out": "Data przypisania",
                        "add.currentDate": "Aktualna data i czas",
                        "add.travelTimes": "Czas podróży",
                        "queue.waiting": "Połączenia oczekujące",
                        "queue.noneAdded": "Brak dodanych poleceń.",
                        "queue.sended": "Polecenie wysłane",
                        "queue.noneSended": "Brak dodanych poleceń.",
                        "queue.expired": "Polecenie wysłane",
                        "queue.noneExpired": "Brak dodanych poleceń.",
                        "queue.remove": "Usuń polecenia z listy",
                        "queue.filters": "Filtr poleceń",
                        "filters.selectedVillage": "Pokaż polecenia z wybraną wioski",
                        "filters.barbarianTarget": "Pokaż tylko polecenia z wioskami barbarzyńskimi jako cel",
                        "filters.attack": "Pokaż ataki",
                        "filters.support": "Pokaż wszystko",
                        "filters.relocate": "Pokaż przeniesienia",
                        "filters.textMatch": "Filtruj według textu...",
                        "command.out": "Zamknij",
                        "command.timeLeft": "Pozostały czas",
                        "command.arrive": "Data dotarcia",
                        "error.noUnitsEnough": "Brak wymaganych jednostek!",
                        "error.origin": "Złe dane wioski!",
                        "error.target": "Złe dane docelowe!",
                        "error.noUnits": "Brak jednostek!",
                        "error.invalidDate": "Niepoprawna data",
                        "error.alreadySent": "Ten %{type} należy pozostawić %{date}",
                        "error.originNotExist": "Taka wioska nie istnieje!",
                        "error.targetNotExist": "Taka wioska nie istnieje!",
                        "error.noMapSelectedVillage": "Nie wybrano wioski z mapy.",
                        "error.removeError": "Błąd podczas usuwania polecenia."
                    },
                    pt: {
                        title: "CommandQueue",
                        attack: "ataque",
                        support: "apoio",
                        relocate: "transferência",
                        sended: "enviado",
                        activated: "ativado",
                        deactivated: "desativado",
                        expired: "expirado",
                        removed: "removido",
                        added: "adicionado",
                        "general.clear": "Limpar registros",
                        "general.nextCommand": "Próximo comando",
                        "info.dev1": "Em desenvolvimento!",
                        "info.dev2": "Esta ferramenta ainda está em desenvolvimento, portanto, pode não funcionar como esperado.",
                        "info.active1": "Ativar/desativar",
                        "info.active2": "Para que os comandos sejam enviados, o CommandQueue precisa estar em modo ativado! Todos os comandos que você adicionou serão expirados ao invés de serem enviados caso esteja desaativado.",
                        "info.active3": "Para ativar/desativar apenar o botão Ativar/Desativar no rodapé dessa janela.",
                        "info.dynamic1": "Quantidade de tropas dinâmica",
                        "info.dynamic2": "Para que seja enviado a quantidade máxima de uma unidade específica você deve colocar um simples * (asterisco) no lugar de um número.",
                        "info.dynamic3": "Para poupar uma certa quantidade de tropas na aldeia, você deve especificar um número negativo, assim quando o comando for enviado, será utilizada a quantidade máxima da unidade menos a quantidade que você especificou.",
                        "info.delay1": "Delay nos envios",
                        "info.delay2": "Se sua internet ter um tempo de resposta rápido o bastante, os comandos chegarão no momento exato que você especificar.",
                        "info.delay3": "Dependendo do tempo de resposta da conexão com o servidor do jogo, os comandos podem não chegar no momento exato que você especificou.",
                        "info.delay4": "Faça testes antes e veja quanto tempo demora do momento em que você preciona para enviar o comando e quando ele realmente é enviado, então use essa diferença na hora de especificar o horário de chegada dos comandos.",
                        "info.date1": "Data de chegada",
                        "info.date2": "É possível especificar os milésimos no horário de chegada para uma maior precisão.",
                        "add.basics": "Informações básicas",
                        "add.origin": "Coordenadas da origem",
                        "add.addSelected": "Aldeia ativa",
                        "add.target": "Coordenadas do alvo",
                        "add.addMapSelected": "Aldeia selecionada no mapa",
                        "add.arrive": "Data de chegada",
                        "add.out": "Data de saída",
                        "add.currentDate": "Data atual",
                        "add.travelTimes": "Tempos de viagem",
                        "queue.waiting": "Comandos em espera",
                        "queue.noneAdded": "Nenhum comando adicionado.",
                        "queue.sended": "Comandos enviados",
                        "queue.noneSended": "Nenhum comando enviado.",
                        "queue.expired": "Comandos expirados",
                        "queue.noneExpired": "Nenhum comando expirado.",
                        "queue.remove": "Remover comando da lista",
                        "queue.filters": "Filtro de comandos",
                        "filters.selectedVillage": "Mostrar apenas comandos com origem da aldeia selecionada",
                        "filters.barbarianTarget": "Mostrar apenas comandos com aldeias bárbaras de como alvo",
                        "filters.attack": "Mostrar ataques",
                        "filters.support": "Mostrar apoios",
                        "filters.relocate": "Mostrar transferências",
                        "filters.textMatch": "Filtrar por texto...",
                        "command.out": "Saída",
                        "command.timeLeft": "Tempo restante",
                        "command.arrive": "Chegada",
                        "error.noUnitsEnough": "Sem unidades o sulficientes para enviar o comando!",
                        "error.origin": "Coordendas da aldeia de origem inválida!",
                        "error.target": "Coordendas da aldeia alvo inválida!",
                        "error.noUnits": "Nenhuma unidade especificada!",
                        "error.invalidDate": "Data inválida",
                        "error.alreadySent": "Esse %{type} deveria ter saído %{date}",
                        "error.originNotExist": "Aldeia de origem especificada não existe!",
                        "error.targetNotExist": "Aldeia alvo especificada não existe!",
                        "error.noMapSelectedVillage": "Nenhuma aldeia selecionada no mapa.",
                        "error.removeError": "Erro ao remover comando."
                    }
                }, "en"), s = B(), r = o.getSelectedCharacter(), Q.initialized = !0, x = k.get(C("queue-sended"), [], !0), y = k.get(C("queue-expired"), [], !0), N(), P(), a.addEventListener("beforeunload", function(a) {
                    z && u.length && (a.returnValue = !0)
                })
            }, Q.bind = function(a, b) {
                t.hasOwnProperty(a) || (t[a] = []), t[a].push(b)
            }, Q.trigger = function(a, b) {
                t.hasOwnProperty(a) && t[a].forEach(function(a) {
                    a.apply(this, b)
                })
            }, Q.sendCommand = function(a) {
                if (a.units = O(a), !a.units) return Q.trigger("error", [b("queue", "error.noUnitsEnough")]);
                p.emit(q.SEND_CUSTOM_ARMY, {
                    start_village: a.origin.id,
                    target_village: a.target.id,
                    type: a.type,
                    units: a.units,
                    icon: 0,
                    officers: a.officers,
                    catapult_target: null
                }), I(a), L(), Q.removeCommand(a, "sended"), Q.trigger("send", [a])
            }, Q.expireCommand = function(a) {
                J(a), M(), Q.removeCommand(a, "expired")
            }, Q.addCommand = function(a) {
                if (!g(a.origin)) return Q.trigger("error", [b("queue", "error.origin")]);
                if (!g(a.target)) return Q.trigger("error", [b("queue", "error.target")]);
                if (!h(a.date)) return Q.trigger("error", [b("queue", "error.invalidDate")]);
                if (angular.equals(a.units, {})) return Q.trigger("error", [b("queue", "error.noUnits")]);
                a.originCoords = a.origin, a.targetCoords = a.target;
                var c = new Promise(function(b, c) {
                        Q.getVillageByCoords(a.origin, function(a) {
                            if (a) return b(a);
                            c("error.originNotExist")
                        })
                    }),
                    d = new Promise(function(b, c) {
                        Q.getVillageByCoords(a.target, function(a) {
                            if (a) return b(a);
                            c("error.originNotExist")
                        })
                    }),
                    e = Promise.all([c, d]);
                e.then(function(c) {
                    a.origin = c[0], a.target = c[1], a.units = E(a.units), a.date = i(a.date), a.travelTime = Q.getTravelTime(a.origin, a.target, a.units, a.type, a.officers);
                    var d = l(a.date);
                    if ("arrive" === a.dateType ? (a.sendTime = d - a.travelTime, a.arriveTime = d) : (a.sendTime = d, a.arriveTime = d + a.travelTime), D(a.sendTime)) return Q.trigger("error", [b("queue", "error.alreadySent", {
                        date: m(a.sendTime),
                        type: b("common", a.type)
                    })]);
                    "attack" === a.type && "supporter" in a.officers && delete a.officers.supporter;
                    for (var e in a.officers) a.officers[e] = 1;
                    a.units.catapult && "support" !== a.type || (a.catapultTarget = null), a.id = j(), G(a), H(a), F(), K(), Q.trigger("add", [a])
                }), e.catch(function(a) {
                    Q.trigger("error", [b("queue", a)])
                })
            }, Q.removeCommand = function(a, b) {
                delete w[a.id];
                for (var c = 0; c < u.length; c++)
                    if (u[c].id == a.id) return u.splice(c, 1), "expired" === b ? Q.trigger("expired", [a]) : "removed" === b && Q.trigger("remove", [!0, a, !0]), K();
                Q.trigger("remove", [!1])
            }, Q.clearRegisters = function() {
                k.set(C("queue-expired"), []), k.set(C("queue-sended"), []), y = [], x = []
            }, Q.start = function() {
                z = !0, Q.trigger("start")
            }, Q.stop = function() {
                z = !1, Q.trigger("stop")
            }, Q.isRunning = function() {
                return z
            }, Q.getWaitingCommands = function() {
                return u
            }, Q.getWaitingCommandsObject = function() {
                return w
            }, Q.getSendedCommands = function() {
                return x
            }, Q.getExpiredCommands = function() {
                return y
            }, Q.getTravelTime = function(a, b, c, e, f) {
                var g = !1,
                    h = !b.character_id,
                    i = b.character_id && b.tribe_id && b.tribe_id === r.getTribeId();
                "attack" === e ? ("supporter" in f && delete f.supporter, h && (g = !0)) : "support" === e && (i && (g = !0), "supporter" in f && (g = !0));
                var j = {
                        units: c,
                        officers: angular.copy(f)
                    },
                    k = v.calculateTravelTime(j, {
                        barbarian: h,
                        ownTribe: i,
                        officers: f,
                        effects: g
                    }, e),
                    l = d.actualDistance(a, b);
                return 1e3 * v.getTravelTimeForDistance(j, k, l, e)
            }, Q.getVillageByCoords = function(a, b) {
                var c = a.split("|").map(function(a) {
                        return parseInt(a, 10)
                    }),
                    d = c[0],
                    g = c[1];
                if (!e.hasTownDataInChunk(d, g)) return e.loadTownDataAsync(d, g, 1, 1, function() {
                    Q.getVillageByCoords(a, b)
                });
                var h = e.loadTownData(d, g, 1, 1, f.MAP_CHUNK_SIZE),
                    i = h[0].data,
                    j = !1;
                i[d] && i[d][g] && (j = i[d][g]), b(j || !1)
            }, Q.filterCommands = function(a, b, c) {
                var d = A[a];
                return (c || u).filter(function(a) {
                    return d(a, b)
                })
            }, Q
        }), define("TWOverflow/Queue/analytics", ["TWOverflow/Queue"], function(a) {
            a.analytics = function() {
                ga("create", "UA-92130203-5", "auto", "CommandQueue");
                var b = o.getPlayer(),
                    c = b.getSelectedCharacter(),
                    d = [];
                d.push(c.getName()), d.push(c.getId()), d.push(c.getWorldId()), a.bind("start", function() {
                    ga("CommandQueue.send", "event", "behavior", "start")
                }), a.bind("stop", function() {
                    ga("CommandQueue.send", "event", "behavior", "stop")
                }), a.bind("error", function(a) {
                    ga("CommandQueue.send", "event", "commands", "error", a)
                }), a.bind("send", function(a) {
                    ga("CommandQueue.send", "event", "commands", a.type, d.join("~"))
                }), a.bind("add", function() {
                    ga("CommandQueue.send", "event", "behavior", "add", d.join("~"))
                }), a.bind("expired", function() {
                    ga("CommandQueue.send", "event", "commands", "expired", d.join("~"))
                }), a.bind("remove", function(a, b, c) {
                    a && c && ga("CommandQueue.send", "event", "commands", "remove")
                })
            }
        }), define("TWOverflow/Queue/interface", ["TWOverflow/Queue", "TWOverflow/locale", "TWOverflow/Interface", "TWOverflow/Interface/buttonLink", "TWOverflow/FrontButton", "helper/time", "ejs"], function(a, b, c, d, j, k, p) {
            function q() {
                K = Z(), J = Object.keys(P.getBuildings()), H = o.getSelectedCharacter();
                var d = {
                    version: a.version,
                    locale: b,
                    units: Fa(),
                    officers: U,
                    buildings: J
                };
                s = new c("CommandQueue", {
                    activeTab: "info",
                    template: '<div class="win-content message-list-wrapper searchable-list ng-scope"><header class="win-head"><h2><#= locale("queue", "title") #> <span class="small">v<#= version #></span></h2><ul class="list-btn"><li><a href="#" class="twOverflow-close size-34x34 btn-red icon-26x26-close"></a></li></ul></header><div class="win-main"><div class="tabs tabs-bg"><div class="tabs-four-col"><div class="tab" tab="info"><div class="tab-inner"><div><a href="#" class="btn-icon btn-orange"><#= locale("common", "info") #></a></div></div></div><div class="tab" tab="add"><div class="tab-inner"><div><a href="#" class="btn-icon btn-orange"><#= locale("common", "add") #></a></div></div></div><div class="tab" tab="queue"><div class="tab-inner"><div><a href="#" class="btn-icon btn-orange"><#= locale("common", "waiting") #></a></div></div></div><div class="tab" tab="log"><div class="tab-inner"><div><a href="#" class="btn-icon btn-orange"><#= locale("common", "registers") #></a></div></div></div></div></div><div class="box-paper footer has-footer-upper twOverflow-content-info"><h5 class="twx-section collapse"><#= locale("queue", "info.dev1") #></h5><div><p><#= locale("queue", "info.dev2") #></p></div><h5 class="twx-section collapse"><#= locale("queue", "info.active1") #></h5><div><p><#= locale("queue", "info.active2") #></p><p><#= locale("queue", "info.active3") #></p></div><h5 class="twx-section collapse"><#= locale("queue", "info.dynamic1") #></h5><div><p><#= locale("queue", "info.dynamic2") #></p><p><#= locale("queue", "info.dynamic3") #></p></div><h5 class="twx-section collapse"><#= locale("queue", "info.date1") #></h5><div><p><#= locale("queue", "info.date2") #></p></div></div><div class="box-paper footer has-footer-upper rich-text twOverflow-content-add"><form class="addForm"><h5 class="twx-section collapse"><#= locale("queue", "add.basics") #></h5><div><table class="tbl-border-light tbl-striped"><colgroup><col width="25%"><col></colgroup><tbody><tr><td><span class="ff-cell-fix"><#= locale("queue", "add.origin") #></span></td><td><input data-setting="origin" type="text" class="textfield-border origin" pattern="\\d{2,3}\\|\\d{2,3}" placeholder="000|000" required> <a class="img-link btn btn-orange padded addSelected">&laquo; <#= locale("queue", "add.addSelected") #></a></td></tr><tr><td><span class="ff-cell-fix"><#= locale("queue", "add.target") #></span></td><td><input data-setting="target" type="text" class="textfield-border target" pattern="\\d{2,3}\\|\\d{2,3}" placeholder="000|000" required> <a class="img-link btn btn-orange padded addMapSelected">&laquo; <#= locale("queue", "add.addMapSelected") #></a></td></tr><tr><td><span class="ff-cell-fix"><select data-setting="dateType" class="dateType"><option value="arrive" selected="selected"><#= locale("queue", "add.arrive") #></option><option value="out"><#= locale("queue", "add.out") #></option></select></span></td><td><input data-setting="date" type="text" class="textfield-border date" pattern="\\s*\\d{1,2}:\\d{1,2}:\\d{1,2}(:\\d{1,3})? \\d{1,2}\\/\\d{1,2}\\/\\d{4}\\s*" placeholder="00:00:00:000 00/00/0000" required> <a class="img-link btn btn-orange padded addCurrentDate">&laquo; <#= locale("queue", "add.currentDate") #></a></td></tr></tbody></table><table class="tbl-border-light tbl-units tbl-speed travelTimes" style="display:none"><thead><tr><th colspan="7"><#= locale("queue", "add.travelTimes") #></th></tr></thead><tbody><tr><td class="odd"><div class="unit-wrap"><span class="icon icon-34x34-unit-knight"></span> <span class="icon icon-34x34-unit-light_cavalry"></span> <span class="icon icon-34x34-unit-mounted_archer"></span></div><div class="travelTime box-time-sub-icon"><div class="time-icon icon-20x20-attack"></div><span class="attack" unit="knight"></span></div><div class="travelTime box-time-sub-icon"><div class="time-icon icon-20x20-support"></div><span class="support" unit="knight"></span></div></td><td><div class="unit-wrap"><span class="icon icon-single icon-34x34-unit-heavy_cavalry"></span></div><div class="travelTime"><span class="attack" unit="heavy_cavalry"></span></div><div class="travelTime"><span class="support" unit="heavy_cavalry"></span></div></td><td class="odd"><div class="unit-wrap"><span class="icon icon-34x34-unit-archer"></span> <span class="icon icon-34x34-unit-spear"></span> <span class="icon icon-34x34-unit-axe"></span> <span class="icon icon-34x34-unit-doppelsoldner"></span></div><div class="travelTime"><span class="attack" unit="axe"></span></div><div class="travelTime"><span class="support" unit="axe"></span></div></td><td><div class="unit-wrap"><span class="icon icon-single icon-34x34-unit-sword"></span></div><div class="travelTime"><span class="attack" unit="sword"></span></div><div class="travelTime"><span class="support" unit="sword"></span></div></td><td class="odd"><div class="unit-wrap"><span class="icon icon-34x34-unit-catapult"></span> <span class="icon icon-34x34-unit-ram"></span></div><div class="travelTime"><span class="attack" unit="ram"></span></div><div class="travelTime"><span class="support" unit="ram"></span></div></td><td><div class="unit-wrap"><span class="icon icon-single icon-34x34-unit-snob"></span></div><div class="travelTime"><span class="attack" unit="snob"></span></div><div class="travelTime"><span class="support" unit="snob"></span></div></td><td class="odd"><div class="unit-wrap"><span class="icon icon-single icon-34x34-unit-trebuchet"></span></div><div class="travelTime"><span class="attack" unit="trebuchet"></span></div><div class="travelTime"><span class="support" unit="trebuchet"></span></div></td></tr></tbody></table></div><h5 class="twx-section collapse"><#= locale("common", "units") #></h5><table class="tbl-border-light tbl-striped"><colgroup><col width="50%"><col></colgroup><tbody class="preset-edit"><tr> <# units.forEach(function(unit, i) { #> <# if (i !== 0 && i % 2 === 0) { #> </tr><tr> <# } #> <td class="cell-space-left"><span class="float-left icon-bg-black icon-44x44-unit-<#= unit #>"></span><div class="ff-cell-fix cell-space-44x44"><span><#= locale("common", unit) #></span><input class="unit <#= unit #>" type="text" data-setting="<#= unit #>" placeholder="0"></div></td> <# }) #> <td class="text-center catapult-target" style="display:none"><select data-setting="catapultTarget"> <# buildings.forEach(function(building, i) { #> <# if (building === "headquarter") { #> <option value="headquarter" selected="selected"><#= locale("common", "headquarter") #></option> <# } else { #> <option value="<#= building #>"><#= locale("common", building) #></option> <# } #> <# }) #> </select></td></tr></tbody></table><h5 class="twx-section collapse"><#= locale("common", "officers") #></h5><table class="tbl-border-light tbl-striped officers"><tbody><tr> <# for (var i = 0; i < officers.length; i++) { #> <td><span class="icon-44x44-premium_officer_<#= officers[i] #>"></span><label class="size-34x34 btn-orange icon-26x26-checkbox"><input type="checkbox" data-setting="<#= officers[i] #>"></label></td> <# } #> </tr></tbody></table></form></div><div class="box-paper footer has-footer-upper rich-text twOverflow-content-queue"><h5 class="twx-section collapse"><#= locale("queue", "queue.filters") #></h5><div class="filters"><table class="tbl-border-light"><tbody><tr><td><div data-filter="selectedVillage" class="box-border-dark icon selectedVillage" tooltip="<#= locale("queue", "filters.selectedVillage") #>"><span class="icon-34x34-village-info icon-bg-black"></span></div><div data-filter="barbarianTarget" class="box-border-dark icon barbarianTarget" tooltip="<#= locale("queue", "filters.barbarianTarget") #>"><span class="icon-34x34-barbarian-village icon-bg-black"></span></div><div data-filter="attack" class="box-border-dark icon allowedTypes active" tooltip="<#= locale("queue", "filters.attack") #>"><span class="icon-34x34-attack icon-bg-black"></span></div><div data-filter="support" class="box-border-dark icon allowedTypes active" tooltip="<#= locale("queue", "filters.support") #>"><span class="icon-34x34-support icon-bg-black"></span></div><div data-filter="relocate" class="box-border-dark icon allowedTypes active" tooltip="<#= locale("queue", "filters.relocate") #>"><span class="icon-34x34-relocate icon-bg-black"></span></div><div class="text"><input data-filter="textMatch" type="text" class="box-border-dark textMatch" placeholder="<#= locale("queue", "filters.textMatch") #>"></div></td></tr></tbody></table></div><h5 class="twx-section collapse"><#= locale("queue", "queue.waiting") #></h5><div class="queue"><p class="center nothing"><#= locale("queue", "queue.noneAdded") #></p></div></div><div class="box-paper footer has-footer-upper rich-text twOverflow-content-log"><h5 class="twx-section collapse"><#= locale("queue", "queue.sended") #></h5><div class="sended"><p class="center nothing"><#= locale("queue", "queue.noneSended") #></p></div><h5 class="twx-section collapse"><#= locale("queue", "queue.expired") #></h5><div class="expired"><p class="center nothing"><#= locale("queue", "queue.noneExpired") #></p></div></div></div><footer class="win-foot"><ul class="list-btn list-center buttons"><li class="twOverflow-button-log"><a class="btn-orange btn-border clear"><#= locale("queue", "general.clear") #></a></li><li class="twOverflow-button-add"><a class="btn-orange btn-border add" name="attack"><span class="icon-26x26-attack-small"></span> <#= locale("common", "attack") #></a></li><li class="twOverflow-button-add"><a class="btn-orange btn-border add" name="support"><span class="icon-26x26-support"></span> <#= locale("common", "support") #></a></li><li class="twOverflow-button-add"><a class="btn-orange btn-border add" name="relocate"><span class="icon-26x26-relocate"></span> <#= locale("common", "relocate") #></a></li><li><a class="btn-green btn-border switch"><#= locale("common", "activate") #></a></li></ul></footer></div>',
                    replaces: d,
                    css: '#CommandQueue input[type="text"]{width:50%}#CommandQueue input.unit{width:80px}#CommandQueue form .padded{padding:2px 8px}#CommandQueue .command{margin-bottom:10px}#CommandQueue .command .time-left{width:93px;display:inline-block;padding:0 0 0 3px}#CommandQueue .command .sent-time,#CommandQueue .command .arrive-time{width:160px;display:inline-block;padding:0 0 0 5px}#CommandQueue .command td{padding:3px 6px}#CommandQueue .officers td{width:111px;text-align:center}#CommandQueue .officers label{margin-left:5px}#CommandQueue .officers span{margin-left:2px}#CommandQueue .units div.unit{float:left}#CommandQueue .units div.unit span.icon{zoom:.6}#CommandQueue .units div.unit span.amount{vertical-align:-2px;margin:0 5px 0 2px}#CommandQueue .units div.officer{float:left;margin:0 2px}#CommandQueue .units div.officer span{zoom:.6}#CommandQueue .remove-command{float:right;margin-top:3px}#CommandQueue .tbl-units td{text-align:center}#CommandQueue .travelTimes .travelTime{display:block;color:#1c4b1c}#CommandQueue .travelTimes .travelTime.box-time-sub-icon{position:relative;padding:2px 0 2px 0}#CommandQueue .travelTimes .travelTime.box-time-sub-icon .time-icon{position:absolute;top:0;left:7px}#CommandQueue .dateType{width:95%}#CommandQueue .dateType .custom-select-handler{text-align:left}#CommandQueue .filters .icon{width:38px;float:left;margin:0 6px}#CommandQueue .filters .icon.active:before{box-shadow:0 0 0 1px #000,-1px -1px 0 2px #ac9c44,0 0 0 3px #ac9c44,0 0 0 4px #000;border-radius:1px;content:"";position:absolute;width:38px;height:38px;left:-1px;top:-1px}#CommandQueue .filters .text{margin-left:262px}#CommandQueue .filters .text input{height:36px;margin-top:1px;width:100%;text-align:left;padding:0 5px}#CommandQueue .filters .text input::placeholder{color:white}#CommandQueue .filters .text input:focus::placeholder{color:transparent}#CommandQueue .filters td{padding:6px}#CommandQueue .icon-34x34-barbarian-village:before{filter:grayscale(100%);background-image:url(https://i.imgur.com/ozI4k0h.png);background-position:-220px -906px}#CommandQueue .icon-20x20-time-arrival:before{zoom:.8;background-image:url(https://i.imgur.com/ozI4k0h.png);background-position:-529px -454px}#CommandQueue .icon-20x20-attack:before{zoom:.8;background-image:url(https://i.imgur.com/ozI4k0h.png);background-position:-546px -1086px;width:26px;height:26px}#CommandQueue .icon-20x20-support:before{zoom:.8;background-image:url(https://i.imgur.com/ozI4k0h.png);background-position:-462px -360px;width:26px;height:26px}#CommandQueue .icon-20x20-relocate:before{zoom:.8;background-image:url(https://i.imgur.com/ozI4k0h.png);background-position:-1090px -130px;width:26px;height:26px}#CommandQueue .icon-26x26-attack:before{background-image:url(https://i.imgur.com/ozI4k0h.png);background-position:-546px -1086px}'
                }), t = new j("Queue"), t.hover(function() {
                    var c = a.getWaitingCommands(),
                        d = c.length ? m(c[0].sendTime) : b("common", "none"),
                        e = b("queue", "general.nextCommand") + ": " + d;
                    t.updateQuickview(e)
                }), t.click(function() {
                    s.openWindow()
                }), u = $(s.$window), v = u.find("a.switch"), w = u.find("form.addForm"), y = u.find("input.origin"), z = u.find("input.target"), A = u.find("input.date"), B = u.find(".officers input"), $travelTimes = u.find("table.travelTimes"), D = u.find(".dateType"), E = u.find(".filters"), F = u.find("td.catapult-target"), G = u.find("input.unit.catapult"), C = {
                    queue: u.find("div.queue"),
                    sended: u.find("div.sended"),
                    expired: u.find("div.expired")
                }, ["attack", "support"].forEach(function(a) {
                    $travelTimes.find("." + a).forEach(function(b) {
                        var c = b.getAttribute("unit");
                        L[a][c] = b
                    })
                }), a.bind("error", function(a) {
                    e("error", a)
                }), a.bind("remove", function(a, c) {
                    if (!a) return e("error", b("queue", "error.removeError"));
                    ra(c, "queue"), e("success", Ca(c.type, "removed"))
                }), a.bind("expired", function(a) {
                    ra(a, "queue"), sa(a, "expired"), e("error", Ca(a.type, "expired"))
                }), a.bind("add", function(a) {
                    ha(), xa(), e("success", Ca(a.type, "added"))
                }), a.bind("send", function(a) {
                    ra(a, "queue"), sa(a, "sended"), e("success", Ca(a.type, "sended"))
                }), a.bind("start", function() {
                    t.$elem.removeClass("btn-green").addClass("btn-red"), v.removeClass("btn-green").addClass("btn-red"), v.html(b("common", "deactivate")), e("success", Ca("title", "activated"))
                }), a.bind("stop", function() {
                    t.$elem.removeClass("btn-red").addClass("btn-green"), v.removeClass("btn-red").addClass("btn-green"), v.html(b("common", "activate")), e("success", Ca("title", "deactivated"))
                }), setInterval(function() {
                    ba() && la()
                }, 1e3), za(), Aa(), ca(), ta()
            }
            var s, t, u, v, w, y, z, A, B, C, D, E, F, G, H, I, J, K, L = {
                    attack: {},
                    support: {}
                },
                M = null,
                N = null,
                O = {},
                P = o.getGameData(),
                Q = {
                    origin: !1,
                    target: !1,
                    date: !1
                },
                R = {
                    selectedVillage: !1,
                    barbarianTarget: !1,
                    allowedTypes: !0,
                    attack: !0,
                    support: !0,
                    relocate: !0,
                    textMatch: !0
                },
                S = ["selectedVillage", "barbarianTarget", "allowedTypes", "textMatch"],
                T = {
                    allowedTypes: {
                        attack: !0,
                        support: !0,
                        relocate: !0
                    },
                    textMatch: ""
                },
                U = P.getOrderedOfficerNames(),
                V = P.getOrderedUnitNames(),
                W = ["knight", "heavy_cavalry", "axe", "sword", "ram", "snob", "trebuchet"],
                X = "arrive",
                Y = !1,
                Z = function() {
                    return 1e3 * k.gameDate().getTimezoneOffset() * 60 + n.GAME_TIME_OFFSET
                },
                _ = function() {
                    $travelTimes.css("display", "none")
                },
                aa = function() {
                    $travelTimes.css("display", "")
                },
                ba = function() {
                    return s.isVisible("add") && Q.origin && Q.target && Q.date
                },
                ca = function(a) {
                    fa(), da(), ea(), xa()
                },
                da = function() {
                    a.getSendedCommands().forEach(function(a) {
                        sa(a, "sended")
                    })
                },
                ea = function() {
                    a.getExpiredCommands().forEach(function(a) {
                        sa(a, "expired")
                    })
                },
                fa = function() {
                    a.getWaitingCommands().forEach(function(a) {
                        sa(a, "queue")
                    })
                },
                ga = function() {
                    C.queue.find(".command").remove(), O = {}
                },
                ha = function() {
                    ga(), fa()
                },
                ia = function(a) {
                    return V.includes(a)
                },
                ja = function(a) {
                    return U.includes(a)
                },
                ka = function() {
                    var a = new Date(k.gameTime() + K),
                        b = k.zerofill(a.getMilliseconds(), 3),
                        c = k.zerofill(a.getSeconds(), 2),
                        d = k.zerofill(a.getMinutes(), 2);
                    return k.zerofill(a.getHours(), 2) + ":" + d + ":" + c + ":" + b + " " + k.zerofill(a.getDate(), 2) + "/" + k.zerofill(a.getMonth() + 1, 2) + "/" + a.getFullYear()
                },
                la = function() {
                    if (!Q.origin || !Q.target) return $travelTimes.hide();
                    var b = (y.val(), z.val(), Ea());
                    if (Q.date) var c = i(A.val()),
                        d = l(c);
                    ["attack", "support"].forEach(function(c) {
                        W.forEach(function(e) {
                            var f = {};
                            f[e] = 1;
                            var g = a.getTravelTime(M, N, f, c, b),
                                h = x("readableMillisecondsFilter")(g);
                            if ("arrive" === X)
                                if (Q.date) {
                                    var i = d - g;
                                    Da(i) || (h = ma(h))
                                } else h = ma(h);
                            L[c][e].innerHTML = h
                        })
                    }), aa()
                },
                ma = function(a) {
                    return '<span class="text-red">' + a + "</span>"
                },
                na = function(a) {
                    a.css("color", "#a1251f")
                },
                oa = function(a) {
                    a.css("color", "")
                },
                pa = function(a) {
                    u.find("[data-setting]").forEach(function(b) {
                        var c = b.dataset.setting;
                        a(b, c)
                    })
                },
                qa = function(b) {
                    var c = {
                        units: {},
                        officers: {},
                        type: b
                    };
                    pa(function(a, b) {
                        var d = a.value;
                        if ("dateType" === b) c.dateType = a.dataset.value;
                        else if ("catapultTarget" === b) c.catapultTarget = a.dataset.value || null;
                        else {
                            if (!d) return !1;
                            ia(b) ? c.units[b] = isNaN(d) ? d : parseInt(d, 10) : ja(b) ? a.checked && (c.officers[b] = 1) : d && (c[b] = d)
                        }
                    }), a.addCommand(c)
                },
                ra = function(a, b) {
                    var c = C[b].find(".command").filter(function(b) {
                        return b.dataset.id === a.id
                    });
                    $(c).remove(), va(a.id), ya(b), s.isVisible("queue") && s.recalcScrollbar()
                },
                sa = function(c, e) {
                    var g = document.createElement("div");
                    g.dataset.id = c.id, g.className = "command";
                    var h = d("village", f(c.origin), c.origin.id),
                        i = d("village", f(c.target), c.target.id),
                        j = m(c.arriveTime),
                        k = m(c.sendTime),
                        l = !!Object.keys(c.officers).length;
                    if (g.innerHTML = p.render('<table class="tbl-border-light"><colgroup><col width="100px"></colgroup><tbody><tr><th colspan="2"> <# if (type === "attack") { #> <span class="icon-bg-red icon-26x26-attack" tooltip="<#= locale("common", "attack") #>"></span> <# } else { #> <span class="icon-bg-blue icon-26x26-support" tooltip="<#= locale("common", "support") #>"></span> <# } #> <# if (section === "queue") { #> <span class="size-26x26 icon-bg-black icon-26x26-time-duration" tooltip="<#= locale("queue", "command.timeLeft") #>"></span> <span class="time-left">00:00:00</span> <# } #> <span class="size-26x26 icon-bg-black icon-20x20-units-outgoing" tooltip="<#= locale("queue", "command.out") #>"></span> <span class="sent-time"><#= sendTime #></span><span class="size-26x26 icon-bg-black icon-20x20-time-arrival" tooltip="<#= locale("queue", "command.arrive") #>"></span> <span class="arrive-time"><#= arriveTime #></span> <# if (section === "queue") { #> <a href="#" class="remove-command size-20x20 btn-red icon-20x20-close" tooltip="<#= locale("queue", "queue.remove") #>"></a> <# } #> </th></tr><tr><td><#= locale("common", "villages") #></td><td><a class="origin"></a> <span class="size-20x20 icon-26x26-<#= type #>"></span> <a class="target"></a></td></tr><tr><td><#= locale("common", "units") #></td><td class="units"> <# for (var unit in units) { #> <div class="unit"> <# if (unit === "catapult" && type === "attack") { #> <span class="icon-34x34-unit-<#= unit #> icon"></span><span class="amount"><#= units[unit] #> <span>(<#= locale("common", catapultTarget) #>)</span></span> <# } else { #> <span class="icon-34x34-unit-<#= unit #> icon"></span><span class="amount"><#= units[unit] #></span> <# } #> </div> <# } #> <# if (hasOfficers) { #> <# for (var officer in officers) { #> <div class="officer"><span class="icon-34x34-premium_officer_<#= officer #>"></span></div> <# } #> <# } #> </td></tr></tbody></table>', {
                            sendTime: k,
                            type: c.type,
                            arriveTime: j,
                            units: c.units,
                            hasOfficers: l,
                            officers: c.officers,
                            section: e,
                            locale: b,
                            catapultTarget: c.catapultTarget
                        }), g.querySelector(".origin").replaceWith(h.elem), g.querySelector(".target").replaceWith(i.elem), "queue" === e) {
                        var n = g.querySelector(".remove-command"),
                            o = g.querySelector(".time-left");
                        n.addEventListener("click", function(b) {
                            a.removeCommand(c, "removed")
                        }), ua(o, c.id)
                    }
                    C[e].append(g), s.setTooltips(), ya(e)
                },
                ta = function() {
                    var b = a.getWaitingCommandsObject();
                    setInterval(function() {
                        var a = k.gameTime() + K;
                        if (!s.isVisible("queue")) return !1;
                        for (var c in O) {
                            var d = b[c],
                                e = d.sendTime - a;
                            e > 0 && (O[c].innerHTML = x("readableMillisecondsFilter")(e, !1, !0))
                        }
                    }, 1e3)
                },
                ua = function(a, b) {
                    O[b] = a
                },
                va = function(a) {
                    delete O[a]
                },
                wa = function(b) {
                    var c = a.getWaitingCommandsObject();
                    C.queue.find(".command").forEach(function(a) {
                        var d = c[a.dataset.id];
                        d && b(a, d)
                    })
                },
                xa = function(b) {
                    var c = a.getWaitingCommands();
                    S.forEach(function(b) {
                        R[b] && (c = a.filterCommands(b, T, c))
                    });
                    var d = c.map(function(a) {
                        return a.id
                    });
                    wa(function(a, b) {
                        a.style.display = d.includes(b.id) ? "" : "none"
                    }), s.recalcScrollbar()
                },
                ya = function(b) {
                    var c = C[b],
                        d = c.find("p.nothing"),
                        e = "queue" === b ? a.getWaitingCommands() : c.find("div");
                    d.css("display", 0 === e.length ? "" : "none")
                },
                za = function() {
                    D.on("selectSelected", function() {
                            X = D[0].dataset.value, la()
                        }),
                        v.on("click", function(b) {
                            a.isRunning() ? a.stop() : a.start()
                        }), u.find(".buttons .add").on("click", function() {
                            qa(this.name)
                        }), u.find("a.clear").on("click", function() {
                            Ba()
                        }), u.find("a.addSelected").on("click", function() {
                            var a = o.getSelectedVillage().getPosition();
                            y.val(a.x + "|" + a.y), y.trigger("input")
                        }), u.find("a.addMapSelected").on("click", function() {
                            if (!Y) return e("error", b("queue", "error.noMapSelectedVillage"));
                            z.val(Y.join("|")), z.trigger("input")
                        }), u.find("a.addCurrentDate").on("click", function() {
                            A.val(ka()), A.trigger("input")
                        }), y.on("input", function() {
                            if (Q.origin = g(y.val()), la(), !Q.origin) return na(y);
                            a.getVillageByCoords(y.val(), function(a) {
                                !a || a.id < 0 ? (Q.origin = !1, _(), na(y)) : (M = a, oa(y))
                            })
                        }), z.on("input", function() {
                            if (Q.target = g(z.val()), !Q.target) return na(z);
                            a.getVillageByCoords(z.val(), function(a) {
                                !a || a.id < 0 ? (Q.target = !1, na(z), _()) : (N = a, oa(z), la())
                            })
                        }), A.on("input", function() {
                            Q.date = h(A.val()), Q.date ? oa(A) : na(A), la()
                        }), B.on("change", function() {
                            la()
                        }), G.on("input", function(a) {
                            a.target.value ? F.css("display", "") : F.css("display", "none")
                        }), n.$on(r.SHOW_CONTEXT_MENU, function(a, b) {
                            Y = [b.data.x, b.data.y]
                        }), n.$on(r.DESTROY_CONTEXT_MENU, function() {
                            Y = !1
                        }), n.$on(r.VILLAGE_SELECTED_CHANGED, function() {
                            xa()
                        })
                },
                Aa = function() {
                    E.find(".selectedVillage").on("click", function() {
                        R.selectedVillage ? this.classList.remove("active") : this.classList.add("active"), R.selectedVillage = !R.selectedVillage, xa()
                    }), E.find(".barbarianTarget").on("click", function() {
                        R.barbarianTarget ? this.classList.remove("active") : this.classList.add("active"), R.barbarianTarget = !R.barbarianTarget, xa()
                    }), E.find(".allowedTypes").on("click", function() {
                        var a = this.dataset.filter,
                            b = R[a];
                        b ? this.classList.remove("active") : this.classList.add("active"), R[a] = !b, T.allowedTypes[a] = !b, xa()
                    }), E.find(".textMatch").on("input", function(a) {
                        clearTimeout(I), T[this.dataset.filter] = this.value, I = setTimeout(function() {
                            xa()
                        }, 250)
                    })
                },
                Ba = function() {
                    a.getSendedCommands().forEach(function(a) {
                        ra(a, "sended")
                    }), a.getExpiredCommands().forEach(function(a) {
                        ra(a, "expired")
                    }), a.clearRegisters()
                },
                Ca = function(a, c, d) {
                    return d && (a = d + "." + a), b("queue", a) + " " + b("queue", c)
                },
                Da = function(a) {
                    return !(k.gameTime() + K > a)
                },
                Ea = function() {
                    var a = {};
                    return U.forEach(function(b) {
                        w.find('[name="' + b + '"]').val() && (a[b] = !0)
                    }), a
                },
                Fa = function() {
                    var a = V.filter(function(a) {
                        return "catapult" !== a
                    });
                    return a.push("catapult"), a
                };
            a.interface = q
        }), require(["TWOverflow/ready", "TWOverflow/Queue", "TWOverflow/Queue/interface", "TWOverflow/Queue/analytics"], function(a, b) {
            if (b.initialized) return !1;
            a(function() {
                b.init(), b.interface(), b.analytics()
            })
        }), define("TWOverflow/Farm", ["TWOverflow/locale", "TWOverflow/Farm/Village", "helper/math", "conf/conf", "struct/MapData", "helper/mapconvert", "helper/time", "conf/locale", "Lockr"], function(a, b, c, d, g, h, i, j, k) {
            var l, s, u, v, w, x = !1,
                y = /(\(|\{|\[|\"|\')[^\)\}\]\"\']+(\)|\}|\]|\"|\')/,
                z = null,
                A = [],
                B = null,
                C = null,
                D = {},
                E = null,
                F = {},
                G = !0,
                H = !0,
                I = [],
                J = null,
                K = null,
                L = null,
                M = [],
                N = [],
                O = {},
                P = !1,
                Q = "",
                R = {},
                S = "paused",
                T = [function(a) {
                    if (a.id < 0) return !0
                }, function(a) {
                    if (a.character_id === w.getId()) return !0
                }, function(a) {
                    if (a.attack_protection) return !0
                }, function(a) {
                    if (a.character_id) {
                        if (!N.includes(a.id)) return !0
                    }
                }, function(a) {
                    return a.points < ra.settings.minPoints || (a.points > ra.settings.maxPoints || void 0)
                }, function(a) {
                    var b = B.position,
                        d = c.actualDistance(b, a);
                    return d < ra.settings.minDistance || (d > ra.settings.maxDistance || void 0)
                }],
                U = function(a) {
                    var b = {};
                    for (var c in a) a[c] > 0 && (b[c] = a[c]);
                    return b
                },
                V = function() {
                    k.set("farm-lastEvents", l)
                },
                W = function() {
                    var a = o.getGroupList().getGroups();
                    J = ra.settings.groupIgnore in a && a[ra.settings.groupIgnore], K = ra.settings.groupInclude in a && a[ra.settings.groupInclude], L = ra.settings.groupOnly in a && a[ra.settings.groupOnly]
                },
                X = function() {
                    var a = o.getGroupList();
                    M = [], N = [], J && (M = a.getGroupVillageIds(J.id)), K && (N = a.getGroupVillageIds(K.id))
                },
                Y = function() {
                    var a = w.getVillageList().map(function(a) {
                        return new b(a)
                    }).filter(function(a) {
                        return !M.includes(a.id)
                    });
                    if (L) {
                        var c = o.getGroupList(),
                            d = c.getGroupVillageIds(L.id);
                        a = a.filter(function(a) {
                            return d.includes(a.id)
                        })
                    }
                    if (z = a, C = 1 === z.length, B = z[0], ra.commander.running && P)
                        for (var e = 0; e < a.length; e++) {
                            var f = a[e];
                            if (!O[f.id]) {
                                P = !1, ra.commander.analyse();
                                break
                            }
                        }
                    ra.trigger("villagesUpdate")
                },
                Z = function(a) {
                    var b = function(b) {
                        if (I = [], !ra.settings.presetName) return void(a && a());
                        for (var c in b)
                            if (b.hasOwnProperty(c)) {
                                var d = b[c].name,
                                    e = d.replace(y, "").trim();
                                e === ra.settings.presetName && (b[c].cleanName = e, b[c].units = U(b[c].units), I.push(b[c]))
                            }
                        a && a()
                    };
                    o.getPresetList().isLoaded() ? b(o.getPresetList().getPresets()) : p.emit(q.GET_PRESETS, {}, function(a) {
                        ra.trigger("presetsLoaded"), b(a.presets)
                    })
                },
                $ = function() {
                    var a = [],
                        b = function(a) {
                            var b = ja(a.target_village_id);
                            return !!b && (ia(b), !0)
                        },
                        c = function(a) {
                            ma(a.id, function(a) {
                                var b = a.ReportAttack,
                                    c = b.attVillageId,
                                    d = b.defVillageId;
                                if (R.hasOwnProperty(c) || (R[c] = []), R[c].includes(d)) return !1;
                                R[c].push(d), ra.trigger("priorityTargetAdded", [{
                                    id: d,
                                    name: b.defVillageName,
                                    x: b.defVillageX,
                                    y: b.defVillageY
                                }])
                            })
                        },
                        d = function() {
                            a.forEach(function(a) {
                                c(a)
                            }), a = []
                        },
                        e = function(d, e) {
                            if (!ra.commander.running || "attack" !== e.type) return !1;
                            ra.settings.ignoreOnLoss && 1 !== e.result && b(e), ra.settings.priorityTargets && "full" === e.haul && (t.isTemplateOpen("report") ? a.push(e) : c(e))
                        },
                        f = function(a, b) {
                            "report" === b && d()
                        };
                    n.$on(r.REPORT_NEW, e), n.$on(r.WINDOW_CLOSED, f)
                },
                _ = function() {
                    var a = function(a, b) {
                        var c = ra.settings.remoteId;
                        if (1 !== b.participants.length || b.title !== c) return !1;
                        switch (b.message.content.trim().toLowerCase()) {
                            case "on":
                            case "start":
                            case "init":
                            case "begin":
                                fa(function() {
                                    ra.stop(), ra.start()
                                }), na(b.message_id, oa()), ra.trigger("remoteCommand", ["on"]);
                                break;
                            case "off":
                            case "stop":
                            case "pause":
                            case "end":
                                fa(function() {
                                    ra.stop()
                                }), na(b.message_id, oa()), ra.trigger("remoteCommand", ["off"]);
                                break;
                            case "status":
                            case "current":
                                na(b.message_id, oa()), ra.trigger("remoteCommand", ["status"])
                        }
                        return !1
                    };
                    n.$on(r.MESSAGE_SENT, a)
                },
                aa = function() {
                    var a = function() {
                            Z(), ra.trigger("presetsChange"), I.length || ra.commander.running && (ra.trigger("noPreset"), ra.stop())
                        },
                        b = function() {
                            W(), X(), ra.trigger("groupsChanged")
                        },
                        c = function(a, b) {
                            if (Y(), !K) return !1;
                            K.id === b.group_id && (D = {})
                        };
                    n.$on(r.ARMY_PRESET_UPDATE, a), n.$on(r.ARMY_PRESET_DELETED, a), n.$on(r.GROUPS_UPDATED, b), n.$on(r.GROUPS_CREATED, b), n.$on(r.GROUPS_DESTROYED, b), n.$on(r.GROUPS_VILLAGE_LINKED, c), n.$on(r.GROUPS_VILLAGE_UNLINKED, c)
                },
                ba = function() {
                    var a = function(a, b) {
                            var c = b.origin.id;
                            if (O[c]) {
                                if (delete O[c], P) {
                                    if (P = !1, ra.settings.singleCycle) return !1;
                                    ra.commander.running && (ga(c), setTimeout(function() {
                                        ra.commander.analyse()
                                    }, 1e4))
                                }
                                return !1
                            }
                        },
                        b = function() {
                            ra.commander.running && setTimeout(function() {
                                fa(function() {
                                    ra.stop(), ra.start()
                                })
                            }, 5e3)
                        };
                    n.$on(r.COMMAND_RETURNED, a), n.$on(r.RECONNECT, b)
                },
                ca = function() {
                    ra.bind("sendCommand", function() {
                        da(), S = "attacking"
                    }), ra.bind("noPreset", function() {
                        S = "paused"
                    }), ra.bind("noUnits", function() {
                        S = "noUnits"
                    }), ra.bind("noUnitsNoCommands", function() {
                        S = "noUnitsNoCommands"
                    }), ra.bind("start", function() {
                        S = "attacking"
                    }), ra.bind("pause", function() {
                        S = "paused"
                    }), ra.bind("startLoadingTargers", function() {
                        S = "loadingTargets"
                    }), ra.bind("endLoadingTargers", function() {
                        S = "analyseTargets"
                    }), ra.bind("commandLimitSingle", function() {
                        S = "commandLimit"
                    }), ra.bind("commandLimitMulti", function() {
                        S = "noVillages"
                    }), ra.bind("singleCycleEnd", function() {
                        S = "singleCycleEnd", H && ra.settings.singleCycleNotifs && e("error", a("farm", "events.singleCycleEnd"))
                    }), ra.bind("singleCycleEndNoVillages", function() {
                        S = "singleCycleEndNoVillages", H && e("error", a("farm", "events.singleCycleEndNoVillages"))
                    }), ra.bind("singleCycleNext", function() {
                        if (S = "singleCycleNext", H && ra.settings.singleCycleNotifs) {
                            var b = i.gameTime() + ra.cycle.getInterval();
                            e("success", a("farm", "events.singleCycleNext", {
                                time: m(b)
                            }))
                        }
                    })
                },
                da = function() {
                    u = i.gameTime(), k.set("farm-lastAttack", u)
                },
                ea = function(a) {
                    G = !1, a(), G = !0
                },
                fa = function(a) {
                    H = !1, a(), H = !0
                },
                ga = function(a) {
                    var b = z.indexOf(a);
                    return -1 !== b && (B = z[b], !0)
                },
                ha = function(a, b) {
                    p.emit(q.ASSIGN_PRESETS, {
                        village_id: B.id,
                        preset_ids: a
                    }, b)
                },
                ia = function(a) {
                    if (!J) return !1;
                    p.emit(q.GROUPS_LINK_VILLAGE, {
                        group_id: J.id,
                        village_id: a.id
                    }, function() {
                        ra.trigger("ignoredVillage", [a])
                    })
                },
                ja = function(a) {
                    for (var b in D)
                        for (var c = D[b], d = 0; d < c.length; d++) {
                            var e = c[d];
                            if (e.id === a) return e
                        }
                    return !1
                },
                ka = function() {
                    O = {}
                },
                la = function() {
                    setInterval(function() {
                        if (ra.commander.running) {
                            var a = 3e5;
                            ra.settings.singleCycle && ra.cycle.intervalEnabled() && (a += ra.cycle.getInterval() + 6e4);
                            i.gameTime() - u > a && fa(function() {
                                ra.stop(), ra.start(!0)
                            })
                        }
                    }, 6e4)
                },
                ma = function(a, b) {
                    p.emit(q.REPORT_GET, {
                        id: a
                    }, b)
                },
                na = function(a, b) {
                    p.emit(q.MESSAGE_REPLY, {
                        message_id: a,
                        message: b
                    })
                },
                oa = function() {
                    var b = a("common", "status"),
                        c = a("farm", "events.selectedVillage"),
                        d = a("farm", "events.lastAttack"),
                        e = {};
                    if ("singleCycleNext" === S) {
                        var g = i.gameTime() + ra.cycle.getInterval();
                        e.time = m(g)
                    }
                    var h = a("farm", "events." + S, e),
                        j = f(B),
                        k = m(u),
                        l = B.id,
                        n = [];
                    return n.push("[b]", b, ":[/b] ", h, "[br]"), n.push("[b]", c, ":[/b] "), n.push("[village=", l, "]", j, "[/village][br]"), n.push("[b]", d, ":[/b] ", k), n.join("")
                },
                pa = function() {
                    var a = i.gameTime();
                    if (ra.settings.singleCycle && ra.cycle.intervalEnabled()) {
                        if (a > s + ra.cycle.getInterval() + 6e4) return !0
                    } else if (a > s + 18e5) return !0;
                    return !1
                },
                qa = function() {
                    return z.filter(function(a) {
                        if (O[a.id]) return !1;
                        if (!ra.settings.ignoreFullRes) return !0;
                        var b = a.getResources(),
                            c = a.getMaxStorage();
                        return !["wood", "clay", "iron"].every(function(a) {
                            return b[a] === c
                        })
                    })
                },
                ra = {};
            ra.version = "3.0.0", ra.init = function() {
                a.create("farm", {
                    en: {
                        langName: "English",
                        title: "FarmOverflow",
                        "events.attacking": "Attacking.",
                        "events.commandLimit": "Limit of 50 attacks reached, waiting return.",
                        "events.lastAttack": "Last attack",
                        "events.nextVillage": "Changing to village %{village}",
                        "events.noPreset": "No presets avaliable.",
                        "events.noSelectedVillage": "No villages avaliable.",
                        "events.noUnits": "No units avaliable in village, waiting attacks return.",
                        "events.noUnitsNoCommands": "No villages has units or commands returning.",
                        "events.noVillages": "No villages avaliable, waiting attacks return.",
                        "events.nothingYet": "Nothing available yet...",
                        "events.presetFirst": "Set a preset first!",
                        "events.selectedVillage": "Village selected",
                        "events.sendCommand": "%{origin} attack %{target}",
                        "events.loadingTargets": "Loading targets...",
                        "events.checkingTargets": "Checking targets...",
                        "events.restartingCommands": "Restarting commands...",
                        "events.ignoredVillage": "Target %{target} ignored! (caused loss)",
                        "events.priorityTargetAdded": "%{target} added to priorities.",
                        "events.analyseTargets": "Analysing targets.",
                        "events.singleCycleRestart": "Restarting the cycle of commands..",
                        "events.singleCycleEnd": "The list of villages ended, waiting for the next run.",
                        "events.singleCycleEndNoVillages": "No village available to start the cycle.",
                        "events.singleCycleNext": "The list of villages was over, next cycle: %{time}.",
                        "events.singleCycleNextNoVillages": "No village available to start the cycle, next cycle: %{time}.",
                        "general.disabled": "— Disabled —",
                        "general.paused": "FarmOverflow paused.",
                        "general.started": "FarmOverflow started.",
                        "info.development1": "Development",
                        "info.developedBy": "Developed by",
                        "info.groupOnly1": "Using only villages from a group to attack",
                        "info.groupOnly2": "You can select a specific group to use only the villages from that group to attack.",
                        "info.ignore1": "Ignoring villages from a group",
                        "info.ignore2": "You can select ignore targets setting a Ignore Group. All villages that assigned in that group will be ignored by the FarmOverflow. <strong>The group works on targets and your own villages as well</strong>.",
                        "info.include1": "Including targets with a group",
                        "info.include2": "As well as ignoring villages, you can include village targets of players. Works only in villages inside the maximum distance range.",
                        "info.presets1": "Setting presets",
                        "info.presets2": "FarmOverflow uses the game's presets that you set up, you just need to select one on the settings tab, save and run to start the farm!",
                        "info.presets3": "As the game only allows send presets that is activated on the village. FarmOverflow will activate it automatically if not already activated.",
                        "info.presets4": "You can user more than one preset, <strong>since it have the same name</strong> (you can put a small description at the end to help identification)",
                        "info.presets5": "See some name exemples for presets:",
                        "info.presets6": "Attention with <strong>officers</strong>, they <strong>will be used</strong> if they are activated on the presets.",
                        "info.randomBase1": "Random interval base",
                        "info.randomBase2": "That interval is a random period of time (in seconds) between each attack avoid the FarmOverflow to be detected by the game. <strong>The bigger the better</strong>.",
                        "info.ignoreOnLoss1": "Ignoring targets that cause loss",
                        "info.ignoreOnLoss2": "This option will ignore any target that cause loss in your troops.",
                        "info.ignoreOnLoss3": "The target that cause any loss to your troops will be ignored in the future.",
                        "info.ignoreOnLoss4": '<strong>Note</strong>: For this feature works properly, the option "Ignore villages from group" must be set.',
                        "info.priorityTargets1": "Prioritizing targets",
                        "info.priorityTargets2": "When activated, all targets that has full haul reports, will be added to the list of priorities, to resend the attack as soon as possible.",
                        "info.remote1": "Controlling remotelly via message",
                        "info.remote2": "let the FarmOverflow working in home and control it by the app of game!",
                        "info.remote3": 'Set the subject of message where you will control the FarmOverflow in the "Settings" tab',
                        "info.remote4": "Create a message and add yourself as a recipient. On the subject put what you set, and in the message use one of the fallowing commands:",
                        "info.remote5": "start the farm",
                        "info.remote6": "pause the farm",
                        "info.remote7": "receive the current status of farm",
                        "info.remote8": 'If you don\'t receive the message "OK" in return, means that the FarmOverflow did not receive the message or the command was invalid.',
                        "info.remote9": "Attention: Works only if you are the only participant in the message!",
                        "info.remote10": "You can use the same message to execute other commands, just reply the message.",
                        "settings.basicSettings": "Basic settings",
                        "settings.eventsLimit": "Maximum length of task logs",
                        "settings.groupIgnore": "Ignore villages from group",
                        "settings.groupInclude": "Include targets from group",
                        "settings.groupOnly": "Attack only with villages from group",
                        "settings.maxDistance": "Targets maximum distance",
                        "settings.maxTravelTime": "Maximum travel time (going)",
                        "settings.minDistance": "Targets minimum distance",
                        "settings.presetName": "Preset of troops",
                        "settings.randomBase": "Random interval base (seconds)",
                        "settings.ignoreOnLoss": "Add ignored group on targets that cause loss",
                        "settings.save": "Save settings",
                        "settings.saved": "Settings saved!",
                        "settings.presets": "Presets",
                        "settings.security": "Security",
                        "settings.minPoints": "Targets minimum points",
                        "settings.maxPoints": "Targets maximum points",
                        "settings.priorityTargets": "Prioritize targets with full loot report",
                        "settings.eventAttack": "Show task logs of attacks",
                        "settings.eventVillageChange": "Show task logs of village's changes",
                        "settings.eventPriorityAdd": "Show task logs of priority targets",
                        "settings.eventIgnoredVillage": "Show task logs of ignored villages",
                        "settings.remote": "Control via message (subject)",
                        "settings.hotkeySwitch": "Hotkey to start/pause",
                        "settings.hotkeyWindow": "Hotkey to open window",
                        "settings.singleCycleHeader": "Single cycle options",
                        "settings.singleCycle": "Enable single-cycle of attacks",
                        "settings.singleCycleInterval": "Interval between cycles",
                        "settings.singleCycleNotifs": "Turn on notifications of cycles",
                        "settings.maxAttacksPerVillage": "Maximum attacks per village",
                        "settings.ignoreFullRes": "Ignore own villages with full resources",
                        "tooltip.presets": "Select the preset that will be used to send the attacks.",
                        "tooltip.groupIgnore": "Select a group to ignore all villages assigned to it. The group works on targets and your own villages as well.",
                        "tooltip.groupInclude": "Select a group to include villages that aren't barbarians only.",
                        "tooltip.groupOnly": "Select a group to use only assigned villages to attack.",
                        "tooltip.randomBase": "That interval is a random period of time between each attack avoid the FarmOverflow to be detected.",
                        "tooltip.priorityTargets": "When activated, all targets that has full haul reports, will be added to the list of priorities, to resend the attack as soon as possible.",
                        "tooltip.ignoreOnLoss": "The target that cause any loss to your troops will be ignored in the future. (Only works if you have selected a ignore group)",
                        "tooltip.remote": "Set the subject os message that will be used to controll the FarmOverflow remotelly (See the tab Informations to know more).",
                        "tooltip.singleCycle": "With the single cycle activated, the FarmOverflow will use only once the villages to attack, as soon as it finish the FarmOverflow will be stopped. You can configure the interval below if you want the cycle to restart after the time specified.",
                        "tooltip.singleCycleInterval": "After the cycle ends, a new cycle will start after the specified time. Leave the field empty (0:00:00) If you do not want to reboot cycle.",
                        "tooltip.singleCycleNotifs": "A warning notification will be displayed whenever a cycle finish or start.",
                        "tooltip.maxAttacksPerVillage": "Reserve some slots of commands in case of emergencies (each village has a limit of 50 commands).",
                        "settingError.minDistance": "The target distance must be between %{min} and %{max}.",
                        "settingError.maxDistance": "The target distance must be between %{min} and %{max}.",
                        "settingError.maxTravelTime": "Maximum travel time format must be hh:mm:ss.",
                        "settingError.randomBase": "The random interval base must be between %{min} and %{max}.",
                        "settingError.minPoints": "The target pontuation must be a value between %{min} and %{max}.",
                        "settingError.maxPoints": "The target pontuation must be a value between %{min} and %{max}.",
                        "settingError.eventsLimit": "The amount of events must be a value between %{min} and %{max}.",
                        "settingError.singleCycleInterval": "Format of interval between cycles must be hh:mm:ss.",
                        "settingError.maxAttacksPerVillage": "The maximum attacks per village must be a value between %{min} and %{max}."
                    },
                    pl: {
                        langName: "Polski",
                        title: "FarmOverflow",
                        "events.attacking": "Atakowanie.",
                        "events.commandLimit": "Limit 50 ataków, oczekiwanie na powrót.",
                        "events.lastAttack": "Ostatni atak",
                        "events.nextVillage": "Przełączanie do wioski %{village}",
                        "events.noPreset": "Brak dostępnego szablonu.",
                        "events.noSelectedVillage": "Brak wybranej wioski.",
                        "events.noUnits": "Brak jednostek w wiosce, oczekiwanie na powrót.",
                        "events.noUnitsNoCommands": "No villages has units or commands returning.",
                        "events.noVillages": "Brak dostępnych wiosek, oczekiwanie na powrót.",
                        "events.nothingYet": "Na razie nic tu nie ma...",
                        "events.presetFirst": "Najpierw wybierz szablon!",
                        "events.selectedVillage": "Wioska wybrana",
                        "events.sendCommand": "%{origin} ataki %{target}",
                        "events.loadingTargets": "Pobieranie celów...",
                        "events.checkingTargets": "Sprawdzanie celów...",
                        "events.restartingCommands": "Ponowne uruchomienie polecenia...",
                        "events.ignoredVillage": "Cel %{target} zignorowany. (straty jednostek)",
                        "events.priorityTargetAdded": "%{target} dodano do priorytetów.",
                        "events.analyseTargets": "Analizowanie celów.",
                        "events.singleCycleRestart": "Ponowne uruchomienie cyklu..",
                        "events.singleCycleEnd": "Lista wiosek się skończyła, czekając na następny cykl.",
                        "events.singleCycleEndNoVillages": "Brak dostępnych wiosek do rozpoczęcia cyklu.",
                        "events.singleCycleNext": "Koniec cyklu. Rozpoczęcia następnego: %{time}.",
                        "events.singleCycleNextNoVillages": "Brak dostępnych wiosek aby rozpocząć cykl, następny cykl: %{time}.",
                        "general.disabled": "— Wyłączony —",
                        "general.paused": "FarmOverflow wstrzymane.",
                        "general.started": "FarmOverflow rozpoczął.",
                        "info.development1": "Development",
                        "info.developedBy": "Opracowane przez",
                        "info.groupOnly1": "Ataki tylko z określonej grupy wiosek",
                        "info.groupOnly2": "Możesz wybrać określone grupy wiosek które mają być używane do ataków.",
                        "info.ignore1": "Ignoruj wioski z grupy",
                        "info.ignore2": "Możesz ignorować cele dodając je do Grupy Ignorowanych. Wszystkie wioski oznaczone daną grupą będą ignorowane przez FarmOverflow. <strong>Grupa taka działa zarówno na cele jak i na twoje własne wioski</strong>.",
                        "info.include1": "Including targets with a group",
                        "info.include2": "As well as ignoring villages, you can include village targets of players. Works only in villages inside the maximum distance range.",
                        "info.presets1": "Ustawienia szablonów",
                        "info.presets2": "FarmOverflow korzysta z szablonów które sam ustawiłeś w grze, musisz po prostu wybrać dany szablon, zapisać i uruchomić!",
                        "info.presets3": "Jako gra tylko pozwala wysłać ustawienia domyślne, które są aktywne w wiosce, FarmOverflow pozwoli automatycznie jeśli nie są one już.",
                        "info.presets4": "Można użyć więcej niż jeden domyślny, <strong>tak długo, jak one mają taką samą nazwę</strong> (można dodać Krótki opis przed nazwą zidentyfikować je lepiej).",
                        "info.presets5": "Oto kilka przykładów nazw presetów:",
                        "info.presets6": "Zwrócił uwagę na oficjalnej <strong></strong>, <strong></strong> będą używane, jeśli są one aktywne w presetów.",
                        "info.randomBase1": "Losowe zakres podstawowy",
                        "info.randomBase2": "Interwał ten jest używany do generowania losowego czasu (w sekundach) między każdego ataku, unikając FarmOverflow być wykryte. wyższe <strong>najlepszych</strong>.",
                        "info.ignoreOnLoss1": "Ignorowanie obiektów docelowych, które powodują straty",
                        "info.ignoreOnLoss2": "Każdy atak, który spowodował pewne stracić w swoich wojsk będzie ignorowana w przyszłych ataków.",
                        "info.ignoreOnLoss3": '<strong></strong> Uwaga: dla tej funkcji do pracy, którą trzeba mieć opcję "Z pominięciem wsi z grupy" jest skonfigurowany.',
                        "info.ignoreOnLoss4": 'Wszystkie miejscowości, które są ignorowane, zostaniesz poinformowany, "Ostrzeżenia".',
                        "info.priorityTargets1": "Priorytetyzacja celów",
                        "info.priorityTargets2": "Gdy włączona, wszystkie cele, które mają raporty z maksymalną rysunku zostanie dodany na listę priorytetów, jak najszybciej ponownie do ataku.",
                        "info.remote1": "Zdalne sterowanie za pośrednictwem wiadomości",
                        "info.remote2": "Niech FarmOverflow, pracy w domu i kontroli przez aplikację!",
                        "info.remote3": 'Konfigurowanie temat wiadomości, gdzie możesz kontrolować FarmOverflow w zakładce "Ustawienia"',
                        "info.remote4": "Tworzenie wiadomości i dodać siebie jako odbiorca. W temacie umieścić skonfigurowanych ustawień i w treści wiadomości, użyj jednej z następujących poleceń:",
                        "info.remote5": "zaczyna się gospodarstwa",
                        "info.remote6": "zatrzymano farme",
                        "info.remote7": "pobiera bieżący stan farm",
                        "info.remote8": "Jeśli nie otrzymasz wiadomości od OK na zwracane, oznacza, że FarmOverflow nie pojawia się komunikat lub zostało użyte nieprawidłowe polecenie.",
                        "info.remote9": "Uwaga: działa tylko, jeśli jesteś jedynym uczestnikiem wiadomości!",
                        "info.remote10": "Za pomocą tej samej wiadomości do innych poleceń, odpowiadając jej po prostu.",
                        "settings.basicSettings": "Ustawienia podstawowe",
                        "settings.eventsLimit": "Maksymalna liczba użyć",
                        "settings.groupIgnore": "Ignorowanie wiosk z grupy",
                        "settings.groupInclude": "Grupy docelowe obejmują",
                        "settings.groupOnly": "Atakuj tylko wioski z grupy",
                        "settings.maxDistance": "Maksymalna odległość",
                        "settings.maxTravelTime": "Maksymalny czas podróży",
                        "settings.minDistance": "Maksymalna odległość",
                        "settings.presetName": "Domyślne jednostki",
                        "settings.randomBase": "Odstęp między atakami",
                        "settings.ignoreOnLoss": "Ignorowanie obiektów docelowych, które powodują straty",
                        "settings.save": "Zapisz ustawnienia",
                        "settings.saved": "Zapisano ustawienia!",
                        "settings.presets": "Szablony",
                        "settings.security": "Bezpieczeństwo",
                        "settings.minPoints": "Minimalny liczba pkt",
                        "settings.maxPoints": "Maksymalna liczba pkt",
                        "settings.priorityTargets": "Cele priorytetowe",
                        "settings.eventAttack": "Dziennik ataków",
                        "settings.eventVillageChange": "Wyświetlenie rekordów programu exchange z wsi",
                        "settings.eventPriorityAdd": "Pokaż zapisy priorytetowe cele",
                        "settings.eventIgnoredVillage": "Wyświetlenie rekordów wsi ignorowane",
                        "settings.remote": "Sterowanie za pomocą wiadomości (przedmiot)",
                        "settings.hotkeySwitch": "Klawisz skrótu do start/pauza",
                        "settings.hotkeyWindow": "Przycisk skrótu, aby otworzyć okno",
                        "settings.singleCycleHeader": "Opcje w jednym cyklu",
                        "settings.singleCycle": "Włączyć pojedynczy cykl ataków",
                        "settings.singleCycleInterval": "Interwał między cyklami",
                        "settings.singleCycleNotifs": "Włącz wyskakujące powiadomienia",
                        "settings.maxAttacksPerVillage": "Maksimum ataków na wioskę",
                        "settings.ignoreFullRes": "Ignoruj własne wioski z pełnymi zasobami",
                        "tooltip.presets": "Wybierz szablon, który będzie używany do wysyłania ataków.",
                        "tooltip.groupIgnore": "Wybierz grupę, do której wszystkie wioski przypisane do tej grupy są ignorowane. Zarówno ich wsi jako cele.",
                        "tooltip.groupInclude": "Wybierz grupę, aby obejmować cele, które są nie tylko barbarzyńskich wiosek.",
                        "tooltip.groupOnly": "Wybierz grupę, do której można wysłać ataki tylko wioski tej grupy.",
                        "tooltip.randomBase": "Interwał ten jest używany do generowania losowego czasu między każdym ataku, unikając FarmOverflow wykrycia. Wartość jest w sekundach.",
                        "tooltip.priorityTargets": "Gdy włączona, wszystkie cele, które mają raporty z maksymalną rysunku zostanie dodany na listę priorytetów, jak najszybciej ponownie do ataku.",
                        "tooltip.ignoreOnLoss": "Każdy atak, który spowodował pewne stracić w swoich wojsk będzie ignorowana w przyszłych ataków. (Działa tylko, gdy ignorowane Grupa jest zaznaczona)",
                        "tooltip.remote": "Ustaw tytuł wiadomości, dla którego chcesz kontrolować zdalnie FarmOverflow (zobacz kartę informacje, aby uzyskać więcej informacji).",
                        "tooltip.singleCycle": "Aktywowane jednym cyklu, FarmOverflow będzie używany tylko raz wiosek do ataku, jak tylko skończę to zatrzymał się FarmOverflow. Można skonfigurować interwał poniżej, jeśli chcesz go uruchomić ponownie po upływie czasu określonego.",
                        "tooltip.singleCycleInterval": "Po zakończeniu cyklu, nowe inicirá cyklu po określonym czasie. Pozostaw to pole puste (0: 00:00) Jeśli nie chcesz ponownie obuwać cykl.",
                        "tooltip.singleCycleNotifs": "Wyświetli powiadomienie ostrzeżenie, gdy Zakończ cykl lub start.",
                        "tooltip.maxAttacksPerVillage": "Zachowaj kilka slotów ataku dla sytuacji awaryjnej (każda wioska ma limit 50 ataków).",
                        "settingError.minDistance": "Odległość powinna być wartością między %{min} i %{max}.",
                        "settingError.maxDistance": "Odległość powinna być wartością między %{min} i %{max}.",
                        "settingError.maxTravelTime": "Maksymalny czas podróży musi być hh:mm:ss.",
                        "settingError.randomBase": "Interwał między każdym atakiem musi być podany między %{min} i %{max}.",
                        "settingError.minPoints": "Wynik musi być między %{min} i %{max}.",
                        "settingError.maxPoints": "Wynik musi być między %{min} i %{max}.",
                        "settingError.eventsLimit": "Liczba zdarzeń musi być między %{min} i %{max}.",
                        "settingError.singleCycleInterval": "Formatu interwału między atakami musi być hh: mm: ss.",
                        "settingError.maxAttacksPerVillage": "Maksymalna ilość ataków z wiosek powinien być wartością między %{min} i %{max}."
                    },
                    pt: {
                        langName: "Português",
                        title: "FarmOverflow",
                        "events.attacking": "Atacando.",
                        "events.commandLimit": "Limite de 50 ataques atingido, aguardando retorno.",
                        "events.lastAttack": "Último ataque",
                        "events.nextVillage": "Alternando para a aldeia %{village}",
                        "events.noPreset": "Nenhuma predefinição disponível.",
                        "events.noSelectedVillage": "Nenhuma aldeia disponível.",
                        "events.noUnits": "Sem unidades na aldeia, aguardando ataques retornarem.",
                        "events.noUnitsNoCommands": "Nenhuma aldeia tem tropas nem ataques retornando.",
                        "events.noVillages": "Nenhuma aldeia disponível, aguardando ataques retornarem.",
                        "events.nothingYet": "Nada por aqui ainda...",
                        "events.presetFirst": "Configure uma predefinição primeiro!",
                        "events.selectedVillage": "Aldeia selecionada",
                        "events.sendCommand": "%{origin} ataca %{target}",
                        "events.loadingTargets": "Carregando alvos...",
                        "events.checkingTargets": "Checando alvos...",
                        "events.restartingCommands": "Reiniciando comandos...",
                        "events.ignoredVillage": "Alvo %{target} ignorado! (causou baixas)",
                        "events.priorityTargetAdded": "%{target} adicionado as prioridades.",
                        "events.analyseTargets": "Analisando alvos.",
                        "events.singleCycleRestart": "Reiniciando o ciclo de comandos..",
                        "events.singleCycleEnd": "A lista de aldeias acabou, esperando próxima execução.",
                        "events.singleCycleEndNoVillages": "Nenhuma aldeia disponível para iniciar o ciclo.",
                        "events.singleCycleNext": "A lista de aldeias acabou, próximo ciclo: %{time}.",
                        "events.singleCycleNextNoVillages": "Nenhuma aldeia disponível para iniciar o ciclo, próximo ciclo: %{time}.",
                        "general.disabled": "— Desativado —",
                        "general.paused": "FarmOverflow pausado.",
                        "general.started": "FarmOverflow iniciado.",
                        "info.development1": "Desenvolvimento",
                        "info.developedBy": "Desenvolvido por",
                        "info.groupOnly1": "Usando apenas aldeias de um grupo para atacar",
                        "info.groupOnly2": "Você pode selecionar um grupo especifico para usar apenas as aldeias desse grupo para enviar os ataques.",
                        "info.ignore1": "Ignorando aldeias com grupo",
                        "info.ignore2": "Você pode selecionar um grupo nas configurações para que todas aldeias atribuidas a esse grupo sejam ignorados pelo FarmOverflow. <strong>O grupo serve tanto para os alvos quanto para suas aldeias</strong>.",
                        "info.include1": "Incluindo alvos com grupo",
                        "info.include2": "Assim como ignorar aldeias, você pode incluir como alvos aldeias de jogadores. Todas aldeias do grupo que estiverem fora da distância máxima não seram incluidas.",
                        "info.presets1": "Configurando predefinições",
                        "info.presets2": "O FarmOverflow utiliza as próprias predefinições do jogo configuradas por você, basta selecionar uma na aba configurações, salvar e iniciar!",
                        "info.presets3": "Como o jogo só permite enviar predefinições que estejam ativas na aldeia, o FarmOverflow irá ativa-las automaticamente caso já não estejam.",
                        "info.presets4": "Você pode usar mais de uma predefinição, <strong>desde que tenham o mesmo nome</strong> (você pode adicionar uma pequena descrição na frente do nome para identifica-las melhor).",
                        "info.presets5": "Veja alguns exemplos para os nomes das predefinições:",
                        "info.presets6": "Atenção com os <strong>oficiais</strong>, eles <strong>serão utilizados</strong> caso estejam ativos nas predefinições.",
                        "info.randomBase1": "Base do intervalo aleatório",
                        "info.randomBase2": "Esse intervalo é usado para gerar um tempo aleatório (em segundos) entre cada ataque evitando o FarmOverflow ser detectado. <strong>Quanto maior melhor</strong>.",
                        "info.ignoreOnLoss1": "Ignorando alvos que causam perdas",
                        "info.ignoreOnLoss2": "Qualquer ataque que tenha causado alguma perca nas suas tropas será ignorado em ataques futuros.",
                        "info.ignoreOnLoss3": '<strong>Atenção</strong>: Para essa funcionalidade funcionar é preciso ter a opção "Ignorando aldeias com grupo" configurada.',
                        "info.ignoreOnLoss4": 'Todas aldeias que forem ignoradas será avisado na aba "Avisos".',
                        "info.priorityTargets1": "Priorizando alvos",
                        "info.priorityTargets2": "Quando ativada, todos os alvos que tiverem relatórios com saque no máximo, serão adicionados na lista de prioridades para reenviar o ataque assim que possível.",
                        "info.remote1": "Controlando remotamente via mensagem",
                        "info.remote2": "Deixe o FarmOverflow funcionando em casa e o controle pelo app do jogo!",
                        "info.remote3": 'Configure o assunto da mensagem por onde você controlará o FarmOverflow na aba "Configurações"',
                        "info.remote4": "Crie uma mensagem e adicione você mesmo como destinatário. No assunto coloque o que você configurou e no corpo da mensagem use um dos seguintes comandos:",
                        "info.remote5": "inicia o farm",
                        "info.remote6": "pausa o farm",
                        "info.remote7": "recebe o status atual do farm",
                        "info.remote8": "Se você não receber uma mensagem de OK em retorno, quer dizer que o FarmOverflow não recebeu a mensagem ou que um comando inválido foi usado.",
                        "info.remote9": "Atenção: Só funciona se você for o único participante da mensagem!",
                        "info.remote10": "Você pode usar a mesma mensagem para executar outros comandos, bastando responde-la.",
                        "settings.basicSettings": "Configurações básicas",
                        "settings.eventsLimit": "Número máximo de registros",
                        "settings.groupIgnore": "Ignorar aldeias do grupo",
                        "settings.groupInclude": "Incluir alvos do grupo",
                        "settings.groupOnly": "Atacar apenas com aldeias do grupo",
                        "settings.maxDistance": "Distância máxima dos alvos",
                        "settings.maxTravelTime": "Tempo máximo de viagem",
                        "settings.minDistance": "Distância mínima dos alvos",
                        "settings.presetName": "Predefinição das tropas",
                        "settings.randomBase": "Intervalo entre cada ataque",
                        "settings.ignoreOnLoss": "Ignorar em alvos que causarem perdas",
                        "settings.save": "Salvar configurações",
                        "settings.saved": "Configurações salvas!",
                        "settings.presets": "Predefinições",
                        "settings.security": "Segurança",
                        "settings.minPoints": "Pontuação mínima dos alvos",
                        "settings.maxPoints": "Pontuação máxima dos alvos",
                        "settings.priorityTargets": "Priorizar alvos com de saque lotado",
                        "settings.eventAttack": "Mostrar registros de ataques",
                        "settings.eventVillageChange": "Mostrar registros de troca de aldeias",
                        "settings.eventPriorityAdd": "Mostrar registros de alvos prioritarios",
                        "settings.eventIgnoredVillage": "Mostrar registros de aldeias ignoradas",
                        "settings.remote": "Controle via mensagem (assunto)",
                        "settings.hotkeySwitch": "Tecla de atalho para inicar/pausar",
                        "settings.hotkeyWindow": "Tecla de atalho para abrir janela",
                        "settings.singleCycleHeader": "Opções de ciclo único",
                        "settings.singleCycle": "Ativar ciclo único de ataques",
                        "settings.singleCycleInterval": "Intervalo entre os ciclos",
                        "settings.singleCycleNotifs": "Ativar notificações dos ciclos",
                        "settings.maxAttacksPerVillage": "Máximo de ataques por aldeia",
                        "settings.ignoreFullRes": "Ignorar próprias aldeias com recursos lotados",
                        "tooltip.presets": "Selecione a predefinição que será usada para enviar os ataques.",
                        "tooltip.groupIgnore": "Selecione um grupo para que todas aldeias atribuidas a esse grupo sejam ignoradas. Tanto suas aldeias quanto alvos.",
                        "tooltip.groupInclude": "Selecione um grupo para incluir alvos que não sejam apenas aldeias bárbaras.",
                        "tooltip.groupOnly": "Selecione um grupo para que apenas as aldeias desse grupo sejam usadas para enviar os ataques.",
                        "tooltip.randomBase": "Esse intervalo é usado para gerar um tempo aleatório entre cada ataque evitando o FarmOverflow de ser detectado. O valor é em segundos.",
                        "tooltip.priorityTargets": "Quando ativada, todos os alvos que tiverem relatórios com saque no máximo, serão adicionados na lista de prioridades para reenviar o ataque assim que possível.",
                        "tooltip.ignoreOnLoss": "Qualquer ataque que tenha causado alguma perca nas suas tropas será ignorado em ataques futuros. (Só funciona quando um grupo de ignorados está selecionado)",
                        "tooltip.remote": "Configure o título da mensagem pela qual você deseja controlar o FarmOverflow remotamente (Veja a aba Informações para saber mais).",
                        "tooltip.singleCycle": "Com o ciclo único ativado, o FarmOverflow irá usar apenas uma vez as aldeias para atacar, assim que acabar o FarmOverflow será parado. Você pode configurar o intervalo abaixo se quiser que ele reinicie após o tempo especificado.",
                        "tooltip.singleCycleInterval": "Após o ciclo terminar, um novo ciclo inicirá após o tempo especificado. Deixe o campo vazio (0:00:00) se não quiser que o ciclo se reinicie.",
                        "tooltip.singleCycleNotifs": "Será mostrada uma notificação de aviso sempre que um ciclo terminar ou iniciar.",
                        "tooltip.maxAttacksPerVillage": "Reserve alguns slots de comandos para casos de emergência (cada aldeia tem um limite de 50 ataques).",
                        "settingError.minDistance": "A distância deve ser um valor entre %{min} e %{max}.",
                        "settingError.maxDistance": "A distância deve ser um valor entre %{min} e %{max}.",
                        "settingError.maxTravelTime": "O formato do tempo máximo de viagem deve ser hh:mm:ss.",
                        "settingError.randomBase": "O intervalo entre cada ataque deve ser um valor entre %{min} e %{max}.",
                        "settingError.minPoints": "A pontuação do alvo deve ser entre %{min} e %{max}.",
                        "settingError.maxPoints": "A pontuação do alvo deve ser entre %{min} e %{max}.",
                        "settingError.eventsLimit": "O número de eventos deve ser entre %{min} e %{max}.",
                        "settingError.singleCycleInterval": "O formato do intervalo entre ataques deve ser hh:mm:ss.",
                        "settingError.maxAttacksPerVillage": "A quantidade máximo de ataques por aldeia deve ser um valor entre %{min} e %{max}."
                    }
                }, "en"), x = !0;
                var b = k.get("farm-settings", {}, !0);
                ra.settingsMap = {
                    maxDistance: {
                        default: 10,
                        updates: ["targets"],
                        inputType: "text",
                        min: 0,
                        max: 50
                    },
                    minDistance: {
                        default: 0,
                        updates: ["targets"],
                        inputType: "text",
                        min: 0,
                        max: 50
                    },
                    maxTravelTime: {
                        default: "01:00:00",
                        updates: [],
                        inputType: "text",
                        pattern: /\d{1,2}\:\d{2}\:\d{2}/
                    },
                    randomBase: {
                        default: 3,
                        updates: [],
                        inputType: "text",
                        min: 0,
                        max: 9999
                    },
                    presetName: {
                        default: "",
                        updates: ["preset"],
                        inputType: "select"
                    },
                    groupIgnore: {
                        default: "",
                        updates: ["groups"],
                        inputType: "select"
                    },
                    groupInclude: {
                        default: "",
                        updates: ["groups", "targets"],
                        inputType: "select"
                    },
                    groupOnly: {
                        default: "",
                        updates: ["groups", "villages", "targets"],
                        inputType: "select"
                    },
                    minPoints: {
                        default: 0,
                        updates: ["targets"],
                        inputType: "text",
                        min: 0,
                        max: 13e3
                    },
                    maxPoints: {
                        default: 12500,
                        updates: ["targets"],
                        inputType: "text",
                        min: 0,
                        max: 13e3
                    },
                    eventsLimit: {
                        default: 20,
                        updates: ["events"],
                        inputType: "text",
                        min: 0,
                        max: 150
                    },
                    ignoreOnLoss: {
                        default: !0,
                        updates: [],
                        inputType: "checkbox"
                    },
                    priorityTargets: {
                        default: !0,
                        updates: [],
                        inputType: "checkbox"
                    },
                    eventAttack: {
                        default: !0,
                        updates: ["events"],
                        inputType: "checkbox"
                    },
                    eventVillageChange: {
                        default: !0,
                        updates: ["events"],
                        inputType: "checkbox"
                    },
                    eventPriorityAdd: {
                        default: !0,
                        updates: ["events"],
                        inputType: "checkbox"
                    },
                    eventIgnoredVillage: {
                        default: !0,
                        updates: ["events"],
                        inputType: "checkbox"
                    },
                    remoteId: {
                        default: "remote",
                        updates: [],
                        inputType: "text"
                    },
                    hotkeySwitch: {
                        default: "shift+z",
                        updates: [],
                        inputType: "text"
                    },
                    hotkeyWindow: {
                        default: "z",
                        updates: [],
                        inputType: "text"
                    },
                    singleCycle: {
                        default: !1,
                        updates: ["villages"],
                        inputType: "checkbox"
                    },
                    singleCycleNotifs: {
                        default: !1,
                        updates: [],
                        inputType: "checkbox"
                    },
                    singleCycleInterval: {
                        default: "00:00:00",
                        updates: [],
                        inputType: "text",
                        pattern: /\d{1,2}\:\d{2}\:\d{2}/
                    },
                    maxAttacksPerVillage: {
                        default: 48,
                        updates: [],
                        inputType: "text",
                        min: 1,
                        max: 50
                    },
                    ignoreFullRes: {
                        default: !0,
                        updates: ["villages"],
                        inputType: "checkbox"
                    }
                }, ra.settings = {};
                for (var c in ra.settingsMap) {
                    var d = ra.settingsMap[c].default;
                    ra.settings[c] = b[c] || d
                }
                ra.commander = ra.createCommander(), l = k.get("farm-lastEvents", [], !0), s = k.get("farm-lastActivity", i.gameTime(), !0), u = k.get("farm-lastAttack", -1, !0), v = k.get("farm-indexes", {}, !0), w = o.getSelectedCharacter(), W(), X(), Y(), Z(), $(), _(), aa(), ba(), ca(), la(), g.setRequestFn(function(a) {
                    p.emit(q.MAP_GETVILLAGES, a)
                })
            }, ra.start = function(b) {
                return I.length ? B ? (pa() && (R = {}, v = {}), ra.settings.singleCycle ? ra.cycle.start(b) : sa(), ra.updateActivity(), !0) : (!b && H && e("error", a("farm", "events.noSelectedVillage")), !1) : (!b && H && e("error", a("farm", "events.presetFirst")), !1)
            }, ra.stop = function() {
                return clearTimeout(ra.commander.timeoutId), clearTimeout(ra.cycle.getTimeoutId()), ra.commander.running = !1, ra.trigger("pause"), H && e("success", a("common", "paused")), !0
            }, ra.switch = function() {
                ra.commander.running ? ra.stop() : ra.start()
            }, ra.updateActivity = function() {
                s = i.gameTime(), k.set("farm-lastActivity", s)
            }, ra.updateSettings = function(a) {
                var b = {};
                for (var c in a) {
                    var d = ra.settingsMap[c],
                        e = a[c];
                    if (d && e !== ra.settings[c]) {
                        if (d.hasOwnProperty("pattern")) {
                            if (!d.pattern.test(e)) return ra.trigger("settingError", [c]), !1
                        } else if (d.hasOwnProperty("min") && (e < d.min || e > d.max)) return ra.trigger("settingError", [c, {
                            min: d.min,
                            max: d.max
                        }]), !1;
                        d.updates.forEach(function(a) {
                            b[a] = !0
                        }), ra.settings[c] = e
                    }
                }
                return k.set("farm-settings", ra.settings), b.groups && (W(), X()), b.villages && Y(), b.preset && (Z(), ka()), b.targets && (D = {}), b.events && ra.trigger("resetEvents"), ra.commander.running && ea(function() {
                    fa(function() {
                        ra.stop(), ra.start()
                    })
                }), ra.trigger("settingsChange", [b]), !0
            }, ra.nextTarget = function(a) {
                var b = B.id;
                if (!D[b]) return ra.commander.analyse(), !1;
                var c = D[b];
                if (ra.settings.priorityTargets && R[b])
                    for (var d; d = R[b].shift();)
                        if (!M.includes(d))
                            for (var e = 0; e < c.length; e++)
                                if (c[e].id === d) return E = c[e], !0;
                var f = v[b],
                    g = !1;
                for (a || (f = ++v[b]); f < c.length; f++) {
                    var h = c[f]; {
                        if (!M.includes(h.id)) {
                            E = h, g = !0;
                            break
                        }
                        ra.trigger("ignoredTarget", [h])
                    }
                }
                return g ? v[b] = f : (E = c[0], v[b] = 0), k.set("farm-indexes", v), !0
            }, ra.hasTarget = function() {
                var a = B.id,
                    b = v[a],
                    c = D[a];
                return !!c.length && ((void 0 === b || b > c.length) && (v[a] = b = 0), !!c[b])
            }, ra.getTargets = function(a) {
                var b = B.position,
                    e = B.id;
                if (e in D) return a();
                var f = [],
                    i = d.MAP_CHUNK_SIZE,
                    j = b.x - i,
                    l = b.y - i,
                    m = 2 * i,
                    n = 2 * i,
                    o = function() {
                        for (var a = g.loadTownData(j, l, m, n, i), b = a.length; b--;) {
                            var c = a[b],
                                d = c.data;
                            for (var e in d) {
                                var h = d[e];
                                for (var k in h) {
                                    var o = h[k],
                                        r = p(o);
                                    r && f.push(r)
                                }
                            }
                        }
                        q()
                    },
                    p = function(a) {
                        return !!T.every(function(b) {
                            return !b(a)
                        }) && {
                            x: a.x,
                            y: a.y,
                            distance: c.actualDistance(b, a),
                            id: a.id,
                            name: a.name,
                            pid: a.character_id
                        }
                    },
                    q = function() {
                        if (0 === f.length) {
                            return ra.nextVillage() ? ra.getTargets(a) : ra.trigger("noTargets"), !1
                        }
                        D[e] = f.sort(function(a, b) {
                            return a.distance - b.distance
                        }), v.hasOwnProperty(e) ? v[e] > D[e].length && (v[e] = 0, k.set("farm-indexes", v)) : (v[e] = 0, k.set("farm-indexes", v)), a()
                    };
                return function() {
                    if (g.hasTownDataInChunk(j, l)) o();
                    else {
                        ra.trigger("startLoadingTargers");
                        var a = h.scaledGridCoordinates(j, l, m, n, i),
                            b = a.length,
                            c = 0;
                        g.loadTownDataAsync(j, l, m, n, function() {
                            ++c === b && (ra.trigger("endLoadingTargers"), o())
                        })
                    }
                }()
            };
            var sa = function() {
                if (ra.commander = ra.createCommander(), ra.commander.running = !0, ra.trigger("start"), H && e("success", a("farm", "general.started")), 0 === qa().length) return void(C ? ra.trigger("noUnits") : ra.trigger("noVillages"));
                A = qa(), ra.commander.analyse()
            };
            return ra.nextVillage = function() {
                if (C) return !1;
                if (ra.settings.singleCycle) return ra.cycle.nextVillage();
                var a = A.shift();
                if (a) {
                    return qa().some(function(b) {
                        return b.id === a.id
                    }) ? (B = a, ra.trigger("nextVillage", [B]), ra.updateActivity(), !0) : ra.nextVillage()
                }
                return A = qa(), A.length ? ra.nextVillage() : (C ? ra.trigger("noUnits") : ra.trigger("noVillages"), !1)
            }, ra.bind = function(a, b) {
                F.hasOwnProperty(a) || (F[a] = []), F[a].push(b)
            }, ra.trigger = function(a, b) {
                G && F.hasOwnProperty(a) && F[a].forEach(function(a) {
                    a.apply(ra, b)
                })
            }, ra.checkPresets = function(a) {
                if (!I.length) return ra.stop(), ra.trigger("noPreset"), !1;
                var b = B.id,
                    c = o.getPresetList().getPresetsByVillageId(b),
                    d = !1,
                    e = [];
                if (I.forEach(function(a) {
                        c.hasOwnProperty(a.id) || (d = !0, e.push(a.id))
                    }), d) {
                    for (var f in c) e.push(f);
                    ha(e, a)
                } else a()
            }, ra.targetsLoaded = function() {
                return D.hasOwnProperty(B.id)
            }, ra.hasVillage = function() {
                return !!B
            }, ra.isWaiting = function() {
                return O.hasOwnProperty(B.id)
            }, ra.isIgnored = function() {
                return M.includes(B.id)
            }, ra.isAllWaiting = function() {
                for (var a = 0; a < z.length; a++) {
                    var b = z[a].id;
                    if (!O.hasOwnProperty(b)) return !1
                }
                return !0
            }, ra.setLastEvents = function(a) {
                l = a, V()
            }, ra.getLastEvents = function() {
                return l
            }, ra.getSelectedVillage = function() {
                return B
            }, ra.isSingleVillage = function() {
                return C
            }, ra.getSelectedTarget = function() {
                return E
            }, ra.isNotifsEnabled = function() {
                return H
            }, ra.getSelectedPresets = function() {
                return I
            }, ra.setWaitingVillages = function(a) {
                O[a] = !0
            }, ra.getWaitingVillages = function() {
                return O
            }, ra.setGlobalWaiting = function() {
                P = !0
            }, ra.getGlobalWaiting = function() {
                return P
            }, ra.getLastError = function() {
                return Q
            }, ra.setLastError = function(a) {
                Q = a
            }, ra.isInitialized = function() {
                return x
            }, ra.getLastAttack = function() {
                return u
            }, ra.createCommander = function() {
                return new(require("TWOverflow/Farm/Commander"))
            }, ra.setSelectedVillage = function(a) {
                B = a
            }, ra.getFreeVillages = qa, ra.disableNotifs = fa, ra
        }), define("TWOverflow/Farm/analytics", ["TWOverflow/Farm", "Lockr"], function(a, b) {
            a.analytics = function() {
                ga("create", "UA-92130203-4", "auto", "FarmOverflow");
                var c = o.getPlayer(),
                    d = c.getSelectedCharacter(),
                    e = [];
                e.push(d.getName()), e.push(d.getId()), e.push(d.getWorldId()), e.push(c.data.token), a.bind("start", function() {
                    ga("FarmOverflow.send", "event", "behavior", "start")
                }), a.bind("pause", function() {
                    ga("FarmOverflow.send", "event", "behavior", "pause")
                }), a.bind("sendCommandError", function(a) {
                    ga("FarmOverflow.send", "event", "commands", "attackError", a)
                }), a.bind("ignoredVillage", function() {
                    ga("FarmOverflow.send", "event", "commands", "ignoreTarget")
                }), a.bind("priorityTargetAdded", function() {
                    ga("FarmOverflow.send", "event", "commands", "priorityTarget")
                }), a.bind("settingsChange", function(a) {
                    var c = JSON.stringify(b.get("farm-settings"));
                    ga("FarmOverflow.send", "event", "behavior", "settingsChange", e.concat(c).join("~"))
                }), a.bind("remoteCommand", function(a) {
                    ga("FarmOverflow.send", "event", "behavior", "remoteCommand", a)
                }), a.bind("nextVillage", function(a) {
                    ga("FarmOverflow.send", "event", "behavior", "villageChange", a.id)
                }), a.bind("sendCommand", function() {
                    ga("FarmOverflow.send", "event", "commands", "attack", e.join("~"))
                })
            }
        }), define("TWOverflow/Farm/Commander", ["TWOverflow/Farm", "helper/math"], function(a, b) {
            function e() {
                return this.preventNextCommand = !1, this.timeoutId = null, this.running = !1, this
            }
            return e.prototype.analyse = function() {
                var b = this;
                if (b.running) {
                    if (!a.getSelectedPresets().length) return a.stop(), void a.trigger("noPreset");
                    if (!a.hasVillage()) return a.trigger("noVillageSelected");
                    var c = a.getSelectedVillage();
                    if (!c.loaded()) return void c.load(function() {
                        b.analyse()
                    });
                    if (a.isWaiting() || a.isIgnored()) return void(a.nextVillage() ? b.analyse() : a.trigger(a.getLastError()));
                    if (!a.targetsLoaded()) return a.getTargets(function() {
                        b.analyse()
                    });
                    if (!a.hasTarget()) return void(a.nextVillage() ? b.analyse() : a.trigger("noTargets"));
                    a.nextTarget(!0), a.checkPresets(function() {
                        if (c.countCommands() >= a.settings.maxAttacksPerVillage) return b.handleError("commandLimit");
                        var d = b.getPreset();
                        if (d.error) return b.handleError(d.error);
                        b.getPresetNext(d), b.send(d)
                    })
                }
            }, e.prototype.handleError = function(b) {
                a.setLastError(b || this.preventNextCommand), this.preventNextCommand = !1;
                var c = a.getSelectedVillage(),
                    d = c.id;
                switch (a.getLastError()) {
                    case "timeLimit":
                        a.nextTarget(), this.analyse();
                        break;
                    case "noUnits":
                        if (a.trigger("noUnits", [c]), a.setWaitingVillages(d), a.isSingleVillage()) return void(0 === c.countCommands() ? a.trigger("noUnitsNoCommands") : (a.setGlobalWaiting(), a.settings.singleCycle && a.cycle.end()));
                        a.nextVillage() ? this.analyse() : a.setGlobalWaiting();
                        break;
                    case "commandLimit":
                        if (a.setWaitingVillages(d), a.isSingleVillage()) return a.setGlobalWaiting(), a.settings.singleCycle ? a.cycle.end() : a.trigger("commandLimitSingle", [c]);
                        if (a.isAllWaiting()) return a.trigger("commandLimitMulti", [c]), a.setGlobalWaiting();
                        a.nextVillage(), this.analyse()
                }
            }, e.prototype.getPreset = function(b) {
                for (var c = !1, d = b || a.getSelectedVillage().units, e = a.getSelectedPresets(), f = 0; f < e.length; f++) {
                    var g = e[f],
                        h = !0;
                    for (var i in g.units) d[i].in_town < g.units[i] && (h = !1);
                    if (h) {
                        if (this.checkPresetTime(g)) return g;
                        c = !0
                    } else;
                }
                return {
                    error: c ? "timeLimit" : "noUnits"
                }
            }, e.prototype.getPresetNext = function(b) {
                var c = angular.copy(a.getSelectedVillage().units),
                    d = b.units;
                for (var e in d) c[e].in_town -= d[e];
                var f = this.getPreset(c);
                f.error && (this.preventNextCommand = f.error)
            }, e.prototype.checkPresetTime = function(c) {
                var e = a.getSelectedTarget(),
                    f = v.calculateTravelTime(c, {
                        barbarian: !e.pid,
                        officers: !1
                    }),
                    g = a.getSelectedVillage().position,
                    h = {
                        x: e.x,
                        y: e.y
                    },
                    i = b.actualDistance(g, h),
                    j = v.getTravelTimeForDistance(c, f, i, "attack");
                return d(a.settings.maxTravelTime) > j
            }, e.prototype.send = function(b, d) {
                if (!this.running) return !1;
                var e, f, g = this,
                    h = a.getSelectedVillage();
                return g.simulate(), e = g.onCommandError(function() {
                    f(), h.updateCommands(function() {
                        g.analyse()
                    })
                }), f = g.onCommandSend(function() {
                    e(), a.nextTarget();
                    var b;
                    b = c(a.settings.randomBase), b = 1e3 + 1e3 * b, g.timeoutId = setTimeout(function() {
                        if (g.preventNextCommand) return g.handleError();
                        g.analyse()
                    }, b), a.updateActivity()
                }), p.emit(q.SEND_PRESET, {
                    start_village: h.id,
                    target_village: a.getSelectedTarget().id,
                    army_preset_id: b.id,
                    type: "attack"
                }), !0
            }, e.prototype.onCommandSend = function(b) {
                var c = a.getSelectedVillage(),
                    d = angular.copy(c.units),
                    e = n.$on(r.VILLAGE_UNIT_INFO, function(f, g) {
                        if (c.id !== g.village_id) return !1;
                        var h = c.units;
                        if (angular.equals(d, h)) return !1;
                        a.trigger("sendCommand", [c, a.getSelectedTarget()]), e(), b()
                    });
                return e
            }, e.prototype.onCommandError = function(b) {
                var c = n.$on(r.MESSAGE_ERROR, function(d, e) {
                    return !(!e.cause || !e.code) && ("Command/sendPreset" === e.cause && ("Command/attackLimitExceeded" === e.code && (a.trigger("sendCommandError", [e.code]), c(), void b())))
                });
                return c
            }, e.prototype.simulate = function(b) {
                ! function() {
                    p.emit(q.GET_ATTACKING_FACTOR, {
                        target_id: a.getSelectedTarget().id
                    })
                }(), b && b()
            }, e
        }), define("TWOverflow/Farm/singleCycle", ["TWOverflow/Farm", "TWOverflow/locale"], function(a, b) {
            var c = [],
                d = null,
                f = {};
            f.intervalEnabled = function() {
                return !!f.getInterval()
            }, f.start = function(d) {
                a.commander = a.createCommander(), a.commander.running = !0, a.disableNotifs(function() {
                    a.trigger("start")
                });
                var g = a.getFreeVillages();
                if (0 === g.length) return void(f.intervalEnabled() ? (a.trigger("singleCycleNextNoVillages"), f.setNextCycle()) : (a.trigger("singleCycleEndNoVillages"), a.disableNotifs(function() {
                    a.stop()
                })));
                d ? a.bind("singleCycleRestart") : a.isNotifsEnabled() && e("success", b("farm", "general.started")), c = g, a.commander.analyse()
            }, f.end = function() {
                return f.intervalEnabled() ? (a.trigger("singleCycleNext"), f.setNextCycle()) : (a.trigger("singleCycleEnd"), a.disableNotifs(function() {
                    a.stop()
                })), !1
            }, f.setNextCycle = function() {
                var a = f.getInterval();
                d = setTimeout(function() {
                    f.start(!0)
                }, a)
            }, f.nextVillage = function() {
                var b = c.shift();
                return b ? a.getFreeVillages().some(function(a) {
                    return a.id === b.id
                }) ? (a.setSelectedVillage(b), a.trigger("nextVillage", [b]), !0) : f.nextVillage() : f.end()
            }, f.getInterval = function() {
                var b = a.settings.singleCycleInterval,
                    c = !1;
                return !!b && (b = b.split(/\:/g).map(function(a) {
                    return isNaN(c) && (c = !0), parseInt(a, 10)
                }), !c && (b = 1e3 * b[0] * 60 * 60 + 1e3 * b[1] * 60 + 1e3 * b[2]))
            }, f.getTimeoutId = function() {
                return d
            }, a.cycle = f
        }), define("TWOverflow/Farm/Village", ["models/CommandListModel", "models/CommandModel", "conf/village"], function(a, b, c) {
            function d(a) {
                this.original = a, this.id = a.data.villageId, this.x = a.data.x, this.y = a.data.y, this.name = a.data.name, this.units = a.unitInfo.units, this.position = a.getPosition()
            }
            return d.prototype.countCommands = function() {
                var a = this.original.getCommandListModel();
                return a.getOutgoingCommands(!0).length + a.getIncomingCommands(!0).length
            }, d.prototype.updateCommands = function(c) {
                var d = this;
                p.emit(q.GET_OWN_COMMANDS, {
                    village_id: d.id
                }, function(e) {
                    for (var f = new a([], d.id), g = 0; g < e.commands.length; g++) {
                        var h = new b(e.commands[g]);
                        f.add(h)
                    }
                    d.original.setCommandListModel(f), c()
                })
            }, d.prototype.commandsLoaded = function() {
                return this.original.isReady(c.OWN_COMMANDS)
            }, d.prototype.unitsLoaded = function() {
                return this.original.isReady(c.UNITS)
            }, d.prototype.loaded = function() {
                return !!this.original.isReady() && (!!this.original.isInitialized() && (this.commandsLoaded() && this.unitsLoaded()))
            }, d.prototype.load = function(a) {
                var b = this;
                return w.ensureVillageDataLoaded(this.id, function() {
                    b.original.isInitialized() || w.initializeVillage(b.original), a()
                })
            }, d.prototype.getResources = function() {
                return this.original.getResources().getData().resources
            }, d.prototype.getMaxStorage = function() {
                return this.original.getResources().getData().maxStorage
            }, d
        }), define("TWOverflow/Farm/interface", ["TWOverflow/Farm", "TWOverflow/locale", "TWOverflow/Interface", "TWOverflow/Interface/buttonLink", "TWOverflow/FrontButton", "helper/time", "Lockr", "ejs"], function(a, b, c, d, g, h, i, j) {
            function k() {
                y = o.getGroupList().getGroups(), x = b("farm", "general.disabled");
                var d = {
                    version: a.version,
                    author: {
                        name: "Rafael Mafra",
                        email: "mafrazzrafael@gmail.com",
                        url: "https://github.com/mafrazz"
                    },
                    locale: b
                };
                l = new c("FarmOverflow", {
                    activeTab: "info",
                    template: '<div class="win-content message-list-wrapper searchable-list ng-scope"><header class="win-head"><h2 class="ng-binding"><#= locale("farm", "title") #> <span class="small">v<#= version #></span></h2><ul class="list-btn"><li><a href="#" class="twOverflow-close size-34x34 btn-red icon-26x26-close"></a></li></ul></header><div class="win-main"><div class="tabs tabs-bg"><div class="tabs-three-col"><div class="tab" tab="info"><div class="tab-inner"><div><a href="#" class="btn-icon btn-orange"><#= locale("common", "info") #></a></div></div></div><div class="tab" tab="settings"><div class="tab-inner"><div><a href="#" class="btn-icon btn-orange"><#= locale("common", "settings") #></a></div></div></div><div class="tab" tab="log"><div class="tab-inner"><div><a href="#" class="btn-icon btn-orange"><#= locale("common", "registers") #></a></div></div></div></div></div><div class="box-paper footer has-footer-upper twOverflow-content-info"><img src="https://i.imgur.com/0ZBQWrb.png"><p class="center"><#- locale("farm", "info.developedBy") #> <a href="<#- author.url #>"><#- author.name #></a>&lt;<#- author.email #>&gt;</p><h5 class="twx-section collapse"><#- locale("farm", "info.presets1") #></h5><div><p><#- locale("farm", "info.presets2") #></p><p><#- locale("farm", "info.presets3") #></p><p><#- locale("farm", "info.presets4") #></p><p><#- locale("farm", "info.presets5") #></p><p><span class="sample">Farm (Spears), Farm "Lança", Farm {Light}</span></p><p><#- locale("farm", "info.presets6") #></p></div><h5 class="twx-section collapse"><#- locale("farm", "info.ignore1") #></h5><div><p><#- locale("farm", "info.ignore2") #></p></div><h5 class="twx-section collapse"><#- locale("farm", "info.include1") #></h5><div><p><#- locale("farm", "info.include2") #></p></div><h5 class="twx-section collapse"><#- locale("farm", "info.randomBase1") #></h5><div><p><#- locale("farm", "info.randomBase2") #></p></div><h5 class="twx-section collapse"><#- locale("farm", "info.groupOnly1") #></h5><div><p><#- locale("farm", "info.groupOnly2") #></p></div><h5 class="twx-section collapse"><#- locale("farm", "info.ignoreOnLoss1") #></h5><div><p><#- locale("farm", "info.ignoreOnLoss2") #></p><p><#- locale("farm", "info.ignoreOnLoss3") #></p></div><h5 class="twx-section collapse"><#- locale("farm", "info.priorityTargets1") #></h5><div><p><#- locale("farm", "info.priorityTargets2") #></p></div><h5 class="twx-section collapse"><#- locale("farm", "info.remote1") #></h5><div><p><#- locale("farm", "info.remote2") #></p><p><#- locale("farm", "info.remote3") #></p><p><#- locale("farm", "info.remote4") #></p><p>&bull; <b>on</b> <i><#- locale("farm", "info.remote5") #></i></p><p>&bull; <b>off</b> <i><#- locale("farm", "info.remote6") #></i></p><p>&bull; <b>status</b> <i><#- locale("farm", "info.remote7") #></i></p><p><#- locale("farm", "info.remote8") #></p><p><#- locale("farm", "info.remote9") #></p><p><#- locale("farm", "info.remote10") #></p></div><div></div></div><div class="box-paper footer has-footer-upper twOverflow-content-settings"><form class="settings"><h5 class="twx-section collapse"><#= locale("farm", "settings.basicSettings") #></h5><table class="tbl-border-light tbl-striped"><colgroup><col width="50%"><col></colgroup><tbody><tr><td><span class="icon-34x34-preset"></span> <span class="ff-cell-fix"><#= locale("farm", "settings.presetName") #></span><span class="helper" tooltip="<#= locale("farm", "tooltip.presets") #>">?</span></td><td><select data-setting="presetName" class="preset"></select></td></tr><tr><td><span class="icon-20x20-queue-indicator-short"></span> <span class="ff-cell-fix"><#= locale("farm", "settings.groupIgnore") #></span><span class="helper" tooltip="<#= locale("farm", "tooltip.groupIgnore") #>">?</span></td><td><select data-setting="groupIgnore" class="ignore"></select></td></tr><tr><td><span class="icon-20x20-queue-indicator-long"></span> <span class="ff-cell-fix"><#= locale("farm", "settings.groupInclude") #></span><span class="helper" tooltip="<#= locale("farm", "tooltip.groupInclude") #>">?</span></td><td><select data-setting="groupInclude" class="include"></select></td></tr><tr><td><span class="icon-20x20-favourite"></span> <span class="ff-cell-fix"><#= locale("farm", "settings.groupOnly") #></span><span class="helper" tooltip="<#= locale("farm", "tooltip.groupOnly") #>">?</span></td><td><select data-setting="groupOnly" class="only"></select></td></tr><tr><td><span class="ff-cell-fix"><#= locale("farm", "settings.randomBase") #></span><span class="helper" tooltip="<#= locale("farm", "tooltip.randomBase") #>">?</span></td><td><input data-setting="randomBase" type="number" class="textfield-border" min="0" required></td></tr><tr><td><span class="ff-cell-fix"><#= locale("farm", "settings.maxAttacksPerVillage") #></span><span class="helper" tooltip="<#= locale("farm", "tooltip.maxAttacksPerVillage") #>">?</span></td><td><input data-setting="maxAttacksPerVillage" type="number" class="textfield-border" min="0" max="50" required></td></tr><tr><td><span class="icon-34x34-name_changed"></span> <span class="ff-cell-fix"><#= locale("farm", "settings.priorityTargets") #></span><span class="helper" tooltip="<#= locale("farm", "tooltip.priorityTargets") #>">?</span></td><td><label class="size-26x26 btn-orange icon-26x26-checkbox" for="settings-priorityTargets"><input id="settings-priorityTargets" type="checkbox" data-setting="priorityTargets"></label></td></tr><tr><td><span class="ff-cell-fix"><#- locale("farm", "settings.ignoreOnLoss") #></span><span class="helper" tooltip="<#= locale("farm", "tooltip.ignoreOnLoss") #>">?</span></td><td><label class="size-26x26 btn-orange icon-26x26-checkbox" for="settings-ignoreOnLoss"><input id="settings-ignoreOnLoss" type="checkbox" data-setting="ignoreOnLoss"></label></td></tr><tr><td><span class="ff-cell-fix"><#- locale("farm", "settings.ignoreFullRes") #></span></td><td><label class="size-26x26 btn-orange icon-26x26-checkbox" for="settings-ignoreFullRes"><input id="settings-ignoreFullRes" type="checkbox" data-setting="ignoreFullRes"></label></td></tr></tbody></table><h5 class="twx-section collapse"><#= locale("farm", "settings.singleCycleHeader") #></h5><table class="tbl-border-light tbl-striped"><colgroup><col width="50%"><col></colgroup><tbody><tr><td><span class="ff-cell-fix"><#= locale("farm", "settings.singleCycle") #></span><span class="helper" tooltip="<#= locale("farm", "tooltip.singleCycle") #>">?</span></td><td><label class="size-26x26 btn-orange icon-26x26-checkbox" for="settings-singleCycle"><input id="settings-singleCycle" type="checkbox" data-setting="singleCycle"></label></td></tr><tr><td><span class="ff-cell-fix"><#= locale("farm", "settings.singleCycleNotifs") #></span><span class="helper" tooltip="<#= locale("farm", "tooltip.singleCycleNotifs") #>">?</span></td><td><label class="size-26x26 btn-orange icon-26x26-checkbox" for="settings-singleCycleNotifs"><input id="settings-singleCycleNotifs" type="checkbox" data-setting="singleCycleNotifs"></label></td></tr><tr><td><span class="ff-cell-fix"><#= locale("farm", "settings.singleCycleInterval") #></span><span class="helper" tooltip="<#= locale("farm", "tooltip.singleCycleInterval") #>">?</span></td><td><input data-setting="singleCycleInterval" type="text" class="textfield-border" placeholder="00:00:00"></td></tr></tbody></table><h5 class="twx-section collapse"><#= locale("common", "filters") #></h5><table class="tbl-border-light tbl-striped"><colgroup><col width="50%"><col></colgroup><tbody><tr><td><span class="icon-26x26-double-arrow"></span> <span class="ff-cell-fix"><#= locale("farm", "settings.minDistance") #></span></td><td><input data-setting="minDistance" type="number" class="textfield-border" min="0" max="60" required></td></tr><tr><td><span class="icon-26x26-double-arrow"></span> <span class="ff-cell-fix"><#= locale("farm", "settings.maxDistance") #></span></td><td><input data-setting="maxDistance" type="number" class="textfield-border" min="1" max="60" required></td></tr><tr><td><span class="icon-34x34-points-per-village"></span> <span class="ff-cell-fix"><#= locale("farm", "settings.minPoints") #></span></td><td><input data-setting="minPoints" type="number" class="textfield-border" required></td></tr><tr><td><span class="icon-34x34-points-per-village"></span> <span class="ff-cell-fix"><#= locale("farm", "settings.maxPoints") #></span></td><td><input data-setting="maxPoints" type="number" class="textfield-border" required></td></tr><tr><td><span class="icon-26x26-time"></span> <span class="ff-cell-fix"><#= locale("farm", "settings.maxTravelTime") #></span></td><td><input data-setting="maxTravelTime" type="text" class="textfield-border" pattern="\\d{1,2}:\\d{1,2}:\\d{1,2}" required></td></tr></tbody></table><h5 class="twx-section collapse"><#= locale("common", "registers") #></h5><table class="tbl-border-light tbl-striped"><colgroup><col width="50%"><col></colgroup><tbody><tr><td><span class="icon-26x26-info"></span> <span class="ff-cell-fix"><#= locale("farm", "settings.eventsLimit") #></span></td><td><input data-setting="eventsLimit" type="number" class="textfield-border" min="1" required></td></tr><tr><td><#= locale("farm", "settings.eventAttack") #></td><td><label class="size-26x26 btn-orange icon-26x26-checkbox" for="settings-eventAttack"><input id="settings-eventAttack" type="checkbox" data-setting="eventAttack"></label></td></tr><tr><td><#= locale("farm", "settings.eventVillageChange") #></td><td><label class="size-26x26 btn-orange icon-26x26-checkbox" for="settings-eventVillageChange"><input id="settings-eventVillageChange" type="checkbox" data-setting="eventVillageChange"></label></td></tr><tr><td><#= locale("farm", "settings.eventPriorityAdd") #></td><td><label class="size-26x26 btn-orange icon-26x26-checkbox" for="settings-eventPriorityAdd"><input id="settings-eventPriorityAdd" type="checkbox" data-setting="eventPriorityAdd"></label></td></tr><tr><td><#= locale("farm", "settings.eventIgnoredVillage") #></td><td><label class="size-26x26 btn-orange icon-26x26-checkbox" for="settings-eventIgnoredVillage"><input id="settings-eventIgnoredVillage" type="checkbox" data-setting="eventIgnoredVillage"></label></td></tr></tbody></table><h5 class="twx-section collapse"><#= locale("common", "others") #></h5><table class="tbl-border-light tbl-striped"><colgroup><col width="50%"><col></colgroup><tbody><tr><td><span class="icon-26x26-message-misc"></span> <span class="ff-cell-fix"><#= locale("farm", "settings.remote") #></span><span class="helper" tooltip="<#= locale("farm", "tooltip.remote") #>">?</span></td><td><input data-setting="remoteId" type="text" class="textfield-border" min="3" max="45"></td></tr><tr><td><#= locale("farm", "settings.hotkeySwitch") #></td><td><input data-setting="hotkeySwitch" type="text" class="textfield-border"></td></tr><tr><td><#= locale("farm", "settings.hotkeyWindow") #></td><td><input data-setting="hotkeyWindow" type="text" class="textfield-border"></td></tr></tbody></table></form></div><div class="box-paper footer has-footer-upper twOverflow-content-log"><div class="screen-tribe-news rich-text"><h5 class="twx-section collapse"><#= locale("common", "status") #></h5><table class="tbl-border-light tbl-news tbl-big-header"><colgroup><col width="135px"><col width="*"></colgroup><tbody><tr class="list-item"><td class="status" colspan="2" class="cell-center"><#= locale("common", "paused") #></td></tr><tr class="reduced"><td><#= locale("farm", "events.selectedVillage") #></td><td class="selected"></td></tr><tr class="reduced"><td><#= locale("farm", "events.lastAttack") #></td><td class="last"><#= locale("common", "none") #></td></tr></tbody></table><h5 class="twx-section collapse"><#= locale("common", "registers") #></h5><table class="tbl-border-light tbl-news tbl-big-header"><colgroup><col width="76px"><col></colgroup><tbody class="events"><tr class="reduced nothing"><td colspan="2"><div><span><#= locale("farm", "events.nothingYet") #></span></div></td></tr></tbody></table></div></div></div><footer class="win-foot"><ul class="list-btn list-center"><li class="twOverflow-button-settings"><a class="btn-orange btn-border save"><#= locale("farm", "settings.save") #></a></li><li><a class="btn-green btn-border start"><#= locale("common", "start") #></a></li></ul></footer></div>',
                    replaces: d,
                    css: '#FarmOverflow input[type="text"],#FarmOverflow input[type="number"],#FarmOverflow select{color:#000;min-width:70%}#FarmOverflow .info a{font-weight:bold;color:#544231}#FarmOverflow .settings .helper{font-weight:bold;vertical-align:-1px;font-family:helvetica;color:rgba(0,0,0,0.3)}#FarmOverflow .settings .helper:hover{color:#000}#FarmOverflow .settings [class^="icon-"]{display:inline;margin:0 9px 0 0}#FarmOverflow .settings .icon-34x34-preset,#FarmOverflow .settings .icon-26x26-time,#FarmOverflow .settings .icon-26x26-info,#FarmOverflow .settings .icon-26x26-double-arrow{zoom:.6}#FarmOverflow .settings .icon-20x20-queue-indicator-short,#FarmOverflow .settings .icon-20x20-queue-indicator-long,#FarmOverflow .settings .icon-20x20-favourite{vertical-align:0;margin:0 5px 0 0}#FarmOverflow .settings .icon-34x34-preset,#FarmOverflow .settings .icon-26x26-time{vertical-align:3px}#FarmOverflow .settings .icon-26x26-double-arrow{vertical-align:4px}#FarmOverflow .settings .icon-26x26-info{vertical-align:5px}#FarmOverflow .settings .icon-34x34-points-per-village,#FarmOverflow .settings .icon-34x34-name_changed{zoom:.5;vertical-align:6px}#FarmOverflow .settings .icon-26x26-message-misc{vertical-align:1px}#FarmOverflow .settings .icon-34x34-general{zoom:.5}#FarmOverflow .settings .icon-26x26-time-spy{zoom:.7}#FarmOverflow .settings td{text-align:center}#FarmOverflow .events tr{height:30px}#FarmOverflow .events tr td.tribe-event-time{white-space:nowrap}'
                }), n = new g("Farm"), n.hover(N), n.click(function() {
                    l.openWindow()
                }), p = $(l.$window), q = p.find(".events"), r = p.find(".last"), s = p.find(".status"), t = p.find(".start"), v = p.find(".settings"), w = p.find(".preset"), z = {
                    groupIgnore: p.find(".ignore"),
                    groupInclude: p.find(".include"),
                    groupOnly: p.find(".only")
                }, a.bind("sendCommand", function(c, d) {
                    if (s.html(b("farm", "events.attacking")), K(h.gameTime()), !a.settings.eventAttack) return !1;
                    H({
                        links: {
                            origin: {
                                type: "village",
                                name: f(c),
                                id: c.id
                            },
                            target: {
                                type: "village",
                                name: f(d),
                                id: d.id
                            }
                        },
                        icon: "attack-small",
                        type: "sendCommand"
                    })
                }), a.bind("nextVillage", function(b) {
                    if (J(), !a.settings.eventVillageChange) return !1;
                    H({
                        links: {
                            village: {
                                type: "village",
                                name: f(b),
                                id: b.id
                            }
                        },
                        icon: "village",
                        type: "nextVillage"
                    })
                }), a.bind("ignoredVillage", function(b) {
                    if (!a.settings.eventIgnoredVillage) return !1;
                    H({
                        links: {
                            target: {
                                type: "village",
                                name: f(b),
                                id: b.id
                            }
                        },
                        icon: "check-negative",
                        type: "ignoredVillage"
                    })
                }), a.bind("priorityTargetAdded", function(b) {
                    if (!a.settings.eventPriorityAdd) return !1;
                    H({
                        links: {
                            target: {
                                type: "village",
                                name: f(b),
                                id: b.id
                            }
                        },
                        icon: "parallel-recruiting",
                        type: "priorityTargetAdded"
                    })
                }), a.bind("noPreset", function() {
                    H({
                        icon: "info",
                        type: "noPreset"
                    }), s.html(b("common", "paused"))
                }), a.bind("noUnits", function() {
                    a.isSingleVillage() && s.html(b("farm", "events.noUnits"))
                }), a.bind("noUnitsNoCommands", function() {
                    s.html(b("farm", "events.noUnitsNoCommands"))
                }), a.bind("start", function() {
                    s.html(b("farm", "events.attacking"))
                }), a.bind("pause", function() {
                    s.html(b("common", "paused"))
                }), a.bind("noVillages", function() {
                    s.html(b("farm", "events.noVillages"))
                }), a.bind("singleCycleEnd", function() {
                    s.html(b("farm", "events.singleCycleEnd"))
                }), a.bind("singleCycleNext", function() {
                    var c = h.gameTime() + a.cycle.getInterval();
                    s.html(b("farm", "events.singleCycleNext", {
                        time: m(c)
                    }))
                }), a.bind("singleCycleNextNoVillages", function() {
                    var c = h.gameTime() + a.cycle.getInterval();
                    s.html(b("farm", "events.singleCycleNextNoVillages", {
                        time: m(c)
                    }))
                }), a.bind("villagesUpdate", function() {
                    J()
                }), a.bind("startLoadingTargers", function() {
                    s.html(b("farm", "events.loadingTargets"))
                }), a.bind("endLoadingTargers", function() {
                    s.html(b("farm", "events.analyseTargets"))
                }), a.bind("attacking", function() {
                    s.html(b("farm", "events.attacking"))
                }), a.bind("commandLimitSingle", function() {
                    s.html(b("farm", "events.commandLimit"))
                }), a.bind("commandLimitMulti", function() {
                    s.html(b("farm", "events.noVillages"))
                }), a.bind("resetEvents", function() {
                    A = 0, F()
                }), a.bind("groupsChanged", function() {
                    L()
                }), a.bind("presetsLoaded", function() {
                    M()
                }), a.bind("presetsChange", function() {
                    M()
                }), a.bind("start", function() {
                    t.html(b("common", "pause")), t.removeClass("btn-green").addClass("btn-red"), n.$elem.removeClass("btn-green").addClass("btn-red")
                }), a.bind("pause", function() {
                    t.html(b("common", "start")), t.removeClass("btn-red").addClass("btn-green"), n.$elem.removeClass("btn-red").addClass("btn-green")
                }), a.bind("settingError", function(a, c) {
                    e("error", b("farm", "settingError." + a, c))
                }), o.getPresetList().isLoaded() && M(), E(), G(), L(), J(), K(), F()
            }
            var l, n, p, q, r, s, t, v, w, x, y, z, A = 1,
                B = /(\(|\{|\[|\"|\')[^\)\}\]\"\']+(\)|\}|\]|\"|\')/,
                C = function(a) {
                    p.find("[data-setting]").forEach(function(b) {
                        var c = b.dataset.setting;
                        a(b, c)
                    })
                },
                D = function() {
                    var c = {};
                    return C(function(b, d) {
                        switch (a.settingsMap[d].inputType) {
                            case "text":
                                c[d] = "number" === b.type ? parseInt(b.value, 10) : b.value;
                                break;
                            case "select":
                                c[d] = b.dataset.value;
                                break;
                            case "checkbox":
                                c[d] = b.checked
                        }
                    }), !!a.updateSettings(c) && (e("success", b("farm", "settings.saved")), !0)
                },
                E = function() {
                    C(function(b, c) {
                        switch (a.settingsMap[c].inputType) {
                            case "text":
                                b.value = a.settings[c];
                                break;
                            case "select":
                                b.dataset.value = a.settings[c];
                                break;
                            case "checkbox":
                                a.settings[c] && (b.checked = !0, b.parentElement.classList.add("icon-26x26-checkbox-checked"))
                        }
                    })
                },
                F = function() {
                    var b = a.getLastEvents();
                    b.length > 0 && q.find(".nothing").remove(), b.some(function(b) {
                        return A >= a.settings.eventsLimit || !(!a.settings.eventAttack && "sendCommand" === b.type) && (!(!a.settings.eventVillageChange && "nextVillage" === b.type) && (!(!a.settings.eventPriorityAdd && "priorityTargetAdded" === b.type) && (!(!a.settings.eventIgnoredVillage && "ignoredVillage" === b.type) && void H(b, !0))))
                    })
                },
                G = function() {
                    u.add(a.settings.hotkeySwitch, function() {
                        a.switch()
                    }), u.add(a.settings.hotkeyWindow, function() {
                        l.openWindow()
                    }), t.on("click", function() {
                        a.switch()
                    }), p.find(".save").on("click", function(a) {
                        D()
                    })
                },
                H = function(b, c) {
                    q.find(".nothing").remove(), A >= a.settings.eventsLimit && q.find("tr:last-child").remove();
                    var d = a.getLastEvents();
                    d.length >= a.settings.eventsLimit && d.pop(), I(q, b, c), A++, c || (b.timestamp = h.gameTime(), d.unshift(b), a.setLastEvents(d))
                },
                I = function(a, c, e) {
                    var f = {},
                        g = {},
                        i = c.links,
                        k = c.timestamp || h.gameTime(),
                        n = document.createElement("tr");
                    if (i) {
                        for (var o in i) f[o] = d(i[o].type, i[o].name, i[o].id), g[o] = '<a id="' + f[o].id + '"></a>';
                        c.content = b("farm", "events." + c.type, g)
                    }
                    var p = m(k),
                        q = m(k, "HH:mm:ss");
                    if (n.innerHTML = j.render('<td class="tribe-event-time" tooltip="<#= longDate #>"><#= shortDate #></td><td class="tribe-event-detail"><span class="icon-bg-black icon-26x26-<#= icon #>"></span><div class="text-tribe-news"><span><#- content #></span></div></td>', {
                            longDate: p,
                            shortDate: q,
                            icon: c.icon,
                            content: c.content
                        }), i)
                        for (var o in f) n.querySelector("#" + f[o].id).replaceWith(f[o].elem);
                    a[e ? "append" : "prepend"](n), l.isVisible("log") && l.recalcScrollbar(), l.setTooltips()
                },
                J = function() {
                    var c = p.find(".selected"),
                        e = a.getSelectedVillage();
                    if (!e) return c.html(b("common", "none"));
                    var g = d("village", f(e), e.id);
                    c.html(""), c.append(g.elem)
                },
                K = function(b) {
                    if (!b && -1 === (b = a.getLastAttack())) return !1;
                    r.html(m(b)), N()
                },
                L = function() {
                    for (var b in z) {
                        var c = z[b].find(".custom-select-handler").html(""),
                            d = z[b].find(".custom-select-data").html("");
                        O(d, "0");
                        for (var e in y) {
                            var f = y[e].name;
                            a.settings[b];
                            "" === a.settings[b] ? (c.html(x), z[b][0].dataset.name = x, z[b][0].dataset.value = "") : a.settings[b] == e && (c.html(f), z[b][0].dataset.name = f, z[b][0].dataset.value = e), P(d, {
                                name: f,
                                value: e,
                                icon: y[e].icon
                            }), z[b].append(d)
                        }
                        a.settings[b] || c.html(x)
                    }
                },
                M = function() {
                    var b = {},
                        c = o.getPresetList().presets,
                        d = !1,
                        e = a.settings.presetName,
                        f = w.find(".custom-select-handler").html(""),
                        g = w.find(".custom-select-data").html("");
                    O(g);
                    for (var h in c) {
                        var i = c[h].name.replace(B, "").trim();
                        i in b || i && ("" === e ? (f.html(x), w[0].dataset.name = x, w[0].dataset.value = "") : e === i && (f.html(i), w[0].dataset.name = i, w[0].dataset.value = i, d = !0), P(g, {
                            name: i,
                            value: i,
                            icon: "size-34x34 icon-26x26-preset"
                        }), b[i] = !0)
                    }
                    d || (f.html(x), w[0].dataset.name = x, w[0].dataset.value = "")
                },
                N = function() {
                    var a = b("farm", "events.lastAttack"),
                        c = a + ": " + r.html();
                    n.updateQuickview(c)
                },
                O = function(a, b) {
                    var c = document.createElement("span");
                    c.dataset.name = x, c.dataset.value = b || "", a.append(c)
                },
                P = function(a, b) {
                    var c = document.createElement("span");
                    for (var d in b) c.dataset[d] = b[d];
                    a.append(c)
                };
            a.interface = k
        }), require(["TWOverflow/ready", "TWOverflow/Farm", "TWOverflow/Farm/interface", "TWOverflow/Farm/analytics", "TWOverflow/Farm/singleCycle"], function(a, b) {
            if (b.isInitialized()) return !1;
            a(function() {
                b.init(), b.interface(), b.analytics()
            })
        }), define("TWOverflow/Interface", ["queues/EventQueue", "helper/dom", "ejs"], function(b, c, d) {
            function e(a, b) {
                var c = this;
                return g.push(c), c.windowId = a, c.activeTab = b.activeTab, c.settings = b, i(a, b.css), c.buildWindow(), c.bindTabs(), c.setCollapse(), c.setTooltips(), c.setCheckboxes(), c.setSelects(), c.$window.querySelector(".twOverflow-close").addEventListener("click", function() {
                    c.closeWindow()
                }), n.$on(r.WINDOW_CLOSED, function() {
                    c.closeWindow()
                }), c
            }
            var f = !1,
                g = [],
                h = function() {
                    g.forEach(function(a) {
                        a.closeWindow()
                    })
                },
                i = function(a, b) {
                    var c = document.createElement("style");
                    c.type = "text/css", c.id = "twOverflow-style-" + a, c.innerHTML = b, document.querySelector("head").appendChild(c)
                },
                j = function(b) {
                    var c = !1,
                        d = document.createElement("span"),
                        e = document.createElement("span"),
                        f = document.createElement("span"),
                        g = document.createElement("span"),
                        h = function(a) {
                            k(a.srcElement || a.target, ".custom-select") || i()
                        },
                        i = function() {
                            n.$broadcast(r.SELECT_HIDE, "custom-select"), $(a).off("click", h), $(".win-main").off("mousewheel", i), c = !1, m()
                        },
                        j = function(a, b) {
                            e.innerHTML = a.name, d.dataset.name = a.name, d.dataset.value = a.value, $(d).trigger("selectSelected"), i()
                        },
                        l = function() {
                            f.classList.remove("icon-26x26-arrow-down"), f.classList.add("icon-26x26-arrow-up")
                        },
                        m = function() {
                            f.classList.remove("icon-26x26-arrow-up"), f.classList.add("icon-26x26-arrow-down")
                        };
                    b.querySelectorAll("option").forEach(function(a) {
                        var b = document.createElement("span");
                        b.dataset.name = a.innerText, b.dataset.value = a.value, g.appendChild(b), a.hasAttribute("selected") && (e.innerHTML = a.innerText, d.dataset.name = a.innerText, d.dataset.value = a.value)
                    });
                    for (var o in b.dataset) d.dataset[o] = b.dataset[o];
                    d.className = "custom-select " + b.className, f.className = "custom-select-button icon-26x26-arrow-down", e.className = "custom-select-handler", g.className = "custom-select-data", d.appendChild(e), d.appendChild(f), d.appendChild(g), d.addEventListener("click", function() {
                        if (c) return i();
                        var b = g.querySelectorAll("span"),
                            f = [],
                            k = {};
                        b.forEach(function(a) {
                            var b = {
                                name: a.dataset.name,
                                value: a.dataset.value
                            };
                            a.dataset.icon && (b.leftIcon = isNaN(a.dataset.icon) ? a.dataset.icon : parseInt(a.dataset.icon, 10)), a.dataset.name === e.innerHTML && (k = b), f.push(b)
                        }), n.$broadcast(r.SELECT_SHOW, "custom-select", f, k, j, d, !0), c = !0, l(), $(".win-main").on("mousewheel", i), $(a).on("click", h)
                    }), b.replaceWith(d)
                };
            return e.prototype.buildWindow = function() {
                this.$wrapper = $("#wrapper"), this.$window = document.createElement("section"), this.$window.id = this.windowId, this.$window.className = "twOverflow-window twx-window screen left", this.$window.innerHTML = d.render(this.settings.template, this.settings.replaces), this.$wrapper.append(this.$window), this.$scrollbar = jsScrollbar(this.$window.querySelector(".win-main"))
            }, e.prototype.openWindow = function() {
                t.closeAll(), h(), this.$window.style.visibility = "visible", this.$wrapper.addClass("window-open"), this.resizeWindowFrame()
            }, e.prototype.resizeWindowFrame = function() {
                b.trigger(b.types.RESIZE, {
                    instant: !0,
                    right: !0
                })
            }, e.prototype.closeWindow = function() {
                this.$window.style.visibility = "hidden", this.$wrapper.removeClass("window-open"), this.resizeWindowFrame()
            }, e.prototype.toggleWindow = function(a) {
                this.$window.style.visibility = a, this.$wrapper.toggleClass("window-open"), this.resizeWindowFrame()
            }, e.prototype.tabsState = function() {
                var a = this;
                a.$tabs.forEach(function(b) {
                    var c = b.getAttribute("tab"),
                        d = a.$window.querySelector(".twOverflow-content-" + c),
                        e = a.$window.querySelectorAll(".twOverflow-button-" + c),
                        f = b.querySelector(".tab-inner > div"),
                        g = b.querySelector("a");
                    a.activeTab === c ? (d.style.display = "", b.classList.add("tab-active"), f.classList.add("box-border-light"), g.classList.remove("btn-icon", "btn-orange"), e.length && e.forEach(function(a) {
                        a.style.display = ""
                    }), a.$scrollbar.content = d) : (d.style.display = "none", b.classList.remove("tab-active"), f.classList.remove("box-border-light"), g.classList.add("btn-icon", "btn-orange"), e.length && e.forEach(function(a) {
                        a.style.display = "none"
                    })), a.recalcScrollbar()
                })
            }, e.prototype.bindTabs = function() {
                var a = this;
                a.$tabs = a.$window.querySelectorAll(".tab"), a.$tabs.forEach(function(b) {
                    var c = b.getAttribute("tab");
                    b.addEventListener("click", function() {
                        a.activeTab = c, a.tabsState()
                    })
                }), a.tabsState()
            }, e.prototype.destroy = function() {
                document.querySelector("#twOverflow-style-" + this.windowId).remove(), this.$window.remove()
            }, e.prototype.setCollapse = function() {
                var a = this;
                a.$window.querySelectorAll(".twx-section.collapse").forEach(function(b) {
                    var c = !b.classList.contains("hidden-content"),
                        d = document.createElement("span");
                    d.className = "min-max-btn";
                    var e = document.createElement("a");
                    e.className = "btn-orange icon-26x26-" + (c ? "minus" : "plus"), c || (b.nextSibling.style.display = "none"), d.appendChild(e), b.appendChild(d), d.addEventListener("click", function() {
                        "none" === b.nextSibling.style.display ? (b.nextSibling.style.display = "", e.className = e.className.replace("plus", "minus"), c = !0) : (b.nextSibling.style.display = "none", e.className = e.className.replace("minus", "plus"), c = !1), a.recalcScrollbar()
                    })
                })
            }, e.prototype.setTooltips = function() {
                var a = this,
                    b = $("#tooltip");
                b.find(".tooltip-content-wrapper");
                a.$window.querySelectorAll("[tooltip]").forEach(function(a) {
                    var b = a.getAttribute("tooltip");
                    a.removeAttribute("tooltip"), a.addEventListener("mouseenter", function(a) {
                        n.$broadcast(r.TOOLTIP_SHOW, "twoverflow-tooltip", b, !0, a)
                    }), a.addEventListener("mouseleave", function() {
                        n.$broadcast(r.TOOLTIP_HIDE, "twoverflow-tooltip")
                    })
                })
            }, e.prototype.setCheckboxes = function() {
                this.$window.querySelectorAll("input[type=checkbox]").forEach(function(a) {
                    a.addEventListener("click", function() {
                        $(a).parent().toggleClass("icon-26x26-checkbox-checked")
                    })
                })
            }, e.prototype.isVisible = function(a) {
                var b = "visible" === this.$window.style.visibility;
                return b && a && (b = this.activeTab === a), b
            }, e.prototype.recalcScrollbar = function() {
                this.$scrollbar.recalc()
            }, e.prototype.setSelects = function() {
                this.$window.querySelectorAll("select").forEach(function(a) {
                    j(a)
                })
            }, e.init = function() {
                f = !0, i("own", '#twOverflow-leftbar{position:relative;top:0;left:0;margin-bottom:7px}#twOverflow-leftbar .button{white-space:nowrap;position:relative;top:-17px;left:0;width:60px;height:24px}#twOverflow-leftbar .label,#twOverflow-leftbar .quickview{margin:5px 0;font-size:12px}#twOverflow-leftbar .quickview{display:none}#wrapper.window-open #twOverflow-leftbar .button{left:720px}.twOverflow-window{visibility:hidden}.twOverflow-window h3{color:#000}.twOverflow-window p{color:#000;margin:7px 0;padding:0 40px}.twOverflow-window p span.sample{font-weight:bold;font-style:italic}.twOverflow-window p span.brazil{color:green;font-weight:bold}.twOverflow-window p .opensource{background:url(https://i.imgur.com/KFHdWXN.png);width:15px;height:15px;display:inline-block;vertical-align:-2px}.twOverflow-window input::placeholder{color:#6d563c}.twOverflow-window input[type="text"],.twOverflow-window input[type="number"],.twOverflow-window select{color:black;text-align:center}.twOverflow-window select{width:100%;padding:0 0 0 5px;font-size:14px;border:1px solid #976543;height:28px;text-decoration:none;text-align-last:center;border-radius:2px;font-weight:600;font-family:"Trebuchet MS";color:white;box-shadow:0 0 0 1px #421f09 inset,0 0 0 2px #976543 inset,0 0 0 3px #421f09 inset,0 -1px 1px 4px rgba(215,181,144,0.7) inset,0 0 1px 5px rgba(0,0,0,0.4) inset;-webkit-appearance:none;-moz-appearance:none;outline:none;background-image:url(https://i.imgur.com/SlaWRrX.png),url(https://i.imgur.com/e2qKrmX.png);background-repeat:no-repeat,repeat;background-position:293px -3px,top left;background-color:#b28e68}.twOverflow-window .custom-select{position:relative;display:inline-block;min-width:70%}.twOverflow-window .custom-select .custom-select-button{height:21px;position:absolute;right:1px;top:1px}.twOverflow-window .custom-select .custom-select-handler{text-align:center;line-height:25px;height:25px;display:block;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAALRQTFRFr6+vmJiYoKCgrKysq6urpaWltLS0s7OzsLCwpKSkm5ubqKiojY2NlZWVk5OTqampbGxsWFhYUVFRhISEgYGBmpqaUFBQnp6eYmJidnZ2nZ2dY2NjW1tbZ2dnoaGhe3t7l5eXg4ODVVVVWVlZj4+PXFxcVlZWkpKSZmZmdXV1ZWVlc3NzjIyMXl5eVFRUeHh4hoaGYWFhXV1dbW1tampqb29veXl5fHx8gICAiYmJcnJyTk5Ooj6l1wAAADx0Uk5TGhkZGhoaGxoaGRkaGRkZGhkbHBgYGR0ZGhkZGhsZGRgZGRwbGRscGRoZGhkZGhwZGRobGRkZGRkZGRkeyXExWQAABOJJREFUSMeNVgdy4zgQxIW9TQ7KOVEUo5gz0f//1/WA0sple6+OLokQiUk9PQ2rvlzvT0vA6xDXU3R5hQmqddDVaIELsMl3KLUGoFHugUphjt25PWkE6KMAqPkO/Qh7HRadPmTNxKJpWuhSjLZAoSZmXYoPXh0w2R2z10rjBxpMNRfomhbNFUfUFbfUCh6TWmO4ZqNn6Jxekx6lte3h9IgYv9ZwzIZXfhQ/bejmsYkgOeVInoDGT6KGP9MMbsj7mtEKphKgVFKkJGUM+r/00zybNkPMFWYske+jY9hUblbrK4YosyPtrxl+5kNRWSb2B3+pceKT05SQRPZY8pVSGoWutgen2junRVKPZJ0v5Nu9HAk/CFPr+T1XTkXYFWSJXfTyLPcpcPXtBZIPONq/cFQ0Y0Lr1GF6f5doHdm2RLTbQMpMmCIf/HGm53OLFPiiEOsBKtgHccgKTVwn8l7kbt3iPvqniMX4jgWj4aqlX43xLwXVet5XTG1cYp/29m58q6ULSa7V0M3UQFyjd+AD+1W9WLBpDd9uej7emFbea/+Yw8faySElQQrBDksTpTOVIG/SE2HpPvZsplJWsblRLEGXATEW9YLUY1rPSdivBDmuK3exNiAysfPALfYZFWJrsA4Zt+fftEeRY0UsMDqfyNCKJpdrtI1r2k0vp9LMSwdO0u5SpjBeEYz5ebhWNbwT2g7OJXy1vjW+pEwyd1FTkAtbzzcbmX1yZlkR2pPiXZ/mDbPNWvHRsaKfLH8+FqiZbnodbOK9RGWlNMli8k+wsgbSNwS35QB6qxn53xhu2DFqUilisB9q2Zqw4nNI9tOB2z8GbkvEdNjPaD2j+9pwEC+YlWJvI7xN7xMC09eqhq/qwRvz3JWcFWmkjrWBWSiOysEmc4LmMb0iSsxR8+Z8pk3+oE39cdAmh1xSDXuAryRLZgpp9V62+8IOeBSICjs8LlbtKGN4E7XGoGASIJ+vronVa5mjagPHIFJA2b+BKkZC5I/78wOqmzYp1N8vzTkWIWz6YfsS3eh3w8pBkfKz6TSLxK9Qai5DUGTMZ8NNmrW8ldNudIJq+eJycwjv+xbeOJwPv1jjsSV/rCBaS/IBrafaUQ+5ksHwwl9y9X7kmvvIKWoBDFvbWySGyMU3XflxZRkNeRU63otWb0+P8H8BrRokbJivpWkk6m6LccSlrC2K0i6+4otx4dN3mbAVKt0wbaqBab4/MW8rgrS8JP06HU6UYSTYsQ5pYETpo87ZonORvbPlvYbXwmsMgoQGKr8PUQ5dDEO0EcXp2oOfSk+YpR/Eg4R46O0/Sf7jVnbqbXBrRkCPsZFOQTN8h+aqlcRw9FjJ/j8V7SXZ3hVNXYsOYcxzpfPNgFrvB9S6Dej2PqDqq0su+5ng0WMi527p/pA+OiW0fsYzDa6sPS9C1qxTtxVRMuySrwPD6qGPRKc4uIx4oceJ9FPjxWaqPPebzyXxU7W1jNqqOw+9z6X/k+Na3SBa0v+VjgoaULR30G1nxvZN1vsha2UaSrKy/PyCaHK5zAYnJzm9RSpSPDWbDVu0dkUujMmB/ly4w8EnDdXXoyX/VfhB3yKzMJ2BSaZO+A9GiNQMbll+6z1WGLWpEGMeEg85MESSep0IPFaHYZZ1QOW/xcjfxGhNjP0tRtbhFHOmhhjAv/p77JrCX3+ZAAAAAElFTkSuQmCC") top left #ceab84;box-shadow:inset 0 0 0 1px #533a1f,inset 0 0 0 2px #dcba94,0 0 2px rgba(0,0,0,0.6);padding:0 10px}.twOverflow-window .custom-select .custom-select-data{display:none}.twOverflow-window .center{text-align:center}.twOverflow-window .reduced{height:30px}@keyframes expand-button{0%{width:60px}100%{width:250px}}@keyframes contract-button{0%{width:250px}100%{width:60px}}.expand-button{animation:expand-button .1s forwards}.contract-button{animation:contract-button .1s forwards}.icon-26x26-preset{background-image:url(https://i.imgur.com/ozI4k0h.png);background-position:-884px -984px;zoom:.8;margin-top:2px;margin-left:5px}')
            }, e.isInitialized = function() {
                return f
            }, e
        }), define("TWOverflow/Interface/buttonLink", ["ejs"], function(a) {
            return function(b, c, d) {
                var e = Math.round(1e5 * Math.random()),
                    f = a.render('<a id="l<#= uid #>" class="img-link icon-20x20-<#= type #> btn btn-orange padded"><#= text #></a>', {
                        type: b,
                        text: c,
                        uid: e
                    }),
                    g = document.createElement("div");
                g.innerHTML = f, g = g.firstChild;
                var h;
                switch (b) {
                    case "village":
                        h = function() {
                            s.openVillageInfo(d)
                        };
                        break;
                    case "character":
                        h = function() {
                            s.openCharacterProfile(d)
                        }
                }
                return g.addEventListener("click", h), {
                    html: f,
                    id: "l" + e,
                    elem: g
                }
            }
        }), define("TWOverflow/FrontButton", ["ejs"], function(a) {
            function b(a, b) {
                this.options = b = angular.merge({
                    label: a,
                    className: "",
                    classHover: "expand-button",
                    classBlur: "contract-button",
                    tooltip: !1
                }, b), this.buildWrapper(), this.appendButton();
                var c = this.$elem,
                    d = c.find(".label"),
                    e = c.find(".quickview");
                return b.classHover && c.on("mouseenter", function() {
                    c.addClass(b.classHover), c.removeClass(b.classBlur), d.hide(), e.show()
                }), b.classBlur && c.on("mouseleave", function() {
                    c.addClass(b.classBlur), c.removeClass(b.classHover), e.hide(), d.show()
                }), b.tooltip && (c.on("mouseenter", function(a) {
                    n.$broadcast(r.TOOLTIP_SHOW, "twoverflow-tooltip", b.tooltip, !0, a)
                }), c.on("mouseleave", function() {
                    n.$broadcast(r.TOOLTIP_HIDE, "twoverflow-tooltip")
                })), this
            }
            return b.prototype.updateQuickview = function(a) {
                this.$elem.find(".quickview").html(a)
            }, b.prototype.hover = function(a) {
                this.$elem.on("mouseenter", a)
            }, b.prototype.click = function(a) {
                this.$elem.on("click", a)
            }, b.prototype.buildWrapper = function() {
                var a = document.getElementById("twOverflow-leftbar");
                a || (a = document.createElement("div"), a.id = "twOverflow-leftbar", $("#toolbar-left").prepend(a)), this.$wrapper = a
            }, b.prototype.appendButton = function() {
                var b = a.render('<div class="btn-border btn-green button <#= className #>" id="twOverflow-leftbar"><div class="top-left"></div><div class="top-right"></div><div class="middle-top"></div><div class="middle-bottom"></div><div class="middle-left"></div><div class="middle-right"></div><div class="bottom-left"></div><div class="bottom-right"></div><div class="label"><#= label #></div><div class="quickview"></div></div>', {
                        className: this.options.className,
                        label: this.options.label
                    }),
                    c = document.createElement("div");
                c.innerHTML = b;
                var d = c.children[0];
                this.$wrapper.appendChild(d), this.$elem = $(d)
            }, b.prototype.destroy = function() {
                this.$elem.remove()
            }, b
        }), require(["TWOverflow/ready", "TWOverflow/Interface"], function(a, b) {
            if (b.isInitialized()) return !1;
            a(function() {
                b.init()
            })
        })
    }(this);
//# sourceMappingURL=tw2overflow.map
