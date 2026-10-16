---
title: Social
description: Embed social media posts
constructorName: ShSocial
layout: doc
---
# {{$doc.title}}

## Usage

The `ShSocial` constructor creates a display format showcasing a Social Media post.
### X (Twitter) embeded post

::doc-example
---
code: |
  ::ShSocial
  ---
  src: "1757162766115176926"
  ---
  ::
---
::

### Facebook Embeded Post

::doc-example
---
code: |
  ::ShSocial
  ---
  src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FNASA%2Fposts%2Fpfbid0KzFf9KDNS8zh4Cngx22ec2aeRHBYcQk4KkescRzoW2hUMpH6Yuc13smPmLww95qNl&show_text=true&width=500"
  ---
  ::
---
::

### LinkedIn Embeded Post

::doc-example
---
code: |
  ::ShSocial
  ---
  src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7161263277866422272"
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
