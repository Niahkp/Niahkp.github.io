//change which inmage currently has the class of hidden applied to it.
//querySelector
const slide = () => {
    const currentImage = document.querySelector("#slideshow :not(.hidden)")
    const nextImage = currentImage.nextElementSibling;

    //reached the end of the list
    if(nextImage == null){
        nextImage = document.querySelector("#slideshow :first-child");
    }

    currentImage.classList.add("hidden");
    nextImage.classList.remove("hidden");
};

setInterval(slide, 1000);
