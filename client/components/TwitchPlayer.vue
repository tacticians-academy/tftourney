<template>
	<div ref="containerEl" :class="isPrimary ? 'h-full' : 'player-secondary'" />
</template>

<script setup lang="ts">
import { defineProps, ref, watchEffect } from 'vue'

import { getMax } from '#c/utils'

const props = defineProps<{
	channelName: string
	isPrimary: boolean
}>()

const containerEl = ref<Element | null>(null)

watchEffect(() => {
	if (containerEl.value) {
		const player = new Twitch.Embed(containerEl.value, {
			width: '100%',
			height: '100%',
			channel: props.channelName,
		})
		player.addEventListener(Twitch.Player.PLAY, () => {
			if (!props.isPrimary) {
				const lowestBitrate: any = getMax(false, player.getQualities(), 'bitrate')
				if (lowestBitrate != null && player.getQuality() !== lowestBitrate.group) {
					player.setQuality(lowestBitrate.group)
				}
			}
		})
		player.addEventListener(Twitch.Player.READY, () => {
			// player.setVolume(1)
			player.setMuted(!props.isPrimary)
		})
	}
})
</script>

<style lang="postcss">
.player-secondary {
	@apply overflow-y-hidden pointer-events-none;
	max-width: 400px;
}
</style>
