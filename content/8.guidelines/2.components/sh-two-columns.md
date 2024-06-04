---
titile: TwoColumns
discription: 
constructorName: ShTwoColumns
---


The {{ $doc.constructorName }} constructor enables you to provide any content presented in two
columns in one row.

## Usage

::ShTwoColumns
This text should be in the left column.

Text here should be in the right column.
::

The above example is done with the following code:
```mdc 
::ShTwoColumns
This text should be in the left column.

Text here should be in the right column.
::
```

You can use not only for text but for other objects as well. Images for example

::ShTwoColumns
This text should be in the left column. 

![image](https://free-images.com/sm/3b8f/dalmatiner_schw_braun.jpg){.not-prose .w-full .rounded-2xl}
::

```mdc
::ShTwoColumns
This text should be in the left column. 

![image](https://free-images.com/sm/3b8f/dalmatiner_schw_braun.jpg){.not-prose .w-full .rounded-2xl}
::
```

The order of elements determine the left and right column content.

::ShTwoColumns
![image](https://free-images.com/sm/3b8f/dalmatiner_schw_braun.jpg){.not-prose .w-full .rounded-2xl}

This text should be in the right column. 
::

```mdc
::ShTwoColumns
![image](https://free-images.com/sm/3b8f/dalmatiner_schw_braun.jpg){.not-prose .w-full .rounded-2xl}

This text should be in the right column. 
::
```
Combining with `ShSegment` the more elaborated effects can be achieved.


::ShTwoColumns
![laptop](https://free-images.com/tn/f4f3/coffee_apple_iphone_laptop.jpg){.not-prose .w-full .rounded-2xl}

:::ShSegment

For more elaborated content in one of the columns it's better to utilize the `ShSegment` 
component.

This component enables more *Markdown* content to be added to the column. This content
can contain all available contractors as other parts of the *Markdown* document:

* lists, images, tables, links
* other components

It can contain nested {{ $doc.constructorName }} component as well, if that is needed for achieving
desired effect.
::ShTwoColumns
---
size: 2XL
---
[Let your creativity blosom]{.text-4xl .bg-gradient-to-r .from-blue-600 .to-orange-400 .bg-clip-text .text-transparent .inline-block}

![image](https://free-images.com/sm/3b8f/dalmatiner_schw_braun.jpg){.not-prose .w-1/2 .rounded-full}
::

:::

::

```mdc
::ShTwoColumns
![laptop](https://free-images.com/tn/f4f3/coffee_apple_iphone_laptop.jpg){.not-prose .w-full .rounded-2xl}

:::ShSegment

For more elaborated content in one of the columns it's better to utilize the `ShSegment` 
component.

This component enables more *Markdown* content to be added to the column. This content
can contain all available contractors as other parts of the *Markdown* document:

* lists, images, tables, links
* other components

It can contain nested {{ $doc.constructorName }} component as well if that is needed for achieving
desired effect.

::ShTwoColumns
---
size: 3XL
---
[Let your creativity blosom]{.text-4xl .bg-gradient-to-r .from-blue-600 .to-orange-400 .bg-clip-text .text-transparent .inline-block}

![image](https://free-images.com/sm/3b8f/dalmatiner_schw_braun.jpg){.not-prose .w-1/2 .rounded-full}
::

:::

::
```

You can notice that in the right column, encoupsulated with `ShSegment`
component there is a {{ $doc.constructorName }} component with different withs of the
columns.

The relationship between sizes of two columns can be controled using the property `size`.
The values of this property are define in [T-shirt]{} sizes starting from '2XS' all the
way up to '4XL'. Default value of the `size` property is 'L'.


::ShSegment
---
ui:
  wrapper: grid grid-rows-1 gap-4
---
::ShTwoColumns
---
size: 2XS
---
:::ShSegment
---
ui:
  wrapper: bg-slate-200 text-center
---
2XS
:::

:::ShSegment
---
ui:
  wrapper: bg-slate-300 text-center
---
9/10
:::
::

::ShTwoColumns
---
size: XS
---
:::ShSegment
---
ui:
  wrapper: bg-slate-200 text-center
---
XS
:::

:::ShSegment
---
ui:
  wrapper: bg-slate-300 text-center
---
4/5
:::
::

::ShTwoColumns
---
size: S
---
:::ShSegment
---
ui:
  wrapper: bg-slate-200 text-center
---
S
:::

:::ShSegment
---
ui:
  wrapper: bg-slate-300 text-center
---
3/4
:::
::

::ShTwoColumns
---
size: M
---
:::ShSegment
---
ui:
  wrapper: bg-slate-200 text-center
---
M
:::

:::ShSegment
---
ui:
  wrapper: bg-slate-300 text-center
---
2/3
:::
::

::ShTwoColumns
---
size: L
---
:::ShSegment
---
ui:
  wrapper: bg-slate-200 text-center
---
L
:::

:::ShSegment
---
ui:
  wrapper: bg-slate-300 text-center
---
1/2
:::
::

::ShTwoColumns
---
size: XL
---
:::ShSegment
---
ui:
  wrapper: bg-slate-200 text-center
---
XL
:::

:::ShSegment
---
ui:
  wrapper: bg-slate-300 text-center
---
1/3
:::
::

::ShTwoColumns
---
size: 2XL
---
:::ShSegment
---
ui:
  wrapper: bg-slate-200 text-center
---
2XL
:::

:::ShSegment
---
ui:
  wrapper: bg-slate-300 text-center
---
1/4
:::
::

::ShTwoColumns
---
size: 3XL
---
:::ShSegment
---
ui:
  wrapper: bg-slate-200 text-center
---
3XL
:::

:::ShSegment
---
ui:
  wrapper: bg-slate-300 text-center
---
1/5
:::
::

::ShTwoColumns
---
size: 4XL
---
:::ShSegment
---
ui:
  wrapper: bg-slate-200 text-center
---
4XL
:::

:::ShSegment
---
ui:
  wrapper: bg-slate-300 text-center
---
1/10
:::
::

::


## Props

| name | type | default | note |
| --- | :---: | :---: | --- |
| ui |  config | | optional |
| size | String | "L" | optional |
| gap| String | "gap-4" | optional |

The `gap` property controls gutters between columns.
Values for this property and its basic usage can be find in
[tailwindcss](https://tailwindcss.com/docs/gap){target="_blank"} documentation.

## Config

```json
{
  wrapper: "",
  default: {
    size: "L",
    gap: "gap-4"
  }
}
```
