export default {
  name: "frutasMixin",
  data() {
    return {
      fruta: '',
      frutas: ['banana', 'maça', 'laranja']
    }
  },
  methods: {
    add() {
      this.frutas.push(this.fruta)
      this.fruta = ''
    }
  },
  created() {
    console.log('Created - Frutas.vue! ')
  }
}