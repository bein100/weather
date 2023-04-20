<template lang="pug">
.main-content(v-if="getFullWeather")
    .main-content-left
        span.main-content-left__degree {{ Math.round(getFullWeather.current.temp) }}°
        span.main-content-left__today Сегодня
        span.main-content-left__time Время: {{getHour}}:{{getMinute}}
        span.main-content-left__city Город: {{ getFullWeather.city }}
        img(src="@/assets/img/sun.svg", alt="alt" v-if="getMain == 'Clear'")
        img(src="@/assets/img/mainly_cloudy.svg", alt="alt" v-else-if="getMain == 'Clouds'")
        img(src="@/assets/img/rain.svg", alt="alt" v-else-if="getMain == 'Rain'")
        img(src="@/assets/img/snow.svg", alt="alt" v-else-if="getMain == 'Snow'")
    .main-content-right
        img(src="@/assets/img/cloud.svg", alt="alt")
        .main-content-right-item
            img(src="@/assets/img/icon-1.svg", alt="alt")
            span Температура
            span {{ Math.round(getFullWeather.current.temp) }}° - ощущается как {{ Math.round(getFullWeather.current.feels_like)}}°
        .main-content-right-item
            img(src="@/assets/img/icon-2.svg", alt="alt")
            span Давление
            span(v-if="getPressure == 760") {{getPressure}}мм ртутного столба - нормальное
            span(v-else-if="getPressure < 760") {{getPressure}}мм ртутного столба - пониженное
            span(v-else-if="getPressure > 760") {{getPressure}}мм ртутного столба - повышенное
        .main-content-right-item
            img(src="@/assets/img/icon-3.svg", alt="alt")
            span Влажность
            span(v-if="getHumidity <= 40") {{getHumidity}}% - пониженная влажность
            span(v-else-if="getHumidity > 40 &&  getHumidity <= 60") {{getHumidity}}% - нормальная влажность
            span(v-else-if="getHumidity > 60 && getHumidity <= 100") {{getHumidity}}% - повышенная влажность
        .main-content-right-item
            img(src="@/assets/img/icon-4.svg", alt="alt")
            span Ветер
            span(v-if="getWindDeg <= 90") {{getFullWeather.current.wind_speed}} м/с северо-восток - {{windPower}} ветер
            span(v-else-if="getWindDeg > 90 &&  getWindDeg <= 180") {{getWindSpeed}} м/с юго-восток - {{windPower}} ветер
            span(v-else-if="getWindDeg > 180 &&  getWindDeg <= 270") {{getWindSpeed}} м/с юго-запад - {{windPower}} ветер
            span(v-else-if="getWindDeg > 270 &&  getWindDeg <= 360") {{getWindSpeed}} м/с северо-запад - {{windPower}} ветер
.loading(v-else)
    .loading__element
</template>
<script>
import { mapState, mapGetters } from "vuex";
import unix from '@/timestamp'
export default {
    computed: {
        ...mapState(['getFullWeather']),
        ...mapGetters(['getMain', 'getHumidity', 'getPressure', 'getWindDeg', 'getWindSpeed']),
        windPower(){
            if (this.getWindSpeed <= 3) {
                return 'легкий'
            }else if(this.getWindSpeed > 3 && this.getWindSpeed <= 7) {
                return 'слабый'
            }else if(this.getWindSpeed > 7 && this.getWindSpeed <= 9) {
                return 'свежый'
            }else if(this.getWindSpeed > 9 && this.getWindSpeed <= 16) {
                return 'крепкий'
            }else if(this.getWindSpeed > 16 && this.getWindSpeed <= 21) {
                return 'шторм'
            }else if(this.getWindSpeed > 21 ) {
                return 'Ураган'
            }
        },
        getHour(){
            return unix(this.getFullWeather.current.dt, 'hour')
        },
        getMinute(){
            return unix(this.getFullWeather.current.dt, 'minute')
        }
    }
}
</script>
<style lang="scss">
    
</style>