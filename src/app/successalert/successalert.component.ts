import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successalert',
  templateUrl: './successalert.component.html',
  // styleUrls: ['./successalert.component.css']
  styles: [`
    .alert-heading { font-weight: 700; }
    .alert { border: solid 1px; }
    `]
})
export class SuccessAlertComponent implements OnInit {

  heading = 'Success';
  bodytext = 'Success!!!!';

  constructor() { }

  ngOnInit(): void {
  }

}
