import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoterFormComponent } from './promoter-form.component';

describe('PromoterFormComponent', () => {
  let component: PromoterFormComponent;
  let fixture: ComponentFixture<PromoterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromoterFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
