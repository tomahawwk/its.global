import Vue from 'vue'
import VueYandexMetrika from 'vue-yandex-metrika'

export default ({app}) =>{
	Vue.use(VueYandexMetrika, {
		id: 90573588,
		env: process.env.NODE_ENV,
		router: app.router,
		clickmap:true,
		trackLinks:true,
		accurateTrackBounce:true,
		webvisor:true,
	})
}
