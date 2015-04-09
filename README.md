# mat-rap

[![npm version](https://badge.fury.io/js/mat-rap.svg)](http://badge.fury.io/js/mat-rap)

使用nodejs请求Rap平台mock数据的mat插件

## Installation

```sh
npm install --save-dev mat-rap
```

## Usage

```javascript
var mat  = require('mat');
var rap  = require('mat-rap');
var opoa = require('mat-opoa');

mat.task('default', function () {
  mat.use(rap({
    projectId: "123"
  }));

  mat.use(opoa({
    root: './'
  }));
})
```

## Options

- `projectId`
  
  Rap平台对应建立的项目id