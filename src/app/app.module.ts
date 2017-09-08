import { AuthGuardService } from './auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './mock-data/in-memory-data.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 }),
    CrisisCenterModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
