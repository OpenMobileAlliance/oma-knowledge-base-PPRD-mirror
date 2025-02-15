---
title: Micro Card
description: Quick show of information in compact form.
constructorName: ShMicroCard
layout: doc
---

### Usage

#### Presentation
This is the display format for the <b>{{ $doc.constructorName }}</b> constructor, designed to showcase what are its capabilities.

##### Example Basic

::ShSegment
---
ui:
  wrapper: p-10
---
  :::ShMicroCard
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
  :::
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
These are the properties and attributes associated to the <b>{{ $doc.constructorName }}</b> constructor:

#### Properties and Attributes Description
The <b>{{ $doc.constructorName }}</b> constructor represents a micro card that can shocase a company logo with some punchlines and lighter descriptions. Whole card can be a link to a certain location or website. Below is a detailed description of the properties and attributes used in the <b>{{ $doc.constructorName }}</b> constructor.

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
      <td rowspan="9"><code>ui</code></td>
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
  </tbody>
  <tbody>
    <tr>
      <td><code>urlWrapper</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The URL that wraps the component, typically for navigation purposes.</td>
    </tr>
    <tr>
      <td><code>target</code></td>
      <td>n/a</td>
      <td><code>_self</code></td>
      <td>Specifies where to open the linked document.</td>
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
      <td><code>clipboard</code></td>
      <td>n/a</td>
      <td><code>false</code></td>
      <td>To show or not the copy button on hover over. It can either be <code>true</code> or <code>false</code></td>
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

::ShSegment
---
ui:
  wrapper: p-10
---
  :::ShMicroCard
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
  :::
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
These style properties can be modified via `ui` and are stored in the <code><b>{{ $doc.constructorName }}</b><b>.ts</b></code> file:

```ts
export default {
  wrapper: "container flex flex-col rounded-2xl p-4 mx-auto justify-items-center text-center hover:shadow-lg hover:scale-105 duration-300 border-2 bg-golden/[0.4] border-golden/[0.6] hover:border-golden dark:bg-neutral-700 dark:border-neutral-600 dark:hover:border-golden",
  image: "relative mt-4 w-full h-auto flex shrink mx-auto",
  icon: "relative sm:mt-4 w-10 h-10 flex shrink-0 mx-auto text-oma-blue-900/[0.7] hover:text-oma-blue-600 dark:text-oma-blue-200", 
  title: "title text-xl font-medium text-black dark:text-white break-words",
  subtitle: "subtitle text-base font-thin dark:font-thin text-neutral-500 dark:text-gray-400 mt-3 break-words",
  text: "text font-light text-md text-gray-400 dark:text-gray-600 mt-7 break-words",
  default: {
  }
}
```

#### Class Descriptions
These represent the class values utilized in the <b>{{ $doc.constructorName }}</b> constructor. These values are customizable and can be strengthened or overridden through the `ui` properties' attributes.

_**wrapper**_
* **Value**: `"container flex flex-col rounded-2xl p-4 mx-auto justify-items-center text-center hover:shadow-lg hover:scale-105 duration-300 border-2 bg-golden/[0.4] border-golden/[0.6] hover:border-golden dark:bg-neutral-700 dark:border-neutral-600 dark:hover:border-golden"`
* **Description**: A container with a flex column layout, rounded corners, padding, centered alignment, and text alignment. Includes hover effects for scaling, shadow, and border color changes, with light and dark mode background and border styles.

_**image**_
* **Value**: `"relative mt-4 w-full h-auto flex shrink mx-auto"`
* **Description**: Positions the image relatively, with top margin, full width, auto height, flexible shrinking behavior, and centered alignment.

_**icon**_
* **Value**: `"relative sm:mt-4 w-10 h-10 flex shrink-0 mx-auto text-oma-blue-900/[0.7] hover:text-oma-blue-600 dark:text-oma-blue-200"`
* **Description**: A small icon with relative positioning, flexible behavior, centered alignment, and responsive top margin. Includes light and dark mode blue text colors with hover effects.

_**title**_
* **Value**: `"title text-xl font-medium text-black dark:text-white break-words"`
* **Description**: Applies medium-weight, large-sized text with black coloring (light mode) or white coloring (dark mode). Allows text wrapping for long words.

_**subtitle**_
* **Value**: `"subtitle text-base font-thin dark:font-thin text-neutral-500 dark:text-gray-400 mt-3 break-words"`
* **Description**: A thin, base-sized text style with neutral or gray coloring, a top margin, and wrapping for long words. Adjusts font weight for dark mode.

_**text**_
* **Value**: `"text font-light text-md text-gray-400 dark:text-gray-600 mt-7 break-words"`
* **Description**: A light-text style with medium size, gray coloring, top margin, and wrapping for long words. Adjusts text color for dark mode.

_**default**_
* **Value**: `n/a`
* **Description**: This object is intended to hold any default Tailwind CSS values that might be used as fallback or initial styles.

These style properties ensure that the <b>{{ $doc.constructorName }}</b> component is visually appealing and flexible, allowing for a wide range of customization to meet specific design requirements.
