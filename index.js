'use strict'

const core = require('@actions/core')
const xml2js = require('xml2js');
const { promises: fs } = require('fs')
const parser = new xml2js.Parser({ attrkey: "ATTR" });

const main = async () => {
  const path = core.getInput('path')
  const content = await fs.readFile(path, 'utf8')
  parser.parseString(content, function(error, result) {
    if(error === null) {
        result = JSON.stringify(result)
        core.setOutput('content', result['project']['version'])
    }
  });
  //var json = parser.toJson(content);
  //const tag = /<version>(.*?)<\/version>/.exec(content)
  //content = content[1]
  //version = tag[1]
  //core.setOutput('content', tag)
}

main().catch(err => core.setFailed(err.message))
