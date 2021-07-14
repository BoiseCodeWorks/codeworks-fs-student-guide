# Understanding Component-Based Architecture

When Facebook released React.js in 2013 it redefined the way in which Front End Developers could build user interfaces. React.js, a JavaScript library, introduced a concept called Component-Based-Architecture, a method for encapsulating individual pieces of a larger user interface (aka components) into self-sustaining, independent micro-systems. Here I'll break down what Component-Based Architecture (CBA) is and how it differs from the more traditional Model-View-Controller (MVC) architecture present in many server-side and client-side frameworks.

## What is a Component?

You can think of a component as a small feature that makes up a piece of the user interface. If I were to describe a component within the scope of Facebook's UI, A chat window would be a component, a comment feed would be another component, and a constantly updating friend list would represent yet another component.

Each of these components exist within the same space, yet interact independently from one another. Components have their own structure, their own methods and their own APIs. Components are also reusable and can be "pasted" into interfaces at will. The independent nature of components allows for developers to create a UI with many different moving parts.

## Why The Need for Components?

Components build off of the concept of AJAX requests, in which calls to the server are made directly from the client-side, allowing for the DOM to be dynamically updated without the need of a page refresh. Components each have their own interfaces that can make calls to the server and update their interfaces. Because components are independent, one component can refresh without affecting other components or the UI as a whole.

For Facebook, this allows them to maximize the functionality and performance of their newsfeed. React.js, specifically, handles components in an extremely performant way. React.js uses something called a virtual DOM which uses a "diffing" algorithm to detect changes to a component and only render those changes, as opposed to re-rendering the entire component.

CBA also requires that all methods and APIs pertaining to a single component exist within that component's structure. To understanding it better: a component is comprised of a JavaScript class (a new feature in ES2015). Whereas MVC separates structure, helper methods, and routing into different levels of the application, components contain all of those features within a single class. This means that developers don't have to spend much time trying to find which functions pertain to which parts of an application's UI.

Lastly, components are reusable. This is a major selling point for applications that reuse features, but still want different copies of those features to act independently. In the case of Facebook, You can have multiple chat windows that resemble one another, but still work independently.

## How CBA Differs From MVC

While MVC splits responsibilities *horizontally,*CBA splits them *vertically*. What does this mean?

Essentially, if you're using a client-side MVC framework like Ember.js, and to a lesser extent, Angular, you have templates that present the UI, routes that determine which templates to render, and services that define helper functions. Even if a template has routes and associated methods, all of these exist at different levels of an application's architecture.

In the case of CBA, responsibility is split on a component-by-component basis. This means that the design, logic, and helper methods exist all within the same level of the architecture (generally the view). As aforementioned, everything that pertains to a particular component is defined within that component's class.

## Potential Issues with CBA

While CBA encourages reusability and single-responsibility, it can often lead to bloated and polluted views. The purpose of MVC is ensure that each level of an application has it's own separate responsibility, while the purpose of CBA is the encapsulate all of those responsibilities within one space. When using many components, there is the possibility that readability might actually become degraded.

One of CBA's most glaring issues is a propensity towards over-engineering. In the case of React.js, the library was created with the intention of being used in applications wherever needed. Essentially, you can "sprinkle" React components across several different parts of your UI. However, many developers treat React.js as a framework and engineer every. single. aspect of their UI as a component. This is unnecessary and self-indulgent. CBA should only be use in specific instances and does not need to dictate the entire structure of your application.

## The Future of CBA

You don't need me to tell you that CBA is gaining a lot of traction in the development community. As React.js popularizes this concept, both the Ember.js and Angular2 development teams are making the effort to incorporate components as a more important feature within their respective frameworks. CBA represents a type of architecture that encourages freedom and a respite from the rigidity that traditional MVC frameworks have made commonplace. For developers that want more control over their applications and a greater range of customization, components just might be the answer.

<br>
<br>
<hr>
<small>Shapiro, D. (2016, June 16). Understanding Component-Based Architecture. Retrieved November 11, 2020, from https://medium.com/@dan.shapiro1210/understanding-component-based-architecture-3ff48ec0c238</small>
<br>
<br>

## Daily Journal
### Answer the following questions
 
1. What is Component based architecture?

2. What are some benefits of Component based architecture?

3. What are some drawbacks to Component based architecture?

### Complete Week 6 Quiz