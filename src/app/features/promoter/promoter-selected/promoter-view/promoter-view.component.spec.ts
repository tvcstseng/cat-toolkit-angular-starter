import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoterViewComponent } from './promoter-view.component';

describe('PromoterViewComponent', () => {
  let component: PromoterViewComponent;
  let fixture: ComponentFixture<PromoterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromoterViewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
