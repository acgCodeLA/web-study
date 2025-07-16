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
  <div>
    <slot name="list">Default text if not list slot used in HTML</slot>
    <h1 part="topper">Big Bang Theory</h1>
    <slot name="title">Default text if not title slot used in HTML</slot>
  </div>
`

class BigBang extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'closed' })
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define('big-bang', BigBang)