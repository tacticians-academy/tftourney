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
