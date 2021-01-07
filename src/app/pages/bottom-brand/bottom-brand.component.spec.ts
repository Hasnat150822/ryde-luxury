import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomBrandComponent } from './bottom-brand.component';

describe('BottomBrandComponent', () => {
  let component: BottomBrandComponent;
  let fixture: ComponentFixture<BottomBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
