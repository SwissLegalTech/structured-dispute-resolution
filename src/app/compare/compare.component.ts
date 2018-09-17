import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  private dataService;

  constructor(_data: DataService) {
    this.dataService = _data;
  }

  ngOnInit() {
  }

}
