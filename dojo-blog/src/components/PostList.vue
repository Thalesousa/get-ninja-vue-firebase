<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post"/>
    </div>
  </div>
</template>

<script>
import SinglePost from '@/components/SinglePost.vue'
import { onMounted, onUnmounted, onUpdated } from 'vue'
export default {
  props: ['posts'],
  components: { SinglePost },
  setup() {
    onMounted(() => console.log('Component Mounted'))
    onUnmounted(() => console.log('Component Unmounted'))
    onUpdated(() => console.log('Component Updated'))
  }
}
</script>