import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedCompaniesComponent } from './trusted-companies.component';

describe('TrustedCompaniesComponent', () => {
  let component: TrustedCompaniesComponent;
  let fixture: ComponentFixture<TrustedCompaniesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrustedCompaniesComponent]
    });
    fixture = TestBed.createComponent(TrustedCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
