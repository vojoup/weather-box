/**
 * Type for weather
 * @param cityName [string]
 * @param temperature [number] - in Celsius
 * @param windSpeed [number] - in m/s
 * @param description [string]
 * @param sunrise [string]
 * @param sunset [string]
 * @param uv [number]
 * @param pressure [number] - in mb
 * @param precip [number] - Precipitation in last hour in mm
 * @param snow [number] - Snowfall in last hour in mm
 * @param visibility [number] - In meters
 * */
export interface WeatherInterface {
  cityName: string; // For which city
  temperature: number; // In Celsius
  windSpeed: number; // In m/s
  description: string; // Brief description of weather
  sunrise: string; // Time of sunrise
  sunset: string; // Time of sunset
  uv: number; // UV index
  pressure: number; // In mb
  precip?: number; // Precipitation in last hour in mm
  snow?: number; // Snowfall in last hour in mm
  visibility?: number; // In meters
  icon: string;
  forecast48: Array<any>;
}
