import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDashSideBarComponent } from './event-dash-side-bar.component';

describe('SideBarComponent', () => {
  let component: EventDashSideBarComponent;
  let fixture: ComponentFixture<EventDashSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventDashSideBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDashSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
