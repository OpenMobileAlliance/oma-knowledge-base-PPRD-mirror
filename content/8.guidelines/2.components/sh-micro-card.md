---
title: Micro Card
description: Quick show of information in compact form.
constructorName: ShMicroCard
layout: doc
---

### Usage

::ShAlert
---
typeAlert: danger
---
When using links (anchors) in this component, use either `urlWrapper` or create a link from `title`, `subtitle` or `text`.
</br>
Do NOT combine both as it can result in undesired effects.
::

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
      This is a representation of additional field for text, if it is needed. It also has a *full Markdown capability*.
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
    This is a representation of additional field for text, if it is needed. It also has a *full Markdown capability*.
---
::
```

<b>{{ $doc.constructorName }}</b> constructor also comes with a `layout` option:

::ShSegment
---
ui:
  wrapper: p-10
---
  :::ShMicroCard
  ---
  layout: flat
  icon: logos:microsoft-icon
  urlWrapper: https://www.axios.com/
  title: |
      Microsoft sets non-profit to cut software related carbon emissions. 
  subtitle: |
      Axios gets you smarter, faster on what matters.
  text: |
      This is a representation of additional field for text, if it is needed. It also has a *full Markdown capability*.
  ---
  :::
::

```mdc
::ShMicroCard
---
layout: flat
icon: logos:microsoft-icon
urlWrapper: https://www.axios.com/
title: |
  Microsoft sets non-profit to cut software related carbon emissions. 
subtitle: |
  Axios gets you smarter, faster on what matters.
text: |
  This is a representation of additional field for text, if it is needed. It also has a *full Markdown capability*.
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
      <td rowspan="14"><code>ui</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The <code>ui</code> property in the component is a configuration object that allows customization of various styling aspects of the component. Each attribute within the <code>ui</code> property targets a specific part of the component display, providing detailed control over its appearance and layout. Below is a detailed description of each attribute within the <code>ui</code> property:</td>
    </tr>
    <tr>
      <td><code>wrapper</code></td>
      <td><code>config.default.wrapper</code></br><code>config.flat.wrapper</code></td>
      <td>Defines the overall styling for the container that holds all the elements of the component.</td>
    </tr>
    <tr>
      <td><code>coverImage</code></td>
      <td><code>config.default.coverImage</code></br><code>config.flat.coverImage</code></td>
      <td>Defines the styling for the cover image that spans across the whole constructor</td>
    </tr>
    <tr>
      <td><code>coverText</code></td>
      <td><code>config.default.coverText</code></br><code>config.flat.coverText</code></td>
      <td>Defines the styling for the cover text (including the color of the background) that spans across the whole constructor</td>
    </tr>
    <tr>
      <td><code>coverIconWrapper</code></td>
      <td><code>config.default.coverIconWrapper</code></br><code>config.flat.coverIconWrapper</code></td>
      <td>Defines the styling for the wrapper of the <code>coverIcon</code> component</td>
    </tr>
    <tr>
      <td><code>coverIcon</code></td>
      <td><code>config.default.coverIcon</code></br><code>config.flat.coverIcon</code></td>
      <td>Defines the styling for the icon used for covering the constructor</td>
    </tr>
    <tr>
      <td><code>image</code></td>
      <td><code>config.default.image</code></br><code>config.flat.image</code></td>
      <td>Styles applied to the image element, including properties like size and border radius.</td>
    </tr>
    <tr>
      <td><code>icon</code></td>
      <td><code>config.default.icon</code></br><code>config.flat.icon</code></td>
      <td>Styles applied to the icon element, including properties like size and border radius.</td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td><code>config.default.title</code></br><code>config.flat.title</code></td>
      <td>Styles applied to the title text, such as font size and color.</td>
    </tr>
    <tr>
      <td><code>subtitle</code></td>
      <td><code>config.default.subtitle</code></br><code>config.flat.subtitle</code></td>
      <td>Styles applied to the subtitle text, such as font size and color.</td>
    </tr>
    <tr>
      <td><code>text</code></td>
      <td><code>config.default.text</code></br><code>config.flat.text</code></td>
      <td>Styles applied to the text content, such as font size and color.</td>
    </tr>
  </tbody>
  <tbody>
  <tr>
      <td><code>layout</code></td>
      <td>n/a</td>
      <td><code>default</code></td>
      <td>This property allows us to change layout of a constructor which in effect has that our styling is changing and we get different look and effect out of the same component. <b>Options:</b> <code>default</code> & <code>flat</code></td>
    </tr>
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
      <td><code>coverImage</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Link to external or internal image that will be presented as a cover across the whole constructor</td>
    </tr>
    <tr>
      <td><code>coverIcon</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Any valid icon from <a href="https://icon-sets.iconify.design/" target="_blank">Iconify</a></td>
    </tr>
    <tr>
      <td><code>coverText</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Inscription that will be presented as a cover across the whole constructor (full Markdown support)</td>
    </tr>
    <tr>
      <td><code>opacity</code></td>
      <td>n/a</td>
      <td><code>false</code></td>
      <td>Setting this to true will trigger fadeaway effect on <code>coverImage</code>, <code>coverIcon</code> or <code>coverText</code>. Default state triggers the transition effect</td>
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
      <td><code>icon</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Any valid icon from <a href="https://icon-sets.iconify.design/" target="_blank">Iconify</a></td>
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
      This is a representation of additional field for text, if it is needed. It also has a *full Markdown capability*.
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
    This is a representation of additional field for text, if it is needed. It also has a *full Markdown capability*.
