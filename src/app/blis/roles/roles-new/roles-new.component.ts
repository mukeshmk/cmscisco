import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RolesService} from "../roles.service";
import {Role} from "../roles.interface";


@Component({
  selector: 'app-roles-new',
  templateUrl: './roles-new.component.html',
  styleUrls: ['./roles-new.component.css'],
  providers: [RolesService]
})
export class RolesNewComponent implements OnInit {

  data: Role;
  id;
  roleNewForm;

  constructor(private route: ActivatedRoute,
              private  _roleService: RolesService,
              public fb: FormBuilder,
              public router: Router) {
  }

  ngOnInit() {
    this.roleNewForm = this.fb.group({
      id: ["", Validators.required],
      name: ["", Validators.required],
      group: ["", Validators.required],
      date: ["", Validators.required],
      user: ["", Validators.required],
      last_modified: ["", Validators.required],
      last_modified_user: ["", Validators.required],
      soap_node: ["", Validators.required],
      acl_def_tree: ["", Validators.required]
    });
  }

  saveRole(data){
    console.log(this.data);
    console.log(this.roleNewForm);
    this._roleService.newRole(this.roleNewForm.value);
    return false;
  }

}
