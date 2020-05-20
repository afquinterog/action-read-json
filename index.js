'use strict'

const core = require('@actions/core')
const { promises: fs } = require('fs')

const main = async () => {
  const path = core.getInput('path')
  const content = await fs.readFile(path, 'utf8')
  //var json = parser.toJson(content);
  tag = content.match(/<version>([^<]*)<\/version>/)
  //content = content[1]
  version = tag[1]
  core.setOutput('content', version)
}

main().catch(err => core.setFailed(err.message))
