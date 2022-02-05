import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'radicados',
    loadChildren: () => import('./entities/radicados/radicados.module').then( m => m.RadicadosPageModule)
  },
  {
    path: 'reclamos',
    loadChildren: () => import('./entities/reclamos/reclamos.module').then( m => m.ReclamosPageModule)
  },
  {
    path: 'respuestas',
    loadChildren: () => import('./entities/respuestas/respuestas.module').then( m => m.RespuestasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
