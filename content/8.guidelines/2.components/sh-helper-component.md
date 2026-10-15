---
title: Helper Component
description: Display two logos, each with a separate dark and light version.
constructorName: ShHelperComponent
layout: doc
---

## Usage

### Basic

The `ShHelperComponent` constructor shows two logos stacked vertically. Each logo has a dark-mode and a light-mode version, and the one matching the current color theme is displayed.

By default, the first logo is the OMA logo and the second logo is `/images/oma2.png` (dark mode only).

::doc-example
---
code: |
  ::ShHelperComponent
  ---
  firstLogoDark: /logo-dark.png
  firstLogoLight: /logo-light.png
  secondLogoDark: /images/oma2.png
  secondLogoLight: /path/to/second-logo-light.png
  ---
  ::
---
::

### Advanced settings
Resizing the second logo in both color modes:

::doc-example
---
code: |
  ::ShHelperComponent
  ---
  ui:
      secondLogoDark: size-[73%]
      secondLogoLight: size-[73%]
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
