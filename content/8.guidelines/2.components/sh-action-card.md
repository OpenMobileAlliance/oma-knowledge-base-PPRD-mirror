---
title: Action Card
description: This constructor allows clients to input their emails for newsletter and subscriptions
constructorName: ShActionCard
layout: doc
---

### Usage

#### Presentation
This is the display format for the <b>{{ $doc.constructorName }}</b> constructor, designed to showcase what are its capabilities.

##### Example Basic 

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

This is how it is constructed

```mdc
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
```

### Props
These are the properties and attributes associated to the <b>{{ $doc.constructorName }}</b> constructor:

#### Properties and Attributes Description
The <b>{{ $doc.constructorName }}</b> constructor allows for clients and customers to subscribe to a newsletter or any other subscription-type format. Below is a detailed description of the properties and attributes used in the <b>{{ $doc.constructorName }}</b> constructor.

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
      <td rowspan="8"><code>ui</code></td>
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
      <td><code>image</code></td>
      <td><code>config.image</code></td>
      <td>Styles applied to the image element, including properties like size and border radius.</td>
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
      <td><code>button</code></td>
      <td><code>config.button</code></td>
      <td>Defines the styling for the button element, including hover effects and transition animations.</td>
    </tr>
    <tr>
      <td><code>icon</code></td>
      <td><code>config.icon</code></td>
      <td>Styles applied to the icon element, including properties like size and color.</td>
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
      <td><code>urlButton</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The URL link the button will navigate to when clicked.</td>
    </tr>
    <tr>
      <td><code>labelButton</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The label text displayed on the button.</td>
    </tr>
    <tr>
      <td><code>colorButton</code></td>
      <td>n/a</td>
      <td><code>black</code></td>
      <td>The color of the button.</td>
    </tr>
    <tr>
      <td><code>styleButton</code></td>
      <td>n/a</td>
      <td><code>solid</code></td>
      <td>The style of the button (can be: <code>outline</code>, <code>soft</code>, <code>solid</code>, <code>link</code>, <code>ghost</code>). </td>
    </tr>
    <tr>
      <td><code>icon</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The name of the icon to be displayed.</td>
    </tr>
    <tr>
      <td><code>altIcon</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Alternative text for the icon, used for accessibility.</td>
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

This is an example with customized `ui` attributes for enhanced display:

```mdc
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
```

### Config
These style properties can be modified via `ui` and are stored in the <code><b>{{ $doc.constructorName }}</b><b>.ts</b></code> file:

```ts
export default {
    wrapper: "mt-6 dark:bg-inherit border-2 border-neutral-300 dark:border-neutral-500 mx-auto p-4 rounded-xl bg-no-repeat bg-cover size-full max-w-4xl max-h-3xl",
    image: "col-start-1 col-span-1 size-4/6 self-center place-self-center row-span-2 w-fit h-fit",
    title: "text-2xl text-black dark:text-white text-center font-bold",
    subtitle: "text-lg text-center font-semibold text-gray-400 -mt-8",
    text: "text-md text-center font-light not-prose",
    button: "hover:drop-shadow-xl hover:saturate-200 col-start-3 col-span-1 mx-auto mb-4 not-prose",
    colorButton: "black",
    icon: "self-center place-self-center row-start-1 row-span-2 col-start-5 col-span-1",
    // Default Tailwind CSS values
    default: {
    }
  }
```

#### Class Descriptions
These represent the class values utilized in the <b>{{ $doc.constructorName }}</b> constructor. These values are customizable and can be strengthened or overridden through the `ui` properties' attributes.

_**wrapper**_
*  **Value**: <code>"mt-6 border-2 dark:border-gray-700 mx-auto p-4 rounded-xl bg-no-repeat bg-cover size-full max-w-4xl max-h-3xl"</code>
*  **Description**: This defines the overall styling for the container holding the elements. The value "mt-6 border-2 dark:border-gray-700 mx-auto p-4 rounded-xl bg-no-repeat bg-cover size-full max-w-4xl max-h-3xl" indicates a top margin of 6 units (mt-6), a 2-unit border (border-2), a gray border in dark mode (dark:border-gray-700), centered horizontally (mx-auto), padding of 4 units (p-4), rounded corners (rounded-xl), background properties (bg-no-repeat bg-cover), and size constraints with maximum width and height set (max-w-4xl max-h-3xl).

_**image**_
*  **Value**: <code>"col-start-1 col-span-1 size-4/6 self-center place-self-center row-span-2 w-fit h-fit"</code>
*  **Description**: This specifies styles for an image. The value "col-start-1 col-span-1 size-4/6 self-center place-self-center row-span-2 w-fit h-fit" includes starting at column 1 (col-start-1), spanning 1 column (col-span-1), a size of 4/6 of the container (size-4/6), centered alignment within its cell (self-center), placement at the center of its grid cell (place-self-center), spanning 2 rows (row-span-2), and fitting width and height (w-fit h-fit).

_**title**_
*  **Value**: <code>"text-2xl text-black text-center font-bold"</code>
*  **Description**: This defines the styling for the title text. The value "text-2xl text-black text-center font-bold" includes a large font size (text-2xl), black text color (text-black), centered text alignment (text-center), and bold font weight (font-bold).

_**subtitle**_
*  **Value**: <code>"text-lg text-center font-semibold text-gray-600 -mt-8"</code>
*  **Description**: This specifies the styling for the subtitle text. The value "text-lg text-center font-semibold text-gray-600 -mt-8" includes a medium-large font size (text-lg), centered text alignment (text-center), semi-bold font weight (font-semibold), gray text color (text-gray-600), and a top margin of -8 units (-mt-8).

_**text**_
*  **Value**: <code>"text-md text-center font-light text-gray-600"</code>
*  **Description**: This defines the styling for general text. The value "text-md text-center font-light text-gray-600" includes a medium font size (text-md), centered text alignment (text-center), light font weight (font-light), and gray text color (text-gray-600).

_**button**_
*  **Value**: <code>"hover:drop-shadow-xl hover:saturate-200 col-start-3 col-span-1 mx-auto mb-4 not-prose"</code>
*  **Description**: This specifies the styling for a button. The value "hover:drop-shadow-xl hover:saturate-200 col-start-3 col-span-1 mx-auto mb-4 not-prose" includes an extra-large drop shadow on hover (hover:drop-shadow-xl), increased saturation on hover (hover:saturate-200), starting at column 3 (col-start-3), spanning 1 column (col-span-1), centered horizontally (mx-auto), a bottom margin of 4 units (mb-4), and excludes prose formatting (not-prose).

_**colorButton**_
*  **Value**: <code>"black"</code>
*  **Description**: This defines the color of the button. The value "black" sets the button's color to black.

_**icon**_
*  **Value**: <code>"self-center place-self-center row-start-1 row-span-2 col-start-5 col-span-1"</code>
*  **Description**: This specifies the styling for an icon. The value "self-center place-self-center row-start-1 row-span-2 col-start-5 col-span-1" includes centered alignment within its cell (self-center), placement at the center of its grid cell (place-self-center), starting at row 1 (row-start-1), spanning 2 rows (row-span-2), starting at column 5 (col-start-5), and spanning 1 column (col-span-1).

_**default**_
*  **Value**: <code>{}</code>
*  **Description**: This object is intended to hold any default Tailwind CSS values that might be used as fallback or initial styles.

These style properties ensure that the <b>{{ $doc.constructorName }}</b> component is visually appealing and flexible, allowing for a wide range of customization to meet specific design requirements.
