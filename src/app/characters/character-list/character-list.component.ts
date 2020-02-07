import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  pageTitle = 'Character List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  characters: any[] = [];

  filteredCharacters: any[];
  private _listFilter: string;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
    this.filteredCharacters = this.characters;
  }

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCharacters = this._listFilter ? this.performFilter(this.listFilter) : this.characters;
  }

  performFilter(filterBy: string): any[] {
    filterBy = filterBy.toLowerCase();
    return this.characters.filter(character => {
      return character.name.toLowerCase().includes(filterBy);
    });
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
