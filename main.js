document.addEventListener("DOMContentLoaded", function(){
  Cookies.set("testcookie", "yum a cookie" )

  var clearButton = document.querySelector("#clearbutton")
  var sugarButton = document.querySelector("#sugarbutton")
  var chocolateButton = document.querySelector("#chocolatebutton")
  var lemonButton = document.querySelector("#lemonbutton")
  var sugarCount = document.querySelector("#sugarcount")
  var chocolateCount = document.querySelector("#chocolatecount")
  var lemonCount = document.querySelector("#lemoncount")


  var sugarValue = Cookies.get("sugarcookie")
  sugarCount.innerHTML = sugarValue
  if (sugarValue === undefined){
    sugarCount.innerHTML = 0
  }

  var chocolateValue = Cookies.get("chocolatecookie")
  chocolateCount.innerHTML = chocolateValue
  if (chocolateValue === undefined){
    chocolateCount.innerHTML = 0
  }

  var lemonValue = Cookies.get("lemoncookie")
  lemonCount.innerHTML = lemonValue
  if (lemonValue === undefined){
    lemonCount.innerHTML = 0
  }

  sugarButton.addEventListener("click", function () {
    if (Cookies.get("sugarcookie")){
      var sugarValue = Cookies.get("sugarcookie")
      Cookies.set("sugarcookie", ++sugarValue)
      sugarCount.innerHTML = sugarValue
    } else {
      Cookies.set("sugarcookie", 1)
      var sugarValue = Cookies.get("sugarcookie")
      sugarCount.innerHTML = sugarValue
    }

  })

  chocolateButton.addEventListener("click", function () {
    if (Cookies.get("chocolatecookie")){
      var chocolateValue = Cookies.get("chocolatecookie")
      Cookies.set("chocolatecookie", ++chocolateValue)
      chocolateCount.innerHTML = chocolateValue
    } else {
      Cookies.set("chocolatecookie", 1)
      var chocolateValue = Cookies.get("chocolatecookie")
      chocolateCount.innerHTML = chocolateValue
    }

  })


  lemonButton.addEventListener("click", function () {
    if (Cookies.get("lemoncookie")){
      var lemonValue = Cookies.get("lemoncookie")
      Cookies.set("lemoncookie", ++lemonValue)
      lemonCount.innerHTML = lemonValue
    } else {
      Cookies.set("lemoncookie", 1)
      var lemonValue = Cookies.get("lemoncookie")
      lemonCount.innerHTML = lemonValue
    }

  })


  clearButton.addEventListener("click", function () {
    Cookies.expire("sugarcookie")
    sugarCount.innerHTML = 0
    Cookies.expire("chocolatecookie")
    chocolateCount.innerHTML = 0
    Cookies.expire("lemoncookie")
    lemonCount.innerHTML = 0

  })

})
