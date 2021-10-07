import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HovercompComponent } from './hovercomp.component';

describe('HovercompComponent', () => {
  let component: HovercompComponent;
  let fixture: ComponentFixture<HovercompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HovercompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HovercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
