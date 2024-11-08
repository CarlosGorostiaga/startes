import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraRecargaComponent } from './calculadora-recarga.component';

describe('CalculadoraRecargaComponent', () => {
  let component: CalculadoraRecargaComponent;
  let fixture: ComponentFixture<CalculadoraRecargaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculadoraRecargaComponent]
    });
    fixture = TestBed.createComponent(CalculadoraRecargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
