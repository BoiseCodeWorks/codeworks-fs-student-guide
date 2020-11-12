# How to Use Props in Vue: The Ultimate Guide (with Examples)

You keep reading about "props".

You've probably been using them too (even if you didn't realize it).

But maybe you aren't completely sure about what they are.

Or how to use them properly and get the most out of them.

I was once in your position, not entirely sure of what I was doing and feeling like I was drowning. But I've learned *a lot* over the years, and now I want to pass that on to you.

By the time you're finished reading this guide, you'll know everything you need to know about props in order to be a super productive Vue developer.

*And when your co-workers ask you how you know so much, just smile and tell them you're awesome* 😉


In this guide we'll cover the most important things about props:

-   What are props?
-   Two main characteristics of props
-   How to pass props to other components
-   Adding prop types
-   Making props required
-   Setting default values

Plus many more things throughout!

So, let's get started, shall we?

## What are props?

Props are how we pass variables and other information around between different components. This is similar to how in Javascript we can pass variables into functions as arguments:
```javascript
const myMessage = "I'm a string";

function addExclamation(message) {
  return message + '!';
}
console.log(addExclamation(myMessage)); // I'm a string!
```

Here we pass the variable `myMessage` into the function as the argument `message`. Inside the function we can access that value as `message`.

Props work in a very similar way to this. We pass props to another component, and that component can then use that value.

But there are a couple rules you need to know about first.

## Two main characteristics of Vue props


There are two specific things to keep in mind when dealing with props:

1.  Props are passed down the component tree to descendents (not up)
2.  Props are read-only and cannot be modified

Vue uses one way data flow, meaning that data can only flow from a parent into a child component. You cannot pass data from a child to a parent.

And because that parent component "owns" that value it passed down, the child can't modify it. If only one component is allowed to change it, then it's easier to track down bugs since we know exactly where to look.

If the reasoning here isn't super clear that's okay. You'll understand how this works as you use Vue more and more.

Just make sure you don't violate those two rules and you'll be golden.

Let's take a look at how we can pass props from one component to another.

## Passing props to other components

If you want to pass a value from your component into a child component, it's exactly like adding an HTML attribute:
```html
<template>
  <Camera
	name="Sony A7RIV"
	img="../sony-a7riv.jpg"
  />
</template>
```
Looks like regular HTML, right? Not too scary.

The `Camera` component will then use the `name` and `img` props to render itself to the page. It might render something like this:
```html
<template>
  <div class="camera">
	<h2 class="camera__name">{{ name }}</h2>
	<img class="camera__image" src="img" />
  </div>
</template>
```
Here we render the `name` prop into the `h2` tag, and use the `img` prop to set the `src` attribute on the `img` tag.

But what if we have this information stored in a variable somewhere?

To do that we need to use a slightly different syntax, since instead of passing a string we want to use a Javascript expression:
```html
<template>
  <Camera
	v-bind:name="cameraName"
	v-bind:img="cameraImage"
  />
</template>
```
The line `v-bind:name="cameraName"` tells Vue to bind the Javascript expression `cameraName` to the prop `name`. A Javascript expression is any snippet of Javascript. It could be a variable name like we have here, or something more complicated.

