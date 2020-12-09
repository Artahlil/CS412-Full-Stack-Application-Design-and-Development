import { Component } from '@angular/core';
import { mock } from './Mock';
import { Data } from './Data';
import { fetchOptions } from '/fetchConfig'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6';
  mock = Data[] = mock;
  data = Data;
  selectedCity = string;
  fetchData = false;
  all = false;
  clicked = false;

  constructor() { 
    this.getInfo();
  }
  getInfo():void {
    for (const city of Mock) {
      const newCity: Data = {
        city: city.city,
        temp_f: city.temp_f,
        temp_c: city.temp_c,
        feelslike_c: city.feelslike_c,
        feelslike_f: city.feelslike_f
      };
      this.mock.push(newCity);
    } 
    this.selectedCity = null;
  }
 
  raw(): void {
    this.all = !this.all;
  }
  
  showData(): void {
    this.fetchData = !this.fetchData;
  }
  
  setSelectedCity(data = Data;): void {
    this.selectedCity = data;
    console.log(`${data.city}`);
  }
  
  click() {
    const url = fetchOptions.url+this.selectedCity.toString()
    const res = Mock[url];
    if (res.length >= 1) {
      const data = res[res.length - 1];
      this.selectedCity = {
        city: data.city,
        temp_f: data.temp_f,
        temp_c: data.temp_c,
        feelslike_c: data.feelslike_c,
        feelslike_f: data.feelslike_f
      };
    } else {
      this.selectedCity = {
        console.log("empty")
      };
    }
    this.clicked = true;
  }
  convert(file: Data): string {
    return JSON.stringify(file, null, 2);;
  }


}
