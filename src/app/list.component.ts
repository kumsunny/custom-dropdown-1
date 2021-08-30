import { Component, Input, OnInit } from '@angular/core';
import { ListService } from './list.service';
import './list.component.scss';
@Component({
  selector: 'list-population',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListPopulation implements OnInit {
  //let myList = []
  constructor(private list: ListService) {}
  @Input() data;
  tempList: any;
  showList = false;
  highlightItem = false;
  inputText: any;
  count = -1;
  ngOnInit(): void {
    this.tempList = JSON.parse(JSON.stringify(this.data));
    console.log('data', this.data);
  }
  selectList(ind: number) {
    console.log('index', ind);
    this.inputText = this.data[ind].name;
    this.showList = false;
  }
  focusInput() {
    this.showList = true;
  }
  blurInput() {
    this.showList = false;
  }
  keyPress(event: KeyboardEvent) {
    console.log(
      'e',
      event.code,
      document.getElementById('list-div').scrollHeight
    );
    document.getElementById('list-div').scrollTop =
      document.getElementById('list-div').scrollTop + 10;
    this.data.map(el => (el.class = false));
    if (this.count == this.data.length) {
      console.log('cccc ', this.count);
      this.count = 0;
      this.data[this.count].class = true;
      document.getElementById('list-div').scrollTop = 0;
      return;
    }

    if (event.key == 'ArrowDown') {
      this.count = this.count + 1;
      if (this.count < this.data.length) {
        this.data[this.count].class = true;
        console.log('count', this.count, this.data.length);
      } else {
        this.count = 0;
        this.data[this.count].class = true;
      }
    } else if (event.key == 'ArrowUp') {
      if (this.count > 0) {
        this.count = this.count - 1;
      } else {
        this.count = this.data.length - 1;
      }
      this.data[this.count].class = true;
    } else if (event.key == 'Enter') {
      console.log('enter', this.count);
      this.inputText = this.data[this.count].name;
      this.showList = false;
      this.count = -1;
    }
  }
  filterData() {
    let temp = this.tempList.filter(
      el => el.name.toLowerCase().indexOf(this.inputText.toLowerCase()) == 0
    );
    this.data = temp;
    if (temp.length > 0) {
      this.showList = true;
    }
    /* if (this.inputText.length == 0) {
      this.showList = false;
    } */
  }
}
