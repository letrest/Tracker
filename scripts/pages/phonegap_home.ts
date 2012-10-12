$status = "200"
$("./head") {
  $("./title") {
    text("Phonegap Test")
  }
}
$("./body") {
  text("")
  insert_bottom("div", class: "mw_container") {
    insert_bottom("h1", class: "mw_h1", "Welcome to the PhoneGap Wrapper")
     # insert_bottom("div", class: "mw_btn", onclick: "navigator.notification,alert('You Have a New Coupon From message!');", "Click for coupon!")
  }
}