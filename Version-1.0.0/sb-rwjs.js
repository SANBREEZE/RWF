/*
 * Framework	: SANBREEZE Resposive Web JS
 * Version	: 1.0.0
 * Filename	: sb-rwjs.js
 * Copyright    : © 2014, Mario Briesemeister
 *
 *
 * Documentation:
 *	Please visit http://www.sanbreeze.com/rwjs/ for more information
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
 *	Permission to use, copy, modify, and distribute of this software and
 *	its documentation for any purposes is prohibited and will be prosecuted.
 *	For all rights of any other software we use, the intellectual property
 *	of the respective software is reserved.
 *
 *	This software is provided "as is" without
 *	express or implied warranty of any kind.
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
