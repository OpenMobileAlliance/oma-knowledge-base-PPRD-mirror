---
title: Button
description: Component do render a button in the document
constructorName: ShButton
layout: doc
---

## Usage
The most simplest example of usage of the `ShButton` is with just an `urlButton` and the text to show.
::doc-example
---
code: |
  ::ShButton
  ---
  urlButton: 'https://www.nasa.gov/' # this is a comment to the link to the button.
  ---

  ClickMe!!!  
  ::
---
::

This is a more advance example of usage the `ShButton` when some of the style is being modified:
::doc-example
---
code: |
  ::ShButton
  ---
  ui: 
    wrapper: shadow-2xl
    rounded: rounded-full # options: rounded, rounded-md, rounded-lg & rounded-full
  urlButton: https://www.nasa.gov/ # this is a comment to the link to the button.
  target: "" # open in the same window
  rounded: rounded-3xl
  colorButton: green
  disabled: true # true, false
  styleButton: solid
  fullWidth: "" # changes the button width
  size: 3xl # modifies the size of the button
  ---
  []{.i-fa6-brands-square-github .text-4xl} ClickMe!!!  
  ::
---
::

The `ShButton` can be presented in `solid`, `outline` and `link` *styleButton*:

::doc-example
---
code: |
  ::ShButton
  ---
  urlButton: "#"
  styleButton: solid
  ---
  ClickMe!!!
  ::

  ::ShButton
  ---
  urlButton: "#"
  styleButton: outline
  ---
  ClickMe!!!
  ::

  ::ShButton
  ---
  urlButton: "#"
  styleButton: link
  ---
  ClickMe!!!
  ::
---
::

The property `size` defines the size of the `ShButton`

::doc-example
---
code: |
  ::ShButton
  ---
  urlButton: "#"
  size: 2xs
  ---
  2xs
  ::

  ::ShButton
  ---
  urlButton: "#"
  size: xs
  ---
  xs
  ::

  ::ShButton
  ---
  urlButton: "#"
  size: sm
  ---
  sm
  ::

  ::ShButton
  ---
  urlButton: "#"
  size: md
  ---
  md
  ::

  ::ShButton
  ---
  urlButton: "#"
  size: base
  ---
  base
  ::

  ::ShButton
  ---
  urlButton: "#"
  size: lg
  ---
  lg
  ::

  ::ShButton
  ---
  urlButton: "#"
  size: xl
  ---
  xl
  ::

  ::ShButton
  ---
  urlButton: "#"
  size: 2xl
  ---
  2xl
  ::

  ::ShButton
  ---
  urlButton: "#"
  size: 3xl
  ---
  3xl
  ::

  ::ShButton
  ---
  urlButton: "#"
  size: 4xl
  ---
  4xl
  ::

  ::ShButton
  ---
  urlButton: "#"
  size: 5xl
  ---
  5xl
  ::
---
::

Turning the parameter `fullWidth` to true you can instruct button to take the full width of available screen. And with `colorButton` 
you can change the color of the button.

::doc-example
---
code: |
  ::ShButton
  ---
  urlButton: "#"
  fullWidth: true
  colorButton: cyan
  ---
  This button takes the whole width
  ::
---
::

The `ShButton` content can be any valid Markdown.

::doc-example
---
code: |
  ::ShButton
  ---
  urlButton: "#"
  ---
  ClickMe!!!

  *it will take you to desirable destination*
  ::
---
::

### Combine Button with Other Constructors
It is possible to insert other constructors inside of the `ShButton` constructor. The other components are supported as well.

::doc-example
---
code: |
  ::ShButton
  ---
  urlButton: "https://opensource.org/"
  styleButton: outline
  colorButton: blue
  fullWidth: true
  ---
    :::ShMultiColumn
    ---
    ui:
      wrapper: w-full
    cols: 8
    ---
      []{.i-fa6-brands-square-github .text-4xl}

      ::ShColumn
      ---
      title: GitHub repository
      subTitle: "*public*"
      size: 2
      ---
      ::

      ::ShColumn
      ---
      size: 5
      ---
      In this repository all the content is Open Sounce and it's can be used accordigly to it's LICENSE.
      ::
    :::
  ::
---
::

There is a special way where the button can be part of the text, using an inline notation.

::doc-example
---
code: |
  There is a special way where the button can be part of the
  :ShButton{urlButton ="/" labelButton="text" colorButton="blue"} using a inline notation for the
  components. This notation supports `ShButton` :ShButton{urlButton ="/" labelButton="all" styleButton="outline" colorButton="green"}
  styleButtons and all other parameters, colorButton for example.
---
::

## Props

::doc-api{section="props"}
::

## Slots

::doc-api{section="slots"}
::

## UI config

Default classes of every styled element. Override any key through the `ui` prop.

::doc-api{section="ui"}
::
