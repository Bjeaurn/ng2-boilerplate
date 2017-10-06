import {Component} from '@angular/core'

@Component({
    selector: 'app-home',
    template: `
        <h1>My first module</h1>
        <p>This boilerplate uses the following:</p>
        <ul>
            <li>Bootstrap 3</li>
            <li>Ngx-bootstrap</li>
            <li>@ngrx/store (Redux inspired statemanagement for Angular with RxJS</li>
        </ul>
    `
})
export class HomeComponent {}