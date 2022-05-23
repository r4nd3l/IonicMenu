import { MenuListComponent } from '../menu-list/menu-list.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  rootComponent = MenuListComponent;

  constructor() {}

  ngOnInit() {}
}
