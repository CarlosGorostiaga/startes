import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjuntosServiciosComponent } from './conjuntos-servicios.component';

describe('ConjuntosServiciosComponent', () => {
  let component: ConjuntosServiciosComponent;
  let fixture: ComponentFixture<ConjuntosServiciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConjuntosServiciosComponent]
    });
    fixture = TestBed.createComponent(ConjuntosServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
