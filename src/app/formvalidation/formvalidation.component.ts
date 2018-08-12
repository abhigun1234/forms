import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {
  userForm=new FormGroup({name:new FormControl("abhishek",
  Validators.maxLength),
    email:new FormControl(),
    address:new FormGroup({city:new FormControl(),
      street:new FormControl(),hishekpostelcode:new FormControl()})})
  constructor() { }

  ngOnInit() {
  }

}
