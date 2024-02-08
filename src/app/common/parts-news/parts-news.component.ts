import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'royal-tea-time-parts-news',
  standalone: false,
  templateUrl: './parts-news.component.html',
  styleUrl: './parts-news.component.scss',
})
export class PartsNewsComponent implements OnInit, AfterViewInit {
  @ViewChild('swiper') private swiper: any;
  // @ViewChild('prev') private buttonPrev: any;
  // @ViewChild('next') private buttonNext: any;

  public images = ['SNS投稿画像1枚目', 'SNS投稿画像2枚目']

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    /** swiper init */
    register();
    
  }

  ngAfterViewInit(): void {}
}
