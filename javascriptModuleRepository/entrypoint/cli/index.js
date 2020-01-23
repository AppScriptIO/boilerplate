#!/usr/bin/env node
// Shebang (#!) above allows for invoking this file directly on Unix-like platforms.
// InvokeCLI
const projectConfig = require('../../configuration/project.config.js'),
  path = require('path'),
  filesystem = require('fs')

// • Run
if (filesystem.existsSync(projectConfig.directory.distribution)) {
  module.exports = require(projectConfig.directory.distribution)
} else {
  // • Transpilation (babelJSCompiler)
  const { Compiler } = require('@deployment/javascriptTranspilation')
  let compiler = new Compiler()
  compiler.requireHook()
  // compiler.outputTranspilation() // print transpiled js files into project root folder for manual debugging.
  module.exports = require(path.join(projectConfig.directory.source, projectConfig.entrypoint.cli))
}
