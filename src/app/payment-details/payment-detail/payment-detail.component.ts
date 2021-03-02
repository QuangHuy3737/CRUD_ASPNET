import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import{PaymentDetail} from 'src/app/shared/payment-detail.model';
import{NgForm} from '@angular/forms';
import{PaymentDetailService} from 'src/app/shared/payment-detail.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit, OnChanges {
  
  //formData: PaymentDetail;
  check : PaymentDetail;
  @Output() isSave: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() receiveData : PaymentDetail = new PaymentDetail();
  test: PaymentDetail;
  constructor(public service :PaymentDetailService,
    private toastr: ToastrService) {

   }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.test = JSON.parse(JSON.stringify(this.receiveData));
    console.log(this.receiveData);
  }
  ngOnInit(): void {
    //this.formData = new PaymentDetail();
    this.test = new PaymentDetail();
    this.receiveData = new PaymentDetail();
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form!= null)
      form.resetForm();//ham co san 
    this.test = new PaymentDetail();
  }
  onSubmit(form:NgForm){
    if(!this.test.pmid || this.test.pmid === 0)
       this.insertRecord(this.test, form);
    else 
     this.updateRecord(form,this.test);
     
  }
  insertRecord(record: PaymentDetail, form: NgForm){
    this.service.postPaymentDetail(record).subscribe(
      res=> {
        this.isSave.emit(true);
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Payment Detail Register');
        
      },
      err=> {
        console.log(err)
      }
    )
  }
  updateRecord(form:NgForm,receive :PaymentDetail){
    this.service.putPaymentDetail(receive).subscribe(
      res=> {
        this.isSave.emit(true);
        this.resetForm(form);  
        this.toastr.success('Submitted successfully', 'Payment Detail Register');
      },
      err=> {
        console.log(err)
      }
    )

  }

}
