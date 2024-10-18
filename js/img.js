var img = document.getElementsByTagName("img");
for (var x = 0; x < img.length; x++) {
  img.item(x).onclick = function () { window.open(this.src) };
}

// 새로운창으로 이미지 확대하여 보여주는 함수.