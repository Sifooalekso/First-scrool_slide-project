window.addEventListener('scroll', () => {
    let slides = document.querySelectorAll(".slide");
    let windowBot = window.scrollY + window.innerHeight;
    console.log(windowBot);
    slides.forEach((slide) => {
        let slidemid = slide.offsetTop + slide.offsetHeight / 2;
        if (slidemid < windowBot) {
            slide.classList.add('active');
        }
        else {
            slide.classList.remove('active');
        }
    });
})

