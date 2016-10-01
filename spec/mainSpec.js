var tap = require('tap')
var fromBinary = require('../index.js')

tap.equal(fromBinary('100'), 4)
tap.equal(fromBinary('1001'), 9)
tap.equal(fromBinary('11010'), 26)
tap.equal(fromBinary('10001101000'), 1128)
tap.equal(fromBinary('000011111'), 31)

tap.throws(function(){
  fromBinary('2')
}, "Must pass a string with only 1's and 0's")
tap.throws(function(){
  fromBinary('noe 2')
}, "Must pass a string with only 1's and 0's")
