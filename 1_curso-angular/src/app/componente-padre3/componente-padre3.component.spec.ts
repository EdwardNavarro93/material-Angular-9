import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePadre3Component } from './componente-padre3.component';

describe('ComponentePadre3Component', () => {
  let component: ComponentePadre3Component;
  let fixture: ComponentFixture<ComponentePadre3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentePadre3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePadre3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
