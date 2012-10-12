$("./head") {
  $("./title") {
    text("Tracker")
  }
  # inject_after("<style>
  #  .mw_btn {
  # 
  #  }
  # 
  #  </style>")
}
$("./body") {
  text("")
  add_class("_home")
  insert_bottom("div", class: "mw_container") {
    insert_top("header", class: "_header") {
      insert_bottom("h1", class: "mw_h1", "Tracker Wrapper")
    }
    insert_bottom("div", class: "mw_btn", "Coupon!") {
      phonegap_alert('You Have a New Coupon From Apple!')
    }
    insert_bottom("div", class: "mw_tracker_container") {
      insert_bottom("div", class: "mw_btn", "Get Location", onclick: "getLocation()")
      insert_bottom("div", class: "mw_btn", "Get Toggle Constant Location Update", onclick: "getLocationConstant()")
      insert_bottom("div", class: "mw_btn", "Stop Tracking Location", onclick: "stopGetLocation")
      insert_bottom("div", id: "list") {
        insert_bottom("div", id: "latitude")
        insert_bottom("div", id: "longitude")
        insert_bottom("div", id: "message")
      }
      insert_tracker()
      insert_nearLoc("Apple", "37.33233141", "-122.0312186")
    }
  }
  
  
}