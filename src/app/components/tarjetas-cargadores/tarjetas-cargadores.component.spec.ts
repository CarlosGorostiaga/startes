import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasCargadoresComponent } from './tarjetas-cargadores.component';

describe('TarjetasCargadoresComponent', () => {
  let component: TarjetasCargadoresComponent;
  let fixture: ComponentFixture<TarjetasCargadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetasCargadoresComponent]
    });
    fixture = TestBed.createComponent(TarjetasCargadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
