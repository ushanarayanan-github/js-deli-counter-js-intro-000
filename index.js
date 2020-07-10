function takeANumber(currentLine,newPerson) {
  currentLine.push(newPerson)
  var i= currentLine.length
  return "Welcome, " + newPerson + ". You are number " + i + " in line."
}

function nowServing(currentLine) {
  if (currentLine.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
  var first = currentLine[0]
  currentLine.shift()
  return first
  }
}
