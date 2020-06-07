<template>
  <div id="tela" ref="content">
    <button v-on:click="exportPDFHTML">Export PDF</button>
    <ul>
      <li v-for="todo in todos">
        {{ todo.title }}</li>
    </ul>
  </div>
</template>

<script>

  import jsPDF from 'jspdf'

  export default {
    name: "exportPdfFromHtml",
    data(){
      return {
        todos: [
          {title: 'todo 1', description: 'description 1'},
          {title: 'todo 2', description: 'description2'},
          {title: 'todo 3', description: 'description 3'},
          {title: 'todo 4', description: 'description 4'},
          {title: 'todo 5', description: 'description 5'}
        ]
      }
    },
    methods: {
      exportPDFHTML() {
        var doc = new jsPDF();
        const contentHtml = this.$refs.content.innerHTML;
        doc.fromHTML(contentHtml, 20,20,{'width':500});
        doc.save('todos1.pdf');
      }
    }
  }
</script>

<style scoped>

</style>