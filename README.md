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

## 创建`db/user_model.js``

## 创建`test/user_model.js`

## 测试命令

启动mongodb服务
	
	mongod

服务器启动

	npm start
	
测试

	npm test
	
## 测试相关网址

- https://github.com/visionmedia/mocha
- https://github.com/chaijs/chai
- http://chaijs.com/
- http://visionmedia.github.io/mocha/
- http://sinonjs.org/
- http://zombie.labnotes.org/
- https://github.com/tj/supertest（api test文档）
- https://github.com/tj/superagent/blob/master/test/node/agency.js（api test示例）


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
