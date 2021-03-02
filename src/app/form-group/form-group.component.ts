import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormsModule,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {



  ngOnInit(): void {
  }
  loginForm : FormGroup;
  username : FormControl;
  password : FormControl;
  constructor(builder : FormBuilder){
    this.username = new FormControl('',[Validators.required,Validators.minLength(7),Validators.email]);
    this.password= new FormControl('', [Validators.required]);
    this.loginForm = builder.group({
      userName: this.username,
      password:this.password
    })

  }
  login(){
    console.log(this.loginForm.value);
  }
  today : number = Date.now();
 

}
