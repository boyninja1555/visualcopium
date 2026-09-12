import type { Vec2n, bboolean } from "./typing.js"
import { btrue, bfalse } from "./typing.js"

export type BrowserKey =
	| "a"
	| "b"
	| "c"
	| "d"
	| "e"
	| "f"
	| "g"
	| "h"
	| "i"
	| "j"
	| "k"
	| "l"
	| "m"
	| "n"
	| "o"
	| "p"
	| "q"
	| "r"
	| "s"
	| "t"
	| "u"
	| "v"
	| "w"
	| "x"
	| "y"
	| "z"
	| "0"
	| "1"
	| "2"
	| "3"
	| "4"
	| "5"
	| "6"
	| "7"
	| "8"
	| "9"
	| "Space"
	| "Enter"
	| "Backspace"
	| "Tab"
	| "Escape"
	| "Shift"
	| "Ctrl"
	| "Alt"
	| "Up Arrow"
	| "Down Arrow"
	| "Left Arrow"
	| "Right Arrow"
	| "Caps Lock"
	| "Delete"
	| "Home"
	| "End"
	| "Page Up"
	| "Page Down"
	| "Insert"
	| "F1"
	| "F2"
	| "F3"
	| "F4"
	| "F5"
	| "F6"
	| "F7"
	| "F8"
	| "F9"
	| "F10"
	| "F11"
	| "F12"
	| "`"
	| "-"
	| "="
	| "["
	| "]"
	| "\\"
	| ";"
	| "'"
	| ","
	| "."
	| "/"

export function WhenFlagClicked(callback: () => void): void {
	document.addEventListener("DOMContentLoaded", callback)
}

window.VC_keyPressListeners = new Map()
window.addEventListener("keypress", event => {
	if (!window.VC_keyPressListeners.has(event.key)) return
	for (const listener of window.VC_keyPressListeners.get(event.key)!) listener()
})

export function WhenKeyPressed(key: BrowserKey, callback: () => void): void {
	let domKey = ""
	switch (key) {
		case "Space":
			domKey = " "
		case "Enter":
			domKey = "Enter"
		case "Backspace":
			domKey = "Backspace"
		case "Tab":
			domKey = "Tab"
		case "Escape":
			domKey = "Escape"
		case "Shift":
			domKey = "Shift"
		case "Ctrl":
			domKey = "Control"
		case "Alt":
			domKey = "Alt"
		case "Up Arrow":
			domKey = "ArrowUp"
		case "Down Arrow":
			domKey = "ArrowDown"
		case "Left Arrow":
			domKey = "ArrowLeft"
		case "Right Arrow":
			domKey = "ArrowRight"
		case "Caps Lock":
			domKey = "CapsLock"
		case "Delete":
			domKey = "Delete"
		case "Home":
			domKey = "Home"
		case "End":
			domKey = "End"
		case "Page Up":
			domKey = "PageUp"
		case "Page Down":
			domKey = "PageDown"
		case "Insert":
			domKey = "Insert"
		default:
			domKey = key
	}

	if (!window.VC_keyPressListeners.has(domKey)) window.VC_keyPressListeners.set(domKey, [])
	const listeners = window.VC_keyPressListeners.get(domKey)!
	listeners.push(callback)
	window.VC_keyPressListeners.set(domKey, listeners)
}

window.VC_pressedKeys = new Set()
window.addEventListener("keydown", event => window.VC_pressedKeys.add(event.key))
window.addEventListener("keyup", event => window.VC_pressedKeys.delete(event.key))

export function KeyPressed(key: BrowserKey): bboolean {
	switch (key) {
		case "Space":
			return window.VC_pressedKeys.has(" ") ? btrue : bfalse
		case "Enter":
			return window.VC_pressedKeys.has("Enter") ? btrue : bfalse
		case "Backspace":
			return window.VC_pressedKeys.has("Backspace") ? btrue : bfalse
		case "Tab":
			return window.VC_pressedKeys.has("Tab") ? btrue : bfalse
		case "Escape":
			return window.VC_pressedKeys.has("Escape") ? btrue : bfalse
		case "Shift":
			return window.VC_pressedKeys.has("Shift") ? btrue : bfalse
		case "Ctrl":
			return window.VC_pressedKeys.has("Control") ? btrue : bfalse
		case "Alt":
			return window.VC_pressedKeys.has("Alt") ? btrue : bfalse
		case "Up Arrow":
			return window.VC_pressedKeys.has("ArrowUp") ? btrue : bfalse
		case "Down Arrow":
			return window.VC_pressedKeys.has("ArrowDown") ? btrue : bfalse
		case "Left Arrow":
			return window.VC_pressedKeys.has("ArrowLeft") ? btrue : bfalse
		case "Right Arrow":
			return window.VC_pressedKeys.has("ArrowRight") ? btrue : bfalse
		case "Caps Lock":
			return window.VC_pressedKeys.has("CapsLock") ? btrue : bfalse
		case "Delete":
			return window.VC_pressedKeys.has("Delete") ? btrue : bfalse
		case "Home":
			return window.VC_pressedKeys.has("Home") ? btrue : bfalse
		case "End":
			return window.VC_pressedKeys.has("End") ? btrue : bfalse
		case "Page Up":
			return window.VC_pressedKeys.has("PageUp") ? btrue : bfalse
		case "Page Down":
			return window.VC_pressedKeys.has("PageDown") ? btrue : bfalse
		case "Insert":
			return window.VC_pressedKeys.has("Insert") ? btrue : bfalse
		default:
			return window.VC_pressedKeys.has(key) ? btrue : bfalse
	}
}

window.VC_mouseDown = bfalse
window.addEventListener("mousedown", () => (window.VC_mouseDown = btrue))
window.addEventListener("mouseup", () => (window.VC_mouseDown = bfalse))

export function MouseDown(): bboolean {
	return window.VC_mouseDown as bboolean
}

const mouse_position: Vec2n = { x: 0, y: 0 }

export function MousePosition(): Vec2n {
	return { ...mouse_position }
}

export function MouseX(): number {
	return mouse_position.x
}

export function MouseY(): number {
	return mouse_position.y
}

export function Ask(message: string): string {
	return prompt(message, "")!
}
