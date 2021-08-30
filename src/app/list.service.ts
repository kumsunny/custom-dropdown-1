import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  getCountries() {
    return [
      {
        name: 'India',
        id: 1
      },
      {
        name: 'Indonesia',
        id: 2
      },
      {
        name: 'Paki',
        id: 3
      },
      {
        name: 'Nepal',
        id: 4
      },
      {
        name: 'Punjab',
        id: 3
      },
      {
        name: 'Patna',
        id: 3
      }
    ];
  }
  getAnimals() {
    return [
      {
        name: 'Lion',
        id: 1
      },
      {
        name: 'Tiger',
        id: 2
      },
      {
        name: 'Elephant',
        id: 3
      }
    ];
  }
}
