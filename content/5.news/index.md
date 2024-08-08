---
title: NEWS
---

## Information
The following scripts contains the content to display.

```md
::ShListCard
---
description: This section is for OMA news
cols: 3 # three columns of news
title: News
subtitle: Latest Information on OMA and LwM2M
text: |
        Please refer to the news below ...
cardID: 32  # News order starting from left to right and top to botton.
tags:  # A click on one of these tags will filter the list of Card based on that selection
    - news
    - workshop
    - collaboration
    - v1.2
    - bootstrap
    - cellular networks
    - microcontrollers
    - security
    - release
    - 5G
    - clear
---
::

```

::ShListCards
---
ui:
    wrapper: shadow-xl bg-sky-100 pb-10 rounded-2xl
description: This constructor is standalone
title: |
    Featured Projects
subtitle: |
    Check out our latest projects
text: |
    Here are some of the exciting projects we're working on.
cols: 4
gap: gap-6
cardID: [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36]
---
::
