import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null)

const logout = async () => {
  error.value = null

  try {
    await projectAuth.signOut()
  } catch (err) {
    console.log(er.message)
    error.value = err.message
  }
}

export const useLogout = () => {
  return { logout, error }
}