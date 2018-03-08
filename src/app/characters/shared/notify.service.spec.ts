import {inject, TestBed} from '@angular/core/testing';

import {NotifyService} from './notify.service';
import {StarMaterialModule} from '../../star-material/star-material.module';

describe('NotifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StarMaterialModule],
      providers: [NotifyService]
    });
  });

  it('should be created', inject([NotifyService], (service: NotifyService) => {
    expect(service).toBeTruthy();
  }));
});
