var modal = document.getElementById("imdb-info-modal");
var infoBtn = document.getElementById("imdb-info-button");
var closeBtn = document.querySelector(".close");


infoBtn.addEventListener("click", function() {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

document.getElementById("movie-request-form").addEventListener("submit", function(e) {
    e.preventDefault();

    var name = encodeURIComponent(document.getElementById("name").value);
    var email = encodeURIComponent(document.getElementById("email").value);
    var movieTitle = encodeURIComponent(document.getElementById("movie-title").value);
    var movieYear = encodeURIComponent(document.getElementById("movie-year").value);
    var imdbId = encodeURIComponent(document.getElementById("imdbId").value);

    // Construct URL with search parameters
    var thankYouURL = `thankyou.html?name=${name}&email=${email}&movieTitle=${movieTitle}&movieYear=${movieYear}&imdbId=${imdbId}`;

    // Redirect to the thank you page
    window.location.href = thankYouURL;
});