import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { DashboardComponent } from './heroes/dashboard/dashboard.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { AnimateHeroListComponent } from './heroes/animate-hero-list/animate-hero-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module.ts#AdminModule',
    canLoad: [AuthGuardService]
  },
  {
    path: 'crisis-center',
    loadChildren: 'app/crisis-center/crisis-center.module.ts#CrisisCenterModule',
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
