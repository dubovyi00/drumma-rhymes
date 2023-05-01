import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from '../app-routing.module'
import { DrRhythmComponent } from './dr55.component'
import { DrRhythmBodyComponent } from './body/body.component'

@NgModule({
  declarations: [
    DrRhythmComponent,
    DrRhythmBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    DrRhythmComponent,
    DrRhythmBodyComponent
  ],
  exports: [
    DrRhythmComponent,
    DrRhythmBodyComponent
  ]
})
export class DrRhythmModule { }
