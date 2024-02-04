import { Component } from '@angular/core';
import { PartsHeaderComponent } from '../common/parts-header/parts-header.component';
import { PartsFooterComponent } from '../common/parts-footer/parts-footer.component';
import { PartsBreadcrumbComponent } from '../common/parts-breadcrumb/parts-breadcrumb.component';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  imports: [
    PartsHeaderComponent,
    PartsFooterComponent,
    PartsBreadcrumbComponent
  ],
})
export class DetailsComponent {

}
