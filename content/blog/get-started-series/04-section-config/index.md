---
title: "04: Section configuration"
weight: 4
subtitle: ""
excerpt: "Grid is the very first CSS module created specifically to solve the layout problems we’ve all been hacking our way around for as long as we’ve been making websites."
date: 2021-01-03
draft: false
---


Hugo allows you to use a page's front matter (written in yaml, toml, or json) to keep metadata attached to markdown files. The motto in Hugo is "everything is a page." The following page configuration options are found in the front matter of a Hugo Apéro site.

## Section configuration

There are two sets of front matter for each content section. One set is for the section itself (`/blog/_index.md`), and the other for each page within a section, which consist of front matter plus content (`/blog/my-blog-post/index.md`). 

Apéro provides unique layouts for three main content sections:

+ blogs,
+ projects, and
+ talks.

These are easy to see in your content folder structure (note the folder names are singular, not plural):

```json
content/
├── blog/
├── project/
└── talk/
```

### Lists of pages

For most sections, there are three listing `layout` choices: 

+ `list` (blogs, projects, talks)
+ `list-sidebar` (blogs, projects, talks), or 
+ `list-grid` (blogs and projects only).

We list each section pages with a title and excerpt plus a thumbnail, byline, and dateline according to your boolean choice here.

```yaml
title: A Blog That Works
description: |
  Words
  go
  here.
author: "Alison Hill"
show_post_thumbnail: true
thumbnail_left: true # for list-sidebar only
show_author_byline: true
show_post_date: true
# for listing page layout
layout: list-sidebar # list, list-sidebar, list-grid
```

Any of the layouts can be used with or without post thumbnails (seriously- they all look good and work well on mobile!). 

If you show thumbnails, the image file in each page's bundle with the word `featured` in the filename will be used as the page thumbnail in the list (like `featured.jpg` or even `mario-kart-featured.png`). The featured image will also be that page's social sharing image. 

```json
content/
└── blog
    ├── _index.md
    └── my-blog-post
        ├── my-featured.jpg
        └── index.md
```

If your image happens to be a hex shape (like an R package hex sticker), include the word `hex` in the filename too, like `my-featured-hex.png`.

### List sidebar content

If you choose the `list-sidebar` layout for a section, you can configure the sidebar content in the same `/section/_index.md` file.

```yaml
# for list-sidebar layout
sidebar: 
  title: A Sidebar for Your Thoughts
  description: |
    Sidebar
    thoughts
    go here.
  author: "Alison Hill"
  text_link_label: Subscribe via RSS
  text_link_url: /index.xml
  show_sidebar_adunit: true # show ad container
```

To display an image at the top of the sidebar, add an image file to the root of the content section and name the file `sidebar-listing`. 

```json
content/
└── blog
    ├── _index.md
    └── sidebar-listing.png
```

