# Chrome Developer Tools

<a href="https://developers.google.com/web/tools/chrome-devtools/" target="_blank">Official Docs</a>

Many web browsers have built in developer tools available for software developers to use when creating web pages and apps. Developer tools are built to make designing web pages easier and debugging code more efficient. You can use them to directly manipulate the design of your webpage, debug  code by stepping through one line at a time, view error messages, view network requests, and much more. This unit will focus specifically on the Chrome developer tools (rather than ones found in alternative browsers, like FireFox or Safari) so if you are following along, be sure to use Chrome.

## Opening Chrome Developer Tools

There are multiple ways to open your Chrome DevTools:

*	Right click in the browser and click on the “Inspect” option
*	To open whatever panel you used last<br>
  Mac users: F12, Command + Option + i<br>
  Windows users: F12, Control + Shift + i<br>
*	To open the Console panel	
  Mac users: Command + Option + j<br>
  Windows users: Control + Shift + j<br>
*	To open the Elements panel<br>
Mac users: Command + Option + c<br>
Windows users: Control + Shift + c<br>

Any of these options will open the DevTools in the Elements tab (we’ll talk more about the Elements tab later). 

![dev tools](https://bcw.blob.core.windows.net/public//8176632167022091)

Once you have your DevTools open, you can navigate to the top right of the window and select the 3 dots for options on where you would like the window to dock – you can have it on the left, right, or bottom of your screen; you could also remove your tools to a separate window entirely. If you look in the image below, you will notice that the right icon is highlighted blue; this is the option I have selected, which places my DevTools window to the right side of my screen. Feel free to choose whichever option works best for you.

![docking options](https://bcw.blob.core.windows.net/public//5800350199349)

## The Tabs

Now that you have your DevTools open, you'll notice that there are multiple tabs at the top of the window:

![tabs](https://bcw.blob.core.windows.net/public//8915776849206207)

Out of these tabs, the ones you should become familiar with first are:

* The Elements tab, which allows you to directly look at and manipulate the HTML elements and CSS on the DOM -- what you change in this tab will be immediately and directly updated in the page you are viewing. Feel free to test things here, they won't be saved upon refresh unless you also modify them in your code.
* The Console tab, which allows you to run JavaScript, view errors, and log messages.
* The Sources tab, which allows you to view all of your source files, add breakpoints in your code, and debug your code line by line.
* The Network tab, which allows you to view your network requests in detail, as well as the   responses that you've recieved back.
* The Application tab, which allows you to view your Local Storage and the cookies you have saved to your computer. It also provides you with the ability to delete cookies among other things.

Let's take some time to dive into each one of these tabs in closer detail.

## The Elements Tab

Elements refers to the elements in the Document Object Model (DOM). While you’re in the elements tab you can view all of the HTML and CSS that makes up the page. You can also directly manipulate and edit elements on the page from this tab and immediately see what it will look like.

From the Elements tab, you can navigate through the page's HTML and view each element in detail. You can view any applied classes and ID's, as well as any events being used. Additionally, you can view the specific properties and values being applied via CSS.


![viewing class](https://bcw.blob.core.windows.net/public//5915800928376258)



You can collapse or open parent elements to either hide or view the child elements within each tag. By directly clicking on an element, you are able to edit it – you can remove classes, add classes, change content… etc. 

When you hover on an element with your cursor, the corresponding part of the webpage will appear highlighted. You might notice that the highlighted portions incorporates different colors – green, yellow, orange, and/or blue. 
* The blue correlates to the content of the element
* The green correlates to the padding (the portion between the border of the element and the content)
* The yellow correlates to the actual boarder of the element
* And the orange correlates to the margin (the space between the border of the element and nearby elements).



![hovering on elements](https://bcw.blob.core.windows.net/public//4502650492294808)



You can also manipulate the CSS that is currently being applied to the DOM in several different ways:
*	You can check and uncheck boxes in each CSS class to see how the design changes when something is applied or removed.
*	You can directly click on CSS properties and alter their values
*	You can add new properties and values to an already existing class
*	You can also create your own class on the fly using the element.style{ } class.



![direct styling](https://bcw.blob.core.windows.net/public//2284276029075414)



Manipulating your design through the use of the Chrome DevTools can be an extremely effective and efficient way to adjust your page. For instance, if you’re working with percentages, you can use your up and down arrows to adjust the percentage one percent at a time and see the immediate effect it has on your layout; you can then copy and paste the CSS into your style sheet knowing it works exactly how you want it to. You can apply and remove built in Bootstrap classes or view the specific properties and values that are being applied to see if they are overriding any of your personal CSS. This is preferable to altering your CSS in your style sheet, then saving, then refreshing your page, then updating your style sheet again… etc.

How neat is that?
	
## Mobile View

To the left of the Elements tab are two icons that can be helpful to use in tandem with the Elements tab. The first one that is immediately left of the Elements tab allows you to change the size of your view to that of a mobile screen so that you can simulate what it will look like on a user's phone.



![mobile view icon](https://bcw.blob.core.windows.net/public//6220702714584796)

Once you enter mobile view, an additional menu bar will appear above the mobile view to the left which will allow you to choose the type of phone you would like to simulate the view on, as well as whether the phone is oriented horizontally or vertically. 


![phone sizing](https://bcw.blob.core.windows.net/public//5829121870587934)

## Element Selector

The other option that is the second icon from the left of the Elements tab is the one that looks like a cursor in a box. 

  ![element selector](https://bcw.blob.core.windows.net/public//9828335037565174)

When you select this option, it allows you to hover on the page and directly select an element you would like to view in greater detail in the Elements tab. It’s almost the reverse of hovering on an element in the Element’s tab – which when you do that, it highlights it in the page; when you use this tool and you hover on the page, it highlights it in the Elements tab. This is helpful because it allows you to directly select the item on the page you want to inspect.

## Color Selector

The color selector tool (also known as the color picker tool) allows you to select a color on a page and get the exact HEX, RGBA, or HSLA value. You can access it by selecting any color box in the Styles tab. Once you activate it and you move the cursor on the page, you will see a round, magnified view near your cursor – this magnification actually allows you to choose the color down to the pixel, for greater precision. 

![color picker](https://bcw.blob.core.windows.net/public//6087065581430928)

## The Console

If you click on the Console tab in your DevTools window, you'll have access to a built in REPL - a "Read Evaluate Print Loop" - known as the Console. The Console is an extremely helpful tool, you can use it to:

* Evaluate conditonal statements
* Read printed messages or errors 
* View data from your JavaScript files 
* Test functions

![examples of using the console](https://bcw.blob.core.windows.net/public//7364039319555906)

If you have a lot of code, errors, or printed messages in your console, you can clear the window through one of two ways: 1. invoke the <b>clear()</b> method (this is a built in console method, if you want to call this from your code you would type console.clear()), or 2. click on the diaganol strike through icon on the top left of your DevTools window (to the left of the word 'top', underneath the mobile view icon)


## Printing to the Console

Printing to the Console can be particularly helpful when debugging. Using print statements from within your project can help you see when and where something is happening, as well as the value of a variable at the time the `console.log()` method is called. 

The Console is also where errors are printed. When you recieve an error from an API that appears in pink and red, that is the result of a method called `console.error('error.message')`. 

Other types of errors will also print to your console. For instance, if you have <b>syntax errors</b> <span style="color:red">("unexpected token")</span>, <b>reference errors</b> (something you're referencing may be *'undefined'* at time of reference), or <b>type errors</b> (treating one data type as another - like calling an array method on an object, or treating a number as a string), your console will notify you that something is incorrect and needs your attention. 

To the right of your error will be a clickable link. If it's an error status code that you recieved from an API then the link will direct you to the *Network tab*. If your error was thrown due to a problem within your code, then the link will have the name of the file and the line of code where your error is; if you click on the link it will direct you to the *Sources tab*. 

![error example](https://bcw.blob.core.windows.net/public//9736952394965752)

Before we look at the Network tab, let's discuss the Sources tab.

## The Sources Tab 

The Sources tab is incredibly helpful for:
* Viewing the folders and files in your project
* Creating code snippets
* Adding breakpoints to JavaScript and debugging code
* Manipulating JavaScript and CSS 

In this section, we are primarily going to discuss how to debug using the source tab. For more information on the Sources tab, please read the <a href="https://developers.google.com/web/tools/chrome-devtools/sources" target="_blank">Official Docs</a> or walk through this hands on <a href="https://developers.google.com/web/tools/chrome-devtools/javascript/" target="_blank"> Tutorial</a>.

## Debugging and Break Points

If you click on the source tab you will see a file directory in the left window pane displaying the folders and files in your project. This is the <b>File Navigator</b> pane. If you click on a file, it will be displayed in the center pane. 

The center pane is your <b>Code Editor</b>.  You can directly edit and add to your code in the code editor pane to see the effects in real time on your application. 

The right pane is the <b>JavaScript Debugging</b> pane, commonly referred to as the 'Debugger'. In this pane you can view your call stack, the breakpoints you've added, or even add break points based off of specific events. 

![source panes](https://bcw.blob.core.windows.net/public//1760053650440149)

#### Break Points

Break Points are extremely helpful for debugging your code. They work similarly to debuggers, which will pause your code on that line when the function runs. To add a break point to your code, navigate to the sources tab in your dev tools and click on the line number of your code in the <b>Code Editor</b> pane. You should see the color change from white to light blue where you clicked, indicating that there is a break point. Additionally, in the <b>JavaScript Debugging</b> pane you should now see that line registered as a breakpoint. 

![Line Breaks](https://bcw.blob.core.windows.net/public//2470001847554173)

<i><b>Important Side Note: </b></i> If you create a breakpoint in the Sources tab, it will persist until you remove it. Refreshing the page or closing and reopening the browser will not remove the breakpoint. 

After you insert a breakpoint, you can then use built in tools to step into functions (down arrow), step over functions (arching arrow), step out of functions (up arrow), or play through the breakpoint (sideways arrow). These tools allow you to go step by step through your code so that you can view values in real time and determine where the break down of communication is happening in your code.

![Debugging tools](https://bcw.blob.core.windows.net/public//2827821127259284)

You can also use these tools to the same effect if you are using the 'debugger' key word in your code. 

As you step through your code, if you hover over variable names the value of that variable at that time will appear. If your code is paused on a line of code where the value is being assigned, it may appear as undefined. If you step down to the next line and then hover, you will be able to view the value. This is because when it is paused on the line that is assigning the value, the value has not yet been assigned.

These tools are helpful when you throw an error related to your code (as opposed to a network error), however they are also helpful for when you are not throwing an error but your code is not behaving as intended. 

By starting at the first function called in a line of functions, and stepping through each one, you should be able to narrow down where the bug is hiding much faster than the trial and error method of adjusting your code and then testing. 

In the event that you are throwing an error that is related to a network request the <b>Network Tab</b> will be more useful for determining where the breakdown is occurring.

## The Network Tab
The Network tab offers a lot of tools and information to help developers determine what network requests are ocurring, details about the network requests, and the speed of network requests. For the purpose of this unit, we are going to focus on how to use the Network tab to trouble shoot network requests to APIs, however there is more to the Network tab than just this. If you are interested in exploring these other tools, check out <a href="https://developers.google.com/web/tools/chrome-devtools/network/" target="_blank"> this</a> resource.

### The Basics
The main view of the Network tab will display a log of all of the network requests that have occurred in chronological order. There are several columns at the top, including a <b>Name</b> column and a <b>Status</b> column.

![Network Tab](https://bcw.blob.core.windows.net/public//2289248990260837)

Any network requests that failed will be displayed in red text. If you click on a network request it will take you to a new view with four tabs:
* Headers
* Previews
* Response
* Timing

The Headers tab will display information regarding the url path that the network request was sent to, the type of request that was sent (i.e., Get, Put, Post, Delete), and the request payload (the object that was sent to the API, if there was one).

![Headers](https://bcw.blob.core.windows.net/public//190527365290060)

If you select the preview tab, you will be able to view a basic rendering of the object returned. This tab is extremely helpful for viewing error codes and objects returned by the API because they are formatted for easier reading.

The Response tab will show the object returned by the API.

## Guide To TroubleShooting Failed Network Requests

When a network request fails, the first step is to read the error code. That should give you an idea of where the problem lies - if it is an error in the 400 range, then the problem lies in the request coming from the front end. If the request is in the 500 range, then the error is originating with the API. 

If the error is originating from the front end, be sure to view the Headers tab so you can see what the request URL is. Are you trying to pass an ID that is coming up undefined? Have you mispelled anything in the route? Are you sending the appropriate object?

If the request was successful, but your code is still not behaving correctly, be sure to view the response tab and analyze the object you recieved. Are you accesing properties on it correctly? Did it return what you expected it to return?

## The Take-Away

The value of these tools should be self evident. The ability to debug code is absolutely necessary in the world of software development, and these tools provide a way to view your code in great depth.

Your DevTools should always be open when you're working on web applications. You should feel blind when they are closed. Foolish are those who do not use their DevTools, yet claim to know everything.