AOS.init();
// document.onscroll = function(){
//     AOS.refreshHard;
// }

function hidePopup(){
    let popup_nav = document.getElementById('popup-nav');
    let hideOnClick = document.querySelectorAll('.hideOnClick');

    hideOnClick.forEach(function(i){
        i.addEventListener("click", function(){
            popup_nav.classList.remove('from-top-to-bottom')
            popup_nav.classList.add('from-bottom-to-top')
        });    
    });
}

window.onload = () => {

    let popup_nav = document.getElementById('popup-nav');
    let popup_nav_button_show = document.getElementById('popup-nav-button-show');
    let popup_nav_button_hide = document.getElementById('popup-nav-button-hide');

    popup_nav_button_show.addEventListener("click", function(e){
        e.preventDefault();
        popup_nav.classList.remove('from-bottom-to-top')
        popup_nav.classList.add('popup-nav-show')
        popup_nav.classList.add('from-top-to-bottom')
    });
    
    popup_nav_button_hide.addEventListener("click", function(e){
        e.preventDefault();
        popup_nav.classList.remove('from-top-to-bottom')
        popup_nav.classList.add('from-bottom-to-top')
    });


    hidePopup();

    // let header = document.getElementById('header');
    // // header.style.backgroundImage = "url('../assets/img/ui-ux.png')";
    
    // header.style.backgroundImage = "url('../assets/img/hero.png')";
    
    // let images_array = ['contact.png', 'hero2.png', 'hero3.png', 'hero.png'];

    // var i = 0;
    // setInterval(() => {

    //     // setInterval(() => {
    //         header.style.transition.opacity = '.2s';
    //         header.style.opacity = '.1';
    //     // }, 1);
            
    //     header.style.backgroundImage = "url('../assets/img/" + images_array[i] + "')";
            
    //     // setInterval(() => {
    //         header.style.transition.opacity = '.2s';
    //         header.style.opacity = '1';
    //     // }, 1);

    //     i = i + 1;
    //     if (i == images_array.length) i = 0;
        
    // }, 2000);


    
    (function() {
        scrollTo();
    })();

    function scrollTo() {
        const links = document.querySelectorAll('.scroll');
        links.forEach(each => (each.onclick = scrollAnchors));
    }

    function scrollAnchors(e, respond = null) {
        const distanceToTop = el => Math.floor(el.getBoundingClientRect().top - 110);
        e.preventDefault();
        var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
        const targetAnchor = document.querySelector(targetID);
        if (!targetAnchor) return;
        const originalTop = distanceToTop(targetAnchor);
        window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
        const checkIfDone = setInterval(function() {
            const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
            if (distanceToTop(targetAnchor) === 0 || atBottom) {
                targetAnchor.tabIndex = '-1';
                targetAnchor.focus();
                window.history.pushState('', '', targetID);
                clearInterval(checkIfDone);
            }
        }, 100);
    }

    
    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
        loop: true,
    });

    typewriter.typeString('Customers')
        .pauseFor(2500)
        .deleteAll()
        .typeString('Humanity')
        .pauseFor(2500)
        .deleteAll()
        .typeString('The Planet')
        .pauseFor(2500)
        .deleteAll()
        .typeString('Communities')
        .pauseFor(2500)
        .deleteAll()
        .start();

}