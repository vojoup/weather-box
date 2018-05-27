import {Component, OnInit} from '@angular/core';
import {WeatherServiceService} from '../services/weather-service.service';

@Component({
  selector: 'app-precipation',
  templateUrl: './precipation.component.html',
  styleUrls: ['./precipation.component.css']
})
export class PrecipationComponent implements OnInit {

  forecasts: Array<any> = [];

  constructor(private _weather: WeatherServiceService) {
    this._weather.get48HoursForecast().subscribe(forecast => {
      this.forecasts = forecast.data;
      console.log(forecast.data);
    });
  }

  ngOnInit() {
  }

}
