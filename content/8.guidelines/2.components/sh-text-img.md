---
title: Text&Image #title of the window browser
description: Have text and image in the same row. You can also declare the span of text thus changing the size of image, and changing the position of text.
constructorName: ShTextImg
layout: doc
---
# {{$doc.title}}

## Usage

The `ShTextImg` constructor gives you an option to hold both image and text in one row. Text size, position and alignement are fully adjustable.

### Basic

::doc-example
---
code: |
  ::ShTextImg
  ---
  positionText: left
  spanText: s
  alignText: left
  urlImage: https://www.nasa.gov/wp-content/uploads/2023/01/draco-4-darpa-nasa-ussf-caption.jpg?resize=2000,1119
  title: |
    Hello component
  subtitle: |
    Hello subtitle
  text: |
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et ligula quis justo bibendum consequat. Ut auctor diam sit amet diam ornare euismod. [URL](https://docs.google.com/spreadsheets/d/18O4QvBpIGMcXMq3VZMICwYB8L7tyJ11T/edit#gid=1718761465) elit at dapibus commodo. <a href="https://en.wikipedia.org/wiki/Gaius_Maecenas">Maecenas</a> sit amet purus eu metus pharetra pulvinar. In quis scelerisque leo. Praesent scelerisque at nulla non fermentum. Morbi varius nisi eu pharetra molestie. Sed ipsum mauris, tincidunt ut velit ac, luctus egestas mi. Quisque commodo dui in mi aliquam, nec varius nunc luctus.
  ---
  ::
---
::

### Advanced settings
An example with customized `ui` attributes for enhanced display:

::doc-example
---
code: |
  ::ShTextImg
  ---
  ui:
    wrapper: shadow-xl
    title: text-4xl
    subtitle: font-mono
    text:  # no style has been applied, added as a reference only.
    image: hover:skew-y-3 # when hovered over image, it skews
  positionText: left #this is an inline comment example that is not displayed
  spanText: s
  alignText: left
  status: d #options: "a", "b", "c", "d" & default
  urlImage: https://www.nasa.gov/wp-content/uploads/2023/01/draco-4-darpa-nasa-ussf-caption.jpg?resize=2000,1119
  title: |
    Hello component
  subtitle: |
    Hello subtitle
  text: |
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et ligula quis justo bibendum consequat. Ut auctor diam sit amet diam ornare euismod. [URL](https://docs.google.com/spreadsheets/d/18O4QvBpIGMcXMq3VZMICwYB8L7tyJ11T/edit#gid=1718761465) elit at dapibus commodo. <a href="https://en.wikipedia.org/wiki/Gaius_Maecenas">Maecenas</a> sit amet purus eu metus pharetra pulvinar. In quis scelerisque leo. Praesent scelerisque at nulla non fermentum. Morbi varius nisi eu pharetra molestie. Sed ipsum mauris, tincidunt ut velit ac, luctus egestas mi. Quisque commodo dui in mi aliquam, nec varius nunc luctus.
  ---
  ::
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
