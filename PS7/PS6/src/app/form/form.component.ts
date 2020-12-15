import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  lon: number;
  lat: number;
  result = [];
  constructor(private weather: WeatherService) { }
  
  ngOnInit(): void {
  }
  
  retrieveWeather(lat, lon) {
    this.lon = lon;
    this.lat = lat;
    if (lat != null && lon != null) {
      this.weather.getWeather(this.lat, this.lon).subscribe(
        response => {
          this.result.push(response);
          this.result.push(response);
          console.log(response);
        }
      )
    } 
    else {
      throw new Error("InvalidArgumentException");
    }
  }
}
