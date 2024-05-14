# Micro Card
Display logos and quotes 
____

This is how Micro Card looks like
::ShMicroCard
---
ui:
    wrapper: "shadow-xl"
    title: "text-red-500 "
imageLink: 'https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png'
link: 'https://www.axios.com/'
title: Microsoft sets non-profit to cut software related carbon emissions 
subtitle: Axios gets you smarter, faster on what matters.
---
::

This is how to use Micro Card
```md
::ShMicroCard
---
imageLink: 'https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png'
link: 'https://www.axios.com/'
title: Microsoft sets non-profit to cut software related carbon emissions
subtitle: Axios gets you smarter, faster on what matters.
---
::
```

You can also tackle the styling of elements in Micro Card by inserting a ui prop and then target it in front-matter of component

```md
::ShMicroCard
---
ui:
    wrapper: "shadow-xl"
    title: "text-red-500"
imageLink: 'https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png'
link: 'https://www.axios.com/'
title: Microsoft sets non-profit to cut software related carbon emissions
subtitle: Axios gets you smarter, faster on what matters.
---
::
```