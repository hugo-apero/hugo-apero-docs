# run the global .Rprofile if it exists (you may configure blogdown options
# there, too, so they apply to any blogdown projects)
if (file.exists("~/.Rprofile")) {
  base::sys.source("~/.Rprofile", envir = environment())
}

options(
  blogdown.hugo.version = "0.126.1",
  blogdown.author = "Alison Hill",
  blogdown.ext = ".Rmarkdown",
  blogdown.method = "markdown",
  blogdown.subdir = "blog",
  blogdown.yaml.empty = TRUE,
  blogdown.new_bundle = TRUE,
  blogdown.title_case = TRUE,
  # stop knitting for me
  blogdown.knit.serve_site = FALSE,
  blogdown.knit.on_save = FALSE
)
