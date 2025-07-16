import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegramCardComponent } from './telegram-card.component';

describe('TelegramCardComponent', () => {
  let component: TelegramCardComponent;
  let fixture: ComponentFixture<TelegramCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelegramCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelegramCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
