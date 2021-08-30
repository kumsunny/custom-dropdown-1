import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <list-population [data]="heroList"></list-population>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  heroList = [
    {
      name: 'Salman',
      id: 1
    },
    {
      name: 'Shahrukh',
      id: 2
    },
    {
      name: 'Aamir',
      id: 3
    }
  ];
}
