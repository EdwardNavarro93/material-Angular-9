import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoViewchildrenComponent } from './hijo-viewchildren.component';

describe('HijoViewchildrenComponent', () => {
  let component: HijoViewchildrenComponent;
  let fixture: ComponentFixture<HijoViewchildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijoViewchildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoViewchildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
