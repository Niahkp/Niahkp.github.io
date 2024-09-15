
//count
let count = 0;

    document.getElementById('click-count').addEventListener('click', function() {
      count++;
      this.textContent = count;
    });

    const slider = document.getElementById('slider');
    const pic = document.getElementById('pic');

    //slider image
    slider.addEventListener('input', function() {
        const sliderValue = slider.value;
        pic.style.left = sliderValue + 'px';
    });

  
