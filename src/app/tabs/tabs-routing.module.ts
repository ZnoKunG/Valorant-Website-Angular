import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'valorant',
    component: TabsPage,
    children: [
      {
        path: 'agents',
        loadChildren: () => import('../agent/agent.module').then(m => m.AgentPageModule)
      },
      {
        path: 'weapons',
        loadChildren: () => import('../weapon/weapon.module').then(m => m.WeaponPageModule)
      },
      {
        path: 'wiki',
        loadChildren: () => import('../wiki/wiki.module').then(m => m.WikiPageModule)
      },
      {
        path: '',
        redirectTo: '/valorant/agents',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/valorant/agents',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
