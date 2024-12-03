---
title: Card
description: This constructor allows you to have image on one half of the card, and text with labels on the other one. Text and labels have full Markdown support.
constructorName: ShCard
layout: doc
---

### Usage

#### Presentation
This is the display format for the <b>{{ $doc.constructorName }}</b> constructor, designed to showcase what are its capabilities.

##### Example Basic

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

This is how it is constructed

```mdc
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
```

### Props
These are the properties and attributes associated to the <b>{{ $doc.constructorName }}</b> constructor:

#### Properties and Attributes Description
The <b>{{ $doc.constructorName }}</b> constructor represents a card divided in two halfs, with upper half containing image, and lower half containing text with additional options for inserting labels. Text & labels both fully support Markdown syntax. Below is a detailed description of the properties and attributes used in the <b>{{ $doc.constructorName }}</b> constructor.

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Attribute</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="11"><code>ui</coode></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The <code>ui</code> property in the component is a configuration object that allows customization of various styling aspects of the component. Each attribute within the <code>ui</code> property targets a specific part of the component display, providing detailed control over its appearance and layout. Below is a detailed description of each attribute within the <code>ui</code> property:</td>
    </tr>
    <tr>
      <td><code>wrapper</code></td>
      <td><code>config.wrapper</code></td>
      <td>Defines the overall styling for the container that holds all the elements of the component.</td>
    </tr>
    <tr>
      <td><code>upperBase</code></td>
      <td><code>config.upperBase</code></td>
      <td>Defines the styling for the upper section of the component, typically where the image is displayed.</td>
    </tr>
    <tr>
      <td><code>image</code></td>
      <td><code>config.image</code></td>
      <td>Styles applied to the image element, including properties like size and border radius.</td>
    </tr>
    <tr>
      <td><code>lowerBase</code></td>
      <td><code>config.lowerBase</code></td>
      <td>Defines the styling for the lower section of the component, typically where the text content is displayed.</td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td><code>config.title</code></td>
      <td>Styles applied to the title text, such as font size and color.</td>
    </tr>
    <tr>
      <td><code>subtitle</code></td>
      <td><code>config.subtitle</code></td>
      <td>Styles applied to the subtitle text, such as font size and color.</td>
    </tr>
    <tr>
      <td><code>text</code></td>
      <td><code>config.text</code></td>
      <td>Styles applied to the text content, such as font size and color.</td>
    </tr>
    <tr>
      <td><code>leftLabel</code></td>
      <td><code>config.leftLabel</code></td>
      <td>Defines the overall styling for the leftLabel that holds the text.</td>
    </tr>
    <tr>
      <td><code>centerLabel</code></td>
      <td><code>config.centerLabel</code></td>
      <td>Defines the overall styling for the centerLabel that holds the text.</td>
    </tr>
    <tr>
      <td><code>rightLabel</code></td>
      <td><code>config.rightLabel</code></td>
      <td>Defines the overall styling for the rightLabel that holds the text.</td>
    </tr>
    <tr>
      <td><code>urlUpperBase</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The URL that wraps the upper section of the component, typically for navigation purposes.</td>
    </tr>
    <tr>
      <td><code>urlImage</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The source URL of the image to be displayed.</td>
    </tr>
    <tr>
      <td><code>altImage</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Alternative text for the image, used for accessibility and in case the image fails to load.</td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The title text to be displayed.</td>
    </tr>
    <tr>
      <td><code>subtitle</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The subtitle text to be displayed, if any.</td>
    </tr>
    <tr>
      <td><code>text</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The main text content to be displayed.</td>
    </tr>
    <tr>
      <td><code>leftLabel</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The text to be displayed in the left label.</td>
    </tr>
    <tr>
      <td><code>centerLabel</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The text to be displayed in the center label.</td>
    </tr>
    <tr>
      <td><code>rightLabel</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The text to be displayed in the right label.</td>
    </tr>
    <tr>
      <td><code>imageBackground</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The background image for the component's image section.</td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Intented to be used as a help to content writter. Doesn`t render on website.</td>
    </tr>
  </tbody>
</table>

#### Example Usage
##### Advanced Settings
An example with customized `ui` attributes for enhanced display:

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

This is an example with customized `ui` attributes for enhanced display:

```mdc
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
```

### Config
These style properties can be modified via `ui` and are stored in the <code><b>{{ $doc.constructorName }}</b><b>.ts</b></code> file:

