mongoose-test
=============


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

  "scripts": {
		"start": "./node_modules/.bin/supervisor ./bin/www",
  	"test": "./node_modules/.bin/mocha -u tdd"
	},
	
## 测试命令

服务器启动

	npm start
	
测试

	npm test
	