import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, tap} from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


export interface Eyewear {
  id: string;
  price: number;
  sizes: string[];
  skuid: string;

}
/**
 * 
  description: string;
  brand: string;
  name: string;
  datatime: any;
  images: {};
 */
const fakeData = {
  id: "1",
  description: "<p>The 1211 Pink Lady from Cutler and Gross is a Cat-eye done modern in all the right ways. A smooth upswept brow line and scooped bridge give this design its elegance and subtlety, but its vibrant  color maintains the high standard that all Pink Ladies live by: a little bit of sass. Crafted from premium acetate with a hand-polished finish.</p>",
  brand: "Cutler and Gross",
  price: 565.00,
  name: "1156",
  sizes: ["52-15-140", "55-15-140", "58-15-140"],
  images: {"frontal": "/assets/images/cutler-and-gross-1156-front-lg.jpg", "side": "/assets/images/cutler-and-gross-1156-side-lg.jpg", "frontal-sm": "/assets/images/cutler-and-gross-1156-front-sm.jpg"},
  skuid: "1156-eocg01",
  datatime:"test"
};
@Injectable({
  providedIn: 'root'
})
export class EyewearService {

  constructor(public http: HttpClient) { }

  postEyewear(eyewear: Eyewear) {
    return this.http.post('https://httpbin.org/post', eyewear).pipe(res=>res);
  }

  getEyewear() {
    return this.http.get('/assets/eyewear.json')
    .pipe(map(res => res));
    }

      }