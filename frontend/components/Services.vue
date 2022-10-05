<template>
	<div class="services" data-scroll data-scroll-offset="10%, 0%">
		<div class="services__image">
			<img
				:src="`${image.attributes.url}`"
				data-scroll
				data-scroll-speed="-2"
			/>
		</div>

		<div class="services__content">
			<div class="services__title">Services</div>

			<Accordion>
				<AccordionItem v-for="item in items" :key="item.id">
					<template slot="heading">
						{{ item.title }}
					</template>

					<template slot="content">
						{{ item.description }}
					</template>
				</AccordionItem>
			</Accordion>
		</div>
	</div>
</template>

<script>
import { servicesQuery } from '~/graphql/queries/services'
import Accordion from './ui/Accordion.vue'
import AccordionItem from './ui/AccordionItem.vue'

export default {
	computed: {
		image() {
			return this.service.data.attributes.Image.image.data
		},

		items() {
			return this.service.data.attributes.ServiceItem
		},
	},

	methods: {},

	apollo: {
		service: {
			prefetch: true,
			query: servicesQuery,
		},
	},

	components: { Accordion, AccordionItem },
}
</script>
