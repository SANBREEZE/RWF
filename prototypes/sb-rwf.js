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
 * Notes	:
 *	Do not use jQuery 2.x - we have not test this framework version.
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

	if (document.readyState == "complete") {
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
		theme : "dark",
		menu : [
			{
				title	: "Menu-Title 1",
				href	: "Menu-Link 1",
				submenu : [
					{
						title	:"Submenu-Title 1",
						href	:"Submenu-Link 1",
					}
				]
			}
		]
	},
	opt,
	body		= "body",
	ctxMenu 	= "contextmenu",
	fw		= "rwf",

	close		= "close",
	content		= "content",
	fullsite	= "fullsite",
	header		= "header",
	icon		= "icon",
	imageslider 	= "imageslider"
	logo		= "logo",
	menu		= "menu",
	noimage 	= "noimage",
	slider		= "slider",
	submenu		= "submenu",
	wrapper		= "wrapper",

	m_event		= ["mousemove","mousedown","mouseup"],
	t_event		= ["touchmove","touchstart","touchend"];



	function _jVersionCheck () {
		var v = ["1.11.0", "1.11.1"];
		if (v.indexOf($.fn.jquery) == -1) {
			err = "jQuery between version " + v[0] + " - " + v[v.length-1] + " is required!";
			console.log(err);
			document.write(err);
			return false;
		} else {
			return true;
		}
	}

	function _cName (c){
		return fw+"-"+c;
	}

	function _noBouncing () {
		var ts, tm, el = "#"+_cName(content);
		
		$(body).on(t_event[0] + ' ' + t_event[1] + ' ' + t_event[2], function (e) {
			e.stopImmediatePropagation();
			if (e.type === t_event[1]) {
				ts = e.originalEvent.changedTouches[0].screenY;
			}
			if (e.type === t_event[0]) {
				tm = e.originalEvent.changedTouches[0].screenY;
			}
			if (ts < t_m && $(el).offset().top >= 0) {
				e.preventDefault();
			} else if (ts > tm && $(el).height() + ($(el).offset().top - $(document).height()) <= 0){
				e.preventDefault();
			} else {
				e.stopImmediatePropagation();
			}
		});
	}

	function _gE(a){
		var b = a.substring(0,1);
		if (b == "#") {
			return document.getElementById(""+a.substring(1,a.length));
		} else if (b == "."){
			return document.querySelectorAll(a);
		} else {
			return document.getElementByTagName(""+a);
		}
	}

	function _cE(t,a,n,v){
		var e=document.createElement(t);
		
		a = (a) ? a : ".";
		n = (n) ? n : null;
		v = (v) ? v : null;

		if (a == ".") {
			e.className=n;
		}
		if (a == "#") {
			e.id=n;
		}
		
		switch (t) {
			case "div": {
				e.innerHTML=v;
				break;
			}
			case "ul": {
				e.innerHTML=v;
				break;
			}
			case "li": {
				e.innerHTML=v;
				break;
			}
		}
		return e;
	}

	function _createHeader () {
		var
			h=$("#" + _cName(header)),
			i=$("." + _cName(menu+icon)),
			l,m,w;
		
		if (h.html()) {
			m = $("." + _cName(menu));
			if (!m.html()) {
				m = _cE("div", null, _cName(menu));
				h.append(m);
			}
			m = $("." + _cName(menu));
			w = _cE("div", null, _cName(wrapper));
			m.append(w);

			if (!i.attr(".")) {
				i = _cE("div", null, _cName(menu+icon));
				h.append(i);
			}
			i = $("." + _cName(menu+icon));

			if (i.html()) {
				i.addClass(noimage);
			} else {
				i.addClass(icon + " " + menu);
			}
			i.click(function (){_toggleMenu();});
			i.appendTo(w);


			l = $("." + _cName(logo));
			if (l.html()) {
				l.addClass(noimage);
			}
			l.click(function (){window.location.href=window.location.hostname;});
			l.appendTo(w);

			_createMenu();
		}
	}

	function _createMenu () {
		if (opt.menu) {
			var
			eS = _cE("div", null, _cName(submenu));
			eW = _cE("div", null, _cName(wrapper) + " " + _cName(menu+wrapper));
			eU = _cE("ul");
			for (var i=0;i<opt.menu.length;i++) {
				var eL = _cE("li", null, null, opt.menu[i].title);
				$(eL).click(function (){
					_toggleMenu();
					_loadPage(opt.menu[$(this).index()].href);
				});
				eU.appendChild(eL);
			}
			eW.appendChild(eU);
			eS.appendChild(eW);
			_gE("#"+_cName(header)).appendChild(eS);
		}
	}
	
	function _toggleMenu () {
		var eM = $("." + _cName(menu)), eS = $("." + _cName(submenu));
		eMH = eM.outerHeight();
		eSP = eS.position().top;
		if (eSP == eMH) {
			eS.css({"opacity":0,"top":0});
		} else {
			eS.css({"top":eMH,"opacity":1});
		}
		$("." + _cName(menu+icon)).toggleClass(close);
	}

	function _imageSlide(){

	
		var slide = function (m) {
			var sliders = $(document).find("." + _cName(imageslider));
			var items = $(sliders[0]).find(".item");
			
			switch (m) {
				case "auto" : {
					break;
				}
				case "click" : {
					break;
				}
			}
		}
		
		var config = function () {
			var sliders = $(document).find("." + _cName(imageslider));
			for (var s = 0; s < sliders.length; s++) {
				if (sliders[s].className.match(fullsite)) {
					$(sliders[s]).height(window.innerHeight);
					$(sliders[s]).width(window.innerWidth);
				}
				var items = $(sliders[s]).find(".item");
				for (var i = 0; i < items.length; i++) {
					var imgs = $(items[i]).find("img");
					for (var j = 0; j < imgs.length; j++) {
						if ($(imgs[j]).css("background-image") == "none") {
							$(imgs[j]).css("background-image","url('" + imgs[j].src + "')");
							imgs[j].src="prototypes/images/x.png";
						}
					}
					$(items[i]).width = sliders[s].innerWidth;
					$(items[i]).offset({ top: 0, left: i * $(items[i]).width()})
				}

				var markers = $(sliders[s]).find(".paginator");
				if (!markers[s]) {
					$(sliders[s]).append(function () {
						var m = "<div class='paginator'>";
						for (var i = 0; i < items.length; i++) {
							m += "<div class='paginatoricon'></div>";
						}
						m += "</div>";
						return m;
					});
				}
			}
		}
		$(window).bind("load resize", function(){
			config();
			slide("auto");
		});
	}
	
	function _loadPage (a) {
		alert(a);
	}
	
	function _loadTheme (t) {

		$.ajax({
			type: "HEAD",
			url: t,
			success: function(){
				if (document.createStyleSheet) {
					document.createStyleSheet(t);
				} else {
					$("head").append($('<link rel="stylesheet" href="'+t+'" type="text/css" />'));
				}
			},
			error: function(){
				console.log("Theme not found: Fallback to default.")
				if (document.createStyleSheet) {
					document.createStyleSheet(t);
				} else {
					$("head").append($('<link rel="stylesheet" href="prototypes/themes/rwf_dark.css" type="text/css" />'));
				}
			}
		});
	}

	function _init () {
		_loadTheme(opt.theme);
		_noBouncing();
		_createHeader();
		_imageSlide();
	}



	if (_jVersionCheck()){

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


