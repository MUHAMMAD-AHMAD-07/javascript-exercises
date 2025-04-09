const convertToCelsius = function(temperature) {
  let tempInCelsius = 5/9 * (temperature-32);
  return parseFloat(tempInCelsius.toFixed(1)); //toFixed return the string.
};

const convertToFahrenheit = function(temperature) {
  let tempInFarenheit = 9/5 * temperature+32;
  return parseFloat(tempInFarenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
