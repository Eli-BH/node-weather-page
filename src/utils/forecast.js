const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=3e7bf16b5caccd96958db05fee8b9abc&units=f&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        " It is currently " +
          body.current.temperature +
          " degress out. There is a " +
          body.current.precip +
          "% chance of rain and the forecast is " +
          body.current.weather_descriptions[0] +
          "."
      );
    }
  });
};

module.exports = forecast;
