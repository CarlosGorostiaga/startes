import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recarga2Component } from './recarga2.component';

describe('Recarga2Component', () => {
  let component: Recarga2Component;
  let fixture: ComponentFixture<Recarga2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Recarga2Component]
    });
    fixture = TestBed.createComponent(Recarga2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
