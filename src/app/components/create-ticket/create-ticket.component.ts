import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-create-ticket',
  templateUrl: 'create-ticket.component.html',
  styleUrls: [ 'create-ticket.component.css', '../../app.shared.styles.css' ]
})
export class CreateTicketComponent implements OnInit {
  healthCheckInProgress = true;
  backendIsHealthy: boolean;

  @Input()
  public backendUrl: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
      .get<boolean>(this.backendUrl + '/api/tickets/validation_rules')
      .map(() => true)
      .catch(() => Observable.of(false))
      .subscribe(health => {
        this.healthCheckInProgress = false;
        this.backendIsHealthy = health;
      });
  }

}
