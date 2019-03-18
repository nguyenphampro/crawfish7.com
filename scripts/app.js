const app = {
    ready: (fn) => {
        if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    },
    scroll: (fn) => {
        window.addEventListener('scroll', fn)
    },
    resize: (fn) => {
        window.addEventListener('resize', fn)
    },
    select: (el) => {
        return document.querySelector(el)
    },
    selectAll: (el) => {
        return document.querySelectorAll(el)
    },
    toggleClass: (el, cl) => {
        el.classList.toggle(cl)
    },
    addClass: (el, className) => {
        if (el.classList)
            el.classList.add(className);
        else
            el.className += ' ' + className;
    },
    removeClass: (el, className) => {
        if (el.classList)
            el.classList.remove(className);
        else
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    },
    bgImg: () => {
        let a = app.selectAll('[bg-img]')
        for (let i = 0; i < a.length; i++) {
            let el = a[i],
                bgimg = el.getAttribute('bg-img'),
                pos = el.getAttribute('bg-pos'),
                size = el.getAttribute('bg-size')
            if (pos != null) {
                el.style.backgroundPosition = pos;
            } else {
                el.style.backgroundPosition = 'center center'
            }
            if (size != null) {
                el.style.backgroundSize = size;
            } else {
                el.style.backgroundSize = 'cover'
            }
            el.style.backgroundImage = 'url(' + bgimg + ')'
        }
    },
    backToTop: () => {
        app.select('#backToTop').addEventListener('click', function() {
            window.scrollTo({
                behavior: 'smooth',
                left: 0,
                top: 0
            });
        })
    },
    fixedMain: () => {
        let headerHeight = app.select('header').offsetHeight
        app.select('main').style.paddingTop = headerHeight + 'px'
    },
    aos: () => {
        AOS.init({
            duration: 1200,
            once: true,
            disable: 'phone'

        });
    },
    ie: () => {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
            app.addClass(app.select('html'), 'ie-browser')
        }
    },
    slideUp: (element, duration) => {

        return new Promise(function (resolve, reject) {
            element.style.height = element.offsetHeight + 'px';
            element.style.transitionProperty = `height, margin, padding`;
            element.style.transitionDuration = duration + 'ms';
            element.offsetHeight;
            element.style.overflow = 'hidden';
            element.style.height = 0;
            element.style.paddingTop = 0;
            element.style.paddingBottom = 0;
            element.style.marginTop = 0;
            element.style.marginBottom = 0;
            window.setTimeout(function () {
                element.style.display = 'none';
                element.style.removeProperty('height');
                element.style.removeProperty('padding-top');
                element.style.removeProperty('padding-bottom');
                element.style.removeProperty('margin-top');
                element.style.removeProperty('margin-bottom');
                element.style.removeProperty('overflow');
                element.style.removeProperty('transition-duration');
                element.style.removeProperty('transition-property');
                resolve(false);
            }, duration)
        })
    },
    slideDown: (element, duration) => {

        return new Promise(function (resolve, reject) {

            element.style.removeProperty('display');
            let display = window.getComputedStyle(element).display;

            if (display === 'none') 
                display = 'block';

            element.style.display = display;
            let height = element.offsetHeight;
            element.style.overflow = 'hidden';
            element.style.height = 0;
            element.style.paddingTop = 0;
            element.style.paddingBottom = 0;
            element.style.marginTop = 0;
            element.style.marginBottom = 0;
            element.offsetHeight;
            element.style.transitionProperty = `height, margin, padding`;
            element.style.transitionDuration = duration + 'ms';
            element.style.height = height + 'px';
            element.style.removeProperty('padding-top');
            element.style.removeProperty('padding-bottom');
            element.style.removeProperty('margin-top');
            element.style.removeProperty('margin-bottom');
            window.setTimeout(function () {
                element.style.removeProperty('height');
                element.style.removeProperty('overflow');
                element.style.removeProperty('transition-duration');
                element.style.removeProperty('transition-property');
            }, duration)
        })
    },
    slideToggle: function (element, duration) {

        if (window.getComputedStyle(element).display === 'none') {

            return app.slideDown(element, duration);

        } else {

            return app.slideUp(element, duration);
        }
    },
    checkExist : (el) =>{
        return document.body.contains(el)
    },
    avoidNull: (f) => {
		try {
			f()
		} catch (error) { }
	},
}
app.ready(function() {
    app.bgImg()
    app.backToTop()
    app.fixedMain()
    app.aos()
    app.ie()
})