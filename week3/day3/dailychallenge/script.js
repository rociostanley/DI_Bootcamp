let inputArea = document.getElementById("text")

input.addEventListener ('keydown', logkey)

function lokey (e) {
	if (e.keycode < 64 || e.keycode > 91){
		// alert ("please enter something other than " + e.key)
		console.log(e.key)
		//e.preventDefault()
	}
}
document.body ()