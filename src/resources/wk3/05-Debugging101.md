# Debugging 101

![](https://bcw.blob.core.windows.net/public//9966077376362650)

As a developer, know that whatever work you will be doing will go hand in hand with debugging. It's neither expected nor common to produce code that has zero bugs or errors, so learning how to debug is a very important skill.

When you run into a bug, ***start off by asking yourself these questions***, and truly giving the answers some thought (because often times answering these questions will help you solve the bug):

1) Why do you say your code isn't working?

    a. What makes you think it is not?

    b. Is there an error message? What does it say?

2) What did you expect your code to do and why/how did you think it would do that?

    a. Did the expected event not occur?

    b. Why did you think it would do that?

    c. What is the last successful action?

3) What did your code do instead and how do you know that is what happened?

    a. What line is throwing the error? (If there is an error message, check there first!)

    b. Do you know what that error means?

After you have answered these questions, make sure you check the following :

1) Check your **syntax** -- do you have all of your closing brackets? Are you missing a comma? Are you using quotes instead of backticks? Are your names consistent -- did you pluralize something or capitalize something when you shouldn't have?

2) Read your error. What kind of error is it?

    a. Do you have a status code from an API (400 bad request, 404 not found)?

    b. Is it an error message indicating a problem with your code? TypeError? Reference error? Syntax error? Cannot read X of undefined?

3) If there is an error, click on the link that in the error message. If it is a status code error, there should be a link to the network tab which will you show you the request you made -- read your request, look for typos!

4) If it's one of the latter errors, there should be a link to the right of the error message that will often tell you what file and what line of code your error can be found. Click on it! It should take you to the source tab and show you where in your code you should look.

5) If there is no error, but what's happening is not doing what you expect it to, put debuggers in your functions and see if they are getting tripped. If they are not, you know you have a connectivity problem, and if they are then step through your function -- maybe it's not doing what you intended it to.

Follow these steps and work through your bug to the best of your ability. Get a clear understanding of what your problem is and don't give up if your first attempt at fixing the bug is not successful. Debugging is like working through a puzzle, and it takes effort and patience. Once you have worked through these steps, if you are still stuck, then ask for help but be prepared to explain what the problem is and what you have tried to do to fix it.