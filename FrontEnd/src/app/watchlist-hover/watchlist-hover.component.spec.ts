import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistHoverComponent } from './watchlist-hover.component';

describe('WatchlistHoverComponent', () => {
  let component: WatchlistHoverComponent;
  let fixture: ComponentFixture<WatchlistHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchlistHoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlistHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
