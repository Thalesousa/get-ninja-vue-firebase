import { ref } from 'vue'
import { Delay } from './LoadingDelay'

export const getPosts = () => {
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      await Delay(2000)
      let data = await fetch('http://localhost:3000/posts')
      if(!data.ok) {
        throw Error('no data available')
      }
      posts.value = await data.json()
    }
    catch (err){
      error.value = err.message
      console.log(error.value)
    }
  }

  return { posts, error, load }
}

