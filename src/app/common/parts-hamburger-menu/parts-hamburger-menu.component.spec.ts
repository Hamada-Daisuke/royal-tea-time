import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsHamburgerMenuComponent } from './parts-hamburger-menu.component';

describe('PartsHamburgerMenuComponent', () => {
  let component: PartsHamburgerMenuComponent;
  let fixture: ComponentFixture<PartsHamburgerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartsHamburgerMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartsHamburgerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
