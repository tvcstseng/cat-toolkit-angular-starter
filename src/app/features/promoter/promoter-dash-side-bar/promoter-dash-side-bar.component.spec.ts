import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoterDashSideBarComponent } from './promoter-dash-side-bar.component';

describe('SideBarComponent', () => {
  let component: PromoterDashSideBarComponent;
  let fixture: ComponentFixture<PromoterDashSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromoterDashSideBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoterDashSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
