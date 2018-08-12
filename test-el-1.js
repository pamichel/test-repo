import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `test-el-1`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TestEl1 extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'test-el-1',
      },
    };
  }
}

window.customElements.define('test-el-1', TestEl1);
