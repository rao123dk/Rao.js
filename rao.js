(function(){

"use strict";

var Rao = function(selector) {
	this.selector = selector || null;
 	this.element = null;

};

//main selector
window.rao = function(selector){
	var elm = new Rao(selector);
	elm.init();
	if(selector.charAt(0) === '#'){
		return elm;
	}else {
		return elm["element"];
	}

}

// for initialization and selection
Rao.prototype.init = function(){
	if(this.selector.charAt(0) === '#'){
		this.element = document.getElementById(this.selector.substr(1));
	}else if(this.selector.charAt(0) === '.'){
		this.element = document.querySelectorAll(this.selector);
	}
}


//for get/set value
Rao.prototype.val = function(currVal){
	return(currVal === undefined ? this.element.value : this.element.value = currVal);
};

// for get/set HTML
Rao.prototype.html = function(html){
	if(html === undefined){
		return this.element.innerHTML;
	}else{
		this.element.innerHTML = html;
	}
};

// for get/set text value
Rao.prototype.text = function(text){
	if(text === undefined){
		return this.element.textContent || this.element.innerHTML;
	}else{
		this.element.textContent = text;
	}
};

Rao.prototype.append = function(appendhtml){
	this.element.innerHTML = this.element.innerHTML + appendhtml;
};

Rao.prototype.prepend = function(prependtHtml){
	this.element.innerHTML = prependtHtml + this.element.innerHTML;
};


Rao.prototype.eventHandler = {
	events: [],
	bindEvent: function(event, callback, target ){
		//remove events
		//target.removeEventListener(event, callback);
		this.unbindEvent(event, target);
		//add events
		target.addEventListener(event, callback, false);
		this.events.push({
			type : event,
			event :callback,
			target :target
		});
	},
	findEvent:function(event){
		return this.events.filter(function(eve){
			return (eve.type === event);
		},event)[0];
	},
	unbindEvent : function(event, target){
		var searchEvent = this.findEvent(event);
		if(searchEvent !== undefined){
			target.removeEventListener(event, searchEvent.event, false);
		}

		// update events
		this.events = this.events.filter(function(evt){
			return (evt.type !== event);
		},event);
	}


};
// on()
Rao.prototype.on = function(event, callback, target){
	var evt = this.eventHandler.bindEvent(event, callback, this.element);
}
//off()
Rao.prototype.off = function(event, callback, target){
	var evt = this.eventHandler.unbindEvent(event,this.element);
}

// for upper case
Rao.prototype.UPPER = function(){
		return (this.element.textContent || this.element.innerHTML).toUpperCase();
}

// for upper case
Rao.prototype.LOWER = function() {
		return (this.element.textContent || this.element.innerHTML).toLowerCase();
}


//set and get attribute
Rao.prototype.attri = function(key, value){
	if(key !== undefined && value !== undefined){
		this.element.setAttribute(key,value);
	}else if(key !== undefined){
		return this.element.getAttribute(key);
	}
}

//Hide and show element and toggle(inOut)
Rao.prototype.in = function(){
	this.element.style.display = 'block';
}
Rao.prototype.out = function(){
	this.element.style.display = 'none';
}

Rao.prototype.inOut = function(){
	this.element.style.display = this.element.style.display === "block" ? this.element.style.display = "none" : this.element.style.display = "block";
}

//custom data get

Rao.prototype.Data = function(custom_data){
	if(custom_data !== undefined){
		return document.getElementById(this.element.getAttribute("id")).getAttribute(custom_data);
	}

}

// copy right year
Rao.prototype.currentYear = function(){
	this.element.textContent = new Date().getFullYear();
}

//add or remove class
Rao.prototype.addClass = function(addclass){
	if(addclass !== undefined){
		this.element.className += " "+addclass;
	}
}
Rao.prototype.removeClass = function(removeClass){
	if(removeClass !== undefined){
		this.element.classList.remove(removeClass);
	}

}
// check class availability
Rao.prototype.hasClass = function(hasClass){
	if(hasClass !== undefined && this.element.classList.contains(hasClass)){
		return true;
	}else{
		return false;
	}

}


// For rao animation

Rao.prototype.slide = function(slide_type, slide_speed){
	//@ slide_type - up, down, and toggele
	//@ speed - slow, medium, and fast
	if(slide_type !== undefined && slide_type === "up"){
		this.element.style.display = 'none';
		//this.element.style.opacity += 0.1;
		this.speed(slide_speed , this.element , "up");

	}

	if(slide_type !== undefined && slide_type === "down"){
		this.element.style.display = 'block';
		this.element.style.opacity += 0.9;
		this.speed(slide_speed,this.element, "down");

	}

	if(slide_type !== undefined && slide_type === "toggel"){
		this.element.style.display = this.element.style.display === "block" ? this.element.style.display = "none" : this.element.style.display = "block";
		//this.speed(slide_speed,this.element);
	}
}

Rao.prototype.speed = function(_speed , _element , _slide_type){
	let op;
	var op_up = 1;
	var op_down = 0.1;
	let _tr_rate;
	let slider_cond;
	let slider_oper;
	if(_speed === "slow"){ _tr_rate = 1000; }
	if(_speed === "medium"){ _tr_rate = 300; }
	if(_speed === "fast"){ _tr_rate = 100; }
	//console.log(_tr_rate);

	function slider_case () {
		let timer = setInterval(function () {
			//console.log("ok here 2");
			//console.log(slider_cond);
			//console.log(op_up);
	        if (slider_cond){
	            clearInterval(timer);
	        }
	        _element.style.opacity = op;
	        //console.log(slider_oper);
	    }, _tr_rate);
	}


    switch(_slide_type){
    	case "up":
    	slider_cond = eval("op_up === 0.1");
    	slider_oper =  eval("op_up -= 0.1;");
    	op = op_up;
    	slider_case();
    	break;

    	case "down":
    	slider_cond = eval("op_down => 1");
    	slider_oper =  eval("op_down += 0.1;");
    	op = op_down;
    	slider_case();
    	break;
    }

    //_tr_rate = (_speed === "slow" && typeof _speed === 'string') ? 1000 : _speed;
	// _tr_rate = (_speed === "medium" && typeof _speed === 'string') ? 500 : _speed;
	// _tr_rate = (_speed === "fast" && typeof _speed === 'string') ? 100 : _speed;
}




//trim method
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
Rao.prototype.trim = function(){
	return this.element == null ? "" : ( this.element + "" ).replace( rtrim, "" );
}
//think about this !
Rao.prototype.r = {
	trim : function(text){
		return this.element;
	}
}




//A universal object for external functions
window.r = {
	// speacial method rao_replace eg:- if you want to replce "Rao" to "dk"
	//then it will directly replce by Dk
	 rao_replace : function(str, before, after){
		return str.replace(before, function(before){
			if (before.charAt(0) === before.charAt(0).toUpperCase()) {
		    	return after.charAt(0).toUpperCase() + after.substr(1).toLowerCase();
			} else {
		    	return after.charAt(0).toLowerCase() + after.substr(1).toLowerCase();
			}
		});
	},

	//for customize upper case formater
	upper:function(uppertxt, uppertxtcase) {
		if(uppertxt !== undefined){
			switch(uppertxtcase){
				case "1":
				return uppertxt.charAt(0).toUpperCase() + uppertxt.substring(1);
				break;

				case "1++":
				case ">1":
				var U_uppertxt='';
				var uppertxtArray = uppertxt.split(" ");
				uppertxtArray.forEach(function(data){
					U_uppertxt += data.charAt(0).toUpperCase() + data.substring(1)+" ";
				});
				return U_uppertxt;
				break;

				default:
				return " 'Illegal modifier' "

			}

		}
	},

	//for current time (now only for id)
	showWatch : function(selector, h, m, s, hour12=false) {
		r.timercal(selector,h,m,s);
		setInterval(function(){
			r.timercal(selector,h,m,s);
		}, 1000);
	},
	timercal : function(selector,h, m, s){
			var d = new Date();
			this.hh = d.getHours();
			this.mm = d.getMinutes();
			this.ss = d.getSeconds();
			this.ampm = this.hh >= 12 ? 'PM' : 'AM';
			this.hh2 = this.hh % 12;
			this.hh = hour12 ? this.hh2 : this.hh;
			this.hh = this.hh ? this.hh : 12;
			this.displayTime=0;
			if(selector !== undefined && h === "h" && m === "m" && s === "s"){
				this.displayTime = this.hh + ":" + this.mm + ":" + this.ss;
			}else if(selector !== undefined && h === "h" && m=== "m"){
				this.displayTime = this.hh + ":" + this.mm;
			}else if(selector !== undefined && h === "h"){
				this.displayTime = this.hh;
			}
			document.getElementById(selector.substr(1)).innerHTML = hour12 ? this.displayTime +" "+this.ampm : this.displayTime;
	},

	//key code
	keycode :function(){
		document.addEventListener("keydown", function(e){
			var keynum;
			if (window.event) {
		        keynum = e.keyCode;
		    } else if(e.which) {
		        keynum = e.which;
		    }
		    window.alert(keynum);
		    e.preventDefault();
		});
	},

	//for random number
	random :function(a, b){
		this.max = Math.max(a, b);
		this.min =  Math.min(a, b);
		return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
	},
	// for random string
	randomString:function(strlen){
		this.randomstring = "";
  		this.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	  	for (let i = 0; i < strlen; i++){
	  		this.randomstring += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
	  	}
		return this.randomstring;
	},
	//debouncing
	debounce : function(func, wait, immediate){
		this.timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				this.timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !this.timeout;
			clearTimeout(this.timeout);
			this.timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	},
	browser:function(){

		var ua= navigator.userAgent, tem,
		M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
		if(/trident/i.test(M[1])){
			tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
			return 'IE '+(tem[1] || '');
		}
		if(M[1]=== 'Chrome'){
			tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
			if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
		}
		M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
		if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
		return M.join(' ');

	},
	deviceType : function(){
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ?( /iPad|iPod/i.test(navigator.userAgent) ? 'iPod/iPad' : 'Mobile' ): 'Desktop';;
	},
	// @ impleneting Fetch (!think later)
	fetch:function(curr_url){
		fetch(curr_url)
		.then(function(response){
			response.json().then(function(data){ console.log(data); return { data } = data; });
		});
	},
	//@@ Array duplicate element
	duplicate:function(duplicateArray){
		var result = [];
		if(r.ES6()){
			let arr = duplicateArray;
			let hash = new Map();
			// If repeat the value is false, if no repeat the value is true
			for (let i = 0; i < arr.length; i++) {
				if (hash.get(arr[i]) === undefined) {
					hash.set(arr[i], true);
				}else {
					let value = hash.get(arr[i]);
					if (value) {
						hash.set(arr[i], !value);
					}
				}
			}
		hash.forEach((v, k) => {
			if (!v)
				result.push(k);
			});
			return result;
		}else{
			//code if ES6 not
			var strArr = duplicateArray.join('~').toLowerCase().split('~').sort().join("").match(/(.)\1+/g);
  			if (strArr != null) {
    			strArr.forEach((elem) => { result.push(elem[0]); });
  			}
			return result;
		}

	},
	removeDuplicate : function(removeDuplicateArray){
		var uniqueArray;
		if(r.ES6()){
			return uniqueArray = Array.from(new Set(removeDuplicateArray));
		}else{
			uniqueArray = removeDuplicateArray.filter(function(item, pos) {
    			return removeDuplicateArray.indexOf(item) == pos;
			});
		}

		return uniqueArray;
	},
	cleanArray : function(val){
		if(!!val) {
 		 return val.filter(Boolean);
	    }
	},
	removeFromArray : function(tArray, val){
		var val_index =  tArray.indexOf(val);
		if ( val_index !== -1) {
			tArray.splice(val_index, 1);
		}
		return tArray;
	},
	removeFromArrayAll: function (tArray, val) {
		for (var z = tArray.length - 1; z >= 0; z--) {
			if (tArray[z] === val) {
				tArray.splice(z, 1);
			}
		}
		return tArray;
	},
	insertIntoArray : function(inst_arr, indexAt,item){
		return inst_arr.splice(4, 0, item );
	},
	deepCopyArray : function(copyArray){
		return copyArray.slice(0);
	},
	//ECMAScript 2015
	ES6 : function(){
		if (typeof Symbol == "undefined") {
			return false;
		}
		try {
			 eval("class RAORAO {}");
        	 eval("let ORAORA = (x) => x+1");
		}
		catch (e) { return false; }

		return true;
	},
	//ECMAScript 2016
	ES7:function (){
		var raojs_array = [1, 2, 3];
		try {
		    raojs_array.includes(2); return true;
		}
		catch (err) {
		    return false;
		}
	},
	//ECMAScript 2017
	ES8:function (){
		let obj = { lib: 'Rao.js', version: '1.0.0' };
		try {
			let a = Object.values(obj);
			let b = Object.entries(obj);
			return true;
		}
		catch (err) {
			return false;
		}
	},
	countDown : function (targetDate, targetMonth, targetYear) {
		var targetCountDown = targetMonth+ " " + targetDate+ " " + targetYear+ " " + "23:59:59";
		var targetCountDown = Date.parse(targetCountDown);
		var currntTime = Date.parse(new Date());
        var t = targetCountDown - currntTime;
	    var seconds = Math.floor( (t/1000) % 60 );
	    var minutes = Math.floor( (t/1000/60) % 60 );
	    var hours = Math.floor( (t/(1000*60*60)) % 24 );
	    var days = Math.floor( t/(1000*60*60*24) );
	    console.log(t);
	    if(t < 0) { return " 0:0:0 {Sorry Sir, Forgot your past, And go ahead!}" ; }
	    return {
	    	'total': t,
	    	'days': days,
	    	'hours': hours,
	    	'minutes': minutes,
	    	'seconds': seconds
		};

	},
	//for time,day and year
	now : function(what){
		if(what === undefined) return new Date(Date.now()).toLocaleDateString(); //new Date();
		this.what = what.toLowerCase();
	 switch(this.what){
	 	case "day" :
	 		return new Date().toDateString().split(" ")[0]; //["Thu", "Dec", "21", "2017"]
	 		break;
	 	case "month" :
	 		return new Date().toDateString().split(" ")[1];
	 		break;
 		case "date" :
	 		return new Date().toDateString().split(" ")[2];
	 		break;
 		case "year" :
	 		return new Date().toDateString().split(" ")[2];
	 		break;
	 }
	},
	dateFormater : function(target_date){ //coming DD/MM/YYYY transform into MM/DD/YYYY
		var formater = target_date.split("/");
		var final_date = ""+ formater[1] + "/" + formater[0] + "/" + formater[2];
		return final_date;
	},
	dayDiff : function(start_date, end_date){ //r.dateFormater(start_date);
		this.start_date = new Date(r.dateFormater(start_date));
		this.end_date = new Date(r.dateFormater(end_date));
		var oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(this.end_date.getTime() / oneDay) - Math.floor(this.start_date.getTime() / oneDay);
	},
	dayDiffSatSun:function(start_date, end_date){
		this.start_date = new Date(r.dateFormater(start_date));
		this.end_date = new Date(r.dateFormater(end_date));
		var millisecondsPerDay = 86400 * 1000;
		this.start_date.setHours(0,0,0,1);
		this.end_date.setHours(23,59,59,999);
		var diff = this.end_date - this.start_date;
		var days = Math.ceil(diff / millisecondsPerDay);

		// Subtract two weekend days for every week in between
		var weeks = Math.floor(days / 7);
		days = days - (weeks * 2);
		// Handle special cases
		var startDay = this.start_date.getDay();
		var endDay = this.end_date.getDay();
		// Remove weekend not previously removed.
		if (startDay - endDay > 1)
		days = days - 2;
		// Remove start day if span starts on Sunday but ends before Saturday
		if (startDay === 0 && endDay != 6)
		days = days - 1 ;
		// Remove end day if span ends on Saturday but starts after Sunday
		if (endDay === 6 && startDay !== 0)
		days = days - 1  ;

		return days;
	},
	isArray : function(val){
		return (!!val) && val && (val.constructor === Array);
		//return (typeof val !== 'undefined' && val && val.constructor === Array);
	},
	isString : function(val){
		return (!!val && val.constructor === String && (typeof val === 'string' || val instanceof String));
	},
	isObject : function(val){
		if (val === null) { return false;}
    	return ( (typeof val === 'function') || (typeof val === 'object') && (val.constructor === Object) );
	},
	isJSON : function(val){
		//@@ it is also used for check valid json
		try {
			JSON.parse(val) && !!val;
			return true;
		} catch (e) {
			return false;
		}

	}

} //Object window.r end here


// for find children
Rao.prototype.mychild = function(){
	return this.element.children;
}

//document.write("<script>console.log('%c welcome to Rao.js', 'background:#02f902; font-size:50px;');</script>");

Rao.prototype.next = function(){

}


})(window);