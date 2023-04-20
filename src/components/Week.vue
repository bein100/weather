<template lang="pug">
.main-week(v-if="getFullWeather")
    h2 На неделю
    .main-week-days(v-if="getDailyWeather")
        PerDay(v-for="(day,i) in getDailyWeather" :key="i" :day="day")
        
</template>
<script>
import PerDay from './PerDay.vue'
import { mapActions, mapGetters, mapState } from "vuex";
export default {
    components: {PerDay},
    computed: {
        ...mapGetters(['getDailyWeather']),
        ...mapState(['getFullWeather'])
    },
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