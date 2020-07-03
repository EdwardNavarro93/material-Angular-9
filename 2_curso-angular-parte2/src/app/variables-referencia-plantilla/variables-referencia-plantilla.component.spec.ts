import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablesReferenciaPlantillaComponent } from './variables-referencia-plantilla.component';

describe('VariablesReferenciaPlantillaComponent', () => {
  let component: VariablesReferenciaPlantillaComponent;
  let fixture: ComponentFixture<VariablesReferenciaPlantillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariablesReferenciaPlantillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablesReferenciaPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
