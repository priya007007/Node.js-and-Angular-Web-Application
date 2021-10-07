import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTryComponent } from './footer-try.component';

describe('FooterTryComponent', () => {
  let component: FooterTryComponent;
  let fixture: ComponentFixture<FooterTryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterTryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
