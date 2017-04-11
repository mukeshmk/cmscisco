import {Component, OnInit, Input} from '@angular/core';
import {Profile} from "./profile.interface";
import {ProfileService} from "./profile.service";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers : [ProfileService]
})
export class ProfileComponent implements OnInit {

  data: Profile;
  login;
  profileEditForm;

  constructor(private route: ActivatedRoute,private  _profileService: ProfileService,
              public fb: FormBuilder,public router: Router) {

    this.route.params.subscribe((params) => {
      this.login = params['login'];

    this.data = this._profileService.getProfileByLogin(this.login);

    });
  }

  ngOnInit(){
    this.profileEditForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      gender: ["", Validators.required],
      work: ["", Validators.required],
      cell: ["", Validators.required],
      home: ["", Validators.required],
      email: ["", Validators.required],
      street1: ["", Validators.required],
      street2: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      zip: ["", Validators.required],
      country: ["", Validators.required],
      county: ["", Validators.required],
      group: ["", Validators.required],
      team: ["", Validators.required],
      role: ["", Validators.required],
      reportsTo: ["", Validators.required],
      login: ["", Validators.required],
      pass: ["", Validators.required],
      confirmPass: ["", Validators.required],
    });
  }

  saveProfile(){
    //console.log(this.data);
    //console.log(this.teamEditForm);
    var status = this._profileService.saveProfile(this.data);
    if(status == 1){
      alert("Data Saved!");
    }else{
      alert("This admin does not exist in our database!");
    }
    return false;
  }

}
