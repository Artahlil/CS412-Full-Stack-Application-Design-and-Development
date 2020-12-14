import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  lat: number;
  lon: number;
  result = [];

  constructor(private weather: WeatherService) { }

  ngOnInit(): void {
  }

  validateAndGetWeather(lat, lon) {
    this.lat = lat;
    this.lon = lon;
    if (lat != null && lon != null) {
      this.weather.getWeather(this.lat, this.lon).subscribe(
        response => {
          console.log(response);
          // duplicate the result
          this.result.push(response);
          this.result.push(response)
        }
      )
    } else {
      throw new Error("InvalidArgumentException");
    }
  }
}
