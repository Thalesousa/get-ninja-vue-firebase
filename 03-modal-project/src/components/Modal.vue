<template>
  <div class="backdrop" @click="closeModal">
    <div class="modal" :class="theme">
      <h1>{{title}}</h1>
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script>

export default {
  props: ['title', 'text', 'theme'],
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>
<style scoped>
  .modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: #fff;
    border-radius: 10px;
  }

  .modal.dark {
    background: #1d1d1d;
    color: #fff;
  }

  .modal.dark h1 {
    color: greenyellow;
  }

  .modal h1 {
    color: aqua;
    font-size: 32px;
  }

  .backdrop {
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }
  
</style>