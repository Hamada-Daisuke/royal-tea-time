import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartsHamburgerMenuComponent } from '../parts-hamburger-menu/parts-hamburger-menu.component';

@Component({
  selector: 'royal-tea-time-parts-header',
  standalone: true,
  imports: [CommonModule, PartsHamburgerMenuComponent],
  templateUrl: './parts-header.component.html',
  styleUrl: './parts-header.component.scss'
})
export class PartsHeaderComponent {
  showMenuFlg = false;
}
