'use strict'

const core = require('@actions/core')
const xml2js = require('xml2js');
const fs = require('fs')
const parser = new xml2js.Parser({ attrkey: "ATTR" });

const main = async () => {
  const path = core.getInput('path')
  const content = await fs.readFile(path, 'utf8', function(error,data){
    const result = JSON.stringify(data)
    const version = result.match( /<version[^>]*>([\s\S]*?)<\/version>/i )[1]
    core.setOutput('content', version)
  });
}

main().catch(err => core.setFailed(err.message))
