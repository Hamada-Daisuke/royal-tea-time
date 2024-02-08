import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsNewsComponent } from './parts-news.component';

describe('PartsNewsComponent', () => {
  let component: PartsNewsComponent;
  let fixture: ComponentFixture<PartsNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartsNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
