import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-socks',
  templateUrl: './socks.component.html',
  styleUrls: ['./socks.component.scss']
})
export class SocksComponent implements OnInit {

  id!:string;
  num!:number;
  subscribe!:Subscription;

  constructor(
    private routerPar: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routerPar.params
      .subscribe(par=>{
        this.id = par['socks'];
        this.num = parseInt(par['socks']);
      })

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscribe.unsubscribe();
  }

}
