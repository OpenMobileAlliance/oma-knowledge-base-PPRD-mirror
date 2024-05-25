### Usage
This is how `ShVideo` is displayed:

::ShVideo
---
ui:
    wrapper: "shadow-2xl"
src: "https://www.youtube.com/watch?v=8A5AMiskxvQ"
---
::

This is how `ShVideo` is written:

```md
::ShVideo
---
ui:
    wrapper: "shadow-2xl"
src: "https://www.youtube.com/watch?v=8A5AMiskxvQ"
---
::
```

### Props
These are the properties available to `ShVideo` constructor:
> Note: (*), these properties can also accept changes to the style.
* `ui`:
* `wrapper`: (*)
* `src`: 

### Config
This is the content in the `sh-video.ts` file. It contains the properties that can be used to configure the style.

```ts
export default {
    wrapper: "mx-5 ring-4",
    // Default Tailwind CSS values
    default: {
    }
  }
```