import { Component, OnInit } from '@angular/core';
import { Work } from '../models/work';

@Component({
  selector: 'app-portfolio-site',
  templateUrl: './portfolio-site.component.html',
  styleUrls: ['./portfolio-site.component.less'],
})
export class PortfolioSiteComponent implements OnInit {

  constructor() { }

  itemsPerSlide = 2;
  singleSlideOffset = false;
  noWrap = false;

  slidesChangeMessage = '';

  slides: Work[];

  ngOnInit() {
    this.initList();
  }

  initList() {
    this.slides = [
      {title: "Facebook Chatbook", description: "This is a chatbot that can coordinate appointments and access your Google calendar. It speaks your language and understands what you mean. I developed this work as part of my bachelor thesis.", imageLink: '/assets/img/portfolio/4.png'},
      {title: "Graphic design", description: "I enjoy designing flyers and cards. Gladly for weddings, concerts or the like. If it is a regular card, I can also develop a design manual with colors, fonts and design.", imageLink: '/assets/img/portfolio/3.png'},
      {title: "Creating and Design Websites", description: "Create and design websites. I created this website with Wordpress, of course it is also possible to create the website in angular or only with plain HTML/CSS.", imageLink: '/assets/img/portfolio/6.png', link: "https://efg-vestnertor.de"},
      {title: "Website for Artists", description: "Create and design websites. I created this website with Wordpress, of course it is also possible to create the website in angular or only with plain HTML/CSS.", imageLink: '/assets/img/portfolio/5.png', link: "http://sarahdorner.de"},
      {title: "Appdevelopment", description: "The app helps you to manage your business cards, you can create new ones or edit existing ones. It is very easy to share business cards with colleagues and friends via qr-code.", imageLink: '/assets/img/portfolio/7.png', link: "https://github.com/IsabellaCaspari/business-card-app-kotlin"},
      {title: "Logodesign", description: "Create and design logos through a creative process.Development of a suitable color scheme. Here you can see e.g. a wedding logo.", imageLink: '/assets/img/portfolio/1.png', }

      ];
  }

  log(event: number) {
    this.slidesChangeMessage = `Slide has been switched: ${event}`;
  }
  onSlideRangeChange(indexes: number[]): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }

}
