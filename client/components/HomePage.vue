<template>
	<div class="h-full flex flex-col">
		<TwitchPlayer :key="primaryPerspective" :channelName="primaryPerspective" isPrimary class="flex-grow" />
		<div class="w-full flex">
			<div v-for="channel in secondaryPerspectives" :key="channel" class="player-wrapper" @click="onSecondary(channel)">
				<TwitchPlayer :channelName="channel" :isPrimary="false" class="h-64" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import TwitchPlayer from '#p/components/TwitchPlayer.vue'

import { computed, ref } from 'vue'

import { sampleData } from '#p/models/api'

const primaryPerspective = ref(sampleData.perspectives[0])
const secondaryPerspectives = computed(() => sampleData.perspectives.filter(perspective => perspective !== primaryPerspective.value))

function onSecondary(channel: string) {
	primaryPerspective.value = channel
}

const secondaryHeight = `${100 / 8 / 16 * 9}vw`
</script>

<style lang="postcss">
.player-wrapper {
	@apply overflow-y-hidden flex-grow;
	max-width: 400px;
	height: v-bind(secondaryHeight);
}
</style>
