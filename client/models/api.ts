import { TESTING } from '#c/utils'

const ENDPOINT_URL = TESTING ? 'http://localhost:4001' : 'https://tftourney.ky.is'

async function ajax<Response>(endpointComponents: [string, string?, string?], body?: object) {
	try {
		const response = await fetch(
			`${TESTING ? '' : ENDPOINT_URL}/api/${endpointComponents.join('/')}`,
			{
				method: body ? 'POST' : 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
				body: body ? JSON.stringify(body) : undefined,
			})
		const json = await response.json()
		return json
	} catch (error: any) {
		if ('cancel' in error) {
			console.log(error.message, error.cancel)
			throw undefined
		} else {
			console.log(error)
			throw error
		}
	}
}

// export function test() {
// 	type Response = { }
// 	return ajax<Response>([ ])
// }

export const sampleData = {
	perspectives: [
		'TeamfightTactics',
		'inikoiniko',
		'ramblinnn',
		'greenbeing',
		'slooperx',
		'ging',
		'eusouolucastft',
		// 'TeamfightTactics',
		// 'TeamfightTactics',
	],
}
