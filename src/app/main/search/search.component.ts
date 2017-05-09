import { Component, OnInit } from '@angular/core';
import {timeout} from "rxjs/operator/timeout";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-search',
  templateUrl:'./search.component.html'
      ,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  options;
  toggled;
  searchForm : FormGroup;

  constructor(
    private _fb : FormBuilder,
    private _router : Router
  ){
    /*
      Options for the search menu
     */
    this.options = [
      'Organization Name',
      'User Name',
      'Roles'
    ];
    //Searchbox is the text box in the search bar and has the following regex validation
    this.searchForm = this._fb.group({
      searchbox: ["", [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{5,40}$/)]]
    });
  }
  /*
    When clicked on options menu optionClick is called with
    the index of the clicked item in the options array
   */
  optionClick(event){
    /*
      Checks if the menu is toggled and if it is then,
      checks if the key is greater than 0, if yes closes the menu and shifts the clicked key to the 0th index
      else just closes the menu
     */
    if(this.toggled){
      if(event > 0 ){

        let temp = this.options.splice(event, 1);
        this.options.unshift(temp[0]);
      }
      this.toggled = false;
    }else{
      this.toggled = true;
    }
  }

  ngOnInit() {
  }

  submit(event){
    /*Checks if the key that is pressed if 'Enter' or not,
      if it is it navigates to the search page with the query
     */
    if(event.key == 'Enter' && this.searchForm.value.searchbox.length > 0){
      this._router.navigate(['/search',this.searchForm.value.searchbox, this.options[0]]);
    }
    if(event.key == 'Tab'){
      this.toggled = true;
    }
  }
}
