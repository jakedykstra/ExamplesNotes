import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
  // weather value in weather array is passed in
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    // we use destructure to tell it to find the object coord and in there create variables for lon/lat based on the lon/lat values in there
    const { lon, lat } = cityData.city.coord;

    // in our city data we pass the props data to chart and google map to render
    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="K" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    );
  }
  //currently we have all of our city weathers in an array. Here we map over them and call the method renderWeather for each value we receive. 
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  // whenever we have a key and a value that are identical we can just combine, this is the same as {weather:weather}
  return { weather };
}

// connecting weather state from redux to Weatherlist as this.props.weather
export default connect(mapStateToProps)(WeatherList);
