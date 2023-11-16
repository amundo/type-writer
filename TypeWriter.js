class TypeWriter extends HTMLElement {
  #value = ""

  constructor() {
    super()
  }

  connectedCallback() {
    if(this.textContent.trim().length) {
      this.value = this.textContent.trim()
    }
  }
  
  static get observedAttributes() {
    return ["value"]
  }

  attributeChangedCallback(attribute, oldValue, newValue) {
    if (attribute == "value") {
      this.value = newValue
    }
  }

  set value(value){
    this.#value = value
    this.render()
  }

  get value(){
    return this.#value
  }

  get letters(){
    return this.#value.split("")
  }

  render() {
    let letters = this.letters
    this.innerHTML = ``

    const spans = letters
      .map((letter) => {
        const span = document.createElement("span")
        span.classList.add("letter")
        span.textContent = letter
        span.style.opacity = 0
        return span
    })

    let delay = 0;
    const typingSpeed = 25; // Delay in milliseconds

    spans.forEach(span => {
        setTimeout(() => {
            span.style.opacity = 1;
        }, delay)
        delay += typingSpeed;
    });

    spans.forEach((span) => this.append(span))
  }
}

export { TypeWriter }
customElements.define("type-writer", TypeWriter)
