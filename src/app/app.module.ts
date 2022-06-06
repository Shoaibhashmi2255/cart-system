import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Mainportal/header/header.component';
import { ProductsComponent } from './Mainportal/products/products.component';
import { ViewCartComponent } from './Mainportal/view-cart/view-cart.component';
import { HomeComponent } from './Mainportal/home/home.component';
import { FooterComponent } from './Mainportal/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ViewCartComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
