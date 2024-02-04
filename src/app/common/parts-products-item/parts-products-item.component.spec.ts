import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsProductsItemComponent } from './parts-products-item.component';

describe('PartsProductsItemComponent', () => {
  let component: PartsProductsItemComponent;
  let fixture: ComponentFixture<PartsProductsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartsProductsItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartsProductsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
