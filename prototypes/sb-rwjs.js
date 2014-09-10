/*
 * Framework	: SANBREEZE Resposive Web JS
 * Version	: 1.0.0
 * Filename	: sb-rwjs.js
 * Copyright    : 2014, Mario Briesemeister
 *
 *
 * Documentation:
 *	Please visit https://github.com/SANBREEZE/RWJS/ for more information
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

(function($){
	var defs = {
		iconsize : "12px"
	},
	opt,
	body = "body",
	fw = "sb_resposive";


	function jVC () {
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


	if (jVC()){

		if ($[fw]){
			return;
		}

		publicMethod = $.fn[fw] = $[fw] = function (o) {
			opt = $.extend(defs, o);
			return this;
		};

		publicMethod.close = function () {
			alert(opt.iconsize);
		}
	}

}(jQuery));
