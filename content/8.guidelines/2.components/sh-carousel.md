---
title: Carousel
description: A component for displaying rotating slides with navigation controls and auto-sliding feature.
constructorName: ShCarousel
layout: doc
---

### Usage

#### Presentation
This is the display format for the <b>{{ $doc.constructorName }}</b> constructor, designed to showcase its capabilities.

##### Example Basic

::ShCarousel
  :::ShMicroCard
  ---
  layout: flat
  icon: lineicons:nasa
  urlWrapper: https://www.nasa.gov/
  title: |
    NASA
  subtitle: |
    Beyond the Frontier 
  ---
  :::

  :::ShMicroCard
  ---
  layout: flat
  icon: gis:earth-euro-africa-o
  urlWrapper: https://science.nasa.gov/earth/facts/
  title: |
    Earth 
  subtitle: |
    The Blue Marble
  ---
  :::

  :::ShMicroCard
  ---
  layout: flat
  icon: streamline-emojis:new-moon
  urlWrapper: https://science.nasa.gov/moon/
  title: |
    The Moon  
  subtitle: |
    Earth's Companion
  ---
  :::

  :::ShMicroCard
  ---
  layout: flat
  icon: game-icons:mars-curiosity
  urlWrapper: https://science.nasa.gov/mars/
  title: |
    Mars  
  subtitle: |
    Meet the neighbour
  ---
  :::
::

This is how it is constructed

```mdc
::ShCarousel
  :::ShMicroCard
  ---
  layout: flat
  icon: lineicons:nasa
  urlWrapper: https://www.nasa.gov/
  title: |
    NASA
  subtitle: |
    Beyond the Frontier 
  ---
  :::

  :::ShMicroCard
  ---
  layout: flat
  icon: gis:earth-euro-africa-o
  urlWrapper: https://science.nasa.gov/earth/facts/
  title: |
    Earth 
  subtitle: |
    The Blue Marble
  ---
  :::

  :::ShMicroCard
  ---
  layout: flat
  icon: streamline-emojis:new-moon
  urlWrapper: https://science.nasa.gov/moon/
  title: |
    The Moon  
  subtitle: |
    Earth's Companion
  ---
  :::

  :::ShMicroCard
  ---
  layout: flat
  icon: game-icons:mars-curiosity
  urlWrapper: https://science.nasa.gov/mars/
  title: |
    Mars  
  subtitle: |
    Meet the neighbour
  ---
  :::
::
```

You can combine components inside the <b>{{ $doc.constructorName}}</b>:

::ShAlert
---
typeAlert: warning
---
This is not recommended because different components can have different styles and it can be difficult to manage the layout and appearance of the carousel. It is better to use a single type of component for consistency and ease of use.
::

::ShSegment
---
ui: 
  wrapper: border border-golden rounded-lg
---
::ShCarousel
  :::ShMicroCard
  ---
  layout: flat
  icon: game-icons:lunar-module
  urlWrapper: https://www.nasa.gov/mission/apollo-11/
  title: Apollo 11
  subtitle: First Moon Landing- Crew
  ---
  :::

  :::ShAvatar
  ---
  srcAvatar: https://endz.in/wp-content/uploads/2020/05/neil-armstrong-9188943-2-402-1024x1024.jpg
  altAvatar: Neil Armstrong
  name: Neil A. Armstrong
  role: Mission Commander
  company: NASA
  ---
  :::

  :::ShAvatar
  ---
  srcAvatar: https://www.mathrubhumi.com/image/contentid/policy:1.5627767:1644480627/image.jpg?$p=0f6e831&f=4x3&w=1080&q=0.8
  altAvatar: Michael Collins
  name: Michael Collins
  role: Command Module Pilot
  company: NASA
  ---
  :::

  :::ShAvatar
  ---
  srcAvatar: https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MjAyOTYxMzkwMjM0MTgyNzI0/buzz-aldrin-astronaut-and-innovator.jpg
  altAvatar: Buzz Aldrin
  name: Edwin E. Aldrin Jr.
  role: Pilot of the Lunar Lander Eagle
  company: NASA
  ---
  :::
::

::ShSegment
---
ui:
  wrapper: border border-golden rounded-lg mt-12 -mb-7
---
::

```mdc
::ShCarousel
  :::ShMicroCard
  ---
  layout: flat
  icon: game-icons:lunar-module
  urlWrapper: https://www.nasa.gov/mission/apollo-11/
  title: Apollo 11
  subtitle: First Moon Landing- Crew
  ---
  :::

  :::ShAvatar
  ---
  srcAvatar: https://endz.in/wp-content/uploads/2020/05/neil-armstrong-9188943-2-402-1024x1024.jpg
  altAvatar: Neil Armstrong
  name: Neil A. Armstrong
  role: Mission Commander
  company: NASA
  ---
  :::

  :::ShAvatar
  ---
  srcAvatar: https://www.mathrubhumi.com/image/contentid/policy:1.5627767:1644480627/image.jpg?$p=0f6e831&f=4x3&w=1080&q=0.8
  altAvatar: Michael Collins
  name: Michael Collins
  role: Command Module Pilot
  company: NASA
  ---
  :::

  :::ShAvatar
  ---
  srcAvatar: https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MjAyOTYxMzkwMjM0MTgyNzI0/buzz-aldrin-astronaut-and-innovator.jpg
  altAvatar: Buzz Aldrin
  name: Edwin E. Aldrin Jr.
  role: Pilot of the Lunar Lander Eagle
  company: NASA
  ---
  :::
::
```
::

### Props

