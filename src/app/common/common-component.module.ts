import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartsHeaderComponent } from './parts-header/parts-header.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PartsHeaderComponent
  ],
  exports: [
    PartsHeaderComponent
  ]
})
export class CommonComponentModule { }
