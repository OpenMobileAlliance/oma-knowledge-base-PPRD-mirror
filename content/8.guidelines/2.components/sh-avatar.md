### Usage

This is how it is displayed. 

::ShAvatar
---
ui:
    wrapper: "shadow-xl"
    name: "text-3xl"
    role: "text-2xl"
    company: "text-1xl"
    linkedin: ""
    facebook: ""
    instagram: ""
    twitter: ""
srcAvatar: 'https://avatars.githubusercontent.com/u/3258579?v=4'
altAvatar: JPC
name: |
    Joaquin Prado
role: |
    Co-Founder
company: |
    Standards-Hub
linkedin: 'https://www.linkedin.com/in/jpradocueva/'
facebook: 'https://www.linkedin.com/in/jpradocueva/'
instagram: 'https://www.linkedin.com/in/jpradocueva/'
twitter: 'https://www.linkedin.com/in/jpradocueva/'
---
::

This is how it is constructed. 

```md
::ShAvatar
---
ui:
    wrapper: "shadow-xl"
    name: "text-3xl"
    role: "text-2xl"
    company: "text-1xl"
    linkedin: ""
    facebook: ""
    instagram: ""
    twitter: ""
srcAvatar: 'https://avatars.githubusercontent.com/u/3258579?v=4'
altAvatar: JPC
name: |
    Joaquin Prado
role: |
    Co-Founder
company: |
    Standards-Hub
linkedin: 'https://www.linkedin.com/in/jpradocueva/'
facebook: 'https://www.linkedin.com/in/jpradocueva/'
instagram: 'https://www.linkedin.com/in/jpradocueva/'
twitter: 'https://www.linkedin.com/in/jpradocueva/'
---
::
```

### Avatar Props
These are the properties use in the `Avatar` constructor:

* `srcAvatar`:
* `altAvata`:
* `name`:
* `role`:
* `company`:
* `linkedin`: 
* `facebook`: 
* `instagram`: 
* `twitter`: 


### Avatar Config
These are the ShAvatar style properties that can be modified via `ui`. These properties are stored in the `sh-avatar.ts` file:

```ts
export default {
    wrapper: "grid grid-cols-2 gap-4 p-4 mx-auto",
    avatar: "grayscale justify-self-end tracking-widest rounded-full size-48",
    base: "flex-col -mt-4",
    name: "text-3xl font-bold grow text-pink-500 bottom-0",
    role: "text-lg font-semibold text-black dark:text-white -mt-4",
    company: "text-lg text-gray-500 tracking-widest -mt-5",
    socials: "flex text-5xl -mx-1 -mt-2",
    icon: "transition-transform transform hover:-translate-y-1 dark:text-white duration-400",
    // Default Tailwind CSS values
    default: {
    }
  }
```
What does the `base` property?