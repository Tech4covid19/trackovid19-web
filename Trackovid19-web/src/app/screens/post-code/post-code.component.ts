import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/states/user/state/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-code',
  templateUrl: './post-code.component.html',
  styleUrls: ['./post-code.component.scss'],
})
export class PostCodeComponent implements OnInit {
  public form: FormGroup;

  public submitted = false;

  public opened = true;

  public closing = false;

  public maxYear: number;

  public minYear: number;

  constructor(private userService: UserService, public fb: FormBuilder, private router: Router) {
    this.maxYear = new Date().getFullYear();
    this.minYear = this.maxYear - 120;
  }

  ngOnInit() {
    this.form = this.fb.group({
      'birth-year': [
        null,
        [Validators.required, Validators.min(this.minYear), Validators.max(this.maxYear)],
      ],
      'zip-code-1': [null, Validators.required],
      'zip-code-2': [null, Validators.required],
      'covidografia-code': null,
    });
  }

  public open() {
    setTimeout(() => {
      this.opened = true;
    }, 500);
  }

  public close() {
    // TODO: Emit event
    this.closing = true;
    setTimeout(() => {
      this.opened = false;
      this.closing = false;
    }, 500);
  }

  public onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this._updateUserData(this.form.value);
      this.router.navigate(['/onboarding']);
    }
  }

  public get birthYearControl(): FormControl {
    return this.form.get('birth-year') as FormControl;
  }

  public get zipCode1Control(): FormControl {
    return this.form.get('zip-code-1') as FormControl;
  }

  public get zipCode2Control(): FormControl {
    return this.form.get('zip-code-2') as FormControl;
  }

  public get covidografiaCodeControl(): FormControl {
    return this.form.get('covidografia-code') as FormControl;
  }

  private _updateUserData(data: any) {
    const userData = {
      year: data['birth-year'],
      postalCode: `${data['zip-code-1']}-${data['zip-code-2']}`,
      patientToken: data['covidografia-code'],
    };

    if (!data['covidografia-code']) {
      delete userData.patientToken;
    }

    this.userService.updateUserInformation(userData);
  }
}
