import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleAnnouncementComponent } from './schedule-announcement.component';

const STORAGE_KEY = 'schedule-announcement-2026-seen';

describe('ScheduleAnnouncementComponent', () => {
  let component: ScheduleAnnouncementComponent;
  let fixture: ComponentFixture<ScheduleAnnouncementComponent>;

  beforeEach(async () => {
    localStorage.removeItem(STORAGE_KEY);

    await TestBed.configureTestingModule({
      imports: [ScheduleAnnouncementComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ScheduleAnnouncementComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => localStorage.removeItem(STORAGE_KEY));

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('opens when the flag is absent', () => {
    fixture.detectChanges();
    expect(component.isOpen()).toBeTrue();
    expect(fixture.nativeElement.querySelector('[role="dialog"]')).toBeTruthy();
  });

  it('close() stores the flag and hides the dialog', () => {
    fixture.detectChanges();
    component.close();
    fixture.detectChanges();
    expect(localStorage.getItem(STORAGE_KEY)).toBe('1');
    expect(component.isOpen()).toBeFalse();
    expect(fixture.nativeElement.querySelector('[role="dialog"]')).toBeNull();
  });

  it('does not open when the flag is present', () => {
    localStorage.setItem(STORAGE_KEY, '1');
    fixture.detectChanges();
    expect(component.isOpen()).toBeFalse();
    expect(fixture.nativeElement.querySelector('[role="dialog"]')).toBeNull();
  });
});
