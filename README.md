mongoose-test
=============

this is a test example project for mongoose!

## 准备工作

这部分主要是完成了构建项目骨架代码得任务，通过命令和少许文件更改，即可完成。

### 创建项目

	express .

### 使用更快的npm源

测速

	nrm test

选择速度快的源

	nrm use cnpm

### 安装依赖包

	npm install

### 添加更多有用依赖

	npm install --save mongoose
	npm install --save bcrypt

### 安装服务器自动重载模块

	npm install --save-dev supervisor

### 安装测试模块

	mkdir test
	touch Gulpfile.js
	
	npm install --save-dev mocha
	npm install --save-dev chai
	npm install --save-dev sinon
	npm install --save-dev supertest
	npm install --save-dev zombie

单元测试需要的各个模块说明

- mocha（Mocha is a feature-rich JavaScript test framework running on node.js and the browser, making asynchronous testing simple and fun.）
- chai（Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.）
- sinon（Standalone test spies, stubs and mocks for JavaScript.）
- zombie (页面事件模拟Zombie.js is a lightweight framework for testing client-side JavaScript code in a simulated environment. No browser required.)
- supertest(接口测试 Super-agent driven library for testing node.js HTTP servers using a fluent API)

### 修改Gulpfile.js

- auto test
- 代码测试覆盖率

```
npm install --save-dev gulp
npm install --save-dev gulp-mocha
npm install --save-dev gulp-istanbul
```

创建gulpfilejs

```
var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha'); 

gulp.task('test', function (cb) {
  gulp.src(['db/**/*.js'])
    .pipe(istanbul()) // Covering files
    .on('finish', function () {
      gulp.src(['test/*.js'])
        .pipe(mocha())
        .pipe(istanbul.writeReports()) // Creating the reports after tests runned
        .on('end', cb);
    });
});

gulp.task('default',['test'], function() {
  gulp.watch(['./db/**/*','./test/**/*'], ['test']);
});

gulp.task('watch',['test'], function() {
  gulp.watch(['./db/**/*','./test/**/*'], ['test']);
});
```


测试

```
node_modules/.bin/gulp 
```

这时，你试试修改测试或源文件试试，看看会不会自动触发测试

当然，如果你喜欢只是测试一次，可以这样做

```
node_modules/.bin/gulp test 
```

如果你不熟悉gulp，可以再这里https://github.com/i5ting/js-tools-best-practice/blob/master/doc/Gulp.md学习

### 修改package.json

```
  "scripts": {
		"start": "./node_modules/.bin/supervisor ./bin/www",
  	"test": "./node_modules/.bin/mocha -u tdd"
	},
```

### todo

@小龙，写成一个一键脚本

## test
TDD 流程是，先编写一个失败测试，然后编写应用代码让测试通过，最后再按需重构代码。因为很多测试工具都使用红色表示失败测试，使用绿色表示通过的测试，所以这个流程有时也叫“遇红-变绿-重构”循环。这一节我们先完成这个循环的第一步，编写一个失败测试，“遇红”。然后在变绿，重构。

## 创建`db/user_model.js`

此文件里编写用户相关的mongodb操作

- Schema define
- virtual attr
- save pre callback
- UserSchema.methods
- UserSchema.statics
- findOne
- user hash password with salt
- getAuthenticated

## 创建`test/user_model.js`

测试2个方法

- #save()
- #getAuthenticated()

### 测试代码基本结构

```
describe('UserModel', function(){
	before(function() {
    // runs before all tests in this block
  })
  after(function(){
    // runs after all tests in this block
  })
  beforeEach(function(){
    // runs before each test in this block
  })
  afterEach(function(){
    // runs after each test in this block
  })
	
  describe('#save()', function(){
    it('should return sang_test2 when user save', function(done){
			。。。
    })
  })
})
```

生命周期说明

- before
- after
- beforeEach
- afterEach

上面这段代码是向测试`UserModel`的`#save()`方法是否符合需求。

### 断言

断言都是单元测试的核心

断言作为Assert类的静态方法。如果一个断言失败，方法的调用不会返回值，并且会报告一个错误。

如果一个测试包含多个断言，那些紧跟失败断言的断言都不会执行，因为此原因，通常每个测试方法最好只有一个断言。每个方法可以无消息调用，也可以是带有一个简单文本消息调用，或者带有一个消息以及参数调用。在最后一种情况下，使用了一个提供的文本以及参数来格式化消息。

目前流行的断言基本分为3类

- assert风格
- should风格
- expect风格

没有好坏之分，只是看个人习惯

这里使用chai这个库，它支持3种风格的断言，非常方便

Chai has several interfaces that allow the developer to choose the most comfortable. The chain-capable BDD styles provide an expressive language & readable style, while the TDD assert style provides a more classical feel.


```
var assert = require('chai').assert;
var expect = require('chai').expect;
require('chai').should();
```

具体用法请查看`http://chaijs.com/`文档

## 测试命令

启动mongodb服务
	
	mongod

服务器启动

	npm start
	
测试

	npm test
	
## 自动测试和代码测试覆盖率法1：基于gulp

- auto test
- 代码测试覆盖率

```
npm install --save-dev gulp
npm install --save-dev gulp-mocha
npm install --save-dev gulp-istanbul
```

创建gulpfilejs

```
var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha'); 

gulp.task('test', function (cb) {
  gulp.src(['db/**/*.js'])
    .pipe(istanbul()) // Covering files
    .on('finish', function () {
      gulp.src(['test/*.js'])
        .pipe(mocha())
        .pipe(istanbul.writeReports()) // Creating the reports after tests runned
        .on('end', cb);
    });
});

gulp.task('default',['test'], function() {
  gulp.watch(['./db/**/*','./test/**/*'], ['test']);
});

gulp.task('watch',['test'], function() {
  gulp.watch(['./db/**/*','./test/**/*'], ['test']);
});
```


测试

```
node_modules/.bin/gulp 
```

这时，你试试修改测试或源文件试试，看看会不会自动触发测试

当然，如果你喜欢只是测试一次，可以这样做

```
node_modules/.bin/gulp test 
```

如果你不熟悉gulp，可以再这里https://github.com/i5ting/js-tools-best-practice/blob/master/doc/Gulp.md学习

## 自动测试和代码测试覆盖率法2：基于cli

首先安装依赖npm包

    npm install --save-dev mocha
    npm install --save-dev istanbul

在package.json里scripts增加

    "test": "./node_modules/.bin/mocha --reporter spec",
    "test-cov": "istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot",
    "test-travis": "istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --reporter dot"

然后测试

	npm test
	npm run test-cov
	npm run test-travis
	
这里想自动化会有点麻烦，还是建议解除gulp

如果不了npm run命令，请参阅 https://github.com/i5ting/npm-run-test

## 测试相关网址

- https://github.com/visionmedia/mocha
- http://visionmedia.github.io/mocha/
- http://mochajs.org/
- https://github.com/chaijs/chai
- http://chaijs.com/
- http://sinonjs.org/
- http://zombie.labnotes.org/
- https://github.com/tj/supertest（api test文档）
- https://github.com/tj/superagent/blob/master/test/node/agency.js（api test示例）
- https://github.com/i5ting/js-tools-best-practice/blob/master/doc/Gulp.md
- https://github.com/SBoudrias/gulp-istanbul

## 更多

下面概念，请自行了解

- TDD
- BDD



## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v0.1.0 初始化版本 

## 作者

- 桑世龙
- 柯织
- 黄小龙

## 欢迎fork和反馈

在issue提问或邮件shiren1118@126.com

## License

this gem is released under the [MIT License](http://www.opensource.org/licenses/MIT).
