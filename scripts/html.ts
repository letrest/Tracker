# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize_srcs()
  $("./HEAD") {

  }
  $("//meta[@http-equiv='Refresh']") {
    # log("--> "+fetch(text()))
    remove()
    log("--> Metas Removed!!!")
  }
  
  

  add_assets()

  @import sections/header.ts
  @import sections/footer.ts

  @import mappings.ts
}

