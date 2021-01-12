---
cascade:    # do not remove cascade!
  layout: list-sidebar # list, list-sidebar, list-grid
  show_post_thumbnail: true 
  show_author_byline: true
  show_post_date: true
  show_disqus_comments: false # see disqusShortname in site config
  
  # for list-sidebar layout
  list_sidebar:
    title: A Blog That's Real
    description: |
      This is a fully featured blog that supports categories,
      tags, series, and pagination. 
      Even this sidebar offers a ton of customizations.
      Check out the _index.md file in the /blog folder 
      to edit this content.
    excerpt: |
      This is a fully featured blog that supports categories, 
      tags, series, and pagination.
    author: The Team at Formspree
    text_link_label: Subscribe via RSS
    text_link_url: /index.xml
    show_sidebar_adunit: false # show ad container
    text_series_label: "In this series" # only for series
    text_contents_label: "On this page" # only for series
  
  # for single-sidebar layout
  single_sidebar: 
    title: A Page That's Real
    description: |
      This is a fully featured blog that supports categories,
      tags, series, and pagination. 
      Even this sidebar offers a ton of customizations.
      Check out the _index.md file in the /blog folder 
      to edit this content.
    author: 
    text_link_label: View Recent Posts
    text_link_url: /blog
    show_sidebar_toc: true # show toc container
    show_sidebar_adunit: true # show ad container
---

** No content below YAML for the blog _index. This file is a branch bundle, and provides front matter for all pages inside blog/ including the listing page layout and sidebar content. Do not remove the starting `cascade:` at the top, and indentation is very very very important.**
