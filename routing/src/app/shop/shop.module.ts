import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShoesComponent } from './shoes/shoes.component';
import { SocksComponent } from './socks/socks.component';
import { ShopComponent } from './shop.component';


@NgModule({
  declarations: [
  ShopComponent,
  SocksComponent,
  ShoesComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
