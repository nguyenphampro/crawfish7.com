const toggleButtonWrapper = () => {
	app.select('.cfh-header .header-button').addEventListener('click',()=>{
		app.toggleClass(app.select('.cfh-header .header-wrapper .header-button .toggle-button'), 'active')
		app.toggleClass(app.select('.cfh-header'), 'active')
		if(app.select('.cfh-header').classList.contains('active') == true){
            let navListActive = app.selectAll('.cfh-header.active .main-nav ul li')
            let delay = 0.5
            for (let i = 0; i < navListActive.length; i++){
                navListActive[i].style.transitionDelay = delay + (0.05 * i) + 's'}
            }
        else{
            let navListActive = app.selectAll('.cfh-header .main-nav ul li')
            for (let i = 0; i < navListActive.length; i++){
            navListActive[i].style.transitionDelay = '0s'
            }
		}
	})
}
const positionMainNav = () =>{
	let wrapHei = app.select('.cfh-header .header-wrapper').offsetHeight
	app.select('.cfh-header .main-nav').style.top = wrapHei + 'px'
}
const scrollToSection = ()=>{
	let el = app.selectAll('.cfh-header .main-nav ul li, .cfh-home-1 a')
	for(let i = 0;i<el.length;i++){
		el[i].addEventListener('click',()=>{
			// removeClass
			for(let k = 0;k<el.length;k++){
				app.removeClass(el[k], 'active')
			}
			// addClass
			app.addClass(el[i], 'active')
			// scrollTo
			let to = el[i].getAttribute('data-to')
			let offset = app.select('.cfh-home-'+ to).offsetTop
			let heaHei = app.select('.cfh-header').offsetHeight + app.select('.cfh-header .main-nav').offsetHeight
			window.scrollTo({
                behavior: 'smooth',
                left: 0,
                top: offset - heaHei
			});
		})
	}
}
const scrollActive = () =>{
	let el = app.selectAll('.cfh-header .main-nav ul li')
	let scroll = window.pageYOffset
	for(let i = 0;i<el.length;i++){
		let to = el[i].getAttribute('data-to')
		let offset = app.select('.cfh-home-'+ to).offsetTop
		let heaHei = app.select('.cfh-header').offsetHeight + app.select('.cfh-header .main-nav').offsetHeight
		if(scroll == (offset - heaHei) || scroll > (offset - heaHei)){
			// removeClass
			for(let k = 0;k<el.length;k++){
				app.removeClass(el[k], 'active')
			}
			app.addClass(el[i], 'active')
		}
	}
}
app.ready(()=>{
	app.avoidNull(toggleButtonWrapper)
	app.avoidNull(positionMainNav)
	app.avoidNull(scrollToSection)
	app.avoidNull(scrollActive)
})
app.resize(()=>{
	app.avoidNull(positionMainNav)
	app.avoidNull(scrollActive)
})
app.scroll(()=>{
	app.avoidNull(scrollActive)
})
