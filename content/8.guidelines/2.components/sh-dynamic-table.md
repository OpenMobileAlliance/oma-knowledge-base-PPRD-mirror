---
title: Dynamic Table
description: Table component with dynamic capabiities
constructorName: ShDynamicTable
layout: doc
---


## Usage

The symplest usage of <b>{{ $doc.constructorName }}</b> can be shown in the following example:

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

The important parts are the `dataUrl`, and `columns`.  The prior one define the
*URL* from witch the data will be fetched. On the other hand, `columns` represent
a list of elements where each table column is described.

Each column is described using the following properties:
* `name` - the property name
* `title` - the label that will be show in the column header
* `filter` - true | false value indication that if the field in question should be used for quick filters
* `query` - true | false value indicating if this filed should be used in query search
* `sortable` - true | false value indication if this field should be used for ordering the data
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
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>dataUrl</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>dataField</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>columns</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>header</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>footer</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>perPager</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>ui</td>
      <td></td>
      <td>The <code>ui</code> property in the component is a configuration object that allows customization of various styling aspects of the component. Each attribute within the <code>ui</code> property targets a specific part of the component display, providing detailed control over its appearance and layout. Below is a detailed description of each attribute within the <code>ui</code> property:</td>
    </tr>
  </tbody>
</table>



## Configuration
The <b>{{ $doc.constructorName }}</b> component or constructor contains a
property `ui` with a following stucture:

```json
{
  wrapper: "",
  header: "font-semibold text-center bg-slate-200 dark:bg-slate-700 dark:text-slate-200",
  footer: "font-semibold text-center bg-slate-200 dark:bg-slate-700 dark:text-slate-200",
  search: "pb-4",
  filter: "",
  table: 'min-w-full divide-y divide-gray-300 dark:divide-gray-700',
  tbody: 'divide-y divide-gray-300 dark:divide-gray-700',
  tr: {
    base: '',
    selected: 'bg-gray-50 dark:bg-gray-800/50',
    active: 'hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer'
  },
  th: {
    base: 'text-left rtl:text-right',
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
      class: '-m-1.5'
    },
  }
}
```
