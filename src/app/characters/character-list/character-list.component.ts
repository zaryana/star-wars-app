import {Component, OnInit} from '@angular/core';
import {CharacterService} from '../shared/character.service';
import {Character} from '../shared/character.model';

@Component({
  selector: 'sw-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Character[];

  constructor(private characterService: CharacterService) {
  }

  ngOnInit() {
    this.getCharacters();
  }

  public getCharacters(): void {
    this.characterService.getCharacters().subscribe(
      characters => this.characters = characters);
  }

}
