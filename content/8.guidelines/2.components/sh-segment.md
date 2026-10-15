---
title: Segment
description: A flexible wrapper that groups and styles any block of Markdown or HTML content, including nested components.
constructorName: ShSegment
layout: doc
---
# {{$doc.title}}

## Usage

The `ShSegment` component is the most flexible component. It encapsulates one block or container of Markdown and HTML content that can be styled, and it can take any value and represent it.

### Basic
This is and example of how a basic `ShSegment` component is displayed:

::doc-example
---
code: |
  ::ShSegment
  ---
  ui:
    wrapper: bg-cyan-300 dark:bg-cyan-800 rounded-xl border shadow-md p-4 # Comment
  ---

  This is a specific block of *Markdown* content that can be styled.

  This is a HTML <a href="https://www.w3schools.com/tags/tag_a.asp" target="_blank">anchor (a)</a>

  ::
---
::

The content can be markdown or HTML text of any length. All elements are supported as in
the *normal* text.

### Advanced settings
This is how a complex example of the `ShSegment` is displayed. When hovering over the content is zoom in/out and contains different type of content:
* Markdown content
* HTML Table
* An embedded `ShSegment` that contains an image.

::doc-example
---
code: |
  ::ShSegment
  ---
  ui:
    wrapper: bg-gradient-to-r from-blue-500 text-3xl p-4 m-12 rounded-xl shadow-2xl transition duration-300 ease-in-out hover:scale-110 # Comment
  ---

  Content inside of the `ShSegment` can be of any length or structure.

  It can have any general *Markdown* formatting structure: lists, order lists, or 
  tables.

  * item
  * item
  * and one more item

  1. First element 
  1. Second element
  1. third element

  This is a table written in HTML:
  <table border="2">
    <tr>
      <td>Row 1, Col 1</td>
      <td>Row 1, Col 2</td>
    </tr>
    <tr>
      <td>Row 2, Col 1</td>
      <td>Row 2, Col 2</td>
    </tr>
  </table>

  It can also include other components. For example another `ShSegment`.

  :::ShSegment
  ---
  ui:
    wrapper: bg-gradient-to-r from-blue-500 text-3xl p-4 rounded shadow-2xl
  ---
  This is a nested segment with its own specific styling and an image.

  ![image](https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png)

  That is making this used to show this component flexibility.
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

::ShFaq
---
qas:
  - q: |
       There are no props inside of the front-matter in this constructor. Why does this constructor needs to work differently and how it works?
    a: |
       Since this constructor for its content has only one input (and that input could be anything), we opted out for slot element, which allows it to have a placeholder for anything that we want to populate with, including text with full MD support. Because of that, of that flexibility, this constructor`s use is a little bit different (no props at all).
       To use it, you would simply start adding text/link/img or whatever is you wish inside of --- divider.
---
::
