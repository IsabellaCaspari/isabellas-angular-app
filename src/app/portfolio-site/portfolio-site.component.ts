import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-site',
  templateUrl: './portfolio-site.component.html',
  styleUrls: ['./portfolio-site.component.less'],
})
export class PortfolioSiteComponent implements OnInit {

  constructor() { }

  itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = false;

  slidesChangeMessage = '';

  slides = [
    {image: '/assets/img/portfolio/1.png'},
    {image: '/assets/img/portfolio/2.png'},
    {image: '/assets/img/portfolio/3.png'},
    {image: '/assets/img/portfolio/4.png'},
    {image: '/assets/img/portfolio/5.png'},
    {image: '/assets/img/portfolio/6.png'},
    {image: '/assets/img/portfolio/7.png'}
  ];

  ngOnInit() {
  }

  log(event: number) {
    this.slidesChangeMessage = `Slide has been switched: ${event}`;
  }
  onSlideRangeChange(indexes: number[]): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }

}
