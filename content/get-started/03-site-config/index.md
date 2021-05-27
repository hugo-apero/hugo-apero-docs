---
title: "03: Site configuration"
weight: 3
subtitle: ""
excerpt: "Grid is the very first CSS module created specifically to solve the layout problems we’ve all been hacking our way around for as long as we’ve been making websites."
date: 2021-05-26
draft: false
---


The following site configuration options are found in the `config.toml` file at the root of this Hugo site.



## Color themes

You have three options for customizing colors:

+ Use a [color theme](https://hugo-apero-docs.netlify.app/blog/color-themes/#use-a-color-theme),
+ Use [Tachyons colors](https://hugo-apero-docs.netlify.app/blog/color-themes/#use-tachyons-named-colors), or
+ Bring your own [hex codes](https://hugo-apero-docs.netlify.app/blog/color-themes/#bring-your-own-hex-codes).

Find this section in your `config.toml` file and color away:

```toml
[params]
  # use a built-in color theme
  # one of: forest / grayscale / peach / plum /
  #         poppy / sky / violet / water
  theme = "peach"
  
  # or, leave theme empty & make your own palette
  # see docs at https://hugo-apero.netlify.app/blog/color-themes/
  # the custom scss file must be in the assets/ folder
  # add the filename name here, without extension
  # to use hex colors instead of named tachyons colors, include "hex" in filename
  custom_theme = "hex-colors" 
```

Read the [full docs here](/blog/color-themes/).

## Font options

You have three options for customizing fonts:

+ Use [embedded fonts](https://hugo-apero-docs.netlify.app/blog/fonts/#embedded-fonts),
+ Use attractive [system fonts](https://hugo-apero-docs.netlify.app/blog/fonts/#use-attractive-system-fonts), or
+ Use fully [custom fonts](https://hugo-apero-docs.netlify.app/blog/fonts/#use-a-custom-font).

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

Read the [full docs here](/blog/fonts/)

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

Read the [full docs here](/blog/social/)

