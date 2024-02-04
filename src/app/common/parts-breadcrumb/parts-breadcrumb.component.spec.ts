import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsBreadcrumbComponent } from './parts-breadcrumb.component';

describe('PartsBreadcrumbComponent', () => {
  let component: PartsBreadcrumbComponent;
  let fixture: ComponentFixture<PartsBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartsBreadcrumbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartsBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
