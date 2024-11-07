import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adjunto1Component } from './adjunto1.component';

describe('Adjunto1Component', () => {
  let component: Adjunto1Component;
  let fixture: ComponentFixture<Adjunto1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Adjunto1Component]
    });
    fixture = TestBed.createComponent(Adjunto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
