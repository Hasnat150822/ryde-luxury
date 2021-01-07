import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitsRoadComponent } from './hits-road.component';

describe('HitsRoadComponent', () => {
  let component: HitsRoadComponent;
  let fixture: ComponentFixture<HitsRoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HitsRoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HitsRoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
