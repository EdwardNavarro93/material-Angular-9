import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionGetComponent } from './peticion-get.component';

describe('PeticionGetComponent', () => {
  let component: PeticionGetComponent;
  let fixture: ComponentFixture<PeticionGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeticionGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeticionGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
