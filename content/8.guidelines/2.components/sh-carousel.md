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

::ShSegment
---
ui: 
  wrapper: border border-golden rounded-lg
---
::ShCarousel
---
title: Carousel Example
subtitle: Basic Carousel
---
  :::ShMicroCard
  ---
  layout: flat
  icon: lineicons:nasa
  urlWrapper: https://www.nasa.gov/
  title: NASA
  subtitle: Beyond the Frontier 
  ---
  :::

  :::ShMicroCard
  ---
  layout: flat
  icon: gis:earth-euro-africa-o
  urlWrapper: https://science.nasa.gov/earth/facts/
  title: Earth 
  subtitle: The Blue Marble
  ---
  :::

  :::ShMicroCard
  ---
  layout: flat
  icon: streamline-emojis:new-moon
  urlWrapper: https://science.nasa.gov/moon/
  title: The Moon  
  subtitle: Earth's Companion
  ---
  :::

  :::ShMicroCard
  ---
  layout: flat
  icon: game-icons:mars-curiosity
  urlWrapper: https://science.nasa.gov/mars/
  title: Mars  
  subtitle: Meet the neighbour
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
---
title: Carousel Example
subtitle: Basic Carousel
---
  :::ShMicroCard
  ---
  layout: flat
  icon: lineicons:nasa
  urlWrapper: https://www.nasa.gov/
  title: NASA
  subtitle: Beyond the Frontier 
  ---
  :::

  :::ShMicroCard
  ---
  layout: flat
  icon: gis:earth-euro-africa-o
  urlWrapper: https://science.nasa.gov/earth/facts/
  title: Earth 
  subtitle: The Blue Marble
  ---
  :::

  :::ShMicroCard
  ---
  layout: flat
  icon: streamline-emojis:new-moon
  urlWrapper: https://science.nasa.gov/moon/
  title: The Moon  
  subtitle: Earth's Companion
  ---
  :::

  :::ShMicroCard
  ---
  layout: flat
  icon: game-icons:mars-curiosity
  urlWrapper: https://science.nasa.gov/mars/
  title: Mars  
  subtitle: Meet the neighbour
  ---
  :::
