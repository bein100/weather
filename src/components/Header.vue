<template lang="pug">
header.header
	nav.container.header-nav
		a(href="")
			img(src="@/assets/img/logo.svg", alt="alt")
			span vue weather
		.header-nav-search
			img(src="@/assets/img/water.svg", alt="alt")
			input(
				type="text"
				placeholder="Выбрать город"
				v-model="query"
				@keydown.enter="getWeather(query)"
			)
			 
</template>
<script>
import { mapActions } from "vuex";
export default {
	data() {
		return {
			query: ''
		}
	},
    methods: {
		...mapActions(['getWeather'])
	},
}
</script>
<style lang="scss">
    
</style>