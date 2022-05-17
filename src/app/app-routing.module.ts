import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'all-data', loadChildren:()=>import('./all-data/all-data.module').then(mod=>mod.AllDataModule)
  },
  {
    path: 'navbar', loadChildren:()=>import('./navbar/navbar.module').then(mod=>mod.NavbarModule)
  },
  {
    path: 'sidenav', loadChildren:()=>import('./sidenav/sidenav.module').then(mod=>mod.SidenavModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
