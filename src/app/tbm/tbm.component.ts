import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tbm',
  templateUrl: './tbm.component.html',
  styleUrls: ['./tbm.component.css']
})
export class TbmComponent implements OnInit {

  private dataService;

  constructor(_data: DataService) {
    this.dataService = _data;
  }

  ngOnInit() {
  }

  clickAddDocument() {
    console.log("document added");
  }

}
