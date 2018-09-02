// Lightbox2 jQuery Plugin Options
lightbox.option({
      maxWidth: 770,
      positionFromTop: 120,
      showImageNumberLabel: false,
      alwaysShowNavOnTouchDevices: true,
      wrapAround: true,
    })


//This function hides images that don't match search input
const filterImages = () => {
  let filterValue, images, caption, i;
  // Get input value
  filterValue = document.getElementById('search').value.toUpperCase();
  //get images array
  images = document.getElementsByClassName("flex-item");
  //Loop through captions
  for(let i=0; i<images.length; i++) {
    caption = images[i].getAttribute("data-title");
    //If matched
    if (caption.toUpperCase().indexOf(filterValue) > -1) {
      images[i].style.display= '';
    } else {
      images[i].style.display= 'none';
    }
  }
}

//Add event listener
search.addEventListener('keyup', filterImages);
