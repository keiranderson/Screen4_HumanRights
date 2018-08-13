// JavaScript for ....
// Keir Anderson
// 17 July 2017

// Assign prog bar and slide indices to 1
var slideIndex = 0;
var progBarIndex = 1;

// Get elements of prog bar and slides
var progBars = document.getElementsByClassName("progBar");
var slides = document.getElementsByClassName("slide");

// Set desired slide visible
// n = number by which to (in/dec)rement visibility
function navSlide(n) {
    // Calculate index of visible slide
    var idx = slideIndex + n;
    // Set all slides invisible
    setAllInvisible(slides);
    // Set all progBar images invisible
    setAllInvisible(progBars);
    // Display slide at index "idx"
    slides[idx - 1].style.display = "block";
    // Display progBar image at index "idx"
    progBars[idx - 1].style.display = "block";
    // Check if idx is greater than 0
    if ((idx - 1) <= 0) {
        slideIndex = 1;
        // Hide prevButton
        document.getElementById("prevButton").style.display = "none";
    }
    else if ((idx) >= slides.length) {
        slideIndex = slides.length;
        // Show prevButton and hide nextButton
        document.getElementById("prevButton").style.display = "block";
        document.getElementById("nextButton").style.display = "none";
    }
    else {
        slideIndex = idx;
        // Show both buttons
        document.getElementById("prevButton").style.display = "block";
        document.getElementById("nextButton").style.display = "block";
    }
}

// Set all slides invisible
function setAllInvisible(arr) {
    // Loop over array of elements
    for (var i = 0; i < arr.length; i ++) {
        arr[i].style.display = "none";
    }
}

// When DOM loaded, run 
//${document}.ready()( function () {
    
//});

// Display modal
function showModal(idToShow) {
    // Get the modal
    var modal = document.getElementById(idToShow);
    
    // When user clicks button modal is visible
    modal.style.display = "block";
    return false;
}

// Hide modal
function hideModal(idToHide) {
    // Get modal to hide
    var modal = document.getElementById(idToHide);
    modal.style.display = "none";
    return false;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modals = document.getElementsByClassName("modal");
    // Loop through modals and find displayed modal
    for (var i = 0; i < modals.length; i++) {
        if (modals[i].style.display == "block" && event.target == modals[i]){
            modals[i].style.display = "none";
        }
    }
}

// Close modal on escape key (code 27)
document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27) {
    var modals = document.getElementsByClassName("modal");
        // Loop through modals and find displayed modal
        for (var i = 0; i < modals.length; i++) {
            if (modals[i].style.display == "block" && modals[i].id != "ysnpModal" && modals[i].id != "enterModal"){
            modals[i].style.display = "none";
            }
        }
    }
});

// Display image modal
function showImageModal(idToShow, imgToShow, targetModalImg) {
    // Get modal by ID
    var modal = document.getElementById(idToShow);
    
    // Get image
    var img = document.getElementById(imgToShow);
    
    // Set variable for currently empty modal image
    var modalImg = document.getElementById(targetModalImg);
    
    // Insert into modal
    modal.style.display = "block";
    modalImg.src = img.src;
}
/*
// Display modal
function showModal(idToShow) {
    // Get the modal
    var modal = document.getElementById(idToShow);
    
    // When user clicks button modal is visible
    modal.style.display = "block";
    return false;
}

// Hide modal
function hideModal(idToHide) {
    // Get modal to hide
    var modal = document.getElementById(idToHide);
    modal.style.display = "none";
    return false;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modals = document.getElementsByClassName("modal");
    // Loop through modals and find displayed modal
    for (var i = 0; i < modals.length; i++) {
        if (modals[i].style.display == "block" && event.target == modals[i]){
            modals[i].style.display = "none";
        }
    }
}
*/