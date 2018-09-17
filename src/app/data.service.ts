import { Injectable } from '@angular/core';
import { Tbm } from './tbm';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public tbm_array: Tbm[] = [];
  public selectedIndex: number = 0;

  constructor() {
    this.tbm_array = [
      {
        title: "Lease Contract",
        subpoints: [
          {
            title: "subpoint 1",
            plaintiff: {
              facts: "The Claimant and the Respondend have entered into a lease agreement.",
              legal: "There is a lease contract between the parties according to Sec. 535 BGB.",
              proofs: []
            },
            defendant: {
              facts: "Yes - undisputed.",
              legal: "",
              proofs: []
            },
            judge: {
              temp: "judgecomment"
            }
          },
        ]
      },
      {
        title: "No heating",
        subpoints: [
          {
            title: "subpoint 2",
            plaintiff: {
              facts: "The heating did not work.",
              legal: "",
              proofs: []
            },
            defendant: {
              facts: "No, the heating did work properly.",
              legal: "",
              proofs: []
            },
            judge: {
              temp: "judgecomment"
            }
          }
        ]
      },
      {
        title: "title 3",
        subpoints: [
          {
            title: "subpoint 3",
            plaintiff: {
              facts: "fact of 3333 is blabla",
              legal: "legal 3333 is blabla",
              proofs: []
            },
            defendant: {
              facts: "fact is 3333 blabla",
              legal: "legal is 3333 blabla",
              proofs: []
            },
            judge: {
              temp: "judgecomment"
            }
          }
        ]
      }
    ]
  }
  setSelectedIndex(index: number) {
    this.selectedIndex = index;
  }
}
