# mat-rap

[![npm version](https://badge.fury.io/js/mat-rap.svg)](http://badge.fury.io/js/mat-rap)

使用nodejs请求Rap平台mock数据的mat插件

## Installation

```sh
npm install --save-dev mat-rap
```

## Usage

```javascript
var mat  = require('mat')
var rap  = require('mat-rap')

mat.task('default', function () {
  mat.use(rap({
    projectId: '123',
    ext: ['.json', '.do'],
    match: function() {
      if (/\.htm$/.text(this.path)) {
        return true
      }
    }
  }))
})
```

```sh
mat default
```

## Options

- `projectId`
  
  type: number

  Rap平台对应建立的项目id

- `ext`
  
  type: array

  调用的数据接口的后缀名，默认为`['.json']`

- `match`
  
  type: function

  对于数据接口的白名单处理，match的返回值决定此接口是否使用rap获取数据