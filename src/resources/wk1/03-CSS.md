# CSS

#### CSS stands for Cannot Stop Styling...

> "CSS actually stands for CASCADING STYLE SHEETS"

because that's what you do with CSS, you style your website or application. By style, we mean you set the rules that are applied to the content of your site in order to change the default presentation.

##### Imagine:
Our application serves this data to the client at startup, a collection of 50 photos.
```js
{
  count: 50,
  photos: [{
    _id: '47d2chdxb2s69d',
    userId: 'we8gy74ho48b',
    thumbnail: '/photos/thumb/47d2chdxb2s69d',
    path: 'photos/47d2chdxb2s69d',
    title: 'Super Stellar',
    description: 'Lorem Ipsum...'
  }, {1...}, ..., {49...}],
  prev: null,
  next: '/feed?limit=50&offset=50'
}
```

If we present the data without CSS then we could expect an outdated looking site.

<style>
.computer {
  border: 25px solid grey;
  border-radius: 5%;
}
.screen {
  padding: 5px 20px;
  width: inherit;
  height: inherit;
}
.with {
  background: #e3e3e3
}
.stand {
  height: 80px;
  width: 100px;
  background: grey;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  margin: -5px auto 0;
  box-shadow: -6px 5px black; 
}
.split {
  height: inherit;
  width: 5px;
  background: white;
  margin: auto;
  border-radius: 50%;
}
.base {
  width: 140px;
  border: 3px solid grey;
  margin: auto;
}
.d-flex {
  display: flex;
}
.jc-between {
  justify-content: space-between;
}
.w-75 {
  width: 75%;
}
.w-card {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5%;
  background: linear-gradient(130deg, #7047d7, #7047d7 40%, #3285db);
  border: 10px solid #7047d7;
  border-right: 2px solid #3285db;
  border-bottom-color: #3285db;
  border-top: none;
}
.card-header {
  color: white;
  text-shadow: 0 0 5px black;
}
.card-img-top {
  width:100%;
  border-top-left-radius: calc(.25rem - 1px);          border-top-right-radius: calc(.25rem - 1px);
  border-bottom-right-radius: 5%;
  box-shadow: -5px 5px 5px black;
}
.w-card:hover .card-header {
  font-size: 150%;
}
.w-card:hover .card-img-top {
  box-shadow: -5px 0 5px 5px black; 
}
.underline {
  padding-bottom: 5px;
  border-bottom: 1px solid white;
}
.description {
  width: 500px;
  padding: 20px 5px 0;
  border-left: 2px solid #7047d7;
  margin-left: 5px;
  background: white;
}
.bg-lighter img {
  box-shadow: -3px -3px 5px;
}
.bg-lighter img:hover {
  box-shadow: -3px -3px black, 3px 3px 5px grey;
}
</style>

<div class="computer">
  <div class="screen">
    <div class="without-card">
      <p>Super Stellar</p>
      <img src="https://bcw.blob.core.windows.net/public/images/4727128894924242" width="300px">
       <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." -Anon</p>
    </div>
  <hr />
  <p class="d-flex jc-between w-75">| More photos <span>v</span></p>
  </div>
</div>
<div class="stand">
  <div class="split"></div>
</div>
<div class="base"></div>


### vs 
With CSS
<div class="computer">
  <div class="screen with">
    <div class="d-flex">
      <div class="w-card">
        <p class="card-header">Sup<span class="underline">er St</span>ellar</p>
        <img class="card-img-top" src="https://bcw.blob.core.windows.net/public/images/4727128894924242">
      </div>
      <p class="description">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."<br />&#8195;-Anon</p>
    </div>
  <hr />
  <div class="d-flex jc-between bg-lighter">
    <img onclick="window.changeImg(this)" src="https://bcw.blob.core.windows.net/public/images/p478914857295285" width="75px">
    <img onclick="window.changeImg(this)" src="https://bcw.blob.core.windows.net/public/images/p7209320183441112" width="75px">
    <img onclick="window.changeImg(this)" src="https://bcw.blob.core.windows.net/public/images/3724683811841260" width="75px">
    <img onclick="window.changeImg(this)" src="https://bcw.blob.core.windows.net/public/Atlas/5473640410071727" width="75px">
    <img onclick="window.changeImg(this)" src="https://bcw.blob.core.windows.net/public//1297792852960579" width="75px">
  </div>
  </div>
</div>
<div class="stand">
  <div class="split"></div>
</div>
<div class="base"></div>


## &lt;Link> it up

We'll cover three ways one could incorporate CSS into their project: 

### 1. External Reference

 Note, this is generally best practice.

```html
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>CSS Tricks</title>
  <!-- This is the external reference below -->
  <link rel="stylesheet" href="assets/style.css">
  <!-- -------------------------------------- -->
</head>
<body>...</body>
</html>
```
Rembmer that our browser is reading code within the `index.html` file from top to bottom. None of our other files will have an affect on our site unless we explicity tell the browser to pull in those additional files.<br/>

We utilize the `<link>` tag in order to have the browser read the specificed file, the value of the link tag's `href` attribute. Here we see that we are trying to load into our project a file called `style.css` that's located within a sibling folder to our `index.html`, namely `assets`.<br />

This is generally the best practice because we adhere to the `S` in the `SOLID` principles - `Single Responsibility`. Our index.html is responsible for content and our style.css is responsible for how that content is presented. Our code is now easier to read and maintain resulting in quicker debugging and less bugs overall.

### 2. Internal Style
Note, this way will look familar when we start using the Vue framework and write in `.vue` files. (Further note that Vue is an exception to what's detailed below the code snippet.)

```html
<html lang="en">
<head>...</head>
<body>
  <h1>Hello World</h1>
</body>
  <!-- This is the internal style below -->
<style>
body {
  background: #f60;
}
h1 {
  color: white;
}
</style>
<!-- -------------------------------------- -->
</html>
```
Although this practice works, it's not ideal because we broke the `Single Responsibility` principle. Instead of having all of our css rules organized away in their own file, we utilized the `<style>` tag to house our css rules. It's in between the `<style>` tags that the computer stops interpreting the lines as html and instead interprets them as CSS.<br />

Note, that although we broke a `SOLID` principle, we didn't drastically increase the specificity<b>*</b> of a css rule, which is exactly the issue with using inline style as highlighted below.<br />

<i> <b>*</b> More on css specificity in a moment. </i>

### 3. Inline Styling
Note, don't ever do this. **Seriously**.

```html
<html lang="en">
<head>...</head>
<body>
  <!-- This is the inline style below -->
  <h1 style="color: blue;">Hello World</h1>
  <!-- -------------------------------- -->
</body>
</html>
```
Without diving fully into specificity, know that it's because inline styling increases the specificity of a rule to such an extremely high number that it's next to impossible to override.<br /> 

Additionally, because the rule is applied to the element directly without the use of a selector, there's no way to quickly modify the value of a property and have the change reflected in multiple elements.<b>*</b>

<i> <b>*</b> We'll discuss css rules and their components - selectors, properties, and values - in the next lesson. </i>


<img src="https://bcw.blob.core.windows.net/public/images/2072033894553826" />

## How to write CSS?

### CSS Rules

Let's look at a example template to get an understanding of what the syntax for a css rule looks like

```css
selector {
  property: value;
}
```
and immediately follow it up with a working css rule
```css
body {
  background: #f60;
}
```

### Selector {
The selector is used to target specific elements on the DOM. In the second example we see that the selector was `body`. When a selector is just a name without any punctuation marks or symbols, eg., `.`, `#`, `[]`, then the rule is applied to any elements on the DOM with that `tagName`.

In the above example we see that we are setting the background of our website to be the color orange. This is because the selector is targeting the `<body>` tag and all of our content is rendered within that tag.

**Common Selectors**
<table>
  <tr>
    <th>selector</th>
    <th>elements targeted</th>
  </tr>
  <tr>
    <td>example</td>
    <td>every element with the tagName "example"</td>
  </tr>
  <tr>
    <td>.example</td>
    <td>every element with "example" in their classList</td>
  </tr>
  <tr>
    <td>#example</td>
    <td>the element with the id "example"</td>
  </tr>
  <tr>
    <td>[required]</td>
    <td>every element with the attribute `required` present<br/>- utilizing []'s is commonly combined with additional selectors eg., `.username[required]`</td>
  </tr>
  <tr>
    <td>[href="#"]</td>
    <td>every element with a `href` attribute whose value is "#"</td>
  </tr>
  <tr>
    <td>example:hover</td>
    <td>the element with the tagName "example" that is also at that same time being hovered over<br/>- this is an example of a `pseudo-selector`</td>
  </tr>
  <tr>
    <td>and more...</td>
    <td><a href="https://flukeout.github.io/" target="_blank">css diner</a></td>
  </tr>
</table>

### Property:
Just as selectors are used to specify which elements to target, properties are used to specify how to modify the presentation of the targeted element. In our example above we see that the `background` of the `body` is being modified, namely the background is being set to <span style="color: #f60;">orange</span>. 

 **Common Properties**
<table>
  <tr>
    <th>property</th>
    <th>modification to element's presentation</th>
  </tr>
  <tr>
    <td>color</td>
    <td>font/text color</td>
  </tr>
  <tr>
    <td>background</td>
    <td>background presentation eg., color, gradient, image, etc.<br /> - this property has overloads available determined by number of values provided<br /> <i style="font-size: smaller;"> * more info on overloads in the Value section below</i></td>
  </tr>
  <tr>
    <td>height<br />& width</td>
    <td>these two properties set the size of the element</td>
  </tr>
  <tr>
    <td>margin<br />& padding</td>
    <td>space between edge of element and border, and edge of border and content respectively<br /> - these property have overloads available determined by number of values provided<br /> <i style="font-size: smaller;"> ** more info on overloads in the Value section below</i><br /> <i style="font-size: smaller;"> - study the box model!</i></td>
  </tr>
  <tr>
    <td>display<br />& position</td>
    <td>how and where the element should be rendered and if it is or isn't part of the default render process</td>
  </tr>
  <tr>
    <td>and more...</td>
    <td><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference" target="_blank">common properties</a></td>
  </tr>
</table>

### Value;
After targeting both the element and the property of the element to modify, we use values to specify exactly how to modify the presentation. In the example above we see that the value used was `#f60`.  This is the hexcode value for the color <span style="color: #f60;">orange</span>. In this specific example we could have used other units of color to assign the presentation of the `background`, eg., rgba, name of the color, linear-gradient, etc. Depending on the property your assigning, there might be several different units that could be utilized by the value, eg., `px`, `em`, `rem`, `vh`, `vw`, `%`, etc.<br /><br />

In some cases we might want the element to be modified in the same way as its parent element. In such cases we can use css value keywords, specifically `inherit`. Other keyword examples are `auto`, `initial`, `unset`, `none`.<br /><br />

Some properties, like `background` and `margin` for example, allow for a variable amount of values to be assigned. This is <u>overloading</u>. Let's look at a specific example with `margin:`<br /><br />

<table style="border-left: 2px double lightblue;">
  <tr>
    <td style="border-bottom: 2px solid lightblue;">10px;</td>
    <td>10px of space applied to every side of the element</td>
  </tr>
  <tr>
    <td style="border-bottom: 2px solid lightblue;">10px 5px;</td>
    <td>10px of space applied to the top & bottom and 5px of space applied to the left & right</td>
  </tr>
  <tr>
    <td style="border-bottom: 2px solid lightblue;">10px 3px 5px;</td>
    <td>10px of space applied to the top, 3px applied to the left & right, 5px applied to the bottom</td>
  </tr>
  <tr>
    <td>10px 3px 0px 5px;</td>
    <td>10px of space applied to the top, 3px applied to the right, 0px applied to the bottom, 5px applied to the left</td>
  </tr>
</table>
<br>
**common units for values**
<table>
  <tr>
    <th>modification</th>
    <th>availbe units</th>
  </tr>
  <tr>
    <td>spacial</td>
    <td>px, em, rem, vh, vw, %<br /> - pixels are the least responsive of the units listed</td>
  </tr>
  <tr>
    <td>color</td>
    <td>literal name of the color, hex-code, rgba, linear-gradient</td>
  </tr>
  <tr>
    <td>background</td>
    <td>same units as color plus, url(), blur(), and others</td>
  </tr>
  <tr>
    <td>and more...</td>
    <td><a href="https://www.w3schools.com/cssref/css_units.asp" target="_blank">more units</a></td>
  </tr>
</table>

Now that we know how to write CSS let's learn about specificity to ensure that our rules are, in fact, being applied as we think they should be.

## CSS Specificity

#### one rule to rule them all

<u>Specificity</u> is built into css to determine which rule should be applied in the chance that multiple rules are targeting both the same element and property on that element, but assigning different values.

In order to understand specificity, I hope your good at math. We'll start with this base understanding that y = x2 + C and that interval [a, b] if F(x)... 

Only joking, don't be afraid! You actually only have to be able to pick out the largest number from a set.

Let's look at some css to start understanding specificity!

```css
div {
  background: red;
}

div {
  background: green;
}
```

Let's imagine that our div is simply a square on the page and that the css rules above are assigning the color of our square. Remembering that our code always runs top to bottom, what color will our square be?

<style>
* {
  transition: all ease-in-out .5s;
}
.eg-container {
  display: flex;
  justify-content: center;
}
.one, .two, .three {
  height: 200px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
}
.one:hover .eg-prompt, .two:hover .eg-prompt, .three:hover .eg-prompt {
  opacity: 0;
}
.one:hover {
  background: green;
}
.two:hover {
  background: red;
}
.three:hover {
  background: purple;
}
</style>

<div class="eg-container">
  <div class="one">
    <span class="eg-prompt">Hover to Display Answer</span>
  </div>
</div>
<br />

<h3 style="text-align: center;">Nice Work!</h3>
Now let's imagine that our div also has "box" in its classList. Our css looks like this

```css
.box {
  background: red;
}

div {
  background: green;
}
```

Still remembering that our code always runs top to bottom, what color will our square be now?

<div class="eg-container">
  <div class="two">
    <span class="eg-prompt">Hover to Display Answer</span>
  </div>
</div>
<br />

<h3 style="text-align: center;">Gotcha!</h3>
Our code still ran from top to bottom like it always does and yet the first rule remained in effect throughout the code's execution. This is a case of specificity overruling load order. Our first rule's selector is targeting an element with the class "box", whereas the second rule is targeting an element with the tagName "div". Well, tagName's are only worth 1 point and classes are worth 10, 10 is greater than 1, so the first rule is the one that produces the affect.

Let's list out the values of different selectors:
<table>
  <tr>
    <th>selector</th>
    <th>example</th>
  <th>value</th>
  </tr>
  <tr>
    <td>tagName</td>
    <td>span</td>
    <td>1</td>
  </tr>
  <tr>
    <td>class</td>
    <td>.title</td>
    <td>10</td>
  </tr>
  <tr>
    <td>id</td>
    <td>#app</td>
    <td>100</td>
  </tr>
  <tr>
    <td>attributes</td>
    <td>[required]</td>
    <td>10</td>
  </tr>
  <tr>
    <td>some pseudo-elements</td>
    <td>:after & :before</td>
    <td>1</td>
  </tr>
  <tr>
    <td>other pseudo-elements</td>
    <td>:hover</td>
    <td>10</td>
  </tr>
</table>

Now that we're learned on the specificity value of selectors, let's look at another bit of css code still referrencing our colored square.

```css
div.box {
  background: purple;
}

.box {
  background: red;
}

div {
  background: green;
}
```

What color is our square now?

<div class="eg-container">
  <div class="three">
    <span class="eg-prompt">Hover to Display Answer</span>
  </div>
</div>
<br />

<h3 style="text-align: center;">Tricky!</h3>
We remember that tagName selectors are worth 1 and that class selectors are worth 10, so a selector that includes both a tagName and a class is worth 11! Every individual selector thats combined to target an element adds their value to the cummulative value for the complex selector.<br />

Understanding this what is the specificity value of this selector?

```css
span#title.text-white:hover
```

>     One hundred and twenty one!

Whoa, adding up the values of complex selectors can get difficult real quick. Luckily we have the <a href="https://specificity.keegan.st/" target="_blank">Specificity Calculator</a> to help us!

**!important property and inline-style**

Check out our last code example. We're using the same colored box.

```css
div.box {
  background: purple;
}

.box {
  background: red;
}

div {
  background: green!important;
}
```

Do you know the color of the box now?

<div class="eg-container">
  <div class="one">
    <span class="eg-prompt">Hover to Display Answer</span>
  </div>
</div>
<br />

<h3 style="text-align: center;">Icky!</h3>
"Though technically !important has nothing to do with specificity, it interacts directly with it. When an important rule is used on a style declaration, this declaration overrides any other declarations." - MDN<br />

In like manner inline-style always overwrite any styles in external stylesheets <i>(except !important's)</i>.<br />

Both of these avenues for styling are bad practices and should in almost all cases be avoided. You need to know about them, but that doesn't mean you should use them.

#### Let's end on a bit of comic relief

<div class="eg-container">
  <img height="300px" src="https://bcw.blob.core.windows.net/public/cssUnit/4011155663073649">
</div>
<div style="text-align: center;"><b>Note</b> - This doesn't work and in seriousness don't use them!</div>
<br>
<br>

## Daily Journal

### Answer the following questions
 1. What is a Pseudo-Class and what are some of the most common ones you think you will use

 2. What is Specificity and how might you use it to your benefit?

 3. What problems do you think you could run into if you over-utilized the `!important` feature? 
