import { Component } from '@angular/core';
import { CommonComponentModule } from '../common/common-component.module';

@Component({
    selector: 'app-top',
    standalone: true,
    templateUrl: './top.component.html',
    styleUrl: './top.component.scss',
    imports: [CommonComponentModule]
})
export class TopComponent {

}