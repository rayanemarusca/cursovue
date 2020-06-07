<template>
    <div id="app">
       <h1>Filtros & Mixins</h1>
        <p>{{ cpf | cpf | inverter }}</p>
        <p>{{ usuarioLogado }}</p>
        <hr>
        <input type="text" :value="cpf | cpf">
        <hr>
      <div>
        <ul>
          <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
      </div>
    </div>
    
</template>

<script>
  import frutasMixin from "@/components/filtros-mixins-exercicios/frutasMixin";
  import usuarioMixin from "@/components/filtros-mixins-exercicios/usuarioMixin";
    export default {
        name: "filtros-mixins-exercicios",
        mixins: [frutasMixin, usuarioMixin],

        filters: {
            cpf(valor) {
                const arr = valor.split('')
                arr.splice(3, 0, '.')
                arr.splice(7, 0, '.')
                arr.splice(11, 0, '-')
                return arr.join('')
            }
        },
        data() {
            return {
                cpf: '67354296058'
            }
        },
        methods: {
            add() {
                this.frutas.push(this.fruta)
                this.fruta = ''
            }
        },
      created() {
          console.log('Created - App.vue!! ')
      }
    }
</script>

<style scoped>


</style>