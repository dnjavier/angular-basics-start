import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private _characters: any[] = [{
    name: 'Luke Skywalker',
    imageUrl: 'assets/images/characters/luke.png',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    id: 1,
    strength: 5,
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z'
  },
  {
    name: 'C-3PO',
    imageUrl: 'assets/images/characters/c-3po.png',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
    id: 2,
    strength: 4.5,
    created: '2014-12-10T15:10:51.357000Z',
    edited: '2014-12-20T21:17:50.309000Z'
  },
  {
    name: 'R2-D2',
    imageUrl: 'assets/images/characters/r2-d2.png',
    height: '96',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
    id: 3,
    strength: 3,
    created: '2014-12-10T15:11:50.376000Z',
    edited: '2014-12-20T21:17:50.311000Z'
  },
  {
    name: 'Darth Vader',
    imageUrl: 'assets/images/characters/darth-vader.png',
    height: '202',
    mass: '136',
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
    id: 4,
    strength: 4,
    created: '2014-12-10T15:18:20.704000Z',
    edited: '2014-12-20T21:17:50.313000Z'
  },
  {
    name: 'Leia Organa',
    imageUrl: 'assets/images/characters/leia-organa.png',
    height: '150',
    mass: '49',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
    id: 5,
    strength: 4.9,
    created: '2014-12-10T15:20:09.791000Z',
    edited: '2014-12-20T21:17:50.315000Z'
  },
  {
    name: 'Owen Lars',
    imageUrl: 'assets/images/characters/owen-lars.png',
    height: '178',
    mass: '120',
    hair_color: 'brown, grey',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '52BBY',
    gender: 'male',
    id: 6,
    strength: 2,
    created: '2014-12-10T15:52:14.024000Z',
    edited: '2014-12-20T21:17:50.317000Z'
  },
  {
    name: 'Beru Whitesun lars',
    imageUrl: 'assets/images/characters/beru-whitesun.png',
    height: '165',
    mass: '75',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '47BBY',
    gender: 'female',
    id: 7,
    strength: 1,
    created: '2014-12-10T15:53:41.121000Z',
    edited: '2014-12-20T21:17:50.319000Z'
  },
  {
    name: 'Biggs Darklighter',
    imageUrl: 'assets/images/characters/biggs-darklighter.png',
    height: '183',
    mass: '84',
    hair_color: 'black',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '24BBY',
    gender: 'male',
    id: 8,
    strength: 3.5,
    created: '2014-12-10T15:59:50.509000Z',
    edited: '2014-12-20T21:17:50.323000Z'
  }];

  constructor() { }

  getCharacters(): any[] {
    return this._characters;
  }

}
