//open sidebar
function openNav() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("header").style.marginLeft = "250px";
}
//close sidebar
function sidebarClose() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("header").style.marginLeft = "0";
}
//standard calculator
function standardcalculator() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("header").style.marginLeft = "0";
  document.getElementById("sidebarRight").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
  document.getElementById("header").style.marginRight = "0";
}
// Scientific Calculator
function scientificcalculator() {
  document.getElementById("sidebarRightHeading").innerHTML = "Scientific";
  document.getElementById("scientificBlock").style.display = "block";
  document.getElementById("VolumeBlock").style.display = "none";
  document.getElementById("tempretureBlock").style.display = "none";
  document.getElementById("speedBlock").style.display = "none";
  document.getElementById("percentageBlock").style.display = "none";
  document.getElementById("dataBlock").style.display = "none";
  document.getElementById("weightBlock").style.display = "none";
  document.getElementById("BMIBlock").style.display = "none";
  document.getElementById("lengthBlock").style.display = "none";
  document.getElementById("heightBlock").style.display = "none";
  document.getElementById("sidebarRight").style.width = "350px";
  document.getElementById("main").style.marginRight = "350px";
  document.getElementById("header").style.marginRight = "350px";
}
// Volume converter
function volumeconverter() {
  document.getElementById("sidebarRightHeading").innerHTML = "Tempreture";
  document.getElementById("VolumeBlock").style.display = "block";
  document.getElementById("scientificBlock").style.display = "none";
  document.getElementById("tempretureBlock").style.display = "none";
  document.getElementById("speedBlock").style.display = "none";
  document.getElementById("percentageBlock").style.display = "none";
  document.getElementById("dataBlock").style.display = "none";
  document.getElementById("weightBlock").style.display = "none";
  document.getElementById("BMIBlock").style.display = "none";
  document.getElementById("lengthBlock").style.display = "none";
  document.getElementById("heightBlock").style.display = "none";
  document.getElementById("sidebarRight").style.width = "350px";
  document.getElementById("main").style.marginRight = "350px";
  document.getElementById("header").style.marginRight = "350px";
}
//open tempreture converter in right sidebar
function tempretureconverter() {
  document.getElementById("sidebarRightHeading").innerHTML = "Tempreture";
  document.getElementById("tempretureBlock").style.display = "block";
  document.getElementById("scientificBlock").style.display = "none";
  document.getElementById("VolumeBlock").style.display = "none";
  document.getElementById("speedBlock").style.display = "none";
  document.getElementById("percentageBlock").style.display = "none";
  document.getElementById("dataBlock").style.display = "none";
  document.getElementById("weightBlock").style.display = "none";
  document.getElementById("BMIBlock").style.display = "none";
  document.getElementById("lengthBlock").style.display = "none";
  document.getElementById("heightBlock").style.display = "none";
  document.getElementById("sidebarRight").style.width = "350px";
  document.getElementById("main").style.marginRight = "350px";
  document.getElementById("header").style.marginRight = "350px";
}
// Height COnverter
function heightconverter() {
  document.getElementById("sidebarRightHeading").innerHTML = "Height";
  document.getElementById("tempretureBlock").style.display = "none";
  document.getElementById("scientificBlock").style.display = "none";
  document.getElementById("VolumeBlock").style.display = "none";
  document.getElementById("percentageBlock").style.display = "none";
  document.getElementById("speedBlock").style.display = "none";
  document.getElementById("dataBlock").style.display = "none";
  document.getElementById("lengthBlock").style.display = "none";
  document.getElementById("weightBlock").style.display = "none";
  document.getElementById("BMIBlock").style.display = "none";
  document.getElementById("heightBlock").style.display = "block";
  document.getElementById("sidebarRight").style.width = "350px";
  document.getElementById("main").style.marginRight = "350px";
  document.getElementById("header").style.marginRight = "350px";
}
//open weight converter in right sidebar
function weightconverter() {
  document.getElementById("sidebarRightHeading").innerHTML = "Weight";
  document.getElementById("weightBlock").style.display = "block";
  document.getElementById("scientificBlock").style.display = "none";
  document.getElementById("VolumeBlock").style.display = "none";
  document.getElementById("dataBlock").style.display = "none";
  document.getElementById("lengthBlock").style.display = "none";
  document.getElementById("speedBlock").style.display = "none";
  document.getElementById("tempretureBlock").style.display = "none";
  document.getElementById("percentageBlock").style.display = "none";
  document.getElementById("BMIBlock").style.display = "none";
  document.getElementById("heightBlock").style.display = "none";
  document.getElementById("sidebarRight").style.width = "350px";
  document.getElementById("main").style.marginRight = "350px";
  document.getElementById("header").style.marginRight = "350px";
}
// Speed Converter
function speedconverter() {
  document.getElementById("sidebarRightHeading").innerHTML = "Speed";
  document.getElementById("speedBlock").style.display = "block";
  document.getElementById("scientificBlock").style.display = "none";
  document.getElementById("VolumeBlock").style.display = "none";
  document.getElementById("dataBlock").style.display = "none";
  document.getElementById("weightBlock").style.display = "none";
  document.getElementById("lengthBlock").style.display = "none";
  document.getElementById("tempretureBlock").style.display = "none";
  document.getElementById("percentageBlock").style.display = "none";
  document.getElementById("BMIBlock").style.display = "none";
  document.getElementById("heightBlock").style.display = "none";
  document.getElementById("sidebarRight").style.width = "350px";
  document.getElementById("main").style.marginRight = "350px";
  document.getElementById("header").style.marginRight = "350px";
}
// Data converter
function dataconverter() {
  document.getElementById("sidebarRightHeading").innerHTML = "Data";
  document.getElementById("dataBlock").style.display = "block";
  document.getElementById("scientificBlock").style.display = "none";
  document.getElementById("VolumeBlock").style.display = "none";
  document.getElementById("speedBlock").style.display = "none";
  document.getElementById("weightBlock").style.display = "none";
  document.getElementById("lengthBlock").style.display = "none";
  document.getElementById("tempretureBlock").style.display = "none";
  document.getElementById("percentageBlock").style.display = "none";
  document.getElementById("BMIBlock").style.display = "none";
  document.getElementById("heightBlock").style.display = "none";
  document.getElementById("sidebarRight").style.width = "350px";
  document.getElementById("main").style.marginRight = "350px";
  document.getElementById("header").style.marginRight = "350px";
}
// Length converter
function lengthconverter() {
  document.getElementById("sidebarRightHeading").innerHTML = "Length";
  document.getElementById("lengthBlock").style.display = "block";
  document.getElementById("scientificBlock").style.display = "none";
  document.getElementById("VolumeBlock").style.display = "none";
  document.getElementById("dataBlock").style.display = "none";
  document.getElementById("weightBlock").style.display = "none";
  document.getElementById("speedBlock").style.display = "none";
  document.getElementById("tempretureBlock").style.display = "none";
  document.getElementById("percentageBlock").style.display = "none";
  document.getElementById("BMIBlock").style.display = "none";
  document.getElementById("heightBlock").style.display = "none";
  document.getElementById("sidebarRight").style.width = "350px";
  document.getElementById("main").style.marginRight = "350px";
  document.getElementById("header").style.marginRight = "350px";
}
//open BMI calculator in right sidebar
function BMIcalculator() {
  document.getElementById("sidebarRightHeading").innerHTML = "BMI calculator";
  document.getElementById("weightBlock").style.display = "none";
  document.getElementById("scientificBlock").style.display = "none";
  document.getElementById("dataBlock").style.display = "none";
  document.getElementById("VolumeBlock").style.display = "none";
  document.getElementById("speedBlock").style.display = "none";
  document.getElementById("tempretureBlock").style.display = "none";
  document.getElementById("percentageBlock").style.display = "none";
  document.getElementById("lengthBlock").style.display = "none";
  document.getElementById("heightBlock").style.display = "none";
  document.getElementById("BMIBlock").style.display = "block";
  document.getElementById("sidebarRight").style.width = "350px";
  document.getElementById("main").style.marginRight = "350px";
  document.getElementById("header").style.marginRight = "350px";
}
//percentage calculator
function percentagecalculator() {
  document.getElementById("sidebarRightHeading").innerHTML = "Percentage";
  document.getElementById("weightBlock").style.display = "none";
  document.getElementById("scientificBlock").style.display = "none";
  document.getElementById("VolumeBlock").style.display = "none";
  document.getElementById("tempretureBlock").style.display = "none";
  document.getElementById("dataBlock").style.display = "none";
  document.getElementById("BMIBlock").style.display = "none";
  document.getElementById("speedBlock").style.display = "none";
  document.getElementById("heightBlock").style.display = "none";
  document.getElementById("lengthBlock").style.display = "none";
  document.getElementById("percentageBlock").style.display = "block";
  document.getElementById("sidebarRight").style.width = "350px";
  document.getElementById("main").style.marginRight = "350px";
  document.getElementById("header").style.marginRight = "350px";
}
//close sidebar right
function sidebarRightClose() {
  document.getElementById("sidebarRight").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
  document.getElementById("header").style.marginRight = "0";
}
//to clear the calculator screen
function c(val) {
  document.getElementById("d").style.fontSize = "35px";
  document.getElementById("d").value = val;
}
//when any number or symbol is clicked
function v(val) {
  var len = document.getElementById("d").value.length;
  if (len > 11) {
    document.getElementById("d").style.fontSize = "30px";
  }
  if (len > 13) {
    document.getElementById("d").style.fontSize = "26px";
  }
  if (len > 15) {
    document.getElementById("d").style.fontSize = "23px";
  }
  if (len > 17) {
    document.getElementById("d").style.fontSize = "20px";
  }
  document.getElementById("d").value += val;
}
//backspace
function backspace() {
  var str = document.getElementById("d").value;
  if (
    str === "Infinity" ||
    str === "undefined" ||
    str === "Error" ||
    str === "NaN"
  ) {
    str = str.substr(0, str.length - str.length);
    document.getElementById("d").value = str;
  }
  str = str.substr(0, str.length - 1);
  document.getElementById("d").value = str;
  var len = document.getElementById("d").value.length;
  if (len < 18) {
    document.getElementById("d").style.fontSize = "23px";
  }
  if (len < 16) {
    document.getElementById("d").style.fontSize = "26px";
  }
  if (len < 14) {
    document.getElementById("d").style.fontSize = "30px";
  }
  if (len < 12) {
    document.getElementById("d").style.fontSize = "35px";
  }
  document.getElementById("d").value += val;
}
//when = is clicked
function e() {
  if (document.getElementById("d").value.length != " ") {
    try {
      c(eval(document.getElementById("d").value));
    } catch (e) {
      c("Error");
    }
  }
}
//square of a number
function sqr() {
  var val = document.getElementById("d").value;
  var result = val * val;
  c("");
  document.getElementById("d").value += result;
}
//cube of a number
function cube() {
  var val = document.getElementById("d").value;
  var result = val * val * val;
  c("");
  document.getElementById("d").value += result;
}
//square root of a number
function squrRoot() {
  var val = document.getElementById("d").value;
  var result = Math.sqrt(val);
  c("");
  document.getElementById("d").value += result;
}
//factorial of a number
function fact() {
  var val = document.getElementById("d").value;
  if (val < 150) {
    var result = 1;
    for (var i = val; i > 0; i--) {
      result *= i;
    }
    c("");
    document.getElementById("d").value += result;
  } else document.getElementById("d").value = "Infinity";
}
//power of a number
//INCOMPLETE YET
function power() {
  var val = document.getElementById("d").value;
}
//clear inputs
function clear(val) {
  document.getElementById("celsius").value = val;
  document.getElementById("kelvin").value = val;
  document.getElementById("fahrenheit").value = val;
  document.getElementById("cmInput").value = val;
  document.getElementById("scientificAnswer").value = val;
}
//Volume conversion
//volume converter
//litre to others
function litre2Others(valNum)
{
    valNum = parseFloat(valNum);
    document.getElementById("Mililitre").value=valNum*1000;
    document.getElementById("Decalitre").value=valNum*10;
    document.getElementById("Gallon").value = (valNum*0.264172).toFixed(2);
}
//mililitre to others
function mili2others(valNum)
{ 
 valNum = parseFloat(valNum);
    document.getElementById("Litre").value=(valNum*0.0001).toFixed(3);
    document.getElementById("Decalitre").value=valNum*0.01;
    document.getElementById("Gallon").value = (0.000264*valNum).toFixed(3);
   
}
//deca to others
function deca2others(valNum)
{
 valNum = parseFloat(valNum);
    document.getElementById("Litre").value=(valNum*0.1).toFixed(3);
    document.getElementById("Mililitre").value=valNum*100;
    document.getElementById("Gallon").value = (0.026417*valNum).toFixed(3);
   
}
//gallon to others
function gallon2others(valNum)
{
 valNum = parseFloat(valNum);
    document.getElementById("Litre").value=(valNum*3.785412).toFixed(3);
    document.getElementById("Decalitre").value=(valNum*37.854118).toFixed(3);
    document.getElementById("Mililitre").value = (3785.41178*valNum).toFixed(3);
   
}
//Tempreture Conversion code
function f2Others(valNum) {
  valNum = parseFloat(valNum);
  var len = document.getElementById("fahrenheit").value.length;
  var tempc = (valNum - 32) / 1.8;
  var c = tempc.toFixed(2);
  document.getElementById("celsius").value = c;
  var tempk = (valNum - 32) / 1.8 + 273.15;
  var k = tempk.toFixed(2);
  document.getElementById("kelvin").value = k;
  if (len < 1) clear("");
}
function c2Others(valNum) {
  valNum = parseFloat(valNum);
  var len = document.getElementById("celsius").value.length;
  document.getElementById("fahrenheit").value = valNum * 1.8 + 32;
  document.getElementById("kelvin").value = valNum + 273.15;
  if (len < 1) clear("");
}
function k2Others(valNum) {
  valNum = parseFloat(valNum);
  var len = document.getElementById("kelvin").value.length;
  var tempf = (valNum - 273.15) * 1.8 + 32;
  var f = tempf.toFixed(2);
  document.getElementById("fahrenheit").value = f;
  var tempc = valNum - 273.15;
  var c = tempc.toFixed(2);
  document.getElementById("celsius").value = c;
  if (len < 1) clear("");
}
// height conversion code
function heightInfeet(valNum) {
  var feetlen = document.getElementById("feets").value.length;
  var inchlen = document.getElementById("inches").value.length;
  var result = valNum / 0.032808;
  document.getElementById("cmInput").value = Math.round(result);
  if (feetlen < 1 && inchlen < 1) {
    clear("");
  }
}
function heightInInches(valNum) {
  var feetlen = document.getElementById("feets").value.length;
  var inchlen = document.getElementById("inches").value.length;
  var feet = document.getElementById("feets").value;
  feet = feet / 0.032808;
  var result = valNum / 0.39370;
  document.getElementById("cmInput").value =
    Math.round(result) + Math.round(feet);
  if (feetlen < 1 && inchlen < 1) {
    clear("");
  }
}
function heightInCm(valNum) {
  var len = document.getElementById("cmInput").value.length;
  var realFeet = valNum * 0.393700 / 12;
  var feet = Math.floor(realFeet);
  var inches = Math.round((realFeet - feet) * 12);
  document.getElementById("feets").value = feet;
  document.getElementById("inches").value = inches;
  if (len < 1) {
    var feetlen = (document.getElementById("feets").value = " ");
    var inchlen = (document.getElementById("inches").value = " ");
  }
}
//Length Conversion code
//Miles to others
function miles2Others(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("kilometers").value = (valNum / 0.62137).toFixed(2);
  document.getElementById("yards").value = valNum * 1760;
  document.getElementById("meters").value = Math.round(valNum / 0.00062137);
  document.getElementById("feet").value = valNum * 5280;
  document.getElementById("inch").value = valNum * 63360;
  document.getElementById("centimeters").value = Math.round(
    valNum / 0.0000062137
  );
}
//kms to others
function km2Others(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("miles").value = (valNum * 0.62137).toFixed(2);
  document.getElementById("yards").value = Math.round(valNum * 1093.6);
  document.getElementById("meters").value = valNum * 1000;
  document.getElementById("feet").value = Math.round(valNum * 3280.8);
  document.getElementById("inch").value = valNum * 39370;
  document.getElementById("centimeters").value = valNum * 100000;
}
//yards to others
function yards2Others(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("miles").value = (valNum * 0.00056818).toFixed(5);
  document.getElementById("kilometers").value = (valNum / 1093.6).toFixed(5);
  document.getElementById("meters").value = Math.round(valNum / 1.0936);
  document.getElementById("feet").value = Math.round(valNum * 3280.8);
  document.getElementById("inch").value = valNum * 36;
  document.getElementById("centimeters").value = valNum / 0.010936;
}
//meters to others
function meters2Others(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("miles").value = (valNum * 0.00062137).toFixed(5);
  document.getElementById("kilometers").value = (valNum / 1000).toFixed(5);
  document.getElementById("yards").value = (valNum * 1.0936).toFixed(2);
  document.getElementById("feet").value = (valNum * 3.2808).toFixed(2);
  document.getElementById("inch").value = (valNum * 39.370).toFixed(2);
  document.getElementById("centimeters").value = Math.round(valNum / 0.01);
}
// feets to others
function feets2Others(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("miles").value = (valNum * 0.00018939).toFixed(5);
  document.getElementById("kilometers").value = (valNum / 3280.8).toFixed(5);
  document.getElementById("yards").value = (valNum * 0.33333).toFixed(2);
  document.getElementById("meters").value = (valNum / 3.2808).toFixed(2);
  document.getElementById("inch").value = (valNum * 12).toFixed(2);
  document.getElementById("centimeters").value = Math.round(valNum / 0.032808);
}
// inches to others
function inches2Others(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("miles").value = (valNum * 0.083333).toFixed(6);
  document.getElementById("kilometers").value = (valNum / 39370).toFixed(6);
  document.getElementById("yards").value = (valNum * 0.027778).toFixed(3);
  document.getElementById("meters").value = (valNum / 39.370).toFixed(3);
  document.getElementById("feet").value = (valNum * 0.083333).toFixed(3);
  document.getElementById("centimeters").value = (valNum / 0.39370).toFixed(2);
}
//cms to others
function cm2Others(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("miles").value = (valNum * 0.0000062137).toFixed(6);
  document.getElementById("kilometers").value = (valNum / 100000).toFixed(6);
  document.getElementById("yards").value = (valNum * 0.010936).toFixed(3);
  document.getElementById("meters").value = (valNum / 100).toFixed(3);
  document.getElementById("feet").value = (valNum * 0.032808).toFixed(3);
  document.getElementById("inch").value = (valNum * 0.39370).toFixed(2);
}
//weight conversion code
//pounds to others
function p2Others(valNum) {
  valNum = parseFloat(valNum);
  var tempkg = valNum / 2.2046;
  var kg = tempkg.toFixed(2);
  document.getElementById("kilograms").value = kg;
  document.getElementById("ounces").value = valNum * 16;
  var tempg = valNum / 0.0022046;
  var g = Math.round(tempg);
  document.getElementById("grams").value = g;
  var tempstone = valNum * 0.071429;
  var stone = tempstone.toFixed(3);
  document.getElementById("stones").value = stone;
}
//ounces to others
function o2Others(valNum) {
  valNum = parseFloat(valNum);
  var temppounds = valNum * 0.0625;
  var pounds = temppounds.toFixed(2);
  document.getElementById("pounds").value = pounds;
  var tempkg = valNum / 35.274;
  var kg = tempkg.toFixed(2);
  document.getElementById("kilograms").value = kg;
  var tempg = valNum / 0.035274;
  var g = Math.round(tempg);
  document.getElementById("grams").value = g;
  var tempstone = valNum * 0.0044643;
  var stone = tempstone.toFixed(3);
  document.getElementById("stones").value = stone;
}
//kilograms to others
function KG2Others(valNum) {
  valNum = parseFloat(valNum);
  var temppounds = valNum * 2.2046;
  var pounds = temppounds.toFixed(2);
  document.getElementById("pounds").value = pounds;
  var tempounces = valNum * 35.274;
  var ounces = tempounces.toFixed(3);
  document.getElementById("ounces").value = ounces;
  document.getElementById("grams").value = valNum * 1000;
  var tempstone = valNum * 0.1574;
  var stone = tempstone.toFixed(3);
  document.getElementById("stones").value = stone;
}
//grams to others
function g2Others(valNum) {
  valNum = parseFloat(valNum);
  var temppounds = valNum * 0.0022046;
  var pounds = temppounds.toFixed(2);
  document.getElementById("pounds").value = pounds;
  var tempounces = valNum * 0.035274;
  var ounces = tempounces.toFixed(3);
  document.getElementById("ounces").value = ounces;
  document.getElementById("kilograms").value = valNum / 1000;
  var tempstone = valNum * 0.00015747;
  var stone = tempstone.toFixed(3);
  document.getElementById("stones").value = stone;
}
//stone to others
function s2Others(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("pounds").value = valNum * 14;
  document.getElementById("ounces").value = valNum * 224;
  var tempkg = valNum / 0.15747;
  var kg = tempkg.toFixed(2);
  document.getElementById("kilograms").value = kg;
  var tempg = valNum / 0.00015747;
  var g = Math.round(tempg);
  document.getElementById("grams").value = g;
}
//BMI caculation code
function calculateBMI() {
  var w = document.getElementById("weight").value;
  var h = document.getElementById("height").value;
  var result = w / (h / 100 * h / 100);
  var BMI = result.toFixed(1);
  document.getElementById("resultOfBMI").innerHTML = "Your BMI is " + BMI;
  if (BMI < 16)
    document.getElementById("bodyType").innerHTML = "Severe Thinness";
  if (BMI > 15 && BMI < 18)
    document.getElementById("bodyType").innerHTML = "Moderate Thinness";
  if (BMI > 18 && BMI < 18.6)
    document.getElementById("bodyType").innerHTML = "Mild Thinness";
  if (BMI > 18.5 && BMI < 26)
    document.getElementById("bodyType").innerHTML = "Normal";
  if (BMI > 25 && BMI < 31)
    document.getElementById("bodyType").innerHTML = "Over-weight";
  if (BMI > 30 && BMI < 36)
    document.getElementById("bodyType").innerHTML = "Obesity (class 1)";
  if (BMI > 34 && BMI < 41)
    document.getElementById("bodyType").innerHTML = "Obesity (class 2)";
  if (BMI > 40)
    document.getElementById("bodyType").innerHTML = "Morbid obesity";
}
//percentage calculator
function calculatePercentage() {
  var whatPercent = document.getElementById("whatPercent").value;
  var of = document.getElementById("of").value;
  var result = of * whatPercent / 100;
  document.getElementById("answer").value = result.toFixed(2);
}
function percentageCalculate() {
  var whatPercent = document.getElementById("_dash").value;
  var of = document.getElementById("percentOf").value;
  var result = whatPercent / of * 100;
  document.getElementById("Answer").value = result.toFixed(2);
}
// Speed Conversion code
function mph2Others(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("kph").value = (valNum * 1.609344).toFixed(2);
  document.getElementById("knots").value = (valNum / 1.150779).toFixed(2);
  document.getElementById("mach").value = (valNum / 761.207).toFixed(4);
}
function kph2Others(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("mph").value = (valNum / 1.609344).toFixed(2);
  document.getElementById("knots").value = (valNum / 1.852).toFixed(2);
  document.getElementById("mach").value = (valNum / 1225.044).toFixed(5);
}
function knots2Others(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("mph").value = (valNum * 1.150779).toFixed(2);
  document.getElementById("kph").value = (valNum * 1.852).toFixed(2);
  document.getElementById("mach").value = (valNum / 661.4708).toFixed(4);
}
function mach2Others(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("mph").value = Math.round(valNum * 761.207);
  document.getElementById("kph").value = Math.round(valNum * 1225.044);
  document.getElementById("knots").value = Math.round(valNum * 661.4708);
}
// Data conversion code
function bytes2Others(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("kb").value = valNum / 1024;
  document.getElementById("mb").value = valNum / 1024 / 1024;
  document.getElementById("gb").value = valNum / 1024 / 1024 / 1024;
}
function kb2Others(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("bytes").value = valNum * 1024;
  document.getElementById("mb").value = valNum / 1024;
  document.getElementById("gb").value = valNum / 1024 / 1024;
}
function mb2Others(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("bytes").value = valNum * 1024 * 1024;
  document.getElementById("kb").value = valNum * 1024;
  document.getElementById("gb").value = valNum / 1024;
}
function gb2Others(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("bytes").value = valNum * 1024 * 1024 * 1024;
  document.getElementById("kb").value = valNum * 1024 * 1024;
  document.getElementById("mb").value = valNum * 1024;
}
// scientfic calculator 
function sinC() {
  var val = document.getElementById("scientificInput").value;
  document.getElementById("scientificAnswer").value = Math.sin(val);
}
function cosC() {
  var val = document.getElementById("scientificInput").value;
  document.getElementById("scientificAnswer").value = Math.cos(val);
}
function tanC() {
  var val = document.getElementById("scientificInput").value;
  document.getElementById("scientificAnswer").value = Math.tan(val);
}
function cscC() {
  var val = document.getElementById("scientificInput").value;
  document.getElementById("scientificAnswer").value = 1/Math.sin(val);
}
function secC() {
  var val = document.getElementById("scientificInput").value;
  document.getElementById("scientificAnswer").value = 1/Math.cos(val);
}
function cotC() {
  var val = document.getElementById("scientificInput").value;
  document.getElementById("scientificAnswer").value = 1/Math.tan(val);
}