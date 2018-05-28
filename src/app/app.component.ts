import {Component} from '@angular/core';
import {WeatherServiceService} from './services/weather-service.service';
import {WeatherInterface} from './models/weather.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  city: { name: string, code: number } = {name: 'Prague', code: 3067696};
  currentWeather;
  loading: boolean;
  niceWeather: WeatherInterface;
  tooManyCalls: boolean;

  constructor(private _weather: WeatherServiceService) {
    this.loading = true;
    this._weather.get48HoursForecast().subscribe(data => {
      this.currentWeather = data.data[0];
      console.log(this.currentWeather);
      this.niceWeather = {
        cityName: this.city.name,
        temperature: this.currentWeather.temp,
        windSpeed: this.currentWeather.wind_spd,
        description: this.currentWeather.weather.description,
        sunrise: this.currentWeather.sunrise,
        sunset: this.currentWeather.sunset,
        uv: this.currentWeather.uv,
        pressure: this.currentWeather.pressure,
        precip: this.currentWeather.precip ? this.currentWeather.precip : 0,
        snow: this.currentWeather.snow ? this.currentWeather.snow : 0,
        visibility: this.currentWeather.visibility ? this.currentWeather.visibility : 0,
        icon: this.currentWeather.weather.icon,
        forecast48: data.data
      };
      console.log(this.niceWeather.forecast48);
      this.loading = false;
      this.tooManyCalls = false;
    }, err => this.tooManyCalls = true);
  }
}
