console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = './themes/style.css'
	}

	if(mode == 'pink'){
		document.getElementById('theme-style').href = './themes/pink.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = './themes/green.css'
	}

	if(mode == 'orange'){
		document.getElementById('theme-style').href = './themes/orange.css'
	}

	localStorage.setItem('theme', mode)
}