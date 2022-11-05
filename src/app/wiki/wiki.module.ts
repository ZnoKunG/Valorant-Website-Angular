import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WikiPage } from './wiki.page';
import { WikiContainerComponentModule } from '../wiki-container/wiki-container.module';
import { WikiPageRoutingModule } from './wiki-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    WikiContainerComponentModule,
    WikiPageRoutingModule
  ],
  declarations: [WikiPage]
})
export class WikiPageModule {}
