import { Injectable } from '@angular/core';
import User from '../JSONdata/User.json';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  DummyData = User;

  constructor() { }
  GetData(){
    return this.DummyData;
  }
}
