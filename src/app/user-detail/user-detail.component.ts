import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import{User , Address} from '../data-model';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userFormGroup :FormGroup;

  constructor(private formBuilder : FormBuilder) { 
    this.createForm();
  }
  createForm(){
    this.userFormGroup= this.formBuilder.group({
      name : ['hoang', [Validators.required, Validators.minLength(4)]],
      email: ['', Validators.required],
      addresses : this.formBuilder.group({
        street : ['',Validators.required],
        city : ['',Validators.required]

      });


    });
  }

  ngOnInit(): void {
  }

}
