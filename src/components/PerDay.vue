<template lang="pug">
.main-week-day
    h3 {{getWeekday}}
    h4 {{getDay}} {{getMonth}}
    img(src="@/assets/img/sun.svg", alt="alt" v-if="main == 'Clear'")
    img(src="@/assets/img/mainly_cloudy.svg", alt="alt" v-else-if="main == 'Clouds'")
    img(src="@/assets/img/rain.svg", alt="alt" v-else-if="main == 'Rain'")
    img(src="@/assets/img/snow.svg", alt="alt" v-else-if="main == 'Snow'")
    h5 {{Math.round(day.temp.max)}}°
    h6 {{Math.round(day.temp.min)}}°
    p {{day.weather[0].description}}
</template>
<script>
import unix from '@/timestamp'
export default {
    props: ['day'],
    computed: {
        main(){
            for (const key in this.day.weather) {
                return this.day.weather[key].main
            }
        },
        getWeekday(){
            return unix(this.day.dt, 'weekday')
        },
        getDay(){
            return unix(this.day.dt, 'day')
        },
        getMonth(){
            return unix(this.day.dt, 'month')
        }
    }
}
</script>
<style lang="scss">
    .main-week-day{
        img{
                width: 45px;
                height: 45px;
            }
        h3{
            text-transform: capitalize;
        }
    }
</style>