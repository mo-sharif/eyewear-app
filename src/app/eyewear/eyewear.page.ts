import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Eyewear , EyewearService} from '../services/eyewear.service';

@Component({
  selector: 'app-eyewear',
  templateUrl: './eyewear.page.html',
  styleUrls: ['./eyewear.page.scss'],
})
export class EyewearPage implements OnInit {
  public eyewear : Eyewear;
  public isClicked = [];
  form: FormGroup;
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
  public skuid: string;
  public today: any = new Date().toISOString();

  constructor(
     public router: Router, 
     public route: ActivatedRoute,
     public eyewearService: EyewearService,
     public formBuilder: FormBuilder){
 
  }
    ngOnInit() {

      this.form = this.formBuilder.group({
        sizes: ['',Validators.required],
        skuid: [''],
        price: [''],
        datetime: [this.today]
      });
       this.eyewearService.getEyewear().subscribe(result => {
        this.eyewear = { id : this.id,
          skuid: result['eyewear'][this.id]['sku-id'], 
          sizes: result['eyewear'][this.id].sizes,
          price: result['eyewear'][this.id].price,

         };
        this.eyewearList = result['eyewear'],
        this.selectedEyewear = result['eyewear'][this.id],
        this.frontImg = result['eyewear'][this.id].images.frontal,
        this.sideImg = result['eyewear'][this.id].images.side,
        this.price = result['eyewear'][this.id].price,
        this.desc = result['eyewear'][this.id].description,
        this.brand = result['eyewear'][this.id].brand;
        this.name = result['eyewear'][this.id].name;
        this.sizes = result['eyewear'][this.id].sizes;
        this.skuid = result['eyewear'][this.id]['sku-id'];
  
      });

    }
    
   onClick(eyewearId){
    this.isClicked[eyewearId] = (this.isClicked[eyewearId]? false :true );
     this.router.navigate(['/eyewear/' + eyewearId]);
  }
  submit() {

    this.form.value.price =this.eyewear.price;
    this.form.value.skuid =this.eyewear.skuid;

    if (this.form.valid) {

     this.eyewearService.postEyewear(this.form.value).subscribe(

      result => {
        console.log("POST Request is successful ", result);
    },

    error => {
        console.log("Error", error);
    } 
     );
   

    }
  }
  
}
