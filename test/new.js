// var a = rao("#userame");
// console.log(a.val());


// //var b = rao("input[type='text']");
// //console.log(b);


// var c = rao(".myname");
// console.log(c);


// var ht = rao('#htm');
// ht.html("<p>hello html append</p>");

// rao('#txt').text("append by text also");
// console.log(rao('#txt').text());

// rao('#txt').append("<div>Hello append</div>");
// rao('#txt').prepend("<div>Hello prepend</div>");


// rao('#txt').on('click', function(){ 
// 	alert("hmm");
// });
// //rao('#txt').off('click');


// // for upper

// //its direct method
//console.log(rao('#sr').UPPER());

//its will be dynamic
// var abb = rao('#sr').text();
// 	//console.log(upper(abb));
// 	rao('#sr').text(r.upper(abb,">1"))

// // console.log(upper(abb,"1"));
// // console.log(upper(abb,"1++"));
// // console.log(upper(abb,">1"));
// // console.log(upper(abb,"_"));

// //NOTE: Preserve the case of the original word when you are replacing it. For example if you 
// //mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

// console.log(rao_replace("Let us go to the store", "store", "mall"));


// rao('#sr').attri("name","rao.js");

// console.log(rao('#sr').attri("class"));

// rao('#sr').out();

// setTimeout(()=>{rao('#sr').in();},2000);


// console.log(rao("#cus").Data("data-who"));

// console.log(r.browser());
// rao("#copyrightYear").currentYear();

// rao("#copyrightYear").addClass("add");
// rao("#copyrightYear").removeClass("sample");

//class testing
var tt = rao('.nope')[0];
//console.log(tt.text());

console.log(document.querySelectorAll('.nope')[0].textContent);
//console.log(document.getElementsByClassName('nope'));

//console.log(r.trim("hh"));

console.log(r.rao_replace("hello How are you", "How", "hhhhh"));

//console.log(rao('#txt').mychild());
console.dir(rao('#txt'));


r.showWatch('#showwatch',"h","m","s",hour12=true);
//r.keycode(); // for checking keycode

//put any two numbers in between
console.log(r.random(555555, 3333));

// put length of random string you want
	// console.log(r.randomString(80));

	// console.log(r.randomString(80));
//r.P2J("hello");
//console.log(hello);

// var myEfficientFn = r.debounce(function() {
// 	 console.log('You are clicking!');
// }, 250);

// window.addEventListener('click', myEfficientFn);

// console.log(r.browser());

// console.log(r.fetch("data.json"));
//r.fetch("data.json");

//console.log(rao("#copyrightYear").hasClass("samplek"));




//function(slide_type, speed){}
rao("#flip").on("click", function(){
	rao("#panel").slide("up", "slow");
});


rao("#flip2").on("click", function(){
	rao("#panel2").slide("down", "slow");
});


// rao("#flip2").on("click", function(){
// 	rao("#panel2").slide("toggel", 50);
// });






//console.log(rao("#panel"));
//console.log(rao("#panel").slide("up"));