---
title: Introduction
description: 'Markdown friendly UX'
layout: doc
---
All of the components, and how to use them are shown in [Components](/guidelines/components/) section. Since look&feel plays crucial role in UX, here you will find guidelines to all the different styling options.

### OMA Color Shades

OMA consists of five primary colors (**[red]{.text-oma-red-500}**, **[purple]{.text-oma-purple-500}**, **[cyan]{.text-oma-cyan-500}**, **[yellow]{.text-oma-yellow-500}** & **[blue]{.text-oma-blue-500}**). Each of this colors have their value presented in hexadecimal. In order to use the potential of these colors, we have provided diffferent shades of them through [https://maketintsandshades.com/](https://maketintsandshades.com/).

Process behind creating this palet was simple; take the hexadecimal value, insert it on site shown above and choose the values. Since the site gives you shades in percentage from your original hexadecimal value to lightest, as well as from original to darkest, we had to choose what percentages we want.

[![shades example oma red](/images/shades-example.jpg)](/images/shades-example.jpg)

> OMA Red (#bc3c38) used for example above

And here is the table that sorted out what percentages are used (every color takes the same percentage)

<table>
        <thead>
            <tr>
                <th>N°</th>
                <th>Tailwind Value</th>
                <th>Percentage %</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1.</td>
                <td>50</td>
                <td>80%</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>100</td>
                <td>60%</td>
            </tr>
            <tr>
                <td>3.</td>
                <td>200</td>
                <td>40%</td>
            </tr>
            <tr>
                <td>4.</td>
                <td>300</td>
                <td>20%</td>
            </tr>
            <tr>
                <td>5.</td>
                <td>400</td>
                <td>10%</td>
            </tr>
            <tr>
                <td>6.</td>
                <td>500</td>
                <td>0%</td>
            </tr>
            <tr>
                <td>7.</td>
                <td>600</td>
                <td>10%</td>
            </tr>
            <tr>
                <td>8.</td>
                <td>700</td>
                <td>20%</td>
            </tr>
            <tr>
                <td>9.</td>
                <td>800</td>
                <td>30%</td>
            </tr>
            <tr>
                <td>10.</td>
                <td>900</td>
                <td>40%</td>
            </tr>
            <tr>
                <td>11.</td>
                <td>950</td>
                <td>50%</td>
            </tr>
        </tbody>
    </table>

Tailwind v4 has no `tailwind.config.ts`; the theme is declared in CSS. The palette lives in the `@theme` block of `app/assets/css/main.css`, and every `--color-*` variable there becomes a set of utility classes (`bg-oma-red-500`, `text-oma-blue-700`, `border-oma-cyan-200`, ...):

```css
@import "tailwindcss";

@theme static {
  --color-oma-red-50: #f2d8d7;
  --color-oma-red-100: #e4b1af;
  --color-oma-red-200: #d78a88;
  --color-oma-red-300: #c96360;
  --color-oma-red-400: #c3504c;
  --color-oma-red-500: #bc3c38;
  --color-oma-red-600: #a93632;
  --color-oma-red-700: #96302d;
  --color-oma-red-800: #842a27;
  --color-oma-red-900: #712422;
  --color-oma-red-950: #5e1e1c;

  --color-oma-purple-50: #e6dcec;
  --color-oma-purple-100: #cdbad9;
  --color-oma-purple-200: #b497c6;
  --color-oma-purple-300: #9b75b3;
  --color-oma-purple-400: #8f63aa;
  --color-oma-purple-500: #8252a0;
  --color-oma-purple-600: #754a90;
  --color-oma-purple-700: #684280;
  --color-oma-purple-800: #5b3970;
  --color-oma-purple-900: #4e3160;
  --color-oma-purple-950: #412950;

  --color-oma-yellow-50: #f8eedc;
  --color-oma-yellow-100: #f1ddba;
  --color-oma-yellow-200: #ebcb97;
  --color-oma-yellow-300: #e4ba75;
  --color-oma-yellow-400: #e0b263;
  --color-oma-yellow-500: #dda952;
  --color-oma-yellow-600: #c7984a;
  --color-oma-yellow-700: #b18742;
  --color-oma-yellow-800: #9b7639;
  --color-oma-yellow-900: #856531;
  --color-oma-yellow-950: #6f5529;

  --color-oma-cyan-50: #e9f6f3;
  --color-oma-cyan-100: #d2ede7;
  --color-oma-cyan-200: #bce4dc;
  --color-oma-cyan-300: #a5dbd0;
  --color-oma-cyan-400: #9ad7ca;
  --color-oma-cyan-500: #8fd2c4;
  --color-oma-cyan-600: #81bdb0;
  --color-oma-cyan-700: #72a89d;
  --color-oma-cyan-800: #649389;
  --color-oma-cyan-900: #567e76;
  --color-oma-cyan-950: #486962;

  --color-oma-blue-50: #cddcec;
  --color-oma-blue-100: #9ab8da;
  --color-oma-blue-200: #6895c7;
  --color-oma-blue-300: #3571b5;
  --color-oma-blue-400: #1c60ab;
  --color-oma-blue-500: #034ea2;
  --color-oma-blue-600: #034692;
  --color-oma-blue-700: #023e82;
  --color-oma-blue-800: #023771;
  --color-oma-blue-900: #022f61;
  --color-oma-blue-950: #022751;
}
```

Classes that are assembled at runtime (for example `bg-{colorButton}-500` in `ShButton`) cannot be found by Tailwind when it scans the sources. They are kept with `@source inline(...)` in the same file, which replaces the old `safelist` option. Classes written in the Markdown content are picked up through `@source "../../../content"`.

Thus, every shade of OMA official color is now available using Tailwind classes presented in table below.

Feel free to checkout the table below and select the color that suits the best! Hover a tile to see the name of the color, and click it to copy the name.

::color-palette
::

> Colors with values of **500** are official colors of OMA, so if you ever need their hexadecimal values, just look at this chart and compare it against the `@theme` block in `app/assets/css/main.css`, where all hexadecimal values live