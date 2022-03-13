<template>
  <h1>Show Here</h1>
  <div v-if="showModal">
    <Modal :title="title" :text="text" :theme="theme" @close="toggleModal" />
  </div>
  <button @click="toggleModal">Show</button>
</template>

<script>
import Modal from './components/Modal'
export default {
  name: 'App',
  data() {
    return {
      title: 'Vue JS',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, ad!',
      theme: 'dark',
      showModal: false
    }
  },
  components : {Modal},
  methods: {
    handleClick() {
      this.$refs.name.classList.add('active')
    },
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active {
  border: 1px solid blue;
}

</style>
