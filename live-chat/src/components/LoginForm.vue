<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button>Log in</button>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useLogin } from '@/composables/useLogin'
export default {
  setup(props, context) {
    const email = ref('')
    const password = ref('')

    const { error, login } = useLogin()

    const handleSubmit = async () => {
      await login(email.value, password.value)
      if(!error.value) {
        context.emit('login')
      }
    }

    return { email, password, error, handleSubmit }
  }
}
</script>

<style>

</style>