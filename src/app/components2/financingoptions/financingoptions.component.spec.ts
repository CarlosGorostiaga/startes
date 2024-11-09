import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancingoptionsComponent } from './financingoptions.component';

describe('FinancingoptionsComponent', () => {
  let component: FinancingoptionsComponent;
  let fixture: ComponentFixture<FinancingoptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancingoptionsComponent]
    });
    fixture = TestBed.createComponent(FinancingoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
