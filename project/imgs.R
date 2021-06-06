library(magick)
library(fs)
library(purrr)

img_ls <- dir_ls(path = "content/project/", glob = "*featured*", recurse = TRUE)

scale_sq <- function(sq) {
  sq %>%
    image_read() %>% 
    image_scale("800x800") %>% 
    image_write(sq, quality = 90)
}

purrr::map(img_ls, scale_sq)
