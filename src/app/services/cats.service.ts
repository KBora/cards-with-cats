import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpParams } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Cat } from './cat';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(private http: HttpClient) { }

  getCats(count: number): Observable<Cat[]> {

    const params = new HttpParams()
      .set('count', count.toString())

    return this.http
      .get<string[]>('/api/cats', { params })
      .pipe(
        map(strCat => {     
          return strCat.map( item => {
            return new Cat(item);
          });
        } ) 
       
      );
  }
}
