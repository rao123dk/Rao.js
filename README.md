# Rao.js
### [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/rao123dk/Rao.js/issues)
[![HitCount](http://hits.dwyl.io/rao123dk/Rao.js.svg)](http://hits.dwyl.io/rao123dk/Rao.js)
## CDN
```javascript
CDN for production:- 
<script src="https://cdn.rawgit.com/rao123dk/Rao.js/5cab7589/rao.js"> </script> 


CDN for development
<script src="https://rawgit.com/rao123dk/Rao.js/master/rao.js"> </script> 

```

### Get Element by id
```javascript
var a = rao("#id");
console.log(a.val());
```
### Get Element by Class
```javascript
var a = rao(".class");
```

### Get Element by attributes
```javascript
var b = rao("input[type='text']");
```

### Get/Set html 
```javascript
var ht = rao('#htm');
ht.html("<p>hello html here</p>"); //Set
ht.html(); //Get
```

### Get/Set text 
```javascript
var txt = rao('#txt');
txt.text("hello text here"); //Set
txt.html(); //Get
```

### Append/Prepend Elements
```javascript
rao('#id').append("<div>Hello append</div>");
rao('#id').prepend("<div>Hello prepend</div>");
```
### Find all child elements of parent element
```javascript
rao('#parentid').mychild();
```

### Events
```javascript
rao('#txt').on('click', function(){ 
    alert("hmm");
});

rao('#txt').off('click');
```

### Convert to UPPER case 
Like "hello javascript" to "HELLO JAVASCRIPT"
```javascript
console.log(rao('#id').UPPER());
```
    

### convert to uppercase letter by diffrent style
1. Like "javaScript often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based programming language." to 
"JavaScript often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based programming language."
```javascript
var str = "javaScript often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based programming language.";
console.log(r.upper(str,"1"));
```

2. Like "javaScript often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based programming language." to 
"JavaScript Often Abbreviated As JS, Is A High-level, Dynamic, Weakly Typed, Prototype-based Programming Language."
```javascript
var str = "javaScript often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based programming language.";
console.log(r.upper(str,"1++"));
console.log(r.upper(str,">1"));
```
3. Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "pen", it should be replaced as "Pen".
 :hotsprings:
```javascript
let org_str = "This is my Book.",
console.log(r.rao_replace(org_str, "Book", "pen"));
Output :- This is my Pen.
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

### Detect Client Browser name and version
 :hotsprings:
```javascript
Simply call "r.browser();" 
ex:-
console.log(r.browser());
Output :- Chrome 62

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

### Digital watch by single line of code
 :hotsprings:
```javascript
 r.showWatch('#showwatchid',"h","m","s",hour12=true);
 ex:- 
 console.log(r.showWatch('#showwatchid',"h","m","s",hour12=true));
 output:- 1:8:58 PM
 console.log(r.showWatch('#showwatchid',"h","m","s",hour12=false));
 output:- 13:8:58 
 console.log(r.showWatch('#showwatchid',"h","m",hour12=true));
 output:- 11:19 AM
 
```

### JavaScript New Feature checker(i.e. It will check, is your browser support new fetaure of not ?) Like ECMAScript 2015/2016/2017 or ES6/ES7/ES8
 :hotsprings:
```javascript
 	console.log(r.ES6());
	console.log(r.ES7());
	console.log(r.ES8());
	Output :- true/false

```

 ### Get Random Number between two given numbers
```javascript
    // r.random(first_digit, last_digit)
   console.log(r.random(10, 111));
   Output :- 29 or different 
```

### Random String generator(i.e. also strong password generator )
 :hotsprings:
```javascript
   // r.randomString(length_of_string)
   console.log(r.randomString(8));
   Output :- g485edgn or differnt
```

### Duplicate Items in Array
  1. Return duplicate items
  :hotsprings:
```javascript
   // r.duplicate(Array_name);
   Ex:- const array = ["a", "f", "e", "w", "r", "e", "o", "j", "j","w"];
   console.log(r.duplicate(array));
   Output :- ["e", "w", "j"]
```

  2. Remove duplicate items from array
  :hotsprings:
```javascript
   // r.duplicate(Array_name);
   Ex:- const array = ["a", "f", "e", "w", "r", "e", "o", "j", "j","w"];
   console.log(r.removeDuplicate(array));
   Output :- ["a", "f", "e", "w", "r", "o", "j"]
```

### Difference between two Dates 
 1. Get difference between two date {General}
 :hotsprings:
```javascript
 	// r.dayDiff("Start_date","end_date")); // Format will be DD/MM/YYYY
 	console.log(r.dayDiff("21/12/2017","30/12/2017")); 
 	Output :- 9
```

 2. Get difference between two date{ escape Saturday and Sunday i.e. count only working days}
  :hotsprings:
```javascript
 	// r.dayDiffSatSun("Start_date","end_date")); // Format will be DD/MM/YYYY
 	console.log(r.dayDiffSatSun("21/12/2017","30/12/2017")); 
 	Output :- 7
```

 3. Get difference between two date{ escape Saturday, Sunday and *holiday festival* also}
  :hotsprings:
```javascript
 	console.log("Coming soon.....");
```

#### Countdown Timer
:hotsprings: 
```javascript
	console.log(r.countDown(01,01,2018)); // Format will be DD/MM/YYYY
	Output :- {total: 896620000, days: 10, hours: 9, minutes: 3, seconds: 40}

```

#### Thanks!
```javascript
	console.log("Thanks!");

```


