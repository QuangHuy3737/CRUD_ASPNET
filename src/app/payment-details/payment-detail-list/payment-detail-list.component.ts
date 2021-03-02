import { Component, OnInit, ChangeDetectorRef, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetailComponent } from '../payment-detail/payment-detail.component';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styleUrls: ['./payment-detail-list.component.css']
})
export class PaymentDetailListComponent implements OnInit {
  pd: PaymentDetail[] = [];
  @Output() data: EventEmitter<PaymentDetail> = new EventEmitter<PaymentDetail>();
  test: PaymentDetail;
  constructor(public service : PaymentDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList().subscribe(resp => this.pd = resp);
  }
  populateForm(pd :PaymentDetail){
    this.data.emit(pd);
  }
  onDelete(pmid){
    if(confirm('Are you sure to delete this record ?')){

      this.service.deletePaymentDetail(pmid).subscribe(
        res=> {
          this.service.refreshList().subscribe(resp => this.pd = resp);
          this.toastr.warning('Deleted successfully', 'Payment Detail Register');

        },
        err =>{
          console.log(err);
        }
      )
    }
  }
  reloadTable() {
    this.service.refreshList().subscribe(resp => this.pd = resp);
  }

}
