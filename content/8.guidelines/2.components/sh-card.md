### ShCard Usage

::ShCard
---
ui:
    wrapper: "shadow-xl"
    title: "text-4xl text-pink-800"
    subtitle: "font-mono text-cyan-700"
    text: "text-oma-500" # Add text-color
    leftLabel: "text-oma-500"  # Add text-color
    centerLabel: "text-oma-500"
    rightLabel: "text-oma-500"
    upperBase: "bg-red-300" # in order for this bg color to be displayed, we need to remove background prop
    image: "hover:saturate-200 hover:scale-125 duration-300" # Options to style image
text: |
    NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery. At its 20 centers and facilities across the country – and the only National Laboratory in space – [NASA](https://www.nasa.gov/) studies <a href="https://earth.google.com/web/" target="_blank">Earth</a>, including its climate, our Sun, and our solar system and beyond. We conduct research, testing, and development to advance aeronautics, including electric propulsion and supersonic flight. We develop and fund space technologies that will enable future exploration and benefit life on Earth.
title: |
    NASA Space Program
subtitle: |
    Per aspera ad astra
leftLabel: | #Comment can be added on the first line
    Hello left [label](https://www.nasa.gov)
centerLabel: |
    Hello <a href="https://earth.google.com/" target="_blank">center</a> label
rightLabel: |
    Hello <a href="https://earth.google.com/" target="_blank">right</a> label
background: https://static.vecteezy.com/system/resources/previews/026/459/005/non_2x/abstract-background-images-wallpaper-ai-generated-free-photo.jpg 
imageLink: https://gpm.nasa.gov/sites/default/files/document_files/NASA-Logo-Large.png
---
::

This is how ShCard is represented:

```md
::ShCard
---
ui:
    wrapper: "shadow-xl"
    title: "text-4xl text-pink-800"
    subtitle: "font-mono text-cyan-700"
    text: "text-oma-500" # Add text-color
    leftLabel: "text-oma-500" # Add text-color
    centerLabel: "text-oma-500"
    rightLabel: "text-oma-500"
    background: "bg-red-300" # Note: background color is not working
text: |
    NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery. At its 20 centers and facilities across the country – and the only National Laboratory in space – [NASA](https://www.nasa.gov/) studies <a href="https://earth.google.com/web/" target="_blank">Earth</a>, including its climate, our Sun, and our solar system and beyond. We conduct research, testing, and development to advance aeronautics, including electric propulsion and supersonic flight. We develop and fund space technologies that will enable future exploration and benefit life on Earth.
title: |
    NASA Space Program
subtitle: |
    Per aspera ad astra
leftLabel: | #Comment can be added on the first line
    Hello left [label](https://www.nasa.gov) 
centerLabel: |
    Hello <a href="https://earth.google.com/" target="_blank">center</a> label
rightLabel: |
    Hello <a href="https://earth.google.com/" target="_blank">right</a> label
background: https://static.vecteezy.com/system/resources/previews/026/459/005/non_2x/abstract-background-images-wallpaper-ai-generated-free-photo.jpg 
imageLink: https://gpm.nasa.gov/sites/default/files/document_files/NASA-Logo-Large.png
---
::
```

### ShCard Props
Text

### ShCard Config
Text