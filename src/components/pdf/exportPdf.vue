<template>
  <div >
    <button v-on:click="exportPDF">Export PDF</button>
    <ul>
      <li v-for="todo in todos">
        {{ todo.title }}</li>
    </ul>
  </div>
</template>

<script>
  import jsPDF from 'jspdf'
  import 'jspdf-autotable'
  export default {
    name: "exportPdf",
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
      exportPDF() {
        var vm = this
        var columns = [
          {title: "Title", dataKey: "title"},
          {title: "Description", dataKey: "description"}
        ];
        var doc = new jsPDF('p', 'pt');
        doc.text('To Do List', 40, 40);
        doc.autoTable(columns, vm.todos, {
          margin: {top: 60},
        });
        doc.save('todos.pdf');
      }
    }
  }
</script>

<style scoped>

</style>