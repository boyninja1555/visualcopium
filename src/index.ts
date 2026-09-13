import type { Condition } from "./typing.js"

declare global {
	interface Window {
		VC_pressedKeys: Set<String>
		VC_keyPressListeners: Map<string, (() => void)[]>
		VC_mouseDown: boolean
	}
}

// Control

/**
 * Repeats the code block/function a number of times.
 * @param times Number of times to repeat
 * @param callback Code block/function
 */
export function Repeat(times: number, callback: () => void): void {
	for (let i = 0; i < times; i++) callback()
}

/**
 * Repeats the code block/function until a condition is finally true.
 * @param condition Either a code block/function that returns a boolean or an expression that evaluates to one.
 * @param callback Code block/function
 */
export function RepeatUntil(condition: Condition, callback: () => void): void {
	while (
		!(() =>
			typeof condition == "number"
				? condition != 0
				: typeof condition == "boolean"
					? condition
					: condition())()
	)
		callback()
}

/**
 * Repeats the code block/function until a condition is no longer true.
 * @param condition Either a code block/function that returns a boolean or an expression that evaluates to one.
 * @param callback Code block/function
 */
export function RepeatWhile(condition: Condition, callback: () => void): void {
	while (
		!(() =>
			typeof condition == "number"
				? condition != 0
				: typeof condition == "boolean"
					? condition
					: condition())()
	)
		callback()
}

/**
 * Repeats the code block/function forever. Use sparingly! Not recommended for browser use, will lag crazily. This is something we cannot fix.
 * @param callback Code block/function
 */
export function Forever(callback: () => void): void {
	while (true) callback()
}

// Math

/**
 * Picks random integer between a minimum and maximum (inclusive)
 * @param minimum Minimum integer
 * @param maximum Maximum integer
 * @returns Random integer
 */
export function PickRandom(minimum: number, maximum: number): number {
	const min = Math.ceil(minimum)
	return Math.floor(Math.random() * (Math.floor(maximum) - min + 1)) + min
}

// I/O

/**
 * Asks the user a question and waits for a response.
 * @param message Question/message to ask
 * @returns User's response
 */
export function Ask(message: string): string {
	return prompt(message, "")!
}

/**
 * Says a message.
 * @param message Message to say
 */
export function Say(message: string): void {
	console.log(message)
}

/**
 * Says a message in the form of a warning.
 * @param warning Warning message to say
 */
export function SayWarning(warning: string): void {
	console.warn(warning)
}

/**
 * Says a message in the form of an error.
 * @param error Error message to say
 */
export function SayError(error: string): void {
	console.error(error)
}
