import { ref } from 'vue'
import { projectAuth } from '@/firebase/config'

const user = ref()

projectAuth.onAuthStateChanged(_user => {
  console.log('User stage change. Current user is: ', _user)
  user.value = _user
})

export const getUser = () => {
  return { user }
}