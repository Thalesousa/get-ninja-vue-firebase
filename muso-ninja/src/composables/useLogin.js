import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)
const isPedding = ref(false)

const login = async (email, password) => {
  error.value = null
  isPedding.value = true

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password)
    error.value = null
    isPedding.value = false
    return res
  }
  catch(err) {
    console.log(err.message)
    isPedding.value = false
    error.value = 'Incorrect login credentials'
  }
}

const useLogin = () => {
  return { error, login, isPedding }
}

export default useLogin