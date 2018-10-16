import { Component, OnInit } from '@angular/core';
import {GetJsonService} from '../services/get-json.service';
import {PostService} from '../services/post.service';
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
  public sizes: [''];

  constructor(public GetJson: GetJsonService,
     public router: Router, 
     public route: ActivatedRoute,
     public postService: PostService){
 
  }
    async ngOnInit() {

     return this.GetJson.getJSon().subscribe(result => {
        
        this.eyewearList = result.eyewear;
        this.selectedEyewear = result.eyewear[this.id],
        this.frontImg = result.eyewear[this.id].images.frontal,
        this.sideImg = result.eyewear[this.id].images.side,
        this.price = result.eyewear[this.id].price,
        this.desc = result.eyewear[this.id].description,
        this.brand = result.eyewear[this.id].brand;
        this.name = result.eyewear[this.id].name;
        this.sizes = result.eyewear[this.id].sizes;

      });

     
    }
    
  async onClick(eyewearId){
    eyewearId--;
    return await this.router.navigate(['/eyewear/' + eyewearId]);
     //this.router.navigate(['/home/eyewear', eyewearId])
  }

   onBuy(eyewearId){
    
    return this.postService.addPost(eyewearId).subscribe(
      result => {
          console.log("POST Request is successful ", result);
      },
      error => {
          console.log("Error", error);
      }
  );    ;
     //this.router.navigate(['/home/eyewear', eyewearId])
  }
}
