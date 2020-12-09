import { Component } from '@angular/core';
import { mock } from './Mock';
import { Data } from './Data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6';
  mock = Data[] = mock;
  data = Data;
  selectedCity = Data;
  fetchData = false;
  all = false;

  constructor() { }

  setSelectedCity(data = Data;): void {
    this.selectedCity = data;
    console.log(`${data.city}`);
  }
  convert(file: Data): string {
    const j = JSON.stringify(file, null, 2);
    return j;
  }


}
