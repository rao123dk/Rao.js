var a = rao("#userame");
console.log(a.val());


//var b = rao("input[type='text']");
//console.log(b);


var c = rao(".myname");
console.log(c);


var ht = rao('#htm');
ht.html("<p>hello html append</p>");

rao('#txt').text("append by text also");
console.log(rao('#txt').text());

rao('#txt').append("<div>Hello append</div>");
rao('#txt').prepend("<div>Hello prepend</div>");


rao('#txt').on('click', function(){ 
	alert("hmm");
});




