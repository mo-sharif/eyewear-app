import { Component } from '@angular/core';
import * as data from '../../assets/eyewear.json';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public eyewearList = (<any>data);

constructor(){
 
}


  
}
