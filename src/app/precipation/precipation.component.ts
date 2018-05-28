import {Component, OnInit} from '@angular/core';
import {WeatherServiceService} from '../services/weather-service.service';

@Component({
  selector: 'app-precipation',
  templateUrl: './precipation.component.html',
  styleUrls: ['./precipation.component.css']
})
export class PrecipationComponent implements OnInit {

  forecasts: Array<any> = [];
  index = 1;
  tooMuchCalls: boolean;

  constructor(private _weather: WeatherServiceService) {
    this._weather.get48HoursForecast().subscribe(forecast => {
      if (forecast.data) {
        this.tooMuchCalls = false;
        this.forecasts = forecast.data;
        this.processForecasts();
        console.log(forecast.data);
      }
    }, err => this.tooMuchCalls = true);
  }

  processForecasts(): void {
    let idx = 0;

    this.forecasts.forEach((forecast) => {
      forecast.temperatureColor = '';
      forecast.textColor = 'white';
      forecast.index = ++idx;

      if (forecast.temp <= 20) {
        forecast.temperatureColor = 'blue';
      } else if (forecast.temp > 20 && forecast.temp < 23) {
        forecast.temperatureColor = 'yellow';
        forecast.textColor = 'black';
      } else if (forecast.temp >= 23) {
        forecast.temperatureColor = 'red';
        forecast.textColor = 'black';
      } else if (forecast.temp <= 17) {
        forecast.temperatureColor = '#4c6cff';
        forecast.textColor = 'black';
      }
    });
  }

  getIndex(): number {
    return this.index;
  }

  showPrev() {
    if (this.index > 1) {
      this.index--;
    } else if (this.index === 1) {
      this.index = this.forecasts.length;
    }
  }

  showNext() {
    if (this.index < this.forecasts.length) {
      this.index++;
    } else if (this.index === this.forecasts.length) {
      this.index = 1;
    }
  }

  ngOnInit() {
  }

}
