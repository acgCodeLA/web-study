const template = document.createElement('template')
template.innerHTML = `
  <div>
    <slot name="list">Default text if not list slot used in HTML</slot>
    <h1>Big Bang Theory</h1>
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