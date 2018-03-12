import {Component, OnInit} from '@angular/core';
import {CharacterService} from '../shared/character.service';
import {Character} from '../shared/character.model';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Component({
  selector: 'sw-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  filter = new CharacterFilter();
  characters: Observable<Character[]>;

  constructor(private characterService: CharacterService, private router: Router) {
  }

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
  }

  setFilter(newFilter: CharacterFilter) {
    this.filter = newFilter;
  }

  public goTo(character: Character) {
    const url = character.url.split('/');
    const id = url[url.length - 2];
    this.router.navigate(['/characters', id]);
  }
}

export class CharacterFilter {
  films: string;
  species: string;
  minYear: number;
  maxYear: number;
}
