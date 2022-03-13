const ninjas = ['mario', 'luigi', 'sonic', 'yoshi']

const formatNinja = () => {
  let val = ''
  ninjas.forEach(ninja => val += ninja + ', ')
  return val
}

const great = () => {
  console.log(ninjas[0] + ' says hello')
}

export { formatNinja, great }

export default ninjas