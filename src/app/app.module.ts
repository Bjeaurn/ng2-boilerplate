import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from './shared/shared.module'
import { HttpClient } from './shared/http.client'
import { BaseModule } from './base/base.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    SharedModule,
    BaseModule    
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
