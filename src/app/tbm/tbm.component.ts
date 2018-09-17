import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tbm',
  templateUrl: './tbm.component.html',
  styleUrls: ['./tbm.component.css']
})
export class TbmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickAddDocument() {
    console.log("document added");
  }

}
