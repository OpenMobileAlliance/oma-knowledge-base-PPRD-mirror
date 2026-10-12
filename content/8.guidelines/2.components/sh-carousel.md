---
title: Carousel
description: A component for displaying rotating slides with navigation controls and auto-sliding feature.
constructorName: ShCarousel
layout: doc
---

## Usage

The `ShCarousel` constructor represents a carousel component that supports rotating slides, navigation control, and automatic slide transitions.

### Basic

::doc-example
---
code: |
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
---
::

You can combine components inside the <b>{{ $doc.constructorName}}</b>:

::ShAlert
---
typeAlert: warning
---
This is not recommended because different components can have different styles and it can be difficult to manage the layout and appearance of the carousel. It is better to use a single type of component for consistency and ease of use.
::

::doc-example
---
code: |
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
---
::

### Advanced settings

::doc-example
---
code: |
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
