---
title: "02: Create your site"
slug: create-site
weight: 2
subtitle: ""
excerpt: "How to use the blogdown R package to create a new site, update the theme for an existing Hugo Apéro site, or convert an existing site to this theme."
date: 2021-05-26
draft: false
---

## New site, GitHub first

This is my *recommended* workflow for most users.

### Create repo

{{< panelset >}}
{{< panel name="To do :heavy_check_mark:" >}}

Create a new repository on GitHub from <https://github.com/new>:

+ Check to initialize with a `README` 

+ Don't add `.gitignore`- this will be taken care of later. 

{{< /panel >}}
{{< panel name="Screenshot :camera:" >}}

![Screenshot: Creating a new repository in GitHub](github-new-repo.png)

{{< /panel >}}
{{< /panelset >}}

{{< panelset >}}
{{< panel name="To do :heavy_check_mark:" >}}

From the main page of your new repository, and under the repository name:

+ Click the green <i class="fas fa-download fa-fw"></i>**Code** button.

+ Choose either HTTPS or SSH (if you don't know which, choose HTTPS). Choose by clicking on the clipboard icon to copy the remote URL for your new repository. You'll paste this text into RStudio in the next section.

{{< /panel >}}
{{< panel name="Screenshot :camera:" >}}

![Screenshot: Clone a repository from GitHub](github-clone.png)

{{< /panel >}}
{{< /panelset >}}

    
### Create project

We just created the remote repository on GitHub. To make a local copy on our computer that we can actually work in, we'll clone that repository into a new RStudio project. This will allow us to sync between the two locations: your remote (the one you see on github.com) and your local desktop.

{{< panelset >}}
{{< panel name="To do :heavy_check_mark:" >}}

Open up RStudio to create a new project where your website's files will live.
    
1. Click `File > New Project > Version Control > Git`.

1. Paste the copied URL from the previous step.

1. Be intentional about where you tell RStudio to create this new Project on your workstation.

1. Click **Create Project**.

{{< /panel >}}
{{< panel name="Screenshot :camera:" >}}

![Screenshot: Clone a Git repository in RStudio](rstudio-clone.png)

{{< /panel >}}
{{< /panelset >}}



    
### Create site

{{< panelset class="lh-copy" >}}
{{< panel name="To do :heavy_check_mark:" class="lh-copy" >}}

Use blogdown to create the Hugo Apéro example website:

```r
> library(blogdown)
> new_site(theme = "hugo-apero/hugo-apero", 
           format = "toml",
           sample = FALSE,
           empty_dirs = TRUE)
```

Take a moment to read through the message that prints your console (shown right) - importantly, it tells you how to start and stop the server so you can preview your site. 

{{< /panel >}}
{{< panel name="Message :speech_balloon:" >}}

```r
― Creating your new site
| Installing the theme hugo-apero/hugo-apero from github.com
trying URL 'https://github.com/hugo-apero/hugo-apero/archive/main.tar.gz'
downloaded 21.3 MB

| Adding the sample post to content/blog/2020-12-01-r-rmarkdown/index.Rmd
| Converting all metadata to the YAML format
| Adding netlify.toml in case you want to deploy the site to Netlify
| Adding .Rprofile to set options() for blogdown
― The new site is ready
○ To start a local preview: use blogdown::serve_site(), or the RStudio add-in "Serve Site"
○ To stop a local preview: use blogdown::stop_server(), or restart your R session
► Want to serve and preview the site now? (y/n)
```

{{< /panel >}}
{{< panel name="Screenshot :camera:" >}}

![Screenshot: New site in RStudio](new-apero.png)

{{< /panel >}}
{{< /panelset >}}


{{< panelset >}}
{{< panel name="To do :heavy_check_mark:" >}}

We are asked:

```r
► Want to serve and preview the site now? (y/n)
```

Select `y` to let blogdown start a server for us.

Now, don't trap your site in the RStudio Viewer pane. Let it out! 

Click the <i class="fas fa-external-link-alt"></i> icon to *Show in new window* (to the right of the :broom: icon) to preview it in a normal browser window. When you do that, you'll be re-directed to the site's main homepage. 

{{< /panel >}}
{{< panel name="Screenshot :camera:" >}}

![Screenshot: Serving your site in RStudio](serve-apero.png)

{{< /panel >}}
{{< /panelset >}}
    
If you followed these steps successfully and are looking at a Hugo Apéro site in your local browser, you are all set to start [configuring your site](../site-config) :rocket:

## New site, GitHub last

{{< panelset >}}
{{< panel name="To do :heavy_check_mark:" >}}

Use the RStudio New Project Wizard to create a new blogdown project:

`File -> New Project -> New Directory -> Website using blogdown`

{{< /panel >}}
{{< panel name="Screenshot :camera:" >}}

<div class="figure" style="text-align: center">
<img src="new-project.png" alt="Create a new website project in RStudio." width="80%" />
<p class="caption">Figure 1: Create a new website project in RStudio.</p>
</div>

{{< /panel >}}
{{< /panelset >}}


{{< panelset >}}
{{< panel name="To do :heavy_check_mark:" >}}

Fill out the fields as shown.

Click *Create Project*. 

The project wizard then runs a function that creates a new site for you by doing the following steps:

1. Creates and opens a new [RStudio Project](https://support.rstudio.com/hc/en-us/articles/200526207-Using-Projects) for the website;
1. Downloads and installs the Hugo Apéro theme (https://github.com/hugo-apero/) with an example site;
1. Adds a sample `.Rmd` post;
1. Creates a `netlify.toml` file to help you deploy your site to [Netlify,](https://www.netlify.com) and
1. Creates an `.Rprofile` file to set your **blogdown** options (some have been set up for you).

{{< /panel >}}
{{< panel name="Screenshot :camera:" >}}

<div class="figure" style="text-align: center">
<img src="blogdown-project.png" alt="Create a website project based on blogdown." width="80%" />
<p class="caption">Figure 2: Create a website project based on blogdown.</p>
</div>

{{< /panel >}}
{{< /panelset >}}

To preview the site locally, run `blogdown::serve_site()` from the console or equivalently, click on the RStudio addin "Serve Site" (see Figure <a href="#fig:addin-serve">3</a>).

<div class="figure" style="text-align: center">
<img src="addin-serve.png" alt="Use the blogdown addin to serve the site." width="80%" />
<p class="caption">Figure 3: Use the blogdown addin to serve the site.</p>
</div>

If you are not using RStudio, you can create a new empty directory, and call the `new_site()` function in the directory in the R console to create a new site project:

```r
blogdown::new_site(theme = "hugo-apero/hugo-apero",
                   format = "toml")
```

This will generate the theme's example site. To preview it locally, run:

```r
blogdown::serve_site()
```

Then you can edit or discard the pages under `content`, and change things in the site configuration (`config.toml`) file.

To use Git/GitHub now with this existing site that you can serve locally, the easiest way is to use the usethis package:

```r
# install.packages("usethis")
usethis::use_git()
usethis::use_github() # requires a GitHub PAT
```

If this doesn't work for you, revisit our section on [how to set up GitHub](../01-setup/).

## Update theme

To update your theme, inside your website project, use:

```r
blogdown::install_theme(theme = "hugo-apero/hugo-apero",
                        update_config = FALSE, 
                        force = TRUE)
```

## Existing site

To convert an existing Hugo site from another theme, there are quite a few steps, and it may not be a smooth process. I recommend doing this *in a branch* on GitHub.

First, to install this theme alongside one you'd like to convert from, use the same code as above for updating the theme files:

```r
blogdown::install_theme(theme = "hugo-apero/hugo-apero",
                        update_config = FALSE, 
                        force = TRUE)
```

Next, use `blogdown::hugo_version()` to check your local Hugo version:

```r
> blogdown::hugo_version()
[1] ‘0.80.0’
```

Make sure you have at least version 0.80.0 installed. If not, try `blogdown::install_hugo()`. To pin this Hugo version to your website project, use:

```r
> blogdown::config_Rprofile()
```

And add this line (make sure there is an empty line at the end of this file, and restart your R session to make these changes go into effect):

```r
options(blogdown.hugo.version = "0.80.0")
```

Now, the next steps are trial-and-error, depending on your theme. Here is [one user's steps followed](https://github.com/hugo-apero/hugo-apero-docs/issues/78) to convert from the Academic/Wowchemy theme, with corresponding commits in their repo:

1. Install theme alongside Academic [commit](https://github.com/spcanelon/silvia/commit/cc5d24d93676990675abc52145fd7a369c7bffa6)

1. Change `theme` to `hugo-apero` in `config.toml` [commit](https://github.com/spcanelon/silvia/commit/499cc959a947761b4dbc518f5a1bf6312527b517)

1. Copy all Academic shortcodes to `layouts/` in root [commit](https://github.com/spcanelon/silvia/commit/f3c7d5334b4effbd850b204eb267425f6740b4af)

1. Remove all assets in website root [commit](https://github.com/spcanelon/silvia/commit/3843c76a5da6184b2d9b547b18f96ec6810a695a)

1. Remove all custom layouts in website root [commit](https://github.com/spcanelon/silvia/commit/1ad7e3d491d309e71e1b4fa0bbad1e3af6b9d322)

1. Copy over Apéro example site `config.toml` file [commit](https://github.com/spcanelon/silvia/commit/db37289e768640522130f98353996de4a6e0abfc)

1. Remove Academic `config/` directory [commit](https://github.com/spcanelon/silvia/commit/5541f38871911d5067c6c8856936d54d183b3ec9)

