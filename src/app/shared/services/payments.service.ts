import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  url = 'https://localhost:4200'; 
  constructor(private http: HttpClient) { }


  postPayment(data)
  {
    return this.http.post<any>(`${this.url}Payments`,data);
  }

}
