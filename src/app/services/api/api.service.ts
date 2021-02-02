import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl : string;
  constructor(private http: HttpClient) { 
    
  }
  
}
