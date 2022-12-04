let slideIndex = 1;
showSlides(slideIndex); //starts off with showSlides(1)

function plusSlides(n) { //go to the next slide
  showSlides(slideIndex += n);
}

function currentSlide(n) { //set showSlides(n) to the current slide user is on
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i; 
  let slides = document.getElementsByClassName("mySlides"); //get all the elements with the class "mySlides"
  let dots = document.getElementsByClassName("dot"); //get all the elements with the class "dot"
  if (n > slides.length) {slideIndex = 1}  //if exceed the last slide after pressing next button go back to the first slide  
  if (n < 1) {slideIndex = slides.length}  //brings user back to last page from first slide if they press the "left" button 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  //hide element without deleting it
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", ""); //change classname to blank for all the elements with dots
  }
  slides[slideIndex-1].style.display = "block";  //start on a new line
  dots[slideIndex-1].className += " active";     //add class "active" which changes background colour
}
