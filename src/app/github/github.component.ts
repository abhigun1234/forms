import { Component, OnInit } from '@angular/core';
import {GithubService} from '..//github.service'
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  public searchResult
  searchcount;
  constructor(private github :GithubService) { }
    
  ngOnInit() {
  }
  /*
  called when the button getting clicked
  */
  getUserDetails()
  {
    this.github.getUserDetails().subscribe(res=>{

      this.searchResult=res
      this.searchcount=this.searchResult.total_count
      console.log(this.searchResult.total_count)
    }
    
   
   
    
  );
    console.log(this.searchResult)

  }
}
