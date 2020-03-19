import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

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

  constructor(public fb: FormBuilder) {
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
    console.log('aaaa', this.birthYearControl.errors);
    if (this.form.valid) {
      this._updateUserData(this.form.value);
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
    console.log('_updateUserData', data);
  }
}
