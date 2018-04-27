function theBeatlesPlay(musicians, instruments) {
  var array = []

  for (let i = 0; i < musicians.length; i++) {
  array.push(`${musicians[i]} plays ${instruments[i]}`)
}
  return array
}

function johnLennonFacts(facts) {
  let facts2 = []
  let i = 0
  while (i <= facts.length - 1) {
  facts2.push(`${facts[i++]}!!!`)
}
  return facts2
}

function iLoveTheBeatles(number) {
  let array = []
  let number = 0
  do { number++;
  array.push('I love the Beatles!')
} while (number < 15)
return array
}
