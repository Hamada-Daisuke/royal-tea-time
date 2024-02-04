import { Component, Input } from '@angular/core';

@Component({
  selector: 'royal-tea-time-parts-breadcrumb',
  standalone: true,
  imports: [],
  templateUrl: './parts-breadcrumb.component.html',
  styleUrl: './parts-breadcrumb.component.scss'
})
export class PartsBreadcrumbComponent {
  @Input() breadcrumb: string = '';
}
