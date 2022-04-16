window.onload = () => {
    let links = document.querySelectorAll('.main_link');

    links.forEach(link => {
        link.addEventListener("click", (event) => {
        link.classList.add("move_left");
        // After animation is done
        link.addEventListener("transitionend", () => {
            window.location = link.getAttribute("href");
            }, true);
        })
    })
}