---
title: ListCards
description: Renders content in ShCard components, displays a grid of cards by order of cardID, and supports tag filtering.
constructorName: ShListCards
layout: doc
---

## Usage

The constructor creates a display format for a list of cards, including a header section and a grid layout for the cards.

### Basic

::doc-example
---
code: |
  ::ShListCards
  ---
  ui:
    gap: gap-6
  description: This constructor is standalone
  title: |
      Featured Projects
  subtitle: |
      Check out our latest projects
  text: |
      Here are some of the exciting projects we're working on.
  cols: 2
  cardID: [55, 50]
  ---
  ::
---
::

### Advanced settings
An example with customized `ui` attributes for enhanced display:

::doc-example
---
code: |
  ::ShListCards
  ---
  ui:
    header: "text-center mb-4"
    title: "text-4xl font-bold text-blue-600"
    subtitle: "text-2xl font-medium text-gray-700"
    text: "text-lg text-gray-600"
    base: "bg-gradient-to-b from-[#8FD2C4] rounded-2xl p-8"
    gap: gap-6
  cols: 3
  title: |
      Advanced Usage of this constuctor
  subtitle: |
      Check out the looks and feels
  text: |
      Feel free to explore any styling option using Tailwind classes!
  cardID: [55, 50, 45]
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
