import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Eyewear , EyewearService} from '../services/eyewear.service';

@Component({
  selector: 'app-eyewear',
  templateUrl: './eyewear.page.html',
  styleUrls: ['./eyewear.page.scss'],
})
export class EyewearPage implements OnInit {
  public eyewear : Eyewear;
  public isClicked = [];
  public form: FormGroup;
  public eyewearList: any;
  public id: string;
  public today: any = new Date().toISOString();

  constructor(
     public router: Router, 
     public route: ActivatedRoute,
     public eyewearService: EyewearService,
     public formBuilder: FormBuilder){
 
  }
    ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('id');

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
          price: result['eyewear'][this.id].price
         };
        this.eyewearList = result['eyewear'] 
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
