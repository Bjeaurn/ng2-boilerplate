import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {HomeComponent} from './home.component'
const moduleRoutes: Routes = [
    { path: 'home', component: HomeComponent,
        children: [
            { path: '', component: HomeComponent }
        ]
    },
]
@NgModule({
    imports: [
        RouterModule.forRoot(moduleRoutes)
    ],
    declarations: [
        HomeComponent
    ],
    exports: [],
    providers: []
})
export class ModuleModule {}