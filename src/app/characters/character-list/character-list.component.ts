import {Component, OnInit} from '@angular/core';
import {CharacterService} from '../shared/character.service';
import {Character} from '../shared/character.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'sw-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: Observable<Character[]>;

  constructor(private characterService: CharacterService) {
  }

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
  }

}
