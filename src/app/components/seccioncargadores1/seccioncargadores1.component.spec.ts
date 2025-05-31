import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccioncargadores1Component } from './seccioncargadores1.component';

describe('Seccioncargadores1Component', () => {
  let component: Seccioncargadores1Component;
  let fixture: ComponentFixture<Seccioncargadores1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seccioncargadores1Component]
    });
    fixture = TestBed.createComponent(Seccioncargadores1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
