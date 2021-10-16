import { TestBed } from '@angular/core/testing';

import { PromoterDashSideBarService } from './promoter-dash-side-bar.service';

describe('SideBarService', () => {
  let service: PromoterDashSideBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromoterDashSideBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
