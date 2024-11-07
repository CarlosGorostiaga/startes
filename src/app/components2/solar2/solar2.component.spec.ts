import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solar2Component } from './solar2.component';

describe('Solar2Component', () => {
  let component: Solar2Component;
  let fixture: ComponentFixture<Solar2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Solar2Component]
    });
    fixture = TestBed.createComponent(Solar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
