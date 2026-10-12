---
title: Avatar
description: This constructor is designed to showcase an Avatar representing a project member and provide a direct link to their social media profiles. 
constructorName: ShAvatar
layout: doc
---

## Usage

The constructor creates a display format showcasing an avatar that represents a project member, including links to their social media profiles.

 
### Basic

::doc-example
---
code: |
  ::ShAvatar
  ---
  srcAvatar: https://avatars.githubusercontent.com/u/3258579?v=4
  altAvatar: JPC
  name: |
      Joaquin Prado
  role: |
      Co-Founder
  company: |
      Standards-Hub
  linkedin: https://www.linkedin.com/in/jpradocueva/
  facebook: https://www.linkedin.com/in/jpradocueva/
  instagram: https://www.linkedin.com/in/jpradocueva/
  twitter: https://www.linkedin.com/in/jpradocueva/
  ---
  ::
---
::

### Advanced settings
An example with customized `ui` attributes for enhanced display:

::doc-example
---
code: |
  ::ShAvatar
  ---
  ui:
    wrapper: shadow-xl # provide a shadow around the wrapper
    name: text-3xl # controls text font, size and color
    role: text-2xl
    company: text-xl
    icon: hover:text-blue-800 dark:hover:text-blue-400
    # twitter, facebook, linkedin & instagram are props for links, so no visual effects can be added here
  srcAvatar: https://avatars.githubusercontent.com/u/3258579?v=4
  altAvatar: JPC
  name: |
      Joaquin Prado
  role: |
      Co-Founder
  company: |
      Standards-Hub
  linkedin: https://www.linkedin.com/in/jpradocueva/ #link to social media source
  facebook: https://www.linkedin.com/in/jpradocueva/
  instagram: https://www.linkedin.com/in/jpradocueva/
  twitter: https://www.linkedin.com/in/jpradocueva/
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

::ShFaq
---
qas:
  - q: |
      What are these style properties (base, socials, icon, avatar) and how can we manipulate them?
    a: |
      We can manipulate all four of these through the **ui** styling (**ui.base**, **ui.socials**, **ui.icon** & **ui.avatar**). These are some examples of how some effects will be displayed targeting different class:

      1. **ui.base**

      Here and in the next class, **ui.socials**, we will just color the background of what is wrapped by them, so you will have a visual representation that may give you some ideas on how you can manipulate these classes further

      > Note: The values for styling of the base have no default style since they have a minor impact on the overall looks. However, it is a good option to have if we want to add some padding, margins, translate or anything else to the colored section on the picture below.

      ![ui.base](/images/faq/ui.base.png)

      2. **ui.socials**

      Here is the visual representation of what is wrapped by ui.socials
      ![ui.socials](/images/faq/ui.socials.png)

      3. **ui.icon**

      Here we can add a certain color (we have added `hover:text-primary`) to the icons that will take place, in this case when we hover over them (see Facebook icon)
      ![ui.icon](/images/faq/ui.icon.png)

      4. **ui.avatar**

      Here we can also apply some styles, but since we used grayscale for color of avatar, we are limited with colors. So here, we have added some shadow below avatar (drop-shadow-2xl)
      ![ui.avatar](/images/faq/ui.avatar.png)

  - q: What is Nuxt?
    a: It is a progressive Vue framework
---
::
