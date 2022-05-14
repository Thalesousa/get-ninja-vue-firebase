<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>Search Term</p>
    <div v-for="name in matchingNames" :key="name">
      <p>{{name}}</p>
    </div>

    <button @click="handleClick">Click stop watch</button>
    
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from 'vue'

export default {
  name: 'HomeView',
  setup(){
    const search = ref('')
    const names = ref(['Mario', 'Luigi', 'Yoshi'])

    const stopWatch = watch(search, () => {
      console.log('Watch')
    })

    const stopWatchEffect = watchEffect(() => {
      console.log('Watch Effect', search.value)
    })

    const matchingNames = computed(() => {
      return names.value.filter(name => name.includes(search.value))
    })

    const handleClick = () => {
      stopWatch()
      stopWatchEffect()
    }
    

    return {search, matchingNames, handleClick}
  },
}
</script>
