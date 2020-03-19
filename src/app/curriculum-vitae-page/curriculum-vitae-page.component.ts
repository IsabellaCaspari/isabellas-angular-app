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
      {title: 'Bachelor of engineering',
      description: 'Georg-Simon-Ohm technical university Nürnberg, media engineering',
      startDate: new Date(2014, 9, 10), endDate: new Date(2018, 2, 1)},
        {title: 'A-Level focus on economy',
        description: 'Berufsoberschule Scheyern', startDate: new Date(2013, 8, 1), endDate: new Date(2014, 6, 1)},
      {title: 'vocation school',
      description: 'Martin-Segitz vocational school', startDate: new Date(2010, 8, 1), endDate: new Date(2013, 6, 1)},
      {title: 'B-Level focus on art',
      description: 'Dietrich-Bonhoeffer Realschule Neustadt/Aisch', startDate: new Date(2004, 8, 1), endDate: new Date(2010, 6, 1)}
    ];


    this.profTimePeriod = [
      {title: 'android developer',
      description: 'adorsys Gmbh & Co.KG',
      startDate: new Date(2018, 7, 1), endDate: new Date(2020, 3, 1)},
      {title: 'working student developer',
      description: 'adorsys Gmbh & Co.KG ',
      startDate: new Date(2017, 7, 1), endDate: new Date(2018, 5, 1)},
      {title: 'working student for usability design',
      description: 'DATEV eG',
      startDate: new Date(2016, 7, 1), endDate: new Date(2017, 7, 1)},
      {title: 'internship for website development and ui design',
      description: 'Universitas Kristen Immanuel Yogyakarta',
      startDate: new Date(2015, 10, 1), endDate: new Date(2016, 7, 1)},
      {title: 'working student focus on development and usability design',
      description: 'DATEV eG',
      startDate: new Date(2014, 9, 1), endDate: new Date(2015, 6, 1)},
      {title: 'apprenticeship as computer science expert',
      description: 'DATEV eG',
      startDate: new Date(2010, 8, 1), endDate: new Date(2013, 6, 1)}
      ];
  }

}
