import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingPropiedadAtributoComponent } from './binding-propiedad-atributo.component';

describe('BindingPropiedadAtributoComponent', () => {
  let component: BindingPropiedadAtributoComponent;
  let fixture: ComponentFixture<BindingPropiedadAtributoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingPropiedadAtributoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingPropiedadAtributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
