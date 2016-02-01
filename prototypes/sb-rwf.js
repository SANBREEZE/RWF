/*
 * Framework	: SANBREEZE Resposive Web
 * Version	: 1.0.0
 * Filename	: sb-rwf.js
 * Copyright    : 2014, Mario Briesemeister
 *
 *
 * Documentation:
 *	Please visit https://github.com/SANBREEZE/RWF/ for more information
 *	about to integrate this framework to your site and for downloading
 *	this framework.
 *
 *
 * Requirements	:
 *	jQuery 1.11.x or higher
 *
 *
 * Rights	:
 *	The MIT License (MIT)
 *
 *	Copyright (c) 2014, SANBREEZE GmbH
 *
 *	Permission is hereby granted, free of charge, to any person obtaining a copy
 *	of this software and associated documentation files (the "Software"), to deal
 *	in the Software without restriction, including without limitation the rights
 *	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *	copies of the Software, and to permit persons to whom the Software is
 *	furnished to do so, subject to the following conditions:
 *
 *	The above copyright notice and this permission notice shall be included in all
 *	copies or substantial portions of the Software.
 *
 *	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *	SOFTWARE.
 *
*/




loadTimer = setInterval(_loading, 50);
function _loading () {
	var e = document.getElementById("rwf-loader");

	if (!e.style["opacity"]) {
		e.style["opacity"] = 1.0;
	}

	if (document.readyState === "complete") {
		o = e.style["opacity"];
		if (o >= 0.1) {
			e.style["opacity"] = o - 0.05;
		} else {
			e.style["opacity"] = 0;
			e.style["display"] = "none";
			clearInterval(loadTimer);
		}
	} else {
		e.style["display"] = "inline-block";
	}
}

