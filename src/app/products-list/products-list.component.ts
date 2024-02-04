import { Component } from '@angular/core';
import { PartsHeaderComponent } from '../common/parts-header/parts-header.component';
import { PartsFooterComponent } from '../common/parts-footer/parts-footer.component';
import { PartsBreadcrumbComponent } from '../common/parts-breadcrumb/parts-breadcrumb.component';
import { PartsCoverImageComponent } from '../common/parts-cover-image/parts-cover-image.component';
import { PartsProductsItemComponent } from '../common/parts-products-item/parts-products-item.component';
import { PartsStickyCartBtnComponent } from '../common/parts-sticky-cart-btn/parts-sticky-cart-btn.component';

@Component({
  selector: 'royal-tea-time-products-list',
  standalone: true,
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
  imports: [
    PartsHeaderComponent,
    PartsFooterComponent,
    PartsBreadcrumbComponent,
    PartsCoverImageComponent,
    PartsProductsItemComponent,
    PartsStickyCartBtnComponent
  ]
})
export class ProductsListComponent {

}
