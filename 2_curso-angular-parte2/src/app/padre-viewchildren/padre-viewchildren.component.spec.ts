import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreViewchildrenComponent } from './padre-viewchildren.component';

describe('PadreViewchildrenComponent', () => {
  let component: PadreViewchildrenComponent;
  let fixture: ComponentFixture<PadreViewchildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreViewchildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreViewchildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
