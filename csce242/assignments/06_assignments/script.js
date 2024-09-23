document.addEventListener('DOMContentLoaded', () => {
    const exercise1 = document.getElementById('exercise1');
    const exercise2 = document.getElementById('exercise2');
    const colorSliderSection = document.getElementById('color-slider');
    const picture = document.getElementById('picture');
    const colorSlider = document.getElementById('slider');
    const message = document.getElementById('message');
    const pictureBtns = document.querySelectorAll('.pic-size');
    const chosenPicture = document.getElementById('chosen-picture');
    
    exercise1.addEventListener('click', () => {
      colorSliderSection.classList.remove('hidden');
      picture.classList.add('hidden');
    });
  
    exercise2.addEventListener('click', () => {
      picture.classList.remove('hidden');
      colorSliderSection.classList.add('hidden');
    });
  
    colorSlider.addEventListener('input', (e) => {
      const red = e.target.value;
      colorSliderSection.style.backgroundColor = `rgb(${red}, 0, 0)`;
  
      if (red < 85) {
        message.textContent = 'Dark';
      } else if (red < 170) {
        message.textContent = 'Medium';
      } else {
        message.textContent = 'Bright';
      }
    });
  
    pictureBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const size = btn.dataset.size;
        if (size === 'small') {
          chosenPicture.src = 'https://picsum.photos/id/237/200/300';
          chosenPicture.style.width = '100px';
        } else if (size === 'medium') {
          chosenPicture.src = 'https://picsum.photos/id/237/200/300';
          chosenPicture.style.width = '200px';
        } else if (size === 'large') {
          chosenPicture.src = 'https://picsum.photos/id/237/200/300';
          chosenPicture.style.width = '300px';
        }
      });
    });
  

    const menuToggle = document.querySelector('.menu-toggle');
    const navItems = document.querySelector('.nav-items');
    
    menuToggle.addEventListener('click', () => {
      navItems.classList.toggle('open');
      menuToggle.classList.toggle('open');
    });
  });