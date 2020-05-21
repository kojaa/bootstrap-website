AOS.init();

function hidePopup(){
    let popup_nav = document.getElementById("popup-nav");
    let hideOnClick = document.querySelectorAll(".hideOnClick");

    hideOnClick.forEach(function(i){
        i.addEventListener("click", function(){
            popup_nav.classList.remove("from-top-to-bottom");
            popup_nav.classList.add("from-bottom-to-top");
        });    
    });
}

window.onload = () => {

    let popup_nav = document.getElementById("popup-nav");
    let nav_button_show = document.getElementById("popup-nav-button-show");
    let nav_button_hide = document.getElementById("popup-nav-button-hide");

    nav_button_show.addEventListener("click", function(e){
        e.preventDefault();
        popup_nav.classList.remove("from-bottom-to-top");
        popup_nav.classList.add("popup-nav-show");
        popup_nav.classList.add("from-top-to-bottom");
    });
    
    nav_button_hide.addEventListener("click", function(e){
        e.preventDefault();
        popup_nav.classList.remove("from-top-to-bottom");
        popup_nav.classList.add("from-bottom-to-top");
    });


    hidePopup();
    
(function() {
    scrollTo();
})();

    function scrollTo() {
        const links = document.querySelectorAll(".scroll");
        links.forEach(each => (each.onclick = scrollAnchors));
    }

    function scrollAnchors(e, respond = null) {
        const distanceToTop = el => Math.floor(el.getBoundingClientRect().top - 110);
        e.preventDefault();
        var targetID = (respond) ? respond.getAttribute("href") : this.getAttribute("href");
        const targetAnchor = document.querySelector(targetID);
        if (!targetAnchor) return;
        const originalTop = distanceToTop(targetAnchor);
        window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
        const checkIfDone = setInterval(function() {
            const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
            if (distanceToTop(targetAnchor) === 0 || atBottom) {
                targetAnchor.tabIndex = "-1";
                targetAnchor.focus();
                window.history.pushState("", "", targetID);
                clearInterval(checkIfDone);
            }
        }, 100);
    }

    
    var app = document.getElementById("app");

    var typewriter = new Typewriter(app, {
        loop: true,
    });

    typewriter.typeString("Customers")
        .pauseFor(2500)
        .deleteAll()
        .typeString("Humanity")
        .pauseFor(2500)
        .deleteAll()
        .typeString("The Planet")
        .pauseFor(2500)
        .deleteAll()
        .typeString("Communities")
        .pauseFor(2500)
        .deleteAll()
        .start();

}