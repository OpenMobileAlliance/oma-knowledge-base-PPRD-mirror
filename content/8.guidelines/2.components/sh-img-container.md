---
title: Image Container
description: This constructor is designed to showcase an image with an optional caption, providing flexibility in displaying images and captions in various layouts.
constructorName: ShImgContainer
layout: doc
---

## Usage

The constructor creates a display format showcasing an image and an optional caption.
This constructor is mainly used with `.svg` image file types, to create a more unified look and feel when displaying those formats.

::ShAlert
---
typeAlert: warning
---
This constructor inverts colors in dark mode, so any other image inserted will have its colors inverted. Works best with white/black colors.
::

### Basic

::doc-example
---
code: |
  ::ShImgContainer
  ---
  urlImage: /images/lwm2m/overall_architecture.drawio.svg
  altImage: Sample Image
  figcaption: |
      This is an example caption for the image.
  ---
  ::
---
::

### Advanced settings
An example with customized ui attributes for enhanced display:

::doc-example
---
code: |
  ::ShImgContainer
  ---
  ui:
    wrapper: shadow-lg bg-purple-300 dark:bg-purple-900 p-4 rounded-xl
    image: rounded-lg border border-gray-300
    figcaption: text-lg text-gray-600 italic
  urlImage: /images/lwm2m/overall_architecture.drawio.svg
  altImage: Custom Image
  figcaption: |
      This is a custom caption with styled text.
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
