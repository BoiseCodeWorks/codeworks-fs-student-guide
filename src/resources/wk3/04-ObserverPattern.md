# The Observer Pattern

In JavaScript, there is a problem that comes up often. You need a way to update parts of a page in response to certain events, with the data these provide. Say, for example, user input that you then project into one or many components. This leads into a lot of push-and-pull in the code to keep everything in sync.

This is where the observer design pattern can help --- it enables one-to-many data binding between elements. This one-way data binding can be event driven. With this pattern, you can build reusable code that solves for your specific needs.

In this article, I'd like to explore the observer design pattern. It will help you solve a common problem you see in client-side scripting. That is one-to-many, one-way, and event-driven data binding. It is a problem that comes up often when you have many elements that must be in sync.

I'll use ECMAScript 6 to illustrate the pattern. Yes, there will be classes, arrow functions, and constants. Feel free to explore these topics on your own if you are not already familiar. I'll use parts of ES6 that introduce syntactic sugar only, so it is portable with ES5 if need be.

And I'll use Test-Driven-Development (TDD) to work on the pattern. This way you have a way knowing how each component is useful.

The new language features in ES6 make for some succinct code. So, let's get started.

## The Event Observer

A high-level view of the pattern looks like this:

```
EventObserver
│
├── subscribe: adds new observable events
│
├── unsubscribe: removes observable events
|
└── broadcast: executes all events with bound data
```

After I flesh out the observer pattern I'll add a word count that uses it. The word count component will take this observer and bring it all together.

To initialize the `EventObserver` do:

```javascript
class EventObserver {
  constructor() {
    this.observers = [];
  }
}
```

Start with an empty list of observed events, and do this for every new instance. From now on, let's add more methods inside `EventObserver` to flesh out the design pattern.

### The Subscribe Method

To add new events do:

```javascript
subscribe(fn) {
  this.observers.push(fn);
}
```

Grab the list of observed events and push a new item to the array. The list of events is a list of callback functions.

One way to test this method in plain JavaScript is as follows:

```javascript
// Arrange
const observer = new EventObserver();
const fn = () => {};

// Act
observer.subscribe(fn);

// Assert
assert.strictEqual(observer.observers.length, 1);
```

