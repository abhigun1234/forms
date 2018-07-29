import { Component, OnInit } from '@angular/core';
import {MenuService} from '..//menu.service'
@Component({
  selector: 'app-menuoftheday',
  templateUrl: './menuoftheday.component.html',
  styleUrls: ['./menuoftheday.component.css'],
  providers:[MenuService]
})
export class MenuofthedayComponent implements OnInit {

  constructor(private menu : MenuService) { }

  ngOnInit() {

    this.menu.fetchMenuDetails().subscribe(response=>{


      console.log(response)
    })
  }

}
