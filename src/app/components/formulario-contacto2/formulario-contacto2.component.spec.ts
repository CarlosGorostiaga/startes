import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioContacto2Component } from './formulario-contacto2.component';

describe('FormularioContacto2Component', () => {
  let component: FormularioContacto2Component;
  let fixture: ComponentFixture<FormularioContacto2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioContacto2Component]
    });
    fixture = TestBed.createComponent(FormularioContacto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
