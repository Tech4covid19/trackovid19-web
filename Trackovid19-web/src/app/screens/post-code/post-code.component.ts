import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/states/user/state/user.service';
import { Router } from '@angular/router';
import { UserQuery } from 'src/app/states/user/state/user.query';
import { UserStore } from 'src/app/states/user/state/user.store';
import { User } from 'src/app/states/user/state/user.model';

@Component({
  selector: 'app-post-code',
  templateUrl: './post-code.component.html',
  styleUrls: ['./post-code.component.scss'],
})
export class PostCodeComponent implements OnInit {
  user: User = null;
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
      this.user = { ...user };
      this.form.controls['birth-year'].setValue(this.user?.year);
      this.form.controls['zip-code-1'].setValue(this.user?.postalcode1);
      this.form.controls['zip-code-2'].setValue(this.user?.postalcode2);
      this.form.controls['covidografia-code'].setValue(this.user?.patientToken);
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

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      console.log(this.form.value);
      this._updateUserData(this.form.value);
      if (this.user?.show_onboarding) {
        this.router.navigate(['/onboarding']);
      } else {
        this.router.navigate(['/dashboard', 'status']);
      }
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

  private addLeadingZeros(number, size) {
    let s = String(number);
    while (s.length < size) {
      s = '0' + s;
    }
    return s;
  }

  public keyPress(event) {
    const pattern = /[a-zA-Z0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  public keyPressNumber(event) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  private _updateUserData(data: any) {
    const userData = {
      year: data['birth-year'],
      postalCode: `${data['zip-code-1']}-${this.addLeadingZeros(data['zip-code-2'], 3)}`,
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
      postalCode: postalcode,
      geo: { lat: latitude, lon: longitude },
    };

    this.userService.updateUserInformation(payload).subscribe();
  }
}
