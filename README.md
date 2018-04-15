## react-template

> 项目目录为 `create-react-app` 构建的结构

[预览](https://zbl91555.github.io/react-template/build "项目预览")

1.  增加`sass`的支持
2.  将`create-react-app`中的`eslint`规则单独抽离到根目录，修改 eslint 的配制项目，方面代码格式化
3.  修改`babel-loader`的配制，使其支持`antd`模块加载，增加`decorators`支持
4.  使用`axios`发送 http 请求，并配制一些请求和响应的拦截器
5.  使用`mobx`作为全局的状态管理工具
6.  将 routes 集中进行`react-router@4`路由配制，可以更加方便的添加异步路由
7.  添加了自定义的`provider`
