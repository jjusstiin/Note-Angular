import { Component } from '@angular/core';
import { stationList } from './station-list.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template:`<div>
    <h1>Hello</h1>
    <ng-content select=".title"></ng-content>
  </div>`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  list = stationList; 
  newStation: string ='';
  newDestination: string ='';
  addStation(event: Event){ //需要宣告func接收到的屬性
    console.log(event);
    
    if(this.newStation.trim() !== '' && this.newDestination.trim() !== ''){
      const newAddStation = {
        "Station": this.newStation,
        "Destination": this.newDestination,
        "UpdateTime": Date.now().toString()
      }
      this.list.push(newAddStation);
      this.newStation = '';
      this.newDestination = '';
    }else{
      console.log('Incomplete information!');
    }
  }
}
