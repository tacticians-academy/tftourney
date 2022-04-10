const storage = window.localStorage

export function getStorage(key: string, defaultValue: string = '') {
	const value = storage.getItem(key)
	if (value !== null && value !== 'null') {
		return value
	}
	return defaultValue
}

export function setStorage(key: string, value: any) {
	return storage.setItem(key, value)
}

export function removeStorage(key: string) {
	return storage.removeItem(key)
}

// Types

export function getStorageBool(key: string, defaultValue: boolean) {
	const item = getStorage(key)
	return item !== null ? item == 'true' : defaultValue
}

export function getStorageInt(key: string, defaultValue: number) {
	const raw = getStorage(key)
	if (!raw) {
		return defaultValue
	}
	const parsed = parseInt(raw, 10)
	return !isNaN(parsed) ? parsed : defaultValue
}
