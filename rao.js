var Rao = function(selector) {
	this.selector = selector || null; 
 	this.element = null; 
};

//every time called
rao = function(selector){
	var elm = new Rao(selector);
	elm.init();
	return elm;
}

// for initialization
Rao.prototype.init = function(){
	this.element = document.querySelector(this.selector);
}
//for Getting value
Rao.prototype.val = function(){
	
}