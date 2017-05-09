import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../users.service";
import {User} from "../users.interface";
import {FormBuilder, Validators, FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-users-new',
  templateUrl: './users-new.component.html',
  styleUrls: ['./users-new.component.css'],
  providers: [UsersService]
})
export class UsersNewComponent implements OnInit {

  data : User;
  userNewForm:FormGroup;

  constructor(private route : ActivatedRoute, private  _userService : UsersService, public fb: FormBuilder,public router: Router) { }

  ngOnInit() {
    this.userNewForm = this.fb.group({
      firstName:["", Validators.required],
      lastName:["", Validators.required],
      title:["", Validators.required],
      department:["", Validators.required],
      workPhone:["", Validators.required],
      homePhone:["", Validators.required],
      cellPhone:["", Validators.required],
      email:["", Validators.required],
      loginName:["", Validators.required],
      password:["", Validators.required],
      confirmPassword:["", Validators.required],
      addressStreet1:["", Validators.required],
      addressStreet2:["", Validators.required],
      addressCity:["", Validators.required],
      addressState:["", Validators.required],
      addressZip:["", Validators.required],
      addressCounty:["", Validators.required],
      addressCountry:["", Validators.required],
      group:["", Validators.required],
      team:["", Validators.required],
      category:["", Validators.required],
      role:["", Validators.required],
      reportsTo:["", Validators.required],
      isAContractor:["", Validators.required],
      expDate:["", Validators.required]
    });
  }
  addUser(data){
    this.data=data;
    this._userService.addUser(this.userNewForm.value);
  }

}
