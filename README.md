angular-scroll-when [![Build Status](https://travis-ci.org/brandon-barker/angular-scroll-when.svg?branch=master)](https://travis-ci.org/brandon-barker/angular-scroll-when)
==================

An AngularJS directive to dynamically scroll to any element on your page

## Installation

#### via bower:

```
$ bower install angular-scroll-when --save
```

## Usage

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
