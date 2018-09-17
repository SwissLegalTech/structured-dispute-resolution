import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tbm',
  templateUrl: './tbm.component.html',
  styleUrls: ['./tbm.component.css']
})
export class TbmComponent implements OnInit {

  constructor(_data: DataService) { }

  ngOnInit() {
  }

  clickAddDocument() {
    console.log("document added");
  }

}
