---
title: Card (Micro)
description:
constructorName: ShMicroCard
---

### Usage

#### Presentation
This is the display format for the {{ $doc.constructorName }} constructor, designed to showcase what are its capabilities.

##### Example Basic Avatar

::ShMicroCard
---
urlImage: https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png
urlWrapper: https://www.axios.com/
title: |
    Microsoft sets non-profit to cut software related carbon emissions. 
subtitle: |
    Axios gets you smarter, faster on what matters.
text: |
    This is a representation of [additional](https://www.nasa.gov/) field for text, if it is needed. It also has a *full Markdown capability*.
---
::

This is how it is constructed

```mdc
::ShMicroCard
---
urlImage: https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png
urlWrapper: https://www.axios.com/
title: |
    Microsoft sets non-profit to cut software related carbon emissions. 
subtitle: |
    Axios gets you smarter, faster on what matters.
text: |
    This is a representation of [additional](https://www.nasa.gov/) field for text, if it is needed. It also has a *full Markdown capability*.
---
::
```

### Props
These are the properties and attributes associated to the {{ $doc.constructorName }} constructor:

#### Properties and Attributes Description
The {{ $doc.constructorName }} constructor represents a micro card that can shocase a company logo with some punchlines and lighter descriptions. Whole card can be a link to a certain location or website. Below is a detailed description of the properties and attributes used in the {{ $doc.constructorName }} constructor.

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Attribute</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="9">ui</td>
      <td>n/a</td>
      <td>The <code>ui</code> property in the component is a configuration object that allows customization of various styling aspects of the component. Each attribute within the <code>ui</code> property targets a specific part of the component display, providing detailed control over its appearance and layout. Below is a detailed description of each attribute within the <code>ui</code> property:</td>
    </tr>
    <tr>
      <td><code>wrapper</code></td>
      <td>Defines the overall styling for the container that holds all the elements of the component.</td>
    </tr>
    <tr>
      <td><code>image</code></td>
      <td>Styles applied to the image element, including properties like size and border radius.</td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td>Styles applied to the title text, such as font size and color.</td>
    </tr>
    <tr>
      <td><code>subtitle</code></td>
      <td>Styles applied to the subtitle text, such as font size and color.</td>
    </tr>
    <tr>
      <td><code>text</code></td>
      <td>Styles applied to the text content, such as font size and color.</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>urlWrapper</td>
      <td>n/a</td>
      <td>The URL that wraps the component, typically for navigation purposes.</td>
    </tr>
    <tr>
      <td>urlImage</td>
      <td>n/a</td>
      <td>The source URL of the image to be displayed.</td>
    </tr>
    <tr>
      <td>altImage</td>
      <td>n/a</td>
      <td>Alternative text for the image, used for accessibility and in case the image fails to load.</td>
    </tr>
    <tr>
      <td>title</td>
      <td>n/a</td>
      <td>The title text to be displayed.</td>
    </tr>
    <tr>
      <td>subtitle</td>
      <td>n/a</td>
      <td>The subtitle text to be displayed, if any.</td>
    </tr>
    <tr>
      <td>text</td>
      <td>n/a</td>
      <td>The main text content to be displayed.</td>
    </tr>
  </tbody>
</table>

#### Example Usage
##### Advanced Settings
An example with customized `ui` attributes for enhanced display:

::ShMicroCard
---
ui:
    wrapper: shadow-xl bg-slate-200 #comments are allowed inline
    title: text-red-500
    text: text-oma-400
urlImage: https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png
urlWrapper: https://www.axios.com/
title: |
    Microsoft sets non-profit to cut software related carbon emissions. 
subtitle: |
    Axios gets you smarter, faster on what matters.
text: |
    This is a representation of [additional](https://www.nasa.gov/) field for text, if it is needed. It also has a *full Markdown capability*.
---
::

This is an example with customized `ui` attributes for enhanced display:

```mdc
::ShMicroCard
---
ui:
    wrapper: shadow-xl bg-slate-200 #comments are allowed inline
    title: text-red-500
    text: text-oma-400
urlImage: https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png
urlWrapper: https://www.axios.com/
title: |
    Microsoft sets non-profit to cut software related carbon emissions. 
subtitle: |
    Axios gets you smarter, faster on what matters.
text: |
    This is a representation of [additional](https://www.nasa.gov/) field for text, if it is needed. It also has a *full Markdown capability*.
---
::
```

### Config
These style properties can be modified via `ui` and are stored in the `sh-micro-card.ts` file:

```ts
export default {
    wrapper: "grid grid-row-3 grid-flow-row border-2 rounded-2xl max-w-lg max-h-lg p-4 mx-auto justify-items-center text-center hover:scale-105 duration-300",
    image: "relative mt-4 w-full h-auto flex shrink mx-auto",
    title: "text-2xl font-bold text-black dark:text-white",
    subtitle: "font-semibold text-lg text-gray-500 mt-3",
    text: "font-light text-md text-gray-400 mt-7",
    // Default Tailwind CSS values
    default: {
    }
  }
  ```

  #### Class Descriptions
These represent the class values utilized in the {{ $doc.constructorName }} constructor. These values are customizable and can be strengthened or overridden through the `ui` properties' attributes.

_**wrapper**_
*  **Value**: <code>"grid grid-row-3 grid-flow-row border-2 rounded-2xl max-w-lg max-h-lg p-4 mx-auto justify-items-center text-center hover:scale-105 duration-300"</code>
*  **Description**: This defines the overall styling for the container holding the elements. The value "grid grid-row-3 grid-flow-row border-2 rounded-2xl max-w-lg max-h-lg p-4 mx-auto justify-items-center text-center hover:scale-105 duration-300" indicates a grid layout with 3 rows (grid grid-row-3), a row flow layout (grid-flow-row), a 2-unit border (border-2), rounded corners (rounded-2xl), maximum width and height constraints (max-w-lg max-h-lg), padding of 4 units (p-4), centered horizontally (mx-auto), centered items (justify-items-center text-center), and a hover effect that scales up by 105% over 300ms (hover:scale-105 duration-300).

_**image**_
*  **Value**: <code>"relative mt-4 w-full h-auto flex shrink mx-auto"</code>
*  **Description**: This specifies styles for an image. The value "relative mt-4 w-full h-auto flex shrink mx-auto" includes a relative positioning (relative), a top margin of 4 units (mt-4), full width (w-full), automatic height (h-auto), a flex container (flex), shrinking to fit (shrink), and centered horizontally (mx-auto).

_**title**_
*  **Value**: <code>"text-2xl font-bold text-black dark:text-white"</code>
*  **Description**: This defines the styling for the title text. The value "text-2xl font-bold text-black dark:text-white" includes an extra-large font size (text-2xl), bold font weight (font-bold), black text color (text-black), and white text color in dark mode (dark:text-white).

_**subtitle**_
*  **Value**: <code>"font-semibold text-lg text-gray-500 mt-3"</code>
*  **Description**: This specifies the styling for the subtitle text. The value "font-semibold text-lg text-gray-500 mt-3" includes a large font size (text-lg), semi-bold font weight (font-semibold), gray text color (text-gray-500), and a top margin of 3 units (mt-3).

_**text**_
*  **Value**: <code>"font-light text-md text-gray-400 mt-7"</code>
*  **Description**: This defines the styling for general text. The value "font-light text-md text-gray-400 mt-7" includes a medium font size (text-md), light font weight (font-light), gray text color (text-gray-400), and a top margin of 7 units (mt-7).

_**default**_
*  **Value**: <code>{}</code>
*  **Description**: This object is intended to hold any default Tailwind CSS values that might be used as fallback or initial styles.


These style properties ensure that the {{ $doc.constructorName }} component is visually appealing and flexible, allowing for a wide range of customization to meet specific design requirements.