<template>
	<div class="popup-origin -case">
		<div
			class="popup -case"
			:class="{
				'is-open': isOpen,
			}"
		>
			<button class="popup__closer" @click="closePopup">
				<img src="~assets/icons/x.svg" />
			</button>

			<div class="case">
				<video
					class="case__media"
					width="100%"
					height="auto"
					preload="metadata"
					ref="video"
					v-if="video"
					:src="video.attributes.url"
				/>

				<h2 class="case__heading" v-if="data">{{ data.Title }}</h2>

				<div class="case__description">
					<p v-if="data">{{ data.Description }}</p>

					<div class="case__awards" v-if="data && data.ProjectAwards">
						<div
							class="feature-award"
							v-for="award in data.ProjectAwards.slice(0, 2)"
							v-bind:key="award.id"
						>
							<div class="circle">
								<img :src="award.Icon.data.attributes.url" v-if="award.Icon" />
							</div>
							<span class="feature-award__title">{{ award.Title }}</span>
						</div>
					</div>
				</div>
			</div>

			<div class="popup__footer">
				<a href="" target="_blank">View site</a>
				<a href="" target="_blank">Case on Behance</a>
			</div>
		</div>

		<!-- <div class="Popup"
			@touchstart="handleTouchstart"
			@touchmove="handleTouchmove"
		>

			<slot></slot>
		</div> -->

		<div
			class="overlay"
			:class="{
				'is-shown': isOpen,
			}"
			@click="closePopup"
		></div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Overlay from '~/components/ui/Overlay.vue'

export default {
	mounted() {},

	computed: {
		...mapGetters({
			isOpen: 'popup/isOpen',
			data: 'popup/data',
		}),

		video() {
			if (this.data) return this.data.ProjectMedia.Video.data
		},
	},

	methods: {
		closePopup() {
			this.$store.dispatch('popup/setIsOpen', { isOpen: false })

			setTimeout(() => {
				this.$store.dispatch('popup/setData', { data: null })
			}, 600)
		},
	},
}

// import Icon from './Icon.vue'
// import { useScroll } from '@/hooks/useScroll'

// const emit = defineEmits(['close'])
// const { disableScroll, enableScroll } = useScroll()

// const isOpen = ref(false)

// const closePopup = () => {
// 	isOpen.value = false
// 	enableScroll()
// 	emit('close')
// }

// const togglePopup = () => isOpen.value = !isOpen.value

// const props = defineProps({
// 	closeOnSwipeDown: {
//     type: Boolean,
//     default: false
//   },
// })

// defineExpose({
// 	togglePopup,
// 	isOpen,
// })

// watch(isOpen, () => {
// 	if (isOpen.value) disableScroll()
// })

// const touchInitial = ref()

// const handleTouchstart = (e) => {
// 	if (!props.closeOnSwipeDown) return
// 	touchInitial.value = e.touches[0].clientY
// }

// const handleTouchmove = (e) => {
// 	if (!props.closeOnSwipeDown) return

// 	let te = e.changedTouches[0].clientY

// 	if (touchInitial.value + 40 < te) {
// 		closePopup()
// 	}
// }
</script>
