import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargadoresComponent } from './cargadores.component';

describe('CargadoresComponent', () => {
  let component: CargadoresComponent;
  let fixture: ComponentFixture<CargadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargadoresComponent]
    });
    fixture = TestBed.createComponent(CargadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
