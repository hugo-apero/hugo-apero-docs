---
title: "03: Site configuration"
slug: site-config
weight: 3
subtitle: ""
excerpt: "Hugo uses the config.toml found in the site root to configure your site. In this article, we highlight key options in this file, and some options added by the Hugo Apéro theme which you can access in the `[params]` section."
date: 2021-05-26
draft: false
---


The following site configuration options are found in the `config.toml` file at the root of this Hugo site.

## Hugo variables

A few Hugo-defined variables are included the example site's `config.toml` file. You can find a complete list in the [Hugo docs](https://gohugo.io/getting-started/configuration/#all-configuration-settings). Some key ones you'll want to edit:

```toml
baseURL = "/"
title = "Hugo Apéro"
author = "Alison Hill"
# set deliberately low for testing- choose your preferred number 
paginate = 5
```

At a minimum, change these values.

## Apéro variables

The Apéro theme also defines additional site-wide, global variables. All are listed under the `[params]` section in your `config.toml` file. The most important to touch are:

```toml
[params]
  orgName = "RStudio"
  orgLocal = "Anywhere"
  description = "A modern, beautiful, and easily configurable blog theme for Hugo."
  favicon = "/img/favicon.ico"
  logo = "/img/blogophonic-mark-dark.png"
  mainSections = ["blog", "project", "talk"]
  navallcaps = true
  # Default image for social sharing and search engines. 
  # Place image file in `static` folder and specify image name here.
  sharing_image = "/img/papillons.jpg"
  # Twitter username (without @). Used when a visitor shares your site on Twitter.
  twitter = "apreshill"
```

For all image files (`favicon`, `logo`, and `sharing_image`), the files should be placed in the `/static/` folder in your project root. The default `config.toml` file shows them inside `/static/img/`, for example:

```bash
config.toml
static/
└── img/
    ├── favicon.ico 
    ├── blogophonic-mark-dark.png
    └── papillons.jpg
```

## Color themes

You have three options for customizing colors:

+ Use a [color theme](/learn/color-themes/#use-a-color-theme),
+ Use [Tachyons colors](/learn/color-themes/#use-tachyons-named-colors), or
+ Bring your own [hex codes](/learn/color-themes/#bring-your-own-hex-codes).

Find this section in your `config.toml` file and color away:

```toml
[params]
  # use a built-in color theme
  # one of: forest / grayscale / peach / plum /
  #         poppy / sky / violet / water
  theme = "peach"
  
  # or, leave theme empty & make your own palette
  # see docs at https://hugo-apero.netlify.app/learn/color-themes/
  # the custom scss file must be in the assets/ folder
  # add the filename name here, without extension
  # to use hex colors instead of named tachyons colors, include "hex" in filename
  custom_theme = "hex-colors" 
```

Read the [full docs here](/learn/color-themes/).

## Font options

You have three options for customizing fonts:

+ Use [embedded fonts](/learn/fonts/#embedded-fonts),
+ Use attractive [system fonts](/learn/fonts/#use-attractive-system-fonts), or
+ Use fully [custom fonts](/learn/fonts/#use-a-custom-font).

Find this section in your `config.toml` file and go to town:

```toml  
[params]
  # use an embedded font
  customtextFontFamily = "Commissioner"
  customheadingFontFamily = "Fraunces"
  
  # or choose a system font stack
  textFontFamily = "sans-serif"
  headingFontFamily = "serif"
```

Read the [full docs here](/learn/fonts/).

## Social icons

You can use both Font Awesome and Academicons to link to your social accounts.

Find this section in your `config.toml` file and link all the things:

```toml
[params]
  # show/hide social icons in site header & footer
  socialInHeader = false
  socialInFooter = false
  
  [[params.social]]
      icon      = "github" # icon name without the 'fa-'
      icon_pack = "fab"
      url       = "https://github.com/apreshill/apero"
  [[params.social]] <!--lather, rinse, repeat-->
```

Read the [full docs here](/learn/social/).

## Menus

Find this section in your `config.toml` file to change the menu items in the site header:

```toml
[menu]
  [[menu.header]]
    name = "About"
    title = "About Apéro"
    url = "/about/"
    weight = 1
  [[menu.header]] <!--lather, rinse, repeat-->
```

Just below the header menu, you'll find the menu items for the footer as well:

```toml
  [[menu.footer]]
    name = "License"
    title = "License"
    url = "/license/"
    weight = 1
  [[menu.footer]] <!--lather, rinse, repeat-->
```

## Check your configuration file

The blogdown R package has a checking function to help you make sure that your configuration file has all the fiddly bits right. I encourage you to use it whenever you edit this file:

```r
> blogdown::check_config()
― Checking config.toml
| Checking "baseURL" setting for Hugo...
● [TODO] Update "baseURL" to your actual URL when ready to publish.
| Checking "ignoreFiles" setting for Hugo...
○ "ignoreFiles" looks good - nothing to do here!
| Checking setting for Hugo's Markdown renderer...
○ All set! Found the "unsafe" setting for goldmark.
― Check complete: config.toml
```

We have a `[TODO]` item- we need to update our `baseURL`. To get one, we'll need to [deploy our site first](../deploy).