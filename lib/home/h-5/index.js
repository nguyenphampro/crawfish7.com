const positionMainWrap = () =>{
	if(window.innerWidth > 992){
		let titleWid = app.select('.cfh-home-5 .cfh-title').offsetWidth
		app.select('.cfh-home-5 .main-wrapper').style.marginLeft = titleWid + 'px'
	}
	else{
		app.select('.cfh-home-5 .main-wrapper').style.marginLeft = '0px'
	}
}
app.ready(()=>{
	app.avoidNull(positionMainWrap)
})
app.resize(()=>{
	app.avoidNull(positionMainWrap)
})