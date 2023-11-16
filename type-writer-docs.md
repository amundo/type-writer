---
lang: en
title:  \<type-writer\> docs
css: type-writer.css
---

<style>
type-writer {
  margin: 1em;
  border: 1px dashed lightgray;
  padding: 1em;
  font-family: monospace;
}
</style>
<main>

Repo at <https://github.com/amundo/type-writer>

Github demo at <https://amundo.github.io/type-writer/type-writer-docs.html>

<section id=example>

## Example

Simulate typing out the `textContent` of the component. The simplest way to use the component is to set the text to be displayed as the text content of the component:

```html
<type-writer>I am being typed out like on a typewriter.</type-writer>
```

```{=html}
<type-writer id=example>I am being typed out like on a typewriter.</type-writer>
```

<button style="display:flex; gap:.4em; align-items: center;" id=redo><span style=font-size:2rem>⌨️</span> <span>Retype!</span></button>

<script>
let exampleTypeWriter = document.querySelector('type-writer#example')
let redoButton = document.querySelector('#redo')
redoButton.addEventListener('click', () => {
  exampleTypeWriter.value = exampleTypeWriter.textContent
})
</script>

There are three ways to set the text to be displayed in the component:

- `textContent`: The text to be displayed can be set as the text content of the component.
- `value`: The text to be displayed can be set as the value of the `value` attribute.
- `.value` setter: The text to be displayed can be set using the `.value` setter method.

</section>

<section id=attributes>

## Attributes

The text content may also be set as the content of the `value` attribute:

- `value`: Sets or retrieves the text to be displayed with the typewriter effect. When this attribute is modified, the text is re-rendered with the typewriter animation.


```html
<type-writer value="I am being typed out like on a typewriter from the value attribute.">

</type-writer>
```

```{=html}
<type-writer value="I am being typed out like on a typewriter from the value attribute.">
</type-writer>
```

</section>

<section id=methods>

## Methods

- `value(value)`: Update the text to be displayed dynamically. Triggers typing animation.


```html
<form  id=dynamic-input-form>
<input>
</form>
<type-writer id=dynamic value="I am being typed out like on a typewriter from the value attribute.">
</type-writer>
<script>
document.querySelector('#dynamic-input-form')
  .addEventListener('submit', submitEvent => {
    submitEvent.preventDefault()
    const input = submitEvent.target.querySelector('input')
    document.querySelector('type-writer#dynamic').value = input.value
  })
</script>
```

<form  id=dynamic-input-form>
<input placeholder="Type here and press enter.">
</form>
<type-writer id=dynamic value="I am being typed out like on a typewriter from the value attribute.">
</type-writer>
<script>
document.querySelector('#dynamic-input-form')
  .addEventListener('submit', submitEvent => {
    submitEvent.preventDefault()
    const input = submitEvent.target.querySelector('input')
    document.querySelector('type-writer#dynamic').value = input.value
  })
</script>


</section>

<section id=data>

## Data

- `#value`: A private property that holds the current text value to be displayed in the component.

</section>

<section id=events>

## Events

Currently, this component does not emit any custom events.

</section>

<section id=layouts>

## Layouts

For customizing the layout, refer to the associated CSS file `type-writer.css`. You can style the individual letters by targeting `.letter` class in your CSS.

</section>

<section id=see-also>

## See also

- HTML Custom Elements: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
- JavaScript Template Literals: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- CSS Animations: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

</main>

<script type="module">
import {TypeWriter} from './TypeWriter.js'

window.typeWriter = document.querySelector('type-writer')
</script>
