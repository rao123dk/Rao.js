# Rao.js

### CDN
```
Use this URL in production:- 
<script src="https://cdn.rawgit.com/rao123dk/Rao.js/5cab7589/rao.js" > </script> 


Use this URL for development
<script src="https://rawgit.com/rao123dk/Rao.js/master/rao.js" > </script> 

```

### Get Element by id
```
var a = rao("#id");
console.log(a.val());
```
### Get Element by Class
```
var a = rao(".class");
```

### Get Element by attributes
```
var b = rao("input[type='text']");
```

### Get/Set html 
```
var ht = rao('#htm');
ht.html("<p>hello html here</p>"); //Set
ht.html(); //Get
```

### Get/Set text 
```
var txt = rao('#txt');
txt.text("hello text here"); //Set
txt.html(); //Get
```

### Append/Prepend Elements
```
rao('#id').append("<div>Hello append</div>");
rao('#id').prepend("<div>Hello prepend</div>");
```

### Events
```
rao('#txt').on('click', function(){ 
    alert("hmm");
});

rao('#txt').off('click');
```

### Convert to UPPER case 
Like "hello javascript" to "HELLO JAVASCRIPT"
```
console.log(rao('#id').UPPER());
```
    

### convert to uppercase letter by diffrent style
1. Like "javaScript often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based programming language." to 
"JavaScript often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based programming language."
```
var str = "javaScript often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based programming language.";
console.log(r.upper(str,"1"));
```

2. Like "javaScript often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based programming language." to 
"JavaScript Often Abbreviated As JS, Is A High-level, Dynamic, Weakly Typed, Prototype-based Programming Language."
```
var str = "javaScript often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based programming language.";
console.log(r.upper(str,"1++"));
console.log(r.upper(str,">1"));
```
3. Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "pen", it should be replaced as "Pen".
```
let org_str = "This is my Book.",
console.log(r.rao_replace(org_str, "Book", "pen"));
Output :- This is my Pen.
```
### Get/set attribute dynamically from/in element
Set own attribute
```
rao('#sr').attri("attribue","value");
exp:- 
rao('#sr').attri("custom_id","12CU100");
output :- 
<span id="sr" custom_id ="12CU100"> </span>
```
Get attribue
```
rao('#sr').attri("nameofattribue")
exp:- 
console.log(rao('#sr').attri("class"));
Output:- 
It will return classname of element which is is 'sr'
```
### Hide, show and toggle(hide/show) element
Hide 
```
rao('#id').out();
```
show 
```
rao('#id').in();
```
toggle 
```
rao('#id').inOut();
```
### Get custom attribute(data-myperonalId) value
```
console.log(rao("#id").Data("customAttribute"));
exp:- 
<span id="myid" data-myperonalId="177466"></span>
console.log(rao("#myid").Data("myperonalId"));
```
### detect Client Browser name and version
 :hotsprings:
```
Simply call "r.browser();" 
Exp:-
console.log(r.browser());
Output :- Chrome 62

```

