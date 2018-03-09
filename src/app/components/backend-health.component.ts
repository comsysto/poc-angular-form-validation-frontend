import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-backend-health',
  templateUrl: 'backend-health.component.html',
  styleUrls: [ 'backend-health.component.css' ]
})
export class BackendHealthComponent implements OnInit {

  healthCheckInProgress = true;
  backendIsHealthy: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
      .get<boolean>('https://poc-angular-form-validation.herokuapp.com/api/greetings')
      .map(() => true)
      .catch(() => Observable.of(false))
      .subscribe(health => {
        this.healthCheckInProgress = false;
        this.backendIsHealthy = health;
      });
  }

}
