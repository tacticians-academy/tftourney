<template>
	<template v-for="(channelName, index) in sampleData.perspectives" :key="index">
		<Teleport :to="state.primaryPerspective === channelName ? '#primary-stream' : '#secondary-streams'">
			<div class="h-full relative  group" @click="onSecondary(channelName)">
				<TwitchPlayer :channelName="channelName" :isPrimary="state.primaryPerspective === channelName" />
				<div v-if="state.primaryPerspective !== channelName" class="player-label">{{ channelName }}</div>
			</div>
		</Teleport>
	</template>
</template>

<script setup lang="ts">
import TwitchPlayer from '#p/components/TwitchPlayer.vue'

import { sampleData } from '#p/models/api'
import { state } from '#p/models/store'

function onSecondary(channel: string) {
	state.primaryPerspective = channel
}
</script>

<style lang="postcss">
.player-secondary {
	@apply h-64 flex-grow overflow-y-hidden;
	max-width: 400px;
}

.player-label {
	@apply absolute inset-0 hidden group-hover:block text-white;
	text-shadow: 0 1px 2px black;
}
</style>
