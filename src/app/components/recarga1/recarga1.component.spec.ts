import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recarga1Component } from './recarga1.component';

describe('Recarga1Component', () => {
  let component: Recarga1Component;
  let fixture: ComponentFixture<Recarga1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Recarga1Component]
    });
    fixture = TestBed.createComponent(Recarga1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
