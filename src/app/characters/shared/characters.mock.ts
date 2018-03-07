import {Character, SWApiResponse} from './character.model';

export const LUKE_MOCK: Character = {
  name: 'Luke Skywalker',
  height: 172,
  mass: 77,
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.co/api/planets/1/',
  films: [
    'https://swapi.co/api/films/2/',
    'https://swapi.co/api/films/6/',
    'https://swapi.co/api/films/3/',
    'https://swapi.co/api/films/1/',
    'https://swapi.co/api/films/7/'
  ],
  species: [
    'https://swapi.co/api/species/1/'
  ],
  vehicles: [
    'https://swapi.co/api/vehicles/14/',
    'https://swapi.co/api/vehicles/30/'
  ],
  starships: [
    'https://swapi.co/api/starships/12/',
    'https://swapi.co/api/starships/22/'
  ],
  created: new Date(),
  edited: new Date(),
  url: 'https://swapi.co/api/people/1/'
};

export const DART_MOCK: Character = {
  name: 'Darth Vader',
  height: 202,
  mass: 136,
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male',
  homeworld: 'https://swapi.co/api/planets/1/',
  films: [
    'https://swapi.co/api/films/2/',
    'https://swapi.co/api/films/6/',
    'https://swapi.co/api/films/3/',
    'https://swapi.co/api/films/1/'
  ],
  species: [
    'https://swapi.co/api/species/1/'
  ],
  vehicles: [],
  starships: [
    'https://swapi.co/api/starships/13/'
  ],
  created: new Date(),
  edited: new Date(),
  url: 'https://swapi.co/api/people/4/'
};

export const SWAPI_1PAGE_MOCK: SWApiResponse<Character> = {
  count: 1,
  next: null,
  previous: null,
  results: [LUKE_MOCK]
};


export const SWAPI_2PAGES_MOCK1: SWApiResponse<Character> = {
  count: 1,
  next: 'https://swapi.co/api/people/?page=2',
  previous: null,
  results: [LUKE_MOCK]
};

export const SWAPI_2PAGES_MOCK2: SWApiResponse<Character> = {
  count: 1,
  next: null,
  previous: 'https://swapi.co/api/people/?page=1',
  results: [DART_MOCK]
};
