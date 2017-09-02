import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateHeroListComponent } from './animate-hero-list/animate-hero-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './service/hero.service';
import { HeroesRoutingModule } from './heroes-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesRoutingModule
  ],
  declarations: [
    AnimateHeroListComponent,
    DashboardComponent,
    HeroListComponent,
    HeroDetailComponent
  ],
  providers: [HeroService]
})
export class HeroesModule { }
