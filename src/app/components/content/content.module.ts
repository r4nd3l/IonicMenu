import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentComponentRoutingModule } from './content-routing.module';

import { ContentComponent } from './content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentComponentRoutingModule,
  ],
  declarations: [ContentComponent],
})
export class ContentComponentModule {}
