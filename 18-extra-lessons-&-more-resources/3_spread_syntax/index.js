const games = ['mario', 'luigi', 'yoshi']
const post = { title: 'new post', author: 'John doe'}

const all = [...games, 'sonic']
console.log(all)

const idPost = {...post, id: 1}
console.log(idPost)