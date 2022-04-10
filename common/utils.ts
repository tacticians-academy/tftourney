export const TESTING = process.env.NODE_ENV !== 'production'

export function nonEmpty<TValue>(value: TValue | null | undefined): value is TValue {
	if (value === null || value === undefined) {
		return false
	}
	const testDummy: TValue = value
	return typeof testDummy === 'string' || Array.isArray(testDummy)
		? testDummy.length > 0
		: true
}

export function getMax<T extends object>(isMaximum: boolean, entries: T[], key: keyof T): T | undefined {
	let bestValue: number | null
	let bestResult: T | undefined
	entries.forEach(entry => {
		const value = entry[key] as unknown as number
		if (value == null) { return }
		if (bestValue == null || (isMaximum ? value > bestValue : value < bestValue)) {
			bestValue = value
			bestResult = entry
		}
	})
	return bestResult
}

export function getMaxFrom<T>(isMaximum: boolean, entries: T[], valueFn: (entry: T) => number | undefined): T | undefined {
	let bestValue: number | null
	let bestResult: T | undefined
	entries.forEach(entry => {
		const value = valueFn(entry)
		if (value == null) { return }
		if (bestValue == null || (isMaximum ? value > bestValue : value < bestValue)) {
			bestValue = value
			bestResult = entry
		}
	})
	return bestResult
}
