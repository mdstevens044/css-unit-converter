(function() {
  document.getElementById("resultInRem").value = (20 / 14) + "rem";
}());

function convert()
{
  const pixels = parseFloat(document.getElementById("pixels").value);
  const defaultFontSize = parseFloat(document.getElementById("defaultFontSize").value);

  if((!isNaN(pixels)) && (!isNaN(defaultFontSize)))
  {
    document.getElementById("resultInRem").value = (pixels / defaultFontSize) + "rem";
  } else {
    document.getElementById("resultInRem").value = "";
  }
}

document.getElementById("defaultFontSize").addEventListener('keyup', function() { convert(); });
document.getElementById("pixels").addEventListener('keyup', function() { convert(); });