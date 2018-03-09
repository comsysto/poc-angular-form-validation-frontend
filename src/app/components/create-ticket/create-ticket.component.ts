import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import { FieldValidationRule, ValidationRulePattern, ValidationRuleMinMaxLength } from '../../model/api.model';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs/Subject';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-create-ticket',
  templateUrl: 'create-ticket.component.html',
  styleUrls: [ 'create-ticket.component.css', '../../app.shared.styles.css' ]
})
export class CreateTicketComponent implements OnInit, OnDestroy {

  preDestroy = new Subject<boolean>();
  form: FormGroup;
  initFormError = false;
  validationRules: FieldValidationRule[];

  @Input()
  public backendUrl: string;

  constructor(private http: HttpClient,
              private translate: TranslateService) { }

  ngOnInit() {
    this.initForm(this.translate.currentLang);
    this.translate
      .onLangChange
      .takeUntil(this.preDestroy)
      .subscribe(change => {
        this.initForm(change.lang);
      })
  }

  ngOnDestroy() {
    this.preDestroy.next(true);
    this.preDestroy.complete();
  }

  initForm(lang: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept-Language': lang
      })
    };
    this.http
      .get<FieldValidationRule[]>(this.backendUrl + '/api/tickets/validation_rules', httpOptions)
      .catch(() => {
        this.initFormError = true;
        // Stop propagating further!
        return Observable.empty();
      })
      .subscribe(fieldValidationRules => {
        this.validationRules = fieldValidationRules as FieldValidationRule[];
        this.initFormGroup();
      });
  }

  initFormGroup() {
    this.form = new FormGroup({
      id: new FormControl('', this.buildValidatorsForField('id')),
      summary: new FormControl('', this.buildValidatorsForField('summary')),
      description: new FormControl('', this.buildValidatorsForField('summary')),
      reporter: new FormControl('', this.buildValidatorsForField('reporter')),
    })
  }

  buildValidatorsForField(field: string): ValidatorFn[] {
    const fieldRule: FieldValidationRule = this.validationRules.find(r => r.field === field);
    const validatorFnArray: ValidatorFn[] = [];
    for (let validationRule of fieldRule.validations) {
      if (validationRule.type === 'pattern') {
        const patternRule = validationRule as ValidationRulePattern;
        validatorFnArray.push(Validators.pattern(patternRule.pattern));
      }
      if (validationRule.type === 'minLength') {
        const minRule = validationRule as ValidationRuleMinMaxLength;
        validatorFnArray.push(Validators.minLength(minRule.length));
      }
      if (validationRule.type === 'maxLength') {
        const maxRule = validationRule as ValidationRuleMinMaxLength;
        validatorFnArray.push(Validators.maxLength(maxRule.length));
      }
      if (validationRule.type === 'required') {
        validatorFnArray.push(Validators.required);
      }
    }
    return validatorFnArray;
  }

  displayErrors(field: string): string {
    const errors = this.form.controls[field].errors;
    let errorString = '';
    if (!isNullOrUndefined(errors)) {
      const errorKeys = Object.keys(errors);
      for (let errorKey of errorKeys) {
        const rule = this.validationRules.find(r => r.field === field)
        errorString = errorString + rule.validations.find(v => v.type === errorKey).message + ' ';
      }
    }
    return errorString;
  }
}
