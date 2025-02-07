---
title: Dynamic Table
description: Table component with dynamic capabiities
constructorName: ShDynamicTable
layout: doc
---


## Usage

The simplest usage of <b>{{ $doc.constructorName }}</b> can be shown in the following example:

::ShDynamicTable
---
dataUrl: "http://dummyjson.com/users"
dataField: "users"
columns:
  - name: "firstName"
    title: "First Name"
    filter: false
    query: true
    sortable: true
    type: text
  - name: "lastName"
    title: "Last Name"
    filter: false
    query: true
    sortable: true
    type: text
  - name: "username"
    title: "username"
    filter: false
    query: true
    sortable: true
    type: text
  - name: "email"
    title: "Email"
    filter: false
    query: true
    sortable: false
    type: email
  - name: "gender"
    title: "Gender"
    filter: true
    sortable: true
    order: true
    type: text
  - name: "birthDate"
    title: "Birth Date"
    filter: false
    query: true
    sortable: true
    type: date
  - name: "age"
    title: "Age"
    filter: true
    query: true
    sortable: true
    type: number
ui:
  footer: "text-sm"
header: Dymanic Table example
footer: "*Copyright &copy; 2024*"
---
::

To achieve the above the following code needs do be inserted in your Markdown text.

```mdc
::ShDynamicTable
---
dataUrl: "http://dummyjson.com/users"
dataField: "users"
columns:
  - name: "firstName"
    title: "First Name"
    filter: false
    query: true
    sortable: true
    type: text
  - name: "lastName"
    title: "Last Name"
    filter: false
    query: true
    sortable: true
    type: text
  - name: "username"
    title: "username"
    filter: false
    query: true
    sortable: true
    type: text
  - name: "email"
    title: "Email"
    filter: false
    query: true
    sortable: false
    type: email
  - name: "gender"
    title: "Gender"
    filter: true
    sortable: true
    order: true
    type: text
  - name: "birthDate"
    title: "Birth Date"
    filter: false
    query: true
    sortable: true
    type: date
  - name: "age"
    title: "Age"
    filter: true
    query: true
    sortable: true
    type: number
ui:
  footer: "text-sm"
header: Dymanic Table example
footer: "*Copyright &copy; 2024*"
---
::
```

The important parts are the `dataUrl`, and `columns`. The prior one define the
*URL* from witch the data will be fetched. On the other hand, `columns` represent
a list of elements where each table column is described.

Each column is described using the following properties:
* `name` - the property name
* `title` - the label that will be show in the column header
* `filter` - `true | false` value indication that if the field in question should be used for quick filters
* `query` - `true | false` value indicating if this filed should be used in query search
* `sortable` - `true | false` value indication if this field should be used for ordering the data
* `type` - one of the following `[text, number, date]` values defining the type of the field value

