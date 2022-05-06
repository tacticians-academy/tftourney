<template>
<div class="h-full flex flex-col">
	<div class="menu absolute z-50">
		<button class="p-2" @click="showMenu = !showMenu">
			<div v-for="bar in 3" :key="bar" class="icon-bar" />
		</button>
		<div v-if="showMenu" class="w-32 bg-gray-200/50">
			<a href="https://github.com/tacticians-academy/tftourney" target="_blank" class="block p-2">GitHub</a>
		</div>
	</div>
	<div id="primary-stream" class="flex-grow w-full" />
	<div class="flex w-full overflow-y-hidden" :style="{ height: secondaryHeight }">
		<div id="secondary-streams" class="w-full h-64 flex" />
	</div>
</div>
<TwitchTeleport />
</template>

<script setup lang="ts">
import TwitchTeleport from '#p/components/TwitchTeleport.vue'

import { sampleData } from '#p/models/api'
import { ref } from 'vue'

const secondaryHeight = `${100 / (sampleData.perspectives.length - 1) / 16 * 9}vw`

const showMenu = ref(false)
</script>

<style scoped lang="postcss">
.icon-bar {
	@apply m-1 w-6 h-[2px] bg-gray-200 shadow;
}
</style>
