import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CharacterService} from '../shared/character.service';
import {Character} from '../shared/character.model';
import {Starships} from '../shared/starships.model';
import {Observable} from 'rxjs/Observable';
import {Species} from '../shared/species.model';
import {Film} from '../shared/film.model';
import {NotifyService} from '../shared/notify.service';

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

  constructor(private route: ActivatedRoute, private characterService: CharacterService, private notifyService: NotifyService, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.characterId = +params.get('id');
        if (this.characterId) {
          this.characterService.getCharacter(this.characterId).subscribe(character => {
              if (character == null) {
                this.noCharacterFound();
              } else {
                this.character = character;
                this.fetchDetails();
              }
            },
            error => {
              this.notifyService.warning(error);
            });
        }
      }
    );
  }

  private noCharacterFound() {
    this.notifyService.warning('Oops, incorrect character link');
    this.router.navigate(['']);
  }

  private fetchDetails() {
    this.species = this.characterService.getSpeciesOfCharacter(this.character);
    this.films = this.characterService.getMoviesOfCharacter(this.character);
    this.startships = this.characterService.getShipsOfCharacter(this.character);
  }

}
