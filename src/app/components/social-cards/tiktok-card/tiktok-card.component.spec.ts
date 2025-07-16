import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiktokCardComponent } from './tiktok-card.component';

describe('TiktokCardComponent', () => {
  let component: TiktokCardComponent;
  let fixture: ComponentFixture<TiktokCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiktokCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiktokCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
