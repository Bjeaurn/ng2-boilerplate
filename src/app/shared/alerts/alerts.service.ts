import {Injectable} from '@angular/core'
import {Subject} from 'rxjs'

export type Alert = {
    title: string
    type?: AlertType
    timeout?: number
}

export type AlertType = "danger" | "info" | "success" | "warning"

@Injectable()
export class AlertsService {
    private alertsSubject: Subject<Alert[]> = new Subject<Alert[]>()

    private alerts: Alert[] = []

    constructor() {}

    alert(title: string, type?: AlertType, timeout?: number) {
        let alert = <Alert>{
            title: title,
        }
        if(type) {
            alert.type = type
        } else {
            alert.type = "info"
        }

        if(timeout) {
            alert.timeout = timeout
        }
        this.alerts.push(alert)
        this.alertsSubject.next(this.alerts)
    }

    getAlerts() {
        return this.alertsSubject.asObservable()
    }
}