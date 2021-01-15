import {Component, OnInit} from '@angular/core';
import {Work} from '../models/work';

@Component({
  selector: 'app-portfolio-site',
  templateUrl: './portfolio-site.component.html',
  styleUrls: ['./portfolio-site.component.css'],
})
export class PortfolioSiteComponent implements OnInit {

  constructor() {
  }

  itemsPerSlide = 1;
  singleSlideOffset = false;
  noWrap = false;

  slidesChangeMessage = '';

  slides: Work[];

  ngOnInit() {
    this.initList();
  }

  initList() {
    this.slides = [
      {
        title: 'Facebook Chatbook',
        description: 'This is my chatbot called orlanda that can coordinate appointments and access your Google calendar. ' +
          'I developed this work as part of my bachelor thesis. To see more click the button and visit my github page.',
        imageLink: '/assets/img/portfolio/chat_bot.png',
        link: 'https://github.com/IsabellaCaspari/orlanda-nodejs-backend'
      },
      {
        title: 'Flutter App Development of the \'bibel21\' app',
        description: 'The app helps you to read through the bible in a year. To see more click the button and visit my github page.',
        imageLink: '/assets/img/portfolio/bibel21.png',
        link: 'https://github.com/IsabellaCaspari/bible21'
      },
      {
        title: 'App Development of the \'business card\' app',
        description: 'The app helps you to manage your business cards, you can create new ones or ' +
          'edit existing ones. It is very easy to share business cards with colleagues and friends via' +
          ' QR-code. To see more click the button and visit my github page.',
        imageLink: '/assets/img/portfolio/app_development.png',
        link: 'https://github.com/IsabellaCaspari/business-card-app-kotlin'
      },
      {
        title: 'Website of a local church',
        description: 'I programmed this website with wordpress. I decided to use this technology, so that other ' +
          'non-technical people can maintain the content. To see more click the button and visit the homepage. ',
        imageLink: '/assets/img/portfolio/website_efg.png',
        link: 'https://efg-vestnertor.de'
      },
      {
        title: 'Graphic design',
        description: 'I enjoy designing flyers and cards. Here for example a concert flyer for songwriters. ' +
          'For returning occations I also develop a design manual with colors, composition and fonts.',
        imageLink: '/assets/img/portfolio/graphic_design.png'
      },
      {
        title: 'Logo Design',
        description: 'Create and design logos through a creative process. Development of a suitable color scheme. ' +
          'Here you can see e.g. a wedding logo.',
        imageLink: '/assets/img/portfolio/logo_design.png',
      }

    ];
  }

  openLink(link: string) {
    open(link);
  }

}
