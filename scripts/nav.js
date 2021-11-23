var num = 0;
var isMenuOpen = false;

// window onload function
window.onload = function () {
    let a = document.querySelectorAll(".nav-links a")
    for (let i = 0; i < a.length; i++) {
        a[i].addEventListener("click", () => {
            if (window.innerWidth < 700) {
                menuOpen();
            }
        })
    }
    // menuOpen();
    // nav(num);
};

// window onresize function
window.onresize = function () {
    document.getElementsByClassName("tab")[num].style.display = "block";
};

//variables to store previous and current Yoffset of the window
var prev = window.pageYOffset;
var now;

//event listerner when scrolled
// window.onscroll = function () {
//     now = window.pageYOffset;
//     var btn = document.getElementsByTagName("nav")[0];
//     if (now > 70) {
//         if (now - prev < 0) {
//             btn.style.transform = "translateY(0)";
//         } else {
//             btn.style.transform = "translateY(-70px)";
//         }
//     }
//     prev = window.pageYOffset;
// };

function menuOpen() {
    anime();

    let tab = document.getElementsByClassName("tab");
    if (!isMenuOpen) {
        isMenuOpen = true;
        for (let i = 0; i < tab.length; i++) {
            tab[i].style.display = "none";
        }
    } else {
        isMenuOpen = false;
        tab[num].style.display = "block";
    }
}
function anime() {
    document.getElementsByClassName("nav-links")[0].classList.toggle("open");
    document.getElementsByClassName("burger")[0].classList.toggle("menuAnimate");
}

function nav(x) {
    let elem = document.getElementsByTagName("li");
    let tab = document.getElementsByClassName("tab");

    num = x;
    for (let i = 0; i < elem.length; i++) {
        elem[i].style.borderBottom = "3px solid transparent";
        tab[i].style.display = "none";
    }

    elem[x].style.borderBottom = "3px solid #efefef";
    tab[num].style.display = "block";

    if (window.innerWidth < 800) {
        anime();
    }
}
