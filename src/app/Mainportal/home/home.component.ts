import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/sharedpotal/services/dataservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  MydataArray:any = [];

  constructor(
    private _Dataservice:DataserviceService,
    private _Router:Router

  ) { }

  ngOnInit(): void {
    this.getdatafrommycomponent();

  }
  getdatafrommycomponent () {
    this.MydataArray = this._Dataservice.GetData();
    console.log(this.MydataArray);
    
  }
  Gotoviewproduct(id:void){
    this._Router.navigate(['view-cart']);
    console.log('Gotoviewproduct');
  }

}
