// @ A lighweight library for DOM manipulation
// @ Author:- Dheeraj Kumar Rao
// @ Github:- github.com/rao123dk
// @edx.dheerajrao@gmail.com
function rao(a,attri){
		//console.log([].slice.call(arguments));
		//console.log(...arguments);
		var sel_type = a.charAt(0);
		if(sel_type === '#'){
			a = a.substr(1)
			return document.getElementById(a);
		}else if (sel_type === ".") {
			a = a.substr(1);
			return document.getElementsByClassName(a);
		}else if (htmlParser(a)) {
			return document.getElementsByTagName(a);
		}else if(a.indexOf(".") !== -1){
			a = a.split(".");
			return Array.prototype.filter.call(
    			document.getElementsByTagName(a[0]),
    			function(el) {
    				if(el.classList.contains(a[1])) {
    					return el;
    				}
    			}
			);
		}else if(a.indexOf("#") !== -1){
			a = a.split("#");
			return document.getElementById(a[1])
		}

		//for this 
		
		if(a === "this"){
			console.log("In this parts");
			console.log(attri);
			console.log(this);
			return this.attri;
		}
}

function htmlParser(htmlStringHere){
	//htmlStringHere = '<'+ htmlStringHere +'>';
	//return /<(br|basefont|hr|input|source|frame|param|area|meta|!--|col|link|option|base|img|wbr|a|abbr|acronym|address|applet|article|aside|audio|b|bdi|bdo|big|blockquote|body|button|canvas|caption|center|cite|code|colgroup|command|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frameset|head|header|hgroup|h1|h2|h3|h4|h5|h6|html|i|iframe|ins|kbd|keygen|label|legend|li|map|mark|menu|meter|nav|noframes|noscript|object|ol|optgroup|output|p|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video).*?<\/\2>/i.test(htmlStringHere); 
	return /(br|basefont|hr|input|source|frame|param|area|meta|!--|col|link|option|base|img|wbr|a|abbr|acronym|address|applet|article|aside|audio|b|bdi|bdo|big|blockquote|body|button|canvas|caption|center|cite|code|colgroup|command|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frameset|head|header|hgroup|h1|h2|h3|h4|h5|h6|html|i|iframe|ins|kbd|keygen|label|legend|li|map|mark|menu|meter|nav|noframes|noscript|object|ol|optgroup|output|p|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video)/i.test(htmlStringHere);
}
// debugging for php addict
var print_r = function(debug){
	console.log(debug);
}

//for action 
var action = function (action_where, action_type,callback){
	if(htmlParser(action_where)){
		//console.log("rao(action_where)");
		Array.from(rao(action_where)).forEach(function(element) {
      		element.addEventListener(action_type, callback);
    	});
	}

	if(rao(action_where)!== undefined && rao(action_where).length > 1){ 
		Array.from(rao(action_where)).forEach(function(element) {
      		element.addEventListener(action_type, callback);
    	});	
	}else if(rao(action_where)!== undefined){
		rao(action_where).addEventListener(action_type,callback);
	}
	
}