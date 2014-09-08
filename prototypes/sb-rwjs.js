(function($,fw){$.fn[fw]=function(fn){
	var defs={
		body:"body"
	},opt;

	var SB_RWJS=function(){
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
}})(jQuery,'SB_RWJS');
