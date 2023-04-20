<template>
	<Header />
  <Main />
</template>

<script>
import { mapActions } from "vuex";
import Header from './components/Header.vue'
import Main from './components/Main.vue'

export default {
  components: { Header, Main },
 methods: {
  ...mapActions(['getWeather'])
 },

 created() {
  this.getWeather('Tashkent')
 },
}
</script>

<style lang="scss">

</style>
