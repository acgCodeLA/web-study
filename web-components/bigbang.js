const template = document.createElement('template')
template.innerHTML = `
  <style>
    /* @import url(); */
    h1 {
      background-color: yellow;
    }
    :host {
      /* for the shadowRoot */
      display: block;
      background-color: lightblue;
    }
    :host(big-bang) {
      background-color: lightgreen;
    }
    :host-context(main){
      background-color: lightcoral;
    }
    ::slotted(*) {
      color: red;
    }
    :host-context(main) ::slotted(h2) {
      color: blue !important;
    }
    ::slotted(ul) {
      color: green;
    }
  </style>
  <div class="root">
    <slot name="list">Default text if not list slot used in HTML</slot>
    <h1 part="topper">Big Bang Theory</h1>
    <slot name="title">Default text if not title slot used in HTML</slot>
  </div>
`

class BigBang extends HTMLElement {
  root;
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'closed' })
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
    this.root = shadowRoot.querySelector('.root');
  }

  static get observedAttributes() {
    return ['color', 'test-text']
  }

  get color() {
    return this.getAttribute('color')
  }
  set color(value) {
    this.setAttribute('color', value)
  }

  get testText() {
    return this.getAttribute('test-text')
  }
  set testText(value) {
    this.setAttribute('test-text', value)
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    if (name === 'color') {
      this.root.setAttribute('style', `${`${oldValue};` || ''}background-color: ${newValue}`);
    }
    if (name === 'test-text') {
      this.root.querySelector('h1').textContent = newValue;
    }
  }
}

customElements.define('big-bang', BigBang)