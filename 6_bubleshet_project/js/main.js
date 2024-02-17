
// ----------------------------------------------------------------------------------
var images = document.querySelectorAll("img");
var currentImage = 0;

// استدعاء الدالة عند النقر على الزر السابق
document.getElementById("prev").addEventListener("click", function() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  showImage(currentImage);
  updateLine(currentImage);
});

// استدعاء الدالة عند النقر على الزر التالي
document.getElementById("next").addEventListener("click", function() {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  showImage(currentImage);
  updateLine(currentImage);
});

// عرض الصورة الحالية
function showImage(index) {
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[index].style.display = "block";
}

// تحديث لون الخط
function updateLine(index) {
  for (var i = 0; i < 4; i++) {
    if (i < index) {
      document.getElementById("line").children[i].style.backgroundColor = "green";
    } else {
      document.getElementById("line").children[i].style.backgroundColor = "black";
    }
  }
}
