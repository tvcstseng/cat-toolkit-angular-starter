import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEventOverviewComponent } from './my-event-overview.component';

describe('MyEventOverviewComponent', () => {
  let component: MyEventOverviewComponent;
  let fixture: ComponentFixture<MyEventOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyEventOverviewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEventOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
