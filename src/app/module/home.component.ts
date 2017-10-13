import { DECREMENT, INCREMENT, RESET } from './counter'
import {Component} from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'

@Component({
    selector: 'app-home',
    template: `
    <div class="col-md-12">
        <h1>My first module</h1>
        <p>This boilerplate uses the following:</p>
        <ul>
            <li>Bootstrap 3</li>
            <li>Ngx-bootstrap</li>
            <li>NgRx</li>
        </ul>
    </div>
    <div class="col-md-12">
        <h2>@Ngrx: Angular powered by Redux inspired state management</h2>
        <button (click)="increment()" class="btn btn-default">Increment</button>
		<div>Current Count: {{ counter | async }}</div>
		<button (click)="decrement()" class="btn btn-default">Decrement</button>

        <button (click)="reset()" class="btn btn-danger">Reset Counter</button>
    </div>
    `
})
export class HomeComponent {
    counter: Observable<number>

    constructor(private store: Store<any>) {
        this.counter = this.store.select('counter')
    }

    increment() {
        this.store.dispatch({ type: INCREMENT })
    }

    decrement() {
        this.store.dispatch({ type: DECREMENT })
    }

    reset() {
        this.store.dispatch({ type: RESET })
    }
}