import {Component, Input, OnInit} from '@angular/core';
import {WeatherServiceService} from '../services/weather-service.service';
import {WeatherInterface} from '../models/weather.interface';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  @Input() niceWeather: WeatherInterface;
  @Input() city: {name: string, code: number};

  constructor() {
  }

  ngOnInit() {
  }

}
