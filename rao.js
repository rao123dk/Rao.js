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
}