(function($){
	var defs = {
		theme : "",
		menu : [
			{
				title : "Menu-Title 1",
				href : "Menu-Link 1",
				submenu : [
					{
						title:"Submenu-Title 1",
						href:"Submenu-Link 1",
					}
				]
			}
		],
		imageSlider : {
			interval : 7500
		}
	},
	opt,
	body		= "body",
	ctxMenu 	= "contextmenu",
	fw			= "rwf",

	close		= "close",
	content		= "content",
	footer		= "footer",
	fullsite	= "fullsite",
	header		= "header",
	icon		= "icon",
	imageslider = "imageslider",
	logo		= "logo",
	menu		= "menu",
	noimage 	= "noimage",
	submenu		= "submenu",
	wrapper		= "wrapper",

	m_event	= ["mousemove","mousedown","mouseup"],
	t_event	= ["touchmove","touchstart","touchend"],

	rwf = {
		e	: function (a) {
			return fw + "-" + a;
		},
		jQV : function () {
			var
				v = ["1.11", "2.0", "2.1"],
				e = "jQuery between version " + v[0] + ".x - " + v[v.length-1] + ".x is required!";

			if (v.indexOf($.fn.jquery.substr(0,4)) == -1 && v.indexOf($.fn.jquery.substr(0,3)) == -1) {
				console.log(e);
				document.write(e);
				alert(e);
				return false;
			} else {
				return true;
			}
		},
		loadTheme : function (a) {
			var
				s = document.getElementsByTagName("script"),
				b,
				st = "themes/" + fw + "-white",
				tN = function (t) {
					if (document.createStyleSheet) {
						document.createStyleSheet(t);
					} else {
						$("head").append($('<link rel="stylesheet" href="' + t + '" type="text/css" />'));
					}
				};

			for (var i = 0; i < s.length; i++) {
				p = s[i].src;
				if ( p.match(/sb-rwf.js/) ) {
					b = p.replace(/sb-rwf.js/, st+".css");
				}
				if ( p.match(/sb-rwf-min.js/) ) {
					b = p.replace(/sb-rwf-min.js/, st+"-min.css");
				}
				if ( p.match(/sb-rwf-pck.js/) ) {
					b = p.replace(/sb-rwf-pck.js/, st+"-min.css");
				}
			}
			if (!a) {
				tN(b);
			} else {
				$.get(a).done(function () { tN(a); }).fail(function () { tN(b); });
			}
		}
	};


	function _gE(a){
		var
			b = a.substring(0,1);

		if (b == "#") {
			return document.getElementById("" + a.substring(1,a.length));
		} else if (b == "."){
			return document.querySelectorAll(a);
		} else {
			return document.getElementByTagName("" + a);
		}
	}

	function _cE(t, a, n, v){
		var
			e=document.createElement(t);
		
		a = (a) ? a : ".";
		n = (n) ? n : null;
		v = (v) ? v : null;

		if (a == ".") {
			e.className = n;
		}
		if (a == "#") {
			e.id = n;
		}
		
		switch (t) {
			case "div": {
				e.innerHTML = v;
				break;
			}
			case "ul": {
				e.innerHTML = v;
				break;
			}
			case "li": {
				e.innerHTML = v;
				break;
			}
		}
		return e;
	}

	function _createHeader () {
		var
			h=$("#" + rwf.e(header)),
			i=$("." + rwf.e(menu+icon)),
			l,m,w;
		
		if (h.html()) {
			m = $("." + rwf.e(menu));
			if (!m.html()) {
				m = _cE("div", null, rwf.e(menu));
				h.append(m);
			}
			m = $("." + rwf.e(menu));
			w = _cE("div", null, rwf.e(wrapper));
			m.append(w);

			if (!i.attr(".")) {
				i = _cE("div", null, rwf.e(menu+icon));
				h.append(i);
			}
			
			i = $("." + rwf.e(menu+icon));
			if (i.html()) {
				i.addClass(noimage);
			} else {
				i.addClass(icon + " " + menu);
			}
			i.click(function (e){
				_toggleMenu();
			});
			i.appendTo(w);


			l = $("." + rwf.e(logo));
			if (l.html()) {
				l.addClass(noimage);
			}
			l.click(function (){
				window.location.href = window.location.hostname;
			});
			l.appendTo(w);

			_createMenu();
		}
	}

	function _createMenu () {
		if (opt.menu) {
			var
				eS = _cE("div", null, rwf.e(submenu));
				eW = _cE("div", null, rwf.e(wrapper) + " " + rwf.e(menu+wrapper));
				eU = _cE("ul");

			for (var i = 0; i < opt.menu.length; i++) {
				var eL = _cE("li", null, null, opt.menu[i].title);
				$(eL).click(function (){
					_toggleMenu();
					_loadPage(opt.menu[$(this).index()].href);
				});
				eU.appendChild(eL);
			}
			eW.appendChild(eU);
			eS.appendChild(eW);
			_gE("#" + rwf.e(header)).appendChild(eS);

			var
				S = $("." + rwf.e(submenu)),
				mS = S.children().children().children(),
				mSW = 0;

			for(var i = 0; i < mS.length; i++){
				mSW += (parseInt($(mS[i]).width())+parseInt($(mS[i]).css("padding-left"))+parseInt($(mS[i]).css("padding-right"))+parseInt($(mS[i]).css("margin-left"))+parseInt($(mS[i]).css("margin-right")));
			}
			mSW = mSW + 5 + "px";
			$(S.children().children()[0]).css({"width":mSW});
		}
	}
	
	function _toggleMenu () {
		var 
			eM = $("." + rwf.e(menu)),
			eS = $("." + rwf.e(submenu)),
			eMH = eM.outerHeight(),
			eSP = eS.position().top;

		if (eSP == eMH) {
			eS.css({ "opacity" : 0, "top" : 0 });
		} else {
			eS.css({ "top" : eMH, "opacity" : 1 });
		}

		$("." + rwf.e(menu+icon)).toggleClass(close);
	}

	function _createContent () {
		$("#" + rwf.e(content) + ", #" + rwf.e(footer)).wrapInner(_cE("div", null, rwf.e(wrapper)));
	}

	function _imageSlide () {
		var
			t,
			config = function () {
				var
					sliders = $(document).find("." + rwf.e(imageslider));
				for (var s = 0; s < sliders.length; s++) {
					if (sliders[s].className.match(fullsite)) {
						if (sliders[s].parentNode.className.match(rwf.e(wrapper))){
							$(sliders[s]).insertBefore($(sliders[s]).parent());
						}
						$(sliders[s]).height(window.innerHeight);
						$(sliders[s]).width(window.innerWidth);
					} else {
						$(sliders[s]).height($(sliders[s]).css("min-height"));
						$(sliders[s]).width($(sliders[s]).parent().innerWidth());
					}

					var items = $(sliders[s]).find(".item");

					if (items.length > 1) {
						var
							markers = $(sliders[s]).find(".paginator");
						if (!markers[s]) {
							var
								mK = _cE("div", null, "paginator");
							for (var m = 0; m < items.length; m++) {
								mI = _cE("div", null, "paginatoricon");
								mK.appendChild(mI);
							}
							$(sliders[s]).append(mK);
						}
					}

					var
						mK = $(sliders[s]).find(".paginator"),
						mI = $(mK[0]).find(".paginatoricon");

					for (var i = 0; i < items.length; i++) {
						var
							imgs = $(items[i]).find("img");
						for (var j = 0; j < imgs.length; j++) {
							if ($(imgs[j]).css("background-image") == "none") {
								$(imgs[j]).css("background-image","url('" + imgs[j].src + "')");
								imgs[j].src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpi+P//PwNAgAEACPwC/tuiTRYAAAAASUVORK5CYII=";
							}
						}
						$(items[i]).width = sliders[s].innerWidth;
						$(items[i]).offset({ top: $(sliders[s]).offset().top, left: $(sliders[s]).offset().left + i * $(items[i]).width() })

						if (mI){
							$(mI[i]).removeClass("selected");
							$(mI[0]).addClass("selected");
						}
					}
				}
			}
		var
			sliderinterval = (opt.imageSlider.interval < 1000) ? 1000 : opt.imageSlider.interval;
		
		$(window).bind("load resize", function () {
			clearInterval(t);
			config();
			t = setInterval(function () {
				var
					sliders = $(document).find("." + rwf.e(imageslider));
				
				for (var s = 0; s < sliders.length; s++) {
					var
						items = $(sliders[s]).find(".item");

					if (items.length > 1) {
						var
							mK = $(sliders[s]).find(".paginator"),
							mI = $(mK[0]).find(".paginatoricon");

						for (var i = 0; i < items.length; i++) {
							$(items[i]).width = sliders[s].innerWidth;
							$(items[i]).height = sliders[s].innerHeight;
							nP = parseInt($(items[i]).css("left"))-$(items[i]).width();
							if (nP == items.length * -$(items[i]).width()) {
								$(items[i]).offset({ top: $(sliders[s]).offset().top, left: i+1 * $(items[i]).width() });
								nP = 0;
							}
							$(items[i]).animate({ "left" : nP }, 500);
							$(mI[i]).removeClass("selected");
							if (nP == 0) {
								$(mI[i]).toggleClass("selected");
							}
						}
					}
				}
			}, sliderinterval);
		});
	}

	function _loadPage (a) {
		alert(a);
	}

	function _init () {
		rwf.loadTheme(opt.theme);
		_createHeader();
		_createContent();
		_imageSlide();
	}


	if (rwf.jQV()){

		if ($[fw]){
			return;
		}

		publicMethod = $.fn[fw] = $[fw] = function (o) {
			opt = $.extend(true, defs, o);
			jQuery.fn.contextPopup = function () {
				this.bind(ctxMenu, function (e) {
					return false;
				});
				return this;
			};
			$(function () {
				$(body).contextPopup();
			});
			_init();
			return this;
		};

	}

}(jQuery));
