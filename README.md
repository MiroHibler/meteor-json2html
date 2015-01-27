# _meteor-json2html_

## What is _meteor-json2html_?

_meteor-json2html_ is a Meteor wrapper for the HTML templating engine [json2html](https://github.com/moappi/json2html).


## Why?

Debugging. Since Meteor has its own powerfull templating engine, _meteor-json2html_
is mainly usable for easy monitoring changes to any (JSON) _reactive_ data
without stepping through the debugger.


## Ok so what is json2html?

[json2html](https://github.com/moappi/json2html) is a javascript HTML templating engine which converts json object to
html using json transforms.

Note that this _meteor-json2html_ package includes the latest version of
json2html core.


## Installation

```bash
meteor add miro:meteor-json2html
```

## Example

```html
<body>
	<div class="debug">{{> players}}</div>
</body>

<template name="players">
	<pre class="players">{{json2html players}}</pre>
</template>
```

```javascript
Template.players.helpers({
	players: function () {
		return Players.find().fetch();
	}
});
```

Will produce something similar to:

```
[
  {
    "_id": "kqubNgSkH8WfH5cRg",
    "name": "Ada Lovelace",
    "score": 20
  },
  {
    "_id": "wiYXcoGi2oBfrQB3C",
    "name": "Grace Hopper",
    "score": 20
  },
  {
    "_id": "9WLkp5TGMdRfuxFLy",
    "name": "Marie Curie",
    "score": 25
  },
  {
    "_id": "KTXA3rkbA6byjntCb",
    "name": "Carl Friedrich Gauss",
    "score": 20
  },
  {
    "_id": "5Ji5q4CwTtiZDyiWP",
    "name": "Nikola Tesla",
    "score": 170
  },
  {
    "_id": "QHtu2LC6Zctoyr87e",
    "name": "Claude Shannon",
    "score": 110
  }
]
```
> **_NOTE_**: If provided with reactive source, it will re-render on each change

You can even color the syntax with your own style (if enabled), for example:

```css
pre {
	outline: 1px solid #ccc;
	padding: 5px;
	margin: 5px;
}

.string {
	color: green;
}

.number {
	color: darkorange;
}

.boolean {
	color: blue;
}

.null {
	color: magenta;
}

.key {
	color: red;
}
```

to get something like this (markdown doesn't do it justice):

```javascript
[
  {
    "_id": "kqubNgSkH8WfH5cRg",
    "name": "Ada Lovelace",
    "score": 20
  },
  {
    "_id": "wiYXcoGi2oBfrQB3C",
    "name": "Grace Hopper",
    "score": 20
  },
  {
    "_id": "9WLkp5TGMdRfuxFLy",
    "name": "Marie Curie",
    "score": 25
  },
  {
    "_id": "KTXA3rkbA6byjntCb",
    "name": "Carl Friedrich Gauss",
    "score": 20
  },
  {
    "_id": "5Ji5q4CwTtiZDyiWP",
    "name": "Nikola Tesla",
    "score": 170
  },
  {
    "_id": "QHtu2LC6Zctoyr87e",
    "name": "Claude Shannon",
    "score": 110
  }
]
```


## Usage

_meteor-json2html_ comes with predefined global template helper `{{json2html <param>}}`
which you can use in your templates like in previous example.

It takes one parameter - a JSON object to render.

However, should you want to use it in some other way, here are the specs:

#### json2html.transform( json, [transform], [options] )

Main call to the _meteor-json2html_ engine, with:

 * `json` - object (or array) of JSON object(s) to transform
 * `transform` - (_optional_) object (or array) of JSON transform object(s)

	If _transform_ parameter is not supplied, _meteor-json2html_ will render its
	own version, with color syntax (if enabled).

 * `options` - (_optional_) an options object

Please, see [json2html](https://github.com/moappi/json2html) for more info.


#### json2html.config( options )

Options for _meteor-json2html_ can be set globally so you don't have to provide
them on each call.

It accepts an object with parameters:

 * `colorSyntax` - should the color syntax be used?
 * `indent` - indentation level (# of spaces)

For example:

```javascript
json2html.config(
	colorSyntax: true, // default
	indent     : 2     // default
);
```

## Version Info

#### v1.0.0
 - Initial version

## Copyright and license

Copyright © 2015 [Miroslav Hibler](http://miro.hibler.me)

_miro:json2html_ is licensed under the [**MIT**](http://miro.mit-license.org) license.