::
```
::

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
---
timer: 4
---
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
  :::ShMicroCard
  ---
  urlWrapper: https://www.nasa.gov/
  target: _blank
  icon: lineicons:nasa
  title: |
    NASA 
  subtitle: |
    Explore the Universe
  text: |
    NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery.
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
---
timer: 4
---
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
      <td rowspan="9"><code>ui</code></td>
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
      <td><code>track</code></td>
      <td><code>config.track</code></td>
      <td>Styles for the grid that stacks every slide in the same cell, so the carousel is as tall as its tallest slide.</td>
    </tr>
    <tr>
      <td><code>group</code></td>
      <td><code>config.group</code></td>
      <td>Styles applied to each slide group (the set of components shown together in one view).</td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td><code>config.title</code></td>
      <td>Styles applied to the title text (e.g. font size, color).</td>
    </tr>
    <tr>
      <td><code>subtitle</code></td>
      <td><code>config.subtitle</code></td>
      <td>Styles applied to the subtitle text (e.g. font size, color).</td>
    </tr>
    <tr>
      <td><code>item</code></td>
      <td><code>config.item.wrapper</code></td>
      <td>Styles applied to each individual slide.</td>
    </tr>
    <tr>
      <td><code>navigation</code></td>
      <td><code>config.navigation.wrapper</code><br/><code>config.navigation.inner</code><br/><code>config.navigation.active</code><br/><code>config.navigation.inactive<br/></code></td>
      <td>Styles for the navigation dots (pagination dots). They sit inside the carousel wrapper rather than below it.</td>
    </tr>
    <tr>
      <td><code>horizontal</code><br/><code>vertical</code></td>
      <td><code>config.[direction].group</code><br/><code>config.[direction].item.single</code><br/><code>config.[direction].item.multiple</code><br/><code>config.[direction].navigation.wrapper</code><br/><code>config.[direction].navigation.inner</code></td>
      <td>Everything that depends on the axis the slides travel along. The carousel applies whichever of the two blocks matches its <code>direction</code>, on top of the shared values above, so a page normally only sets <code>direction</code> and leaves the styling alone. <code>item.single</code> is used when <code>slides</code> is <code>1</code>, <code>item.multiple</code> when it is greater than <code>1</code>.</td>
    </tr>
    <tr>
      <td><code>slides</code></td>
      <td>n/a</td>
      <td><code>1</code></td>
      <td>Number of slides to show at once; determines how many components are displayed in one view.</td>
    </tr>
    <tr>
      <td><code>timer</code></td>
      <td>n/a</td>
      <td><code>2</code></td>
      <td>Interval in seconds for automatic slide transitions. Set to <code>0</code> to disable auto-transition.</td>
    </tr>
    <tr>
      <td><code>direction</code></td>
      <td>n/a</td>
      <td><code>horizontal</code></td>
      <td>Axis the slides travel along. Use <code>horizontal</code> to slide sideways, or <code>vertical</code> to slide upwards.</td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Optional title text displayed above the carousel. Styled via <code>ui.title</code>.</td>
    </tr>
    <tr>
      <td><code>subtitle</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Optional subtitle text shown below the title. Styled via <code>ui.subtitle</code>.</td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Used for documentation purposes to help content writers; does not render on the website.</td>
    </tr>
  </tbody>
</table>

#### Advanced Usage

::ShSegment
---
ui: 
  wrapper: border border-golden rounded-lg
---
::ShCarousel
---
ui:
  wrapper: dark:bg-neutral-800
title: Advanced Carousel Example
subtitle: Manual Control Over Slides Loop
timer: 0 
slides: 2
---
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
---
ui:
  wrapper: dark:bg-neutral-800
title: Advanced Carousel Example
subtitle: Manual Control Over Slides Loop
timer: 0 #Disable auto-slide
slides: 2 #Show 2 slides at once
---
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

### Config
These style properties can be modified via `ui` and are stored in the <code><b>{{ $doc.constructorName }}</b><b>.ts</b></code>:

```ts
export default {
  wrapper: "relative w-full",
  title: "title text-center text-[24px] font-extrabold dark:saturate-[300%] break-words",
  subtitle: "subtitle text-center text-[20px] font-bold dark:saturate-[180%] -mt-5 break-words",
  inner: "overflow-hidden",
  track: "grid grid-cols-1",
  group: "col-start-1 row-start-1 flex justify-center gap-4",
  item: {
    wrapper: "w-full",
  },
  navigation: {
    wrapper: "absolute z-10 flex gap-2",
    inner: "rounded-full",
    active: "bg-golden saturate-[300%]",
    inactive: "bg-gray-500",
  },
  horizontal: {
    group: "px-4",
    item: {
      single: "max-w-md",
      multiple: "max-w-sm",
    },
    navigation: {
      wrapper: "left-1/2 transform -translate-x-1/2 bottom-2",
      inner: "w-3 h-3",
    },
  },
  vertical: {
    group: "items-center px-12",
    item: {
      single: "max-w-full",
      multiple: "max-w-sm",
    },
    navigation: {
      wrapper: "left-4 top-1/2 transform -translate-y-1/2 flex-col",
      inner: "w-2 h-2",
    },
  },
  // Default Tailwind CSS values
  default: {
  }
}
```

#### Class Descriptions
These represent the class values utilized in the exported object. These values are customizable and can be strengthened or overridden through the `ui` properties' attributes.

_**wrapper**_  
*  **Value**: `"relative w-full"`  
*  **Description**:  
   - `relative`: Sets the element's position relative so children with absolute positioning can be placed inside.  
   - `w-full`: Makes the element take the full width of its container.  

_**title**_  
*  **Value**: `"title text-center text-[24px] font-extrabold dark:saturate-[300%] break-words z-20"`  
*  **Description**:  
   - `title`: Likely a utility class or semantic marker, does nothing unless defined elsewhere.  
   - `text-center`: Centers the text horizontally.  
   - `text-[24px]`: Custom text size of 24px.  
   - `font-extrabold`: Applies extra-bold font weight.  
   - `dark:saturate-[300%]`: In dark mode, saturates color 3x (can make colors look more intense).  
   - `break-words`: Breaks long words to prevent overflow.  

_**subtitle**_  
*  **Value**: `"subtitle text-center text-[20px] font-bold dark:saturate-[180%] mt-1 break-words z-20"`  
*  **Description**:  
   - `subtitle`: Like `title`, probably a semantic or utility marker.  
   - `text-center`: Centers the text horizontally.  
   - `text-[20px]`: Custom text size of 20px.  
   - `font-bold`: Applies bold font weight.  
   - `dark:saturate-[180%]`: In dark mode, increases color saturation by 180%.  
   - `-mt-5`: Adds a top margin in opposite direction.  
   - `break-words`: Prevents text overflow by breaking words.  

_**inner**_  
*  **Value**: `"overflow-hidden"`  
*  **Description**:  
   - `overflow-hidden`: Clips any overflowing child elements, useful for sliders or carousels.  

_**track**_  
*  **Value**: `"grid grid-cols-1"`  
*  **Description**:  
   - `grid`: Lays the slides out on a grid so they can all share a single cell.  
   - `grid-cols-1`: Pins the grid to one column the width of the carousel, so a wide slide cannot stretch the track.  

_**group**_  
*  **Value**: `"col-start-1 row-start-1 flex justify-center gap-4"`  
*  **Description**:  
   - `col-start-1 row-start-1`: Places every slide in the same grid cell, stacked on top of each other. Each slide is then moved into or out of view with its own transform, which keeps the carousel as tall as its tallest slide instead of needing a fixed height.  
   - `flex`: Lays the components of a single slide out in a row.  
   - `justify-center`: Centers those components horizontally.  
   - `gap-4`: Adds space between them.  

_**item.wrapper**_  
*  **Value**: `"w-full"`  
*  **Description**:  
   - `w-full`: Makes each slide take the full width available inside its slide group.  

_**navigation.wrapper**_  
*  **Value**: `"absolute z-10 flex gap-2"`  
*  **Description**:  
   - `absolute`: Positions the element absolutely within the relative parent, which is the carousel wrapper itself.  
   - `z-10`: Keeps the dots above the slides, since they sit over the carousel instead of below it.  
   - `flex`: Uses flexbox layout.  
   - `gap-2`: Adds space between child items.  

_**navigation.inner**_  
*  **Value**: `"rounded-full"`  
*  **Description**:  
   - `rounded-full`: Makes the dot perfectly circular. Its size comes from the direction block, since a vertical carousel is usually a thinner strip.  

_**navigation.active**_  
*  **Value**: `"bg-golden saturate-[300%]"`  
*  **Description**:  
   - `bg-golden`: Applies a golden background color (custom class, should be defined in Tailwind config).  
   - `saturate-[300%]`: Boosts color saturation, making it more vivid.  

_**navigation.inactive**_  
*  **Value**: `"bg-gray-500"`  
*  **Description**:  
   - `bg-gray-500`: Applies a medium gray background color.  

_**horizontal**_ and _**vertical**_  
*  **Description**: The carousel applies whichever of these two blocks matches its `direction`, on top of the shared values above. None of these classes are repeated in the shared values, so the two never set the same property and a page can pick an axis without restyling anything.  
   - `group`: `"px-4"` when horizontal. When vertical it becomes `"items-center px-12"`, which centers a short slide against a taller one and leaves a gutter for the dots.  
   - `item.single`: `"max-w-md"` when horizontal, which suits a card. When vertical it becomes `"max-w-full"`, since a vertical carousel is normally a full-width strip such as a banner.  
   - `item.multiple`: `"max-w-sm"` either way, so several slides fit alongside each other.  
   - `navigation.wrapper`: `"left-1/2 transform -translate-x-1/2 bottom-2"` when horizontal, centering the dots along the bottom edge. When vertical it becomes `"left-4 top-1/2 transform -translate-y-1/2 flex-col"`, stacking them down the left-hand side so they follow the axis the slides travel along and stay clear of any close or action button on the right.  
   - `navigation.inner`: `"w-3 h-3"` when horizontal, `"w-2 h-2"` when vertical, where the strip is thinner.  

_**default**_  
*  **Value**: `{}`  
*  **Description**:  
   - Empty object, reserved for fallback or shared default styles if needed later.


These style properties ensure that the <b>{{ $doc.constructorName }}</b> is visually appealing and flexible, allowing for a wide range of customization to meet specific design requirements.
