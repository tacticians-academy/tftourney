import { sampleData } from '#p/models/api'
import { reactive, watchEffect } from 'vue'

export const state = reactive({
	players: [] as any[],
	lockAudioPerspective: null as string | null,
	primaryPerspective: 'TeamfightTactics',
})

function setPerspectives(data: { perspectives: string[] }) {
	const primaryPerspective = data.perspectives[0]
	state.lockAudioPerspective = primaryPerspective
	setPrimaryPerspective(primaryPerspective)
}

setPerspectives(sampleData)

export function setPrimaryPerspective(channelName: string) {
	const normalizedPrimaryName = channelName.toLowerCase()
	const primaryPlayer = state.players.find(player => player.getChannel().toLowerCase() === normalizedPrimaryName)
	if (state.lockAudioPerspective != null) {
		state.lockAudioPerspective = channelName
		state.players.forEach(player => player.setMuted(player !== primaryPlayer))
	}
	primaryPlayer?.setQuality('auto')
	state.primaryPerspective = channelName
}
