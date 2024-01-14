import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsHeaderComponent } from './parts-header.component';

describe('PartsHeaderComponent', () => {
  let component: PartsHeaderComponent;
  let fixture: ComponentFixture<PartsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartsHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
