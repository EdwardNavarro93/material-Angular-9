import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoViewchildComponent } from './hijo-viewchild.component';

describe('HijoViewchildComponent', () => {
  let component: HijoViewchildComponent;
  let fixture: ComponentFixture<HijoViewchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijoViewchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
