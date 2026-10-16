---
title: Action Card
description: A call-to-action card with an image or icon, short text and a button that links readers to a sign-up, registration or other destination page.
constructorName: ShActionCard
layout: doc
---
# {{$doc.title}}

## Usage

The `ShActionCard` constructor displays a call-to-action card with an image or icon, a title, subtitle and text, and a button that sends readers to another page, such as a newsletter or membership sign-up page.

### Basic

::doc-example
---
code: |
  ::ShActionCard
  ---
  title: |
      Stay updated with our articles updates
  subtitle: |
      Per aspera ad astra
  labelButton: Sign up
  colorButton: blue
  urlButton: https://www.nasa.gov/
  text: |
   *New text goes [here](https://www.nasa.gov/).*
  ---
  ::
---
::

### Advanced settings
An example with customized `ui` attributes for enhanced display:

::doc-example
---
code: |
  ::ShActionCard
  ---
  ui:
      wrapper: shadow-xl
      title: text-4xl
      subtitle: font-mono
      text: text-primary
  imageBackground: https://static.vecteezy.com/system/resources/previews/026/459/005/non_2x/abstract-background-images-wallpaper-ai-generated-free-photo.jpg
  title: |
      Stay updated with our articles updates
  subtitle: |
      Per aspera ad astra
  labelButton: Sign up
  colorButton: blue
  urlButton: https://www.nasa.gov/
  urlImage: https://gpm.nasa.gov/sites/default/files/document_files/NASA-Logo-Large.png
  altImage: NASA Logo
  icon: noto:rocket
  altIcon: Rocket
  text: |
   *New text goes [here](https://www.nasa.gov/).*
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
