import { Component, OnInit } from '@angular/core';
import {GetJsonService} from '../get-json.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{
  public eyewearList: any;

constructor(public GetJson: GetJsonService, public router: Router){

}
  ngOnInit() {
    this.GetJson.getJSon().subscribe(result => {
      this.eyewearList = result.eyewear;
      console.log(this.eyewearList);
    });
  }
onClick(eyewearId){

 return this.router.navigate(['home/eyewear/' + eyewearId]);
}
}
  

