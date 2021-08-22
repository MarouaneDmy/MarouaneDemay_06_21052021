const navbar = document.querySelector(".navbar")

export default class Navbar {
    
    // Ouvre la navbar
    launchNavbar() {
        navbar.style.display = "flex"
    }


    // Ferme la navbar
    closeNavbar() {
        navbar.style.display = "none"
    }

    // Affiche la navbar et la ferme en fonction du scroll
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