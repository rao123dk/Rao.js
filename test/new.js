// // var a = rao("#userame");
// // console.log(a.val());


// // //var b = rao("input[type='text']");
// // //console.log(b);


// // var c = rao(".myname");
// // console.log(c);


// // var ht = rao('#htm');
// // ht.html("<p>hello html append</p>");

// // rao('#txt').text("append by text also");
// // console.log(rao('#txt').text());

// // rao('#txt').append("<div>Hello append</div>");
// // rao('#txt').prepend("<div>Hello prepend</div>");


// // rao('#txt').on('click', function(){
// // 	alert("hmm");
// // });
// // //rao('#txt').off('click');


// // // for upper

// // //its direct method
// //console.log(rao('#sr').UPPER());

// //its will be dynamic
// // var abb = rao('#sr').text();
// // 	//console.log(upper(abb));
// // 	rao('#sr').text(r.upper(abb,">1"))

// // // console.log(upper(abb,"1"));
// // // console.log(upper(abb,"1++"));
// // // console.log(upper(abb,">1"));
// // // console.log(upper(abb,"_"));

// // //NOTE: Preserve the case of the original word when you are replacing it. For example if you
// // //mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

// // console.log(rao_replace("Let us go to the store", "store", "mall"));


// // rao('#sr').attri("name","rao.js");

// // console.log(rao('#sr').attri("class"));

// // rao('#sr').out();

// // setTimeout(()=>{rao('#sr').in();},2000);


// // console.log(rao("#cus").Data("data-who"));

// // console.log(r.browser());
// // rao("#copyrightYear").currentYear();

// // rao("#copyrightYear").addClass("add");
// // rao("#copyrightYear").removeClass("sample");

// //class testing
// var tt = rao('.nope')[0];
// //console.log(tt.text());

// console.log(document.querySelectorAll('.nope')[0].textContent);
// //console.log(document.getElementsByClassName('nope'));

// //console.log(r.trim("hh"));

// console.log(r.rao_replace("hello How are you", "How", "hhhhh"));

// console.dir("rao('#txt')");
// console.log(rao('#txt').mychild());
// console.dir(rao('#txt'));


// r.showWatch('#showwatch',"h","m","s",hour12=false);
// //r.keycode(); // for checking keycode

// //put any two numbers in between
// console.log(r.random(11, 100));

// // put length of random string you want
// 	//console.log(r.randomString(8));

// 	// console.log(r.randomString(80));
// //r.P2J("hello");
// //console.log(hello);

// // var myEfficientFn = r.debounce(function() {
// // 	 console.log('You are clicking!');
// // }, 250);

// // window.addEventListener('click', myEfficientFn);

// // console.log(r.browser());

// // console.log(r.fetch("data.json"));
// //r.fetch("data.json");

// //console.log(rao("#copyrightYear").hasClass("samplek"));




// //function(slide_type, speed){}
// rao("#flip").on("click", function(){
// 	rao("#panel").slide("up", "slow");
// });


// rao("#flip2").on("click", function(){
// 	rao("#panel2").slide("down", "slow");
// });


// // rao("#flip2").on("click", function(){
// // 	rao("#panel2").slide("toggel", 50);
// // });






// //console.log(rao("#panel"));
// //console.log(rao("#panel").slide("up"));



// // @ return duplicate items
// const array = ["a", "f", "e", "w", "r", "e", "o", "j", "j","w"];
// console.log(r.duplicate(array));
// //remove duplicate data
// console.log(r.removeDuplicate(array));

// //ES6 detection
// console.log(r.ES6());
// console.log(r.ES7());
// console.log(r.ES8());

// // for date,time , year
// 	// console.log(r.now());
// 	// console.log(r.now("day"));
// 	// console.log(r.now("month"));
// 	// console.log(r.now("year"));

// console.log(r.dayDiff("21/12/2017","30/12/2017")); // DD/MM/YYYY // MM/DD/YYYY(IST)
// console.log(r.dayDiffSatSun("21/12/2017","30/12/2017"));



// //r.countDown(1,1,2018)
// // setInterval(function(){
// // 	console.log(r.countDown(22,11,2017));
// // },1000);


// // console.log(r.countDown(01,01,2018));
// // console.log(r.countDown(21,12,2017));

//

//
// ['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'].forEach(
//     function(name) {
//         window['is' + name] = function(obj) {
//               return toString.call(obj) == '[object ' + name + ']';
//     };
// });
console.log(r.deviceType()); //detect device type

var abc = '{ "Id": 1, "Name": "Coke" }';
console.log(r.isJSON(abc));

var arraydata = [1, false, "", undefined, 2, null, NaN,66];
console.log(r.cleanArray(arraydata));

var numarray = [3,55,66,55,234,61,99,100,55,055];
var strarray = ['dheeraj',"rao", "kumar", "rao","Rao"];

//console.log(r.removeFromArray(numarray,3));
// console.log(r.removeFromArrayAll(numarray,55));
// console.log(r.removeFromArrayAll(strarray,"rao"));

// var __strarray = ['dheeraj',"rao", "kumar", "rao","Rao"];
// console.log(__strarray);
// var dbc = r.insertIntoArray(__strarray, 4, "fffffffffffffxxxxx");
// console.log(__strarray); // not fixed @@bug

// var ___strarray = ['dheeraj',"rao", "kumar", "rao","Rao"];
// var abcccc = r.deepCopyArray(___strarray);
// ___strarray.push(66666666666666);
// console.log(abcccc);
//storage

rao('#showmenow').on('click', function(){
    r.hardReload();
})

var o1 = {  "a" : 10 };
var o2 = {  "q" : 23, "r" : 22 };
console.log(r.mergeObject(o1, o2));

//type, key, value
//r.webInsert("local", "raojstest", o1);

//r.webInsert("sessioN", "raojstest", o2);

console.log(r.webFetch("local", "raojstest"));
console.log(r.webFetch("session", "raojstest"));

r.webRemove("local", "raojstest");