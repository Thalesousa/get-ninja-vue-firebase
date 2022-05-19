<template>
  <div class="home">
    <h1>RealTime</h1>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts"/>
      <TagCloud :posts="posts"/>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { projectFirestore } from '@/firebase/config'

import PostList from '@/components/PostList.vue'
import TagCloud from '@/components/TagCloud.vue'
import Spinner from '@/components/Spinner.vue'

export default {
  components: { PostList, TagCloud, Spinner },
  setup() {
    const posts = ref([])
    projectFirestore.collection('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        let docs = snap.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        })

        posts.value = docs
      })

    return { posts }
  }
}
</script>

<style>

</style>