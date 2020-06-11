<template>
  <div>
    <p>{{ contador }}</p>
    <button @click="contador++">+</button>
    <button @click="contador--">-</button>
  </div>
</template>

<script>
  export default {
    name: "revisao",
    data(){
      return {
        contador: 0
      }
    }
  }
</script>

<style scoped>

</style>