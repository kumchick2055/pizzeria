let design = document.getElementById("header-logo-design")

function resizeHeaderLogoDesign(){
  let logoClientRect = $(".header-logo")[0].getBoundingClientRect()
  design.style.width = logoClientRect.left + logoClientRect.width + 20 + "px"
}

function setHeaderLogoDesign(){
  let logoClientRect = $(".header-logo")[0].getBoundingClientRect()
  design.style.width = logoClientRect.left + logoClientRect.width + 20 + "px"
  design.style.top = "25px"
}

$(function(){
  setHeaderLogoDesign()
  $(window).resize(function(){
    resizeHeaderLogoDesign()
  })
})