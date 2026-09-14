<div align="center">
	<h1>Visualcopium</h1>
	<p>Copium for visual programmers!</p>
</div>

---

You don't need a silly custom language, you don't need Scratch. You need a brittle cross between semi-real code (aka JavaScript, but how real is that?) and visualness!

**Visualcopium** does just that! We provide separate "blocks" for both the web and Node.js/Bun, but also some generic ones. And to prove its amazingness, here's some examples:

Repeating is fun!

```javascript
Repeat(10 /*times*/, () => {
	// some code that does stuff 10 times :)
	let message = Ask("Do you wanna? ")                   // you can ask the user stuff!
	Say("Here's a number anyways! " + PickRandom(1, 100)) // you can say stuff back!
})

let canBeFalseIdfk = true
RepeatWhile(() => canBeFalseIdfk, () => {
	canBeFalseIdfk = false
	Say("Yay canBeFalseIdfk is now false!")
})

RepeatWhile(false, () => { // Your condition can also directly be a boolean! Or a number, anything except 0 becomes true.
	SayError("Bro if you can see this your computer might be broken :(")
})

Forever(() => {
	// dude this'll NEVER stop :sob:
	SayError("Why did you finish already? Here's an error you ajfojafjiwaifju!!")

	if (KeyPressed("Escape")) {
		SayError("There is no escape!")
	}
})
```

And if you're a silly person, there's an optional block that waits for this supposed page to load:

```javascript
WhenFlagClicked(() => {
	// some code that does stuff AFTER the page loads...
})
```
