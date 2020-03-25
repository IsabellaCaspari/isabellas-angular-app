import { Component, OnInit } from '@angular/core';
import { TimePeriod } from '../models/timePeriod';

@Component({
  selector: 'app-curriculum-vitae-page',
  templateUrl: './curriculum-vitae-page.component.html',
  styleUrls: ['./curriculum-vitae-page.component.less']
})
export class CurriculumVitaePageComponent implements OnInit {

  eduTimePeriod: TimePeriod[];
  profTimePeriod: TimePeriod[];

  constructor() { }

  ngOnInit() {
    this.initList();
  }

  initList() {
    this.eduTimePeriod = [
      {title: 'Bachelor of Engineering',
      description: 'Georg-Simon-Ohm technical university, Media Engineering',
      startDate: new Date(2014, 9, 10), endDate: new Date(2018, 2, 1)},
        {title: 'A-Level focus on economy',
        description: 'Berufsoberschule Scheyern', startDate: new Date(2013, 8, 1), endDate: new Date(2014, 6, 1)},
      {    title: 'B-Level focus on art',
      description: 'Dietrich-Bonhoeffer Realschule Neustadt/Aisch', startDate: new Date(2004, 8, 1), endDate: new Date(2010, 6, 1)}
    ];


    this.profTimePeriod = [
      {title: 'android developer',
      description: 'adorsys Gmbh & Co.KG',
      startDate: new Date(2018, 7, 1), endDate: new Date(2020, 3, 1)},
      {title: 'developer (working student)',
      description: 'adorsys Gmbh & Co.KG ',
      startDate: new Date(2017, 7, 1), endDate: new Date(2018, 5, 1)},
      {title: 'usability design (working student)',
      description: 'DATEV eG',
      startDate: new Date(2016, 7, 1), endDate: new Date(2017, 7, 1)},
      {title: 'website development (internship)',
      description: 'Universitas Kristen Immanuel Yogyakarta',
      startDate: new Date(2015, 10, 1), endDate: new Date(2016, 7, 1)},
      {title: 'development, usability design (working student)',
      description: 'DATEV eG',
      startDate: new Date(2014, 9, 1), endDate: new Date(2015, 6, 1)},
      {title: 'computer science expert (apprenticeship)',
      description: 'DATEV eG',
      startDate: new Date(2010, 8, 1), endDate: new Date(2013, 6, 1)}
      ];
  }

}
