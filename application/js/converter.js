(function() {
  document.getElementById("afterConvert").value = (20 / 14) + "rem";
}());

function convert()
{
  const beforeConvert = parseFloat(document.getElementById("beforeConvert").value.replace("px", ""));
  const defaultFontSize = parseFloat(document.getElementById("defaultFontSize").value);

  if((!isNaN(beforeConvert)) && (!isNaN(defaultFontSize)))
  {
    document.getElementById("afterConvert").value = (beforeConvert / defaultFontSize) + "rem";
  } else {
    document.getElementById("afterConvert").value = "";
  }
}

document.getElementById("defaultFontSize").addEventListener('keyup', function() { convert(); });
document.getElementById("beforeConvert").addEventListener('keyup', function() { convert(); });