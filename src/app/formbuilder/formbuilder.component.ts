import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styles: ['input.ng-valid{border-left:5px solid green;}input.ng-invalid {border-left:5px  solid red}']
})
export class FormbuilderComponent implements OnInit {
userForm:FormGroup;
  constructor(private fbuilder :FormBuilder) { }

  ngOnInit() {
    this.userForm=this.fbuilder.group({
     name:['abhishek',
     Validators.required,
     Validators.minLength(4),
     Validators.maxLength(10)] ,
     email:[],
     address:this.fbuilder.group({street:[],city:[],postalcode:[]})
    })
  }

}
