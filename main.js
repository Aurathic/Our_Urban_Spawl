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

    //Animate items on right of content to slide left when they come into viewport
    const inViewport = (entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("move_right");
            }
            console.log(entry.isIntersecting)
        });
    };
    
    const obsOptions = {};
    const obs = new IntersectionObserver(inViewport, obsOptions);  
    const rightElements = document.querySelectorAll('.right');
    rightElements.forEach(elem => {
        obs.observe(elem);
        console.log(elem);
    });
}

