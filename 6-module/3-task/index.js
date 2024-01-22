import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this._container = this.#getCarousel();

    document.addEventListener('DOMContentLoaded', () => {
      this.#setArrowHide({
        arrowRight: this._container.querySelector(".carousel__arrow_right"),
        arrowLeft: this._container.querySelector(".carousel__arrow_left"),
        transformValue: this.transformValue,
        elementsCount: this.slides.length,
        carouselInnerWidth: this._container.querySelector(".carousel__inner").offsetWidth,
      });
    });
  }

  transformValue = 0;

  get elem(){
    return this._container;
  }

  #getCarousel() {
    const carousel =  createElement(`
      <div class='carousel'>
        <div class='carousel__arrow carousel__arrow_right'>
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class='carousel__inner'>
          ${this.slides.map(({id, image, price, name}) => `
            <div class="carousel__slide" data-id="${id}">
              <img src="/assets/images/carousel/${image}" class="carousel__img" alt="slide">
              <div class="carousel__caption">
                <span class="carousel__price">€${price.toFixed(2)}</span>
                <div class="carousel__title">${name}</div>
                <button type="button" class="carousel__button">
                  <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                </button>
              </div>
            </div>
          `).join('')}
        </div>
        <div class='carousel__arrow carousel__arrow_left'>
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
      </div>
    `);

    this.#addArrowsEventListeners(carousel);
    this.#addToCartEventListener(carousel);

    return carousel;
  }

  #addToCartEventListener(carousel){
    carousel.addEventListener("click", (event) => {
      if(event.target.closest("button").classList.contains("carousel__button")){
        const slideId = event.target.closest(".carousel__slide").dataset.id;
    
        const customEvent = new CustomEvent('product-add', {
          detail: slideId,
          bubbles: true,
        });
    
        carousel.dispatchEvent(customEvent);

        return;
      }
    })
  }

  #addArrowsEventListeners(carousel){
    carousel.addEventListener("click", (event) => {
      const arrowLeft = carousel.querySelector(".carousel__arrow_left");
      const arrowRight = carousel.querySelector(".carousel__arrow_right");
      const carouselInner = carousel.querySelector(".carousel__inner");
  
      const carouselInnerWidth = carouselInner.offsetWidth;
      const elementsCount = carouselInner.childElementCount;

      if(event.target.closest("div").classList.contains("carousel__arrow_right")){
        // increase the counter for 1 slide width
        this.transformValue += carouselInnerWidth;
        // add the transition
        carouselInner.style.transform = `translateX(-${this.transformValue}px)`;
        // config the arrows visibility
        this.#setArrowHide({
          arrowRight: arrowRight,
          arrowLeft: arrowLeft,
          transformValue: this.transformValue,
          elementsCount: elementsCount,
          carouselInnerWidth: carouselInnerWidth,
        });
        return;
      }
      if(event.target.closest("div").classList.contains("carousel__arrow_left")){
        // decrease the counter for 1 slide width
        this.transformValue -= carouselInnerWidth;
        // add the transition
        carouselInner.style.transform = `translateX(-${this.transformValue}px)`;
        // config the arrows visibility
        this.#setArrowHide({
          arrowLeft: arrowLeft,
          arrowRight: arrowRight,
          transformValue: this.transformValue,
          elementsCount: elementsCount,
          carouselInnerWidth: carouselInnerWidth,
        })
        return;
      }
    })
  }

  #setArrowHide({arrowRight, arrowLeft, transformValue, elementsCount, carouselInnerWidth}){
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
}
