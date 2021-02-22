var calcCylinder = {
  PI: 3.14,

  getVolume: function (radius, height) {
    var volumeOfCylinder = (calcCylinder.PI * radius * radius * height);
    return volumeOfCylinder;
  },

  getArea: function (radius, height) {
    var areaOfCylinder = (2 * calcCylinder.PI * radius * (radius + height));
    return areaOfCylinder;
  }
};

var radiusOfCylinder = 0;

var heightOfCylinder = 0;

var btn = document.querySelector("#btn-calc");

var btnClickHandler = function () {
  radiusOfCylinder = document.querySelector("#radius").value;
  heightOfCylinder = document.querySelector("#height").value;
  var volume = calcCylinder.getVolume(radiusOfCylinder, heightOfCylinder);
  var area = calcCylinder.getArea(radiusOfCylinder, heightOfCylinder);
  var spanVolume = document.querySelector("#volume");
  var spanArea = document.querySelector("#area");
  spanVolume.textContent = volume;
  spanArea.textContent = area;
  document.querySelector(".result").style.display = "block";
};

btn.addEventListener("click", btnClickHandler);