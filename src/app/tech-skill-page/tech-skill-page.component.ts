import { Component, OnInit } from '@angular/core';
import { TechSkill } from '../models/techSkill';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tech-skill-page',
  templateUrl: './tech-skill-page.component.html',
  styleUrls: ['./tech-skill-page.component.css']
})
export class TechSkillPageComponent implements OnInit {
  techList: TechSkill[];
  rate = 7;

  constructor() { }

  ngOnInit() {
    this.initList();
  }

  openLink(link: string) {
    open(link);
  }

  initList() {
    this.techList = [
     {name: 'android', imageLink: '/assets/img/logos/android_logo.png', skillLevel: 90, star: 5, link: 'https://developer.android.com'},
     {name: 'kotlin', imageLink: '/assets/img/logos/kotlin_logo.png', skillLevel: 80, star: 4, link: 'https://kotlinlang.org'},
     {name: 'java', imageLink: '/assets/img/logos/java_logo.png', skillLevel: 80, star: 4,  link: 'https://java.com'},
     {name: 'html', imageLink: '/assets/img/logos/html_css_logo.png', skillLevel: 80, star: 4,
     link: 'https://html.spec.whatwg.org/multipage/'},
     {name: 'css', imageLink: '/assets/img/logos/css_logo.png', skillLevel: 80, star: 4,  link: 'https://www.w3schools.com/css/'},
     {name: 'angular', imageLink: '/assets/img/logos/angular_logo.png', skillLevel: 60, star: 3,  link: 'https://angular.io'},
     {name: 'adobe', imageLink: '/assets/img/logos/adobe_cloud_logo.png', skillLevel: 60, star: 3,  link: 'https://www.adobe.com'}
    ];
  }

}
