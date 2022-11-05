import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgentPage } from './agent.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AgentPageRoutingModule } from './agent-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AgentPageRoutingModule
  ],
  declarations: [AgentPage]
})
export class AgentPageModule {}
