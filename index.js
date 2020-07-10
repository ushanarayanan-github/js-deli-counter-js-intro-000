function takeANumber(currentLine,newPerson) {
  currentLine.push(newPerson)
  var i= currentLine.length
  return "Welcome, " + newPerson + ". You are number " + i + " in line."
}
