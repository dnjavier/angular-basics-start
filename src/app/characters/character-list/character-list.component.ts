import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
    selector: 'app-characters',
    templateUrl: './character-list.component.html',
    styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
    pageTitle = 'Character List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    // tslint:disable-next-line:variable-name
    private _listFilter: string;

    filteredCharacters: any[];
    characters: any[] = [];

    constructor(private characterService: CharacterService) { }

    ngOnInit(): void {
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

    onBarClicked(message: string): void {
        this.pageTitle = 'Character List: ' + message;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): any[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.characters.filter((character: any) =>
            character.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}
