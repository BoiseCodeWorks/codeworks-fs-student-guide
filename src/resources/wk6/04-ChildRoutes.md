# Using Nested Routes in Vue.js

As your Vue.js Single Page Applications (SPAs) become moderately complex, you start to need [Vue Router](https://router.vuejs.org/), and, moreover, nested routes. Nested routes allow for more complex user interfaces with components nested inside each other. Let's build out a relatively simple use case that shows the utility of nested routes in Vue Router.

## Initial Setup

If you don't have it installed already, install the Vue CLI globally by running either:

```
$ npm install -g @vue/cli
```

Or

```
$ yarn global add @vue/cli
```

Now you will be able to run the `vue` command from the command line. Let's create a Vue application called alligator-nest:

```
$ vue create alligator-nest
```

Choose the default preset at the prompt (hit the enter key). After that, run the following command:

```
$ vue add router
```

If prompted choose no for history mode. Then, go ahead and open up the `alligator-nest` directory in your editor of choice.

## Base Code

The following CSS will help us with positioning elements for our UI. Add it as a stylesheet file in the `public/` folder and reference it in `public/index.html`. 

Next, let's make some changes to the default files that `vue-cli` added.

Delete `HelloWorld.vue` from the `src/components` folder and delete `Home.vue` from `src/views/`. Make the following modifications to the HTML markup in `App.vue`.

```html
<template>
  <div id="app">
    <h1>Alligator Nest</h1>
    <a>Travels</a>
    <a>About</a>
    <div></div>
  </div>
</template>
```

## Vue Routing

Let's jump into the `About.vue` in our `/views` folder. replace the existing code with the following:

```html
<template>
  <div>
    <h2>About</h2>
    <p>Alligators were around during the time of the dinosaurs.</p>
  </div>
</template>

<script>
  export default {
    name: 'AboutPage',
  }
</script>
```

Now our `router/index.js` file needs to be setup with the router information an `/about` route. there is some starter code here, go ahead and replace it with this.

```javascript
import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import AboutPage from '../views/About.vue'

const routes = [
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
```
If you run `npm run serve` in the project's root directory you can mouse over to `localhost:8080` in your browser and see a skeleton layout. Those `display: grid` properties are useful! Now we can begin routing.

Finally let's go back to `App.vue` and change the anchor tag for "About" to a `<router-link>` tag with an attribute of `to="/about"`. Then, change the second `div` to a `<router-view>` tag.

> We now have a functional site skeleton with routing handled for the About page.


## Extending the Router
We're focusing on the routing functionality here so we're not going to get too fancy with styling. Even so, the `Travels` page is going to look more elaborate.

To start, create a `TravelPage` the same location as `About`. Reference it in `router/index.js`. For now this page can be only empty `<template>` tags and a simple `<script>` with default exports. 

Then go back to `App.vue` and update the `router-link` to point towards the route named `Travel`

Also create the following two components in the `src/components` folder which will ultimately be nested in `TravelPage.vue`:

First `TravelAmericaPage.vue`

```html
<template>
  <div>
    <p>Alligators can be found in the American states of Louisiana and Florida.</p>
  </div>
</template>

<script>
  export default {
    name: 'TravelAmericaPage'
  }
</script>
```


TravelChinaPage.vue

```html
<template>
  <div>
    <p>Alligators can be found in China's Yangtze River Valley.</p>
  </div>
</template>

<script>
  export default {
    name: 'TravelChinaPage'
  }
</script>

```


### Nested route configuration

Now, let's update both `router/index.js` and `TravelPage.vue` to reference those nested routes using `children`. The `router/index.js` must be updated to have the following definition for the `routes` constant:

```javascript
const routes = [
  {
    path: '/travel', 
    component: TravelPage,
    name: 'Travel',
    children: [
      { path: '/travel/america', component: TravelAmericaPage },
      { path: '/travel/china', component: TravelChinaPage}
    ]
  },
  {
    path: '/about', component: AboutPage
  }
];
```
You will need to import the added pages at the top of `router/index.js`

> Note: While this demo only includes a single nesting, the nesting of children can continue infinitely!

And `TravelPage.vue` can be written in the following way:

TravelPage.vue

```html
<template>
  <div id="travel">
    <h2>Travels</h2>
    <div>
      <router-link to="/travel/america">America</router-link>
      <router-link to="/travel/china">China</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'TravelPage'
  }
</script>
```

Check out `localhost:8080` and you will see that the Travels page has 2 subpages within it! Our URLs update accordingly when you click on either link.

## Conclusion

Hopefully this tutorial was useful for you in seeing how to get started with nested routes!

Other things to keep in mind on the topic --- we could have routes defined with dynamic segments such as `path: '/location/:id'`. Then, on the views for those routes we can reference that id as `this.$route.params`. This is useful when you have more data of a particular type (users, pictures, etc.) that you are wishing to display on your site/app.

<br>
<br>
<hr>
<small>Mohan, P. (2020, May 02). Using Nested Routes in Vue.js. Retrieved November 13, 2020, from https://www.digitalocean.com/community/tutorials/vuejs-nested-routes</small>
<br>
<br>

## Daily Journal
### Answer the following questions
 
1. What are lifecycle hooks?

2. What are lifecycle hooks used for?

3. What are mounting hooks? When might you use them?