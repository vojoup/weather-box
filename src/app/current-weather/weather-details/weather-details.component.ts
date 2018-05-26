import {Component, Input, OnInit} from '@angular/core';
import {WeatherInterface} from '../../models/weather.interface';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  @Input() weatherInfo: WeatherInterface;

  constructor() {
  }

  ngOnInit() {
  }

}
