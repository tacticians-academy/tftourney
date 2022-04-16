import { sampleData } from '#p/models/api'
import { reactive } from 'vue'

export const state = reactive({
	primaryPerspective: 'TeamfightTactics',
})

function setPerspectives(data: { perspectives: string[] }) {
	const primaryPerspective = data.perspectives[0]
	state.primaryPerspective = primaryPerspective
}

setPerspectives(sampleData)
