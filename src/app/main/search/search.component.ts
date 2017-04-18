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
    this.options = [
      'Organization Name',
      'User Name',
      'Roles'
    ];

    this.searchForm = this._fb.group({
      searchbox: ["", [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{5,40}$/)]]
    });
  }

  // displayOptions(){
  //   console.log('displayOptions');
  //   this.toggled = true;
  //   setTimeout(() => {
  //     this.toggled = false;
  //   }, 10000);
  // }

  optionClick(event){
    console.log(event);
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
    //console.log(event);
    if(event.key == 'Enter' && this.searchForm.value.searchbox.length > 0){
      this._router.navigate(['/search',this.searchForm.value.searchbox, this.options[0]]);
    }
  }
}
