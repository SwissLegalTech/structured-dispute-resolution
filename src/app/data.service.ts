import { Injectable } from '@angular/core';
import { Tbm } from './tbm';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public tbm_array: Tbm[] = [];

  constructor() {
    this.tbm_array = [
      {
        title: "title 1",
        subpoints: []
      },
      {
        title: "title 2",
        subpoints: []
      },
      {
        title: "title 3",
        subpoints: []
      }
    ]
  }
}
