# The Fetch API

### A modern replacement for XMLHttpRequest

![Image for post](https://miro.medium.com/max/3200/1*-yw3mCIfvJotovxiydYa1w.jpeg)

> It is said that "Necessity is the mother of all inventions" and that's what fueled the development of Fetch API. But before digging deeper into the Fetch API let's dive into the history behind it.

## AJAX

Before `AJAX` (Asynchronous JavaScript and XML) concept was introduced, to update the portion of a page, browsers at that time used to make a request for a full web page to the server, after the request was received by the server, it used to create and return a page to the browser as a response. It means that even for a small change the page was loaded entirely. That was bad right? Very very bad.

After `AJAX` came into the world of internet, it changed the traditional way of updating the page. With `AJAX`, Web applications were able to send and retrieve data from a server asynchronously (in the background) without interfering with the display and behaviour of the existing page.

## XMLHttpRequest

In 2006 the World Wide Web Consortium published a working draft specification for the `XMLHttpRequest` object. `XMLHttpRequest` object is used to retrieve data from a server asynchronously. In the initial stages, `XMLHttpRequest` used to fetch `XML` data over `HTTP` hence the name. But today it can be used with protocols other than `HTTP` and it can fetch data not only in the form of `XML` but also `JSON`, `HTML` or plain text.

> The original concept behind the `XMLHttpRequest` object was originally created by the developers of Outlook Web Access (by Microsoft).

So let's try with an example, we will make a simple request using `XMLHttpRequest`, get a response and parse it as `JSON`.
```javascript
var xhr = new XMLHttpRequest();
xhr.onload = function() {
    var data = JSON.parse(this.responseText);
    console.log(data);
};
xhr.onerror = function(err) {
    console.log('Error Occurred :', err);
};
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
xhr.send();
```
We need two listeners to be set to handle the success and error cases and then a call to `open()` the request, providing the request type and url, than `send()` to fire the request. The response from the server is stored in the `responseText` variable, which is converted to JavaScript object using `JSON.parse()`.

> *We have used `XMLHttpRequest` for several years to request data other than `XML`, and that's where the confusion starts when a beginner trys to learn how to make an asynchronous request in JavaScript.*
>
> *Isn't there a cleaner and simple API to make an asynchronous request?* 

Well yes, there is and for that, we fast forward to today.

## Fetch

Fetch is a native JavaScript API, supported by most browsers today. Fetch allows you to make network requests similar to `XMLHttpRequest`. According to [Google Developers Documentation](https://developers.google.com/web/ilt/pwa/working-with-the-fetch-api) Fetch makes it easier to make asynchronous requests and handle responses better than with the older `XMLHttpRequest`. It is an improvement over the `XMLHttpRequest` API in both complexity and functionality. The main difference between Fetch and `XMLHttpRequest` is that the Fetch API uses Promises, hence avoiding callback hell.

> If you are new to promises then check out [JavaScript Promises: an Introduction](https://developers.google.com/web/fundamentals/primers/promises).

### Fetch Interfaces

The Fetch API has following interfaces

-   [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch): The `fetch()` method used to fetch a resource.
-   [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers): Represents response/request headers, allowing you to query them and take different actions depending on the results.
-   [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request): Represents a resource request.
-   [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response): Represents the response to a request.

### Making a request using fetch()

A [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch) function is available in the global `window` object. The `fetch()` function takes one mandatory argument, the path to the resource you want to fetch. It returns a `Promise`, whether it is successful or not. If request is successful `.then()` function will receive `Response` object, if request fails then `.catch()` function will receive an `error` object
```javascript
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });
```

### The Response Object

The above code makes use of Fetch API and makes a call to GitHub to fetch data about the user. When the promise is resolved we get a `Response` object in return. But wait, if you try logging `Response` object on the console you will find that it didn't have the data which we want. That's because a `Response` object has information about the response itself. To actually get the data, we need to get the body of the response.

![Image for post](https://miro.medium.com/max/1762/1*2M6A7Op4LuAsOqFfzFQ1ZQ.jpeg)

Response object

Since the API we're using will return `JSON` to us, the returned response will have `.json()` method. We just need to call `.json()` on the response variable. The `.json()` method on a `Response` object returns a `Promise`, so we need to chain on another `.then()`.
```javascript
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });
```

Extracted JSON object from Response body

### Headers Object

The `Headers` interface allows you to create your own headers object via the [Headers()](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers) constructor. A headers object is a collection of name-value pairs.
```javascript
var headers = new Headers();
headers.append('Content-Type', 'text/json');
headers.append('X-Custom-Header', 'SomeValue');

//We can achieve the same can by passing an object literal to the constructor

var headers = new Headers({
    'Content-Type': 'text/json',
    'X-Custom-Header': 'SomeValue'
});
```
### Supplying options to fetch()

The `fetch()` method accepts an optional second parameter, an `init` object that allows you to customise the request.
```javascript
let reqHeader = new Headers();
reqHeader.append('Content-Type', 'text/json');
let initObject = {
    method: 'GET', headers: reqHeader,
};

fetch('https://jsonplaceholder.typicode.com/todos', initObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });
```
### Request Object

The `Request` Object represents a resource request. Instead of passing an `URL` of the resource into the `fetch()` call, you can create a request object using the `[Request()](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request)` constructor, and pass that as an argument to `fetch().` By passing Request object to the `fetch()`, you can make customised requests.
```javascript
let reqHeader = new Headers();
reqHeader.append('Content-Type', 'text/json');

let initObject = {
    method: 'GET', headers: reqHeader,
};

var userRequest = new Request('https://jsonplaceholder.typicode.com/todos', initObject);

fetch(userRequest)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });
```
## Conclusion

Definitely, `XMLHttpRequest` wasn't made for the things we are using it today. Also, it's API is a bit more complex without the return on flexibility. The `Fetch` API makes it easier to make asynchronous requests and handle responses better than using an `XMLHttpRequest`. `Fetch` allows us to create a better API for the simple things, using modern JavaScript features like `promises`.

Let's start fetching !!

<br>
<br>
<hr>
<small>Bangare, Swapnil. “The Fetch API.” Medium, Beginner's Guide to Mobile Web Development, 25 Apr. 2018, medium.com/beginners-guide-to-mobile-web-development/the-fetch-api-2c962591f5c. </small>
<br>