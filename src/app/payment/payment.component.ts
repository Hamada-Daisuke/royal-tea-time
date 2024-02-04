import { Component } from '@angular/core';
import { PartsHeaderComponent } from '../common/parts-header/parts-header.component';
import { PartsFooterComponent } from '../common/parts-footer/parts-footer.component';
import { PartsBreadcrumbComponent } from '../common/parts-breadcrumb/parts-breadcrumb.component';

@Component({
  selector: 'royal-tea-time-payment',
  standalone: true,
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
  imports: [
    PartsHeaderComponent,
    PartsFooterComponent,
    PartsBreadcrumbComponent
  ]
})
export class PaymentComponent {

}
