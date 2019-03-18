const customSelect = () =>{
    let el = app.selectAll('.custom-select')
    for( let i = 0; i < el.length; i++){
        el[i].querySelector('.select-show').addEventListener('click',(e)=>{
            app.toggleClass(el[i], 'active')
            app.slideToggle(el[i].querySelector('.select-list'), 500)
            e.stopPropagation()
        })
    }
    document.addEventListener("click", function (e) {
        for( let i = 0; i < el.length; i++){
            app.removeClass(el[i], 'active')
            app.slideUp(el[i].querySelector('.select-list'), 500)
        }
    });
}
app.ready(()=>{
    app.avoidNull(customSelect)
})