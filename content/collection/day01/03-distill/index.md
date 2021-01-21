---
title: "A distill site"
weight: 3
subtitle: "Using the distill & postcards packages to build a personal website with R Markdown."
excerpt: "Grid is the very first CSS module created specifically to solve the layout problems we’ve all been hacking our way around for as long as we’ve been making websites."
date: 2021-01-02
draft: false
---


## Pre-requisites

First, make sure you have the latest version of the distill package installed from CRAN:

```
install.packages("distill")
```

Restart your R session. If you use RStudio, use the menu item *Session > Restart R* or the associated keyboard shortcut:

+ <kbd>Ctrl + Shift + F10</kbd> (Windows and Linux) or
+ <kbd>Command + Shift + F10<kbd> (Mac OS). 

```
packageVersion("distill")
[1] ‘1.2’
```

## Create GitHub repo

Online.

## Clone GitHub repo

```
usethis::create_from_github("https://github.com/apreshill/global-distill.git")
```

:sparkles: Commit & Push! :sparkles:

You should be committing these files:

+ `*.Rproj`

+ `.gitignore`

## Create a new distill site

Inside your current distill project, use the R console:

```
library(distill)
```

Let's start with a simple website: 

```
create_website(dir = ".", gh_pages = TRUE)
```


## Add a postcard

Docs: <https://rstudio.github.io/distill/website.html#postcards>

Now, delete your `about.Rmd` (trust me!). We'll create a new one with the postcards package.

[Reminder: templates]({{< ref "/02-postcards#templates" >}} "Postcards templates")


```
postcards::create_postcard("about.Rmd")
```

## Navbar

`_site.yml`

## Theme

Docs: <https://rstudio.github.io/distill/website.html#theming>

```
distill::create_theme("apreshill")
```

Remember your `_site.yml` file? Add the theme line there:

``` {.yaml}
name: "Alison Hill"
title: "Personal website of Dr. Alison Hill"
description: |
  This is my personal website.
output_dir: "docs"
theme: apreshill.css
navbar:
  right:
    - text: "Home"
      href: index.html
    - text: "About"
      href: about.html
output: distill::distill_article
```
