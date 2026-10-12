---
title: Micro Card
description: Quick show of information in compact form.
constructorName: ShMicroCard
layout: doc
---

## Usage

The `ShMicroCard` constructor represents a micro card that can shocase a company logo with some punchlines and lighter descriptions. Whole card can be a link to a certain location or website.

::ShAlert
---
typeAlert: danger
---
When using links (anchors) in this component, use either `urlWrapper` or create a link from `title`, `subtitle` or `text`.
</br>
Do NOT combine both as it can result in undesired effects.
::

### Basic

::doc-example
---
code: |
  ::ShMicroCard
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
  ::
---
::

`ShMicroCard` constructor also comes with a `layout` option:

::ShAlert
---
typeAlert: warning
---
The layout: `flat` does **NOT** support `coverImage`, `coverIcon` nor `coverText` props. 
::

::ShAlert
---
typeAlert: warning
---
The layout: `cta` does **NOT** have a `urlWrapper`. Instead, use `urlButton` 
::

::ShTwoColumns
---
ui:
  wrapper: bg-inherit dark:bg-inherit shadow-none
---
  <!--1st row-->
  :::ShMicroCard
  ---
  layout: translate
  coverImage: https://science.nasa.gov/wp-content/uploads/2023/11/mercury-messenger-globe-pia15162.jpg
  #coverIcon: lineicons:nasa
  #coverText: NASA Merecury
  icon: game-icons:planet-core
  urlWrapper: https://science.nasa.gov/mercury/
  title: |
      Mercury
  subtitle: |
      God of Translators and Interpreters
  text: |
      The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. 
  ---
  :::

  :::ShMicroCard
  ---
  layout: opacity
  coverImage: https://science.nasa.gov/wp-content/uploads/2023/05/venus-single.png?w=398
  #coverIcon: lineicons:nasa
  #coverText: NASA Venus
  icon: fa6-solid:user-astronaut
  urlWrapper: https://science.nasa.gov/venus/
  title: |
      Venus 
  subtitle: |
      How hot is too hot?
  text: |
      Venus is the second planet from the Sun, and the sixth largest planet. It’s the hottest planet in our solar system.
  ---
  :::

  <!--2nd row-->
  ```mdc
  ::ShMicroCard
  ---
  layout: translate
  coverImage: https://science.nasa.gov/wp-content/uploads/2023/11/mercury-messenger-globe-pia15162.jpg
  #coverIcon: lineicons:nasa
  #coverText: NASA Mercury
  icon: game-icons:planet-core
  urlWrapper: https://science.nasa.gov/mercury/
  title: |
    Mercury
  subtitle: |
    God of Translators and Interpreters
  text: |
    The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. 
  ---
  ::
  ```

  ```mdc
  ::ShMicroCard
  ---
  layout: opacity
  coverImage: https://science.nasa.gov/wp-content/uploads/2023/05/venus-single.png?w=398
  #coverIcon: lineicons:nasa
  #coverText: NASA Venus
  icon: fa6-solid:user-astronaut
  urlWrapper: https://science.nasa.gov/venus/
  title: |
    Venus 
  subtitle: |
    How hot is too hot?
  text: |
    Venus is the second planet from the Sun, and the sixth largest planet. It’s the hottest planet in our solar system.
  ---
  ::
  ```

  <!--3rd row-->
  :::ShMicroCard
  ---
  layout: flat
  icon: gis:earth-euro-africa-o
  urlWrapper: https://science.nasa.gov/earth/facts/
  title: |
      Earth 
  subtitle: |
      The Blue Marble
  text: |
      Earth – our home planet – is the third planet from the Sun, and the fifth largest planet. It's the only place we know of inhabited by living things.
  ---
  :::

  :::ShMicroCard
  ---
  layout: teaser
  coverImage: https://scx2.b-cdn.net/gfx/news/hires/2015/interestingf.jpg
  #coverIcon: lineicons:nasa
  #coverText: NASA Mars
  icon: token-branded:safemars
  urlWrapper: https://science.nasa.gov/mars/
  title: |
      Mars 
  subtitle: |
      Meet the neighbour
  text: |
      Mars is the fourth planet from the Sun, and the seventh largest. It’s the only planet we know of inhabited entirely by robots
  ---
  :::

  <!--4th row-->
  ```mdc
  ::ShMicroCard
  ---
  layout: flat
  icon: gis:earth-euro-africa-o
  urlWrapper: https://science.nasa.gov/earth/facts/
  title: |
    Earth 
  subtitle: |
    The Blue Marble
  text: |
    Earth – our home planet – is the third planet from the Sun, and the fifth largest planet. It's the only place we know of inhabited by living things.
  ---
  ::
  ```

  ```mdc
  ::ShMicroCard
  ---
  layout: teaser
  coverImage: https://scx2.b-cdn.net/gfx/news/hires/2015/interestingf.jpg
  #coverIcon: lineicons:nasa
  #coverText: NASA Mars
  icon: token-branded:safemars
  urlWrapper: https://science.nasa.gov/mars/
  title: |
    Mars 
  subtitle: |
    Meet the neighbour
  text: |
    Mars is the fourth planet from the Sun, and the seventh largest. It’s the only planet we know of inhabited entirely by robots
  ---
  ::
  ```

  <!--5th row-->
  :::ShMicroCard
  ---
  layout: cta
  coverImage: https://moon.nasa.gov/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBczBEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5cd8ec175a88e67be34ecfc8fe179be81b0a7561/176_moon_2018-04-23-Tom_Campbell_1600.jpg
  #coverIcon: lineicons:nasa
  #coverText: NASA The Moon
  icon: streamline-emojis:new-moon
  urlButton: https://science.nasa.gov/moon/
  target: _blank
  title: |
    The Moon
  subtitle: |
    Earth`s Companion
  text: |
    From lighting up our skies to maintaining a geological record of our solar system’s history, Earth’s closest celestial neighbor plays a pivotal role in the study of our planet and our solar system. 
  ---
  :::

  :::ShMicroCard
  ---
  layout: logo
  coverImage: https://gpm.nasa.gov/sites/default/files/document_files/NASA-Logo-Large.png
  #coverIcon: lineicons:nasa
  #coverText: NASA The Moon
  icon: lineicons:nasa
  urlWrapper: https://www.nasa.gov/
  target: _blank
  title: |
    NASA
  subtitle: |
    Beyond the Frontier 
  ---
  :::

  <!--6th row-->
  ```mdc
  ::ShMicroCard
  ---
  layout: cta #short from Call To Action
  coverImage: https://moon.nasa.gov/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBczBEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5cd8ec175a88e67be34ecfc8fe179be81b0a7561/176_moon_2018-04-23-Tom_Campbell_1600.jpg
  #coverIcon: lineicons:nasa
  #coverText: NASA The Moon
  icon: streamline-emojis:new-moon
  urlButton: https://science.nasa.gov/moon/
  target: _blank
  title: |
    The Moon
  subtitle: |
    Earth`s Companion
  text: |
    From lighting up our skies to maintaining a geological record of our solar system’s history, Earth’s closest celestial neighbor plays a pivotal role in the study of our planet and our solar system. 
  ---
  ::
  ```

  ```mdc
  ::ShMicroCard
  ---
  layout: logo
  coverImage: https://gpm.nasa.gov/sites/default/files/document_files/NASA-Logo-Large.png
  #coverIcon: lineicons:nasa
  #coverText: NASA The Moon
  icon: lineicons:nasa
  urlWrapper: https://www.nasa.gov/
  target: _blank
  title: |
    NASA
  subtitle: |
    Beyond the Frontier 
  ---
  ::
  ```

  <!--7th row-->
  :::ShMicroCard
  ---
  layout: snap
  #coverImage: https://gpm.nasa.gov/sites/default/files/document_files/NASA-Logo-Large.png
  coverIcon: simple-icons:saturn
  #coverText: NASA The Moon
  icon: lineicons:nasa
  urlWrapper: https://science.nasa.gov/saturn/
  target: _blank
  title: |
    Saturn
  subtitle: |
    Ring Of Power
  text: |
    Saturn is the sixth planet from the Sun, and the second largest in the solar system. It’s surrounded by beautiful rings.
  ---
  :::

  :::ShSegment
  :::

  <!--8th row-->

  ```mdc
  ::ShMicroCard
  ---
  layout: snap
  #coverImage: https://gpm.nasa.gov/sites/default/files/document_files/NASA-Logo-Large.png
  coverIcon: simple-icons:saturn
  #coverText: NASA The Moon
  icon: lineicons:nasa
  urlWrapper: https://science.nasa.gov/saturn/
  target: _blank
  title: |
    Saturn
  subtitle: |
    Ring Of Power
  text: |
    Saturn is the sixth planet from the Sun, and the second largest in the solar system. It’s surrounded by beautiful rings.
  ---
  ::
  ```
::

### Advanced settings
An example with customized `ui` attributes for enhanced display:

::doc-example
---
code: |
  ::ShMicroCard
  ---
  ui:
    default: #if other layout is selected, then its name must be here
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
---
::

## Props

::doc-api{section="props"}
::

## Slots

::doc-api{section="slots"}
::

## UI config

Default classes of every styled element. Override any key through the `ui` prop.

::doc-api{section="ui"}
::
