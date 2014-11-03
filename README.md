mongoose-test
=============

this is a test example project for mongoose!
## 创建项目

	express .

## 使用淘宝的npm源

	nrm use taobao

## 安装依赖包

	npm install

## 添加更多有用依赖

	npm install --save mongoose
	npm install --save bcrypt

## 安装服务器自动重载模块

	npm install --save-dev supervisor

## 安装测试模块

	mkdir test

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

## 修改package.json

```
  "scripts": {
		"start": "./node_modules/.bin/supervisor ./bin/www",
  	"test": "./node_modules/.bin/mocha -u tdd"
	},
```

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
