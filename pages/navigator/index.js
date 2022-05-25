Page({
  data: {
    name: '[sjs 测试用例] 导航',
    pages: [
      {
        name: 'sjs 基础用法',
        path: 'pages/page-base/index',
      },
      {
        name: 'require 模块引入测试',
        path: 'pages/page-require/index',
      },
      {
        name: 'include/template 测试',
        path: 'pages/page-include/index',
      },
      {
        name: 'sjs 内置函数测试',
        path: 'pages/page-api/index',
      },
      {
        name: '不同组件同时引入同一个 sjs 模块测试',
        path: 'pages/page-singleton/index',
      },
      {
        name: 'ComponentDescriptor 测试',
        path: 'pages/page-descriptor/index',
      },
      {
        name: '异常报错测试',
        path: 'pages/page-exception/index',
      },
    ],
  },
})
