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
