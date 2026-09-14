<div align="center">
	<h1>Visualcopium</h1>
	<p>Copium for visual programmers!</p>
</div>

---

You don't need a silly custom language, you don't need Scratch. You need a brittle cross between semi-real code (aka JavaScript, but how real is that?) and visualness!

[(skip to installation)](#installation)

**Visualcopium** does just that! We provide separate "blocks" for both the web and Node.js/Bun, but also some generic ones. And to prove its amazingness, here's some examples:

Repeating is fun!

```javascript
Repeat(10 /*times*/, () => {
	// some code that does stuff 10 times :)
	var message = Ask("Do you wanna? ")                   // you can ask the user stuff!
	Say("Here's a number anyways! " + PickRandom(1, 100)) // you can say stuff back!
})

var canBeFalseIdfk = btrue
RepeatWhile(() => canBeFalseIdfk, () => { // Some conditions (like ()=>canBeFalseIdfk) might be a block and return a boolean instead of passing one directly! For cases where the boolean might change over time.
	canBeFalseIdfk = bfalse
	Say("Yay canBeFalseIdfk is now false!")
})

RepeatWhile(bfalse, () => { // Your condition can also be a boolean directly! See a few sections below for help with our *special* booleans.
	SayError("Bro if you can see this your computer might be broken :(")
})

Forever(() => {
	// dude this'll NEVER stop :sob:
	SayError("Why did you finish already? Here's an error you ajfojafjiwaifju!!")

	If(KeyPressed("Escape"), () => {
		SayError("There is no escape!")
	})
})
```

And if you're a silly person, there's an optional block that waits for this supposed page to load:

```javascript
WhenFlagClicked(() => {
	// some code that does stuff AFTER the page loads...
})
```

For conditions (the first thingy passed to `RepeatWhile` and more), we reimplement a style of booleans similar to Scratch's. Is something true? Import and type `btrue`! Is something false? Import and type `bfalse`!

### Installation

You can either install our JavaScript (NPM) package globally, or make a lil project folder. Either way!

```bash
npm install -g visualcopium

# ORRRR make your own lil project folder :)
npm init
npm install visualcopium
```
