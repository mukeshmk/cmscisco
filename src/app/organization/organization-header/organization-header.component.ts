import { Component, OnInit , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-organization-header',
  templateUrl: './organization-header.component.html',
  styleUrls: ['./organization-header.component.css']
})
export class OrganizationHeaderComponent implements OnInit {

  @Output('fieldSelected') selectedField = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  clickedField(field){
    this.selectedField.emit(field);
    console.log(field);
  }
}
