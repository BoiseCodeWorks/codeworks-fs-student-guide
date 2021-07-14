# Virtuals in Mongoose

Virtuals are additional fields for a given model. Their values can be set manually or automatically with defined functionality. A common virtual property is the full name of a person, composed of user's first and last name.

Keep in mind: virtual properties don't get persisted in the database. They only exist logically and are not written to the document's collection.

## Mongoose Schema

We'll use the user schema below for further examples. The user schema has two properties indicating the user's first and last name: `first` and `last`.

```javascript
// define user schema
var userSchema = new Schema({
    first: String,
    last: String
});

// compile our model
var User = mongoose.model('User', userSchema);

// create a document
var user = new User({
    first: 'Peter',
    last: 'Parker'
});

```

Assume we want to get the full name of `user`, we can do this manually appending the `first` to `last` property:

```javascript
console.log(user.first + ' ' + user.last); // Peter Parker
```

## Define a Virtual Property

Actually, there is a better way of getting the full name of a user: virtual fields. With virtuals, you benefit of writing the name concatenation mess only once.

Mongoose splits the definiton of virtual fields into `GET` and `SET` methods.

### Get Method

The virtuals `get` method is a function returning the virtual value. You can do complex processing or just concatenate single document field values.

```javascript
userSchema.virtual('fullname').get(function() {
    return this.first + ' ' + this.last;
});

```

The code example above just concatenates the `first` and `last` property values. With that, the virtual `fullname` property now will print the same output as above:

```javascript
console.log(user.fullname); // Peter Parker
```

### Set Method

`set`ter methods are useful to split strings or do other operations. Define a virtual `set`ter by passing a proper function and execute your desired processing. The example below splits the passed `name` variable at any whitespace.

```javascript
userSchema.virtual('fullname').set(function (name) {
  var split = name.split(' ');
  this.first = split[0];
  this.last = split[1];
});
```

The first part of `name` is assigned to the `first` and the second part to the `last` property. This `set` method will override the previous model values and assign the ones we pass as `fullname` property.

```
var ironman = new User({
    first: '',
    last: ''
});

ironman.fullname = 'Tony Stark';
console.log(ironman.first); // Tony
console.log(ironman.last);  // Stark

```

### Queries and Field Selection

Virtuals are NOT available for document queries or field selection. Only non-virtual properties work for queries and field selections.

## Conclusion

As you see, virtual properties aren't static model properties. They are additional model functions returning values based on the default schema fields.


<small>Mongoose Documentation: [Virtuals](http://mongoosejs.com/docs/guide.html#virtuals)</small>

<br>
<br>
<hr>
<small>Pöhls on March 05 2015, M. (n.d.). Understanding Virtuals in Mongoose. Retrieved November 11, 2020, from https://futurestud.io/tutorials/understanding-virtuals-in-mongoose</small>
<br>
<br>

## Daily Journal
### Answer the following questions
1. What is a virtual property?

2. When might you use a virtual property? 

3. How do you search by a virtual properties value?
