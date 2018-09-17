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
        subpoints: [
          {
            plaintiff: {
              facts: "fact of is blabla",
              legal: "legal is blabla",
              proofs: []
            },
            defendant: {
              facts: "fact is blabla",
              legal: "legal is blabla",
              proofs: []
            },
            judge: {
              temp: "judgecomment"
            }
          }
        ]
      },
      {
        title: "title 2",
        subpoints: [
          {
            plaintiff: {
              facts: "fact of 222 is blabla",
              legal: "legal 2222 is blabla",
              proofs: []
            },
            defendant: {
              facts: "fact 222 is blabla",
              legal: "legal  222 is blabla",
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
}
