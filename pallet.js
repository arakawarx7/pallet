function pallet(width,height){

  var pageDiv = document.getElementById('pallet');
  var pixelSize = 8;
  var colorArray = ['blue','lightblue','green','lightgreen','red','pink','lightred','yellow','black'];
  var colorPalletCotainer = document.createElement("div");
  var backgroundImage = document.createElement('div').backgroundImage;
  var currentColor= null;

  function colorPixel(event){
    console.log("clicked colorpixel clicked");
    event.target.style.backgroundColor = currentColor;
  };

  function getColor(event){

    console.log("clicked Get Color",event);
    currentColor = event.target.style.backgroundColor ;
    console.log("current color", currentColor);
  }



  pixelDiv = document.createElement('div');
  pixelDiv.style.height = "540px";
  pixelDiv.style.width = "470px";
  pixelDiv.style.left = "70px";
  pixelDiv.style.border = "2px solid black";
  pixelDiv.style.position = "absolute";

  colorPalletCotainer.style.width  = 90;
  colorPalletCotainer.style.height = 80;
  colorPalletCotainer.style.position ="relative";
  colorPalletCotainer.style.left = "65px";



  for(var j = 0; j < colorArray.length; j++){
    var colorPallet = document.createElement("div");
    colorPallet.style.height = "40px";
    colorPallet.style.width = "40px";
    colorPallet.style.left = "60px;";
    colorPallet.style.border = "1px solid black";
    colorPallet.style.backgroundColor = colorArray[j];
    colorPallet.style.display = "inline-block";
    colorPallet.addEventListener('click', getColor);


    colorPalletCotainer.appendChild(colorPallet);
  }


  console.log(pixelDiv, 'hello');
for(var y = 0; y < height; y++) {
  for(var x = 0; x < width; x++){
  var createPixel = document.createElement('div');
    createPixel.style.backgroundColor = "white";
    createPixel.style.height = "10px";
    createPixel.style.width = "10px";
    createPixel.style.border = "1px solid black";
    createPixel.style.display = "inline-block";
    createPixel.style.left = 50;
    createPixel.addEventListener('click', colorPixel);

    pixelDiv.appendChild(createPixel);
  }




    console.log('loop');

  }
    pageDiv.appendChild(colorPalletCotainer);
    pageDiv.appendChild(pixelDiv);

}
  pallet(13,90);