import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";


export interface Eyewear {
  id: string;
  price: number;
  sizes: string[];
  skuid: string;

}
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