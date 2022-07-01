const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const contentArticles = document.querySelectorAll(".content");

// the entire article section containing the buttons and the individual articles is selected to be checked for 'click'
about.addEventListener("click", function (event) {
    const id = event.target.dataset.id;
    if (id) {
        btns.forEach(function (btn) {
            // remove active class from all buttons
            btn.classList.remove("active");

            // add active class to the button clicked
            event.target.classList.add("active");
        });
        contentArticles.forEach(function (article) {
            // remove active class from all the contentArticles to hide them
            article.classList.remove("active");
        })
        // add active class to the article with the same id ad the button clicked
        const element = document.getElementById(id);
        element.classList.add("active");
    }
})
