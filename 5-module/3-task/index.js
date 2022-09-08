function initCarousel() {
  let slider = document.querySelector(`.carousel`);
  let slide = 0;
  let sliderInner = document.querySelector(`.carousel__inner`);
  let rightArrow = document.querySelector(`.carousel__arrow_right`);
  let leftArrow = document.querySelector(`.carousel__arrow_left`);
  
  if (slide == 0) {
    leftArrow.style.display = 'none';
  }
  
  function click(event) {
    let lenghtSlide = sliderInner.offsetWidth;
    if (event.target == rightArrow) {
      slide++;
      sliderInner.style.transform = 'translateX(-' + slide*lenghtSlide + 'px)';
      if (slide >= 1 && slide < 3) {
        leftArrow.style.display = '';
        rightArrow.style.display = '';
      } else if (slide >= 3) {
        rightArrow.style.display = 'none';
      }
    }


    if (event.target == leftArrow) {
      slide--;
      sliderInner.style.transform = 'translateX(-' + slide*lenghtSlide + 'px)';
      if (slide >= 1 && slide < 4) {
        leftArrow.style.display = '';
        rightArrow.style.display = '';
      } else if (slide <= 1) {
        leftArrow.style.display = 'none';
      }
    }
  }
  slider.addEventListener(`click`, click);
}
