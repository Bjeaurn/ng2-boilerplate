import { counterReducer } from './module/counter'
import { HttpClient } from '@angular/common/http'
import { HomeComponent } from './module/home.component'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from './shared/shared.module'
import { BaseModule } from './base/base.module'

import { ModuleModule } from './module/module.module'

import { PageNotFoundComponent } from "./shared/pagenotfound.component"
import { StoreModule, ActionReducerMap, State } from '@ngrx/store'
import { StoreConfig } from '@ngrx/store/src/store_module'

const reducers: ActionReducerMap<any> = {
  counter: counterReducer
}

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    BaseModule,
    ModuleModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(reducers, <StoreConfig<any>>{})
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
