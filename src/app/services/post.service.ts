import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public http:HttpClient) { }

addPost (eyewear) {
  return this.http.post('https://httpbin.org/post', eyewear).pipe(map(res => res));
}
}