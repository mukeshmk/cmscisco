import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Team} from "../teams.interface";
import {TeamsService} from "../teams.service";
import {FormBuilder,  Validators, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-teams-edit',
  templateUrl: './teams-edit.component.html',
  styleUrls: ['./teams-edit.component.css'],
  providers : [TeamsService]
})
export class TeamsEditComponent implements OnInit {

  data : Team;
  id;
  teamEditForm;

  constructor(private route : ActivatedRoute,
              private  _teamService : TeamsService,
              public fb: FormBuilder,
              public router : Router
  ) {

    this.route.params.subscribe((params) => {
      this.id = params['id'];

      this.data = this._teamService.getTeamByID(this.id);
      if(this.data == undefined){
        alert("This team does not exist in our database!");
        this.router.navigate(['/teams']);
        //return;
      }
      //console.log(this.data);
    });

  }

  ngOnInit() {

    this.teamEditForm = this.fb.group({
      teamName : ["", Validators.required],
      groupName : ["", Validators.required],
      teamLead :  ["", Validators.required],
      teamType : ["", Validators.required],
      parentTeam : ["", Validators.required],
      channel : ["", Validators.required],
      teamRoles : ["", Validators.required],
      csmMapping : ["", Validators.required],
      addressArea : ["", Validators.required],
      addressRegion : ["", Validators.required],
      addressCountry : ["", Validators.required],
      addressTerritory : ["", Validators.required]
    });



  }

  saveTeam(){
    //console.log(this.data);
    console.log(this.teamEditForm);
    var status = this._teamService.saveTeam(this.data);
    if(status == 1){
      alert("Data Saved!");
    }else{
      alert("This team does not exist in our database!");
    }
    return false;
  }

}
