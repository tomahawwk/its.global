<template>
	<div
		:class="[
			'project-item',
			{
				'project-item--even': even,
				'project-item--video-play': isActiveVideo,
			},
		]"
	>
		<div class="project-item__part" @click="openPopup">
			<div class="project-item__title" v-if="item.Title">{{ item.Title }}</div>

			<div class="project-item__description" v-if="item.Description">
				{{ item.Description }}
			</div>

			<ul class="project-item__categories" v-if="item.Categories">
				<li
					class="project-item__category"
					v-for="category in item.Categories"
					v-bind:key="category.id"
				>
					{{ category.text }}
				</li>
			</ul>

			<ul class="project-item__awards" v-if="item.ProjectAwards">
				<li
					class="project-item__award"
					v-for="award in item.ProjectAwards"
					v-bind:key="award.id"
				>
					<div class="project-item__award_icon">
						<img :src="award.Icon.data.attributes.url" v-if="award.Icon" />
					</div>
					<span class="project-item__award_title">{{ award.Title }}</span>
				</li>
			</ul>
		</div>

		<div
			class="project-item__video"
			ref="videoBlock"
			@click="openPopup"
			@mouseover="onMouseoverVideo"
			@mouseout="onMouseoutVideo"
			:class="{ 'is-active': isActiveVideo }"
		>
			<div class="project-item__video-effect">
				<div
					class="project-item__video-area"
					ref="videoArea"
					@mouseover="onMouseoverArea"
					@mouseout="onMouseoutArea"
				></div>

				<video
					width="100%"
					height="auto"
					playsinline
					preload="metadata"
					loop
					muted
					v-if="video"
					ref="video"
					:src="video.attributes.url"
				/>
			</div>

			<div class="project-item__cursor" :style="videoBtnCoords">
				<div class="project-item__cursor_inner">
					<span>
						<p>More</p>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { gsap } from 'gsap'

export default {
	props: ['item', 'even'],

	data: () => ({
		isActiveVideo: false,
		videoBtnCoords: {
			top: '50%',
			left: '50%',
		},
	}),

	computed: {
		video() {
			return this.item.ProjectMedia.Video.data
		},
	},

	mounted() {
		// console.log(this.video)
	},

	methods: {
		openPopup() {
			this.$store.dispatch('popup/setData', { data: this.item })
			this.$store.dispatch('popup/setIsOpen', { isOpen: true })
		},

		onMouseoverVideo(e) {
			if (
				!e.relatedTarget ||
				!e.relatedTarget.closest('.project-item__video')
			) {
				this.$refs.videoBlock.addEventListener('mousemove', this.moveCursor)
				this.playVideo()
			}
		},

		onMouseoutVideo(e) {
			if (
				!e.relatedTarget ||
				!e.relatedTarget.closest('.project-item__video')
			) {
				this.$refs.videoBlock.removeEventListener('mousemove', this.moveCursor)
				this.pauseVideo()
			}
		},

		moveCursor(e) {
			const { top, left } = this.$refs.videoBlock.getBoundingClientRect()
			this.videoBtnCoords = {
				top: e.clientY - top + 'px',
				left: e.clientX - left + 'px',
			}
		},
		playVideo() {
			this.$refs.video.play()
			this.isActiveVideo = true
		},
		pauseVideo() {
			this.$refs.video.pause()
			this.isActiveVideo = false
		},

		onMouseoverArea(e) {
			this.$refs.videoArea.addEventListener('mousemove', this.callParallax)
		},

		onMouseoutArea(e) {
			this.$refs.videoArea.addEventListener('mouseleave', (e) => {
				gsap.to(this.$refs.video, {
					scale: 1,
					x: 0,
					y: 0,
					ease: 'sine',
					duration: 0.35,
				})
			})
		},

		callParallax(e) {
			this.parallaxIt(e, this.$refs.video)
		},

		parallaxIt(e, target, movement = 0.12) {
			var boundingRect = this.$refs.videoArea.getBoundingClientRect()
			var relX = e.pageX - boundingRect.left
			var relY = e.pageY - boundingRect.top
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop

			gsap.to(target, {
				x: (relX - boundingRect.width * 0.5) * movement,
				y: (relY - boundingRect.height * 0.5 - scrollTop) * movement,
				ease: 'power1',
				duration: 0.35,
				scale: 1.04,
			})
		},
	},
}
</script>
