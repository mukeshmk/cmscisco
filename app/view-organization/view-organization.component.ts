import { Component, OnInit } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import 'rxjs/Rx';


@Component({
  selector: 'app-view-organization',
  templateUrl: './view-organization.component.html',
  styleUrls: ['./view-organization.component.css'],
})

export class ViewOrganizationComponent implements OnInit {


  ifChecked : boolean;
  public resultSet : any[];


  generateArray(obj){
    return Object.keys(obj).map( (key) => {return obj[key]});
  }

  clickAll(ifChecked){
      if(ifChecked == true){

      }
  }

  constructor(http: Http) {
    console.log("json-server called");

    http.get('http://localhost:3000/users')
        .map(response => response.json())
        .subscribe(result => this.resultSet = result);
  }

  ngOnInit() {
  }

}
