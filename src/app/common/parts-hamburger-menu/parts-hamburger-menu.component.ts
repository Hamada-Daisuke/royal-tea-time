import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'royal-tea-time-parts-hamburger-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parts-hamburger-menu.component.html',
  styleUrl: './parts-hamburger-menu.component.scss'
})
export class PartsHamburgerMenuComponent {
  @Input() showMenu = false;
}
