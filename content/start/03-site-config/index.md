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

## Hugo-defined variables

A few Hugo-defined variables are included the example site's `config.toml` file. You can find a complete list in the [Hugo docs](https://gohugo.io/getting-started/configuration/#all-configuration-settings). Some key ones you'll want to edit:

```toml
baseURL = "/"
title = "Hugo Apéro"
author = "Alison Hill"
```

At a minimum, change these values.

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
# show/hide social icons in site header/footer
socialInHeader = false
socialInFooter = false
  [[params.social]]
      icon      = "github" # icon name without the 'fa-'
      icon_pack = "fab"
      url       = "https://github.com/apreshill/apero"
  [[params.social]] <!--lather, rinse, repeat-->
```

Read the [full docs here](/learn/social/).

## Header menu

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

## Footer menu

Just below the header menu, you'll find the menu items for the footer as well:

```toml
[menu]
  [[menu.footer]]
    name = "License"
    title = "License"
    url = "/license/"
    weight = 1
  [[menu.footer]] <!--lather, rinse, repeat-->
```