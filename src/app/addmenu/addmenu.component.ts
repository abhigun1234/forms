import { Component, OnInit } from '@angular/core';
import {MenuService} from '..//menu.service'
@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styles: ['input.ng-valid{border-left:5px solid green;}input.ng-invalid {border-left:5px  solid red}']
})
export class AddmenuComponent implements OnInit {

  constructor(private myservice :MenuService) { }

  ngOnInit() {
  }
  postDataToRestaurentMenu(data :any)
  { const data1 = JSON.stringify(data);
    alert(data1)
    console.log(data1)
    const url='http://192.168.1.21:5000/addmenu/'
    this.myservice.addDataInRestaurentMenu(url,data1)

  }

}
