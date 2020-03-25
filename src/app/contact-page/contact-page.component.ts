import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.less']
})
export class ContactPageComponent implements OnInit {

  email: string;
  regarding: string;
  text: string;
  constructor(private router: Router) { }

  ngOnInit() {}

  sendMail(formValue: any) {
    open('mailto:isabella.caspari@posteo.de?subject=' + formValue.regarding + '&body=' + formValue.text);
  }

}
