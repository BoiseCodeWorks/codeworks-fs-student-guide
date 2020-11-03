# Prototypal Inheritance


### Everything is an object in JavaScript... or is it?

You might have heard people say that "In JavaScript, Everything is an Object".

If you are not familiar with what an object looks like, here is an example:

![Image for post](https://miro.medium.com/max/588/1*CohNoqCxqBqAFIEEGN7hjw.png)

While this is not entirely true in every case, people still consider the above statement to be true because JavaScript is a prototype-based Object Oriented Programming Language, instead of class-based.

In JavaScript, there are two main types of values:

-   Primitives --- Strings, Numbers, Booleans, Undefined, and Null.
-   Objects --- Arrays, Functions, Dates

So, while everything in JavaScript is not an object, the not-object things get wrapped into an object while compilation, allowing JavaScript to do really complicated operations. Even if you think that a value in your code is not an object, chances are that JavaScript has wrapped it inside one.

For example, if we create an empty function named `hero`:
```javascript
function hero() {}
```
And like I mentioned before, functions are also classed as objects in JavaScript. So if we add a property `type` to this function and print it out, you will see that `hero` function is now also an object.
```javascript
function hero() {}
hero.type = 'superman'
console.log(hero) 

//Output
{ [Function: hero] type: 'superman' }
```
This is one of many things that makes JavaScript so awesome! 🙌

To understand what Prototypal Inheritance is, we first need to understand what an Object Oriented Language is.

## Flashback --- Object Oriented Programming

In an object oriented programming, objects use methods and properties to interact with one another and create complex applications. This also allows a developer to easily store data in a structured and clean way.

In the example object shown above, we are only storing some data. If I want to create another object for "Batman", I will have to create a whole new one.

![Image for post](https://miro.medium.com/max/604/1*S-xFcAF5D-swARXxTVTdlw.png)

In a real world application, this method can get really tiring and repetitive.

We can see that both these objects are storing the same kind of data: `name`, `alias`, and `planet`. So what if we create a general object that we can then use to create separate instances of that object?

If you are familiar with other programming languages, you would think that I am talking about creating a class. But JavaScript is a Prototype-based language, not Class-based. ( However classes can be used we will keep it on prototypes for now )

In JavaScript, this general object is what is commonly known as a Constructor or a Prototype.

In JavaScript, there is no real difference between a regular function and a constructor function. But in order to help developers differentiate between the two, constructor functions are capitalized.

By creating a prototype, developers can easily create multiple unique instances of the prototype. This is a create way to keep our code clean and concise.

Based on our two objects above, I can now create a Prototype. Lets begin by creating a new function named `Hero`. Note that here we need to capitalize the first letter of the function name.


![Image for post](https://miro.medium.com/max/822/1*sfoohfNt-C2JETbm7siUjQ.png)

Then, I can use the prototype to create the `superman` and `batman` objects using the `new` keyword. This is actually why prototypes are also known as constructors. We are using the prototype function to "construct" a new object.

![Image for post](https://miro.medium.com/max/1242/1*rIids0agAyjsFlSwKnz8wg.png)

## Inheritance

Inheritance is the process by which one object can be based on another. This lets the objects to share each other's properties.

I have created the `Hero` prototype and used it to create a new object named `superman`. But we are not doing anything with this object. So let's take care of that by creating another function called `dialogue`.
```javascript
function dialogue() {
  console.log('I am ' + this.name);
}
```
But if we run our code now, nothing is going to happen because this function doesn't know what the name really is. For that, we need to

I want this new function to have the same properties as that of the `Hero`. Instead of writing them down inside this function, we can simply tell JavaScript to inherit them from the `Hero` prototype.

This is possible with the help of the `prototype` property that is available within any object in JavaScript.

![Image for post](https://miro.medium.com/max/854/1*fd87Pc_VHVAZiDrN646_NA.png)

By placing `dialogue` on `Hero.prototype`, we have made it available to all instances of `Hero`.

## Differential Inheritance


JavaScript also comes with another inheritance model called "differential inheritance". In this model, the methods are not copied from the parent to child. But instead there is a link between the children and their parent object.

Here, `superman` doesn't actually have its own method called `dialogue()`. But then how does `superman.dialogue()` work?

When the JavaScript engine comes across `superman.dialogue()` in the code, it looks for the property called `dialogue` inside the `superman` object. When it doesn't find one, it will look up the prototype chain to `superman`'s parent `Hero.prototype`. There it will find `Hero.prototype.dialogue` and calls it with a `this` that is bound to `superman`.

## Object.create()


We can make this even more exclusive by creating a new class for `Superman` that will inherit the properties of the `Hero` prototype. We can do this by assigning the prototype of `Superman` to the `Hero` prototype like this:
```javascript
function Superman() {}
Superman.prototype = Hero.prototype
```
But what this does is that it just makes both `Superman` and `Hero` equal. What we really need is a new object that is based on the `Hero` prototype. Since ES5, JavaScript comes with a built-in function called `Object.create()`. Let's use it here as shown below:
```javascript
Superman.prototype = Object.create(Hero.prototype);
```
This will create a new empty object that is based on the `Hero` prototype and assign it to the `Superman` prototype. So all the properties that we have in the `Hero` prototype can now be accessed by the `Superman` prototype. So instead of calling `new Hero`, we can call `new Superman` and everything will still work as it should.

But if you take a closer look at the output, you will notice that there is an `undefined` inside it. That is because currently the `Hero` is a constructor only for itself. We have to `call` the properties of `Hero` inside the `Superman` prototype.
```javascript
function Superman() {
  Hero.call(this, 'Superman', 'Clark Kent', 'Krypton')
}
```
Let's create another constructor called `MarvelMovies` as shown below:
```javascript
function MarvelMovies(movieName, releaseYear) {
  this.movieName = movieName;
  this.releaseYear = releaseYear;
}
```
When a function is used as a constructor, `this` refers to the new object that we are creating. So in this constructor, I have taken `movieName` and `releaseYear` as arguments and assigned those values to the `movieName` and `releaseYear` properties of our new `MarvelMovies` instance named `avengers`.
```javascript
var avengers = new MarvelMovies("avengers", 2012);
```
I am then going to create a new method called `output` for this prototype as shown below:
```javascript
MarvelMovies.prototype.output = function() {
  return "Movie: " + this.movieName + " Released in " + this.releaseYear;
}
console.log(avengers.output());
```
## Future Inheritance


A really great aspect of inheritance is that JavaScript lets you modify or expand on the features of a class even after you have defined it.

JavaScript will look up the prototype when trying to access properties on an object. So, you can alter classes at runtime!

To illustrate this, lets create an array as shown below:
```javascript
var numbers = [11, 22, 33, 44, 55];
Array.prototype.shuffle = function() {
  return this.sort(function() {
    return Math.round( Math.random() * 2) - 1;
  });
};
console.log(numbers.shuffle());
```
Here, the `numbers` array existed before the `Array.prototype.shuffle` did. But in JavaScript, the property lookups go up the prototype chain. This is why the array still gets access to the new method `shuffle`, since it exists on the `Array.prototype` when we are actually trying to use it.

In simple terms, we created an array, then went back and gave all Arrays access to a new method.

## Conclusion

There are lot of resources out there that explains how prototypal inheritance works in JavaScript. The official documentation of JavaScript states that:

> When it comes to inheritance, JavaScript only has one construct: `objects`. Each `object` has an internal link to another `object` called its `prototype`. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. `null`, by definition, has no prototype, and acts as the final link in this prototype chain.

This definition can get confusing and hard to grasp. This is why some like to shift to the class-based inheritance instead of prototypal inheritance.

There are a lot of other interesting things to discuss around prototypal inheritance, which keep expanding with each newer syntax that comes with ES5, ES6, ES7, and others have to offer.

For example, `Object.assign` is a great way of improving factories while keeping your code to a minimum. `Object.create` also has some interesting use cases.

<br>
<br>
<hr>
<small>S, Rajat. Understanding JavaScript's Prototypal Inheritance. 28 Mar. 2019, blog.bitsrc.io/understanding-javascripts-prototypal-inheritance-354292253bcb.</small> 
<br>