import { nonEmpty } from '#c/utils'

import { APIError } from '#s/helpers/errors'

function process(object: unknown, name: string, regex: RegExp) {
	if (object instanceof Object && name in object) {
		const value = (object as Record<string, string | undefined>)[name]?.trim()
		if (nonEmpty(value) && regex.test(value)) {
			return value
		}
	}
	throw new APIError(`Invalid ${name}`, false)
}
