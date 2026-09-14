/**
 * Special, custom boolean type based on 0/1. Similar to Scratch's booleans!
 */
export type bboolean = 0 | 1

/**
 * Statement/expression is **false**. A preset `bboolean` value!
 */
export const bfalse: bboolean = 0

/**
 * Statement/expression is **true**. A preset `bboolean` value!
 */
export const btrue: bboolean = 1

/**
 * Defines either a code block/function that returns a boolean or an expression that evaluates to one.
 */
export type Condition = (() => bboolean) | bboolean

/**
 * Defines a generic object type which can store two values of the same type. Look into `Vec2n` for the strictly numerical variant!
 */
export type Vec2<T> = { x: T; y: T }

/**
 * Defines an object type containing two numbers.
 */
export type Vec2n = Vec2<number>

/**
 * Defines a generic object type which can store three values of the same type. Look into `Vec3n` for the strictly numerical variant!
 */
export type Vec3<T> = { x: T; y: T }

/**
 * Defines an object type containing three numbers.
 */
export type Vec3n = Vec2<number>
