import { Component, Input } from '@angular/core';

@Component({
  selector: 'royal-tea-time-parts-cover-image',
  standalone: true,
  imports: [],
  templateUrl: './parts-cover-image.component.html',
  styleUrl: './parts-cover-image.component.scss'
})
export class PartsCoverImageComponent {
  @Input() img: string = '';
}
