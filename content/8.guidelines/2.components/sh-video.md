---
title: Video
description: Embed video either from YouTube or from your local
constructorName: ShVideo
layout: doc
---
# {{$doc.title}}

## Usage

The `ShVideo` constructor creates a display format for embedding a video with customizable styles.

### Basic
</br>

::doc-example
---
code: |
  ::ShVideo
  ---
  src: "https://www.youtube.com/watch?v=8A5AMiskxvQ"
  ---
  ::
---
::

### Advanced settings
An example with customized `ui` attributes for enhanced display:

::doc-example
---
code: |
  ::ShVideo
  ---
  ui:
      wrapper: "shadow-2xl mx-auto max-w-screen-lg" # custom styles for the wrapper
  src: "https://www.youtube.com/watch?v=8A5AMiskxvQ"
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
