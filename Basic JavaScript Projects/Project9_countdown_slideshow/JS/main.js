//  Countdown Timer Function
function countdown() {
    // Get user input
    let seconds = parseInt(document.getElementById("seconds").value);

    function tick() {
        let timer = document.getElementById("timer");

        // decrease second
        seconds -= 1;
        timer.innerHTML = seconds;

        // if time still > 0, continue countdown
        if (seconds > 0) {
            setTimeout(tick, 1000); // call tick every 1 second
        } else {
            timer.innerHTML = "0";
            alert("Time's up!");
        }
    }

    tick(); // start countdown
}

//  Slideshow Functionality
let slideIndex = 1;  
showSlides(slideIndex);

// Next / previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Dot controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Main slideshow function
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // When n exceeds number of slides, wrap to first slide
    if (n > slides.length) {
        slideIndex = 1;
    }

    // When n is less than 1, wrap to last slide
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Deactivate all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
    
    // Activate the corresponding dot
    dots[slideIndex - 1].className += " active";
}
