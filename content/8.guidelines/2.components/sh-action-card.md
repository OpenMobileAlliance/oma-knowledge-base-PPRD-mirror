# Action Card
Input emails for newsletter 
____

This is how Action Card looks like
::ShActionCard
---
ui:
    wrapper: "shadow-xl"
    title: "text-4xl"
    subtitle: "font-mono"
    text: "text-oma-500"
backgroundImage: 'https://static.vecteezy.com/system/resources/previews/026/459/005/non_2x/abstract-background-images-wallpaper-ai-generated-free-photo.jpg'
title: |
    Stay updated with our articles updates
subtitle: |
    Per aspera ad astra
buttonLabel: 'Sign up'
buttonColor: 'blue' 
buttonLink: 'https://www.nasa.gov/'
imageLink: https://gpm.nasa.gov/sites/default/files/document_files/NASA-Logo-Large.png
altImage: "NASA Logo"
icon: noto:rocket
altIcon: "Rocket"
text: |
 *New text goes [here](https://www.nasa.gov/).*
---
::

This is how Action Card is written:

```md
::ShActionCard
---
ui:
    wrapper: "shadow-xl" #inline comment
    title: "text-4xl"
    subtitle: "font-mono"
    text: "text-oma-500"
background: 'https://static.vecteezy.com/system/resources/previews/026/459/005/non_2x/abstract-background-images-wallpaper-ai-generated-free-photo.jpg'
title: |
    Stay updated with our articles updates
subtitle: |
    Per aspera ad astra
buttonLabel: 'Sign up'
buttonColor: 'blue'
imageLink: https://gpm.nasa.gov/sites/default/files/document_files/NASA-Logo-Large.png
altImage: "NASA Logo"
icon: noto:rocket
altIcon: "Rocket"
text: |
 *New text goes [here](https://www.nasa.gov/).*
---
::
```

### Properties Under Discussion
See [Issue](https://github.com/standards-hub/docs/issues/106) which contains questions and suggestions. 