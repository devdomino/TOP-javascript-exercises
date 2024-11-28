const convertToCelsius = function(fDegrees) {
const sym = "°C";
  let degrees = 0;
degrees = Number(fDegrees);
// x °F ≘ (x − 32) × ⁠5 / 9 ⁠ °C
let formula = 0;
formula = (degrees - 32) * 5/9;
return Number(formula.toFixed(1));
};

const convertToFahrenheit = function(cDegrees) {
// °C ≘ (x × 9 /5⁠ + 32) °F
let degrees = 0;
degrees = Number(cDegrees);
let formula = 0;
formula = (degrees * 9/5 + 32);
return Number(formula.toFixed(1));

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
