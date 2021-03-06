"use strict";

function imageLabel(e) {
	function a() {
		function e() {
			var e = $(".imageLabel-imgdrop"),
				a = [];
			e.each(function(e, i) {
				var n = $(i).width() * $(i).height();
				a.push(n)
			}), e.each(function(e, i) {
				var n = $(i),
					t = n.width() * n.height(),
					l = 0;
				$.each(a, function(e, a) {
					t <= a && l++
				}), n.css({
					"z-index": l
				})
			})
		}
		function a() {
			var e = $(".imageLabel-img"),
				a = $(".imageLabel-jisuan"),
				i = e[0].naturalWidth,
				n = e[0].naturalHeight,
				t = e.parents(".imageLabel-img-body").width(),
				l = e.parents(".imageLabel-img-body").height();
			i / n > t / l ? a.css({
				width: "100%",
				height: n / i * t
			}) : a.css({
				height: "100%",
				width: i / n * l
			})
		}
		var t, s, o, d, c, g, m, r = $(".imageLabel-content"),
			b = !1,
			p = !1,
			v = !1,
			f = $(".imageLabel-drap-menu");
		$(".imageLabel-content")[0].oncontextmenu = function() {
			return !1
		}, f[0].oncontextmenu = function() {
			return !1
		}, $("body").click(function(e) {
			f.hide()
		}), $.each(n.data, function(e, a) {
			s = $('<div class="imageLabel-imgdrop ' + (a.name ? "imageLabel-drop-has" : "") + '"><span class="imageLabel-imgdrop-font">' + (a.name || "") + '</span><div class="imageLable-i-s"></div></div>');
			for (var i = 0; i < 8; i++) s.find(".imageLable-i-s").append('<i class="imageLable-i">');
			if (n.shade) for (var t = 0; t < 4; t++) s.append('<em class="imageLable-em">');
			var l = a;
			s.css({
				left: 100 * (l.ex - l.x > 0 ? l.x : l.ex) + "%",
				top: 100 * (l.ey - l.y > 0 ? l.y : l.ey) + "%",
				width: 100 * Math.abs(l.ex - l.x) + "%",
				height: 100 * Math.abs(l.ey - l.y) + "%"
			}).attr("data-json", JSON.stringify(a)), r.append(s)
		}), e(), $(".imageLabel-content").mousedown(function(e) {
			if (d = e.button, 2 != e.button) {
				if (f.hide(), b = !0, r = $(this), t = {
					x: r.offset().left,
					y: r.offset().top,
					cx: e.clientX,
					cy: e.clientY,
					w: r.width(),
					h: r.height()
				}, o = {
					x: (t.cx - t.x) / t.w,
					y: (t.cy - t.y) / t.h,
					ex: 0,
					ey: 0
				}, $(e.target).hasClass("imageLabel-imgdrop")) p = !0, s = $(e.target), c = JSON.parse(s.attr("data-json")), o = $.extend({}, c), n.startArea();
				else if ($(e.target).hasClass("imageLable-i")) v = !0, g = $(e.target), s = $(e.target).parents(".imageLabel-imgdrop"), c = JSON.parse(s.attr("data-json")), o = $.extend({}, c);
				else {
					m = (new Date).getTime(), p = !1, s = $('<div class="imageLabel-imgdrop"><span class="imageLabel-imgdrop-font"></span><div class="imageLable-i-s"></div></div>');
					for (var a = 0; a < 8; a++) s.find(".imageLable-i-s").append('<i class="imageLable-i">');
					if (n.shade) for (var i = 0; i < 4; i++) s.append('<em class="imageLable-em">');
					s.addClass("imageLabel-drop-edit").appendTo(r), s.siblings().removeClass("imageLabel-drop-edit")
				}
				s.addClass("imageLabel-drop-now"), n.only && $(this).find(".imageLabel-imgdrop").hide()
			} else $(e.target).hasClass("imageLabel-imgdrop") && (s = $(e.target), setTimeout(function() {
				f.css({
					left: e.clientX,
					top: e.clientY
				}).show()
			}, 0))
		}), $(".imageLabel-img-boxs").mousemove(function(e) {
			if (b) {
				if (p) o.x = c.x + (e.clientX - t.cx) / t.w, o.ex = c.ex + (e.clientX - t.cx) / t.w, o.y = c.y + (e.clientY - t.cy) / t.h, o.ey = c.ey + (e.clientY - t.cy) / t.h;
				else if (v) {
					var a = g.index();
					0 == a && (o.x = c.x + (e.clientX - t.cx) / t.w, o.y = c.y + (e.clientY - t.cy) / t.h), 1 == a && (o.ex = c.ex + (e.clientX - t.cx) / t.w, o.y = c.y + (e.clientY - t.cy) / t.h), 2 == a && (o.ex = c.ex + (e.clientX - t.cx) / t.w, o.ey = c.ey + (e.clientY - t.cy) / t.h), 3 == a && (o.x = c.x + (e.clientX - t.cx) / t.w, o.ey = c.ey + (e.clientY - t.cy) / t.h), 4 == a && (o.y = c.y + (e.clientY - t.cy) / t.h), 5 == a && (o.ex = c.ex + (e.clientX - t.cx) / t.w), 6 == a && (o.ey = c.ey + (e.clientY - t.cy) / t.h), 7 == a && (o.x = c.x + (e.clientX - t.cx) / t.w)
				} else o.ex = (e.clientX - t.x) / t.w, o.ey = (e.clientY - t.y) / t.h;
				o.y < 0 && (o.y = 0), o.x < 0 && (o.x = 0), o.ey < 0 && (o.ey = 0), o.ex < 0 && (o.ex = 0), o.ey > 1 && (o.ey = 1), o.ex > 1 && (o.ex = 1), o.y > 1 && (o.y = 1), o.x > 1 && (o.x = 1), s.css({
					left: 100 * (o.ex - o.x > 0 ? o.x : o.ex) + "%",
					top: 100 * (o.ey - o.y > 0 ? o.y : o.ey) + "%",
					width: 100 * Math.abs(o.ex - o.x) + "%",
					height: 100 * Math.abs(o.ey - o.y) + "%"
				}).addClass("imageLabel-drop-move")
			}
		}).mouseup(function(a) {
			if (b) {
				var i = {};
				o.x < o.ex ? (i.x = o.x, i.ex = o.ex) : (i.x = o.ex, i.ex = o.x), o.y < o.ey ? (i.y = o.y, i.ey = o.ey) : (i.y = o.ey, i.ey = o.y), s.attr("data-json", JSON.stringify($.extend(o, i))), Math.abs(a.clientX - t.cx) > 10 && Math.abs(a.clientY - t.cy) > 10 && !p && !v ? (n.editPop && ($(".imageLabel-input").addClass("imageLabel-active").find("input").val(""), setTimeout(function() {
					$(".imageLabel-input").find("input").focus()[0].setSelectionRange(-1, -1)
				}, 500)), n.edit(s)) : p || v || s.remove(), b = !1, p = !1, v = !1, e(), s.removeClass("imageLabel-drop-now imageLabel-drop-move")
			}
			n.only && $(this).find(".imageLabel-imgdrop").show()
		});
		var y = $(".imageLabel-input"),
			u = y.find("input");
		y.find(".imageLabel-input-close").click(function() {
			y.removeClass("imageLabel-active")
		}), y.find(".imageLabel-input-ok").click(function() {
			s.find(".imageLabel-imgdrop-font").html(u.val());
			var e = JSON.parse(s.attr("data-json"));
			e.name = u.val(), s.attr("data-json", JSON.stringify(e)), y.removeClass("imageLabel-active"), u.val() ? s.addClass("imageLabel-drop-has") : s.removeClass("imageLabel-drop-has")
		}), $(".imageLabel-delete").click(function() {
			s.remove(), f.hide()
		}), $(".imageLabel-edit").click(function() {
			n.edit(s), s.addClass("imageLabel-drop-edit").siblings().removeClass("imageLabel-drop-edit"), n.editPop && (y.addClass("imageLabel-active").find("input").val(s.find(".imageLabel-imgdrop-font").html()), setTimeout(function() {
				y.find("input").focus()[0].setSelectionRange(-1, -1)
			}, 500)), f.hide()
		}), u.keydown(function(e) {
			13 == e.keyCode && y.find(".imageLabel-input-ok").click()
		}), $(window).keydown(function(e) {
			27 == e.keyCode && y.hasClass("imageLabel-active") && y.removeClass("imageLabel-active")
		}), a(), $(window).resize(a), $(".imageLabel-closes").click(function() {
			n.close(i.getData()) && (l.removeClass("imageLabel-box-active"), setTimeout(function() {
				l.remove()
			}, 500))
		}).next().click(function() {
			n.confirm(i.getData()) && l.removeClass("imageLabel-box-active")
		})
	}
	if (!e.img) return alert("请填写图片地址"), !1;
	var i = {
		getData: function() {
			var e = [];
			return $(".imageLabel-imgdrop").each(function() {
				e.push(JSON.parse($(this).attr("data-json")));
			}), e
		},
		clearArea: function() {
			$(".imageLabel-imgdrop").remove()
		},
		close: function() {
			$(".imageLabel-closes").click()
		}
	},
		n = {
			only: !1,
			shade: !0,
			editPop: !0,
			close: function() {
				return !0
			},
			edit: function() {},
			confirm: function() {
				alert("asd");
				return !0;
			},
			startArea: function() {},
			clickArea: function() {},
			data: []
		};
	n = $.extend(n, e), $(".imageLabel-box").remove();
	var t = '<div class="imageLabel-box">\n    <div class="imageLabel">\n        <div class="imageLabel-img-boxs">\n            <span class="imageLabel-img-body">\n                <div class="imageLabel-loading-body">\n                    <div class="imageLabel-loading"></div>\n                </div>\n                <div class="imageLabel-jisuan" style="position: relative;overflow:hidden;">\n                    <img src="' + e.img + '" alt="" style=\'position: absolute;with:100%;height:100%;\' class="imageLabel-img">\n                    <div class="imageLabel-content">\n\n                    </div>\n                </div>\n            </span>\n            <ul class="imageLabel-drap-menu">\n                <div style=\'overflow: hidden;\'>\n                    <div style="cursor: pointer;" class="imageLabel-delete btns">删除</div>\n                    <div style="cursor: pointer;" class="imageLabel-edit btns">编辑</div>\n                </div>\n                \x3c!--\n\n                <li style=\'padding:10px;\'>\n                    <i></i>红色\n                </li>\n                <li style=\'padding:10px;\'>\n                    <i></i>红色\n                </li>\n                --\x3e\n            </ul>\n        </div>\n        <div class="imageLabel-buttons">\n            <div class="imageLabel-btn imageLabel-closes">关闭</div>\n            <div class="imageLabel-btn">确定</div>\n        </div>\n        <div class="imageLabel-input" style=\'background-color:rgba(255,255,255,0.3);\'>\n            <div class="imageLabel-input-box" style=\'width:250px;\'>\n                <div style=\'background-color: #333;\'>\n                    <div style=\'color:#fff;overflow:hidden;line-height: 40px;\'>\n                        <span style=\'float: left;margin-left:20px;\'>编辑内容</span>\n                        <span class="imageLabel-input-close" style=\'float:right;margin-right:20px;cursor: pointer;\'>X</span>\n                    </div>\n                </div>\n\n                <div style=\'background: #fff;padding:20px;\'>\n                    <input type="text" value=\'\' max=\'10\' style=\'width:100%;padding:5px;\'>\n                    <div style=\'margin-top:20px;overflow:hidden;\'>\n                        <div class="imageLabel-input-close imageLabel-btn" style=\'float: left;width:90px;background-color: #959595;\'>取消</div>\n                        <div class="imageLabel-input-ok imageLabel-btn" style=\'float: right;width:90px;\'>确定</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
		l = $(t);
	return l.find(".imageLabel-img").one("load", function() {
		$(this).addClass("imageLabel-img-active"), $(".imageLabel-loading-body").hide(), a()
	}), l.appendTo("body"), setTimeout(function() {
		l.addClass("imageLabel-box-active")
	}, 0), i
}