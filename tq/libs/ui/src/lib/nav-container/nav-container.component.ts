import { Component, Input } from '@angular/core';
import { NavItem } from './nav-item';

@Component({
  selector: 'tq-nav-container',
  templateUrl: './nav-container.component.html',
  styleUrls: ['./nav-container.component.css']
})
export class NavContainerComponent {
  @Input()
  navItems: NavItem[];
}
