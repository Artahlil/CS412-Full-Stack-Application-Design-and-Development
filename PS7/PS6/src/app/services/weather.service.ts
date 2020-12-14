
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {weatherConfigs as config} from '../config/weatherConfigs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  getWeather(lat, lon) {
    let url = `http://api.weatherunlocked.com/api/current/${lat},${lon}?app_id=${config.app_id}app_key=${config.app_key}`;
    return this.http.get(url);
  }

  constructor(private http: HttpClient) { }
}
