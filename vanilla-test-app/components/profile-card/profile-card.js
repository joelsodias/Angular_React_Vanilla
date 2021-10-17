import { BaseComponent } from "../base-component.js"; 

customElements.define(
  "profile-card",
  class ProfileCardComponent extends BaseComponent {
    constructor() {
      // Must call super
      super();
      

      // Setup a click listener
      this.addEventListener("click", (e) => {
        this.toggleExpand();
      });

      if (this.attributes["decorationcolor"].value == "random") { this.attributes["decorationcolor"].value = this.randomcolor() } 

    }

    // Called when element is inserted in DOM
    connectedCallback() {
      console.log("connectedCallback()");
    }

    toggleExpand() {
      console.log("toggleExpand()");
    }

    randomcolor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }
);