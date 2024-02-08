import { Component } from '@angular/core';
import { PartsHeaderComponent } from '../common/parts-header/parts-header.component';
import { PartsFooterComponent } from '../common/parts-footer/parts-footer.component';
import { PartsBreadcrumbComponent } from '../common/parts-breadcrumb/parts-breadcrumb.component';
import { PartsStickyCartBtnComponent } from '../common/parts-sticky-cart-btn/parts-sticky-cart-btn.component';
import { PartsNewsModule } from '../common/parts-news/parts-news.module';

@Component({
  selector: 'royal-tea-time-top',
  standalone: true,
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss',
  imports: [
    PartsHeaderComponent,
    PartsFooterComponent,
    PartsBreadcrumbComponent,
    PartsStickyCartBtnComponent,
    PartsNewsModule
  ]
})
export class TopComponent {
  
}