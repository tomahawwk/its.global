<template>
	<div class="container">
		<div class="contact-page" data-scroll data-scroll-offset="0%, 0%">
			<div class="contact-page__header">
				<h1 class="u-mb-0">Belgrade</h1>
				<div class="contact-page__sub u-text-sm">Serbia, Europe</div>
			</div>

			<div class="contact-page__contacts">
				<div class="contact-page__cta">
					<div class="point"></div>
					<div class="u-spread-text">Let's talk about your project</div>
				</div>

				<div class="contact">
					<h2 class="contact__title">Roman Mitkevich</h2>
					<ul class="contact__links">
						<li>
							<a href="https://facebook.com" target="_blank"> Facebook </a>
						</li>
						<li>
							<a href="https://linkedin.com" target="_blank"> LinkedIn </a>
						</li>
						<li>
							<a href="mailto:rm@itsagency.me" target="_blank">
								rm@itsagency.me
							</a>
						</li>
					</ul>
				</div>

				<div class="contact">
					<h2 class="contact__title">Kirill Naidenyshev</h2>
					<ul class="contact__links">
						<li>
							<a href="https://facebook.com" target="_blank"> Facebook </a>
						</li>
						<li>
							<a href="https://linkedin.com" target="_blank"> LinkedIn </a>
						</li>
						<li>
							<a href="mailto:rm@itsagency.me" target="_blank">
								rm@itsagency.me
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div class="contact-page__image">
				<img
					src="https://res.cloudinary.com/its-agency/image/upload/v1662386523/571d14b6f18c93738a89b3db396136bf_001a4491e7.png"
					alt=""
					data-scroll
					data-scroll-speed="-2"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import page from '~/mixins/page'

export default Vue.extend({
	mixins: [page],
})
</script>
