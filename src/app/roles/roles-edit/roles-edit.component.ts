import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Role} from "../roles.interface";
import {RolesService} from "../roles.service";
import {FormBuilder,  Validators, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-roles-edit',
  templateUrl: './roles-edit.component.html',
  styleUrls: ['./roles-edit.component.css'],
  providers : [RolesService]
})
export class RolesEditComponent implements OnInit {

  data: Role;
  id;
  roleEditForm;

  constructor(private route: ActivatedRoute,
              private  _roleService: RolesService,
              public fb: FormBuilder,
              public router: Router) {

    this.route.params.subscribe((params) => {
      this.id = params['id'];

      this.data = this._roleService.getRoleByID(this.id);
      if (this.data == undefined) {
        alert("This role does not exist in our database!");
        this.router.navigate(['/roles']);
        //return;
      }
      //console.log(this.data);
    });

  }

  ngOnInit() {
    this.roleEditForm = this.fb.group({
      roleId: ["", Validators.required],
      roleName: ["", Validators.required],
      groupId: ["", Validators.required],
      createDate: ["", Validators.required],
      createUser: ["", Validators.required],
      lastModified: ["", Validators.required],
      lastModifiedUser: ["", Validators.required],
      soapNode: ["", Validators.required],
      aclDefTree: ["", Validators.required]
    });
  }

  saveRole(){
    //console.log(this.data);
    //console.log(this.teamEditForm);
    var status = this._roleService.saveRole(this.data);
    if(status == 1){
      alert("Data Saved!");
    }else{
      alert("This team does not exist in our database!");
    }
    return false;
  }

}
