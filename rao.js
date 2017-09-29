var Rao = function(selector) {
	this.selector = selector || null; 
 	this.element = null;
 	
};

//main
rao = function(selector){
	var elm = new Rao(selector);
	elm.init();
	return elm;
}

// for initialization and selection
Rao.prototype.init = function(){
	if(this.selector.charAt(0) === '#'){
		this.element = document.getElementById(this.selector.substr(1));
	}else if(this.selector.charAt(0) === '.'){
		//this.element = document.getElementsByClassName(this.selector.substr(1));
		this.element = document.querySelectorAll(this.selector);//["element"];
		
	}
}


//for get/set value
Rao.prototype.val = function(currVal){
	return(currVal === undefined ? this.element.value : this.element.value = currVal);
};

// for append HTML
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

var upper = function(uppertxt) {
	if(uppertxt !== undefined){
		return uppertxt.toUpperCase();
	}
}

// for upper case
Rao.prototype.LOWER = function(){
		return (this.element.textContent || this.element.innerHTML).toLowerCase();
}


//
Rao.prototype.ggg = function(){

}
