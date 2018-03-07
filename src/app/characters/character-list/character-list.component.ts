import {Component, OnInit} from '@angular/core';
import {CharacterService} from '../shared/character.service';
import {Character} from '../shared/character.model';
import {Observable} from 'rxjs/Observable';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {Film} from '../shared/film.model';
import {Species} from '../shared/species.model';
import {minLessThanMaxValidator} from '../shared/min-less-than-max.validator';

@Component({
  selector: 'sw-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  filterForm: FormGroup;
  characters: Observable<Character[]>;
  films: Observable<Film[]>;
  allSpecies: Observable<Species[]>;
  film: AbstractControl;
  species: AbstractControl;
  minYear: AbstractControl;
  maxYear: AbstractControl;

  constructor(private characterService: CharacterService, fb: FormBuilder) {
    this.filterForm = fb.group({
      film: [],
      species: [],
      minYear: [],
      maxYear: []
    }, {
      validator: [ minLessThanMaxValidator ]
    });
    this.film = this.filterForm.get('film');
    this.species = this.filterForm.get('species');
    this.minYear = this.filterForm.get('minYear');
    this.maxYear = this.filterForm.get('maxYear');
  }

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
    this.films = this.characterService.getFilms();
    this.allSpecies = this.characterService.getSpecies();
  }
}
