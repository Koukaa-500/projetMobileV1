import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {path:'appareils',
    loadChildren:() => import('../appareils/appareils.module').then( m => m.AppareilsPageModule)},
    {
      path:'settings',
    loadChildren:() => import('../settings/settings.module').then( m => m.SettingsPageModule)
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
