import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoingCardComponent } from './doing-card.component';

describe('DoingCardComponent', () => {
  let component: DoingCardComponent;
  let fixture: ComponentFixture<DoingCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoingCardComponent]
    });
    fixture = TestBed.createComponent(DoingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
