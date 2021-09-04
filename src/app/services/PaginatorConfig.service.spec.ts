/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PaginatorConfigService } from './PaginatorConfig.service';

describe('Service: PaginatorConfig', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginatorConfigService]
    });
  });

  it('should ...', inject([PaginatorConfigService], (service: PaginatorConfigService) => {
    expect(service).toBeTruthy();
  }));
});
