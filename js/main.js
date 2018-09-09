// ------------------
// MENU
// ------------------

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
const overlay = document.querySelector(".overlay");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        overlay.classList.add("show");
        navItems.forEach(item => item.classList.add("show"));

        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        overlay.classList.remove("show");
        navItems.forEach(item => item.classList.remove("show"));

        showMenu = false;
    }
}

overlay.addEventListener("click", clearMenu);

function clearMenu() {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    overlay.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
}


// ------------------
// SMOOTH SCROLL
// ------------------


// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

// ------------------
// GALLERY
// ------------------

var slides = $('.gallery__slide');

var flag = 0;

slides.first().before(slides.last())

setInterval(show, 4000);

function show() {
    slides = $('.gallery__slide');
    var activeSlide = $('.active');

    slides.last().after(slides.first());

    activeSlide.removeClass('active').next('.gallery__slide').addClass('active');

    if (flag == 0) {
        $('.box').css({ '-webkit-clip-path': 'polygon(0 100%, 100% 100%, 100% 90%, 85% 95%, 10% 78%, 7% 11%, 90% 5%, 85% 95%, 100% 95%, 100% 0, 0 0, 0 100%' });
        flag = 1;
    } else {
        $('.box').css({
            '-webkit-clip-path': 'polygon(0 100%,100% 100%,100% 80%,93% 85%,8% 95%,15% 6%,89% 22%,93% 85%,100% 80%,100% 0,0 0,0 100%)'
        });
        flag = 0;
    }
}





