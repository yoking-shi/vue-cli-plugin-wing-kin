module.exports = [
  {
    name: 'someFlag',
    // 确认对话只在用户已经选取了特性的时候展示
    when: answers => answers.features.include('my-feature'),
    message: 'Do you want to turn on flag foo?',
    type: 'confirm'
  }
]
