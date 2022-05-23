import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'details/:level',
        loadChildren: () =>
          import('../content/content.module').then((m) => m.ContentPageModule),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/menu/details/0',
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MenuPage],
})
export class MenuPageModule {}
