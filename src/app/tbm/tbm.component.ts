import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Lawelement } from '../lawelement';

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

  sortData(dataService: DataService) {
   let tempArray = [];
   for(var i=0; i<dataService.lawelementArray.length; i++) {
     tempArray.push(dataService.lawelementArray[i]);
   }
    let outputArray = tempArray.sort((first, second): number => {
     if (first.claimant.time < second.claimant.time) return -1;
     if (first.claimant.time > second.claimant.time) return 1;
     return 0;
   })
   return outputArray;
  }

  getIndexOfLawelement(element: any) {
    for(var i=0; i<this.dataService.lawelementArray.length; i++) {
      if(element === this.dataService.lawelementArray[i]) {
        return i;
      }
    }
    return null;
  }

}
