import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CurrentWeatherComponent} from './current-weather/current-weather.component';
import {WeatherServiceService} from './services/weather-service.service';
import {HttpClientModule} from '@angular/common/http';
import { WeatherIconComponent } from './current-weather/weather-icon/weather-icon.component';
import { WeatherDetailsComponent } from './current-weather/weather-details/weather-details.component';
import { PrecipationComponent } from './precipation/precipation.component';
import { DatePipe } from './pipes/date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    WeatherIconComponent,
    WeatherDetailsComponent,
    PrecipationComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
