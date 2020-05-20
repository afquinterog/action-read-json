'use strict'

const core = require('@actions/core')
const xml2js = require('xml2js');
const fs = require('fs')
const path = require('path')
const parser = new xml2js.Parser({ attrkey: "ATTR" });

const main = async () => {
  //const path = './pom.xml'
  const route = path.join(__dirname, 'pom.xml');

  const content = fs.readFile(route, 'utf8', function(error,data){
    const result = JSON.stringify(data)
    const version = result.match( /<version[^>]*>([\s\S]*?)<\/version>/i )[1]
    console.log(version)
  });


  // parser.parseString(content, function(error, result) {
  //   console.log(error)
  //   console.log(result)
  //   if(error === null) {
  //       result = JSON.stringify(result)
  //       result = JSON.parse(result)
  //       //result = result.split('"version": [')
  //       //result = result[1]
  //       //result = JSON.parse(result)
  //       //const tag = /\"version\"\: \[(.*?)\]/.exec(result)
  //       //core.setOutput('content', result)
  //       console.log(result)
  //   }
  // });
  //var json = parser.toJson(content);
  //const tag = /<version>(.*?)<\/version>/.exec(content)
  //content = content[1]
  //version = tag[1]
  //core.setOutput('content', tag)
}

main().catch(err => core.setFailed(err.message))
