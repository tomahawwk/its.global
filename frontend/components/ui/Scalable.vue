<template>
	<svg class="scalable" :viewBox="`0 0 ${width} ${height}`">
		<foreignObject x="0" y="0" :width="width" :height="height">
			<slot></slot>
		</foreignObject>
	</svg>
</template>

<script>
export default {
	props: ['width', 'height'],
}
</script>
