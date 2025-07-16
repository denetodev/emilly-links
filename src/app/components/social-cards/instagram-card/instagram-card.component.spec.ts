import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramCardComponent } from './instagram-card.component';

describe('InstagramCardComponent', () => {
  let component: InstagramCardComponent;
  let fixture: ComponentFixture<InstagramCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
