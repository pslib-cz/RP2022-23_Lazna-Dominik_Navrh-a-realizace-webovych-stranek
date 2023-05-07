document.addEventListener("DOMContentLoaded", () => {
    let hamelmnts = document.querySelectorAll(".nav__links");
    for (const btn of document.querySelectorAll(".nav__hamburger")) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            for (const element of hamelmnts) {
                element.classList.toggle("active");
            } 
            btn.classList.toggle("active"); 
        });
    }
});