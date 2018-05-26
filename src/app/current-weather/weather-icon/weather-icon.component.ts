import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.css']
})
export class WeatherIconComponent implements OnInit {

  @Input() iconSrc: string;
  @Input() description: string;
  assetsPath = '../../assets/icons/';

  constructor() {
  }

  ngOnInit() {
  }

}
