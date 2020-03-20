import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/states/user/state/user.service';
import { Router } from '@angular/router';
import { UserQuery } from 'src/app/states/user/state/user.query';
import { UserStore, UserState } from 'src/app/states/user/state/user.store';
import { User } from 'src/app/states/user/state/user.model';

@Component({
  selector: 'app-post-code',
  templateUrl: './post-code.component.html',
  styleUrls: ['./post-code.component.scss'],
})
export class PostCodeComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  opened = true;
  closing = false;
  maxYear: number;
  minYear: number;

  constructor(
    private userService: UserService,
    public fb: FormBuilder,
    private router: Router,
    private query: UserQuery,
    private store: UserStore,
  ) {
    this.maxYear = new Date().getFullYear();
    this.minYear = this.maxYear - 120;
  }

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      if (user && user.postalcode && user.postalcode !== '0000-000') {
        // this.router.navigate(['/dashboard/status']);
        this.router.navigate(['/onboarding']);
      }
    });
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

  open() {
    setTimeout(() => {
      this.opened = true;
    }, 500);
  }

  close() {
    // TODO: Emit event
    this.closing = true;
    setTimeout(() => {
      this.opened = false;
      this.closing = false;
    }, 500);
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      console.log(this.form.value);
      this._updateUserData(this.form.value);
      this.router.navigate(['/onboarding']);
    }
  }

  get birthYearControl(): FormControl {
    return this.form.get('birth-year') as FormControl;
  }

  get zipCode1Control(): FormControl {
    return this.form.get('zip-code-1') as FormControl;
  }

  get zipCode2Control(): FormControl {
    return this.form.get('zip-code-2') as FormControl;
  }

  get covidografiaCodeControl(): FormControl {
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
    this.store.updateActive((state: User) => {
      (state.postalcode = userData.postalCode), (state.year = userData.year);
    });
    const id = this.query.getActiveId();
    const currentUser: User = this.query.getEntity(id);
    const { year, info, latitude, longitude, patientToken, postalcode } = currentUser;
    const payload = {
      year,
      info,
      patientToken,
      postalcode,
      geo: { lat: latitude, lon: longitude },
    };

    this.userService.updateUserInformation(payload).subscribe();
  }
}
