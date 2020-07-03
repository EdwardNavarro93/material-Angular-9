import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePadre2Component } from './componente-padre2.component';

describe('ComponentePadre2Component', () => {
  let component: ComponentePadre2Component;
  let fixture: ComponentFixture<ComponentePadre2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentePadre2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePadre2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
