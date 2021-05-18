# Code documentation for JavaScript with JSDoc: an introduction

*Writing documentation for the source code can help your future self and your colleagues. Learn how to document JavaScript with JSDoc!*

![Code Documentation for JavaScript With JSDoc](https://www.valentinog.com/blog/static/e42b317e92f44110898d2f1e07738432/7a3d6/jsdoc-tutorial%402x.png "Code Documentation for JavaScript With JSDoc")


Suppose you wrote a couple of functions for making an HTML table with JavaScript. You could use those function right now, or pass them to another developer.

Everything is clear in your mind the moment you write the code, yet a month later you don't remember how to use functionA or functionB anymore. And so your colleagues. How functionA is supposed to be called? What parameters it takes? And what shape should the parameters have?

Code documentation dissolves those doubts, helping you and other developers to understand how to use the software you wrote.

## How many forms of code documentation?

There are many ways for documenting a piece of code. For example you can write:

-   howtos guides for using your code
-   a nice README for the repo
-   code documentation in the source

Tutorials are nice because you can teach things to thousands of people, but they get outdated soon for many reasons: lack of time, breaking changes to the code.

A README on the Git repo hopefully is more in sync with the project because when you make changes to the code you're "forced" to update the README too (otherwise users will complain).

But on top of howtos and READMEs, code documentation in the source holds most of the value. It sits right there with the code and helps avoiding mistakes as you write JavaScript (or any other language) in the editor.

Speaking of JavaScript, we can use a documentation layer called, JSDoc. It's a command line tool and a "documentation language" at the same time. Let's see how it can helps.

## JavaScript With JSDoc: first steps

JSDoc is a nice "language" for adding documentation to JavaScript. Consider the following function:

```javascript
function generateTableHead(table, data) {
  const thead = table.createTHead();
  const row = thead.insertRow();
  for (const i of data) {
    const th = document.createElement("th");
    const text = document.createTextNode(i);
    th.appendChild(text);
    row.appendChild(th);
  }
}
```

This function kind of speaks by itself, "generateTableHead" after all is a descriptive sentence. But how about the "data" parameter? What "data" should be really? If I look at the function's body becomes evident that "data" must be an array (by the way, what a bad naming for "data". How about "arrayOfNames"?).

"table" is less bad on the other hand, yet it's not clear if it could simply be a string or an actual HTML element.

Turns out, code documentation with JSDoc annotations can help our functions to better describe their intentions.

First thing first what's the anatomy of a JSDoc annotation? JSDoc is simple as adding a comment before the function:

```javascript
/**
 * Generates a table head
 */
function generateTableHead(table, data) {
  const thead = table.createTHead();
  const row = thead.insertRow();
  for (const i of data) {
    const th = document.createElement("th");
    const text = document.createTextNode(i);
    th.appendChild(text);
    row.appendChild(th);
  }
}
```

"Generates a table head", what a silly comment Valentino. We already know the function's purpose by looking at its name. But let's make things interesting with JSDoc annotations for function parameters. Here's the syntax:

```javascript
/**
*
* @param {param type} param name - description
*
*/
```

For each parameter you can describe:

-   its type, i.e. string, number, HTMLTableElement and so on
-   its name
-   a description

It may look weird to you now, but types are actually a thing in JavaScript: there are "stock" JavaScript types with their infamous coercion and strong types with TypeScript.

[TypeScript is a slightly advanced topic](https://www.valentinog.com/blog/typescript/), but when you define types with JSDoc in the documentation you're using a touch of "strong types".

Having laid the foundations let's move on to documenting our function.

JavaScript With JSDoc: getting serious

"generateTableHead" should take an [HTMLTableElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement) and an array as parameters. We can add annotations for both like so:

```javascript
/**
 * Generates a table head
 * @param {HTMLTableElement} table - The target HTML table
 * @param {Array} data - The array of cell header names
 */
function generateTableHead(table, data) {
  const thead = table.createTHead();
  const row = thead.insertRow();
  for (const i of data) {
    const th = document.createElement("th");
    const text = document.createTextNode(i);
    th.appendChild(text);
    row.appendChild(th);
  }
}
```

Adding JSDoc documentation has a side effect. Auto completion will improve in your IDE and you'll get real-time hints:

![An annotated function provides hints about its parameters](https://www.valentinog.com/blog/static/4b2becb820142a3fa8dda00690059c5f/f8915/jsdoc-annotation.png "An annotated function provides hints about its parameters")

Moreover, the editor will scream if you try to pass the wrong kind of parameters:

![Real-time warnings in the IDE](https://www.valentinog.com/blog/static/e909c8b402ee98c7a71e4e8e46cee0ae/ad12c/jsdoc-warning.png "Real-time warnings in the IDE")

It might sound crazy, but adding JSDoc annotations before writing the code, not after, is another thing you can do. And it has two nice outcomes. First, you will probably write better, simpler code because of the idea of it you formed while writing the documentation.

Also, you'll choose better names for parameters (unlike my "data"), variables, and functions too. Give it a shot and let me know if it changes your workflow!

## JavaScript With JSDoc: more tags

JSDoc has a lot more tags. The "author" annotation for example is useful when you need to blame someone's else code. Here's an example:

```javascript
/**
 * Generates a table head
 * @author Valentino Gagliardi <valentinoDOTvalentinog.com>
 * @param {HTMLTableElement} table - The target HTML table
 * @param {Array} data - The array of cell header names
 */
function generateTableHead(table, data) {
  const thead = table.createTHead();
  const row = thead.insertRow();
  for (const i of data) {
    const th = document.createElement("th");
    const text = document.createTextNode(i);
    th.appendChild(text);
    row.appendChild(th);
  }
}
```

Another useful tag is "return" (or "returns") for describing the return value of a function. Here's a function which returns nothing (i.e. a function whose job is printing to the console or creating an HTML element):

```javascript
/**
 * A silly logger function
 * @param {string} message
 * @return {void} Nothing
 */
function sillyLogger(message) {
  console.log(`Don't use in production ${message}`);
}
```

Notice the "void" return "type". To conclude here's a function which returns a number:

```javascript
/**
 * Raises a number to exponent
 * @param {number} value - The base to raise
 * @param {number} exponent - The exponent
 * @return {number} - The exponent power
 */
function poooow(value, exponent) {
  return value ** exponent;
}
```

JSDoc works beautifully when you specify types in the doc, but you're also free to omit them. However by doing so you'll loose all the benefits. So that's all with JSDoc? Not yet! It can do another nice thing. Head over the next section!

P.S.: There are a lot more tags available for JSDoc. [Check out the documentation here](https://devdocs.io/jsdoc/).

## JavaScript With JSDoc: generating the docs

JSDoc has a binary which can be installed in your JavaScript project. To make a bit of practice create a project in a new folder:

```
mkdir jsdoc-tutorial && cd $_
```

Initialize with:

```
npm init -y
```

And install JSDoc:

```
npm i jsdoc --save-dev
```

Now create a new file named table.js with the following code:

```javascript
/**
 * Generates a table head
 * @author Valentino Gagliardi <valentinoDOTvalentinog.com>
 * @param {HTMLTableElement} table - The target HTML table
 * @param {Array} data - The array of cell header names
 * @return {void}
 */
function generateTableHead(table, data) {
  const thead = table.createTHead();
  const row = thead.insertRow();
  for (const i of data) {
    const th = document.createElement("th");
    const text = document.createTextNode(i);
    th.appendChild(text);
    row.appendChild(th);
  }
}
```

Finally run the JSDoc binary against the file:

```
node_modules/jsdoc/jsdoc.js table.js
```

If everything goes well you'll see a new folder named out in your project folder. Inside this folder open up index.html, click on "generateTableHead" and check out the page:

![JSDoc html](https://www.valentinog.com/blog/static/23edd6543ea83882ccbe14080ef7d230/43fbc/jsdoc-tutorial-javascript.png "JSDoc html")

You should see your documentation for generateTableHead formatted in HTML. Neat!

[JSDoc is configurable](https://jsdoc.app/about-configuring-jsdoc.html), and of course you can place it in an NPM script for convenience.

## Frequent objections to code documentation

### *"I don't see any value in adding documentation to my code. Why should I bother?"*

I see where you're coming from! For typed languages like Java or [TypeScript](https://www.valentinog.com/blog/typescript/) adding types to parameters in the documentation would be redundant. Consider the following example in TypeScript:

```javascript
/**
 * Checks if a character is in the control string
 * @param {string} control
 * @param {string} char
 */
function checkChar(control: string, char: string): boolean {
  return control.includes(char);
}
```

It's already evident from the code itself that both parameters are strings. There is no need to repeat types in JSDoc. Here's the suggested approach instead:

```javascript
/**
 * Checks if a character is in the control string
 * @param control
 * @param char
 */
function checkChar(control: string, char: string): boolean {
  return control.includes(char);
}
```

Still looks a bit redundant but JSDoc won't make any harm there.

## JavaScript With JSDoc: wrapping up


Code documentation is often overlooked and considered more or less a waste of time. I suggest you to not follow bad advices. Instead you may want to learn how to document the code in your early days and make an habit from that.

"Great code should speak for itself" most developers will say. And that's true to some extents. Code should be clear, understandable plain english (I wish it was that simple). In reality code is still "machine" language and reading the intentions by simply looking at the source remains a dream.

Writing documentation for your code can help your future self and your colleagues. But it's not all bells and whistles. Documentation can become a burden really quick, getting soon out of sync from the actual code.

In that regard there are a lot of similarities with Test-Driven Development. First, both documentation and testing require great self-discipline. Second, writing them preemptively is really hard when you don't know how the implementation should look like.

On the other hand, it is really that hard to add documentation after finishing a method or class? That's where tools like JSDoc come in handy.

<br>
<br>
<hr>
<small>Gagliardi, V. (2020, February 02). Code documentation for JavaScript with JSDoc: An introduction. Retrieved November 16, 2020, from https://www.valentinog.com/blog/jsdoc/</small>
<br>
<br>

## Daily Journal
### Answer the following questions
 
1. What is Code Documentation? What are some of the ways to document code?

2. What are some benefits of Code Documentation?

3. How important is Code documentation and why?