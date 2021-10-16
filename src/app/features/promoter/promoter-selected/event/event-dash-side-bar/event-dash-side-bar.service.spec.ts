import { TestBed } from '@angular/core/testing';

import { EventDashSideBarService } from './event-dash-side-bar.service';

describe('SideBarService', () => {
  let service: EventDashSideBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventDashSideBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
