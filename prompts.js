module.exports = [
  {
    name: 'iconFont',
    type: 'list',
    message: 'Select icon font',
    choices: ['a', 'c'],
    default: 'a'
  },
  {
    name: 'useTheme',
    type: 'confirm',
    message: 'Use custom theme?',
    default: false
  }
]
