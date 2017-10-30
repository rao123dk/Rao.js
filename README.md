# Rao.js

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

