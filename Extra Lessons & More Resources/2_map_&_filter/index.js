const games = [
  { name: 'mario', belt: 'red'},
  { name: 'luigi', belt: 'green'},
  { name: 'sonic', belt: 'blue'},
  { name: 'yoshi', belt: 'green'}
]

const greenList = games.filter(game => game.belt == 'green')
console.log(greenList)
const names = games.map(game => game.name)
console.log(names)
