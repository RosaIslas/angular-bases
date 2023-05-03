import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HeroesModule } from './heroes/heores.module';

import { CounterModule } from './contador/components/counter.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
