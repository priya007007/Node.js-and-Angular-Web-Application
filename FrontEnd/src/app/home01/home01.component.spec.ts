import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home01Component } from './home01.component';

describe('Home01Component', () => {
  let component: Home01Component;
  let fixture: ComponentFixture<Home01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Home01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Home01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
