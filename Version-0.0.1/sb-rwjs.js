/*
* Framework : SANBREEZE Resposive Web JS
* Version : 0.0.9d
* Filename : sb-rwjs.js
* Copyright : © 2014, Mario Briesemeister
*
*
* Documentation:
* Please visit http://www.sanbreeze.com/rwjs/ for more information
* about to integrate this framework to your site and for downloading
* this framework.
*
*
* Requirements :
* jQuery 1.11.x or higher
*
*
* Notes :
* Do not use jQuery 2.x - we have not test this framework version.
*
*
* Rights :
* The MIT License (MIT)
*
* Copyright (c) 2014, SANBREEZE GmbH
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/

(function($,fw){$.fn[fw]=function(fn){
	var defs={
		body:"body"
	},opt;

	var SB_Site=function(){
		var v=["1.11.0","1.11.1"];
		if(v.indexOf($.fn.jquery)==-1){
			o="jQuery between version "+v[0]+" - "+v[v.length-1]+" is required!";
			console.log(o);
			document.write(o);
			return false;
		}else{
			$.fn.contextPopup=function(){this.bind('contextmenu',function(e){return false;});return this;};$(function(){$(opt.body).contextPopup();});
		}
	}();

	return {
		setup:function(o){
			opt=$.extend(defs,o);
		}
	}
}})(jQuery,'SB_Site');
