---
# for listing page layout
layout: list # list, list-sidebar, list-grid
title: A Blog That's Real
author: The Team @RStudio
description: |
  This is a fully featured blog that supports categories,
  tags, series, and pagination. 
  Even this sidebar offers a ton of customizations.
  Check out the _index.md file in the /blog folder 
  to edit this content.
excerpt: |
  This is a fully featured blog that supports categories, 
  tags, series, and pagination.
show_post_thumbnail: false
show_author_byline: true 
show_post_date: true
show_disqus_comments: false # see disqusShortname in site config

# for list-sidebar layout only
text_link_label: Subscribe via RSS
text_link_url: /index.xml
show_sidebar_adunit: false # show ad container

# set up common front matter for all pages inside blog/
cascade:  
  show_author_byline: true
  show_post_date: true
---

** No content below YAML for the blog _index. This file provides front matter for the listing page layout and sidebar content. It is also a branch bundle, and all settings under `cascade` provide front matter for all pages inside blog/. You may still override any of these by changing them in a page's front matter.**
