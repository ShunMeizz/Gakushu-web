function toggleMenu(){
    const menu = document.querySelector(".menu-links"); /*We are targeting the menu-links*/
    const icon = document.querySelector(".hamburger-icon"); /*We are targeting the hamburger-icon*/
    menu.classList.toggle("open"); /*and whenever we click its gonna either add/remove the open class*/
    icon.classList.toggle("open");
}