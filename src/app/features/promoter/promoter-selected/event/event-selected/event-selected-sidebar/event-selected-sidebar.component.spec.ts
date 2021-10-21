import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSelectedSidebarComponent } from './event-selected-sidebar.component';

describe('EventSelectedSidebarComponent', () => {
  let component: EventSelectedSidebarComponent;
  let fixture: ComponentFixture<EventSelectedSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventSelectedSidebarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSelectedSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
