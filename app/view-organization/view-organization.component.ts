import { Component, OnInit } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import 'rxjs/Rx';


@Component({
  selector: 'app-view-organization',
  templateUrl: './view-organization.component.html',
  styleUrls: ['./view-organization.component.css'],
})
export class ViewOrganizationComponent implements OnInit {


  resultJson: any;



  constructor(http: Http) {
    console.log("json-server called");

    http.get('http://localhost:3005/db')
        .map(response => response.json())
        .subscribe(result => this.resultJson =result);
  }

  ngOnInit() {
  }

}
