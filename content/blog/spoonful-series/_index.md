---
# for series listing page layout
layout: list # list, list-sidebar, list-grid
title: "Posts from *A Spoonful of Hugo*"
author: The Team @RStudio
description: |
  A forking fun new feature for series. 
  Even this sidebar offers a ton of customizations!
  Check out the _index.md file in the /blog/spoonful-series/ folder 
  to edit this content.
show_post_thumbnail: false
show_author_byline: true
show_post_date: false
show_disqus_comments: false # see disqusShortname in site config

# set up common front matter for all pages in series
cascade:
  layout: single-series       # for a series, do not change
  series: A Spoonful of Hugo  # name it!
  author: Alison Hill        
  show_author_byline: true
  show_post_date: true
  show_sidebar_adunit: false  # show ad container
  text_link_label: ""         # leave blank to exclude
  text_link_url: ""           # leave blank to exclude
  text_series_label: "In this series" 
  text_contents_label: "On this page" 
  tags:
  - hugo-site
  categories:
  - Theme Features
  - R
---

** No content below YAML for the series _index. This file is a leaf bundle, and provides settings for the listing page layout and sidebar content.**