# Rao.js
### [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/rao123dk/Rao.js/issues)
[![HitCount](http://hits.dwyl.io/rao123dk/Rao.js.svg)](http://hits.dwyl.io/rao123dk/Rao.js)
## CDN
```javascript
CDN for production:-
<script src="https://cdn.rawgit.com/rao123dk/Rao.js/dca29915/rao.js"> </script>

CDN for development :-
<script src="https://rawgit.com/rao123dk/Rao.js/master/rao.js"> </script>

```
# Table of Contents
 * [Browser](#browser)
 * [Array](#array)
 * [Object](#object)
 * [JSON](#json)
 * [Web Storage](#webstorage)
 * [Time](#time)
 * [String](#string)
 * [DOM](#dom)


# Browser
#### Detect Client Browser name and version
 Code:-
```javascript
r.browser();
```
Example:-
```javascript
console.log(r.browser());
Output :- Chrome 62(Broweser Name, Version)
```
#### Detect Device type
Code:-
```javascript
r.deviceType();
```
Example:-
```javascript
console.log(r.deviceType());
Output :- Desktop
```
```javascript
Outputs :- Desktop/Mobile/iPad/iPod
```
#### JavaScript new feature browser compatibility checker(i.e. ECMAScript 2015/2016/2017)
Code:-
```javascript
r.ES6()
r.ES7()
r.ES8()
```
Example:-
```javascript
console.log(r.ES6());
console.log(r.ES7());
console.log(r.ES8());
Output :- true/false
```
# Array
#### Check duplicate items
Code:-
```javascript
r.duplicate(Array_name);
```
Example:-
```javascript
const array = ["a", "f", "e", "w", "r", "e", "o", "j", "j","w"];
console.log(r.duplicate(array));
Output :- ["e", "w", "j"]
```
#### Remove duplicate items from array
Code:-
```javascript
r.duplicate(arrayName);
```
Example:-
```javascript
var array = ["a", "f", "e", "w", "r", "e", "o", "j", "j","w"];
console.log(r.removeDuplicate(array));
Output :- ["a", "f", "e", "w", "r", "o", "j"]
```
#### Check Array or not
 Code:-
```javascript
r.isArray(value);
```
Example:-
```javascript
var value = [1,2,3];
console.log(r.isArray(value));
Output :- true
```
# Object
#### Check Object or not
 Code:-
```javascript
r.isObject(value);
```
Example:-
```javascript
var value = {};
console.log(r.isObject(value));
Output :- true
```
```javascript
var value = "hello";
console.log(r.isObject(value));
Output :- false
```
# JSON
#### Check JSON data is valid or not
Code:-
```javascript
r.isJSON(value);
```
Example:-
```javascript
console.log(r.isJSON('{"name" : "dheerraj", "Age" : 22}'););
Output:- true
```
```javascript
console.log(r.isJSON('{"name" : "dheerraj", Age : 22}'););
Output:- false
```
# Webstorage

# Time
#### Digital watch
Code:-
```javascript
r.showWatch('#showwatchid',"h","m","s",hour12=true/false);
```
Example:-
```javascript
console.log(r.showWatch('#showwatchid',"h","m","s",hour12=true));
Output:- 1:8:58 PM
console.log(r.showWatch('#showwatchid',"h","m","s",hour12=false));
Output:- 13:8:58
console.log(r.showWatch('#showwatchid',"h","m",hour12=true));
Output:- 1:08 PM
```
#### Countdown Timer
Code:-
```javascript
r.countDown(01,01,2018)
```
Example:-
```javascript
console.log(r.countDown(01,01,2018)); // Format will be DD/MM/YYYY
Output :- {total: 896620000, days: 10, hours: 9, minutes: 3, seconds: 40}
```
#### Difference between two Dates
Code:-
```javascript
r.dayDiff("Start_date","end_date"));   // Format will be DD/MM/YYYY
r.dayDiffSatSun("Start_date","end_date"));
r.dayDiffHoliday("Start_date","end_date",array_of_list));
```
Example:-
 1. Get difference between two date {General}
```javascript
r.dayDiff("Start_date","end_date")); // Format will be DD/MM/YYYY
console.log(r.dayDiff("21/12/2017","30/12/2017"));
Output :- 9
```
 2. Get difference between two date{ escape Saturday and Sunday i.e. count only working days}
```javascript
 r.dayDiffSatSun("Start_date","end_date")); // Format will be DD/MM/YYYY
 console.log(r.dayDiffSatSun("21/12/2017","30/12/2017"));
 Output :- 7
```
 3. Get difference between two date{ escape Saturday, Sunday and *holiday festival* also}
```javascript
 	console.log("Coming soon.....");
```
# String
#### Random string generator(i.e. also password generator)
Code:-
```javascript
r.randomString(length_of_string)
```
Example:-
```javascript
console.log(r.randomString(8));
Output :- g485edgn
```
#### Convert Strint into uppercase in diiferent condition
Code:-
```javascript
r.upper(str,"1");
r.upper(str,"1++");
r.upper(str,">1");
```
Example:-
```javascript
var str = "thanks for using Rao.js";
(A) console.log(r.upper(str,"1"));
    Output:- Thanks for using Rao.js
(B) console.log(r.upper(str,"1++"));
    Output:- Thanks For Using Rao.js
(C) console.log(r.upper(str,">1"));
    Output:- Thanks For Using Rao.js
```
#### Replace string
Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "pen", it should be replaced as "Pen".
Code:-
```javascript
r.rao_replace(str, to, with)
```
Example:-
```javascript
let org_str = "This is my Book.",
console.log(r.rao_replace(org_str, "Book", "pen"));
Output :- This is my Pen.
```

#### Check String or not
 Code:-
```javascript
r.isString(value);
```
Example:-
```javascript
var value = "Thanks for using Rao.js";
console.log(r.isString(value));
Output :- true
```
# DOM
#### Get element by id
Code:-
```javascript
rao("#id");
```
Example:-
```javascript
<input type ="text" id="f_name" value="Dheeraj">
var exp = rao("#f_name");
console.log(exp.val());
Output :- Dheeraj
```
#### Get element by Class
Code:-
```javascript
rao(".class");
```
Example:-
```javascript
<input type ="text" class="name" value="Dheeraj">
<input type ="text" class="name" value="rao">
var exp = rao(".name");
console.log(exp[0].val());
Output :- Dheeraj
```
#### Get element by attributes
Code:-
```javascript
rao("input[type='text']");
```
Example:-
```javascript
<input type ="text" class="name" value="Rao">
var exp = rao("input[type='text']");
console.log(exp[0].val());
Output :- Rao
```

#### Get/Set html
Code:-
```javascript
var ht = rao('#htm');
ht.html();
ht.html('<p>Thanks for using Rao.js</p>');
```
Example:-
```javascript
<div id="htm"> </div>
var ht = rao('#htm');
ht.html("<p>Thanks for using Rao.js</p>"); //Set
Output :- <div id="htm"> <p>Thanks for using Rao.js</p> </div>
ht.html(); //Get
Output :- <p>Thanks for using Rao.js</p>
```

#### Get/Set text
Code:-
```javascript
var tx = rao('#txt');
tx.text();
tx.text('Thanks for using Rao.js');
```
Example:-
```javascript
<p id="txt"> </p>
var tx = rao('#htm');
tx.text("Thanks for using Rao.js"); //Set
Output :- <p id="htm">Thanks for using Rao.js</p>
tx.text(); //Get
Output :- Thanks for using Rao.js
```
#### Append/Prepend elements
Code:-
```javascript
rao('#id').append("<div>Hello append</div>");
rao('#id').prepend("<div>Hello prepend</div>");
```
Example:-
```html
<div class="parent">
  <div id="id"> Hello</div>
</div>
```
```javascript
rao('#id').append("<div>Hello append</div>");
Output :-
<div class="parent">
  <div id="id"> Hello</div>
  <div>Hello append</div>
</div>
rao('#id').prepend("<div>Hello prepend</div>");
Output :-
<div class="parent">
  <div>Hello prepend</div>
  <div id="id"> Hello</div>
</div>
```
#### Find all child elements of parent element
Code:-
```javascript
rao('#id').mychild();
```
Example:-
```html
<div id="todolist">
  <p>Item 1</p>
  <p>Item 2</p>
  <p>Item 3</p>
  <p>Item 3</p>
</div>
```
```javascript
rao('#todolist').mychild();
Output :-
  <p>Item 1</p>
  <p>Item 2</p>
  <p>Item 3</p>
  <p>Item 3</p>
```

#### Events add/remove
Code:-
```javascript
rao('#id').on('click', function(){
//code here....
});
rao('#id').off('click');
```
Example:-
```javascript
rao('#id').on('click', function(){
 alert("Thanks For using Rao.js");
});
rao('#id').off('click');
```



### Get/set attribute dynamically from/in element
Set own attribute

```javascript
rao('#sr').attri("attribue","value");
Ex:-
rao('#sr').attri("custom_id","12CU100");
output :-
<span id="sr" custom_id ="12CU100"> </span>
```
Get attribue
```javascript
rao('#sr').attri("nameofattribue")
Ex:-
console.log(rao('#sr').attri("class"));
Output:-
It will return classname of element which is is 'sr'
```
### Hide, show and toggle(hide/show) element
Hide
```javascript
rao('#id').out();
```
show
```javascript
rao('#id').in();
```
toggle
```javascript
rao('#id').inOut();
```

### Get custom attribute(data-myperonalId) value
```javascript
console.log(rao("#id").Data("customAttribute"));
ex:-
<span id="myid" data-myperonalId="177466"></span>
console.log(rao("#myid").Data("myperonalId"));
```



### Print current year
This method is helpful for those who manually update copyright year on webiste
```javascript
rao("#copyrightYear").currentYear();
```

### Add / Remove class to/from element
```javascript
rao("#id").addClass("newclass");
rao("#id").removeClass("alreadyThere");
```

 ### Get Random Number between two given numbers
```javascript
    // r.random(first_digit, last_digit)
   console.log(r.random(10, 111));
   Output :- 29 or different
```



#### Thanks!
```javascript
	console.log("Thanks!");

```


