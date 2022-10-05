<template>
	<li class="services__item" :class="{ 'is-current': isVisible }">
		<div class="services__item_head" @mousedown="handleClickItem">
			<div class="services__item_title">
				<slot name="heading"></slot>
			</div>
			<img src="~assets/icons/arrow.svg" />
		</div>

		<transition
			name="collapse"
			@enter="startTransition"
			@after-enter="endTransition"
			@before-leave="startTransition"
			@after-leave="endTransition"
		>
			<div class="services__item_content" v-show="isVisible">
				<p>
					<slot name="content"></slot>
				</p>
			</div>
		</transition>
	</li>
</template>

<script>
export default {
	inject: ['Accordion'],

	data() {
		return {
			index: null,
		}
	},

	computed: {
		isVisible() {
			return this.index == this.Accordion.current
		},
	},

	created() {
		this.index = this.Accordion.count++
	},

	methods: {
		handleClickItem() {
			this.Accordion.current = this.isVisible ? null : this.index
		},

		startTransition(el) {
			el.style.height = el.scrollHeight + 'px'
		},

		endTransition(el) {
			el.style.height = ''
		},
	},
}
</script>
