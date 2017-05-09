import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ObservableInput} from "rxjs/Observable";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  query;
  category;
  constructor(
    private _route : ActivatedRoute
  ) { }

  ngOnInit() {
    /*
      Gets the parameters from the url and then issues the search
      currently not implemented, but an Search service will have to created to
      call the Search API
     */
    this._route
      .params
      .subscribe(params => {
        this.query = params['query'];
        this.category = params['category'];
      });

  }

}
