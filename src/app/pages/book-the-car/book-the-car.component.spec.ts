import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTheCarComponent } from './book-the-car.component';

describe('BookTheCarComponent', () => {
  let component: BookTheCarComponent;
  let fixture: ComponentFixture<BookTheCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookTheCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTheCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
