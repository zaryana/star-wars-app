import { FilmsPipe } from './films.pipe';

describe('FilmsPipe', () => {
  it('create an instance', () => {
    const pipe = new FilmsPipe();
    expect(pipe).toBeTruthy();
  });
});
