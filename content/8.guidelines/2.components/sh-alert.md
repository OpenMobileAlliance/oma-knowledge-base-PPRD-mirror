---
title: Alert
description: A component for expressing information of some importance
constructorName: ShAlert
layout: doc
---
# {{$doc.title}}

## Usage

The `ShAlert` constructor creates a notification field with different background color to showcase the importance of notification.

### Basic

This is `info` type of alert

::doc-example
---
code: |
  ::ShAlert
  Testing alert component related to info. This is the default alert type.
  ::
---
::
___

This is `success` type of alert

::doc-example
---
code: |
  ::ShAlert
  ---
  typeAlert: success
  ---
  Testing alert component related to success
  ::
---
::
___

This is `warning` type of alert

::doc-example
---
code: |
  ::ShAlert
  ---
  typeAlert: warning
  ---
  Testing alert component related to warning
  ::
---
::
___

This is `danger` type of alert

::doc-example
---
code: |
  ::ShAlert
  ---
  typeAlert: danger
  ---
  Testing alert component related to danger
  ::
---
::
___

### Advanced settings

::doc-example
---
code: |
  ::ShAlert
  ---
  ui:
      wrapper: "shadow-xl w-fit mx-auto text-2xl" # adds a shadow to the wrapper as well as making the wrapper width fit the lenght of content inside, center the alert wrapper and enlarge text
  ---
  Testing alert component with shorten width
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
