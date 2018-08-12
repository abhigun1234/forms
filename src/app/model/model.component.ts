import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styles: ['input.ng-valid{border-left:5px solid green;}input.ng-invalid {border-left:5px  solid red}']
})
export class ModelComponent implements OnInit {
   data;
 userForm=new FormGroup({name:new FormControl("abhishek",Validators.required),
 email:new FormControl("",Validators.email),address:
 new FormGroup({street:new FormControl,
  postalcode:new FormControl()
,city:new FormControl()
})})
  constructor() { }

  ngOnInit() {
  }
  onSubmit()
  {
    console.log(this.userForm.value)
    this.data=this.userForm.value
  }

}
