### console.icon
 [![npm version](https://badge.fury.io/js/console.icon.svg)](https://badge.fury.io/js/console.icon)
 
`console.icon`, the easiest way use simple icons in your browser console. Run in vanilla.js and supported by every modern browsers.

 You can see a simple demo [here](http://codepen.io/ahmetozantekin/pen/qaVKkV?editors=1112).
 
## Build

```sh
$ bower install console-icon
```

or

```sh
npm install
npm install -g browserify
npm run build 
// output: dist/console.icon.js
```
 
## Preview

##### simple, only icon.
```javascript
// use your iconname of first parameter.
console.icon("beer");
```
output : 🍺

##### more simple, icon and logging
```javascript
// the second parameter as your message
console.icon("beer", "Cheers!");
```
output : 🍺 Cheers!

**goooood. Isn't it?**


## Usage

Simple include js file into your html.

```html
<script src="dist/console.icon.js"></script>
```

## Icons

Supported every emojis anymore. [:*](https://github.com/erayarslan)
###### [List of emoji cheat sheet](http://www.webpagefx.com/tools/emoji-cheat-sheet/)

### License
Copyright (c) 2016 Ahmet Ozan Tekin

The MIT License
