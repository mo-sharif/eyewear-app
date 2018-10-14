import { Component, OnInit } from '@angular/core';
import {GetJsonService} from '../get-json.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eyewear',
  templateUrl: './eyewear.page.html',
  styleUrls: ['./eyewear.page.scss'],
})
export class EyewearPage implements OnInit {

  public eyewearList: any;
  public selectedEyewear:string;
  public id: any = this.route.snapshot.paramMap.get('id');

  constructor(public GetJson: GetJsonService,
     public router: Router, 
     public route: ActivatedRoute){
 
  }
    ngOnInit() {

      this.GetJson.getJSon().subscribe(result => {
        this.eyewearList = result.eyewear;
        this.selectedEyewear = result.eyewear[this.id];
        console.log(this.eyewearList);
        console.log(this.selectedEyewear);
      });
    }
    
  onClick(eyewearId){
  
    return this.router.navigate(['/eyewear', { id: eyewearId }]);
     //this.router.navigate(['/home/eyewear', eyewearId])
  }
}
