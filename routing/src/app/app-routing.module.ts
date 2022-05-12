
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'home', component: HomeComponent},
  { path:'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)},
  { path:'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule)},
  { path:'**', component: HomeComponent} //"/"後路徑隨便輸入將會導向home page，通常導向404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
