<template>
  <div>
    <h1>Filtros e Mixins (Desafio)</h1>
    <!-- Filtro Local -->
    <p>{{ frase | espacoPorVirgula }}</p>
    <!-- Filtro Global -->
    <p>{{ frase | contarPlavras }}</p>

    <!-- Computed -->
    <p>{{ fraseComVirgulas }}</p>
    <p>{{ fraseComTamanhos }}</p>
  </div>
</template>

<script>
  import fraseMixin from "@/components/filtros-mixins-exercicios/fraseMixin";
  export default {
    name: "desafio1",
    mixins: [fraseMixin],
    data() {
      return {
        frase: 'Essa é a frase que será usada nos desafios.'
      }
    },
    filters: {
      espacoPorVirgula(valor) {
        return valor.replace(/ /g, ',')
      }
    }
  }
</script>

<style scoped>

</style>