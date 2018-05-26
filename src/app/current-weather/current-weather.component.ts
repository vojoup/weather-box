import {Component, OnInit} from '@angular/core';
import {WeatherServiceService} from '../services/weather-service.service';
import {WeatherInterface} from '../models/weather.interface';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  city: { name: string, code: number } = {name: 'Prague', code: 3067696};
  currentWeather;
  loading: boolean;
  niceWeather: WeatherInterface;

  constructor(private _weather: WeatherServiceService) {
    this.loading = true;
    this._weather.getCurrentWeatherForCity().subscribe(data => {
      this.currentWeather = data.data[0];
      this.niceWeather = {
        cityName: this.city.name,
        temperature: this.currentWeather.temp,
        windSpeed: this.currentWeather.wind_speed,
        description: this.currentWeather.weather.description,
        sunrise: this.currentWeather.sunrise,
        sunset: this.currentWeather.sunset,
        uv: this.currentWeather.uv,
        pressure: this.currentWeather.pressure,
        precip: this.currentWeather.precip ? this.currentWeather.precip : 0,
        snow: this.currentWeather.snow ? this.currentWeather.snow : 0,
        visibility: this.currentWeather.visibility ? this.currentWeather.visibility : 0,
      };
      this.loading = false;
    });
  }

  ngOnInit() {
  }

}
