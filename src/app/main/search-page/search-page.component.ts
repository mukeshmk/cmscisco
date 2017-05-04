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

    console.log(window.location.href.split('/'));
    this._route
      .params
      .subscribe(params => {
        // Récupération des valeurs de l'URL
        this.query = params['query'];// --> Name must match wanted paramter
        this.category = params['category'];
        console.log(params);
      });

  }

}
