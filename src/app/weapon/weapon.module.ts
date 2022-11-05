import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeaponPage } from './weapon.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { WeaponPageRoutingModule } from './weapon-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    WeaponPageRoutingModule
  ],
  declarations: [WeaponPage]
})
export class WeaponPageModule {}