I use [Node assertions](https://nodejs.org/api/assert.html) to test this component in Node. The exact same assertions exist as [Chai assertions](http://chaijs.com/api/assert/) too.

Note the list of observed events consists of humble callbacks. We then check the length of the list and assert that the callback is on the list.

### The Unsubscribe Method

To remove events do:

```javascript
unsubscribe(fn) {
  this.observers = this.observers.filter((subscriber) => subscriber !== fn);
}
```

Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.

To test this nice method, do:

```javascript
// Arrange
const observer = new EventObserver();
const fn = () => {};

observer.subscribe(fn);

// Act
observer.unsubscribe(fn);

// Assert
assert.strictEqual(observer.observers.length, 0);
```

The callback must match the same function that's on the list. If there is a match, the unsubscribe method removes it from the list. Note the test uses the function reference to add and remove it.

### The Broadcast Method

To call all events do:

```javascript
broadcast(data) {
  this.observers.forEach((subscriber) => subscriber(data));
}
```

This iterates through the list of observed events and executes all callbacks. With this, you get the necessary one-to-many relationship to the subscribed events. You pass in the `data` parameter which makes the callback data bound.

ES6 makes the code more effective with an arrow function. Note the `(subscriber) => subscriber(data)` function that does most of the work. This one-liner arrow function benefits from this short ES6 syntax. This is a definite improvement in the JavaScript programming language.

To test this broadcast method, do:

```javascript
// Arrange
const observer = new EventObserver();

let subscriberHasBeenCalled = false;
const fn = (data) => subscriberHasBeenCalled = data;

observer.subscribe(fn);

// Act
observer.broadcast(true);

// Assert
assert(subscriberHasBeenCalled);

```

Use `let` instead of a `const` so we can change the value of the variable. This makes the variable mutable which allows me to reassign its value inside of the callback. Using a `let` in your code sends a signal to fellow programmers that the variable is changing at some point. This adds readability and clarity to your JavaScript code.

This test gives me the confidence necessary to ensure the observer is working as I expect. With TDD, it is all about building reusable code in plain JavaScript. There are benefits to writing testable code in plain JavaScript. Test everything, and retain what is good for code reuse.

With this, we have fleshed out the `EventObserver`. The question is, what can you build with this?

## The Observer Pattern in Action: A Blog Word Count Demo

For the demo, time to put in place a blog post where it keeps the word count for you. Every keystroke you enter as input will get synced by the observer design pattern. Think of it as free text input where every event fires an update to where you need it to go.

To get a word count from free text input, one can do:

```javascript
const getWordCount = (text) => text ? text.trim().split(/\s+/).length : 0;
```

Done! There is a lot going on in this seemingly simple pure function, so how about a humble unit test? This way it is clear what I intended this to do:

```javascript
// Arrange
const blogPost = 'This is a blog \n\n  post with a word count.     ';

// Act
const count = getWordCount(blogPost);

// Assert
assert.strictEqual(count, 9);
```

Note the somewhat wacky input string inside `blogPost`. I intend for this function to cover as many edge cases as possible. As long as it gives me a proper word count we are heading, in fact, in the right direction.

As a side note, this is the real power of TDD. One can iterate on this implementation and cover as many use cases as possible. The unit test tells you how I expect this to behave. If the behavior has a flaw, for any reason, it is easy to iterate and tweak it. With the test, there is enough evidence left behind for any other person to make changes.

Time to wire up these reusable components to the DOM. This is the part where you get to wield plain JavaScript and weld it right into the browser.

A way to do it would be to have the following HTML on the page:

```html
<textarea id="blogPost" placeholder="Enter your blog post..." class="blogPost">
</textarea>
<p class="word-count">Word Count: <strong id="blog-word-count">0</strong></p>
```

Followed up by this JavaScript:

```javascript
const blogObserver = new EventObserver();

blogObserver.subscribe((text) => {
  const blogCount = document.getElementById('blog-word-count');
  blogCount.textContent = getWordCount(text);
});

const blogPost = document.getElementById('blogPost');

blogPost.addEventListener('keyup', () => blogObserver.broadcast(blogPost.value));

```

Take all your reusable code and put in place the observer design pattern. This will track changes in the text area and give you a word count right beneath it. I'm using the `body.appendChild()` in the DOM API to add this new element. Then, attaching the event listeners to bring it to life.

Note with arrow functions it is possible to wire up one-liner events. In fact, you broadcast event-driven changes to all subscribers with this. The `() => blogObserver.broadcast()` does the bulk of the work here. It even passes in the latest changes to the text area right into the callback function. Yes, client-side scripting is super cool.

No demo is complete without one you can touch and tweak, below is the CodePen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="SitePoint" data-slug-hash="rzBEXP" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="The Observer Pattern">
  <span>See the Pen <a href="https://codepen.io/SitePoint/pen/rzBEXP">
  The Observer Pattern</a> by SitePoint (<a href="https://codepen.io/SitePoint">@SitePoint</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Now, I would not call this feature complete. It is but a starting point of the observer design pattern. The question in my mind is, how far are you willing to go?

## Looking Ahead

It is up to you to take this idea even further. There are many ways you can use the observer design pattern to build new features.

You can enhance the demo with:

-   Another component that counts the number of paragraphs
-   Another component that shows a preview of entered text
-   Enhance the preview with markdown support, for example

These are only a few ideas you can do to sink deeper into this. The enhancements above will challenge your programming chops.

## Conclusion

The observer design pattern can help you solve real-world problems in JavaScript. This solves the perennial problem of keeping a bunch of elements synced with the same data. As often is the case, when the browser fires specific events. I'm sure most of you by now have come across such a problem and have run towards tools and third-party dependencies.

This design pattern equips you to go as far as your imagination is willing to go. In programming, you abstract the solution into a pattern and build reusable code. There is no limit to how far this will take you.

I hope you see how much, with a little discipline and effort, you can do in plain JavaScript. The new features in the language, such as ES6, help you write some succinct code that is reusable.

<br>
<br>
<hr>
<small>Reyes, Camilo. JavaScript Design Patterns: The Observer Pattern. 17 June 2018, www.sitepoint.com/javascript-design-patterns-observer-pattern/. </small>
<br>
<br>

## Daily Journal
### Answer the following questions
1. What problems does the Observer Pattern seek to solve?

2. What are the three mechanisms of the observer pattern?

3. Review the code generated from the bcw-template and reflect on the proxy objects from yesterday, and your understanding of the observer pattern today. With this knowledge, explain how the `magic` of the bcw-template uses these two concepts to manage and update the dom.