Beside the above the `dataField` parameter can be used if the data fetched
holds the table items under a specific property.
This is typical in [REST API](https://aws.amazon.com/what-is/restful-api/){target="_blank"} results.
You can review the one used in [above example](http://dummyjson.com/users){target="_blank"}
where the items that we would like to show in the
table is stored in `users` field.

## Properties

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
      <td rowspan="13"><code>ui</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Allows detailed customization of styling for various elements of the table component. Attributes include <code>wrapper</code>, <code>header</code>, <code>footer</code>, etc., for granular control over appearance.</td>
    </tr>
    <tr>
      <td><code>wrapper</code></td>
      <td><code>config.wrapper</code></td>
      <td>Customizes the overall container's styling, such as padding, margin, and background.</td>
    </tr>
    <tr>
      <td><code>base</code></td>
      <td><code>config.base</code></td>
      <td>Applies default styles to the main table structure, including borders and layout.</td>
    </tr>
    <tr>
      <td><code>header</code></td>
      <td><code>config.header</code></td>
      <td>Styles for the table's header, including background, text alignment, and font.</td>
    </tr>
    <tr>
      <td><code>footer</code></td>
      <td><code>config.footer</code></td>
      <td>Customizes the footer section, often used for summaries or additional actions.</td>
    </tr>
    <tr>
      <td><code>pagination</code></td>
      <td><code>config.pagination</code></td>
      <td>Styles pagination controls, including buttons, spacing, and hover effects.</td>
    </tr>
    <tr>
      <td><code>search</code></td>
      <td><code>config.search</code></td>
      <td>Defines styling for the search input or controls, enhancing usability and design.</td>
    </tr>
    <tr>
      <td><code>filter</code></td>
      <td><code>config.filter</code></td>
      <td>Applies styles to filtering options for better UI clarity and interaction.</td>
    </tr>
    <tr>
      <td><code>table</code></td>
      <td><code>config.table</code></td>
      <td>Styling applied to the table element, such as borders, spacing, and layout.</td>
    </tr>
    <tr>
      <td><code>thead</code></td>
      <td><code>config.thead</code></td>
      <td>Customizes the table header section, including fonts, colors, and spacing.</td>
    </tr>
    <tr>
      <td>
        <code>tr.base</code><br>
        <code>tr.selected</code><br>
        <code>tr.active</code>
      </td>
      <td>
        <code>config.tr.base</code><br>
        <code>config.tr.selected</code><br>
        <code>config.tr.active</code>
      </td>
      <td>Defines row-level styles for default, selected, and active states.</td>
    </tr>
    <tr>
      <td>
        <code>th.base</code><br>
        <code>th.padding</code><br>
        <code>th.color</code><br>
        <code>th.font</code><br>
        <code>th.size</code>
      </td>
      <td>
        <code>config.th.base</code><br>
        <code>config.th.padding</code><br>
        <code>config.th.color</code><br>
        <code>config.th.font</code><br>
        <code>config.th.size</code>
      </td>
      <td>Applies header cell-level styles, such as padding, font, color, and size.</td>
    </tr>
    <tr>
      <td>
        <code>td.base</code><br>
        <code>td.padding</code><br>
        <code>td.color</code><br>
        <code>td.font</code><br>
        <code>td.size</code>
      </td>
      <td>
        <code>config.td.base</code><br>
        <code>config.td.padding</code><br>
        <code>config.td.color</code><br>
        <code>config.td.font</code><br>
        <code>config.td.size</code>
      </td>
      <td>Customizes data cell styles, including spacing, text size, and color.</td>
    </tr>
    <tr>
      <td><code>dataUrl</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>URL from which the table fetches its data dynamically.</td>
    </tr>
    <tr>
      <td><code>dataField</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Specifies the key or field within the fetched data to be displayed.</td>
    </tr>
    <tr>
      <td><code>columns</code></td>
      <td>
        <code>name</code><br>
        <code>title</code><br>
        <code>filter</code><br>
        <code>query</code><br>
        <code>sortable</code><br>
        <code>hide</code><br>
        <code>type</code>
      </td>
      <td>
        n/a<br>
        n/a<br>
        <code>true | false</code><br>
        <code>true | false</code><br>
        <code>true | false</code><br>
        <code>true | false</code><br>
        n/a
      </td>
      <td>Defines column properties, including header titles, filters, and sort options.</td>
    </tr>
    <tr>
      <td><code>header</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Content for the table header, typically displayed above the column titles.</td>
    </tr>
    <tr>
      <td><code>footer</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Content for the footer section, often used for totals or additional information.</td>
    </tr>
    <tr>
      <td><code>perPage</code></td>
      <td>n/a</td>
      <td><code>10</code></td>
      <td>Defines the number of rows per page. Acceptable values: 10, 25, 50, 100.</td>
    </tr>
  </tbody>
</table>

## Config
These style properties can be modified via `ui` and are stored in the <code><b>{{ $doc.constructorName }}</b><b>.ts</b></code> file:

```ts
export default {
  wrapper: "bg-gray-50 dark:bg-inherit border-2 border-neutral-200 dark:border-neutral-500 rounded-2xl p-5",
  header: "font-semibold text-center bg-slate-200 dark:bg-slate-700 dark:text-slate-200",
  base: "",
  footer: "font-semibold text-center bg-slate-200 dark:bg-slate-700 dark:text-slate-200",
  search: "pb-4",
  filter:  "",
  table: 'min-w-full divide-y divide-gray-300 dark:divide-gray-700',
  tbody: 'divide-y divide-gray-300 dark:divide-gray-700',
  thead: "",
  tr: {
    base: '',
    selected: 'bg-oma-blue-400 hover:bg-oma-blue-300 text-white dark:bg-oma-blue-600 dark:hover:bg-oma-blue-500 dark:text-golden',
    active: 'hover:bg-neutral-200 dark:hover:bg-neutral-600 cursor-pointer'
  },
  th: {
    base: 'text-left rtl:text-right dark:bg-neutral-600',
    padding: 'px-4 py-3.5',
    color: 'text-gray-900 dark:text-white',
    font: 'font-semibold',
    size: 'text-sm'
  },
  td: {
    base: 'whitespace-nowrap text-pretty ',
    padding: 'px-4 py-4',
    color: 'text-gray-500 dark:text-gray-400',
    font: '',
    size: 'text-sm'
  },
  pagination: '',
  perPage: [10, 25, 50, 100],
  default: {
    perPage: 10,
    sortAscIcon: 'i-heroicons-bars-arrow-up-20-solid',
    sortDescIcon: 'i-heroicons-bars-arrow-down-20-solid',
    sortButton: {
      icon: 'i-heroicons-arrows-up-down-20-solid',
      trailing: true,
      square: true,
      color: 'gray' as const,
      variant: 'ghost' as const,
      class: '-m-1.5 font-semibold text-sm'
    },
  }
}
```

#### Class Descriptions

These represent the class values utilized in the <b>{{ $doc.constructorName }}</b> component. These values are customizable and can be strengthened or overridden through the `ui` properties' attributes.

_**wrapper**_
* **Value**: `"bg-gray-50 dark:bg-inherit border-2 border-neutral-200 dark:border-neutral-500 rounded-2xl p-5"`
* **Description**: Defines the overall container styles. The value "bg-gray-50 dark:bg-inherit border-2 border-neutral-200 dark:border-neutral-500 rounded-2xl p-5" applies a light background (bg-gray-50), inherits background color in dark mode (dark:bg-inherit), adds a 2-unit border (border-2), adjusts border color for dark mode (dark:border-neutral-500), rounds corners (rounded-2xl), and adds padding of 5 units (p-5).

_**header**_
* **Value**: `"font-semibold text-center bg-slate-200 dark:bg-slate-700 dark:text-slate-200"`
* **Description**: Styles the header section. The value "font-semibold text-center bg-slate-200 dark:bg-slate-700 dark:text-slate-200" sets a semi-bold font weight (font-semibold), centers the text (text-center), applies a light slate background (bg-slate-200), adjusts background color for dark mode (dark:bg-slate-700), and changes text color for dark mode (dark:text-slate-200).

_**base**_
* **Value**: `""`
* **Description**: Serves as a base for custom styles, currently left empty for flexibility.

_**footer**_
* **Value**: `"font-semibold text-center bg-slate-200 dark:bg-slate-700 dark:text-slate-200"`
* **Description**: Defines styles for the footer. Similar to the header, the value sets a semi-bold font weight (font-semibold), centers text (text-center), applies a slate background (bg-slate-200), and adapts colors for dark mode (dark:bg-slate-700, dark:text-slate-200).

_**search**_
* **Value**: `"pb-4"`
* **Description**: Adds padding to the bottom of the search section. The value "pb-4" applies 4 units of bottom padding.

_**filter**_
* **Value**: `""`
* **Description**: Provides a base for filter-specific styles, currently left empty for customization.

_**table**_
* **Value**: `"min-w-full divide-y divide-gray-300 dark:divide-gray-700"`
* **Description**: Styles the table container. The value "min-w-full divide-y divide-gray-300 dark:divide-gray-700" ensures the table spans the full width (min-w-full), adds horizontal dividers (divide-y), and adjusts divider color for dark mode (dark:divide-gray-700).

_**tbody**_
* **Value**: `"divide-y divide-gray-300 dark:divide-gray-700"`
* **Description**: Styles the table body. The value adds horizontal dividers (divide-y), with adjustments for light and dark mode (divide-gray-300, dark:divide-gray-700).

_**thead**_
* **Value**: `""`
* **Description**: A placeholder for header-specific styles, currently left empty for customization.

_**tr**_
* **Base**:
  * **Value**: `""`
  * **Description**: Base styles for table rows, currently left empty.
* **Selected**:
  * **Value**: `"bg-oma-blue-400 hover:bg-oma-blue-300 text-white dark:bg-oma-blue-600 dark:hover:bg-oma-blue-500 dark:text-golden"`
  * **Description**: Applies styles for selected rows. Includes a blue background (bg-oma-blue-400), hover effect (hover:bg-oma-blue-300), white text color (text-white), and dark mode adaptations (dark:bg-oma-blue-600, dark:hover:bg-oma-blue-500, dark:text-golden).
* **Active**:
  * **Value**: `"hover:bg-neutral-200 dark:hover:bg-neutral-600 cursor-pointer"`
  * **Description**: Adds hover effects and pointer cursor. The value changes the background on hover (hover:bg-neutral-200, dark:hover:bg-neutral-600) and sets the cursor to pointer (cursor-pointer).

_**th**_
* **Base**:
  * **Value**: `"text-left rtl:text-right dark:bg-neutral-600"`
  * **Description**: Sets text alignment (text-left, rtl:text-right) and applies a background for dark mode (dark:bg-neutral-600).
* **Padding**:
  * **Value**: `"px-4 py-3.5"`
  * **Description**: Adds padding of 4 units horizontally (px-4) and 3.5 units vertically (py-3.5).
* **Color**:
  * **Value**: `"text-gray-900 dark:text-white"`
  * **Description**: Defines text colors for light and dark modes.
* **Font**:
  * **Value**: `"font-semibold"`
  * **Description**: Sets a semi-bold font weight.
* **Size**:
  * **Value**: `"text-sm"`
  * **Description**: Defines the font size as small (text-sm).

_**td**_
* **Base**:
  * **Value**: `"whitespace-nowrap text-pretty"`
  * **Description**: Ensures text does not wrap (whitespace-nowrap) and applies a custom style class (text-pretty).
* **Padding**:
  * **Value**: `"px-4 py-4"`
  * **Description**: Adds padding of 4 units both horizontally and vertically.
* **Color**:
  * **Value**: `"text-gray-500 dark:text-gray-400"`
  * **Description**: Sets text colors for light and dark modes.
* **Font**:
  * **Value**: `""`
  * **Description**: Placeholder for custom font styles.
* **Size**:
  * **Value**: `"text-sm"`
  * **Description**: Defines the font size as small (text-sm).

_**pagination**_
* **Value**: `""`
* **Description**: Placeholder for pagination-specific styles.

_**perPage**_
* **Value**: `[10, 25, 50, 100]`
* **Description**: Defines available options for items per page.

_**default**_
* **Value**: An object containing default configuration:
  * `perPage`: 10
  * `sortAscIcon`: `'i-heroicons-bars-arrow-up-20-solid'`
  * `sortDescIcon`: `'i-heroicons-bars-arrow-down-20-solid'`
  * `sortButton`:
    * `icon`: `'i-heroicons-arrows-up-down-20-solid'`
    * `trailing`: `true`
    * `square`: `true`
    * `color`: `'gray'`
    * `variant`: `'ghost'`
    * `class`: `'-m-1.5 font-semibold text-sm'`
* **Description**: Holds default configuration values for pagination and sorting icons, with button styles defined by "sortButton" properties.
