import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuListComponentRoutingModule } from './menu-list-routing.module';

import { MenuListComponent } from './menu-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuListComponentRoutingModule,
  ],
  declarations: [MenuListComponent],
})
export class MenuListComponentModule {}
