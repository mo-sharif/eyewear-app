import { Component, OnInit } from '@angular/core';
import {GetJsonService} from '../get-json.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-eyewear',
  templateUrl: './eyewear.page.html',
  styleUrls: ['./eyewear.page.scss'],
})
export class EyewearPage implements OnInit {
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
  
    //this.router.navigate(['/eyewear', { id: eyewearId }]);
     this.router.navigate(['/home/eyewear', '2'])
  }
}
