import { TestBed } from '@angular/core/testing';

import { PicturetogglerService } from './picturetoggler.service';

describe('PicturetogglerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PicturetogglerService = TestBed.get(PicturetogglerService);
    expect(service).toBeTruthy();
  });
});
