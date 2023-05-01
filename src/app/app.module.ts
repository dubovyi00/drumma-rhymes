import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DrRhythmModule } from './dr55/dr55.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DrRhythmModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    DrRhythmModule
  ]
})
export class AppModule { }
