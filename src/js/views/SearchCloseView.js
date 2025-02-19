import KEYCODE from '../../constants/keycode.js';

import { $ } from '../utils/dom.js';
import { emit, on } from '../utils/event.js';

export default class SearchCloseView {
  constructor() {
    this.$modalContainer = $('.modal-container');
    this.$closeButton = $('.close-button', this.$modalContainer);
    this.$dimmer = $('.dimmer', this.$modalContainer);

    this.#bindEvents();
  }

  #bindEvents() {
    on(this.$closeButton, 'click', this.#handleClickCloseButton.bind(this));
    on(this.$dimmer, 'click', this.#handleClickCloseButton.bind(this));
    on(document, 'keydown', this.#handleKeydown.bind(this));
  }

  #handleKeydown() {
    if (window.event.keyCode === KEYCODE.ESC) {
      this.#handleClickCloseButton();
    }
  }

  #handleClickCloseButton() {
    emit(this.$closeButton, '@close-modal');
  }
}