For example, we could use a logical `OR` to use a default if we don't have an image for the camera:
```html
<template>
  <Camera
	v-bind:name="cameraName"
	v-bind:img="cameraImage || '../no-camera-found.jpg'"
  />
</template>
```
More commonly, we use the shorthand for `v-bind` which is just `:` and reduces clutter in the code:
```html
<template>
  <Camera
	:name="cameraName"
	:img="cameraImage || '../no-camera-found.jpg'"
  />
</template>
```
Because you can put in any arbitrary piece of Javascript, you can do a *lot* of nifty little things, such as [dynamically adding a class name](https://michaelnthiessen.com/dynamically-add-class-name), or [implementing a hover](https://michaelnthiessen.com/hover-in-vue).

## Adding in our Props

We're not quite there yet though.

Before this code will actually work, we need to get the `Camera` component to actually listen to the props. By default it will just ignore them.

To do this we have to add a `props` section to our component definition:
```javascript
export default {
  name: 'Camera',
  props: ['name', 'img'],
}
```
This is the bare minimum to get things working, but it's not recommended you do this. Instead, you should specify the *type* of the prop as well, using an object:
```javascript
export default {
  name: 'Camera',
  props: {
  	name: {
      type: String,
  	},
  	img: {
      type: String,
  	}
  }
}
```
By switching from an array to an object, we can specify more details of our props, like the type. We can specify other things too, but we'll get to that in a bit.

Why do we want to add types to our props?

In Vue, props can be many different things. They can be:

-   Strings
-   Numbers
-   Boolean (true or false)
-   Arrays
-   Objects

By adding in prop types like this we can set expectations for what we'll receive. If we set our camera's `name` prop to `true` it won't work properly, so Vue will warn us that we're using it wrong.

We'll add a rating to our `Camera` component so we can see what using a number looks like. First we add it to the prop types:
```javascript
export default {
  name: 'Camera',
  props: {
  	name: {
      type: String,
  	},
  	img: {
      type: String,
  	},
  	rating: {
      type: Number,
  	},
  }
}
```
Then we'll also update our template so we display the rating on the page:
```html
<template>
  <div class="camera">
	<h2 class="camera__name">{{ name }}</h2>
	<span class="camera__rating">{{ rating }}</span>
	<img class="camera__image" src="img" />
  </div>
</template>
```
All we need to do is specify the prop name, no `this` is required. In a Vue template everything that can be accessed off of `this` is automatically included.

Now we can pass in a number as a prop:
```html
<template>
  <Camera
	name="Sony A7RIV"
	img="../sony-a7riv.jpg"
	:rating="9"
  />
</template>
```
Notice how we used the `v-bind` shorthand for this one. If we didn't do this it would get passed in as a String, which is the incorrect type.

Passing in an array or object or any other type works in the same way, using `v-bind` or it's shorthand.

## Required props

Not all props are created equal.

Some of them are *necessary* for the component to work correctly.

Others are just extras, giving additional functionality if you need it.

For our `Camera` component, we definitely need a `name`, otherwise it doesn't make any sense. But we don't *need* an image, and we don't really *need* a rating either.

We can specify which props are required and which ones aren't in our prop definition:
```javascript
export default {
  name: 'Camera',
  props: {
  	name: {
      type: String,
      required: true,
  	},
  	img: {
      type: String,
  	},
  	rating: {
      type: Number,
  	},
  }
}
```
Here we set our `name` prop to be required by adding `required: true` to its prop definition.

By default props are *not* required, so we don't need to touch the other ones. We could add `required: false` if we wanted to.

## Default Values

Many times we'll want to set a default value on our optional props, since they may not be provided each time.

Earlier we saw how to add a default image if we didn't have one for our camera, but this is a better way:
```javascript
export default {
  name: 'Camera',
  props: {
  	name: {
      type: String,
      required: true,
  	},
  	img: {
      type: String,
      default: '../no-camerage-found.jpg',
  	},
  	rating: {
      type: Number,
  	},
  }
}
```
Perfect!

Instead of cluttering up our template, we put the default value right alongside all of the other information about the `img` prop.

While we're at it, we should specify a default for our `rating` prop as well. Right now if it isn't set we'll just get `undefined`, which could cause some issues for us:
```javascript
export default {
  name: 'Camera',
  props: {
  	name: {
      type: String,
      required: true,
  	},
  	img: {
      type: String,
      default: '../no-camerage-found.jpg',
  	},
  	rating: {
      type: Number,
      default: 0,
  	},
  }
}
```
Now if the camera hasn't been rated, we'll get a `0` displayed instead of `undefined`.

Specifying types, adding defaults, and marking props as required are only a couple of the things you can do with prop types. I wrote an article with [some killer tips](https://michaelnthiessen.com/unlock-full-potential-prop-types) on getting the most out of them.

## Using props outside of the template

While being able to use props inside of your template is great, the real power comes from using them in your methods, computed props, and other Javascript used in your component.

In our templates we saw that we just needed the prop name, like this: `{{ rating }}`. However, everywhere else in our Vue component we'll need to access our props using `this.rating`.

Let's refactor the app so that we use a standard URL structure for our images. This way we don't have to pass it to the `Camera` component each time, and we can just figure it out from the name.

We'll use this structure: `./images/cameras/${cameraName}.jpg`

So if the camera is the `Sony A6400`, the URL will become `./images/cameras/Sony%20A6400.jpg`. The `%20` is from encoding the space character so we can use it in a URL.

First we'll remove the `img` prop that we no longer need:
```javascript
export default {
  name: 'Camera',
  props: {
  	name: {
      type: String,
      required: true,
  	},
  	rating: {
      type: Number,
      default: 0,
  	},
  }
}
```
Then we'll add a computed property that will generate the image URL for us:
```javascript
export default {
  name: 'Camera',
  props: {
  	name: {
      type: String,
      required: true,
  	},
  	rating: {
      type: Number,
      default: 0,
  	},
  },
  computed: {
    img() {
      return `./images/cameras/${encodeURIComponent(this.name)}.jpg`;
    }
  }
}
```
Not all characters can be used in URLs, so `encodeURIComponent` will convert those for us.

Because we can access this computed prop in the same way as regular props, we don't need to change our template at all, and it can stay as we had it before:
```html
<template>
  <div class="camera">
    <h2 class="camera__name">{{ name }}</h2>
    <span class="camera__rating">{{ rating }}</span>
    <img class="camera__image" src="img" />
  </div>
</template>
```
In this way you can use the component's props in:

-   Watchers
-   Lifecycle hooks
-   Methods
-   Computed props

And anywhere else in the component definition!

## Conclusion

By now you should know everything you need to know about props in order to be a highly productive Vue developer.

However, there are always more things to learn. Vue (and software development in general) is a never ending learning process.

In order to keep learning more about Vue, and to learn things as I figure them out myself, join my email list below for weekly updates!

<br>
<br>
<hr>
<small>Thiessen, M. (2019, July). How to Use Props in Vue: The Ultimate Guide (with Examples). Retrieved November 12, 2020, from https://michaelnthiessen.com/vue-props-ultimate-guide/</small>
<br>