<template>
<div ref="containerEl" :class="isPrimary ? 'player-primary' : 'player-secondary'" />
</template>

<script setup lang="ts">
import { defineProps, ref, watchEffect } from 'vue'

import { getMax } from '#c/utils'

import { state } from '#p/models/store'

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
		state.players.push(player)
		player.addEventListener(Twitch.Player.PLAY, () => {
			if (!props.isPrimary) {
				if (state.lockAudioPerspective != null ? state.lockAudioPerspective !== props.channelName : player.getMuted() === true) {
					console.log(player.getQualities())
					const lowestBitrate: any = getMax(false, player.getQualities(), 'bitrate')
					if (lowestBitrate != null && player.getQuality() !== lowestBitrate.group) {
						player.setQuality(lowestBitrate.group)
					}
				}
			}
		})
		player.addEventListener(Twitch.Player.READY, () => {
			if (state.lockAudioPerspective != null) {
				player.setMuted(state.lockAudioPerspective !== props.channelName)
			}
		})
	}
})
</script>

<style lang="postcss">
.player-primary {
	@apply h-full;
}

.player-secondary {
	@apply h-[1024px] pointer-events-auto w-full;
}
</style>
