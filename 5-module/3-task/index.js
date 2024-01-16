const setArrowHide = ({arrowRight, arrowLeft, transformValue, elementsCount, carouselInnerWidth}) => {
  // the arrows are visible by default
  arrowRight.style.display = 'flex';
  arrowLeft.style.display = 'flex';
  // if there is a first slide - left arrow is hidden, and the right one is shown
  if(transformValue===0){
    arrowLeft.style.display = 'none';
    arrowRight.style.display = 'flex';
  }
  // if there is a last slide - left arrow is shown, and the right one is hidden
  if(transformValue===carouselInnerWidth*(elementsCount-1)){
    arrowRight.style.display = 'none';
    arrowLeft.style.display = 'flex';
  }
}

function initCarousel() {
  //elements
  const carouselContainer = document.querySelector(".carousel");
  const arrowLeft = document.querySelector(".carousel__arrow_left");
  const arrowRight = document.querySelector(".carousel__arrow_right");
  const carouselInner = document.querySelector(".carousel__inner");

  //counted values
  const carouselInnerWidth = carouselInner.offsetWidth;
  const elementsCount = carouselInner.childElementCount;

  //counter
  let transformValue = 0;

  //checks arrows after the first render
  setArrowHide({
    arrowRight: arrowRight,
    arrowLeft: arrowLeft,
    transformValue: transformValue,
    elementsCount: elementsCount,
    carouselInnerWidth: carouselInnerWidth
  });

  // there is a listner on the carouselContainer
  carouselContainer.addEventListener("click", (event) => {
    if(event.target.closest("div").classList.contains("carousel__arrow_right")){
      // increase the counter for 1 slide width
      transformValue += carouselInnerWidth;
      // add the transition
      carouselInner.style.transform = `translateX(-${transformValue}px)`;
      // config the arrows visibility
      setArrowHide({
        arrowRight: arrowRight,
        arrowLeft: arrowLeft,
        transformValue: transformValue,
        elementsCount: elementsCount,
        carouselInnerWidth: carouselInnerWidth,
      });
    }
    if(event.target.closest("div").classList.contains("carousel__arrow_left")){
      // decrease the counter for 1 slide width
      transformValue -= carouselInnerWidth;
      // add the transition
      carouselInner.style.transform = `translateX(-${transformValue}px)`;
      // config the arrows visibility
      setArrowHide({
        arrowLeft: arrowLeft,
        arrowRight: arrowRight,
        transformValue: transformValue,
        elementsCount: elementsCount,
        carouselInnerWidth: carouselInnerWidth,
      })
    }
  });
}
