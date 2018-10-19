import { Component, OnInit } from '@angular/core';
import {EyewearService} from '../services/eyewear.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{
  public eyewearList: any;

constructor(public eyewearService: EyewearService, public router: Router){

}
  ngOnInit() {
    this.eyewearService.getEyewear().subscribe(res => {
      this.eyewearList = res['eyewear'];
    });

  }
onClick(eyewearId){
 this.router.navigate(['/eyewear/' + eyewearId]);
}
}
  

