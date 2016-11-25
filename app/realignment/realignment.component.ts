import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realignment',
  templateUrl: './realignment.component.html',
  styleUrls: ['./realignment.component.css']
})
export class RealignmentComponent implements OnInit {

  left : string[];
  right : string[];
  constructor() { }

  ngOnInit() {
      this.left = ['Aakash','Chandrasekaran','Varsha','GomathiSankar','Madhu','Akshaya','Kamatchi'];
      this.right = [];
  }

}
