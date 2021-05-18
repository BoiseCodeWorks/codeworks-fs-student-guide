# An Intro to Javascript Proxy Objects

### Change the way you interact with Objects

![Image for post](https://miro.medium.com/max/5472/1*Mmid3OPj9sZtMaLv0H3XWg.png)

> Proxies are Middleware for Javascript Objects

... or at least that's sort of the tl;dr version for it.

Proxies were introduced in ES6 to allow you to provide *custom* functionality to basic operations that can be performed on an `Object`. For example, `get` is a basic `Object` operation.
```javascript
const obj = {
   val: 10
};
console.log(obj.val);
```
Here, the `console.log()` statement performs a `get` operation on the object `obj` to get the value of the key `val`.

Another basic Object operation is `set`.
```javascript
const obj = {
   val: 10
};
obj.val2 = 20;
```
Here, a `set` operation is performed to set a new key to the object `obj`.

## How do I create a Proxy?
```javascript
const proxiedObject = new Proxy(initialObj, handler);
```
Calling the Proxy constructor, `new Proxy()`, will return an object that has the values contained in `initialObj` but whose basic operations like `get` and `set`, now have some custom logic specified by the `handler` object.

Let's take an example to understand this,
```javascript
const handler = {
  get: function() {
    console.log('A value has been accessed');
  }
}

const initialObj = {
  id: 1,
  name: 'Foo Bar'
}

const proxiedObj = new Proxy(initialObj, handler);

console.log(proxiedObj.name); 
```
Now, if we had not made a Proxy Object, calling `console.log(proxiedObj.name)` on Line 14 would've logged "*Foo Bar"* to the console.

But now that we've made a Proxy, the `get` operation has some custom logic that we have defined on Line 3.

Calling `console.log(proxiedObj.name)` will now actually log "*A value has been accessed"* to the console!

![Image for post](https://miro.medium.com/max/934/1*qUIxgSBBJlaGaVdl1-wNjg.png)

To the careful eye, you'd notice that there are actually two logs in the console. *"A value has been accessed"* and *undefined*. Why? 🤔

The default implementation of the `get` operator is to return the value stored in that key in the Object. Since we overrode it to just log a statement, the value is never returned, and hence the `console.log()` statement on line14 logs `undefined`.

Let's fix that!

The `get` operator takes two parameters --- the object itself and the property being accessed.
```javascript
const handler = {
  get: function(obj, prop) {
    console.log('A value has been accessed');
    return obj[prop]; // Return the value stored in the key being accessed
  }
}

const initialObj = {
  id: 1,
  name: 'Foo Bar'
}

const proxiedObj = new Proxy(initialObj, handler);

console.log(proxiedObj.name);
```

![Image for post](https://miro.medium.com/max/932/1*1FmUg3gJ53VaLr4OH6T-qQ.png)

That's better! 😄

This custom override that we provided for `get` is called a `trap` (loosely based on the [concept of operating system traps](https://en.wikipedia.org/wiki/Trap_(computing))). The handler object is basically an object with a set of traps that would trigger whenever an object property is being accessed.

Let's add a trap for `set` as well. We'll do the same thing --- any time a value is set, we'll log the property being modified, as well as the value being set for that key.

The `set` operator takes three arguments --- the object, the property being accessed and the value being set for that property.
```javascript
const handler = {
  get: function(obj, prop) {
    console.log('A value has been accessed');
    return obj[prop];
  },
  set: function(obj, prop, value) {
    console.log(`${prop} is being set to ${value}`);
  }
}

const initialObj = {
  id: 1,
  name: 'Foo Bar'
}

const proxiedObj = new Proxy(initialObj, handler);

proxiedObj.age = 24
```

Here, the access being made at Line 18 will trigger the function defined at Line 6, which will log the property being accessed and the value being set.


![Image for post](https://miro.medium.com/max/932/1*WRWfVh6M21gJ8DS2BUF7Yg.png)


## A Real-world Example

Say we have an object that defines a person
```javascript
const person = {
   id: 1,
   name: 'Foo Bar'
};
```

What if we want to make the `id` property of this object a *private* property. No one should be able to access this property via `person.id`, and if someone does, we need to throw an error. How would we do this?

Proxies to the rescue! 🎉👩‍🚒

All we need to do is create a Proxy of this object, and override the `get` operator to prevent us from accessing the `id` property!

```javascript
const handler = {
  get: function(obj, prop) {
    if (prop === 'id') { // Check if the id is being accessed
      throw new Error('Cannot access private properties!'); // Throw an error
    } else {
      return obj[prop]; // If it's not the id property, return it as usual
    }
  }
}

const person = {
  id: 1,
  name: 'Foo Bar'
}

const proxiedPerson = new Proxy(person, handler);

console.log(proxiedPerson.id);
```

Here, in the trap we've created for `get`, we check if the property being accessed is the `id` property, and if so, we throw an error. Otherwise, we return the value as usual.

![Image for post](https://miro.medium.com/max/928/1*aV-wxEkYcSHcIY86HWxspw.png)

Private Propeties --- Console Output

Another neat use case for this is validations. By setting a `set` trap, we can add custom validation before we set the value. If the value does not conform to the validation, we can throw an error!

```javascript
const handler = {
  set: function(obj, prop, value) {
    if (typeof value !== 'string') {
      throw new Error('Only string values can be stored in this object!');
    } else {
      obj[prop] = value;  
    }
  }
}

const obj = {};

const proxiedObj = new Proxy(obj, handler);

console.log(proxiedObj); // This will log an empty object 
proxiedObj.name = 'Foo Bar'; // This should be allowed
console.log(proxiedObj); // This will log an object with the name property set

proxiedObj.age = 24; // This will throw an error.
```


![Image for post](https://miro.medium.com/max/934/1*g1ITszNQlXkt7EK6nDmWxQ.png)

Custom Validation --- Console Output

In the above examples, we've seen the `get` and the `set` traps. There are actually a lot more traps that can be set. You can find the [entire list here](https://docs.microsoft.com/en-us/scripting/javascript/reference/proxy-object-javascript).

Proxy Objects only just came into my radar after going through [this article about them](https://davidwalsh.name/watch-object-changes?utm_source=blog.campvanilla.com), and I can already see the usefulness of them in the code I write everyday!]

<br>
<br>
<hr>
<small>Seelan, Abinav. “An Intro to Javascript Proxy Objects.” Medium, Campvanilla, 23 Dec. 2017, blog.campvanilla.com/advanced-guide-javascript-proxy-objects-introduction-301c0fce9432. </small>
<br>
<br>

## Daily Journal
### Answer the following questions
1. What are the two common operations that we will set in the handler?

2. What do you have to make sure you are doing with every Get to insure the value does not become `undefined`?

3. What are some of the benefits of the proxy object that we are using in our structure for applications?