import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrotoServicesComponent } from './introto-services.component';

describe('IntrotoServicesComponent', () => {
  let component: IntrotoServicesComponent;
  let fixture: ComponentFixture<IntrotoServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrotoServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrotoServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
