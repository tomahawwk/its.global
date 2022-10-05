<template>
	<header
		class="header container"
		:class="[
			{
				'is-active': active,
			},
		]"
	>
		<Logo v-if="logo" :image="logo" />
		<Menu v-if="menu" :links="menu" />
	</header>
</template>

<script>
import { headerQuery } from "~/graphql/queries/header"

import Menu from "~/components/Menu"
import Logo from "~/components/Logo"
export default {
	props: ["active"],
	computed: {
		logo() {
			return this.header.data.attributes.logo.image.data
		},
		menu() {
			return this.header.data.attributes.menu.link
		},
	},
	apollo: {
		header: {
			prefetch: true,
			query: headerQuery,
		},
	},
}
</script>
