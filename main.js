window.onpageshow = () => {
    let links = document.querySelectorAll('.main_link');
    links.forEach(link => {
        link.classList.remove("move_left");
        link.addEventListener("click", (event) => {
            link.classList.add("move_left");
            // Go to page after animation is done
            link.addEventListener("transitionend", () => {
                window.location = link.getAttribute("href");
                }, { once: true });
        })
    })
}