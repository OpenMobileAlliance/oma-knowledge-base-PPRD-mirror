---
title: ShButton component
description: Component do render a button in the document
---

## Usage
The most simplest example of uage of the `ShButton` is with just an `url` and the text to show.

::ShButton
---
url: '#'
---
ClickMe!!!  
::

```mdc
::ShButton
---
url: '#'
---
ClickMe!!!  
::
```

The `ShButton` can be presented in `solid` and `outine` *variants*:

::ShMultiColumn
---
cols: 3
---

::ShButton
---
url: "#"
variant: solid
---
ClickMe!!!  
::

::ShButton
---
url: "#"
variant: outline
---
ClickMe!!!  
::

::ShButton
---
url: "#"
variant: link
---
ClickMe!!!  
::

```mdc
::ShButton
---
url: "#"
variant: solid
---
ClickMe!!!  
::
```

```mdc
::ShButton
---
url: "#"
variant: outline
---
ClickMe!!!  
::
```

```mdc
::ShButton
---
url: "#"
variant: link
---
ClickMe!!!  
::
```

::

The property `size` define the size of the `ShButton`

::ShButton
---
url: "#"
size: 2xs
---
2xs  
::

::ShButton
---
url: "#"
size: xs
---
xs 
::

::ShButton
---
url: "#"
size: sm
---
sm
::

::ShButton
---
url: "#"
size: md
---
md
::

::ShButton
---
url: "#"
size: base
---
base
::

::ShButton
---
url: "#"
size: lg
---
lg
::

::ShButton
---
url: "#"
size: xl
---
xl
::

::ShButton
---
url: "#"
size: 2xl
---
2xl
::

::ShButton
---
url: "#"
size: 3xl
---
3xl
::

::ShButton
---
url: "#"
size: 4xl
---
4xl
::

::ShButton
---
url: "#"
size: 5xl
---
5xl
::

Turning the parameter `block` to true you can instruct button to take the full length. And with `color` 
you can change the color of the button.

::ShButton
---
url: "#"
block: true
color: cyan
---
This button takes the whole witdh
::

```mdc
::ShButton
---
url: "#"
block: true
color: cyan
---
This button takes the whole witdh
::
```
The `ShButton` content can be any valid Markdown.

::ShButton
---
url: "#"
---
ClickMe!!!  

*it will take you to desirable destination*
::

The other components are supported as well.

::ShButton
---
url: "https://opensource.org/"
variant: outline
color: blue
block: true
---
:::ShMultiColumn
---
ui:
  wrapper: w-full
cols: 8
---
[]{.i-fa6-brands-square-github .text-4xl}

::ShColumn
---
title: GitHub repository
subTitle: "*public*"
size: 2
---
::

::ShColumn
---
size: 5
---
In this repository all the content is Open Sounce and it's can be used accordigly to it's LICENSE.
::
:::
::

```mdc
::ShButton
---
url: "https://opensource.org/"
variant: outline
color: blue
block: true
---
:::ShMultiColumn
---
ui:
  wrapper: w-full
cols: 8
---
[]{.i-fa6-brands-square-github .text-4xl}

::ShColumn
---
title: GitHub repository
subTitle: "*public*"
size: 2
---
::

::ShColumn
---
size: 5
---
In this repository all the content is Open Sounce and it's can be used accordigly to it's LICENSE.
::
:::
::
```

There is a special way where the button can be part of the
:ShButton{url ="/" label="text" color="blue"} using a inline notation for the
components. This notation supports `ShButton` :ShButton{url ="/" label="all" variant="outline" color="green"}
variants and all other parameters, color for example.

```mdc
There is a special way where the button can be part of the
:ShButton{url ="/" label="text" color="blue"} using a inline notation for the
components. This notation supports `ShButton` :ShButton{url ="/" label="all" variant="outline" color="green"}
variants and all other parameters, color for example.
```

## Properties

| name | type | default | note |
| --- | :---: | :---: | --- |
| ui |  config | | optional |
| url| String |  | mandatory |
| target | String |  | optional |
| color | String | primary | optional |
| size | String | base | optional |
| disabled | Boolean | false | optional |
| variant | String | solid | optional |
| type | String | button | optional |
| block | Boolean | false | optional |
| label | String |  | optional |
## Config

```json
{
  wrapper: "align-middle m-1",
  inner: "text-center not-prose mx-auto",
  variant: {
    solid: 'bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900 no-underline',
    outline: 'text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 no-underline',
    link: 'text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400'
  },
  block: 'w-full flex justify-center items-center',
  inline: 'inline-flex items-center',
  rounded: 'rounded-md',
  size: {
    '2xs': 'text-xs',
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-md',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl'
  },
  padding: {
    '2xs': 'px-1 py-1',
    xs: 'px-1.5 py-1.5',
    sm: 'px-2 py-2',
    md: 'px-2.5 py-2.5',
    base: 'px-3 py-3',
    lg: 'px-7 py-6',
    xl: 'px-8 py-7',
    '2xl': 'px-9 py-8',
    '3xl': 'px-10 py-9',
    '4xl': 'px-11 py-10',
    '5xl': 'px-12 py-11',
  },
  default: {
    size: 'base',
    variant: 'solid',
    color: 'primary',
  }
}
```
