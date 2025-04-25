document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item a");

    function setActiveLink() {
        navItems.forEach(item => {
            item.parentElement.classList.remove("active");
        });
        
        const activeItem = Array.from(navItems).find(item => {
            return window.location.hash && item.getAttribute("href") === window.location.hash;
        });

        if (activeItem) {
            activeItem.parentElement.classList.add("active");
        }
    }

    setActiveLink();

    window.addEventListener("hashchange", setActiveLink);
});