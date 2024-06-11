---
title: Multi Column 
description:
constructorName: ShMultiColumn
---

## Usage

The following example show using {{ $doc.constructorName }} component to organise
content in three columns per a row.

::SHMultiColumn
---
cols: 3
---
First column

Second column

Last colum

First column 2nd row

Second column 2nd row

Last colum 2nd row
::

```mdc
::SHMultiColumn
---
cols: 3
---
First column

Second column

Last colum

First column 2nd row

Second column 2nd row

Last colum 2nd row
::
```

The {{ $doc.constructorName }} can be styled using `ui.wparrer` and `class` property.
Typical usage is in combination with `ShColumn` that can have different
column width.

::ShMultiColumn
---
cols: 4
ui:
  wrapper: "bg-stone-200 text-emerald-800 shadow-lg"
class: text-center
---
[First column]{.hover:text-primary}

:::ShColumn
---
ui:
  wrapper: "bg-emerald-800 text-stone-200"
class: col-span-2
size: 2
---
Second column with double width
:::

[Last column]{.hover:text-primary}
::

```mdc
::ShMultiColumn
---
cols: 4
ui:
  wrapper: "bg-stone-200 text-emerald-800 shadow-lg"
class: text-center
---
[First column]{.hover:text-primary}

:::ShColumn
---
ui:
  wrapper: "bg-emerald-800 text-stone-200"
class: col-span-2
size: 2
---
Second column with double width
:::

[Last column]{.hover:text-primary}
::
```

The {{ $doc.constructorName }} can have multiple *rows* and each row can organise its 
columns in a need way. Columns can spread in multiple rows like in the following
example.

::ShMultiColumn
---
cols: 4
---

:::ShColumn 
---
size: 2
ui:
  wrapper: "bg-stone-200 text-center"
---
This column has a span of two.
:::

:::ShColumn 
---
ui:
  wrapper: "bg-stone-300 text-center"
---
This colum has default span of 1.
:::

:::ShColumn 
---
ui:
  wrapper: "bg-stone-300 text-center"
---
This colum has default span of 1.
:::

:::ShColumn 
---
ui:
  wrapper: "bg-stone-200 text-center"
---
This colum has default span.
:::

:::ShColumn 
---
size: 3
ui:
  wrapper: "bg-stone-300 text-center"
---
This colum now is 3 column wide.
:::

:::ShColumn 
---
ui:
  wrapper: "bg-stone-200 text-center row-span-2 flex flex-col justify-center items-center"
---
This colum has default span and spread on 2 rows.
:::

:::ShColumn 
---
size: 2
ui:
  wrapper: "bg-stone-300 text-center"
---
This colum now is 2 column wide.
:::

:::ShColumn 
---
ui:
  wrapper: "border text-center"
---

This colum has span of 1 as well.
:::

:::ShColumn 
---
ui:
  wrapper: "border text-center"
---

This colum has span of 1 as well.
:::

:::ShColumn 
---
size: 2
ui:
  wrapper: "bg-stone-300 text-center"
---
This colum now is 2 column wide.
:::

::

The upper example is generated with the following code:

```mdc
::ShMultiColumn
---
cols: 4
---

:::ShColumn 
---
size: 2
ui:
  wrapper: "bg-stone-200 text-center"
---
This column has a span of two.
:::

:::ShColumn 
---
ui:
  wrapper: "bg-stone-300 text-center"
---
This colum has default span of 1.
:::

:::ShColumn 
---
ui:
  wrapper: "bg-stone-300 text-center"
---
This colum has default span of 1.
:::

:::ShColumn 
---
ui:
  wrapper: "bg-stone-200 text-center"
---
This colum has default span.
:::

:::ShColumn 
---
size: 3
ui:
  wrapper: "bg-stone-300 text-center"
---
This colum now is 3 column wide.
:::

:::ShColumn 
---
ui:
  wrapper: "bg-stone-200 text-center row-span-2 flex flex-col justify-center items-center"
---
This colum has default span and spread on 2 rows.
:::

:::ShColumn 
---
size: 2
ui:
  wrapper: "bg-stone-300 text-center"
---
This colum now is 2 column wide.
:::

:::ShColumn 
---
ui:
  wrapper: "border text-center"
---

This colum has span of 1 as well.
:::

:::ShColumn 
---
ui:
  wrapper: "border text-center"
---

This colum has span of 1 as well.
:::

:::ShColumn 
---
size: 2
ui:
  wrapper: "bg-stone-300 text-center"
---
This colum now is 2 column wide.
:::

::
```

## Props

| name | type | default | note |
| --- | :---: | :---: | --- |
| ui |  config | | optional |
| cols | Number |  | required |
| gap| String | "gap-4" | optional |

The `gap` property controls gutters between columns.
Values for this property and its basic usage can be find in
[tailwindcss](https://tailwindcss.com/docs/gap){target="_blank"} documentation.

## Config

```ts
{
  wrapper: "",
  default: {
    size: 3,
    gap: "gap-4"
  }
}
```

