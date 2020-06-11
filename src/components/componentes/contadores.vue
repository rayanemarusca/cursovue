<template>
  <div>
    <h1>Contadores</h1>
    <contador v-for="c in 5" :key="c"></contador>
  </div>

</template>

<script>
  import Contador from "@/components/componentes/contador";
  export default {
    name: "contadores",
    components: {Contador}
  }
</script>

<style scoped>

</style>