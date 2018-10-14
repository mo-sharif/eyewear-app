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
  public id: string = this.route.snapshot.paramMap.get('id');
  public sideImg: string
  public frontImg: string;
  public price: number;
  public desc: string;
  public brand: string;
  public name: string;

  constructor(public GetJson: GetJsonService,
     public router: Router, 
     public route: ActivatedRoute){
 
  }
    async ngOnInit() {

    await this.GetJson.getJSon().subscribe(result => {
        
        this.eyewearList = result.eyewear;
        this.selectedEyewear = result.eyewear[this.id],
        this.frontImg = result.eyewear[this.id].images.frontal,
        this.sideImg = result.eyewear[this.id].images.side,
        this.price = result.eyewear[this.id].price,
        this.desc = result.eyewear[this.id].description,
        this.brand = result.eyewear[this.id].brand;
        this.name = result.eyewear[this.id].name;

        //this.selectedEyewear = result.eyewear[this.id];

      });

     
       
    }
    
  onClick(eyewearId){
  
    return this.router.navigate(['/eyewear', { id: eyewearId }]);
     //this.router.navigate(['/home/eyewear', eyewearId])
  }
}
