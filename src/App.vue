<template>
  <div id="app" ref="content">
    <v-app>

      <app-menu></app-menu>
      <app-toolbar></app-toolbar>

      <v-content>
        <app-carousel></app-carousel>
      </v-content>

      <export-pdf></export-pdf>
      <export-pdf-from-html></export-pdf-from-html>
      <filtros-mixins-exercicios></filtros-mixins-exercicios>
      <frutas></frutas>
      <desafio1></desafio1>
      <revisao></revisao>
      <contadores></contadores>
      <app-footer></app-footer>

    </v-app>
  </div>
</template>

<script>
import FiltrosMixinsExercicios from "@/components/filtros-mixins-exercicios/filtros-mixins-exercicios";
import Frutas from "@/components/filtros-mixins-exercicios/frutas";
import Desafio1 from "@/components/filtros-mixins-exercicios/desafio1";
import ExportPdf from "@/components/pdf/exportPdf";
import ExportPdfFromHtml from "@/components/pdf/exportPdfFromHtml";
import Revisao from "@/components/componentes/revisao";
import Contadores from "@/components/componentes/contadores";
import Footer from "@/components/templete/footer";
import Carousel from "@/components/templete/carousel";
import Toolbar from "@/components/templete/toolbar";
import Menu from "@/components/templete/menu";

export default {
  name: 'App',
  components: {
    appMenu: Menu,
    appToolbar: Toolbar,
    appCarousel: Carousel,
    appFooter: Footer,
    Contadores,
    Revisao,
    ExportPdfFromHtml,
    ExportPdf,
    Desafio1,
    Frutas,
    FiltrosMixinsExercicios
  },
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
