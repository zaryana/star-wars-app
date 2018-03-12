import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {minLessThanMaxValidator} from '../shared/min-less-than-max.validator';
import {BirthYearPipe} from '../shared/birth-year.pipe';
import {Film} from '../shared/film.model';
import {Species} from '../shared/species.model';
import {Observable} from 'rxjs/Observable';
import {CharacterService} from '../shared/character.service';
import {CharacterFilter} from '../character-list/character-list.component';


@Component({
  selector: 'sw-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.css']
})
export class CharacterSearchComponent implements OnInit {

  @Output() onFilter: EventEmitter<CharacterFilter> = new EventEmitter<CharacterFilter>();

  filterForm: FormGroup;
  film: AbstractControl;
  species: AbstractControl;
  minYear: AbstractControl;
  maxYear: AbstractControl;

  films: Observable<Film[]>;
  allSpecies: Observable<Species[]>;

  minYearAny = BirthYearPipe.MIN_YEAR_ANY;
  maxYearAny = BirthYearPipe.MAX_YEAR_ANY;

  constructor(private fb: FormBuilder, private characterService: CharacterService) {
    this.filterForm = fb.group({
      film: [],
      species: [],
      minYear: [this.minYearAny],
      maxYear: [this.maxYearAny]
    }, {
      validator: [minLessThanMaxValidator]
    });
    this.film = this.filterForm.get('film');
    this.species = this.filterForm.get('species');
    this.minYear = this.filterForm.get('minYear');
    this.maxYear = this.filterForm.get('maxYear');

  }

  ngOnInit() {
    this.films = this.characterService.getFilms();
    this.allSpecies = this.characterService.getSpecies();
    this.filterForm.valueChanges.subscribe(val => {
      const newFilter: CharacterFilter = new CharacterFilter();
      newFilter.films = this.film.value;
      newFilter.species = this.species.value;
      newFilter.minYear = this.minYear.value;
      newFilter.maxYear = this.maxYear.value;
      this.onFilter.emit(newFilter);
    });
  }

}