---
::
```

The following example will showcase an options on <b>{{ $doc.constructorName }}</b> and how to hidde its content:

::ShMultiColumn
---
cols: 3
---
  :::ShMicroCard
  ---
  #opacity: true
  #coverIcon: fluent:cursor-hover-16-regular
  #coverText: Hello
  coverImage: https://live.staticflickr.com/65535/54027120022_596f5ffdf3_4k.jpg
  urlImage: https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png
  urlWrapper: https://www.axios.com/
  title: |
      Microsoft sets non-profit to cut software related carbon emissions. 
  subtitle: |
      Axios gets you smarter, faster on what matters.
  text: |
      This is a representation of additional field for text, if it is needed. It also has a *full Markdown capability*.
  ---
  :::

  :::ShMicroCard
  ---
  opacity: true
  #coverIcon: fluent:cursor-hover-16-regular
  coverText: Three options for hidding content
  #coverImage: https://live.staticflickr.com/65535/54027120022_596f5ffdf3_4k.jpg
  urlImage: https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png
  urlWrapper: https://www.axios.com/
  title: |
      Microsoft sets non-profit to cut software related carbon emissions. 
  subtitle: |
      Axios gets you smarter, faster on what matters.
  text: |
      This is a representation of additional field for text, if it is needed. It also has a *full Markdown capability*.
  ---
  :::

  :::ShMicroCard
  ---
  opacity: true
  coverIcon: fluent:cursor-hover-16-regular
  #coverText: Hello
  #coverImage: https://live.staticflickr.com/65535/54027120022_596f5ffdf3_4k.jpg
  urlImage: https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png
  urlWrapper: https://www.axios.com/
  title: |
      Microsoft sets non-profit to cut software related carbon emissions. 
  subtitle: |
      Axios gets you smarter, faster on what matters.
  text: |
      This is a representation of additional field for text, if it is needed. It also has a *full Markdown capability*.
  ---
  :::
::

This is how these examples are written (hover over for full view):

::ShMultiColumn
---
cols: 3
---
  ::ShColumn
  ---
  class: 
  ---
  ```mdc
  ::ShMicroCard
  ---
  #opacity: true
  #coverIcon: fluent:cursor-hover-16-regular
  #coverText: Hello
  coverImage: https://live.staticflickr.com/65535/54027120022_596f5ffdf3_4k.jpg
  urlImage: https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png
  urlWrapper: https://www.axios.com/
  title: |
      Microsoft sets non-profit to cut software related carbon emissions. 
  subtitle: |
      Axios gets you smarter, faster on what matters.
  text: |
      This is a representation of additional field for text, if it is needed. It also has a *full Markdown capability*.
  ---
  ::
  ```
  ::

  ::ShColumn
  ---
  class: 
  ---
  ```mdc
  ::ShMicroCard
  ---
  opacity: true
  #coverIcon: fluent:cursor-hover-16-regular
  coverText: Three options for hidding content
  #coverImage: https://live.staticflickr.com/65535/54027120022_596f5ffdf3_4k.jpg
  urlImage: https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png
  urlWrapper: https://www.axios.com/
  title: |
      Microsoft sets non-profit to cut software related carbon emissions. 
  subtitle: |
      Axios gets you smarter, faster on what matters.
  text: |
      This is a representation of additional field for text, if it is needed. It also has a *full Markdown capability*.
  ---
  ::
  ```
  ::

  ::ShColumn
  ---
  class: 
  ---
  ```mdc
  ::ShMicroCard
  ---
  opacity: true
  coverIcon: fluent:cursor-hover-16-regular
  #coverText: Hello
  #coverImage: https://live.staticflickr.com/65535/54027120022_596f5ffdf3_4k.jpg
  urlImage: https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png
  urlWrapper: https://www.axios.com/
  title: |
      Microsoft sets non-profit to cut software related carbon emissions. 
  subtitle: |
      Axios gets you smarter, faster on what matters.
  text: |
      This is a representation of additional field for text, if it is needed. It also has a *full Markdown capability*.
  ---
  ::
  ```
  ::
::

### Config
These style properties can be modified via `ui` and are stored in the <code><b>{{ $doc.constructorName }}</b><b>.ts</b></code> file:

```ts
export default {
  default: {
    wrapper: "container overflow-hidden relative group flex flex-col rounded-2xl p-4 mx-auto max-w-md w-full h-full justify-items-center text-center hover:shadow-lg hover:scale-105 duration-300 border-2 bg-golden/[0.4] border-golden/[0.6] hover:border-golden dark:bg-neutral-700 dark:border-neutral-600 dark:hover:border-golden",
    coverImage: "absolute mb-0 bottom-0 left-0 w-full h-full object-fill opacity-100 ease-in-out z-40",
    coverText: "absolute inset-0 flex items-center justify-center text-center ease-in-out dark:bg-neutral-800 bg-white opacity-100 z-40",
    coverIconWrapper: "bg-white dark:bg-neutral-800 absolute inset-0 w-full h-full object-cover z-40",
    coverIcon: "absolute inset-0 w-full h-full object-cover opacity-100 ease-in-out z-40",
    image: "relative mt-4 w-full h-auto flex shrink mx-auto z-20",
    icon: "relative sm:mt-4 flex shrink-0 mx-auto text-oma-blue-900/[0.7] hover:text-oma-blue-600 dark:text-oma-blue-200 z-20",
    title: "title text-xl font-medium text-black dark:text-white break-words z-20",
    subtitle: "subtitle text-base font-thin dark:font-thin text-neutral-500 dark:text-gray-400 mt-3 break-words z-20",
    text: "text font-light text-[1.1rem] mt-7 break-words z-20",
  },
  flat: {
    wrapper: "container overflow-hidden relative group flex flex-col rounded-2xl p-4 mx-auto max-w-md w-full h-full justify-items-center text-center bg-transparent dark:bg-transparent",
    coverImage: "absolute mb-0 bottom-0 left-0 w-full h-full object-fill opacity-100 ease-in-out z-40",
    coverText: "absolute inset-0 flex items-center justify-center text-center ease-in-out dark:bg-neutral-800 bg-white opacity-100 z-40",
    coverIconWrapper: "bg-white dark:bg-neutral-800 absolute inset-0 w-full h-full object-cover z-40",
    coverIcon: "absolute inset-0 w-full h-full object-cover opacity-100 ease-in-out z-40",
    image: "relative mt-4 w-full h-auto flex shrink mx-auto z-20",
    icon: "relative sm:mt-4 mb-8 flex shrink-0 mx-auto text-[6rem] z-20",
    title: "title text-xl font-medium text-black dark:text-white break-words z-20",
    subtitle: "subtitle text-base font-thin dark:font-thin text-neutral-500 dark:text-gray-400 mt-1 break-words z-20",
    text: "text font-light text-[1rem] mt-7 break-words z-20",
  }
}
```

#### Class Descriptions

These class values are used in the <b>{{ $doc.constructorName }}</b> component. The values are customizable and can be adjusted through the `ui` properties' attributes.

</br>

- <code>default:</code></br>

  **_wrapper_**
  - **Value**: `"container overflow-hidden relative group flex flex-col rounded-2xl p-4 mx-auto max-w-md w-full h-full justify-items-center text-center hover:shadow-lg hover:scale-105 duration-300 border-2 bg-golden/[0.4] border-golden/[0.6] hover:border-golden dark:bg-neutral-700 dark:border-neutral-600 dark:hover:border-golden"`
  - **Description**: A flexible container with a column layout, rounded corners, padding, centered alignment, and a maximum width of medium size. Includes hover effects for scaling, shadow, and border color changes. The component adapts to both light and dark modes with respective background and border styles.

  **_coverImage_**
  - **Value**: `"absolute mb-0 bottom-0 left-0 w-full h-full object-fill opacity-100 ease-in-out z-40"`
  - **Description**: Positions the cover image absolutely at the bottom left, stretching it across the full width and height. The image will fill the container and maintain full opacity with smooth transition effects.

  **_coverText_**
  - **Value**: `"absolute inset-0 flex items-center justify-center text-center ease-in-out dark:bg-neutral-800 bg-white opacity-100 z-40"`
  - **Description**: Centers the cover text within the container, positioning it absolutely across the entire area. The text is centered both vertically and horizontally with smooth transition effects. The background color changes for light and dark modes.

  **_coverIconWrapper_**
  - **Value**: `"bg-white dark:bg-neutral-800 absolute inset-0 w-full h-full object-cover z-40"`
  - **Description**: A wrapper for the cover icon, positioned absolutely across the entire area. It has a background that adapts to light and dark modes and covers the container's full size.

  **_coverIcon_**
  - **Value**: `"absolute inset-0 w-full h-full object-cover opacity-100 ease-in-out z-40"`
  - **Description**: Positions the cover icon absolutely across the container, ensuring it covers the entire area. The icon has full opacity and is contained within the wrapper with smooth transition effects.

  **_image_**
  - **Value**: `"relative mt-4 w-full h-auto flex shrink mx-auto z-20"`
  - **Description**: Positions the image relatively with a top margin, full width, and automatic height. The image is centered horizontally with flexible shrinking behavior and placed in front of the cover elements.

  **_icon_**
  - **Value**: `"relative sm:mt-4 w-10 h-10 flex shrink-0 mx-auto text-oma-blue-900/[0.7] hover:text-oma-blue-600 dark:text-oma-blue-200 z-20"`
  - **Description**: A small icon with relative positioning, flexible behavior, centered alignment, and responsive top margin. It includes light and dark mode blue text colors with hover effects.

  **_title_**
  - **Value**: `"title text-xl font-medium text-black dark:text-white break-words z-20"`
  - **Description**: Applies medium-weight, large-sized text with black coloring (light mode) or white coloring (dark mode). Allows text wrapping for long words and is placed above other elements in the stack.

  **_subtitle_**
  - **Value**: `"subtitle text-base font-thin dark:font-thin text-neutral-500 dark:text-gray-400 mt-3 break-words z-20"`
  - **Description**: A thin, base-sized text style with neutral or gray coloring, a top margin, and wrapping for long words. Font weight adjusts for dark mode.

  **_text_**
  - **Value**: `"text font-light text-[1.1rem] mt-7 break-words z-20"`
  - **Description**: Default text style with medium size, top margin, and wrapping for long words. Positioned above other content.

<hr>

- <code>flat:</code></br>

  **_wrapper_**
  - **Value**: `"container overflow-hidden relative group flex flex-col rounded-2xl p-4 mx-auto max-w-md w-full h-full justify-items-center text-center bg-transparent dark:bg-transparent"`
  - **Description**: A flexible container with a column layout and rounded corners. It includes padding, centers its content both vertically and horizontally, and adapts to different screen sizes with a maximum width of medium size. The background is transparent in both light and dark modes.

  **_coverImage_**
  - **Value**: `"absolute mb-0 bottom-0 left-0 w-full h-full object-fill opacity-100 ease-in-out z-40"`
  - **Description**: Positions the cover image absolutely at the bottom left, stretching it across the full width and height. The image will fill the container and maintain full opacity with smooth transition effects.

  **_coverText_**
  - **Value**: `"absolute inset-0 flex items-center justify-center text-center ease-in-out dark:bg-neutral-800 bg-white opacity-100 z-40"`
  - **Description**: Centers the cover text within the container, positioning it absolutely across the entire area. The text is centered both vertically and horizontally with smooth transition effects. The background color changes for light and dark modes.

  **_coverIconWrapper_**
  - **Value**: `"bg-white dark:bg-neutral-800 absolute inset-0 w-full h-full object-cover z-40"`
  - **Description**: A wrapper for the cover icon, positioned absolutely across the entire area. It has a background that adapts to light and dark modes and covers the container's full size.

  **_coverIcon_**
  - **Value**: `"absolute inset-0 w-full h-full object-cover opacity-100 ease-in-out z-40"`
  - **Description**: Positions the cover icon absolutely across the container, ensuring it covers the entire area. The icon has full opacity and is contained within the wrapper with smooth transition effects.

  **_image_**
  - **Value**: `"relative mt-4 w-full h-auto flex shrink mx-auto z-20"`
  - **Description**: Positions the image relatively with a top margin, full width, and automatic height. The image is centered horizontally with flexible shrinking behavior and placed in front of the cover elements.

  **_icon_**
  - **Value**: `"relative sm:mt-4 w-10 h-10 flex shrink-0 mx-auto text-oma-blue-900/[0.7] hover:text-oma-blue-600 dark:text-oma-blue-200 z-20"`
  - **Description**: A small icon with relative positioning, flexible behavior, centered alignment, and responsive top margin. It includes light and dark mode blue text colors with hover effects.

  **_title_**
  - **Value**: `"title text-xl font-medium text-black dark:text-white break-words z-20"`
  - **Description**: Applies medium-weight, large-sized text with black coloring (light mode) or white coloring (dark mode). Allows text wrapping for long words and is placed above other elements in the stack.

  **_subtitle_**
  - **Value**: `"subtitle text-base font-thin dark:font-thin text-neutral-500 dark:text-gray-400 mt-3 break-words z-20"`
  - **Description**: A thin, base-sized text style with neutral or gray coloring, a top margin, and wrapping for long words. Font weight adjusts for dark mode.

  **_text_**
  - **Value**: `"text font-light text-[1.1rem] mt-7 break-words z-20"`
  - **Description**: Default text style with medium size, top margin, and wrapping for long words. Positioned above other content.