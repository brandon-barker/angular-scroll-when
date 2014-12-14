angular-scroll-when 
==================
[![Build Status](https://travis-ci.org/brandon-barker/angular-scroll-when.svg?branch=master)](https://travis-ci.org/brandon-barker/angular-scroll-when)
[![Dependency Status](https://david-dm.org/brandon-barker/angular-scroll-when.png)](https://david-dm.org/brandon-barker/angular-scroll-when)

An AngularJS directive to dynamically scroll to any element on your page

Demo
-------
Check out [the live demo](http://embed.plnkr.co/8hnnlrqNqZw96UdDdvmf/preview) or the [source code](https://github.com/brandon-barker/angular-scroll-when/blob/master/src/scrollWhen.js).


Installation
-------

#### via bower:

```
$ bower install angular-scroll-when --save
```

Usage
---

1. Include **bb.scrollWhen** as a dependency for your app

  ```js
  angular.module('myApp', ['bb.scrollWhen'])
  ```
  
2. Add the directive to any element you want to monitor/scroll to

  ```html
  <tr ng-repeat="item in items track by item.id" scroll-when="selectedItem.id === item.id">
    ...
  </tr>
  ```
  
> This is the most basic example, any time your selectedItem matches an item in your repeat, your browser will automatically scroll to that element.

## Configuration

You can pass through additional attributes to the directive to modify the behaviour:

### `scroll-watch-enabled`

If you need to continuously evaluate the expression you pass through, then set this to `true`. It is set to `false` by default to avoid adding unnecessary watchers to your `$scope`.

> Enable this if you are going to programatically change objects tracked by your expression

```html
<tr scroll-when="selectedItem.id === item.id" scroll-watch-enabled="true" ng-repeat="item in items track by item.id">
  ...
</tr>
```

### `scroll-speed`

Adjust the speed at which the scroll animation runs

```html
<tr scroll-when="selectedItem.id === item.id" scroll-speed="300" ng-repeat="item in items track by item.id">
  ...
</tr>
```

### `scroll-offset`

Adjust the `offsetTop` amount (subtracts from the elements current `top` value) in pixels.

```html
<tr scroll-when="selectedItem.id === item.id" scroll-offset="400" ng-repeat="item in items track by item.id">
  ...
</tr>
```

### `scroll-container`

If your element is inside a container with an `overflow` property, then set your container selector here, the directive will then scroll through the container instead of the DOM itself.

```html
<tr scroll-when="selectedItem.id === item.id" scroll-container="#item-container" ng-repeat="item in items track by item.id">
  ...
</tr>
```
> You can see an example of this in the live demo
