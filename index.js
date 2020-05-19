'use strict'

const core = require('@actions/core')
const { promises: fs } = require('fs')
const parser = require('xml2json');

const main = async () => {
  const path = core.getInput('path')
  const content = await fs.readFile(path, 'utf8')
  var json = parser.toJson(content);
  core.setOutput('content', json)
}

main().catch(err => core.setFailed(err.message))
