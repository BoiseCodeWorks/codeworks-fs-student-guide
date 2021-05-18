# Unit testing --- why?

![Image for post](https://miro.medium.com/max/10194/1*txKfSzUOxpAY5WKaoEGZqw.jpeg)

Photo by [Steve Halama](https://unsplash.com/photos/6LScqcx9O-o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/airplane-chair?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

## A story

I remember the first unit tests I have ever written. It happened on a long 6 hour train ride, with no internet and no USB cable to connect my phone to my laptop. I was developing an Android application and I had some great ideas I wanted to try, but no way to test the code I was writing. At the time, I didn't know what an unit test was, but I had read something about unit testing, so I did what I could. I wrote some code that would execute the methods I wanted to test and log the results.

It wasn't the most elegant way to do it, but for me, at the time it was absolutely revolutionary. A lot of lightbulbs went up in my brain. It was the future! I could make sure my code works without installing the app, logging in and setting up the same conditions over and over again just to reach a certain screen and test a certain condition.

## Why test?

If you think about it, the practice of testing is as old as civilization itself. It was probably discovered the first time someone had to use a measuring stick to make sure he is cutting a branch at the correct length for his mud house.

It has certainly been done ever since mechanical engineering is a thing. A car is made up of thousands of separate components, developed by different companies on different continents, yet they all fit together.

Now, if you were building an airplane and had to do a test flight each time you wanted to test if the tray table is fitted correctly, you would think something is wrong. But sadly, it happens every day in software companies around the world. Let's not even go to rockets, nuclear bombs and so on, where end to end testing is impossible.

Component testing makes sure each piece of a larger system works as intended. Here one can ask what do you actually test for each component? Each different piece of a system has different requirements. A bolt has to screw and unscrew correctly into its nut, a button has to withstand 10.000 presses, a hand brake must be able to exert a certain amount of force on the wheels etc. Intuitively, we know it's easier to test a bolt than a hand brake. Intuition tells us that more complex components are more difficult to test. And more importantly, they are more difficult to test exhaustively. It's much harder to cover everything that what can go wrong in a hand brake versus can go wrong in a bolt.

## What is a unit test?

But enough with the analogies. Let's get back to software engineering.

There are many definitions for what a unit test is, but most agree on one thing: that they are supposed to test the smallest *unit of code*. The definition is vague out of necessity: it's up to the developer to decide what the unit of code is.

In object oriented languages, it's usually a (public) method, but it can also be a class or a couple of classes together. A good rule of thumb is that a unit test should be as simple as possible.

> Everything should be made as simple as possible, but not simpler --- Albert Einstein

Drawing from the mechanical engineering analogy above, each unit test should be focused on a single behavior. If you're testing the `HandBrake` class, you should verify that when the `pull()` method is called, the `lock()` method of the two instances of `Wheel` class is called. Another test should verify that when you call the `release()` method, the two `Wheel` objects are `unlock()`ed, and so on.

You may notice that we don't verify the internal details of the hand brake: we don't verify the tension in the cable, or the position of the brake lever. We are only *testing the interface*. We are only verifying the details seen by an user of the `Handbrake` class. This is because of a very simple reason: the internal implementation of the `Handbrake` can change, but as long as the expected behavior doesn't (locking the wheels), the client is happy. Speaking in programming terms, `Handbrake` may be an interface or an abstract class, and the actual implementation may be an `ElectricHandbrake` or a `HydraulicHandbrake` and so on.

You may also notice we have two separate tests for the two methods. Nothing is stopping us from testing both methods in a single test. But what happens if one of the tested methods fails, and the other one doesn't? The test will fail, but we don't know which method caused it to fail. That's why we prefer *focused tests* (ideally a single assertion per test).

# Benefits of unit testing

Usually, if you try to introduce unit testing in a team which is already doing manual testing, you have to justify first to management who will (rightly) ask why they should spend additional time and money on testing. Isn't QA testing good enough? Do we need more testers?

Occasionally, you encounter some opposition from developers themselves. The reasons vary from fear of getting out of the comfort zone to simply not getting the point of unit testing.

In my personal experience, I found that instead of convincing the management, it's more effective to just start unit testing within the team. Once people get a taste of it, they will continue doing it. And the benefits will shortly become obvious to management.

## Peace of mind

As programmers, we are trained to worry. It becomes second nature to think about what might go wrong. And this tendency to overthink slips from work into our personal lives.

Unit tests help to eliminate worry. A well-tested module is something you can trust. It tells you "everything is going to be all right, trust me". It's an island of stability in a messy codebase, and it's one less thing to worry when making changes to the system.

## Confidence

When you make a change, how do you know it works? The answer is, of course, *testing*. As developers, we do some manual testing before sending the code to the QA team. But how do you know you covered all the edge cases? Leaving it to the QA team to discover unforeseen problems and suggest solutions is extremely unprofessional.

Unit tests force you to think about edge cases more than anything. When you're implementing a feature, you're usually focusing on the happy path, getting to the desired result. But when you add unit testing to the mix, you suddenly start to see things you wouldn't otherwise consider. What happens if that method parameter is null? Or empty? Or in an unexpected format?

Even when the QA team reports an issue with your tested module, you can be confident about what couldn't be causing it. Additionally, fixing the issue and including unit tests for it, gives you confidence it's not going to pop up again later. Even on a messy codebase, having a good suite of tests acts as a harness which protects the code from unintended side effects of a change.

## Efficiency

And speaking of the QA team, even if they have a comprehensive suite of tests, they are slow. Testing the entire system can take days or weeks. And by definition their tests are end-to-end, so they cannot test a single module in isolation.

The development team should be the first line of defense against bugs. They are in the best position to test a new, or modified module, to add unit tests for specific scenarios which sometimes are immensely difficult for the QA team to simulate. And most of all, the entire unit test suite runs in minutes! Unit tests are supposed to be run before and after each change, while a full regression test is done by the QA team only before a release or after integrating a new major feature.

## Documentation

Code speaks louder than comments. Always. I have already [addressed](https://hackernoon.com/where-i-rant-against-code-comments-5e1ca65f6fc2) this issue but, in short, my opinion is that comments should be written only when it's not possible to make the code's intent obvious. The problem with comments is that many times they are not updated at the same time the code is changed. That's because the comments can be safely ignored by the developers (and sometimes they are not even seen, because some IDEs collapse the comments).

On the other hand, when the code changes, existing unit tests have to be updated as well, or new ones written. Either way, anyone should be able to understand what a class does just by looking at the unit tests. Of course, that assumes well written unit tests.

A well written unit test should respect some standards, like [Arrange, Act, Assert](http://wiki.c2.com/?ArrangeActAssert) or [Given, When, Then](https://martinfowler.com/bliki/GivenWhenThen.html). Ideally, a test should not have more than three lines of code. It should have a clear name that expresses the intent of the test. And unit tests should be considered first-class citizens in the codebase. The test code should receive the same care as the production code.

## Better design

Going back to mechanical engineering, let's imagine a company which designs and produces hand brakes for various car models. Testing the hand brake doesn't require it to be installed in a real car, but probably mounted on a test table, connected to all sort of testing instruments. For example, the force exerted by the break pads is measured by a pressure gauge, and maybe there is a robotic arm that pulls the lever. This is crucial for the engineers working on the hand brake design. Without the ability to measure and precisely control the hand brake system, they would work blindly, hoping it just works. Moreover, if there was no way to test the hand brake separately, and the company had to buy each supported car model, install the half-finished handbrake in each car, test it, take it out and modify it, repeating the cycle over and over again, they would go bankrupt.

Unfortunately, in software engineering, we are not in the habit of testing components in isolation. Because the cost of building the entire system is usually low (waiting a few minutes for the code to compile), we don't have a strong incentive to spend the additional time and effort required to run a module by itself, so we fail to consider all the ways in which a module might fail. And that's how we get the infamous "[it works on my machine](http://donthitsave.com/comic/2016/07/15/it-works-on-my-computer)".

Unit tests are an invaluable tool for improving the architecture of a system. When writing unit tests is hard because of too many dependencies to be mocked, it's a sign the module has too many responsibilities. If you find yourself updating lots of tests in order to accommodate a small change in an unrelated class, it may be a symptom of too tight coupling between modules. If it's very hard or impossible to mock some external dependencies (network, local filesystem etc.) you should consider isolating your business logic from the external systems (use a wrapper or [the Humble Object pattern](https://ieftimov.com/tdd-humble-object)).

These are some examples of improvements brought by unit tests on an existing codebase. But the benefits are even greater when you test the code as you build it. Testing your module in isolation encourages you to [depend on abstractions](https://en.wikipedia.org/wiki/Dependency_inversion_principle), use well-defined interfaces and favor loose-coupling between modules.

Being able to test modules separately means the team is able to develop the modules in parallel. Loose coupling between modules makes it easy to replace, upgrade or remove a feature. A good abstraction layer over an external dependency, like an API or a database, makes migration from a third party provider to an in-house solution seamless.

Unit tests also help you identify ideas that were not well-thought. When you find that testing a certain piece of logic becomes difficult, it may be a good time to refactor it.

# Future growth

I compared software engineering to mechanical engineering to make a few points about testable components. But most of the time software engineering is more like gardening than engineering. Unlike a car or a house, which once built stay pretty much the same for years, a software system evolves constantly. Some parts grow, others shrink, and some parts have to be pruned. From this point of view, unit tests are like a scaffold which guides the growth of the code.

<br>
<br>
<hr>
<small>Dascalu, C. (2018, April 27). Unit testing - why? Retrieved November 16, 2020, from https://medium.com/@corneliu/unit-testing-why-3490d08e89f2</small>
<br>
<br>

## Daily Journal
### Answer the following questions
 
1. What is Software Development Testing?

2. What are the benefits of Testing in software development?

3. What are some potential drawbacks of Testing in software development?