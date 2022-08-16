import { TestBed } from '@angular/core/testing';

import { UsuarioFilterService } from './usuario-filter.service';

describe('UsuarioFilterService', () => {
  let service: UsuarioFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
