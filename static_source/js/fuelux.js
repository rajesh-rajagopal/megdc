/*! Fuel UX - v2.3.1 - 2013-08-02
 * https://github.com/ExactTarget/fuelux
 * Copyright (c) 2013 ExactTarget; Licensed MIT */
(function () {
    var a, b, c;
    (function (d) {
        function l(a, b) {
            var c, d, e, f, g, h, j, k, l, m, n = b && b.split("/"),
                o = i.map,
                p = o && o["*"] || {};
            if (a && a.charAt(0) === "." && b) {
                n = n.slice(0, n.length - 1), a = n.concat(a.split("/"));
                for (k = 0; k < a.length; k += 1) {
                    m = a[k];
                    if (m === ".") a.splice(k, 1), k -= 1;
                    else if (m === "..")
                        if (k !== 1 || a[2] !== ".." && a[0] !== "..") k > 0 && (a.splice(k - 1, 2), k -= 2);
                        else break
                }
                a = a.join("/")
            }
            if ((n || p) && o) {
                c = a.split("/");
                for (k = c.length; k > 0; k -= 1) {
                    d = c.slice(0, k).join("/");
                    if (n)
                        for (l = n.length; l > 0; l -= 1) {
                            e = o[n.slice(0, l).join("/")];
                            if (e) {
                                e = e[d];
                                if (e) {
                                    f = e, g = k;
                                    break
                                }
                            }
                        }
                    if (f) break;
                    !h && p && p[d] && (h = p[d], j = k)
                }!f && h && (f = h, g = j), f && (c.splice(0, g, f), a = c.join("/"))
            }
            return a
        }

        function m(a, b) {
            return function () {
                return f.apply(d, k.call(arguments, 0).concat([a, b]))
            }
        }

        function n(a) {
            return function (b) {
                return l(b, a)
            }
        }

        function o(a) {
            return function (b) {
                g[a] = b
            }
        }

        function p(a) {
            if (h.hasOwnProperty(a)) {
                var b = h[a];
                delete h[a], j[a] = !0, e.apply(d, b)
            }
            if (!g.hasOwnProperty(a)) throw new Error("No " + a);
            return g[a]
        }

        function q(a, b) {
            var c, d, e = a.indexOf("!");
            return e !== -1 ? (c = l(a.slice(0, e), b), a = a.slice(e + 1), d = p(c), d && d.normalize ? a = d.normalize(a, n(b)) : a = l(a, b)) : a = l(a, b), {
                f: c ? c + "!" + a : a,
                n: a,
                p: d
            }
        }

        function r(a) {
            return function () {
                return i && i.config && i.config[a] || {}
            }
        }
        var e, f, g = {},
            h = {},
            i = {},
            j = {},
            k = [].slice;
        e = function (a, b, c, e) {
            var f, i, k, l, n, s = [],
                t;
            e = e || a;
            if (typeof c == "function") {
                b = !b.length && c.length ? ["require", "exports", "module"] : b;
                for (n = 0; n < b.length; n += 1) {
                    l = q(b[n], e), i = l.f;
                    if (i === "require") s[n] = m(a);
                    else if (i === "exports") s[n] = g[a] = {}, t = !0;
                    else if (i === "module") f = s[n] = {
                        id: a,
                        uri: "",
                        exports: g[a],
                        config: r(a)
                    };
                    else if (g.hasOwnProperty(i) || h.hasOwnProperty(i)) s[n] = p(i);
                    else if (l.p) l.p.load(l.n, m(e, !0), o(i), {}), s[n] = g[i];
                    else if (!j[i]) throw new Error(a + " missing " + i)
                }
                k = c.apply(g[a], s);
                if (a)
                    if (f && f.exports !== d && f.exports !== g[a]) g[a] = f.exports;
                    else if (k !== d || !t) g[a] = k
            } else a && (g[a] = c)
        }, a = b = f = function (a, b, c, g, h) {
            return typeof a == "string" ? p(q(a, b).f) : (a.splice || (i = a, b.splice ? (a = b, b = c, c = null) : a = d), b = b || function () {}, typeof c == "function" && (c = g, g = h), g ? e(d, a, b, c) : setTimeout(function () {
                e(d, a, b, c)
            }, 15), f)
        }, f.config = function (a) {
            return i = a, f
        }, c = function (a, b, c) {
            b.splice || (c = b, b = []), h[a] = [a, b, c]
        }, c.amd = {
            jQuery: !0
        }
    })(), c("almond", function () {}),
        function (a) {
            var b;
            c("bootstrap/bootstrap-transition", ["jquery"], function () {
                return function () {
                    ! function (a) {
                        a(function () {
                            a.support.transition = function () {
                                var a = function () {
                                    var a = document.createElement("bootstrap"),
                                        b = {
                                            WebkitTransition: "webkitTransitionEnd",
                                            MozTransition: "transitionend",
                                            OTransition: "oTransitionEnd otransitionend",
                                            transition: "transitionend"
                                        },
                                        c;
                                    for (c in b)
                                        if (a.style[c] !== undefined) return b[c]
                                }();
                                return a && {
                                    end: a
                                }
                            }()
                        })
                    }(window.jQuery)
                }.call(a), b
            })
        }(this),
        function (a) {
            var b;
            c("bootstrap/bootstrap-affix", ["bootstrap/bootstrap-transition"], function () {
                return function () {
                    ! function (a) {
                        var b = function (b, c) {
                            this.options = a.extend({}, a.fn.affix.defaults, c), this.$window = a(window).on("scroll.affix.data-api", a.proxy(this.checkPosition, this)).on("click.affix.data-api", a.proxy(function () {
                                setTimeout(a.proxy(this.checkPosition, this), 1)
                            }, this)), this.$element = a(b), this.checkPosition()
                        };
                        b.prototype.checkPosition = function () {
                            if (!this.$element.is(":visible")) return;
                            var b = a(document).height(),
                                c = this.$window.scrollTop(),
                                d = this.$element.offset(),
                                e = this.options.offset,
                                f = e.bottom,
                                g = e.top,
                                h = "affix affix-top affix-bottom",
                                i;
                            typeof e != "object" && (f = g = e), typeof g == "function" && (g = e.top()), typeof f == "function" && (f = e.bottom()), i = this.unpin != null && c + this.unpin <= d.top ? !1 : f != null && d.top + this.$element.height() >= b - f ? "bottom" : g != null && c <= g ? "top" : !1;
                            if (this.affixed === i) return;
                            this.affixed = i, this.unpin = i == "bottom" ? d.top - c : null, this.$element.removeClass(h).addClass("affix" + (i ? "-" + i : ""))
                        };
                        var c = a.fn.affix;
                        a.fn.affix = function (c) {
                            return this.each(function () {
                                var d = a(this),
                                    e = d.data("affix"),
                                    f = typeof c == "object" && c;
                                e || d.data("affix", e = new b(this, f)), typeof c == "string" && e[c]()
                            })
                        }, a.fn.affix.Constructor = b, a.fn.affix.defaults = {
                            offset: 0
                        }, a.fn.affix.noConflict = function () {
                            return a.fn.affix = c, this
                        }, a(window).on("load", function () {
                            a('[data-spy="affix"]').each(function () {
                                var b = a(this),
                                    c = b.data();
                                c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c)
                            })
                        })
                    }(window.jQuery)
                }.call(a), b
            })
        }(this),
        function (a) {
            var b;
            c("bootstrap/bootstrap-alert", ["bootstrap/bootstrap-transition"], function () {
                return function () {
                    ! function (a) {
                        var b = '[data-dismiss="alert"]',
                            c = function (c) {
                                a(c).on("click", b, this.close)
                            };
                        c.prototype.close = function (b) {
                            function f() {
                                e.trigger("closed").remove()
                            }
                            var c = a(this),
                                d = c.attr("data-target"),
                                e;
                            d || (d = c.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), e = a(d), b && b.preventDefault(), e.length || (e = c.hasClass("alert") ? c : c.parent()), e.trigger(b = a.Event("close"));
                            if (b.isDefaultPrevented()) return;
                            e.removeClass("in"), a.support.transition && e.hasClass("fade") ? e.on(a.support.transition.end, f) : f()
                        };
                        var d = a.fn.alert;
                        a.fn.alert = function (b) {
                            return this.each(function () {
                                var d = a(this),
                                    e = d.data("alert");
                                e || d.data("alert", e = new c(this)), typeof b == "string" && e[b].call(d)
                            })
                        }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function () {
                            return a.fn.alert = d, this
                        }, a(document).on("click.alert.data-api", b, c.prototype.close)
                    }(window.jQuery)
                }.call(a), b
            })
        }(this),
        function (a) {
            var b;
            c("bootstrap/bootstrap-button", ["bootstrap/bootstrap-transition"], function () {
                return function () {
                    ! function (a) {
                        var b = function (b, c) {
                            this.$element = a(b), this.options = a.extend({}, a.fn.button.defaults, c)
                        };
                        b.prototype.setState = function (a) {
                            var b = "disabled",
                                c = this.$element,
                                d = c.data(),
                                e = c.is("input") ? "val" : "html";
                            a = a + "Text", d.resetText || c.data("resetText", c[e]()), c[e](d[a] || this.options[a]), setTimeout(function () {
                                a == "loadingText" ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b)
                            }, 0)
                        }, b.prototype.toggle = function () {
                            var a = this.$element.closest('[data-toggle="buttons-radio"]');
                            a && a.find(".active").removeClass("active"), this.$element.toggleClass("active")
                        };
                        var c = a.fn.button;
                        a.fn.button = function (c) {
                            return this.each(function () {
                                var d = a(this),
                                    e = d.data("button"),
                                    f = typeof c == "object" && c;
                                e || d.data("button", e = new b(this, f)), c == "toggle" ? e.toggle() : c && e.setState(c)
                            })
                        }, a.fn.button.defaults = {
                            loadingText: "loading..."
                        }, a.fn.button.Constructor = b, a.fn.button.noConflict = function () {
                            return a.fn.button = c, this
                        }, a(document).on("click.button.data-api", "[data-toggle^=button]", function (b) {
                            var c = a(b.target);
                            c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle")
                        })
                    }(window.jQuery)
                }.call(a), b
            })
        }(this),
        function (a) {
            var b;
            c("bootstrap/bootstrap-carousel", ["bootstrap/bootstrap-transition"], function () {
                return function () {
                    ! function (a) {
                        var b = function (b, c) {
                            this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.options.pause == "hover" && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
                        };
                        b.prototype = {
                            cycle: function (b) {
                                return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
                            },
                            getActiveIndex: function () {
                                return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
                            },
                            to: function (b) {
                                var c = this.getActiveIndex(),
                                    d = this;
                                if (b > this.$items.length - 1 || b < 0) return;
                                return this.sliding ? this.$element.one("slid", function () {
                                    d.to(b)
                                }) : c == b ? this.pause().cycle() : this.slide(b > c ? "next" : "prev", a(this.$items[b]))
                            },
                            pause: function (b) {
                                return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), clearInterval(this.interval), this.interval = null, this
                            },
                            next: function () {
                                if (this.sliding) return;
                                return this.slide("next")
                            },
                            prev: function () {
                                if (this.sliding) return;
                                return this.slide("prev")
                            },
                            slide: function (b, c) {
                                var d = this.$element.find(".item.active"),
                                    e = c || d[b](),
                                    f = this.interval,
                                    g = b == "next" ? "left" : "right",
                                    h = b == "next" ? "first" : "last",
                                    i = this,
                                    j;
                                this.sliding = !0, f && this.pause(), e = e.length ? e : this.$element.find(".item")[h](), j = a.Event("slide", {
                                    relatedTarget: e[0],
                                    direction: g
                                });
                                if (e.hasClass("active")) return;
                                this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function () {
                                    var b = a(i.$indicators.children()[i.getActiveIndex()]);
                                    b && b.addClass("active")
                                }));
                                if (a.support.transition && this.$element.hasClass("slide")) {
                                    this.$element.trigger(j);
                                    if (j.isDefaultPrevented()) return;
                                    e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), this.$element.one(a.support.transition.end, function () {
                                        e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function () {
                                            i.$element.trigger("slid")
                                        }, 0)
                                    })
                                } else {
                                    this.$element.trigger(j);
                                    if (j.isDefaultPrevented()) return;
                                    d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
                                }
                                return f && this.cycle(), this
                            }
                        };
                        var c = a.fn.carousel;
                        a.fn.carousel = function (c) {
                            return this.each(function () {
                                var d = a(this),
                                    e = d.data("carousel"),
                                    f = a.extend({}, a.fn.carousel.defaults, typeof c == "object" && c),
                                    g = typeof c == "string" ? c : f.slide;
                                e || d.data("carousel", e = new b(this, f)), typeof c == "number" ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
                            })
                        }, a.fn.carousel.defaults = {
                            interval: 5e3,
                            pause: "hover"
                        }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function () {
                            return a.fn.carousel = c, this
                        }, a(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function (b) {
                            var c = a(this),
                                d, e = a(c.attr("data-target") || (d = c.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")),
                                f = a.extend({}, e.data(), c.data()),
                                g;
                            e.carousel(f), (g = c.attr("data-slide-to")) && e.data("carousel").pause().to(g).cycle(), b.preventDefault()
                        })
                    }(window.jQuery)
                }.call(a), b
            })
        }(this),
        function (a) {
            var b;
            c("bootstrap/bootstrap-collapse", ["bootstrap/bootstrap-transition"], function () {
                return function () {
                    ! function (a) {
                        var b = function (b, c) {
                            this.$element = a(b), this.options = a.extend({}, a.fn.collapse.defaults, c), this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
                        };
                        b.prototype = {
                            constructor: b,
                            dimension: function () {
                                var a = this.$element.hasClass("width");
                                return a ? "width" : "height"
                            },
                            show: function () {
                                var b, c, d, e;
                                if (this.transitioning || this.$element.hasClass("in")) return;
                                b = this.dimension(), c = a.camelCase(["scroll", b].join("-")), d = this.$parent && this.$parent.find("> .accordion-group > .in");
                                if (d && d.length) {
                                    e = d.data("collapse");
                                    if (e && e.transitioning) return;
                                    d.collapse("hide"), e || d.data("collapse", null)
                                }
                                this.$element[b](0), this.transition("addClass", a.Event("show"), "shown"), a.support.transition && this.$element[b](this.$element[0][c])
                            },
                            hide: function () {
                                var b;
                                if (this.transitioning || !this.$element.hasClass("in")) return;
                                b = this.dimension(), this.reset(this.$element[b]()), this.transition("removeClass", a.Event("hide"), "hidden"), this.$element[b](0)
                            },
                            reset: function (a) {
                                var b = this.dimension();
                                return this.$element.removeClass("collapse")[b](a || "auto")[0].offsetWidth, this.$element[a !== null ? "addClass" : "removeClass"]("collapse"), this
                            },
                            transition: function (b, c, d) {
                                var e = this,
                                    f = function () {
                                        c.type == "show" && e.reset(), e.transitioning = 0, e.$element.trigger(d)
                                    };
                                this.$element.trigger(c);
                                if (c.isDefaultPrevented()) return;
                                this.transitioning = 1, this.$element[b]("in"), a.support.transition && this.$element.hasClass("collapse") ? this.$element.one(a.support.transition.end, f) : f()
                            },
                            toggle: function () {
                                this[this.$element.hasClass("in") ? "hide" : "show"]()
                            }
                        };
                        var c = a.fn.collapse;
                        a.fn.collapse = function (c) {
                            return this.each(function () {
                                var d = a(this),
                                    e = d.data("collapse"),
                                    f = a.extend({}, a.fn.collapse.defaults, d.data(), typeof c == "object" && c);
                                e || d.data("collapse", e = new b(this, f)), typeof c == "string" && e[c]()
                            })
                        }, a.fn.collapse.defaults = {
                            toggle: !0
                        }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function () {
                            return a.fn.collapse = c, this
                        }, a(document).on("click.collapse.data-api", "[data-toggle=collapse]", function (b) {
                            var c = a(this),
                                d, e = c.attr("data-target") || b.preventDefault() || (d = c.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""),
                                f = a(e).data("collapse") ? "toggle" : c.data();
                            c[a(e).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), a(e).collapse(f)
                        })
                    }(window.jQuery)
                }.call(a), b
            })
        }(this),
        function (a) {
            var b;
            c("bootstrap/bootstrap-dropdown", ["bootstrap/bootstrap-transition"], function () {
                return function () {
                    ! function (a) {
                        function d() {
                            a(".dropdown-backdrop").remove(), a(b).each(function () {
                                e(a(this)).removeClass("open")
                            })
                        }

                        function e(b) {
                            var c = b.attr("data-target"),
                                d;
                            c || (c = b.attr("href"), c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")), d = c && a(c);
                            if (!d || !d.length) d = b.parent();
                            return d
                        }
                        var b = "[data-toggle=dropdown]",
                            c = function (b) {
                                var c = a(b).on("click.dropdown.data-api", this.toggle);
                                a("html").on("click.dropdown.data-api", function () {
                                    c.parent().removeClass("open")
                                })
                            };
                        c.prototype = {
                            constructor: c,
                            toggle: function (b) {
                                var c = a(this),
                                    f, g;
                                if (c.is(".disabled, :disabled")) return;
                                return f = e(c), g = f.hasClass("open"), d(), g || ("ontouchstart" in document.documentElement && a('<div class="dropdown-backdrop"/>').insertBefore(a(this)).on("click", d), f.toggleClass("open")), c.focus(), !1
                            },
                            keydown: function (c) {
                                var d, f, g, h, i, j;
                                if (!/(38|40|27)/.test(c.keyCode)) return;
                                d = a(this), c.preventDefault(), c.stopPropagation();
                                if (d.is(".disabled, :disabled")) return;
                                h = e(d), i = h.hasClass("open");
                                if (!i || i && c.keyCode == 27) return c.which == 27 && h.find(b).focus(), d.click();
                                f = a("[role=menu] li:not(.divider):visible a", h);
                                if (!f.length) return;
                                j = f.index(f.filter(":focus")), c.keyCode == 38 && j > 0 && j--, c.keyCode == 40 && j < f.length - 1 && j++, ~j || (j = 0), f.eq(j).focus()
                            }
                        };
                        var f = a.fn.dropdown;
                        a.fn.dropdown = function (b) {
                            return this.each(function () {
                                var d = a(this),
                                    e = d.data("dropdown");
                                e || d.data("dropdown", e = new c(this)), typeof b == "string" && e[b].call(d)
                            })
                        }, a.fn.dropdown.Constructor = c, a.fn.dropdown.noConflict = function () {
                            return a.fn.dropdown = f, this
                        }, a(document).on("click.dropdown.data-api", d).on("click.dropdown.data-api", ".dropdown form", function (a) {
                            a.stopPropagation()
                        }).on("click.dropdown.data-api", b, c.prototype.toggle).on("keydown.dropdown.data-api", b + ", [role=menu]", c.prototype.keydown)
                    }(window.jQuery)
                }.call(a), b
            })
        }(this),
        function (a) {
            var b;
            c("bootstrap/bootstrap-modal", ["bootstrap/bootstrap-transition"], function () {
                return function () {
                    ! function (a) {
                        var b = function (b, c) {
                            this.options = c, this.$element = a(b).delegate('[data-dismiss="modal"]', "click.dismiss.modal", a.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
                        };
                        b.prototype = {
                            constructor: b,
                            toggle: function () {
                                return this[this.isShown ? "hide" : "show"]()
                            },
                            show: function () {
                                var b = this,
                                    c = a.Event("show");
                                this.$element.trigger(c);
                                if (this.isShown || c.isDefaultPrevented()) return;
                                this.isShown = !0, this.escape(), this.backdrop(function () {
                                    var c = a.support.transition && b.$element.hasClass("fade");
                                    b.$element.parent().length || b.$element.appendTo(document.body), b.$element.show(), c && b.$element[0].offsetWidth, b.$element.addClass("in").attr("aria-hidden", !1), b.enforceFocus(), c ? b.$element.one(a.support.transition.end, function () {
                                        b.$element.focus().trigger("shown")
                                    }) : b.$element.focus().trigger("shown")
                                })
                            },
                            hide: function (b) {
                                b && b.preventDefault();
                                var c = this;
                                b = a.Event("hide"), this.$element.trigger(b);
                                if (!this.isShown || b.isDefaultPrevented()) return;
                                this.isShown = !1, this.escape(), a(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), a.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal()
                            },
                            enforceFocus: function () {
                                var b = this;
                                a(document).on("focusin.modal", function (a) {
                                    b.$element[0] !== a.target && !b.$element.has(a.target).length && b.$element.focus()
                                })
                            },
                            escape: function () {
                                var a = this;
                                this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function (b) {
                                    b.which == 27 && a.hide()
                                }) : this.isShown || this.$element.off("keyup.dismiss.modal")
                            },
                            hideWithTransition: function () {
                                var b = this,
                                    c = setTimeout(function () {
                                        b.$element.off(a.support.transition.end), b.hideModal()
                                    }, 500);
                                this.$element.one(a.support.transition.end, function () {
                                    clearTimeout(c), b.hideModal()
                                })
                            },
                            hideModal: function () {
                                var a = this;
                                this.$element.hide(), this.backdrop(function () {
                                    a.removeBackdrop(), a.$element.trigger("hidden")
                                })
                            },
                            removeBackdrop: function () {
                                this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
                            },
                            backdrop: function (b) {
                                var c = this,
                                    d = this.$element.hasClass("fade") ? "fade" : "";
                                if (this.isShown && this.options.backdrop) {
                                    var e = a.support.transition && d;
                                    this.$backdrop = a('<div class="modal-backdrop ' + d + '" />').appendTo(document.body), this.$backdrop.click(this.options.backdrop == "static" ? a.proxy(this.$element[0].focus, this.$element[0]) : a.proxy(this.hide, this)), e && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in");
                                    if (!b) return;
                                    e ? this.$backdrop.one(a.support.transition.end, b) : b()
                                } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b) : b()) : b && b()
                            }
                        };
                        var c = a.fn.modal;
                        a.fn.modal = function (c) {
                            return this.each(function () {
                                var d = a(this),
                                    e = d.data("modal"),
                                    f = a.extend({}, a.fn.modal.defaults, d.data(), typeof c == "object" && c);
                                e || d.data("modal", e = new b(this, f)), typeof c == "string" ? e[c]() : f.show && e.show()
                            })
                        }, a.fn.modal.defaults = {
                            backdrop: !0,
                            keyboard: !0,
                            show: !0
                        }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function () {
                            return a.fn.modal = c, this
                        }, a(document).on("click.modal.data-api", '[data-toggle="modal"]', function (b) {
                            var c = a(this),
                                d = c.attr("href"),
                                e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
                                f = e.data("modal") ? "toggle" : a.extend({
                                    remote: !/#/.test(d) && d
                                }, e.data(), c.data());
                            b.preventDefault(), e.modal(f).one("hide", function () {
                                c.focus()
                            })
                        })
                    }(window.jQuery)
                }.call(a), b
            })
        }(this),
        function (a) {
            var b;
            c("bootstrap/bootstrap-tooltip", ["bootstrap/bootstrap-transition"], function () {
                return function () {
                    ! function (a) {
                        var b = function (a, b) {
                            this.init("tooltip", a, b)
                        };
                        b.prototype = {
                            constructor: b,
                            init: function (b, c, d) {
                                var e, f, g, h, i;
                                this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.enabled = !0, g = this.options.trigger.split(" ");
                                for (i = g.length; i--;) h = g[i], h == "click" ? this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)) : h != "manual" && (e = h == "hover" ? "mouseenter" : "focus", f = h == "hover" ? "mouseleave" : "blur", this.$element.on(e + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(f + "." + this.type, this.options.selector, a.proxy(this.leave, this)));
                                this.options.selector ? this._options = a.extend({}, this.options, {
                                    trigger: "manual",
                                    selector: ""
                                }) : this.fixTitle()
                            },
                            getOptions: function (b) {
                                return b = a.extend({}, a.fn[this.type].defaults, this.$element.data(), b), b.delay && typeof b.delay == "number" && (b.delay = {
                                    show: b.delay,
                                    hide: b.delay
                                }), b
                            },
                            enter: function (b) {
                                var c = a.fn[this.type].defaults,
                                    d = {},
                                    e;
                                this._options && a.each(this._options, function (a, b) {
                                    c[a] != b && (d[a] = b)
                                }), e = a(b.currentTarget)[this.type](d).data(this.type);
                                if (!e.options.delay || !e.options.delay.show) return e.show();
                                clearTimeout(this.timeout), e.hoverState = "in", this.timeout = setTimeout(function () {
                                    e.hoverState == "in" && e.show()
                                }, e.options.delay.show)
                            },
                            leave: function (b) {
                                var c = a(b.currentTarget)[this.type](this._options).data(this.type);
                                this.timeout && clearTimeout(this.timeout);
                                if (!c.options.delay || !c.options.delay.hide) return c.hide();
                                c.hoverState = "out", this.timeout = setTimeout(function () {
                                    c.hoverState == "out" && c.hide()
                                }, c.options.delay.hide)
                            },
                            show: function () {
                                var b, c, d, e, f, g, h = a.Event("show");
                                if (this.hasContent() && this.enabled) {
                                    this.$element.trigger(h);
                                    if (h.isDefaultPrevented()) return;
                                    b = this.tip(), this.setContent(), this.options.animation && b.addClass("fade"), f = typeof this.options.placement == "function" ? this.options.placement.call(this, b[0], this.$element[0]) : this.options.placement, b.detach().css({
                                        top: 0,
                                        left: 0,
                                        display: "block"
                                    }), this.options.container ? b.appendTo(this.options.container) : b.insertAfter(this.$element), c = this.getPosition(), d = b[0].offsetWidth, e = b[0].offsetHeight;
                                    switch (f) {
                                    case "bottom":
                                        g = {
                                            top: c.top + c.height,
                                            left: c.left + c.width / 2 - d / 2
                                        };
                                        break;
                                    case "top":
                                        g = {
                                            top: c.top - e,
                                            left: c.left + c.width / 2 - d / 2
                                        };
                                        break;
                                    case "left":
                                        g = {
                                            top: c.top + c.height / 2 - e / 2,
                                            left: c.left - d
                                        };
                                        break;
                                    case "right":
                                        g = {
                                            top: c.top + c.height / 2 - e / 2,
                                            left: c.left + c.width
                                        }
                                    }
                                    this.applyPlacement(g, f), this.$element.trigger("shown")
                                }
                            },
                            applyPlacement: function (a, b) {
                                var c = this.tip(),
                                    d = c[0].offsetWidth,
                                    e = c[0].offsetHeight,
                                    f, g, h, i;
                                c.offset(a).addClass(b).addClass("in"), f = c[0].offsetWidth, g = c[0].offsetHeight, b == "top" && g != e && (a.top = a.top + e - g, i = !0), b == "bottom" || b == "top" ? (h = 0, a.left < 0 && (h = a.left * -2, a.left = 0, c.offset(a), f = c[0].offsetWidth, g = c[0].offsetHeight), this.replaceArrow(h - d + f, f, "left")) : this.replaceArrow(g - e, g, "top"), i && c.offset(a)
                            },
                            replaceArrow: function (a, b, c) {
                                this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
                            },
                            setContent: function () {
                                var a = this.tip(),
                                    b = this.getTitle();
                                a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
                            },
                            hide: function () {
                                function e() {
                                    var b = setTimeout(function () {
                                        c.off(a.support.transition.end).detach()
                                    }, 500);
                                    c.one(a.support.transition.end, function () {
                                        clearTimeout(b), c.detach()
                                    })
                                }
                                var b = this,
                                    c = this.tip(),
                                    d = a.Event("hide");
                                this.$element.trigger(d);
                                if (d.isDefaultPrevented()) return;
                                return c.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? e() : c.detach(), this.$element.trigger("hidden"), this
                            },
                            fixTitle: function () {
                                var a = this.$element;
                                (a.attr("title") || typeof a.attr("data-original-title") != "string") && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
                            },
                            hasContent: function () {
                                return this.getTitle()
                            },
                            getPosition: function () {
                                var b = this.$element[0];
                                return a.extend({}, typeof b.getBoundingClientRect == "function" ? b.getBoundingClientRect() : {
                                    width: b.offsetWidth,
                                    height: b.offsetHeight
                                }, this.$element.offset())
                            },
                            getTitle: function () {
                                var a, b = this.$element,
                                    c = this.options;
                                return a = b.attr("data-original-title") || (typeof c.title == "function" ? c.title.call(b[0]) : c.title), a
                            },
                            tip: function () {
                                return this.$tip = this.$tip || a(this.options.template)
                            },
                            arrow: function () {
                                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
                            },
                            validate: function () {
                                this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
                            },
                            enable: function () {
                                this.enabled = !0
                            },
                            disable: function () {
                                this.enabled = !1
                            },
                            toggleEnabled: function () {
                                this.enabled = !this.enabled
                            },
                            toggle: function (b) {
                                var c = b ? a(b.currentTarget)[this.type](this._options).data(this.type) : this;
                                c.tip().hasClass("in") ? c.hide() : c.show()
                            },
                            destroy: function () {
                                this.hide().$element.off("." + this.type).removeData(this.type)
                            }
                        };
                        var c = a.fn.tooltip;
                        a.fn.tooltip = function (c) {
                            return this.each(function () {
                                var d = a(this),
                                    e = d.data("tooltip"),
                                    f = typeof c == "object" && c;
                                e || d.data("tooltip", e = new b(this, f)), typeof c == "string" && e[c]()
                            })
                        }, a.fn.tooltip.Constructor = b, a.fn.tooltip.defaults = {
                            animation: !0,
                            placement: "top",
                            selector: !1,
                            template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                            trigger: "hover focus",
                            title: "",
                            delay: 0,
                            html: !1,
                            container: !1
                        }, a.fn.tooltip.noConflict = function () {
                            return a.fn.tooltip = c, this
                        }
                    }(window.jQuery)
                }.call(a), b
            })
        }(this),
        function (a) {
            var b;
            c("bootstrap/bootstrap-popover", ["bootstrap/bootstrap-transition", "bootstrap/bootstrap-tooltip"], function () {
                return function () {
                    ! function (a) {
                        var b = function (a, b) {
                            this.init("popover", a, b)
                        };
                        b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype, {
                            constructor: b,
                            setContent: function () {
                                var a = this.tip(),
                                    b = this.getTitle(),
                                    c = this.getContent();
                                a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "html" : "text"](c), a.removeClass("fade top bottom left right in")
                            },
                            hasContent: function () {
                                return this.getTitle() || this.getContent()
                            },
                            getContent: function () {
                                var a, b = this.$element,
                                    c = this.options;
                                return a = (typeof c.content == "function" ? c.content.call(b[0]) : c.content) || b.attr("data-content"), a
                            },
                            tip: function () {
                                return this.$tip || (this.$tip = a(this.options.template)), this.$tip
                            },
                            destroy: function () {
                                this.hide().$element.off("." + this.type).removeData(this.type)
                            }
                        });
                        var c = a.fn.popover;
                        a.fn.popover = function (c) {
                            return this.each(function () {
                                var d = a(this),
                                    e = d.data("popover"),
                                    f = typeof c == "object" && c;
                                e || d.data("popover", e = new b(this, f)), typeof c == "string" && e[c]()
                            })
                        }, a.fn.popover.Constructor = b, a.fn.popover.defaults = a.extend({}, a.fn.tooltip.defaults, {
                            placement: "right",
                            trigger: "click",
                            content: "",
                            template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
                        }), a.fn.popover.noConflict = function () {
                            return a.fn.popover = c, this
                        }
                    }(window.jQuery)
                }.call(a), b
            })
        }(this),
        function (a) {
            var b;
            c("bootstrap/bootstrap-scrollspy", ["bootstrap/bootstrap-transition"], function () {
                return function () {
                    ! function (a) {
                        function b(b, c) {
                            var d = a.proxy(this.process, this),
                                e = a(b).is("body") ? a(window) : a(b),
                                f;
                            this.options = a.extend({}, a.fn.scrollspy.defaults, c), this.$scrollElement = e.on("scroll.scroll-spy.data-api", d), this.selector = (this.options.target || (f = a(b).attr("href")) && f.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = a("body"), this.refresh(), this.process()
                        }
                        b.prototype = {
                            constructor: b,
                            refresh: function () {
                                var b = this,
                                    c;
                                this.offsets = a([]), this.targets = a([]), c = this.$body.find(this.selector).map(function () {
                                    var c = a(this),
                                        d = c.data("target") || c.attr("href"),
                                        e = /^#\w/.test(d) && a(d);
                                    return e && e.length && [
                                        [e.position().top + (!a.isWindow(b.$scrollElement.get(0)) && b.$scrollElement.scrollTop()), d]
                                    ] || null
                                }).sort(function (a, b) {
                                    return a[0] - b[0]
                                }).each(function () {
                                    b.offsets.push(this[0]), b.targets.push(this[1])
                                })
                            },
                            process: function () {
                                var a = this.$scrollElement.scrollTop() + this.options.offset,
                                    b = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
                                    c = b - this.$scrollElement.height(),
                                    d = this.offsets,
                                    e = this.targets,
                                    f = this.activeTarget,
                                    g;
                                if (a >= c) return f != (g = e.last()[0]) && this.activate(g);
                                for (g = d.length; g--;) f != e[g] && a >= d[g] && (!d[g + 1] || a <= d[g + 1]) && this.activate(e[g])
                            },
                            activate: function (b) {
                                var c, d;
                                this.activeTarget = b, a(this.selector).parent(".active").removeClass("active"), d = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', c = a(d).parent("li").addClass("active"), c.parent(".dropdown-menu").length && (c = c.closest("li.dropdown").addClass("active")), c.trigger("activate")
                            }
                        };
                        var c = a.fn.scrollspy;
                        a.fn.scrollspy = function (c) {
                            return this.each(function () {
                                var d = a(this),
                                    e = d.data("scrollspy"),
                                    f = typeof c == "object" && c;
                                e || d.data("scrollspy", e = new b(this, f)), typeof c == "string" && e[c]()
                            })
                        }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.defaults = {
                            offset: 10
                        }, a.fn.scrollspy.noConflict = function () {
                            return a.fn.scrollspy = c, this
                        }, a(window).on("load", function () {
                            a('[data-spy="scroll"]').each(function () {
                                var b = a(this);
                                b.scrollspy(b.data())
                            })
                        })
                    }(window.jQuery)
                }.call(a), b
            })
        }(this),
        function (a) {
            var b;
            c("bootstrap/bootstrap-tab", ["bootstrap/bootstrap-transition"], function () {
                return function () {
                    ! function (a) {
                        var b = function (b) {
                            this.element = a(b)
                        };
                        b.prototype = {
                            constructor: b,
                            show: function () {
                                var b = this.element,
                                    c = b.closest("ul:not(.dropdown-menu)"),
                                    d = b.attr("data-target"),
                                    e, f, g;
                                d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, ""));
                                if (b.parent("li").hasClass("active")) return;
                                e = c.find(".active:last a")[0], g = a.Event("show", {
                                    relatedTarget: e
                                }), b.trigger(g);
                                if (g.isDefaultPrevented()) return;
                                f = a(d), this.activate(b.parent("li"), c), this.activate(f, f.parent(), function () {
                                    b.trigger({
                                        type: "shown",
                                        relatedTarget: e
                                    })
                                })
                            },
                            activate: function (b, c, d) {
                                function g() {
                                    e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), f ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
                                }
                                var e = c.find("> .active"),
                                    f = d && a.support.transition && e.hasClass("fade");
                                f ? e.one(a.support.transition.end, g) : g(), e.removeClass("in")
                            }
                        };
                        var c = a.fn.tab;
                        a.fn.tab = function (c) {
                            return this.each(function () {
                                var d = a(this),
                                    e = d.data("tab");
                                e || d.data("tab", e = new b(this)), typeof c == "string" && e[c]()
                            })
                        }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function () {
                            return a.fn.tab = c, this
                        }, a(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (b) {
                            b.preventDefault(), a(this).tab("show")
                        })
                    }(window.jQuery)
                }.call(a), b
            })
        }(this),
        function (a) {
            var b;
            c("bootstrap/bootstrap-typeahead", ["bootstrap/bootstrap-transition"], function () {
                return function () {
                    ! function (a) {
                        var b = function (b, c) {
                            this.$element = a(b), this.options = a.extend({}, a.fn.typeahead.defaults, c), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = a(this.options.menu), this.shown = !1, this.listen()
                        };
                        b.prototype = {
                            constructor: b,
                            select: function () {
                                var a = this.$menu.find(".active").attr("data-value");
                                return this.$element.val(this.updater(a)).change(), this.hide()
                            },
                            updater: function (a) {
                                return a
                            },
                            show: function () {
                                var b = a.extend({}, this.$element.position(), {
                                    height: this.$element[0].offsetHeight
                                });
                                return this.$menu.insertAfter(this.$element).css({
                                    top: b.top + b.height,
                                    left: b.left
                                }).show(), this.shown = !0, this
                            },
                            hide: function () {
                                return this.$menu.hide(), this.shown = !1, this
                            },
                            lookup: function (b) {
                                var c;
                                return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (c = a.isFunction(this.source) ? this.source(this.query, a.proxy(this.process, this)) : this.source, c ? this.process(c) : this)
                            },
                            process: function (b) {
                                var c = this;
                                return b = a.grep(b, function (a) {
                                    return c.matcher(a)
                                }), b = this.sorter(b), b.length ? this.render(b.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
                            },
                            matcher: function (a) {
                                return ~a.toLowerCase().indexOf(this.query.toLowerCase())
                            },
                            sorter: function (a) {
                                var b = [],
                                    c = [],
                                    d = [],
                                    e;
                                while (e = a.shift()) e.toLowerCase().indexOf(this.query.toLowerCase()) ? ~e.indexOf(this.query) ? c.push(e) : d.push(e) : b.push(e);
                                return b.concat(c, d)
                            },
                            highlighter: function (a) {
                                var b = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
                                return a.replace(new RegExp("(" + b + ")", "ig"), function (a, b) {
                                    return "<strong>" + b + "</strong>"
                                })
                            },
                            render: function (b) {
                                var c = this;
                                return b = a(b).map(function (b, d) {
                                    return b = a(c.options.item).attr("data-value", d), b.find("a").html(c.highlighter(d)), b[0]
                                }), b.first().addClass("active"), this.$menu.html(b), this
                            },
                            next: function (b) {
                                var c = this.$menu.find(".active").removeClass("active"),
                                    d = c.next();
                                d.length || (d = a(this.$menu.find("li")[0])), d.addClass("active")
                            },
                            prev: function (a) {
                                var b = this.$menu.find(".active").removeClass("active"),
                                    c = b.prev();
                                c.length || (c = this.$menu.find("li").last()), c.addClass("active")
                            },
                            listen: function () {
                                this.$element.on("focus", a.proxy(this.focus, this)).on("blur", a.proxy(this.blur, this)).on("keypress", a.proxy(this.keypress, this)).on("keyup", a.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", a.proxy(this.keydown, this)), this.$menu.on("click", a.proxy(this.click, this)).on("mouseenter", "li", a.proxy(this.mouseenter, this)).on("mouseleave", "li", a.proxy(this.mouseleave, this))
                            },
                            eventSupported: function (a) {
                                var b = a in this.$element;
                                return b || (this.$element.setAttribute(a, "return;"), b = typeof this.$element[a] == "function"), b
                            },
                            move: function (a) {
                                if (!this.shown) return;
                                switch (a.keyCode) {
                                case 9:
                                case 13:
                                case 27:
                                    a.preventDefault();
                                    break;
                                case 38:
                                    a.preventDefault(), this.prev();
                                    break;
                                case 40:
                                    a.preventDefault(), this.next()
                                }
                                a.stopPropagation()
                            },
                            keydown: function (b) {
                                this.suppressKeyPressRepeat = ~a.inArray(b.keyCode, [40, 38, 9, 13, 27]), this.move(b)
                            },
                            keypress: function (a) {
                                if (this.suppressKeyPressRepeat) return;
                                this.move(a)
                            },
                            keyup: function (a) {
                                switch (a.keyCode) {
                                case 40:
                                case 38:
                                case 16:
                                case 17:
                                case 18:
                                    break;
                                case 9:
                                case 13:
                                    if (!this.shown) return;
                                    this.select();
                                    break;
                                case 27:
                                    if (!this.shown) return;
                                    this.hide();
                                    break;
                                default:
                                    this.lookup()
                                }
                                a.stopPropagation(), a.preventDefault()
                            },
                            focus: function (a) {
                                this.focused = !0
                            },
                            blur: function (a) {
                                this.focused = !1, !this.mousedover && this.shown && this.hide()
                            },
                            click: function (a) {
                                a.stopPropagation(), a.preventDefault(), this.select(), this.$element.focus()
                            },
                            mouseenter: function (b) {
                                this.mousedover = !0, this.$menu.find(".active").removeClass("active"), a(b.currentTarget).addClass("active")
                            },
                            mouseleave: function (a) {
                                this.mousedover = !1, !this.focused && this.shown && this.hide()
                            }
                        };
                        var c = a.fn.typeahead;
                        a.fn.typeahead = function (c) {
                            return this.each(function () {
                                var d = a(this),
                                    e = d.data("typeahead"),
                                    f = typeof c == "object" && c;
                                e || d.data("typeahead", e = new b(this, f)), typeof c == "string" && e[c]()
                            })
                        }, a.fn.typeahead.defaults = {
                            source: [],
                            items: 8,
                            menu: '<ul class="typeahead dropdown-menu"></ul>',
                            item: '<li><a href="#"></a></li>',
                            minLength: 1
                        }, a.fn.typeahead.Constructor = b, a.fn.typeahead.noConflict = function () {
                            return a.fn.typeahead = c, this
                        }, a(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function (b) {
                            var c = a(this);
                            if (c.data("typeahead")) return;
                            c.typeahead(c.data())
                        })
                    }(window.jQuery)
                }.call(a), b
            })
        }(this), c("fuelux/checkbox", ["require", "jquery"], function (a) {
            var b = a("jquery"),
                c = function (a, c) {
                    this.$element = b(a), this.options = b.extend({}, b.fn.checkbox.defaults, c), this.$label = this.$element.parent(), this.$icon = this.$label.find("i"), this.$chk = this.$label.find("input[type=checkbox]"), this.setState(this.$chk), this.$chk.on("change", b.proxy(this.itemchecked, this))
                };
            c.prototype = {
                constructor: c,
                setState: function (a) {
                    var b = a.is(":checked"),
                        c = a.is(":disabled");
                    this.$icon.removeClass("checked").removeClass("disabled"), b === !0 && this.$icon.addClass("checked"), c === !0 && this.$icon.addClass("disabled")
                },
                enable: function () {
                    this.$chk.attr("disabled", !1), this.$icon.removeClass("disabled")
                },
                disable: function () {
                    this.$chk.attr("disabled", !0), this.$icon.addClass("disabled")
                },
                toggle: function () {
                    this.$chk.click()
                },
                itemchecked: function (a) {
                    var c = b(a.target);
                    this.setState(c)
                }
            }, b.fn.checkbox = function (a, d) {
                var e, f = this.each(function () {
                    var f = b(this),
                        g = f.data("checkbox"),
                        h = typeof a == "object" && a;
                    g || f.data("checkbox", g = new c(this, h)), typeof a == "string" && (e = g[a](d))
                });
                return e === undefined ? f : e
            }, b.fn.checkbox.defaults = {}, b.fn.checkbox.Constructor = c, b(function () {
                b(window).on("load", function () {
                    b(".checkbox-custom > input[type=checkbox]").each(function () {
                        var a = b(this);
                        if (a.data("checkbox")) return;
                        a.checkbox(a.data())
                    })
                })
            })
        }), c("fuelux/util", ["require", "jquery"], function (a) {
            function c(a, c) {
                return (a.textContent || a.innerText || b(a).text() || "").toLowerCase() === (c || "").toLowerCase()
            }
            var b = a("jquery");
            b.expr[":"].fuelTextExactCI = b.expr.createPseudo ? b.expr.createPseudo(function (a) {
                return function (b) {
                    return c(b, a)
                }
            }) : function (a, b, d) {
                return c(a, d[3])
            }
        }), c("fuelux/combobox", ["require", "jquery", "./util"], function (a) {
            var b = a("jquery");
            a("./util");
            var c = function (a, c) {
                this.$element = b(a), this.options = b.extend({}, b.fn.combobox.defaults, c), this.$element.on("click", "a", b.proxy(this.itemclicked, this)), this.$element.on("change", "input", b.proxy(this.inputchanged, this)), this.$input = this.$element.find("input"), this.$button = this.$element.find(".btn"), this.setDefaultSelection()
            };
            c.prototype = {
                constructor: c,
                selectedItem: function () {
                    var a = this.$selectedItem,
                        c = {};
                    if (a) {
                        var d = this.$selectedItem.text();
                        c = b.extend({
                            text: d
                        }, this.$selectedItem.data())
                    } else c = {
                        text: this.$input.val()
                    };
                    return c
                },
                selectByText: function (a) {
                    var b = "li:fuelTextExactCI(" + a + ")";
                    this.selectBySelector(b)
                },
                selectByValue: function (a) {
                    var b = 'li[data-value="' + a + '"]';
                    this.selectBySelector(b)
                },
                selectByIndex: function (a) {
                    var b = "li:eq(" + a + ")";
                    this.selectBySelector(b)
                },
                selectBySelector: function (a) {
                    var b = this.$element.find(a);
                    typeof b[0] != "undefined" ? (this.$selectedItem = b, this.$input.val(this.$selectedItem.text())) : this.$selectedItem = null
                },
                setDefaultSelection: function () {
                    var a = "li[data-selected=true]:first",
                        b = this.$element.find(a);
                    b.length > 0 && (this.selectBySelector(a), b.removeData("selected"), b.removeAttr("data-selected"))
                },
                enable: function () {
                    this.$input.removeAttr("disabled"), this.$button.removeClass("disabled")
                },
                disable: function () {
                    this.$input.attr("disabled", !0), this.$button.addClass("disabled")
                },
                itemclicked: function (a) {
                    this.$selectedItem = b(a.target).parent(), this.$input.val(this.$selectedItem.text()).trigger("change", {
                        synthetic: !0
                    });
                    var c = this.selectedItem();
                    this.$element.trigger("changed", c), a.preventDefault()
                },
                inputchanged: function (a, c) {
                    if (c && c.synthetic) return;
                    var d = b(a.target).val();
                    this.selectByText(d);
                    var e = this.selectedItem();
                    e.text.length === 0 && (e = {
                        text: d
                    }), this.$element.trigger("changed", e)
                }
            }, b.fn.combobox = function (a, d) {
                var e, f = this.each(function () {
                    var f = b(this),
                        g = f.data("combobox"),
                        h = typeof a == "object" && a;
                    g || f.data("combobox", g = new c(this, h)), typeof a == "string" && (e = g[a](d))
                });
                return e === undefined ? f : e
            }, b.fn.combobox.defaults = {}, b.fn.combobox.Constructor = c, b(function () {
                b(window).on("load", function () {
                    b(".combobox").each(function () {
                        var a = b(this);
                        if (a.data("combobox")) return;
                        a.combobox(a.data())
                    })
                }), b("body").on("mousedown.combobox.data-api", ".combobox", function (a) {
                    var c = b(this);
                    if (c.data("combobox")) return;
                    c.combobox(c.data())
                })
            })
        }), c("fuelux/datagrid", ["require", "jquery"], function (a) {
            var b = a("jquery"),
                c = 22,
                d = function (a, c) {
                    this.$element = b(a), this.$thead = this.$element.find("thead"), this.$tfoot = this.$element.find("tfoot"), this.$footer = this.$element.find("tfoot th"), this.$footerchildren = this.$footer.children().show().css("visibility", "hidden"), this.$topheader = this.$element.find("thead th"), this.$searchcontrol = this.$element.find(".datagrid-search"), this.$filtercontrol = this.$element.find(".filter"), this.$pagesize = this.$element.find(".grid-pagesize"), this.$pageinput = this.$element.find(".grid-pager input"), this.$pagedropdown = this.$element.find(".grid-pager .dropdown-menu"), this.$prevpagebtn = this.$element.find(".grid-prevpage"), this.$nextpagebtn = this.$element.find(".grid-nextpage"), this.$pageslabel = this.$element.find(".grid-pages"), this.$countlabel = this.$element.find(".grid-count"), this.$startlabel = this.$element.find(".grid-start"), this.$endlabel = this.$element.find(".grid-end"), this.$tbody = b("<tbody>").insertAfter(this.$thead), this.$colheader = b("<tr>").appendTo(this.$thead), this.options = b.extend(!0, {}, b.fn.datagrid.defaults, c), this.$pagesize.hasClass("select") ? this.options.dataOptions.pageSize = parseInt(this.$pagesize.select("selectedItem").value, 10) : this.options.dataOptions.pageSize = parseInt(this.$pagesize.val(), 10), this.$searchcontrol.length <= 0 && (this.$searchcontrol = this.$element.find(".search")), this.columns = this.options.dataSource.columns(), this.$nextpagebtn.on("click", b.proxy(this.next, this)), this.$prevpagebtn.on("click", b.proxy(this.previous, this)), this.$searchcontrol.on("searched cleared", b.proxy(this.searchChanged, this)), this.$filtercontrol.on("changed", b.proxy(this.filterChanged, this)), this.$colheader.on("click", "th", b.proxy(this.headerClicked, this)), this.$pagesize.hasClass("select") ? this.$pagesize.on("changed", b.proxy(this.pagesizeChanged, this)) : this.$pagesize.on("change", b.proxy(this.pagesizeChanged, this)), this.$pageinput.on("change", b.proxy(this.pageChanged, this)), this.renderColumns(), this.options.stretchHeight && this.initStretchHeight(), this.renderData()
                };
            d.prototype = {
                constructor: d,
                renderColumns: function () {
                    var a = this;
                    this.$footer.attr("colspan", this.columns.length), this.$topheader.attr("colspan", this.columns.length);
                    var c = "";
                    b.each(this.columns, function (a, b) {
                        c += '<th data-property="' + b.property + '"', b.sortable && (c += ' class="sortable"'), c += ">" + b.label + "</th>"
                    }), a.$colheader.append(c)
                },
                updateColumns: function (a, b) {
                    this._updateColumns(this.$colheader, a, b), this.$sizingHeader && this._updateColumns(this.$sizingHeader, this.$sizingHeader.find("th").eq(a.index()), b)
                },
                _updateColumns: function (a, c, d) {
                    var e = d === "asc" ? "icon-chevron-up" : "icon-chevron-down";
                    a.find("i.datagrid-sort").remove(), a.find("th").removeClass("sorted"), b("<i>").addClass(e + " datagrid-sort").appendTo(c), c.addClass("sorted")
                },
                updatePageDropdown: function (a) {
                    var b = "";
                    for (var c = 1; c <= a.pages; c++) b += "<li><a>" + c + "</a></li>";
                    this.$pagedropdown.html(b)
                },
                updatePageButtons: function (a) {
                    a.page === 1 ? this.$prevpagebtn.attr("disabled", "disabled") : this.$prevpagebtn.removeAttr("disabled"), a.page === a.pages ? this.$nextpagebtn.attr("disabled", "disabled") : this.$nextpagebtn.removeAttr("disabled")
                },
                renderData: function () {
                    var a = this;
                    this.$tbody.html(this.placeholderRowHTML(this.options.loadingHTML)), this.options.dataSource.data(this.options.dataOptions, function (c) {
                        var d = c.count === 1 ? a.options.itemText : a.options.itemsText,
                            e = "";
                        a.$footerchildren.css("visibility", function () {
                            return c.count > 0 ? "visible" : "hidden"
                        }), a.$pageinput.val(c.page), a.$pageslabel.text(c.pages), a.$countlabel.text(c.count + " " + d), a.$startlabel.text(c.start), a.$endlabel.text(c.end), a.updatePageDropdown(c), a.updatePageButtons(c), b.each(c.data, function (c, d) {
                            e += "<tr>", b.each(a.columns, function (a, b) {
                                e += "<td>" + d[b.property] + "</td>"
                            }), e += "</tr>"
                        }), e || (e = a.placeholderRowHTML("0 " + a.options.itemsText)), a.$tbody.html(e), a.stretchHeight(), a.$element.trigger("loaded")
                    })
                },
                placeholderRowHTML: function (a) {
                    return '<tr><td style="text-align:center;padding:20px;border-bottom:none;" colspan="' + this.columns.length + '">' + a + "</td></tr>"
                },
                headerClicked: function (a) {
                    var c = b(a.target);
                    if (!c.hasClass("sortable")) return;
                    var d = this.options.dataOptions.sortDirection,
                        e = this.options.dataOptions.sortProperty,
                        f = c.data("property");
                    e === f ? this.options.dataOptions.sortDirection = d === "asc" ? "desc" : "asc" : (this.options.dataOptions.sortDirection = "asc", this.options.dataOptions.sortProperty = f), this.options.dataOptions.pageIndex = 0, this.updateColumns(c, this.options.dataOptions.sortDirection), this.renderData()
                },
                pagesizeChanged: function (a, c) {
                    c ? this.options.dataOptions.pageSize = parseInt(c.value, 10) : this.options.dataOptions.pageSize = parseInt(b(a.target).val(), 10), this.options.dataOptions.pageIndex = 0, this.renderData()
                },
                pageChanged: function (a) {
                    var c = parseInt(b(a.target).val(), 10);
                    c = isNaN(c) ? 1 : c;
                    var d = this.$pageslabel.text();
                    this.options.dataOptions.pageIndex = c > d ? d - 1 : c - 1, this.renderData()
                },
                searchChanged: function (a, b) {
                    this.options.dataOptions.search = b, this.options.dataOptions.pageIndex = 0, this.renderData()
                },
                filterChanged: function (a, b) {
                    this.options.dataOptions.filter = b, this.options.dataOptions.pageIndex = 0, this.renderData()
                },
                previous: function () {
                    this.$nextpagebtn.attr("disabled", "disabled"), this.$prevpagebtn.attr("disabled", "disabled"), this.options.dataOptions.pageIndex--, this.renderData()
                },
                next: function () {
                    this.$nextpagebtn.attr("disabled", "disabled"), this.$prevpagebtn.attr("disabled", "disabled"), this.options.dataOptions.pageIndex++, this.renderData()
                },
                reload: function () {
                    this.options.dataOptions.pageIndex = 0, this.renderData()
                },
                initStretchHeight: function () {
                    this.$gridContainer = this.$element.parent(), this.$element.wrap('<div class="datagrid-stretch-wrapper">'), this.$stretchWrapper = this.$element.parent(), this.$headerTable = b("<table>").attr("class", this.$element.attr("class")), this.$footerTable = this.$headerTable.clone(), this.$headerTable.prependTo(this.$gridContainer).addClass("datagrid-stretch-header"), this.$thead.detach().appendTo(this.$headerTable), this.$sizingHeader = this.$thead.clone(), this.$sizingHeader.find("tr:first").remove(), this.$footerTable.appendTo(this.$gridContainer).addClass("datagrid-stretch-footer"), this.$tfoot.detach().appendTo(this.$footerTable)
                },
                stretchHeight: function () {
                    if (!this.$gridContainer) return;
                    this.setColumnWidths();
                    var a = this.$gridContainer.height(),
                        b = this.$headerTable.outerHeight(),
                        c = this.$footerTable.outerHeight(),
                        d = b + c;
                    this.$stretchWrapper.height(a - d)
                },
                setColumnWidths: function () {
                    function e(e, f) {
                        if (e === d - 1) return;
                        var g = b(f),
                            h = a.eq(e),
                            i = h.width();
                        h.hasClass("sorted") && g.prop("tagName") === "TD" && (i = i + c), g.width(i)
                    }
                    if (!this.$sizingHeader) return;
                    this.$element.prepend(this.$sizingHeader);
                    var a = this.$sizingHeader.find("th"),
                        d = a.length;
                    this.$colheader.find("th").each(e), this.$tbody.find("tr:first > td").each(e), this.$sizingHeader.detach()
                }
            }, b.fn.datagrid = function (a) {
                return this.each(function () {
                    var c = b(this),
                        e = c.data("datagrid"),
                        f = typeof a == "object" && a;
                    e || c.data("datagrid", e = new d(this, f)), typeof a == "string" && e[a]()
                })
            }, b.fn.datagrid.defaults = {
                dataOptions: {
                    pageIndex: 0,
                    pageSize: 10
                },
                loadingHTML: '<div class="progress progress-striped active" style="width:50%;margin:auto;"><div class="bar" style="width:100%;"></div></div>',
                itemsText: "items",
                itemText: "item"
            }, b.fn.datagrid.Constructor = d
        }), c("fuelux/pillbox", ["require", "jquery"], function (a) {
            var b = a("jquery"),
                c = function (a, c) {
                    this.$element = b(a), this.options = b.extend({}, b.fn.pillbox.defaults, c), this.$element.on("click", "li", b.proxy(this.itemclicked, this))
                };
            c.prototype = {
                constructor: c,
                items: function () {
                    return this.$element.find("li").map(function () {
                        var a = b(this);
                        return b.extend({
                            text: a.text()
                        }, a.data())
                    }).get()
                },
                itemclicked: function (a) {
                    b(a.currentTarget).remove(), a.preventDefault()
                }
            }, b.fn.pillbox = function (a) {
                var d, e = this.each(function () {
                    var e = b(this),
                        f = e.data("pillbox"),
                        g = typeof a == "object" && a;
                    f || e.data("pillbox", f = new c(this, g)), typeof a == "string" && (d = f[a]())
                });
                return d === undefined ? e : d
            }, b.fn.pillbox.defaults = {}, b.fn.pillbox.Constructor = c, b(function () {
                b("body").on("mousedown.pillbox.data-api", ".pillbox", function (a) {
                    var c = b(this);
                    if (c.data("pillbox")) return;
                    c.pillbox(c.data())
                })
            })
        }), c("fuelux/radio", ["require", "jquery"], function (a) {
            var b = a("jquery"),
                c = function (a, c) {
                    this.$element = b(a), this.options = b.extend({}, b.fn.radio.defaults, c), this.$label = this.$element.parent(), this.$icon = this.$label.find("i"), this.$radio = this.$label.find("input[type=radio]"), this.groupName = this.$radio.attr("name"), this.setState(this.$radio), this.$radio.on("change", b.proxy(this.itemchecked, this))
                };
            c.prototype = {
                constructor: c,
                setState: function (a, b) {
                    var c = a.is(":checked"),
                        d = a.is(":disabled");
                    c === !0 && this.$icon.addClass("checked"), d === !0 && this.$icon.addClass("disabled")
                },
                resetGroup: function () {
                    b("input[name=" + this.groupName + "]").next().removeClass("checked")
                },
                enable: function () {
                    this.$radio.attr("disabled", !1), this.$icon.removeClass("disabled")
                },
                disable: function () {
                    this.$radio.attr("disabled", !0), this.$icon.addClass("disabled")
                },
                itemchecked: function (a) {
                    var c = b(a.target);
                    this.resetGroup(), this.setState(c)
                }
            }, b.fn.radio = function (a, d) {
                var e, f = this.each(function () {
                    var f = b(this),
                        g = f.data("radio"),
                        h = typeof a == "object" && a;
                    g || f.data("radio", g = new c(this, h)), typeof a == "string" && (e = g[a](d))
                });
                return e === undefined ? f : e
            }, b.fn.radio.defaults = {}, b.fn.radio.Constructor = c, b(function () {
                b(window).on("load", function () {
                    b(".radio-custom > input[type=radio]").each(function () {
                        var a = b(this);
                        if (a.data("radio")) return;
                        a.radio(a.data())
                    })
                })
            })
        }), c("fuelux/search", ["require", "jquery"], function (a) {
            var b = a("jquery"),
                c = function (a, c) {
                    this.$element = b(a), this.options = b.extend({}, b.fn.search.defaults, c), this.$button = this.$element.find("button").on("click", b.proxy(this.buttonclicked, this)), this.$input = this.$element.find("input").on("keydown", b.proxy(this.keypress, this)).on("keyup", b.proxy(this.keypressed, this)), this.$icon = this.$element.find("i"), this.activeSearch = ""
                };
            c.prototype = {
                constructor: c,
                search: function (a) {
                    this.$icon.attr("class", "icon-remove"), this.activeSearch = a, this.$element.trigger("searched", a)
                },
                clear: function () {
                    this.$icon.attr("class", "icon-search"), this.activeSearch = "", this.$input.val(""), this.$element.trigger("cleared")
                },
                action: function () {
                    var a = this.$input.val(),
                        b = a === "" || a === this.activeSearch;
                    this.activeSearch && b ? this.clear() : a && this.search(a)
                },
                buttonclicked: function (a) {
                    a.preventDefault();
                    if (b(a.currentTarget).is(".disabled, :disabled")) return;
                    this.action()
                },
                keypress: function (a) {
                    a.which === 13 && a.preventDefault()
                },
                keypressed: function (a) {
                    var b, c;
                    a.which === 13 ? (a.preventDefault(), this.action()) : (b = this.$input.val(), c = b && b === this.activeSearch, this.$icon.attr("class", c ? "icon-remove" : "icon-search"))
                },
                disable: function () {
                    this.$input.attr("disabled", "disabled"), this.$button.addClass("disabled")
                },
                enable: function () {
                    this.$input.removeAttr("disabled"), this.$button.removeClass("disabled")
                }
            }, b.fn.search = function (a) {
                return this.each(function () {
                    var d = b(this),
                        e = d.data("search"),
                        f = typeof a == "object" && a;
                    e || d.data("search", e = new c(this, f)), typeof a == "string" && e[a]()
                })
            }, b.fn.search.defaults = {}, b.fn.search.Constructor = c, b(function () {
                b("body").on("mousedown.search.data-api", ".search", function () {
                    var a = b(this);
                    if (a.data("search")) return;
                    a.search(a.data())
                })
            })
        }), c("fuelux/spinner", ["require", "jquery"], function (a) {
            var b = a("jquery"),
                c = function (a, c) {
                    this.$element = b(a), this.options = b.extend({}, b.fn.spinner.defaults, c), this.$input = this.$element.find(".spinner-input"), this.$element.on("keyup", this.$input, b.proxy(this.change, this)), this.options.hold ? (this.$element.on("mousedown", ".spinner-up", b.proxy(function () {
                        this.startSpin(!0)
                    }, this)), this.$element.on("mouseup", ".spinner-up, .spinner-down", b.proxy(this.stopSpin, this)), this.$element.on("mouseout", ".spinner-up, .spinner-down", b.proxy(this.stopSpin, this)), this.$element.on("mousedown", ".spinner-down", b.proxy(function () {
                        this.startSpin(!1)
                    }, this))) : (this.$element.on("click", ".spinner-up", b.proxy(function () {
                        this.step(!0)
                    }, this)), this.$element.on("click", ".spinner-down", b.proxy(function () {
                        this.step(!1)
                    }, this))), this.switches = {
                        count: 1,
                        enabled: !0
                    }, this.options.speed === "medium" ? this.switches.speed = 300 : this.options.speed === "fast" ? this.switches.speed = 100 : this.switches.speed = 500, this.lastValue = null, this.render(), this.options.disabled && this.disable()
                };
            c.prototype = {
                constructor: c,
                render: function () {
                    this.$input.val(this.options.value), this.$input.attr("maxlength", (this.options.max + "").split("").length)
                },
                change: function () {
                    var a = this.$input.val();
                    a / 1 ? this.options.value = a / 1 : (a = a.replace(/[^0-9]/g, ""), this.$input.val(a), this.options.value = a / 1), this.triggerChangedEvent()
                },
                stopSpin: function () {
                    clearTimeout(this.switches.timeout), this.switches.count = 1, this.triggerChangedEvent()
                },
                triggerChangedEvent: function () {
                    var a = this.value();
                    if (a === this.lastValue) return;
                    this.lastValue = a, this.$element.trigger("changed", a), this.$element.trigger("change")
                },
                startSpin: function (a) {
                    if (!this.options.disabled) {
                        var c = this.switches.count;
                        c === 1 ? (this.step(a), c = 1) : c < 3 ? c = 1.5 : c < 8 ? c = 2.5 : c = 4, this.switches.timeout = setTimeout(b.proxy(function () {
                            this.iterator(a)
                        }, this), this.switches.speed / c), this.switches.count++
                    }
                },
                iterator: function (a) {
                    this.step(a), this.startSpin(a)
                },
                step: function (a) {
                    var b = this.options.value,
                        c = a ? this.options.max : this.options.min;
                    if (a ? b < c : b > c) {
                        var d = b + (a ? 1 : -1) * this.options.step;
                        (a ? d > c : d < c) ? this.value(c): this.value(d)
                    }
                },
                value: function (a) {
                    return !isNaN(parseFloat(a)) && isFinite(a) ? (a = parseFloat(a), this.options.value = a, this.$input.val(a), this) : this.options.value
                },
                disable: function () {
                    this.options.disabled = !0, this.$input.attr("disabled", ""), this.$element.find("button").addClass("disabled")
                },
                enable: function () {
                    this.options.disabled = !1, this.$input.removeAttr("disabled"), this.$element.find("button").removeClass("disabled")
                }
            }, b.fn.spinner = function (a, d) {
                var e, f = this.each(function () {
                    var f = b(this),
                        g = f.data("spinner"),
                        h = typeof a == "object" && a;
                    g || f.data("spinner", g = new c(this, h)), typeof a == "string" && (e = g[a](d))
                });
                return e === undefined ? f : e
            }, b.fn.spinner.defaults = {
                value: 1,
                min: 1,
                max: 999,
                step: 1,
                hold: !0,
                speed: "medium",
                disabled: !1
            }, b.fn.spinner.Constructor = c, b(function () {
                b("body").on("mousedown.spinner.data-api", ".spinner", function (a) {
                    var c = b(this);
                    if (c.data("spinner")) return;
                    c.spinner(c.data())
                })
            })
        }), c("fuelux/select", ["require", "jquery", "./util"], function (a) {
            var b = a("jquery");
            a("./util");
            var c = function (a, c) {
                this.$element = b(a), this.options = b.extend({}, b.fn.select.defaults, c), this.$element.on("click", "a", b.proxy(this.itemclicked, this)), this.$button = this.$element.find(".btn"), this.$label = this.$element.find(".dropdown-label"), this.setDefaultSelection(), c.resize === "auto" && this.resize()
            };
            c.prototype = {
                constructor: c,
                itemclicked: function (a) {
                    this.$selectedItem = b(a.target).parent(), this.$label.text(this.$selectedItem.text());
                    var c = this.selectedItem();
                    this.$element.trigger("changed", c), a.preventDefault()
                },
                resize: function () {
                    var a = b("#selectTextSize")[0];
                    a || b("<div/>").attr({
                        id: "selectTextSize"
                    }).appendTo("body");
                    var c = 0,
                        d = 0;
                    this.$element.find("a").each(function () {
                        var a = b(this),
                            e = a.text(),
                            f = b("#selectTextSize");
                        f.text(e), d = f.outerWidth(), d > c && (c = d)
                    }), this.$label.width(c)
                },
                selectedItem: function () {
                    var a = this.$selectedItem.text();
                    return b.extend({
                        text: a
                    }, this.$selectedItem.data())
                },
                selectByText: function (a) {
                    var b = "li a:fuelTextExactCI(" + a + ")";
                    this.selectBySelector(b)
                },
                selectByValue: function (a) {
                    var b = 'li[data-value="' + a + '"]';
                    this.selectBySelector(b)
                },
                selectByIndex: function (a) {
                    var b = "li:eq(" + a + ")";
                    this.selectBySelector(b)
                },
                selectBySelector: function (a) {
                    var b = this.$element.find(a);
                    this.$selectedItem = b, this.$label.text(this.$selectedItem.text())
                },
                setDefaultSelection: function () {
                    var a = "li[data-selected=true]:first",
                        b = this.$element.find(a);
                    b.length === 0 ? this.selectByIndex(0) : (this.selectBySelector(a), b.removeData("selected"), b.removeAttr("data-selected"))
                },
                enable: function () {
                    this.$button.removeClass("disabled")
                },
                disable: function () {
                    this.$button.addClass("disabled")
                }
            }, b.fn.select = function (a, d) {
                var e, f = this.each(function () {
                    var f = b(this),
                        g = f.data("select"),
                        h = typeof a == "object" && a;
                    g || f.data("select", g = new c(this, h)), typeof a == "string" && (e = g[a](d))
                });
                return e === undefined ? f : e
            }, b.fn.select.defaults = {}, b.fn.select.Constructor = c, b(function () {
                b(window).on("load", function () {
                    b(".select").each(function () {
                        var a = b(this);
                        if (a.data("select")) return;
                        a.select(a.data())
                    })
                }), b("body").on("mousedown.select.data-api", ".select", function (a) {
                    var c = b(this);
                    if (c.data("select")) return;
                    c.select(c.data())
                })
            })
        }), c("fuelux/tree", ["require", "jquery"], function (a) {
            var b = a("jquery"),
                c = function (a, c) {
                    this.$element = b(a), this.options = b.extend({}, b.fn.tree.defaults, c), this.$element.on("click", ".tree-item", b.proxy(function (a) {
                        this.selectItem(a.currentTarget)
                    }, this)), this.$element.on("click", ".tree-folder-header", b.proxy(function (a) {
                        this.selectFolder(a.currentTarget)
                    }, this)), this.render()
                };
            c.prototype = {
                constructor: c,
                render: function () {
                    this.populate(this.$element)
                },
                populate: function (a) {
                    var c = this,
                        d = a.parent().find(".tree-loader:eq(0)");
                    d.show(), this.options.dataSource.data(a.data(), function (e) {
                        d.hide(), b.each(e.data, function (b, d) {
                            var e;
                            d.type === "folder" ? (e = c.$element.find(".tree-folder:eq(0)").clone().show(), e.find(".tree-folder-name").html(d.name), e.find(".tree-loader").html(c.options.loadingHTML), e.find(".tree-folder-header").data(d)) : d.type === "item" && (e = c.$element.find(".tree-item:eq(0)").clone().show(), e.find(".tree-item-name").html(d.name), e.data(d)), a.hasClass("tree-folder-header") ? a.parent().find(".tree-folder-content:eq(0)").append(e) : a.append(e)
                        }), c.$element.trigger("loaded")
                    })
                },
                selectItem: function (a) {
                    var c = b(a),
                        d = this.$element.find(".tree-selected"),
                        e = [];
                    this.options.multiSelect ? b.each(d, function (a, d) {
                        var f = b(d);
                        f[0] !== c[0] && e.push(b(d).data())
                    }) : d[0] !== c[0] && (d.removeClass("tree-selected").find("i").removeClass("icon-ok").addClass("tree-dot"), e.push(c.data())), c.hasClass("tree-selected") ? (c.removeClass("tree-selected"), c.find("i").removeClass("icon-ok").addClass("tree-dot")) : (c.addClass("tree-selected"), c.find("i").removeClass("tree-dot").addClass("icon-ok"), this.options.multiSelect && e.push(c.data())), e.length && this.$element.trigger("selected", {
                        info: e
                    })
                },
                selectFolder: function (a) {
                    var c = b(a),
                        d = c.parent();
                    c.find(".icon-folder-close").length ? (d.find(".tree-folder-content").children().length ? d.find(".tree-folder-content:eq(0)").show() : this.populate(c), d.find(".icon-folder-close:eq(0)").removeClass("icon-folder-close").addClass("icon-folder-open"), this.$element.trigger("opened", c.data())) : (this.options.cacheItems ? d.find(".tree-folder-content:eq(0)").hide() : d.find(".tree-folder-content:eq(0)").empty(), d.find(".icon-folder-open:eq(0)").removeClass("icon-folder-open").addClass("icon-folder-close"), this.$element.trigger("closed", c.data()))
                },
                selectedItems: function () {
                    var a = this.$element.find(".tree-selected"),
                        c = [];
                    return b.each(a, function (a, d) {
                        c.push(b(d).data())
                    }), c
                }
            }, b.fn.tree = function (a, d) {
                var e, f = this.each(function () {
                    var f = b(this),
                        g = f.data("tree"),
                        h = typeof a == "object" && a;
                    g || f.data("tree", g = new c(this, h)), typeof a == "string" && (e = g[a](d))
                });
                return e === undefined ? f : e
            }, b.fn.tree.defaults = {
                multiSelect: !1,
                loadingHTML: "<div>Loading...</div>",
                cacheItems: !0
            }, b.fn.tree.Constructor = c
        }), c("fuelux/wizard", ["require", "jquery"], function (a) {
            var b = a("jquery"),
                c = function (a, c) {
                    var d;
                    this.$element = b(a), this.options = b.extend({}, b.fn.wizard.defaults, c), this.currentStep = 1, this.numSteps = this.$element.find("li").length, this.$prevBtn = this.$element.find("button.btn-prev"), this.$nextBtn = this.$element.find("button.btn-next"), d = this.$nextBtn.children().detach(), this.nextText = b.trim(this.$nextBtn.text()), this.$nextBtn.append(d), this.$prevBtn.on("click", b.proxy(this.previous, this)), this.$nextBtn.on("click", b.proxy(this.next, this)), this.$element.on("click", "li.complete", b.proxy(this.stepclicked, this))
                };
            c.prototype = {
                constructor: c,
                setState: function () {
                    var a = this.currentStep > 1,
                        c = this.currentStep === 1,
                        d = this.currentStep === this.numSteps;
                    this.$prevBtn.attr("disabled", c === !0 || a === !1);
                    var e = this.$nextBtn.data();
                    if (e && e.last) {
                        this.lastText = e.last;
                        if (typeof this.lastText != "undefined") {
                            var f = d !== !0 ? this.nextText : this.lastText,
                                g = this.$nextBtn.children().detach();
                            this.$nextBtn.text(f).append(g)
                        }
                    }
                    var h = this.$element.find("li");
                    h.removeClass("active").removeClass("complete"), h.find("span.badge").removeClass("badge-info").removeClass("badge-success");
                    var i = "li:lt(" + (this.currentStep - 1) + ")",
                        j = this.$element.find(i);
                    j.addClass("complete"), j.find("span.badge").addClass("badge-success");
                    var k = "li:eq(" + (this.currentStep - 1) + ")",
                        l = this.$element.find(k);
                    l.addClass("active"), l.find("span.badge").addClass("badge-info");
                    var m = l.data().target;
                    b(".step-pane").removeClass("active"), b(m).addClass("active"), this.$element.trigger("changed")
                },
                stepclicked: function (a) {
                    var c = b(a.currentTarget),
                        d = b(".steps li").index(c),
                        e = b.Event("stepclick");
                    this.$element.trigger(e, {
                        step: d + 1
                    });
                    if (e.isDefaultPrevented()) return;
                    this.currentStep = d + 1, this.setState()
                },
                previous: function () {
                    var a = this.currentStep > 1;
                    if (a) {
                        var c = b.Event("change");
                        this.$element.trigger(c, {
                            step: this.currentStep,
                            direction: "previous"
                        });
                        if (c.isDefaultPrevented()) return;
                        this.currentStep -= 1, this.setState()
                    }
                },
                next: function () {
                    var a = this.currentStep + 1 <= this.numSteps,
                        c = this.currentStep === this.numSteps;
                    if (a) {
                        var d = b.Event("change");
                        this.$element.trigger(d, {
                            step: this.currentStep,
                            direction: "next"
                        });
                        if (d.isDefaultPrevented()) return;
                        this.currentStep += 1, this.setState()
                    } else c && this.$element.trigger("finished")
                },
                selectedItem: function (a) {
                    return {
                        step: this.currentStep
                    }
                }
            }, b.fn.wizard = function (a, d) {
                var e, f = this.each(function () {
                    var f = b(this),
                        g = f.data("wizard"),
                        h = typeof a == "object" && a;
                    g || f.data("wizard", g = new c(this, h)), typeof a == "string" && (e = g[a](d))
                });
                return e === undefined ? f : e
            }, b.fn.wizard.defaults = {}, b.fn.wizard.Constructor = c, b(function () {
                b("body").on("mousedown.wizard.data-api", ".wizard", function () {
                    var a = b(this);
                    if (a.data("wizard")) return;
                    a.wizard(a.data())
                })
            })
        }), c("fuelux/all", ["require", "jquery", "bootstrap/bootstrap-affix", "bootstrap/bootstrap-alert", "bootstrap/bootstrap-button", "bootstrap/bootstrap-carousel", "bootstrap/bootstrap-collapse", "bootstrap/bootstrap-dropdown", "bootstrap/bootstrap-modal", "bootstrap/bootstrap-popover", "bootstrap/bootstrap-scrollspy", "bootstrap/bootstrap-tab", "bootstrap/bootstrap-tooltip", "bootstrap/bootstrap-transition", "bootstrap/bootstrap-typeahead", "fuelux/checkbox", "fuelux/combobox", "fuelux/datagrid", "fuelux/pillbox", "fuelux/radio", "fuelux/search", "fuelux/spinner", "fuelux/select", "fuelux/tree", "fuelux/wizard"], function (a) {
            a("jquery"), a("bootstrap/bootstrap-affix"), a("bootstrap/bootstrap-alert"), a("bootstrap/bootstrap-button"), a("bootstrap/bootstrap-carousel"), a("bootstrap/bootstrap-collapse"), a("bootstrap/bootstrap-dropdown"), a("bootstrap/bootstrap-modal"), a("bootstrap/bootstrap-popover"), a("bootstrap/bootstrap-scrollspy"), a("bootstrap/bootstrap-tab"), a("bootstrap/bootstrap-tooltip"), a("bootstrap/bootstrap-transition"), a("bootstrap/bootstrap-typeahead"), a("fuelux/checkbox"), a("fuelux/combobox"), a("fuelux/datagrid"), a("fuelux/pillbox"), a("fuelux/radio"), a("fuelux/search"), a("fuelux/spinner"), a("fuelux/select"), a("fuelux/tree"), a("fuelux/wizard")
        }), c("jquery", [], function () {
            return jQuery
        }), c("fuelux/loader", ["fuelux/all"], function () {}), b("fuelux/loader")
})();