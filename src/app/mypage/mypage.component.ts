import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { PartsHeaderComponent } from '../common/parts-header/parts-header.component';
import { PartsFooterComponent } from '../common/parts-footer/parts-footer.component';
import { PartsBreadcrumbComponent } from '../common/parts-breadcrumb/parts-breadcrumb.component';
import { PartsCoverImageComponent } from '../common/parts-cover-image/parts-cover-image.component';

@Component({
  selector: 'royal-tea-time-mypage',
  standalone: true,
  templateUrl: './mypage.component.html',
  styleUrl: './mypage.component.scss',
  imports: [
    CommonModule,
    PartsHeaderComponent,
    PartsFooterComponent,
    PartsCoverImageComponent,
    PartsBreadcrumbComponent
  ],
  animations: [
    trigger('switch', [
      state('open', style({  })),
      state('close', style({ display: 'none' })),
      transition('open => close', animate('0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0)')),
      transition('close => open', animate('0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0)'))
    ])
  ]
})
export class MypageComponent implements OnInit {
  /** accordion opening/closing control */
  public showAccountDisplay = false;
  public showFavoriteDisplay = false;
  public showHistoryDisplay = false;

  // @ViewChild('account') private accountContents!: QueryList<ElementRef>;
  
  constructor(@Inject(DOCUMENT) private document: Document) {}
  
  ngOnInit(): void {
    /**
     * TODO:
     * ページ遷移時の情報によって初回描画でひとつは開いておく
     * defaultはアカウント情報を開く
     */
    this.showAccountDisplay = true;
    // this.showFavoriteDisplay = true;
    // this.showHistoryDisplay = true;
  }

  /**
   * TODO:
   * アニメーションを使用してdisplayの変更はしない
   * ただ変更をするとアニメーションが効かないためタイムアウトをするかイベントの順番を考える
   */
  controlStyle(displayName: string) {
    switch (displayName) {
      case 'account':
        if (!this.showAccountDisplay) {
          this.document.getElementById(displayName)!.style.display = 'none';
        }
        break;
      case 'favorite':
        break;
      case 'history':
        break;
      default:

    }
  }
}
