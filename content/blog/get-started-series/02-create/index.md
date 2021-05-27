---
title: "02: Create your site"
weight: 2
subtitle: ""
excerpt: "Grid is the very first CSS module created specifically to solve the layout problems we’ve all been hacking our way around for as long as we’ve been making websites."
date: 2021-05-26
draft: false
---

## New site

To use it:

```r
blogdown::new_site(theme = "hugo-apero/hugo-apero",
                   format = "toml")
```

This will generate the theme's example site. Then you can edit or discard the pages under `content`, and change things in the site configuration (`config.toml`) file.

## Existing site

To update your theme, or install this theme alongside one you'd like to convert from, use:

```r
blogdown::install_theme(theme = "hugo-apero/hugo-apero",
                        update_config = FALSE, 
                        force = TRUE)
```

Please note: if you are converting a Hugo site from another theme, this may not be a smooth process! I recommend doing this *in a branch* on GitHub.

Here is [one user's steps followed](https://github.com/hugo-apero/hugo-apero-docs/issues/78), with corresponding commits in their repo:

1. Check `blogdown::hugo_version()` to make sure you have at least version 0.80.0 installed.
    + If not, try `blogdown::install_hugo()`
    
1. Install theme alongside Academic [commit](https://github.com/spcanelon/silvia/commit/cc5d24d93676990675abc52145fd7a369c7bffa6)

1. Change `theme` to `hugo-apero` in `config.toml` [commit](https://github.com/spcanelon/silvia/commit/499cc959a947761b4dbc518f5a1bf6312527b517)

1. Copy all Academic shortcodes to `layouts/` in root [commit](https://github.com/spcanelon/silvia/commit/f3c7d5334b4effbd850b204eb267425f6740b4af)

1. Remove all assets in website root [commit](https://github.com/spcanelon/silvia/commit/3843c76a5da6184b2d9b547b18f96ec6810a695a)

1. Remove all custom layouts in website root [commit](https://github.com/spcanelon/silvia/commit/1ad7e3d491d309e71e1b4fa0bbad1e3af6b9d322)

1. Copy over Apéro example site `config.toml` file [commit](https://github.com/spcanelon/silvia/commit/db37289e768640522130f98353996de4a6e0abfc)

1. Remove Academic `config/` directory [commit](https://github.com/spcanelon/silvia/commit/5541f38871911d5067c6c8856936d54d183b3ec9)

