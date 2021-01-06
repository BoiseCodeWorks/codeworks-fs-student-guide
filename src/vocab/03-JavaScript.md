# JavaScript

**JavaScript** is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. 
<hr>


## Data and Structure types

**Number**:  JavaScript has only one type of number. Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.
```js
 1, 75, 1000000, 0.99, -13
 ```

**String**: A string (or a text string) is a series of characters
```js
"John Doe", "whatevs", "Banana", "x0Xl33tH4x3rX0x"
```


**Boolean**: A Boolean has one of two values, true or false
```js
true, false
```


**undefined**: undefined is the value of a variable with no value.  This variable will also be the type of undefined.
```js
let x
x == undefined
```


**Null**: the value of nothing. It is supposed to be something that doesn't exist. 
```js
let x = null
x == null
```

**Symbol**: Every symbol value returned from Symbol() is unique.  A symbol value may be used as an identifier for object properties; this is the data type's primary purpose, although other use-cases exist.  
```js
let myName = Symbol('Mark')
let yourName= Symbol('Mark')
yourName === myName  // => false 
```

**Object**: Objects can be seen as a collection of properties.  Property values can be values of any type, including other objects, which enables building complex data structures. Properties are identified using key values. A key value is either a String or a Symbol value.
```js
{key: value} 
{myNumber: 12, myName: 'Mark'}
```

**Array**: Arrays are a collection of 'elements'. each element can be of any data type (including arrays) and these elements are accessed by their 'index' or their position in the array.  these indexes start at 0 and increase for each element in the array.
```js  
[2,4,6,8]
['Mark','Jake', 'D$']
```

## Variables
 
 **Variables** are containers for storing data values.  variables are given a named reference to a value. That way an unpredictable value can be accessed through a predetermined name.

### Variable keywords
variable keywords are used to declare the value of a variable.
<ul>
<li><b>var</b> declares a varible with global scope</li>
<li><b>let</b> declares a variable with a local scope</li>
<li><b>const</b> declares a variable with a local scope, however the it's value cannot be changed after declaration.</li>
</ul>

## Operators

**Operators** are used to assign values, compare values, perform arithmetic operations, and more. 

### Arithmetic Operators
used to perform arithmetic between variables and/or values.

<ul>
<li><b>+  </b>Addition</li>
<li><b>- </b>Subtraciton</li>
<li><b>* </b>Multiplication</li>
<li><b>** </b>Exponentiation</li>
<li><b>/ </b>Division</li>
<li><b>% </b>Modulus (division remainder)</li>
<li><b>++ </b>Increment</li>
<li><b>-- </b>Decrement</li>
</ul>


### Assignment Operators
used to assign values to variables

<ul>
<li><b>= </b></li>
<li><b>+= </b></li>
<li><b>-=</b></li>
<li><b>*=</b></li>
<li><b>/=</b></li>
<li><b>%=</b></li>
</ul>

### Comparison Operators

these opperators are used to determine a 'truthy' or 'falsy' value.  these can be used in conjunction with other statements to run or not run certain lines of code under certain conditions.
<ul>
<li>== is equal</li>
<li>!= is not equal</li>
<li>=== strictly equals</li>
<li>> greater than</li>
<li>< less than</li>
<li>>= greater than or equal too</li>
<li><= less than or equal too</li>
</ul>

### Logical Operators
Logical operators are used to determine the logic between variables or values.

<ul>
<li><b>&&</b> and</li>
<li><b>||</b> or</li>
<li><b>!</b> not</li>
</ul>

## Functions 

**Functions** are one of the fundamental building blocks in JavaScript. A function is a reusable set of statements to perform a task or calculate a value. Functions can be passed one or more values and can return a value at the end of their execution. 

**Function Parameters**: An input to the function when the function is declared or defined.  Parameters are used as variables inside the functions body.  When the function is called, these parameters will have the value of whatever is passed in as ***arguments***

**Function Return**: Functions return (pass back) values using the return keyword. return ends function execution and returns the specified value to the location where it was called.

## Conditional Statements

**Conditional Statements**  are used to perform different actions based on different conditions. 

<ul>
<li><b>if</b> is used to specity a block of code to executed, <i>if</i> a condition is 'truthy' </li>
<li><b>else</b>is used to specify a block of code to executed, if the same condition of a proceeding <i>if</i> statement is 'falsy'</li>
<li><b>else if</b> is used to specify a new condition to test if the first condition is false</li>
<li><b>switch</b> this is used to specify many alternative conditions and cooresponding blocks of code to be executed</li>
</ul>


## Loops

**Loops** are blocks of code used to do the same thing, over and over again.  Often referred to as **iteration**.  A loop will usually have one or more of the following elements:

**Initializer**: this is the starting point of the loop, and generally will count as each new itteration of the loop runs.

**Condition**: A conditional statement used to determine wheter the loop continues to run, or stops.

**Final-expression**: this generally increments the ***initializer*** with each successive loop until the ***condition*** is no longer true.

### Types of Loops

**for loop** :

```js
for (initializer; condition; final-expression) {
  // code to run
}
```

**while loop**:

```js
initializer
while (condition) {
  // code to run

  final-expression
}
```

**do while** :

```js
initializer
do {
  // code to run

  final-expression
} while (condition)
```

### Loop Statements

**break :** If you want to exit a loop before all the iterations have been completed, you can use the break statement. a break statement will immediately exit the loop and make the browser move on to any code that follows it.

**continue :** The continue statement works in a similar manner to break, but instead of breaking out of the loop entirely, it skips to the next iteration of the loop.


## Classes

**Classes** are a template for creating objects. They encapsulate data with code to work on that data.

### Make up of a Class

**Declaration**: One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class.  A class expression is another way to define a class. Class expressions can be named or unnamed

**Constructor**: The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class.

**Methods**: methods are actions that can be performed on objects.  Think of it like a function that exists on the class.  To access this method we will first have to access the an object with the class this method exists.

**This**: a keyword used to reference the instance of the object in which this exists.
