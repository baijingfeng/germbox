'use strict'
const exec = require('child_process').exec
const co = require('co')
const prompt = require('co-prompt')
const config = require('../templates')
const chalk = require('chalk')

module.exports = () => {
  co(function*() {
    let tplName = yield prompt('Template name: ')
    let projectName = yield prompt('Project name: ')

    if (!config.tpl[tplName]) {
      console.log(chalk.red('\n× Template does not exit!'))
      process.exit()
    }

    let gitUrl = config.tpl[tplName].url
    let branch = config.tpl[tplName].branch

    let cmdStr = `git clone ${gitUrl} ${projectName}
              &&  cd ${projectName}
              &&  git checkout ${branch}`
    console.log(chalk.white('\nStart generating...'))

    exec(cmdStr, (error, stdout, stderr) => {
      if (error) {
        console.log(error)
        process.exit()
      }
      console.log(chalk.green('\n√ Generation completed!'))
      console.log(`\ncd ${projectName} && npm install \n`)
      process.exit()
    })
  })
}
