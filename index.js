function fromBinary(binary){
  var power = binary.length

  if(binary.match(/[2-9a-z]/) !== null)
    throw 'Must pass a string with only 1\'s and 0\'s'

  return binary.split('').reduce(function(result, num) {
    power -= 1
    result += num * Math.pow(2, power)
    console.log('######', result)
    return result
  }, 0)
}

module.exports = fromBinary
