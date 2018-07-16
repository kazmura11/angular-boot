import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { HeroesComponent } from './pages/heroes/heroes.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
