import { Component } from '@angular/core';
import { PartsHeaderComponent } from '../common/parts-header/parts-header.component';
import { PartsFooterComponent } from '../common/parts-footer/parts-footer.component';
import { PartsBreadcrumbComponent } from '../common/parts-breadcrumb/parts-breadcrumb.component';
import { PartsCoverImageComponent } from '../common/parts-cover-image/parts-cover-image.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  imports: [
    PartsHeaderComponent,
    PartsFooterComponent,
    PartsCoverImageComponent,
    PartsBreadcrumbComponent
  ]
})
export class ContactComponent {

}
