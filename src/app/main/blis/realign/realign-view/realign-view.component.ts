import { Component, OnInit } from '@angular/core';
import {RealignService} from "../realign.service";

@Component({
  selector: 'app-realign-view',
  templateUrl: './realign-view.component.html',
  styleUrls: ['./realign-view.component.css'],
  providers: [RealignService]
})
export class RealignViewComponent implements OnInit {

  constructor(private _realignServices : RealignService) { }

  ngOnInit() {
  }

}
