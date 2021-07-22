const navbar = document.querySelector(".navbar")

export default class Navbar {
    
    launchNavbar() {
        navbar.style.display = "flex"
    }

    closeNavbar() {
        navbar.style.display = "none"
    }

    display() {
        window.addEventListener("scroll", function(){
            const navbar = new Navbar()
            if (window.scrollY > 20) {
                navbar.launchNavbar()
            } else {
                navbar.closeNavbar()
            }
        })
    }
}