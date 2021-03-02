import { Component, OnInit, ViewChild } from '@angular/core';
import { PaymentDetailListComponent } from './payment-detail-list/payment-detail-list.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { PaymentDetail } from '../shared/payment-detail.model';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  @ViewChild('paymentDetailList') paymentDetailList: PaymentDetailListComponent; //trai qua phai
  //@ViewChild('paymentDetialList') paymentDetailList: PaymentDetailListComponent;
  isReload: boolean;
  changeData : PaymentDetail;
  constructor() { }

  ngOnInit(): void {
  }

  fetch($event) {
    this.paymentDetailList.reloadTable();
  }
  changeList(args){
    console.log(args);
    this.changeData = args;
    console.log(this.changeData);
    
  }
}
