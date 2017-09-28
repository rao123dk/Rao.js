function showme(){
	var abc = rao('#userame').value;
	console.log(abc);

	var abc2 = rao('.myname');
	console.log(abc2[0].value);	

	var abc3 = rao('input');
	console.log(abc3[0].value);


	var abc4 = rao('p.intro');
	console.log(abc4[0].innerHTML);

	var abc5 = rao('p#introid');
	console.log(abc5.innerHTML);
}

//print_r("Hello herervvvvvvvvvvvvvv");

action('#showmenow','click',function(){
	//console.log(this.id);
});


action('button','click',function(){
	//console.log(this.id);
	let d = rao("this","id");
	console.log("in new.js");
	console.log(d);
	//console.log(d);
});

action('.nope','click',function(){
	alert("class clicked");
});

action('input', 'keydown', function(){
	//alert("keydown in input area");
});

