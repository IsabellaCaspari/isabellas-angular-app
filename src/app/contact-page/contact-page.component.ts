import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.less']
})
export class ContactPageComponent implements OnInit {

  email: string;
  regarding: string;
  text: string;
  constructor() { }

  ngOnInit(){}

  sendMail(formValue: any) {
    console.log(formValue.email + ' ' + formValue.regarding  + ' ' + formValue.text);
  }

}
