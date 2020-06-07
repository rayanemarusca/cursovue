<template>
  <div id="app">
    <filtros-mixins-exercicios></filtros-mixins-exercicios>
    <frutas></frutas>
    <desafio1></desafio1>
    <export-pdf></export-pdf>

  </div>
</template>

<script>
import FiltrosMixinsExercicios from "@/components/filtros-mixins-exercicios/filtros-mixins-exercicios";
import Frutas from "@/components/filtros-mixins-exercicios/frutas";
import Desafio1 from "@/components/filtros-mixins-exercicios/desafio1";
import ExportPdf from "@/components/pdf/exportPdf";

export default {
  name: 'App',
  components: {
    ExportPdf,
    Desafio1,
    Frutas,
    FiltrosMixinsExercicios
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
</style>
