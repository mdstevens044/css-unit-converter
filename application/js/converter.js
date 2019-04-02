(function() {
  document.getElementById("afterConvert").value = (20 / 14) + "rem";
}());

function changeConversionType()
{
  const conversionType = document.getElementById("conversionType").value;

  switch(conversionType)
  {
    case "pxToRem":
      document.getElementById("beforeConvertLabel").innerText = "Pixels";
      document.getElementById("afterConvertLabel").innerText = "Result in rem";
      document.getElementById("beforeConvert").value = 20;
      break;
    case "remToPx":
      document.getElementById("beforeConvertLabel").innerText = "Rem";
      document.getElementById("afterConvertLabel").innerText = "Result in pixels";
      document.getElementById("beforeConvert").value = 1;
      break;
  }

  convert();
}

function convert()
{
  const conversionType = document.getElementById("conversionType").value;
  const beforeConvert = parseFloat(document.getElementById("beforeConvert").value);
  const defaultFontSize = parseFloat(document.getElementById("defaultFontSize").value);

  switch(conversionType)
  {
    case "pxToRem":
      if((!isNaN(beforeConvert)) && (!isNaN(defaultFontSize)))
      {
        document.getElementById("afterConvert").value = (parseFloat(document.getElementById("beforeConvert").value) / defaultFontSize) + "rem";
      } else {
        document.getElementById("afterConvert").value = "";
      }
      break;
    case "remToPx":
      if((!isNaN(beforeConvert)) && (!isNaN(defaultFontSize)))
      {
        document.getElementById("afterConvert").value = (parseFloat(document.getElementById("beforeConvert").value) * defaultFontSize) + "px";
      } else {
        document.getElementById("afterConvert").value = "";
      }
      break;
  }
}

document.getElementById("conversionType").addEventListener('change', function() { changeConversionType(); });
document.getElementById("defaultFontSize").addEventListener('keyup', function() { convert(); });
document.getElementById("beforeConvert").addEventListener('keyup', function() { convert(); });