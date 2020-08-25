# es6-nodejs-project-kickstart

[![npm version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![codecov][codecov-image]][codecov-url]
[![MIT License][license-image]][license-url]


```js
import express from 'express';
import HelperUtils from '../utils/helperUtils';

const Helperservice = new HelperUtils();
const router = express.Router();

/* This routes Serves application home page */
router.get('/', (req, res) => {
    res.send('Application Running');
});

/* sample end point */
router.get('/getData', async (req, res) => {
    const response = Helperservice.reverse();
    res.json({
        reverseString: response,
        status: 'success',
        statusCode: 200,
    });
});

export default router;
```

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

```bash
$ npm install es6-nodejs-setup
```

## Tools Used 

- [babel-cli](https://babeljs.io/)
- [mocha](https://mochajs.org)
- [chai](https://github.com/chaijs/chai)
- [chai-http](https://www.chaijs.com/plugins/chai-http)
- [eslint](https://github.com/eslint/eslint)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [nyc](https://github.com/istanbuljs/nyc)

# Quick Start

1. Make sure you have recent, stable version of nodejs in your system. Please check version before run
```
$  node -v
```
2. Clone or download this repository.

3. Run this following command in your terminal from the project folder

```shell
$ npm install
```

# List of Commands/Tasks

### Lint
#### Perform eslint in your project 
```shell
$ npm run lint
```

### Lint Fix
#### Most of the errors reported by eslint fixed by using this command 
```shell
$ npm run lint-fix
```

### Test
#### This will run all test cases 
```shell
$ node test 
```

### Generate nyc report -- (optional command)
#### After testcases passed this will generate nyc report and uploads to codecov 
```shell
$ node report-coverage 
```

### Build (Transpiled)
#### This will create '/dist' folder and converts the ES6 code into es5   
```shell
$ node run build
```

### Start nodejs server
```shell
$ node start
```

<!---
[![dependencies Status][dependencies-image]][dependencies-url]
[![devDependencies Status][devDependencies-image]][devDependencies-url]
--->

[devDependencies-url]:https://david-dm.org/srinivaskandukuri/es6-nodejs-project-kickstart/dev-status.svg
[devDependencies-image]:https://david-dm.org/srinivaskandukuri/es6-nodejs-project-kickstart?type=dev

[dependencies-url]:https://david-dm.org/srinivaskandukuri/es6-nodejs-project-kickstart/status.svg
[dependencies-image]:https://david-dm.org/srinivaskandukuri/es6-nodejs-project-kickstart


[npm-url]:https://www.npmjs.com/package/es6-nodejs-setup
[npm-image]:https://badge.fury.io/js/es6-nodejs-setup.svg

[codecov-url]:https://codecov.io/gh/srinivasKandukuri/es6-nodejs-project-kickstart
[codecov-image]: https://codecov.io/gh/srinivasKandukuri/es6-nodejs-project-kickstart/branch/master/graph/badge.svg

[travis-url]:https://travis-ci.org/srinivasKandukuri/es6-nodejs-project-kickstart
[travis-image]: https://travis-ci.org/srinivasKandukuri/es6-nodejs-project-kickstart.svg?branch=master

[license-url]: https://github.com/srinivasKandukuri/es6-nodejs-project-kickstart/blob/master/LICENSE
[license-image]: http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
