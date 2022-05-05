<template>
<template v-for="(channelName, index) in sampleData.perspectives" :key="index">
	<Teleport :to="state.primaryPerspective === channelName ? '#primary-stream' : '#secondary-streams'">
		<div class="player-container  group" @click="onSecondary(channelName)">
			<TwitchPlayer :channelName="channelName" :isPrimary="state.primaryPerspective === channelName" />
			<div v-if="state.primaryPerspective !== channelName" class="player-label">{{ channelName }}</div>
		</div>
	</Teleport>
</template>
</template>

<script setup lang="ts">
import TwitchPlayer from '#p/components/TwitchPlayer.vue'

import { sampleData } from '#p/models/api'
import { setPrimaryPerspective, state } from '#p/models/store'

function onSecondary(channel: string) {
	setPrimaryPerspective(channel)
}
</script>

<style scoped lang="postcss">
.player-container {
	@apply flex-grow h-full relative cursor-pointer;
}

.player-label {
	@apply absolute inset-0 hidden group-hover:block pl-1 text-white;
	text-shadow: 0 1px 2px black;
}
</style>
