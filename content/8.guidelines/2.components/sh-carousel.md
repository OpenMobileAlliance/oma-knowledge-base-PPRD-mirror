---
title: Carousel
description: A component for displaying rotating slides with navigation controls and auto-sliding feature.
constructorName: ShCarousel
---

### Usage

#### Presentation
This is the display format for the {{ $doc.constructorName }} constructor, designed to showcase its capabilities.

##### Example Basic

::ShCarousel
---
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

### Props

These are the properties and attributes associated with the {{ $doc.constructorName }} constructor:

#### Properties and Attributes Description
The {{ $doc.constructorName }} constructor represents a carousel component that supports rotating slides, navigation controls, and automatic slide transitions. Below is a detailed description of the properties and attributes used in the {{ $doc.constructorName }} constructor.

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
      <td rowspan="4">ui</td>
      <td>n/a</td>
      <td>The <code>ui</code> property in the component is a configuration object that allows customization of various styling aspects of the component. Each attribute within the <code>ui</code> property targets a specific part of the component display, providing detailed control over its appearance and layout. Below is a detailed description of each attribute within the <code>ui</code> property:</td>
    </tr>
    <tr>
      <td><code>wrapper</code></td>
      <td>Defines the overall styling for the carousel container.</td>
    </tr>
    <tr>
      <td><code>inner</code></td>
      <td>Defines the styling for the inner sliding container.</td>
    </tr>
    <tr>
      <td><code>indicators</code></td>
      <td>Defines the styling for the carousel indicators (pagination dots).</td>
    </tr>
    <tr>
      <td>items</td>
      <td>n/a</td>
      <td>An array of slide items, each with a component and its props.</td>
    </tr>
    <tr>
      <td>description</td>
      <td>n/a</td>
      <td>Intended to be used as a help to content writer. Doesn’t render on the website.</td>
    </tr>
  </tbody>
</table>

### Config
These style properties can be modified via `ui` and are stored in the `sh-carousel.ts`:

```ts
export default {
  wrapper: "relative flex items-center w-full mt-10 overflow-hidden",
  inner: "flex transition-transform duration-500 ease-in-out",
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

_**inner**_
*  **Value**: `"flex transition-transform duration-500 ease-in-out"`
*  **Description**: Specifies styles for the sliding container. The value `"flex transition-transform duration-500 ease-in-out"` uses flexbox layout (`flex`), adds a transition effect for transform property (`transition-transform`), with a duration of 500ms (`duration-500`), and smooth easing (`ease-in-out`).

_**indicators**_
*  **Value**: `"mt-6 w-full text-center"`
*  **Description**: Defines styles for the indicators (pagination dots). The value `"mt-6 w-full text-center"` adds a top margin of 6 units (`mt-6`), makes it full-width (`w-full`), and centers the text (`text-center`).

_**icon**_
*  **Value**: `"hover duration-300 dark dark:hover"`
*  **Description**: Defines styles for the navigation icons. The value `"hover duration-300 dark dark:hover"` scales up the icon on hover (`hover`), with a duration of 300ms (`duration-300`), and sets text colors for dark mode (`dark dark:hover`).

These style properties ensure that the {{ $doc.constructorName }} is visually appealing and flexible, allowing for a wide range of customization to meet specific design requirements.
