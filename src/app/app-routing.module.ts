import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'storelist',
    loadChildren: () => import('./storelist/storelist.module').then( m => m.StorelistPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'storedetails',
    loadChildren: () => import('./storedetails/storedetails.module').then( m => m.StoredetailsPageModule)
  },
  {
    path: 'storedata',
    loadChildren: () => import('./storedata/storedata.module').then( m => m.StoredataPageModule)
  },
  {
    path: 'forgotmodal',
    loadChildren: () => import('./forgotmodal/forgotmodal.module').then( m => m.ForgotmodalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