```ts
export default {
  wrapper: "flex flex-col justify-between border-2 dark:border-neutral-700 hover:border-2 hover:border-primary dark:hover:border-2 dark:hover:border-primary rounded-xl mx-auto max-w-lg overflow-hidden bg-inherit shadow-2xl",
  upperBase: "flex items-center justify-center rounded-t-xl",
  image: "h-full w-screen rounded-b-xl overflow-hidden",
  lowerBase: "p-6 rounded-b-xl",
  title: "text-3xl font-extrabold text-primary",
  subtitle: "text-xl font-semibold text-primary-700 -mt-8",
  text: "text-base text-gray-800 dark:text-gray-200 not-prose",
  leftLabel: "mt-3 text-lg text-gray-600 dark:text-gray-400 not-prose",
  centerLabel: "mt-3 text-lg text-gray-600 dark:text-gray-400 not-prose",
  rightLabel: "mt-3 text-lg text-gray-600 dark:text-gray-400 not-prose",
  // Default Tailwind CSS values
  default: {
  }
}
```

#### Class Descriptions
These represent the class values utilized in the <b>{{ $doc.constructorName }}</b> constructor. These values are customizable and can be strengthened or overridden through the `ui` properties' attributes.

_**wrapper**_
*  **Value**: <code>"flex flex-col justify-between border-2 rounded-xl mx-auto max-w-lg overflow-hidden"</code>
*  **Description**: Defines the overall container styles. The value "flex flex-col justify-between border-2 rounded-xl mx-auto max-w-lg overflow-hidden" sets a flexible column layout (flex flex-col), evenly spaces items (justify-between), applies a 2-unit border (border-2), rounds corners (rounded-xl), centers horizontally (mx-auto), constrains maximum width (max-w-lg), and hides overflow (overflow-hidden).

_**upperBase**_
*  **Value**: <code>"flex items-center justify-center rounded-t-xl overflow-hidden"</code>
*  **Description**: Specifies styles for the upper section. The value "flex items-center justify-center rounded-t-xl overflow-hidden" uses a flexible box layout (flex), centers items (items-center justify-center), rounds the top corners (rounded-t-xl), and hides overflow (overflow-hidden).

_**image**_
*  **Value**: <code>"h-full w-auto p-8 object-cover"</code>
*  **Description**: Defines styles for the image. The value "h-full w-auto p-8 object-cover" makes the image fill its container height (h-full), adjusts width automatically (w-auto), adds padding of 8 units (p-8), and ensures the image covers the container while maintaining aspect ratio (object-cover).

_**lowerBase**_
*  **Value**: <code>"p-6 rounded-b-xl"</code>
*  **Description**: Specifies styles for the lower section. The value "p-6 rounded-b-xl" adds padding of 6 units (p-6) and rounds the bottom corners (rounded-b-xl).

_**title**_
*  **Value**: <code>"text-3xl font-extrabold"</code>
*  **Description**: Defines styles for the title text. The value "text-3xl font-extrabold" sets a large font size (text-3xl) and applies an extra-bold font weight (font-extrabold).

_**subtitle**_
*  **Value**: <code>"text-xl font-semibold text-gray-600 dark:text-gray-400 -mt-8"</code>
*  **Description**: Specifies styles for the subtitle text. The value "text-xl font-semibold text-gray-600 dark:text-gray-400 -mt-8" includes a large font size (text-xl), semi-bold font weight (font-semibold), gray text color (text-gray-600), dark mode gray text color (dark:text-gray-400), and a top margin of -8 units (-mt-8).

_**text**_
*  **Value**: <code>"text-base text-gray-800 dark:text-gray-200"</code>
*  **Description**: Defines styles for general text. The value "text-base text-gray-800 dark:text-gray-200" includes a base font size (text-base), gray text color (text-gray-800), and dark mode gray text color (dark:text-gray-200).

_**leftLabel**_
*  **Value**: <code>"text-lg text-gray-600 dark:text-gray-400"</code>
*  **Description**: Defines styles for the left label text. The value "text-lg text-gray-600 dark:text-gray-400" includes a large font size (text-lg), gray text color (text-gray-600), and dark mode gray text color (dark:text-gray-400).

_**centerLabel**_
*  **Value**: <code>"text-lg text-gray-600 dark:text-gray-400"</code>
*  **Description**: Specifies styles for the center label text. The value "text-lg text-gray-600 dark:text-gray-400" includes a large font size (text-lg), gray text color (text-gray-600), and dark mode gray text color (dark:text-gray-400).

_**rightLabel**_
*  **Value**: <code>"text-lg text-gray-600 dark:text-gray-400"</code>
*  **Description**: Defines styles for the right label text. The value "text-lg text-gray-600 dark:text-gray-400" includes a large font size (text-lg), gray text color (text-gray-600), and dark mode gray text color (dark:text-gray-400).

_**default**_
*  **Value**: <code>{}</code>
*  **Description**: This object is intended to hold any default Tailwind CSS values that might be used as fallback or initial styles.

These style properties ensure that the <b>{{ $doc.constructorName }}</b> component is visually appealing and flexible, allowing for a wide range of customization to meet specific design requirements.
