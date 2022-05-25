Page({
  data: {
    name: 'sjs componentDescriptor 组件描述器测试',
    sjsNameSpace: {
      foo: 'i am foo from data',
    },
    left: 50,
    top: 50,
    taptest: 'taptest',
    show: true,
    dataObj: {
      obj: 1,
    },
  },
  handleClick(event, extra) {
    console.log('普通 事件 event:', event) // $event
    console.log('普通 事件 extra:', extra)
  },
  testCallmethod(args) {
    console.log('i am service testCallmethod', args)
  },
})
