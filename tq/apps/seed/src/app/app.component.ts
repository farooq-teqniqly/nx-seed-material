import { Component } from '@angular/core';

@Component({
  selector: 'tq-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'seed';
  navItems = [
    {
      link: 'account',
      text: 'Account'
    },
    {
      link: 'dashboard',
      text: 'Dashboard'
    }
  ]
}
