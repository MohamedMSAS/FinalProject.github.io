function upDate(previewPic){
   document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
   document.getElementById("image").innerHTML = previewPic.alt;
 }
 
 function unDo(){
   document.getElementById("image").style.backgroundImage = "url('')";
   document.getElementById("image").innerHTML = "Hover over an image below to display here.";
 }
 
 function addTabFocus(img) {
   img.tabIndex = 0;
   img.addEventListener("focus", function() {
     upDate(this);
   });
   img.addEventListener("blur", function() {
     unDo();
   });
   console.log("Tab focus event added to image");
 }
 

 window.addEventListener("load", function() {
  var images = document.getElementsByClassName("preview");
   for (var i = 0; i < images.length; i++) {
     images[i].tabIndex = i + 1;
     addTabFocus(images[i]);
   }
 });