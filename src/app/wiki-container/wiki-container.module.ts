import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WikiContainerComponent } from './wiki-container.component';


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [WikiContainerComponent],
  exports: [WikiContainerComponent]
})
export class WikiContainerComponentModule { }
