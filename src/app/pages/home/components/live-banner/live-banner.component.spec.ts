import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveBannerComponent } from './live-banner.component';

describe('LiveBannerComponent', () => {
  let component: LiveBannerComponent;
  let fixture: ComponentFixture<LiveBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
