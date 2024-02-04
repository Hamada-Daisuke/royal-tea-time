import { Component, ElementRef, ViewChild } from '@angular/core';
import { 
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'royal-tea-time-parts-sticky-cart-btn',
  standalone: true,
  imports: [],
  templateUrl: './parts-sticky-cart-btn.component.html',
  styleUrl: './parts-sticky-cart-btn.component.scss',
  animations: [
    trigger('openModal', [
      state('open', style({ bottom: '-20px' })),
      state('close', style({ bottom: '441px' })),
      transition('open => close', animate('0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0)')),
      transition('close => open', animate('0.3s ease-out'))
    ])
  ]
})
export class PartsStickyCartBtnComponent {
  toggle = true;
  // @ViewChild('test', { static: false }) public test!: ElementRef;
}
