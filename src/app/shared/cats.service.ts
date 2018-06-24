import { Injectable } from '@angular/core';
import { Cat } from "src/app/shared/cat";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(private http: HttpClient) { }

  getCats(count: number): Observable<string[]> {

    const params = new HttpParams()
      .set('count', count.toString())

    return this.http
      .get<string[]>('/api/cats', { params });
  }
}
