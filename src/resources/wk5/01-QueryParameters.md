# Using Query Parameters

## About Query Strings
A query string allows you to pass information to and from a website by simply adding, or “appending,” that information to the end of a URL. This information is stored in the query string and is captured by the website when it reads the URL.

Data can be passed into any request using a query string. Once passed, the data can be captured in node from the request object. This data can be used for anything you like, from a filter, to adding additinoal context to a request.

## How to Use Query Strings

The [query string](https://en.wikipedia.org/wiki/Query_string) portion of a URL is the part of the URL after the question mark `?`. For example:

```
?answer=42
```

Each `key=value` pair is called a *query parameter*. If your query string has multiple query parameters, they're separated by `&`. For example, the below string has 2 query parameters, `a` and `b`.

```
?a=1&b=2
```

Express automatically parses query parameters for you and stores them on the [request object](https://masteringjs.io/tutorials/express/req) as [`req.query`](http://expressjs.com/en/4x/api.html#req.query).

```javascript
// Demo of making a request to the server
const res = await axios.get('http://localhost:3000/test?a=1&b=2')

// In the server
app.get('test', (req, res) => {
  req.query; // { a: '1', b: '2' }
});
```

## Objects and Arrays in Query Strings

If a query parameter appears multiple times in the query string, Express will group the values into an array. For example, given the below query string:

```
?color=black&color=yellow
```

Express will set `req.query.color` to an array `['black', 'yellow']`.

If you use square brackets in a query string parameter, Express will parse that parameter as an object. 

For example, Express will parse `?shoe[color]=white` into the object `{ shoe: { color: 'white' } }`
