---
title: Card
description: This constructor allows you to have image on one half of the card, and text with labels on the other one. Text and labels have full Markdown support.
constructorName: ShCard
layout: doc
---

## Usage

The `ShCard` constructor represents a card divided in two halfs, with upper half containing image, and lower half containing text with additional options for inserting labels. Text & labels both fully support Markdown syntax.

### Basic

::doc-example
---
code: |
  ::ShCard
  ---
  text: |
      NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery. At its 20 centers and facilities across the country – and the only National Laboratory in space – [NASA](https://www.nasa.gov/) studies <a href="https://earth.google.com/web/" target="_blank">Earth</a>, including its climate, our Sun, and our solar system and beyond. We conduct research, testing, and development to advance aeronautics, including electric propulsion and supersonic flight. We develop and fund space technologies that will enable future exploration and benefit life on Earth.
  title: |
      NASA Space Program
  subtitle: |
      Per aspera ad astra
  leftLabel: |
      Hello left [label](https://www.nasa.gov)
  centerLabel: |
      Hello <a href="https://earth.google.com/" target="_blank">center</a> label
  rightLabel: |
      Hello <a href="https://earth.google.com/" target="_blank">right</a> label
  imageBackground: https://static.vecteezy.com/system/resources/previews/026/459/005/non_2x/abstract-background-images-wallpaper-ai-generated-free-photo.jpg 
  urlImage: https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg
  urlUpperBase: https://www.nasa.gov
  ---
  ::
---
::

### Advanced settings
An example with customized `ui` attributes for enhanced display:

Special cover effect can be applied to any `ShCard`, allowing the main content to be 'hidden' from the first sight, while revealing itself only on hover over. Here is the list of possible combinations of cover options w/ effects:
| Type  | Transition  | Opacity  |
|-------|------------|----------|
| **Image** | 🎞️ Image w/ Transition | 🌫️ Image w/ Opacity |
| **Icon**  | 🎭 Icon w/ Transition | 🔳 Icon w/ Opacity |
| **Text**  | ✍️ Text w/ Transition | 📄 Text w/ Opacity |

::ShMultiColumn
---
ui:
  wrapper: mb-12
cols: 3
---
  :::ShCard
  --- 
  coverImage: https://www.nasa.gov/wp-content/uploads/2024/11/sts066-s-011orig.jpg
  text: |
      NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery. At its 20 centers and facilities across the country – and the only National Laboratory in space – [NASA](https://www.nasa.gov/) studies <a href="https://earth.google.com/web/" target="_blank">Earth</a>, including its climate, our Sun, and our solar system and beyond. We conduct research, testing, and development to advance aeronautics, including electric propulsion and supersonic flight. We develop and fund space technologies that will enable future exploration and benefit life on Earth.
  title: |
      NASA Space Program
  subtitle: |
      Per aspera ad astra
  leftLabel: |
      Hello left [label](https://www.nasa.gov)
  centerLabel: |
      Hello <a href="https://earth.google.com/" target="_blank">center</a> label
  rightLabel: |
      Hello <a href="https://earth.google.com/" target="_blank">right</a> label
  imageBackground: https://static.vecteezy.com/system/resources/previews/026/459/005/non_2x/abstract-background-images-wallpaper-ai-generated-free-photo.jpg 
  urlImage: https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg
  urlUpperBase: https://www.nasa.gov
  ---
  :::

  :::ShCard
  --- 
  ui:
    coverText: text-6xl bg-gradient-to-b from-[#0B3D91] via-sky-500 to-white
  coverText: |
      Welcome to </br> NASA
  opacity: true
  text: |
      NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery. At its 20 centers and facilities across the country – and the only National Laboratory in space – [NASA](https://www.nasa.gov/) studies <a href="https://earth.google.com/web/" target="_blank">Earth</a>, including its climate, our Sun, and our solar system and beyond. We conduct research, testing, and development to advance aeronautics, including electric propulsion and supersonic flight. We develop and fund space technologies that will enable future exploration and benefit life on Earth.
  title: |
      NASA Space Program
  subtitle: |
      Per aspera ad astra
  leftLabel: |
      Hello left [label](https://www.nasa.gov)
  centerLabel: |
      Hello <a href="https://earth.google.com/" target="_blank">center</a> label
  rightLabel: |
      Hello <a href="https://earth.google.com/" target="_blank">right</a> label
  imageBackground: https://static.vecteezy.com/system/resources/previews/026/459/005/non_2x/abstract-background-images-wallpaper-ai-generated-free-photo.jpg 
  urlImage: https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg
  urlUpperBase: https://www.nasa.gov
  ---
  :::

  :::ShCard
  --- 
  coverIcon: streamline-emojis:rocket
  text: |
    NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery. At its 20 centers and facilities across the country – and the only National Laboratory in space – [NASA](https://www.nasa.gov/) studies <a href="https://earth.google.com/web/" target="_blank">Earth</a>, including its climate, our Sun, and our solar system and beyond. We conduct research, testing, and development to advance aeronautics, including electric propulsion and supersonic flight. We develop and fund space technologies that will enable future exploration and benefit life on Earth.
  title: |
    NASA Space Program
  subtitle: |
    Per aspera ad astra
  leftLabel: |
    Hello left [label](https://www.nasa.gov)
  centerLabel: |
    Hello <a href="https://earth.google.com/" target="_blank">center</a> label
  rightLabel: |
    Hello <a href="https://earth.google.com/" target="_blank">right</a> label
  imageBackground: https://static.vecteezy.com/system/resources/previews/026/459/005/non_2x/abstract-background-images-wallpaper-ai-generated-free-photo.jpg 
  urlImage: https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg
  urlUpperBase: https://www.nasa.gov
  ---
  :::
::

Code for `image w/ transition`, `text w/ opacity` & `icon w/transition` respectively:

::ShMultiColumn
---
ui:
  wrapper: mb-12
cols: 3
---
```mdc
  :::ShCard
    --- 
    coverImage: https://www.nasa.gov/wp-content/uploads/2024/11/sts066-s-011orig.jpg
    text: |
        NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery. At its 20 centers and facilities across the country – and the only National Laboratory in space – [NASA](https://www.nasa.gov/) studies <a href="https://earth.google.com/web/" target="_blank">Earth</a>, including its climate, our Sun, and our solar system and beyond. We conduct research, testing, and development to advance aeronautics, including electric propulsion and supersonic flight. We develop and fund space technologies that will enable future exploration and benefit life on Earth.
    title: |
        NASA Space Program
    subtitle: |
        Per aspera ad astra
    leftLabel: |
        Hello left [label](https://www.nasa.gov)
    centerLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">center</a> label
    rightLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">right</a> label
    imageBackground: https://static.vecteezy.com/system/resources/previews/026/459/005/non_2x/abstract-background-images-wallpaper-ai-generated-free-photo.jpg 
    urlImage: https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg
    urlUpperBase: https://www.nasa.gov
    ---
  :::
```

```mdc
  :::ShCard
    --- 
    ui:
      coverText: text-6xl bg-gradient-to-b from-[#0B3D91] via-sky-500 to-white
    coverText: |
        Welcome to </br> NASA
    opacity: true
    text: |
        NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery. At its 20 centers and facilities across the country – and the only National Laboratory in space – [NASA](https://www.nasa.gov/) studies <a href="https://earth.google.com/web/" target="_blank">Earth</a>, including its climate, our Sun, and our solar system and beyond. We conduct research, testing, and development to advance aeronautics, including electric propulsion and supersonic flight. We develop and fund space technologies that will enable future exploration and benefit life on Earth.
    title: |
        NASA Space Program
    subtitle: |
        Per aspera ad astra
    leftLabel: |
        Hello left [label](https://www.nasa.gov)
    centerLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">center</a> label
    rightLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">right</a> label
    imageBackground: https://static.vecteezy.com/system/resources/previews/026/459/005/non_2x/abstract-background-images-wallpaper-ai-generated-free-photo.jpg 
    urlImage: https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg
    urlUpperBase: https://www.nasa.gov
    ---
  :::
```

```mdc
  :::ShCard
  --- 
  coverIcon: streamline-emojis:rocket
  text: |
    NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery. At its 20 centers and facilities across the country – and the only National Laboratory in space – [NASA](https://www.nasa.gov/) studies <a href="https://earth.google.com/web/" target="_blank">Earth</a>, including its climate, our Sun, and our solar system and beyond. We conduct research, testing, and development to advance aeronautics, including electric propulsion and supersonic flight. We develop and fund space technologies that will enable future exploration and benefit life on Earth.
  title: |
    NASA Space Program
  subtitle: |
    Per aspera ad astra
  leftLabel: |
    Hello left [label](https://www.nasa.gov)
  centerLabel: |
    Hello <a href="https://earth.google.com/" target="_blank">center</a> label
  rightLabel: |
    Hello <a href="https://earth.google.com/" target="_blank">right</a> label
  imageBackground: https://static.vecteezy.com/system/resources/previews/026/459/005/non_2x/abstract-background-images-wallpaper-ai-generated-free-photo.jpg 
  urlImage: https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg
  urlUpperBase: https://www.nasa.gov
  ---
  :::
```
::

Customized `ui`:

::doc-example
---
code: |
  ::ShCard
  ---
  ui:
      wrapper: shadow-xl bg-red-500 
      title: text-4xl text-pink-800
      subtitle: font-mono text-cyan-700
      text: text-primary dark:text-black # Add text-color
      leftLabel: text-primary  # Add text-color
      centerLabel: text-primary
      rightLabel: text-primary
      upperBase: bg-red-300 # in order for this bg color to be displayed, we need to remove background prop
      lowerBase: bg-red-100
      image: hover:saturate-200 hover:scale-125 duration-300 # Options to style image
  text: |
      NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery. At its 20 centers and facilities across the country – and the only National Laboratory in space – [NASA](https://www.nasa.gov/) studies <a href="https://earth.google.com/web/" target="_blank">Earth</a>, including its climate, our Sun, and our solar system and beyond. We conduct research, testing, and development to advance aeronautics, including electric propulsion and supersonic flight. We develop and fund space technologies that will enable future exploration and benefit life on Earth.
  title: |
      NASA Space Program
  subtitle: |
      Per aspera ad astra
  leftLabel: | #Comment can be added on the first line
      Hello left [label](https://www.nasa.gov)
  centerLabel: |
      Hello <a href="https://earth.google.com/" target="_blank">center</a> label
  rightLabel: |
      Hello <a href="https://earth.google.com/" target="_blank">right</a> label
  imageBackground: https://static.vecteezy.com/system/resources/previews/026/459/005/non_2x/abstract-background-images-wallpaper-ai-generated-free-photo.jpg 
  urlImage: https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg
  urlUpperBase: https://www.nasa.gov
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
