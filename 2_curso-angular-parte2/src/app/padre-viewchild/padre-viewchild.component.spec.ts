import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreViewchildComponent } from './padre-viewchild.component';

describe('PadreViewchildComponent', () => {
  let component: PadreViewchildComponent;
  let fixture: ComponentFixture<PadreViewchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreViewchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
