import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'appareils',
    loadChildren:() => import('./pages/appareils/appareils.module').then( m => m.AppareilsPageModule)
  },
  {
    path: 'single-appareil',
    loadChildren: () => import('./pages/single-appareil/single-appareil.module').then( m => m.SingleAppareilPageModule)
  },
  {
    path: 'appareils',
    loadChildren: () => import('./pages/appareils/appareils.module').then( m => m.AppareilsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
