import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHijoComponent } from './post-hijo.component';

describe('PostHijoComponent', () => {
  let component: PostHijoComponent;
  let fixture: ComponentFixture<PostHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
