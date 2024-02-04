import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsCoverImageComponent } from './parts-cover-image.component';

describe('PartsCoverImageComponent', () => {
  let component: PartsCoverImageComponent;
  let fixture: ComponentFixture<PartsCoverImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartsCoverImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartsCoverImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
