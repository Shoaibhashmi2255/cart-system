import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './Mainportal/footer/footer.component';
import { HeaderComponent } from './Mainportal/header/header.component';
import { HomeComponent } from './Mainportal/home/home.component';
import { ProductsComponent } from './Mainportal/products/products.component';
import { ViewCartComponent } from './Mainportal/view-cart/view-cart.component';

const routes: Routes = [
  {path:'header' , component:HeaderComponent},
  {path:'products' , component:ProductsComponent},
  {path:'view-cart' , component:ViewCartComponent},
  {path:'footer' , component:FooterComponent},
  {path:'home' , component:HomeComponent},



]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
