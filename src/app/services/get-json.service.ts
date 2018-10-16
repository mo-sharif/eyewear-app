import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class GetJsonService {
  constructor( public http: HttpClient ){}
  getJSon() :any{
    return this.http.get('/assets/eyewear.json').pipe(map(res => res));
    }
}
