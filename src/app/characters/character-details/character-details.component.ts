import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {CharacterService} from '../shared/character.service';
import {Character} from '../shared/character.model';
import {Starships} from '../shared/starships.model';
import {Observable} from 'rxjs/Observable';
import {filter, map, switchMap} from 'rxjs/operators';
import {Species} from '../shared/species.model';
import {Film} from '../shared/film.model';

@Component({
  selector: 'sw-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  characterId: number;
  character: Character;
  species: Observable<Species[]>;
  startships: Observable<Starships[]>;
  films: Observable<Film[]>;

  constructor(private route: ActivatedRoute, private characterService: CharacterService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.characterId = +params.get('id');
        if (this.characterId) {
          this.characterService.getCharacter(this.characterId).subscribe(character => {
              this.character = character;
              this.fetchDetails();
            },
            error => console.error(error));
        }
      }
    );
  }

  private fetchDetails() {
    this.species = this.characterService.getSpeciesOfCharacter(this.character);
    this.films = this.characterService.getMoviesOfCharacter(this.character);
    this.startships = this.characterService.getShipsOfCharacter(this.character);
  }

}
