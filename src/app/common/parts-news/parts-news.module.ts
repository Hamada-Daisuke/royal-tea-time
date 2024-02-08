import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartsNewsComponent } from './parts-news.component';

@NgModule({
  declarations: [PartsNewsComponent],
  imports: [CommonModule],
  exports: [PartsNewsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PartsNewsModule { }
