---
title: Card (Micro)
description:
constructorName: ShMicroCard
layout: doc
---

### Usage

#### Presentation
This is the display format for the {{ $doc.constructorName }} constructor, designed to showcase what are its capabilities.

##### Example Basic

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
    <tr>
      <td>description</td>
      <td>n/a</td>
      <td>Intented to be used as a help to content writter. Doesn`t render on website.</td>
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
    text: text-oma-purple-300
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
    text: text-oma-purple-300
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
    wrapper: "grid grid-row-3 grid-flow-row rounded-2xl max-w-lg max-h-lg p-4 mx-auto justify-items-center text-center hover:scale-105 duration-300 bg-white border-2 border-neutral-300 dark:bg-zinc-800 hover:border-primary dark:border-neutral-500 dark:hover:border-primary",
    image: "relative mt-4 w-full h-auto flex shrink mx-auto",
    icon: "relative mt-4 w-full h-auto flex shrink mx-auto", 
    title: "text-2xl font-medium text-black dark:text-white",
    subtitle: "font-light text-lg text-[#1F2329] dark:text-gray-400 mt-3 font-style: italic",
    text: "font-light text-md text-gray-400 dark:text-gray-600 mt-7",
    // Default Tailwind CSS values
    default: {
    }
  }
```

#### Class Descriptions
These represent the class values utilized in the {{ $doc.constructorName }} constructor. These values are customizable and can be strengthened or overridden through the `ui` properties' attributes.

### Class Descriptions

_**wrapper**_
*  **Value**: `grid grid-row-3 grid-flow-row border-2 rounded-2xl shadow-lg bg-red-100 max-w-lg max-h-lg p-4 mx-auto justify-items-center text-center hover:scale-105 duration-300 hover:bg-red-200`
*  **Description**: Defines a grid layout with 3 rows and a row flow, applies a 2-pixel border, extra-large rounded corners, a large shadow, and a light red background. Limits maximum width and height to large sizes, adds padding, centers the element horizontally, centers items in the grid, centers text, scales up on hover, transitions the scaling, and changes the background color on hover.

_**image**_
*  **Value**: `relative mt-4 w-full h-auto flex shrink mx-auto`
*  **Description**: Positions the image relative to its container, adds a top margin, ensures full width and automatic height adjustment, applies flexbox styling, prevents shrinking, and centers it horizontally.

_**icon**_
*  **Value**: `relative mt-4 w-full h-auto flex shrink mx-auto`
*  **Description**: Similar to the image class, it positions the icon relative to its container, adds a top margin, ensures full width and automatic height adjustment, applies flexbox styling, prevents shrinking, and centers it horizontally.

_**title**_
*  **Value**: `text-2xl font-bold text-black dark:text-white`
*  **Description**: Sets the text size to 2xl, applies bold font weight, and sets the text color to black with a white color in dark mode.

_**subtitle**_
*  **Value**: `font-semibold text-lg text-gray-500 mt-3`
*  **Description**: Applies semi-bold font weight, sets text size to large, uses a gray color for the text, and adds a top margin.

_**text**_
*  **Value**: `font-light text-md text-gray-400 mt-7`
*  **Description**: Applies light font weight, sets text size to medium, uses a gray color for the text, and adds a top margin.

_**default**_
*  **Value**: `{}`
*  **Description**: Placeholder for default Tailwind CSS values, currently empty.



These style properties ensure that the {{ $doc.constructorName }} component is visually appealing and flexible, allowing for a wide range of customization to meet specific design requirements.
