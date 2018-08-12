import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  myname='abhishek'
  cur=10.45
  address1 = new Address('Dhananjaypur', 'Varanasi', 'India');
	address2 = new Address('Moonsi', 'Bhadohi', 'India');
	addressArray = [this.address1, this.address2];
	
	nameObj = new Name('Narendra', 'Modi');
	dob = new Date(1950, 9, 17);
	
	person = new Person(100, this.nameObj, this.dob, this.address1);
  constructor() { }

  ngOnInit() {
  }

}
export class Name {
  constructor(public fname:string, public lname:string) {
  }
} 

export class Address {
  constructor(public vill:string, public district:string,
                                 public country:string) {
  }
} 

export class Person {
    constructor(public id:number, public pname:Name, 
	                     public dob:Date, public address:Address) {
    }
}  
