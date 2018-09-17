import { Injectable } from '@angular/core';
import { Lawelement } from './lawelement';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public lawelementArray: Lawelement[] = [];
  public selectedIndex: number = 0;
  public showcaseArray = [];

  constructor() {
    this.lawelementArray = [
      {
        claimant: {
          fact: "I offered the respondend my appartment in Bahnhofstraße",
          time: null, // 4th November
          proof: "Rental Agreement",
          legalOpinion: "This is a lease contract"
        },
        disputed: false,
        defendant: null
      },
      {
        claimant: {
          fact: "We agreed upon a rent of 10.000 € a month",
          time: null, // 4th November
          proof: "Rental Agreement",
          legalOpinion: "The respondant is obliged to pay the rent"
        },
        disputed: false,
        defendant: null
      },
      {
        claimant: null,
        disputed: false,
        defendant: {
          fact: "The heating did not work",
          time: null, // 1. - 31. Dezember
          proof: "My boyfriend",
          legalOpinion: ""
        }
      },
      {
        claimant: {
          fact: "The claimant was still living in the apartment, the hotel bill is fake.",
          time: null, // 7. bis 31. Dezember
          proof: "Mrs. Miller",
          legalOpinion: "You lived there, you can only set off 50 %"
        },
        disputed: true,
        defendant: {
          fact: "It was so cold, I had to move into a hotel and paid 10.000 € for it.",
          time: null, // 7. bis 31. Dezember
          proof: "Hotel bill",
          legalOpinion: "I can set off the lease"
        }
      }
    ];

    this.showcaseArray = [
      [
        {
          claimant: {
            fact: "I offered the respondend my appartment in Bahnhofstraße",
            time: null, // 4th November
            proof: "Rental Agreement",
            legalOpinion: "This is a lease contract"
          },
          disputed: false,
          defendant: null
        }
      ],
      [
        {
          claimant: {
            fact: "I offered the respondend my appartment in Bahnhofstraße",
            time: null, // 4th November
            proof: "Rental Agreement",
            legalOpinion: "This is a lease contract"
          },
          disputed: false,
          defendant: null
        },
        {
          claimant: {
            fact: "We agreed upon a rent of 10.000 € a month",
            time: null, // 4th November
            proof: "Rental Agreement",
            legalOpinion: "The respondant is obliged to pay the rent"
          },
          disputed: false,
          defendant: null
        }
      ],
      [
        {
          claimant: {
            fact: "I offered the respondend my appartment in Bahnhofstraße",
            time: null, // 4th November
            proof: "Rental Agreement",
            legalOpinion: "This is a lease contract"
          },
          disputed: false,
          defendant: null
        },
        {
          claimant: {
            fact: "We agreed upon a rent of 10.000 € a month",
            time: null, // 4th November
            proof: "Rental Agreement",
            legalOpinion: "The respondant is obliged to pay the rent"
          },
          disputed: false,
          defendant: null
        },
        {
          claimant: null,
          disputed: false,
          defendant: {
            fact: "The heating did not work",
            time: null, // 1. - 31. Dezember
            proof: "My boyfriend",
            legalOpinion: ""
          }
        },
        {
          claimant: null,
          disputed: true,
          defendant: {
            fact: "It was so cold, I had to move into a hotel and paid 10.000 € for it.",
            time: null, // 7. bis 31. Dezember
            proof: "Hotel bill",
            legalOpinion: "I can set off the lease"
          }
        }
      ],
      [
        {
          claimant: {
            fact: "I offered the respondend my appartment in Bahnhofstraße",
            time: null, // 4th November
            proof: "Rental Agreement",
            legalOpinion: "This is a lease contract"
          },
          disputed: false,
          defendant: null
        },
        {
          claimant: {
            fact: "We agreed upon a rent of 10.000 € a month",
            time: null, // 4th November
            proof: "Rental Agreement",
            legalOpinion: "The respondant is obliged to pay the rent"
          },
          disputed: false,
          defendant: null
        },
        {
          claimant: null,
          disputed: false,
          defendant: {
            fact: "The heating did not work",
            time: null, // 1. - 31. Dezember
            proof: "My boyfriend",
            legalOpinion: ""
          }
        },
        {
          claimant: {
            fact: "The claimant was still living in the apartment, the hotel bill is fake.",
            time: null, // 7. bis 31. Dezember
            proof: "Mrs. Miller",
            legalOpinion: "You lived there, you can only set off 50 %"
          },
          disputed: true,
          defendant: {
            fact: "It was so cold, I had to move into a hotel and paid 10.000 € for it.",
            time: null, // 7. bis 31. Dezember
            proof: "Hotel bill",
            legalOpinion: "I can set off the lease"
          }
        }
      ]
    ]
  }
  setSelectedIndex(index: number) {
    this.selectedIndex = index;
  }
}
