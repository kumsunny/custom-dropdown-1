import { Component, VERSION } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private list: ListService) {}
  name1 = 'Angular ' + VERSION.major;
  countryList = this.list.getCountries();
  animalList = this.list.getAnimals();
}
