import { Component, OnInit } from '@angular/core';
import {User} from "../users.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../users.service";
import {FormBuilder,  Validators, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css'],
  providers: [UsersService]
})
export class UsersEditComponent implements OnInit {

  data : User;
  onlineName;
  userEditForm :FormGroup;

  constructor(private route : ActivatedRoute, private  _userService : UsersService, public fb: FormBuilder,public router: Router) {

    this.route.params.subscribe((params) => {
      this.onlineName = params['onlineName'];

      this.data = this._userService.getUserByOnlineName(this.onlineName);
      if (this.data == undefined) {
        alert("This role does not exist in our database!");
        this.router.navigate(['/users']);

      }

    });
  }


  ngOnInit() {
    this.userEditForm = this.fb.group({
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



    this.route.params.subscribe((params) => {
      this.onlineName = params['onlineName'];
      this.data = this._userService.getUserByOnlineName(this.onlineName);
      console.log(this.data);
    });
  }

  saveUser(){
    var status = this._userService.saveUser(this.data);
    if(status == 1){
      alert("Data Saved!");
    }else{
      alert("This user does not exist in our database!");
    }
    return false;
  }

}
