const client = require('client/src/client')

function server() {
  console.log('I am from server')
  console.log(client())
}

server()

module.exports = server
