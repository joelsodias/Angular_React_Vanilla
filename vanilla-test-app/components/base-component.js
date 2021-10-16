async function loadFile(htmlRelativeUrl, baseUrl) {
  const htmlUrl = new URL(htmlRelativeUrl, baseUrl).href;
  const response = await fetch(htmlUrl);
  return await response.text();
}

function html(pieces) {
  var result = pieces[0];
  var substitutions = [].slice.call(arguments, 1);
  for (var i = 0; i < substitutions.length; ++i) {
    result += util.escape(substitutions[i]) + pieces[i + 1];
  }
  return result;
}


class BaseComponent extends HTMLElement {

  props = {}
  
  constructor() {
    // Must call super
    super();
    console.log("base constructor()");

    const shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot = shadowRoot;

    loadFile(
      "./" + this.localName + "/" + this.localName + ".css",
      import.meta.url
    ).then((buffer) => {
      const style = document.createElement("style");
      style.innerHTML = this.html([buffer]);
      //console.log(buffer);
      shadowRoot.appendChild(style);
    });

    loadFile(
      "./" + this.localName + "/" + this.localName + ".html",
      import.meta.url
    ).then((buffer) => {
      const template = document.createElement("template");
      template.innerHTML = this.html([buffer]);
      //console.log(buffer);
      shadowRoot.appendChild(template.content);
    });
  }

  childComp(name) {
      return this.shadowRoot.querySelector(name)
  }


  html(params) {

    let props = this.props
    let attr = {}
    
    for (var i = 0, atts = this.attributes, n = atts.length; i < n; i++){
      attr[atts[i].nodeName] = atts[i].value;
    }

    let replaced = params[0].replaceAll("{{","${").replaceAll("}}","}")

    let result =  eval("`" + replaced +"`")
    
    return result
  }
}

export {BaseComponent, html, loadFile}

