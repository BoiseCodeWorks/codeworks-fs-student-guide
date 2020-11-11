# Mongoose 101: Working with subdocuments

## What's a subdocument

In Mongoose, subdocuments are documents that are nested in other documents. You can spot a subdocument when a schema is nested in another schema.

Note: MongoDB calls subdocuments embedded documents.

```javascript
const childSchema = new Schema({
  name: String
});

const parentSchema = new Schema({
  // Single subdocument
  child: childSchema,

  // Array of subdocuments
  children: [ childSchema ]
});
```

In practice, you don't have to create a separate `childSchema` like the example above. Mongoose helps you create nested schemas when you nest an object in another object.

```javascript
// This code is the same as above
const parentSchema = new Schema({
  // Single subdocument
  child: { name: String },

  // Array of subdocuments
  children: [{name: String }]
});

```

## Updating characterSchema

Let's say we want to create a character called Ryu. Ryu has three special moves.

1.  Hadoken
2.  Shinryuken
3.  Tatsumaki Senpukyaku

Ryu also has one ultimate move called:

1.  Shinku Hadoken

We want to save the names of each move. We also want to save the keys required to execute that move.

Here, each move is a subdocument.

```javascript
const characterSchema = new Schema({
  name: { type: String, unique: true },
  // Array of subdocuments
  specials: [{
    name: String,
    keys: String
  }]
  // Single subdocument
  ultimate: {
    name: String,
    keys: String
  }
})
```

You can also use the childSchema syntax if you wish to. It makes the Character schema easier to understand.

```javascript
const moveSchema = new Schema({
  name: String,
  keys: String
})

const characterSchema = new Schema({
  name: { type: String, unique: true },
  // Array of subdocuments
  specials: [moveSchema],
  // Single subdocument
  ultimate: moveSchema
})
```

## Creating documents that contain subdocuments

There are two ways to create documents that contain subdocuments:

1.  Pass a nested object into `new Model`
2.  Add properties into the created document.

### Method 1: Passing the entire object

For this method, we construct a nested object that contains both Ryu's name and his moves.

```javascript
const ryu = {
  name: 'Ryu',
  specials: [{
    name: 'Hadoken',
    keys: '↓ ↘ → P'
  }, {
    name: 'Shoryuken',
    keys: '→ ↓ ↘ → P'
  }, {
    name: 'Tatsumaki Senpukyaku',
    keys: '↓ ↙ ← K'
  }],
  ultimate: {
    name: 'Shinku Hadoken',
    keys: '↓ ↘ → ↓ ↘ → P'
  }
}
```

Then, we pass this object into `new Character`.

```javascript
const char = new Character(ryu)
const doc = await char.save()
console.log(doc)

```

![Image of Ryu's document.](https://zellwk.com/images/2019/mongoose-subdocuments/ryu.png)

### Method 2: Adding subdocuments later

For this method, we create a character with `new Character` first.

```javascript
const ryu = new Character({ name: 'Ryu' })

```

Then, we edit the character to add special moves:

```javascript
const ryu = new Character({ name: 'Ryu' })
const ryu.specials = [{
  name: 'Hadoken',
  keys: '↓ ↘ → P'
}, {
  name: 'Shoryuken',
  keys: '→ ↓ ↘ → P'
}, {
  name: 'Tatsumaki Senpukyaku',
  keys: '↓ ↙ ← K'
}]

```

Then, we edit the character to add the ultimate move:

```javascript
const ryu = new Character({ name: 'Ryu' })

// Adds specials
const ryu.specials = [{
  name: 'Hadoken',
  keys: '↓ ↘ → P'
}, {
  name: 'Shoryuken',
  keys: '→ ↓ ↘ → P'
}, {
  name: 'Tatsumaki Senpukyaku',
  keys: '↓ ↙ ← K'
}]

// Adds ultimate
ryu.ultimate = {
  name: 'Shinku Hadoken',
  keys: '↓ ↘ → ↓ ↘ → P'
}

```

Once we're satisfied with `ryu`, we run `save`.

```javascript
const ryu = new Character({ name: 'Ryu' })

// Adds specials
const ryu.specials = [{
  name: 'Hadoken',
  keys: '↓ ↘ → P'
}, {
  name: 'Shoryuken',
  keys: '→ ↓ ↘ → P'
}, {
  name: 'Tatsumaki Senpukyaku',
  keys: '↓ ↙ ← K'
}]

// Adds ultimate
ryu.ultimate = {
  name: 'Shinku Hadoken',
  keys: '↓ ↘ → ↓ ↘ → P'
}

const doc = await ryu.save()
console.log(doc)

```

![Image of Ryu's document.](https://zellwk.com/images/2019/mongoose-subdocuments/ryu.png)

## Updating array subdocuments

The easiest way to update subdocuments is:

1.  Use `findOne` to find the document
2.  Get the array
3.  Change the array
4.  Run `save`

For example, let's say we want to add `Jodan Sokutou Geri` to Ryu's special moves. The keys for `Jodan Sokutou Geri` are `↓ ↘ → K`.

First, we find Ryu with `findOne`.

```javascript
const ryu = await Characters.findOne({ name: 'Ryu' })

```

Mongoose documents behave like regular JavaScript objects. We can get the `specials` array by writing `ryu.specials`.

```javascript
const ryu = await Characters.findOne({ name: 'Ryu' })
const specials = ryu.specials
console.log(specials)

```

![Log of specials.](https://zellwk.com/images/2019/mongoose-subdocuments/specials.png)

This `specials` array is a normal JavaScript array.

```javascript
const ryu = await Characters.findOne({ name: 'Ryu' })
const specials = ryu.specials
console.log(Array.isArray(specials)) // true

```

We can use the `push` method to add a new item into `specials`,

```javascript
const ryu = await Characters.findOne({ name: 'Ryu' })
ryu.specials.push({
  name: 'Jodan Sokutou Geri',
  keys: '↓ ↘ → K'
})

```

After updating `specials`, we run `save` to save Ryu to the database.

```javascript
const ryu = await Characters.findOne({ name: 'Ryu' })
ryu.specials.push({
  name: 'Jodan Sokutou Geri',
  keys: '↓ ↘ → K'
})

const updated = await ryu.save()
console.log(updated)

```

![Ryu updated with Jodan Sokutou Geri](https://zellwk.com/images/2019/mongoose-subdocuments/ryu-updated.png)

## Updating a single subdocument

It's even easier to update single subdocuments. You can edit the document directly like a normal object.

Let's say we want to change Ryu's ultimate name from Shinku Hadoken to Dejin Hadoken. What we do is:

1.  Use `findOne` to get Ryu.
2.  Change the `name` in `ultimate`
3.  Run `save`

```javascript
const ryu = await Characters.findOne({ name: 'Ryu' })
ryu.ultimate.name = 'Dejin Hadoken'

const updated = await ryu.save()
console.log(updated)

```

![Ryu document with Dejin Hadoken.](https://zellwk.com/images/2019/mongoose-subdocuments/ryu-3.png)

<br>
<br>
<hr>
<small>Liew, Z. (2019, December 18). Mongoose 101: Working with subdocuments. Retrieved November 10, 2020, from https://zellwk.com/blog/mongoose-subdocuments/</small>
<br>