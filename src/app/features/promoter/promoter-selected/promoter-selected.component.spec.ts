import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoterSelectedComponent } from './promoter-selected.component';

describe('PromoterSelectedComponent', () => {
  let component: PromoterSelectedComponent;
  let fixture: ComponentFixture<PromoterSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromoterSelectedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoterSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
