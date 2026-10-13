---
title: Helper Component
description: Display two logos, each with a separate dark and light version.
constructorName: ShHelperComponent
layout: doc
---

### Usage

#### Presentation
The <b>{{ $doc.constructorName }}</b> constructor shows two logos stacked vertically. Each logo has a dark-mode and a light-mode version, and the one matching the current color theme is displayed.

By default, the first logo is the OMA logo and the second logo is `/images/oma2.png` (dark mode only).

```mdc
::ShHelperComponent
---
firstLogoDark: /logo-dark.png
firstLogoLight: /logo-light.png
secondLogoDark: /images/oma2.png
secondLogoLight: /path/to/second-logo-light.png
---
::
```

### Props

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Attribute</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>description</code></td>
      <td>n/a</td>
      <td><code>""</code></td>
      <td>Intended to be used as a help to content writer. Doesn`t render on website.</td>
    </tr>
    <tr>
      <td><code>firstLogoDark</code></td>
      <td>n/a</td>
      <td><code>/logo-dark.png</code></td>
      <td>Path of the first logo shown in dark mode.</td>
    </tr>
    <tr>
      <td><code>firstLogoLight</code></td>
      <td>n/a</td>
      <td><code>/logo-light.png</code></td>
      <td>Path of the first logo shown in light mode.</td>
    </tr>
    <tr>
      <td><code>secondLogoDark</code></td>
      <td>n/a</td>
      <td><code>/images/oma2.png</code></td>
      <td>Path of the second logo shown in dark mode.</td>
    </tr>
    <tr>
      <td><code>secondLogoLight</code></td>
      <td>n/a</td>
      <td><code>""</code></td>
      <td>Path of the second logo shown in light mode. Nothing is rendered in light mode when empty.</td>
    </tr>
    <tr>
      <td rowspan="8"><code>ui</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Configuration object for customizing the styling of the component. Each attribute targets a specific part of the component:</td>
    </tr>
    <tr>
      <td><code>wrapper</code></td>
      <td><code>config.wrapper</code></td>
      <td>Styling for the outermost container.</td>
    </tr>
    <tr>
      <td><code>inner</code></td>
      <td><code>config.inner</code></td>
      <td>Styling for the container holding both logos.</td>
    </tr>
    <tr>
      <td><code>firstLogo</code></td>
      <td><code>config.firstLogo</code></td>
      <td>Styling for the container of the first logo.</td>
    </tr>
    <tr>
      <td><code>firstLogoDark</code> / <code>firstLogoLight</code></td>
      <td><code>config.firstLogoDark</code> / <code>config.firstLogoLight</code></td>
      <td>Styling for the first logo image in dark / light mode.</td>
    </tr>
    <tr>
      <td><code>secondLogo</code></td>
      <td><code>config.secondLogo</code></td>
      <td>Styling for the container of the second logo.</td>
    </tr>
    <tr>
      <td><code>secondLogoDark</code> / <code>secondLogoLight</code></td>
      <td><code>config.secondLogoDark</code> / <code>config.secondLogoLight</code></td>
      <td>Styling for the second logo image in dark / light mode.</td>
    </tr>
  </tbody>
</table>

#### Example Usage
##### Advanced Settings
Resizing the second logo in both color modes:

```mdc
::ShHelperComponent
---
ui:
    secondLogoDark: size-[73%]
    secondLogoLight: size-[73%]
---
::
```

### Config
These style properties can be modified via `ui` and are stored in the <code><b>{{ $doc.constructorName }}</b><b>.ts</b></code> file:

```ts
export default {
    wrapper: "",
    inner: "flex-col -mt-3",
    firstLogo: "",
    firstLogoDark: "m-0 max-w-full max-h-full object-contain",
    firstLogoLight: "m-0 max-w-full max-h-full object-contain",
    secondLogo: "mt-10",
    secondLogoDark: "m-0 max-w-full max-h-full object-contain",
    secondLogoLight: "m-0 max-w-full max-h-full object-contain",
}
```
