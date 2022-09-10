import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Spirit } from './spirit';

@Injectable({
  providedIn: 'root'
})


export class SpiritServiceService {
  private baseURL:string = "http://localhost:8080"
  constructor(private httpClient:HttpClient) { }

  getAllSpirits():Observable<Spirit[]> {
    return this.httpClient.get<Spirit[]>(this.baseURL + '/spirit').pipe(
      map(Response => {
        console.log(Response);
        return Response;
      })
    )
  }

  addASpirit(spirit:Spirit):Observable<Spirit>{
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control' : 'no-cache'
    });
    
    return this.httpClient.post<Spirit>(this.baseURL + '/spirit', spirit, { headers: httpHeaders }).pipe(
      map(Response => {
        let data = Response;
        return data;
      })
    )
  }
}
