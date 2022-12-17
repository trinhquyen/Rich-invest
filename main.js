var menuBtn = document.getElementById('menuBtn')
console.log(menuBtn);
var menuList = document.getElementById('menu-list')
var overlay = document.getElementById('overlay-menu')
var btnClose = document.getElementById('btn-close')
menuBtn.addEventListener("click", function(){ 
  console.log(menuList);
  menuList.classList.add("open");
  overlay.classList.add("open");
});
btnClose.addEventListener("click", function(){ 
  console.log(menuList);
  menuList.classList.remove("open");
  overlay.classList.remove("open");
});