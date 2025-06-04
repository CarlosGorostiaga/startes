import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionImpactoComponent } from './seccion-impacto.component';

describe('SeccionImpactoComponent', () => {
  let component: SeccionImpactoComponent;
  let fixture: ComponentFixture<SeccionImpactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionImpactoComponent]
    });
    fixture = TestBed.createComponent(SeccionImpactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
