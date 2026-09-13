declare global {
	interface Window {
		VC_pressedKeys: Set<String>
		VC_keyPressListeners: Map<string, (() => void)[]>
		VC_mouseDown: boolean
	}
}

// Control

export function Repeat(times: number, callback: () => void): void {
	for (let i = 0; i < times; i++) callback()
}

export function RepeatUntil(condition: () => boolean, callback: () => void): void {
	while (!condition()) callback()
}

export function RepeatWhile(condition: () => boolean, callback: () => void): void {
	while (condition()) callback()
}

export function Forever(callback: () => void): void {
	while (true) callback()
}

// Math

export function PickRandom(minimum: number, maximum: number): number {
	const min = Math.ceil(minimum)
	return Math.floor(Math.random() * (Math.floor(maximum) - min + 1)) + min
}
