import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodoPostComponent } from './metodo-post.component';

describe('MetodoPostComponent', () => {
  let component: MetodoPostComponent;
  let fixture: ComponentFixture<MetodoPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodoPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
