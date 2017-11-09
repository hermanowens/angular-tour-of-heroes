import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreditsComponent } from './credits/credits.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';

import { AppRoutingModule } from './app-routing.module';
import { DashPipe } from './pipes/dash.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreditsComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}
