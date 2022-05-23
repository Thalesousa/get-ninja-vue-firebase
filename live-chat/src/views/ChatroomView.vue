<template>
  <div class="container">
    <NavBar />
    <NewChatForm />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import NewChatForm from '@/components/NewChatForm.vue'
import { getUser } from '@/composables/getUser'
import { useRouter } from 'vue-router'
import { watch } from 'vue'
export default {
  components: { NavBar, NewChatForm },
  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch(user, () => {
      if(!user.value) {
        router.push({ name: 'Welcome' })
      }
    })
  }
}
</script>

<style>

</style>