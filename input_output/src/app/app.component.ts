import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Parent Component';
  currentBeverage: string = "coffee";
  newThing?: string;
  beverage = ['milk', 'tea', 'coffee', 'juice'];

  addBeverage(newBeverage: string){
    this.newThing = newBeverage;
    this.beverage.push(newBeverage);
  }
}
