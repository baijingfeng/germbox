'use strict'
const co = require('co')
const prompt = require('co-prompt')
const config = require('../templates')
const chalk = require('chalk')
const fs = require('fs')

module.exports = () => {
  co(
    function*() {
      // 接收用户输入的参数
      let tplName = yield prompt('Template name: ')
    }
  )
}