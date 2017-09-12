import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { AuthGuardService } from '../auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuardService],
        children: [
          {
            path: 'crises',
            component: ManageCrisesComponent
          },
          {
            path: 'heroes',
            component: ManageHeroesComponent
          },
          {
            path: '',
            component: AdminDashboardComponent
          }
        ]
      }
    ],

  }]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
