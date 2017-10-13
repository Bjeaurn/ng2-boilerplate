import { SharedModule } from '../shared/shared.module'
import { counterReducer } from './counter'
import { NgModule } from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {HomeComponent} from './home.component'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

const moduleRoutes: Routes = [
    { path: 'home', component: HomeComponent,
        children: [
            { path: '', component: HomeComponent }
        ]
    },
]
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(moduleRoutes),
        StoreModule.forRoot({ counter: counterReducer }),
        StoreDevtoolsModule.instrument({
            maxAge: 25 //  Retains last 25 states
          })
      
    ],
    declarations: [
        HomeComponent
    ],
    exports: [],
    providers: []
})
export class ModuleModule {}