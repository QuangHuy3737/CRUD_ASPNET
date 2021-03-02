import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { PaymentDetail } from './payment-detail.model';


@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  readonly rootURL = "https://localhost:5001/api";
  formData: PaymentDetail= {
    cvv: null,
    cardNumber: null,
    cardOwnerName: null,
    exprationDate: null,
    pmid: null
  };
  list :PaymentDetail[]
  constructor(private http:HttpClient) { }
  postPaymentDetail(record: PaymentDetail){  
    return this.http.post(this.rootURL + '/PaymentDetail',record);
  } 
  putPaymentDetail(record: PaymentDetail){     
    return this.http.put(`${this.rootURL}/PaymentDetail/${record.pmid}`, record);
  }
  deletePaymentDetail(id){
    return this.http.delete(this.rootURL + '/PaymentDetail/'+id);
  }

  refreshList(){
    return this.http.get<PaymentDetail[]>(this.rootURL + '/PaymentDetail');
  }
}
