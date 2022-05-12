import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoesComponent } from './shoes/shoes.component';
import { ShopComponent } from './shop.component';
import { SocksComponent } from './socks/socks.component';

const routes: Routes = [
  {
    path:'', component: ShopComponent,
    children:[
      { path:'shoes', component: ShoesComponent},
      { path:':socks', component: SocksComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
