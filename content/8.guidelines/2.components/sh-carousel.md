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
---
title: This is Carousel component, testing title
subtitle: This is subtitle
items:
  - component: ShMicroCard
    props:
      urlImage: "https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png"
      urlWrapper: "https://www.axios.com/"
      title: "Microsoft sets non-profit to cut software related carbon emissions."
      subtitle: "Axios gets you smarter, faster on what matters."
      text: "This is a representation of [additional](https://www.nasa.gov/) field for text, if it is needed. It also has a *full Markdown capability*."
  - component: ShMicroCard
    props:
      urlImage: https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1920px-Coca-Cola_logo.svg.png
      urlWrapper: https://www.coca-colacompany.com/
      title: Can't Beat The Real Thing
      subtitle: Slogan used in USA, UK, Ireland & Canada
      text: This slogan Coca-Cola used in 1990s until 1993 when it got changed to Always Coca-Cola
  - component: ShMicroCard
    props:
      urlImage: https://logowik.com/content/uploads/images/apple-black8038.jpg
      ui.image: h-40 w-55
      urlWrapper: https://www.apple.com/
      title: Think Different
      subtitle: Apple
      text: Shows the brand that built over the years using innovation to create its impact on the users.
  - component: ShMicroCard
    props:
      urlImage: https://i.pinimg.com/originals/cb/41/b0/cb41b0abf391e4fd2a8a2f8f91236928.png
      ui.image: h-40 w-55
      urlWrapper: https://rog.asus.com/
      title: Republic of Gamers
      subtitle: For Those Who Dare
      text: ROG makes the best hardware for PC gaming, eSports, and overclocking. Our innovations deliver top performance and premium experiences for everyone.
---
::

This is how it is constructed

```mdc
::ShCarousel
---
title: This is Carousel component, testing title
subtitle: This is subtitle
items:
  - component: ShMicroCard
    props:
      urlImage: "https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png"
      urlWrapper: "https://www.axios.com/"
      title: "Microsoft sets non-profit to cut software related carbon emissions."
      subtitle: "Axios gets you smarter, faster on what matters."
      text: "This is a representation of [additional](https://www.nasa.gov/) field for text, if it is needed. It also has a *full Markdown capability*."
  - component: ShMicroCard
    props:
      urlImage: https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1920px-Coca-Cola_logo.svg.png
      urlWrapper: https://www.coca-colacompany.com/
      title: Can't Beat The Real Thing
      subtitle: Slogan used in USA, UK, Ireland & Canada
      text: This slogan Coca-Cola used in 1990s until 1993 when it got changed to Always Coca-Cola
  - component: ShMicroCard
    props:
      urlImage: https://logowik.com/content/uploads/images/apple-black8038.jpg
      ui.image: h-40 w-55
      urlWrapper: https://www.apple.com/
      title: Think Different
      subtitle: Apple
      text: Shows the brand that built over the years using innovation to create its impact on the users.
  - component: ShMicroCard
    props:
      urlImage: https://i.pinimg.com/originals/cb/41/b0/cb41b0abf391e4fd2a8a2f8f91236928.png
      ui.image: h-40 w-55
      urlWrapper: https://rog.asus.com/
      title: Republic of Gamers
      subtitle: For Those Who Dare
      text: ROG makes the best hardware for PC gaming, eSports, and overclocking. Our innovations deliver top performance and premium experiences for everyone.
---
::
```

You can add images to itas well:

::ShCarousel
---
ui:
  title: text-left
  subtitle: text-left -mb-8
title: NASA Images
subtitle: NASA has always told its story through its images, a few of which have become icons of human history.
items:
  - urlImage: https://images-assets.nasa.gov/image/iss071e403651/iss071e403651~medium.jpg
  - urlImage: https://images-assets.nasa.gov/image/iss071e378497/iss071e378497~medium.jpg
  - urlImage: https://images-assets.nasa.gov/image/iss071e365062/iss071e365062~medium.jpg
  - urlImage: https://images-assets.nasa.gov/image/iss071e378611/iss071e378611~medium.jpg
---
::

Here is shown how to add images:

```mdc
::ShCarousel
---
ui:
  title: text-left
  subtitle: text-left -mb-8
title: NASA Images
subtitle: NASA has always told its story through its images, a few of which have become icons of human history.
items:
  - urlImage: https://images-assets.nasa.gov/image/iss071e403651/iss071e403651~medium.jpg
  - urlImage: https://images-assets.nasa.gov/image/iss071e378497/iss071e378497~medium.jpg
  - urlImage: https://images-assets.nasa.gov/image/iss071e365062/iss071e365062~medium.jpg
  - urlImage: https://images-assets.nasa.gov/image/iss071e378611/iss071e378611~medium.jpg
---
::
```

### Props

These are the properties and attributes associated with the <b>{{ $doc.constructorName }}</b> constructor:

#### Properties and Attributes Description
The <b>{{ $doc.constructorName }}</b> constructor represents a carousel component that supports rotating slides, navigation controls, and automatic slide transitions. Below is a detailed description of the properties and attributes used in the <b>{{ $doc.constructorName }}</b> constructor.

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
