// Lightbox2 jQuery Plugin Options
lightbox.option({
      maxWidth: 770,
      positionFromTop: 120,
      showImageNumberLabel: false,
      alwaysShowNavOnTouchDevices: true,
      wrapAround: true,
    })

//Add event listener
search.addEventListener('keyup', filterImages);

//This function hides images that don't match search input
function filterImages() {
  let filterValue, images, caption, i;
  // Get input value
  filterValue = document.getElementById('search').value.toUpperCase();
  //get images array
  images = document.getElementsByClassName("flex-item");

  //Loop through captions
  for(let i=0; i<images.length; i++) {
    caption = images[i].getAttribute("data-title");
    console.log(caption)
    //If matched
    if (caption.toUpperCase().indexOf(filterValue) > -1) {
      images[i].style.display= '';
    } else {
      images[i].style.display= 'none';
    }
  }
}
