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

### Layouts

`ShMicroCard` constructor also comes with a `layout` option: `default`, `translate`, `opacity`, `flat`, `teaser`, `cta`, `logo` and `snap`. The `default` layout is shown in the Basic example above. Each of the other layouts is shown below on its own.

#### Translate

On hover the cover slides up to reveal the card content.

::doc-example
---
code: |
  ::ShMicroCard
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
  ::
---
::

#### Opacity

On hover the cover fades out to reveal the card content.

::doc-example
---
code: |
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
---
::

#### Flat

A plain, transparent card without a cover.

::ShAlert
---
typeAlert: warning
---
The layout: `flat` does **NOT** support `coverImage`, `coverIcon` nor `coverText` props.
::

::doc-example
---
code: |
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
---
::

#### Teaser

The cover image is shown faded behind the content and dims further on hover.

::doc-example
---
code: |
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
---
::

#### CTA

A call to action card. The link is a button at the bottom, the card itself is not clickable.

::ShAlert
---
typeAlert: warning
---
The layout: `cta` does **NOT** have a `urlWrapper`. Instead, use `urlButton`
::

::doc-example
---
code: |
  ::ShMicroCard
  ---
  layout: cta
  coverImage: https://science.nasa.gov/wp-content/uploads/2024/01/preview-moon-phases.jpg
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
---
::

#### Logo

Like `translate`, but the cover image is fitted whole on a white background, which suits logos.

::doc-example
---
code: |
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
---
::

#### Snap

A card whose cover (here an icon) stays in place behind the content.

::doc-example
---
code: |
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
---
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
