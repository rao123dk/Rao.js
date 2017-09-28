var Rao = function(selector) {
	this.selector = selector || null; 
 	this.element = null;
 	this.arr=[];
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
		for(vv in this.element){
			this.arr.push(vv);
		}
		
	}
}


//for Getting value
Rao.prototype.val = function(currVal){
	console.log("currVal:--"+ currVal);
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

// for set text value
Rao.prototype.text = function(text){
	if(text === undefined){
		return this.element.textContent;
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

Rao.prototype.eventHandler = function(){

};


//
Rao.prototype.ggg = function(){

}
