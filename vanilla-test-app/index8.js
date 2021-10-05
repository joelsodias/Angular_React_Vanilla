class CustomComponent extends HTMLElement {
    constructor() {
      super();
      
      const _style = document.createElement('style');
      const _template = document.createElement('template');
  
      _style.innerHTML = `
      h1 {
        color: tomato;
      }
      `;
  
      _template.innerHTML = `
      <h1>
        My Custom Element
      </h1>
    `;
      console.log("teste 2");
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(_style);
      this.shadowRoot.appendChild(_template.content.cloneNode(true));
    }
  }
  console.log("teste 1");
  customElements.define('custom-component', CustomComponent);