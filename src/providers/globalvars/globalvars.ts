import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarsProvider {

  public loginState:boolean = false;
  
  constructor(public http: HttpClient) {
    console.log('GlobalvarsProvider Instantiated!!');
  }

}
