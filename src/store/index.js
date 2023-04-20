import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
	state: {
		apiKey: '39d3ba4c7b90500b54e5eeb067e71f3a',
		getFullWeather: null
	},
	mutations: {
		getWeather(state, payload){
			state.getFullWeather = payload
		}
	},
	actions: {
		async getWeather({commit, state}, city){
			try {
				let res = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${state.apiKey}`)
				let weather = res.data[0]
				let { lon, lat} = weather
				let res2 = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?units=metric&lat=${lat}&lon=${lon}&exclude=hourly,alerts,minutely&appid=${state.apiKey}&lang=ru`)
				let weatherInfo = res2.data
				let weatherObj = { ...weatherInfo, city: city}
				commit('getWeather', weatherObj)
			} catch (error) {
				console.log(error);
			}
		}
	},
	getters: {
		getMain: state => state.getFullWeather.current.weather[0].main,
		getPressure: state => state.getFullWeather.current.pressure,
		getHumidity: state => state.getFullWeather.current.humidity,
		getWindDeg: state => state.getFullWeather.current.wind_deg,
		getWindSpeed: state => state.getFullWeather.current.wind_speed,
		getDailyWeather: state => state.getFullWeather.daily
		
	}
})
