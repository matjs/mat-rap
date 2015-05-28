# mat-rap

[![npm version](https://badge.fury.io/js/mat-rap.svg)](http://badge.fury.io/js/mat-rap)

## Installation

```sh
npm install --save-dev mat-rap
```

## Usage

```javascript
var mat = require('mat')
var rap = require('mat-rap')

mat.task('default', function () {
  mat.url([/\.json/])
    .use(rap({
      projectId: '700'
    }))
})
```

```sh
mat
```

## Options

- `projectId`
  
  type: number

  Rap平台对应建立的项目id