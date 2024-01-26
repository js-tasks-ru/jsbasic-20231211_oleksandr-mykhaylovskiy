import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.name = product.name;
    this.price = product.price;
    this.category = product.category;
    this.image = product.image;
    this.id = product.id;

    this._container = this.#getCard();
    this.#setupEventListener();
  }

  get elem() {
    return this._container;
  }

  #getCard(){
    const card = createElement(`
      <div class="card">
        <div class="card__top">
            <img src="/assets/images/products/${this.image}" class="card__image" alt="product">
            <span class="card__price">€${this.price.toFixed(2)}</span>
        </div>
        <div class="card__body">
            <div class="card__title">${this.name}</div>
            <button type="button" class="card__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
        </div>
      </div>
    `)

    return card;
  }
  #setupEventListener() {
    const button = this._container.querySelector('.card__button');

    const event = new CustomEvent('product-add', {
      detail: this.id,
      bubbles: true,
    });

    button.addEventListener('click', () => {
      button.dispatchEvent(event);
    });
  }
}