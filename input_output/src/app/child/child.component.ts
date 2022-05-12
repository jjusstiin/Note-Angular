import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() beverage: string = "tea";
  @Output() newBeverageEvent = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  addNewBeverage(value: string){
    this.newBeverageEvent.emit(value);
  }

}