These are the properties and attributes associated with the <b>{{ $doc.constructorName }}</b> constructor:

#### Properties and Attributes Description
The <b>{{ $doc.constructorName }}</b> constructor represents a carousel component that supports rotating slides, navigation control, and automatic slide transitions. Below is a detailed description of the properties and attributes used in the <b>{{ $doc.constructorName }}</b> constructor.

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
      <td>Defines the overall styling for the carousel container.</td>
    </tr>
    <tr>
      <td><code>inner</code></td>
      <td><code>config.inner</code></td>
      <td>Defines the styling for the inner sliding container.</td>
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
      <td><code>image</code></td>
      <td><code>config.image</code></td>
      <td>Styles applied to the image element, including properties like size and border radius.</td>
    </tr>
    <tr>
      <td><code>indicators</code></td>
      <td><code>config.indicators</code></td>
      <td>Defines the styling for the carousel indicators (pagination dots).</td>
    </tr>
    <tr>
      <td><code>icon</code></td>
      <td><code>config.icon</code></td>
      <td>Defines the styling for icons or in this context indicators such as scale when hover, color change etc.</td>
    </tr>
    <tr>
      <td><code>component</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>In order to use any component inside <code>ShCarousel</code>, this prop must be used. It is <strong>mandatory</strong> to use it for each new component that you wish to add to <code>ShCarousel</code> constructor.</td>
    </tr>
    <tr>
      <td><code>items</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>An array of slide items, each with a component and its props.</td>
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
      <td>Intended to define the icon used for indicators.</td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Intended to be used as a help to content writer. Doesn’t render on the website.</td>
    </tr>
  </tbody>
</table>

### Config
These style properties can be modified via `ui` and are stored in the <code><b>{{ $doc.constructorName }}</b><b>.ts</b></code>:

```ts
export default {
    wrapper: "relative flex items-center w-full mt-10 overflow-hidden",
    title: "text-3xl font-bold text-center dark:text-gray-100",
    subtitle: "text-2xl text-center dark:text-gray-300 -mt-5",
    inner: "flex transition-transform duration-500 ease-in-out",
    image: "w-full h-auto max-h-500 object-cover",
    indicators: "mt-6 w-full text-center",
    icon: "hover:scale-125 duration-300 dark:text-gray-300 dark:hover:text-gray-100",
    // Default Tailwind CSS values
    default: {
    }
  }
```

#### Class Descriptions
These represent the class values utilized in the exported object. These values are customizable and can be strengthened or overridden through the `ui` properties' attributes.

_**wrapper**_
*  **Value**: `"relative flex items-center w-full mt-10 overflow-hidden"`
*  **Description**: Defines the overall container styles. The value `"relative flex items-center w-full mt-10 overflow-hidden"` sets a relative positioning (`relative`), uses flexbox layout (`flex`), centers items (`items-center`), makes the container full-width (`w-full`), adds a top margin of 10 units (`mt-10`), and hides overflow (`overflow-hidden`).

_**title**_
*  **Value**: `"text-3xl font-bold text-center dark:text-gray-100"`
*  **Description**: Sets the title styles. The value `"text-3xl font-bold text-center dark:text-gray-100"` makes the text 3xl in size (`text-3xl`), bold (`font-bold`), centers the text (`text-center`), and applies a light gray color in dark mode (`dark:text-gray-100`).

_**subtitle**_
*  **Value**: `"text-2xl text-center dark:text-gray-300 -mt-5"`
*  **Description**: Sets the subtitle styles. The value `"text-2xl text-center dark:text-gray-300 -mt-5"` makes the text 2xl in size (`text-2xl`), centers the text (`text-center`), applies a medium gray color in dark mode (`dark:text-gray-300`), and adds a negative top margin of 5 units (`-mt-5`).

_**inner**_
*  **Value**: `"flex transition-transform duration-500 ease-in-out"`
*  **Description**: Specifies styles for the sliding container. The value `"flex transition-transform duration-500 ease-in-out"` uses flexbox layout (`flex`), adds a transition effect for the transform property (`transition-transform`), with a duration of 500ms (`duration-500`), and smooth easing (`ease-in-out`).

_**image**_
*  **Value**: `"w-full h-auto max-h-500 object-cover"`
*  **Description**: Defines styles for the images. The value `"w-full h-auto max-h-500 object-cover"` stretch to 100% of its container's width, adjust its height automatically, limit its maximum height to 500 pixels, and ensure its content covers the entire area while maintaining its aspect ratio.

_**indicators**_
*  **Value**: `"mt-6 w-full text-center"`
*  **Description**: Defines styles for the indicators (pagination dots). The value `"mt-6 w-full text-center"` adds a top margin of 6 units (`mt-6`), makes it full-width (`w-full`), and centers the text (`text-center`).

_**icon**_
*  **Value**: `"hover:scale-125 duration-300 dark:text-gray-300 dark:hover:text-gray-100"`
*  **Description**: Defines styles for the navigation icons. The value `"hover:scale-125 duration-300 dark:text-gray-300 dark:hover:text-gray-100"` scales up the icon on hover (`hover:scale-125`), with a duration of 300ms (`duration-300`), sets a medium gray color in dark mode (`dark:text-gray-300`), and changes to light gray on hover in dark mode (`dark:hover:text-gray-100`).

_**default**_
*  **Value**: `{}`
*  **Description**: Placeholder for default Tailwind CSS values. This can be used to set any default styles if needed.

These style properties ensure that the <b>{{ $doc.constructorName }}</b> is visually appealing and flexible, allowing for a wide range of customization to meet specific design requirements.
