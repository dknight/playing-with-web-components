class PhotoCarousel extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.title = this.getAttribute('title');
    this.author = this.getAttribute('author');
    this._photoIndex = 0;
    this._photos = this.getAttribute('photos').split(',');
    this.innerHTML = `
      <h2>${this.title}</h2>
      <h4>${this.author}</h4>
      <div class="image-container"></div>
      <button class="back">&lt;</button>
      <button class="forward">&gt;</button>
    `;

    this.showPhoto();

    this.querySelector('button.back').addEventListener('click', event => this.onBackButtonClick(event));
    this.querySelector('button.forward').addEventListener('click', event => this.onForwardButtonClick(event));
  }

  onBackButtonClick() {
    this._photoIndex--;
    if (this._photoIndex < 0) {
      this._photoIndex = this._photos.length - 1;
    }
    this.showPhoto();
  }

  onForwardButtonClick() {
    this._photoIndex++;
    if (this._photoIndex > this._photos.length - 1) {
      this._photoIndex = 0;
    }
    this.showPhoto();
  }

  showPhoto() {
    this.querySelector('.image-container').style.backgroundImage = `url(${this._photos[this._photoIndex]})`;
  }
}

if (!customElements.get('dkn-photo-carousel')) {
  customElements.define('dkn-photo-carousel', PhotoCarousel);
}


// ----------------------------------- Babel 6.4.4 Output ----------------------------------------------------
// 'use strict';

// var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

// function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// var PhotoCarousel = function (_HTMLElement) {
//   _inherits(PhotoCarousel, _HTMLElement);

//   function PhotoCarousel() {
//     _classCallCheck(this, PhotoCarousel);

//     return _possibleConstructorReturn(this, (PhotoCarousel.__proto__ || Object.getPrototypeOf(PhotoCarousel)).call(this));
//   }

//   _createClass(PhotoCarousel, [{
//     key: 'connectedCallback',
//     value: function connectedCallback() {
//       var _this2 = this;

//       this.title = this.getAttribute('title');
//       this.author = this.getAttribute('author');
//       this._photoIndex = 0;
//       this._photos = this.getAttribute('photos').split(',');
//       this.innerHTML = '\n      <h2>' + this.title + '</h2>\n      <h4>' + this.author + '</h4>\n      <div class="image-container"></div>\n      <button class="back">&lt;</button>\n      <button class="forward">&gt;</button>\n    ';

//       this.showPhoto();

//       this.querySelector('button.back').addEventListener('click', function (event) {
//         return _this2.onBackButtonClick(event);
//       });
//       this.querySelector('button.forward').addEventListener('click', function (event) {
//         return _this2.onForwardButtonClick(event);
//       });
//     }
//   }, {
//     key: 'onBackButtonClick',
//     value: function onBackButtonClick() {
//       this._photoIndex--;
//       if (this._photoIndex < 0) {
//         this._photoIndex = this._photos.length - 1;
//       }
//       this.showPhoto();
//     }
//   }, {
//     key: 'onForwardButtonClick',
//     value: function onForwardButtonClick() {
//       this._photoIndex++;
//       if (this._photoIndex > this._photos.length - 1) {
//         this._photoIndex = 0;
//       }
//       this.showPhoto();
//     }
//   }, {
//     key: 'showPhoto',
//     value: function showPhoto() {
//       this.querySelector('.image-container').style.backgroundImage = 'url(' + this._photos[this._photoIndex] + ')';
//     }
//   }]);

//   return PhotoCarousel;
// }(HTMLElement);

// if (!customElements.get('dkn-photo-carousel')) {
//   customElements.define('dkn-photo-carousel', PhotoCarousel);
// }