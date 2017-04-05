import {Injectable} from '@angular/core'
import { Http, Response, XHRBackend, RequestOptions } from '@angular/http'

@Injectable()
export class HttpClient extends Http {
    constructor(backend: XHRBackend, options: RequestOptions) {
        options.headers.append('test', 'Test test test')
        super(backend, options)
    }
}