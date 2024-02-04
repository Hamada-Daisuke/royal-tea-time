import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsStickyCartBtnComponent } from './parts-sticky-cart-btn.component';

describe('PartsStickyCartBtnComponent', () => {
  let component: PartsStickyCartBtnComponent;
  let fixture: ComponentFixture<PartsStickyCartBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartsStickyCartBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartsStickyCartBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
