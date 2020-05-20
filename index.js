'use strict'

const core = require('@actions/core')
const { promises: fs } = require('fs')

const main = async () => {
  const path = core.getInput('path')
  const content = await fs.readFile(path, 'utf8')
  //var json = parser.toJson(content);
  tag = /<version>(.*?)<\/version>/.exec(content)
  //content = content[1]
  //version = tag[1]
  core.setOutput('content', tag)
}

main().catch(err => core.setFailed(err.message))
