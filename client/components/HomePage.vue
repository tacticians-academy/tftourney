<template>
	<div class="h-full flex flex-col">
		<div id="primary-stream" class="flex-grow w-full" />
		<div class="flex w-full overflow-y-hidden" :style="{ height: secondaryHeight }">
			<div id="secondary-streams" class="w-full h-64 flex" />
		</div>
	</div>
	<TwitchTeleport />
</template>

<script setup lang="ts">
import TwitchTeleport from '#p/components/TwitchTeleport.vue'

const secondaryHeight = `${100 / 8 / 16 * 9}vw`
</script>
